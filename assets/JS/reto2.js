let letras = document.getElementById("letras");
let numero = document.getElementById("numero");

let btnA1 = document.getElementById("btnA1");
let btnB2 = document.getElementById("btnB2");
let btnC3 = document.getElementById("btnC3");
let btnD4 = document.getElementById("btnD4");
let btnE5 = document.getElementById("btnE5");
let btnF6 = document.getElementById("btnF6");
let btnG7 = document.getElementById("btnG7");
let btnH8 = document.getElementById("btnH8");
let btnI9 = document.getElementById("btnI9");
let btnJ0 = document.getElementById("btnJ0");

// operaciones

//variables temporales
let letrasTemp = "";
let numeroTemp = "";
let campoActual = "";
let cadenaFinal = "ABCDEFGHIJ";
let numeroFinal = "1234567890";
let cTemp = "";
//funciones
const btnA1f = () => {
  if (
    (letras.innerHTML !== null && letras.innerHTML == "") ||
    letras.innerHTML == cadenaFinal
  ) {
    if (letras.innerHTML !== cadenaFinal) {
      letras.innerHTML = letrasTemp + "A";
      letrasTemp = letrasTemp + "A";
    } else if (letrasTemp == cadenaFinal && numeroTemp == "") {
      numero.innerHTML = numeroTemp + "1";
      numeroTemp = numeroTemp + "1";
    } else {
      alert("Error de orden A/1");
    }
  }
};

const btnB2f = () => {
  if (letras.innerHTML !== null && letras.innerHTML !== "") {
    if (letras.innerHTML !== cadenaFinal) {
      cTemp = "B";
      if (
        cadenaFinal.includes(letrasTemp) &&
        letrasTemp.length == 1 &&
        !letrasTemp.includes(cTemp)
      ) {
        letrasTemp = letrasTemp + cTemp;
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      cTemp = "2";
      if (
        numeroFinal.includes(numeroTemp) &&
        numeroTemp.length == cTemp - 1 &&
        !numeroTemp.includes(cTemp)
      ) {
        numero.innerHTML = numeroTemp + cTemp;
        numeroTemp = numeroTemp + cTemp;
      }
    } else {
      alert("Error de orden");
    }
  } else {
    alert("Error de orden");
  }
};

const btnC3f = () => {
  if (letras.innerHTML !== null && letras.innerHTML !== "") {
    if (letras.innerHTML !== cadenaFinal) {
      cTemp = "C";
      if (
        cadenaFinal.includes(letrasTemp) &&
        letrasTemp.length == 2 &&
        !letrasTemp.includes(cTemp)
      ) {
        letrasTemp = letrasTemp + cTemp;
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      cTemp = "3";
      if (
        numeroFinal.includes(numeroTemp) &&
        numeroTemp.length == cTemp - 1 &&
        !numeroTemp.includes(cTemp)
      ) {
        numero.innerHTML = numeroTemp + cTemp;
        numeroTemp = numeroTemp + cTemp;
      }
    } else {
      alert("Error de orden");
    }
  } else {
    alert("Error de orden");
  }
};

const btnD4f = () => {
  if (letras.innerHTML !== null && letras.innerHTML !== "") {
    if (letras.innerHTML !== cadenaFinal) {
      cTemp = "D";
      if (
        cadenaFinal.includes(letrasTemp) &&
        letrasTemp.length == 3 &&
        !letrasTemp.includes(cTemp)
      ) {
        letrasTemp = letrasTemp + cTemp;
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      cTemp = "4";
      if (
        numeroFinal.includes(numeroTemp) &&
        numeroTemp.length == cTemp - 1 &&
        !numeroTemp.includes(cTemp)
      ) {
        numero.innerHTML = numeroTemp + cTemp;
        numeroTemp = numeroTemp + cTemp;
      }
    } else {
      alert("Error de orden");
    }
  } else {
    alert("Error de orden");
  }
};

const btnE5f = () => {
  if (letras.innerHTML !== null && letras.innerHTML !== "") {
    if (letras.innerHTML !== cadenaFinal) {
      cTemp = "E";
      if (
        cadenaFinal.includes(letrasTemp) &&
        letrasTemp.length == 4 &&
        !letrasTemp.includes(cTemp)
      ) {
        letrasTemp = letrasTemp + cTemp;
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      cTemp = "5";
      if (
        numeroFinal.includes(numeroTemp) &&
        numeroTemp.length == cTemp - 1 &&
        !numeroTemp.includes(cTemp)
      ) {
        numero.innerHTML = numeroTemp + cTemp;
        numeroTemp = numeroTemp + cTemp;
      }
    } else {
      alert("Error de orden");
    }
  } else {
    alert("Error de orden");
  }
};

const btnF6f = () => {
  if (letras.innerHTML !== null && letras.innerHTML !== "") {
    if (letras.innerHTML !== cadenaFinal) {
      cTemp = "F";
      if (
        cadenaFinal.includes(letrasTemp) &&
        letrasTemp.length == 5 &&
        !letrasTemp.includes(cTemp)
      ) {
        letrasTemp = letrasTemp + cTemp;
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      cTemp = "6";
      if (
        numeroFinal.includes(numeroTemp) &&
        numeroTemp.length == cTemp - 1 &&
        !numeroTemp.includes(cTemp)
      ) {
        numero.innerHTML = numeroTemp + cTemp;
        numeroTemp = numeroTemp + cTemp;
      }
    } else {
      alert("Error de orden");
    }
  } else {
    alert("Error de orden");
  }
};

const btnG7f = () => {
  if (letras.innerHTML !== null && letras.innerHTML !== "") {
    if (letras.innerHTML !== cadenaFinal) {
      cTemp = "G";
      if (
        cadenaFinal.includes(letrasTemp) &&
        letrasTemp.length == 6 &&
        !letrasTemp.includes(cTemp)
      ) {
        letrasTemp = letrasTemp + cTemp;
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      cTemp = "7";
      if (
        numeroFinal.includes(numeroTemp) &&
        numeroTemp.length == cTemp - 1 &&
        !numeroTemp.includes(cTemp)
      ) {
        numero.innerHTML = numeroTemp + cTemp;
        numeroTemp = numeroTemp + cTemp;
      }
    } else {
      alert("Error de orden");
    }
  } else {
    alert("Error de orden");
  }
};

const btnH8f = () => {
  if (letras.innerHTML !== null && letras.innerHTML !== "") {
    if (letras.innerHTML !== cadenaFinal) {
      cTemp = "H";
      if (
        cadenaFinal.includes(letrasTemp) &&
        letrasTemp.length == 7 &&
        !letrasTemp.includes(cTemp)
      ) {
        letrasTemp = letrasTemp + cTemp;
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      cTemp = "8";
      if (
        numeroFinal.includes(numeroTemp) &&
        numeroTemp.length == cTemp - 1 &&
        !numeroTemp.includes(cTemp)
      ) {
        numero.innerHTML = numeroTemp + cTemp;
        numeroTemp = numeroTemp + cTemp;
      }
    } else {
      alert("Error de orden");
    }
  } else {
    alert("Error de orden");
  }
};
const btnI9f = () => {
  if (letras.innerHTML !== null && letras.innerHTML !== "") {
    if (letras.innerHTML !== cadenaFinal) {
      cTemp = "I";
      if (
        cadenaFinal.includes(letrasTemp) &&
        letrasTemp.length < 8 &&
        !letrasTemp.includes(cTemp)
      ) {
        letrasTemp = letrasTemp + cTemp;
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      cTemp = "9";
      if (
        numeroFinal.includes(numeroTemp) &&
        numeroTemp.length == cTemp - 1 &&
        !numeroTemp.includes(cTemp)
      ) {
        numero.innerHTML = numeroTemp + cTemp;
        numeroTemp = numeroTemp + cTemp;
      }
    } else {
      alert("Error de orden");
    }
  } else {
    alert("Error de orden");
  }
};

const btnJ0f = () => {
  if (letras.innerHTML !== null && letras.innerHTML !== "") {
    if (letras.innerHTML !== cadenaFinal) {
      cTemp = "J";
      if (
        cadenaFinal.includes(letrasTemp) &&
        letrasTemp.length == 9 &&
        !letrasTemp.includes(cTemp)
      ) {
        letrasTemp = letrasTemp + cTemp;
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      cTemp = "0";
      if (
        numeroFinal.includes(numeroTemp) &&
        numeroTemp.length == 9 &&
        !numeroTemp.includes(cTemp)
      ) {
        numero.innerHTML = numeroTemp + cTemp;
        numeroTemp = numeroTemp + cTemp;
      }
    } else {
      alert("Error de orden");
    }
  } else {
    alert("Error de orden");
  }
};

//onclicks

btnA1.onclick = () => {
  btnA1f();
};

btnB2.onclick = () => {
  btnB2f();
};

btnC3.onclick = () => {
  btnC3f();
};
btnD4.onclick = () => {
  btnD4f();
};
btnE5.onclick = () => {
  btnE5f();
};
btnF6.onclick = () => {
  btnF6f();
};
btnG7.onclick = () => {
  btnG7f();
};
btnH8.onclick = () => {
  btnH8f();
};
btnI9.onclick = () => {
  btnI9f();
};
btnJ0.onclick = () => {
  btnJ0f();
};
