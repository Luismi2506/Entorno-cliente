/* ==============================================================
   Ejercicio 1 – Selectores y modificación (EJEMPLO COMPLETADO)
   ============================================================== */
const contenido = document.getElementById('contenido');
const btnEj1 = document.getElementById('btn-ej1');

btnEj1.addEventListener('click', function () {
    const primerParrafo = contenido.querySelector('p');
    primerParrafo.textContent = 'Este texto ha sido modificado con JavaScript';

    const segundoParrafo = contenido.querySelectorAll('p')[1];
    if (segundoParrafo) segundoParrafo.style.color = 'blue';

    const todosLosParrafos = contenido.querySelectorAll('p');
    todosLosParrafos.forEach(p => p.classList.add('resaltado'));
});

/* ============================================================
   Ejercicio 2 – Crear y eliminar elementos del DOM
   ============================================================ */
const contenedorEj2 = document.getElementById('contenedor-ej2');
const btnAdd = document.getElementById('btn-add');
const btnRemove = document.getElementById('btn-remove');

btnAdd.addEventListener('click', function () {
    const nuevo = document.createElement('p');
    nuevo.textContent = 'Nuevo párrafo añadido';
    nuevo.classList.add('mb-2');
    contenedorEj2.appendChild(nuevo);
    aplicarHover(nuevo); // aplicar hover del Ejercicio 3
});

btnRemove.addEventListener('click', function () {
    const parrafos = contenedorEj2.querySelectorAll('p');
    if (parrafos.length > 0) parrafos[parrafos.length - 1].remove();
});

/* ==========================================
   Ejercicio 3 – Eventos de ratón (hover)
   ========================================== */
function entrarHover(e) {
    e.target.style.backgroundColor = '#e7f5ff';
}

function salirHover(e) {
    e.target.style.backgroundColor = '';
}

function aplicarHover(parrafo) {
    parrafo.addEventListener('mouseover', entrarHover);
    parrafo.addEventListener('mouseout', salirHover);
}

// Aplicar hover a los párrafos iniciales
document.querySelectorAll('p').forEach(aplicarHover);

/* ======================================================
   Ejercicio 4 – Trabajar con inputs y formularios
   ====================================================== */
const inputTexto = document.getElementById('nuevoTexto');
const btnCambiar = document.getElementById('btn-cambiar');
const msgError = document.getElementById('msg-ej4');

btnCambiar.addEventListener('click', function () {
    const texto = inputTexto.value.trim();
    if (texto === '') {
        msgError.classList.remove('d-none');
        inputTexto.focus();
    } else {
        msgError.classList.add('d-none');
        const primerParrafo = contenido.querySelector('p');
        if (primerParrafo) primerParrafo.textContent = texto;
        inputTexto.value = '';
    }
});

/* ===================================================
   Ejercicio 5 – Lista de tareas (To-Do List)
   =================================================== */
const tareaInput = document.getElementById('tareaInput');
const btnTarea = document.getElementById('btn-tarea');
const btnBorrarCompletadas = document.getElementById('btn-borrar-completadas');
const listaTareas = document.getElementById('listaTareas');

btnTarea.addEventListener('click', function () {
    const texto = tareaInput.value.trim();
    if (texto === '') return;

    const li = document.createElement('li');
    li.textContent = texto;
    li.classList.add('py-1');

    li.addEventListener('click', function () {
        li.classList.toggle('completada');
    });

    listaTareas.appendChild(li);
    tareaInput.value = '';
    tareaInput.focus();
});

btnBorrarCompletadas.addEventListener('click', function () {
    const completadas = listaTareas.querySelectorAll('.completada');
    completadas.forEach(el => el.remove());
});
