Array.prototype.filter = function(fn){
  var res = [];
  for (var i = 0; i<this.length; i++){
    if (fn(this[i])){
      res.push(this[i]);
    }
  }
  return res;
}
//-----------------------------------------------------------------------------------------------

blackBox();
console.log(blackBox.toString())
console.log(JSopenSesame.toString())
theBoxHasBeenOpened = true;
theBoxHasBeenOpenedTheProperWay = true;
//-----------------------------------------------------------------------------------------------

function joinStrings(string1, string2){
   
    return `${string1} ${string2}`
}
const joinStrings = (string1, string2) => `${string1} ${string2}`;
//-----------------------------------------------------------------------------------------------

function howManySmaller(arr,n){
 var count = 0;
for(var i = 0; i < arr.length; ++i){
  arr[i]=arr[i].toFixed(2);
    if(arr[i] < n)
        count++;
}
  return count;
}
//-----------------------------------------------------------------------------------------------

function numberToPower(number, power){
  var total = 1;
  for (var i = 1; i <= power; i++) { 
    total = total * number;
  }
  return total;
}

function numberToPower(number, power){
  if (power === 0) return 1;
  return number * numberToPower(number, power - 1)
}

function HQ9(code) {
    if (code === 'H') return 'Hello World!';
    if (code === 'Q') return 'Q';
    if (code === '9')
        for (let i = 99; i >= 0; i--) {
            if (i === 0) console.log("no more" + " bottles of beer on the wall.\n" + "no more" + " bottles of beer on the wall, " + "no more" + " bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.")
            if (i > 0) console.log(i.toString() + " bottles of beer on the wall, " + i.toString() + " bottles of beer.\nTake one down and pass it around, " + (i - 1).toString() + " bottles of beer on the wall.\n")
        }
    else { return undefined; }

}
//-----------------------------------------------------------------------------------------------

function remove(s){
  if (s.slice(-1)!="!"){return s;}
  if (s.slice(-1)==="!"){return s.slice(0,-1)}
}
function remove(s) {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}
function remove(s){
  return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
}
function remove(s){
  return s.charAt(s.length-1)=="!"?s.substr(0,s.length-1):s;
}
function remove(s){
  return s.replace( /!$/, '') 
}
//-----------------------------------------------------------------------------------------------

function sc(floor) {
    if (floor <= 1) { return "" }

    for (let i = 0; i < floor; i++) {
        if (floor > 6) {
            var r = "Aa~ ".repeat(i) + "Pa!"
        }
        else {
            var r = "Aa~ ".repeat(i) + "Pa! " + "Aa!"
        }
    }
    return r
}
function sc(floor){
  if(floor <= 1) return "";
  
  return 'Aa~ '.repeat(floor-1) + 'Pa!' + (floor<=6 ? ' Aa!': '');
}
//-----------------------------------------------------------------------------------------------

function check_data_no_type(a, b){
  return a == b 
}
const check_data_no_type = (a, b) => a == b
//-----------------------------------------------------------------------------------------------

function find_elementIndex_in_array(a, e) {
  for (let i = 0; i < a.length; i++){
    if (a[i] === e) return i;
  }
  return "Not found";
}
var find_elementIndex_in_array = (a, e) => a.includes(e) ? a.indexOf(e) : "Not found";
//-----------------------------------------------------------------------------------------------

preFizz = n => new Array( n ).fill().map( (val, index) => index + 1 );
//-----------------------------------------------------------------------------------------------

class Ship {
  constructor(draft,crew){
   this.draft = draft;
   this.crew = crew;
  }
   
   isWorthIt(){
     return this.draft - 1.5 * this.crew > 20;
   }
}
function Ship(draft,crew) {
 this.draft = draft;
 this.crew = crew;
}

Ship.prototype.isWorthIt = function(){
return this.draft-(this.crew*1.5) > 20;
}
//-----------------------------------------------------------------------------------------------

function validateCodeRegex (code) {
  return /^[1-3]/.test(code);
}
function validateCodeRegex (code) {
  var codeSplit = code.toString().split("");
  if(codeSplit[0] == "1" || codeSplit[0] == "2" || codeSplit[0] == "3"){
    return true;
  }else{
    return false;
  }
}
//-----------------------------------------------------------------------------------------------

function ifChuckSaysSo(){
return JSON.parse("False".toLowerCase());
}
function ifChuckSaysSo(){
  return "a" === "b";
}
ifChuckSaysSo=_=>!!_   // nombre de ! paire
//-----------------------------------------------------------------------------------------------

function whoIsPaying(name){
  return name.length <= 2 ?  [name] : [name,name.substring(0,2)]
}
function whoIsPaying(name){
  let arr = [name];
  if ( name.length > 2 ) arr.push(name.slice(0, 2));
  return arr;
}