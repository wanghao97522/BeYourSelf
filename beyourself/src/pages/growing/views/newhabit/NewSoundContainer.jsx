import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import NewSoundUI from './NewSoundUI';
class NewSoundContainer extends Component{
    state={
        sound:sessionStorage.getItem('sound')?sessionStorage.getItem('sound'):'静音',
        // value:''
    }
    render(){
        return (
            <NewSoundUI sound={this.state.sound} onClick={()=>{this.goToSoundTip()}} value={this.props.value}></NewSoundUI>
        )
    }
    goToSoundTip=()=>{
        this.props.history.push('/soundtip')
    }
    componentDidMount(){
        this.props.location.sound&&this.setState({
            sound:this.props.location.sound
        })
    }
}
export default withRouter(NewSoundContainer)