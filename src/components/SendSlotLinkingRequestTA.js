import React, { useState ,useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import axios from 'axios'
import { useHistory } from 'react-router'
import { backendLink } from '../keys'
import { useSelector, useDispatch } from 'react-redux'
import Table from './Table'

export default function SendSlotLinking() {
    const dispatch = useDispatch()
    const history = useHistory()
  const [courseCode, setCourseCode] = useState('')
  const [desiredSlotType, setSlotType] = useState('') 
  const [desiredSlotday, setSlotDay] = useState('')
  const [desiredSlotName, setSlotName] = useState('')
  const [staffId, setStafftId] = useState('')
  const [comment, setComment] = useState('')
  const [location, setlocation] = useState('')
  const [output, setOutput] = useState([])
  const [joiMessage, setJoiMessage] = useState('')
  const token = useSelector((state) => state.token)
  const courseCodeChange = (event) => {
    console.log(event.target.value)
    setCourseCode(event.target.value)
  }
  const desiredSlotTypeChange = (event) => {
    console.log(event.target.value)
    setSlotType(event.target.value)
  }
  const desiredSlotdayChange = (event) => {
    console.log(event.target.value)
    setSlotDay(event.target.value)
  }
  const desiredSlotNameChange = (event) => {
    console.log(event.target.value)
    setSlotName(event.target.value)
  }
  const staffIdChange = (event) => {
    console.log(event.target.value)
    setStafftId(event.target.value)
  }
  const commentChange = (event) => {
    console.log(event.target.value)
    setComment(event.target.value)
  }
  const locationChange = (event) => {
    console.log(event.target.value)
    setlocation(event.target.value)
  }


  const sendslotlinkingreqs = async (event) => {
    event.preventDefault()
    event.stopPropagation()
 
    axios({
      url: `${backendLink}/academicMember/sendSlotLinkingRequests`,
      method: 'post',
      headers: { authorization: token },
      data: {  
        courseCode ,
        staffId,
        location ,
        desiredSlotName ,
        desiredSlotday,
        desiredSlotType,
        comment ,
        
     
      },
    }).then((res) => {
      const error = res.data.error
      console.log(res.data)
if(res.data.statuscode==='0000')
{ setJoiMessage(res.data.message)


}
 
      if (error) {
        
        setJoiMessage(res.data.error)
        
        return
      }   
    })
  }

  
  useEffect(() => {
    //  console.log('here', token)
    if (!dispatch(checkTokenExpired(history))) {
        axios({
            url:`${backendLink}/academicMember/viewCourseslots`,
            method: 'get',
            headers: {
              authorization: token,
            },
            data:{}
          
          })
            .then((res) => {
                console.log(res.data.output)
                
              if (res.data.statuscode === '0000') {
              console.log(res.data.output)
              
              
                
               setOutput(res.data.output)
                
              } else {
               
                setOutput([])
              }
            })
            .catch((err) => {
             
              console.log(err)
            })
    }
  }, [])
  return (
    <React.Fragment>
      <div   style={{ width: '75vw' ,textAlign:'center',fontSize:'2vh', marginLeft:'25vh', marginTop:'2vh'}}>
      <Form.Label style={{   textAlign:'center',fontSize:'4vh' ,fontWeight:'500',color:'#2a306b'}} >
    Avaliable Slots in your courses  
                          </Form.Label>
      <Table
    
     headerColor='#e08eb4'
     width='70vh'
        
          headerNames={['course Code' , 'slot name',  'day' ,'type of slot','location of slot' ]}
          records={output}
          keys={['courseCode' , 'slotName' ,  'day','typeOfSlot' ,'location' ]}
        ></Table> 
     <Card  style={{   
  width: '70vh',
  height: 'auto !important',
   marginLeft:'5vh',
   marginTop:'2vh',

   
  background:'#e08eb4'}}>
          <Card.Body>
            <Card.Text style={{color:'#2a306b' , fontSize:'5vh'}}  >Send Slot Linking Request </Card.Text>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group>
                <Form.Label style={{ color:'#2a306b' , fontSize:'2.5vh'}} >
                  Course Code:
                </Form.Label>
                <Form.Control
                  
                  type='text'
                  placeholder='Enter your Course Code'
                  onChange={(event) => courseCodeChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group controlId='formBasicEmail'>
                <Form.Label style={{color:'#2a306b' , fontSize:'2.5vh'}}>
                  Your Id:
                </Form.Label>
                <Form.Control
                  className='locFormStyle'
                  type='text'
                  placeholder='Enter your id'
                  onChange={(event) => staffIdChange(event)}
                />
              </Form.Group>
            </Form>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group>
                <Form.Label style={{ color:'#2a306b' , fontSize:'2.5vh'}} >
                 location:
                </Form.Label>
                <Form.Control
                  
                  type='text'
                  placeholder='Enter desired slot location'
                  onChange={(event) => locationChange(event)}
                />
              </Form.Group>
            </Form>
            <Form.Group controlId='formGridState'>
              <Form.Label style={{ color:'#2a306b' , fontSize:'2.5vh'}}>
                  Desired Slot name:</Form.Label>
              <Form.Control
                as='select'
                defaultValue='...'
                className='locFormStyle'
                onChange={(event) =>  desiredSlotNameChange(event)}
              >
                <option>...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='formGridState'>
              <Form.Label  style={{ color:'#2a306b' , fontSize:'2.5vh'}}>
                  Desired slot day:</Form.Label>
              <Form.Control
                as='select'
                defaultValue='...'
                 
                onChange={(event) =>  desiredSlotdayChange(event)}
              > 
                <option>...</option>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Saturday</option>
                <option>Sunday</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='formGridState'>
              <Form.Label style={{ color:'#2a306b' , fontSize:'2.5vh'}}>
                  Desired slot Type:</Form.Label>
              <Form.Control
                as='select'
                defaultValue='...'
                 
                onChange={(event) =>  desiredSlotTypeChange(event)}
              >  
                <option>...</option>
                <option>lab</option>
                <option>tutorial</option>
                <option>lecture</option>
               
              </Form.Control>
            </Form.Group>
            <Form style={{ marginTop: '1vw' }}>
              <Form.Group>
                <Form.Label style={{ color:'#2a306b' , fontSize:'2.5vh'}} >
                comment:
                </Form.Label>
                <Form.Control
                  
                  type='text'
                  placeholder='Enter Your comment'
                  onChange={(event) => commentChange(event)}
                />
              </Form.Group>
            </Form>
            <Button 
            fontSize='2.5vh'
              variant='light'
              type='submit'
              className='addButtonStyle'
              onClick={(event) => sendslotlinkingreqs(event)}
            >
              {' '}
             Send{' '}
            </Button>

            {joiMessage === 'success' ? (
              <Form.Text  style={{ marginLeft: '15vw', color:'black',fontSize:'3vh' ,fontWeight:'400'}} >
                Your SlotLinking Request sent successfuly to CourseCoordinator!
              </Form.Text>
            ) : joiMessage === '"location" is not allowed to be empty' ? (
              <Form.Text
                
                style={{ marginLeft: '15vw', color:'Red',fontSize:'3vh' ,fontWeight:'400'}}
              >
                location is required!
              </Form.Text>
            )  :joiMessage === '"comment" is not allowed to be empty' ? (
                <Form.Text
                  
                  style={{ marginLeft: '15vw', color:'Red',fontSize:'3vh' ,fontWeight:'400'}}
                >
                 You've to enter a comment!
                </Form.Text>
              ) :
              joiMessage === 'not a valid request' ? (
                <Form.Text
                  
                  style={{ marginLeft: '15vw', color:'Red',fontSize:'3vh' ,fontWeight:'400'}}
                >
                This is not a valid course slot for you ,check avaliable from table above
                </Form.Text>
              ) :  joiMessage === '"courseCode" is not allowed to be empty' ? (
              <Form.Text
               
                style={{ marginLeft: '15vw', color:'Red',fontSize:'3vh' ,fontWeight:'400' }}
              >
                Course code is required
              </Form.Text>
            ) : joiMessage === 'YOU CANT MAKE A SLOTLINKING REQUEST FOR A COURSE YOURE NOT ASSIGNED TO' ? (
              <Form.Text    style={{ marginLeft: '15vw', color:'Red',fontSize:'3vh' ,fontWeight:'400'}} >
                 Your're not assigned to course code you're making the request for
              </Form.Text>
            ) : joiMessage === 'enter your correct id' ? (
              <Form.Text
              
                style={{ marginLeft: '15vw', color:'Red',fontSize:'3vh' ,fontWeight:'400'}}
              >
                Enter your correct id!
              </Form.Text>
            ) 
            : joiMessage === '"desiredSlotName" is not allowed to be empty' ? (
                <Form.Text
                 
                style={{ marginLeft: '15vw', color:'Red',fontSize:'3vh' ,fontWeight:'400'}}
                >
                  Desired slot name is required!
                </Form.Text> 
              )  : joiMessage === '"desiredSlotday" is not allowed to be empty' ? (
                <Form.Text
                 
                style={{ marginLeft: '15vw', color:'Red',fontSize:'3vh' ,fontWeight:'400'}}
                >
                  Desired slot Day is required!
                </Form.Text>
              ) :
              joiMessage === '"desiredSlotName" must be a number' ? (
                <Form.Text
                 
                style={{ marginLeft: '15vw', color:'Red',fontSize:'3vh' ,fontWeight:'400'}}
                >
                  Choose desired slotName
                </Form.Text>
              ): joiMessage === '"desiredSlotType" is not allowed to be empty' ? (
                <Form.Text
                style={{ marginLeft: '15vw', color:'Red',fontSize:'3vh' ,fontWeight:'400'}}
                >
                  Desired slot Type is required!
                </Form.Text>
              ): joiMessage === '"staffId" is not allowed to be empty' ? (
                <Form.Text
                 
                style={{ marginLeft: '15vw', color:'Red',fontSize:'3vh' ,fontWeight:'400'}}
                >
                 Your Id is required!
                </Form.Text>
              ):(
              ''
            )}
          </Card.Body>
        </Card>
      </div>


    </React.Fragment>
  )
}