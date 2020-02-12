import React, {PureComponent} from 'react';
import {Content, DetailWrapper, Header} from "./styled";
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreators} from "./store";

class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
      </DetailWrapper>
    );
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id));
  }
});

//让Detail即便是异步组件也有有能力获取router的内容
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));
