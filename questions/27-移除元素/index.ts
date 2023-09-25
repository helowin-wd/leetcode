var removeElement = function (nums: number[], val: number): number {
  let i = 0;
  for (const num of nums) {
    if (num != val) {
      nums[i] = num
      i++
    }
  }
  return i
};

console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))
