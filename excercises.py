d = {"Name": "John", "Surname": "Smith"}
# There is no key Smith  in the dictionary. Smith  is a value. You want to use Surname  if you want to access Smith :
print(d["Surname"])

d = {"a": 1, "b": 2}
d["c"] = 3
print(d)

# Question: Calculate the sum of all dictionary values.

d = {"a": 1, "b": 2, "c": 3}
print(d.values())
print(sum(d.values()))

# Question: Filter the dictionary by removing all items with a value of greater than 1.
d = {"a": 1, "b": 2, "c": 3}
d = dict((key, value) for key, value in d.items() if value <= 1)
print(d)

from pprint import pprint

d = dict(a=list(range(1, 11)), b=list(range(11, 21)), c=list(range(21, 31)))
pprint(d)
pprint(d["b"][2])

# Very interesting
for key, value in d.items():
    print(key, "has value", value)

import string
e = []
for letter in string.ascii_lowercase:
    d[letter] = letter
    e.append(letter)
print(e)
f = []
for x in range(1, 11):
    f.append(x)
print(f)

vel1, vel2 = 1, 20
time1, time2 = 4, 8
# Function from those variables will be


def acceleration(v1, v2, t1, t2):
    accel = (v2 - v1) / (t2 - t1)
    return accel


print(acceleration(vel1, vel2, time1, time2))

from math import pi


def liqVolume(h, r=10):
    lv = ((4*pi*r*r*r)/3)-((pi*h*h*(3*r-h))/3)
    return lv


print(liqVolume(2))


def foo():
    global c
    c = 1
    return c


foo()
print(c)

# Counting words in a string
a = "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation."
print(len(a.split()))
