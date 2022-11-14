// https://github.com/rwony/programmers
// 120815
function solution(n) {
  let pizza = 1

  while (true) {
    if ((pizza * 6) % n === 0) {
      break
    } else {
      pizza += 1
    }
  }

  return pizza
}
