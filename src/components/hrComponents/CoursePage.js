import React from 'react'
import addIcon from '../../Images/addIcon.png'
import updateIcon from '../../Images/updateIcon.png'
import deleteIcon from '../../Images/deleteIcon.png'
import '../../StyleSheets/facultyPage.css'
import HrSideBar from './HrSideBar'
import { useHistory } from 'react-router'
export default function CoursePage() {
  const history = useHistory()
  const addCourseClick = () => {
    history.push('/addCourse')
  }
  const updateCourseClick = () => {
    history.push('/updateCourse')
  }
  const deleteCourseClick = () => {
    history.push('/deleteCourse')
  }
  return (
    <React.Fragment>
      <div>
        <HrSideBar></HrSideBar>
        <table style={{ marginLeft: '15vw', marginTop: '-40vw' }}>
          <tbody>
            <tr>
              <td className='columnsStyling1'>
                <img
                  src={addIcon}
                  alt=''
                  className='addIconStyling1'
                  onClick={addCourseClick}
                ></img>
                <div className='facultyFontsStyling1' onClick={addCourseClick}>
                  Add Course
                </div>
              </td>
              <td className='columnsStyling1'>
                <img
                  src={updateIcon}
                  alt=''
                  className='IconStyling1'
                  onClick={updateCourseClick}
                ></img>
                <div
                  className='facultyFontsStyling1'
                  onClick={updateCourseClick}
                >
                  Update Course
                </div>
              </td>
              <td className='columnsStyling1'>
                <img
                  src={deleteIcon}
                  alt=''
                  className='deleteIconStyling1'
                  onClick={deleteCourseClick}
                ></img>
                <div
                  className='facultyFontsStyling1'
                  onClick={deleteCourseClick}
                >
                  Delete Course
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}
