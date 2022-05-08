import * as Stack from './stack';

const testStack = (stack: Stack.Stack<number>) => {
  expect(stack.isEmpty()).toBeTruthy();

  stack.push(1);
  stack.push(2);

  expect(stack.isEmpty()).toBeFalsy();

  expect(stack.pop()).toBe(2);

  expect(stack.isEmpty()).toBeFalsy();

  expect(stack.pop()).toBe(1);

  expect(stack.isEmpty()).toBeTruthy();
};

test('naive stack', () => {
  testStack(Stack.naiveStack());
});

test('stack without overflow', () => {
  testStack(Stack.stackWithoutOverflow(2));
});

test('linked list stack', () => {
  testStack(Stack.linkedListStack());
});
