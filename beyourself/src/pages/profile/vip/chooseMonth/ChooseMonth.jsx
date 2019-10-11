import React, { Component } from 'react';

import {withRouter} from 'react-router-dom'

import { ChooseMonthContainer } from './styledChooseMonth'

class ChooseMonth extends Component {
    state={
        now:0,
        origin:0
    }
    render() {
        // let {match} = this.props
        return (
            <ChooseMonthContainer onClick={()=>this.props.onClick({time:this.props.time,now:this.state.now})} className={this.props.now===this.props.time?'active':''}>
                <span className='longTime'>{this.props.time}个月</span>
                <span className='realPrice'>￥{this.state.now}.00</span>
                <del className='orignPrice'>￥{this.state.origin}.00</del>
                <div className='firstPay'>首冲特惠</div>
            </ChooseMonthContainer>
        );
    }

    componentDidMount(){
        switch (this.props.time) {
            case 1:
                this.setState({
                    now:10,
                    origin:25
                })
                break;
            case 3:
                this.setState({
                    now:25,
                    origin:70
                })
                break;
            case 12:
                this.setState({
                    now:75,
                    origin:260
                })
                break;
            default:
                break;
        }
    }
}

export default withRouter(ChooseMonth);