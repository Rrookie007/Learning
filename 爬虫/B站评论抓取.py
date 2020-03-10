import requests
import os
import time
import json
import math

# oid表示url中的序列号
date = time.strftime('%Y-%m-%d')


# 计算页数
def page_count(data):
    count = data['page']['count']
    size = data['page']['size']
    page_sum = math.ceil(count / size)
    return page_sum


def discover(data):
    for num in range(0, len(data['replies'])):
        message = data['replies'][num]['content']['message']
        #print(message)
        os.write(fd, bytes(message, "utf-8"))


def json_decode(page):
    json_data = page.split('({')[-1]
    json_data = json_data.split('})')[0]
    json_data = '{' + json_data + '}'
    data = json.loads((json_data))['data']
    return data


def crawl(url):
    resp = requests.get(url)
    page = resp.text
    json_decode(page)
    return page


if __name__ == '__main__':
    print('输入番号id')
    oid = str(input())
    url = 'https://api.bilibili.com/x/v2/reply?callback=jQuery17204444125501972074_1520494056982&jsonp=jsonp&' \
          'pn=' + str(1) + '&type=1&oid='+oid+'&sort=0&_=1520494073669'
    pagesum = page_count(json_decode(crawl(url)))
    #print(pagesum)
    fd = os.open('av'+oid+'-'+str(date)+'.txt', os.O_CREAT | os.O_RDWR)
    for pn in range(1, pagesum+1):
        print("正在抓取第"+str(pn)+"页评论")
        url = 'https://api.bilibili.com/x/v2/reply?callback=jQuery17204444125501972074_1520494056982&jsonp=jsonp&' \
              'pn=' + str(pn) + '&type=1&oid='+oid+'&sort=0&_=1520494073669'
        discover(json_decode(crawl(url)))
    os.close(fd)
    print("评论抓取完毕")
