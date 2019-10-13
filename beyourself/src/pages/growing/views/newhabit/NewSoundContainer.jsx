import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import NewSoundUi from './NewSoundUI';
class NewSoundContainer extends Component{
    state={
        sound:'静音'
    }
    render(){
        return (
            <NewSoundUi sound={this.state.sound} onClick={()=>{this.goToSoundTip()}}></NewSoundUi>
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