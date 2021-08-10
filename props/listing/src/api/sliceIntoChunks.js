export default function sliceIntoChunks(arr, c) {
  let res = new Array(c);
  for (let i = 0; i < c; ++i) {
    res[i] = [];
  }
  for (let i = 0; i < arr.length; ++i) {
    res[i % c].push(arr[i]);
  }
  return res;
}
