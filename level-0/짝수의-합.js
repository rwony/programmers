// https://github.com/rwony/programmers
// 120831
function solution(n) {
  const arr = []
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) arr.push(i)
  }
  return arr.reduce((acc, curr) => acc + curr)
}
