import React, {Component} from 'react';
import {ListInfo, ListItem} from "../style";

class List extends Component{
    render(){
        return (
            <div>
                <ListItem>
                    <img className='pic' src='https://upload-images.jianshu.io/upload_images/13448242-20871e9f865fb242.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/594/format/webp' />
                    <ListInfo>
                        <h3 className='title'>Python大佬实战APP抓包，抖音的小姐姐等着我！</h3>
                        <p className='desc'>APP抓包 前面我们了解了一些关于 Python 爬虫的知识，不过都是基于 PC 端浏览器网页中的内容进行爬取。现在手机 App 用的越来越多，...</p>
                    </ListInfo>
                </ListItem>
                <ListItem>
                    <img className='pic' src='https://upload-images.jianshu.io/upload_images/13448242-20871e9f865fb242.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/594/format/webp' />
                    <ListInfo>
                        <h3 className='title'>Python大佬实战APP抓包，抖音的小姐姐等着我！</h3>
                        <p className='desc'>APP抓包 前面我们了解了一些关于 Python 爬虫的知识，不过都是基于 PC 端浏览器网页中的内容进行爬取。现在手机 App 用的越来越多，...</p>
                    </ListInfo>
                </ListItem>
            </div>

        );
    }
}
export default List;
