import React, { useState, useEffect } from 'react'

import AcSideBar from './AcSideBar'
import SignInSignOut from '../SignInSignOut'
export default function AcCoursesPage(props) {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <AcSideBar></AcSideBar>
        <div style={{ marginLeft: '30%', marginTop: '10%' }}>
          <SignInSignOut color='#e08eb4'></SignInSignOut>
        </div>
      </div>
    </React.Fragment>
  )
}
