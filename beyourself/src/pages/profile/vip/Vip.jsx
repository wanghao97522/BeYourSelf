import React, { Component } from 'react';

import {VipContainer} from './styledVip'
import ChooseMonth from './chooseMonth/ChooseMonth'

// import Mask from '../mask/Mask'

import { Picker } from 'antd-mobile';

import vipBG from 'assets/images/profile/vip/hydb@2x.png'
import personal from 'assets/images/profile/vip/Grxoup@2x.png'
import wePay from 'assets/images/profile/vip/weixinzhifu-3@2x.png'
import AlipayBG from 'assets/images/profile/vip/zhifubaozhifu copy@2x.png'


const colorStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '16px',
    height: '16px',
    marginRight: '10px',

  };
  

const colors = [
    {
      label:
      (<div>
        <span
          style={{ ...colorStyle, background: `url(${wePay})`,backgroundSize:'100% 100%' }}
        />
        <span>微信支付</span>
      </div>),
      key:1,
      value:[wePay,"微信支付"]
    },
    {
      label:
      (<div>
        <span
          style={{ ...colorStyle, background: `url(${AlipayBG})` ,backgroundSize:'100% 100%'}}
        />
        <span>支付宝</span>
      </div>),
      key:2,
      value:[AlipayBG,"支付宝"]
    }
  ];
  



class Vip extends Component {
    state={
        now:1,
        money:'10',
        showMask:false,
        data: [],
        cols: 1,
        visible: false,
        nowWay:wePay,
        nowTxt:'微信支付'
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
                        <img src={this.state.nowWay} alt=""/>
                    </div>
                    <div className="payTxt">
                        <h3>{this.state.nowTxt}</h3>
                        <Picker
                            data={colors}
                            cols={1}
                            onChange={this.changTxt}
                        >
                            <h4>支付方式</h4>
                        </Picker>
                        {/* <h4 onClick={()=>this.changePayWay()}>支付方式</h4> */}
                    </div>
                    <div className="right_jt"></div>
                </div>
                <div className="openVip">
                    <div>开通{this.state.now}个月会员·￥{this.state.money}.00</div>
                </div>
                {/* <Mask  nowState={this.state.showMask} onClick={()=>this.changePayWay()}>
                </Mask> */}
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
    changePayWay(){
        this.setState((prev)=>({
            showMask:!prev.showMask
        }))
    }
    changTxt = (props) => {
        this.setState({
          nowWay: props[0][0],
          nowTxt:props[0][1]
        });
      }
    

}


export default Vip;