document.getElementById("submitBtn").addEventListener("click", function() {
    let commentInput = document.getElementById("commentInput").value;

    if (commentInput.trim() !== "") {
        let commentSection = document.getElementById("commentSection");

        // Crea un nuevo párrafo para el comentario
        let newComment = document.createElement("p");
        newComment.textContent = commentInput;

        // Agrega el nuevo comentario a la sección de comentarios
        commentSection.appendChild(newComment);

        // Limpia el área de texto
        document.getElementById("commentInput").value = "";
    } else {
        alert("Por favor, escribi un comentario.");
    }
})
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

