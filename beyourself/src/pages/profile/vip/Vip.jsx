import React, { Component } from 'react';

import {VipContainer} from './styledVip'
import ChooseMonth from './chooseMonth/ChooseMonth'

// import Mask from '../mask/Mask'

import { Picker } from 'antd-mobile';

import vipBG from 'assets/images/profile/vip/hydb@2x.png'
import personal from 'assets/images/profile/vip/Grxoup@2x.png'
import wePay from 'assets/images/profile/vip/weixinzhifu-3@2x.png'
import AlipayBG from 'assets/images/profile/vip/zhifubaozhifu copy@2x.png'

import http from 'utils/httpgg'

import querystring from 'querystring'


const colorStyle = {
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '16px',
    height: '16px',
    marginRight: '10px',
    isShowMask:false,
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
        nowTxt:'微信支付',
        userName:'会员名称',
        payOk:false,
        codeUrl:'',
        isShowCodeBG:false,
        VIPdata:'',
        isVip:1,
        vipPhoto:personal
    }


    render() {
        return (
            <VipContainer  showMask={this.state.showMask} payOk={this.state.payOk} isShowCodeBG={this.state.isShowCodeBG} isVip={this.state.isVip}>
                <header>
                    <div className='back' onClick={()=>this.back()}>
                    </div>
                    <h2>会员</h2>    
                </header>
                <div className='banner'>
                    <img src={vipBG} alt=""/>
                    <div className="personal">
                        <img src={this.state.vipPhoto} alt=""/>
                    </div>
                    <span className='username'>{this.state.userName}</span>
                    <span className="overtime">会员于{this.state.VIPdata}到期</span>
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
                    <div onClick={()=>this.payForVIP()}>开通{this.state.now}个月会员·￥{this.state.money}.00</div>
                </div>
                <div className="mask">
                    <div className="blackBG" onClick={()=>this.changIsShow()}></div>
                    <div className="codeBG">
                        <img src={this.state.codeUrl} alt=""/>
                    </div>
                    <div className='content'>
                        <div className='imgBox'>
                            <img src={wePay} alt=""/>
                            <p>支付成功</p>
                        </div>
                        <div className='submit'>
                            <span onClick={()=>this.changIsShow()}>取消</span>
                            <span onClick={()=>this.changIsShow()}>确定</span>
                        </div>
                    </div>
                </div>  
                {/* <Mask  nowState={this.state.showMask} onClick={()=>this.changePayWay()}>
                </Mask> */}
            </VipContainer>
        );
    }

    back(){
        this.props.history.goBack()
    }

    async componentDidMount(){
        // console.log(http.getDATA);
        const uId = localStorage.getItem('uId')
        let result = await http.getDATA({url:`/api/mine/findMine?uId=${uId}`})
        let data = result.data.obj
        this.setState({
            vipPhoto:data.mImg,
            VIPdata:data.mMedate?data.mMedate:'',
            isVip:data.mIsmember,
            userName:data.mNickname
        })
    }

    handleClick(obj){
        this.setState({
            now:obj.time,
            money:obj.now
        })
    }
    changePayWay(){
        this.setState((prev)=>({
            showMask:!prev.showMask,
            payOk:true,
        }))
    }
    changTxt = (props) => {
        this.setState({
          nowWay: props[0][0],
          nowTxt:props[0][1]
        });
    }
    
    async payForVIP(){
        const uId = localStorage.getItem('uId')

        this.setState((prev)=>({
            showMask:true,
            isShowCodeBG:true
        }))

        setTimeout(()=>{
            this.setState({
                isShowCodeBG:false,
                payOk:true
            })
        },20000)
        
        fetch('http://wanghao.group/wapay',{
            method:'POST'
        })
            .then(response=>response.json())
            .then(res=>{
                console.log(res);
                this.setState({
                    codeUrl:res.qrcodeUrl
                })
            })


        let meId = 1 

        if(this.state.now===1){
            meId = 1-0
        }else if(this.state.now===3){
            meId = 2-0
        }else{
            meId = 3-0
        }

        let resultPost = await http.postData({
            url:'/api/mine/updateIsmember',
            data:querystring.stringify({
                uId,
                meId,
            }),
            method:'POST'
        })
        
        let resultGet = await http.getDATA({
            url:`/api/mine/showSuperUser?uId=${uId}`,
        })
        let data = resultGet.data.obj

        this.setState({
            VIPdata:data.mMedate?data.mMedate:'',
            isVip:data.mIsmember,
            userName:data.mNickname

        })


        
    }

    changIsShow(){
        this.setState((prev)=>({
            showMask:false,
            payOk:false
        }))
    }

}


export default Vip;