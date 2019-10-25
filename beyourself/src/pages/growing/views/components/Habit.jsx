import React,{Component} from 'react';
import qs from 'querystring';
import {HabitContainer} from './habit';
import http from '../../../../utils/http1';
class Habit extends Component{
    state={
        showlist:[
            // {
            // "hId": 2,
            // "hName": "test2",
            // "list": [
            // {
            // "tId": 5,
            // "tName": "任务测试",
            // "tStatus": 1,
            // },
            // {
            //     "tId": 6,
            //     "tName": "任务测试",
            //     "tStatus": 0,
            //     },
            // ],}
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
                        <div  key={value.habit.hId}>
                        <div className="circlewrapper">
                            <div className="circle"></div>
                            <div className="text">{value.habit.hName}</div>
                        </div>
                        <span></span>
                        {
                            value.list.map((item)=>{
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
    async componentDidMount(){
        let result=await http.post({
            url:'/api/habit/time1',
            method:"POST",
            data:qs.stringify({
                // uId:1,
                uId:localStorage.getItem('uId')
            })
        })
        let list=result.list;
        this.setState({
            showlist:list
        })
    }
}
export default Habit