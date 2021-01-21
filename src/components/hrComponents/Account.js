import React, { useState } from 'react'
import logoutImage from '../../Images/logout.png'
import viewProfile from '../../Images/accountImage.png'
import updateProfile from '../../Images/updateProfile.png'
import resetPassword from '../../Images/settings.png'
import clock from '../../Images/clock.png'
import attendance from '../../Images/attendance.png'
import calendar from '../../Images/calendar.png'
import '../../StyleSheets/staffPage.css'
import HrSideBar from './HrSideBar'
import { useHistory } from 'react-router'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function Account() {
  const [successMessage, setSuccessMessage] = useState('')
  const token = useSelector((state) => state.token)

  const logout = async (event) => {
    event.preventDefault()
    event.stopPropagation()
    await axios({
      url: `${backendLink}/account/logout`,
      method: 'post',
      headers: { authorization: token },
      data: {},
    }).then((res) => {
      setSuccessMessage('success')
    })
  }

  const history = useHistory()
  const logoutClick = () => {
    history.push('/login')
  }
  const viewProfileClick = () => {
    history.push('/hrViewProfile')
  }
  const updateProfileClick = () => {
    history.push('/UpdateProfileHr')
  }
  const resetPasswordClick = () => {
    history.push('/resetPassword')
  }
  const viewAttendanceClick = () => {
    history.push('/viewAttendance')
  }
  const viewMissingDaysClick = () => {
    history.push('/viewMissingDays')
  }
  const viewMissingHoursClick = () => {
    history.push('/viewMissingHours')
  }
  return (
    <React.Fragment>
      <div>
        <HrSideBar></HrSideBar>
        <table style={{ marginLeft: '15vw', marginTop: '-40vw' }}>
          <tbody>
            <tr>
              <td className='staffColumnsStyling'>
                <img
                  src={logoutImage}
                  alt=''
                  className='staffIconStyling'
                  onClick={logoutClick}
                  onChange={(event) => logout(event)}
                ></img>
                <div
                  className='staffFontsStyling'
                  onClick={logoutClick}
                  onChange={(event) => logout(event)}
                >
                  Logout
                </div>
              </td>
              <td className='staffColumnsStyling'>
                <img
                  src={viewProfile}
                  alt=''
                  className='staffIconStyling'
                  onClick={viewProfileClick}
                ></img>
                <div className='staffFontsStyling' onClick={viewProfileClick}>
                  View Profile
                </div>
              </td>
              <td className='staffColumnsStyling'>
                <img
                  src={updateProfile}
                  alt=''
                  className='staffIconStyling'
                  onClick={updateProfileClick}
                ></img>
                <div className='staffFontsStyling' onClick={updateProfileClick}>
                  Update Profile
                </div>
              </td>
              <td className='staffColumnsStyling'>
                <img
                  src={resetPassword}
                  alt=''
                  className='staffIconStyling'
                  onClick={resetPasswordClick}
                ></img>
                <div className='staffFontsStyling' onClick={resetPasswordClick}>
                  Reset Password
                </div>
              </td>
            </tr>

            <tr>
              <td className='staffColumnsStyling' style={{ paddingTop: '3vw' }}>
                <img
                  src={attendance}
                  alt=''
                  className='staffIconStyling'
                  onClick={viewAttendanceClick}
                ></img>
                <div
                  className='staffFontsStyling'
                  onClick={viewAttendanceClick}
                >
                  View Attendance
                </div>
              </td>
              <td className='staffColumnsStyling' style={{ paddingTop: '3vw' }}>
                <img
                  src={calendar}
                  alt=''
                  className='staffIconStyling'
                  onClick={viewMissingDaysClick}
                ></img>
                <div
                  className='staffFontsStyling'
                  onClick={viewMissingDaysClick}
                >
                  View Missing Days
                </div>
              </td>
              <td className='staffColumnsStyling' style={{ paddingTop: '3vw' }}>
                <img
                  src={clock}
                  alt=''
                  className='staffIconStyling'
                  onClick={viewMissingHoursClick}
                ></img>
                <div
                  className='staffFontsStyling'
                  onClick={viewMissingHoursClick}
                >
                  View Missing/Extra Hours
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}
