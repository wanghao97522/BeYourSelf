import React from 'react';
import {withRouter} from 'react-router-dom';
import {TimestyContainer} from './timeline';
import HabitContainer from '../components/Habit.jsx';
export default withRouter((props)=>{
    function handelClick(){
        props.history.goBack();
    }
    return (
        <TimestyContainer quxiao={props.quxiao}  guanbi={props.guanbi}>
            <div>
                <div className="wrapper">
                    <div className="top">
                        <span onClick={()=>handelClick()}></span>
                        <h2>时间线</h2>
                    </div>
                    <div className="bottom">
                        <HabitContainer zxcg={props.zxcg} yujia={props.yujia}></HabitContainer>
                    </div>
                </div>
            </div>
        </TimestyContainer>
    )
})
