import React, { Component } from 'react';

import { MyAwardContainer } from './styledMyAward'

class MyAward extends Component {
    render() {
        return (
            <MyAwardContainer>
                <div className="upon">
                    <div className="head">
                        <div className='back' onClick={() => this.back()}></div>
                        <div className='txt'>我的奖励</div>
                    </div>
                    <div className="invite">
                        <h2>邀请好友赚补签卡</h2>
                        <h3>邀请好友一起来养成好习惯</h3>
                        <hr/>
                        <ul>
                            <li className='firP'>充值会员赠送补签卡(1个月/1张、3个月/3张、12个月/12张)</li>
                            <li className="secP">特别说明:不用补签卡连续签到一个月会员赠送1张补签卡</li>
                            <li className="thP">新好友需要在新设备上登录(之前未下载过APP的手</li>
                            <li className="forP">机),好友下载完成后,方可获得1张补签卡奖励.</li>
                        </ul>
                    </div>
                </div>
                <div className="foot">
                    <div className="give">赠送补签卡余量</div>
                    <div className="num">0张</div>
                </div>
                <div className="invit_button" onClick={()=>this.handleClick()}>
                    <div>
                        邀请更多好友
                    </div>
                </div>
            </MyAwardContainer>
        );
    }

    back(){
        this.props.history.goBack()
    }

    handleClick(){
        this.props.history.push('/invitpage')
    }
}

export default MyAward;