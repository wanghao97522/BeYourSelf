import React,{Component} from 'react';
import CalendarSty from './calendar.js';
class CalendarContainer extends Component{
    render(){
        return (
            <CalendarSty day={this.generateData().day}>
                <div className="week">
                    {["日","一","二","三","四","五","六"].map((value)=>(
                        <span key={value}>{value}</span>
                    ))}
                </div>
                <div className="data">
                    <ul>
                    {
                        this.generateData().dayList.map((value)=>(
                            <li onClick={()=>this.props.onClick(value,this.props.showlist[value]?this.props.showlist[value].rate:'')} key={value} className={this.props.showlist[value]?(this.props.showlist[value].rate==="100%"?"finished":'unfinished'):""}>
                                <span>{value}</span>
                            </li>
                        ))
                    }
                    </ul>
                </div>
            </CalendarSty>
        )
    }
    generateData(){
        let myDate = new Date();
        let year =myDate.getFullYear(); 
        let month = myDate.getMonth(); 
        let dayList=[];
        function getMonthDay(year, month) {
            let days = new Date(year, month + 1, 0).getDate()
            return days
          } 
        let a = new Date(year,month,1);
        let day=a.getDay();
        for(let i=1;i<= getMonthDay(year,month);i++){
            dayList.push(i);
        } 
        return {
            dayList,
            day
        };
    }; 
    
}
export default CalendarContainer