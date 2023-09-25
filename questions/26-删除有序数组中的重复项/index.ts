// 删除有序数组中的重复项
function removeDuplicates(nums: number[]): number {
  let slowIndex = 0;

  for (let fastIndex = 0; fastIndex < nums.length; fastIndex++) {
    const element = nums[fastIndex];

    if (nums[slowIndex] !== element) {
      nums[++slowIndex] = element
    }

  }
  return slowIndex + 1
};

console.log(removeDuplicates([1, 1, 2]))

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))