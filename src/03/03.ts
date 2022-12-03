const mapToPriority = (character: string): number => {
  const priorities: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const priority = [...priorities].findIndex(c => c === character)

  return priority + 1
}

const mapToCompartments = (rucksack: string): [string, string] => {
  const itemsCount = rucksack.length

  return [rucksack.slice(0, itemsCount / 2), rucksack.slice(itemsCount / 2)]
}

const findDuplicateItems = (compartment: string, otherCompartment: string): string[] => {
  const duplicates = new Set<string>()

  Array.from(compartment).forEach(c => {
    if (otherCompartment.includes(c)) {
      duplicates.add(c)
    }
  })

  return [...duplicates.values()]
}

export const rucksackPrioritiesPartOne = (input: string): number => {
  const rucksacks = input.trim().split('\n')

  return rucksacks.reduce((priorities, rucksack) => {
    const compartments = mapToCompartments(rucksack)
    const duplicateItems = findDuplicateItems(...compartments)
    const duplicatePriorities = duplicateItems
      .map(mapToPriority)
      .reduce((sum, priority) => sum + priority, 0)

    return priorities + duplicatePriorities
  }, 0)
}

export const rucksackPrioritiesPartTwo = (input: string): number => {
  return 0
}
