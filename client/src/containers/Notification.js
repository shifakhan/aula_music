import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from './Notification.module.css';

class Notification extends Component {
  render() {
    const { notification } = this.props;
    return(
      <div className={styles[notification.type]}>
        {notification.message}
      </div>
    )
  }
}


const mapStateToProps = state => ({
  notification: state.notification
})

export default connect(mapStateToProps)(Notification)