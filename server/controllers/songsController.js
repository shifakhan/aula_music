const Song = require('../models/Song');
const fs = require('fs');
const musicFolder = './public/music/';
const musicPath = 'music';

module.exports = {
  // List all songs
  findAll: function(req, res) {
    const pageSize = 5;
    const page = req.query.page || 1;

    Song.find({}).skip((pageSize * page) - pageSize)
      .limit(pageSize)
      .exec(function(err, songs) {
        Song.countDocuments(function (err, count) {
          if (err) { return res.status(500).send(err); }
          return res.json({
            data: songs,
            page: page,
            totalEntries: count,
            totalPages: Math.ceil(count/pageSize),
          });
        });
      });
  },

  // Populate metadata for files in public/music
  seedData: function (req, res) {
    let files = fs.readdirSync(musicFolder);
    let songs = [];
    files.forEach((file, index) => {
      let fileStat = fs.statSync(musicFolder + '/' + file).isDirectory();
      if(!fileStat) {
        songs.push(
          new Song ({
            title: file,
            artist: `Artist${index}`,
            path: `${musicPath}/${file}`
          })
        );
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