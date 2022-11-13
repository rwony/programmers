// https://github.com/rwony/programmers
// 120830
function solution(n, k) {
  var answer = 0
  let drink = k - parseInt(n / 10)
  answer = n * 12000 + drink * 2000
  return answer
}
