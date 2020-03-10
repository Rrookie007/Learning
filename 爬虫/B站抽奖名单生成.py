import requests
import json
import math


headers = {
    'Accept': '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Connection': 'keep-alive',
    'Cookie': 'finger=edc6ecda; fts=1525628021; buvid3=7C43E3CB-F405-4168-89D9-66C9F6AA587365578infoc; '
              'DedeUserID=6326242; DedeUserID__ckMd5=175874ff2438883f; SESSDATA=fdc0ee84%2C1528220035%2C07faf1f4; '
              'bili_jct=e2e344c5c06419b64c3d401fe0932e1d; rpdid=iwwswxiqskdosisxiloiw; sid=ldpf4965; '
              'UM_distinctid=1633a1873e238-07c99fc1922387-3961430f-144000-1633a1873e3bc5; '
              'im_notify_type_6326242=0; im_seqno_6326242=352; im_local_unread_6326242=0; CURRENT_QUALITY=112; '
              'LIVE_BUVID=48cefee25bdb8ce4b0a0fd8fd885c815; LIVE_BUVID__ckMd5=77b57a8f9fbddd0e; '
              'bp_t_offset_6326242=119048358777215893; BANGUMI_SS_23858_REC=200166; '
              'BANGUMI_SS_21469_REC=173280; _dfcaptcha=56e59a44fd5908523db902f28be7f6fc',
    'Host': 'api.bilibili.com',
    'Referer': 'https://www.bilibili.com/video/av23610722/',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 '
                  '(KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36'
}


# 定义筛选词表,包括自己和已中奖的
f_stop = open("筛选名单.txt", 'r')
stop_word = f_stop.readlines()


def page_count(data):
    count = data['page']['count']
    size = data['page']['size']
    page_sum = math.ceil(count / size)
    print('共'+str(page_sum)+'页,正在抓取')
    return page_sum


def discover2(data):
    for num in range(0, len(data['replies'])):
        message = data['replies'][num]['member']['uname']
        temp = message+"\n"
        # 筛选,已中奖的不会出现，同一个名称不会出现两次
        if temp not in stop_word:
            fd.write(message+"\n")
            stop_word.append(message+"\n")


def discover1(data):
    for num in range(0, len(data['replies'])):
        message = data['replies'][num]['member']['uname']
        temp = message+"\n"
        # 筛选,已中奖的不会出现，同一个名称不会出现两次
        if temp not in stop_word:
            fd.write(message+"\n")
            stop_word.append(message+"\n")


def json_decode(page):
    json_data = page.split('({')[-1]
    json_data = json_data.split('})')[0]
    json_data = '{' + json_data + '}'
    # print(json_data)
    data = json.loads((json_data))['data']
    return data


def crawl(url):
    resp = requests.get(url, headers=headers)
    page = resp.text
    return page


if __name__ == '__main__':
    print('请输入视频序号，e.g "22985354"')
    # print(stop_word)
    in_put = str(input())
    oid = in_put
    # oid = in_put.split('/av')[-1]
    # 这里需要测出评论的页数，以确定循环的范围，所以先爬取第一页的信息算出总页数
    url1 = 'https://api.bilibili.com/x/v2/reply?callback=jQuery172030722813986382214_1527272528113&jsonp=jsonp&pn=2&' \
           'type=1&oid='+oid+'&sort=0&_=1527272995287'
    pagesum1 = page_count(json_decode(crawl(url1)))

    """
    # 评论中的回复信息也需要确定范围循环抓取
    url2 = 'https://api.bilibili.com/x/v2/reply/reply?callback=jQuery17204811273937068956_1525589286792&jsonp=jsonp&' \
           'pn=1&type=1&oid='+oid+'&ps=10&root=766874419&_=1525592907908'
    'https://api.bilibili.com/x/v2/reply/reply?callback=jQuery17206756395295067743_1526664071823&jsonp=jsonp&pn=1&' \
    'type=1&oid=23297516&ps=10&root=777696721&_=1526664436810'
    pagesum2 = page_count(json_decode(crawl(url2)))
    """
    # 总页数计算完毕，开始爬取评论内容
    fd = open('第十三期奖池.txt', 'w')
    # 先抓取评论区
    for pn1 in range(1, pagesum1+1):
        url1 = 'https://api.bilibili.com/x/v2/reply?callback=jQuery172030722813986382214_1527272528113&jsonp=jsonp&' \
              'pn=' + str(pn1) + '&type=1&oid='+oid+'&sort=0&_=1520494073669'
        discover1(json_decode(crawl(url1)))
    # 再抓取回复
    """
    for pn2 in range(1, pagesum2+1):
        url2 = 'https://api.bilibili.com/x/v2/reply/reply?callback=jQuery17204811273937068956_1525589286792&' \
               'jsonp=jsonp&pn='+str(pn2)+'&type=1&oid='+oid+'&ps=10&root=766874419&_=1525592907908'
        discover2(json_decode(crawl(url2)))
    """
    print("抓取完毕，已生成奖池名单")
    fd.close()
    f_stop.close()
