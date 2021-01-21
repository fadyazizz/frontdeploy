import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { backendLink } from '../keys'
import Form from 'react-bootstrap/Form'
import '../StyleSheets/signIn.css'
import Table from './Table'
import HrSideBar from './hrComponents/HrSideBar'
export default function ViewStaffAttendanceRecords(props) {
  const token = useSelector((state) => state.token)
  const [error, setError] = useState('')
  const [joiMessage, setJoiMessage] = useState('')
  const [staffId, setStaffId] = useState('')
  const [month, setMonth] = useState(undefined)
  const [attendanceRecords, setAttendanceRecords] = useState([])

  const getRecords = async (monthpar, staffIdpar) => {
    monthpar = monthpar == '' ? undefined : monthpar
    axios({
      url: `${backendLink}/hr/viewStaffAttendance`,
      method: 'post',
      headers: {
        authorization: token,
      },
      data: {
        id: staffIdpar ? staffIdpar : staffId,
        month: monthpar,
      },
    })
      .then((res) => {
        console.log(res.data)
        if (res.data.statuscode == '0000') {
          setAttendanceRecords(res.data.attendanceRecords)
        } else {
          setAttendanceRecords([])
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <HrSideBar></HrSideBar>
        <div style={{ width: '70%' }}>
          <div>
            <span style={{ color: 'black', fontSize: '1vw', margin: '0%' }}>
              Staff Id:
            </span>
            <Form.Control
              type='text'
              placeholder='staff id'
              className='signInFormStyle'
              style={{
                width: '20%',
                textAlign: 'left',
                left: '0vw',
                margin: '0vw',
                marginLeft: '1%',
                display: 'inline',
                marginTop: '1%',
                fontSize: '1vw',
                borderWidth: '2px',
              }}
              onChange={(e) => {
                setStaffId(e.target.value)
                getRecords(undefined, e.target.value)
              }}
            />
            <span style={{ color: 'black', fontSize: '1vw', marginLeft: '1%' }}>
              Month:
            </span>
            <Form.Control
              type='text'
              placeholder='Month (optional)'
              className='signInFormStyle'
              style={{
                width: '20%',
                textAlign: 'left',
                left: '0vw',
                margin: '0vw',
                marginLeft: '1%',
                display: 'inline',
                marginTop: '-2%',
                fontSize: '1vw',
                borderWidth: '2px',
              }}
              onChange={(e) => {
                setMonth(e.target.value)
                getRecords(e.target.value, undefined)
              }}
            />
          </div>
          <div style={{ width: '60vw', marginTop: '1%' }}>
            <Table
              headerColor='#4a86e8'
              headerNames={[
                'status',
                'day',
                'month',
                'totalHours',
                'totalMinutes',
              ]}
              records={attendanceRecords}
              keys={['status', 'day', 'month', 'totalHours', 'totalMinutes']}
            ></Table>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
