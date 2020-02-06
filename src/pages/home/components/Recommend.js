import React, {Component} from 'react';
import {RecommendItem, RecommendWrapper} from "../style";

class Recommend extends Component{
    render(){
        return (
            <RecommendWrapper>
                <RecommendItem imgUrl='http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'/>
                <RecommendItem imgUrl='http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'/>
            </RecommendWrapper>
        );
    }
}
export default Recommend;
