class test:
    x= "hello"
    def __init__(self):
        print(self.x)

    class test2:
        x= "world"
        def __init__(self):
            print(self.x) 
            
        def myfunc():
            return "hello to test"


class final_test(test):
    def __init__(self):
        self.x= self.test2.myfunc()

    def fin_func(self):
        return self.x   


x=final_test()
print(x.fin_func())     
