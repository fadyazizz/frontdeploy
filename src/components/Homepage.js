import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import unipic from '../Images/unipic.jpg'
 
import Logo from '../Images/Logo.png'
import verticalwhiteline from '../Images/whiteLine.png'
import '../StyleSheets/homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
 
 
 
export default function HomePage(props) {
    const history = useHistory()
  return (
    <React.Fragment>
                  <Card className='cardStyle1'>
                 
                    <Card.Body style={{ padding: '0vh' 
                  }}>
                     
                
                          <Form.Label className='labelStyleguc'>
                          German University In Cairo
                          </Form.Label>
                        <button
                        
                          type='submit'
                          className='buttonStylelogin'
                           onClick={()=>history.push("/login")}
                        >
                           Login
                         
                        </button>
                      
                    </Card.Body>
                    <div className='logInCircle'>
                    
              <img
                className='logInLogoImage'
                height='85%'
                width='65%'
                src={Logo}
              ></img>
            </div>
                  </Card>
                 
                <img
                    height='7%'
                    width='80%'
                  src={unipic}
                    style={{
                      marginTop: '10vh',
                      marginLeft: '5vh',
                      marginRight: '5vh'
                    }}
                  ></img>

<Card className='cardStyle2'>
                 
                 <Card.Body style={{ padding: '0vh' 
               }}>
                  
                  <Form.Label className='labelStyleguc2'>
                 <text>
                     
                    German University In Cairo  
                    <br/>
                        New Cairo City
                        <br/>
                         5th Settlement
                         </text>
                          </Form.Label>

                          <Form.Label className='labelStyleguccontactus'>
                 <text>
                     
                    CONTACT US
                    <br/>
                    <br/>
                        Hotline 16482
                        <br/>
                         Tel: +202 275899908
                         <br/>
                         Fax : +202 27581048
                         </text>
                          </Form.Label>

                           

         <Form.Label className='labelStylegucconnectwithus'>
<text>

CONNECT WITH US
<br/>
 
<br/>
 
<a href="https://www.guc.edu.eg"style={{color:'#85a5c9'}}>https://www.guc.edu.eg </a>

<br/>
<a href="https://www.guc.edu.eg/en/policies_regulations.aspx" style={{color:'#85a5c9'}}>policies and regulations</a>
<br/>  
copyrights 2021, German University in Cairo
<br/>

 
 
</text>


 

</Form.Label>
                   
                 </Card.Body>
                 <Image
                        className='Guclogostyle2'
                        src={Logo}
                      ></Image>
                
               </Card>
     
    </React.Fragment>
  )
}