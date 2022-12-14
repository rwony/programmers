// https://github.com/rwony/programmers
// 120837

function solution(hp) {
  let answer = 0
  hp = parseInt(hp)

  answer = Math.floor(hp / 5)
  hp -= answer * 5
  answer += hp % 5 > 0 ? Math.floor(hp / 3) + (hp % 3) : 0

  return answer
}
