// Desafio 1
function compareTrue() {
  if (arguments[0] == true && arguments[1] == true) {
    return true
  } else { return false }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence() {
  return arguments[0].split(' ');
}

// Desafio 4
function concatName() {
  return arguments[0].splice(-1, 1) + ', ' + arguments[0].splice(0, 1)
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties
}

// Desafio 6
function highestCount() {
  let array = arguments[0]
  let heightNumber = [];
  let highestTimes = 0;
  for (i = 0; i < array.length; i++) {
    for (l = 1; l < array.length; l++) {
      if (array[i] < array[l]) {
        heightNumber = array[l]
      }
    }
  }
  for (i = 0; i < array.length; i++) {
    if (array[i] == heightNumber) {
      highestTimes++
    }
  }
  return highestTimes
}

// Desafio 7
function catAndMouse(mouse, catOne, catTwo) {
  let catOneDistance = catOne - mouse
  let catTwoDistance = catTwo - mouse
  if (Math.abs(catOneDistance) == Math.abs(catTwoDistance)) {
    return "os gatos trombam e o rato foge"
  } else if (catOneDistance < catTwoDistance) {
    return "cat1"
  } else if (catTwoDistance < catOneDistance) {
    return "cat2"
  }
}

// Desafio 8
function fizzBuzz() {
  let arrayReturn = [];
  for (i = 0; i < arguments[0].length; i++) {
    if (arguments[0][i] % 3 == 0 && arguments[0][i] % 5 != 0) {
      arrayReturn.push("fizz")
    } else if (arguments[0][i] % 3 != 0 && arguments[0][i] % 5 == 0) {
      arrayReturn.push("buzz")
    } else if (arguments[0][i] % 3 == 0 && arguments[0][i] % 5 == 0) {
      arrayReturn.push("fizzBuzz")
    } else {
      arrayReturn.push("bug!")
    }
  }
  return arrayReturn
}

// Desafio 9
function encode() {
  let stringInArray = arguments[0].split('')
  for (i = 0; i < stringInArray.length; i++) {
    if (stringInArray[i] == 'a') {
      stringInArray[i] = '1'
    } else if (stringInArray[i] == 'e') {
      stringInArray[i] = '2'
    } else if (stringInArray[i] == 'i') {
      stringInArray[i] = '3'
    } else if (stringInArray[i] == 'o') {
      stringInArray[i] = '4'
    } else if (stringInArray[i] == 'u') {
      stringInArray[i] = '5'
    }
  }
  return stringInArray.join('')
}

function decode() {
  let stringInArray = arguments[0].split('')
  for (i = 0; i < stringInArray.length; i++) {
    if (stringInArray[i] == '1') {
      stringInArray[i] = 'a'
    } else if (stringInArray[i] == '2') {
      stringInArray[i] = 'e'
    } else if (stringInArray[i] == '3') {
      stringInArray[i] = 'i'
    } else if (stringInArray[i] == '4') {
      stringInArray[i] = 'o'
    } else if (stringInArray[i] == '5') {
      stringInArray[i] = 'u'
    }
  }
  return stringInArray.join('')
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
