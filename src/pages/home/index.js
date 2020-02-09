import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BackTop, HomeLeft, HomeRight, HomeWrapper} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import * as actionCreators from "./store/actionCreators";

class Home extends Component {

  //UI组件也可以有少量逻辑
  handleScrollTop() {
    window.scroll(0, 0);
  }

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
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null}
      </HomeWrapper>
    );
  }

  bindEvents() {
    //绑定事件于指定函数
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
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

  componentWillUnmount() {
    //记得取消绑定，这样不会影响其他组件
    window.removeEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  },
  changeScrollTopShow() {
    // console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);