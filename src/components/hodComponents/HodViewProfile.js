import React, { useEffect, useState } from 'react'
import ViewProfile from '../ViewProfile.js'
import HodSideBar from './HodSideBar.js'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { backendLink } from '../../keys'

export default function HodViewProfile() {
  const [name, setName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [salary, setSalary] = useState(undefined)
  const [role, setRole] = useState(undefined)
  const [dayoff, setDayoff] = useState(undefined)
  const [department, setDepartment] = useState(undefined)
  const [office, setOffice] = useState(undefined)
  const token = useSelector((state) => state.token)
  const id = useParams().id

  useEffect(() => {
    axios({
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
        setName(res.data.name)
        setEmail(res.data.email)
        setSalary(res.data.salary)
        setRole(res.data.role)
        setDayoff(res.data.dayoff)
        setDepartment(res.data.departmentName)
        setOffice(res.data.office)
      }
    })
  }, [])

  return (
    <React.Fragment>
      <div>
        <table>
          <tbody>
            <tr>
              <div>
                <td>
                  {' '}
                  <HodSideBar></HodSideBar>{' '}
                </td>
                <td style={{ paddingLeft: '6vw', paddingTop: '0vw' }}>
                  {' '}
                  <ViewProfile
                    name={name}
                    email={email}
                    salary={salary}
                    role={role}
                    dayoff={dayoff}
                    departmentName={department}
                    office={office}
                  ></ViewProfile>{' '}
                </td>
              </div>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}
