class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
  }
}

let primero = null;

function agregarElemento(valor) {
  let nuevo = new Nodo(valor);
  nuevo.siguiente = primero;
  primero = nuevo;
}

function mostrar() {
  let actual = primero;
  while (actual != null) {
    console.log(actual.valor);
    actual = actual.siguiente;
  }
}

function eliminar() {
  primero = primero.siguiente;
}

const lista = new Nodo(1);
agregarElemento(15);
agregarElemento(20);
agregarElemento(12);
agregarElemento(18);
agregarElemento(19);
mostrar();
console.log(primero);
