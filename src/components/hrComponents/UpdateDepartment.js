import React, { useState } from 'react'
import HrSideBar from './HrSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/addLocation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function UpdateDepartment() {
  const [name, setDepartmentName] = useState('')
  const [UpdateddepName, setUpdatedName] = useState(undefined)
  const [facultyName, setFacultyName] = useState(undefined)
  const [headOfDepartmentId, setHODId] = useState(undefined)

  
  const [message, setMessage] = useState('')

  const departmentNameChange = (event) => {
    console.log(event.target.value)
    setDepartmentName(event.target.value)
  }
  const updatedNameChange = (event) => {
    console.log(event.target.value)
    setUpdatedName(event.target.value)
  }
  const facultyNameChange = (event) => {
    console.log(event.target.value)
    setFacultyName(event.target.value)
  }
  const hodChange = (event) => {
    console.log(event.target.value)
    setHODId(event.target.value)
  }
  

  const token = useSelector((state) => state.token)

  const updateDepartment = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/hr/updateDepartment`,
      method: 'put',
      headers: { authorization: token },
      data: {
        name,
        UpdateddepName,
        facultyName,
        headOfDepartmentId,
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
        setMessage('department updated successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }
  return (
    <React.Fragment>
      <div>
        <HrSideBar> </HrSideBar>
        <Card className='addLocationCard' style={{ height: '39vw' }}>
          <Card.Body>
            <Card.Text className='cardTitleStyle'>Update Department</Card.Text>
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
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>
                  Updated Department Name:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter updated department name'
                  onChange={(event) => updatedNameChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>Faculty Name:</Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter faculty name'
                  onChange={(event) => facultyNameChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>
                  Head Of Department Id:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter head of department id'
                  onChange={(event) => hodChange(event)}
                />
              </Form.Group>
            </Form>
            

            <Button
              variant='light'
              type='submit'
              className='addButtonStyle'
              onClick={(event) => updateDepartment(event)}
              style={{ marginTop: '0.5vw' }}
            >
              {' '}
              Update{' '}
            </Button>

            {message === 'department updated successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                department updated successfully!
              </Form.Text>
            ) : message === '"name" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                department name is required!
              </Form.Text>
            ) : message === 'FACULTY DOESNOT EXIST' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                Faculty does not exist!
              </Form.Text>
            ) : message === 'Cant assign HR as headoddepartment  ! ' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                HR cant be HOD!
              </Form.Text>
            ) : message === 'Staff not found for hod' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                staff not found for hod!
              </Form.Text>
            ) : message === 'Cant assign HR as staffmember ! ' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                One of the staffs is HR!
              </Form.Text>
            ) : message === 'Staff not found for staff entrance' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                One of the staffs ids not valid!
              </Form.Text>
            ) : message === 'invalid department name' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '23vw' }}
              >
                department name does not exist!
              </Form.Text>
            ) :message === '"staff" must be an array' ? (
                <Form.Text
                  className='messagesStyling'
                  style={{ marginTop: '-0.1vw', marginLeft: '23vw' }}
                >
                  staff must be an array!
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
