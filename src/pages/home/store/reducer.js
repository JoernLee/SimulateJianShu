import {fromJS} from 'immutable';

const defaultState = fromJS({
   topicList: [{
       id:1,
       title:'社会热点',
       imgUrl:'https://upload-images.jianshu.io/upload_images/1741702-7d340c9913d5ada8.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/424/format/webp'
   },{
       id:2,
       title:'手绘',
       imgUrl:'https://upload-images.jianshu.io/upload_images/1741702-7d340c9913d5ada8.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/424/format/webp'
   }],
    articleList:[{
       id:1,
        title:'Python大佬实战APP抓包，抖音的小姐姐等着我！',
        desc:'APP抓包 前面我们了解了一些关于 Python 爬虫的知识，不过都是基于 PC 端浏览器网页中的内容进行爬取。现在手机 App 用的越来越多，...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/13448242-20871e9f865fb242.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/594/format/webp'
    },{
        id:2,
        title:'Python大佬实战APP抓包，抖音的小姐姐等着我！',
        desc:'APP抓包 前面我们了解了一些关于 Python 爬虫的知识，不过都是基于 PC 端浏览器网页中的内容进行爬取。现在手机 App 用的越来越多，...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/13448242-20871e9f865fb242.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/594/format/webp'
    },{
        id:3,
        title:'Python大佬实战APP抓包，抖音的小姐姐等着我！',
        desc:'APP抓包 前面我们了解了一些关于 Python 爬虫的知识，不过都是基于 PC 端浏览器网页中的内容进行爬取。现在手机 App 用的越来越多，...',
        imgUrl:'https://upload-images.jianshu.io/upload_images/13448242-20871e9f865fb242.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/594/format/webp'
    }]
});

export default (state = defaultState, action) => {
    return state;
}