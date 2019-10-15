import React,{ useState }from 'react';
import {withRouter} from 'react-router-dom';
import { DatePickerView} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker-view/locale/en_US';
import {SelectTimestyContainer,Title,TimeBox} from './selecttime';
const now = new Date("2015-03-19 06:06");
export default withRouter(
    (props)=>{
        const [value] = useState(now);
        function gotoindex(){
            props.history.push('/index/home');
        }
        return (
            <SelectTimestyContainer>
                <Title>
                    <span>编辑提示音和习惯</span>
                    <span onClick={()=>{gotoindex()}}>完成</span>
                </Title>
                <div className="timewrapper">
                    <TimeBox>
                        <DatePickerView
                        mode="time"
                        use12Hours={true}
                        locale={enUs}
                        value={value}
                        // onChange={this.onChange}
                        // onValueChange={this.onValueChange}
                        />
                    </TimeBox>
                    <div className="weekwrapper">
                        <ul>
                            {["一","二","三","四","五","六","日"].map((value,key)=>{
                                return (
                                    <li key={key}>{value}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                
            </SelectTimestyContainer>
        )
    }
)