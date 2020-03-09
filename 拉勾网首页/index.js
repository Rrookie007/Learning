//常量
const sideBarList = [
    {
        head: "技术",
        a: ["Java", "PHP", "C++", "区块链"],
        hidden: [
            {
                head: "后端开发",
                a: ["Java", "C++", "PHP", "数据挖掘", "搜索算法",
                    "精准推荐", "C", "C#", "全栈工程师", ".NET", "Hadoop",
                    "Python", "Delphi", "VB", "Perl", "Ruby", "Node.js",
                    "GO", "ASP", "Shell", "区块链", "后端开发其它"]
            },
            {
                head: "移动开发",
                a: ["HTML5", "Android", "iOS", "WP", "移动开发其它"]
            },
            {
                head: "前端开发",
                a: ["web前端", "Flash", "html5", "JavaScript", "U3D",
                    "COCOS2D-X", "前端开发其它"]
            },
            {
                head: "人工智能",
                a: ["深度学习", "机器学习", "图像处理", "图像识别", "语音识别",
                    "机器视觉", "算法工程师", "自然语言处理"]
            },
            {
                head: "测试",
                a: ["测试工程师", "自动化测试", "功能测试", "性能测试", "测试开发",
                    "游戏测试", "白盒测试", "灰盒测试", "黑盒测试", "手机测试", "硬件测试",
                    "测试经理", "测试其它"]
            },
            {
                head: "运维",
                a: ["运维工程师", "运维开发工程师", "网络工程师", "系统工程师", "IT支持",
                    "IDC", "CDN", "F5", "系统管理员", "病毒分析", "WEB安全",
                    "网路安全", "系统安全", "运维经理", "运维其它"]
            },
            {
                head: "DBA",
                a: ["MySQL", "SQLServer", "Oracle", "MongoDB", "ETL",
                    "Hive", "数据仓库", "DBA其它"]
            },
            {
                head: "高端职位",
                a: ["技术经理", "技术总监", "架构师", "CTO", "运维总监",
                    "技术合伙人", "项目总监", "测试总监", "安全专家", "高端技术职位其它"]
            },
            {
                head: "项目管理",
                a: ["项目经理", "项目助理"]
            },
            {
                head: "硬件开发",
                a: ["硬件", "嵌入式", "自动化", "单片机", "电路设计",
                    "驱动开发", "系统集成", "FPGA开发", "DSP开发", "ARM开发", "PCB工艺",
                    "模具设计", "热传导", "材料工程师", "精益工程师", "射频工程师", "硬件开发其它"]
            },
            {
                head: "企业软件",
                a: ["实施工程师", "售前工程师", "售后工程师", "BI工程师", "企业软件其它"]
            }
        ]
    },
    {
        head: "产品",
        a: ["产品总监", "产品经理"],
        hidden: [
            {
                head: "产品经理",
                a: ["产品经理", "网页产品经理", "移动产品经理", "产品助理", "数据产品经理",
                    "电商产品经理", "游戏策划", "产品实习生"]
            },
            {
                head: "产品设计师",
                a: ["网页产品设计师", "无线产品设计师"]
            },
            {
                head: "高端职位",
                a: ["产品部经理", "产品总监", "游戏制作人"]
            }
        ]
    },
    {
        head: "设计",
        a: ["UI设计师", "交互设计", "网页设计师"],
        hidden: [
            {
                head: "视觉设计",
                a: ["视觉设计师", "网页设计师", "Flash设计师", "APP设计师", "UI设计师",
                    "平面设计师", "美术设计师（2D/3D）", "广告设计师", "多媒体设计师", "原画师", "游戏特效",
                    "游戏界面设计师", "游戏场景", "游戏角色", "游戏动作"]
            },
            {
                head: "交互设计",
                a: ["交互设计师", "无线交互设计师", "网页交互设计师", "硬件交互设计师"]
            },
            {
                head: "用户研究",
                a: ["数据分析师", "用户研究员", "游戏数值策划"]
            },
            {
                head: "高端职位",
                a: ["设计经理/主管", "设计总监", "视觉设计经理/主管", "视觉设计总监", "交互设计经理/主管",
                    "交互设计总监", "用户研究经理/主管", "用户研究总监"]
            }
        ]
    },
    {
        head: "运营",
        a: ["新媒体运营", "编辑", "数据运营"],
        hidden: [
            {
                head: "运营",
                a: ["用户运营", "产品运营", "数据运营", "内容运营", "活动运营",
                    "商家运营", "品类运营", "游戏运营", "网络推广", "运营专员", "网店运营",
                    "新媒体运营", "海外运营", "运营经理"]
            },
            {
                head: "编辑",
                a: ["副主编", "内容编辑", "文案策划", "记者"]
            },
            {
                head: "客服",
                a: ["售前咨询", "售后客服", "淘宝客服", "客服经理"]
            },
            {
                head: "高端职位",
                a: ["主编", "运营总监", "COO", "客服总监"]
            }
        ]
    },
    {
        head: "市场",
        a: ["市场营销", "市场推广", "市场策划"],
        hidden: [
            {
                head: "市场/营销",
                a: ["市场营销", "市场策划", "市场顾问", "商务渠道", "商业数据分析",
                    "活动策划", "网络营销", "海外市场", "商务专员"]
            },
            {
                head: "媒介/公关",
                a: ["政府关系", "品牌公关", "广告协调", "媒介投放", "媒介合作",
                    "媒介顾问"]
            },
            {
                head: "品牌/广告",
                a: ["广告创意", "广告制作", "广告文案", "广告投放", "广告定价",
                    "广告专员", "品牌合作", "品牌策划", "品牌专员", "美术指导"]
            },
            {
                head: "渠道/推广",
                a: ["市场推广", "渠道推广", "SEO", "SEM"]
            },
            {
                head: "高端职位",
                a: ["策划经理", "媒介经理", "市场总监", "公关总监", "媒介总监",
                    "创意总监"]
            }
        ]
    },
    {
        head: "销售",
        a: ["销售专员", "销售经理", "销售总监"],
        hidden: [
            {
                head: "销售",
                a: ["销售专员", "销售顾问", "销售经理", "客户代表", "大客户代表",
                    "客户经理", "商务拓展", "渠道销售", "代理商销售", "电话销售", "广告销售",
                    "信用卡销售", "保险销售", "销售工程师", "商务渠道", "其他销售"]
            },
            {
                head: "销售管理",
                a: ["销售总监", "商务总监", "区域总监", "城市经理", "团队经理",
                    "销售VP", "商务主管", "其他销售管理职位"]
            }
        ]
    },
    {
        head: "职能",
        a: ["HR", "行政", "财务", "审计"],
        hidden: [
            {
                head: "人力资源",
                a: ["人力资源", "招聘", "HRBP", "人事/HR", "培训经理",
                    "薪资福利经理", "绩效考核经理", "员工关系"]
            },
            {
                head: "行政",
                a: ["助力", "前台", "行政", "总助", "文秘"]
            },
            {
                head: "财务",
                a: ["会计", "出纳", "财务", "结算", "税务",
                    "审计", "风控"]
            },
            {
                head: "法务",
                a: ["法务", "律师", "专利"]
            },
            {
                head: "高端职位",
                a: ["行政总监/经理", "财务总监/经理", "HRD/HRM", "CFO", "CEO"]
            }
        ]
    },
    {
        head: "游戏",
        a: ["小游戏开发", "U3D", "游戏策划"],
        hidden: [
            {
                head: "技术开发",
                a: ["H5游戏开发", "小游戏开发", "游戏后端开发", "C++游戏开发", "FLASH",
                    "COCOS2D-X", "U3D", "游戏测试"]
            },
            {
                head: "产品制作",
                a: ["游戏制作人", "游戏产品经理", "游戏项目经理", "游戏策划", "剧情设计",
                    "游戏文案"]
            },
            {
                head: "设计",
                a: ["游戏动画", "游戏原画", "游戏界面", "游戏场景", "游戏角色",
                    "游戏动作", "游戏动效", "游戏美工"]
            },
            {
                head: "运营/推广",
                a: ["游戏运营", "游戏编辑", "游戏推广", "手游推广", "页游推广"]
            },
            {
                head: "其他",
                a: ["游戏主播", "游戏陪练", "游戏体验", "电竞主持", "电竞讲师"]
            }
        ]
    }
]

const slideStyle = [
    {
        transition: "all 0.55s ease 0s",
        transform: "translate3d(0px, 0px, 0px)"
    },
    {
        transition: "none 0s ease 0s",
        transform: "translate3d(840px, 0px, 0px)"
    },
    {
        transition: "all 0.55s ease 0s",
        transform: "translate3d(-840px, 0px, 0px)"
    },
    {
        transition: "all 0.55s ease 0s",
        transform: "translate3d(840px, 0px, 0px)"
    },
    {
        transition: "none 0s ease 0s",
        transform: "translate3d(-840px, 0px, 0px)"
    }
]

const positionList = [
    {
        h2: "技术专家（容器&K8S&Istio）",
        date: " [11:45发布] ",
        salary: "25k-45k",
        exp: "经验5-10年",
        edu: "本科",
        labels: ["运维"],
        logo: "./static/position-logo/beike.png",
        name: "贝壳",
        industory: ["房产家居", "D轮及以上", "北京"]
    },
    {
        h2: "交互设计师",
        date: " [11:45发布] ",
        salary: "15k-25k",
        exp: "经验不限",
        edu: "本科",
        labels: ["企业服务", "用户体验", "B端产品"],
        logo: "./static/position-logo/tuibao.png",
        name: "杭州推宝科技有限公司",
        industory: ["移动互联网", "C轮", "杭州"]
    },
    {
        h2: "游戏运营（安全方向） - 运营中心200",
        date: " [11:44发布] ",
        salary: "10k-20k",
        exp: "经验不限",
        edu: "本科",
        labels: ["节日礼物", "技能培训", "免费班车"],
        logo: "./static/position-logo/wangyi.png",
        name: "网易",
        industory: ["电商", "上市公司", "广州"]
    },
    {
        h2: "华东区销售负责人/销售总监",
        date: " [11:44发布] ",
        salary: "25k-50k",
        exp: "经验5-10年",
        edu: "大专",
        labels: ["大数据", "互联网金融"],
        logo: "./static/position-logo/tianchuang.jpg",
        name: "天创信用",
        industory: ["移动互联网,金融", "B轮", "上海"]
    },
    {
        h2: "大数据开发工程师",
        date: " [11:44发布] ",
        salary: "12k-20k",
        exp: "经验不限",
        edu: "本科",
        labels: ["金融", "移动互联网", "Java"],
        logo: "./static/position-logo/zhonghuacaixian.png",
        name: "中华财险南方创新研发中心",
        industory: ["金融 软件开发", "不需要融资", "杭州"]
    },
    {
        h2: "高级视觉设计师",
        date: " [11:44发布] ",
        salary: "10k-15k",
        exp: "经验3-5年",
        edu: "本科",
        labels: ["工具软件", "移动互联网", "视觉"],
        logo: "./static/position-logo/meirenxinxi.jpg",
        name: "美人信息",
        industory: ["移动互联网", "A轮", "广州"]
    },
    {
        h2: "电销主管",
        date: " [11:44发布] ",
        salary: "15k-25k",
        exp: "经验1-3年",
        edu: "大专",
        labels: ["售前支持", "销售"],
        logo: "./static/position-logo/guoroujiaoyu.png",
        name: "广州市果肉教育科技有限公司",
        industory: ["移动互联网,教育", "不需要融资", "广州"]
    },
    {
        h2: "数值策划（北京）",
        date: " [11:44发布] ",
        salary: "10k-20k",
        exp: "经验1-3年",
        edu: "大专",
        labels: ["游戏", "游戏数值策划", "RPG策划"],
        logo: "./static/position-logo/lihe.jpg",
        name: "励禾互娱",
        industory: ["游戏", "未融资", "北京"]
    },
    {
        h2: "运维开发工程师",
        date: " [11:44发布] ",
        salary: "15k-25k",
        exp: "经验3-5年",
        edu: "大专",
        labels: ["游戏", "DevOps", "运维开发"],
        logo: "./static/position-logo/huandong.jpg",
        name: "欢动科技",
        industory: ["移动互联网,游戏", "A轮", "上海"]
    }
]

const companyList = [
    {
        logoUrl: "./static/company-logo/donghua.png",
        name: "东华",
        industoryStage: "企业服务,数据服务",
        label: "上市公司",
        advantage: "国内IT上市公司市值第一，荣获“中关村国家自[1] 主创新示范区核心区高新技术企业50强”称号。",
        evaluation: "49",
        positions: "40",
        processRate: "100%"
    },
    {
        logoUrl: "./static/company-logo/GeexFinance.png",
        name: "GeexFinance",
        industoryStage: "金融",
        label: "A轮",
        advantage: "一家由一群曾任职于国际一流外资银行、IT互联网以及咨询公司的精英团队创建的互联网金融公司",
        evaluation: "19",
        positions: "60",
        processRate: "100%"
    },
    {
        logoUrl: "./static/company-logo/senguo.png",
        name: "森果",
        industoryStage: "移动互联网,企业服务",
        label: "天使轮",
        advantage: "推动果蔬产业信息化，为批发和零售店提供： 称重收银软件、线上商城、进销存、拼团系统等整套解决方案",
        evaluation: "330",
        positions: "37",
        processRate: "82%"
    },
    {
        logoUrl: "./static/company-logo/jisuanke.png",
        name: "计蒜客",
        industoryStage: "移动互联网,教育",
        label: "A轮",
        advantage: "以先进方式提供教育服务，让更多人成为科技的推动力量",
        evaluation: "14",
        positions: "5",
        processRate: "70%"
    },
    {
        logoUrl: "./static/company-logo/chuangketie.png",
        name: "创客贴",
        industoryStage: "文娱丨内容,消费生活",
        label: "A轮",
        advantage: "极简的在线平面设计工具",
        evaluation: "40",
        positions: "16",
        processRate: "100%"
    },
    {
        logoUrl: "./static/company-logo/nuohuairuanjian.png",
        name: "诺怀软件",
        industoryStage: "企业服务",
        label: "未融资",
        advantage: "公司愿景是：助您成功",
        evaluation: "11",
        positions: "10",
        processRate: "81%"
    },
    {
        logoUrl: "./static/company-logo/chengduwangkuo.png",
        name: "成都网阔",
        industoryStage: "移动互联网,企业服务",
        label: "上市公司",
        advantage: "致力于为道路运输驾乘人提供驾乘全面信息服务，为大众平安出行是网阔人奋斗的方向。",
        evaluation: "110",
        positions: "5",
        processRate: "95%"
    },
    {
        logoUrl: "./static/company-logo/douxiangkeji.png",
        name: "斗象科技",
        industoryStage: "信息安全",
        label: "C轮",
        advantage: "互联网安全领导者（www.tophant.com - FreeBuf，漏洞盒子，斗象智能安全）",
        evaluation: "187",
        positions: "81",
        processRate: "100%"
    }
]

const linkList = [
    "拉勾网", "找工作", "招聘网", "招聘", "java课", "架构课", "国家公务员考试网", "易企秀H5",
    "中大网校", "人人都是产品经理", "研究报告", "中华考试网", "教师网", "杭州招聘",
    "上海招聘", "法律咨询", "求职网站", "语文学习网", "职业圈", "股城财经", "创意服务外包", "法律咨询",
    "电子商务平台", "法律咨询网", "兼职吧", "爱问共享资料", "招聘", "品牌排行榜",
    "未解之谜", "生意经商业百科", "装修效果图", "中公公务员网校", "招聘网", "前瞻网", "上海分类信息网",
    "安徽招聘网", "重庆人才网", "中国会计网", "齐鲁人才网", "邮编生活网", "字节跳动招聘", "小鹏汽车招聘",
    "泛华金融", "简学网", "易企秀", "酷家乐", "有赞", "兼职猫"
]



//组件
class App extends React.Component {

    render() {
        return (
            React.createElement("div", { id: "app" },
                React.createElement(Header),
                React.createElement(Container),
                React.createElement(Footer)
            )
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            React.createElement("div", { id: "header" },
                React.createElement(Navigation),
                React.createElement(SignUp),
                React.createElement(Search)
            )
        )
    }
}

class Navigation extends React.Component {

    render() {
        return (
            React.createElement("div", { id: "navigation" },
                React.createElement("nav", { className: "nav main" },
                    React.createElement("div", { className: "left" },
                        React.createElement("a", { className: "logo", href: "" }, "拉勾"),
                        React.createElement("span", null, "全国站"),
                        React.createElement("a", { id: "changeCity_btn", href: "" }, "[切换城市]"),
                        React.createElement("li", null,
                            React.createElement("a", { id: "indexPage", href: "" }, "首页")
                        ),

                        React.createElement("li", null,
                            React.createElement("a", { href: "" }, "公司")
                        ),
                        React.createElement("li", null,
                            React.createElement("a", { href: "" }, "校园招聘")
                        ),
                        React.createElement("li", null,
                            React.createElement("a", { href: "" }, "言职")
                        ),
                        React.createElement("li", null,
                            React.createElement("a", { href: "" }, "课程",
                                React.createElement("p", null, "new")
                            )
                        )
                    ),

                    React.createElement("div", { className: "right" },
                        React.createElement("li", { id: "uploadResume" },
                            React.createElement("a", { href: "" }, "上传简历")
                        ),
                        React.createElement("li", { id: "entrance" },
                            React.createElement("a", { href: "" }, "职位订阅")
                        ),
                        React.createElement("li", null,
                            React.createElement("a", { id: "login", href: "" }, "登录")
                        ),
                        React.createElement("li", null,
                            React.createElement("span", null, "|")
                        ),
                        React.createElement("li", null,
                            React.createElement("a", { id: "signUp", href: "" }, "注册")
                        ),
                        React.createElement("a", { id: "lagouApp", href: "" }, "拉勾APP"),
                        React.createElement("li", null,
                            React.createElement("a", { href: "" }, "进入企业版")
                        )
                    )
                )
            )
        )
    }
}

class SignUp extends React.Component {
    render() {
        return (
            React.createElement("div", { className: "signUpBox" },
                React.createElement("div", { className: "signUp main" },
                    React.createElement("div", { className: "img-warpper" },
                        React.createElement("img", { className: "ad-logo", src: "./static/logo-1.png" }),
                        React.createElement("div", { className: "text" },
                            React.createElement("img", { src: "./static/text_1.png", className: "text-img" }),
                            React.createElement("p", null, "835249家公司 | 6772790个职位，在拉勾等你")
                        )
                    ),


                    React.createElement("div", { className: "phoneLogin" },
                        React.createElement("div", { className: "tel" },
                            React.createElement("select", { value: "0086" },
                                React.createElement("option", { value: "0086" }, "0086")
                            ),

                            React.createElement("input", { placeholder: "输入手机号" })


                        ),
                        React.createElement("div", { className: "ver-code" },
                            React.createElement("input", { type: "text", placeholder: "验证码", autocomplete: "off" }),
                            React.createElement("button", null, "获取")
                        ),
                        React.createElement("button", { className: "signUp-btn" }, "登陆/注册")
                    )
                )
            )
        )
    }
}

class Search extends React.Component {
    render() {
        return (
            React.createElement("div", { className: "search-warpper" },
                React.createElement("form", { className: "searchForm" },
                    React.createElement("input", { type: "text", placeholder: "搜索职位、公司或地点" }),
                    React.createElement("input", { type: "submit", value: "搜索" })
                ),

                React.createElement("dl", { className: "hotSearch" },
                    React.createElement("dt", null, "热门搜索："),
                    React.createElement("dd", null,
                        React.createElement("a", { href: "" }, "腾讯产品")
                    ),
                    React.createElement("dd", null,
                        React.createElement("a", { href: "" }, "Java面试")
                    ),
                    React.createElement("dd", null,
                        React.createElement("a", { href: "" }, "面经分享")
                    ),
                    React.createElement("dd", null,
                        React.createElement("a", { href: "" }, "C++")
                    )
                )
            )
        )
    }
}



class Container extends React.Component {
    render() {
        return (
            React.createElement("div", { id: "container", className: "container main" },
                React.createElement(SideBar),
                React.createElement(HomeBanner),
                React.createElement(JobTable),
                React.createElement(CompanyTable),
                React.createElement(LinkBox)
            )
        )
    }
}


class SideBar extends React.Component {
    render() {
        return (
            React.createElement("div", { id: "sidebar" },
                React.createElement("div", { className: "mainNavs" },
                    sideBarList.map((item, index) =>
                        React.createElement(MenuBox, { list: item, key: index })
                    )
                )
            )
        )
    }
}

class MenuBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            main: {},
            sub: { display: "none" },
            class: "menuBox"
        }
        this.mouseOver = this.mouseOver.bind(this)
        this.mouseOut = this.mouseOut.bind(this)
    }

    mouseOver() {
        this.setState({
            main: {
                boxShadow: "0 0 4px 2px rgba(0, 0, 0, 0.09)",
                borderTopLeftRadius: "2px",
                borderBottomLeftRadius: "2px"
            },
            sub: { display: "block" },
            class: "menuBox current"
        })
    }

    mouseOut() {
        this.setState({
            main: {},
            sub: { display: "none" },
            class: "menuBox"
        })
    }

    render() {
        const list = this.props.list
        const hidden = this.props.list.hidden
        return (
            React.createElement("div", {
                className: this.state.class,
                onMouseOver: this.mouseOver,
                onMouseOut: this.mouseOut
            },
                React.createElement("div", {
                    className: "menuMain",
                    style: this.state.main
                },
                    React.createElement("div", { className: "categoryList" },
                        React.createElement("h2", null, list.head),
                        list.a.map((item, index) =>
                            React.createElement("a", { key: index }, item)
                        ),
                        React.createElement("img", { src: "./static/arrow-1.png", className: "arrow" })
                    )
                ),

                React.createElement("div", {
                    className: "menuSub",
                    style: this.state.sub
                },
                    hidden.map((item, index) =>
                        React.createElement("dl", { key: index },
                            React.createElement("dt", null, item.head),
                            React.createElement("dd", null,
                                item.a.map((anchor, index) =>
                                    React.createElement("a", { key: index },
                                        React.createElement("h3", null, anchor)
                                    )
                                )
                            )
                        )
                    )
                )
            )
        )
    }
}


class HomeBanner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentid: 0,
            pic1: slideStyle[0],
            pic2: slideStyle[1],
            pic3: slideStyle[2],
            trigger1: { width: "12px" },
            trigger2: {},
            trigger3: {},
            hiddenbtn: { display: "none" },
        }
        this.mouseOver = this.mouseOver.bind(this)
        this.mouseOut = this.mouseOut.bind(this)
        this.leftSlide = this.leftSlide.bind(this)
        this.rightSlide = this.rightSlide.bind(this)
        this.trigger1 = this.trigger1.bind(this)
        this.trigger2 = this.trigger2.bind(this)
        this.trigger3 = this.trigger3.bind(this)
    }

    componentDidMount() {
        this.timer = setInterval(this.leftSlide, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    trigger1() {
        if (this.state.currentid === 1) {
            this.rightSlide()
        }
        if (this.state.currentid === 2) {
            this.leftSlide()
        }
    }

    trigger2() {
        if (this.state.currentid === 0) {
            this.rightSlide()
        }
        if (this.state.currentid === 2) {
            this.leftSlide()
        }
    }

    trigger3() {
        if (this.state.currentid === 0) {
            this.rightSlide()
        }
        if (this.state.currentid === 1) {
            this.leftSlide()
        }
    }

    mouseOver() {
        clearInterval(this.timer)
        this.setState({
            hiddenbtn: { display: "block" }
        })
    }

    mouseOut() {
        this.timer = setInterval(this.leftSlide, 5000)
        this.setState({
            hiddenbtn: { display: "none" }
        })
    }

    //图片向左滑动
    leftSlide() {
        switch (this.state.currentid) {
            case 0:
                this.setState({
                    currentid: 1,
                    pic1: slideStyle[2],
                    pic2: slideStyle[0],
                    pic3: slideStyle[1],
                    trigger1: {},
                    trigger2: { width: "12px", background: "#ffffff" },
                    trigger3: {}
                })
                break
            case 1:
                this.setState({
                    currentid: 2,
                    pic1: slideStyle[1],
                    pic2: slideStyle[2],
                    pic3: slideStyle[0],
                    trigger1: {},
                    trigger2: {},
                    trigger3: { width: "12px", background: "#ffffff" },
                })
                break
            case 2:
                this.setState({
                    currentid: 0,
                    pic1: slideStyle[0],
                    pic2: slideStyle[1],
                    pic3: slideStyle[2],
                    trigger1: { width: "12px", background: "#ffffff" },
                    trigger2: {},
                    trigger3: {},
                })
                break
        }
    }

    //图片向右滑动
    rightSlide() {
        switch (this.state.currentid) {
            case 0:
                this.setState({
                    currentid: 2,
                    pic1: slideStyle[3],
                    pic2: slideStyle[4],
                    pic3: slideStyle[0],
                    trigger1: {},
                    trigger2: {},
                    trigger3: { width: "12px", background: "#ffffff" }
                })
                break
            case 2:
                this.setState({
                    currentid: 1,
                    pic1: slideStyle[4],
                    pic2: slideStyle[0],
                    pic3: slideStyle[3],
                    trigger1: {},
                    trigger2: { width: "12px", background: "#ffffff" },
                    trigger3: {}
                })
                break
            case 1:
                this.setState({
                    currentid: 0,
                    pic1: slideStyle[0],
                    pic2: slideStyle[3],
                    pic3: slideStyle[4],
                    trigger1: { width: "12px", background: "#ffffff" },
                    trigger2: {},
                    trigger3: {},
                })
                break
        }
    }

    render() {
        const pic1 = this.state.pic1
        const pic2 = this.state.pic2
        const pic3 = this.state.pic3
        const trigger1 = this.state.trigger1
        const trigger2 = this.state.trigger2
        const trigger3 = this.state.trigger3
        return (
            React.createElement("div", { id: "homeBanner", onMouseOver: this.mouseOver, onMouseOut: this.mouseOut },
                React.createElement("div", { className: "homeSlide" },
                    React.createElement("a", { href: "" },
                        React.createElement("img", { src: "./static/横幅-1.jfif", style: pic1 })
                    ),
                    React.createElement("a", { href: "" },
                        React.createElement("img", { src: "./static/横幅-2.jfif", style: pic2 })
                    ),
                    React.createElement("a", { href: "" },
                        React.createElement("img", { src: "./static/横幅-3.jfif", style: pic3 })
                    ),
                ),
                React.createElement("div", { id: "bannerCtrl" },
                    React.createElement("em",
                        { className: "left", style: this.state.hiddenbtn, onClick: this.rightSlide }),
                    React.createElement("em",
                        { className: "right", style: this.state.hiddenbtn, onClick: this.leftSlide })
                ),
                React.createElement("ul", { className: "trigger" },
                    React.createElement("li", null,
                        React.createElement("i", { style: trigger1, onClick: this.trigger1 })
                    ),
                    React.createElement("li", null,
                        React.createElement("i", { style: trigger2, onClick: this.trigger2 })
                    ),
                    React.createElement("li", null,
                        React.createElement("i", { style: trigger3, onClick: this.trigger3 })
                    ),
                )
            )
        )
    }
}


class JobTable extends React.Component {
    render() {
        return (
            React.createElement("div", { id: "jobTable" },
                React.createElement("ul", { className: "jobTitle" },
                    React.createElement("li", { className: "current" }, "24Hour热门"),
                    React.createElement("li", { className: "" }, "最新职位")
                ),
                React.createElement("div", { id: "jobList" },
                    React.createElement("div", { className: "tips" },
                        React.createElement("span", { className: "icon" },
                            React.createElement("i", null, "?")
                        ),
                        React.createElement("p", null, "过去24小时，最多人看过的岗位在这里"),
                        React.createElement("span", { className: "iknow" }, "我知道了")

                    ),

                    React.createElement(PositionGrid),
                    React.createElement("a", { className: "seeMore" }, "查看更多")
                )
            )
        )
    }
}

class PositionGrid extends React.Component {
    render() {
        return (
            React.createElement("div", { className: "positionGrid main" },
                positionList.map((item, index) =>
                    React.createElement(PositionBox, { item: item, key: index })
                )
            )
        )
    }
}

class PositionBox extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            React.createElement("div", { className: "positionBox" },
                React.createElement("div", { className: "top" },

                    React.createElement("div", { className: "firstLine" },
                        React.createElement("div", { className: "positionName" },
                            React.createElement("h2", null,
                                React.createElement("a", { title: this.props.item.h2 }, this.props.item.h2)
                            ),
                            React.createElement("span", null, this.props.item.date),
                            React.createElement("div", { className: "chatIcon" })
                        ),
                        React.createElement("span", { className: "salary" }, this.props.item.salary)
                    ),

                    React.createElement("div", { className: "mainInfo" },
                        React.createElement("span", null, this.props.item.exp),
                        React.createElement("span", null, this.props.item.edu)
                    ),

                    React.createElement("div", { className: "labels" },
                        this.props.item.labels.map((item) =>
                            React.createElement("p", null, item)
                        )
                    )
                ),
                React.createElement("div", { className: "bottom" },
                    React.createElement("a", null,
                        React.createElement("img", { src: this.props.item.logo })
                    ),
                    React.createElement("div", { className: "companyInfo" },
                        React.createElement("h3", { className: "name" },
                            React.createElement("a", null, this.props.item.name)
                        ),
                        React.createElement("h3", { className: "info" },
                            this.props.item.industory.map((item) =>
                                React.createElement("span", null, item)
                            )
                        )
                    )
                )
            )
        )
    }
}


class CompanyTable extends React.Component {
    render() {
        return (
            React.createElement("div", { id: "companyTable" },
                React.createElement("ul", { className: "companyTitle" },
                    React.createElement("li", { className: "current" }, "互联网热门公司榜"),
                ),
                React.createElement("div", { id: "companyList" },
                    React.createElement("div", { className: "tips" },
                        React.createElement("span", { className: "icon" },
                            React.createElement("i", null, "?")
                        ),
                        React.createElement("p", null, "互联网行业实力热门企业"),
                        React.createElement("span", { className: "iknow" }, "我知道了")

                    ),

                    React.createElement(CompanyGrid),
                    React.createElement("a", { className: "seeMore" }, "查看更多")
                )
            )
        )
    }
}

class CompanyGrid extends React.Component {
    render() {
        return (
            React.createElement("div", { className: "companyGrid main" },
                companyList.map(
                    (company, key) => React.createElement(CompanyBox, { company: company, key: key })
                )
            )
        )
    }
}

class CompanyBox extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const company = this.props.company
        return (
            React.createElement("div", { className: "companyBox" },
                React.createElement("div", { className: "top" },
                    React.createElement("p", null,
                        React.createElement("a", null,
                            React.createElement("img", { className: "companyLogo", src: company.logoUrl })
                        )
                    ),

                    React.createElement("h3", { className: "companyName wordCut" },
                        React.createElement("a", null, company.name)
                    ),

                    React.createElement("h4", { className: "industoryStage wordCut" },
                        React.createElement("span", null, company.industoryStage),
                        React.createElement("span", null, company.label)
                    ),

                    React.createElement("h4", { className: "advantage wordCut" }, company.advantage)
                ),


                React.createElement("div", { id: "companyBoxBottom" },
                    React.createElement("a", null,
                        React.createElement("p", { className: "number" },
                            React.createElement("span", null, company.evaluation)
                        ),
                        React.createElement("p", { className: "text" }, "面试评价")
                    ),

                    React.createElement("a", null,
                        React.createElement("p", { className: "number" },
                            React.createElement("span", null, company.positions)
                        ),
                        React.createElement("p", { className: "text" }, "在招职位")
                    ),

                    React.createElement("a", null,
                        React.createElement("p", { className: "number" },
                            React.createElement("span", null, company.processRate)
                        ),
                        React.createElement("p", { className: "text" }, "简历处理率")
                    )
                )
            )
        )
    }
}


class LinkBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showLinkBox: { height: "99px" }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange() {
        
        Object.keys(this.state.showLinkBox).length === 0 ?
            this.setState({
                showLinkBox: { height: "99px" }
            }) :
            this.setState({
                showLinkBox: {}
            })
    }
    render() {
        return (
            React.createElement("div", { className: "linkBox", style: this.state.showLinkBox },
                React.createElement("dl", null,
                    React.createElement("dt", null,
                        React.createElement("span", { className: "current" }, "友情链接")
                    ),
                    React.createElement("dd", null,
                        linkList.map((linkname) => React.createElement("a", null, linkname))
                    ),
                    React.createElement("span", { className: "open", onClick: this.handleChange }, 
                        "展开",
                        React.createElement("i")
                    )
                )
            )
        )
    }
}



class Footer extends React.Component {
    render() {
        return (
            React.createElement("div", { id: "footer" },
                React.createElement("div", { className: "wrapper main" },
                    React.createElement("div", { className: "left" },
                        React.createElement("a", { className: "app" }, "下载拉勾APP"),
                        React.createElement("a", { className: "smallPro" },
                            "微信小程序",
                            React.createElement("img", { src: "./static/small_program.png" })
                        ),
                        React.createElement("div", { className: "item" },
                            React.createElement("a", null,
                                "拉勾微信",
                                React.createElement("img", { src: "./static/Wechat.png" })
                            ),
                            React.createElement("a", null, "拉勾微博")
                        )
                    ),

                    React.createElement("div", { className: "right" },
                        React.createElement("div", { className: "business" },
                            React.createElement("p", null, "企业服务"),
                            React.createElement("a", null, "招聘抢人宝典"),
                            React.createElement("a", null, "公司搜索"),
                            React.createElement("a", null, "拉勾APP"),
                        ),
                        React.createElement("div", { className: "business" },
                            React.createElement("p", null, "用户帮助"),
                            React.createElement("a", null, "帮助中心"),
                            React.createElement("a", null, "用户服务协议"),
                            React.createElement("a", null, "隐私政策"),
                            React.createElement("a", null, "在线提问")
                        ),
                        React.createElement("div", { className: "business" },
                            React.createElement("p", null, "联系方式"),
                            React.createElement("span", null, "服务热线：4006 2828 35 (9:00 -18:00)"),
                            React.createElement("a", null, "企业服务邮箱：cc@lagou.com"),
                            React.createElement("a", null, "联系我们"),
                        ),
                    )
                ),

                React.createElement("div", { className: "copyRight" },
                    React.createElement("div", { className: "content main" },
                        React.createElement("div", { className: "left" },
                            React.createElement("span", null,
                                React.createElement("em", null, "©"),
                                "2020 拉勾网"
                            ),
                            React.createElement("span", null, "京ICP备14023790号-2"),
                            React.createElement("a", null,
                                React.createElement("img", { src: "" }),
                                "京公网安备 11010802024043号"
                            ),
                            React.createElement("div", { className: "tipOff" },
                                React.createElement("img", { src: "" }),
                                React.createElement("p", null,
                                    React.createElement("span", null, "违法和不良信息举报"),
                                    React.createElement("span", null, "电话: 4006 2828 35"),
                                    React.createElement("span", null, "邮箱: cc@lagou.com")
                                )

                            ),
                        ),
                        React.createElement("img", { src: "./static/footer_lagou_icon.png" })
                    )
                )
            )
        )
    }
}


ReactDOM.render(React.createElement(App), document.getElementById("root"))