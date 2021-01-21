import React, { useState, useEffect } from 'react'

import { checkTokenExpired } from '../globalState/actions/AuthActions'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
import Form from 'react-bootstrap/Form'
import '../StyleSheets/signIn.css'
import AcSideBar from '../components/acComponents/AcSideBar'
export default function ViewRequestsAC(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()

  const [requests, setRequets] = useState([])
  const [status, setStatus] = useState(undefined)
  const [changeRequests, setChangeRequests] = useState([])
  const [error, setError] = useState('')
  useEffect(() => {
    //  console.log('here', token)
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/academicMember/viewRequestsStatus`,
        method: 'post',
        headers: {
          authorization: token,
        },
        data: {
          status: status == '' ? undefined : status,
        },
      })
        .then((res) => {
          if (res.data.statuscode === '0000') {
            setRequets(res.data.requests)
            console.log(res.data.requests)
          } else {
            console.log(res.data)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [status, changeRequests])
  const cancelRequest = async (id) => {
    axios({
      url: `${backendLink}/academicMember/cancelRequest`,
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

          setChangeRequests([])
        } else {
          setError(res.data.statuscode)
          console.log(res.data)
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
        <div style={{ width: '70%' }}>
          <div>
            <span style={{ color: 'black', fontSize: '1vw', margin: '0%' }}>
              status (optional):
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
                setStatus(e.target.value)
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
            >
              {error == '28'
                ? `can not cancel this request either it is accepted/rejected or its day has passed`
                : ''}
            </div>
          </div>
          {!status ? (
            <div style={{ width: '50vw', fontSize: '100%' }}>
              <Table
                headerColor='#e08eb4'
                headerNames={[
                  'day',
                  'month',
                  'year',
                  'typeOfRequest',
                  'status',
                ]}
                records={requests}
                request={true}
                functionHeaders={['cancel']}
                cancel={(id) => cancelRequest(id)}
                keys={['day', 'month', 'year', 'typeOfRequest', 'status']}
              ></Table>
            </div>
          ) : (
            <div style={{ width: '50vw', fontSize: '100%' }}>
              <Table
                headerColor='#e08eb4'
                headerNames={['day', 'month', 'year', 'typeOfRequest']}
                records={requests}
                request={true}
                functionHeaders={['cancel']}
                cancel={(id) => cancelRequest(id)}
                keys={['day', 'month', 'year', 'typeOfRequest']}
              ></Table>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}
