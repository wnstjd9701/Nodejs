// Curried Function .. 합성함수
// f(x) = x + 1
// g(x) = x^2
// h(x) = f(g(x)) - g(X)가 먼저 호출  - deep learning 

const getDiscount = rate => price => rate * price
// rate를 파라미터로 받음. 뒤에 price를 또 받고  (closure) price에 대해 함수를 선언
// const getDiscount = function getDiscount(rate){
//     return function(price){
//         return rate * price
//     }
// }
const getTenpercentOff = getDiscount(0.1)
// getDiscount(rate)
console.log(getTenpercentOff(10000))
console.log(getTenpercentOff(10000))
console.log(getTenpercentOff(10000))
console.log(getTenpercentOff(10000))
console.log(getTenpercentOff(10000))
// 합성함수 ..