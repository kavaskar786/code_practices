a = int(input())
i,b = 2,True

while i**2 <= a:
    i += 1
for i in range(2,i):
    if (a%i == 0):
        b = False
if b == True:
    print("it is prime number")
else:
    print("not a prime number")



