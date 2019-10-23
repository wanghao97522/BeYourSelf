import React, { Component } from 'react'
import MysteriousTravel from './pages/mysterioustravel/MysteriousTravel';
// import axios from 'axios'

export default class Journey extends Component {
    state = {
        list:{}
    }
    render() {
        return (
            <MysteriousTravel list={this.state.list}></MysteriousTravel>
        )
    }
    componentDidMount(){
        // let list = axios.get('/api')
        //     .then(function (res) {
        //         console.log( res.data);
                
        // })
        this.setState({
            list: {
                aaa : 1
            }
        })
        
    }
}
