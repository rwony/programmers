// https://github.com/rwony/programmers
// 120862
function solution(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b)
  const calc =
    sortedNumbers[0] * sortedNumbers[1] >
    sortedNumbers[sortedNumbers.length - 1] *
      sortedNumbers[sortedNumbers.length - 2]
      ? sortedNumbers[0] * sortedNumbers[1]
      : sortedNumbers[sortedNumbers.length - 1] *
        sortedNumbers[sortedNumbers.length - 2]

  return calc
}
