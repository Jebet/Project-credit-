import React from 'react';
import {Alert,Button} from 'react-bootstrap';
import '../Grid/Table.css';
console.clear();

class FormTable extends React.Component {
	constructor(props){
		super(props);
		this.state = {perro:'form-control',input:'Submit',name:'',telephone:'',amount:'', department: '',users:[],  show: false };
	}
	onSubmit(e){
		e.preventDefault();
		if(this.submitInput.value == 'Submit'){
		const obj = {name:this.state.name,
                     telephone:this.state.telephone,
                     amount: this.state.amount,
                     department: this.state.department,
					 };
	this.setState({users:[...this.state.users,obj],name:'',telephone:'',amount: '',department: '',email:''});
		}else 
			if(this.submitInput.value == 'Edit'){
				const pos = Number(this.rowRef.value);
				this.state.users[pos].name = this.inputName.value;
                this.state.users[pos].telephone = this.inputtelephone.value;
                this.state.users[pos].amount = this.inputamount.value;
                this.state.users[pos].department = this.inputdepartment.value;
				this.submitInput.value = 'Submit';
				this.clearInputs();
				
				this.forceUpdate();
		}
	}
	
	clearInputs(){
		this.inputName.value = '';
		this.inputTelephone.value = '';
        this.inputAmount.value = '';
        this.inputDepartment.value = '';
		this.state.name = '';
		this.state.telephone = '';
        this.state.amount = '';
        this.state.department = '';
	}
	deleteRow(row){
		var pos = this.state.users.indexOf(row);
		this.setState({users:this.state.users.slice(0,pos)});
		this.clearInputs();
		
	}	
editRow(row){
	var pos = this.state.users.indexOf(row);
	this.inputName.value = this.state.users[row].name;
	this.state.name = this.state.users[row].name;
	this.inputTelephone.value = this.state.users[row].telephone;
	this.state.telephone = this.state.users[row].telephone;
	this.inputDepartment.value = this.state.users[row].Department;
    this.state.department = this.state.users[row].department;
    this.inputAmount.value = this.state.users[row].amount;
    this.state.amount = this.state.users[row].amount;
    this.inputDepartment.value = this.state.users[row].department;
	this.state.department = this.state.users[row].department;
	this.rowRef.value = row;
	this.state.input = 'Edit';
	this.forceUpdate();
	}
render(){
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
   
	return(
		<div className="ui grid" style={{width: "800px"}}>
      
        <>
        <Alert show={this.state.show} variant="primary" style={{width: '100%', left: "250px"}}>
          <Alert.Heading>Required Form</Alert.Heading>
          <p>
            Kindly fill in the details
          </p>
          <hr />
          <form className="form-horizontal" role="form" onSubmit={this.onSubmit.bind(this)}>
				<label style={{left: '150px'}}>AIRTIME PLATFORM</label>

				<div className="input-group">
					<label className="name"><i class="glyphicon glyphicon-user"></i>Full Name</label>
					<input required type="text" ref={(ref) => this.inputName = ref} onChange={event => this.setState({ name: event.target.value})}  value={this.state.name} className={this.state.perro} placeholder="Full Name" arial-describedby="basic-addon1" id="input1"/>
				</div>

				<div className="input-group">
					<label className="phone">Telphone</label>
					<input type="numeric" required ref={(ref) => this.inputTelephone = ref} onChange={event => this.setState({ telephone: event.target.value})} value={this.state.telephone} className="form-control"  placeholder="Phone Number" arial-describedby="basic-addon1" id="input2"/>
				</div>

				<div className="input-group">
                <label className="department"  style={{color: "black"}}>Department</label>
                <select class="custom-select" input type="text" required ref={(ref) => this.inputDepartment = ref} onChange={event => this.setState({ department: event.target.value})} value={this.state.department} className="form-control" placeholder="Email" aria-describedby="basic-addon1" id="input3">
                    <option value="">Department</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
				</select>
                </div>

                <div className="input-group">
					<label className="amount">Amount</label>
					<input type="numeric" required ref={(ref) => this.inputAmount = ref} onChange={event => this.setState({ amount: event.target.value})} value={this.state.amount} className="form-control"  placeholder="Enter Amount" arial-describedby="basic-addon1" id="input4"/>
				</div>

				<div className="form-group"> 
					<div className="col-sm-offset-2 col-sm-2">
					  <input type="submit"  ref={(ref) => this.submitInput = ref} value={this.state.input} className="btn btn-default"/>
					</div>
				</div>
				
				
				<input type="hidden" className="row-ref" value="" ref={(ref) => this.rowRef = ref}/>
			</form>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={handleHide} variant="outline-success">
              Close
            </Button>
          </div>
        </Alert>

       
        
      </>
    
            
            <div className="ui segment" style={{left: "250px", width: "100%"}}>
            <div className="container" >	
				<table className="table table-hover">
					<thead>
						<tr>
							<th>Firstname</th>
							<th>Telephone</th>
							<th>Amount</th>
							<th>Department</th>
						</tr>
					</thead>
					<tbody>
						
						{this.state.users.map((data,index) => {
							
                    return (
                        <Row editRow= {this.editRow.bind(this)} 
                    users = {this.state.users}  data = {data} 
                    key={index} row={index} deleteRow={this.deleteRow.bind(this)} />
                    );
                    
						})}
								
					</tbody>
				</table>
                
			</div>
            {!this.state.show && <Button onClick={handleShow}>Add User</Button>}
            </div>
		</div>
	);	
}
}
class Row extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return (
            
			<tr>
				<td>{this.props.data.name}</td>
				
				<td>{this.props.data.telephone}</td>
				
				<td>{this.props.data.department}</td>
                <td>{this.props.data.amount}</td>

				
				<td className="glyphicon glyphicon-trash" onClick={() => {this.props.deleteRow(this.props.row)}}></td>
				<td className="glyphicon glyphicon-edit" onClick={() => {this.props.editRow(this.props.row)}} ></td>
			</tr>
            
        
		);
	}
}

export default FormTable;