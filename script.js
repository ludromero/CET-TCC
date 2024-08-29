function agregarComentario() {
  const input = document.getElementById("inputComentario");
  const comentario = input.value.trim();

  if (comentario) {
    const lista = document.getElementById("listaComentarios");
    const nuevoComentario = document.createElement("li");
    nuevoComentario.textContent = comentario;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.onclick = function () {
      lista.removeChild(nuevoComentario);
    };

    nuevoComentario.appendChild(botonEliminar);
    lista.appendChild(nuevoComentario);

    input.value = ""; // limpieza del campo de entrada después de agregar el comentario
  } else {
    alert("Por favor, escribí un comentario.");
  }
}
