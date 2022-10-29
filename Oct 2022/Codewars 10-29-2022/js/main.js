// Count distinct elements in every window of size k
// Given an array of size n and an integer k, return the count of distinct contiguous numbers for all windows of size k. Consider that k is always lower or equals to n.

// Example:
// ``` Input: arr = {1, 2, 1, 3, 4, 2, 3} k = 4 Since we have n = 7 and k = 4, we have 4 windows with 4 contiguous elements.
// Answer: [3,4,4,3]
// ([1,2,1,3,4,2,3], 4, [3,4,4,3]);
// ([1,2,1,3,4,2,3,3], 2, [2,2,2,2,2,2,1]);
// ([1, 2, 1, 3, 4, 2, 3, 3], 8, [4]);

// <h2>Explanation:</h2>
// First window is {1, 2, 1, 3} and we have 3 distinct numbers;
// Second window is {2, 1, 3, 4} and we have 4 distinct numbers;
// Third window is {1, 3, 4, 2} and we have 4 distinct numbers;
// Fourth window is {3, 4, 2, 3} and we have 3 distinct numbers.

// <br>

// <h2>WARNING:</h2> 
// Be careful about the performances: your function will have to mana