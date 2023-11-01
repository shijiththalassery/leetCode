//35. Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const searchInsert = function(nums, target) {
    
    if(target > nums[nums.length-1]){
        return nums.length
    }else{
        for( let i = 0 ;i < nums.length; i++){
            if(target === nums[i] ){
                return i ;
            }
            else if (target < nums[i]){
                return i;
            }
        }
    }
};