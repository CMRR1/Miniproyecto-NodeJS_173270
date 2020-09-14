


var elemento=[];

function ingresaPrincinpio(element){
elemento.unshift(element);
return elemento;
}

function ingresaFinal(element){
elemento.push(element);
return elemento;
}

function eliminaUltimo(){
elemento.pop();
return elemento;
}

function eliminaPrimero(){
elemento.shift();
return elemento;
}

function eliminaDentro(index){
elemento.slice(index, 1);
return elemento;
}

function edita(index, element){
elemento[index]=element;
return elemento;
}

function imprimirIndice(index){
console.log(elemento[index]);
return elemento;
}

function imprimirTodo(){
console.log(elemento);
return elemento;
}

function imprimirSumaPromedio(){
var total=0;
var promedio=0;

elemento.forEach(suma=>{
total+=suma
});

return{
    suma:total,
    promedio:(total/elemento.length)
}; 
}

module.exports = {

    ingresaPrincinpio,
    ingresaFinal,
    eliminaPrimero,
    eliminaUltimo,
    eliminaDentro,
    edita,
    imprimirIndice,
    imprimirSumaPromedio,
    imprimirTodo
 }


