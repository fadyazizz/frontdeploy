import React, { useState, useEffect } from 'react'

import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'

import { useHistory } from 'react-router'

import AcSideBar from './AcSideBar'
import SendSlotLinking from '../SendSlotLinkingRequestTA'
export default function AcCoursesPage(props) {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <AcSideBar></AcSideBar>
        <SendSlotLinking></SendSlotLinking>
      </div>
    </React.Fragment>
  )
}
