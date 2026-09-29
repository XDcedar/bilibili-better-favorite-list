const favCreatedListNames = [
  // row 1
  {name: "哄UP主专用收藏夹", num: "398"},
  {name: "吃灰收藏夹", num: "745"},
  {name: "健身（指收藏视频）", num: "218"},
  {name: "听君一席话，如听一席话", num: "1000"},
  {name: "今天的B站就逛到这里吧！", num: "1000"},
  {name: "已失效视频（怒）", num: "999"},
  // row 2
  {name: "你这吃白饭的蓝色大肥鱼！", num: "666"},
  {name: "有哪些优秀的百合同人作品？", num: "214"}, // 2015年2月14日邓煜在知乎上提问
  {name: "今日眩晕瘫坐", num: "366"},
  {name: "我天天玩没见有瘾啊？", num: "365"},
  {name: "龙，可是帝王之征啊！", num: "52"}, // 《新三国》第52集
  {name: "年轻人不讲武德，耗子尾汁！", num: "1000"},
  // row 3
  {name: "声优都是怪物", num: "167"},
  {name: "颜色代表立场", num: "79"},
  {name: "知世就是力量", num: "92"}, // 魔卡少女樱截至2026年共播出92集
  {name: "前方高能反应", num: "60"},
  {name: "女人唱歌男人死", num: "48"}, // 出自《机动战士高达铁血的奥尔芬斯》第48话
  {name: "最上川", num: "26"}, // 《日常》动画共26话
  // row 4
  {name: "我的钻头可是突破天际的钻头啊！", num: "528"}, // 《天元突破》中的528亿光年的超巨型机体
  {name: "El·Psy·Kongroo", num: "104"}, // 1.048596% 是 Steins;Gate 世界线
  {name: "你为什么这么熟练啊！", num: "11"}, // 《白色相簿2》第11话
  {name: "已经没什么好怕的了", num: "3"}, // 《魔法少女小圆》第3话
  {name: "代表月亮消灭你！", num: "200"}, // 《美少女战士》总共200集
  {name: "时代的眼泪", num: "90"},
  // row 5
  {name: "rerorerorerorerorero", num: "39"}, // 出自《JOJO的奇妙冒险 第三部 星尘斗士》的第9话
  {name: "欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉", num: "348"}, // 《JOJO的奇妙冒险 第三部 星尘斗士》的第37话和38话最经典
  {name: "木大木大木大木大木大木大木大木大木大木大", num: "348"},
  {name: "不要靠近我啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊", num: "538"}, // 出自《JOJO的奇妙冒险 第五部 黄金之风》的第38话
  {name: "44444444444444444444", num: "444"}, // 米斯达最讨厌的数字
  {name: "快数质数冷静下来：2、3、5、7、11", num: "97"}, // 普奇神父数质数，97 是质数
  // row 6
  {name: "小马Pony🦄", num: "221"}, // 查到正传总共221集
  {name: "海绵宝宝🧽", num: "999"}, // 1999年开播
  {name: "哆啦Ａ梦🔔", num: "129"}, // 哆啦A梦的身高体重三围功率生日等全都是129.3
  {name: "皮卡皮卡⚡️", num: "25"}, // 皮卡丘的图鉴编号为025
  {name: "超级玛丽🍄", num: "985"}, // 超级马力欧第一作诞生于1985年
  {name: "数码宝贝🦖", num: "999"}, // 数码宝贝第一季1999年首播
  // 备选
  {name: "今天的风儿好喧嚣啊", num: "15"}, // 《男子高中生的日常》第1话第5单元
  {name: "要用魔法打败魔法", num: "95"}, // 《成龙历险记》共95集
  {name: "没什么好看的我也就看了500遍", num: "500"},
  {name: "做MAD喜路一条！", num: "388"},
  {name: "天线宝宝🍼", num: "32"},
];

const favListNames = [
  // row 1
  {name: "帧数好高经费爆炸！", num: "146"},
  {name: "极致画质梦幻享受！", num: "109"},
  {name: "治愈神曲无法超越！", num: "210"},
  {name: "登神长阶震撼前摇！", num: "392"},
  {name: "大师作品经典永存！", num: "45"},
  {name: "十年前秒杀一大片的机战动画，最后一集至今无法超越", num: "5"},
  // row 2
  {name: "法外狂徒张三", num: "666"}, // 罗翔说刑法
  {name: "藏狐解闷中", num: "229"}, // 无穷小亮的科普日常，生日1988年2月29日
  {name: "这就是我们小学二年级就学过的", num: "929"}, // 毕导，生日1993年9月19日
  {name: "无限进步！", num: "516"}, // 影视飓风Tim，生日1996年5月16日
  {name: "休想将我们拒之门外！", num: "980"}, // 神秘园洞潜，1980年在美国德克萨斯州温伯利（Wimberley）的著名潜水圣地雅各布泉（Jacob's Well）树的警示牌与栅栏被洞潜狂热者拆掉并留下写有该字的塑料板
  {name: "OO可能会倒闭，但永远不会变质！", num: "1000"}, // 经典语录
  // 备选
  {name: "哈基米南北绿豆～", num: "212"}, // 出自《赛马娘Pretty Derby》第2季第12话。哈基米本意为蜂蜜的空耳。经过复杂的传播路径，现在变成指代猫咪。
  {name: "教练，我想学这个！", num: "514"},
  {name: "垂死病中惊坐起，阎王夸我好身体", num: "52"},
  {name: "I open at the close", num: "1"},
];

// 我创建的收藏夹
const favCreatedConfig = {
  selectors: {
    node: ".fav-collapse .vui_collapse_item_content .fav-collapse-create + .vui_sidebar .fav-sortable-list",
    link: ".vui_ellipsis",
    num: ".vui_sidebar-item-right"
  },
  names: favCreatedListNames
};
// 我的收藏与订阅
const favConfig = {
  selectors: {
    node: ".fav-collapse .vui_collapse_item_content .vui_sidebar:not(.fav-collapse-create + .vui_sidebar)",
    link: ".vui_ellipsis",
    num: ".vui_sidebar-item-right"
  },
  names: favListNames
};

function replaceNames(config) {
  listEl = document.querySelector(config.selectors.node);
  for (const [i, name] of config.names.entries()) {
    listEl.children[i].querySelector(config.selectors.link).textContent = name.name;
    listEl.children[i].querySelector(config.selectors.num).textContent = name.num;
  }
}
replaceNames(favCreatedConfig);
replaceNames(favConfig);
