# coding:utf-8

import gzip
import os
import re
import urllib.request
from io import BytesIO

# 页数
page_num = 1

# 最小观看量
look_max_num = 1

i = 0

video_get_list = []
#这个while可以做成一个函数
while i < page_num:
    i += 1
    print(r'the', i, ' page, total',  page_num, ' page')
    this_url = "http://www.bilibili.com/video/douga-mad-" + str(i) + ".html"
    try:
        req = urllib.request.Request(this_url)
        response = urllib.request.urlopen(req)
        the_page = response.read()
        
        buff = BytesIO(the_page)#gzip包处理
        f = gzip.GzipFile(fileobj=buff)
        html = f.read().decode('utf-8')
        print(html)

        re_str = '''<li class="l1">(.*?)/i>'''#正则表达式提取播放数
        re_pat = re.compile(re_str)
        dh_list = re_pat.findall(html)
        print(dh_list)
        print('-------------------------')

        for item in dh_list:
            # print '-------->', item

            look_str = '''title="观看">(.*?)<'''
            look_pat = re.compile(look_str)
            look_list = look_pat.findall(item)  

            if str(look_list[0]).find('-') < 0: #会员的世界不计入排行
                look_num = int(look_list[0])
                if look_num > look_max_num: 

                    dn_str = '''class="title">(.*?)</a><div'''
                    dn_pat = re.compile(dn_str)
                    dn_list = dn_pat.findall(item)

                    av_str = '''</a><a href="/video/(.*?)/" target="_blank" class="title"'''
                    av_pat = re.compile(av_str)
                    av_list = av_pat.findall(item)  

                    print ('-------->video name:'), dn_list[0]
                    print ('-------->look number:'), look_list[0]   

                    video_get_list.append({'av' : av_list[0], 'name': dn_list[0], 'look': look_list[0]})

    except urllib.error.HTTPError as e:
        pass
    except urllib.error.URLError as e:
        pass



# 新建文件写入结果
fd = os.open("f2.txt", os.O_RDWR|os.O_CREAT)
i = 0
for dh in video_get_list:
    i += 1
    insert_str = 'No.' + str(i) + '\n' + str(dh['av']) + '\n' + str(dh['name']) + '\n' +'  观看数量:' + str(dh['look']) \
                 + '\n\n'
    os.write(fd, insert_str)
    os.close(fd)