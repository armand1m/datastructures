import { createLinkedList } from './linkedList';

test('should work properly', () => {
  const linkedList = createLinkedList<number>();

  expect(linkedList.isEmpty()).toBeTruthy();
  expect(linkedList.state.head).toBeUndefined();

  linkedList.push(1);

  expect(linkedList.isEmpty()).toBeFalsy();
  expect(linkedList.state.head).toStrictEqual({
    value: 1,
    next: undefined,
  });

  linkedList.push(2);

  expect(linkedList.state.head).toStrictEqual({
    value: 2,
    next: {
      value: 1,
      next: undefined,
    },
  });

  expect(linkedList.find(1)).toBe(1);
  expect(linkedList.find(3)).toBeUndefined();

  expect(linkedList.pop()).toBe(2);

  expect(linkedList.state.head).toStrictEqual({
    value: 1,
    next: undefined,
  });
});
