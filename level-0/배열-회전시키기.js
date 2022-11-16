// https://github.com/rwony/programmers
// 120844
function solution(numbers, direction) {
  var answer = [...numbers]
  let [a, b] = [numbers[0], numbers[numbers.length - 1]]

  if (direction === 'left') {
    answer.push(a)
    answer.shift()
  } else {
    answer.unshift(b)
    answer.splice(answer.length - 1, 1)
  }

  return answer
}
