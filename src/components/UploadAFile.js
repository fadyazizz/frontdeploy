import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import upload from '../Images/Upload.png'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import AcSideBar from '../components/acComponents/AcSideBar'
import close from '../Images/cancel.png'

import * as fs from 'fs'
export default function UploadAFile(props) {
  const token = useSelector((state) => state.token)
  const [show, setShow] = useState(false)
  const [file, setFile] = useState('')
  const [error, setError] = useState('')
  const submit = async () => {
    const form = new FormData()
    form.append('image', file)

    await axios({
      method: 'post',
      url: `${backendLink}/academicMember/uploadDocument`,
      data: form,
      headers: {
        'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
        authorization: token,
      },
    })
      .then((res) => {
        setError(res.data.statuscode)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
      <AcSideBar></AcSideBar>
      <Modal show={show}>
        <table
          style={{ width: '100%', backgroundColor: '#e08eb4', height: '50vh' }}
        >
          <tr>
            <td style={{ padding: '0%' }}>
              <div
                style={{
                  fontSize: '150%',
                  color: 'white',
                  position: 'relative',
                  left: '30%',
                }}
              >
                Upload A Document
                <img
                  style={{ marginLeft: '20%', marginTop: '-6%' }}
                  width='4%'
                  src={close}
                  onClick={() => setShow(false)}
                ></img>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <Form.File
                style={{ float: 'right', marginRight: '0%', fontSize: '100%' }}
                onChange={(e) => {
                  console.log(e.target.files[0])
                  setFile(e.target.files[0])
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button
                style={{
                  borderWidth: '0vw',
                  float: 'right',
                  display: 'block',
                  position: 'relative',
                  top: '30%',
                }}
                onClick={() => submit()}
              >
                Submit
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  color: 'red',
                  fontSize: '80%',
                  marginTop: '-6%',
                  float: 'right',
                }}
              >
                {error == '0000'
                  ? 'request submitted successfully'
                  : error == '7000'
                  ? 'you must select a png image'
                  : ''}
              </div>
            </td>
          </tr>
        </table>
      </Modal>
      <table style={{ width: '10vw' }}>
        <tr>
          <td style={{ padding: '0%' }}>
            <table
              style={{
                border: '1px solid #bdbdbd',
                width: '100%',
                height: '100%',
              }}
            >
              <tr>
                <td style={{ padding: '0%' }}>
                  <img width='100%' height='25%' src={upload} />
                </td>
              </tr>
              <tr>
                <td style={{ paddingTop: '4%' }}>
                  <Button
                    variant='primary'
                    style={{ width: '100%', fontSize: '80%' }}
                    onClick={() => setShow(true)}
                  >
                    Upload A document
                  </Button>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      </div>
    </React.Fragment>
  )
}
