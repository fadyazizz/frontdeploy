import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useHistory } from 'react-router'
import login from '../../Images/clock.png'
import logout from '../../Images/calendar.png'
import Button from 'react-bootstrap/Button'
import HrSideBar from './HrSideBar'
export default function AddMissingSignInOut(props) {
  const history = useHistory()
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <HrSideBar></HrSideBar>
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
                    onClick={() =>
                      history.push('/hr/viewStaffWithMissingHours')
                    }
                  >
                    Missing Hours
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
                    onClick={() => history.push('/hr/viewStaffWithMissingDays')}
                  >
                    Missing Days
                  </Button>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  )
}
