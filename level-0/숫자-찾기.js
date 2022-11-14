// https://github.com/rwony/programmers
// 120904
function solution(num, k) {
  const arr = [...num.toString()]
  let answer = -1

  arr.forEach((num) => {
    if (Number(num) === k) {
      answer = arr.indexOf(num) + 1
    }
  })
  return answer
}
