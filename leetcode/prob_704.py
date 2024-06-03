class Solution:
    def search(self, nums: List[int], target: int) -> int:

        res= self.binarySearch(nums,0,len(nums)-1,target)
        return res


    def binarySearch(self,nums: [int], left: int, right:int, target:int):
        if left<=right:
            mid= int( right+left)//2
            if(target==nums[mid]):
                return mid
            if (target<nums[mid]):
                return self.binarySearch(nums,left, mid-1,target)
            else:
                return self.binarySearch(nums,mid+1, right,target)
        return -1


    def iterativeBinarySearch(self,nums:[int],left:int,right:int,target:int):

        while left<=right:
            mid=int(left+right)//2
            if(nums[mid]==target):
                return  mid
            elif(nums[mid]>target):
                right=mid-1
            else:
                left=mid+1
        return -1

            