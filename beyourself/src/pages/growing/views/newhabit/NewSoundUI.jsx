import React from 'react';
import {NavLink,withRouter} from 'react-router-dom'; 
import {NewSoundstyContainer,Top,HabitAndSound} from './newhabit';
import { NavBar,Icon} from 'antd-mobile';
import Habittip from '../components/Habittip.jsx';
import shedin from 'assets/images/grow/icon-shedin.png';
import naolin from 'assets/images/grow/icon-naolin.png';
import tuu from 'assets/images/grow/tuu.png';
import lingdang from 'assets/images/grow/icon-lingdang.png';
export default withRouter((props) => {
    return (
        <NewSoundstyContainer>
            <div className="wrapper">
                <div className="box">
                    <NavBar
                        mode="light"
                        leftContent="取消"
                        rightContent={<NavLink to="/index/home">完成</NavLink>}
                        onLeftClick={()=>{props.history.goBack()}}
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
                    <HabitAndSound onClick={()=>{props.history.push('/tasktime')}}>
                        <span>周日</span>
                        <p>
                            <span>4:41</span>
                            <span>下午</span>
                            <span><Icon type="right"/></span>
                        </p>
                    </HabitAndSound>
                    <div className="addsound">
                        <span>添加提示音</span>
                    </div>
                    <Habittip img={lingdang} title={"提示设定"}></Habittip>
                    <HabitAndSound onClick={()=>props.onClick()}>
                        <span>提示音铃声</span>
                        <p>
                            <span>{props.sound}</span>
                            <span><Icon type="right"/></span>
                        </p>
                    </HabitAndSound>
                    <div className="textbox">
                        <p>我们无法在静音模式启动之下，利用提示音来提醒您。如果您 要被提醒，请关闭静音模式。</p>
                    </div>
                </div>
            </div>
        </NewSoundstyContainer>
    )
})