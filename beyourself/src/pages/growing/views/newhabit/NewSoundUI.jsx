import React from 'react';
import {NewSoundstyContainer,Top} from './newhabit';
import { NavBar} from 'antd-mobile';
import Habittip from '../components/Habittip.jsx';
import shedin from '../../../../assets/images/grow/icon-shedin.png';
import naolin from '../../../../assets/images/grow/icon-naolin.png';
import tuu from '../../../../assets/images/grow/tuu.png';
export default (props) => {
    return (
        <NewSoundstyContainer>
            <div className="wrapper">
                <div className="box">
                    <NavBar
                        mode="light"
                        leftContent="取消"
                        rightContent="完成"
                    >新的习惯</NavBar>
                    <Habittip img={shedin} title={"习惯设定"}></Habittip>
                    <div className="habitname">
                        <Top>
                            <span>习惯名称</span>
                            <input type="text" placeholder="活力习惯！健康饮食"/>
                        </Top>
                        <div className="bottom">
                            <img src={tuu} alt=""/>
                        </div>
                    </div>
                    <Habittip img={naolin} title={"提示音"}></Habittip>
                    <Top>
                            <span>习惯名称</span>
                            <p></p>
                    </Top>
                </div>
            </div>
        </NewSoundstyContainer>
    )
}