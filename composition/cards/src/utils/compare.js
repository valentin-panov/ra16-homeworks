import toDate from './toDate';

export default function compare(aStr, bStr) {
  const a = toDate(aStr.date);
  const b = toDate(bStr.date);
  if (a < b) {
    return 1;
  }
  if (a > b) {
    return -1;
  }
  return 0;
}
