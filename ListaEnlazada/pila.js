//estructura de datos LIFO
class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.siguiente = null;
  }
}

class Pila {
  constructor() {
    this.tope = null;
  }

  agregarElementoPila(valor) {
    let nuevo = new Nodo(valor);
    nuevo.siguiente = this.tope;
    this.tope = nuevo;
  }

  imprimir() {
    let actual = this.tope;
    while (actual != null) {
      console.log(actual.valor);
      actual = actual.siguiente;
    }
  }
}

let primero = null;

const pila = new Pila();
pila.agregarElementoPila(1);
pila.agregarElementoPila(2);
pila.agregarElementoPila(3);
pila.agregarElementoPila(4);
pila.imprimir();
