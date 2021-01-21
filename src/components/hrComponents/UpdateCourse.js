import React, { useState } from 'react'
import HrSideBar from './HrSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/addLocation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function UpdateCourse() {
  const [code, setCode] = useState('')
  const [name, setName] = useState(undefined)
  const [creditHours, setCreditHours] = useState(undefined)
  const [departmentName, setDepartmentName] = useState('')
  const [newCode, setNewCode] = useState(undefined)

  const [message, setMessage] = useState('')

  const codeChange = (event) => {
    console.log(event.target.value)
    setCode(event.target.value)
  }
  const nameChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  const creditHoursChange = (event) => {
    console.log(event.target.value)
    setCreditHours(event.target.value)
  }
  const departmentNameChange = (event) => {
    console.log(event.target.value)
    setDepartmentName(event.target.value)
  }
  const newCodeChange = (event) => {
    console.log(event.target.value)
    setNewCode(event.target.value)
  }

  const token = useSelector((state) => state.token)

  const updateCourse = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/hr/updateCourse`,
      method: 'put',
      headers: { authorization: token },
      data: {
        code,
        name,
        creditHours,
        departmentName,
        newCode,
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
        setMessage('course updated successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }
  return (
    <React.Fragment>
      <div>
        <HrSideBar> </HrSideBar>
        <Card className='addLocationCard' style={{ height: '42vw' }}>
          <Card.Body>
            <Card.Text className='cardTitleStyle'>Update Course</Card.Text>
            <Form style={{ marginTop: '-1vw' }}>
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
            <Form style={{ marginTop: '-1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>
                  Updated Course Name:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter updated course name'
                  onChange={(event) => nameChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '-1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>
                  Updated Credit Hours:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter updated credit hours'
                  onChange={(event) => creditHoursChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '-1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>
                  Updated Department Name:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter updated department name'
                  onChange={(event) => departmentNameChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '-1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>New Code:</Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter new code'
                  onChange={(event) => newCodeChange(event)}
                />
              </Form.Group>
            </Form>

            <Button
              variant='light'
              type='submit'
              className='addButtonStyle'
              onClick={(event) => updateCourse(event)}
              style={{ marginTop: '0.5vw' }}
            >
              {' '}
              Update{' '}
            </Button>

            {message === 'course updated successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                course updated successfully!
              </Form.Text>
            ) : message === '"code" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                code is required!
              </Form.Text>
            ) : message === '"departmentName" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                department name is required!
              </Form.Text>
            ) : message === '"creditHours" must be a number' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                creditHours must be a number!
              </Form.Text>
            ) : message === 'Department DoesNot Exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                Department does not exist!
              </Form.Text>
            ) : message === 'Course DoesNot Exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                Course does not exist!
              </Form.Text>
            ) : message === 'Course NotFound in Department' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                Course not found in department!
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
