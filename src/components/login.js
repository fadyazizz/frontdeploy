import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import usernameImage from '../Images/username.png'
import '../StyleSheets/login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import arrowImage from '../Images/curvedArrow.png'
import classRoom from '../Images/classRoom.png'
import Logo from '../Images/Logo.png'
import { loginAPI } from '../globalState/actions/AuthActions'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Login(props) {
  const params = useParams()
  const history = useHistory()
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const [error, setError] = useState('')
  const [joiMessage, setJoiMessage] = useState('')
  const dispatch = useDispatch()
  const emailChange = (event) => {
    //console.log(event.target.value)
    setEmail(event.target.value)
  }
  const passwordChange = (event) => {
    //console.log(event.target.value, 'password')
    setPassword(event.target.value)
  }
  const logIn = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('ana fe logInnnnnnn')
    const loginAPIData = await dispatch(loginAPI(email, password, history))
    const error = loginAPIData.error
    const statuscode = loginAPIData.statuscode
    if (error) {
      setJoiMessage(error)
      setError(statuscode)
      //console.log(res.data.statuscode)
      return
    }
  }

  return (
    <React.Fragment>
      <table className='logInTable'>
        <tr className='logInHeader'>
          <td style={{ padding: '0%', width: '100%' }}>
            <div className='logInCircle'>
              <img
                className='logInLogoImage'
                height='85%'
                width='65%'
                src={Logo}
              ></img>
            </div>
          </td>
        </tr>

        <tr className='logInHeader2'>
          <td style={{ padding: '0%', width: '100vw' }}>
            <table>
              <tr>
                <td style={{ height: '90vh' }}>
                  {/* <div style={{ height: '50%', width: '50%', marginTop: '-4vw' }}>
                
                </div> */}

                  <img
                    style={{ marginTop: '-13vh' }}
                    height='100%'
                    width='100%'
                    src={arrowImage}
                  ></img>
                  <img
                    height='40%'
                    width='70%'
                    src={classRoom}
                    style={{
                      marginTop: '-60vh',
                      marginLeft: '3vh',
                    }}
                  ></img>
                </td>
                <td style={{ height: '90vh' }}>
                  <Card className='cardStyle'>
                    <Card.Body style={{ padding: '0vw' }}>
                      <Image
                        className='usernameImageStyle'
                        src={usernameImage}
                      ></Image>
                      <Form style={{ marginTop: '1vw' }}>
                        <Form.Group>
                          <Form.Label className='labelStyle'>
                            Email address
                          </Form.Label>
                          {error == '7000' ? (
                            joiMessage ==
                            `"email" is not allowed to be empty` ? (
                              <div className='logInError'>
                                this field is required*
                              </div>
                            ) : joiMessage ==
                              `"email" must be a valid email` ? (
                              <div className='logInError'>
                                enter a valid email format
                              </div>
                            ) : (
                              ''
                            )
                          ) : error == '60' ? (
                            <div className='logInError'>email not found</div>
                          ) : (
                            ''
                          )}

                          <Form.Control
                            className='formStyle'
                            type='email'
                            placeholder='Enter email'
                            onChange={(event) => emailChange(event)}
                          />
                        </Form.Group>

                        <Form.Group>
                          <Form.Label className='labelStyle'>
                            Password
                          </Form.Label>
                          {error == '7000' &&
                          joiMessage ==
                            `"password" is not allowed to be empty` ? (
                            <div className='logInError'>
                              this field is required*
                            </div>
                          ) : error == '61' ? (
                            <div className='logInError'>wrong password</div>
                          ) : (
                            ''
                          )}
                          <Form.Control
                            className='formStyle'
                            type='password'
                            placeholder='Password'
                            onChange={(event) => passwordChange(event)}
                          />
                        </Form.Group>
                        <button
                          type='submit'
                          className='buttonStyle'
                          onClick={(e) => logIn(e)}
                        >
                          Login
                        </button>
                      </Form>
                    </Card.Body>
                  </Card>
                </td>
              </tr>
            </table>
          </td>

          {/* <td style={{ padding: '0%', margin: '0%' }}>
          <div>
            
          </div>
        </td> */}
        </tr>
      </table>
    </React.Fragment>
  )
}
