// Task 1
var translations = new Map();
translations.set('мандарин', 'tangerine');
translations.set('стол', 'table');
translations.set('кот', 'cat');
translations.set('солнце', 'sun');
translations.set('дом', 'house');
translations.set('собака', 'dog');
translations.set('дверь', 'door');
translations.set('вишня', 'cherry');
translations.set('хомяк', 'hamster');
translations.set('бумага', 'paper');

function findTranslatе() {
  var word = document.getElementById('word').value; 
  var translation = translations.get(word);
  if (translation) {
    document.getElementById('result').innerHTML = `Перевод: ${translation}`;
  } 
  else {
    document.getElementById('result').innerHTML = 'Перевод не найден';
  }
}


// Task 1
var studentRatings = new Map();


function addRating() {
  var studentName = document.getElementById('name').value;
  var rating = parseInt(document.getElementById('rating').value);
  if (studentRatings.has(studentName)) {
    let ratings = studentRatings.get(studentName);
    ratings.push(rating);
    studentRatings.set(studentName, ratings);
  } 
  else {
    studentRatings.set(studentName, [rating]);
  }

  document.getElementById('name').value = '';
  document.getElementById('rating').value = '';
  updateAverageRatings();
}

function averageRatings(ratings) {
  var sum = 0;
  for (let rating of ratings) {
    sum += rating;
  }
  return sum / ratings.length;
}

function updateAverageRatings() {
  var table = document.getElementById('ratingsTable');
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  for (let [studentName, ratings] of studentRatings) {
    let row = table.insertRow();
    let cellName = row.insertCell(0);
    let cellAverageRatings = row.insertCell(1);

    cellName.innerHTML = studentName;
    cellAverageRatings.innerHTML = averageRatings(ratings).toFixed(1);
  }
}