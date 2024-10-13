def filter_list(l):
    'return a new list with the strings filtered out'
    
    'rename list, create empty list'
    list = l
    filtered_list = []

    'check list for int'
    for item in list:
        if isinstance(item, int):
            filtered_list.append(item)
    
    'return new list'
    return filtered_list

'''
CODEWARS BEST SOLUTION

def filter_list(l):
  'return a new list with the strings filtered out'
  return [i for i in l if not isinstance(i, str)]

'''
        