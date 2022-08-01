const listaCount = {};
/*function calcularModa(lista){
    lista.map(
        function (elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
            listaCount[elemento] = 1;
            }
        }
    );
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB){
             return elementoA[1] - elementoB[1];
        }
    );
    const moda = listaArray[listaArray.length - 1];
    return moda;
}*/

function calcularModa(lista){
    lista.map(
        function (elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
            listaCount[elemento] = 1;
            }
        }
    );
    return calculoModa(); 
}

function calculoModa(){
    const listaArray = Object.entries(listaCount).sort(
        function (elementoA, elementoB){
             return elementoA[1] - elementoB[1];
        }
    );
    const moda = listaArray[listaArray.length - 1];
    return moda;
}