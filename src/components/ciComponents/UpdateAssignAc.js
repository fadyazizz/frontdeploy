import React, { useState } from 'react'
import CiSideBar from './CiSideBar'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/ciCard.css'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function UpdateAssignAc() {
  const [staffId, setStaffId] = useState('')
  const [typeOfSlot, setTypeOfSlot] = useState('')
  const [courseCode, setCourseCode] = useState('')
  const [location, setLocation] = useState('')
  const [day, setDay] = useState('')
  const [slotName, setSlotName] = useState('')

  const [message, setMessage] = useState('')

  const staffIdChange = (event) => {
    console.log(event.target.value)
    setStaffId(event.target.value)
  }
  const typeOfSlotChange = (event) => {
    console.log(event.target.value)
    setTypeOfSlot(event.target.value)
  }
  const courseCodeChange = (event) => {
    console.log(event.target.value)
    setCourseCode(event.target.value)
  }
  const locationChange = (event) => {
    console.log(event.target.value)
    setLocation(event.target.value)
  }
  const dayChange = (event) => {
    console.log(event.target.value)
    setDay(event.target.value)
  }
  const slotNameChange = (event) => {
    console.log(event.target.value)
    setSlotName(event.target.value)
  }

  const token = useSelector((state) => state.token)

  const updateAcToSlot = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url:
      `${backendLink}/courseInstructor/upateAssignmenttAcademicMemberToSlots`,
      method: 'put',
      headers: { authorization: token },
      data: {
        staffId,
        typeOfSlot,
        courseCode,
        location,
        day,
        slotName,
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
        setMessage('updated successfully!')
        //setUsername(res.data.payLoad.name)
        // history.push('/')
      }
    })
  }
  return (
    <React.Fragment>
      <div>
        <CiSideBar> </CiSideBar>
        <Card className='ciCard' style={{ height: '33vw' }}>
          <Card.Body>
            <Card.Text
              className='cicardTitleStyle'
              style={{ marginLeft: '0vw' }}
            >
              Update assigned Academic Member
            </Card.Text>
            <table>
              <tbody>
                <tr>
                  <td>
                    <Form>
                      <Form.Group>
                        <Form.Label className='ciLabelStyle'>
                          Staff Id:
                        </Form.Label>
                        <Form.Control
                          className='ciFormStyle'
                          type='text'
                          placeholder='Enter staff id'
                          onChange={(event) => staffIdChange(event)}
                        />
                      </Form.Group>
                    </Form>
                  </td>
                  <td>
                    <Form style={{ marginLeft: '1vw' }}>
                      <Form.Group controlId='formGridState'>
                        <Form.Label className='ciLabelStyle'>
                          Type Of Slot:
                        </Form.Label>
                        <Form.Control
                          as='select'
                          defaultValue='...'
                          className='ciFormStyle'
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
                </tr>
                <tr>
                  <td>
                    <Form>
                      <Form.Group>
                        <Form.Label className='ciLabelStyle'>
                          Course Code:
                        </Form.Label>
                        <Form.Control
                          className='ciFormStyle'
                          type='text'
                          placeholder='Enter course code'
                          onChange={(event) => courseCodeChange(event)}
                        />
                      </Form.Group>
                    </Form>
                  </td>
                  <td>
                    <Form style={{ marginLeft: '1vw' }}>
                      <Form.Group>
                        <Form.Label className='ciLabelStyle'>
                          Location:
                        </Form.Label>
                        <Form.Control
                          className='ciFormStyle'
                          type='text'
                          placeholder='Enter location'
                          onChange={(event) => locationChange(event)}
                        />
                      </Form.Group>
                    </Form>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form>
                      <Form.Group controlId='formGridState'>
                        <Form.Label className='ciLabelStyle'>Day:</Form.Label>
                        <Form.Control
                          as='select'
                          defaultValue='...'
                          className='ciFormStyle'
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
                    <Form style={{ marginLeft: '1vw' }}>
                      <Form.Group controlId='formGridState'>
                        <Form.Label className='ciLabelStyle'>Slot:</Form.Label>
                        <Form.Control
                          as='select'
                          defaultValue='...'
                          className='ciFormStyle'
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
                </tr>
              </tbody>
            </table>

            <Button
              variant='light'
              type='submit'
              className='addButtonHodStyle'
              onClick={(event) => updateAcToSlot(event)}
              style={{ marginTop: '-0.01vw' }}
            >
              {' '}
              Update{' '}
            </Button>

            {message === 'updated successfully!' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '21vw' }}
              >
                updated successfully!
              </Form.Text>
            ) : message === '"staffId" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '25vw' }}
              >
                staff Id is required!
              </Form.Text>
            ) : message === '"typeOfSlot" is not allowed to be empty' ||
            message ===
                '"typeOfSlot" must be one of [lab, tutorial, lecture]' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '24vw' }}
              >
                typeOfSlot is required!
              </Form.Text>
            ) : message === '"courseCode" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '24vw' }}
              >
                Course code is required!
              </Form.Text>
            ) : message === '"location" is not allowed to be empty' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '25vw' }}
              >
                location is required!
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
            ) : message === '"slotName" must be a number' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '26vw' }}
              >
                slot is required!
              </Form.Text>
            ) : message === 'this slot doesnot exist ' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '17vw' }}
              >
                slot does not exist!
              </Form.Text>
            ) : message ===
              'this AcademicMember is not assigned to this course ' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                staff does not take this course!
              </Form.Text>
            ) : message === 'You Are an instructor for this course ' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                staff is an instructor!
              </Form.Text>
            ) : message === 'course not found' ? (
              <Form.Text
                className='messagesStyling'
                style={{ marginLeft: '22vw' }}
              >
                course not found!
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
