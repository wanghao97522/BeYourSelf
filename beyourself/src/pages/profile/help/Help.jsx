import React, { Component } from 'react';

import {HelpContainer,HeaderContainer,FootContainer,LiContainer} from './styledHelp'

import shotBG from 'assets/images/profile/beijingtupian@2x.png'

class Help extends Component {
    state={
        nowBG:'shotBG'
    }
    render() {
        return (
            <HelpContainer>
                <HeaderContainer>
                    <div className="back" onClick={()=>this.back()}>取消</div>
                    <div className="title">帮助与反馈</div>
                    <div className="ok">完成</div>
                </HeaderContainer>
                <FootContainer nowBG={this.state.nowBG}>
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
                    <div className="shotTip">
                        <p>如果您有相关的屏幕截图,请上传给我们吧!</p>
                        <p>它们对我们解决问题是非常有帮助的。</p>
                    </div>
                    <div className="sendBtn">
                        <div>上传截图</div>
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