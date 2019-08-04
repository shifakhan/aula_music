const Song = require('../models/Song');
const fs = require('fs');
const musicFolder = './public/music/';

module.exports = {
  // List all songs
  findAll: function(req, res) {
    Song.find(req.query, function(err, songs) {
      if (err) { return res.status(500).send(err); }
      return res.json(songs)
    })
  },

  // Populate metadata for files in public/music
  seedData: function (req, res) {
    let files = fs.readdirSync(musicFolder);
    let songs = [];
    files.forEach((file, index) => {
      let fileStat = fs.statSync(musicFolder + '/' + file).isDirectory();
      if(!fileStat) {
        songs.push(new Song ({title: file, artist: `Artist${index}`}));
      }
    });
    Song.deleteMany({ title: /.*/ }, function (err) {
      if (err) { return res.status(500).send(err); }
    })
    Song.insertMany(songs, function (err, songs) {
      if (err) { return res.status(500).send(err); }
      return res.json(songs)
    })
  }
};