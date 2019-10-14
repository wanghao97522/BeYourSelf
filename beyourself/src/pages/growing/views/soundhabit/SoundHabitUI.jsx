import React,{useState} from 'react';
import { DatePickerView } from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker-view/locale/en_US';
import {SoundHabitstyContainer,Title,TimeBox,WeekBox} from './soundhabit';
const now =new Date('2019/10/11 06:06');
export default (props)=>{
    const [value,setValue]=useState(now);
    console.log(value);
    return (
        <SoundHabitstyContainer>
          <Title>
              <span>编辑提示音和习惯</span>
              <span>完成</span>
          </Title>
          <div className="bottom">
              <TimeBox>
                <DatePickerView
                    locale={enUs}
                    value={value}
                    mode='time'
                    use12Hours={true}
                />
              </TimeBox>
              <WeekBox>
                  <ul>
                      {["一","二","三","四","五","六","日"].map((value)=>
                           (
                              <li key={value} className={value==="一"?'active':''}>{value}</li>
                          )
                      )}
                  </ul>
              </WeekBox>
          </div>
        </SoundHabitstyContainer>
    )
}