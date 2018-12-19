var greeting = 'Olá ';
var name = 'Kobori';
var message = ', por favor verifique a sua ordem: ';

var welcome = greeting + name + message;

var sing = 'Full Stack';
var tiles = sing.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

var el = document.getElementById('greeting');
el.textContent = welcome;

var elSing = document.getElementById('userSign');
elSing.textContent = sing;

var elTiles = document.getElementById('tiles');
elTiles.textContent = tiles;

var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = "$ " + subTotal;

var elSubTotal = document.getElementById('shipping');
elSubTotal.textContent = "$ " + shipping;

var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = "$ " + grandTotal;