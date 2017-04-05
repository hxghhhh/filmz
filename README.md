# Filmz
React/Redux app to help you find out what movie you should watch this weekend

## Installation
to prepare app for development run the command below in your terminal while in project directory
```
$ yarn install
or
$ npm install
```

## Run
to start the app run enter this command below
```
$ yarn start 
or
$ npm start
```
Then goto `localhost:8080` to see it in browser


## Why themoviedb > omdbapi
themoviedb had a better api in my opinion, especially with the discover endpoint. Creating queries were more straight forward and wanted to do queries based upon actors. With omdbapi I would of had to do alot of processing on my end to get the data working. The frontend should be a lot of the leg work when it comes to processing data/queries.

## Completed
- [X] User can search for movies based on year, genre, ratings/popularity
- [X] User can save movies that are in the discovery tab (without persistent)
- [X] Created bundles using webpack
- [X] Build with React/Redux
- [ ] Autocomplete search bar that user can type
- [ ] Save user sessions w/ favorites to some hash
