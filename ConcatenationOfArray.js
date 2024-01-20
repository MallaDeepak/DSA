// Concatenation Of Array:
// Input : nums = [1,2,1]
// Output: result = [1,2,1,1,2,1]

var getConcatenation = function(nums) { 
    //return nums.concat(nums);  ======> Using concat build-in method
    //return [...nums, ...nums]; ======> Spread operator
    // let len = nums.length;
    // for (let i = 0; i< len; i++){        
    //     return nums.push(nums[i]);  =====> PUSH method  ===> timeComplexity : 77ms (so far best)
    // }
    const result = [];
    for (let i=0; i< nums.length; i++) {
            //result[i]= result [i+len] = nums[i];
         result [i] = nums[i];
         result [i + nums.length] = nums[i];
    }
    return result;
       
};

// Example of how to call the function:
const concatenatedArray = getConcatenation([1, 2, 1]);
console.log(concatenatedArray);