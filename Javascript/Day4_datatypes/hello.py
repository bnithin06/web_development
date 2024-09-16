def reverse(nums,si,ei):
    while si<ei:
        nums[si],nums[ei]=nums[ei],nums[si]
        si+=1
        ei-=1

nums = [1,2,3,4,5,6,7]

# 3 2 1 
# 7 6 5 4
# 4 5 6 7 1 2 3
# k = 3
# k=k%len(nums)
# k=len(nums)-k 
# reverse(nums,0,k-1)
# reverse(nums,k,len(nums)-1)
# reverse(nums,0,len(nums)-1)
# print(nums)

nums = [0,1,0,3,12]
temp=[]
for ele in nums:
    if ele!=0:
        temp.append(ele)
for i in range(len(temp)):
    nums[i]=temp[i]
for i in range(len(temp),len(nums)):
    nums[i]=0
print(temp)
print(nums)
