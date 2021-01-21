import React, { useState } from 'react'
import CiSideBar from './CiSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/ciCard.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function AssignAcToCourse() {
  const [staffId, setStaffId] = useState('')
  const [courseCode, setCourseCode] = useState('')

  const [message, setMessage] = useState('')

  const staffIdChange = (event) => {
    console.log(event.target.value)
    setStaffId(event.target.value)
  }
  const courseCodeChange = (event) => {
    console.log(event.target.value)
    setCourseCode(event.target.value)
  }

  const token = useSelector((state) => state.token)

  const assignAcToCourse = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/courseInstructor/assignmentAcademicToCourse`,
      method: 'post',
      headers: { authorization: token },
      data: {
        staffId,
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
        setMessage('assigned successfully!')
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
              style={{ marginLeft: '7vw' }}
            >
              Assign To Course
            </Card.Text>

            <Form>
              <Form.Group>
                <Form.Label className='ciLabelStyle'>Staff Id:</Form.Label>
                <Form.Control
                  className='ciFormStyle'
                  type='text'
                  placeholder='Enter staff id'
                  onChange={(event) => staffIdChange(event)}
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
              onClick={(event) => assignAcToCourse(event)}
              style={{ marginTop: '-0.01vw' }}
            >
              {' '}
              Assign{' '}
            </Button>

            {message === 'assigned successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '24vw' }}
              >
                assigned successfully!
              </Form.Text>
            ) : message === '"staffId" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '25vw' }}
              >
                staff Id is required!
              </Form.Text>
            ) : message === '"courseCode" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '24vw' }}
              >
                courseCode is required!
              </Form.Text>
            ) : message === 'staff does not exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '24vw' }}
              >
                staff does not exist!
              </Form.Text>
            ) : message === 'course does not exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                course does not exist!
              </Form.Text>
            ) : message === 'you are not an instructor for this course' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                you are not an instructor for this course!
              </Form.Text>
            ) : message === 'staff already assigned to this course' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '19vw' }}
              >
                staff already assigned to this course!
              </Form.Text>
            ) : message === 'Staff is not a TA' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                Staff is not a TA!
              </Form.Text>
            ) : message ===
              'course does not exist in the department of the staff' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '16vw' }}
              >
                course does not exist in the department of the staff!
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
