import React,{Component} from 'react';
import {HabitContainer} from './habit';
import http from '../../../../utils/http';
class Habit extends Component{
    state={
        showlist:[
            {
            "hId": 2,
            "hName": "test2",
            "tasksList": [
            {
            "tId": 5,
            "tName": "任务测试",
            "tStatus": 1,
            },
            {
                "tId": 6,
                "tName": "任务测试",
                "tStatus": 0,
                },
            ],}
            ]
            }
    render(){
        return (
            <HabitContainer zxcg={this.props.zxcg} yujia={this.props.yujia}>
                <p className="title">今天</p>
                <div className="total">13/10</div>
                <span></span>
                {this.state.showlist.map((value)=>{
                    return (
                        <div  key={value.hId}>
                        <div className="circlewrapper">
                            <div className="circle"></div>
                            <div className="text">{value.hName}</div>
                        </div>
                        <span></span>
                        {
                            value.tasksList.map((item)=>{
                                return (
                                    <div className="exact" key={item.tId}>
                                        <div className="circlewrapper">
                                            <div className={item.tStatus===1?"circle":"graycircle"}></div>
                                            <div className="text">{item.tName}</div>
                                        </div>
                                        <span></span>
                                    </div>
                                )
                            })
                        }
                        </div>
                    )
                })}
                
                <p className="end">结束</p>
            </HabitContainer>
        )
    }
    // async componentDidMount(){
    //     let result=await http.get({url:`http://10.9.20.181:8084/api/habit/index?uId=${13}`});
    //     let list=result.list;
    //     this.setState({
    //         showlist:list
    //     })
    // }
}
export default Habit