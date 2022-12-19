const palabras = [
  { nombre: "platano", costo: 255 },
  { nombre: "manzana", costo: 225 },
  { nombre: "pera", costo: 205 },
  { nombre: "frutilla", costo: 445 },
  { nombre: "plato", costo: 445 },
  { nombre: "plata", costo: 445 },

];
const tarjetas=[
  {}
]
const buscar = document.querySelector("#buscador");
const boton = document.querySelector("#boton");
const res = document.querySelector("#resultado");
const filtrar = () => {
  const palabra = buscar.value.toLowerCase();
  res.innerHTML = ''
  for (let producto of palabras) {
    let nombre = producto.nombre.toLowerCase();
    if (nombre.indexOf(palabra) != -1) {
      res.innerHTML += `
                <li>${producto.nombre} - costo ${producto.costo}</li>
             `;
    }
  }
};

boton.addEventListener("click", filtrar);
buscar.addEventListener('keyup',filtrar)
