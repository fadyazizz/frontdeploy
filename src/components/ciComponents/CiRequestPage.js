import React from 'react'
import send from '../../Images/send.png'
import '../../StyleSheets/hodPages.css'
import CiSideBar from './CiSideBar'
import { useHistory } from 'react-router'

export default function CiRequestPage() {
    const history = useHistory()
 
    const sendRequestClick = () => {
      history.push('/sendRequest')
    }
    
    return (
        <React.Fragment>
        <div>
          <CiSideBar></CiSideBar>
          <table style={{ marginLeft: '15vw', marginTop: '-37vw' }}>
            <tbody>
              <tr>
               
                <td className='hodcolumnsStyling1' >
                  <img
                    src={send}
                    alt=''
                    className='hoddeleteIconStyling1'
                    onClick={sendRequestClick}
                  ></img>
                  <div className='hodFontsStyling1' onClick={sendRequestClick} style={{color:'#41ab71',marginLeft:'-2vw'}}>
                    Send Request
                  </div>
                </td>

              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    )
}
