import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import '../StyleSheets/signIn.css'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
import CiSideBar from './ciComponents/CiSideBar'
export default function ViewStaffPerCourseCi(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [courseCode, setCourseCode] = useState('')
  const [nosuchcourse, setCC] = useState('')
  const [staffInThisCourse, setTa] = useState([])
  const getRecords = async (coursecodepar) => {
    axios({
      url: `${backendLink}/courseInstructor/viewStaffPerCourse`,
      method: 'post',
      headers: {
        authorization: token,
      },
      data: {
        courseCode: coursecodepar ? coursecodepar : courseCode,
      },
    })
      .then((res) => {
        console.log(res.data)

        if (res.data.statuscode === '0000') {
          setCC('')
          setTa(res.data.staffInThisCourse)
        } else {
          if (coursecodepar === '') {
            setCC('')
            setTa([])
          } else {
            setTa([])
            setCC('Not a valid course code for you!')
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
        <CiSideBar></CiSideBar>

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
            Staff members per your course
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
            headerColor='#41ab71'
            headerNames={[
              'staff id',
              'Gender',
              'staff name',
              'email',
              'location',
              'day-Off',
              'department',
            ]}
            records={staffInThisCourse}
            keys={[
              'id',
              'gender',
              'name',
              'email',
              'location',
              'dayOff',
              'dep',
            ]}
          ></Table>
        </div>
      </div>
    </React.Fragment>
  )
}
