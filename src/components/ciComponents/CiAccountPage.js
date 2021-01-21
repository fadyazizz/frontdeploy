import React, { useState } from 'react'
import logoutImage from '../../Images/logout.png'
import viewProfile from '../../Images/accountImage.png'
import updateProfile from '../../Images/updateProfile.png'
import resetPassword from '../../Images/settings.png'
import clock from '../../Images/clock.png'
import attendance from '../../Images/attendance.png'
import calendar from '../../Images/calendar.png'
import schedule from '../../Images/schedule.png'
import '../../StyleSheets/staffPage.css'
import CiSideBar from './CiSideBar'
import { useHistory } from 'react-router'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../../keys'

export default function CiAccountPage() {
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
      history.push('/ciViewProfile')
    }
    const updateProfileClick = () => {
      history.push('/updateProfileCi')
    }
    const resetPasswordClick = () => {
      history.push('/resetPasswordCi')
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
    const viewScheduleClick = () => {
      history.push('/viewSchedule')
    }
    return (
        <React.Fragment>
        <div>
          <CiSideBar></CiSideBar>
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
                    style={{color:'#41ab71'}}
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
                  <div className='staffFontsStyling' onClick={viewProfileClick} style={{color:'#41ab71'}}>
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
                  <div className='staffFontsStyling' onClick={updateProfileClick} style={{color:'#41ab71'}}>
                    Update Profile
                  </div>
                </td>
                <td className='staffColumnsStyling'>
                  <img
                    src={resetPassword}
                    alt=''
                    className='staffIconStyling'
                    onClick={resetPasswordClick}
                    style={{marginLeft:'-6vw'}}
                  ></img>
                  <div className='staffFontsStyling' onClick={resetPasswordClick} style={{color:'#41ab71' ,marginLeft:'-6vw'}}>
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
                    style={{color:'#41ab71'}}
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
                    style={{color:'#41ab71'}}
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
                    style={{color:'#41ab71'}}
                  >
                    View Missing/Extra Hours
                  </div>
                </td>
                <td className='staffColumnsStyling' style={{ paddingTop: '3vw' }}>
                  <img
                    src={schedule}
                    alt=''
                    className='staffIconStyling'
                    onClick={viewScheduleClick}
                    style={{marginLeft:'-6vw'}}
                  ></img>
                  <div
                    className='staffFontsStyling'
                    onClick={viewScheduleClick}
                    style={{color:'#41ab71',marginLeft:'-4vw'}}
                  >
                    View Schedule
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
}
