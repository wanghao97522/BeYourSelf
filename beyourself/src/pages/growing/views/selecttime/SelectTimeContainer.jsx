import React,{Component} from 'react';
import SelectTimeUI from './SelectTimeUI';
class SelectTimeContainer extends Component{
    render(){
        return (
          <SelectTimeUI>
            
          </SelectTimeUI>
        )
    }
}
export default SelectTimeContainer
// import { DatePickerView,Text } from 'antd-mobile';
// import enUs from 'antd-mobile/lib/date-picker-view/locale/en_US';

// class DatePickerViewExample extends React.Component {
//   state = {
//     value: null,
//   };
//   onChange = (value) => {
//     console.log(value);
//     this.setState({ value });
//   };
//   onValueChange = (...args) => {
//     console.log(args);
//   };
//   render() {
//     return (<div>
//       {/* <div className="sub-title">Start datetime</div> */}
//       {/* <DatePickerView
//         value={this.state.value}
//         onChange={this.onChange}
//         onValueChange={this.onValueChange}
//       /> */}
//       {/* <div className="sub-title">End datetime</div> */}
//       <DatePickerView
//         mode="time"
//         use12Hours={true}
//         locale={enUs}
//         value={this.state.value}
//         onChange={this.onChange}
//         onValueChange={this.onValueChange}
//         format="dddd"
//       />
//     </div>);
//   }

// getShowDate=(value)=>{
//   let dateValue = moment(value).format("YYYY-MM");
//   let tem = (
//       <Text style={{fontSize:18}}>{dateValue}</Text>
//   )
//   return tem;
//   }
// }
// export default DatePickerViewExample