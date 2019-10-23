import React, { Component } from 'react';

import {HelpContainer,HeaderContainer,FootContainer,LiContainer} from './styledHelp'


import { Toast } from 'antd-mobile';

import shotBG from 'assets/images/profile/beijingtupian@2x.png'


class Help extends Component {

    state={
        nowBG:'shotBG',
        showImg:shotBG
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
                        <div className="imgBox" onClick={()=>this.handleClick()}>
                            <img src={this.state.showImg} alt=""/>
                        </div>
                    </div>
                    <div className="shotTip">
                        <p>如果您有相关的屏幕截图,请上传给我们吧!</p>
                        <p>它们对我们解决问题是非常有帮助的。</p>
                    </div>
                    <div className="sendBtn" onClick={this.sendScreenShot}>
                        <div>上传截图</div>
                    </div>
                </FootContainer>
            </HelpContainer>
        );
    }

    
    back(){
        this.props.history.goBack()
    }

    handleClick(){
        let clickThis = this
        window.wx.ready(function(){
            window.wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                    console.log(localIds);
                    clickThis.setState({
                        showImg:localIds
                    })
                },
            });
        })
    }
    sendScreenShot(){
        Toast.success('上传成功', 1);
    }
    
}

export default Help;