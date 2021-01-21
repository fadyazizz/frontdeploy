import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import axios from 'axios'

import login from '../Images/login.png'
import logout from '../Images/logout.png'
import Button from 'react-bootstrap/Button'
export default function SignInSignOut(props) {
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [error, setError] = useState('')
  const signIn = () => {
    //console.log('in the func')
    const date = new Date()

    console.log(date)
    axios({
      url: `${backendLink}/account/signIn`,
      method: 'post',
      headers: {
        authorization: token,
      },
      data: {
        startHour: date.getHours(),
        startMinute: date.getMinutes(),
        date,
      },
    })
      .then((res) => {
        console.log(res.data)
        setError(res.data.statuscode)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const signOut = () => {
    const date = new Date()

    axios({
      url: `${backendLink}/account/signOut`,
      method: 'put',
      headers: {
        authorization: token,
      },
      data: {
        endHour: date.getHours(),
        endMinute: date.getMinutes(),
        date,
      },
    })
      .then((res) => {
        console.log(res.data)
        setError(res.data.statuscode)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const color = props.color
  return (
    <React.Fragment>
      <table style={{ width: '20vw' }}>
        <tr>
          <td style={{ padding: '0%' }}>
            <table
              style={{
                border: '1px solid #bdbdbd',
                width: '100%',
                height: '100%',
              }}
            >
              <tr>
                <td style={{ padding: '0%' }}>
                  <img width='100%' height='25%' src={login} />
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: '4%' }}>
                  <Button
                    style={{
                      width: '100%',
                      fontSize: '80%',
                      backgroundColor: color,
                    }}
                    onClick={() => signIn()}
                  >
                    SignIn
                  </Button>
                </td>
              </tr>
            </table>
          </td>
          <td style={{ padding: '0%' }}>
            <table
              style={{
                border: '1px solid #bdbdbd',
                width: '100%',
                height: '100%',
              }}
            >
              <tr>
                <td style={{ padding: '0%' }}>
                  <img width='100%' height='25%' src={logout} />
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: '4%' }}>
                  <Button
                    variant='primary'
                    style={{
                      width: '100%',
                      fontSize: '80%',
                      backgroundColor: color,
                    }}
                    onClick={() => signOut()}
                  >
                    SignOut
                  </Button>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style={{ fontSize: '80%', color: 'red' }}>
            {error == '0000'
              ? 'signIn/Out recorded successfully*'
              : error == '121'
              ? 'go home it is Friday'
              : error == '69'
              ? 'signIn/Out not allowed before 7am'
              : error == '68'
              ? 'signIn/Out not allowed after 7pm'
              : error == '75'
              ? 'signIn should be followed by a signOut'
              : error == '76'
              ? 'wait atleast a minute before signingIn again'
              : error == '71'
              ? 'you cant signOut without signing in for the day'
              : error == '74'
              ? 'signOut should be followed by a signIn'
              : error == '74'
              ? 'wait at least a minute before signingOut again'
              : ''}
          </td>
        </tr>
      </table>
    </React.Fragment>
  )
}
