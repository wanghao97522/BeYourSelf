import React,{useState} from 'react';
import {withRouter} from 'react-router-dom';
import { PickerView,Toast} from 'antd-mobile';
import {TaskTimeStyContainer,Bottom,Wrapper} from './tasktime';
import querystring from 'querystring';
import http from '../../../../utils/http1';
export default withRouter((props)=>{
    const [value,setvalue]=useState(["0","小时","3","分钟"])
    const query = this.props.match.location.search 
    const arr = query.split('=');
    let tId=arr[arr.length-1];
    async function setTime(){
        let data={
            tId,
            tTimespan:value[0]*60*60+value[2]*60
        }
        let result =await http.post({
            url:'/api/habit/update/tasktime',
            method:'POST',
            data:querystring.stringify(data)
        })
        if(result.flag){
            Toast.success('时间调整成功', 1);
        }else{
            Toast.fail('时间调整失败失败', 1);
        }
        setTimeout(()=>{
            props.history.goBack();
        },2000)  
    }
    function changeValue(data){
      setvalue(data);
    }
    return (
        <TaskTimeStyContainer>
            <div className="title">
                <span onClick={()=>{props.history.goBack()}}>取消</span>
                <div className="center">
                    <span>任务时间长短</span>
                    <span>项目</span>
                </div>
                <span className="finish" onClick={setTime}>完成</span>
            </div>
            <Bottom>
                <Wrapper>
                    <PickerView
                        onChange={(value)=>{changeValue(value)}}
                        value={value}
                        data={props.datalist}
                        cascade={false}
                    />
                </Wrapper>
            </Bottom>
        </TaskTimeStyContainer>
    )
})