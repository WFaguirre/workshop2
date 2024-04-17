//Challenge 2

let array = [];

let option = prompt('Desea agregar un souvenir a la lista?: si/no */');

while (option == "si") {

let nameSouvenirs = String(prompt('Nombre del souvenir: '));
let price = Number(prompt('Precio del souvenir: '));
let available = Boolean(prompt('Esta disponible: '));

array.push({name: nameSouvenirs, price:  price, available: available}); 

option = prompt('Desea agregar un souvenir a la lista?: si/no'); 

}

window.alert(typeof name);
window.alert(typeof price);
window.alert(typeof available);

