import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import TaskTimeUI from './TaskTimeUI';
class TaskTimeContainer extends Component{
    render(){
        return (
            <TaskTimeUI datalist={this.genTaskData()}></TaskTimeUI>
        )
    }
   
    genTaskData=()=>{
        let hourlist=[];
        let minutelist=[];
        for(let i=0;i<=12;i++){
            hourlist.push({
                label:''+i,
                value:''+i,
            });
        }
        for(let i=0;i<=59;i++){
            minutelist.push({
                label:''+i,
                value:''+i,
            })
        }
        return [
            hourlist,
            [{
                label:'小时',
                value:'小时',
            }],
            minutelist,
            [{
                label:'分钟',
                value:'分钟',
            }]
        ]
    }
   
}
export default withRouter(TaskTimeContainer)