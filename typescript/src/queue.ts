export interface Queue<T> {
  /**
   * Adds an item to the queue that
   * can be later dequeued.
   */
  enqueue: (value: T) => void;
  /**
   * Removes the first item from the queue
   * in a FIFO fashion.
   */
  dequeue: () => T | undefined;
  /**
   * Checks if the queue is empty.
   */
  isEmpty: () => boolean;
}

export const arrayBasedQueue = <T>(): Queue<T> => {
  let lowerIndex = 0;
  let upperIndex = 0;

  const queue: T[] = [];

  const enqueue = (value: T) => {
    queue[upperIndex++] = value;
  };

  const dequeue = () => {
    return queue[lowerIndex++];
  };

  const isEmpty = () => {
    return lowerIndex === upperIndex;
  };

  return {
    enqueue,
    dequeue,
    isEmpty,
  };
};

export interface QueueNode<T> {
  value: T;
  next?: QueueNode<T>;
}

export const linkedListQueue = <T>(): Queue<T> => {
  let insert: QueueNode<T> | undefined;
  let remove: QueueNode<T> | undefined;

  const enqueue = (value: T) => {
    const tmp: QueueNode<T> = {
      value,
    };

    if (insert !== undefined) {
      // if insert is not undefined
      // it means that there are values
      // in the linked list
      insert.next = tmp;
      insert = tmp;
    } else {
      // otherwise, the list is empty
      // and we must initialize both
      // link nodes
      remove = insert = tmp;
    }
  };

  const dequeue = () => {
    // grab current value in the remove node
    let value = remove?.value;

    // replace remove node with the next link
    remove = remove?.next;

    // if remove ever becomes undefined
    // it means that we reached the last
    // value in the list. we must clear
    // the insert node as well on this
    // moment, so `isEmpty` keeps working.
    if (remove === undefined) {
      insert = undefined;
    }

    // return value from removed node
    return value;
  };

  const isEmpty = () => {
    return insert === undefined;
  };

  return {
    enqueue,
    dequeue,
    isEmpty,
  };
};

export interface CyclicQueueNode<T> {
  // The value of a Cyclic Queue Node
  // can be undefined if it is a placeholder
  // or entrypoint node.
  value: T | undefined;
  next: CyclicQueueNode<T>;
}

export const cyclicListQueue = <T>(): Queue<T> => {
  // @ts-ignore
  let placeholder: CyclicQueueNode<T> = {
    value: undefined,
  };
  placeholder.next = placeholder;

  let entrypoint: CyclicQueueNode<T> = {
    value: undefined,
    next: placeholder,
  };

  const enqueue = (value: T) => {
    let tmp = entrypoint.next;
    let newNode: CyclicQueueNode<T> = {
      value,
      next: tmp.next,
    };

    entrypoint.next = newNode;
    tmp.next = newNode;

    return;
  };

  const dequeue = () => {
    let tmp = entrypoint.next.next.next;
    entrypoint.next.next.next = tmp.next;

    if (tmp === entrypoint.next) {
      entrypoint.next = tmp.next;
    }

    return tmp.value;
  };

  const isEmpty = () => {
    return entrypoint.next == entrypoint.next?.next;
  };

  return {
    enqueue,
    dequeue,
    isEmpty,
  };
};
