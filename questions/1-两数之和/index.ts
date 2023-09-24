/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 函数签名
type twoSumFn = (nums: number[], target: number) => number[]

var twoSum: twoSumFn = function (nums, target) {
  let map = new Map()
  for (let index = 0; index < nums.length; index++) {
    const element = target - nums[index];
    if (map.has(element)) {
      return [map.get(element), index]
    } else {
      map.set(nums[index], index)
    }
  }
  return []
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
