import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
export default function AttendanceRecords(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [attendanceRecords, setAttendanceRecords] = useState([])
  useEffect(() => {
    //  console.log('here', token)
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/account/viewAttendanceRecords`,
        method: 'get',
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          if (res.data.statuscode === '0000') {
            setAttendanceRecords(res.data.attendanceRecords)
            console.log(res.data.attendanceRecords)
          } else {
            console.log(res.data)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])
  return (
    <React.Fragment>
      <div style={{ width: '70vw', marginTop: '2%', marginLeft: '1%' }}>
        <Table
          headerColor='#e08eb4'
          headerNames={['status', 'day', 'month', 'totalHours', 'totalMinutes']}
          records={attendanceRecords}
          keys={['status', 'day', 'month', 'totalHours', 'totalMinutes']}
        ></Table>
      </div>
    </React.Fragment>
  )
}
