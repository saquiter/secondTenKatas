//A Chain adding function 5 kyu
function add(n){
    let adds = function(num){
    return add(n + num);
    }
    adds.valueOf = function(){
    return n;
    }
    return adds;
}

//CamelCase Method 6 kyu

String.prototype.camelCase=function(){
    return this.split(" ").map(item=>item.charAt(0).toUpperCase() + item.slice(1 , item.length)).join("");
}

//Find min and max 7 kyu

function getMinMax(arr){
    let min,max,res;
    min = Math.min.apply(null , arr);
    max = Math.max.apply(null , arr);
    res=[min , max];
    return res;
};

//Name on billboard 8 kyu

function billboard(name, price = 30){
    let arrLen = name.split("").length;
    let res = 0;
    for(let i = 0; i < arrLen;i++){
    res+=price;
    }
    return res;
} 

//Get Planet Name By ID 8 kyu

function getPlanetName(id){
    var name = "";
    switch(id){
      case 1:
        name = 'Mercury';
        break;
      case 2:
        name = 'Venus';
        break;
      case 3:
        name = 'Earth';
        break;
      case 4:
        name = 'Mars';
        break;
      case 5:
        name = 'Jupiter';
        break;
      case 6:
        name = 'Saturn';
        break;
      case 7:
        name = 'Uranus';
        break;
      case 8:
        name = 'Neptune';
        break;
    }
    return name;
  }

  //Largest pair sum in array 7 kyu

  function largestPairSum(numbers)
{
  let summ = 0;
  let max = Math.max.apply(null , numbers);
  let maxx = numbers.filter(item=>item < max);
  summ = max + Math.max.apply(null , maxx);
  return summ
}

//Sum of Digits / Digital Root 6 kyu

function digital_root(n) {
  let res=0;String(n).split("").forEach(item=>res+=Number(item));return res >= 10 ? digital_root(res) : res;
}

//Does my number look big in this? 6 kyu

function narcissistic(value) {
  let summ = 0;
  let len = String(value).length;
  String(value).split("").map(item=>summ+=Number(item**len));
  if(summ === value){
    return true;
  }
  else{
    return false;
  }
}

//Series of integers from m to n 7 kyu

function generateIntegers(m, n) {
  let arr = [];
  for(let i = m; i <= n;i++){
  arr.push(i);
  }
  return arr;
}

//Greet Me 7 kyu

var greet = function(name) {
  return `Hello ${name.charAt(0).toUpperCase() + String(name).slice(1).toLowerCase()}!`;
  };


