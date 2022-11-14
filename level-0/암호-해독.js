// https://github.com/rwony/programmers
// 120892
function solution(cipher, code) {
  const answer = [...cipher].filter((it, idx) => {
    return (idx + 1) % code === 0
  })

  return answer.join('')
}
