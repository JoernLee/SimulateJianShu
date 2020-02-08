import axios from "axios";
import * as constants from './constants';
import {fromJS, List} from 'immutable';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
});

const addHomeList = (list,nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  //利用List方法把list变成immutable,但是List里面的对象还是普通JS对象，所以还是用fromJs
  // list: List(list)
  list: fromJS(list),
  nextPage
});

export const getHomeInfo = () => {
  //返回一个函数--支持异步
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data;
      //创建Action修改Store数据
      dispatch(changeHomeData(result));
    })
  }
};

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data;
      dispatch(addHomeList(result,page + 1));
    })
  }
};