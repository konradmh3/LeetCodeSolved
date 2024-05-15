/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // use hash maps to store values and index they were found
    const saved = {}
    for(let i = 0; i<nums.length; i++){
        var result = target - nums[i]
        // console.log(saved)
        if(saved[result]!==undefined){
            return [i, saved[result]]
        }
        saved[nums[i]] = i
    }
};