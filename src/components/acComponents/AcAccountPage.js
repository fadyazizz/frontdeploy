import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../../globalState/actions/AuthActions'
import { backendLink } from '../../keys'
import logoutImage from '../../Images/logout.png'
import viewProfile from '../../Images/accountImage.png'
import updateProfile from '../../Images/updateProfile.png'
import resetPassword from '../../Images/settings.png'
import clock from '../../Images/clock.png'
import attendance from '../../Images/attendance.png'
import calendar from '../../Images/calendar.png'
import schedule from '../../Images/schedule.png'
import notification from '../../Images/notification.png'
import '../../StyleSheets/staffPage.css'
import AcSideBar from './AcSideBar'
import { useHistory } from 'react-router'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../globalState/actions/AuthActions'
export default function AcAccountPage() {
  const [successMessage, setSuccessMessage] = useState('')
  const [haveNotification, setHaveNotification] = useState(false)
  const [requests, SetRequests] = useState([])
  const token = useSelector((state) => state.token)
  const dispatch = useDispatch()
  // const logout = async (event) => {
  //   event.preventDefault()
  //   event.stopPropagation()
  //   await axios({
  //     url: 'http://localhost:7000/account/logout',
  //     method: 'post',
  //     headers: { authorization: token },
  //     data: {},
  //   }).then((res) => {
  //     setSuccessMessage('success')
  //   })
  // }

  const call = async () => {
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/academicMember/notifyAcceptRejectRequest`,
        method: 'put',
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          console.log(res.data)
          if (res.data.statuscode === '0000') {
            SetRequests(res.data.requests)
            if (res.data.requests.length > 0) {
              setHaveNotification(true)
            }
          } else {
            console.log(res.data)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  useEffect(async () => {
    //console.log('here')
    setTimeout(call, 5000)
  }, [requests])
  const history = useHistory()
  const logoutClick = () => {
    history.push('/login')
  }
  const viewProfileClick = () => {
    history.push('/acViewProfile')
  }
  const updateProfileClick = () => {
    history.push('/updateProfileAc')
  }
  const resetPasswordClick = () => {
    history.push('/resetPasswordAc')
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
    history.push('/ta/viewSchedule')
  }
  const viewNotifications = () => {
    history.push('/ta/viewNotification')
  }
 
  return (
    <React.Fragment>
      <div>
        <AcSideBar></AcSideBar>
        <table style={{ marginLeft: '18vw', marginTop: '-45vw' }}>
          <tbody>
            <tr>
              <td className='staffColumnsStyling'>
                <img
                  src={logoutImage}
                  alt=''
                  className='staffIconStyling'
                  onClick={() => dispatch(logout(history))}
                  style={{ width: '7vw', height: '7vw' }}
                ></img>
                <div
                  className='staffFontsStyling'
                  onClick={() => dispatch(logout(history))}
                  style={{ color: '#e08eb4' }}
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
                  style={{ width: '7vw', height: '7vw' }}
                ></img>
                <div
                  className='staffFontsStyling'
                  onClick={viewProfileClick}
                  style={{ color: '#e08eb4' }}
                >
                  View Profile
                </div>
              </td>
              <td className='staffColumnsStyling'>
                <img
                  src={updateProfile}
                  alt=''
                  className='staffIconStyling'
                  onClick={updateProfileClick}
                  style={{ width: '7vw', height: '7vw' }}
                ></img>
                <div
                  className='staffFontsStyling'
                  onClick={updateProfileClick}
                  style={{ color: '#e08eb4' }}
                >
                  Update Profile
                </div>
              </td>
            </tr>

            <tr>
              <td className='staffColumnsStyling'>
                <img
                  src={resetPassword}
                  alt=''
                  className='staffIconStyling'
                  onClick={resetPasswordClick}
                  // style={{ marginLeft: '-6vw' }}
                  style={{ width: '7vw', height: '7vw' }}
                ></img>
                <div
                  className='staffFontsStyling'
                  onClick={resetPasswordClick}
                  style={{ color: '#e08eb4' }}
                >
                  Reset Password
                </div>
              </td>
              <td className='staffColumnsStyling' style={{ paddingTop: '2vw' }}>
                <img
                  src={attendance}
                  alt=''
                  className='staffIconStyling'
                  onClick={viewAttendanceClick}
                  style={{ width: '7vw', height: '7vw' }}
                ></img>
                <div
                  className='staffFontsStyling'
                  onClick={viewAttendanceClick}
                  style={{ color: '#e08eb4' }}
                >
                  View Attendance
                </div>
              </td>
              <td className='staffColumnsStyling' style={{ paddingTop: '2vw' }}>
                <img
                  src={calendar}
                  alt=''
                  className='staffIconStyling'
                  onClick={viewMissingDaysClick}
                  style={{ width: '7vw', height: '7vw' }}
                ></img>
                <div
                  className='staffFontsStyling'
                  onClick={viewMissingDaysClick}
                  style={{ color: '#e08eb4' }}
                >
                  View Missing Days
                </div>
              </td>
            </tr>
            <tr>
              <td className='staffColumnsStyling' style={{ paddingTop: '2vw' }}>
                <img
                  src={clock}
                  alt=''
                  className='staffIconStyling'
                  onClick={viewMissingHoursClick}
                  style={{ width: '7vw', height: '7vw' }}
                ></img>
                <div
                  className='staffFontsStyling'
                  onClick={viewMissingHoursClick}
                  style={{ color: '#e08eb4', marginLeft: '-2vw' }}
                >
                  View Missing/Extra <br></br> Hours
                </div>
              </td>
              <td className='staffColumnsStyling' style={{ paddingTop: '2vw' }}>
                <img
                  src={schedule}
                  alt=''
                  className='staffIconStyling'
                  onClick={viewScheduleClick}
                  // style={{ marginLeft: '-6vw' }}
                  style={{ width: '7vw', height: '7vw' }}
                ></img>
                <div
                  className='staffFontsStyling'
                  onClick={viewScheduleClick}
                  style={{ color: '#e08eb4' }}
                >
                  View Schedule
                </div>
              </td>
              <td className='staffColumnsStyling' style={{ paddingTop: '2vw' }}>
                <img
                  src={notification}
                  alt=''
                  className='staffIconStyling'
                  onClick={viewNotifications}
                  // style={{ marginLeft: '-6vw' }}
                  style={{ width: '7vw', height: '7vw' }}
                ></img>
                {haveNotification ? (
                  <div
                    className='staffFontsStyling'
                    onClick={viewNotifications}
                    style={{ color: 'red' }}
                  >
                    {' '}
                    Notification
                  </div>
                ) : (
                  <div
                    className='staffFontsStyling'
                    onClick={viewNotifications}
                    style={{ color: '#e08eb4' }}
                  >
                    Notification
                  </div>
                )}
                {/* <div
                  className='staffFontsStyling'
                  onClick={viewNotifications}
                  style={{ color: '#e08eb4', marginLeft: '-4vw' }}
                >
                  {haveNotification ? 'yastaaaa' : 'mesh yastaaaaa'}
                </div> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}
