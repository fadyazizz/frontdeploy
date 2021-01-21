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
export default function ViewStaffPerCourse(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [courseId, setCourseCode] = useState('')
  const [nosuchcourse, setCC] = useState('')
  const [staffoncoursesindep, setTa] = useState([])
  const getRecords = async (coursecodepar) => {
    axios({
      url: `${backendLink}/hod/viewAllStaffPerCourse`,
      method: 'post',
      headers: {
        authorization: token,
      },
      data: {
        courseId: coursecodepar ? coursecodepar : courseId,
      },
    })
      .then((res) => {
        console.log(res.data)

        if (res.data.statuscode === '0000') {
          setCC('')
          setTa(res.data.staffoncoursesindep)
        } else {
          if (coursecodepar === '') {
            setCC('')
            setTa([])
          } else {
            setTa([])
            setCC('Not a valid course code or not in your department!')
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
            width: '75vw',
            textAlign: 'center',
            fontSize: '2vh',
            marginLeft: '25vh',
            marginTop: '10vh',
          }}
        >
          <Form.Label
            style={{ textAlign: 'center', fontSize: '4vh', fontWeight: '500' }}
          >
            Staff members per courses in your department
          </Form.Label>
          <div>
            <span style={{ color: 'black', fontSize: '2vw', margin: '0%' }}>
              Enter Course Code:
            </span>
            <Form.Control
              type='text'
              placeholder='course code'
              className='signInFormStyle'
              style={{
                width: '20%',
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
                setCourseCode(e.target.value)
                getRecords(e.target.value)
              }}
            />
          </div>

          <text style={{ fontSize: '2', color: 'red' }}>{nosuchcourse}</text>

          <Table
            headerColor='#FFCB08'
            headerNames={[
              'staff id',
              'Gender',
              'staff name',
              'email',
              'salary',
              'location',
              'day-Off',
              'role',
            ]}
            records={staffoncoursesindep}
            keys={[
              'id',
              'gender',
              'name',
              'email',
              'salary',
              'location',
              'dayoff',
              'role',
            ]}
          ></Table>
        </div>
      </div>
    </React.Fragment>
  )
}
