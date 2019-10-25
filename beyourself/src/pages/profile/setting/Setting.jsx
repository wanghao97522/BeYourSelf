import React, { Component } from 'react';

import { Toast} from 'antd-mobile';

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
                        <li className="personal" onClick={()=>this.handleClick('/personaldata')}>
                            <div className='bg_icon'></div>
                            <div className="txt">个人资料</div>
                            <div className="right_jt"></div>
                        </li>
                        <li className="help" onClick={()=>this.handleClick('/help')}>
                            <div className='bg_icon'></div>
                            <div className="txt">帮助与反馈</div>
                            <div className="right_jt"></div>
                        </li>
                    </ul>    
                </NavContainer>
                <div className='exit' onClick={()=>this.exit()}>
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

    exit(){
        let {history} = this.props

        Toast.success('退出成功', 1);

        setTimeout(()=>{
            history.push('/loginindex')
        },2000)
    }
}

export default Setting;