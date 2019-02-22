import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class Slider extends React.Component {
    constructor(props) {
      super(props);
        this.state = {
          value: 2,
        };
      }
onChange(e) {
  let value = e.target.value;
   console.log(this.state.value)
}

handleClick = () => {
  console.log('Age:', this.state.value);
} 
 render() {
        return (
          <form onClick={this.handleClick} className="form" style={{width: "100%"}}>
          <InputRange
            
            step={1}
            maxValue={30}
            minValue={14}
            value={this.state.value}
            onChange={value => this.setState({ value })} />
            
            </form>
        );
      }

}
export default Slider;