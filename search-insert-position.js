/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    return binarySearch(nums, 0, nums.length - 1, target);
};

var binarySearch = function(arr, left, right, target) {
    if (left <= right) {
        
        // calculate the mid index
        let mid = left + Math.floor((right - left) / 2);
        
        // if mid equals the target
        // then return mid
        if (arr[mid] === target) {
            return mid;
        }
        
        // if mid is less than target
        // then search left side
        if (arr[mid] < target) {
            return binarySearch(arr, mid + 1, right, target);
        }
        
        // if mid is greater than target
        // then search right side
        if (arr[mid] > target) {
            return binarySearch(arr, left, mid - 1, target);
        }
    }
    
    // the target is not in the array
    // return the index where it should be inserted
    return left;
};