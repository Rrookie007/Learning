import random
import math

# 从文件中生成奖池和筛选词
fd = open("第十三期奖池.txt", 'r+')
f_stop = open("筛选名单.txt", 'a+')
f_stop.write('\n')
people_list = fd.readlines()
print(len(people_list))
fd.close()

# 抽奖结果表和抽奖名额
result_list = []
number = 5

if __name__ == '__main__':
    # 进行抽奖,生成抽奖名单时已经进行了筛选，不会出现重复
    while number > 0:
        # 生成在名单范围内的随机数
        random_value = math.floor(len(people_list) * random.random())
        result = people_list[random_value]
        result_list.append(result)
        number -= 1
        # 中奖的ID将从奖池中消失，并且在筛选名单中出现
        f_stop.write(people_list[random_value])
        del people_list[random_value]

    # 关闭筛选名单
    f_stop.close()
    print(result_list)
