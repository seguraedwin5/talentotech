//estructura de datos FIFO

class Cola {
  constructor() {
    this.cola = [];
  }

  agregarElementoCola(valor) {
    this.cola.push(valor);
  }

  eliminarElementoCola() {
    return this.cola.shift();
  }

  imprimirCola() {
    this.cola.map((valor) => {
      console.log(valor);
    });
  }
}

let cola = new Cola();
cola.agregarElementoCola(4);
cola.agregarElementoCola(5);
cola.agregarElementoCola(6);
cola.agregarElementoCola(8);
cola.agregarElementoCola(7);
cola.agregarElementoCola(9);
cola.imprimirCola();
cola.eliminarElementoCola();
cola.imprimirCola();
