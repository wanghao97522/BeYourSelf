import React, { Component } from "react";
import styles from "./index.module.scss";
import { Form,Input, Button } from "antd";
class NormalLRegisterForm extends Component {
 constructor(props) {
    super(props);
    this.state = {
      maxLength: 1, //验证码长度
      valueA: "", //验证码第一位
      valueB: "", //二
      valueC: "", //三
      valueD: "", //四
    };
  }
  //验证码光标后移
  handleInputValue = (e, type) => {
    const { isShow } = this.state;
    const { value = "" } = e.target;
    if (type == "A") {
      if (value) this.secondFoucs.input.focus();
      this.setState({
        valueA: value.slice(0, 1)
      });
    } else if (type == "B") {
      if (value) this.tridFoucs.input.focus();
      this.setState({
        valueB: value.slice(0, 1)
      });
    } else if (type == "C") {
      if (value) this.fourFoucs.input.focus();
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
  //删除验证码
  handleDel = e => {
    const BACK_SPACE = 8;
    const isBackSpaceKey = e.keyCode === BACK_SPACE;
    if (isBackSpaceKey && e.target.value.length === 0) {
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
  reder(){
   const { valueA, valueB, valueC, valueD, maxLength } = this.state;
   return(
	  <Form onSubmit={this.handleSubmit} className={styles.registerForm}>
   		  <p>请输入验证码</p>
          <FormItem>
                <Input
                  className={styles.checkInput}
                  ref={ref => {
                    this.firstFoucs = ref;
                  }}
                  value={valueA}
                  maxLength={maxLength}
                  onKeyDown={maxLength ? this.handleDel : null}
                  onChange={e => this.handleInputValue(e, "A")}
                />
                <Input
                  className={styles.checkInput}
                  ref={ref => {
                    this.secondFoucs = ref;
                  }}
                  value={valueB}
                  maxLength={maxLength}
                  onKeyDown={maxLength ? this.handleDel : null}
                  onChange={e => this.handleInputValue(e, "B")}
                />
                <Input
                  foucs
                  className={styles.checkInput}
                  ref={ref => {
                    this.tridFoucs = ref;
                  }}
                  value={valueC}
                  maxLength={maxLength}
                  onKeyDown={maxLength ? this.handleDel : null}
                  onChange={e => this.handleInputValue(e, "C")}
                />
                <Input
                  className={styles.checkInput}
                  ref={ref => {
                    this.fourFoucs = ref;
                  }}
                  value={valueD}
                  maxLength={maxLength}
                  onKeyDown={maxLength ? this.handleDel : null}
                  onChange={e => this.handleInputValue(e, "D")}
                />
          </FormItem>
      </Form>
	)
   }
  
}