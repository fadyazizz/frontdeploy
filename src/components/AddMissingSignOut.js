import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import '../StyleSheets/signIn.css'
import close from '../Images/cancel.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DatePicker from 'react-date-picker'

export default function AddMissingSignIn(props) {
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [error, setError] = useState('')
  const [joiMessage, setJoiMessage] = useState('')
  const [signOutHour, setSignOutHour] = useState(undefined)
  const [signOutMinute, setSignOutMinute] = useState(undefined)
  const [staffId, setStaffId] = useState('')
  const [date, setDate] = useState(new Date())
  const submit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    // console.log(signInMinute)
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const month =
      date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1
    const year = date.getFullYear()
    axios({
      url: `${backendLink}/hr/addMissingSignOut`,
      method: 'put',
      headers: {
        authorization: token,
      },
      data: {
        date: `${year}-${month}-${day}`,
        staffId,
        signOutHour: parseInt(signOutHour),
        signOutMinute: parseInt(signOutMinute),
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
  return (
    <React.Fragment>
      <Modal show={props.show}>
        <table
          style={{ width: '100%', backgroundColor: '#616eff', height: '50vh' }}
        >
          <tr>
            <td style={{ padding: '0%' }}>
              <div
                style={{
                  fontSize: '150%',
                  color: 'white',
                  position: 'relative',
                  left: '29%',
                }}
              >
                Add Missing Sign Out
                <img
                  style={{ marginLeft: '17%', marginTop: '-6%' }}
                  width='4%'
                  src={close}
                  onClick={() => {
                    props.setClose()
                    setSignOutMinute(undefined)
                    setSignOutHour(undefined)
                    setStaffId('')
                    setError('')
                    setDate(new Date())
                  }}
                ></img>
              </div>
            </td>
          </tr>
          <tr style={{ padding: '0%' }}>
            <td style={{ padding: '0%' }}>
              <Form.Control
                type='text'
                placeholder='Staff Id'
                className='signInFormStyle'
                onChange={(e) => setStaffId(e.target.value)}
              />
              <div
                style={{
                  color: 'red',
                  fontSize: '80%',
                  marginLeft: '5%',
                }}
              >
                {error == '7000' &&
                joiMessage == `"staffId" is not allowed to be empty`
                  ? 'this field is required*'
                  : error == '72'
                  ? 'invalid user id'
                  : error == '122'
                  ? 'you can not add a sign out for yourself'
                  : ''}
              </div>
            </td>
          </tr>
          <tr style={{ padding: '0%' }}>
            <td style={{ padding: '0%' }}>
              <Form.Control
                type='text'
                placeholder='Sign Out Hour'
                className='signInFormStyle'
                onChange={(e) => setSignOutHour(e.target.value)}
              />
              <div
                style={{
                  color: 'red',
                  fontSize: '80%',
                  marginLeft: '5%',
                }}
              >
                {error == '7000' &&
                joiMessage == `"signOutHour" must be a number`
                  ? 'this field is required and must be a number'
                  : error == '7000' &&
                    joiMessage ==
                      `"signOutHour" must be larger than or equal to 7`
                  ? 'value must be more than or equal 7'
                  : error == '7000' &&
                    joiMessage ==
                      `"signOutHour" must be less than or equal to 19`
                  ? 'value must be less than or equal 19'
                  : ''}
              </div>
            </td>
          </tr>
          <tr style={{ padding: '0%' }}>
            <td style={{ padding: '0%' }}>
              <Form.Control
                type='text'
                placeholder='Sign Out Minute'
                className='signInFormStyle'
                onChange={(e) => setSignOutMinute(e.target.value)}
              />
              <div
                style={{
                  color: 'red',
                  fontSize: '80%',
                  marginLeft: '5%',
                }}
              >
                {error == '7000' &&
                joiMessage == `"signOutMinute" must be a number`
                  ? 'this field is required and must be a number'
                  : error == '7000' &&
                    joiMessage ==
                      `"signOutMinute" must be larger than or equal to 1`
                  ? 'value must be more than or equal 1'
                  : error == '7000' &&
                    joiMessage ==
                      `"signOutMinute" must be less than or equal to 59`
                  ? 'value must be less than or equal 59'
                  : ''}
              </div>
            </td>
          </tr>
          <tr style={{ padding: '0%' }}>
            <td style={{ padding: '0%' }}>
              <DatePicker
                className='DatePickerSignIn'
                value={date}
                onChange={setDate}
              ></DatePicker>
              <div
                style={{
                  color: 'red',
                  fontSize: '80%',
                  marginLeft: '34%',
                }}
              >
                {error == '123' ? 'no sign in record for that day ' : ''}
              </div>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '0%' }}>
              <table style={{ marginLeft: '80%' }}>
                <tr style={{ display: 'flex', flexDirection: 'column' }}>
                  <td style={{ padding: '0%' }}>
                    <button
                      style={{
                        borderWidth: '0',
                        float: 'right',
                      }}
                      onClick={(e) => {
                        submit(e)
                      }}
                      type='submit'
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '0%' }}>
              <div
                style={{
                  color: 'red',
                  fontSize: '80%',
                  float: 'right',
                }}
              >
                {error == '7001'
                  ? 'you are not authorized'
                  : error == '0000'
                  ? 'sign out recorded successfully*'
                  : error == '73'
                  ? 'sign out time can not be before the time of the sign in'
                  : ''}
              </div>
            </td>
          </tr>
        </table>
      </Modal>
    </React.Fragment>
  )
}
