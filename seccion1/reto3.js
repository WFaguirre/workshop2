//Challenge 3

let initialBudget = Number(prompt('Por favor ingrese el presupuesto inicial: '));
let travelGo = Number(prompt('Ingrese la tarifa del tiquete: '));
let hotel = Number(prompt('Ingrese la tarifa de alojamiento: '));
let food = Number(prompt('Ingrese presupuesto de alimentación: '));

let sumTravel = travelGo +  hotel + food;

if (sumTravel < initialBudget) {
    window.alert('Puedes comprar articulos extra moderadamente (No supere el millon de pesos)');
    if (initialBudget > 5000000 ) {
        window.alert('Puedes comprar los articulos extras que consideres necesarios');
    }
} else {
    window.alert('No tienes el presupuesto suficiente para comprar articulos extras');
}

console.log('El valor total del viaje es: ', sumTravel, 'Su presupuesto inicial es de: ', initialBudget, 'Te sobra ', (Number(initialBudget)- Number(sumTravel)));


let leftlover = initialBudget - sumTravel;

if (leftlover > 100000) {
    window.alert('Puedes comprar algunos souvenirs que superen los $100.000');
}  if (leftlover > 500000) {
    window.alert('Puedes comprar souvenirs mayores a $500.000');
} else {
    window.alert('No puedes comprar ningún souvenir');
}

let option = prompt('Desea ver el menú escriba: si/no');

window.alert()

switch(option === "si"){
    case "mug":
        window.alert("El mug vale 12000 te alcanza para: ", leftlover/12000, "mugs");
        break;

    case "Imanes":
        window.alert("El iman vale $10000 te alcanza para: ", leftlover/10000, "imanes");
        break;

    default:
    window.alert("No puedes comprar ningún souvenirs");
}
        
    
