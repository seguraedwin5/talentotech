//obtener data de productos

const carrito = new LinkedList();
var total = 0;
//funcion para agregar a carrito
function AgregarCarrito({ id, nombre, precio }) {
  let newProducto = { id: id, nombre: nombre, precio: precio };
  if (newProducto != isNaN) {
    console.log(newProducto.nombre);
    carrito.add(newProducto);
  }

  llenarCarrito(carrito.toList());
}

function llenarCarrito(data) {
  let tabla = document.getElementById("itemscarrito");

  let html_items = "";
  data.map((item, index) => {
    let producto = new Producto(item.id, item.nombre, item.precio);
    total += producto._price;
    html_items += `<tr><td>${producto._id}</td><td>${item.nombre}</td><td>&dollar;${item.precio}</td><td><button onclick="eliminarCarrito(${index})" type="button" class="btn btn_eliminar" >Eliminar</button></td></tr>`;
  });
  tabla.innerHTML = html_items;
  contarItemsCarrito();
}

fetch("./data/productos.json")
  .then((response) => response.json())
  .then((data) => llenarTabla(data));

//funcion para llenar la tabla de html
function llenarTabla(data) {
  let tabla = document.getElementById("items");

  let html_items = "";
  data.map((item) => {
    let producto = new Producto(item.id, item.nombre, item.precio);
    html_items += `<tr><td>${producto._id}</td><td>${producto._name}</td><td>&dollar;${producto._price}</td><td><button onclick="AgregarCarrito({id:${producto._id},nombre:'${producto._name}',precio:${producto._price}})" type="button" class="btn btn_agregar">Agregar</button></td></tr>`;
  });
  tabla.innerHTML = html_items;
}

//funcion para contar items en el carrito
function contarItemsCarrito() {
  let num_items = document.getElementById("total-items-carrito");
  let conteo = carrito.Count();
  console.log(conteo);
  num_items.innerHTML = "<p>" + conteo + " Items" + "</p>";
}

function abrirFormCompra() {
  const totalcompra = document.getElementById("totalcompra");
  const dialogCompra = document.getElementById("dialog-compra");
  dialogCompra.showModal();
  totalcompra.innerHTML = `<h3>&dollar;${total}</h3>`;
}

function cerrarFormCompra() {
  const dialogCompra = document.getElementById("dialog-compra");
  dialogCompra.close();
}

function eliminarCarrito(position) {
  total = 0;
  carrito.removeposition(position);
  llenarCarrito(carrito.toList());
}
