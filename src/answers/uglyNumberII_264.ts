function nthUglyNumberBruteForce(n: number): number {
  let uglyArray = new Set<number>([1])
  let currentUgly: number = 0

  for (let i = 0; i < n; i++) {
    uglyArray = new Set([...uglyArray].sort((a, b) => a - b))
    currentUgly = uglyArray.values().next().value

    uglyArray.delete(currentUgly)
    uglyArray.add(currentUgly * 2)
    uglyArray.add(currentUgly * 3)
    uglyArray.add(currentUgly * 5)
  }
  return currentUgly
}

// function nthUglyNumber(n: number): number {
//   let uglyArray = new Set<number>([1])
//   let currentUgly: number = 0

//   for (let i = 0; i < n; i++) {
//     uglyArray = new Set([...uglyArray].sort((a, b) => a - b))
//     currentUgly = uglyArray.values().next().value

//     uglyArray.delete(currentUgly)
//     uglyArray.add(currentUgly * 2)
//     uglyArray.add(currentUgly * 3)
//     uglyArray.add(currentUgly * 5)
//   }
//   return currentUgly
// }
