// Plantilla para alumnos - Tema07 Ejercicio 1
// Completa las funciones marcadas con TODO y ejecuta desde el navegador.

// Ejercicio 1 - raizCuadrada (plantilla)
document.getElementById('run-e1').addEventListener('click', function () {
  const v = parseFloat(document.getElementById('a-e1').value);
  const out = document.getElementById('out-e1');
  // TODO: implementar raizCuadrada(numero) 
  function raizCuadrada(numero) {
    return Math.sqrt(numero);
  }

  const res = raizCuadrada(v);
  out.textContent = `Resultado: ${res}`;

});

// Ejercicio 2 - alerta (plantilla)
document.getElementById('run-e2').addEventListener('click', function () {
  const msg = document.getElementById('a-e2').value || 'Mensaje de ejemplo';
  document.getElementById('out-e2').textContent = 'Implementa la función alerta(mensaje) para mostrar un alert en el navegador.';
  function alerta(mensaje) { alert(mensaje); }
  alerta(msg);
});

// Ejercicio 3 - new Function (plantilla)
document.getElementById('run-e3').addEventListener('click', function () {
  // TODO: usa new Function para construir y ejecutar una función que sume a y b
  const a = parseFloat(document.getElementById('a-e3a').value);
  const b = parseFloat(document.getElementById('a-e3b').value);
  const out = document.getElementById('out-e3');
  const suma = new Function('a', 'b', 'return a + b;');
  if (isNaN(a) || isNaN(b)) out.textContent = 'Introduce dos números.';
  else out.textContent = `Resultado: ${suma(a, b)}`;
});

// Ejercicio 4 - Hoisting con var (plantilla)
document.getElementById('run-e4').addEventListener('click', function () {

  // TODO: reproduce el ejemplo en el código editando esta función.
  const out = document.getElementById('out-e4');
  // Reproducimos el ejemplo: mostrar variable antes de su asignación con var
  try {
    function muestraMensaje(texto) { console.log(texto); }
    muestraMensaje(mensaje);
    var mensaje = 'Hola, mundo';
    out.innerHTML = 'Se llamó a muestraMensaje antes de declarar var mensaje. Revisa consola para ver `undefined`.';
  } catch (e) {
    out.innerHTML = `Error ejecutando ejemplo: ${e.message}`;
  }
});

// Ejercicio 5 - IIFE (plantilla)
document.getElementById('run-e5').addEventListener('click', function () {

  // TODO: crea una IIFE que haga console.log y devuelva un valor. Luego muestra el resultado aquí.
  const out = document.getElementById('out-e5');
  const retorno = (function () {
    console.log('Función autoinvocada');
    return 'IIFE ejecutada';
  })();
  out.textContent = `IIFE devolvió: ${retorno}`;

});

// Ejercicio 6 - Función anónima dividir (plantilla)
document.getElementById('run-e6').addEventListener('click', function () {

  // TODO: define y usa esa función para devolver el resultado
  const a = parseFloat(document.getElementById('a-e6a').value);
  const b = parseFloat(document.getElementById('a-e6b').value);
  const out = document.getElementById('out-e6');
  const dividir = function (a, b) { return a / b; };
  if (isNaN(a) || isNaN(b))
    out.textContent = 'Introduce dos números.';
  else if (b === 0)
    out.textContent = 'División por cero.';
  else
    out.textContent = `Resultado: ${dividir(a, b)}`;
});

// Ejercicio 7 - Función flecha multiplicar (plantilla)
document.getElementById('run-e7').addEventListener('click', function () {

  // TODO: implementa una función flecha multiplicar = 
  const a = parseFloat(document.getElementById('a-e7a').value);
  const b = parseFloat(document.getElementById('a-e7b').value);
  const out = document.getElementById('out-e7');
  const multiplicar = (x, y) => x * y;
  if (isNaN(a) || isNaN(b))
    out.textContent = 'Introduce dos números.';
  else
    out.textContent = `Resultado: ${multiplicar(a, b)}`;

});

// Ejercicio 8 - Parámetros por defecto (plantilla)
document.getElementById('run-e8').addEventListener('click', function () {

  // TODO: implementar function saludar
  const nombre = document.getElementById('a-e8').value;
  const out = document.getElementById('out-e8');
  function saludar(nombre = 'Invitado') {
    return `Hola, ${nombre}!`;
  }
  const res = saludar(nombre);
  out.textContent = res;

});

// Ejercicio 9 - Funciones anidadas (plantilla)
let contador = 0;
document.getElementById('run-e9').addEventListener('click', function () {

  // TODO: implementar función externa e interna
  const out = document.getElementById('out-e9');

  function externa() {
    contador++;
    function interna() {
      return `contador interno: ${contador}`;
    }
    return interna();
  }
  out.textContent = externa();
});

// Ejercicio 10 - Métodos nativos (plantilla)
document.getElementById('run-e10').addEventListener('click', function () {

  // TODO: usa los métodos nativos vistos (length, toUpperCase, trim, indexOf, Math.random, Date.now)
  const input = document.getElementById('a-e10').value;
  const out = document.getElementById('out-e10');

  const longitud = input.length;
  const mayusculas = input.toUpperCase();
  const recortado = input.trim();
  const indiceA = input.indexOf('a');
  const numeroAleatorio = Math.random();
  const tiempoActual = Date.now();

  out.innerHTML = `
    Longitud: ${longitud} <br>
    Mayúsculas: ${mayusculas} <br>
    Recortado: "${recortado}" <br>
    Índice de 'a': ${indiceA} <br>
    Número aleatorio: ${numeroAleatorio} <br>
    Tiempo actual (ms desde 1970): ${tiempoActual}
  `;
  
});
