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
