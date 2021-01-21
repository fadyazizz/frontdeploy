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
  const [signInHour, setSignInHour] = useState(undefined)
  const [signInMinute, setSignInMinute] = useState(undefined)
  const [staffId, setStaffId] = useState('')
  const [date, setDate] = useState(new Date())
  const submit = (e) => {
    e.preventDefault()
    e.stopPropagation()

    //console.log(date.getDate())
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const month =
      date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1
    const year = date.getFullYear()
    // console.log(`${year}-${month}-${day}`)

    axios({
      url: `${backendLink}/hr/addMissingSignIn`,
      method: 'post',
      headers: {
        authorization: token,
      },
      data: {
        date: `${year}-${month}-${day}`,
        staffId,
        signInHour: parseInt(signInHour),
        signInMinute: parseInt(signInMinute),
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
                  left: '30%',
                }}
              >
                Add Missing Sign In
                <img
                  style={{ marginLeft: '20%', marginTop: '-6%' }}
                  width='4%'
                  src={close}
                  onClick={() => {
                    props.setClose()
                    setSignInMinute(undefined)
                    setSignInHour(undefined)
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
                  ? 'you can not add a sign in for yourself'
                  : ''}
              </div>
            </td>
          </tr>

          <tr style={{ padding: '0%' }}>
            <td style={{ padding: '0%' }}>
              <Form.Control
                type='text'
                placeholder='Sign In Hour'
                className='signInFormStyle'
                onChange={(e) => setSignInHour(e.target.value)}
              />
              <div
                style={{
                  color: 'red',
                  fontSize: '80%',
                  marginLeft: '5%',
                }}
              >
                {error == '7000' &&
                joiMessage == `"signInHour" must be a number`
                  ? 'this field is required and must be a number'
                  : error == '7000' &&
                    joiMessage ==
                      `"signInHour" must be larger than or equal to 7`
                  ? 'value must be more than or equal 7'
                  : error == '7000' &&
                    joiMessage ==
                      `"signInHour" must be less than or equal to 23`
                  ? 'value must be less than or equal 23'
                  : ''}
              </div>
            </td>
          </tr>
          <tr style={{ padding: '0%' }}>
            <td style={{ padding: '0%' }}>
              <Form.Control
                type='text'
                placeholder='Sign In Minute'
                className='signInFormStyle'
                onChange={(e) => setSignInMinute(e.target.value)}
              />
              <div
                style={{
                  color: 'red',
                  fontSize: '80%',
                  marginLeft: '5%',
                }}
              >
                {error == '7000' &&
                joiMessage == `"signInMinute" must be a number`
                  ? 'this field is required and must be a number'
                  : error == '7000' &&
                    joiMessage ==
                      `"signInMinute" must be larger than or equal to 1`
                  ? 'value must be more than or equal 1'
                  : error == '7000' &&
                    joiMessage ==
                      `"signInMinute" must be less than or equal to 59`
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
            </td>
          </tr>
          <tr>
            <td>
              <table style={{ marginLeft: '80%' }}>
                <tr>
                  <td style={{ padding: '0%' }}>
                    <button
                      style={{
                        borderWidth: '0',
                        float: 'right',
                        marginRight: '0vw',
                        display: 'block',
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
                  ? 'signIn recorded successfully*'
                  : ''}
              </div>
            </td>
          </tr>
        </table>
      </Modal>
    </React.Fragment>
  )
}
