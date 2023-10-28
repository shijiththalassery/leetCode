//Given an array of integers nums and an integer target, return indices
// of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


function twoSum(arr) {
    const outPut = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + arr[i + 1] == 9) {
            outPut.push(i,i+1);
            return outPut;
        }
    }
    return -1
}


const array = [1, 2, 3, 4, 5]

const answer = twoSum(array);
console.log(answer)