import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
export default function ViewSlotlinkingrequestsCC(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [noslotlinks, sets1] = useState([''])
  const [requests, setRequests] = useState([])
  const [onChange, setOnChange] = useState('')
  const [YourSlotLinkingRequestss, setslotlinking] = useState([])
  const acceptRequest = async (id) => {
    axios({
      url: `${backendLink}/courseCoordinator/acceptSlotLinkingRequests`,
      method: 'put',
      headers: {
        authorization: token,
      },
      data: {
        requestId: id,
      },
    })
      .then((res) => {
        console.log(res.data)

        if (res.data.statuscode === '0000') {
          sets1('Request Accepted Successfully!')
          setOnChange('1')
        } else if (res.data.statuscode === 121) {
          sets1(
            "You can't accept this request ,slot assigned to another ta or doesnot exist , you should reject it"
          )
        } else {
          sets1(
            "You can't accept this request , its already accepted/rejected  "
          )
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const rejectRequest = async (id) => {
    axios({
      url: `${backendLink}/courseCoordinator/rejectSlotLinkingRequests`,
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
          sets1('Request Rejected Successfully!')
          setOnChange('1')
          // setRequests(res.data.Requests)
        } else {
          sets1(
            "You can't reject this request , its already accepted or rejected"
          )
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
        url: `${backendLink}/courseCoordinator/viewSlotLinkingRequests`,
        method: 'get',
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          if (res.data.statuscode === '0000') {
            setslotlinking(res.data.YourSlotLinkingRequests)
            sets1('')
          } else {
            sets1('No Slot Linking requests made for your courses yet!')
            setslotlinking([])
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [onChange])
  return (
    <React.Fragment>
      <div style={{ width: '80vw', textAlign: 'center', fontSize: '2vh' }}>
        <Form.Label
          style={{ textAlign: 'center', fontSize: '3vh', fontWeight: '500' }}
        >
          Slot Linking Requests
        </Form.Label>
        <div>
          {' '}
          <text style={{ fontSize: '3', color: 'red' }}>{noslotlinks}</text>
        </div>

        <Table
          headerColor='#999999'
          headerNames={[
            'course Code',
            'Staff Id',
            ' Desired Slot-Name',
            'Desired Day',
            'location',
            'Desired Slot Type',
            'comment',
            'request status',
          ]}
          records={YourSlotLinkingRequestss}
          keys={[
            'courseCode',
            'staffId',
            'desiredSlotName',
            'desiredSlotday',
            'location',
            'desiredSlotType',
            'comment',
            'status',
          ]}
          functionHeaders={['reject', '/accept']}
          request={true}
          accept={(id) => acceptRequest(id)}
          reject={(id) => rejectRequest(id)}
        ></Table>
      </div>
    </React.Fragment>
  )
}
