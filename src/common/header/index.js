import React, {Component} from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from "./styles";
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store/index';

class Header extends Component {

    render() {
        const {focused, handleInputFocus, handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            >
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe617;</i>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writing'>
                        <i className='iconfont'>&#xe615;</i>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        focused: state.header.focused
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);