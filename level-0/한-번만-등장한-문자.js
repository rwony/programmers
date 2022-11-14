// https://github.com/rwony/programmers
// 120896
function solution(s) {
  const newStrings = [...s].map((it) => {
    const newStr = s.replace(it, '')
    return newStr.includes(it) ? '' : it
  })

  return newStrings.sort().join('')
}
