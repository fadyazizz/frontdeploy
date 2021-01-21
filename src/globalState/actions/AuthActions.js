import axios from 'axios'
import jwt from 'jsonwebtoken'
// const history = useHistory()
import { backendLink } from '../../keys'

export const loginAPI = (email, password, history) => {
  return async (dispatch, getState) => {
    return await axios({
      // url: `${backendLink}/lirtenhub/auth/signIn`,

      url: `${backendLink}/account/logIn`,
      method: 'post',
      data: {
        email,
        password,
      },
    }).then((res) => {
      console.log(res.data.statuscode)
      if (res.data.statuscode === '0000') {
        const token = res.data.token // res.headers.authorization
        const id = res.data.payLoad.id
        const name = res.data.payLoad.name

        const roleOfAcademicMember = res.data.payLoad.roleOfAcademicMember
        const role = res.data.payLoad.role

        dispatch(setToken(token))
        dispatch(setID(id))
        dispatch(setName(name))
        dispatch(setRoleOfAcademicMember(roleOfAcademicMember))
        dispatch(setRoleOfAcademicMember(role))

        switch (roleOfAcademicMember) {
          case 'HeadOfDepartment':
            history.push('/manageAccountHod')
            // history.push('/hodSideBar')
            break
          case 'CourseCoordinator':
            history.push('/manageAccountCC')
            // history.push('/ccSideBar')
            break
          case 'CourseInstructor':
            history.push('/manageAccountCI')
            //history.push('/ciSideBar')
            break
          case 'TA':
            history.push('/acAccountPage')
            break
          default:
            history.push('/manageAccountHR')
          // history.push('/hrSideBar')
        }
      } else {
        dispatch(unsetToken())
        dispatch(unsetID())
        dispatch(unsetName())
      }
      return res.data
    })
  }
}

export const checkTokenExpired = (history) => {
  return function (dispatch, getState) {
    const token = getState().token
    if (!token) {
      history.push('/')
      return
    }
    if (jwt.decode(token).exp < Date.now() / 1000) {
      dispatch(logout(history))
      return true
    } else {
      return false
    }
  }
}

const setToken = (payload) => {
  return {
    type: 'SET_TOKEN',
    payload,
  }
}

const unsetToken = () => {
  return {
    type: 'UNSET_TOKEN',
    payload: '',
  }
}
const setName = (payload) => {
  return {
    type: 'SET_NAME',
    payload,
  }
}

const setRoleOfAcademicMember = (payload) => {
  return {
    type: 'SET_RoleOfAc',
    payload,
  }
}
const setRole = (payload) => {
  return {
    type: 'SET_Role',
    payload,
  }
}

const unsetName = () => {
  return {
    type: 'UNSET_NAME',
    payload: '',
  }
}

const setID = (payload) => {
  return {
    type: 'SET_ID',
    payload,
  }
}

const unsetID = (payload) => {
  return {
    type: 'UNSET_ID',
    payload,
  }
}

export const logout = (history) => {
  return (dispatch, getState) => {
    dispatch(unsetToken())
    dispatch(unsetID())
    dispatch(unsetName())
    history.push('/')
  }
}
