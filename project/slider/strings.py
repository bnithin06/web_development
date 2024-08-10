# s='Hello python programming language'
# l=s.split()
# for st in l:
#     if len(st)%2==0:
#         print(st)

# s='maximum'
# d={}
# for char in s:
#     if char not in d:
#         d[char]=1
#     else:
#         d[char]=d[char]+1
# for key,value in d.items():
#     print(key,value)    


# s=input()
# n=int(input())
# i=0
# while i<len(s):
#     res=''
#     j=0
#     while j<n:
#         if (i+j)<=n:
#             res+=s[i+j]
#         j+=1
#     print(res)
#     i+=n


s='python'
idx=2
# 1 based indexing
# i=0
# res=''
# while i<len(s):
#     if (i+1)!=idx:
#         res+=s[i]
#     i+=1
# print(res)


s='python'
#  012345

i=0
idx=1
while i<len(s):
    if i!=idx:
        # 0!=1
        print(s[i])
        # 
    i+=1



