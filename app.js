// Variable que almacena los nombres de los amigos en una lista
let amigos = [];

// Función que agrega un nombre a la lista de amigos
function agregarAmigo() {
    inputAmigo = document.getElementById("amigo").value.trim(); // Eliminar espacios en blanco al inicio y al final

    if (inputAmigo === "") {
        alert("No has ingresado ningún nombre");
        document.getElementById("amigo").value = "";
        return;

    } else if (/\d/.test(inputAmigo)) {
        alert("El nombre no puede contener números");
        document.getElementById("amigo").value = "";
        return;

    } else if (amigos.includes(inputAmigo)) {
        alert("El nombre ya está en la lista");
        document.getElementById("amigo").value = "";
        return;

    } else {
        amigos.push(inputAmigo);
        document.getElementById("amigo").value = "";
        mostrarAmigos();
    }
}

function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar

    amigos.forEach(function(amigo) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        document.getElementById("resultadoSorteo").innerHTML = "No hay amigos para sortear.";
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    document.getElementById("resultadoSorteo").innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}