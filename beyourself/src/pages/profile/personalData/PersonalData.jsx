import React, { Component } from 'react';

import { PersonalDataContainer } from './styledPersonalData'
import personalPhotoBG from 'assets/images/profile/touxiang-gerenziliao@2x.png'


class PersonalData extends Component {
    state={
        isShowMask:true,
        netName:'小镇青年',
    }

    render() {
        return (
            <PersonalDataContainer isShowMask={this.state.isShowMask}>
                <header>
                    <div className='back' onClick={()=>this.goback()}>
                    </div>
                    <h2>个人资料</h2>    
                </header>
                <nav>
                    <ul>
                        <li className="photo">
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>头像</h3>
                                <div className='personalPhotoBG'>
                                    <img src={personalPhotoBG} alt=""/>
                                </div>
                            </div>
                            <div className="right_jt"></div>
                        </li>
                        <li className="netname" onClick={()=>this.changIsShow()}>
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>昵称</h3>
                                <h4>{this.state.netName}</h4>
                            </div>
                            <div className="right_jt"></div>
                        </li>
                        <li className="sex">
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>性别</h3>
                                <h4>选择性别</h4>
                            </div>
                            <div className="right_jt"></div>
                        </li>
                        <li className="birth">
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>生日</h3>
                                <h4>选择生日</h4>
                            </div>
                            <div className="right_jt"></div>
                        </li>
                    </ul>
                </nav>
                <div className="mask">
                    <div className="blackBG" onClick={()=>this.changIsShow()}></div>
                    <div className="content">
                        <div className="data">
                            <input type="text" defaultValue={this.state.netName}/>
                        </div>
                        <div className='submit'>
                            <span onClick={()=>this.changIsShow()}>取消</span>
                            <span>确定</span>
                        </div>
                    </div>
                </div>  
            </PersonalDataContainer>
        );
    }

    goback(){
        this.props.history.goBack()
        // console.log(this.props);
    }

    changIsShow(){
        this.setState((prev)=>({
            isShowMask:!prev.isShowMask
        }))
    }

}

export default PersonalData;