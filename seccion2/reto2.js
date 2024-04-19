let budgetToday = Number(prompt('Indica tu presupuesto para hoy: '));
let dinnerOut = Number(prompt('Costo estimado de la cena afuera: '));
let books = Number(prompt('Costo estimado de tus libros: '));
let save = Number(prompt('Indica que cantidad quieres ahorrar: '));


let accounts = dinnerOut + books + save;

if (accounts >= budgetToday){
    window.alert('El gasto supera el presupuesto');
    if (dinnerOut == save && books >= save){
        window.alert("Debe desistir de la comida");
    } if(dinnerOut >= save && books == save){
        window.alert("Debe desistir de los libros");
    }
}