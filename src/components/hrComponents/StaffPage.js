import React from 'react'
import addStaff from '../../Images/addStaff.png'
import updateStaff from '../../Images/updateStaff.png'
import deleteStaff from '../../Images/deleteStaff.png'
import exclamationMark from '../../Images/exclamationMark.png'
import clock from '../../Images/clock.png'
import attendance from '../../Images/attendance.png'
import '../../StyleSheets/staffPage.css'
import HrSideBar from './HrSideBar'
import { useHistory } from 'react-router'

export default function StaffPage() {
  const history = useHistory()
  const addStaffClick = () => {
    history.push('/addStaff')
  }
  const updateStaffClick = () => {
    history.push('/updateStaff')
  }
  const deleteStaffClick = () => {
    history.push('/deleteStaff')
  }
  const addMissingSignInOutClick = () => {
    history.push('/addMissingSingInOut')
  }
  const viewAttendanceClick = () => {
    history.push('/hr/viewAttendance')
  }
  const viewMissingHoursDaysClick = () => {
    history.push('/viewMissingHoursDays')
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
                  src={addStaff}
                  alt=''
                  className='staffIconStyling'
                  onClick={addStaffClick}
                ></img>
                <div className='staffFontsStyling' onClick={addStaffClick}>
                  Add Staff
                </div>
              </td>
              <td className='staffColumnsStyling'>
                <img
                  src={updateStaff}
                  alt=''
                  className='staffIconStyling'
                  onClick={updateStaffClick}
                ></img>
                <div className='staffFontsStyling' onClick={updateStaffClick}>
                  Update Staff
                </div>
              </td>
              <td className='staffColumnsStyling'>
                <img
                  src={deleteStaff}
                  alt=''
                  className='staffIconStyling'
                  onClick={deleteStaffClick}
                ></img>
                <div className='staffFontsStyling' onClick={deleteStaffClick}>
                  Delete Staff
                </div>
              </td>
            </tr>

            <tr>
              <td className='staffColumnsStyling' style={{ paddingTop: '3vw' }}>
                <img
                  src={exclamationMark}
                  alt=''
                  className='staffIconStyling'
                  onClick={addMissingSignInOutClick}
                ></img>
                <div
                  className='staffFontsStyling'
                  onClick={addMissingSignInOutClick}
                >
                  Add Missing <br></br> SignIn/SignOut
                </div>
              </td>
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
                  View Attendance Records
                </div>
              </td>
              <td className='staffColumnsStyling' style={{ paddingTop: '3vw' }}>
                <img
                  src={clock}
                  alt=''
                  className='staffIconStyling'
                  onClick={viewMissingHoursDaysClick}
                ></img>
                <div
                  className='staffFontsStyling'
                  onClick={viewMissingHoursDaysClick}
                >
                  View Missing <br></br> Hours/Days
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}
