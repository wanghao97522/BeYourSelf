import React, { Component } from 'react'
import { Title, Container, TopDiv, BtmDiv } from '../components/drink_comp';

import goBack from 'assets/images/return@2x.png'
import QianDao from 'assets/images/qiandao@2x.png'

export default class Action extends Component {
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
                    <button>提醒我</button>
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
