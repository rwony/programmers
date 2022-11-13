// https://github.com/rwony/programmers
// 120818
function solution(price) {
  var answer = 0
  const discount =
    price >= 500000 ? 0.2 : price >= 300000 ? 0.1 : price >= 100000 ? 0.05 : 0

  answer = price - price * discount
  return Math.floor(answer)
}
