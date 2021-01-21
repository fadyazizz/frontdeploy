import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import axios from 'axios'
import DatePicker from 'react-date-picker'
import Form from 'react-bootstrap/Form'
import '../StyleSheets/requests.css'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import UploadAFile from './UploadAFile'
export default function SendRequests(props) {
  const history = useHistory()
  const [request, setRequest] = useState(-1)
  const [replacerId, setReplacerId] = useState('')
  const [slot, SetSlot] = useState('')
  const [date, setDate] = useState(new Date())
  const token = useSelector((state) => state.token)
  const [error, setError] = useState('')
  const [joiMessage, setJoiMessage] = useState('')
  const [newDay, setNewDay] = useState('')
  const [reason, setReason] = useState(undefined)
  const dispatch = useDispatch()
  const [uploads, setUploads] = useState([])
  const [selectedImage, setSelectedImage] = useState('')
  useEffect(() => {
    if (!dispatch(checkTokenExpired(history))) {
      if (request == '3' || request == '4') {
        axios({
          url: `${backendLink}/academicMember/viewAllUploads`,
          method: 'get',
          headers: {
            authorization: token,
          },
        })
          .then((res) => {
            console.log(res.data)
            const newImages = []
            res.data.uploads.map((upload) => {
              const image = btoa(
                String.fromCharCode.apply(null, upload.document.data.data)
              )

              newImages.push({
                pic: 'data:image/png;base64,' + image,
                _id: upload._id,
              })
            })
            setUploads(newImages)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }, [request])
  const sendReplacementRequest = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    let day
    let month
    let year
    if (date) {
      day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      month =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1
      year = date.getFullYear()
    }
    axios({
      url: `${backendLink}/academicMember/sendReplacementNotification`,
      method: 'post',
      headers: {
        authorization: token,
      },
      data: {
        replacerId: replacerId,
        date: date ? `${year}-${month}-${day}` : undefined,
        slot: parseInt(slot),
      },
    })
      .then((res) => {
        console.log(res.data)
        setError(res.data.statuscode)
        setJoiMessage(res.data.error)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const sendChangeDayOff = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    axios({
      url: `${backendLink}/academicMember/sendChangeDayOff`,
      method: 'post',
      headers: {
        authorization: token,
      },
      data: {
        newDay,
        reason,
      },
    })
      .then((res) => {
        console.log(res.data)
        setError(res.data.statuscode)
        setJoiMessage(res.data.error)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const sendCompendationLeave = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    let day
    let month
    let year
    if (date) {
      day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      month =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1
      year = date.getFullYear()
    }
    axios({
      url: `${backendLink}/academicMember/sendCompensationLeave`,
      method: 'post',
      headers: {
        authorization: token,
      },
      data: {
        date: date ? `${year}-${month}-${day}` : undefined,
        reason,
      },
    })
      .then((res) => {
        console.log(res.data)
        setError(res.data.statuscode)
        setJoiMessage(res.data.error)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const sendSickLeave = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    let day
    let month
    let year
    if (date) {
      day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      month =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1
      year = date.getFullYear()
    }
    axios({
      url: `${backendLink}/academicMember/sendSickLeaves`,
      method: 'post',
      headers: {
        authorization: token,
      },
      data: {
        dateOfSickness: date ? `${year}-${month}-${day}` : undefined,
        uploadId: selectedImage,
        reason: reason,
      },
    })
      .then((res) => {
        console.log(res.data)
        setError(res.data.statuscode)
        setJoiMessage(res.data.error)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const sendMaternityLeave = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    let day
    let month
    let year
    if (date) {
      day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      month =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1
      year = date.getFullYear()
    }
    axios({
      url: `${backendLink}/academicMember/sendMaternityLeaves`,
      method: 'post',
      headers: {
        authorization: token,
      },
      data: {
        startDate: date ? `${year}-${month}-${day}` : undefined,
        uploadId: selectedImage,
        reason: reason,
      },
    })
      .then((res) => {
        console.log(res.data)
        setError(res.data.statuscode)
        setJoiMessage(res.data.error)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const sendAccidentalLeave = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    let day
    let month
    let year
    if (date) {
      day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      month =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1
      year = date.getFullYear()
    }
    axios({
      url: `${backendLink}/academicMember/sendAccidentalLeaves`,
      method: 'post',
      headers: {
        authorization: token,
      },
      data: {
        date: date ? `${year}-${month}-${day}` : undefined,
        reason: reason == '' ? undefined : reason,
      },
    })
      .then((res) => {
        console.log(res.data)
        setError(res.data.statuscode)
        setJoiMessage(res.data.error)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const sendAnnualLeave = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    let day
    let month
    let year
    if (date) {
      day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      month =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1
      year = date.getFullYear()
    }
    axios({
      url: `${backendLink}/academicMember/sendAnnualLeaveRequest`,
      method: 'post',
      headers: {
        authorization: token,
      },
      data: {
        date: date ? `${year}-${month}-${day}` : undefined,
        reason: reason == '' ? undefined : reason,
      },
    })
      .then((res) => {
        console.log(res.data)
        setError(res.data.statuscode)
        setJoiMessage(res.data.error)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const color = '#e08eb4'
  const textColor = 'white'
  return (
    <React.Fragment>
      <div
        style={{
          width: '12vw',
          height: '30vw',
          marginLeft: '30%',
          marginTop: '4%',
        }}
      >
        <div style={{ width: '100%', marginBottom: '2%' }}>
          <Form.Control
            as='select'
            defaultValue='select request type'
            onChange={(e) => {
              setReason(undefined)
              setReplacerId('')
              SetSlot('')
              setDate(new Date())
              setError('')
              setJoiMessage('')
              setNewDay('')
              setUploads([])
              setSelectedImage('')

              setRequest(e.target.value)
            }}
            style={{ width: '100%' }}
          >
            <option>select request type</option>
            <option value='0'>Replacement Request</option>
            <option value='1'>change day off request</option>
            <option value='2'>Compensation Leave</option>
            <option value='3'>Sick Leave</option>
            <option value='4'>Maternity Leave</option>
            <option value='5'>Send Accidental Leave</option>
            <option value='6'>Send Annual Leave</option>
          </Form.Control>
        </div>
        {request == '0' ? (
          <table style={{ width: '200%', backgroundColor: color }}>
            <tr>
              <td>
                <p
                  style={{
                    color: textColor,
                    textAlign: 'center',
                    fontSize: '100%',
                  }}
                >
                  Send Replacement Request
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Control
                  type='text'
                  placeholder='Replacer Id'
                  className='requestsFormStyle'
                  onChange={(e) => setReplacerId(e.target.value)}
                />
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',
                    marginLeft: '5%',
                  }}
                >
                  {error == '7000' &&
                  joiMessage == `"replacerId" is not allowed to be empty`
                    ? 'this field is required*'
                    : error == '86'
                    ? 'invalid replacer id'
                    : error == '83'
                    ? 'the receiver is busy'
                    : error == '95'
                    ? 'receiver should have same department as you'
                    : error == '81'
                    ? 'the receiver does not teach the course taught in the given slot '
                    : error == '87'
                    ? 'ta can send to ta, and dr can send to dr'
                    : ''}
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0%' }}>
                <Form.Control
                  type='text'
                  placeholder='Slot'
                  style={{ marginTop: '5%' }}
                  className='requestsFormStyle'
                  onChange={(e) => SetSlot(e.target.value)}
                />
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',
                    marginLeft: '5%',
                  }}
                >
                  {error == '7000' && joiMessage == `"slot" must be a number`
                    ? 'this field is required and must be a number'
                    : error == '7000' &&
                      joiMessage == `"slot" must be larger than or equal to 1`
                    ? 'slot must be bigger than or equal 1'
                    : error == '7000' &&
                      joiMessage == `"slot" must be less than or equal to 5`
                    ? 'slot must be smaller than or equal to 5'
                    : ''}
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0%', color: 'white' }}>
                Date:
                <DatePicker
                  className='DatePickerRequests'
                  value={date}
                  onChange={setDate}
                ></DatePicker>
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',
                    marginLeft: '30%',
                  }}
                >
                  {error == '124'
                    ? `date cant be in the past or today's date`
                    : error == '7000' && joiMessage == `"date" is required`
                    ? 'this field is required*'
                    : ''}
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0%' }}>
                <button
                  onClick={(e) => sendReplacementRequest(e)}
                  style={{
                    borderWidth: '0vw',
                    float: 'right',
                    marginTop: '5%',
                    marginBottom: '5%',
                    marginRight: '2%',
                  }}
                >
                  Submit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',

                    float: 'right',
                  }}
                >
                  {error == '96'
                    ? `you already have a request for this slot`
                    : error == '0000'
                    ? 'request submitted successfully'
                    : error == '125'
                    ? 'you dont have slots with the provided info'
                    : ''}
                </div>
              </td>
            </tr>
          </table>
        ) : (
          ''
        )}
        {request == '1' ? (
          <table style={{ width: '200%', backgroundColor: color }}>
            <tr>
              <td>
                <p
                  style={{
                    color: textColor,
                    textAlign: 'center',
                    fontSize: '100%',
                  }}
                >
                  Change Day off
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Control
                  as='select'
                  className='requestsFormStyle'
                  defaultValue='select request type'
                  onChange={(e) => setNewDay(e.target.value)}
                >
                  <option value={undefined}>select new day</option>
                  <option value='Saturday'>Saturday</option>
                  <option value='Sunday'>Sunday</option>
                  <option value='Tuesday'>Tuesday</option>
                  <option value='Wednesday'>Wednesday</option>
                  <option value='Thursday'>Thursday</option>
                </Form.Control>
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',
                    marginLeft: '5%',
                  }}
                >
                  {error == '7000' &&
                  joiMessage ==
                    `"newDay" must be one of [Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday]`
                    ? 'please select a day'
                    : error == '126'
                    ? 'you have teaching obligations on that day'
                    : ''}
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0%' }}>
                <Form.Control
                  type='text'
                  placeholder='reason'
                  style={{ marginTop: '5%' }}
                  className='requestsFormStyle'
                  onChange={(e) => setReason(e.target.value)}
                />
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',
                    marginLeft: '5%',
                  }}
                >
                  {error == '7000' && joiMessage == `"slot" must be a number`
                    ? 'this field is required and must be a number'
                    : ''}
                </div>
              </td>
            </tr>

            <tr>
              <td style={{ padding: '0%' }}>
                <button
                  onClick={(e) => sendChangeDayOff(e)}
                  style={{
                    borderWidth: '0vw',
                    float: 'right',
                    marginTop: '5%',
                    marginBottom: '5%',
                    marginRight: '2%',
                  }}
                >
                  Submit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',

                    float: 'right',
                  }}
                >
                  {error == '0000' ? 'request submitted successfully' : ''}
                </div>
              </td>
            </tr>
          </table>
        ) : (
          ''
        )}
        {request == '2' ? (
          <table style={{ width: '200%', backgroundColor: color }}>
            <tr>
              <td>
                <p
                  style={{
                    color: textColor,
                    textAlign: 'center',
                    fontSize: '100%',
                  }}
                >
                  Send Compensation Leave
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Control
                  type='text'
                  placeholder='Reason'
                  className='requestsFormStyle'
                  onChange={(e) => setReason(e.target.value)}
                />
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',
                    marginLeft: '5%',
                  }}
                >
                  {error == '7000' && joiMessage == `"reason" is required`
                    ? 'this field is required*'
                    : ''}
                </div>
              </td>
            </tr>

            <tr>
              <td style={{ padding: '0%', color: textColor }}>
                Date:
                <DatePicker
                  className='DatePickerRequests'
                  value={date}
                  onChange={setDate}
                ></DatePicker>
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',
                    marginLeft: '30%',
                  }}
                >
                  {error == '104'
                    ? `date cant be in the past or today's date`
                    : error == '7000' && joiMessage == `"date" is required`
                    ? 'this field is required*'
                    : ''}
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0%' }}>
                <button
                  onClick={(e) => sendCompendationLeave(e)}
                  style={{
                    borderWidth: '0vw',
                    float: 'right',
                    marginTop: '5%',
                    marginBottom: '5%',
                    marginRight: '2%',
                  }}
                >
                  Submit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',

                    float: 'right',
                  }}
                >
                  {error == '96'
                    ? `you already have a request for this slot`
                    : error == '0000'
                    ? 'request submitted successfully'
                    : ''}
                </div>
              </td>
            </tr>
          </table>
        ) : (
          ''
        )}
        {request == '3' ? (
          <table style={{ width: '200%', backgroundColor: color }}>
            <tr>
              <td>
                <p
                  style={{
                    color: textColor,
                    textAlign: 'center',
                    fontSize: '100%',
                  }}
                >
                  Send Sick Leave
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    maxHeight: '10vw',
                    height: '10%',
                    overflow: 'scroll',
                    overflowX: 'hidden',
                  }}
                >
                  <table
                    style={{
                      borderStyle: 'solid',
                      borderWidth: '5%',
                      borderColor: 'black',
                      overflow: 'scroll',
                      overflowX: 'hidden',
                      height: '10%',
                      maxHeight: '10vw',
                      width: '100%',
                      marginLeft: '0%',
                    }}
                  >
                    <tr>
                      <td>
                        {uploads.length == 0 ? (
                          <p
                            style={{
                              position: 'relative',
                              left: '30%',
                              color: 'red',
                              fontSize: '100%',
                            }}
                          >
                            you have no Uploads Yet
                          </p>
                        ) : (
                          <p
                            style={{
                              position: 'fixed',
                              color: textColor,
                              fontSize: '100%',
                            }}
                          >
                            Select an Image:
                          </p>
                        )}
                      </td>
                    </tr>
                    {uploads.map((upload) => {
                      // console.log(upload)
                      return (
                        <React.Fragment>
                          <tr>
                            <td>
                              <div
                                style={{
                                  borderWidth: '10%',
                                  borderColor: 'black',
                                  float: 'right',
                                  marginLeft: '45%',
                                  marginTop: '2%',
                                }}
                              >
                                <img
                                  id={upload._id}
                                  width='20%'
                                  height='50%'
                                  src={upload.pic}
                                  style={{
                                    borderStyle: 'solid',
                                    paddingLeft: '1%',
                                    paddingRight: '1%',
                                    borderWidth: '1px',
                                    borderColor:
                                      upload._id == selectedImage
                                        ? 'white'
                                        : 'black',
                                  }}
                                  onClick={(e) => setSelectedImage(e.target.id)}
                                ></img>
                              </div>
                            </td>
                          </tr>
                        </React.Fragment>
                      )
                    })}
                  </table>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Control
                  type='text'
                  placeholder='Reason'
                  className='requestsFormStyle'
                  onChange={(e) => setReason(e.target.value)}
                />
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',
                    marginLeft: '5%',
                  }}
                >
                  {error == '7000' && joiMessage == `"reason" is required`
                    ? 'this field is required*'
                    : ''}
                </div>
              </td>
            </tr>

            <tr>
              <td style={{ padding: '0%', color: textColor }}>
                Date:
                <DatePicker
                  className='DatePickerRequests'
                  value={date}
                  onChange={setDate}
                ></DatePicker>
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',
                    marginLeft: '25%',
                  }}
                >
                  {error == '105'
                    ? `you cant submit sick leave 3 days after sickness day`
                    : error == '7000' &&
                      joiMessage == `"dateOfSickness" is required`
                    ? 'this field is required*'
                    : error == '20'
                    ? 'date of sickness cant be in the future'
                    : ''}
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0%' }}>
                <button
                  onClick={(e) => sendSickLeave(e)}
                  style={{
                    borderWidth: '0vw',
                    float: 'right',
                    marginTop: '5%',
                    marginBottom: '5%',
                    marginRight: '2%',
                  }}
                >
                  Submit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',

                    float: 'right',
                  }}
                >
                  {error == '7000' &&
                  joiMessage == `"uploadId" is not allowed to be empty`
                    ? 'please select an image'
                    : error == '0000'
                    ? 'request submitted successfully'
                    : ''}
                </div>
              </td>
            </tr>
          </table>
        ) : (
          ''
        )}
        {request == '4' ? (
          <table style={{ width: '200%', backgroundColor: color }}>
            <tr>
              <td>
                <p
                  style={{
                    color: textColor,
                    textAlign: 'center',
                    fontSize: '100%',
                  }}
                >
                  Send Maternity Leave
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    maxHeight: '10vw',
                    height: '10%',
                    overflow: 'scroll',
                    overflowX: 'hidden',
                  }}
                >
                  <table
                    style={{
                      borderStyle: 'solid',
                      borderWidth: '5%',
                      borderColor: 'black',
                      overflow: 'scroll',
                      overflowX: 'hidden',
                      height: '10%',
                      maxHeight: '10vw',
                      width: '100%',
                      marginLeft: '0%',
                    }}
                  >
                    <tr>
                      <td>
                        {uploads.length == 0 ? (
                          <p
                            style={{
                              position: 'relative',
                              left: '30%',
                              color: 'red',
                              fontSize: '100%',
                            }}
                          >
                            you have no Uploads Yet
                          </p>
                        ) : (
                          <p
                            style={{
                              position: 'fixed',
                              color: textColor,
                              fontSize: '100%',
                            }}
                          >
                            Select an Image:
                          </p>
                        )}
                      </td>
                    </tr>
                    {uploads.map((upload) => {
                      // console.log(upload)
                      return (
                        <React.Fragment>
                          <tr>
                            <td>
                              <div
                                style={{
                                  borderWidth: '10%',
                                  borderColor: 'black',
                                  float: 'right',
                                  marginLeft: '45%',
                                  marginTop: '2%',
                                }}
                              >
                                <img
                                  id={upload._id}
                                  width='20%'
                                  height='50%'
                                  src={upload.pic}
                                  style={{
                                    borderStyle: 'solid',
                                    paddingLeft: '1%',
                                    paddingRight: '1%',
                                    borderWidth: '1px',
                                    borderColor:
                                      upload._id == selectedImage
                                        ? 'white'
                                        : 'black',
                                  }}
                                  onClick={(e) => setSelectedImage(e.target.id)}
                                ></img>
                              </div>
                            </td>
                          </tr>
                        </React.Fragment>
                      )
                    })}
                  </table>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Control
                  type='text'
                  placeholder='Reason'
                  className='requestsFormStyle'
                  onChange={(e) => setReason(e.target.value)}
                />
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',
                    marginLeft: '5%',
                  }}
                >
                  {error == '7000' && joiMessage == `"reason" is required`
                    ? 'this field is required*'
                    : ''}
                </div>
              </td>
            </tr>

            <tr>
              <td style={{ padding: '0%', color: textColor }}>
                Date:
                <DatePicker
                  className='DatePickerRequests'
                  value={date}
                  onChange={setDate}
                ></DatePicker>
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',
                    marginLeft: '25%',
                  }}
                >
                  {error == '105'
                    ? `you cant submit sick leave 3 days after sickness day`
                    : error == '7000' &&
                      joiMessage == `"dateOfSickness" is required`
                    ? 'this field is required*'
                    : error == '20'
                    ? 'date of sickness cant be in the future'
                    : ''}
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0%' }}>
                <button
                  onClick={(e) => sendMaternityLeave(e)}
                  style={{
                    borderWidth: '0vw',
                    float: 'right',
                    marginTop: '5%',
                    marginBottom: '5%',
                    marginRight: '2%',
                  }}
                >
                  Submit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',

                    float: 'right',
                  }}
                >
                  {error == '7000' &&
                  joiMessage == `"uploadId" is not allowed to be empty`
                    ? 'please select an image'
                    : error == '0000'
                    ? 'request submitted successfully'
                    : error == '21'
                    ? 'males cannot send maternity leaves'
                    : ''}
                </div>
              </td>
            </tr>
          </table>
        ) : (
          ''
        )}
        {request == '5' ? (
          <table style={{ width: '200%', backgroundColor: color }}>
            <tr>
              <td>
                <p
                  style={{
                    color: textColor,
                    textAlign: 'center',
                    fontSize: '100%',
                  }}
                >
                  Send Accidental Leave
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Control
                  type='text'
                  placeholder='Reason'
                  className='requestsFormStyle'
                  onChange={(e) => setReason(e.target.value)}
                />
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',
                    marginLeft: '5%',
                  }}
                >
                  {error == '7000' && joiMessage == `"reason" is required`
                    ? 'this field is required*'
                    : ''}
                </div>
              </td>
            </tr>

            <tr>
              <td style={{ padding: '0%', color: textColor }}>
                Date:
                <DatePicker
                  className='DatePickerRequests'
                  value={date}
                  onChange={setDate}
                ></DatePicker>
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',
                    marginLeft: '30%',
                  }}
                >
                  {error == '22'
                    ? `date cant be in the future`
                    : error == '7000' && joiMessage == `"date" is required`
                    ? 'this field is required*'
                    : ''}
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0%' }}>
                <button
                  onClick={(e) => sendAccidentalLeave(e)}
                  style={{
                    borderWidth: '0vw',
                    float: 'right',
                    marginTop: '5%',
                    marginBottom: '5%',
                    marginRight: '2%',
                  }}
                >
                  Submit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',

                    float: 'right',
                  }}
                >
                  {error == '96'
                    ? `you already have a request for this slot`
                    : error == '0000'
                    ? 'request submitted successfully'
                    : error == '94'
                    ? 'your annual leave balance is < 1'
                    : ''}
                </div>
              </td>
            </tr>
          </table>
        ) : (
          ''
        )}
        {request == '6' ? (
          <table style={{ width: '200%', backgroundColor: color }}>
            <tr>
              <td>
                <p
                  style={{
                    color: textColor,
                    textAlign: 'center',
                    fontSize: '100%',
                  }}
                >
                  Send Annual Leave
                </p>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Control
                  type='text'
                  placeholder='Reason'
                  className='requestsFormStyle'
                  onChange={(e) => setReason(e.target.value)}
                />
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',
                    marginLeft: '5%',
                  }}
                >
                  {error == '7000' && joiMessage == `"reason" is required`
                    ? 'this field is required*'
                    : ''}
                </div>
              </td>
            </tr>

            <tr>
              <td style={{ padding: '0%', color: textColor }}>
                Date:
                <DatePicker
                  className='DatePickerRequests'
                  value={date}
                  onChange={setDate}
                ></DatePicker>
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',
                    marginLeft: '30%',
                  }}
                >
                  {error == '25'
                    ? `date cant be in the past or the current date`
                    : error == '7000' && joiMessage == `"date" is required`
                    ? 'this field is required*'
                    : ''}
                </div>
              </td>
            </tr>
            <tr>
              <td style={{ padding: '0%' }}>
                <button
                  onClick={(e) => sendAnnualLeave(e)}
                  style={{
                    borderWidth: '0vw',
                    float: 'right',
                    marginTop: '5%',
                    marginBottom: '5%',
                    marginRight: '2%',
                  }}
                >
                  Submit
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div
                  style={{
                    color: 'red',
                    fontSize: '80%',

                    float: 'right',
                  }}
                >
                  {error == '96'
                    ? `you already have a request for this slot`
                    : error == '0000'
                    ? 'request submitted successfully'
                    : error == '94'
                    ? 'your annual leave balance is < 1'
                    : error == '26'
                    ? 'you have already placed a request'
                    : ''}
                </div>
              </td>
            </tr>
          </table>
        ) : (
          ''
        )}
      </div>
    </React.Fragment>
  )
}
