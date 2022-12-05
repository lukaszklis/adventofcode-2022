const range = (from: number, to: number): number[] =>
  [...Array(to - from + 1).keys()].map(i => i + from)

const mapToSection = (elf: string): number[] => {
  const matches = elf.match(/\d+/g)

  if (!matches) {
    throw new Error('Invalid section format')
  }

  const sectionIds = matches.map(Number)

  return range(sectionIds[0], sectionIds[1])
}

const isSectionOverlapping = (section: number[], otherSection: number[]): boolean =>
  section.every(id => otherSection.includes(id))

export const campCleanupPartOne = (input: string): number => {
  const pairs = input.split('\n')

  return pairs.reduce((sum, pair) => {
    const [elfOne, elfTwo] = pair.split(',')
    const elfOneSection = mapToSection(elfOne)
    const elfTwoSection = mapToSection(elfTwo)

    if (elfOneSection.length < elfTwoSection.length) {
      return sum + Number(isSectionOverlapping(elfOneSection, elfTwoSection))
    }

    return sum + Number(isSectionOverlapping(elfTwoSection, elfOneSection))
  }, 0)
}

export const campCleanupPartTwo = (input: string): number => {
  return 0
}
