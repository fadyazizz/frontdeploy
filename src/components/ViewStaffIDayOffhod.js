import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import '../StyleSheets/signIn.css'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
import HodSideBar from './hodComponents/HodSideBar'
export default function ViewStaffdayoff(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [staff_id, setStaffID] = useState('')
  const [nostaff, setmessage] = useState('')
  const [staffdaysoff, setdayoff] = useState([])
  useEffect(() => {
    //  console.log('here', token)
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/hod/viewStaffDayOff`,
        method: 'post',
        headers: {
          authorization: token,
        },
        data: {
          staff_id: staff_id == '' ? undefined : staff_id,
        },
      })
        .then((res) => {
          if (res.data.statuscode === '0000') {
            setmessage('')
            setdayoff(res.data.staffdaysoff)
          } else {
            console.log(res.data)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])
  const getRecords = async (staffidpar) => {
    //staffidpar.preventDefault()
    //staffidpar.stopPropagation()
    axios({
      url: `${backendLink}/hod/viewStaffDayOff`,
      method: 'post',
      headers: {
        authorization: token,
      },
      data: {
        staff_id: staffidpar == '' ? undefined : staffidpar,
      },
    })
      .then((res) => {
        if (res.data.statuscode === '0000') {
          console.log(res.data)
          setmessage('')
          setdayoff(res.data.staffdaysoff)
        } else {
          if (staffidpar === '') {
            setmessage('')
          } else {
            setdayoff([])
            setmessage('staff ID not found or not in your department!')
          }
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <HodSideBar></HodSideBar>

        <div
          style={{
            width: '60vw',
            textAlign: 'center',
            fontSize: '2vh',
            marginLeft: '25vh',
            marginTop: '10vh',
          }}
        >
          <Form.Label
            style={{ textAlign: 'center', fontSize: '4vh', fontWeight: '500' }}
          >
            Staff members day-off in your department
          </Form.Label>
          <div>
            <span style={{ color: 'black', fontSize: '1.5vw', margin: '0%' }}>
              filter by staff-id
            </span>
            <Form.Control
              type='text'
              placeholder='Enter one staff-id'
              className='signInFormStyle'
              style={{
                width: '25%',
                height: '30%',
                textAlign: 'left',
                left: '0vw',
                margin: '0vw',
                marginLeft: '1%',
                display: 'inline',
                marginTop: '-2%',
                fontSize: '1.5vw',
                borderWidth: '2px',
                borderColor: '#616eff',
              }}
              onChange={(e) => {
                setStaffID(e.target.value)
                getRecords(e.target.value)
              }}
            />
          </div>

          <text style={{ fontSize: '2', color: 'red' }}>{nostaff}</text>

          <Table
            headerColor='#FFCB08'
            headerNames={['staff id', 'staff name', 'day-Off']}
            records={staffdaysoff}
            keys={['id', 'name', 'dayoff']}
          ></Table>
        </div>
      </div>
    </React.Fragment>
  )
}
