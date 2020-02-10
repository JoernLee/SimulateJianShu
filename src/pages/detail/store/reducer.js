import {fromJS} from 'immutable';
import {constants} from "./index";

const defaultState = fromJS({
  title:'若是余生绵长，却只留她一人寂寥，那该有多残忍。',
  content:'<img\n' +
    '            src=\'http://upload-images.jianshu.io/upload_images/8202513-00d6c528c21e09be.png?imageMogr2/auto-orient/strip|imageView2/2/w/658/format/webp\'/>\n' +
    '          <p>柳公子听了她的话，深情款款道：“可否换我来照顾你？”</p>\n' +
    '          <p>柳公子听了她的话，深情款款道：“可否换我来照顾你？”</p>\n' +
    '          <p>柳公子听了她的话，深情款款道：“可否换我来照顾你？”</p>\n' +
    '          <p>柳公子听了她的话，深情款款道：“可否换我来照顾你？”</p>'
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content:action.content
      });
    default: {
      return state;
    }
  }
}