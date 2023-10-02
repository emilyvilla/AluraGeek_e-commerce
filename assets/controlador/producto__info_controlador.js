import { productServices } from "../../services/servicio__producto.js";
const d = document;

const obtenrDatos = async()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const img = d.querySelector("[data-img]");
    const name = d.querySelector("[data-name]");
    const price = d.querySelector("[data-price]");
    const description = d.querySelector("[data-description]");
    const productos = await productServices.productoIndividual(id)
        img.src = productos.img;
        name.textContent =productos.name;
        price.textContent = productos.price;
        description.textContent = productos.description
}
obtenrDatos();

const productosRelacionados = d.querySelector('[data-section="relacionados"]');

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


productServices.relacionados().then((data) => {
	data.forEach(({img, name, price, Description, category, id}) => {
		const nuevaTarjeta = crearNuevoProducto(img, name, price, Description, category, id);
		productosRelacionados.appendChild(nuevaTarjeta);
	});
}).catch((err)=> console.log('error al cargar'));