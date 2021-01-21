import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/resetPassword.css'
import HrSideBar from './HrSideBar'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { useSelector} from 'react-redux';

import { backendLink } from '../../keys'


export default function ResetPassword(props) {

  const params = useParams()
  const history = useHistory() 

  const [oldPassword, setPassword] =   useState('')
  const [newPassword, setnewPassword] = useState('')
  const [confirmationNewPassword, setconfirmationNewPassword] = useState('')

  const [message, setMessage] = useState('')

  const [error, setError] = useState('')
  const [joiMessage, setJoiMessage] = useState('')


  const newPasswordChange = (event) => {
    setnewPassword(event.target.value)
  }

  const confirmatioNewPasswordChange = (event) => {
    setconfirmationNewPassword(event.target.value)
  }
  
  const passwordChange = (event) => {
    

    setPassword(event.target.value)
  }

  const token = useSelector((state) => state.token) 
  
  const ResetPass = async (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    await axios({
      url: `${backendLink}/account/resetPassword`,
      method: 'put',
      headers: { authorization: token },
      data: {
        oldPassword,
        newPassword,
        confirmationNewPassword
      },

      
    }).then((res) => {
      const error = res.data.error
      console.log(res.data  )

      
      if (error) {
        setMessage(res.data.error)

        return
      } else {
        setMessage('reset successfully!')

      }
    })
  }


    
  return (



    <React.Fragment>
    <div>
        <HrSideBar> </HrSideBar>



     <Card className='ResetCards' style={{ height: '28.5vw' }}>
          <Card.Body>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group>
                <Form.Label className='locLabelStyleK'>Current Password:</Form.Label>
                <Form.Control
                  className='locFormStyleK'
                  type='text'
                  placeholder='Enter current password'
                  onChange={(event) => passwordChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group>
                <Form.Label className='locLabelStyleK'>New Password:</Form.Label>
                <Form.Control
                  className='locFormStyleK'
                  type='text'
                  placeholder='Enter new password'
                  onChange={(event) => newPasswordChange(event)}
                />
              </Form.Group>
          </Form>
          <Form style={{ marginTop: '1vw' }}>
              <Form.Group>
                <Form.Label className='locLabelStyleK'>New Password:</Form.Label>
                <Form.Control
                  className='locFormStyleK'
                  type='text'
                  placeholder='Enter confirmation new password'
                  onChange={(event) => confirmatioNewPasswordChange(event)}
                />
              </Form.Group>
          </Form>
          <Button
            variant='light'
            type='reset'
            className='addButtonStyle:K'
            onClick={(event) => ResetPass(event)}
            style={{ marginTop: '1vw' }}
          >
            {' '}
            reset{' '}
          </Button>

          {message === 'reset successfully!' ? (
            <Form.Text
              className='messagesStylingKS'
              style={{ marginLeft: '23vw' }}
            >
              reset successfully!
            </Form.Text>
          ) : message === '"oldPassword" is not allowed to be empty' ? (
            <Form.Text
              className='messagesStylingK'
              style={{ marginLeft: '23vw' }}
            >
              Current password is required!
            </Form.Text>
          ) : message === '"newPassword" is not allowed to be empty' ? (
            <Form.Text
              className='messagesStylingK'
              style={{ marginLeft: '23vw' }}
            >
              new password is required!
            </Form.Text>
          )  : message === '"confirmationNewPassword" is not allowed to be empty' ? (
            <Form.Text
              className='messagesStylingK'
              style={{ marginLeft: '22vw' }}
            >
             Confirmation new password is required!
            </Form.Text>
          ) : message == 'incorrectPassword' ? (
            <Form.Text
              className='messagesStylingK'
              style={{ marginTop: '-0.1vw', marginLeft: '20vw' }}
            >
              wrong password!
            </Form.Text>
          )  : (
            ''
          )}
        </Card.Body>
      </Card>
    </div>
  </React.Fragment>


   

  )

}