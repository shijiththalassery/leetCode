var moveZeroes = function(nums) {

    let size = nums.length;
    if(nums.lenght === 1){
        if(nums[0] === 0){
            return nums;
        }
    }else{
        for (let i  = 0 ; i < size; i ++){
            if(nums[i]  === 0){
                nums.splice(i,1);
                nums.push(0);
                i--;
                size--;
            }
        }
    } 
    return nums
};