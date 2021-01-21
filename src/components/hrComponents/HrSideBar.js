import React, { useEffect, useState } from 'react'
import accountImage from '../../Images/accountImage.png'
import locationImage from '../../Images/locationImage.png'
import facultyImage from '../../Images/facultyImage.png'
import departmentImage from '../../Images/departmentImage.png'
import coursesImage from '../../Images/coursesImage.png'
import staffImage from '../../Images/staffImage.png'
import back from '../../Images/back.png'
import '../../StyleSheets/hrSideBar.css'
import { useHistory } from 'react-router'

export default function HrSideBar() {
  const [showAccount, setShowAccount] = useState(false)
  const [showLocation, setShowLocation] = useState(false)
  const [showFaculty, setShowFaculty] = useState(false)
  const [showDepartment, setShowDepartment] = useState(false)
  const [showCourses, setShowCourses] = useState(false)
  const [showStaff, setShowStaff] = useState(false)
  const history = useHistory()

  useEffect(() => {
    if (
      window.location.pathname === '/account' ||
      window.location.pathname === '/hrViewProfile' ||
      window.location.pathname === '/resetPasswordHr' ||
      window.location.pathname === '/UpdateProfileHr'
    ) {
      setShowAccount(true)
      setShowLocation(false)
      setShowFaculty(false)
      setShowDepartment(false)
      setShowCourses(false)
      setShowStaff(false)
    } else if (
      window.location.pathname === '/LocationPage' ||
      window.location.pathname === '/addLocation' ||
      window.location.pathname === '/updateLocation' ||
      window.location.pathname === '/deleteLocation'
    ) {
      setShowAccount(false)
      setShowLocation(true)
      setShowFaculty(false)
      setShowDepartment(false)
      setShowCourses(false)
      setShowStaff(false)
    } else if (
      window.location.pathname === '/FacultyPage' ||
      window.location.pathname === '/addFaculty' ||
      window.location.pathname === '/updateFaculty' ||
      window.location.pathname === '/deleteFaculty'
    ) {
      setShowAccount(false)
      setShowLocation(false)
      setShowFaculty(true)
      setShowDepartment(false)
      setShowCourses(false)
      setShowStaff(false)
    } else if (
      window.location.pathname === '/DepartmentPage' ||
      window.location.pathname === '/addDepartment' ||
      window.location.pathname === '/updateDepartment' ||
      window.location.pathname === '/deleteDepartment'
    ) {
      setShowAccount(false)
      setShowLocation(false)
      setShowFaculty(false)
      setShowDepartment(true)
      setShowCourses(false)
      setShowStaff(false)
    } else if (
      window.location.pathname === '/coursePage' ||
      window.location.pathname === '/addCourse' ||
      window.location.pathname === '/updateCourse' ||
      window.location.pathname === '/deleteCourse'
    ) {
      setShowAccount(false)
      setShowLocation(false)
      setShowFaculty(false)
      setShowDepartment(false)
      setShowCourses(true)
      setShowStaff(false)
    } else if (
      window.location.pathname === '/staffPage' ||
      window.location.pathname === '/addStaff' ||
      window.location.pathname === '/updateStaff' ||
      window.location.pathname === '/deleteStaff' ||
      window.location.pathname === '/addMissingSingInOut' ||
      window.location.pathname === '/hr/viewAttendance' ||
      window.location.pathname === '/viewMissingHoursDays'
    ) {
      setShowAccount(false)
      setShowLocation(false)
      setShowFaculty(false)
      setShowDepartment(false)
      setShowCourses(false)
      setShowStaff(true)
    }
  }, [])

  const accountClick = () => {
    history.push('/account')
  }
  const locationClick = () => {
    history.push('/LocationPage')
  }
  const facultyClick = () => {
    history.push('/FacultyPage')
  }
  const departmentClick = () => {
    history.push('/DepartmentPage')
  }
  const coursesClick = () => {
    history.push('/coursePage')
  }
  const staffClick = () => {
    history.push('/staffPage')
  }
  const backClick = () => {
    history.push('/manageAccountHR')
  }
  return (
    <div className='sideBar'>
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
          {showLocation ? (
            <tr>
              <td>
                <div
                  className='imageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={locationClick}
                >
                  <img
                    src={locationImage}
                    alt=''
                    className='iconsStyling'
                  ></img>
                  <div
                    className='sideBarFontStyle'
                    style={{ fontSize: '0.9vw' }}
                  >
                    Manage Location
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='imageAndFontDiv' onClick={locationClick}>
                  <img
                    src={locationImage}
                    alt=''
                    className='iconsStyling'
                  ></img>
                  <div
                    className='sideBarFontStyle'
                    style={{ fontSize: '0.9vw' }}
                  >
                    Manage Location
                  </div>
                </div>
              </td>
            </tr>
          )}

          {showFaculty ? (
            <tr>
              <td>
                <div
                  className='imageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={facultyClick}
                >
                  <img src={facultyImage} alt='' className='iconsStyling'></img>
                  <div
                    className='sideBarFontStyle'
                    style={{ fontSize: '0.9vw' }}
                  >
                    Manage Faculty
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='imageAndFontDiv' onClick={facultyClick}>
                  <img src={facultyImage} alt='' className='iconsStyling'></img>
                  <div
                    className='sideBarFontStyle'
                    style={{ fontSize: '0.9vw' }}
                  >
                    Manage Faculty
                  </div>
                </div>
              </td>
            </tr>
          )}

          {showDepartment ? (
            <tr>
              <td>
                <div
                  className='imageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={departmentClick}
                >
                  <img
                    src={departmentImage}
                    alt=''
                    className='iconsStyling'
                  ></img>
                  <div
                    className='sideBarFontStyle'
                    style={{ fontSize: '0.9vw' }}
                  >
                    Manage Department
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='imageAndFontDiv' onClick={departmentClick}>
                  <img
                    src={departmentImage}
                    alt=''
                    className='iconsStyling'
                  ></img>
                  <div
                    className='sideBarFontStyle'
                    style={{ fontSize: '0.9vw' }}
                  >
                    Manage Department
                  </div>
                </div>
              </td>
            </tr>
          )}

          {showCourses ? (
            <tr>
              <td>
                <div
                  className='imageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={coursesClick}
                >
                  <img src={coursesImage} alt='' className='iconsStyling'></img>
                  <div
                    className='sideBarFontStyle'
                    style={{ fontSize: '0.9vw' }}
                  >
                    Manage Courses
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='imageAndFontDiv' onClick={coursesClick}>
                  <img src={coursesImage} alt='' className='iconsStyling'></img>
                  <div
                    className='sideBarFontStyle'
                    style={{ fontSize: '0.9vw' }}
                  >
                    Manage Courses
                  </div>
                </div>
              </td>
            </tr>
          )}

          {showStaff ? (
            <tr>
              <td>
                <div
                  className='imageAndFontDiv'
                  style={{ backgroundColor: 'white' }}
                  onClick={staffClick}
                >
                  <img src={staffImage} alt='' className='iconsStyling'></img>
                  <div
                    className='sideBarFontStyle'
                    style={{ fontSize: '0.9vw' }}
                  >
                    Manage Staff stuff
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            <tr>
              <td>
                <div className='imageAndFontDiv' onClick={staffClick}>
                  <img src={staffImage} alt='' className='iconsStyling'></img>
                  <div
                    className='sideBarFontStyle'
                    style={{ fontSize: '0.9vw' }}
                  >
                    Manage Staff stuff
                  </div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
