import React, { Component } from 'react';

import {VipContainer} from './styledVip'

import vipBG from 'assets/images/profile/vip/hydb@2x.png'
import personal from 'assets/images/profile/vip/Grxoup@2x.png'

class Vip extends Component {
    render() {
        return (
            <VipContainer>
                <header>
                    <div className='back' onClick={()=>this.back()}>
                    </div>
                    <h2>会员</h2>    
                </header>
                <div className='banner'>
                    <img src={vipBG} alt=""/>
                    <div className="personal">
                        <img src={personal} alt=""/>
                    </div>
                    <span className='username'>会员账号名称</span>
                    <span className="overtime">会员于几月几日到期</span>
                </div>
                <h3>会员套餐</h3>
                <div className="payVip"></div>
            </VipContainer>
        );
    }

    back(){
        this.props.history.goBack()
    }
}


export default Vip;