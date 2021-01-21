import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Card from 'react-bootstrap/Card'
export default function MissingHours(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [code, setCode] = useState()
  const [hours, setHours] = useState()
  useEffect(async () => {
    // console.log('here', token)
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/account/viewMissingHours`,
        method: 'get',
        headers: {
          authorization: token,
        },
      })
        .then((res) => {
          if (res.data.statuscode === '0000') {
            const code1 = res.data.code
            setCode(code1)
            setHours(res.data.Hours)
            console.log(res.data.Hours)
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
    <div
      style={{
        width: '12vw',
        marginLeft: '1vw',
        height: '2vw',
        backgroundColor:
          code == 1
            ? '#5ac454'
            : code == 0
            ? '#baceff'
            : code == -1
            ? '#db3939'
            : '',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '1vw' }}>
        {code == 0
          ? 'you have no missing hours'
          : code == 1
          ? `you have ${hours} hours extra `
          : code == -1
          ? `you have ${hours} hours missing `
          : ''}
      </div>
    </div>
  )
}
