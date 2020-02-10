import React, {PureComponent} from 'react';
import {Content, DetailWrapper, Header} from "./styled";
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
    this.props.getDetail();
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

const mapDispatchToProps = (dispatch) => ({
  getDetail() {
    dispatch(actionCreators.getDetail);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
