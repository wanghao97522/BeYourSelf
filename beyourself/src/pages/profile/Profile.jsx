import React, { Component } from 'react'

import { Toast } from 'antd-mobile';

import {ProfileContainer} from './styledProfile'
import shenmilvxing from 'assets/images/profile/background-shengmiluxing@2x.png'
import touxiang from 'assets/images/profile/touxiang@2x.png'

import http from 'utils/httpgg'
import querystring from 'querystring';



export default class Profile extends Component {
    
    state={
        userName:'用户名',
        isVIP:0,
        userPhoto:touxiang,
        perc:0
    }


    render() {
        return (
            <ProfileContainer isVIP={this.state.isVIP}>
                <header>
                    <div className='profile_photo' onClick={()=>this.setPersonalDate()}>
                        <img src={this.state.userPhoto} alt=""/>
                    </div>
                    <h3>
                        {this.state.userName}
                    </h3>
                </header>
                <div className="banner">
                    <div className="secret" onClick={()=>this.handleClick('/index/journey')}>
                        <img src={shenmilvxing} alt=""/>
                        <h3>一次神秘的旅行</h3>
                        <h4>感觉精力充沛</h4>
                        <span>{this.state.perc}%</span>
                    </div>
                    <div className="all_travel" onClick={()=>this.handleClick('/alltravel')}>
                        <div className='bg_icon'></div>
                        <div className="txt">全部旅程</div>
                        <div className="right_jt"></div>
                    </div>
                </div>
                <nav>
                    <ul>
                        <li className="login" onClick={this.successToast}>
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
    setPersonalDate(){
        let { history } = this.props
        history.push('/personaldata')
    }

    async componentDidMount(){
        // console.log(http.getDATA);
        const uId = localStorage.getItem('uId')
        let result = await http.getDATA({url:`/api/mine/findMine?uId=${uId}`})
        let perc = await http.getDATA({url:`/api/journey/get_all_travel?uId=${uId}`})

        let imgUrl = result.data.obj.mImg
        this.setState({
            userPhoto:imgUrl,
            perc:perc.list[0].rB
        })
    }

    successToast() {
        Toast.success('您已成功登录', 1);
    }
}
