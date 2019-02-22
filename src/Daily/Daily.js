import React from 'react';
import { createStore,  applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import {Field, Control, Form, combineForms} from 'react-redux-form';
import store from '../store/store';
import '../Daily/Daily.css';




const initialUserState = {
  firstName: '',
  lastName: '',
};


class Daily extends React.Component {
  render() {
    return (
    <div className="ui grid">
   <div className="ui segment">
      <Form model="user" onSubmit={v => console.log(v)}>
        <div className="field">
          <label>First name:</label>
          <Control.text model=".firstName" placeholder="First Name" />
        </div>
        
        <div className="field">
          <label>Phone Number</label>
          <Control model=".phone" type="numerical" placeholder="Phone Number" />
        </div>
        
        <div className="field">
          <label>Sex</label>
          <label><Control.radio model=".sex" value="male" /> Male</label>
          <label><Control.radio model=".sex" value="female" /> Female</label>
        </div>
        
        <div className="field">
          <label>Which county are you from?</label>
          <Control.select model=".favoriteColor">
            <option value=""></option>
            <option value="ff0000">county #1</option>
            <option value="00ff00">county #2</option>
            <option value="0000ff">county #3</option>
          </Control.select>
        </div>

        <div className="field">
          <label>Do you nkow Dj B?</label>
          <label><Control.checkbox model=".employed" /> Yep, I am a fan</label>
        </div>
        
        
        <div className="field">
          <label>Write your Message</label>
          <Control.textarea model=".notes" />
        </div>

        <button type="submit" onClick={e => window.confirm("your message has been submitted")}>
          Submit
        </button>
        <Control.reset model="user" className="secondary">
          Clear Values
        </Control.reset>
      </Form>
      </div>
      </div>
    
    );
  }
}



export default Daily;