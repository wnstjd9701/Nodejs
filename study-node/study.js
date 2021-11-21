const dns = require('dns');
// const global : 특정한 상수
// let global : 전역 변수
// var global : 전역 변수

var global; // file 전체에서 작동
// global
if (true) {
  let global; // scope 범위 내에서 작동
}
