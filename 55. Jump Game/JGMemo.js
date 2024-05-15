/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums, i = 0, memo={}) {
    if(memo[i]!==undefined){
        return memo[i]
    }
    if(i === nums.length-1 || memo[i]>=nums.length-i-1){
        return true;
    }
    if(nums[i]===0){
        return false;
    }

    for (let n = 1; n <= nums[i]; n++) {
        if(canJump(nums, i+n, memo) === true){
            nums[i+n]=true;
            return true;
        }
    } 
    memo[i]=false;
    return false;
};