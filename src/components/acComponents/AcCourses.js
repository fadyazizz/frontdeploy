import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
import AcSideBar from '../components/acComponents/AcSideBar'
import ViewCourses from '../Amviewcourses'
export default function AcCourses(props) {
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <AcSideBar></AcSideBar>

        <ViewCourses></ViewCourses>
      </div>
    </React.Fragment>
  )
}
