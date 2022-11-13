// https://github.com/rwony/programmers
// 120583
function solution(array, n) {
  const result = array.filter((it) => {
    return it === n
  })

  return result.length
}
