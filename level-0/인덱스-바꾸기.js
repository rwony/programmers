// https://github.com/rwony/programmers
// 120895
function solution(my_string, num1, num2) {
  let strArr = [...my_string]
  let tmp = strArr[num1]
  strArr[num1] = strArr[num2]
  strArr[num2] = tmp

  return strArr.join('')
}

console.log(solution('hello', 1, 2))
