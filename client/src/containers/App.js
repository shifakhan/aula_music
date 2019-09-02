import React from 'react';
import {Route, Switch, Redirect, Link} from 'react-router-dom';
import Songs from './Songs';
import SongDetails from './SongDetails';
import Notification from './Notification';
import styles from './App.module.css';
import Container from '@material-ui/core/Container';

const App = () => {
  return (
    <Container maxWidth='md' className={styles.app}>
      <Notification/>
      <Switch>
        <Route path='/songs/:id' component={SongDetails} />
        <Route path='/songs' component={Songs} />
        <Redirect exact path='/' to='/songs' />
        <Route render={() => (<div> Page not found!! Go <Link to="/"> Home </Link></div>)} />
      </Switch>
    </Container>
  );
};

export default App;
