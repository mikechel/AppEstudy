console.log("hello world!")

const person = { name: "michel"}
console.log(person)

person.name = "Oliveira"

console.log(person)

// forEach ele execura uma função para cada elemento do array
const cores = ["Verde", "Amarelo", "Azul", "Branco"];
function imprimir(item){
  console.log(item);
}
cores.forEach(imprimir);

// -- 
const numeros = [1,2,3,4,5,6,7,8,9,10];
function tabuadaDe2(item){
  console.log(item*2);
}
numeros.forEach(tabuadaDe2);

//--
const marcas = ["Fiat", "Chevrolet", "Ford", "Volks", "Ferrari", "Focus", "Virtus"];
const marcasIniciadasComF = [];
let novoIndice = 0;

function selecionarMarcas(item, indice){
    if (marcas[indice].indexOf("F")==0){
      marcasIniciadasComF[novoIndice] = marcas[indice];
      novoIndice++;
    }
}
marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);
//---

const nomes = ["Alberto", "Alex", "Sandro", "Roberta"];
function converterParaMaiusculo(item, indice){
  nomes[indice] = nomes[indice].toUpperCase();
}
nomes.forEach(converterParaMaiusculo);
console.log(nomes);

//---------------------
const nome2 = ["Alberto", "Alex", "Sandro", "Ana Roberta", "Michel Ferreira"];
let tamanhoNome = 0;
let nome = "";

function maiorNome(item, indice){
  if (nome2[indice].length > tamanhoNome){
    nome = nome2[indice];
    tamanhoNome = nome2[indice].length;
  }
}
nome2.forEach(maiorNome);
console.log(nome);
//------------------ Ele esta pegando o arrys e fazendo uma opoeração para cada elemento do arrys e armazendando no mesmo array forEach
const numbers = [1, 2, 3, 4, 5]

numbers.forEach(function(number, index){
  
  numbers[index] = number + 1
})
console.log(numbers)
//------------------- map está pegando o array realizando a operação e armanzendo em um novo array
const newNumbers = numbers.map(function(number){
  return number + 2
})
console.log(newNumbers)


const total = numbers.reduce(function(total, next){
  return total + next
})
console.log(total)

// filter filtra alguma informação retorna o array
const todos = [
  {text: 'Lavar a louça', done: true},
  {text: 'Apanhar o lixo', done: true},
  {text: 'Dobrar as roupas', done: false},
]

const doneTodos = todos.filter(function(todo){
  // return todo.done;
  return todo.done === false
});

console.log(doneTodos);

// find retorna o valor 

const find = todos.find(function (todo){
  return todo.text == "Apanhar o lixo"
})
console.log(find);

//findIndex retornar o index do array

const index = todos.findIndex(function(todo){
  return todo.text == "Dobrar as roupas"
});
console.log(index);

//  some
const nome3 = ["Alberto", "Alex", "Sandro", "Ana Roberta", "Michel Ferreira"];
const hasNome = nome3.some(function(nome3){
  return nome3 === "Sandro";
});

console.log(hasNome);


//--- arrow functions function inline
const meusNomes = nome3.filter((nome3)=> nome3 === "Alex");
console.log(meusNomes);

const nada = () => ({nome: 'Michel'});
console.log(nada());

const coisa = () => console.log('Ferreira');
coisa();

//--- parametro padrão na function 
const nomeFulano = (nome5 = "Fulano") => console.log("Olá " + nome5);
nomeFulano();
nomeFulano("Michel");

//----concatenar template string
const produtos = (product, price) => {
  console.log(`O valor de ${product.toUpperCase()} é ${Math.round(price)}, pode comprar`);
}
produtos("Calça", 20.8);

// -- object short syntax sintaxe curta para objetos, evita a repetição de objetos em que recebe variaveis do mesmo nome

const nameme = "camisa";
const price = 22;
const product = {
  nameme,
  price,
  inStock: true

}

console.log(product);

// --- Desestruturação de array  - pode pular o valor não considerado apresentando somente o valor vazio seguido de virgula ", ,"

const fruits = ["Maça", "Morango", "Uva", "Banana"];

const [a, b, ,c] = fruits;

console.log(a, b, c)

// -- Desestruturação de objetos

const persons = {
  firstName: "Michel",
  secondName: "Ferreira",
  age: 28,
  address: {
    street: "Rua Lua Nova",
    city: "Camaçari",
    region: "Bahia",
  },
}

const {firstName, age, address:{city}, address:{region}} = persons;

console.log(firstName, age, city, region);


const showFullName = ({firstName, secondName, address:{city}}) =>{
console.log(firstName, secondName, city)
}

showFullName(persons);


// -- Resto - Spread array, ira pegar o valor restante apos os valores declarados, armazena o valor do resto do array ou objeto na variavel apos os tres pontos "...rest"
const [primeiro, segundo, ...rest] = fruits;
console.log(rest);

// -- Resto - Spread objeto
const per = {
  fName: "Michel",
  secondName: "Ferreira",
  age: 28,
  address: {
    street: "Rua Lua Nova",
    city: "Camaçari",
    region: "Bahia",
  },
}
const {fName, secondName, ...rests} = per;
console.log(rests);

// função construtora, o this referece a ele mesmo no escopo do obj

function Car(brand, price){
  this.brand = brand;
  this.price = price;
}

const civic = new Car('Honda', 130);
const hb20 = new Car('Hyundai', 80);
console.log(civic);
console.log(hb20);

//----- Classes

class Cars {
  constructor(brand, price){
    this.brand = brand;
    this.price = price;
  }

  run(){
    console.log("correr");
  }
}
const civics = new Cars('City', 150);
console.log(civics);
civics.run();

// --- Trabalhando com as propriedades das classes com os metodos GET E SET

class Pessoas {
  constructor(novoNome){
    this._novoNome = novoNome;
  }

  get novoNome(){
    return this._novoNome;
  }

  set novoNome(novoNome){
    this._novoNome = novoNome;
  }

}

const pessoas = new Pessoas('Michel Moreira Ferreira');
pessoas.novoNome = "Michel Vinicius Moreira Ferreira";
console.log(pessoas.novoNome);


// funçoes metodos estaticos de classes

class pessoa2 {
  constructor(firstName, secondName){
    this.firstName= firstName;
    this.secondName = secondName;
  }

  get fullName(){
    return pessoa2.joinNames(this.firstName, this.secondName);
  }

  static joinNames(firstName, secondName){
    return `${firstName} ${secondName}`
  }
}

const pessoa = new pessoa2("Michel", "Vinicius");

console.log(pessoa.fullName);

// Herença

class Veiculo {
  constructor(rodas){
    this.rodas = rodas
  }

  acelerar(){
    console.log("Acelerou");
  }
}
class Moto extends Veiculo{
constructor(rodas, capacete){
  super(rodas);
  this.capacete = capacete;
}

  empinar(){
    console.log(`Empinou com ${this.rodas} rodas`);
  }

  acelerar(){
    super.acelerar();
    console.log("Acelerou muuuito com a moto")
  }

  taUsandoCapacete(){
    console.log(this.capacete);
  }
}

const bross = new Moto (2, true);

bross.acelerar();
bross.empinar();
bross.taUsandoCapacete();