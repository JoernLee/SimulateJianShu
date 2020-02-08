import axios from "axios";
import * as constants from './constants';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList
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