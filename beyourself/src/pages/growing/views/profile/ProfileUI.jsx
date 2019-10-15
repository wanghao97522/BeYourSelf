import React from 'react';
import {withRouter} from 'react-router-dom';
import {ProstyContainer} from './profile';
import Calender from '../components/calendar/Calendar.jsx';
function profileUI(props){
    function handleTimeClick(){
        props.history.push('/timeline');
    }
    return (
    <ProstyContainer className="qiiu" buqian={props.buqian}>
        <div className="top">
            <div className="wrapper">
                <h1>我的</h1>
                <div className="timeline">
                    <h2>时间线</h2>
                    <div className="circleline" onClick={()=>{handleTimeClick(1)}}>
                        <div className="circle gray"><span>10/13</span></div>
                        <span className="line"></span>
                        <div className="circle finished"><span>100%</span></div>
                        <span className="line"></span>
                        <p className="finishedtext">结束</p>
                    </div>
                    <p className="starttext">1.让我们完成今天所有的仪式,达成您今天的黄金三角!</p>
                </div>
                <div className="month">
                    <h2>显示月份</h2>
                    <h3>2019年10月</h3>
                    <Calender showlist={props.showlist}  onClick={props.onClick}></Calender>
                </div>
                <div className="finishcon">
                    <h2>完成度:</h2>
                    <p className="fin-top">10月{props.day}日完成了{props.showlist[props.day]?props.showlist[props.day].rate:'0%'}</p>
                    <p className="fin-bottom">今天表现呢不错还要继续加油哦!</p>
                    <div className="supplewrapper">
                        <div className="supple">
                            <span>补签</span>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="space">
                </div>
                <div className="mask">
                    <div className="mask-card">
                        <p>确认使用补签卡吗?</p>
                        <button className="sure">确定</button>
                        <button className="cancle">取消</button>
                    </div>
                </div>
            </div>
        </div>
    </ProstyContainer>
    )
    
}
export default withRouter(profileUI);
