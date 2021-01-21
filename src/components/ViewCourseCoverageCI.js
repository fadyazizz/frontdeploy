import React, { useState, useEffect } from 'react'
import { checkTokenExpired } from '../globalState/actions/AuthActions'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { backendLink } from '../keys'
import { useHistory } from 'react-router'
import Table from './Table'
import CiSideBar from './ciComponents/CiSideBar'
export default function ViewCourseCoverageCI(props) {
  const dispatch = useDispatch()
  const token = useSelector((state) => state.token)
  const history = useHistory()
  const [CourseCoverageOfMyCourses, setCourseCoverage] = useState([])
  useEffect(() => {
    //  console.log('here', token)
    if (!dispatch(checkTokenExpired(history))) {
      axios({
        url: `${backendLink}/courseInstructor/viewCoursesCoverageCI`,
        method: 'get',
        headers: {
          authorization: token,
        },
        data: {},
      })
        .then((res) => {
          if (res.data.statuscode === '0000') {
            console.log(res.data.CourseCoverageOfMyCourses)
            setCourseCoverage(res.data.CourseCoverageOfMyCourses)
            console.log(res.data.CourseCoverageOfMyCourses)
          } else {
            setCourseCoverage([])
            console.log(res.data.CourseCoverageOfMyCourses)
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
        <CiSideBar></CiSideBar>
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
            Courses Coverage of your assigned courses
          </Form.Label>
          <Table
            headerColor='#41ab71'
            headerNames={['Course Code', 'Course Coverage']}
            records={CourseCoverageOfMyCourses}
            keys={['coursecode', 'CourseCoverage']}
          ></Table>
        </div>
      </div>
    </React.Fragment>
  )
}
