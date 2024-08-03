import pandas as pd
import numpy as np

df = pd.read_csv("test.csv")

#calculating the mean
x1_b=np.average(df["x1"])
x2_b = np.average(df["x2"])


#calculate the covariance
x1_x2 = 1/(len(list(df["x1"]))-1)* (np.sum((df["x1"]-x1_b)*(df["x2"]-x2_b)))
x1_x1 = 1/(len(list(df["x1"]))-1)* (np.sum((df["x1"]-x1_b)**2))
x2_x2 = 1/(len(list(df["x1"]))-1)* (np.sum((df["x2"]-x2_b)**2))


S = [[x1_x1,x1_x2],[x1_x2,x2_x2]]
x= 1
test = S - x*np.identity(2)
print(test)

