#Do not remove the below import statement
import sys

'''This function provides the capacity, size and space left in the list.
You can invoke it to get the details of the list'''

def list_details(lst):
    #Number of elements that can be stored in the list
    print("Capacity:", (sys.getsizeof(lst)-64)//8)

    #Number of elements in the list
    print("Size:", len(lst))

    #Number of elements that can be accommodated in the space left
    print("Space Left:", ((sys.getsizeof(lst)-64) - len(lst*8))//8)

    #formula changes based on the system architecture
    #(size-64)/4 for 32 bit machines and
    #(size-64)/8 for 64 bit machines

    # 64,64 - size of an empty list based on machine
    # 4,8 - size of a single element in the list based on machine

marias_lst=[]
print("Empty list created!!!")
print("List details:")
list_details(marias_lst)


marias_lst.append("Sugar")
marias_lst.append("Salt")
marias_lst.append("Pepper")
marias_lst.append("Tomato")
print("Maria's list after adding Sugar:")
print(marias_lst)
print("List details:")
print(marias_lst*4)
list_details(marias_lst)