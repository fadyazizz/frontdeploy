import React, { useState } from 'react'
import HrSideBar from './HrSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/addLocation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function AddStaff() {
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [email, setEmail] = useState('')
  const [salary, setSalary] = useState('')
  const [locationName, setLocationName] = useState('')
  const [role, setRole] = useState('')
  const [roleOfAcademicMember, setRoleOfAcademicMember] = useState(undefined)
  const [dayoff, setDayOff] = useState(undefined)
  const [departmentName, setDepartmentName] = useState('')


  const [message, setMessage] = useState('')

  const nameChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  const genderChange = (event) => {
    console.log(event.target.value)
    setGender(event.target.value)
  }
  const emailChange = (event) => {
    console.log(event.target.value)
    setEmail(event.target.value)
  }
  const salaryChange = (event) => {
    console.log(event.target.value)
    setSalary(event.target.value)
  }
  const locationChange = (event) => {
    console.log(event.target.value)
    setLocationName(event.target.value)
  }
  const roleChange = (event) => {
    console.log(event.target.value)
    setRole(event.target.value)
  }
  const roleOfAcademicMemberChange = (event) => {
    console.log(event.target.value)
    setRoleOfAcademicMember(event.target.value)
  }
  const dayOffChange = (event) => {
    console.log(event.target.value)
    setDayOff(event.target.value)
  }
  const departmentNameChange = (event) => {
    console.log(event.target.value)
    setDepartmentName(event.target.value)
  }
  const token = useSelector((state) => state.token)

  const addStaff = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/hr/addNewStaffMember`,
      method: 'post',
      headers: { authorization: token },
      data: {
        name,
        gender,
        email,
        salary,
        locationName,
        role,
        roleOfAcademicMember,
        dayoff,
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
        setMessage('staff added successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }

  return (
    <React.Fragment>
      <div>
        <HrSideBar> </HrSideBar>
        <Card
          className='addLocationCard'
          style={{ width: '40vw', height: '42vw', marginTop: '-43vw' }}
        >
          <Card.Body>
            <Card.Text
              className='cardTitleStyle'
              style={{ marginLeft: '12vw' }}
            >
              Add Staff
            </Card.Text>
            <table>
              <tbody>
                <tr>
                  <td style={{ paddingLeft: '0.5vw' }}>
                    <Form>
                      <Form.Group>
                        <Form.Label className='locLabelStyle'>Name:</Form.Label>
                        <Form.Control
                          className='locFormStyle'
                          type='text'
                          placeholder='Enter name'
                          onChange={(event) => nameChange(event)}
                        />
                      </Form.Group>
                    </Form>
                  </td>
                  <td style={{ paddingLeft: '2vw' }}>
                    <Form>
                      <Form.Group controlId='formGridState'>
                        <Form.Label className='locLabelStyle'>
                          Gender:
                        </Form.Label>
                        <Form.Control
                          as='select'
                          defaultValue='...'
                          className='locFormStyle'
                          onChange={(event) => genderChange(event)}
                        >
                          <option>...</option>
                          <option>male</option>
                          <option>female</option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </td>
                </tr>

                <tr>
                  <td style={{ paddingLeft: '0.5vw' }}>
                    <Form>
                      <Form.Group>
                        <Form.Label className='locLabelStyle'>
                          Email:
                        </Form.Label>
                        <Form.Control
                          className='locFormStyle'
                          type='text'
                          placeholder='Enter email'
                          onChange={(event) => emailChange(event)}
                        />
                      </Form.Group>
                    </Form>
                  </td>
                  <td style={{ paddingLeft: '2vw' }}>
                    <Form>
                      <Form.Group controlId='formBasicEmail'>
                        <Form.Label className='locLabelStyle'>
                          Salary:{' '}
                        </Form.Label>
                        <Form.Control
                          className='locFormStyle'
                          type='text'
                          placeholder='Enter salary'
                          onChange={(event) => salaryChange(event)}
                        />
                      </Form.Group>
                    </Form>
                  </td>
                </tr>

                <tr>
                  <td style={{ paddingLeft: '0.5vw' }}>
                    <Form>
                      <Form.Group>
                        <Form.Label className='locLabelStyle'>
                          Location Name:
                        </Form.Label>
                        <Form.Control
                          className='locFormStyle'
                          type='text'
                          placeholder='Enter location name'
                          onChange={(event) => locationChange(event)}
                        />
                      </Form.Group>
                    </Form>
                  </td>
                  <td style={{ paddingLeft: '2vw' }}>
                    <Form>
                      <Form.Group controlId='formGridState'>
                        <Form.Label className='locLabelStyle'>Role:</Form.Label>
                        <Form.Control
                          as='select'
                          defaultValue='...'
                          className='locFormStyle'
                          onChange={(event) => roleChange(event)}
                        >
                          <option>...</option>
                          <option>AcademicMember</option>
                          <option>HR</option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </td>
                </tr>

                <tr>
                  <td style={{ paddingLeft: '0.5vw' }}>
                    <Form>
                      <Form.Group controlId='formGridState'>
                        <Form.Label className='locLabelStyle'>
                          Role Of AcademicMember:
                        </Form.Label>
                        <Form.Control
                          as='select'
                          defaultValue='...'
                          className='locFormStyle'
                          onChange={(event) =>
                            roleOfAcademicMemberChange(event)
                          }
                          style={{ width: '20vw' }}
                        >
                          <option>...</option>
                          <option>HeadOfDepartment</option>
                          <option>CourseCoordinator</option>
                          <option>CourseInstructor</option>
                          <option>TA</option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </td>
                  <td style={{ paddingLeft: '2vw' }}>
                    <Form>
                      <Form.Group controlId='formGridState'>
                        <Form.Label className='locLabelStyle'>
                          Dayoff:
                        </Form.Label>
                        <Form.Control
                          as='select'
                          defaultValue='...'
                          className='locFormStyle'
                          onChange={(event) => dayOffChange(event)}
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
                    </Form>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form>
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
                  </td>
                  <td>
                    <Button
                      variant='light'
                      type='submit'
                      className='addButtonStyle'
                      onClick={(event) => addStaff(event)}
                      style={{ marginLeft: '10vw', marginTop: '-0.05vw' }}
                    >
                      {' '}
                      Add{' '}
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>

            {message === 'staff added successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw', marginTop: '-2vw' }}
              >
                staff added successfully!
              </Form.Text>
            ) : message === '"name" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '26vw', marginTop: '-2vw' }}
              >
                name is required!
              </Form.Text>
            ) : message === '"gender" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '26vw', marginTop: '-2vw' }}
              >
                gender is required!
              </Form.Text>
            ) : message === '"email" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '26vw', marginTop: '-2vw' }}
              >
                email is required!
              </Form.Text>
            ) : message === '"salary" must be a number' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-2vw', marginLeft: '24vw' }}
              >
                salary is required and must be a number!
              </Form.Text>
            ) : message === '"locationName" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '24vw', marginTop: '-2vw' }}
              >
                location is required!
              </Form.Text>
            ) : message === '"role" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '26vw', marginTop: '-2vw' }}
              >
                role is required!
              </Form.Text>
            ) : message === '"departmentName" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '25vw', marginTop: '-2vw' }}
              >
                department name is required!
              </Form.Text>
            ) : message == 'Emails should be unique!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '25vw', marginTop: '-2vw' }}
              >
                email already exist!
              </Form.Text>
            ) : message === 'location not found' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '26vw', marginTop: '-2vw' }}
              >
                location does not exist!
              </Form.Text>
            ) : message === 'full office capacity' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '24vw', marginTop: '-2vw' }}
              >
                full office capacity!
              </Form.Text>
            ) : message === 'department does not exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '24vw', marginTop: '-2vw' }}
              >
                department does not exist!
              </Form.Text>
            ) : message === 'hr does not have department' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '24vw', marginTop: '-2vw' }}
              >
                hr does not have department!
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
