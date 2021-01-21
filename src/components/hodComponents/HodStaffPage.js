import React from 'react'
import staffInDepartment from '../../Images/staffInDepartment.png'
import staffInCourse from '../../Images/staffInCourse.png'
import dayoff from '../../Images/dayOff.png'
import teachingAssignment from '../../Images/teachingAssignment.png'
import '../../StyleSheets/hodPages.css'
import HodSideBar from './HodSideBar'
import { useHistory } from 'react-router'

export default function HodStaffPage() {
  const history = useHistory()
  const viewStaffInDepClick = () => {
    history.push('/viewStaffInMyDepartment')
  }
  const viewStaffInCourseClick = () => {
    history.push('/viewStaffInCourse')
  }
  const viewStaffDayOffClick = () => {
    history.push('/viewStaffDayoff')
  }
  const viewTeachingAssignmentsClick = () => {
    history.push('/viewTeachingAssignments')
  }
  return (
    <React.Fragment>
      <div>
        <HodSideBar></HodSideBar>
        <table style={{ marginLeft: '15vw', marginTop: '-35vw' }}>
          <tbody>
            <tr>
              <td className='hodcolumnsStyling1'>
                <img
                  src={staffInDepartment}
                  alt=''
                  className='hodaddIconStyling1'
                  onClick={viewStaffInDepClick}
                ></img>
                <div className='hodFontsStyling1' onClick={viewStaffInDepClick}>
                  View Staff <br></br> In My Department
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={staffInCourse}
                  alt=''
                  className='hodIconStyling1'
                  onClick={viewStaffInCourseClick}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={viewStaffInCourseClick}
                >
                  View Staff In Course
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={dayoff}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={viewStaffDayOffClick}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={viewStaffDayOffClick}
                >
                  View Staff DayOff
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={teachingAssignment}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={viewTeachingAssignmentsClick} style={{marginLeft:'1vw'}}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={viewTeachingAssignmentsClick}
                >
                  View Teaching <br></br>Assignments
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}
