/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    return [...new Set(nums1)].filter(item => nums2.includes(item))
};
//时间复杂度o(m*n) 空间复杂度o(m)