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
import { useSelector} from 'react-redux'
import { backendLink } from '../../keys'


export default function UpdateSalary(props) {

    const params = useParams()
    const history = useHistory() 
  
    const [salary, setSalary] =   useState('')
  
    const [message, setMessage] = useState('')
  
    const [error, setError] = useState('')
    const [joiMessage, setJoiMessage] = useState('')

    const salaryChange = (event) => {
      
  
        setSalary(event.target.value)
    }
  
    const token = useSelector((state) => state.token) 
    
    const UpdateSalary = async (e) => {
      e.preventDefault()
      e.stopPropagation()
      
      await axios({
        url: `${backendLink}/account/updateProfile`,
        method: 'put',
        headers: { authorization: token },
        data: {
       salary
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
            <HrSideBar> </HrSideBar>
    
    
    
         <Card className='ResetCards' style={{ height: '18.5vw' }}>
              <Card.Body>
                <Form style={{ marginTop: '1vw' }}>
                  <Form.Group>
                    <Form.Label className='locLabelStyleK'>salary:</Form.Label>
                    <Form.Control
                      className='locFormStyleK'
                      type='text'
                      placeholder='Enter new salary'
                      onChange={(event) => salaryChange(event)}
                    />
                  </Form.Group>
                </Form>

              <Button
                variant='light'
                type='reset'
                className='addButtonStyle:K'
                onClick={(event) => UpdateSalary(event)}
                style={{ marginTop: '2vw' }}
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
              ) : message === '"salary" is not allowed to be empty' ? (
                <Form.Text
                  className='messagesStylingK'
                  style={{ marginLeft: '23vw' }}
                >
                  salary is required!
                </Form.Text>
              ) : message === '"salary" must be a number' ? (
                <Form.Text
                  className='messagesStylingK'
                  style={{ marginLeft: '23vw' }}
                >
                  Salary must be a number !
         
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