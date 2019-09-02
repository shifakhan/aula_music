export const NOTIFICATION = {
  ALERT: 'NOTIFICATION/ALERT',
  SUCCESS: 'NOTIFICATION/SUCCESS',
};

export const notifyAlert = (message) => {
  return {
    type: NOTIFICATION.ALERT,
    message: message
  }
}

export const notifySuccess = (message) => {
  return {
    type: NOTIFICATION.SUCCESS,
    message: message
  };
};
