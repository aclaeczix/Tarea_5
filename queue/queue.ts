import { Node } from "./node";

export class Queue {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Agregar un valor al final de la cola
  enqueue(value: number): void {
    const nuevo = new Node(value);

    if (this.tail === null) {
      // Si está vacía, head y tail son el mismo
      this.head = nuevo;
      this.tail = nuevo;
    } else {
      this.tail.next = nuevo;
      this.tail = nuevo;
    }
  }

  // Sacar el primer valor de la cola
  dequeue(): number | null {
    if (this.head === null) {
      return null; // Cola vacía
    }

    const valor = this.head.value;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null; // Si quedó vacía
    }

    return valor;
  }

  // Mostrar todos los elementos
  list(): void {
    let actual = this.head;
    while (actual !== null) {
      console.log(actual.value);
      actual = actual.next;
    }
  }
}
