import React, { useState } from 'react'
import HrSideBar from './HrSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/addLocation.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function DeleteDepartment() {
    const [name, setName] = useState('')

    const [message, setMessage] = useState('')
  
    const departmentChange = (event) => {
      console.log(event.target.value)
      setName(event.target.value)
    }
    const token = useSelector((state) => state.token)
  
    const deleteDepartment = async (event) => {
      event.preventDefault()
      event.stopPropagation()
      await axios({
        url: `${backendLink}/hr/deleteDepartment`,
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
          setMessage('department deleted successfully!')
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
              <Card.Text className='cardTitleStyle'>Delete Department</Card.Text>
              <Form style={{ marginTop: '1vw' }}>
                <Form.Group>
                  <Form.Label className='locLabelStyle'>Department Name:</Form.Label>
                  <Form.Control
                    className='locFormStyle'
                    type='text'
                    placeholder='Enter faculty name'
                    onChange={(event) => departmentChange(event)}
                  />
                </Form.Group>
              </Form>
  
              <Button
                variant='light'
                type='submit'
                className='addButtonStyle'
                onClick={(event) => deleteDepartment(event)}
                style={{ marginTop: '0.5vw' }}
              >
                {' '}
                Delete{' '}
              </Button>
  
              {message == 'department deleted successfully!' ? (
                <Form.Text
                  className='messagesStyling'
                  style={{ marginLeft: '22vw' }}
                >
                  Department deleted successfully!
                </Form.Text>
              ) : message == 'there is no deparment with this name to delete ' ? (
                <Form.Text
                  className='messagesStyling'
                  style={{ marginTop: '-0.1vw', marginLeft: '23vw' }}
                >
                  department does not exist to be deleted!
                </Form.Text>
              ) : message == '"name" is not allowed to be empty' ? (
                <Form.Text
                  className='messagesStyling'
                  style={{ marginTop: '-0.1vw', marginLeft: '22vw' }}
                >
                  department name is required!
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
