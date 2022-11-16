// https://github.com/rwony/programmers
// 120851
function solution(my_string) {
  const regex = /[^0-9]/g
  const result = [...my_string.replace(regex, '')]
  const answer = result.reduce((a, b) => Number(a) + Number(b))

  return answer
}
