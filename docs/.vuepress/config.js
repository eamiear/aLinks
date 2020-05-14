module.exports = {

  // 访问项目路径 http://localhost/vuepress/
  base: '/alinks/',

  // 网站标题
  title: 'aLink',

  // 文档、网站描述
  description: '.',

  // <head>标签中注入额外meta信息
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/icon.png` }],
  ],
  // dev 服务器主机
  //host: '',

  // 开发环境端口
  port: 7777,

  // build 输出目录
  dest: './dist',

  // 主题配置
  themeConfig: { 

    // 导航栏
    // nav: require('./nav/zh'),

    logo: '/logo.png',

    // 侧边栏
    sidebar: [
      {
        "title": "生活",
        "collapsable": true,
        "children": ["/links/changyong", "/links/gouwu", "/links/baizaoyin", "/links/zhibo", "/links/lvyou", "/links/xinxi", "/links/youxi", "/links/paihangbang", "/links/caijing"]
      }, {
        "title": "影视",
        "collapsable": true,
        "children": ["/links/zaixian", "/links/xiazai", "/links/dongman", "/links/meiju", "/links/rihan", "/links/jilupian", "/links/zimu", "/links/sucai"]
      }, {
        "title": "搜索",
        "collapsable": true,
        "children": ["/links/changyongsousuo", "/links/wangpansousuo", "/links/yitusoutu", "/links/shujusousuo"]
      }, {
        "title": "软件工具",
        "collapsable": true,
        "children": ["/links/jingpinruanjian", "/links/wangpangongju", "/links/zaixiangongju", "/links/tupianchuli", "/links/PDFgongju", "/links/xiazaigongju", "/links/tubiaobiaodan", "/links/yurenjie", "/links/zhanchanggongju"]
      }, {
        "title": "设计素材",
        "collapsable": true,
        "children": ["/links/tuku", "/links/chuangyilinggan", "/links/tupianchuli", "/links/PPTmoban", "/links/tubiaoLogo", "/links/ziti", "/links/yinxiao"]
      }, {
        "title": "音乐读物",
        "collapsable": true,
        "children": ["/links/zaixianyinle", "/links/yinleboke", "/links/wusunMV", "/links/kindle", "/links/manhua", "/links/wangluoxiaoshuo", "/links/qitaduwu"]
      }, {
        "title": "学习提升",
        "collapsable": true,
        "children": ["/links/zonghexuexi", "/links/TED", "/links/yingyu", "/links/fanyi", "/links/wenku"]
      },
    ],
    // sidebar:{
    //   // 侧边栏分组
    //   '/links/': [{
    //     "title": "生活",
    //     "collapsable": true,
    //     "children": ["/links/changyong", "/links/gouwu", "/links/baizaoyin", "/links/zhibo", "/links/lvyou", "/links/xinxi", "/links/youxi", "/links/paihangbang", "/links/caijing"]
    //   }, {
    //     "title": "影视",
    //     "collapsable": true,
    //     "children": ["/links/zaixian", "/links/xiazai", "/links/dongman", "/links/meiju", "/links/rihan", "/links/jilupian", "/links/zimu", "/links/sucai"]
    //   }, {
    //     "title": "搜索",
    //     "collapsable": true,
    //     "children": ["/links/changyongsousuo", "/links/wangpansousuo", "/links/yitusoutu", "/links/shujusousuo"]
    //   }, {
    //     "title": "软件工具",
    //     "collapsable": true,
    //     "children": ["/links/jingpinruanjian", "/links/wangpangongju", "/links/zaixiangongju", "/links/tupianchuli", "/links/PDFgongju", "/links/xiazaigongju", "/links/tubiaobiaodan", "/links/yurenjie", "/links/zhanchanggongju"]
    //   }, {
    //     "title": "设计素材",
    //     "collapsable": true,
    //     "children": ["/links/tuku", "/links/chuangyilinggan", "/links/tupianchuli", "/links/PPTmoban", "/links/tubiaoLogo", "/links/ziti", "/links/yinxiao"]
    //   }, {
    //     "title": "音乐读物",
    //     "collapsable": true,
    //     "children": ["/links/zaixianyinle", "/links/yinleboke", "/links/wusunMV", "/links/kindle", "/links/manhua", "/links/wangluoxiaoshuo", "/links/qitaduwu"]
    //   }, {
    //     "title": "学习提升",
    //     "collapsable": true,
    //     "children": ["/links/zonghexuexi", "/links/TED", "/links/yingyu", "/links/fanyi", "/links/wenku"]
    //   }]
    // }
  }
}