import React from 'react';
import { List, Radio,NavBar, Icon} from 'antd-mobile';
import SoundTipStyContainer from './soundtip';
const RadioItem = Radio.RadioItem;
export default (props)=>{
    return (
        <SoundTipStyContainer>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
    >通知栏提示音</NavBar>
               <List>
        {["静音","该起床了"].map(value => (
          <RadioItem key={value} checked={value === "该起床了"}>
            {value}
          </RadioItem>
        ))}
      </List>
        </SoundTipStyContainer>
    )
}