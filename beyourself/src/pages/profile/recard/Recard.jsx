import React, { Component } from 'react';

import { RecardContainer } from './styledRecard'

import reCardBG from 'assets/images/profile/vip/bqkqtb@2x.png'

class Recard extends Component {
    render() {
        return (
            <RecardContainer>
                <div className="header">
                    <div className="title">
                        <div className="back" onClick={()=>this.back()}></div>
                        <div className="txt">我的补签卡</div>
                    </div>
                    <div className="reCard">
                        <div className='reCardBG'>
                            <img src={reCardBG} alt=""/>
                        </div>
                        <div className="txt">补签卡</div>
                        <div className="num">0张</div>
                    </div>
                </div>
                <div className="invit">
                    <div>
                        <p>邀请好友领补签卡</p>
                        <p>邀请越多,领取越多</p>
                    </div>
                </div>
                <div className="foot">
                    <p>获取补签卡</p>
                    <ul>
                        <li>
                            <p>邀请好友试用APPx1</p>
                            <p>已邀请0人 (好友登录成功,即获得奖励)</p>
                        </li>
                        <li>
                            <p>完善个人资料x1</p>
                            <p>填写个人信息, 获取补签卡</p>
                        </li>
                    </ul>
                    <div className="lastTip">快来邀请好友共同进步吧</div>
                </div>
            </RecardContainer>
        );
    }

    back(){
        this.props.history.goBack()
    }
}

export default Recard;