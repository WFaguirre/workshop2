let stateOfmind = confirm('¿Cuál tu estado de ánimo hoy?: ');
let weather = confirm('¿Como está el clima hoy?: ');
let agenda = confirm('¿Estas ocupado hoy?: ');

if(stateOfmind == false){
    window.alert('Deberias tomarte el dia el libre, una carga de pensamientos negativos no te dejara avanzar');
} else {
    window.alert('Deberias hacer un poco de ejercio aumentara tu stamina');
} if(weather == false){
    window.alert('Deberias estar en casa y trabajar en ese proyecto que tenias en mente');
} else {
    window.alert('Aprovecha a salir, el clima puede estar espectacular');
} if(agenda == false){
    window.alert('Aprovecha ese tiempo libre para hacer eso pendiente');
} else {
    window.alert('Tu agenda esta muy apretada, pero animo lo podras hacer todo hoy');
}

console.log(stateOfmind,weather,agenda);