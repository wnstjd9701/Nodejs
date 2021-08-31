// 큐 . FIFO - First in first out 

const queue = [];
queue.push(1);
queue.push(2);
console.log(queue);

const r = queue.shift(); // shift - 첫번째 요소를 제거하고 반환
console.log(r);

// 스택 . LIFO - Last in first out 
const stack = [];
stack.push(1)
stack.push(2)
console.log(stack);

var s = stack.pop() // pop - 마지막 요소를 제거하고 반환
console.log(s)