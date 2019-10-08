import React from 'react';
import {TimestyContainer} from './timeline';
import HabitContainer from './components/Habit.jsx';
export default (props)=>{
    return (
        <TimestyContainer quxiao={props.quxiao}  guanbi={props.guanbi}>
            <div>
                <div className="wrapper">
                    <div className="top">
                        <span></span>
                        <h2>时间线</h2>
                    </div>
                    <div className="bottom">
                        <HabitContainer zxcg={props.zxcg} yujia={props.yujia}></HabitContainer>
                    </div>
                </div>
            </div>
        </TimestyContainer>
    )
}
