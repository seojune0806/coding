import csv
import matplotlib.pyplot as plt
import matplotlib.font_manager as fm
import numpy

BMJUA = fm.FontProperties(fname='./BMJUA_ttf.ttf')
f = open('data.csv', 'r', encoding='utf-8')
rdr = list(csv.reader(f))
avr_list = [0,0,0,0,0]
count_list =[0,0,0,0,0]
for line in rdr[1:]:
    counter = []
    if line[1] == "갤럭시 Z 플립":
        avr_list[0] += int(line[2])
        count_list[0] += 1
    elif line[1] == "갤럭시 S 시리즈":
        avr_list[1] += int(line[2])
        count_list[1] += 1
    elif line[1] == "아이폰 pro 시리즈":
        avr_list[2] += int(line[2])
        count_list[2] += 1
    elif line[1] == "아이폰 mini 시리즈":
        avr_list[3] += int(line[2])
        count_list[3] += 1
    elif line[1] == "아이폰 max 시리즈":
        avr_list[4] += int(line[2])
        count_list[4] += 1
    avr_list = numpy.array(avr_list)
    count_list = numpy.array(count_list)
    a = avr_list/count_list
    a = list(numpy.round_(a,1))
x = numpy.arange(5)
years = ["갤럭시 Z 플립","갤럭시 S 시리즈","아이폰 pro 시리즈","아이폰 mini 시리즈","아이폰 max 시리즈"]
values = a

plt.bar(x, values)
plt.xticks(x, years, fontproperties=BMJUA)

plt.show()
f.close()
