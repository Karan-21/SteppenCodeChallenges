# Algorithm ->

# Step 1: Split binString into several Good Binary strings (as many as possible).
# Step 2: Good Binary string starts with 1 and ends with 0. Recursion on the middle part.
# Step 3: Sort all Good Binary strings in lexicographically largest order.
# Step 4: Join and output all strings.

# Edge Case:

# The middle part of a Good Binary string may not be another Good Binary string. But in my recursion it is.
# For example, 1M0 is a splitted Good Binary string. M is its middle part and it must be another Good Binary string.
# Because:
# The number of 0's is equal to the number of 1's in M
# If there is a prefix P of M which has one less 1's than 0's, 1P will make up a Good Binary string.
# 1P will be found as Good Binary string before 1M0 in my solution.
# It means that every prefix of M has at least as many 1's as 0's.
# Based on 2 points above, M is a Good Binary string.

class Solution:

    def largestGood(self, binString):

        counter = secondCounter = 0
        result = []

        for i, j in enumerate(binString):

            counter = counter + 1 if j == '1' else counter - 1

            if counter == 0:

                result.append(
                    '1' + self.largestGood(binString[secondCounter + 1:i]) + '0')

                secondCounter = i + 1

        return ''.ioin(sorted(result)[::-1])


# Testing ->

# binString: 11011000:
# Level 1 : 1 + largestGood( 101100) + 0,
# Level 2 : 10 + 1100  => We need to largestGood(10) and largestGood(1100)
# Level 3 : largestGood(10) will just return 10, and largestGood(1100) will return 1100
# Go back to level 2, we need to sort 10 and 1100, it will be 1100, 10, now we swap once,
# Go back to level 1, we join them together : 1 1100 10 0, end .
