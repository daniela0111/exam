export function readableDate(date: Date) {
  return date.toJSON().slice(0, 10)
}