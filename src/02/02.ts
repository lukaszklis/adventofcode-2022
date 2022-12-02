enum Shape {
  Rock = 1,
  Paper = 2,
  Scissors = 3,
}

enum Result {
  Win = 6,
  Draw = 3,
  Loss = 0,
}

const rockPaperScissorsFactory = (input: string, resultsMap: Record<string, number>): number => {
  return input.split('\n').reduce((score, round) => score + resultsMap[round], 0)
}

export const rockPaperScissorsPartOne = (input: string): number => {
  const resultsMap: Record<string, number> = {
    'A X': Shape.Rock + Result.Draw,
    'A Y': Shape.Paper + Result.Win,
    'A Z': Shape.Scissors + Result.Loss,

    'B X': Shape.Rock + Result.Loss,
    'B Y': Shape.Paper + Result.Draw,
    'B Z': Shape.Scissors + Result.Win,

    'C X': Shape.Rock + Result.Win,
    'C Y': Shape.Paper + Result.Loss,
    'C Z': Shape.Scissors + Result.Draw,
  }

  return rockPaperScissorsFactory(input, resultsMap)
}

export const rockPaperScissorsPartTwo = (input: string): number => {
  const resultsMap: Record<string, number> = {
    'A X': Shape.Scissors + Result.Loss,
    'A Y': Shape.Rock + Result.Draw,
    'A Z': Shape.Paper + Result.Win,

    'B X': Shape.Rock + Result.Loss,
    'B Y': Shape.Paper + Result.Draw,
    'B Z': Shape.Scissors + Result.Win,

    'C X': Shape.Paper + Result.Loss,
    'C Y': Shape.Scissors + Result.Draw,
    'C Z': Shape.Rock + Result.Win,
  }

  return rockPaperScissorsFactory(input, resultsMap)
}
