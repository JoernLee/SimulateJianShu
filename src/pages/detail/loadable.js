import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./'),
  loading(){
    //没加载完临时显示的视图内容
    return <div>正在加载</div>
  },
});

export default () => <LoadableComponent/>