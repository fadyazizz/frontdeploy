import React from 'react'

import email from '../../Images/emailUpdate1.png'

import AcSideBar from './AcSideBar'
import { useHistory } from 'react-router'
import '../../StyleSheets/updateProfileAcPage.css'

export default function UpdateProfile() {
    const history = useHistory()
    const updateEmailClick = () => {
      history.push('/updateEmailAc')
    }

    
    return (
      <React.Fragment>
        <div>
          <AcSideBar></AcSideBar>
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
                  <div className='staffFontsStylingK2k'  onClick={updateEmailClick}>
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