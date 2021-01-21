import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../../StyleSheets/resetPasswordAc.css'
import AcSideBar from './AcSideBar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useSelector} from 'react-redux'
import { backendLink } from '../../keys'



export default function UpdateEmail(props) {

    const params = useParams()
    const history = useHistory() 
  
    const [email, setEmail] =   useState('')
  
    const [message, setMessage] = useState('')
  
    const [error, setError] = useState('')
    const [joiMessage, setJoiMessage] = useState('')

    const emailChange = (event) => {
      
  
        setEmail(event.target.value)
    }
  
    const token = useSelector((state) => state.token) 
    
    const UpdateEmail = async (e) => {
      e.preventDefault()
      e.stopPropagation()
      
      await axios({
        url: `${backendLink}/account/updateProfile`,
        method: 'put',
        headers: { authorization: token },
        data: {
       email
        },
  
        
      }).then((res) => {
        const error = res.data.error
        console.log(res.data  )
  
        
        if (error) {
          setMessage(res.data.error)
  
          return
        } else {
          setMessage('update successfully!')
  
        }
      })
    }
    return (



        <React.Fragment>
        <div>
            <AcSideBar> </AcSideBar>
    
    
    
         <Card className='ResetCard' style={{ height: '18.5vw' }}>
              <Card.Body>
                <Form style={{ marginTop: '1vw' }}>
                  <Form.Group>
                    <Form.Label className='locLabelStyleK'>Email:</Form.Label>
                    <Form.Control
                      className='locFormStyleK'
                      type='text'
                      placeholder='Enter new email'
                      onChange={(event) => emailChange(event)}
                    />
                  </Form.Group>
                </Form>

              <Button
                variant='light'
                type='reset'
                className='addButtonStyle:K'
                onClick={(event) => UpdateEmail(event)}
                style={{ marginTop: '1vw' }}
              >
                {' '}
                update{' '}
              </Button>
    
              {message === 'update successfully!' ? (
                <Form.Text
                  className='messagesStylingKS'
                  style={{ marginLeft: '23vw' }}
                >
                  updatded successfully!
                </Form.Text>
              ) : message === '"email" is not allowed to be empty' ? (
                <Form.Text
                  className='messagesStylingK'
                  style={{ marginLeft: '23vw' }}
                >
                  email is required!
                </Form.Text>
              ) : message === '"email" must be a valid email' ? (
                <Form.Text
                  className='messagesStylingK'
                  style={{ marginLeft: '23vw' }}
                >
                  email must be a valid email!
         
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