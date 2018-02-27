//a proof of compilation
console.log('42')

//the ES6
const a = [1,2,3];
const b = [4,5,6];

let c = [...a, ...b] //spread

const iamAFatArrowWhatAreYou = () => { console.log(...c);}
window.iamAFatArrowWhatAreYou = iamAFatArrowWhatAreYou;
