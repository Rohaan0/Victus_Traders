import {createStore} from 'redux'

let initialState = {
  isAdmin: false,
  username: "",
  email: "",
  userId: null,
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "LOGIN":
      let newState = {
        isAdmin: action.payload.admin,
        username: action.payload.username,
        email: action.payload.email,
        userId: action.payload.id
      }
      return newState
    case 'LOGOUT':
      return initialState
    default:
      return state
  }
}

const store = createStore(reducer)

export default store