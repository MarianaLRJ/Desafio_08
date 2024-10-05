const opciones = document.querySelectorAll(".card");

let carrito = [];

opciones.forEach((opcion) => {
  opcion.addEventListener(`click`, (evento) => {
    const titulo = opcion.querySelector(".negro").textContent;
    const precio = opcion.querySelector(".precio").textContent;

    const modal = document.querySelector(".container-modal");

    modal.style.display = "flex";

    const titulomodal = modal.querySelector(".titulo-modal");

    titulomodal.textContent = titulo;

    const cerrarmodal = modal.querySelector(".cerrar");

    cerrarmodal.addEventListener("click", () => {
      modal.style.display = "none";
    });

    const agregar = modal.querySelector(".agregar");

    agregar.addEventListener("click", () => {
      const cantidad = modal.querySelector("#Cantidad").value;

      const comentario = modal.querySelector("#Comentario").value;

      const obj = {
        titulo: titulo,
        precio: precio,
        cantidad: cantidad,
        comentario: comentario,
      };

      carrito.push(obj);

      cantidad.value = "";
      comentario.value = "";

      cerrarmodal.click();
    });
  });
});



