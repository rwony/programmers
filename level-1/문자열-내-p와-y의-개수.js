// https://github.com/rwony/programmers
// 12916
function solution(s) {
  s = s.toLowerCase().split('')

  const p = s.filter((it) => {
    return it === 'p'
  })

  const y = s.filter((it) => {
    return it === 'y'
  })

  return p.length === y.length
    ? true
    : p.length === 0 && y.length === 0
    ? true
    : false
}
