function Pessoa(nome, idade, telefone, email){
  this.nome = nome;
  this.idade = idade;
  this.telefone = telefone;
  this.email = email;
  this.maiorIdade = function(){

  };
}

var pessoa1 = new Pessoa('Kobori', 34, 08043291728, 'kobori@gmail.com');

var pessoaNome = 'Nome: ' + Pessoa.nome;

var elNome = document.getElementById('nome');
elNome.textContent = pessoaNome;
