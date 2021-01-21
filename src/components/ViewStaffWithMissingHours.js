import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import HrSideBar from './hrComponents/HrSideBar'
export default function ViewStaffWithMissingHours(props) {
  const [staff, setStaff] = useState([])
  const history = useHistory()
  const token = useSelector((state) => state.token)
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('here')
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/hr/viewStaffMemberWithMissingHour`,
        method: 'get',
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          console.log(res.data.staffWithMissingHours)
          setStaff(res.data.staffWithMissingHours)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <HrSideBar></HrSideBar>
        <div style={{ width: '30vw', textAlign: 'center' }}>
          <Table
            headerColor='#616eff'
            headerNames={['Staff with missing Hours']}
            records={staff}
            keys={['staffId']}
          ></Table>
        </div>
      </div>
    </React.Fragment>
  )
}
