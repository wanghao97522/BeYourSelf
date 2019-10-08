import React,{Component} from "react";
import ProfileUI from './ProfileUI';
import buqian from '../../../assets/images/grow/icon-buqian.png';
class ProfileContainer extends Component{
    render(){
            return (
                <ProfileUI buqian={buqian}></ProfileUI>
            )
    }
}
export default ProfileContainer