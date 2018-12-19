// Criar o array
var cores = ['white', 'black', 'custom'];

//Atualiza o terceiro com o id cores
cores[2] = 'beige';

// Obtém o elemento com o id cores
var el = document.getElementById('colors');

// Substitue o terceiro item no array
el.textContent = cores[2];