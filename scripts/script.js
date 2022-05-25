function inserir(num) {
  if (document.getElementById("resultado").innerHTML.length >= 17) {
    return;
  }
  var numero = document.getElementById("resultado").innerHTML;
  document.getElementById("resultado").innerHTML = numero + num;
}

function limpar() {
  document.getElementById("resultado").innerHTML = "";
}

function calcular() {
  var resultado = document.getElementById("resultado").innerHTML;

  if (!resultado) {
    return;
  }
  var ehDivisao = false;
  var indexDaDivisao;

  for (let i = 0; i < resultado.length; i++) {
    if (resultado[i] == "/") {
      ehDivisao = true;
      indexDaDivisao = parseInt(i);
    }
  }

  if (ehDivisao) {
    if (
      (resultado[indexDaDivisao + 1] == 0 ||
        resultado[indexDaDivisao + 1] == "0") && (resultado[indexDaDivisao + 2] != '.')
    ) {
      window.alert("Não é possivel dividir por 0");
      return;
    }
  }

  document.getElementById("resultado").innerHTML = eval(resultado);
}

function arredondar() {
  document.getElementById("resultado").innerHTML = Math.round(
    document.getElementById("resultado").innerHTML
  );
}

function raiz() {
  if (document.getElementById("resultado").innerHTML < 0) {
    window.alert("Não existe raíz quadrada de número negativo");
    return;
  }
  document.getElementById("resultado").innerHTML = Math.sqrt(
    document.getElementById("resultado").innerHTML
  );
}

function somarMemoria() {
  if (document.getElementById("resultado").innerHTML == "") {
    return;
  }
  if (document.getElementById("memoria").innerHTML == "nada") {
    document.getElementById("memoria").innerHTML =
      document.getElementById("resultado").innerHTML;
    return;
  }
  var numMemoria = parseFloat(document.getElementById("memoria").innerHTML);
  numMemoria += parseFloat(document.getElementById("resultado").innerHTML);

  document.getElementById("memoria").innerHTML = numMemoria;
}

function subtrairMemoria() {
  if (document.getElementById("resultado").innerHTML == "") {
    return;
  }
  if (document.getElementById("memoria").innerHTML == "nada") {
    document.getElementById("memoria").innerHTML =
      document.getElementById("resultado").innerHTML;
    return;
  }
  var numMemoria = parseFloat(document.getElementById("memoria").innerHTML);
  numMemoria -= parseFloat(document.getElementById("resultado").innerHTML);

  document.getElementById("memoria").innerHTML = numMemoria;
}

function pegarMemoria() {
  if (document.getElementById("memoria").innerHTML == "nada") {
    return;
  }
  document.getElementById("resultado").innerHTML =
    document.getElementById("memoria").innerHTML;
}

function limparMemoria() {
  document.getElementById("memoria").innerHTML = "nada";
}

const mapaTeclado = {
  0: "tecla0",
  1: "tecla1",
  2: "tecla2",
  3: "tecla3",
  4: "tecla4",
  5: "tecla5",
  6: "tecla6",
  7: "tecla7",
  8: "tecla8",
  9: "tecla9",
  C: "limparCalculo",
  "/": "operadorDividir",
  "*": "operadorMultiplicar",
  "-": "operadorSubtrair",
  "+": "operadorSomar",
  ",": "decimal",
  "=": "igual",
  Backspace: "backspace",
  Escape: "limparCalculo",
  "(": "abre",
  ")": "fecha",
};

const mapearTeclado = (evento) => {
  const tecla = evento.key;

  const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) != -1;
  if (teclaPermitida()) {
    document.getElementById(mapaTeclado[tecla]).click();
  }
};

document.addEventListener("keydown", mapearTeclado);
