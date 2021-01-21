import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import HrSideBar from './hrComponents/HrSideBar'
export default function ViewStaffWithMissingDays(props) {
  const token = useSelector((state) => state.token)
  const [error, setError] = useState('')
  const [joiMessage, setJoiMessage] = useState('')
  const [staff, setStaff] = useState([])
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('here')
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/hr/viewStaffMemberWithMissingDays`,
        method: 'get',
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          console.log(res.data)
          setStaff(res.data.staff)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])
  return (
    <React.Fragment>
      <HrSideBar> </HrSideBar>
      <div style={{ marginLeft: '10vw', marginTop: '-50vw' }}>
        {staff.map((staffWa7ed) => {
          return (
            <React.Fragment>
              <div style={{ width: '20vw' }}>
                <p>Staff id: {staffWa7ed.staffId}</p>
                <Table
                  headerColor='#616eff'
                  headerNames={['Missing Dates']}
                  records={staffWa7ed.missingDates}
                  keys={['date']}
                ></Table>
              </div>
            </React.Fragment>
          )
        })}
      </div>
    </React.Fragment>
  )
}
