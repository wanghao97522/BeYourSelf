import React,{Component} from 'react';
import TimelineUI from './TimelineUI';
import quxiao from '../../../assets/images/grow/quxiao.png';
import zxcg from '../../../assets/images/grow/icon-zxcg.png';
import yuja from '../../../assets/images/grow/icon-yuja.png';
import guanbi from '../../../assets/images/grow/icon-guanbi.png';
class TimelineContainer extends Component{
    render(){
        return (
           <TimelineUI quxiao={quxiao} zxcg={zxcg} yujia={yuja} guanbi={guanbi}>

           </TimelineUI> 
        )
    }
    // componentDidMount(){
    //     window.addEventListener("touchmove", func, { passive: false })
    // }
}
export default TimelineContainer