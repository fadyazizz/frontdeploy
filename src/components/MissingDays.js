import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'

export default function MissingDays(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [attendanceRecords, setAttendanceRecords] = useState([])
  useEffect(async () => {
    // console.log('here', token)
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/account/viewMissingDays`,
        method: 'get',
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          if (res.data.statuscode === '0000') {
            const records = res.data.missingDays
            console.log(res.data)
            let missing = []
            records.forEach((record) => {
              const date = new Date(record.date)
              missing = [
                ...missing,
                { day: date.getUTCDate(), month: date.getUTCMonth() + 1 },
              ]
            })
            setAttendanceRecords(missing)
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
      <div style={{ width: '20vw' }}>
        <Table
          headerColor='#e08eb4'
          headerNames={['month', 'day']}
          records={attendanceRecords}
          keys={['month', 'day']}
        ></Table>
      </div>
    </React.Fragment>
  )
}
