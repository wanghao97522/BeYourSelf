import React from 'react';
import { List, Radio,NavBar, Icon} from 'antd-mobile';
import {SoundTipStyContainer,OutWrapper} from './soundtip';
const RadioItem = Radio.RadioItem;
export default (props)=>{
    return (
        <SoundTipStyContainer>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() =>{props.goBack()}}
    >通知栏提示音</NavBar>
                <OutWrapper>
                      <List>
                      {["静音","该起床了","简单哔一声"].map(value => (
                        <RadioItem key={value} checked={value === props.sound} onChange={()=>{props.onValue(value)}}>
                          {value}
                        </RadioItem>
                      ))}
                      </List>
                </OutWrapper>
        </SoundTipStyContainer>
    )
}