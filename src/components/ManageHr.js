import React from 'react'
import settings from '../Images/settings.png'
import { useHistory } from 'react-router'
import '../StyleSheets/handles.css'

export default function ManageHr() {
  const history = useHistory()
  const manageAccountClick = () => {
    history.push('/acAccountPage')
  }
  const manageHrClick = () => {
    history.push('/hrSideBar')
  }

  return (
    <div>
      <table style={{ marginLeft: '13vw', marginTop: '6vw' }}>
        <tbody>
          <tr>
            <td style={{ paddingLeft: '6vw' }}>
              {' '}
              <img
                src={settings}
                alt=''
                className='handleImage'
                onClick={manageAccountClick}
              ></img>
              <div className='handlefont' onClick={manageAccountClick}>
                Manage Account
              </div>
            </td>
            <td style={{ paddingLeft: '6vw' }}>
              {' '}
              <img
                src={settings}
                alt=''
                className='handleImage'
                onClick={manageHrClick}
              ></img>
              <div className='handlefont' onClick={manageHrClick}>
                Manage HR
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
