/**
 * https://leetcode.com/problems/merge-sorted-array/description/
 * 
 * Question: 88. Merge Sorted Array
 * 
 * Time Complexity: O(m + n) :: he code uses two pointers (nums1_index and nums2_index) to iterate through the nums1 and nums2 arrays respectively, 
 * comparing elements and placing them in the nums1 array accordingly. 
 * The while loop runs until all elements from nums2 have been merged into nums1.
 * 
 * Space Complexity: O(1) :: 
 * 
 */

var merge = function(nums1, m, nums2, n) {
    let arrayPointer = nums1.length -1;
    let nums1_index = m - 1;
    let nums2_index = nums2.length - 1;
    
    while (nums2_index >= 0) {
        if(nums1[nums1_index] > nums2[nums2_index]){
            nums1[arrayPointer] = nums1[nums1_index];
            arrayPointer--;
            nums1_index--;
        }else{
            nums1[arrayPointer] = nums2[nums2_index];
            arrayPointer--;
            nums2_index--;

        }
    }

    console.log(nums1)
    return nums1;

};

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
merge(nums1, m, nums2, n);