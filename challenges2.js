// Desafio 10
function techList(arrayTech, name) {
  arrayTech = arrayTech.sort()
  let techArray = [];
  if (arrayTech.length <= 0) {
    return 'Vazio!'
  }
  for (item of arrayTech) {
    techArray.push({
      tech: item,
      name: name
    })
  }
  return techArray
}

// Desafio 11
function generatePhoneNumber() {
  let phoneNumber;
  let arrayPhone = arguments[0];
  if (arrayPhone.length < 11 || arrayPhone.length > 11) {
    return phoneNumber = "Array com tamanho incorreto."
  }
  for (i = 0; i < arrayPhone.length; i++) {
    if (arrayPhone[i] < 0 || arrayPhone[i] > 9) {
      return phoneNumber = "não é possível gerar um número de telefone com esses valores"
    }
  }
  for (i = 0; i < arrayPhone.length; i++) {
    phoneNumber = 0;
    for (l = 0; l < arrayPhone.length; l++) {
      if (arrayPhone[i] == arrayPhone[l]) {
        phoneNumber++
        if (phoneNumber == 3) {
          return phoneNumber = "não é possível gerar um número de telefone com esses valores"
        }
      }
    }
  }
  return phoneNumber = `(${arrayPhone.splice(0, 2).join('')}) ${arrayPhone.splice(0, 5).join('')}-${arrayPhone.splice(0, 4).join('')}`
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA + lineB < lineC || Math.abs(lineA - lineB) > lineC) {
    return false
  } else if (lineB + lineC < lineA || Math.abs(lineB - lineC) > lineA) {
    return false
  } else if (lineA + lineC < lineB || Math.abs(lineA - lineC) > lineB) {
    return false
  } else {
    return true
  }
}

// Desafio 13
function hydrate() {
  let phrase = arguments[0]
  phrase = phrase.replace(/[^0-9]/g, "");
  let totalWater = 0;
  for(i = 0; i < phrase.length; i++){
    totalWater += Number(phrase[i])
  }
  if(totalWater < 2){
    return `${totalWater} copo de água`
  } else {
    return `${totalWater} copos de água`
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
