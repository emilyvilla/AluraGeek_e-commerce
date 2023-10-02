import { productServices } from "../../services/servicio__producto.js";
const d = document;
const listaResultados = d.querySelector("[data-section]");

const crearNuevoProducto = (img, name, price, Description, category, id) => {
  const tarjeta = d.createElement("div");
  tarjeta.classList.add("productos__contenedor_");
  const contenido = `
    <div class="card">
    <div class="card__imagen">
        <img src="${img}"
            alt="${name}">
    </div>
    <div class="contentBx">
        <h2>${name}</h2>
        <div class="size">
            <h3>Precio</h3>
            <span>${price}</span>
        </div>
        <a href="./producto.html?category=${category}&id=${id}">Ver producto</a>
    `;
  tarjeta.innerHTML = contenido;
  return tarjeta;
};

function mostrarResultados(resultados) {
  listaResultados.innerHTML = "";

  if (resultados.length === 0) {
    const divSinResultados = document.createElement("div");
    divSinResultados.classList.add("not-found");

    const imagenNingunProducto = document.createElement("img");
    imagenNingunProducto.src = "../assets/svg/noexit.svg";
    imagenNingunProducto.alt = "Ningún producto encontrado";
    divSinResultados.appendChild(imagenNingunProducto);

    const mensajeSinResultados = document.createElement("h3");
    mensajeSinResultados.textContent = "Ningún producto encontrado";
    divSinResultados.appendChild(mensajeSinResultados);

    listaResultados.appendChild(divSinResultados);
  } else {
    resultados.forEach(({ img, name, price, Description, category, id }) => {
      const nuevaLinea = crearNuevoProducto(img, name, price, Description, category, id);
      listaResultados.appendChild(nuevaLinea);
    });
  }
}


function obtenerParametroURL(nombreParametro) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombreParametro);
}

d.addEventListener("DOMContentLoaded", () => {
  const terminoBusqueda = obtenerParametroURL("query");

  if (terminoBusqueda) {
    productServices.allProducts().then((data) => {
      const resultados = data.filter(
        (producto) => producto.name.toLowerCase().includes(terminoBusqueda.toLowerCase())
      );
      mostrarResultados(resultados);
    })
      .catch((error) => alert("Error al cargar"));
  } else {
    alert("Ninguna busqueda realizada");
  }
});