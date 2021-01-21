import React from 'react'
import addLocation from '../../Images/addLocation.png'
import updateLocation from '../../Images/updateLocation.png'
import deleteLocation from '../../Images/deleteLocation.png'
import '../../StyleSheets/locationPage.css'
import HrSideBar from './HrSideBar'
import { useHistory } from "react-router"


export default function LocationPage() {
  const history = useHistory()
  const addLocationClick = () => {
    history.push("/addLocation")
  }
  const updateLocationClick = () => {
    history.push("/updateLocation")
  }
  const deleteLocationClick = () => {
    history.push("/deleteLocation")
  }
    return (
        <React.Fragment>
        <div>
        <HrSideBar></HrSideBar>
            <table style={{marginLeft:'15vw' , marginTop:'-40vw'}}>
                <tbody>
                    <tr>
                        <td className='columnsStyling'>
                            <img src={addLocation} alt='' className='IconStyling' onClick={addLocationClick}></img>
                            <div className='locationFontsStyling' onClick={addLocationClick}>Add Location</div>
                        </td>
                        <td className='columnsStyling'>
                        <img src={updateLocation} alt='' className='IconStyling' onClick={updateLocationClick}></img>
                            <div className='locationFontsStyling' onClick={updateLocationClick}>Update Location</div>
                        </td>
                        <td className='columnsStyling'>
                        <img src={deleteLocation} alt='' className='deleteIconStyling'onClick={deleteLocationClick}></img>
                            <div className='locationFontsStyling' onClick={deleteLocationClick}>Delete Location</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </React.Fragment>
    )
}
