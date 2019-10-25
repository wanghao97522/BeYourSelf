import React,{Component} from 'react';
import SelectTimeUI from './SelectTimeUI';
class SelectTimeContainer extends Component{
    state={
      value:new Date("2015-03-19 06:06"),
      selectedweek:[]
    }
    render(){
        return (
          <SelectTimeUI selectedweek={this.state.selectedweek} value={this.state.value}>
            
          </SelectTimeUI>
        )
    }
}
export default SelectTimeContainer
