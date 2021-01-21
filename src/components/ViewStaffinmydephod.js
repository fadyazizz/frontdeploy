import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
import HodSideBar from './hodComponents/HodSideBar'
export default function ViewstaffIndephod(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [allstaffindep, setTa] = useState([])
  useEffect(() => {
    //  console.log('here', token)
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/hod/viewStaffInMyDepartment`,
        method: 'get',
        headers: {
          authorization: token,
        },
        data: {},
      })
        .then((res) => {
          if (res.data.statuscode === '0000') {
            console.log(res.data.allstaffindep)
            setTa(res.data.allstaffindep)
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
        <HodSideBar></HodSideBar>
        <div
          style={{
            width: '75vw',
            textAlign: 'center',
            fontSize: '2vh',
            marginLeft: '15vh',
            marginTop: '10vh',
          }}
        >
          <Form.Label
            style={{ textAlign: 'center', fontSize: '3vh', fontWeight: '500' }}
          >
            Staff members in your department
          </Form.Label>
          <Table
            headerColor='#FFCB08'
            headerNames={[
              'staff id',
              'Gender',
              'staff name',
              'salary',
              'email',
              'location',
              'day-Off',
              'role',
            ]}
            records={allstaffindep}
            keys={[
              'id',
              'gender',
              'name',
              'salary',
              'email',
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
