import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../../globalState/actions/AuthActions'
import { backendLink } from '../../keys'
import logoutImage from '../../Images/logout.png'
import viewProfile from '../../Images/accountImage.png'
import updateProfile from '../../Images/updateProfile.png'
import resetPassword from '../../Images/settings.png'
import clock from '../../Images/clock.png'
import attendance from '../../Images/attendance.png'
import calendar from '../../Images/calendar.png'
import schedule from '../../Images/schedule.png'
import '../../StyleSheets/staffPage.css'
import AcSideBar from './AcSideBar'
import { useHistory } from 'react-router'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import Table from '../Table'
export default function AcViewNotifications() {
  const [requests, SetRequests] = useState([])
  const token = useSelector((state) => state.token)
  const dispatch = useDispatch()
  const history = useHistory()
  useEffect(async () => {
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/academicMember/notifyAcceptRejectRequest`,
        method: 'put',
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          console.log(res.data)
          if (res.data.statuscode === '0000') {
            SetRequests(res.data.requests)
          } else {
            console.log(res.data)
          }
        })
        .catch((err) => {
          console.log(err)
        })
      axios({
        url: `${backendLink}/academicMember/notifyDelete`,
        method: 'put',
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          console.log(res.data, 'innn delete')
          if (res.data.statuscode === '0000') {
            //SetRequests(res.data.requests)
          } else {
            console.log(res.data)
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
        <div style={{ width: '50vw' }}>
          New Notifications
          <Table
            headerColor='#e08eb4'
            headerNames={['Day', 'Month', 'Request Type', 'Status']}
            records={requests}
            keys={['day', 'month', 'typeOfRequest', 'status']}
          ></Table>
        </div>
      </div>
    </React.Fragment>
  )
}
