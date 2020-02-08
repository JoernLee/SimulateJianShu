import React, {Component} from 'react';
import {connect} from 'react-redux';
import {HomeLeft, HomeRight, HomeWrapper} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import * as actionCreators from "./store/actionCreators";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img'
               src='https://upload-images.jianshu.io/upload_images/13448242-20871e9f865fb242.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/594/format/webp'
               alt=''/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Writer/>
        </HomeRight>
      </HomeWrapper>
    );
  }

  componentDidMount() {
    this.props.changeHomeData();
    //UI组件发送Ajax请求是不合适的
    /* axios.get('/api/home.json').then((res) => {
       const result = res.data.data;
       //创建Action修改Store数据
       const action = {
         type: 'change_home_data',
         topicList: result.topicList,
         articleList: result.articleList,
         recommendList: result.recommendList
       };
       this.props.changeHomeData(action);
     })*/
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  }
});

export default connect(null, mapDispatchToProps)(Home);