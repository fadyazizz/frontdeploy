import React, { useState } from 'react'
import HrSideBar from './HrSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/addLocation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function AddLocation() {
  const [location, setLocation] = useState('')
  const [capacity, setCapacity] = useState('')
  const [typeOfLocation, setTypeOfLocation] = useState('')

  //const [error, setError] = useState('')
  const [message, setMessage] = useState('')

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

  const addLocation = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/hr/addLocation`,
      method: 'post',
      headers: { authorization: token },
      data: {
        location,
        capacity,
        typeOfLocation,
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
        setMessage('location added successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }

  return (
    <React.Fragment>
      <div>
        <HrSideBar> </HrSideBar>
        <Card className='addLocationCard'>
          <Card.Body>
            <Card.Text className='cardTitleStyle'>Add Location</Card.Text>
            <Form style={{ marginTop: '1vw' }}>
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
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label className='locLabelStyle'>
                  Location Capacity:
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
              <Form.Label className='locLabelStyle'>Location Type:</Form.Label>
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
              onClick={(event) => addLocation(event)}
            >
              {' '}
              Add{' '}
            </Button>

            {message === 'location added successfully!' ? (
              <Form.Text className='messagesStyling'>
                location added successfully!
              </Form.Text>
            ) : message === '"location" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '20vw' }}
              >
                location is required!
              </Form.Text>
            ) : message === '"capacity" must be a number' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '20vw' }}
              >
                capacity is required and must be a number!
              </Form.Text>
            ) : message === '"typeOfLocation" is not allowed to be empty' ? (
              <Form.Text className='messagesStyling'>
                typeOfLocation is required!
              </Form.Text>
            ) : message === 'location already exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '18vw' }}
              >
                Location already exist!
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
