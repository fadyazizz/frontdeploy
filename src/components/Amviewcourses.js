import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
export default function ViewCourses(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [nocourses, sets1] = useState([''])
  const [mycourses, setCourses] = useState([])
  useEffect(() => {
    //  console.log('here', token)
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/academicMember/viewMyCourses`,
        method: 'get',
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          if (res.data.statuscode === '0000') {
            setCourses(res.data.mycourses)
            sets1('')
          } else {
            sets1('You are not assigned to courses yet!')
            setCourses([])
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])
  return (
    <React.Fragment>
      <div
        style={{
          width: '30vw',
          textAlign: 'center',
          fontSize: '2vh',
          marginLeft: '5%',
        }}
      >
        <text style={{ fontSize: '3', color: 'red' }}>{nocourses}</text>
        <Form.Label
          style={{
            textAlign: 'center',
            fontSize: '3vh',
            fontWeight: '700',
            color: '#2a306b',
          }}
        ></Form.Label>

        <Table
          headerColor='#e08eb4'
          headerNames={['Course Code']}
          records={mycourses}
          keys={['coursecode']}
        ></Table>
      </div>
    </React.Fragment>
  )
}
