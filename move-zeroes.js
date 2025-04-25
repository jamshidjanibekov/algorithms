let moveZeroes = (nums) => {
    count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 0){
            count++;
            continue;
        }
        [nums[i], nums[i - count]] = [nums[i - count], nums[i]]
    }
    return nums
}
let task = moveZeroes([1,2,4,0,54,1,0,2])
console.log(task);
