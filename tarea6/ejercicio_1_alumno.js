/* ===================================
   TEMA 6 - OBJETOS Y ARRAYS
   EJERCICIOS PARA ESTUDIANTES
   ===================================

   INSTRUCCIONES:
   1. Completa cada función siguiendo los comentarios TODO
   2. No modifiques los nombres de las funciones ni variables principales
   3. Usa solo JavaScript vanilla (sin librerías)
   4. Todas las salidas deben mostrarse en el DOM usando innerHTML
   5. Testea cada ejercicio antes de continuar

   RECORDATORIO DE SINTAXIS:
   - Usar function nombreFuncion() {} (NO arrow functions)
   - Usar var para declarar variables
   - Usar document.getElementById() para seleccionar elementos
   - Usar innerHTML para mostrar resultados en el DOM
*/

// ===================================
// EJERCICIO 1: CREAR OBJETO ESTUDIANTE
// ===================================

function ejercicio1() {

    var estudiante = {
        nombre: "María",
        apellidos: "García López",
        edad: 20,
        curso: "2º DAW",

        mostrarInfo: function () {
            // Retornar HTML con la información del estudiante
            return `
                <h3>Información del Estudiante</h3>
                <p><strong>Nombre:</strong> ${this.nombre}</p>
                <p><strong>Apellidos:</strong> ${this.apellidos}</p>
                <p><strong>Edad:</strong> ${this.edad}</p>
                <p><strong>Curso:</strong> ${this.curso}</p>
            `;
        }
    };

    // Mostrar el resultado en el DOM
    document.getElementById("resultado-ej1").innerHTML = estudiante.mostrarInfo();
}


// ===================================
// EJERCICIO 2: ARRAY DE COLORES
// ===================================

// Variable global para el array de colores
var colores = ["rojo", "azul", "verde"];

function agregarColor() {
    // TODO: Obtener el valor del input con id "color-input"
    // TODO: Agregar el color al array usando push()
    // TODO: Limpiar el input
    // TODO: Mostrar mensaje de confirmación
    var colorInput = document.getElementById("color-input");
    var nuevoColor = colorInput.value.trim();

    if (nuevoColor !== "") {
        colores.push(nuevoColor);
        colorInput.value = "";
        document.getElementById("resultado-ej2").innerHTML =
            "<div class='alert alert-success'>Color '" + nuevoColor + "' agregado correctamente.</div>";
    } else {
        document.getElementById("resultado-ej2").innerHTML =
            "<div class='alert alert-danger'>Por favor, ingresa un color válido.</div>";
    }
}

function eliminarUltimoColor() {
    // TODO: Eliminar el último elemento del array usando pop()
    // TODO: Mostrar mensaje indicando qué color se eliminó
    // TODO: Si el array está vacío, mostrar mensaje apropiado
    if (colores.length > 0) {
        var colorEliminado = colores.pop();
        document.getElementById("resultado-ej2").innerHTML =
            "<div class='alert alert-warning'>Color '" + colorEliminado + "' eliminado del array.</div>";
    } else {
        document.getElementById("resultado-ej2").innerHTML =
            "<div class='alert alert-danger'>El array de colores está vacío. No hay colores para eliminar.</div>";
    }
}

function mostrarColores() {
    // TODO: Mostrar todos los colores del array
    // TODO: Crear HTML con la lista de colores
    // Sugerencia: usar un bucle for para crear la lista

    var html = "<h5>Lista de Colores:</h5><ul>";
    // TODO: Completar el bucle para mostrar los colores
    for (var i = 0; i < colores.length; i++) {
        html += "<li>" + colores[i] + "</li>";
    }
    html += "</ul>";

    document.getElementById("resultado-ej2").innerHTML = html;
}

// ===================================
// EJERCICIO 3: CATÁLOGO DE PRODUCTOS
// ===================================

var productos = []; // Array que contendrá los objetos producto

function cargarProductos() {
    // TODO: Crear array con al menos 5 objetos producto
    // Cada producto debe tener: nombre, precio, categoria
    productos = [
        // TODO: Completar con objetos producto
        // Ejemplo: { nombre: "Laptop", precio: 899, categoria: "Electrónicos" }
        { nombre: "Monster blanco", precio: 899, categoria: "Electrónicos" },
        { nombre: "Camiseta", precio: 25, categoria: "Ropa" },
        { nombre: "Smartphone", precio: 699, categoria: "Electrónicos" },
        { nombre: "Libro", precio: 15, categoria: "Literatura" },
        { nombre: "Zapatos", precio: 80, categoria: "Calzado" }
    ];

    mostrarProductos(productos);
}

function ordenarPorPrecio() {
    // TODO: Ordenar el array productos por precio de menor a mayor
    // Pista: usar el método sort() con función comparadora
    productos.sort(function (a, b) {
        return a.precio - b.precio;
    });
    mostrarProductos(productos);

}

function filtrarProductosCaros() {
    // TODO: Filtrar productos con precio mayor a 50€
    // Pista: usar el método filter()
    var productosCaros = []; // TODO: Implementar el filtro
    productosCaros = productos.filter(function (producto) {
        return producto.precio > 50;
    });
    mostrarProductos(productosCaros);
}

function mostrarProductos(arrayProductos) {
    // TODO: Mostrar los productos en formato HTML
    // Crear tarjetas o lista con nombre, precio y categoría

    var html = "";
    if (arrayProductos.length === 0) {
        html = "<div class='alert alert-warning'>No hay productos para mostrar</div>";
    }
    // TODO: Recorrer el array y crear HTML para cada producto
    for (var i = 0; i < arrayProductos.length; i++) {
        html += `
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">${arrayProductos[i].nombre}</h5>
                    <p class="card-text"><strong>Precio:</strong> €${arrayProductos[i].precio}</p>
                    <p class="card-text"><strong>Categoría:</strong> ${arrayProductos[i].categoria}</p>
                </div>
            </div>
        `;
    }

    document.getElementById("resultado-ej3").innerHTML = html;
}

// ===================================
// EJERCICIO 4: ESTUDIANTE CON NOTAS
// ===================================

var estudianteNotas = {
    nombre: "Carlos Ruiz",
    notas: [],

    agregarNota: function (nota) {
        // TODO: Validar que la nota esté entre 0 y 10
        if (nota < 0 || nota > 10) {
            document.getElementById("resultado-ej4").innerHTML =
                "<div class='alert alert-danger'>La nota debe estar entre 0 y 10.</div>";
            return;
        }
        // TODO: Agregar la nota al array de notas
        this.notas.push(nota);

        // TODO: Mostrar mensaje de confirmación
        document.getElementById("resultado-ej4").innerHTML =
            "<div class='alert alert-success'>Nota " + nota + " agregada correctamente.</div>";
    },

    calcularPromedio: function () {
        // TODO: Calcular el promedio de todas las notas
        if (this.notas.length === 0) {
            return 0;
        }
        var suma = 0;
        for (var i = 0; i < this.notas.length; i++) {
            suma += this.notas[i];
        }
        var promedio = suma / this.notas.length;
        // TODO: Retornar el promedio redondeado a 2 decimales
        return promedio.toFixed(2);
        // Pista: usar reduce() o un bucle for
    },

    mostrarNotas: function () {
        // TODO: Retornar HTML con todas las notas
        if (this.notas.length === 0) {
            return "<div class='alert alert-warning'>No hay notas para mostrar.</div>";
        }
        var html = "<h5>Notas del Estudiante:</h5><ul>";
        for (var i = 0; i < this.notas.length; i++) {
            html += "<li>" + this.notas[i] + "</li>";
        }
        html += "</ul>";
        return html;
        // TODO: Incluir el promedio si hay notas
        // Cambiar esta línea 
    }
};

function agregarNota() {
    // TODO: Obtener el valor del input de nota
    // TODO: Convertir a número
    // TODO: Llamar al método agregarNota del objeto
    // TODO: Limpiar el input
    // TODO: Actualizar la visualización
    var notaInput = document.getElementById("nota-input");
    var nuevaNota = parseFloat(notaInput.value);

    estudianteNotas.agregarNota(nuevaNota);
    notaInput.value = "";
    mostrarNotasEstudiante();
}

function calcularPromedio() {
    // TODO: Llamar al método calcularPromedio
    // TODO: Mostrar el resultado en el DOM
    var promedio = estudianteNotas.calcularPromedio();
    document.getElementById("resultado-ej4").innerHTML +=
        "<div class='alert alert-info'>Promedio de notas: " + promedio + "</div>";
}

function mostrarNotasEstudiante() {
    // TODO: Llamar al método mostrarNotas
    // TODO: Mostrar el resultado en el DOM
    var notasHTML = estudianteNotas.mostrarNotas();
    document.getElementById("resultado-ej4").innerHTML += notasHTML;

}

// ===================================
// EJERCICIO 5: GESTIÓN DE EMPLEADOS
// ===================================

var empleados = [];

function cargarEmpleados() {
    // TODO: Crear array con al menos 6 objetos empleado
    // Cada empleado: nombre, departamento, salario, antiguedad
    empleados = [
        // TODO: Completar con datos de empleados
        { nombre: "Ana Pérez", departamento: "Ventas", salario: 3200, antiguedad: 5 },
        { nombre: "Luis Gómez", departamento: "Marketing", salario: 2800, antiguedad: 3 },
        { nombre: "Marta Sánchez", departamento: "IT", salario: 4000, antiguedad: 7 },
        { nombre: "Jorge Ramírez", departamento: "Recursos Humanos", salario: 2500, antiguedad: 2 },
        { nombre: "Sofía Torres", departamento: "Ventas", salario: 3100, antiguedad: 4 },
        { nombre: "Carlos Fernández", departamento: "IT", salario: 4500, antiguedad: 6 }
    ];

    mostrarEmpleados(empleados);
}

function buscarPorDepartamento() {
    // TODO: Obtener el departamento del input
    // TODO: Filtrar empleados por departamento
    // TODO: Mostrar los resultados
    departamento = document.getElementById("departamento-input").value.trim();
    empleadosDepto = empleados.filter(function (empleado) {
        return empleado.departamento.toLowerCase() === departamento.toLowerCase();
    });

    mostrarEmpleados(empleadosDepto);
}

function filtrarSalarioAlto() {
    // TODO: Filtrar empleados con salario > 3000€
    var empleadosAltoSalario = empleados.filter(function (empleado) {
        return empleado.salario > 3000;
    });

    mostrarEmpleados(empleadosAltoSalario);
}

function mostrarEmpleados(arrayEmpleados) {
    // TODO: Mostrar empleados en formato HTML
    // Incluir nombre, departamento, salario

    html = "";
    if (arrayEmpleados.length === 0) {
        html = "<div class='alert alert-warning'>No hay empleados para mostrar</div>";
    }

    // TODO: Crear HTML para cada empleado
    for (var i = 0; i < arrayEmpleados.length; i++) {
        html += `
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">${arrayEmpleados[i].nombre}</h5>
                    <p class="card-text"><strong>Departamento:</strong> ${arrayEmpleados[i].departamento}</p>
                    <p class="card-text"><strong>Salario:</strong> €${arrayEmpleados[i].salario}</p>
                </div>
            </div>
        `;
    }

    document.getElementById("resultado-ej5").innerHTML = html;
}

// ===================================
// EJERCICIO 6: MÉTODOS AVANZADOS DE ARRAYS
// ===================================

var ciudades = [];

function crearArrayCiudades() {
    // TODO: Crear array con ciudades españolas
    ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao", "Málaga"];

    // TODO: Mostrar el array original
    var html = "<h5>Ciudades originales:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function eliminarDelMedio() {
    // TODO: Usar splice para eliminar elementos del medio
    // TODO: Mostrar qué elementos se eliminaron
    // TODO: Mostrar el array resultante
    var medio = Math.floor(ciudades.length / 2);
    var eliminados = [];

    if (ciudades.length % 2 === 0) {
        eliminados = ciudades.splice(medio - 1, 2);
    } else {
        eliminados = ciudades.splice(medio, 1);
    }

    var html = "<h5>Elementos eliminados:</h5>" + eliminados.join(", ") +
        "<h5>Array resultante:</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function extraerConSlice() {
    // TODO: Usar slice para extraer una porción del array
    // TODO: Mostrar la porción extraída
    // TODO: Mostrar que el array original no se modifica
    var porcion = ciudades.slice(1, 4); // Extraer desde índice 1 hasta 3

    var html = "<h5>Porción extraída (índices 1 a 3):</h5>" + porcion.join(", ") +
        "<h5>Array original (sin modificar):</h5>" + ciudades.join(", ");
    document.getElementById("resultado-ej6").innerHTML = html;
}

function buscarMadrid() {
    // TODO: Usar find() para buscar "Madrid"
    // TODO: Usar indexOf() para encontrar su posición
    // TODO: Mostrar los resultados
    var encontrado = ciudades.find(function (ciudad) {
        return ciudad === "Madrid";
    });

    var indice = ciudades.indexOf("Madrid");

    var html = "";
    if (encontrado) {
        html += "<div class='alert alert-success'>Ciudad encontrada: " + encontrado + "</div>";
        html += "<div class='alert alert-info'>Índice de 'Madrid': " + indice + "</div>";
    } else {
        html += "<div class='alert alert-danger'>'Madrid' no se encontró en el array.</div>";
    }

    document.getElementById("resultado-ej6").innerHTML = html;

}

// ===================================
// EJERCICIO 7: CONSTRUCTOR DE VEHÍCULOS
// ===================================

// TODO: Crear función constructora Vehiculo
function Vehiculo(marca, modelo, año) {
    // TODO: Asignar propiedades usando this
    // TODO: Crear método acelerar() que incremente la velocidad
    // TODO: Crear método mostrarInfo() que retorne información
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    this.velocidad = 0;

    this.acelerar = function () {
        this.velocidad += 10;
    };

    this.mostrarInfo = function () {
        return `
            <h5>Información del Vehículo</h5>
            <p><strong>Marca:</strong> ${this.marca}</p>
            <p><strong>Modelo:</strong> ${this.modelo}</p>
            <p><strong>Año:</strong> ${this.año}</p>
            <p><strong>Velocidad Actual:</strong> ${this.velocidad} km/h</p>
        `;
    };
}

var vehiculos = [];

function crearVehiculos() {
    // TODO: Crear varios objetos usando el constructor
    // TODO: Agregar al array vehiculos
    vehiculos = [
        new Vehiculo("Toyota", "Corolla", 2020),
        new Vehiculo("Honda", "Civic", 2019),
        new Vehiculo("Ford", "Focus", 2018)
    ];

    mostrarInfoVehiculos();
}

function acelerarTodos() {
    // TODO: Llamar al método acelerar() de todos los vehículos
    // TODO: Actualizar la visualización
    for (var i = 0; i < vehiculos.length; i++) {
        vehiculos[i].acelerar();
    }

    mostrarInfoVehiculos();
}

function mostrarInfoVehiculos() {
    // TODO: Mostrar información de todos los vehículos
    var html = "";
    if (vehiculos.length === 0) {
        html = "<div class='alert alert-warning'>No hay vehículos para mostrar</div>";
    }
    // TODO: Recorrer array y mostrar info de cada vehículo
    for (var i = 0; i < vehiculos.length; i++) {
        html += vehiculos[i].mostrarInfo();
    }

    document.getElementById("resultado-ej7").innerHTML = html;
}

// ===================================
// EJERCICIO 8: MATRIZ DE NÚMEROS
// ===================================

var matriz = [];

function crearMatriz() {
    // TODO: Crear matriz 3x3 con números aleatorios
    // Pista: usar bucles anidados y Math.random()
    matriz = [];
    for (var i = 0; i < 3; i++) {
        var fila = [];
        for (var j = 0; j < 3; j++) {
            var numeroAleatorio = Math.floor(Math.random() * 100); // Números entre 0 y 99
            fila.push(numeroAleatorio);
        }
        matriz.push(fila);
    }

    mostrarMatriz();
}

function sumarDiagonal() {
    // TODO: Calcular la suma de la diagonal principal
    // TODO: Mostrar el resultado
    var suma = 0;
    for (var i = 0; i < 3; i++) {
        suma += matriz[i][i];
    }

    document.getElementById("resultado-ej8").innerHTML +=
        "<div class='alert alert-info'>Suma de la diagonal principal: " + suma + "</div>";
}

function mostrarMatriz() {
    // TODO: Mostrar la matriz en formato tabla HTML
    var html = "<table class='table table-bordered'><tbody>";

    // TODO: Crear filas y celdas de la tabla
    for (var i = 0; i < matriz.length; i++) {
        html += "<tr>";
        for (var j = 0; j < matriz[i].length; j++) {
            html += "<td>" + matriz[i][j] + "</td>";
        }
        html += "</tr>";
    }

    html += "</table>";
    document.getElementById("resultado-ej8").innerHTML = html;
}

// ===================================
// EJERCICIO 9: MÉTODOS FUNCIONALES
// ===================================

var numeros = [];

function crearArrayNumeros() {
    // TODO: Crear array con números del 1 al 10
    numeros = []; // TODO: Completar
    for (var i = 1; i <= 10; i++) {
        numeros.push(i);
    }

    mostrarArray("Array original", numeros);
}

function duplicarConMap() {
    // TODO: Usar map() para duplicar todos los números
    duplicados = numeros.map(function (num) {
        return num * 2;
    });

    mostrarArray("Números duplicados", duplicados);
}

function filtrarPares() {
    // TODO: Usar filter() para obtener solo números pares
    var pares = numeros.filter(function (num) {
        return num % 2 === 0;
    });

    mostrarArray("Números pares", pares);
}

function sumarConReduce() {
    // TODO: Usar reduce() para sumar todos los números
    var suma = numeros.reduce(function (acumulador, num) {
        return acumulador + num;
    }, 0);

    document.getElementById("resultado-ej9").innerHTML +=
        "<div class='alert alert-success'>Suma total: " + suma + "</div>";
}

function mostrarArray(titulo, array) {
    var html = "<h6>" + titulo + ":</h6>" + array.join(", ") + "<br>";
    document.getElementById("resultado-ej9").innerHTML = html;
}

// ===================================
// EJERCICIO 10: BIBLIOTECA DE LIBROS
// ===================================

var biblioteca = [];

function agregarLibro() {
    // TODO: Obtener valores de los inputs
    var titulo = ""; // TODO: Obtener del input
    var autor = ""; // TODO: Obtener del input
    var año = 0; // TODO: Obtener y convertir a número
    var genero = ""; // TODO: Obtener del select
    titulo = document.getElementById("libro-titulo").value.trim();
    autor = document.getElementById("libro-autor").value.trim();
    año = parseInt(document.getElementById("libro-year").value);
    genero = document.getElementById("libro-genero").value;

    // TODO: Validar que todos los campos estén completos
    if (titulo === "" || autor === "" || isNaN(año) || genero === "") {
        document.getElementById("resultado-ej10").innerHTML =
            "<div class='alert alert-danger'>Por favor, completa todos los campos.</div>";
        return;
    }

    // TODO: Crear objeto libro y agregarlo a la biblioteca
    var libro = {
        // TODO: Completar propiedades
        titulo: titulo,
        autor: autor,
        año: año,
        genero: genero
    };

    // TODO: Limpiar los inputs
    document.getElementById("libro-titulo").value = "";
    document.getElementById("libro-autor").value = "";
    document.getElementById("libro-year").value = "";
    document.getElementById("libro-genero").value = "";
    // TODO: Mostrar mensaje de confirmación
    // TODO: Actualizar visualización
    biblioteca.push(libro);
    document.getElementById("resultado-ej10").innerHTML =
        "<div class='alert alert-success'>Libro '" + titulo + "' agregado a la biblioteca.</div>";
    mostrarBiblioteca();
}

function eliminarLibro(indice) {
    var eliminado = biblioteca.splice(indice, 1);
    document.getElementById("resultado-ej10").innerHTML =
        "<div class='alert alert-warning'>Libro '" + eliminado[0].titulo + "' eliminado.</div>";
    mostrarBiblioteca();
}

function mostrarBiblioteca() {
    // TODO: Mostrar todos los libros de la biblioteca
    mostrarLibros(biblioteca);
}

function ordenarPorTitulo() {
    // TODO: Ordenar libros por título alfabéticamente
    // TODO: Implementar sort
    var librosOrdenados = biblioteca.slice(); // Crear copia del array
    librosOrdenados.sort(function (a, b) {
        if (a.titulo < b.titulo) return -1;
        if (a.titulo > b.titulo) return 1;
        return 0;
    });

    mostrarLibros(librosOrdenados);
}

function filtrarPorGenero() {
    // TODO: Obtener género seleccionado
    // TODO: Filtrar libros por género
    var librosFiltrados = []; // TODO: Implementar filter
    var generoSeleccionado = document.getElementById("btn-filtrar-genero").value;

    librosFiltrados = biblioteca.filter(function (libro) {
        return libro.genero === generoSeleccionado;
    });

    mostrarLibros(librosFiltrados);
}

function librosRecientes() {
    // TODO: Filtrar libros publicados después del 2020
    var recientes = []; // TODO: Implementar filter
    recientes = biblioteca.filter(function (libro) {
        return libro.año > 2020;
    });

    mostrarLibros(recientes);
}

function mostrarLibros(arrayLibros) {
    // TODO: Mostrar libros en formato de tarjetas HTML
    var html = "";

    if (arrayLibros.length === 0) {
        html = "<div class='alert alert-warning'>No hay libros para mostrar</div>";
    } else {
        // TODO: Crear HTML para cada libro
    }
    for (var i = 0; i < arrayLibros.length; i++) {
        html += `
            <div class="card mb-2">
                <div class="card-body">
                    <h5 class="card-title">${arrayLibros[i].titulo}</h5>
                    <p class="card-text"><strong>Autor:</strong> ${arrayLibros[i].autor}</p>
                    <p class="card-text"><strong>Año de Publicación:</strong> ${arrayLibros[i].año}</p>
                    <p class="card-text"><strong>Género:</strong> ${arrayLibros[i].genero}</p>
                    <button class="btn btn-danger btn-sm" onclick="eliminarLibro(${i})">
                            Eliminar libro
                        </button>
                </div>
            </div>
        `;
    }

    document.getElementById("resultado-ej10").innerHTML = html;
}

// ===================================
// EVENT LISTENERS - SOLO FALTAN LOS DEL EJERCICIO 10
// ===================================

document.addEventListener('DOMContentLoaded', function () {
    // Ejercicio 1
    document.getElementById("btn-ej1").addEventListener("click", ejercicio1);

    // Ejercicio 2
    document.getElementById("btn-agregar-color").addEventListener("click", agregarColor);
    document.getElementById("btn-eliminar-ultimo").addEventListener("click", eliminarUltimoColor);
    document.getElementById("btn-mostrar-colores").addEventListener("click", mostrarColores);

    // Ejercicio 3
    document.getElementById("btn-cargar-productos").addEventListener("click", cargarProductos);
    document.getElementById("btn-ordenar-precio").addEventListener("click", ordenarPorPrecio);
    document.getElementById("btn-filtrar-caros").addEventListener("click", filtrarProductosCaros);

    // Ejercicio 4
    document.getElementById("btn-agregar-nota").addEventListener("click", agregarNota);
    document.getElementById("btn-calcular-promedio").addEventListener("click", calcularPromedio);
    document.getElementById("btn-mostrar-notas").addEventListener("click", mostrarNotasEstudiante);

    // Ejercicio 5
    document.getElementById("btn-cargar-empleados").addEventListener("click", cargarEmpleados);
    document.getElementById("btn-buscar-depto").addEventListener("click", buscarPorDepartamento);
    document.getElementById("btn-salario-alto").addEventListener("click", filtrarSalarioAlto);

    // Ejercicio 6
    document.getElementById("btn-crear-ciudades").addEventListener("click", crearArrayCiudades);
    document.getElementById("btn-eliminar-medio").addEventListener("click", eliminarDelMedio);
    document.getElementById("btn-extraer-slice").addEventListener("click", extraerConSlice);
    document.getElementById("btn-buscar-ciudad").addEventListener("click", buscarMadrid);

    // Ejercicio 7
    document.getElementById("btn-crear-vehiculos").addEventListener("click", crearVehiculos);
    document.getElementById("btn-acelerar-todos").addEventListener("click", acelerarTodos);
    document.getElementById("btn-info-vehiculos").addEventListener("click", mostrarInfoVehiculos);

    // Ejercicio 8
    document.getElementById("btn-crear-matriz").addEventListener("click", crearMatriz);
    document.getElementById("btn-sumar-diagonal").addEventListener("click", sumarDiagonal);
    document.getElementById("btn-mostrar-matriz").addEventListener("click", mostrarMatriz);

    // Ejercicio 9
    document.getElementById("btn-crear-numeros").addEventListener("click", crearArrayNumeros);
    document.getElementById("btn-duplicar-map").addEventListener("click", duplicarConMap);
    document.getElementById("btn-filtrar-pares").addEventListener("click", filtrarPares);
    document.getElementById("btn-sumar-reduce").addEventListener("click", sumarConReduce);

    // Ejercicio 10
    // TODO: Añadir event listeners para los botones del ejercicio 10
    document.getElementById("btn-agregar-libro").addEventListener("click", agregarLibro);
    document.getElementById("btn-mostrar-biblioteca").addEventListener("click", mostrarBiblioteca);
    document.getElementById("btn-ordenar-titulo").addEventListener("click", ordenarPorTitulo);
    document.getElementById("btn-filtrar-genero").addEventListener("click", filtrarPorGenero);
    document.getElementById("btn-libros-recientes").addEventListener("click", librosRecientes);

});

/* ===================================
   FIN DEL ARCHIVO
   
   RECORDATORIO FINAL:
   - Completa cada TODO siguiendo las instrucciones
   - Usa sintaxis tradicional de JavaScript (no ES6+)
   - Testea cada función antes de continuar
   - Todas las salidas deben ir al DOM, no a la consola
   - ¡Practica y diviértete programando!
   ===================================
*/