def sum_mix(arr):
    return sum(int(n) for n in arr)

def sum_mix(arr):
    result = 0
    for a in arr:
        try:
            result += a
        except TypeError:
            result += int(a)
    return result

def solution(string):
    return string[::-1]
def square_sum(numbers):
    return sum(x ** 2 for x in numbers)
def digitize(n):
    return [int(x) for x in str(n)[::-1]]
def goals(*args):
    return sum(args)
def remove_char(s):
    return s[1 : -1]
def mouth_size(animal): 
  return 'wide' if animal.lower() != 'alligator' else 'small'
def reverseseq(n):
    return [x for x in range(n,0,-1)]
def reverseseq(n):

    return list(range(n, 0, -1))
def super_size(n):
    b = list(str(n))
    b.sort(reverse=True)
    return int("".join(b))

def super_size(n):
    return int(''.join(sorted(str(n)))[::-1])
Def multiply():
ligne = 1
for loop in range(20):
   colonne = 1
   for loop in range(20):
      print(colonne * ligne, end = " ")
      colonne = colonne + 1
   print()
   ligne = ligne + 1
def remove_duplicate_words(s):
    return ' '.join(dict.fromkeys(s.split()))

def int_diff(arr, n):
    num=0
    for i in range(len(arr)):
        for j in range(i+1,len(arr)):
            if abs(arr[j]-arr[i])==n:
                num+=1
    return num


7kyu
def infected(s):
    total_population = s.split('X')
    total = 0
    infected = 0
    for population in total_population:
        if "1" in population:
            infected += len(population)
        total += len(population)
    
    try:
        return (100 * infected) / total
    except ZeroDivisionError:
        return 0
        
import re

def find_middle(string):
    print(string)

    if type(string) != str:
        return -1
    l = re.findall("\d",string)
    if l == []:
        return -1
    p = 1
    for e in l:
        p *= int(e)
    if len(str(p)) <= 2:
        return p
    if len(str(p)) % 2 == 0:
        return int(str(p)[len(str(p)) // 2-1:len(str(p)) // 2+1])
    else:
        return int(str(p)[len(str(p)) // 2])
def dominator(arr):
    half_length = len(arr) / 2
    for e in arr:
        if arr.count(e) > half_length:
            return e
    return -1
def testit(n):
    return bin(n).count('1')

s='01000000X000X011X0X'

def infected(s):
    s=s.split('X')
    for ele in s:
        if '1' in ele:
            ele=ele.replace('0','1')  
        chaine=''    
        s=','.join(ele)
    
        infectation=ele.count('1')
        uninfected=ele.count('0')
        if len(s)!=0:
            infected_percentage=infectation*100/len(s)
            print(infected_percentage)


def save(sizes, hd):
    x=0
    counter=0
    for ele in sizes:
        x+=ele
        if x <= hd:
            counter+=1
        if counter<0:
            counter=0
    return counter

def convert_my_dollars(usd, currency):
    #if currency.upper().startswith (('A','E','I','O','U')):
        if currency == "Uzbekistani Som":
            result = usd * 8333
            return 'You now have {} of {}.'.format(result,currency)
        if currency == "Bangladeshi Taka":
            result = usd *int('1010010',2)
            return 'You now have {} of {}.'.format(result,currency)


def find_screen_height(width, ratio): 
    string=ratio.split(':')
    result=width/int(string[0])
    result2=result*int(string[1])
    final_result = '{}x{}'.format(width,int(result2))
    return final_result

def dominator(arr):
    x=0
    mylist=[]
    mylist2=[]
    sort_list=(sorted(arr,key=arr.count))
    for e in sort_list: 
        if e in mylist:
            x+=1
        if e not in mylist:
            mylist2.append(x)
            x=0
            x+=1
            mylist=mylist[:0]
            mylist.append(e)
    mylist2.append(x)
    if mylist2.count(max(mylist2))>1:
        return -1
    if sort_list==[]:
        return -1
    if sort_list.count(mylist[0])<=(len(sort_list)/2):
        return -1
    return mylist[0]


#----------------------------------------------------------------

def split_in_parts(s, part_length):
    result=[s[x:x+part_length] for x in range(0,len(s), part_length)]
    result=','.join(result)
    return result.replace(',',' ')
from textwrap import wrap
def split_in_parts(s, part_length):
    return " ".join(wrap(s,part_length))
def greet(name):
    name = name.lower()
    return "Hello " + name[0].upper() + name[1:] + "!"
def greet(name):
    return f"Hello {name.capitalize()}!"
def greet(name):
    lst = []
    lst.append(name[0].upper())
    for i in range(len(name)-1):
        lst.append(name[i+1].lower())
    print("Hello " + "".join(lst) + "!")
def get_strings(city):
    city = city.lower()
    result = ""
    for e in city:
        if e not in result and e !=' ':
            result+=e+':'+ '*'*city.count(e)+','
    return result[:-1]
def scrabble_score(st):
    result=0
    print(dict_scores)
    st=st.upper().replace(' ','')
    if st == "":
        return 0
    for ele in st:
        result+=dict_scores[ele]
    return result
def halving_sum(n):
    x=0
    while n:
        x+=n ; n>>=1
    return x          
def halving_sum(n):
  if n == 1:
    return 1
  else:
    return n + halving_sum(int(n/2))
def round_to_next5(n):
    if n % 5 == 0:
        return n
    while n:
        if n % 5 != 0:
            n+=1
        if n % 5 == 0:
            return n
def round_to_next5(n):
    while n%5!=0:
        n+=1
    return n
def greet(name):
    return f"hello {name}!" if name else None
def largest_pair_sum(numbers):
    return sum(sorted(numbers)[-2:])
def largest_5_digits(digits):
    mylist = []
    for i in range(len(digits)):
        mylist.append(digits[i:i+5])
    return int(max(mylist))
def generate_integers(m, n):
    arr=[]
    for e in range (m,n+1,1):
        arr.append(e)
    return arr
def generate_integers(m, n):
    return list(range(m,n+1))

def capital(capitals):
    mylist = []
    for i in capitals:
        list_of_values = list(i.values())
        print(list_of_values)
        mylist.append("The capital of " + list_of_values[0] + " is " + list_of_values[1])
    print(mylist)
    return mylist
def capital(capitals):
    mylist = []
    for e in capitals:
        # a = e['state']    => provoque key error
        # b = e['country']  => provoque key error
        # c = e['capital']  => provoque key error
        a = e.get('state','')
        b = e.get('country','')
        c = e.get('capital','')
        mylist.append('The capital of {}{} is {}'.format(a,b,c))
    print(mylist)

# capital([{"state" : 'Maine', 'capital': 'Augusta'}, {'country': 'Spain', "capital" : "Madrid"}])


# two fonctions together
def lastname(name):
    name = name.split()
    return name[1]
    
def sort_reindeer(reindeer_names):
    reindeer_names.sort(key=lastname)
    return reindeer_names

def sort_reindeer(reindeer_names):
    return sorted(reindeer_names, key=lambda el: el.split(' ')[-1])

def sort_reindeer(reindeer_names):
    sorted_list = []
    for name in reindeer_names:
        sorted_list.append(name.split())
    sorted_list = sorted(sorted_list, key=lambda names: names[1])

    result = []

    for item in sorted_list:
        name = item[0] + ' ' + item[1]
        result.append(name)
    
    return result
def solve(a,b):
    string=''
    for e in a:
        if e not in b:
           string+=e
        else:
            pass
    for ele in b:
        if ele not in a:
            string+=ele
        else:
            pass
    return string
def solve(a,b):
    return "".join([e for e in a if e not in b]+[e for e in b if e not in a])
