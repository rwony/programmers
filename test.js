function solution(my_string) {
  const answer = []
  my_string.split('').map((it) => {
    if (!isNaN(it) === true) {
      answer.push(parseInt(it))
    }
  })
  return answer.sort()
}
