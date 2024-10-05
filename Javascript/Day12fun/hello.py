row=int(input('Enter the row :'))
val=row+2
for i in range(1,row+1):
    print(' '*(row-i)+'*'*val)
    val-=2