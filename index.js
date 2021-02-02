
function myFunction() {

let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

var randomWho = who[Math.floor(Math.random()*4)];
var randomAction = action[Math.floor(Math.random()*4)];
var randomWhat = what[Math.floor(Math.random()*3)];
var randomWhen = when [Math.floor(Math.random()*5)];

  document.getElementById("excuse").innerHTML = randomWho+" "+randomAction+" "+ randomWhat+" "+randomWhen;
}
