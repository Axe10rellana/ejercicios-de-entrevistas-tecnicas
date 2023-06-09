class Stack {
  constructor() {
    this.top = null;
  }

  hasElement(element) {
    let aux = this.top;

    while (aux !== null && aux.data !== element) {
      aux = aux.prev;
    }

    return aux !== null;
  }

  push(element) {
    let node = new NodeElement(element, this.top);
    this.top = node;
  }

  pop() {
    if (this.top !== null) {
      this.top = this.top.prev;
    } else {
      alert("No hay mas elementos");
      return null;
    }
  }

  peek() {
    return this.top;
  }

  isEmpty() {
    return this.top === null;
  }

  length() {
    let aux = this.top;
    let amount = 0;

    while (aux !== null) {
      amount++;
      aux = aux.prev;
    }

    return amount;
  }

  print() {
    let aux = this.top;
    while (aux !== null) {
      console.info(aux.data);
      aux = aux.prev;
    }
  }
}

class NodeElement {
  constructor(element, prev) {
    this.data = element;
    this.prev = prev;
  }
}

//variables
let myStack = new Stack();

//function
myStack.push(15);
myStack.push(20);
myStack.push(25);
myStack.pop();

//resultado
myStack.print();
console.info(myStack.hasElement(20));
console.info(myStack.length());
console.info(myStack.peek());
console.info(myStack.isEmpty());
