import React from 'react'
import addIcon from '../../Images/addIcon.png'
import updateIcon from '../../Images/updateIcon.png'
import deleteIcon from '../../Images/deleteIcon.png'
import '../../StyleSheets/facultyPage.css'
import HrSideBar from './HrSideBar'
import { useHistory } from 'react-router'
export default function FacultyPage() {
  const history = useHistory()
  const addFacultyClick = () => {
    history.push('/addFaculty')
  }
  const updateFacultyClick = () => {
    history.push('/updateFaculty')
  }
  const deleteFacultyClick = () => {
    history.push('/deleteFaculty')
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
                  onClick={addFacultyClick}
                ></img>
                <div className='facultyFontsStyling1' onClick={addFacultyClick}>
                  Add Faculty
                </div>
              </td>
              <td className='columnsStyling1'>
                <img
                  src={updateIcon}
                  alt=''
                  className='IconStyling1'
                  onClick={updateFacultyClick}
                ></img>
                <div
                  className='facultyFontsStyling1'
                  onClick={updateFacultyClick}
                >
                  Update Faculty
                </div>
              </td>
              <td className='columnsStyling1'>
                <img
                  src={deleteIcon}
                  alt=''
                  className='deleteIconStyling1'
                  onClick={deleteFacultyClick}
                ></img>
                <div
                  className='facultyFontsStyling1'
                  onClick={deleteFacultyClick}
                >
                  Delete Faculty
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}
