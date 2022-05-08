export interface LinkedList<T> {
  head?: LinkedListItem<T>;
}

export interface LinkedListItem<T> {
  value: T;
  next?: LinkedListItem<T>;
}

export const createLinkedList = <T>() => {
  const state: LinkedList<T> = {
    head: undefined,
  };

  const isEmpty = () => {
    return state.head === undefined;
  };

  const find = (value: T) => {
    let node = state.head;

    while (node !== undefined && node?.value !== value) {
      node = node.next;
    }

    return node?.value;
  };

  const push = (value: T) => {
    state.head = {
      value,
      next: state.head,
    };
  };

  const pop = () => {
    const removedValue = state.head;
    state.head = removedValue?.next;
    return removedValue?.value;
  };

  return {
    state,
    isEmpty,
    find,
    push,
    pop,
  };
};
