import React from 'react';

class Form extends Component {
	constructor(props){
		super(props);
		this.state = {perro:'form-control',input:'Submit',name:'',lname:'',email:'',users:[]};
	}
	onSubmit(e){
		e.preventDefault();
		if(this.submitInput.value == 'Submit'){
		const obj = {name:this.state.name,
					 lname:this.state.lname,
					 email:this.state.email};
	this.setState({users:[...this.state.users,obj],name:'',lname:'',email:''});
		}else 
			if(this.submitInput.value == 'Edit'){
				const pos = Number(this.rowRef.value);
				this.state.users[pos].name = this.inputName.value;
				this.state.users[pos].lname = this.inputLname.value;
				this.state.users[pos].email = this.inputEmail.value;
				this.submitInput.value = 'Submit';
				this.clearInputs();
				
				this.forceUpdate();
		}
	}
	
	clearInputs(){
		this.inputName.value = '';
		this.inputLname.value = '';
		this.inputEmail.value = '';
		this.state.name = '';
		this.state.lname = '';
		this.state.email = '';
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
	this.inputLname.value = this.state.users[row].lname;
	this.state.lname = this.state.users[row].lname;
	this.inputEmail.value = this.state.users[row].email;
	this.state.email = this.state.users[row].email;
	this.rowRef.value = row;
	this.state.input = 'Edit';
	this.forceUpdate();
	}
render(){

	return(
		<div className="container">
			<form className="form-horizontal" role="form" onSubmit={this.onSubmit.bind(this)}>
				<label>table Data</label>
				<div className="input-group">
					<span className="input-group-addon">F</span>
					<input required type="text" ref={(ref) => this.inputName = ref} onChange={event => this.setState({ name: event.target.value})}  value={this.state.name} className={this.state.perro} placeholder="first name" arial-describedby="basic-addon1"/>
				</div>
				<div className="input-group">
					<span className="input-group-addon">L</span>
					<input type="text" required ref={(ref) => this.inputLname = ref} onChange={event => this.setState({ lname: event.target.value})} value={this.state.lname} className="form-control"  placeholder="last name" arial-describedby="basic-addon1"/>
				</div>
				<div className="input-group">
					<span className="input-group-addon">@</span>
					<input type="email" required ref={(ref) => this.inputEmail = ref} onChange={event => this.setState({ email: event.target.value})} value={this.state.email} className="form-control" placeholder="Email" aria-describedby="basic-addon1" />
				</div>
				<div className="form-group"> 
					<div className="col-sm-offset-2 col-sm-10">
					  <input type="submit"  ref={(ref) => this.submitInput = ref} value={this.state.input} className="btn btn-default"/>
					</div>
				</div>
				
				<input type="hidden" className="row-ref" value="" ref={(ref) => this.rowRef = ref}/>
			</form>
			<div className="container" >	
				<table className="table table-hover">
					<thead>
						<tr>
							<th>Firstname</th>
							<th>Lastname</th>
							<th>Email</th>
							<th>Options</th>
						</tr>
					</thead>
					<tbody>
						
						{this.state.users.map((data,index) => {
							
return <Row editRow= {this.editRow.bind(this)} users = {this.state.users}  data = {data} key={index} row={index} deleteRow={this.deleteRow.bind(this)} />
						})}
								
					</tbody>
				</table>
			</div>
		</div>
	);	
}
}

export default Form;