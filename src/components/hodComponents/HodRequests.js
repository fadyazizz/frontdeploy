import React from 'react'
import viewRequests from '../../Images/view.png'
import accept from '../../Images/accept.png'
import reject from '../../Images/reject.png'
import '../../StyleSheets/hodPages.css'
import HodSideBar from './HodSideBar'
import { useHistory } from 'react-router'
import ViewAcceptRejectHod from '../ViewAcceptRejectHod'
export default function HodRequests() {
  const history = useHistory()
  const viewRequestsClick = () => {
    history.push('/viewAllMyRequests')
  }
  const acceptRequestClick = () => {
    history.push('/acceptRequest')
  }
  const rejectRequestClick = () => {
    history.push('/rejectRequest')
  }

  return (
    <React.Fragment>
      <div>
        <div style={{}}>
          <HodSideBar></HodSideBar>
          <div style={{ marginLeft: '20vw', marginTop: '-40vw' }}>
            <ViewAcceptRejectHod></ViewAcceptRejectHod>
          </div>
        </div>
        {/* <table style={{ marginLeft: '15vw', marginTop: '-35vw' }}>
          <tbody>
            <tr>
              <td className='hodcolumnsStyling1'>
                <img
                  src={viewRequests}
                  alt=''
                  className='hodaddIconStyling1'
                  onClick={viewRequestsClick}
                  style={{height:'10vw',width:'10vw',marginRight:'2vw'}}
                ></img>
                <div className='hodFontsStyling1' onClick={viewRequestsClick}>
                  View All My Requests
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={accept}
                  alt=''
                  className='hodIconStyling1'
                  onClick={acceptRequestClick}
                  style={{height:'10vw',width:'10vw',marginRight:'2vw',marginBottom:'2vw'}}
                ></img>
                <div className='hodFontsStyling1' onClick={acceptRequestClick} style={{marginLeft:'-2vw'}}>
                  Accept Request
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={reject}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={rejectRequestClick}
                  style={{height:'10vw',width:'10vw',marginLeft:'0.5vw',marginBottom:'2vw'}}

                ></img>
                <div className='hodFontsStyling1' onClick={rejectRequestClick} style={{marginLeft:'1.5vw'}}>
                  Reject Request
                </div>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </React.Fragment>
  )
}
