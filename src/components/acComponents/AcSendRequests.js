import React from 'react'
import send from '../../Images/send.png'
import '../../StyleSheets/hodPages.css'
import AcSideBar from './AcSideBar'
import { useHistory } from 'react-router'

import status from '../../Images/status.png'
import request from '../../Images/view.png'
import upload from '../../Images/Upload.png'
export default function CiRequestPage() {
  const history = useHistory()

  const sendRequestClick = () => {
    history.push('/AcSendRequests')
  }
  const sendSlot = () => {
    history.push('/ta/sendslotlinkingrequests')
  }
  const viewStatus = () => {
    history.push('/ta/ViewStatus')
  }
  const ViewSlotStatus = () => {
    history.push('/ta/viewSLrequeststatus')
  }
  const cancelStatus = () => {
    history.push('/ta/viewSLrequeststatus')
  }
  const cancelSlotStatus = () => {
    history.push('/ta/viewSLrequeststatus')
  }
  const viewReplacement = () => {
    history.push('/ViewReplacementRequests')
  }

  const uploadClick = () => {
    history.push('/uploadFile')
  }

  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <AcSideBar></AcSideBar>
        <table style={{ marginLeft: '2%', marginTop: '1vw' }}>
          <tbody>
            <tr>
              <td className='hodcolumnsStyling1'>
                <img
                  src={send}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={sendRequestClick}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={sendRequestClick}
                  style={{ color: '#e08eb4', marginLeft: '-2vw' }}
                >
                  Send Request
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={send}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={sendSlot}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={sendSlot}
                  style={{ color: '#e08eb4', marginLeft: '-2vw' }}
                >
                  Send slot Linking Requests
                </div>
              </td>
            </tr>
            <tr>
              <td className='hodcolumnsStyling1'>
                <img
                  src={status}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={viewStatus}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={viewStatus}
                  style={{ color: '#e08eb4', marginLeft: '-2vw' }}
                >
                  View requests status
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={status}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={ViewSlotStatus}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={ViewSlotStatus}
                  style={{ color: '#e08eb4', marginLeft: '-2vw' }}
                >
                  View slot linking status
                </div>
              </td>
            </tr>

            <tr>
              <td className='hodcolumnsStyling1'>
                <img
                  src={request}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={viewReplacement}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={viewReplacement}
                  style={{ color: '#e08eb4', marginLeft: '-2vw' }}
                >
                  View Replacement Requests
                </div>
              </td>
              <td className='hodcolumnsStyling1'>
                <img
                  src={upload}
                  alt=''
                  className='hoddeleteIconStyling1'
                  onClick={uploadClick}
                ></img>
                <div
                  className='hodFontsStyling1'
                  onClick={uploadClick}
                  style={{ color: '#e08eb4', marginLeft: '-2vw' }}
                >
                 Upload File
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>
  )
}
