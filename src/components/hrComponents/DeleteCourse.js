import React, { useState } from 'react'
import HrSideBar from './HrSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/addLocation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function DeleteCourse() {
  const [code, setCode] = useState('')
  const [departmentName, setDepartmentName] = useState('')

  const [message, setMessage] = useState('')

  const codeChange = (event) => {
    console.log(event.target.value)
    setCode(event.target.value)
  }
  const departmentNameChange = (event) => {
    console.log(event.target.value)
    setDepartmentName(event.target.value)
  }
  const token = useSelector((state) => state.token)

  const deleteCourse = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/hr/deleteCourse`,
      method: 'delete',
      headers: { authorization: token },
      data: {
        code,
        departmentName,
      },
    }).then((res) => {
      const error = res.data.error
      if (error) {
        console.log(error)
        setMessage(error)
        //setJoiMessage(res.data.statusCode)
        // setError(res.data.statuscode)
        // console.log(res.data.statuscode)
        return
      } else {
        // console.log(res.data.location)
        setMessage('course deleted successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }
  return (
    <React.Fragment>
      <div>
        <HrSideBar> </HrSideBar>
        <Card className='addLocationCard' style={{ height: '25.5vw' }}>
          <Card.Body>
            <Card.Text className='cardTitleStyle'>Delete Course</Card.Text>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group>
                <Form.Label className='locLabelStyle'>Course Code:</Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter course code'
                  onChange={(event) => codeChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group>
                <Form.Label className='locLabelStyle'>
                  Department Name:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter department name'
                  onChange={(event) => departmentNameChange(event)}
                />
              </Form.Group>
            </Form>

            <Button
              variant='light'
              type='submit'
              className='addButtonStyle'
              onClick={(event) => deleteCourse(event)}
              style={{ marginTop: '0.5vw' }}
            >
              {' '}
              Delete{' '}
            </Button>

            {message == 'course deleted successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                course deleted successfully!
              </Form.Text>
            ) : message == '"code" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '24vw' }}
              >
                course code is required!
              </Form.Text>
            ) : message == '"departmentName" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                department name is required!
              </Form.Text>
            ) : message == 'Department DoesNot Exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                department does not exist!
              </Form.Text>
            ) : message == 'Course Is Not in the department!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '18vw' }}
              >
                course is not in the department!
              </Form.Text>
            ) : message == 'Course doesnot exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                course does not exist!
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
