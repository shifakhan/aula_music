import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import styles from './MusicPlayer.module.css';

const MusicPlayer = (song) => {
  return (
    <Card className={styles.card}>
      <div>
        <h2>Now Playing</h2>
        <h5>{song.title} by {song.artist}</h5>
      </div>
      <audio src={song.url} controls autoPlay className={styles.audio}/>
    </Card>
  )
}

MusicPlayer.defaultProps = {
  title: '-',
  artist: '-',
  url: null
}

MusicPlayer.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  url: PropTypes.string,
};

export default MusicPlayer;