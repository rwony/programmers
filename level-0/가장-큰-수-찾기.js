// https://github.com/rwony/programmers
// 120899
function solution(array) {
  const answer = []
  const maxNumber = Math.max(...array)
  answer.push(maxNumber)
  answer.push(array.indexOf(maxNumber))
  return answer
}