import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
export default function ViewAcceptRejectHod(props) {
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const dispatch = useDispatch()
  const [requests, setRequests] = useState([])
  const [onChange, setOnChange] = useState('')
  const [annualLeave, setAnnualLeave] = useState([])
  const acceptRequest = async (id) => {
    axios({
      url: `${backendLink}/hod/acceptRequest`,
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
      url: `${backendLink}/hod/rejectRequest`,
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
        url: `${backendLink}/hod/viewAllRequests`,
        method: 'get',
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          if (res.data.statuscode === '0000') {
            console.log(res.data)
            const annleave = []
            const other = []
            res.data.AllRequests.map((request) => {
              if (request.typeOfRequest == 'annualLeave') {
                const replacements = request.replacements
                const replacers = []
                replacements.forEach((replacement) => {
                  console.log(replacement)
                  replacers.push(replacement.replacerId)
                })
                request.replacers = replacers
                console.log(request)
                annleave.push(request)
              } else {
                other.push(request)
              }
            })
            setRequests(other)
            setAnnualLeave(annleave)
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
      <div style={{ width: '70vw' }}>
        <div style={{ position: 'relative', left: '30%' }}>
          All requests (Except Annual Leave)
        </div>
        <Table
          headerColor='#FFCB08'
          headerNames={[
            'sender Id',
            'day',
            'month',
            'Reason',
            'type Of Request',
            'status',
          ]}
          records={requests}
          request={true}
          functionHeaders={['reject', '/accept']}
          accept={(id) => acceptRequest(id)}
          reject={(id) => rejectRequest(id)}
          keys={[
            'requesterId',
            'day',
            'month',
            'reason',
            'typeOfRequest',
            'status',
          ]}
        ></Table>
      </div>

      <div style={{ width: '70vw', marginTop: '3vw' }}>
        <div style={{ position: 'relative', left: '30%' }}>
          Annual Leave Requests
        </div>
        <Table
          headerColor='#FFCB08'
          headerNames={[
            'sender Id',
            'day',
            'month',
            'Replacers',
            'Reason',
            'status',
          ]}
          records={annualLeave}
          request={true}
          functionHeaders={['reject', '/accept']}
          accept={(id) => acceptRequest(id)}
          reject={(id) => rejectRequest(id)}
          keys={[
            'requesterId',
            'day',
            'month',
            'replacers',
            'reason',
            'status',
          ]}
        ></Table>
      </div>
    </React.Fragment>
  )
}
