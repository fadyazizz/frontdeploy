import React, { useState } from 'react'
import CiSideBar from './CiSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/ciCard.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function RemoveAcFromCourse() {
  const [academicMemberId, setAcId] = useState('')
  const [courseCode, setCourseCode] = useState('')

  const [message, setMessage] = useState('')

  const academicMemberIdChange = (event) => {
    console.log(event.target.value)
    setAcId(event.target.value)
  }
  const courseCodeChange = (event) => {
    console.log(event.target.value)
    setCourseCode(event.target.value)
  }

  const token = useSelector((state) => state.token)

  const removeAcFromCourse = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/courseInstructor/removeAcademicMember`,
      method: 'delete',
      headers: { authorization: token },
      data: {
        academicMemberId,
        courseCode,
      },
    }).then((res) => {
      const error = res.data.error
      console.log(res.data)
      if (error) {
        // console.log(res.data.error)
        setMessage(res.data.error)

        //setJoiMessage(res.data.statusCode)
        // setError(res.data.statuscode)
        // console.log(res.data.statuscode)
        return
      } else {
        // console.log(res.data.location)
        setMessage('deleted successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }
  return (
    <React.Fragment>
      <div>
        <CiSideBar> </CiSideBar>
        <Card className='ciCard' style={{ height: '26vw' }}>
          <Card.Body>
            <Card.Text
              className='cicardTitleStyle'
              style={{ marginLeft: '6vw' }}
            >
              Remove From Course
            </Card.Text>

            <Form>
              <Form.Group>
                <Form.Label className='ciLabelStyle'>
                  Academic Member Id:
                </Form.Label>
                <Form.Control
                  className='ciFormStyle'
                  type='text'
                  placeholder='Enter academic member id'
                  onChange={(event) => academicMemberIdChange(event)}
                />
              </Form.Group>
            </Form>
            <Form>
              <Form.Group>
                <Form.Label className='ciLabelStyle'>Course Code:</Form.Label>
                <Form.Control
                  className='ciFormStyle'
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
              onClick={(event) => removeAcFromCourse(event)}
              style={{ marginTop: '-0.01vw' }}
            >
              {' '}
              Remove{' '}
            </Button>

            {message === 'deleted successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '20vw' }}
              >
                removed successfully!
              </Form.Text>
            ) : message === '"academicMemberId" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                academic member Id is required!
              </Form.Text>
            ) : message === '"courseCode" is not allowed to be empty' ||
            message ===
                '"typeOfSlot" must be one of [lab, tutorial, lecture]' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '24vw' }}
              >
                courseCode is required!
              </Form.Text>
            ) : message === 'course Instructor does not have this course' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '17vw' }}
              >
                you dont teach this course!
              </Form.Text>
            ) : message === 'Academic member does not have this course' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                academic member does not have this course!
              </Form.Text>
            ) : message === 'Academic member does not exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                academic member does not exist!
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
