import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
import HodSideBar from './hodComponents/HodSideBar'
export default function ViewTeachingAssignmentsHOD(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [MyTeachingAssignments, setTa] = useState([])
  useEffect(() => {
    //  console.log('here', token)
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/hod/viewTeachingAssHOD`,
        method: 'get',
        headers: {
          authorization: token,
        },
        data: {},
      })
        .then((res) => {
          if (res.data.statuscode === '0000') {
            console.log(res.data.MyTeachingAssignments)
            setTa(res.data.MyTeachingAssignments)
            console.log(res.data.MyTeachingAssignments)
          } else {
            console.log(';aa;')
            setTa([])
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <HodSideBar></HodSideBar>
        <div
          style={{
            width: '75vw',
            textAlign: 'center',
            fontSize: '2vh',
            marginLeft: '25vh',
            marginTop: '10vh',
          }}
        >
          <Form.Label
            style={{ textAlign: 'center', fontSize: '3vh', fontWeight: '500' }}
          >
            Teaching Assignments of courses under your department
          </Form.Label>
          <Table
            headerColor='#FFCB08'
            headerNames={[
              'course Code',
              'Staff id',
              'Slot name',
              'Day',
              'Type of slot',
              'location',
              'Timing',
            ]}
            records={MyTeachingAssignments}
            keys={[
              'courseCode',
              'staffId',
              'slotName',
              'day',
              'typeOfSlot',
              'location',
              'timing',
            ]}
          ></Table>
        </div>
      </div>
    </React.Fragment>
  )
}
