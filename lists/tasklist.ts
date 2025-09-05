import { TaskNode } from "./tasknode";

class TaskList {
  idCounter: number;
  head: TaskNode | null;
  tail: TaskNode | null;

  constructor() {
    this.idCounter = 1;
    this.head = null;
    this.tail = null;
  }

  addTask(title: string, completed = false) {
    const newNode = new TaskNode(this.idCounter, title, completed);
    this.idCounter = this.idCounter + 1;

    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = this.tail!.next;
    }
  }

  // Quita el nodo con ese id. Devuelve true si lo encontró y borró.
  removeTask(id: number): boolean {
    if (this.head === null) {
      return false; // lista vacía
    }

    // Caso: borrar la cabeza
    if (this.head.id === id) {
      this.head = this.head.next;
      if (this.head === null) {
        // Si se vació la lista, tail también debe ser null
        this.tail = null;
      }
      return true;
    }

    // Caso general: buscar con puntero previo
    let prev: TaskNode | null = this.head;
    let curr: TaskNode | null = this.head.next;

    while (curr !== null) {
      if (curr.id === id) {
        prev!.next = curr.next;
        if (curr === this.tail) {
          this.tail = prev; // si era el último, mover tail
        }
        return true;
      }
      prev = curr;
      curr = curr.next;
    }

    return false; // no se encontró
  }

  listTasks(): void {
    if (this.head === null) {
      console.log('La lista está vacía');
      return;
    }

    let current: TaskNode | null = this.head;
    while (current !== null) {
      console.log(`${current.id} - ${current.title}: ${current.completed}`);
      current = current.next;
    }
  }

  // Alterna el completed de la tarea con ese id. Devuelve el nuevo estado o false si no existe.
  updateTask(id: number): boolean {
    if (this.head === null) {
      console.error('La lista está vacía');
      return false;
    }

    let current: TaskNode | null = this.head;
    while (current !== null) {
      if (current.id === id) {
        current.completed = current.completed ? false : true;
        return current.completed;
      }
      current = current.next;
    }

    console.error('No se encontró el elemento');
    return false;
  }
}

// --- Ejemplo rápido de uso ---
const list = new TaskList();
list.addTask('Primer tarea', false);
list.listTasks();
console.log('-----');
list.addTask('Segunda tarea');
list.addTask('Lavar los trastes');
list.listTasks();
list.updateTask(2);
console.log('-----');
list.listTasks();
