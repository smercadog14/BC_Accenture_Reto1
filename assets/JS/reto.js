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
        letrasTemp.length < 2 &&
        !letrasTemp.includes(cTemp)
      ) {
        letrasTemp = letrasTemp + cTemp;
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      cTemp = "2";
      if (
        numeroFinal.includes(numeroTemp) &&
        numeroTemp.length < cTemp &&
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
      if (cadenaFinal.includes(letrasTemp) && letrasTemp.length < 3) {
        letrasTemp = letrasTemp + "C";
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      if (numeroFinal.includes(numeroTemp) && numeroTemp.length < 3) {
        numero.innerHTML = numeroTemp + "3";
        numeroTemp = numeroTemp + "3";
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
      if (cadenaFinal.includes(letrasTemp) && letrasTemp.length < 4) {
        letrasTemp = letrasTemp + "D";
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      if (numeroFinal.includes(numeroTemp) && numeroTemp.length < 4) {
        numero.innerHTML = numeroTemp + "4";
        numeroTemp = numeroTemp + "4";
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
      if (cadenaFinal.includes(letrasTemp) && letrasTemp.length < 5) {
        letrasTemp = letrasTemp + "E";
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      if (numeroFinal.includes(numeroTemp) && numeroTemp.length < 5) {
        numero.innerHTML = numeroTemp + "5";
        numeroTemp = numeroTemp + "5";
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
      if (cadenaFinal.includes(letrasTemp) && letrasTemp.length < 6) {
        letrasTemp = letrasTemp + "F";
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      if (numeroFinal.includes(numeroTemp) && numeroTemp.length < 6) {
        numero.innerHTML = numeroTemp + "6";
        numeroTemp = numeroTemp + "6";
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
      if (cadenaFinal.includes(letrasTemp) && letrasTemp.length < 7) {
        letrasTemp = letrasTemp + "G";
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      if (numeroFinal.includes(numeroTemp) && numeroTemp.length < 7) {
        numero.innerHTML = numeroTemp + "7";
        numeroTemp = numeroTemp + "7";
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
      if (cadenaFinal.includes(letrasTemp) && letrasTemp.length < 8) {
        letrasTemp = letrasTemp + "H";
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      if (numeroFinal.includes(numeroTemp) && numeroTemp.length < 8) {
        numero.innerHTML = numeroTemp + "8";
        numeroTemp = numeroTemp + "8";
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
      if (cadenaFinal.includes(letrasTemp) && letrasTemp.length < 9) {
        letrasTemp = letrasTemp + "I";
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      if (numeroFinal.includes(numeroTemp) && numeroTemp.length < 9) {
        numero.innerHTML = numeroTemp + "9";
        numeroTemp = numeroTemp + "9";
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
      if (cadenaFinal.includes(letrasTemp) && letrasTemp.length < 10) {
        letrasTemp = letrasTemp + "J";
        letras.innerHTML = letrasTemp;
      }
    } else if (letrasTemp == cadenaFinal && numero.innerHTML !== "") {
      if (numeroFinal.includes(numeroTemp) && numeroTemp.length < 10) {
        numero.innerHTML = numeroTemp + "0";
        numeroTemp = numeroTemp + "0";
      }
    } else {
      alert("Error de orden");
    }
  } else {
    alert("Error de orden");
  }
  console.log(letrasTemp);
  console.log(letrasTemp.length);
  console.log(numeroTemp);
  console.log(numeroTemp.length);
};

// const btnA1f = () => {
//   if (op === "") {
//     letras.innerHTML = "1";
//     letrasTemp = "1";
//   } else {
//     numero.innerHTML = "1";
//     numeroTemp = "1";
//   }
// };

// const btnSumaf = () => {
//   if (num1Temp === "") {
//   } else {
//     op = "+";
//   }
// };

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
