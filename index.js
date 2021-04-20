const fs = require('fs');
const hello = require('./hello');
// const pessoa = require('./models/pessoa');
const { mostraNome, mostraIdade } = require('./models/pessoa');

const nome = 'Diego';
const sobrenome = 'Stiehl';
console.log(`${nome} ${sobrenome}`);

// fs

fs.readFile('./arquivos/ler.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

// My Modules

hello('Diego');

// console.log(pessoa.mostraNome());
// console.log(pessoa.mostraIdade());

console.log(mostraNome());
console.log(mostraIdade());

//
