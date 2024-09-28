a = [7, 12, 9, 4, 11]

#using the function
min(a)

# using the for loop
val = a[0]
for i in a:
    if i<val:
        val = i
print(val)