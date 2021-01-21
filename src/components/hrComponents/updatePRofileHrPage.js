import React from 'react'
import slary from '../../Images/c2.png'
import email from '../../Images/emailUpdate1.png'
import updateLocation from '../../Images/updateLocation.png'
import HrSideBar from './HrSideBar'
import { useHistory } from 'react-router'
import '../../StyleSheets/updateProfileHRPage.css'

export default function UpdateProfile() {
    const history = useHistory()
    const updateEmailClick = () => {
      history.push('/updateEmailHr')
    }
    const updateSalaryClick = () => {
      history.push('/updateSalary')
    }

    
    return (
      <React.Fragment>
        <div>
          <HrSideBar></HrSideBar>
          <table style={{ marginLeft: '15vw', marginTop: '-40vw' }}>
            <tbody>
              <tr>
                <td className='staffColumnsStylingK1s'>
                  <img
                    src={slary}
                    alt=''
                    className='slary'
                    
                    onClick={updateSalaryClick}

                  ></img>
                  <div className='staffFontsStylingK1s' onClick={updateSalaryClick}>
                    Update Salary
                  </div>
                </td>
                <td className='staffColumnsStylingK2s'>
                  <img
                    src={email}
                    alt=''
                    className='staffIconStylingK'
                    onClick={updateEmailClick}
                  
                  ></img>
                  <div className='staffFontsStylingK2ss'  onClick={updateEmailClick}>
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