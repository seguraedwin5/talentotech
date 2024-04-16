class Grafo {
	//usamos un map para almacenar los nodos y sus conexiones
	constructor() {
		this.nodos = new Map();
	}

	//agregar nodo o vertice al grafo
	agregarNodo(nodo) {
		this.nodos.set(nodo, []);
	}
}
