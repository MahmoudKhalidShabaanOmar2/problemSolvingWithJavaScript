# write a python program to get number from the user , add auto increment half of the number to your entered number by using function method =>
# number = int(input("Please Enter The Number Is = "))
# def get_number(num) :
#     print("The Number Is = ",str(num))
#     half_count_number = num // 2
#     print("The Half Count Number Is = ",str(half_count_number))
#     for i in range(half_count_number) :
#         sum_of_number_half_number = num + i 
#         print(f"The Sum Of The Number , And The Half Number ({i} + {num}) Is = ",str(sum_of_number_half_number))
# get_number(number)

def get_number(num) :
    print("The Number Is = ",str(num))
    half_count_number = num // 2
    print("The Half Count Number Is = ",str(half_count_number))
    for i in range(half_count_number) :
        sum_of_number_half_number = num + i 
        print(f"The Sum Of The Number , And The Half Number ({i} + {num}) Is = ",str(sum_of_number_half_number))
    return("")
number = int(input("Please Enter The Number Is = "))
displaying_sum_of_number_half_number = get_number(number)
print(displaying_sum_of_number_half_number)