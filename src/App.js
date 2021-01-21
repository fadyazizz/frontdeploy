import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'
//import { useSelector } from 'react-redux'\
import { useSelector, useDispatch } from 'react-redux'
import ViewProfile from './components/ViewProfile'
import ResetPassword from './components/hrComponents/resetPassword'
import Login from './components/Login'
import UpdateProfileHr from './components/hrComponents/updatePRofileHrPage'
import HrSideBar from './components/hrComponents/HrSideBar'
import HodSideBar from './components/hodComponents/HodSideBar'
import Account from './components/hrComponents/Account'
import LocationPage from './components/hrComponents/LocationPage'
import FacultyPage from './components/hrComponents/FacultyPage'
import DepartmentPage from './components/hrComponents/DepartmentPage'
import StaffPage from './components/hrComponents/StaffPage'
import CoursePage from './components/hrComponents/CoursePage'
import AddLocation from './components/hrComponents/AddLocation'
import UpdateLocation from './components/hrComponents/UpdateLocation'
import DeleteLocation from './components/hrComponents/DeleteLocation'
import AddFaculty from './components/hrComponents/AddFaculty'
import UpdateFaculty from './components/hrComponents/UpdateFaculty'
import DeleteFaculty from './components/hrComponents/DeleteFaculty'
import AddDepartment from './components/hrComponents/AddDepartment'
import UpdateDepartment from './components/hrComponents/UpdateDepartment'
import DeleteDepartment from './components/hrComponents/DeleteDepartment'
import AddStaff from './components/hrComponents/AddStaff'
import UpdateStaff from './components/hrComponents/UpdateStaff'
import DeleteStaff from './components/hrComponents/DeleteStaff'
import AddCourse from './components/hrComponents/AddCourse'
import UpdateCourse from './components/hrComponents/UpdateCourse'
import DeleteCourse from './components/hrComponents/DeleteCourse'
import HodCoursesPage from './components/hodComponents/HodCoursesPage'
import HodStaffPage from './components/hodComponents/HodStaffPage'
import HodRequests from './components/hodComponents/HodRequests'
import HodAccountPage from './components/hodComponents/HodAccountPage'
import CiSideBar from './components/ciComponents/CiSideBar'
import CcSideBar from './components/ccComponents/CcSideBar'
import AcSideBar from './components/acComponents/AcSideBar'
import AssignCourseInstructor from './components/hodComponents/AssignCi'
import UpdateCourseInstructor from './components/hodComponents/UpdateCi'
import DeleteCourseInstructor from './components/hodComponents/DeleteCi'
import CiAccountPage from './components/ciComponents/CiAccountPage'
import CiCoursesPage from './components/ciComponents/CiCoursesPage'
import AssignAcToSlot from './components/ciComponents/AssignAcToSlot'
import UpdateAcToSlot from './components/ciComponents/UpdateAssignAc'
import DeleteAcToSlot from './components/ciComponents/DeleteAssignAc'
import AssignAcToCc from './components/ciComponents/AssignAcToCc'
import RemoveAcFromCourse from './components/ciComponents/RemoveAcFromCourse'
import CiRequestPage from './components/ciComponents/CiRequestPage'
import CcRequestPage from './components/ccComponents/CcRequestPage'
import CcAccountPage from './components/ccComponents/CcAccountPage'
import CcCoursePage from './components/ccComponents/CcCoursePage'
import AddCourseSlot from './components/ccComponents/AddCourseSlot'
import UpdateCourseSlot from './components/ccComponents/UpdateCourseSlot'
import DeleteCourseSlot from './components/ccComponents/DeleteCourseSlot'
import AcAccountPage from './components/acComponents/AcAccountPage'
import AssignAcToCourse from './components/ciComponents/AssignAcToCourse'

import HrViewProfile from './components/hrComponents/HrViewProfile'
import HodViewProfile from './components/hodComponents/HodViewProfile'
import CcViewProfile from './components/ccComponents/CcViewProfile'
import CiViewProfile from './components/ciComponents/CiViewProfile'
import AcViewProfile from './components/acComponents/AcViewProfile'
import UpdateSalary from './components/hrComponents/updateSalary'

import UpdatePageAc from './components/acComponents/AcUpdateProfilePage'

import UpdatePageCc from './components/ccComponents/CcUpdatePage'

import UpdateEmailCc from './components/ccComponents/CcUpdateEmal'
import ResePassCc from './components/ccComponents/CcResetPass'

import UpdatePageHod from './components/hodComponents/HodUpdatePage'

import UpdateEmailHod from './components/hodComponents/HodUpdateEmal'
import ResePassHod from './components/hodComponents/HodResetPass'

import UpdatePageCi from './components/ciComponents/CiUpdatePage'

import UpdateEmailCi from './components/ciComponents/CiUpdateEmal'
import ResePassCi from './components/ciComponents/CiResetPass'

import UpdateEmailHr from './components/hrComponents/updateEmailHr'
import Homepage from './components/Homepage'
import ViewCourseCoveragehod from './components/ViewCourseCoveragehod'
import AttendanceRecords from './components/AttendanceRecords'
import MissingDays from './components/MissingDays'
import Table from './components/Table'
import MissingHours from './components/MissingHours'
import SignInSignOut from './components/SignInSignOut'
import AddMissingSignInSignOut from './components/AddMissingSignInOut'
import AddMissingSignIn from './components/AddMissingSignIn'
import ViewStaffAttendanceRecords from './components/ViewStaffAttendanceRecords'
import ViewStaffMemberWithMissingDays from './components/ViewStaffWithMissingDays'
import ViewCourseCoverageCI from './components/ViewCourseCoverageCI'
import ViewTeachingAssignmentsHOD from './components/ViewTeachingAssignmentsHOD'
import ViewSlotsAssignsCI from './components/ViewSlotsAssignsCI'
import ViewStaffWithMissingHours from './components/ViewStaffWithMissingHours'
import ViewStaffIndepCI from './components/ViewStaffIndepCI'
import ViewStaffincoursesCI from './components/ViewStaffincoursesCI'
import ViewStaffPerCourseCI from './components/ViewStaffPerCourseCI'
import ViewAcceptRejectSLRCC from './components/ViewAcceptRejectSLRCC'
import ViewStaffinmydephod from './components/ViewStaffinmydephod'
import ViewStaffIDayOffhod from './components/ViewStaffIDayOffhod'
import ViewSLrequeststatusCancelAM from './components/ViewSLrequeststatusCancelAM'
import ViewStaffpercourseHOD from './components/ViewStaffpercourseHOD'
import SendRequests from './components/SendRequests'
import AmViewSchedule from './components/AmViewSchedule'
import Amviewcourses from './components/Amviewcourses'
import SendSlotLinkingRequestTA from './components/SendSlotLinkingRequestTA'
import UploadAFile from './components/UploadAFile'
import ViewRequestsAC from './components/ViewRequestsAC'
import ViewReplacementRequests from './components/ViewReplacementRequests'
import ViewAcceptRejectHod from './components/ViewAcceptRejectHod'
import CiStaffPage from './components/ciComponents/CiStaffPage'
import UpdateEmailAc from './components/acComponents/AcUpdateEmail'
import ResetPasswordAc from './components/acComponents/AcresetPass'
import AcCoursesPage from './components/acComponents/AcCoursesPage'
import AcViewAttendancePage from './components/acComponents/AcViewAttendancePage'
import AcViewMissingDays from './components/acComponents/AcViewMissingDays'
import AcViewMissingHours from './components/acComponents/AcViewMissingHours'
import AcSendRequests from './components/acComponents/AcSendRequests'
import AcSendRequestsPage from './components/acComponents/AcSendRequestsPage'
import AcSlotLinking from './components/acComponents/AcSendSlotLinking'
import AcSignInOut from './components/acComponents/AcSignInOut'
import AcViewNotifications from './components/acComponents/AcViewNotifications'
import ViewStaffIndepHod from './components/ViewStaffinmydephod'
import ViewstaffperCourseH from './components/ViewStaffpercourseHOD'
import ManageHod from './components/ManageHod'
import ManageCi from './components/ManageCi'
import ManageCc from './components/ManageCc'
import ManageHr from './components/ManageHr'
import ViewMissingHoursDays from './components/hrComponents/ViewMissingHoursDays'
function App() {
  const token = useSelector((state) => state.token)
  return (
    <Router>
      <Switch>
        <Route exact path='/manageAccountHod' render={() => (!token ? <Redirect to='/' /> :<ManageHod />)} />
        <Route exact path='/manageAccountCC' render={() => (!token ? <Redirect to='/' /> :<ManageCc />)} />
        <Route exact path='/manageAccountCI' render={() => (!token ? <Redirect to='/' /> :<ManageCi />)} />
        <Route exact path='/manageAccountHR' render={() => (!token ? <Redirect to='/' /> :<ManageHr />)} />

        <Route
          exact
          path='/acCoursesPage'
          render={() => (!token ? <Redirect to='/' /> : <AcCoursesPage />)}
        />
        <Route
          exact
          path='/viewMissingHoursDays'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewMissingHoursDays />
          }
        />
        <Route
          exact
          path='/viewStaffInMyDepartment'
          render={() => (!token ? <Redirect to='/' /> : <ViewStaffIndepHod />)}
        />
        <Route
          exact
          path='/viewStaffInCourse'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewstaffperCourseH />
          }
        />

       
        <Route
          exact
          path='/viewAttendance'
          render={() =>
            !token ? <Redirect to='/' /> : <AcViewAttendancePage />
          }
        />

        <Route
          exact
          path='/viewMissingDays'
          render={() => (!token ? <Redirect to='/' /> : <AcViewMissingDays />)}
        />
        <Route
          exact
          path='/viewMissingHours'
          render={() => (!token ? <Redirect to='/' /> : <AcViewMissingHours />)}
        />
        <Route
          exact
          path='/AcSendRequests'
          render={() => (!token ? <Redirect to='/' /> : <AcSendRequestsPage />)}
        />
        <Route
          exact
          path='/acRequestsPage'
          render={() => (!token ? <Redirect to='/' /> : <AcSendRequests />)}
        />

        <Route exact path='/login' render={() => <Login />} />
        <Route
          exact
          path='/viewProfile'
          render={() => (!token ? <Redirect to='/' /> : <ViewProfile />)}
        />
        <Route
          exact
          path='/hrviewProfile'
          render={() => (!token ? <Redirect to='/' /> : <HrViewProfile />)}
        />
        <Route
          exact
          path='/hodviewProfile'
          render={() => (!token ? <Redirect to='/' /> : <HodViewProfile />)}
        />
        <Route
          exact
          path='/ccviewProfile'
          render={() => (!token ? <Redirect to='/' /> : <CcViewProfile />)}
        />
        <Route
          exact
          path='/civiewProfile'
          render={() => (!token ? <Redirect to='/' /> : <CiViewProfile />)}
        />
        <Route
          exact
          path='/acviewProfile'
          render={() => (!token ? <Redirect to='/' /> : <AcViewProfile />)}
        />

        <Route
          exact
          path='/resetPassword'
          render={() => (!token ? <Redirect to='/' /> : <ResetPassword />)}
        />
        <Route
          exact
          path='/account'
          render={() => (!token ? <Redirect to='/' /> : <Account />)}
        />
        <Route
          exact
          path='/hrSideBar'
          render={() => (!token ? <Redirect to='/' /> : <HrSideBar />)}
        />
        <Route
          exact
          path='/hodSideBar'
          render={() => (!token ? <Redirect to='/' /> : <HodSideBar />)}
        />
        <Route
          exact
          path='/locationPage'
          render={() => (!token ? <Redirect to='/' /> : <LocationPage />)}
        />
        <Route
          exact
          path='/facultyPage'
          render={() => (!token ? <Redirect to='/' /> : <FacultyPage />)}
        />
        <Route
          exact
          path='/departmentPage'
          render={() => (!token ? <Redirect to='/' /> : <DepartmentPage />)}
        />
        <Route
          exact
          path='/addLocation'
          render={() => (!token ? <Redirect to='/' /> : <AddLocation />)}
        />
        <Route
          exact
          path='/updateLocation'
          render={() => (!token ? <Redirect to='/' /> : <UpdateLocation />)}
        />
        <Route
          exact
          path='/deleteLocation'
          render={() => (!token ? <Redirect to='/' /> : <DeleteLocation />)}
        />
        <Route
          exact
          path='/addFaculty'
          render={() => (!token ? <Redirect to='/' /> : <AddFaculty />)}
        />
        <Route
          exact
          path='/updateFaculty'
          render={() => (!token ? <Redirect to='/' /> : <UpdateFaculty />)}
        />
        <Route
          exact
          path='/deleteFaculty'
          render={() => (!token ? <Redirect to='/' /> : <DeleteFaculty />)}
        />
        <Route
          exact
          path='/addDepartment'
          render={() => (!token ? <Redirect to='/' /> : <AddDepartment />)}
        />
        <Route
          exact
          path='/updateDepartment'
          render={() => (!token ? <Redirect to='/' /> : <UpdateDepartment />)}
        />
        <Route
          exact
          path='/deleteDepartment'
          render={() => (!token ? <Redirect to='/' /> : <DeleteDepartment />)}
        />
        <Route
          exact
          path='/staffPage'
          render={() => (!token ? <Redirect to='/' /> : <StaffPage />)}
        />
        <Route
          exact
          path='/addStaff'
          render={() => (!token ? <Redirect to='/' /> : <AddStaff />)}
        />
        <Route
          exact
          path='/updateStaff'
          render={() => (!token ? <Redirect to='/' /> : <UpdateStaff />)}
        />
        <Route
          exact
          path='/deleteStaff'
          render={() => (!token ? <Redirect to='/' /> : <DeleteStaff />)}
        />
        <Route
          exact
          path='/coursePage'
          render={() => (!token ? <Redirect to='/' /> : <CoursePage />)}
        />
        <Route
          exact
          path='/addCourse'
          render={() => (!token ? <Redirect to='/' /> : <AddCourse />)}
        />
        <Route
          exact
          path='/updateCourse'
          render={() => (!token ? <Redirect to='/' /> : <UpdateCourse />)}
        />
        <Route
          exact
          path='/deleteCourse'
          render={() => (!token ? <Redirect to='/' /> : <DeleteCourse />)}
        />
        <Route
          exact
          path='/hodCoursesPage'
          render={() => (!token ? <Redirect to='/' /> : <HodCoursesPage />)}
        />
        <Route
          exact
          path='/hodCoursesPage'
          render={() => (!token ? <Redirect to='/' /> : <HodCoursesPage />)}
        />
        <Route
          exact
          path='/hodStaffStuffPage'
          render={() => (!token ? <Redirect to='/' /> : <HodStaffPage />)}
        />
        <Route
          exact
          path='/hodRequestsPage'
          render={() => (!token ? <Redirect to='/' /> : <HodRequests />)}
        />
        <Route
          exact
          path='/hodAccount'
          render={() => (!token ? <Redirect to='/' /> : <HodAccountPage />)}
        />
        <Route
          exact
          path='/ciSideBar'
          render={() => (!token ? <Redirect to='/' /> : <CiSideBar />)}
        />
        <Route
          exact
          path='/ccSideBar'
          render={() => (!token ? <Redirect to='/' /> : <CcSideBar />)}
        />
        <Route
          exact
          path='/acSideBar'
          render={() => (!token ? <Redirect to='/' /> : <AcSideBar />)}
        />
        <Route
          exact
          path='/assignCi'
          render={() =>
            !token ? <Redirect to='/' /> : <AssignCourseInstructor />
          }
        />
        <Route
          exact
          path='/updateCi'
          render={() =>
            !token ? <Redirect to='/' /> : <UpdateCourseInstructor />
          }
        />
        <Route
          exact
          path='/deleteCi'
          render={() =>
            !token ? <Redirect to='/' /> : <DeleteCourseInstructor />
          }
        />
        <Route
          exact
          path='/ciAccount'
          render={() => (!token ? <Redirect to='/' /> : <CiAccountPage />)}
        />
        <Route
          exact
          path='/ciCoursesPage'
          render={() => (!token ? <Redirect to='/' /> : <CiCoursesPage />)}
        />
        <Route
          exact
          path='/ciStaffPage'
          render={() => (!token ? <Redirect to='/' /> : <CiStaffPage />)}
        />

        <Route
          exact
          path='/updateAcToSlot'
          render={() => (!token ? <Redirect to='/' /> : <UpdateAcToSlot />)}
        />
        <Route
          exact
          path='/deleteAcToSlot'
          render={() => (!token ? <Redirect to='/' /> : <DeleteAcToSlot />)}
        />
        <Route
          exact
          path='/CI/assignAcToSlot'
          render={() => (!token ? <Redirect to='/' /> : <AssignAcToSlot />)}
        />
        <Route
          exact
          path='/CI/removeAcFromCourse'
          render={() => (!token ? <Redirect to='/' /> : <RemoveAcFromCourse />)}
        />
        <Route
          exact
          path='/ciRequestPage'
          render={() => (!token ? <Redirect to='/' /> : <CiRequestPage />)}
        />
        <Route
          exact
          path='/ccRequestPage'
          render={() => (!token ? <Redirect to='/' /> : <CcRequestPage />)}
        />
        <Route
          exact
          path='/ccAccountPage'
          render={() => (!token ? <Redirect to='/' /> : <CcAccountPage />)}
        />
        <Route
          exact
          path='/ccCoursePage'
          render={() => (!token ? <Redirect to='/' /> : <CcCoursePage />)}
        />
        <Route
          exact
          path='/addCourseSlot'
          render={() => (!token ? <Redirect to='/' /> : <AddCourseSlot />)}
        />
        <Route
          exact
          path='/updateCourseSlot'
          render={() => (!token ? <Redirect to='/' /> : <UpdateCourseSlot />)}
        />
        <Route
          exact
          path='/deleteCourseSlot'
          render={() => (!token ? <Redirect to='/' /> : <DeleteCourseSlot />)}
        />
        <Route
          exact
          path='/CI/assignAcToCc'
          render={() => (!token ? <Redirect to='/' /> : <AssignAcToCc />)}
        />
        <Route
          exact
          path='/acAccountPage'
          render={() => (!token ? <Redirect to='/' /> : <AcAccountPage />)}
        />
        <Route
          exact
          path='/CI/assignAcToCourse'
          render={() => (!token ? <Redirect to='/' /> : <AssignAcToCourse />)}
        />

        <Route
          exact
          path='/UpdateProfileHr'
          render={() => (!token ? <Redirect to='/' /> : <UpdateProfileHr />)}
        />

        <Route
          exact
          path='/updateSalary'
          render={() => (!token ? <Redirect to='/' /> : <UpdateSalary />)}
        />
        <Route
          exact
          path='/updateEmailHr'
          render={() => (!token ? <Redirect to='/' /> : <UpdateEmailHr />)}
        />

        <Route
          exact
          path='/updateProfileAc'
          render={() => (!token ? <Redirect to='/' /> : <UpdatePageAc />)}
        />
        <Route
          exact
          path='/updateEmailAc'
          render={() => (!token ? <Redirect to='/' /> : <UpdateEmailAc />)}
        />
        <Route
          exact
          path='/resetPasswordAc'
          render={() => (!token ? <Redirect to='/' /> : <ResetPasswordAc />)}
        />

        <Route
          exact
          path='/resetPasswordCc'
          render={() => (!token ? <Redirect to='/' /> : <ResePassCc />)}
        />
        <Route
          exact
          path='/UpdateProfileCc'
          render={() => (!token ? <Redirect to='/' /> : <UpdatePageCc />)}
        />
        <Route
          exact
          path='/updateEmailCc'
          render={() => (!token ? <Redirect to='/' /> : <UpdateEmailCc />)}
        />

        <Route
          exact
          path='/resetPasswordHod'
          render={() => (!token ? <Redirect to='/' /> : <ResePassHod />)}
        />
        <Route
          exact
          path='/UpdateProfileHod'
          render={() => (!token ? <Redirect to='/' /> : <UpdatePageHod />)}
        />
        <Route
          exact
          path='/updateEmailHod'
          render={() => (!token ? <Redirect to='/' /> : <UpdateEmailHod />)}
        />

        <Route
          exact
          path='/resetPasswordCi'
          render={() => (!token ? <Redirect to='/' /> : <ResePassCi />)}
        />
        <Route
          exact
          path='/UpdateProfileCi'
          render={() => (!token ? <Redirect to='/' /> : <UpdatePageCi />)}
        />
        <Route
          exact
          path='/updateEmailCi'
          render={() => (!token ? <Redirect to='/' /> : <UpdateEmailCi />)}
        />

        <Route exact path='/' render={() => <Homepage />} />
        <Route
          exact
          path='/CI/slotAssignment'
          render={() => (!token ? <Redirect to='/' /> : <ViewSlotsAssignsCI />)}
        />

        <Route
          exact
          path='/ta/viewcourses'
          render={() => (!token ? <Redirect to='/' /> : <Amviewcourses />)}
        />
        <Route
          exact
          path='/ta/viewSLrequeststatus'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewSLrequeststatusCancelAM />
          }
        />
        <Route
          exact
          path='/ta/viewSchedule'
          render={() => (!token ? <Redirect to='/' /> : <AmViewSchedule />)}
        />
        <Route
          exact
          path='/ta/viewNotification'
          render={() =>
            !token ? <Redirect to='/' /> : <AcViewNotifications />
          }
        />
        <Route
          exact
          path='/ta/sendslotlinkingrequests'
          render={() => (!token ? <Redirect to='/' /> : <AcSlotLinking />)}
        />
        <Route
          exact
          path='/hod/viewstaffperCourseH'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewStaffpercourseHOD />
          }
        />
        <Route
          exact
          path='/hod/ViewStaffindepH'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewStaffinmydephod />
          }
        />
        <Route
          exact
          path='/viewStaffDayoff'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewStaffIDayOffhod />
          }
        />
        <Route
          exact
          path='/cc/viewSlotlinkingrequests'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewAcceptRejectSLRCC />
          }
        />
        <Route
          exact
          path='/CI/viewStaffInCourse'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewStaffPerCourseCI />
          }
        />
        <Route
          exact
          path='/CI/viewStaffInCourses'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewStaffincoursesCI />
          }
        />
        <Route
          exact
          path='/CI/viewStaffInMyDepartment'
          render={() => (!token ? <Redirect to='/' /> : <ViewStaffIndepCI />)}
        />
        <Route
          exact
          path='/viewCourseCoverage'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewCourseCoveragehod />
          }
        />
        <Route
          exact
          path='/ci/viewcoursecoverage'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewCourseCoverageCI />
          }
        />
        <Route
          exact
          path='/viewTeachingAssignments'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewTeachingAssignmentsHOD />
          }
        />
        {/* <Route 
            exact
            path='/login'
            render={() => (token ? <MeetingCard /> : <Redirect to='/signin' />)}
          /> */}
        <Route
          exact
          path='/attendance'
          render={() => (!token ? <Redirect to='/' /> : <AttendanceRecords />)}
        />
        <Route
          exact
          path='/missingDays'
          render={() => (!token ? <Redirect to='/' /> : <MissingDays />)}
        />
        <Route
          exact
          path='/missingHours'
          render={() => (!token ? <Redirect to='/' /> : <MissingHours />)}
        />
        <Route
          exact
          path='/signInOut'
          render={() => (!token ? <Redirect to='/' /> : <AcSignInOut />)}
        />
        <Route
          exact
          path='/addMissingSingInOut'
          render={() =>
            !token ? <Redirect to='/' /> : <AddMissingSignInSignOut />
          }
        />
        <Route
          exact
          path='/hr/addMissingSignIn'
          render={() => (!token ? <Redirect to='/' /> : <AddMissingSignIn />)}
        />
        <Route
          exact
          path='/hr/viewAttendance'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewStaffAttendanceRecords />
          }
        />
        <Route
          exact
          path='/hr/viewStaffWithMissingDays'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewStaffMemberWithMissingDays />
          }
        />
        <Route
          exact
          path='/hr/viewStaffWithMissingHours'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewStaffWithMissingHours />
          }
        />
        <Route
          exact
          path='/*/sendRequests'
          render={() => (!token ? <Redirect to='/' /> : <SendRequests />)}
        />
        <Route
          exact
          path='/uploadFile'
          render={() => (!token ? <Redirect to='/' /> : <UploadAFile />)}
        />
        <Route
          exact
          path='/ta/ViewStatus'
          render={() => (!token ? <Redirect to='/' /> : <ViewRequestsAC />)}
        />
        <Route
          exact
          path='/ViewReplacementRequests'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewReplacementRequests />
          }
        />
        <Route
          exact
          path='/HOD/ViewRequests'
          render={() =>
            !token ? <Redirect to='/' /> : <ViewAcceptRejectHod />
          }
        />
      </Switch>
    </Router>
  )
}

export default App
