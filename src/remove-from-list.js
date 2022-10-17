const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
 function removeKFromList(l, k) {
  let current = l;
  let index = 0;
  const indexArr = [];

  while (current) {
    if (current.value === k) {
      index += 1;
      indexArr.push(index);
      current = current.next;
    } else {
      index += 1;
      current = current.next;
    }
  }

  if (indexArr.length < 1) {
    return l;
  }

  indexArr.forEach((index, number) => {
    current = l;
    if (index - number === 1) {
      l.value = current.next.value;
      current.next = current.next.next;
    } else {
      let prev = null;
      let i = 1;

      while (i < index - number) {
        prev = current;
        current = current.next;
        i += 1;
      }
      prev.next = current.next;
    }
  });
  return l;
}

module.exports = {
  removeKFromList
};
