function binarySearch(list, item) {
  let low = 0
  let high = list.length - 1

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const guess = list[mid]

    if (guess === item) {
      return mid
    }
    if (mid > low) {
      high = mid - 1
    }else {
      low = mid + 1
    }
  }
  return null
}
console.log(binarySearch([1,2,4,5,6,7], 7))