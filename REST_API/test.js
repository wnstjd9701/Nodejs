const test1 = { id: "a", name: "LEE", email: "LEE@naver.com", test1: "test1"};
const test2 = { id: "b", name: "Yun", email: "Yun@naver.com", test2: "test2"};

// copy
const merge = {...test1, ...test2};
console.log(merge);

