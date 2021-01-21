import React from 'react'

import email from '../../Images/emailUpdate1.png'

import CcSideBar from './CiSideBar'
import { useHistory } from 'react-router'
import '../../StyleSheets/updateProfileCiPage.css'

export default function UpdateProfile() {
    const history = useHistory()
    const updateEmailClick = () => {
      history.push('/updateEmailCi')
    }

    
    return (
      <React.Fragment>
        <div>
          <CcSideBar></CcSideBar>
          <table style={{ marginLeft: '15vw', marginTop: '-40vw' }}>
            <tbody>
              <tr>
             
                <td className='staffColumnsStylingK2'>
                  <img
                    src={email}
                    alt=''
                    className='staffIconStylingK'
                    onClick={updateEmailClick}
                  
                  ></img>
                  <div className='staffFontsStylingK2'  onClick={updateEmailClick}>
                    Update Email
                  </div>
                </td>
            
              </tr>
  
        
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
  }