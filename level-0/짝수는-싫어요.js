// https://github.com/rwony/programmers
// 120813
function solution(n) {
  let nums = []
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) nums = [...nums, i]
  }
  return nums
}
