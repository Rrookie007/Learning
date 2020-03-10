#!/usr/bin/env python
# coding = utf-8
"""
Image-colored wordcloud
=======================

You can color a word-cloud by using an image-based coloring strategy
implemented in ImageColorGenerator. It uses the average color of the region
occupied by the word in a source image. You can combine this with masking -
pure-white will be interpreted as 'don't occupy' by the WordCloud object when
passed as mask.
If you want white as a legal color, you can just pass a different image to
"mask", but make sure the image shapes line up.
"""

import time
from os import path
from PIL import Image
import matplotlib.pyplot as plt
import numpy as np
import jieba
from scipy.misc import imread
from wordcloud import WordCloud, ImageColorGenerator

# 视频序列号
print("请输入番剧ID")
oid = str(input())

date = time.strftime('%Y-%m-%d')
d = path.dirname(__file__)
isCN = 1
back_color_path = "新版logo1.png"
text_path = 'D:/工具/Pycharmproject/Sipder/B站评论/av'+oid+'-'+str(date)+'.txt'
font_path = '‪C:\Windows\Fonts\msyhbd.ttc'
stopwords_path = 'B站词云停用词\国乐大典.txt'
img_name = "WordCloudDefaultColors.png"
my_word_list = ["国乐大典", "柳青瑶", "b站", "潮乐", "好节目", "非常棒", "越来越好", "B站", "特别喜欢", "非常感谢",
                "辣鸡", "好好加油", "五色风", "龚锣新", "签名照", "海上城潮乐团", "海上城", "打call", "方独秀"
                , "女子水晶乐坊", "女子水晶", "女水", "拉低中奖率", "二次元", "广东卫视", "李玉刚", "千本樱", "陆二胡"
                , "五弦琵琶", "龚琳娜", "小河淌水", "符生乐团", "月之源", "神仙打架", "献上膝盖", "中国文化", "游园惊梦",
                "十面埋伏", "霸王卸甲", "梨花颂", "国家宝藏", "签名照", "巅峰之夜", "开始到现在", "第一期"]
back_color = imread(path.join(d, back_color_path))


# 设置词云属性
wc = WordCloud(font_path=font_path,
               background_color="white",
               mask=back_color,    # //如果参数为空，则使用二维遮罩绘制词云。如果 mask 非空，设置的宽高值将被忽略
                                    # 遮罩形状被 mask 取代除全白（#FFFFFF）的部分将不会绘制，其余部分会用于绘制词云。
                                    # 如：bg_pic = imread('读取一张图片.png')背景图片的画布一定要设置为白色（#FFFFFF）
                                    # 然后显示的形状为不是白色的其他颜色。
               max_words=80,
               max_font_size=200,
               random_state=42,
               width=2000, height=1500, margin=2,
               )


# 添加自己的分词库
def add_word(list):
    for items in list:
        jieba.add_word(items)


add_word(my_word_list)

text = open(text_path, 'rb').read().decode("utf-8")


def jiebaclearText(text):
    # 添加词库
    mywordlist = ["国乐大典", "国家宝藏", "水龙吟", "b站"]
    seg_list = jieba.cut(text, cut_all=False, HMM=True)
    liststr = "/".join(seg_list)
    f_stop = open(stopwords_path)
    try:
        f_stop_text = f_stop.read()
        f_stop_text = np.unicode(f_stop_text, "utf-8")
    finally:
        f_stop.close()
        f_stop_seg_list = f_stop_text.split("\n")
        for myword in liststr.split("/"):
            if not(myword.strip() in f_stop_seg_list) and len(myword.strip())>1:
                mywordlist.append(myword)
        return ''.join(mywordlist)


if isCN:
    text = jiebaclearText(text)
    temp = jieba.cut(text, cut_all=False, HMM=True)
    text = " ".join(temp)


wc.generate(text)
plt.imshow(wc)
plt.axis('off')
plt.show()

# 保存图片
wc.to_file('av'+oid+'-'+str(date)+'.jpg')
