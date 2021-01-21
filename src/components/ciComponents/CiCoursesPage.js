import React from 'react'
import viewImage from '../../Images/view.png'
import assignment from '../../Images/assignment.png'
import '../../StyleSheets/hodPages.css'
import CiSideBar from './CiSideBar'
import { useHistory } from 'react-router'

export default function CiCoursesPage() {
  const history = useHistory()

  const courseCoverageClick = () => {
    history.push('/CI/viewCourseCoverage')
  }
  const slotAssignmentClick = () => {
    history.push('/CI/slotAssignment')
  }
  return (
    <React.Fragment>
      <div>
        <CiSideBar></CiSideBar>
        <table style={{ marginLeft: '15vw', marginTop: '-37vw' }}>
          <tbody>
            <tr>
              <td className='hodcolumnsStyling1'>
                <img
                  src={viewImage}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={courseCoverageClick}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={courseCoverageClick}
                  style={{ color: '#41ab71', marginLeft: '-2vw' }}
                >
                  View Course Coverage
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={assignment}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={slotAssignmentClick}
                  style={{ marginLeft: '4vw' }}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={slotAssignmentClick}
                  style={{ color: '#41ab71', marginLeft: '3vw' }}
                >
                  View Slots Assignment
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}
