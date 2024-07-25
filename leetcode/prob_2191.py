from typing import List
"""

class Solution:
    def sortJumbled(self, mapping: List[int], nums: List[int]) -> List[int]:
        def mapped_value(num: int) -> int:
            str_num = str(num)
            mapped_str = ''.join(str(mapping[int(digit)]) for digit in str_num)
            return int(mapped_str)
        
        # Use Python's built-in sort with a custom key for efficiency
        nums.sort(key=mapped_value)
        return nums
    """
#the actual code created by me
"""class Solution:
    def sortJumbled(self, mapping: List[int], nums: List[int]) -> List[int]:
        temp_l = []
        for j in nums:
            # print(f"{i} value to {j}")
            str_j = str(j)
            temp = ""
            for k in str_j:
                temp = temp+str(mapping[int(k)])
            temp_l.append(int(temp))
        for i in range(len(temp_l)):
                for k in range(0,len(temp_l)-1):
                    if temp_l[k]>temp_l[k+1]:
                        temp_l[k],temp_l[k+1] = temp_l[k+1],temp_l[k]
                        nums[k],nums[k+1] = nums[k+1],nums[k]
        return nums;
"""

#the actual solution
"""
class Solution:
    def sortJumbled(self, mapping: List[int], nums: List[int]) -> List[int]:
        
        def mp(num):
            res = 0
            m = 1
            if num==0:
                return mapping[num]
            while(num):
                res = res+ mapping[num%10]*m
                num=num//10
                m*=10
            return res
        
        nums.sort(key = lambda x: mp(x))
        return nums
"""