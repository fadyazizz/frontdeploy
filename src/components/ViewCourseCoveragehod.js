import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
import HodSideBar from './hodComponents/HodSideBar'
export default function ViewCourseCoveragehod(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [CourseCoverageOfMyCourses, setCourseCoverage] = useState([])
  useEffect(() => {
    //  console.log('here', token)
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/hod/viewCoursesCoverage`,
        method: 'get',
        headers: {
          authorization: token,
        },
        data: {},
      })
        .then((res) => {
          console.log(res.data)
          if (res.data.statuscode === '0000') {
            setCourseCoverage(res.data.CourseCoverageOfMyCourses)
            console.log(res.data.CourseCoverageOfMyCourses)
          } else {
            setCourseCoverage([])
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])
  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <HodSideBar></HodSideBar>
        <div
          style={{
            width: '30vw',
            textAlign: 'center',
            fontSize: '2vh',
            marginLeft: '50vh',
            marginTop: '20vh',
          }}
        >
          <Form.Label
            style={{ textAlign: 'center', fontSize: '2vh', fontWeight: '500' }}
          >
            Courses Coverage under your department
          </Form.Label>
          <Table
            headerColor='#FFCB08'
            headerNames={['Course Code', 'Course Coverage']}
            records={CourseCoverageOfMyCourses}
            keys={['coursecode', 'CourseCoverage']}
          ></Table>
        </div>
      </div>
    </React.Fragment>
  )
}
