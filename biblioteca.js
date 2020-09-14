


var elemento=[];

function ingresaPrincinpio(element){
elemento.unshift(element);
}

function ingresaFinal(element){
elemento.push(element);
}

function eliminaUltimo(){
elemento.pop();
}

function eliminaPrimero(){
elemento.shift();
}

function eliminaDentro(index){
elemento.slice(index, 1);
}

function edita(index, element){
elemento[index]=element;
}

function imprimirIndice(index){
console.log(elemento[index]);
}

function imprimirTodo(){
console.log(elemento);
}

function imprimirSumaPromedio(){
var total=0;
var promedio=0;

elemento.forEach(suma=>{
total+=suma
});

console.log("La suma es: "+total);
console.log("El promedio es: "+total/elemento.length);
}



