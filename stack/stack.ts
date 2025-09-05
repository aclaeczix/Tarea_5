import { Node } from "./node";

export class Stack {
  head: Node | null;

  constructor() {
    this.head = null;
  }


  push(value: number): void {
    const nuevo = new Node(value);
    nuevo.next = this.head;
    this.head = nuevo;
  }


  pop(): number | null {
    if (this.head === null) {
      return null;
    }

    const valor = this.head.value;
    this.head = this.head.next;
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

// Pruebas Rápidas
const s = new Stack();
s.push(1);
s.push(2);
s.push(3);

console.log("Contenido de la pila:");
s.list();

console.log("Elemento quitado:", s.pop());

console.log("Pila después de un pop:");
s.list();
