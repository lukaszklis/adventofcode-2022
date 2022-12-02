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

export const rockPaperScissors = (input: string): number =>
  input.split('\n').reduce((score, round) => score + resultsMap[round], 0)
