import { createLinkedList } from './linkedList';

/**
 * The Stack interface.
 *
 * In this classification, the `push` and `pop`
 * methods are update operations, while `isEmpty` is
 * a querying operation.
 */
export interface Stack<T> {
  push: (value: T) => void;
  pop: () => T | undefined;
  isEmpty: () => boolean;
}

/**
 * Naive stack as defined in page 2.
 *
 * It describes the correct working of the stack,
 * but we have the problem of assuming both an infinite
 * array and that any sequence of operations will be correct.
 */
export const naiveStack = <T>(): Stack<T> => {
  let index = 0;
  let stack: T[] = [];

  const push = (value: T) => {
    stack[index++] = value;
  };

  const pop = () => {
    return stack[--index];
  };

  const isEmpty = () => {
    return index === 0;
  };

  return {
    push,
    pop,
    isEmpty,
  };
};

/**
 * This implementation limits the correct behavior of the stack
 * by limiting the maximum number of items on the stack at one time.
 *
 * So it is not really the correct stack we want, but at least it
 * does specify an error message in the return value if the
 * stack overflow is reached by one `push` too many.
 *
 * This, however, does not considers stack underflow.
 *
 * Such should not be handled by the stack implementation,
 * since stack underflow is an error in the use of the structure
 * andoso a result in the program the uses the stack as a black box.
 */
export const stackWithoutOverflow = <T>(
  maxSize: number
): Stack<T> => {
  let index = 0;
  let stack: T[] = [];

  const push = (value: T) => {
    if (index < maxSize) {
      stack[index++] = value;
      return 0;
    }

    return -1;
  };

  const pop = () => {
    return stack[--index];
  };

  const isEmpty = () => {
    return index === 0;
  };

  return {
    push,
    pop,
    isEmpty,
  };
};

/**
 * A stack can also be implemented using a linked list.
 *
 * This linked list uses insertion at the beginning, which
 * allows for a constant time operation, and it is equally
 * compatible with the definition of a stack.
 *
 * This is an interesting implementation in the sense that
 * it does not depends on an array nor indexes to actually
 * work, making it dynamically efficient.
 *
 * There is a possible decrease in speed, as dereferencing a
 * pointer takes longer than incrementing an index (in C, at least)
 *
 * This implementation could generate cache misses, while array-based
 * structures work very well with the cache.
 *
 * So if we are certain about the maximum possible size of the stack
 * (for example, because its size is only logarithmic in the size of the input),
 * we should prefer an array-based implementation.
 */
export const linkedListStack = <T>(): Stack<T> => {
  const stack = createLinkedList<T>();

  return {
    push: stack.push,
    pop: stack.pop,
    isEmpty: stack.isEmpty,
  };
};
