import React, { Component } from 'react';

import { SettingContainer,HeaderContainer, NavContainer } from './styledSetting'

class Setting extends Component {
    render() {
        return (
            <SettingContainer>
                <HeaderContainer>
                    <div className='back' onClick={()=>this.goback()}>
                    </div>
                    <h2>设置</h2>    
                </HeaderContainer>
                <NavContainer>
                    <ul>
                        <li className="aboutUs" onClick={()=>this.handleClick('/aboutus')}>
                            <div className='bg_icon'></div>
                            <div className="txt">关于我们</div>
                            <div className="right_jt"></div>
                        </li>
                        <li className="personal">
                            <div className='bg_icon'></div>
                            <div className="txt">个人资料</div>
                            <div className="right_jt"></div>
                        </li>
                        <li className="help">
                            <div className='bg_icon'></div>
                            <div className="txt">帮助与反馈</div>
                            <div className="right_jt"></div>
                        </li>
                    </ul>    
                </NavContainer>
                <div className='exit'>
                    退出登录
                </div>   
            </SettingContainer>
        );
    }

    goback(){
        this.props.history.goBack()
        // console.log(this.props);
    }

    handleClick(path){
        this.props.history.push(path)
    }
}

export default Setting;