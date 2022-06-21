//código del cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("el perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//Código del triangulo
console.group("triangulo");


function perimetroTriangulo(patas,base){
    return patas + patas + base;
}


function areaTriangulo(base, altura){
    return (base * altura) / 2;

} 

console.groupEnd();

//Código del circulo
console.group("Circulo");


// Diámetro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio){
 const diametro = diametroCirculo(radio);
 return diametro * PI;
} 


//Área
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

//HTML↓↓↓↓

// Botones cuadrado

function CalcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Botones Triangulo

function CalcularPerimetroTriangulo(){
    const inputPatas = document.getElementById("inputTrianguloPatas");
    const valuePatas = parseInt(inputPatas.value);

    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = parseInt(inputBase.value);

    if(inputPatas.value.length == 0 && inputBase.value.length == 0){
        alert("Escribe ambos valores de tu triangulo");
    }

    else if(inputPatas.value.length == 0 && inputBase.value > 0 ){
        alert("Polfi agg un valor a las patas de su triangulo");
    }

    else if(inputPatas.value > -1 && inputBase.value.length == 0 ){
        alert("Porfavore agg un valor a la base del triangulo");
    }

    else{
    const perimetro = perimetroTriangulo(valuePatas,valueBase);
    alert("El perimetro de su triangulo es " + perimetro);

    }
}

function CalcularAreaTriangulo(){

    const inputPatas = document.getElementById("inputTrianguloPatas");
    const valuePatas = parseInt(inputPatas.value);

    const inputBase = document.getElementById("inputTrianguloBase");
    const valueBase = parseInt(inputBase.value);

    if(inputPatas.value.length == 0 && inputBase.value.length == 0){
        alert("Escribe ambos valores de tu triangulo");
    }

    else if(inputPatas.value.length == 0 && inputBase.value > -1 ){
        alert("Polfi agg un valor a las patas de su triangulo");
    }

    else if(inputPatas.value > -1 && inputBase.value.length == 0 ){
        alert("Porfavore agg un valor a la base del triangulo");
    }

    else{
        const area = areaTriangulo(valueBase,valuePatas);
        alert(area);
    }

    
}


//Circulo action

function CalcularDiametroCirculo(){

    const inputradio = document.getElementById("inputcirculo");
    const valueradio = parseInt(inputradio.value);

    const diametro = diametroCirculo(valueradio);
    alert(diametro);
}

function CalcularPerimetroCirculo(){

    const inputradio = document.getElementById("inputcirculo");
    const valueradio = parseInt(inputradio.value);

    const perimetro = perimetroCirculo(valueradio);
    alert(perimetro);
}

function CalcularAreaCirculo(){

    const inputradio = document.getElementById("inputcirculo");
    const valueradio = parseInt(inputradio.value);

    const area = areaCirculo(valueradio);
    alert(area);
}

