import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import '../Grid/Table.css';
import { Button } from 'semantic-ui-react';
import axios from 'axios';
//import Modal from './Modal';

const display = {
    display: 'block'
  };
  const hide = {
    display: 'none'
  };


class Table extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {toggle: false}
    }

    toggle(event) {
        this.setState(prevState => ({
          toggle: !prevState.toggle
        }));
      }
    
      state ={
        Name: '',
        department: '',
        amount: '',
        phoneNumber: '',
      }
     
     onChange = (e) => {
       this.setState({[e.target.name]: e.target.value});
     };
    
     onSubmit = (event) => {
       event.preventDefault();
       const { Name, Department , Amount, PhoneNumber } = this.state;
        alert(`SENT: \n 
                Name: ${this.state.Name} \n 
                Amount: ${this.state.amount} \n
                PhoneNumber: ${this.state.phoneNumber}`);
     };

     componentDidMount() {
         axios.get('', {responseType: 'json'}).then(response => {this.setState({Table: response.data});
        });
    }
        
    render () {

        var visibility = "hide";
     
        if (this.props.menuVisibility) {
          visibility = "show";
        }

        const columns = [
            {
                Header: "Name",
                accessor: "name",
            
            },

            {
                Header: "PhoneNumber",
                accessor: "phoneNumber"
            },

            {
                Header: "Amount",
                accessor: "amount"
            },

            {
                Header: "Department",
                accessor: "department"
            },
            {
                Header: "Status",
                accessor: "status",
            
            },
           
        ]

        var modal = [];
    modal.push(
      <div className="modal" style={this.state.toggle ? display : hide}>
      <div className="modal-content">
                    <form class="ui small form segment" onSubmit={fields => this.onSubmit(fields)}>
                    <label>Full Names:</label>

                        <input name="Name" 
                            placeholder="Name" 
                            value={this.state.Name} 
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
                           
                        
                        <br />
                        <button class="ui inverted blue button" onClick={ (e) => this.onSubmit(e)}>Submit</button>
                        
                    </form>

                </div>

                    <div className="modal-footer">
                        <button class="ui button" onClick={this.toggle}>
                            close
                        </button>   
                    </div>
    </div>
    );

        return (
            <div className="container">
                
                <ReactTable columns={columns} defaultPageSize={5}>
                </ReactTable>

                <button class="ui active button" onClick={this.toggle}>
                        <i class="user icon"></i>
                        Add User
                    </button> {modal}

                
           </div> 
                       
            );
    }
   
}
const container = document.createElement("div");
document.body.appendChild(container);
export default Table;
