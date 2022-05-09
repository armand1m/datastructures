import * as Queue from './queue';

const testQueue = (queue: Queue.Queue<number>) => {
  expect(queue.isEmpty()).toBeTruthy();

  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);

  expect(queue.isEmpty()).toBeFalsy();

  expect(queue.dequeue()).toBe(1);
  expect(queue.dequeue()).toBe(2);
  expect(queue.dequeue()).toBe(3);

  expect(queue.isEmpty()).toBeTruthy();
};

test('array-based queues', () => {
  testQueue(Queue.arrayBasedQueue());
});

test('linked-list based queue', () => {
  testQueue(Queue.linkedListQueue());
});

test('cyclic-list based queue', () => {
  testQueue(Queue.cyclicListQueue());
});

test('doubly-linked-list based queue', () => {
  testQueue(Queue.doublyLinkedListQueue());
});
