// https://github.com/rwony/programmers
// 120825
function solution(my_string, n) {
  let answer = ''
  const arr = [...my_string]

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < n; j++) {
      answer += arr[i]
    }
  }

  return answer
}
