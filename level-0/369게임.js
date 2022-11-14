// https://github.com/rwony/programmers
// 120891
function solution(order) {
  var answer = 0
  return [...order.toString()].filter(
    (it) => it === '3' || it === '6' || it === '9'
  ).length
}
