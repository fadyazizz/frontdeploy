import React, { useEffect, useState } from 'react'
import accountImage from '../../Images/accountImage.png'
import coursesImage from '../../Images/coursesImage.png'
import requestImage from '../../Images/request.png'
import back from '../../Images/back.png'
import '../../StyleSheets/ccSideBar.css'

import { useHistory } from 'react-router'

export default function CcSideBar() {
  const [showAccount, setShowAccount] = useState(false)
  const [showCourses, setShowCourses] = useState(false)
  const [showRequests, setShowRequests] = useState(false)

  const history = useHistory()

  useEffect(() => {
    if (
      window.location.pathname === '/ccAccountPage' ||
      window.location.pathname === '/ccViewProfile' ||
      window.location.pathname === '/resetPasswordCc' ||
      window.location.pathname === '/UpdateProfileCc'
    ) {
      setShowAccount(true)
      setShowCourses(false)

      setShowRequests(false)
    } else if (
      window.location.pathname === '/ccCoursePage' ||
      window.location.pathname === '/addCourseSlot' ||
      window.location.pathname === '/updateCourseSlot' ||
      window.location.pathname === '/deleteCourseSlot'
    ) {
      setShowAccount(false)
      setShowCourses(true)

      setShowRequests(false)
    } else if (window.location.pathname === '/ccStaffStuffPage') {
      setShowAccount(false)
      setShowCourses(false)

      setShowRequests(false)
    } else if (window.location.pathname === '/ccRequestPage') {
      setShowAccount(false)
      setShowCourses(false)

      setShowRequests(true)
    }
  }, [])

  const accountClick = () => {
    history.push('/ccAccountPage')
  }
  const courseClick = () => {
    history.push('/ccCoursePage')
  }

  const requestClick = () => {
    history.push('/ccRequestPage')
  }
  const backClick = () => {
    history.push('/manageAccountCC')
  }
  return (
    <div className='ccsideBar'>
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
                  className='ccimageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={courseClick}
                >
                  <img
                    src={coursesImage}
                    alt=''
                    className='cciconsStyling'
                  ></img>
                  <div className='ccsideBarFontStyle'>Courses</div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='ccimageAndFontDiv' onClick={courseClick}>
                  <img
                    src={coursesImage}
                    alt=''
                    className='cciconsStyling'
                  ></img>
                  <div className='ccsideBarFontStyle'>Courses</div>
                </div>
              </td>
            </tr>
          )}

          {showRequests ? (
            <tr>
              <td>
                <div
                  className='ccimageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={requestClick}
                >
                  <img
                    src={requestImage}
                    alt=''
                    className='cciconsStyling'
                  ></img>
                  <div className='ccsideBarFontStyle'>Requests</div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='ccimageAndFontDiv' onClick={requestClick}>
                  <img
                    src={requestImage}
                    alt=''
                    className='cciconsStyling'
                  ></img>
                  <div className='ccsideBarFontStyle'>Requests</div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
