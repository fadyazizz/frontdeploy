import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
import CiSideBar from './ciComponents/CiSideBar'
export default function ViewSlotsAssignsCI(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [slotsAssignment, setslotassigns] = useState([])
  useEffect(() => {
    //  console.log('here', token)
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/courseInstructor/viewSlotsAssignment`,
        method: 'get',
        headers: {
          authorization: token,
        },
        data: {},
      })
        .then((res) => {
          if (res.data.statuscode === '0000') {
            setslotassigns(res.data.slotsAssignment)
          } else {
            setslotassigns([])
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
        <CiSideBar></CiSideBar>
        <div
          style={{
            width: '70vw',
            textAlign: 'center',
            fontSize: '2vh',
            marginLeft: '20vh',
            marginTop: '20vh',
          }}
        >
          <Form.Label
            style={{ textAlign: 'center', fontSize: '2vh', fontWeight: '500' }}
          >
            Slots Assignments of Courses your're assigned to
          </Form.Label>
          <Table
            headerColor='#41ab71'
            headerNames={[
              'course Code',
              'Staff id',
              'Slot name',
              'Day',
              'Type of slot',
              'location',
              'Timing',
            ]}
            records={slotsAssignment}
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
