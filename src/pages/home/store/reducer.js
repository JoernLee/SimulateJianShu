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
   }]
});

export default (state = defaultState, action) => {


    return state;
}