## webpack 4 is out, lets contemplate on this one

#### TO_DONE
- ```npm install webpack --save-dev```
- ```npm install webpack-cli --save-dev```
- ```npm init``` just do it
- add build script as "webpack" to package.json
- create `/src` and `index.js`
- ```npm run build```
- !!webpack4 doesnt need a config file!!
- improve package json build and dev scripts like this

```"scripts" : {
  "build" : "webpack --mode --production",
  "dev" : "webpack --mode --development" 
}```

