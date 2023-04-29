"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
console.log("hello world!");
var person = {
  name: "michel"
};
console.log(person);
person.name = "Oliveira";
console.log(person);
// forEach ele execura uma função para cada elemento do array
var cores = ["Verde", "Amarelo", "Azul", "Branco"];
function imprimir(item) {
  console.log(item);
}
cores.forEach(imprimir);

// -- 
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function tabuadaDe2(item) {
  console.log(item * 2);
}
numeros.forEach(tabuadaDe2);

//--
var marcas = ["Fiat", "Chevrolet", "Ford", "Volks", "Ferrari", "Focus", "Virtus"];
var marcasIniciadasComF = [];
var novoIndice = 0;
function selecionarMarcas(item, indice) {
  if (marcas[indice].indexOf("F") == 0) {
    marcasIniciadasComF[novoIndice] = marcas[indice];
    novoIndice++;
  }
}
marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);
//---

var nomes = ["Alberto", "Alex", "Sandro", "Roberta"];
function converterParaMaiusculo(item, indice) {
  nomes[indice] = nomes[indice].toUpperCase();
}
nomes.forEach(converterParaMaiusculo);
console.log(nomes);

//---------------------
var nome2 = ["Alberto", "Alex", "Sandro", "Ana Roberta", "Michel Ferreira"];
var tamanhoNome = 0;
var nome = "";
function maiorNome(item, indice) {
  if (nome2[indice].length > tamanhoNome) {
    nome = nome2[indice];
    tamanhoNome = nome2[indice].length;
  }
}
nome2.forEach(maiorNome);
console.log(nome);
//------------------
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number, index) {
  numbers[index] = number + 1;
});
console.log(numbers);
var newNumbers = numbers.map(function (number) {
  return number + 2;
});
console.log(newNumbers);
var total = numbers.reduce(function (total, next) {
  return total + next;
});
console.log(total);

// filter filtra alguma informação retorna o array
var todos = [{
  text: 'Lavar a louça',
  done: true
}, {
  text: 'Apanhar o lixo',
  done: true
}, {
  text: 'Dobrar as roupas',
  done: false
}];
var doneTodos = todos.filter(function (todo) {
  // return todo.done;
  return todo.text === "Dobrar as roupas";
});
console.log(doneTodos);

// find retorna o valor 

var find = todos.find(function (todo) {
  return todo.text == "Apanhar o lixo";
});
console.log(find);

//find retornar o index do array

var index = todos.findIndex(function (todo) {
  return todo.text == "Dobrar as roupas";
});
console.log(index);

//  some
var nome3 = ["Alberto", "Alex", "Sandro", "Ana Roberta", "Michel Ferreira"];
var hasNome = nome3.some(function (nome3) {
  return nome3 === "Alberto";
});
console.log(hasNome);

//--- arrow functions
var meusNomes = nome3.filter(function (nome3) {
  return nome3 === "Alex";
});
console.log(meusNomes);
var nada = function nada() {
  return {
    nome: 'Michel'
  };
};
console.log(nada());
var coisa = function coisa() {
  return console.log('Ferreira');
};
coisa();

//--- parametro padrão na function 
var nomeFulano = function nomeFulano() {
  var nome5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Fulano";
  return console.log("Olá " + nome5);
};
nomeFulano();
nomeFulano("Michel");

//----concatenar template string
var produtos = function produtos(product, price) {
  console.log("O valor de ".concat(product.toUpperCase(), " \xE9 ").concat(Math.round(price), ", pode comprar"));
};
produtos("Calça", 20.8);

// -- object short syntax sintaxe curta para objetos, evita a repetição de objetos em que recebe variaveis do mesmo nome

var nameme = "camisa";
var price = 22;
var product = {
  nameme: nameme,
  price: price,
  inStock: true
};
console.log(product);

// --- Desestruturação de array

var fruits = ["Maça", "Morango", "Uva", "Banana"];
var a = fruits[0],
  b = fruits[1],
  c = fruits[3];
console.log(a, b, c);

// -- Desestruturação de objetos

var persons = {
  firstName: "Michel",
  secondName: "Ferreira",
  age: 28,
  address: {
    street: "Rua Lua Nova",
    city: "Camaçari",
    region: "Bahia"
  }
};
var firstName = persons.firstName,
  age = persons.age,
  city = persons.address.city,
  region = persons.address.region;
console.log(firstName, age, city, region);
var showFullName = function showFullName(_ref) {
  var firstName = _ref.firstName,
    secondName = _ref.secondName,
    city = _ref.address.city;
  console.log(firstName, secondName, city);
};
showFullName(persons);

// -- Resto - Spread array
var primeiro = fruits[0],
  segundo = fruits[1],
  rest = fruits.slice(2);
console.log(rest);

// -- Resto - Spread objeto
var per = {
  fName: "Michel",
  secondName: "Ferreira",
  age: 28,
  address: {
    street: "Rua Lua Nova",
    city: "Camaçari",
    region: "Bahia"
  }
};
var fName = per.fName,
  secondName = per.secondName,
  rests = _objectWithoutProperties(per, ["fName", "secondName"]);
console.log(rests);
