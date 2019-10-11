import React, { Component } from 'react';

import {InvitPageContainer} from './styledInvitPage'
import photoImg from 'assets/images/profile/vip/Group3@2x.png'


class InvitPage extends Component {
    render() {
        return (
            <InvitPageContainer>
                <header>
                    <div className='title'>
                        <div className='back' onClick={() => this.back()}></div>
                        <div className='txt'>邀请更多好友</div>
                    </div>
                </header>
                <ul className="nav">
                    <li>
                        <div className='photo'>
                            <img src={photoImg} alt=""/>
                        </div>
                        <div className='txt'>
                            <h3>账号名称</h3>
                            <h4>个性签名</h4>
                        </div>
                    </li>
                    <li>
                        <div className='photo'>
                            <img src={photoImg} alt=""/>
                        </div>
                        <div className='txt'>
                            <h3>账号名称</h3>
                            <h4>个性签名</h4>
                        </div>
                    </li>
                </ul>
                <div className="invit_button" onClick={()=>this.handleClick()}>
                    <div>
                        邀请更多好友
                    </div>
                </div>
            </InvitPageContainer>
        );
    }

    back(){
        this.props.history.goBack()
    }

    handleClick(){
        console.log(1);
    }
}

export default InvitPage;