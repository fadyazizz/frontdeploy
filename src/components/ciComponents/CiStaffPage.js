import React from 'react'
import staffInDepartment from '../../Images/staffInDepartment.png'
import staffInCourse from '../../Images/staffInCourse.png'
import acInCourse from '../../Images/acInCourse.png'
import addStaff from '../../Images/addStaff.png'
import updateStaff from '../../Images/updateStaff.png'
import deleteStaff from '../../Images/deleteStaff.png'

import '../../StyleSheets/hodPages.css'
import CiSideBar from './CiSideBar'
import { useHistory } from 'react-router'

export default function CiStaffPage() {
  const history = useHistory()
  const viewStaffInDepClick = () => {
    history.push('/CI/viewStaffInMyDepartment')
  }
  const viewStaffInCoursesClick = () => {
    history.push('/CI/viewStaffInCourses')
  }
  const viewStaffInCourseClick = () => {
    history.push('/CI/viewStaffInCourse')
  }
  const assignAcToSlotClick = () => {
    history.push('/CI/assignAcToSlot')
  }
  const updateAcToSlotClick = () => {
    history.push('/CI/updateAcToSlot')
  }
  const deleteAcToSlotClick = () => {
    history.push('/CI/deleteAcToSlot')
  }
  const assignAcToCCClick = () => {
    history.push('/CI/assignAcToCc')
  }
  const removeAcFromCourseClick = () => {
    history.push('/CI/removeAcFromCourse')
  }
  const assignAcToCourseClick = () => {
    history.push('/CI/assignAcToCourse')
  }
  return (
    <React.Fragment>
      <div>
        <CiSideBar></CiSideBar>
        <table style={{ marginLeft: '15vw', marginTop: '-40vw' }}>
          <tbody>
            <tr>
              <td className='hodcolumnsStyling1'>
                <img
                  src={staffInDepartment}
                  alt=''
                  className='hodaddIconStyling1'
                  onClick={viewStaffInDepClick}
                  style={{ width: '10vw', height: '10vw' }}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={viewStaffInDepClick}
                  style={{ color: '#41ab71' }}
                >
                  View Staff <br></br> In My Department
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={staffInCourse}
                  alt=''
                  className='hodIconStyling1'
                  onClick={viewStaffInCoursesClick}
                  style={{ width: '12vw', height: '12vw' }}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={viewStaffInCoursesClick}
                  style={{ color: '#41ab71' }}
                >
                  View Staff <br></br>In My Courses
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={acInCourse}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={viewStaffInCourseClick}
                  style={{ width: '12vw', height: '12vw' }}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={viewStaffInCourseClick}
                  style={{ color: '#41ab71' }}
                >
                  View Staff <br></br>Per Course
                </div>
              </td>
            </tr>

            <tr>
              <td className='hodcolumnsStyling1'>
                <img
                  src={addStaff}
                  alt=''
                  className='hodaddIconStyling1'
                  onClick={assignAcToSlotClick}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={assignAcToSlotClick}
                  style={{ color: '#41ab71' }}
                >
                  Assign Academic <br></br>Member To Slot
                </div>
              </td>
              {/* <td className='hodcolumnsStyling1'>
                <img
                  src={updateStaff}
                  alt=''
                  className='hodIconStyling1'
                  onClick={updateAcToSlotClick}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={updateAcToSlotClick}
                  style={{ color: '#41ab71' }}
                >
                  Update assigned<br></br> Academic Member
                </div>
              </td> */}
              {/* <td className='hodcolumnsStyling1'>
                <img
                  src={deleteStaff}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={deleteAcToSlotClick}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={deleteAcToSlotClick}
                  style={{ color: '#41ab71', marginLeft: '-4vw' }}
                >
                  Delete assigned <br></br> Academic Member
                </div>
              </td> */}
              <td className='hodcolumnsStyling1'>
                <img
                  src={addStaff}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={assignAcToCCClick}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={assignAcToCCClick}
                  style={{ color: '#41ab71', marginLeft: '-3vw' }}
                >
                  Assign Academic Member <br></br>To Course Coordinator
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={addStaff}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={assignAcToCourseClick}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={assignAcToCourseClick}
                  style={{ color: '#41ab71', marginLeft: '-3vw' }}
                >
                  Assign Academic<br></br> Member To Course
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={deleteStaff}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={removeAcFromCourseClick}
                  style={{ width: '10vw', height: '10vw' }}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={removeAcFromCourseClick}
                  style={{ color: '#41ab71' }}
                >
                  Remove Academic<br></br>Member From Course
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}
