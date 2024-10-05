# 5  :  1 * 2 * 3 * 4 * 5

# n=int(input())
# i=1
# fact=1
# while i<=n:
#     fact*=i
#     i+=1

# for i in range(1,n+1):
#     fact*=i
# print(fact)




# def fact(num):
#     if num==1:
#         return 1
#     return num*fact(num-1)
# print(fact(5))

# v=range(5)
# 0 1 2 3 4
# N=int(input())
# k=range(1,N+1)
# print(k)


# l=range(1,10+1)
# print(l)
# for i in l:
#     print(i)

N=int(input())
fact=1
for i in range(1,N+1):
    # print(i)
    print(fact,'before')
    fact*=i
    print(fact,'after')

