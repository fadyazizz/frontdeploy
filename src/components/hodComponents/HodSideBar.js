import React, { useEffect, useState } from 'react'
import accountImage from '../../Images/accountImage.png'
import coursesImage from '../../Images/coursesImage.png'
import staffImage from '../../Images/staffImage.png'
import requestImage from '../../Images/request.png'
import back from '../../Images/back.png'
import '../../StyleSheets/hodSideBar.css'
import { useHistory } from 'react-router'

export default function HodSideBar() {
  const [showAccount, setShowAccount] = useState(false)
  const [showCourses, setShowCourses] = useState(false)
  const [showStaff, setShowStaff] = useState(false)
  const [showRequests, setShowRequests] = useState(false)

  const history = useHistory()

  useEffect(() => {
    if (
      window.location.pathname === '/hodAccount' ||
      window.location.pathname === '/hodViewProfile' ||
      window.location.pathname === '/resetPasswordHod' ||
      window.location.pathname === '/UpdateProfileHod'
    ) {
      setShowAccount(true)
      setShowCourses(false)
      setShowStaff(false)
      setShowRequests(false)
    } else if (
      window.location.pathname === '/hodCoursesPage' ||
      window.location.pathname === '/assignCi' ||
      window.location.pathname === '/updateCi' ||
      window.location.pathname === '/deleteCi' ||
      window.location.pathname === '/viewCourseCoverage'
    ) {
      setShowAccount(false)
      setShowCourses(true)
      setShowStaff(false)
      setShowRequests(false)
    } else if (
      window.location.pathname === '/hodStaffStuffPage' ||
      window.location.pathname === '/viewStaffInMyDepartment' ||
      window.location.pathname === '/viewStaffInCourse' ||
      window.location.pathname === '/viewStaffDayoff' ||
      window.location.pathname === '/viewTeachingAssignments'
    ) {
      setShowAccount(false)
      setShowCourses(false)
      setShowStaff(true)
      setShowRequests(false)
    } else if (window.location.pathname === '/hodRequestsPage') {
      setShowAccount(false)
      setShowCourses(false)
      setShowStaff(false)
      setShowRequests(true)
    }
  }, [])

  const accountClick = () => {
    history.push('/hodAccount')
  }
  const courseClick = () => {
    history.push('/hodCoursesPage')
  }
  const staffClick = () => {
    history.push('/hodStaffStuffPage')
  }
  const requestClick = () => {
    history.push('/hodRequestsPage')
  }
  const backClick = () => {
    history.push('/manageAccountHod')
  }
  return (
    <div className='hodsideBar'>
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
                  className='hodimageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={courseClick}
                >
                  <img
                    src={coursesImage}
                    alt=''
                    className='hodiconsStyling'
                  ></img>
                  <div className='hodsideBarFontStyle'>Manage Courses</div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='hodimageAndFontDiv' onClick={courseClick}>
                  <img
                    src={coursesImage}
                    alt=''
                    className='hodiconsStyling'
                  ></img>
                  <div className='hodsideBarFontStyle'>Manage Courses</div>
                </div>
              </td>
            </tr>
          )}

          {showStaff ? (
            <tr>
              <td>
                <div
                  className='hodimageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={staffClick}
                >
                  <img
                    src={staffImage}
                    alt=''
                    className='hodiconsStyling'
                  ></img>
                  <div className='hodsideBarFontStyle'>Manage Staff Stuff</div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='hodimageAndFontDiv' onClick={staffClick}>
                  <img
                    src={staffImage}
                    alt=''
                    className='hodiconsStyling'
                  ></img>
                  <div className='hodsideBarFontStyle'>Manage Staff Stuff</div>
                </div>
              </td>
            </tr>
          )}

          {showRequests ? (
            <tr>
              <td>
                <div
                  className='hodimageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={requestClick}
                >
                  <img
                    src={requestImage}
                    alt=''
                    className='hodiconsStyling'
                  ></img>
                  <div className='hodsideBarFontStyle'>Manage Requests</div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='hodimageAndFontDiv' onClick={requestClick}>
                  <img
                    src={requestImage}
                    alt=''
                    className='hodiconsStyling'
                  ></img>
                  <div className='hodsideBarFontStyle'>Manage Requests</div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
