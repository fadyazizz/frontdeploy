import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
import CiSideBar from './ciComponents/CiSideBar'
export default function ViewstaffIndep(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [staffsProfile, setTa] = useState([])
  useEffect(() => {
    //  console.log('here', token)
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/courseInstructor/viewStaffInMyDepartment`,
        method: 'get',
        headers: {
          authorization: token,
        },
        data: {},
      })
        .then((res) => {
          if (res.data.statuscode === '0000') {
            console.log(res.data.staffsProfile)
            setTa(res.data.staffsProfile)
          } else {
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
            style={{ textAlign: 'center', fontSize: '3vh', fontWeight: '500' }}
          >
            Staff members in your department
          </Form.Label>
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
            records={staffsProfile}
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
