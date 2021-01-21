import React, { useState, useEffect } from 'react'
import AcSideBar from './AcSideBar'
import MissingDays from '../MissingDays'
export default function ViewAttendance(props) {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <AcSideBar></AcSideBar>
        <MissingDays></MissingDays>
      </div>
    </React.Fragment>
  )
}
