# Aula Music

# To run

## Setup
`cd aula_music`
`npm install`
`cd client && npm install`
`cd ../server && npm install`
`cd ../ && npm start`

## Requests
- localhost:3001/songs?page=4
- localhost:3001/music/song12.mp3

## Immediate points for improvement
- Adding specs to the models and controllers. Set up separate test and dev environments.
- Instead of commiting `.env` to source control directly, a sample file should be used.
- Logic for pagination is generic and can be reused when other models are added. Explored mongoose-paginate package, but it didn't seem to be maintained.
