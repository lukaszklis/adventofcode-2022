const GROUP_SIZE = 3
const ITEMS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

function* splitToChunks<T>(arr: T[], n: number): Generator<T[], void> {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n)
  }
}

const mapToPriority = (character: string): number => [...ITEMS].findIndex(c => c === character) + 1

const mapToCompartments = (rucksack: string): [string, string] => {
  const itemsCount = rucksack.length

  return [rucksack.slice(0, itemsCount / 2), rucksack.slice(itemsCount / 2)]
}

const getDuplicateItems = (compartment: string, otherCompartment: string): string[] => {
  const duplicates = new Set<string>()

  Array.from(compartment).forEach(c => {
    if (otherCompartment.includes(c)) {
      duplicates.add(c)
    }
  })

  return [...duplicates.values()]
}

const getGroupDuplicateItems = (group: string[]): string[] => {
  const duplicateItems = new Set<string>()
  const [first, second, third] = group

  Array.from(ITEMS).forEach(item => {
    if (first.includes(item) && second.includes(item) && third.includes(item)) {
      duplicateItems.add(item)
    }
  })

  return [...duplicateItems.values()]
}

const sumPriorities = (priorities: number[]): number =>
  priorities.reduce((sum, priority) => sum + priority, 0)

export const rucksackPrioritiesPartOne = (input: string): number => {
  const rucksacks = input.trim().split('\n')

  return rucksacks.reduce((priorities, rucksack) => {
    const compartments = mapToCompartments(rucksack)
    const duplicateItems = getDuplicateItems(...compartments)
    const duplicatesPriorities = duplicateItems.map(mapToPriority)

    return priorities + sumPriorities(duplicatesPriorities)
  }, 0)
}

export const rucksackPrioritiesPartTwo = (input: string): number => {
  const groups = [...splitToChunks(input.trim().split('\n'), GROUP_SIZE)]

  return groups.reduce((priorities, group) => {
    const groupDuplicatesPriorities = getGroupDuplicateItems(group).map(mapToPriority)

    return priorities + sumPriorities(groupDuplicatesPriorities)
  }, 0)
}
