// https://github.com/rwony/programmers
// 120829
function solution(angle) {
  var answer = 0
  answer =
    angle > 0 && angle < 90
      ? 1
      : angle === 90
      ? 2
      : angle > 90 && angle < 180
      ? 3
      : 4
  return answer
}
