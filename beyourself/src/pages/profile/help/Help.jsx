import React, { Component } from 'react';

import {HelpContainer,HeaderContainer,FootContainer,LiContainer} from './styledHelp'

import shotBG from 'assets/images/profile/beijingtupian@2x.png'

class Help extends Component {
    render() {
        return (
            <HelpContainer>
                <HeaderContainer>
                    <div className="back" onClick={()=>this.back()}>取消</div>
                    <div className="title">帮助与反馈</div>
                    <div className="ok">完成</div>
                </HeaderContainer>
                <FootContainer>
                    <ul>
                        <LiContainer>
                            <p>常见问题</p>
                            <p>我们真心希望能够帮助到您，不过我们需要更多详情。 您在使用软件过程中遇到什么问题？</p>
                        </LiContainer>
                        <LiContainer>
                            <div className='inputTxt'>
                                <textarea type="text" placeholder='输入文字'/>
                            </div>
                        </LiContainer>
                    </ul>
                    <div className='screenshot'>
                        <div>截图</div>
                        <div className="imgBox">
                            <img src={shotBG} alt=""/>
                        </div>
                    </div>
                </FootContainer>
            </HelpContainer>
        );
    }

    back(){
        this.props.history.goBack()
    }
}

export default Help;