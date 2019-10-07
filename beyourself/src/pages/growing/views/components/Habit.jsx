import React,{Component} from 'react';
import {HabitContainer} from './habit';
class Habit extends Component{
    render(){
        return (
            <HabitContainer zxcg={this.props.zxcg} yujia={this.props.yujia}>
                <p className="title">今天</p>
                <div className="total">13/10</div>
                <span></span>
                <div className="moring circlewrapper">
                    <div className="circle"></div>
                    <div className="text">早晨习惯</div>
                </div>
                <span></span>
                <div className="exact">
                    <div className="circlewrapper">
                        <div className="graycircle"></div>
                        <div className="text">瑜伽</div>
                    </div>
                    <span></span>
                </div>
                <div className="aftertoon circlewrapper">
                    <div className="circle"></div>
                    <div className="text">下午习惯</div>
                </div>
                <span></span>
                <div className="dusk circlewrapper">
                    <div className="circle"></div>
                    <div className="text">黄昏习惯</div>
                </div>
                <span></span>
                <p className="end">结束</p>
            </HabitContainer>
        )
    }
}
export default Habit