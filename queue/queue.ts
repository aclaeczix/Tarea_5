import { Node } from "./node";

export class Queue {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }


  enqueue(value: number): void {
    const nuevo = new Node(value);

    if (this.tail === null) {

      this.head = nuevo;
      this.tail = nuevo;
    } else {
      this.tail.next = nuevo;
      this.tail = nuevo;
    }
  }


  dequeue(): number | null {
    if (this.head === null) {
      return null;
    }

    const valor = this.head.value;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    return valor;
  }


  list(): void {
    let actual = this.head;
    while (actual !== null) {
      console.log(actual.value);
      actual = actual.next;
    }
  }
}
//  Pruebas Rápidas
const q = new Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

console.log("Contenido de la cola:");
q.list();

console.log("Elemento quitado:", q.dequeue());

console.log("Cola después de un dequeue:");
q.list();
