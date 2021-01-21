import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
import AcSideBar from './acComponents/AcSideBar'
export default function ViewReplacementRequests(props) {
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const dispatch = useDispatch()
  const [requests, setRequests] = useState([])
  const [onChange, setOnChange] = useState('')
  const acceptRequest = async (id) => {
    axios({
      url: `${backendLink}/academicMember/acceptReplacementRequest`,
      method: 'put',
      headers: {
        authorization: token,
      },
      data: {
        requestId: id,
      },
    })
      .then((res) => {
        if (res.data.statuscode === '0000') {
          console.log(res.data)
          setOnChange('1')
        } else {
          console.log(res.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const rejectRequest = async (id) => {
    axios({
      url: `${backendLink}/academicMember/rejectReplacementRequest`,
      method: 'put',
      headers: {
        authorization: token,
      },
      data: {
        requestId: id,
      },
    })
      .then((res) => {
        if (res.data.statuscode === '0000') {
          console.log(res.data)
          setOnChange('')
          // setRequests(res.data.Requests)
        } else {
          console.log(res.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    //  console.log('here', token)
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/academicMember/viewReplacementRequests`,
        method: 'get',
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          if (res.data.statuscode === '0000') {
            console.log(res.data.Requests)
            setRequests(res.data.Requests)
          } else {
            console.log(res.data)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [onChange])

  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <AcSideBar></AcSideBar>

        <div style={{ width: '70vw', marginLeft: '5%' }}>
          <Table
            headerColor='#e08eb4'
            headerNames={[
              'sender Id',
              'day',
              'month',
              'year',
              'course',
              'slot',
              'location',
              'type Of Slot',
              'status',
            ]}
            records={requests}
            request={true}
            functionHeaders={['reject', '/accept']}
            accept={(id) => acceptRequest(id)}
            reject={(id) => rejectRequest(id)}
            keys={[
              'senderId',
              'day',
              'month',
              'year',
              'course',
              'slot',
              'location',
              'typeOfSlot',
              'status',
            ]}
          ></Table>
        </div>
      </div>
    </React.Fragment>
  )
}
