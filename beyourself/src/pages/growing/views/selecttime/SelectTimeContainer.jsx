import React,{Component} from 'react';
import SelectTimeUI from './SelectTimeUI';
class SelectTimeContainer extends Component{
    state={
      selectedweek:[]
    }
    render(){
        return (
          <SelectTimeUI selectedweek={this.state.selectedweek}>
            
          </SelectTimeUI>
        )
    }
}
export default SelectTimeContainer
