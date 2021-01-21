import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import '../StyleSheets/signIn.css'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
import AcSideBar from './acComponents/AcSideBar'
export default function ViewSLstatusCancel(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [requestStatus, setrequest] = useState('')
  const [changeRequests, setChangeRequests] = useState([])
  const [noreq, setreq] = useState('')
  const [error, setError] = useState('')
  const [ALLSlotLinkingRequestsForYou, setALLSlotLinking] = useState([])
  useEffect(() => {
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/academicMember/viewSlotLinkingStatus`,
        method: 'post',
        headers: {
          authorization: token,
        },
        data: {
          requestStatus: requestStatus == '' ? undefined : requestStatus,
        },
      })
        .then((res) => {
          if (res.data.statuscode === '0000') {
            console.log(res.data)
            setreq('')
            setALLSlotLinking(res.data.ALLSlotLinkingRequestsForYou[0])
          } else {
            setALLSlotLinking([])
            setreq('No request of this status for you!')
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [requestStatus, changeRequests])
  const getRecords = async (requestpar) => {
    axios({
      url: `${backendLink}/academicMember/viewSlotLinkingStatus`,
      method: 'post',
      headers: {
        authorization: token,
      },
      data: {
        requestStatus: requestpar == '' ? undefined : requestpar,
      },
    })
      .then((res) => {
        if (res.data.statuscode === '0000') {
          console.log(res.data)

          setreq('')
          setALLSlotLinking(res.data.ALLSlotLinkingRequestsForYou[0])
        } else {
          if (requestpar === '') {
            setALLSlotLinking([])

            setreq('')
          } else {
            setALLSlotLinking([])
            setreq('No request of this status for you!')
          }
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const cancelRequest = async (id) => {
    axios({
      url: `${backendLink}/academicMember/deleteSlotLinkingRequests`,
      method: 'delete',
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
          setreq('Request Cancelled successfully!')
          setChangeRequests([])
        } else if (res.data.statuscode === '119') {
        } else {
          setreq(
            'Can not cancel this request , its already accepted or rejected!'
          )
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <AcSideBar></AcSideBar>
        <div style={{ marginLeft: '0%' }}>
          <div style={{ width: '70%' }}>
            <div>
              <span style={{ color: 'black', fontSize: '1.5vw', margin: '0%' }}>
                Filter by status (optional):
              </span>
              <Form.Control
                as='select'
                defaultValue='select request status'
                placeholder='select status (optional)'
                className='signInFormStyle'
                style={{
                  width: '20%',
                  textAlign: 'left',
                  left: '0vw',
                  margin: '0vw',
                  marginLeft: '1%',
                  display: 'inline',
                  marginTop: '-2%',
                  fontSize: '1vw',
                  borderWidth: '2px',
                  borderColor: '#616eff',
                }}
                onChange={(e) => {
                  setrequest(e.target.value)
                }}
              >
                <option value=''>select status (optional) </option>
                <option value='pending'>pending</option>
                <option value='accepted'>accepted</option>
                <option value='rejected'>rejected</option>
              </Form.Control>
              <div
                style={{
                  color: 'red',
                  fontSize: '80%',
                  marginLeft: '34%',
                }}
              ></div>
            </div>
            <text style={{ fontSize: '2', color: 'red' }}>{noreq}</text>
            {!requestStatus ? (
              <div style={{ width: '70vw', fontSize: '100%' }}>
                <Table
                  headerColor='#e08eb4'
                  headerNames={[
                    'status',
                    'course Code',
                    'staff Id',
                    'location',
                    ' Slot-Name',
                    ' Slot day',
                    '  Slot Type',
                    'comment',
                  ]}
                  records={ALLSlotLinkingRequestsForYou}
                  keys={[
                    'status',
                    'courseCode',
                    'staffId',
                    'location',
                    'desiredSlotName',
                    'desiredSlotday',
                    'desiredSlotType',
                    'comment',
                  ]}
                  request={true}
                  functionHeaders={['cancel']}
                  cancel={(id) => cancelRequest(id)}
                ></Table>
              </div>
            ) : (
              <div style={{ width: '50vw', fontSize: '100%' }}>
                <Table
                  headerColor='#e08eb4'
                  headerNames={[
                    'status',
                    'course Code',
                    'staff Id',
                    'location',
                    ' Slot-Name',
                    ' Slot day',
                    '  Slot Type',
                    'comment',
                  ]}
                  records={ALLSlotLinkingRequestsForYou}
                  keys={[
                    'status',
                    'courseCode',
                    'staffId',
                    'location',
                    'desiredSlotName',
                    'desiredSlotday',
                    'desiredSlotType',
                    'comment',
                  ]}
                  request={true}
                  functionHeaders={['cancel']}
                  cancel={(id) => cancelRequest(id)}
                ></Table>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
