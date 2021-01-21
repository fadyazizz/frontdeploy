import React, { useEffect, useState } from 'react'
import ViewProfile from '../ViewProfile.js'
import AcSideBar from './AcSideBar.js'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { backendLink } from '../../keys'

export default function AcViewProfile() {
  const [name, setName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [salary, setSalary] = useState(undefined)
  const [role, setRole] = useState(undefined)
  const [dayoff, setDayoff] = useState(undefined)
  const [department, setDepartment] = useState(undefined)
  const [office, setOffice] = useState(undefined)

  const token = useSelector((state) => state.token)
  const id = useParams().id

  const [salaryState, setMonthSalary] = useState()

  const calculateSalary = async (salaryin) => {
    let missingDays = []
    await axios({
      url: `${backendLink}/account/viewMissingDays`,
      method: 'get',
      headers: {
        authorization: token,
      },
    })
      .then((res) => {
        // 180*60
        //60 day
        //
        missingDays = res.data.missingDays
        console.log(missingDays, 'a;sdklas')
      })
      .catch((err) => {
        console.log(err)
      })
    let missingHours = 0

    await axios({
      url: `${backendLink}/account/viewMissingHours`,
      method: 'get',
      headers: {
        authorization: token,
      },
    })
      .then((res) => {
        if (res.data.statuscode === '0000') {
          const code1 = res.data.code
          if (code1 == '-1') {
            missingHours = res.data.Hours
            missingHours = 60 * missingHours
            const maxBeforeDeduction = 2 * 60 + 59
            if (missingHours > maxBeforeDeduction) {
              missingHours = missingHours - maxBeforeDeduction
            }
          }
        } else {
          console.log(res.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })

    const salary1 = parseInt(salaryin)
    console.log(salary1)
    const daysDeduction = missingDays.length * (salary1 / 180)
    console.log(daysDeduction, 'asdmahdkajs')
    const timeDeduction = missingHours * (salary1 / (180 * 60))
    console.log(timeDeduction)
    setMonthSalary(salary1 - daysDeduction - timeDeduction)
  }

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
    }).then(async (res) => {
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
        await calculateSalary(res.data.salary)
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
                  <AcSideBar></AcSideBar>{' '}
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
                    salaryMonth={salaryState}
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
