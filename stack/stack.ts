import { Node } from "./node";

export class Stack {
  head: Node | null;

  constructor() {
    this.head = null;
  }

  // Agregar al inicio (tope de la pila)
  push(value: number): void {
    const nuevo = new Node(value);
    nuevo.next = this.head; // el nuevo apunta al que era el tope
    this.head = nuevo;      // ahora el nuevo es el tope
  }

  // Sacar y devolver el valor del tope
  pop(): number | null {
    if (this.head === null) {
      return null; // pila vacía
    }

    const valor = this.head.value;
    this.head = this.head.next; // mover el tope al siguiente
    return valor;
  }

  // Mostrar todos los elementos (del tope hacia abajo)
  list(): void {
    let actual = this.head;
    while (actual !== null) {
      console.log(actual.value);
      actual = actual.next;
    }
  }
}
