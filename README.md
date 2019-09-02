# Aula Music

# To run

## Setup
`cd aula_music`

`npm install`

`cd client && npm install`

`cd ../server && npm install`

`cd ../ && npm start`

## Front End Requests
- localhost:3000/songs/
- localhost:3000/songs/5d64b78205372574a0af7de1

## Server Requests
- localhost:3001/songs?page=4
- localhost:3001/music/song12.mp3

## Immediate points for improvement
Server
- Adding specs to the models and controllers. Set up separate test and dev environments.
- Instead of commiting `.env` to source control directly, a sample file should be used.
- Logic for pagination is generic and can be reused when other models are added. Explored mongoose-paginate package, but it didn't seem to be maintained.