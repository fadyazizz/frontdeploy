import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
import AcSideBar from '../components/acComponents/AcSideBar'
export default function ViewShedule(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [noshedule, sets1] = useState([''])
  const [schedule, setSchedule] = useState([])
  useEffect(() => {
    //  console.log('here', token)
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/academicMember/viewSchedule`,
        method: 'get',
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          console.log(res.data)
          if (res.data.statuscode === '0000') {
            setSchedule(res.data.schedule)
            sets1('')
          } else {
            console.log('la')
            sets1("You Don't have a schedule yet!")
            setSchedule([])
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
        <AcSideBar></AcSideBar>
        <div
          style={{
            width: '60vw',
            textAlign: 'center',
            fontSize: '2vh',
            marginLeft: '5%',
          }}
        >
          <text style={{ fontSize: '3', color: 'red' }}>{noshedule}</text>
          <Form.Label
            style={{
              textAlign: 'center',
              fontSize: '3vh',
              fontWeight: '700',
              color: '#2a306b',
            }}
          ></Form.Label>

          <Table
            headerColor='#e08eb4'
            headerNames={[
              'course Code',
              'Day',
              ' Slot',
              'timing',
              'location',
              'Type',
            ]}
            records={schedule}
            keys={[
              'courseCode',
              'day',
              'slotName',
              'timing',
              'location',
              'typeOfSlot',
            ]}
          ></Table>
        </div>
      </div>
    </React.Fragment>
  )
}
