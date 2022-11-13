// https://github.com/rwony/programmers
// 120826
function solution(my_string, letter) {
  const result = my_string.split('').filter((it) => {
    return it !== letter
  })
  return result.join('')
}
