"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
//------------------ Ele esta pegando o arrys e fazendo uma opoeração para cada elemento do arrys e armazendando no mesmo array forEach
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number, index) {
  numbers[index] = number + 1;
});
console.log(numbers);
//------------------- map está pegando o array realizando a operação e armanzendo em um novo array
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
  return todo.done === false;
});
console.log(doneTodos);

// find retorna o valor 

var find = todos.find(function (todo) {
  return todo.text == "Apanhar o lixo";
});
console.log(find);

//findIndex retornar o index do array

var index = todos.findIndex(function (todo) {
  return todo.text == "Dobrar as roupas";
});
console.log(index);

//  some
var nome3 = ["Alberto", "Alex", "Sandro", "Ana Roberta", "Michel Ferreira"];
var hasNome = nome3.some(function (nome3) {
  return nome3 === "Sandro";
});
console.log(hasNome);

//--- arrow functions function inline
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

// --- Desestruturação de array  - pode pular o valor não considerado apresentando somente o valor vazio seguido de virgula ", ,"

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

// -- Resto - Spread array, ira pegar o valor restante apos os valores declarados, armazena o valor do resto do array ou objeto na variavel apos os tres pontos "...rest"
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

// função construtora, o this referece a ele mesmo no escopo do obj

function Car(brand, price) {
  this.brand = brand;
  this.price = price;
}
var civic = new Car('Honda', 130);
var hb20 = new Car('Hyundai', 80);
console.log(civic);
console.log(hb20);

//----- Classes
var Cars = /*#__PURE__*/function () {
  function Cars(brand, price) {
    _classCallCheck(this, Cars);
    this.brand = brand;
    this.price = price;
  }
  _createClass(Cars, [{
    key: "run",
    value: function run() {
      console.log("correr");
    }
  }]);
  return Cars;
}();
var civics = new Cars('City', 150);
console.log(civics);
civics.run();

// --- Trabalhando com as propriedades das classes com os metodos GET E SET
var Pessoas = /*#__PURE__*/function () {
  function Pessoas(novoNome) {
    _classCallCheck(this, Pessoas);
    this._novoNome = novoNome;
  }
  _createClass(Pessoas, [{
    key: "novoNome",
    get: function get() {
      return this._novoNome;
    },
    set: function set(novoNome) {
      this._novoNome = novoNome;
    }
  }]);
  return Pessoas;
}();
var pessoas = new Pessoas('Michel Moreira Ferreira');
pessoas.novoNome = "Michel Vinicius Moreira Ferreira";
console.log(pessoas.novoNome);

// funçoes metodos estaticos de classes
var pessoa2 = /*#__PURE__*/function () {
  function pessoa2(firstName, secondName) {
    _classCallCheck(this, pessoa2);
    this.firstName = firstName;
    this.secondName = secondName;
  }
  _createClass(pessoa2, [{
    key: "fullName",
    get: function get() {
      return pessoa2.joinNames(this.firstName, this.secondName);
    }
  }], [{
    key: "joinNames",
    value: function joinNames(firstName, secondName) {
      return "".concat(firstName, " ").concat(secondName);
    }
  }]);
  return pessoa2;
}();
var pessoa = new pessoa2("Michel", "Vinicius");
console.log(pessoa.fullName);

// Herença
var Veiculo = /*#__PURE__*/function () {
  function Veiculo(rodas) {
    _classCallCheck(this, Veiculo);
    this.rodas = rodas;
  }
  _createClass(Veiculo, [{
    key: "acelerar",
    value: function acelerar() {
      console.log("Acelerou");
    }
  }]);
  return Veiculo;
}();
var Moto = /*#__PURE__*/function (_Veiculo) {
  _inherits(Moto, _Veiculo);
  var _super = _createSuper(Moto);
  function Moto(rodas, capacete) {
    var _this;
    _classCallCheck(this, Moto);
    _this = _super.call(this, rodas);
    _this.capacete = capacete;
    return _this;
  }
  _createClass(Moto, [{
    key: "empinar",
    value: function empinar() {
      console.log("Empinou com ".concat(this.rodas, " rodas"));
    }
  }, {
    key: "acelerar",
    value: function acelerar() {
      _get(_getPrototypeOf(Moto.prototype), "acelerar", this).call(this);
      console.log("Acelerou muuuito com a moto");
    }
  }, {
    key: "taUsandoCapacete",
    value: function taUsandoCapacete() {
      console.log(this.capacete);
    }
  }]);
  return Moto;
}(Veiculo);
var bross = new Moto(2, true);
bross.acelerar();
bross.empinar();
bross.taUsandoCapacete();
