import React,{ useState }from 'react';
import {withRouter} from 'react-router-dom';
import { DatePickerView} from 'antd-mobile';
import enUs from 'antd-mobile/lib/date-picker-view/locale/en_US';
import {SelectTimestyContainer,Title,TimeBox} from './selecttime';
export default withRouter(
    (props)=>{
        const now = new Date("2015-03-19 06:06");
        const [value,setvalue] = useState(null);
        const [selectedweek,setselectedweek]=useState([]);
        function handeltimechange(data){
            setvalue(data);
            let hour=data.getHours();
            let minute =data.getMinutes();
            console.log(hour,minute);
            let dataobj={
                hour,
                minute
            }
            sessionStorage.setItem("time",JSON.stringify(dataobj))
        }
        function handelWeekClick(value){
            setselectedweek(oldState =>{
                if(oldState.indexOf(value)===-1){
                    sessionStorage.setItem("week",JSON.stringify([
                        ...oldState,
                        value
                    ]));
                    return [
                        ...oldState,
                        value
                    ]
                }else{
                    oldState.splice(oldState.indexOf(value),1);
                    sessionStorage.setItem("week",JSON.stringify([
                        ...oldState
                    ]));
                    return [
                        ...oldState
                    ]
                }
            });
            
        }
        return (
            <SelectTimestyContainer>
                <Title>
                    <span>编辑提示音和习惯</span>
                    <span onClick={()=>{props.history.goBack()}}>完成</span>
                </Title> 
                <div className="timewrapper">
                    <TimeBox>
                        <DatePickerView
                        mode="time"
                        use12Hours={true}
                        locale={enUs}
                        value={value}
                        onChange={(value)=>{handeltimechange(value)}}
                        // onValueChange={(value)=>{handeltimechange(value)}}
                        />
                    </TimeBox>
                    <div className="weekwrapper">
                        <ul>
                            {["一","二","三","四","五","六","日"].map((value,key)=>
                                (
                                    <li key={key} onClick={()=>handelWeekClick(value)} className={selectedweek.indexOf(value)===-1?"":"active"}>{value}</li>
                                )
                            )}
                        </ul>
                    </div>
                </div>
                
            </SelectTimestyContainer>
        )
    }
)