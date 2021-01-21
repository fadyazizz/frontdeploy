import React, { useState } from 'react'
import HrSideBar from './HrSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/addLocation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function UpdateStaff() {
  const [id, setId] = useState('')
  const [name, setName] = useState(undefined)
  const [salary, setSalary] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [dayoff, setDayOff] = useState(undefined)
  const [departmentName, setDepartmentName] = useState(undefined)

  
  const [message, setMessage] = useState('')

  const idChange = (event) => {
    console.log(event.target.value)
    setId(event.target.value)
  }
  const nameChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  const salaryChange = (event) => {
    console.log(event.target.value)
    setSalary(event.target.value)
  }
  const emailChange = (event) => {
    console.log(event.target.value)
    setEmail(event.target.value)
  }
  const dayoffChange = (event) => {
    console.log(event.target.value)
    setDayOff(event.target.value)
  }
  const departmentNameChange = (event) => {
    console.log(event.target.value)
    setDepartmentName(event.target.value)
  }
  const token = useSelector((state) => state.token)

  const updateStaff = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/hr/updateStaffMember`,
      method: 'put',
      headers: { authorization: token },
      data: {
        id,
        name,
        email,
        salary,
        dayoff,
        departmentName,
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
        setMessage('staff updated successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }

  return (
    <React.Fragment>
      <div>
        <HrSideBar> </HrSideBar>
        <Card className='addLocationCard' style={{ height: '48vw' }}>
          <Card.Body>
            <Card.Text className='cardTitleStyle'>Update Staff</Card.Text>
            <Form style={{ marginTop: '-1vw' }}>
              <Form.Group>
                <Form.Label className='locLabelStyle'>Id:</Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter staff id'
                  onChange={(event) => idChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '-1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>Updated Name:</Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter updated name'
                  onChange={(event) => nameChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '-1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>Update Email:</Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter updated email'
                  onChange={(event) => emailChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '-1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>
                  Update Salary:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter updated salary'
                  onChange={(event) => salaryChange(event)}
                />
              </Form.Group>
            </Form>
            <Form.Group controlId='formGridState' style={{ marginTop: '-1vw' }}>
              <Form.Label className='locLabelStyle'>Update Dayoff:</Form.Label>
              <Form.Control
                as='select'
                defaultValue='...'
                className='locFormStyle'
                onChange={(event) => dayoffChange(event)}
              >
                <option>...</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </Form.Control>
            </Form.Group>
            <Form style={{ marginTop: '-1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>
                  Update Department Name:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter updated department name'
                  onChange={(event) => departmentNameChange(event)}
                />
              </Form.Group>
            </Form>
            <Button
              variant='light'
              type='submit'
              className='addButtonStyle'
              onClick={(event) => updateStaff(event)}
              style={{ marginTop: '0.5vw' }}
            >
              {' '}
              Update{' '}
            </Button>

            {message === 'staff updated successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '24vw' }}
              >
                staff updated successfully!
              </Form.Text>
            ) : message === '"id" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                Id is required!
              </Form.Text>
            ) : message === 'staff not found' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                Staff id does not exist!
              </Form.Text>
            ) : message == 'dayoff cant be changed ' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '24vw' }}
              >
                dayoff cant be changed!
              </Form.Text>
            ) : message == '"salary" must be a number' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '24vw' }}
              >
                salary must be a number!
              </Form.Text>
            ) : message == 'department does not exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '23vw' }}
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
