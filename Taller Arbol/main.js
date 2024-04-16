class Nodo {
	constructor(valor) {
		this.valor = valor;
		this.izquierda = null;
		this.derecha = null;
	}
}

class Arbol {
	raiz = null; // inicializacion del arbol

	//metodo para agregar
	agregar(valor) {
		let nuevoNodo = new Nodo(valor);
		if (this.raiz === null) {
			this.raiz = nuevoNodo;
		} else {
			this.agregarNodo(this.raiz, nuevoNodo);
		}
	}

	agregarNodo(nodo, nuevo) {
		if (nuevo.valor < nodo.valor) {
			if (nodo.izquierda === null) {
				nodo.izquierda = nuevo;
			} else {
				this.agregarNodo(nodo.izquierda, nuevo);
			}
		} else {
			if (nodo.derecha === null) {
				nodo.derecha = nuevo;
			} else {
				this.agregarNodo(nodo.derecha, nuevo);
			}
		}
	}
	buscarElemento(valor, nodo) {
		if (nodo != null) {
			if (valor < nodo.valor) {
				return this.buscarElemento(valor, nodo.izquierda);
			} else {
				if (valor > nodo.valor) {
					return this.buscarElemento(valor, nodo.derecha);
				} else {
					return nodo;
				}
			}
		} else {
			console.log("no se encuentra el dato");
			return null;
		}
	}

	recorrerEnOrden() {
		let resultado = [];
		this.enOrdenAux();
	}
}

var arbol = new Arbol();

arbol.agregar(5);
arbol.agregar(7);
arbol.agregar(3);
arbol.agregar(2);
arbol.agregar(10);

console.log(arbol.buscarElemento(10, arbol.raiz));
