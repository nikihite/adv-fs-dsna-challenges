class Queue {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  enqueue(item) {
    this.#list.push(item);
  }

  dequeue() {
    this.#list = this.#list.slice(1);
  }

  hasNext() {
    return this.#list.length ? true : false;
  }
}

module.exports = { Queue };
