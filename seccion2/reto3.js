let weather = confirm('¿Como está el clima hoy?: Aceptar: "Soleado" Cancelar: "Lluvioso"');

if(weather == true){
    window.alert('Puedes llevar una maleta de 23kl');
} else {
    window.alert('Lleva una maleta liviana para la ocasión y lleva paraguas');
}

let weight = Number(prompt('Ingresa el peso de la maleta despues de llevar lo esencial: '));

if (weight >= 23){
    window.alert('Has superado el limite de peso, no puedes llevar objetos adicionales');
} else {
    window.alert('Puedes llevar articulos adicionales');
}

let space = confirm('Tienes espacio suficiente en la maleta: Si:"Aceptar" No:"Cancelar"');

let littleThings = Number(prompt('Ingresa el peso de los articulos adiccionales: '));

let sumWeight = littleThings + weight;

window.alert(sumWeight);

while (sumWeight <= 23) {
    window.alert('Has excedido el limite de peso');
}






