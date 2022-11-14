// https://github.com/rwony/programmers
// 120887
function solution(i, j, k) {
  let answer = 0
  for (let a = i; a <= j; a++) {
    const num = [...a.toString()].filter((it) => {
      return Number(it) === k
    })
    answer += num.length
  }

  return answer
}
