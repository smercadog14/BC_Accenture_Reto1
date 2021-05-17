'use strict';
let letras = document.getElementById('letras');
let numero = document.getElementById('numero');
let botones = document.querySelectorAll('button');

//variables temporales
let cadenaFinal = 'ABCDEFGHIJ';
let numeroFinal = '1234567890';
let numeroTemp = '';
let cadenaTemp = '';
let campoAllenar;
let vecTemp = [];
let hola = '';

botones.forEach((element) => {
    element.onclick = () => {
        llenarVecTemp(element);
        dibujarCaracter(selecionarCasilla());
    };
});

const llenarVecTemp = (boton) => {
    vecTemp = boton.innerHTML.split('/');
};

function pasarCaracter(vecTemp) {
    let carSel = '';

    if (cadenaTemp === cadenaFinal) {
        carSel = vecTemp[1];
    } else {
        carSel = vecTemp[0];
    }
    return carSel;
}

function selecionarCasilla() {
    let campoAllenar;

    if (letras.innerHTML == cadenaFinal && letras.innerHTML == cadenaTemp) {
        campoAllenar = numero;
    } else {
        campoAllenar = letras;
    }

    return campoAllenar;
}

const dibujarCaracter = (campo) => {
    let caracter = pasarCaracter(vecTemp);

    if (validarCadena(caracter)) {
        if (campo == letras) {
            cadenaTemp += caracter;
            letras.innerHTML = cadenaTemp;
        } else if (campo == numero) {
            numeroTemp += caracter;
            numero.innerHTML = numeroTemp;
        } else {
            alert('Orden Errado');
        }
    } else {
        alert('Orden Errado');
    }
};

const validarCadena = (caracter) => {
    const esUnNumero = !isNaN(caracter);
    let stringTemp = cadenaTemp;
    let stringFinal = cadenaFinal;
    let stringAValidar = cadenaTemp + caracter;
    let primerCaracter = 'A';

    if (esUnNumero) {
        stringTemp = numeroTemp;
        stringFinal = numeroFinal;
        stringAValidar = numeroTemp + caracter;
        primerCaracter = 1;
    }

    if (caracter != primerCaracter && stringTemp == '') {
        return false;
    }
    return stringFinal.includes(stringAValidar);
};
