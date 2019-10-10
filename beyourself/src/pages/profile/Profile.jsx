import React, { Component } from 'react'

import {ProfileContainer} from './styledProfile'
import shenmilvxing from 'assets/images/profile/background-shengmiluxing@2x.png'

export default class Profile extends Component {
    
    render() {
        return (
            <ProfileContainer>
                <header>
                    <div className='profile_photo'>
                    </div>
                    <h3>
                        用户名
                    </h3>
                </header>
                <div className="banner">
                    <div className="secret">
                        <img src={shenmilvxing} alt=""/>
                        <h3>一次神秘的旅行</h3>
                        <h4>感觉精力充沛</h4>
                        <span>3%</span>
                    </div>
                    <div className="all_travel">
                        <div className='bg_icon'></div>
                        <div className="txt">全部旅程</div>
                        <div className="right_jt"></div>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li className="login">
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>登录</h3>
                                <h4>以便能够保存您的旅程进度</h4>
                            </div>
                            <div className="right_jt"></div>
                        </li>
                        <li className="setting" onClick={()=>this.handleClick('/setting')}>
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>设置</h3>
                            </div>
                            <div className="right_jt"></div>
                        </li>
                        <li className="vip" onClick={()=>this.handleClick('/vip')}>
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>会员</h3>
                                <h4>新用户七天免费会员</h4>
                            </div>
                            <div className="right_jt"></div>
                        </li>
                        <li className="my_award" onClick={()=>this.handleClick('/myaward')}>
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>我的奖励</h3>
                            </div>
                            <div className="right_jt"></div>
                        </li>
                    </ul>
                </nav>
            </ProfileContainer>
        )
    }

    handleClick(path){
        let { history } = this.props
        history.push(path)
    }
}
