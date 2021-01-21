import React, { useState } from 'react'
import HrSideBar from './HrSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/addLocation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function DeleteLocation() {
  const [locationname, setLocation] = useState('')

  const [message, setMessage] = useState('')

  const locationChange = (event) => {
    console.log(event.target.value)
    setLocation(event.target.value)
  }
  const token = useSelector((state) => state.token)

  const deleteLocation = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/hr/deleteLocation`,
      method: 'delete',
      headers: { authorization: token },
      data: {
        locationname,
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
        setMessage('location deleted successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }
  return (
    <React.Fragment>
      <div>
        <HrSideBar> </HrSideBar>
        <Card className='addLocationCard' style={{ height: '20vw' }}>
          <Card.Body>
            <Card.Text className='cardTitleStyle'>Delete Location</Card.Text>
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

            <Button
              variant='light'
              type='submit'
              className='addButtonStyle'
              onClick={(event) => deleteLocation(event)}
              style={{ marginTop: '0.5vw' }}
            >
              {' '}
              Delete{' '}
            </Button>

            {message == 'location deleted successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                location deleted successfully!
              </Form.Text>
            ) : message == 'there is no location with this name to delete ' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                Location does not exist!
              </Form.Text>
            ) : message == '"locationname" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                Location name is required!
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
