import React, { useState, useEffect } from 'react'
import AcSideBar from './AcSideBar'
import MissingHours from '../MissingHours'
export default function ViewAttendance(props) {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <AcSideBar></AcSideBar>
        <MissingHours></MissingHours>
      </div>
    </React.Fragment>
  )
}
