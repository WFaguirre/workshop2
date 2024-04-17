/* Challenge 1
const travelDestination = prompt('Elije por favor el destino: ');

let dayTravel = prompt('Cuantos dias de viaje desea: ');


if(dayTravel >= 5){
    window.alert('la cantidad de dias es alto');
} else {
    window.alert('Presupuesto estimado debe ser mayor $1500000');
}  

let budget = prompt('Cual es el presupuesto inicial: ');

if(budget >= 1500000) {
    window.alert('Julian tienes el presupuesto suficiente para viajar');
} else {
    window.alert('Julian hace falta más presupuesto');
}

 */

//Challenge 2

let array = [];

let option = prompt('Desea agregar un souvenir a la lista?: si/no');

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


