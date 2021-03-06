import React, {PureComponent} from 'react';
import {RecommendItem, RecommendWrapper} from "../style";
import {connect} from "react-redux";

class Recommend extends PureComponent {
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.list.map((item) => {
            return (
              <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
            );
          })
        }
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(['home', 'recommendList'])
});

export default connect(mapStateToProps, null)(Recommend);
