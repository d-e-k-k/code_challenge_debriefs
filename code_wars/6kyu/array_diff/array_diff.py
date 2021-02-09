def array_diff(a, b):
    answer = []
    for each in a:

        if(each not in b):
            answer.append(each)

    return answer



