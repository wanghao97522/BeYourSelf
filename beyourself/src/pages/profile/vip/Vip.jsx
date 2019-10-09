import React, { Component } from 'react';

import {VipContainer} from './styledVip'
import ChooseMonth from './chooseMonth/ChooseMonth'


import vipBG from 'assets/images/profile/vip/hydb@2x.png'
import personal from 'assets/images/profile/vip/Grxoup@2x.png'
import wePay from 'assets/images/profile/vip/weixinzhifu-3@2x.png'

class Vip extends Component {
    // state={
        
    // }

    constructor() {
        super();
        this.state = {
            now:1,
            money:'10',
            clicked: 'none',
            clicked1: 'none',
            clicked2: 'none',
        };
      }

    render() {
        return (
            <VipContainer>
                <header>
                    <div className='back' onClick={()=>this.back()}>
                    </div>
                    <h2>会员</h2>    
                </header>
                <div className='banner'>
                    <img src={vipBG} alt=""/>
                    <div className="personal">
                        <img src={personal} alt=""/>
                    </div>
                    <span className='username'>会员账号名称</span>
                    <span className="overtime">会员于几月几日到期</span>
                </div>
                <h3>会员套餐</h3>
                <div className="payVip">
                    <ChooseMonth time={1} onClick={(obj)=>this.handleClick(obj)} now={this.state.now}></ChooseMonth>
                    <ChooseMonth time={3} onClick={(obj)=>this.handleClick(obj)} now={this.state.now}></ChooseMonth>
                    <ChooseMonth time={12} onClick={(obj)=>this.handleClick(obj)} now={this.state.now}></ChooseMonth>
                </div>
                <div className="chooseWay">
                    <div className='payWay'>
                        <img src={wePay} alt=""/>
                    </div>
                    <div className="payTxt">
                        <h3>微信支付</h3>
                        <h4>支付方式</h4>
                    </div>
                    <div className="right_jt"></div>
                </div>
                <div className="openVip">
                    <div>开通{this.state.now}个月会员·￥{this.state.money}.00</div>
                </div>
            </VipContainer>
        );
    }

    back(){
        this.props.history.goBack()
    }
    handleClick(obj){
        this.setState({
            now:obj.time,
            money:obj.now
        })
    }
}


export default Vip;