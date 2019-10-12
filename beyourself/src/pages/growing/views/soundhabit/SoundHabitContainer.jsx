import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import SoundHabitUI from './SoundHabitUI';
class SoundHabitContainer extends Component{
    render(){
        return (
            <SoundHabitUI></SoundHabitUI>
        )
    }
}
export default withRouter(SoundHabitContainer)