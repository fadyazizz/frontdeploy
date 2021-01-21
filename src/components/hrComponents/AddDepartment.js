import React, { useState } from 'react'
import HrSideBar from './HrSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/addLocation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function AddDepartment() {
  const [name, setDepartmentName] = useState('')
  const [facultyName, setFacultyName] = useState('')
  const [headOfDepartmentId, setHODId] = useState('')

  
  const [message, setMessage] = useState('')

  const departmentNameChange = (event) => {
    console.log(event.target.value)
    setDepartmentName(event.target.value)
  }
  const facultyNameChange = (event) => {
    console.log(event.target.value)
    setFacultyName(event.target.value)
  }
  const headOfDepartmentChange = (event) => {
    console.log(event.target.value)
    setHODId(event.target.value)
  }
 

  const token = useSelector((state) => state.token)

  const addDepartment = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/hr/addDepartment`,
      method: 'post',
      headers: { authorization: token },
      data: {
        name,
        facultyName,
        headOfDepartmentId,
        
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
        setMessage('department added successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }
  return (
    <React.Fragment>
      <div>
        <HrSideBar> </HrSideBar>
        <Card className='addLocationCard' style={{ height: '33vw' }}>
          <Card.Body>
            <Card.Text className='cardTitleStyle'>Add Department</Card.Text>
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
              <Form.Group>
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
              <Form.Group>
                <Form.Label className='locLabelStyle'>
                  Head Of Department Id:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter Head of department id'
                  onChange={(event) => headOfDepartmentChange(event)}
                />
              </Form.Group>
            </Form>
           
            <Button
              variant='light'
              type='submit'
              className='addButtonStyle'
              onClick={(event) => addDepartment(event)}
              style={{ marginTop: '0.5vw' }}
            >
              {' '}
              Add{' '}
            </Button>

            {message === 'department added successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                Department added successfully!
              </Form.Text>
            ) : message === '"name" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                Department name is required!
              </Form.Text>
            ) : message === '"facultyName" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                Faculty name is required!
              </Form.Text>
            ) : message === '"headOfDepartmentId" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                HeadOfDepartment is required!
              </Form.Text>
            ) : message === '"staff" must be an array' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                staff must be an array!
              </Form.Text>
            ) : message ===
              'NOT a Valid Faculty or incorrect staff id for hod' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '16vw' }}
              >
                Please enter correct faculty or HeadOfDepartment Id!
              </Form.Text>
            ) : message ===
              'Cant assign this staff member as headoddepartment' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                Cant assign this staff as HOD!
              </Form.Text>
            ) : message ===
              'Cant assign this staff member as headoddepartment as he is already a head fooor other dep! ' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                Cant assign this staff as HOD!
              </Form.Text>
            ) : message === 'NOT a Valid Faculty or incorrect staff ' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                Please enter correct faculty or staff!
              </Form.Text>
            ) : message === 'Cant assign HR as staff member  ! ' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                One of the staffs is HR!
              </Form.Text>
            ) : message ===
              'one of Staff members does not exist , you have to make sure all ids are valid for staff array' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                One of the staffs ids not valid!
              </Form.Text>
            ) : message === 'Cant assign  HR as headofdepartment  ! ' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                HR cant be a HOD!
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
