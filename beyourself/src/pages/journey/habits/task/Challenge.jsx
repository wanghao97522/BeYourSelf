import React, { Component } from 'react'
import { Title, Container, TopDiv, BtmDiv } from '../components/drink_comp'
import { ActionSheet, WingBlank, Button } from 'antd-mobile'
import goBack from 'assets/images/return@2x.png'
import DrinkWater from 'assets/images/journey/heshui-sg@2x.png'

export default class Challenge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 'none',
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
                switch(buttonIndex){
                    case 0:
                        document.getElementById('challenge_button').childNodes[0].innerHTML = "挑战进行中"
                    break
                    default:
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
                        <li>1</li>
                        <li style={{margin:"0 .15rem 0 .15rem"}}>2</li>
                        <li>3</li>
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
}
