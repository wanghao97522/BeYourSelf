import React, { Component } from 'react'
import { Title, Container, TopDiv, BtmDiv } from '../components/drink_comp'
import { DatePicker, List } from 'antd-mobile'
import qs from 'querystring'
import axios from 'axios'

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
                    <div style={{ margin:'0 .16rem 0 1.15rem'}} onClick={()=>this.handleClick()}><img style={{width:'.2rem',height:'.2rem',}} src={QianDao} alt=""/></div>
                </Title>
                <TopDiv style={{height:'3.24rem'}}>
                    <div className="tips">在你的床边放一瓶水</div>
                    <div className="aaa">
                        <List>
                            <DatePicker 
                                mode="time"
                                minDate={minDate}
                                maxDate={maxDate}
                               value={this.state.date}
                               onChange={date => this.setState({ date })}
                                onOk={data=>{console.log(data)}}
                            >
                                <List.Item className="re_me"  arrow="horizontal">提醒我</List.Item>
                            </DatePicker>
                        </List>
                    </div>
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
    handleClick(){
        const uid = localStorage.getItem("uId")
        axios({
            method: 'post',
            url: '/api/clockIn',
            data: qs.stringify({
                uId: uid,
                routeId: 1,
                taskId: 3
            })
        }).then((res) => {
            console.log(res);
        })
    }
    // timestampFormat( timestamp ) {
    //     function zeroize( num ) {
    //         return (String(num).length == 1 ? '0' : '') + num;
    //     }
    
    //     var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
    //     var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数
    
    //     var curDate = new Date( curTimestamp * 1000 ); // 当前时间日期对象
    //     var tmDate = new Date( timestamp * 1000 );  // 参数时间戳转换成的日期对象
    
    //     var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
    //     var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();
    
    //     if ( timestampDiff < 60 ) { // 一分钟以内
    //         return "刚刚";
    //     } else if( timestampDiff < 3600 ) { // 一小时前之内
    //         return Math.floor( timestampDiff / 60 ) + "分钟前";
    //     } else if ( curDate.getFullYear() == Y && curDate.getMonth()+1 == m && curDate.getDate() == d ) {
    //         return '今天' + zeroize(H) + ':' + zeroize(i);
    //     } else {
    //         var newDate = new Date( (curTimestamp - 86400) * 1000 ); // 参数中的时间戳加一天转换成的日期对象
    //         if ( newDate.getFullYear() == Y && newDate.getMonth()+1 == m && newDate.getDate() == d ) {
    //             return '昨天' + zeroize(H) + ':' + zeroize(i);
    //         } else if ( curDate.getFullYear() == Y ) {
    //             return  zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
    //         } else {
    //             return  Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
    //         }
    //     }
    // }
}
