class Node:
    def __init__(self,data = None,next = None):
        self.data = data
        self.next = next

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None

    def insert_at_begining(self,data):
        node = Node(data)
        if self.head == None:
            self.head = node
            self.tail = node
            return
        node.next = self.head
        self.head = node
    
    def insert_at_end(self,data):
        node = Node(data)
        self.tail.next = node
        self.tail = node
    
    def get_len(self):
        itr = self.head
        count = -1
        while itr:
            count += 1
            itr = itr.next
        return count
    
    def insert(self,index,data):
        if index > self.get_len():
            raise Exception("index out of range ")
        if index < 0:
            index = self.get_len() + 1 + (index) # here the - sign automatically available for the index
        if index == 0:
            self.insert_at_begining(data)
            return
        if index == self.get_len():
            self.insert_at_end(data)
            return
        itr = self.head
        count = -1
        while itr:
            if count == index-1:
                node = Node(data)
                node.next = itr.next
                itr.next = node
            itr = itr.next
            count += 1
        
    def print_list(self):
        print(self.get_len())
        itr = self.head
        while itr:
            print(str(itr.data)+"-->",end="")
            itr = itr.next

list1 = LinkedList()
list1.insert_at_begining(32)
list1.insert_at_begining(42)
list1.insert_at_end("kavaskar")
list1.insert_at_end("test")
list1.insert(0,"hello")
list1.insert(-2,"last_test")
list1.insert(list1.get_len()+1,"error_test")
list1.print_list()