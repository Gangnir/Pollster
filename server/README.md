# Pollster server

To run:

* npm install
* npm run dev

or to run in docker container (includes db):
* docker-compose build
* docker-compose up

## Api end points
* POST /poll  

* GET /poll/:pollKey

* GET /poll/:pollId
* POST /poll/:pollId
* DELETE /poll/:pollId

* POST /poll/:pollId/reply
* GET /poll/:pollId/reply