class Queue {
  #list = [];

  constructor(initialList) {
    if (initialList) this.#list = initialList;
  }

  enqueue(item) {
    this.#list.push(item);
  }

  hasNext() {
    return this.#list.length ? true : false;
  }
}

module.exports = { Queue };
