module.exports = {

  // 访问项目路径 http://localhost/vuepress/
  base: '/alink/',

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
    sidebar:{
      // 侧边栏分组
      '/links/': [{
        "title": "生活",
        "collapsable": true,
        "children": ["changyong", "gouwu", "baizaoyin", "zhibo", "lvyou", "xinxi", "youxi", "paihangbang", "caijing"]
      }, {
        "title": "影视",
        "collapsable": true,
        "children": ["zaixian", "xiazai", "dongman", "meiju", "rihan", "jilupian", "zimu", "sucai"]
      }, {
        "title": "搜索",
        "collapsable": true,
        "children": ["changyongsousuo", "wangpansousuo", "yitusoutu", "shujusousuo"]
      }, {
        "title": "软件工具",
        "collapsable": true,
        "children": ["jingpinruanjian", "wangpangongju", "zaixiangongju", "tupianchuli", "PDFgongju", "xiazaigongju", "tubiaobiaodan", "yurenjie", "zhanchanggongju"]
      }, {
        "title": "设计素材",
        "collapsable": true,
        "children": ["tuku", "chuangyilinggan", "tupianchuli", "PPTmoban", "tubiaoLogo", "ziti", "yinxiao"]
      }, {
        "title": "音乐读物",
        "collapsable": true,
        "children": ["zaixianyinle", "yinleboke", "wusunMV", "kindle", "manhua", "wangluoxiaoshuo", "qitaduwu"]
      }, {
        "title": "学习提升",
        "collapsable": true,
        "children": ["zonghexuexi", "TED", "yingyu", "fanyi", "wenku"]
      }]
    }
  }
}