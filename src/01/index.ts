import rawInput from './input'

const sortByCalories = (input: string) => {
  return input
    .split('\n\n')
    .map(elf =>
      elf
        .split('\n')
        .map(Number)
        .reduce((prev, curr) => prev + curr, 0)
    )
    .sort((a, b) => (a < b ? 1 : -1))
}

const getElfWithMostCalories = (input: string) => sortByCalories(input)[0]

const getThreeElvesWithMostCalories = (input: string) => sortByCalories(input).slice(0, 3)

console.log(getElfWithMostCalories(rawInput))
console.log(getThreeElvesWithMostCalories(rawInput))
