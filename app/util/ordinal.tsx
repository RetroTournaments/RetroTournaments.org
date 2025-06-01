export function ordinal(num: number): string {
  if (num > 3 && num < 21) return num + "th";
  switch (num % 10) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
    default:
      return num + "th";
  }
}
