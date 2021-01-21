import React from 'react'
import addIcon from '../../Images/addIcon.png'
import updateIcon from '../../Images/updateIcon.png'
import deleteIcon from '../../Images/deleteIcon.png'
import '../../StyleSheets/facultyPage.css'
import HrSideBar from './HrSideBar'
import { useHistory } from 'react-router'
export default function DepartmentPage() {
    const history = useHistory()
  const addDepartmentClick = () => {
    history.push('/addDepartment')
  }
  const updateDepartmentClick = () => {
    history.push('/updateDepartment')
  }
  const deleteDepartmentClick = () => {
    history.push('/deleteDepartment')
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
                  onClick={addDepartmentClick}
                ></img>
                <div className='facultyFontsStyling1' onClick={addDepartmentClick}>
                  Add Department
                </div>
              </td>
              <td className='columnsStyling1'>
                <img
                  src={updateIcon}
                  alt=''
                  className='IconStyling1'
                  onClick={updateDepartmentClick}
                ></img>
                <div
                  className='facultyFontsStyling1'
                  onClick={updateDepartmentClick}
                >
                  Update Department
                </div>
              </td>
              <td className='columnsStyling1'>
                <img
                  src={deleteIcon}
                  alt=''
                  className='deleteIconStyling1'
                  onClick={deleteDepartmentClick}
                ></img>
                <div
                  className='facultyFontsStyling1'
                  onClick={deleteDepartmentClick}
                >
                  Delete Department
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
    )
}
