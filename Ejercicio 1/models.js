class Producto {
  constructor(id, name, price) {
    this._id = id;
    this._name = name;
    this._price = price;
  }
}
//create node
class NodeCart {
  _value = null;
  _next = null;
  constructor(value) {
    this._value = value;
  }
}

//create linked list
class LinkedList {
  _head = null;
  constructor() {}

  add(newValue) {
    let newnode = new NodeCart(newValue);
    newnode._next = this._head;
    this._head = newnode;
  }

  removeposition(position) {
    //validate if it is a empty list
    if (this._head === null) {
      return;
    }

    var temp = this._head;
    // If head needs to be removed
    if (position === 0) {
      // Change head
      this._head = temp.next;
      return;
    }

    // Find previous node of the node to be deleted
    for (let i = 0; temp != null && i < position - 1; i++) {
      temp = temp.next;
    }

    // If position is more than number of nodes
    if (temp == null || temp.next == null) return;

    // Node temp->next is the node to be deleted
    // Store pointer to the next of node to be deleted
    var next = temp.next.next;

    // Unlink the deleted node from list
    temp.next = next;
  }

  toList() {
    let array = [];
    let current = this._head;
    while (current != null) {
      array.push(current._value);
      current = current._next;
    }
    return array;
  }

  Count() {
    let count = 0;
    let current = this._head;
    while (current != null) {
      count++;
      current = current._next;
    }
    return count;
  }
}
