import {NOTIFICATION} from '../actions/notification'

const initialState = {
  type: '',
  message: ''
}

const notificationReducer = (state = initialState, action) => {
  const {message, type} = action
  switch (type) {
    case NOTIFICATION.ALERT:
      return {
        type: 'alert',
        message: message
      }
    case NOTIFICATION.SUCCESS:
      return {
        type: 'success',
        message: message
      }
    default:
      return state
  }
};
export default notificationReducer;