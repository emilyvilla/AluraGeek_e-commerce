import { productServices } from "../../services/servicio__producto.js";

const d = document;



const crearNuevoProducto = (img, name, price, Description, category, id) => {
	const tarjeta = d.createElement("div");
	tarjeta.classList.add("productos__contenedor_");
	const contenido = `
    <div class="card">
    <div class="card__imagen">
        <img src="${img}"
            alt="imagen producto">
    </div>
        <div class="contentBx">
        <h2>${name}</h2>
        <div class="size">
            <h3>Precio</h3>
            <span>${price}</span>
        </div>
        <a href="/static/producto.html?category=${category}&id=${id}">Ver producto</a>
        `;
        tarjeta.innerHTML = contenido;
        return tarjeta;
    };
    

const seccionAll = d.querySelector('[data-productos]');
productServices.allProducts().then((data) => {
	data.forEach(({img, name, price, Description, category, id}) => {
		const nuevoTarjeta = crearNuevoProducto(
            img,
            name,
			price,
            Description,
			category,
			id
		);
		seccionAll.appendChild(nuevoTarjeta);
	});
}).catch((err)=> alert('ocurrió un error'));