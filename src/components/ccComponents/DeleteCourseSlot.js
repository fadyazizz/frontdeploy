import React, { useState } from 'react'
import CcSideBar from './CcSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/ccCard.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function DeleteCourseSlot() {
  const [slotName, setSlotName] = useState('')
  const [day, setDay] = useState('')
  const [typeOfSlot, setTypeOfSlot] = useState('')
  const [location, setLocation] = useState('')
  const [courseCode, setCourseCode] = useState('')

  const [message, setMessage] = useState('')

  const slotNameChange = (event) => {
    console.log(event.target.value)
    setSlotName(event.target.value)
  }
  const dayChange = (event) => {
    console.log(event.target.value)
    setDay(event.target.value)
  }
  const typeOfSlotChange = (event) => {
    console.log(event.target.value)
    setTypeOfSlot(event.target.value)
  }
  const locationChange = (event) => {
    console.log(event.target.value)
    setLocation(event.target.value)
  }
  const courseCodeChange = (event) => {
    console.log(event.target.value)
    setCourseCode(event.target.value)
  }

  const token = useSelector((state) => state.token)

  const deleteCourseSlot = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/courseCoordinator/deleteCourseSlot`,
      method: 'delete',
      headers: { authorization: token },
      data: {
        slotName,
        day,
        typeOfSlot,
        location,
        courseCode,
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
        setMessage('course slot deleted successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }
  return (
    <React.Fragment>
      <div>
        <CcSideBar> </CcSideBar>
        <Card className='ccCard' style={{ height: '41vw' }}>
          <Card.Body>
            <Card.Text
              className='cccardTitleStyle'
              style={{ marginLeft: '6vw' }}
            >
              Delete Course Slot
            </Card.Text>
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
            <Form style={{ marginLeft: '1vw', marginTop: '-1vw' }}>
              <Form.Group controlId='formGridState'>
                <Form.Label className='ccLabelStyle'>Type Of Slot:</Form.Label>
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
            <Form style={{ marginLeft: '1vw', marginTop: '-1vw' }}>
              <Form.Group>
                <Form.Label className='ccLabelStyle'>Location:</Form.Label>
                <Form.Control
                  className='ccFormStyle'
                  type='text'
                  placeholder='Enter location'
                  onChange={(event) => locationChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginLeft: '1vw', marginTop: '-1vw' }}>
              <Form.Group>
                <Form.Label className='ccLabelStyle'>Course Code:</Form.Label>
                <Form.Control
                  className='ccFormStyle'
                  type='text'
                  placeholder='Enter course code'
                  onChange={(event) => courseCodeChange(event)}
                />
              </Form.Group>
            </Form>

            <Button
              variant='light'
              type='submit'
              className='addButtonHodStyle'
              onClick={(event) => deleteCourseSlot(event)}
              style={{ marginTop: '-0.01vw' }}
            >
              {' '}
              Delete{' '}
            </Button>

            {message === 'course slot deleted successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                slot deleted successfully!
              </Form.Text>
            ) : message === '"slotName" must be a number' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '27vw' }}
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
                style={{ marginLeft: '23vw' }}
              >
                location is required!
              </Form.Text>
            ) : message === '"courseCode" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '23vw' }}
              >
                course code is required!
              </Form.Text>
            ) : message === 'course slot does not exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '17vw' }}
              >
                course slot does not exist!
              </Form.Text>
            ) : message === 'No total slots in this course' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                No slots in this course!
              </Form.Text>
            ) : message === 'Course does not exist' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '25vw' }}
              >
                course does not exist!
              </Form.Text>
            ) : message === 'Course coordinator does not teach this course' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
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
