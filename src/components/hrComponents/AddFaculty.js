import React, { useState } from 'react'
import HrSideBar from './HrSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/addLocation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function AddFaculty() {
  const [name, setFacultyName] = useState('')

  const [message, setMessage] = useState('')
  

  const facultyNameChange = (event) => {
    console.log(event.target.value)
    setFacultyName(event.target.value)
  }
  const token = useSelector((state) => state.token)

  const addFaculty = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/hr/addFaculty`,
      method: 'post',
      headers: { authorization: token },
      data: {
        name,
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
        setMessage('faculty added successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }

  return (
    <React.Fragment>
      <div>
        <HrSideBar> </HrSideBar>
        <Card className='addLocationCard' style={{ height: '22vw' }}>
          <Card.Body>
            <Card.Text className='cardTitleStyle'>Add Faculty</Card.Text>
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

            <Button
              variant='light'
              type='submit'
              className='addButtonStyle'
              onClick={(event) => addFaculty(event)}
            >
              {' '}
              Add{' '}
            </Button>

            {message === 'faculty added successfully!' ? (
              <Form.Text className='messagesStyling'>
                faculty added successfully!
              </Form.Text>
            ) : message === '"name" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '20vw' }}
              >
                Faculty name is required!
              </Form.Text>
            ) : message === 'faculty already exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginTop: '-0.1vw', marginLeft: '20vw' }}
              >
                Faculty name already exist!
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
