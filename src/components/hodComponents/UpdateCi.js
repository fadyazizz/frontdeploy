import React, { useState } from 'react'
import HodSideBar from './HodSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/hodCards.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function UpdateCi() {
  const [courseInstId, setCourseInstId] = useState('')
  const [courseCode, setCourseCode] = useState('')

  const [message, setMessage] = useState('')

  const courseInstIdChange = (event) => {
    console.log(event.target.value)
    setCourseInstId(event.target.value)
  }
  const courseCodeChange = (event) => {
    console.log(event.target.value)
    setCourseCode(event.target.value)
  }

  const token = useSelector((state) => state.token)

  const updateCourseInst = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/hod/updateCourseInstructor`,
      method: 'put',
      headers: { authorization: token },
      data: {
        courseInstId,
        courseCode,
      },
    }).then((res) => {
      const error = res.data.error
      console.log(res.data)
      if (error) {
        console.log(res.data.error)
        setMessage(res.data.error)
        //setJoiMessage(res.data.statusCode)
        // setError(res.data.statuscode)
        // console.log(res.data.statuscode)
        return
      } else {
        // console.log(res.data.location)
        setMessage('course inst updated successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }
  return (
    <React.Fragment>
      <div>
        <HodSideBar> </HodSideBar>
        <Card className='hodCard' style={{ height: '26vw' }}>
          <Card.Body>
            <Card.Text
              className='hodcardTitleStyle'
              style={{ marginLeft: '6vw' }}
            >
              Update Course Instructor
            </Card.Text>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group>
                <Form.Label className='hodLabelStyle'>
                  Course Instructor Id:
                </Form.Label>
                <Form.Control
                  className='hodFormStyle'
                  type='text'
                  placeholder='Enter course instructor id'
                  onChange={(event) => courseInstIdChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='hodLabelStyle'>Course Code:</Form.Label>
                <Form.Control
                  className='hodFormStyle'
                  type='text'
                  placeholder='Enter course code'
                  onChange={(event) => courseCodeChange(event)}
                />
              </Form.Group>
            </Form>

            <Button
              variant='light'
              type='submit'
              className='addButtonHodStyle'
              onClick={(event) => updateCourseInst(event)}
              style={{ marginTop: '0.5vw' }}
            >
              {' '}
              Update{' '}
            </Button>

            {message === 'course inst updated successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '20vw' }}
              >
                course instructor updated successfully!
              </Form.Text>
            ) : message === '"courseInstId" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                Course instructor Id is required!
              </Form.Text>
            ) : message === '"courseCode" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '23vw' }}
              >
                Course code is required!
              </Form.Text>
            ) : message === 'course does not exist in the department of HOD' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '17vw' }}
              >
                You dont have this course!
              </Form.Text>
            ) : message === 'Academic Member does not exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                course instructor does not exist!
              </Form.Text>
            ) : message === 'not a courseInstructor' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '25vw' }}
              >
                Not a course instructor!
              </Form.Text>
            ) : (
              ''
            )}
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  )
}
