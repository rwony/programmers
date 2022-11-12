// https://github.com/rwony/programmers
// 120905
function solution(n, numlist) {
  return numlist.filter((it) => {
    return it % n === 0
  });
}