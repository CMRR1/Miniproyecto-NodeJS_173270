
var biblioteca=require('./biblioteca');
var cosa1=true;


var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var var2=parseInt(d); 
    switch(var2){

        case 1:{
            biblioteca.ingresaPrincinpio(9);
            console.log("Los primeros: "+biblioteca.ingresaPrincinpio(5));
            break;
        }

        case 2:{
            biblioteca.ingresaFinal(2);
            console.log("Los ultimos: "+biblioteca.ingresaFinal(3));
            break;
        }

        case 3:{
            biblioteca.eliminaPrimero();
            break;

        }

        case 4:{
            biblioteca.eliminaUltimo();
            break;
   
        }

        case 5:{
            biblioteca.eliminaDentro(0);
            break;
        }

        case 6:{
            biblioteca.edita();
            break;
        }

        case 7:{
            console.log(biblioteca.imprimirTodo());
            break;
        }

        case 8:{
            console.log(biblioteca.imprimirSumaPromedio());
            break;
        }

        case 9:{
            console.log(biblioteca.imprimirIndice());
            break;
        }
        default:break;
    
    }
  });

