import React, { useState, useEffect } from 'react'
import AcSideBar from './AcSideBar'
import AttendanceRecords from '../AttendanceRecords'
export default function ViewAttendance(props) {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <AcSideBar></AcSideBar>
        <AttendanceRecords></AttendanceRecords>
      </div>
    </React.Fragment>
  )
}
