import React, { useState } from 'react'
import HrSideBar from './HrSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/addLocation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function AddCourse() {
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [creditHours, setCreditHours] = useState('')
  const [departmentName, setDepartmentName] = useState('')
  
  const [message, setMessage] = useState('')

  const nameChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  const codeChange = (event) => {
    console.log(event.target.value)
    setCode(event.target.value)
  }
  const creditHoursChange = (event) => {
    console.log(event.target.value)
    setCreditHours(event.target.value)
  }
  const departmentNameChange = (event) => {
    console.log(event.target.value)
    setDepartmentName(event.target.value)
  }
  const token = useSelector((state) => state.token)

  const addCourse = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/hr/addCourse`,
      method: 'post',
      headers: { authorization: token },
      data: {
        name,
        code,
        creditHours,
        departmentName,
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
        setMessage('course added successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }

  return (
    <React.Fragment>
      <div>
        <HrSideBar> </HrSideBar>

        
        <Card className='addLocationCard' style={{ height: '39.5vw' }}>
          <Card.Body>
            <Card.Text className='cardTitleStyle'>Add Course</Card.Text>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group>
                <Form.Label className='locLabelStyle'>Course Name:</Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter course name'
                  onChange={(event) => nameChange(event)}
                />
              </Form.Group>
            </Form>
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
                  Course Credit Hours:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter course credit hours'
                  onChange={(event) => creditHoursChange(event)}
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
              onClick={(event) => addCourse(event)}
              style={{ marginTop: '-0.01vw' }}
            >
              {' '}
              Add{' '}
            </Button>

            {message === 'course added successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                course added successfully!
              </Form.Text>
            ) : message === '"name" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                Course name is required!
              </Form.Text>
            ) : message === '"code" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                Course code is required!
              </Form.Text>
            ) : message === '"creditHours" must be a number' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '15vw' }}
              >
                Credit hours is required and must be a number!
              </Form.Text>
            ) : message === '"departmentName" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                departmentName is required!
              </Form.Text>
            ) : message == 'Course already in the department!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '20vw' }}
              >
                course already exist in this department!
              </Form.Text>
            ) : message === 'Department DoesNot Exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                department does not exist!
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
