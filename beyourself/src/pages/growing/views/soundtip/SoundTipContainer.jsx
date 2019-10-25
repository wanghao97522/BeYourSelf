import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import SoundTipUI from './SoundTipUI';
class SoundTipContainer extends Component{
    state={
        isSelect:'静音'
    }
    render(){
        return (
            <SoundTipUI sound={this.state.isSelect} onValue={(value)=>{this.handelClick(value)}} goBack={this.goBack}></SoundTipUI>
        )
    }
    handelClick=(value)=>{
        sessionStorage.setItem('music',value);
        this.setState({
            isSelect:value
        })
    }
    goBack=()=>{
        this.props.history.push({pathname:'/newhabit',sound:this.state.isSelect});
    }
}
export default withRouter(SoundTipContainer)