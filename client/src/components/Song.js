import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import LaunchIcon from '@material-ui/icons/Launch';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import styles from './Song.module.css';

const Song = (song) => {
  const handleClick = () => {
    song.onSelect(song);
  }
  return (
    <Card className={styles.card}>
      <Button onClick={handleClick} disabled={song.selected}>
        {song.selected ? <EqualizerIcon /> : <PlayArrowIcon />}
      </Button>
      <p className={styles.songInfo}>{song.title} by {song.artist}</p>
      <Button className={styles.launchSongButton}>
        <Link to={`/songs/${song.id}`}><LaunchIcon /></Link>
      </Button>
    </Card>
  )
}

Song.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  artist: PropTypes.string,
  url: PropTypes.string,
  onSelect: PropTypes.func,
  selected: PropTypes.bool
};

export default Song;