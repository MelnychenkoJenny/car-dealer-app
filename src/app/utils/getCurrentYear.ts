export const getCurrentYear = (currentYear: number) =>
  Array.from({ length: currentYear - 2014 }, (_, i) => 2015 + i)
