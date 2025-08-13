// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Aquí deberás desarrollar la lógica para resolver el problema.

// Declaramos la variable que va a almacenar a los amigos
let amigos = [];

// Función que mostrará los amigos en la tabla
function agregarAmigo() {
    let input = document.getElementById("amigo");

    // Obtenemos el valor del input y eliminamos los espacios en blanco al inicio y al final
    let nombre = input.value.trim();

    // Validamos que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Expresión regular para permitir solo letras y espacios (incluye acentos y ñ)
    let unicoTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!unicoTexto.test(nombre)) {
        alert("Ingrese un nombre válido, sin números ni caracteres especiales.");
        return;
    }

    // Verificamos si el nombre ya existe (sin importar mayúsculas/minúsculas)
    let nombreMinuscula = nombre.toLowerCase();
    let existe = amigos.some(amigo => amigo.toLowerCase() === nombreMinuscula);
    if (existe) {
        alert("Este amigo ya está en la lista");
        return;
    }

    // Agregamos el nombre y limpiamos el input
    amigos.push(nombre);
    input.value = '';

    // Mostramos la lista actualizada
    mostrarListaAmigos();
}

// Función que dibuja la lista en el HTML
function mostrarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = '';

    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    let lista = document.getElementById("listaAmigos");

    // Validación: al menos 2 amigos
    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos para sortear</li>";
        return;
    }

    if (amigos.length < 2) {
        resultado.innerHTML = "<li>Debe ingresar al menos dos amigos para sortear.</li>";
        return;
    }

    // Elegimos un amigo aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoGanador = amigos[indiceAleatorio];

    // Mostramos el resultado
    resultado.innerHTML = `<li>El amigo seleccionado es: ${amigoGanador}</li>`;

    // Limpiamos la lista y el array
    lista.innerHTML = '';
    amigos = [];
