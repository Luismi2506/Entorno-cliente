const regex = {
    nombre: /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/,
    edad: /^\d+$/
};

const ayudas = {
    nombre: "Tienes que poner solo letras y espacios, no es tan dificil",
    email: "Ponme un correo valido anda",
    password: "A ver ponme 8 carácteres, 1 numero, 1 mayuscula y un símbolo especial",
    edad: "Solo numeros anda que eres muy listo tú"
};

// 🔹 Al cargar la página, mostramos el saludo si existe en localStorage
window.onload = function () {
    const nombreGuardado = localStorage.getItem("nombreUsuario");
    if (nombreGuardado) {
        document.getElementById("saludoPrincipal").innerText =
            "Epa aquí está de vuelta mi " + nombreGuardado;
        document.getElementById("nombre").value = nombreGuardado;
        document.getElementById("recordarme").checked = true;
    }
};

function mostrarAyuda(campo) {
    document.getElementById("ayuda-" + campo).innerText = ayudas[campo];
}

function ocultarAyuda(campo) {
    document.getElementById("ayuda-" + campo).innerText = "";
}

function validarCampo(nombreCampo) {
    const campoEntrada = document.getElementById(nombreCampo);
    const mensajeCampo = document.getElementById("msg-" + nombreCampo);
    const esValido = regex[nombreCampo].test(campoEntrada.value);

    if (esValido) {
        campoEntrada.classList.remove("incorrecto");
        campoEntrada.classList.add("correcto");
        mensajeCampo.innerHTML = "<span class='ok'>Correcto</span>";
    } else {
        campoEntrada.classList.remove("correcto");
        campoEntrada.classList.add("incorrecto");
        mensajeCampo.innerHTML = "<span class='error'>Formato incorrecto</span>";
    }

    return esValido;
}

// 🔹 Guardar o borrar usuario según checkbox
document.getElementById("miFormulario").addEventListener("submit", function (evento) {
    const listaCampos = ["nombre", "email", "password", "edad"];
    let formularioValido = true;

    listaCampos.forEach(campo => {
        if (!validarCampo(campo)) formularioValido = false;
    });

    if (!formularioValido) {
        evento.preventDefault();
        alert("Arregla todo o el formulario no se enviará anda, que vas mu rapido tú");
        return;
    }

    evento.preventDefault(); // Evitamos recarga para ver resultado

    const nombre = document.getElementById("nombre").value;

    if (document.getElementById("recordarme").checked) {
        localStorage.setItem("nombreUsuario", nombre); // Guardamos en navegador
        document.getElementById("saludoPrincipal").innerText = "Epa aquí está de vuelta mi " + nombre;
        alert("Usuario guardado en el navegador!");
    } else {
        localStorage.removeItem("nombreUsuario"); // Borramos si no se quiere recordar
        document.getElementById("saludoPrincipal").innerText = "";
        alert("Formulario enviado sin recordar usuario!");
    }
});

// 🔹 Botón eliminar
document.getElementById("btnEliminar").onclick = function () {
    localStorage.removeItem("nombreUsuario");
    document.getElementById("saludoPrincipal").innerText = "";
    document.getElementById("recordarme").checked = false;
    alert("Usuario eliminado del navegador");
};
