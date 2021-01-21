import React, { useState } from 'react'
import HrSideBar from './HrSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/addLocation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function DeleteFaculty() {
  const [name, setName] = useState('')

  const [message, setMessage] = useState('')

  const facultyChange = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }
  const token = useSelector((state) => state.token)

  const deleteFaculty = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/hr/deleteFaculty`,
      method: 'delete',
      headers: { authorization: token },
      data: {
        name,
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
        setMessage('faculty deleted successfully!')
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
            <Card.Text className='cardTitleStyle'>Delete Faculty</Card.Text>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group>
                <Form.Label className='locLabelStyle'>Faculty Name:</Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter faculty name'
                  onChange={(event) => facultyChange(event)}
                />
              </Form.Group>
            </Form>

            <Button
              variant='light'
              type='submit'
              className='addButtonStyle'
              onClick={(event) => deleteFaculty(event)}
              style={{ marginTop: '0.5vw' }}
            >
              {' '}
              Delete{' '}
            </Button>

            {message == 'faculty deleted successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                Faculty deleted successfully!
              </Form.Text>
            ) : message == 'faculty not found' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                Faculty does not exist!
              </Form.Text>
            ) : message == '"name" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
              >
                Faculty name is required!
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
