const favCreatedListNames = [
  // row 1
  {name: "哄UP主专用收藏夹", num: "398"},
  {name: "吃灰收藏夹", num: "745"},
  {name: "健身（指收藏视频）", num: "218"},
  {name: "已失效视频（怒）", num: "312"},
  // row 2
  {name: "教练，我想学这个！", num: "514"},
  {name: "做MAD喜路一条！", num: "388"},
  {name: "没什么好看的我也就看了500遍", num: "265"},
  {name: "前方高能！", num: "129"},
  // row 3
  {name: "声优都是怪物", num: "167"},
  {name: "颜色代表立场", num: "79"},
  {name: "知世就是力量", num: "101"},
  {name: "最上川", num: "62"},
  // row 4
  {name: "我的钻头可是突破天际的", num: "31"},
  {name: "El·Psy·Kongroo", num: "77"},
  {name: "你为什么这么熟练啊！", num: "124"},
  {name: "已经没什么好怕的了", num: "85"},
  // row 5
  {name: "rerorerorerorerorerorerorerorerorero", num: "95"},
  {name: "欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉欧拉", num: "82"},
  {name: "木大木大木大木大木大木大木大木大木大", num: "67"},
  {name: "你不要过来啊啊啊啊啊啊啊啊啊啊啊啊啊", num: "43"},
  // row 6
  {name: "小马Pony🦄", num: "397"},
  {name: "海绵宝宝🧽", num: "63"},
  {name: "哆啦Ａ梦🔔", num: "277"},
  {name: "皮卡皮卡⚡️", num: "168"},
  // 备选
  {name: "皮卡～丘⚡️", num: "168"},
  {name: "天线宝宝🍼", num: "32"},
];

const favListNames = [
  {name: "帧数好高经费爆炸！", num: "146"},
  {name: "极致画质梦幻享受！", num: "109"},
  {name: "治愈神曲无法超越！", num: "210"},
  {name: "大师作品经典永存！", num: "45"},
  {name: "十年前秒杀一大片的机战动画，最后一集至今无法超越", num: "5"},
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
