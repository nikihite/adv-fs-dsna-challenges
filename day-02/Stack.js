class Stack {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  classPush(item) {
    this.#list.push(item);
  }

  classPop() {
    this.#list.pop();
  }

  classPeek() {
    return this.#list[this.#list.length - 1];
  }

  checkSyntax(code) { 
    const arrayToCheck = new Stack();
    const opening = [];
    const closing = [];
    String(code).split('').map(char => {
      if (char === '(' ||  char === ')' || char === '{' || char === '}') {
        arrayToCheck.classPush(char);
      }
    });
    const length = arrayToCheck.#list.length;

    for (let i = 0; i < length; i++) {
      if (arrayToCheck.classPeek() === '(' || arrayToCheck.classPeek() === '{') {
        opening.push(1);
        arrayToCheck.classPop();
      } else if (arrayToCheck.classPeek() === ')' || arrayToCheck.classPeek() === '}') {
        closing.push(1);
        arrayToCheck.classPop();
      }

    }
    return String(opening) === String(closing) ? true : false;

  }


  get readableArr() {
    return this.#list;
  }
}

module.exports = { Stack };
