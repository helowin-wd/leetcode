/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var map = new Map();
    for (var index = 0; index < nums.length; index++) {
        var element = target - nums[index];
        if (map.has(element)) {
            return [map.get(element), index];
        }
        else {
            map.set(nums[index], index);
        }
    }
    return [];
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
