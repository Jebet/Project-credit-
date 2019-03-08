import React from "react";
import { Alert, Button } from "react-bootstrap";
import $ from "jquery";
import "../Grid/Table.css";

console.clear();

class FormTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      perro: "form-control",
      input: "Submit",
      name: "",
      telephone: "",
      amount: "",
      department: "",
      users: [],
      show: false
    };
  }
  onSubmit(e) {
    e.preventDefault();
    if (this.submitInput.value == "Submit") {
      const obj = {
        name: this.state.name,
        telephone: this.state.telephone,
        amount: this.state.amount,
        department: this.state.department
      };
      this.setState({
        users: [...this.state.users, obj],
        name: "",
        telephone: "",
        amount: "",
        department: "",
        email: ""
      });
    } else if (this.submitInput.value == "Edit") {
      const pos = Number(this.rowRef.value);
      this.state.users[pos].name = this.inputName.value;
      this.state.users[pos].telephone = this.inputtelephone.value;
      this.state.users[pos].amount = this.inputamount.value;
      this.state.users[pos].department = this.inputdepartment.value;
      this.submitInput.value = "Submit";
      this.clearInputs();

      this.forceUpdate();
    }
  }

  clearInputs() {
    this.inputName.value = "";
    this.inputTelephone.value = "";
    this.inputAmount.value = "";
    this.inputDepartment.value = "";
    this.state.name = "";
    this.state.telephone = "";
    this.state.amount = "";
    this.state.department = "";
  }
  deleteRow(row) {
    var pos = this.state.users.indexOf(row);
    this.setState({ users: this.state.users.slice(0, pos) });
    this.clearInputs();
  }
  editRow(row) {
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
    this.state.input = "Edit";
    this.forceUpdate();
  }

  render() {
    const handleHide = () => this.setState({ show: false });
    const handleShow = () => this.setState({ show: true });
    return (
      <div className="wrapper">
        <>
          <Alert show={this.state.show} variant="info">
            <Alert.Heading>Shujaaz Form</Alert.Heading>
            <p>
              <form
                className="form-horizontal"
                role="form"
                onSubmit={this.onSubmit.bind(this)}
              >
                <div className="input-group">
                  <div class="col-md-6">
                    <label className="name">
                      <i class="glyphicon glyphicon-user" />
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      ref={ref => (this.inputName = ref)}
                      onChange={event =>
                        this.setState({ name: event.target.value })
                      }
                      value={this.state.name}
                      className={this.state.perro}
                      placeholder="Full Name"
                      arial-describedby="basic-addon1"
                      id="input1"
                    />
                    <i class="fa fa-upload fa-2x" />
                  </div>
                </div>

                <div className="input-group">
                  <div class="col-md-6">
                    <label className="phone">Telephone</label>
                    <input
                      type="numeric"
                      required
                      ref={ref => (this.inputTelephone = ref)}
                      onChange={event =>
                        this.setState({ telephone: event.target.value })
                      }
                      value={this.state.telephone}
                      className="form-control"
                      placeholder="Phone Number"
                      arial-describedby="basic-addon1"
                      id="input2"
                    />

                    <i class="fa fa-upload fa-2x" />
                  </div>
                </div>

                <div className="input-group">
                  <div class="col-md-6">
                    <label className="department" style={{ color: "black" }}>
                      Department
                    </label>
                    <select
                      class="custom-select"
                      input
                      type="text"
                      required
                      ref={ref => (this.inputDepartment = ref)}
                      onChange={event =>
                        this.setState({ department: event.target.value })
                      }
                      value={this.state.department}
                      className="form-control"
                      placeholder="departments"
                      aria-describedby="basic-addon1"
                      id="input3"
                    >
                      <option value="">Department</option>
                      <option value="K 'n' L"> K 'n' L</option>
                      <option value="Distribution">Distribution</option>
                      <option value="Social Media">Social Media</option>
                      <option value="Finance">Finance</option>
                      <option value="Networks">Networks</option>
                    </select>
                    <i class="fa fa-upload fa-2x" />
                  </div>
                </div>

                <div className="input-group">
                  <div class="col-md-6">
                    <label className="amount">Amount</label>
                    <input
                      type="numeric"
                      required
                      ref={ref => (this.inputAmount = ref)}
                      onChange={event =>
                        this.setState({ amount: event.target.value })
                      }
                      value={this.state.amount}
                      className="form-control"
                      placeholder="Enter Amount"
                      id="input4"
                      style={{}}
                    />
                    <i class="fa fa-upload fa-2x" />
                  </div>
                </div>

                <div className="form-group">
                  <div class="col-md-6">
                    <input
                      type="submit"
                      ref={ref => (this.submitInput = ref)}
                      value={this.state.input}
                      className="btn btn-default"
                      id="submit"
                    />
                  </div>
                </div>

                <input
                  type="hidden"
                  className="row-ref"
                  value=""
                  ref={ref => (this.rowRef = ref)}
                />
              </form>
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={handleHide} variant="info">
                Close
              </Button>
            </div>
          </Alert>
        </>

        <div className="container">
          <div>
            <input
              onChange={this.props.search}
              id="searchBar"
              placeholder="Search..."
            />
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Telephone</th>
                <th>Amount</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((data, index) => {
                return (
                  <Row
                    editRow={this.editRow.bind(this)}
                    users={this.state.users}
                    data={data}
                    key={index}
                    row={index}
                    deleteRow={this.deleteRow.bind(this)}
                  />
                );
              })}
            </tbody>
          </table>

          {!this.state.show && (
            <Button onClick={handleShow}>
              <i class="fa fa-user-plus" />
              User
            </Button>
          )}
        </div>
      </div>
    );
  }
}
class Row extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.telephone}</td>
        <td>{this.props.data.amount}</td>
        <td>{this.props.data.department}</td>

        <td
          className="fa fa-trash-o"
          onClick={() => {
            this.props.deleteRow(this.props.row);
          }}
        />
        <td
          className="fa fa-pencil-square"
          onClick={() => {
            this.props.editRow(this.props.row);
          }}
        />
      </tr>
    );
  }
}
export default FormTable;
