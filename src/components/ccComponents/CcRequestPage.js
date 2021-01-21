import React from 'react'
import viewRequests from '../../Images/view.png'
import accept from '../../Images/accept.png'
import reject from '../../Images/reject.png'
import '../../StyleSheets/hodPages.css'
import CcSideBar from './CcSideBar'
import { useHistory } from 'react-router'
import ViewAcceptRejectSLRCC from '../ViewAcceptRejectSLRCC'
export default function CcRequestPage() {
  const history = useHistory()
  const viewRequestsClick = () => {
    history.push('/viewSlotLinkingRequests')
  }
  const acceptRequestClick = () => {
    history.push('/acceptSlotLinkingRequest')
  }
  const rejectRequestClick = () => {
    history.push('/rejectSlotLinkingRequest')
  }
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <CcSideBar></CcSideBar>
        <ViewAcceptRejectSLRCC></ViewAcceptRejectSLRCC>
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
                  <div className='hodFontsStyling1' onClick={viewRequestsClick} style={{color:'#999999'}} >
                    View Slot Linking Requests
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
                  <div className='hodFontsStyling1' onClick={acceptRequestClick} style={{marginLeft:'-2vw',color:'#999999'}}>
                    Accept Slot Linking Request
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
                  <div className='hodFontsStyling1' onClick={rejectRequestClick} style={{marginLeft:'1.5vw',color:'#999999'}}>
                    Reject Slot Linking Request
                  </div>
                </td>
              </tr>
            </tbody>
          </table> */}
      </div>
    </React.Fragment>
  )
}
