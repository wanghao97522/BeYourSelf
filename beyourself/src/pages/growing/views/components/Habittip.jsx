import React,{Component} from 'react';
import {HabitTip} from '../newhabit/newhabit';
class Habittip extends Component{
    render(){
        return (
            <HabitTip>
                <img src={this.props.img} alt=""/>
                <span>{this.props.title}</span>
            </HabitTip>
        )
    }
}
export default Habittip