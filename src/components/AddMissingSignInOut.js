import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import axios from 'axios'

import login from '../Images/login.png'
import logout from '../Images/logout.png'
import Button from 'react-bootstrap/Button'

import AddMissingSignIn from './AddMissingSignIn'
import AddMissingSignOut from './AddMissingSignOut'
import HrSideBar from './hrComponents/HrSideBar'
export default function AddMissingSignInOut(props) {
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [error, setError] = useState('')
  const [show, setShow] = useState(false)
  const [showOut, setShowOut] = useState(false)
  const signIn = () => {
    setShow(true)
  }

  const signOut = () => {
    setShowOut(true)
  }
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <HrSideBar></HrSideBar>
        <div style={{ marginLeft: '1vw', marginTop: '2vw' }}>
          <AddMissingSignIn
            show={show}
            setClose={() => setShow(false)}
          ></AddMissingSignIn>
          <AddMissingSignOut
            show={showOut}
            setClose={() => setShowOut(false)}
          ></AddMissingSignOut>
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
                        variant='primary'
                        style={{ width: '100%', fontSize: '80%' }}
                        onClick={() => signIn()}
                      >
                        Add missing SignIn
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
                        style={{ width: '100%', fontSize: '80%' }}
                        onClick={() => signOut()}
                      >
                        Add missing SignOut
                      </Button>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </React.Fragment>
  )
}
