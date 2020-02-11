import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {Input, LoginBox, LoginWrapper} from "./styles";
import {Button} from "./styles";
import * as actionCreators from "./store/actionCreators";
import {Redirect} from "react-router-dom";


class Login extends PureComponent {
  render() {
    const {loginStatus} = this.props;
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <LoginBox>
            {/*使用ref来调用DOM*/}
            <Input placeholder='账号' ref={(input) => {
              this.account = input
            }}/>
            <Input placeholder='密码' type='password' ref={(input) => {
              console.log(input);
              this.password = input
            }}/>
            <Button onClick={() => this.props.login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      );
    }else {
      //使用重定向更新当前页面到首页
      return <Redirect to='/'/>
    }

  }
}

const mapStateToProps = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
});

const mapDispatchToProps = (dispatch) => ({
  login(accountElem, passwordElem) {
    console.log(accountElem);
    dispatch(actionCreators.login(accountElem.value, passwordElem.value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
