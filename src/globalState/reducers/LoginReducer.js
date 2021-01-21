export const tokenReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return action.payload
    case 'UNSET_TOKEN':
      return ''
    default:
      return state
  }
}

export const idReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_ID':
      return action.payload
    case 'UNSET_ID':
      return ''
    default:
      return state
  }
}

export const nameReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_NAME':
      return action.payload
    case 'UNSET_NAME':
      return ''
    default:
      return state
  }
}
export const roleReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_Role':
      return action.payload
    case 'UNSET_Role':
      return ''
    default:
      return state
  }
}
