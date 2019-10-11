import React, { Component } from 'react';

import { PersonalDataContainer } from './styledPersonalData'
import personalPhotoBG from 'assets/images/profile/touxiang-gerenziliao@2x.png'


class PersonalData extends Component {
    render() {
        return (
            <PersonalDataContainer>
                <header>
                    <div className='back' onClick={()=>this.goback()}>
                    </div>
                    <h2>个人资料</h2>    
                </header>
                <nav>
                    <ul>
                        <li className="photo" onClick={()=>this.handleClick()}>
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>头像</h3>
                                <div className='personalPhotoBG'>
                                    <img src={personalPhotoBG} alt=""/>
                                </div>
                            </div>
                            <div className="right_jt"></div>
                        </li>
                        <li className="netname" onClick={()=>this.handleClick()}>
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>昵称</h3>
                                <h4>点击编辑</h4>
                            </div>
                            <div className="right_jt"></div>
                        </li>
                        <li className="sex" onClick={()=>this.handleClick()}>
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>性别</h3>
                                <h4>选择性别</h4>
                            </div>
                            <div className="right_jt"></div>
                        </li>
                        <li className="birth" onClick={()=>this.handleClick()}>
                            <div className='bg_icon'></div>
                            <div className="txt">
                                <h3>生日</h3>
                                <h4>选择生日</h4>
                            </div>
                            <div className="right_jt"></div>
                        </li>
                    </ul>
                </nav>  
            </PersonalDataContainer>
        );
    }

    goback(){
        this.props.history.goBack()
        // console.log(this.props);
    }

    handleClick(){
        console.log(1);
    }

}

export default PersonalData;