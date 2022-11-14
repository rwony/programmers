// https://github.com/rwony/programmers
// 120912
function solution(array) {
  const newArray = array.join('')
  console.log([...newArray])
  const answer = [...newArray].filter((it) => {
    return Number(it) === 7
  })

  return answer.length
}

solution([7, 77, 17])
