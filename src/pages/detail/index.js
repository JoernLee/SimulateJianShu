import React, {PureComponent} from 'react';
import {Content, DetailWrapper, Header} from "./styled";
import {connect} from 'react-redux';

class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
      </DetailWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
});

export default connect(mapStateToProps, null)(Detail);
