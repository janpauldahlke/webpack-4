## webpack 4 is out, lets contemplate on this one

#### TO_DONE
- ```npm install webpack --save-dev```
- ```npm install webpack-cli --save-dev```
- ```npm init``` just do it
- add build script as "webpack" to package.json
- create `/src` and `index.js`
- ```npm run build```
- ##### !!webpack4 doesnt need a config file!!
- improve package json build and dev scripts like this

```
"scripts" : {
  "build" : "webpack --mode --production",
  "dev" : "webpack --mode --development" 
}
```

- now lets npm babel stuff
```npm install babel-core babel-loader babel-preset-env --save-dev```
- create `.babelrc` make it shifty
```
{
    "presets": [
        "env"
    ]
}
```

#### from here on are2 options for configuring babel-loader:
### option 1
- using a configuration file for webpack
- using --module-bindin your npm scripts
- ##### so we do need an `webpack.config.js` !! to configure our loader
- so create the damn file
```
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
```
- try babel by writing any ES6 foo sugar in `src/index.js`
- test it using ```npm run build```
- watch the pretty javascript in dist

### option 2
- bind the loader to the script in package like this
```
"scripts": {
    "dev": "webpack --mode development --module-bind js=babel-loader",
    "build": "webpack --mode production --module-bind js=babel-loader"
  }
```

- be the code with you friend
- "never whistle while your pissing" *hagbart celine

#### adding the REACT thing
- install it ```npm install react react-dom --save-dev```
- add babel-preset-react ```npm install babel-preset-react --save-dev```
- configure it in the `.babelrc` file
```
{
  "presets" : ["env", "react"]
}
```