import React from 'react';
import {withRouter} from 'react-router-dom';
import { PickerView} from 'antd-mobile';
import {TaskTimeStyContainer,Bottom,Wrapper} from './tasktime';
export default withRouter((props)=>{
    return (
        <TaskTimeStyContainer>
            <div className="title">
                <span onClick={()=>{props.history.goBack()}}>取消</span>
                <div className="center">
                    <span>任务时间长短</span>
                    <span>项目</span>
                </div>
                <span className="finish">完成</span>
            </div>
            <Bottom>
                <Wrapper>
                    <PickerView
                        onChange={(value)=>props.onChange(value)}
                        // onScrollChange={this.onScrollChange}
                        value={["0","小时","3","分钟"]}
                        data={props.datalist}
                        cascade={false}
                    />
                </Wrapper>
            </Bottom>
        </TaskTimeStyContainer>
    )
})