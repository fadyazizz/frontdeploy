import React, { useEffect, useState } from 'react'
import accountImage from '../../Images/accountImage.png'
import coursesImage from '../../Images/coursesImage.png'
import requestImage from '../../Images/request.png'
import back from '../../Images/back.png'
import '../../StyleSheets/acSideBar.css'
import { useHistory } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import signInImage from '../../Images/login.png'
import { useParams } from 'react-router'
import axios from 'axios'
import { backendLink } from '../../keys'


export default function AcSideBar() {
  const [showAccount, setShowAccount] = useState(false)
  const [showCourses, setShowCourses] = useState(false)
  const [showRequests, setShowRequests] = useState(false)
  const [showSignInOut, setShowSignInOut] = useState(false)
  const history = useHistory()

  const token = useSelector((state) => state.token)

  // const roleOfAcademicMember=token.roleOfAcademicMember
  //   console.log("role" + roleOfAcademicMember)

  const [isHod, setIsHod] = useState(false)
  const [roleOfAcademicMember, setRoleOfAcademicMember] = useState(undefined)
  const [role, setRole] = useState(undefined)

  const id = useParams().id

  useEffect(async () => {
    await axios({
      url: `${backendLink}/account/viewProfile`,
      method: 'POST',
      headers: {
        authorization: token,
      },
      data: {
        id,
      },
    }).then((res) => {
      if (res.data.error) {
        return
      } else {
        // console.log(res)
        setRoleOfAcademicMember(res.data.roleOfAcademicMember)
        setRole(res.data.role)
      }
    })
  }, [])

  useEffect(() => {
    if (
      window.location.pathname === '/acAccountPage' ||
      window.location.pathname === '/acViewProfile' ||
      window.location.pathname === '/resetPasswordAc' ||
      window.location.pathname === '/UpdateProfileAc' ||
      window.location.pathname === '/ta/viewSchedule' ||
      window.location.pathname === '/viewAttendance' ||
      window.location.pathname === '/acAccountPage' ||
      window.location.pathname === '/acViewProfile' ||
      window.location.pathname === '/resetPasswordAc' ||
      window.location.pathname === '/updateProfileAc' ||
      window.location.pathname === '/updateEmailAc' ||
      window.location.pathname === '/viewMissingDays' ||
      window.location.pathname === '/viewMissingHours' ||
      window.location.pathname === '/ta/viewNotification'
    ) {
      setShowAccount(true)
      setShowCourses(false)
      setShowSignInOut(false)

      setShowRequests(false)
    } else if (window.location.pathname === '/acCoursesPage') {
      setShowAccount(false)
      setShowCourses(true)

      setShowSignInOut(false)
      setShowRequests(false)
    } else if (window.location.pathname === '/acStaffStuffPage') {
      setShowAccount(false)
      setShowCourses(false)
      setShowSignInOut(false)
      setShowRequests(false)
    } else if (
      window.location.pathname === '/acRequestsPage' ||
      window.location.pathname === '/AcSendRequests' ||
      window.location.pathname === '/ta/sendslotlinkingrequests' ||
      window.location.pathname === '/ta/ViewStatus' ||
      window.location.pathname === '/ta/viewSLrequeststatus' ||
      window.location.pathname === '/ViewReplacementRequests' ||
      window.location.pathname === '/uploadFile'
    ) {
      setShowAccount(false)
      setShowCourses(false)
      setShowSignInOut(false)
      setShowRequests(true)
    } else if (window.location.pathname === '/signInOut') {
      setShowAccount(false)
      setShowCourses(false)
      setShowSignInOut(true)
      setShowRequests(false)
    }
  }, [])

  const accountClick = () => {
    history.push('/acAccountPage')
  }
  const courseClick = () => {
    history.push('/acCoursesPage')
  }

  const requestClick = () => {
    history.push('/acRequestsPage')
  }
  const signin = () => {
    history.push('/signInOut')
  }
  const backClick = () => {
    if (roleOfAcademicMember == 'HeadOfDepartment') {
      history.push('/manageAccountHod')
    } else if (roleOfAcademicMember == 'CourseCoordinator') {
      history.push('/manageAccountCC')
    } else if (roleOfAcademicMember == 'CourseInstructor') {
      history.push('/manageAccountCI')
    } else if (role == 'HR') {
      history.push('/manageAccountHR')
    } else {
      history.push('/login')
    }
  }

  return (
    <div className='acsideBar'>
      <table>
        <tbody>
          <tr>
            <td>
              <div className='acimageAndFontDiv' onClick={backClick}>
                <img src={back} alt='' className='aciconsStyling'></img>
                <div
                  className='acsideBarFontStyle'
                  style={{ marginLeft: '3vw' }}
                >
                  Back
                </div>
              </div>
            </td>
          </tr>
          {showAccount ? (
            <tr>
              <td>
                <div
                  className='acimageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={accountClick}
                >
                  <img
                    src={accountImage}
                    alt=''
                    className='aciconsStyling'
                  ></img>
                  <div className='acsideBarFontStyle'>Account</div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='acimageAndFontDiv' onClick={accountClick}>
                  <img
                    src={accountImage}
                    alt=''
                    className='aciconsStyling'
                  ></img>
                  <div className='acsideBarFontStyle'>Account</div>
                </div>
              </td>
            </tr>
          )}

          {showCourses ? (
            <tr>
              <td>
                <div
                  className='acimageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={courseClick}
                >
                  <img
                    src={coursesImage}
                    alt=''
                    className='aciconsStyling'
                  ></img>
                  <div className='acsideBarFontStyle'>Courses</div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='acimageAndFontDiv' onClick={courseClick}>
                  <img
                    src={coursesImage}
                    alt=''
                    className='aciconsStyling'
                  ></img>
                  <div className='acsideBarFontStyle'>Courses</div>
                </div>
              </td>
            </tr>
          )}

          {showRequests ? (
            <tr>
              <td>
                <div
                  className='acimageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={requestClick}
                >
                  <img
                    src={requestImage}
                    alt=''
                    className='aciconsStyling'
                  ></img>
                  <div className='acsideBarFontStyle'>Requests</div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='acimageAndFontDiv' onClick={requestClick}>
                  <img
                    src={requestImage}
                    alt=''
                    className='aciconsStyling'
                  ></img>
                  <div className='acsideBarFontStyle'>Requests</div>
                </div>
              </td>
            </tr>
          )}
          {showSignInOut ? (
            <tr>
              <td>
                <div
                  className='acimageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={signin}
                >
                  <img
                    src={signInImage}
                    alt=''
                    className='aciconsStyling'
                  ></img>
                  <div className='acsideBarFontStyle'>SignIn/Out</div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='acimageAndFontDiv' onClick={signin}>
                  <img
                    src={signInImage}
                    alt=''
                    className='aciconsStyling'
                  ></img>
                  <div className='acsideBarFontStyle'>SignIn/Out</div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
