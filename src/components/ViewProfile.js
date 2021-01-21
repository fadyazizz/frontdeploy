import React, { useState, useEffect } from 'react'
import '../StyleSheets/viewProfile.css'
import Image from 'react-bootstrap/Image'
import calendarColored from '../Images/calendarcolored.png'
import email from '../Images/email.png'
import department from '../Images/department.png'
import name from '../Images/name.png'
import role from '../Images/role.png'
import salary from '../Images/salary.png'
import work from '../Images/work.png'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import MissingHours from './MissingHours'
import salaryMonth from '../Images/dollar.png'
export default function ViewProfile(props) {
  const dispatch = useDispatch()

  const token = useSelector((state) => state.token)
  const history = useHistory()

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        Image
                        src={name}
                        className='coloredImageStyling'
                      ></img>
                    </td>
                    <td className='firstColumnField'> Name:</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className='secondColumnField'>{props.name}</td>
          </tr>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        Image
                        src={email}
                        className='coloredImageStyling'
                      ></img>
                    </td>
                    <td className='firstColumnField'> Email:</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className='secondColumnField'>{props.email}</td>
          </tr>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        Image
                        src={salary}
                        className='coloredImageStyling'
                      ></img>
                    </td>
                    <td className='firstColumnField'> Salary:</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className='secondColumnField'>{props.salary}</td>
          </tr>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        Image
                        src={role}
                        className='coloredImageStyling'
                      ></img>
                    </td>
                    <td className='firstColumnField'> Role:</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className='secondColumnField'>{props.role}</td>
          </tr>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        Image
                        src={calendarColored}
                        className='coloredImageStyling'
                      ></img>
                    </td>
                    <td className='firstColumnField'> DayOff:</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className='secondColumnField'>{props.dayoff}</td>
          </tr>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        Image
                        src={department}
                        className='coloredImageStyling'
                      ></img>
                    </td>
                    <td className='firstColumnField'> Department:</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className='secondColumnField'>{props.departmentName}</td>
          </tr>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        Image
                        src={work}
                        className='coloredImageStyling'
                      ></img>
                    </td>
                    <td className='firstColumnField'> Office:</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className='secondColumnField'>{props.office}</td>
          </tr>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={salaryMonth}
                        className='coloredImageStyling'
                      ></img>
                    </td>
                    <td className='firstColumnField'>
                      {' '}
                      Salary for this Month:
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className='secondColumnField'> {props.salaryMonth}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
