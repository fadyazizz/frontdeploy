import React, { useState } from 'react'
import HrSideBar from './HrSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/addLocation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function UpdateLocation() {
  const [location, setLocation] = useState('')
  const [updatedLocationName, setUpdatedLocationName] = useState(undefined)
  const [capacity, setCapacity] = useState(undefined)
  const [typeOfLocation, setTypeOfLocation] = useState(undefined)

  const [message, setMessage] = useState('')

  const updatedLocationNameChange = (event) => {
    console.log(event.target.value)
    setUpdatedLocationName(event.target.value)
  }
  const locationChange = (event) => {
    console.log(event.target.value)
    setLocation(event.target.value)
  }
  const capacityChange = (event) => {
    console.log(event.target.value)
    setCapacity(event.target.value)
  }
  const typeOfLocationChange = (event) => {
    console.log(event.target.value)
    setTypeOfLocation(event.target.value)
  }
  const token = useSelector((state) => state.token)

  const updateLocation = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/hr/updateLocation`,
      method: 'put',
      headers: { authorization: token },
      data: {
        location,
        updatedLocationName,
        capacity,
        typeOfLocation,
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
        setMessage('location updated successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }

  return (
    <React.Fragment>
      <div>
        <HrSideBar> </HrSideBar>
        <Card className='addLocationCard' style={{ height: '40vw' }}>
          <Card.Body>
            <Card.Text className='cardTitleStyle'>Update Location</Card.Text>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group>
                <Form.Label className='locLabelStyle'>
                  Old Location Name:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter location name'
                  onChange={(event) => locationChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>
                  Updated Location Name:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter location name'
                  onChange={(event) => updatedLocationNameChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>
                  Updated Location Capacity:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter location capacity'
                  onChange={(event) => capacityChange(event)}
                />
              </Form.Group>
            </Form>
            <Form.Group controlId='formGridState'>
              <Form.Label className='locLabelStyle'>
                Updated Location Type:
              </Form.Label>
              <Form.Control
                as='select'
                defaultValue='...'
                className='locFormStyle'
                onChange={(event) => typeOfLocationChange(event)}
              >
                <option>...</option>
                <option>office</option>
                <option>lab</option>
                <option>tutorial</option>
                <option>lectureHall</option>
              </Form.Control>
            </Form.Group>
            <Button
              variant='light'
              type='submit'
              className='addButtonStyle'
              onClick={(event) => updateLocation(event)}
              style={{ marginTop: '0.5vw' }}
            >
              {' '}
              Update{' '}
            </Button>

            {message === 'location updated successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                location updated successfully!
              </Form.Text>
            ) : message === '"location" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '20vw' }}
              >
                Old Location name is required!
              </Form.Text>
            ) : message === 'invalid location name' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                Location does not exist!
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
