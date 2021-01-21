import React from 'react'
import addIcon from '../../Images/addIcon.png'
import updateIcon from '../../Images/updateIcon.png'
import deleteIcon from '../../Images/deleteIcon.png'
import viewImage from '../../Images/view.png'
import '../../StyleSheets/hodPages.css'
import HodSideBar from './HodSideBar'
import { useHistory } from 'react-router'

export default function HodCoursesPage() {
  const history = useHistory()
  const viewCourseClick = () => {
    history.push('/viewCourse')
  }
  const assignCIClick = () => {
    history.push('/assignCi')
  }
  const deleteCIClick = () => {
    history.push('/deleteCi')
  }
  const updateCIClick = () => {
    history.push('/updateCi')
  }
  const courseCoverageClick = () => {
    history.push('/viewCourseCoverage')
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
                  src={addIcon}
                  alt=''
                  className='hodaddIconStyling1'
                  onClick={assignCIClick}
                ></img>
                <div className='hodFontsStyling1' onClick={assignCIClick}>
                  Assign Course Instructor
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={updateIcon}
                  alt=''
                  className='hodIconStyling1'
                  onClick={updateCIClick}
                ></img>
                <div className='hodFontsStyling1' onClick={updateCIClick}>
                  Update Course Instructor
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={deleteIcon}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={deleteCIClick}
                ></img>
                <div className='hodFontsStyling1' onClick={deleteCIClick}>
                  Delete Course Instructor
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={viewImage}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={courseCoverageClick}
                ></img>
                <div className='hodFontsStyling1' onClick={courseCoverageClick}>
                  View Course Coverage
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}
