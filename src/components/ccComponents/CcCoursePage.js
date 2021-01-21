import React from 'react'
import addIcon from '../../Images/addIcon.png'
import updateIcon from '../../Images/updateIcon.png'
import deleteIcon from '../../Images/deleteIcon.png'
import '../../StyleSheets/hodPages.css'
import CcSideBar from './CcSideBar'
import { useHistory } from 'react-router'

export default function CcCoursePage() {
    const history = useHistory()
    const addCourseSlotClick = () => {
      history.push('/addCourseSlot')
    }
    const updateCourseSlotClick = () => {
      history.push('/updateCourseSlot')
    }
    const deleteCourseSlotClick = () => {
      history.push('/deleteCourseSlot')
    }
    
    return (
        <React.Fragment>
      <div>
        <CcSideBar></CcSideBar>
        <table style={{ marginLeft: '15vw', marginTop: '-35vw' }}>
          <tbody>
            <tr>
              <td className='hodcolumnsStyling1'>
                <img
                  src={addIcon}
                  alt=''
                  className='hodaddIconStyling1'
                  onClick={addCourseSlotClick}
                ></img>
                <div className='hodFontsStyling1' onClick={addCourseSlotClick} style={{color:'#999999'}}>
                  Add Course Slot
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={updateIcon}
                  alt=''
                  className='hodIconStyling1'
                  onClick={updateCourseSlotClick}
                ></img>
                <div className='hodFontsStyling1' onClick={updateCourseSlotClick} style={{color:'#999999'}}>
                  Update Course Slot
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={deleteIcon}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={deleteCourseSlotClick}
                ></img>
                <div className='hodFontsStyling1' onClick={deleteCourseSlotClick} style={{color:'#999999'}}>
                  Delete Course Slot
                </div>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
    )
}
