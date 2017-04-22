
class SortedStack {
  constructor() {
    this.sortedStack = [];

    this.smallerStack = [];
    this.biggerStack = [];
  }

  enqueue(value) {
    if (this.sortedStack.length === 0) {
      this.sortedStack.push(value);
      return;
    }

    if (this.sortedStack[this.sortedStack.length - 1] >= value) {
      this.sortedStack.push(value);
      return;
    }

    this.biggerStack.push(value);

    while (this.sortedStack.length > 0) {
      let currentStackValue = this.sortedStack.pop();
      if (currentStackValue >= value) {
        this.biggerStack.push(currentStackValue);
      } else {
        this.smallerStack.push(currentStackValue);
      }
    }

    while (this.biggerStack.length > 0) {
      this.sortedStack.push(this.biggerStack.pop());
    }

    while (this.smallerStack.length > 0) {
      this.sortedStack.push(this.smallerStack.pop());
    }    ``


  }

  getSortedStack() {
    return this.sortedStack.reverse();
  }

}

function testCode() {
  let testSortedStack = new SortedStack();

  testSortedStack.enqueue(1);
  testSortedStack.enqueue(10);
  testSortedStack.enqueue(4);
  testSortedStack.enqueue(2);
  testSortedStack.enqueue(5);
  testSortedStack.enqueue(0);  
  console.log(testSortedStack.getSortedStack());
}


testCode();