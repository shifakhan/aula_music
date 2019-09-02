import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSongs} from '../actions/songs';

import Button from '@material-ui/core/Button';
import Song from '../components/Song'
import MusicPlayer from '../components/MusicPlayer';

import styles from './Songs.module.css';

class Songs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSong: {}
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchSongs({ page: 1 }))
  }

  playSong = (song) => {
    this.setState({
      currentSong: song
    });
  }

  skipPageBy = (numberOfPages) => {
    this.props.dispatch(
      fetchSongs({ page: (parseInt(this.props.data.page, 10) + numberOfPages) })
    );
  }

  goToPrevPage = () => this.skipPageBy(-1)
  goToNextPage = () => this.skipPageBy(1)

  render() {
    const { data } = this.props;
    const currentSong = this.state.currentSong;
    return(
      <div className={styles.songs}>
        <h1>Songs</h1>
          <MusicPlayer
            title={currentSong.title}
            artist={currentSong.artist}
            url={currentSong.url}
          />
        {data.songs.map((song) => {
          return(
            <div key={song._id}>
              <Song
                id={song._id}
                title={song.title}
                artist={song.artist}
                url={song.url}
                onSelect={this.playSong}
                selected={currentSong ? currentSong.id === song._id : false}
              />
            </div>
          )
        })}
        <Button onClick={this.goToPrevPage} disabled={data.page <= 1 }>Prev Page</Button>
        <Button onClick={this.goToNextPage} disabled={data.page >= data.totalPages}>Next Page</Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.songs
})

export default connect(mapStateToProps)(Songs)