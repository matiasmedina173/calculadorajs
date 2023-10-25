// Función para sumar
function sumar(a, b) {
  return a + b;
}

// Función para restar
function restar(a, b) {
  return a - b;
}

// Función para multiplicar
function multiplicar(a, b) {
  return a * b;
}

// Función para dividir
function dividir(a, b) {
  if (b === 0) {
    return "No se puede dividir por cero";
  }
  return a / b;
}

// Función principal
function calculadora() {
  let continuar = true;

  while (continuar) {
    const operacion = prompt(
      "Elige una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir"
    );
    const num1 = parseFloat(prompt("Ingresa el primer número"));
    const num2 = parseFloat(prompt("Ingresa el segundo número"));

    let resultado;

    if (operacion === "1") {
      resultado = sumar(num1, num2);
      alert("Resultado de la suma: " + resultado);
    } else if (operacion === "2") {
      resultado = restar(num1, num2);
      alert("Resultado de la resta: " + resultado);
    } else if (operacion === "3") {
      resultado = multiplicar(num1, num2);
      alert("Resultado de la multiplicación: " + resultado);
    } else if (operacion === "4") {
      resultado = dividir(num1, num2);
      alert("Resultado de la división: " + resultado);
    } else if (operacion === "5") {
      continuar = false;
    } else {
      alert("Operación no válida");
    }
  }
}

// Iniciar la calculadora
calculadora();
