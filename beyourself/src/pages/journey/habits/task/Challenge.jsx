import React, { Component } from 'react'
import { Title, Container, TopDiv, BtmDiv } from '../components/drink_comp'
import { ActionSheet, WingBlank, Button } from 'antd-mobile'
import goBack from 'assets/images/return@2x.png'
import DrinkWater from 'assets/images/journey/heshui-sg@2x.png'
import axios from 'axios'
import qs from 'querystring'

export default class Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 'none',
            liClick1: false,
            liClick2: false,
            liClick3: false,
            color1: false,
            color2: false,
            color3: false
        }
    }

    showActionSheet = () => {
        const BUTTONS = ['我接受挑战', '取消'];
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            destructiveButtonIndex: BUTTONS.length - 2,
            maskClosable: true,
            'data-seed': 'logId',
        },
        (buttonIndex) => {
            this.setState({ 
                clicked: BUTTONS[buttonIndex] 
            },() => {
                if(this.state.liClick3===true){
                    document.getElementById('challenge_button').childNodes[0].innerHTML = "挑战完成"
                }
                switch(buttonIndex){
                    case 0:
                        document.getElementById('challenge_button').childNodes[0].innerHTML = "挑战进行中"
                        this.setState({
                            liClick1: true,
                            liClick2: false,
                            liClick3: false
                        })
                    break
                    case 1:
                        document.getElementById('challenge_button').childNodes[0].innerHTML = "我接受挑战"
                        this.setState({
                            liClick1: false,
                            liClick2: false,
                            liClick3: false
                        })
                    break
                            
                }
                
            })

        })
    }

    originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY

    render() {
        return (
            <Container style={{backgroundColor:'#1B93B9'}}>
                <Title>
                    <div onClick={()=>this.back()}><img src={goBack} alt=""/></div>
                    <div className='title'>挑战</div>
                </Title>
                <TopDiv>
                    <div className="logo"><img src={DrinkWater} alt=""/></div>
                    <div className='title'>喝水</div>
                    <div className="tips">在接下来的三天，醒来时喝杯水，让身体快速进入状态，以最佳状态开启新的一天。</div>
                    <div className="bord"></div>
                    <div className="introduce">这个挑战的喝水习惯已经被添加到早晨习惯里了。让我们完成它吧。</div>
                </TopDiv>
                <BtmDiv>
                    <div className="rules">一个星期内进行此项任务三次，迈向成功。</div>
                    <ul>
                        <li onClick={this.state.liClick1 && !this.state.color1 ? ()=>this.handleClick(1):() => {}} style={{backgroundColor:`${this.state.color1 ? '#1B93B9':''}`,color:`${this.state.color1 ? 'white':''}`}}>1</li>
                        <li onClick={!this.state.color2 ? ()=>this.handleClick(2):() => {}} style={{margin:"0 .15rem 0 .15rem",backgroundColor:`${this.state.color2 ? '#1B93B9':''}`,color:`${this.state.color2 ? 'white':''}`}}>2</li>
                        <li onClick={!this.state.color3 ? ()=>this.handleClick(3):() => {}}  style={{backgroundColor:`${this.state.color3 ? '#1B93B9':''}`,color:`${this.state.color3 ? 'white':''}`}}>3</li>
                    </ul>
                    <WingBlank >
                        <Button className="ch_btn" id="challenge_button" onClick={this.showActionSheet}>我接受挑战</Button>
                    </WingBlank>
                </BtmDiv>
            </Container>
        )
    }
    back(){
        this.props.history.goBack()
    }
    handleClick(value){
        // console.log(value)
        switch(value){
            case 1 :
                axios({
                    method: 'post',
                    url: '/api/challenge',
                    data: qs.stringify({
                        uId: 1,
                        routeId: 1,
                        taskId: 2,
                        ci: value
                    })
                }).then((res) => {
                    console.log(res.data.flag);
                    this.setState({
                        liClick1: false,
                        liClick2: true,
                        liClick3: false,
                        color1: res.data.flag
                    })
                })
                break
            case 2 :
                axios({
                    method: 'post',
                    url: '/api/challenge',
                    data: qs.stringify({
                        uId: 1,
                        routeId: 1,
                        taskId: 2,
                        ci: value
                    })
                }).then((res) => {
                    console.log(res.data.flag);
                    this.setState({
                        liClick1: false,
                        liClick2: false,
                        liClick3: true,
                        color2: res.data.flag
                    })
                })
                break
            case 3 :
                axios({
                    method: 'post',
                    url: '/api/challenge',
                    data: qs.stringify({
                        uId: 1,
                        routeId: 1,
                        taskId: 2,
                        ci: value
                    })
                }).then((res) => {
                    console.log(res.data.flag);
                    this.setState({
                        liClick1: false,
                        liClick2: false,
                        liClick3: false,
                        color3: res.data.flag
                    })
                })
                break
        }
    }
}
