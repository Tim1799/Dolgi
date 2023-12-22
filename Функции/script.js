//Task 1
var squareNum =  function(num) {
    return num*num;
}   

function square() {
    var number = document.getElementById("numb").value;

    var square = squareNum(number);

    document.getElementById("res").value = square;
}

    
//Task 2
var sumNum = (num1, num2) => {
    return parseInt(num1) + parseInt(num2);
}

function sum() {
    var number1 = document.getElementById("numb1").value;
    var number2 = document.getElementById("numb2").value;

    var result = sumNum(number1, number2);

    document.getElementById("res1").value = result;
}


//Task 3
var divide = () => {
    var number1 = document.getElementById("num1").value;
    var number2 = document.getElementById("num2").value;
    var number3 = document.getElementById("num3").value;

    var minus = parseInt(number1) - parseInt(number2);
    var result = minus / parseInt(number3);

    document.getElementById("res2").value = minus;
    document.getElementById("res22").value = result;
}


//Task 4
function dayOfWeek() {
    var numDay = document.getElementById("numDay").value;

    if (numDay == 1) {
        document.getElementById("resDay").value = "Понедельник";
    }
    else if (numDay == 2) {
        document.getElementById("resDay").value = "Вторник";
    }
    else if (numDay == 3) {
        document.getElementById("resDay").value = "Среда";
    }
    else if (numDay == 4) {
        document.getElementById("resDay").value = "Четверг";
    }
    else if (numDay == 5) {
        document.getElementById("resDay").value = "Пятница";
    }
    else if (numDay == 6) {
        document.getElementById("resDay").value = "Суббота";
    }
    else if (numDay == 7) {
        document.getElementById("resDay").value = "Воскресенье";
    }
    else {
        document.getElementById("resDay").value = "Введите число от 1 до 7";
    }
}


//Task 5
var isNumberInRange = function(num) {
    return num > 0 && num < 10;
}
  
function checkNumber() {
    var number = Number(document.getElementById("number").value);
  
    if (isNumberInRange(number)) {
        document.getElementById("output").value = true;
    } 
    else {
        document.getElementById("output").value = false;
    }
}


//Task 6
var filterNumbers = function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      if (isNumberInRange(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
}

function filteredNumbers() {
    var numbers = [3, 7, 11, -2, 8, 5, 0];
    var filteredNumbers = filterNumbers(numbers);
    document.getElementById("result").value = "[" + filteredNumbers + "]";
}


//Task 7
function getDigitsSum(number) {
    var sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum;
}

  function calculateSum() {
    var number = document.getElementById('number7').value;
    var sum = getDigitsSum(parseInt(number));
    document.getElementById('result7').value = sum;
}


//Task 8
function yearSum() {
    var number = document.getElementById('number8').value;

    var sum = getDigitsSum(parseInt(number));

    if (sum == 13) {
        document.getElementById('result8').value = sum;
    }
    else {
        document.getElementById('result8').value = "Попробуйте другое число";
    }
}


//Task 9
function isEven(number) {
   return number % 2 == 0;
}

function isEvenNum() {
    var number = document.getElementById("number9").value;

    if(isEven(parseInt(number))){
        document.getElementById('result9').value = true;
    }
    else{
        document.getElementById('result9').value = false;
    }
}


//Task 10
function arrayEven(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (isEven(array[i])) {
        result.push(array[i]);
      }
    }
    return result;
}

function arrayEvenNum() {
    var numbers = [3, 8, 15, 10, 6, 5, 2];
    var arrayEvenNum = arrayEven(numbers);
    document.getElementById("result10").value = "[" + arrayEvenNum + "]";
}


//Task 11
var getDivisorsObject = {
    getDivisors: function(number) {
        var divisors = [];
        for (let i = 1; i <= number; i++) {
          if (number % i === 0) {
            divisors.push(i);
          }
        }
        return divisors;
    }
}

function getDivisorsNum() {
    var number = document.getElementById("number11").value;
    var divisors = getDivisorsObject.getDivisors(number);
    document.getElementById("result11").value =  "[" + divisors + "]";
}


//Task 12
function ucfirst(str) {
  return str.replace(/\b\w/g, function(char) {
    return char.toUpperCase();
  });
}

function ucfirstStr() {
    var string = "I love tangarine!";
    var result = ucfirst(string);
    document.getElementById("result12").value = result;
}


//Task 13
function transformString() {
    var string = "var_text_hello";
    var words = string.split("_");
    var result = words[0] + words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
    document.getElementById("result13").value = result;
}


//Task 14
function inArray(element, array) {
    return array.includes(element);
  }

function inArrayArr() {
    var array = ["кот", "собака", "ежик", "медведь", "кролик", "тигр", "цыпленок", "слон", "бабочка", "хорек", "лиса", "пингвин", "волк", "свинья", "белка", "коала", "хомяк", "альпака", "лягушка", "кенгуру", "попугай", "воробей"];
    var words = document.getElementById("array").value;
    if (inArray(words, array)) {
        document.getElementById("result14").value = true;
    }
    else {
        document.getElementById("result14").value = false;
    }
}


//Task 15
function newStr() {
    var string = "123456";
    var result = "";

    for(var i = 0; i < string.length; i += 2) {
        if (i + 1 < string.length) {
            result += string[i + 1] + string[i];
        } 
        else {
            result += string[i];
        }
    }
    document.getElementById("result15").value = result;
}



















