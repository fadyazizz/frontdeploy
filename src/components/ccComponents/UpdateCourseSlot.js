import React, { useState } from 'react'
import CcSideBar from './CcSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/ccCard.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function UpdateCourseSlot() {
  const [slotName, setSlotName] = useState('')
  const [updatedSlotName, setUpdatedSlotName] = useState(undefined)

  const [day, setDay] = useState('')
  const [updatedDay, setUpdatedDay] = useState(undefined)

  const [typeOfSlot, setTypeOfSlot] = useState('')
  const [updatedTypeOfSlot, setUpdatedTypeOfSlot] = useState(undefined)

  const [location, setLocation] = useState('')
  const [updatedLocation, setUpdatedLocation] = useState(undefined)

  const [courseCode, setCourseCode] = useState('')
  const [updatedCourseCode, setUpdatedCourseCode] = useState(undefined)

  const [message, setMessage] = useState('')

  const slotNameChange = (event) => {
    console.log(event.target.value)
    setSlotName(event.target.value)
  }
  const updatedSlotNameChange = (event) => {
    console.log(event.target.value)
    setUpdatedSlotName(event.target.value)
  }
  const dayChange = (event) => {
    console.log(event.target.value)
    setDay(event.target.value)
  }
  const updatedDayChange = (event) => {
    console.log(event.target.value)
    setUpdatedDay(event.target.value)
  }
  const typeOfSlotChange = (event) => {
    console.log(event.target.value)
    setTypeOfSlot(event.target.value)
  }
  const updatedTypeOfSlotChange = (event) => {
    console.log(event.target.value)
    setUpdatedTypeOfSlot(event.target.value)
  }
  const locationChange = (event) => {
    console.log(event.target.value)
    setLocation(event.target.value)
  }
  const updatedLocationChange = (event) => {
    console.log(event.target.value)
    setUpdatedLocation(event.target.value)
  }
  const courseCodeChange = (event) => {
    console.log(event.target.value)
    setCourseCode(event.target.value)
  }
  const updatedCourseCodeChange = (event) => {
    console.log(event.target.value)
    setUpdatedCourseCode(event.target.value)
  }

  const token = useSelector((state) => state.token)

  const updateCourseSlot = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/courseCoordinator/updateCourseSlot`,
      method: 'put',
      headers: { authorization: token },
      data: {
        slotName,
        updatedSlotName,
        day,
        updatedDay,
        typeOfSlot,
        updatedTypeOfSlot,
        location,
        updatedLocation,
        courseCode,
        updatedCourseCode,
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
        setMessage('course slot updated successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }
  return (
    <React.Fragment>
      <div>
        <CcSideBar> </CcSideBar>
        <Card className='ccCard' style={{ height: '42vw' }}>
          <Card.Body>
            <Card.Text
              className='cccardTitleStyle'
              style={{ marginLeft: '6vw' }}
            >
              Update Course Slot
            </Card.Text>
            <table>
              <tbody>
                <tr>
                  <td>
                    {' '}
                    <Form style={{ marginLeft: '1vw', marginTop: '-1vw' }}>
                      <Form.Group controlId='formGridState'>
                        <Form.Label className='ccLabelStyle'>Slot:</Form.Label>
                        <Form.Control
                          as='select'
                          defaultValue='...'
                          className='ccFormStyle'
                          onChange={(event) => slotNameChange(event)}
                        >
                          <option>...</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </td>
                  <td>
                    {' '}
                    <Form style={{ marginLeft: '1vw', marginTop: '-1vw' }}>
                      <Form.Group controlId='formGridState'>
                        <Form.Label className='ccLabelStyle'>
                          UpdatedSlot:
                        </Form.Label>
                        <Form.Control
                          as='select'
                          defaultValue='...'
                          className='ccFormStyle'
                          onChange={(event) => updatedSlotNameChange(event)}
                        >
                          <option>...</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form style={{ marginLeft: '1vw', marginTop: '-1vw' }}>
                      <Form.Group controlId='formGridState'>
                        <Form.Label className='ccLabelStyle'>Day:</Form.Label>
                        <Form.Control
                          as='select'
                          defaultValue='...'
                          className='ccFormStyle'
                          onChange={(event) => dayChange(event)}
                        >
                          <option>...</option>
                          <option>Monday</option>
                          <option>Tuesday</option>
                          <option>Wednesday</option>
                          <option>Thursday</option>
                          <option>Saturday</option>
                          <option>Sunday</option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </td>
                  <td>
                    <Form style={{ marginLeft: '1vw', marginTop: '-1vw' }}>
                      <Form.Group controlId='formGridState'>
                        <Form.Label className='ccLabelStyle'>
                          Updated Day:
                        </Form.Label>
                        <Form.Control
                          as='select'
                          defaultValue='...'
                          className='ccFormStyle'
                          onChange={(event) => updatedDayChange(event)}
                        >
                          <option>...</option>
                          <option>Monday</option>
                          <option>Tuesday</option>
                          <option>Wednesday</option>
                          <option>Thursday</option>
                          <option>Saturday</option>
                          <option>Sunday</option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form style={{ marginLeft: '1vw', marginTop: '-1vw' }}>
                      <Form.Group controlId='formGridState'>
                        <Form.Label className='ccLabelStyle'>
                          Type Of Slot:
                        </Form.Label>
                        <Form.Control
                          as='select'
                          defaultValue='...'
                          className='ccFormStyle'
                          onChange={(event) => typeOfSlotChange(event)}
                        >
                          <option>...</option>
                          <option>lab</option>
                          <option>tutorial</option>
                          <option>lecture</option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </td>
                  <td>
                    {' '}
                    <Form style={{ marginLeft: '1vw', marginTop: '-1vw' }}>
                      <Form.Group controlId='formGridState'>
                        <Form.Label className='ccLabelStyle'>
                          Updated Type Of Slot:
                        </Form.Label>
                        <Form.Control
                          as='select'
                          defaultValue='...'
                          className='ccFormStyle'
                          onChange={(event) => updatedTypeOfSlotChange(event)}
                        >
                          <option>...</option>
                          <option>lab</option>
                          <option>tutorial</option>
                          <option>lecture</option>
                        </Form.Control>
                      </Form.Group>
                    </Form>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form style={{ marginLeft: '1vw', marginTop: '-1vw' }}>
                      <Form.Group>
                        <Form.Label className='ccLabelStyle'>
                          Location:
                        </Form.Label>
                        <Form.Control
                          className='ccFormStyle'
                          type='text'
                          placeholder='Enter location'
                          onChange={(event) => locationChange(event)}
                        />
                      </Form.Group>
                    </Form>
                  </td>
                  <td>
                    <Form style={{ marginLeft: '1vw', marginTop: '-1vw' }}>
                      <Form.Group>
                        <Form.Label className='ccLabelStyle'>
                          Updated Location:
                        </Form.Label>
                        <Form.Control
                          className='ccFormStyle'
                          type='text'
                          placeholder='Enter location'
                          onChange={(event) => updatedLocationChange(event)}
                        />
                      </Form.Group>
                    </Form>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form style={{ marginLeft: '1vw', marginTop: '-1vw' }}>
                      <Form.Group>
                        <Form.Label className='ccLabelStyle'>
                          Course Code:
                        </Form.Label>
                        <Form.Control
                          className='ccFormStyle'
                          type='text'
                          placeholder='Enter course code'
                          onChange={(event) => courseCodeChange(event)}
                        />
                      </Form.Group>
                    </Form>
                  </td>
                  <td>
                    <Form style={{ marginLeft: '1vw', marginTop: '-1vw' }}>
                      <Form.Group>
                        <Form.Label className='ccLabelStyle'>
                          Updated Course Code:
                        </Form.Label>
                        <Form.Control
                          className='ccFormStyle'
                          type='text'
                          placeholder='Enter course code'
                          onChange={(event) => updatedCourseCodeChange(event)}
                        />
                      </Form.Group>
                    </Form>
                  </td>
                </tr>
              </tbody>
            </table>

            <Button
              variant='light'
              type='submit'
              className='addButtonHodStyle'
              onClick={(event) => updateCourseSlot(event)}
              style={{ marginTop: '-0.01vw' }}
            >
              {' '}
              Update{' '}
            </Button>

            {message === 'course slot updated successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '24vw' }}
              >
                slot updated successfully!
              </Form.Text>
            ) : message === '"slotName" must be a number' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                slot is required!
              </Form.Text>
            ) : message === '"day" is not allowed to be empty' ||
            message ===
                '"day" must be one of [Monday, Tuesday, Wednesday, Thursday, Saturday, Sunday]' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                day is required!
              </Form.Text>
            ) : message === '"typeOfSlot" is not allowed to be empty' ||
            message ===
                '"typeOfSlot" must be one of [lab, tutorial, lecture]' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                type of slot is required!
              </Form.Text>
            ) : message === '"location" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '20vw' }}
              >
                location is required!
              </Form.Text>
            ) : message === '"courseCode" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '18vw' }}
              >
                course code is required!
              </Form.Text>
            ) : message === 'Course does not exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                You dont teach the updated course!
              </Form.Text>
            ) : message === 'location does not exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                updated location does not exist!
              </Form.Text>
            ) : message === 'course slot does not exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '20vw' }}
              >
                slot does not exist!
              </Form.Text>
            ) : message === 'course Coordinator does not teach this course' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                you dont teach this course!
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
