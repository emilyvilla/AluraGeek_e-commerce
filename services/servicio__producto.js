
const BASE_API_URL = "https://my-alura-geek-api.vercel.app/product";

const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};

export const productServices = {
  starwars: () => fetchData(`${BASE_API_URL}?category=starwars`),
  consolas: () => fetchData(`${BASE_API_URL}?category=consolas`),
  diversos: () => fetchData(`${BASE_API_URL}?category=diversos`),
  allProducts: () => fetchData(BASE_API_URL),
  crearNuevoProducto: (img, name, price, description, category) => {
    const id = uuid.v4();
    return fetchData(BASE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ img, category, name, price, description, id }),
    });
  },

  eliminarProducto: (id) => fetchData(`${BASE_API_URL}/${id}`, { method: "DELETE" }),
  detalleProducto: (id) => fetchData(`${BASE_API_URL}/${id}`),

  actualizarProducto: (img, category, name, price, description, id) => {
    return fetchData(`${BASE_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ img, category, name, price, description, id }),
    });
  },

  productoIndividual: (id) => fetchData(`${BASE_API_URL}/${id}`),
  relacionados: () => fetchData(BASE_API_URL),
};
