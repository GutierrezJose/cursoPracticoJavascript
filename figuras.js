//Codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4; 
}

function areaCuadrado(lado){
    return lado * lado;
} 

console.groupEnd();


//Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}


function areaTriangulo(base, altura){
    return (base * altura)/2;
} 

console.groupEnd();


//Codido del circulo
console.group("Circulos");


function diametroCirculo(radio){
    return radio * 2;
} 


const pi = Math.PI;
console.log("pi es: "+pi);


function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
} 



function areaCirculo(radio){
    return (radio * radio) * pi;
}

console.groupEnd();

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulobase");
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const value3 = Number(input3.value);

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulobase");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    if((value1 == value2) && (value3 != value1) && (value3 != value2)){
        alert("Es un triangulo isoceles");
        const altura = Math.sqrt((value1 * value1) - ((value3 * value3)/4));
        alert("La altura es :"+altura);
        const area = areaTriangulo(value3, altura);
        alert(area);
    }else{
        alert("No es un triangulo isoceles");
    }
}


function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}

