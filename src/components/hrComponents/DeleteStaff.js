import React, { useState } from 'react'
import HrSideBar from './HrSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/addLocation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function DeleteStaff() {
  const [id, setId] = useState('')

  const [message, setMessage] = useState('')

  const idChange = (event) => {
    console.log(event.target.value)
    setId(event.target.value)
  }
  const token = useSelector((state) => state.token)

  const deleteStaff = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/hr/deleteStaffMember`,
      method: 'delete',
      headers: { authorization: token },
      data: {
        id,
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
        setMessage('staff deleted successfully!')
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
            <Card.Text className='cardTitleStyle'>Delete Staff</Card.Text>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group>
                <Form.Label className='locLabelStyle'>Staff Id:</Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter staff id'
                  onChange={(event) => idChange(event)}
                />
              </Form.Group>
            </Form>

            <Button
              variant='light'
              type='submit'
              className='addButtonStyle'
              onClick={(event) => deleteStaff(event)}
              style={{ marginTop: '0.5vw' }}
            >
              {' '}
              Delete{' '}
            </Button>

            {message == 'staff deleted successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '24vw' }}
              >
                staff deleted successfully!
              </Form.Text>
            ) : message == 'staff not found' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '24vw' }}
              >
                Staff does not exist!
              </Form.Text>
            ) : message == '"id" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '23vw' }}
              >
                id is required!
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
