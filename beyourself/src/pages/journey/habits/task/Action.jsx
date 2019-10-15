import React, { Component } from 'react'
import { Title, Container, TopDiv, BtmDiv } from '../components/drink_comp';
import { DatePicker, List } from 'antd-mobile';

import goBack from 'assets/images/return@2x.png'
import QianDao from 'assets/images/qiandao@2x.png'
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
if (minDate.getDate() !== maxDate.getDate()) {
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

export default class Action extends Component {
    state = {
        date: now,
        time: now,
        utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: false,
    }
    render() {
        return (
            <Container style={{backgroundColor:'#1B93B9'}}>
                <Title>
                    <div onClick={()=>this.back()}><img src={goBack} alt=""/></div>
                    <div className='title'>行动</div>
                    <div style={{ margin:'0 .16rem 0 1.15rem'}} onClick={()=>this.back()}><img style={{width:'.2rem',height:'.2rem',}} src={QianDao} alt=""/></div>
                </Title>
                <TopDiv style={{height:'3.24rem'}}>
                    <div className="tips">在你的床边放一瓶水</div>
                    <List>
                        <DatePicker>
                            <List.Item style={{height:'.2rem',backgroundColor:'white',borderRadius:'.14rem !important',display:'block'}} className="re_me">提醒我</List.Item>
                        </DatePicker>
                    </List>
                </TopDiv >
                <BtmDiv  style={{height:'3.75rem'}}>
                    <div className="why">为什么？</div>
                    <div className="cus">今晚临睡前，将水瓶放在床边，以确保明天醒来第一件事就是喝水。</div>
                    <div className="set">Y，今晚你可以点击“提醒我”来设置提醒。</div>
                </BtmDiv>
            </Container>
        )
    }
    back(){
        this.props.history.goBack()
    }
}
