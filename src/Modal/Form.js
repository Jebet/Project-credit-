import React from 'react';
//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
//import SideBar from './SideBar';
//import './Form.css';

class Form extends React.Component {
  state ={
    firstName: '',
    lastName: '',
    department: '',
    amount: '',
    phoneNumber: '',
  }
 
 onChange = (e) => {
   this.setState({[e.target.name]: e.target.value});
 };

 onSubmit = (event) => {
   event.preventDefault();
   const { FirstName, LastName, Department ,Amount, PhoneNumber } = this.state;
    alert(`You made a transaction to: \n 
            FirstName: ${this.state.firstName} \n 
            LastName: ${this.state.lastName} \n 
            Amount: ${this.state.amount} \n
            PhoneNumber: ${this.state.phoneNumber}`);
 }
    render () {
      var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
      return (
      <div className="ui-Container" onSubmit={fields => this.onSubmit(fields)}>
        <div class="ui segment">
          <form class="ui small form segment">
          <label>First Name:</label>

            <input name="firstName" 
                   placeholder="FirstName" 
                   value={this.state.firstName} 
                   onChange={e => this.onChange(e)} />
            <div style={{fontSize: 8, color: "red"}}>{this.state.nameError}</div>

          <label>Last Name:</label>
            <input name="lastName" placeholder="LastName" 
                   value={this.state.lastName} 
                   onChange={e => this.onChange(e)} />
                   <div style={{fontSize: 8, color: "red"}}>{this.state.nameError}</div>

          <label>Department:</label>
            <select name="department" placeholder="Choose your Department" 
                   value={this.state.department} 
                   onChange={e => this.onChange(e)} >
                
                <option value="">Department</option>
                <option value="4">Knowledge & Learning</option>
                <option value="3">Distribution</option>
                <option value="2">Programmes</option>
                <option value="1">Finance</option>
                <option value="0">Digital</option>
              </select>

          <label>Enter Amount:</label>
            <input name="amount" type="number" placeholder="Enter amount to send" 
                   value={this.state.amount} 
                   onChange={e => this.onChange(e)} />

          <label>Phone Number:</label>
            <input name="phoneNumber" type="number" placeholder="Enter Phone number" 
                   value={this.state.phoneNumber} 
                   onChange={e => this.onChange(e)} />
                   <div style={{fontSize: 8, color: "red"}}>{this.state.numberError}</div>
            
            <br />
            <button class="ui inverted blue button" onClick={ (e) => this.onSubmit(e)}>Submit</button>
            
          </form>
        </div>
      </div>
      );
    }
  }
  export default Form;