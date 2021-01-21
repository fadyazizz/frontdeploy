import React, { useState } from 'react'
import HrSideBar from './HrSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/addLocation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function UpdateFaculty() {
  const [name, setFacultyName] = useState('')
  const [updatedName, setUpdatedName] = useState(undefined)
  const [infoAboutFaculty, setInfoAboutFaculty] = useState(undefined)

  const [message, setMessage] = useState('')

  const facultyNameChange = (event) => {
    console.log(event.target.value)
    setFacultyName(event.target.value)
  }
  const updatedNameChange = (event) => {
    console.log(event.target.value)
    setUpdatedName(event.target.value)
  }
  const infoChange = (event) => {
    console.log(event.target.value)
    setInfoAboutFaculty(event.target.value)
  }

  const token = useSelector((state) => state.token)

  const updateFaculty = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/hr/updateFaculty`,
      method: 'put',
      headers: { authorization: token },
      data: {
        name,
        updatedName,
        infoAboutFaculty,
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
        setMessage('faculty updated successfully!')
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
            <Card.Text className='cardTitleStyle'>Update Faculty</Card.Text>
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
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>
                  Updated Faculty Name:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter updated faculty name'
                  onChange={(event) => updatedNameChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>
                  Info about the faculty:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter info about the faculty'
                  onChange={(event) => infoChange(event)}
                />
              </Form.Group>
            </Form>

            <Button
              variant='light'
              type='submit'
              className='addButtonStyle'
              onClick={(event) => updateFaculty(event)}
              style={{ marginTop: '0.5vw' }}
            >
              {' '}
              Update{' '}
            </Button>

            {message === 'faculty updated successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                Faculty updated successfully!
              </Form.Text>
            ) : message === '"name" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                Faculty name is required!
              </Form.Text>
            ) : message === 'faculty not found' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                Faculty does not exist!
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
