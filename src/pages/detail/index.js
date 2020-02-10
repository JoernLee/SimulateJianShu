import React, {PureComponent} from 'react';
import {Content, DetailWrapper, Header} from "./styled";

class Detail extends PureComponent {
  render() {
    return (
      <DetailWrapper>
        <Header>若是余生绵长，却只留她一人寂寥，那该有多残忍。</Header>
        <Content>
          <img
            src='http://upload-images.jianshu.io/upload_images/8202513-00d6c528c21e09be.png?imageMogr2/auto-orient/strip|imageView2/2/w/658/format/webp'/>
          <p>柳公子听了她的话，深情款款道：“可否换我来照顾你？”</p>
          <p>柳公子听了她的话，深情款款道：“可否换我来照顾你？”</p>
          <p>柳公子听了她的话，深情款款道：“可否换我来照顾你？”</p>
          <p>柳公子听了她的话，深情款款道：“可否换我来照顾你？”</p>
        </Content>
      </DetailWrapper>
    );
  }
}

export default Detail;
