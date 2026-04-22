var turno = 1;
var num1 = '0';
var num2 = '0';
var op = '+';
 
function presionarNum(n) {
 
  if (turno === 1) {
    if (num1 === '0') {
      num1 = n;
    } else {
      num1 = num1 + n;
    }
    document.getElementById('num1').textContent = num1;
 
  } else {
    if (num2 === '0') {
      num2 = n;
    } else {
      num2 = num2 + n;
    }
    document.getElementById('num2').textContent = num2;
  }
 
}
 
function presionarPunto() {
 
  if (turno === 1) {
    if (num1.indexOf('.') === -1) {
      num1 = num1 + '.';
      document.getElementById('num1').textContent = num1;
    }
  } else {
    if (num2.indexOf('.') === -1) {
      num2 = num2 + '.';
      document.getElementById('num2').textContent = num2;
    }
  }
 
}
 
function seleccionarOp(operacion) {
 
  op = operacion;
  turno = 2;
 
  if (operacion === '+') document.getElementById('operacion').textContent = '+';
  if (operacion === '-') document.getElementById('operacion').textContent = '−';
  if (operacion === '*') document.getElementById('operacion').textContent = '×';
  if (operacion === '/') document.getElementById('operacion').textContent = '÷';
  if (operacion === '%') document.getElementById('operacion').textContent = '%';
 
  document.getElementById('resultado').textContent = '—';
 
}
 
function calcular() {
 
  var a = parseFloat(num1);
  var b = parseFloat(num2);
  var resultado;
 
  if (op === '+') {
    resultado = a + b;
  }
  if (op === '-') {
    resultado = a - b;
  }
  if (op === '*') {
    resultado = a * b;
  }
  if (op === '/') {
    if (b === 0) {
      document.getElementById('resultado').textContent = 'Error';
      return;
    }
    resultado = a / b;
  }
  if (op === '%') {
    resultado = a % b;
  }
 
  document.getElementById('resultado').textContent = resultado;
 
}
 
function borrarUltimo() {
 
  if (turno === 1) {
    if (num1.length > 1) {
      num1 = num1.slice(0, -1);
    } else {
      num1 = '0';
    }
    document.getElementById('num1').textContent = num1;
 
  } else {
    if (num2.length > 1) {
      num2 = num2.slice(0, -1);
    } else {
      num2 = '0';
    }
    document.getElementById('num2').textContent = num2;
  }
 
}
 
function limpiar() {
 
  turno = 1;
  num1 = '0';
  num2 = '0';
  op = '+';
 
  document.getElementById('num1').textContent = '0';
  document.getElementById('num2').textContent = '0';
  document.getElementById('operacion').textContent = '+';
  document.getElementById('resultado').textContent = '—';
 
}