import React, { useEffect, useState } from 'react'
import accountImage from '../../Images/accountImage.png'
import coursesImage from '../../Images/coursesImage.png'
import staffImage from '../../Images/staffImage.png'
import back from '../../Images/back.png'
import requestImage from '../../Images/request.png'
import '../../StyleSheets/ciSideBar.css'
import { useHistory } from 'react-router'

export default function CiSideBar() {
  const [showAccount, setShowAccount] = useState(false)
  const [showCourses, setShowCourses] = useState(false)
  const [showStaff, setShowStaff] = useState(false)
  const [showRequests, setShowRequests] = useState(false)

  const history = useHistory()

  useEffect(() => {
    if (
      window.location.pathname === '/ciAccount' ||
      window.location.pathname === '/ciViewProfile' ||
      window.location.pathname === '/resetPasswordCi' ||
      window.location.pathname === '/updateProfileCi' ||
      window.location.pathname === '/updateEmailCi'
    ) {
      setShowAccount(true)
      setShowCourses(false)
      setShowStaff(false)
      setShowRequests(false)
    } else if (
      window.location.pathname === '/ciCoursesPage' ||
      window.location.pathname === '/CI/viewCourseCoverage' ||
      window.location.pathname === '/CI/slotAssignment'
    ) {
      setShowAccount(false)
      setShowCourses(true)
      setShowStaff(false)
      setShowRequests(false)
    } else if (
      window.location.pathname === '/ciStaffPage' ||
      window.location.pathname === '/CI/viewStaffInMyDepartment' ||
      window.location.pathname === '/CI/viewStaffInCourses' ||
      window.location.pathname === '/CI/viewStaffInCourse' ||
      window.location.pathname === '/CI/assignAcToSlot' ||
      window.location.pathname === '/CI/assignAcToCc' ||
      window.location.pathname === '/CI/assignAcToCourse' ||
      window.location.pathname === '/CI/removeAcFromCourse'
    ) {
      setShowAccount(false)
      setShowCourses(false)
      setShowStaff(true)
      setShowRequests(false)
    } else if (window.location.pathname === '/ciRequestPage') {
      setShowAccount(false)
      setShowCourses(false)
      setShowStaff(false)
      setShowRequests(true)
    }
  }, [])

  const accountClick = () => {
    history.push('/ciAccount')
  }
  const courseClick = () => {
    history.push('/ciCoursesPage')
  }
  const staffClick = () => {
    history.push('/ciStaffPage')
  }
  const requestClick = () => {
    history.push('/ciRequestPage')
  }
  const backClick = () => {
    history.push('/manageAccountCI')
  }
  return (
    <div className='cisideBar'>
      <table>
        <tbody>
          <tr>
            <td>
              <div className='ccimageAndFontDiv' onClick={backClick}>
                <img src={back} alt='' className='cciconsStyling'></img>
                <div
                  className='ccsideBarFontStyle'
                  style={{ marginLeft: '3vw' }}
                >
                  Back
                </div>
              </div>
            </td>
          </tr>
          {showCourses ? (
            <tr>
              <td>
                <div
                  className='ciimageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={courseClick}
                >
                  <img
                    src={coursesImage}
                    alt=''
                    className='ciiconsStyling'
                  ></img>
                  <div className='cisideBarFontStyle'>Manage Courses</div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='ciimageAndFontDiv' onClick={courseClick}>
                  <img
                    src={coursesImage}
                    alt=''
                    className='ciiconsStyling'
                  ></img>
                  <div className='cisideBarFontStyle'>Manage Courses</div>
                </div>
              </td>
            </tr>
          )}

          {showStaff ? (
            <tr>
              <td>
                <div
                  className='ciimageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={staffClick}
                >
                  <img src={staffImage} alt='' className='ciiconsStyling'></img>
                  <div className='cisideBarFontStyle'>Manage Staff Stuff</div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='ciimageAndFontDiv' onClick={staffClick}>
                  <img src={staffImage} alt='' className='ciiconsStyling'></img>
                  <div className='cisideBarFontStyle'>Manage Staff Stuff</div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
