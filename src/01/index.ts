import rawInput from './input'

const getMaxCalories = (input: string) => {
  return input
    .split('\n\n')
    .map(elf =>
      elf
        .split('\n')
        .map(Number)
        .reduce((prev, curr) => prev + curr, 0)
    )
    .reduce((prevElf, currElf) => Math.max(prevElf, currElf), 0)
}

console.log(getMaxCalories(rawInput))
