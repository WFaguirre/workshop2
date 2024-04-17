
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

