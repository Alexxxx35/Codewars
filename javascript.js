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
//-----------------------------------------------------------------------------------------------

function array_slicing(arr){
  return arr.split(",").slice(1,-1).join(" ") || null;
}
function array_slicing(arr){
  arr = arr.split(',');
  
  if (arr.length < 3) {
    return null;
  }

  return arr.slice(1,-1).join(' '); //substring don't affect array data type
}
//-----------------------------------------------------------------------------------------------

function logicalCalc(array, op){
  if (array.length <= 0) {
    return null;
  }  
  //if (array.length === 1 && array[0] === true){return true}
   // if (array.length === 1 && array[0] === false){return false}
  res = array[0]
  for (let i=1;i < array.length;i++){
    if (typeof array[i] === "boolean"){
      if(op === "AND"){ res = res && array[i]}
      if(op === "OR"){ res = res || array[i]}
      if(op === "XOR"){res = !!(res ^ array[i])}
    }
          }
    return res;
  }

  function logicalCalc(array, op){
  if(op === 'AND')return array.every(value => value);
  else if(op === 'OR')return array.some(value => value);
  else return !!array.reduce((value, initialvalue) => value ^ initialvalue);
}
  //-----------------------------------------------------------------------------------------------
function swapValues (args) {
  args.push(args.shift())
}
function swapArgs() {
  return arguments[0].reverse();
}
function swapArgs(a) {
  return a.reverse();
}

function swapArgs(func) {
    return function() {
        func(...Array.from(arguments).reverse());
    }
}
  //-----------------------------------------------------------------------------------------------

function points(games) {
  var result=0;
for (let i=0;i<games.length;i++){
    var x=games[i].split(":")[0]
    var y=games[i].split(":")[1]
  if (x>y){result+=3}
  if (x==y){result+=1}
  }
return result

function points(games) {
  let total = 0;
  games.map(game => {
    console.log(typeof game)
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

function points(games) {
  let total = 0;
  games.map(function(game){
    if (game[0] === game[2]) {
      total += 1;
    } else if (game[0] > game[2]) {
      total += 3;
    }
  });
  return total;
}

function points(games) {
  return games.reduce(function(buffer, element){
    let arraySplit = element.split(':');
    console.log(arraySplit)
    return (arraySplit[0] > arraySplit[1]) ? buffer += 3 : (arraySplit[0] < arraySplit[1]) ? buffer : buffer += 1;
  }, 0);
}

const points=games=>games.reduce((output,current)=>{
  console.log(output,current);
    return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;},0)

  //-----------------------------------------------------------------------------------------------
function calculator(a,b,sign){
  if (!Number.isInteger(a) || !Number.isInteger(b)){return "unknown value"}
  if(sign!="+" && sign!="-" && sign!="*" && sign!="/"){return "unknown value"}
  if (sign === "+"){return a + b}
  if (sign === "-"){return a - b}
  if (sign === "*"){return a * b}
  if (sign === "/"){return a / b}
}

function calculator(a,b,sign){
  if ((typeof a === "number") && (typeof b === "number")) {
    switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    }
  }
  return "unknown value";
}

function calculator(a,b,sign){
  switch(sign)
  {
  case '+': return a + b;
  case '-': return a - b;
  case '*': return a * b;
  case '/': return a / b;
  default: return "unknown value";
  }

}

//NE JAMAIS UTILISER
function calculator(a,b,sign) {
  try
    { return eval(a+sign+b); }
  catch(e)
    { return "unknown value"; }
}

//-----------------------------------------------------------------------------------------------
function milliseconds(x) {
  if (isNaN(x)) {
    return 'Not a Number!';
  }
  return x * 1000;
}
//-----------------------------------------------------------------------------------------------
function periodIsLate(last, today, cycleLength){
  var Difference_In_Time = today.getTime() - last.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
  if (Difference_In_Days>cycleLength){
    return true
  }
  return false
  }
//-----------------------------------------------------------------------------------------------
  
String.prototype.isUpperCase = function() {
  return String(this) === this.toUpperCase();
}
String.prototype.isUpperCase = function () {
  return !/[a-z]/.test(this);
};

//-----------------------------------------------------------------------------------------------
function nameShuffler(str){
  var r=str.split(" ")
  r=r[1]+" "+r[0]
return r
}
function nameSuffle(str){
  return str.split(' ').reverse().join(' ')
}

//-----------------------------------------------------------------------------------------------

function arrayMadness(a, b) {
    var r1= a.reduce(function(buffer,element){
      return buffer+=Math.pow(element,2);
    },0);
    var r2= b.reduce(function(buffer,element){
      return buffer+=Math.pow(element,3);
    },0);
    return r1>r2 ? true : false;
}