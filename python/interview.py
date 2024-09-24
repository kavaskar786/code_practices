#palindrom
x = input("enter the word: ")

if x == x[::-1]:
    print("it is palindrom")
else:
    print("it is not a palindrome")