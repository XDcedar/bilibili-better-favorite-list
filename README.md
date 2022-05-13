# bilibili-better-favorite-list
a stylus CSS style for better bilibili favorite list

https://userstyles.world/style/2578/bilibili \
https://userstyles.org/styles/192674/bilibili

几十个收藏夹挤在左边太难受了 \
添加收藏时划拉半天就更难受了

仅在我自己的Chrome上测试过 \
随缘更新和修bug 我不想维护了我就弃坑 \
(比如Bilibili布局改动过大时 或者我不再逛B站时)

* 大量修改自似乎已停止更新的[BiliBili Plus内容增强版](https://userstyles.org/styles/161272/bilibili-plus) (Author: [hei ck](https://userstyles.org/users/402310))
* 去掉了颜色, 弃用float布局换为flexbox和grid布局
* 个人收藏夹界面里, 默认收藏夹会单独占一行

# 更新历史
* v0.7.1 优化【我的收藏和订阅】栏，可通过滚轮加载以前的订阅(之前滚不动导致无法加载，算个bug)
* v0.7 适配话题收藏夹 专栏收藏夹 相簿收藏夹 课程收藏夹，其中专栏和相簿不需要专门适配
* v0.6.1 调整缩进格式
* v0.6 修复话题、专栏、相簿、课程收藏夹的布局错位，让CSS只作用到视频收藏夹上。但是话题、专栏、相簿、课程收藏夹的默认显示方式仍然需要调整。
* v0.5.1 给显示收藏夹视频数量的元素添加右margin 否则查看其他用户收藏夹时数字贴边显示 太丑
* v0.5 利用flex-grow高效且充分地利用收藏夹项的空间显示名字
* v0.4 修复bug: 收藏页面的视频数量太少时位置会朝中间偏移
* v0.3 个人收藏页也改用gird布局, 修复小bug
* v0.2 调整添加视频收藏的页面, 用grid替换掉之前的flexbox, 略微改进个人收藏夹页面的显示效果, 修改注释
* v0.1 最初版本
