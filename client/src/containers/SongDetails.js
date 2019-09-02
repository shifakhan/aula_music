import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSong} from '../actions/song';
import MusicPlayer from '../components/MusicPlayer';
import styles from './SongDetails.module.css';

class SongDetails extends Component {
  componentDidMount() {
    const pathname = this.props.location.pathname;
    this.props.dispatch(fetchSong(pathname.substring(pathname.lastIndexOf('/') + 1)))
  }

  render() {
    const { data } = this.props;
    return(
      <div className={styles.songDetails}>
        <h1>Song Details </h1>
        <MusicPlayer
          title={data.song.title}
          artist={data.song.artist}
          url={data.song.url}
        />
        <h3>Song Title - {data.song.title}</h3>
        <h3>Song Artist - {data.song.artist}</h3>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.song
})

export default connect(mapStateToProps)(SongDetails)
