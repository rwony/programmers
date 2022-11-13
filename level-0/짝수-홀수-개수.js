// https://github.com/rwony/programmers
// 120824
function solution(num_list) {
  var answer = []
  let odd = 0
  let even = 0

  num_list.forEach((it) => {
    it % 2 === 0 ? even++ : odd++
  })
  answer = [even, odd]

  return answer
}
