import React,{Component} from "react";
import qs from 'querystring';
import ProfileUI from './ProfileUI';
import http from '../../../../utils/http1';
class ProfileContainer extends Component{
    state={
        showlist:[],
        data:14,
        buqian:'none'
    }
    render(){
            return (
                <ProfileUI showlist={this.state.showlist} onClick={this.handeldateChange} day={this.state.data} buqian={this.state.buqian}></ProfileUI>
            )
    }
    async componentDidMount(){
        // let result=await http.post({
        //     url:'http://10.9.20.181:8084/api/habit/time',
        //     data:qs.stringify({
        //         uId:localStorage.getItem('uId')
        //     })
        // })
        // let rate=result.obj;
        let list=this.getshowlist();
        // list.push({
        //     rate
        // })
        this.setState({
            showlist:list
        })
    }
    handeldateChange=(value,rate)=>{
        if(rate){
            this.setState({
                data:value,
                buqian:rate==="100%"?"none":"block"
            })
        }
    }
    getshowlist(){
        let showlist=[];
        let myDate = new Date();
        let data=myDate.getDate();
        for(let i=0;i<data;i++){
            if(i%6 === 0){
                showlist.push({
                    rate:'100%'
                })
            }else{
                showlist.push({
                    rate:parseInt(50*Math.random())+'%'
                })
            }
        }
        return showlist
    } 
}
export default ProfileContainer