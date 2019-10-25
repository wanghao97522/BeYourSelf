import React,{useState} from 'react';
import {withRouter} from 'react-router-dom'; 
import { NavBar,Icon,Toast} from 'antd-mobile';
import {NewSoundstyContainer,Top,HabitAndSound} from './newhabit';
import Habittip from '../components/Habittip.jsx';
import shedin from 'assets/images/grow/icon-shedin.png';
import naolin from 'assets/images/grow/icon-naolin.png';
import tuu from 'assets/images/grow/tuu.png';
import lingdang from 'assets/images/grow/icon-lingdang.png';
import http from '../../../../utils/http1';
import querystring from 'querystring';
export default withRouter((props) => {
    let value=getvalue();
    let week='周日'
    const [habitname,sethabitname]=useState(value);
    if(sessionStorage.getItem("week")){
        let arr=JSON.parse(sessionStorage.getItem("week")).map((value)=>{
            return "周"+value;
        });
        week=arr.join(',');
    }
    let time=sessionStorage.getItem("time")?JSON.parse(sessionStorage.getItem("time")):{
        hour:'4',
        minute:'6'
    };
    function getvalue(){
        let value=""
        sessionStorage.getItem("newhabitname")?value=sessionStorage.getItem("newhabitname"):value=""
        return value
    }
    function changeValue(e){
        sessionStorage.setItem("newhabitname",e.target.value);
        sethabitname(e.target.value);
    }
    var formatDateTime = function (date) {  
        var y = date.getFullYear();  
        var m = date.getMonth() + 1;  
        m = m < 10 ? ('0' + m) : m;  
        var d = date.getDate();  
        d = d < 10 ? ('0' + d) : d;  
        var h = date.getHours();  
        var minute = date.getMinutes();  
        minute = minute < 10 ? ('0' + minute) : minute;  
        return y + '-' + m + '-' + d+' '+h+':'+minute;  
    };  
    async function sendnewhabit(){
        let data={
            uId:'13',
            hName:habitname,
            hDate:formatDateTime(new Date()),
            hTime:(time.hour>9?time.hour:"0"+time.hour)+(time.minute>9?time.minute:"0"+time.minute),
            hMusic:props.sound,
        }
        let result=await http.post({
            url:'http://10.9.20.181:8084/api/habit/add/habit',
            method:'POST',
            data:querystring.stringify(data)
        })
        if(result.flag){
            Toast.success('添加成功', 1);
        }else{
            Toast.fail('添加失败', 1);
        }
        setTimeout(()=>{
            props.history.push('/index/home');
        },2000)
    }
    return (
        <NewSoundstyContainer>
            <div className="wrapper">
                <div className="box">
                    <NavBar
                        mode="light"
                        leftContent="取消"
                        rightContent={<span onClick={()=>{sendnewhabit()}}>完成</span>}
                        onLeftClick={()=>{props.history.goBack()}}
                    >新的习惯</NavBar>
                    <Habittip img={shedin} title={"习惯设定"}></Habittip>
                    <div className="habitname">
                        <Top>
                            <span>习惯名称</span>
                            <input type="text" value={habitname}  onChange={(e)=>{changeValue(e)}} placeholder="123" />
                        </Top>
                        <div className="bottom">
                            <img src={tuu} alt=""/>
                        </div>
                    </div>
                    <Habittip img={naolin} title={"提示音"}></Habittip>
                    <HabitAndSound onClick={()=>{props.history.push('/selecttime')}}>
                        <span>{week}</span>
                        <p>
                            <span>{time.hour>9?time.hour:"0"+time.hour}:{time.minute>9?time.minute:"0"+time.minute}</span>
                            <span><Icon type="right"/></span>
                        </p>
                    </HabitAndSound>
                    <div className="addsound">
                        <span>添加提示音</span>
                    </div>
                    <Habittip img={lingdang} title={"提示设定"}></Habittip>
                    <HabitAndSound onClick={()=>props.onClick()}>
                        <span>提示音铃声</span>
                        <p>
                            <span>{props.sound}</span>
                            <span><Icon type="right"/></span>
                        </p>
                    </HabitAndSound>
                    <div className="textbox">
                        <p>我们无法在静音模式启动之下，利用提示音来提醒您。如果您 要被提醒，请关闭静音模式。</p>
                    </div>
                </div>
            </div>
        </NewSoundstyContainer>
    )
})