import React, { Component } from 'react'
import {VerContainer} from './StyledVerification'
import LiBack from '../components/back/Back'
// import Ipt from '../components/ipt/Ipt'
import LiButton from '../components/button/Button'

export default class Verification extends Component {
    constructor(){
        super()
        this.state = {
          maxLength: 1,
          iptVal:'',
          valueA: "", //验证码第一位
          valueB: "", //二
          valueC: "", //三
          valueD: "", //四
          isShow:false,
          count:5,
          getCodeChange:false
        }
      }
    handleInputValue = (e, type) => {
    const { value = "" } = e.target;
    if (type === "A") {
      if (value) this.secondFoucs.focus();
      this.setState({
        valueA: value.slice(0, 1)
      });
    } else if (type === "B") {
      if (value) this.tridFoucs.focus();
      this.setState({
        valueB: value.slice(0, 1)
      });
    } else if (type === "C") {
      if (value) this.fourFoucs.focus();
      this.setState({
        valueC: value.slice(0, 1)
      });
    } else {
      this.setState({
        valueD: value.slice(0, 1),
        isShow: true
      });
    }
  };
  handleDel = e => {
    const BACK_SPACE = 8;
    const isBackSpaceKey = e.keyCode === BACK_SPACE;
    console.log(e.target.value.length)
    if (isBackSpaceKey && e.target.value.length === 0) {
      // console.log(e)
      let previous = e.target;
      previous = previous.previousElementSibling;
      while (previous) {
        if (previous === null) break;
        if (previous.tagName.toLowerCase() === "input") {
          previous.focus();
          break;
        }
      }
    }
  };
     render() {
       const { maxLength } = this.state;
      this.phoneNum = this.props.location.state.phoneNum.substring(0,3)
        return (
          <VerContainer>
              <LiBack></LiBack>
              <h2>请输入验证码</h2>
              <h4>我们已向+86 {this.phoneNum}********发送了一个4位验证码</h4>
              {/* <Ipt  handleIpt={this.handleIpt.bind(this)}></Ipt> */}
              <div className="ipt">
                <input type="text" className="1" maxLength={maxLength} onChange={e => this.handleInputValue(e, "A")}
                onKeyDown={maxLength ? this.handleDel : null}
                ref={ref => {
                  this.firstFoucs = ref;
                }}
                />
                <input type="text" className="2" maxLength={maxLength} onChange={e => this.handleInputValue(e, "B")}
                onKeyDown={maxLength ? this.handleDel : null}
                ref={ref => {
                  this.secondFoucs = ref;
                }}
                />
                <input type="text" className="3" maxLength={maxLength} onChange={e => this.handleInputValue(e, "C")}
                onKeyDown={maxLength ? this.handleDel : null}
                ref={ref => {
                  this.tridFoucs = ref;
                }}
                />
                <input type="text" className="4" maxLength={maxLength} onChange={e => this.handleInputValue(e, "D")}
                onKeyDown={maxLength ? this.handleDel : null}
                ref={ref => {
                  this.fourFoucs = ref;
                }}
                />
              </div>
              
              <p>{this.state.isShow ?  '验证码错误' : ''}</p>
              {this.state.getCodeChange ?
                <div ><span onClick={this.handleReget.bind(this)}>点击此处重新获取</span> </div> :
                <div>重新获取:{this.state.count}s</div>
            }
              <LiButton innertext="下一步" onClick={this.verification.bind(this)}></LiButton>
          </VerContainer>
        );
      }
      componentDidMount(){
        // console.log(this)
        this.firstFoucs.focus()
          let count = this.state.count
          const timer = setInterval(() => {
            this.setState({
                getCodeChange: false,
                count: (--count)
            }, () => {
                if (count === 0) {
                    clearInterval(timer);
                    this.setState({
                        getCodeChange: true,
                        count: 5
                    })
                }
            })
        }, 1000)
      }
      handleReget(){
        let count = this.state.count
        const timer = setInterval(() => {
            console.log(count)
          this.setState({
              getCodeChange: false,
              count: (count--)
          }, () => {
              if (count === -1) {
                  clearInterval(timer);
                  this.setState({
                      getCodeChange: true,
                      count: 5
                  })
              }
          })
      }, 1000)
      }
      handleIpt(e){
        if(e.target.value.length <= 11){
          this.setState({
            iptVal:e.target.value
          })
        }
      }
      verification(e){
        var iptValue = this.state.valueA +  this.state.valueB + this.state.valueC + this.state.valueD
        this.setState({
          iptVal:iptValue
        })
        console.log(iptValue)
          this.props.history.push('/setpwd')
        }
}