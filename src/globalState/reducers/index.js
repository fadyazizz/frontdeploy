import { combineReducers } from 'redux'
import {
  tokenReducer,
  idReducer,
  nameReducer,
  roleReducer,
} from './LoginReducer'

export const root = combineReducers({
  token: tokenReducer,
  id: idReducer,
  name: nameReducer,
  role: roleReducer,
})
