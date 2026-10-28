/** Exercise 02 - Two Sum

Problem:

You are given an array of integers 'nums' and an integer 'target', write a function that returns indices of the two 
numbers such that they add up to target.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

**/

function twosums(nums, target) {
  let out1 = 0,
    out2 = 0;
  for (const n1 of nums) {
    for (const n2 of nums) {
      if (n1 + n2 == target && out2 != out1) {
        return [out1, out2];
      }
      out2++;
    }
    out1++;
    out2 = 0;
  }
}
let example_num = [2, 7, 11, 15];
console.log(twosums(example_num, 9));
example_num = [3, 2, 4];
console.log(twosums(example_num, 6));
example_num = [3, 3];
console.log(twosums(example_num, 6));
