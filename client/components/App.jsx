import React, { Component } from 'react';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
      email: '',
			confirm: '',
      confirmError:'',
      formErrors: {email: '', confirm: ''},
      emailValid: false,
      formValid: false
		};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleConfirmEmailChange = this.handleConfirmEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

	}  

	componentDidMount() {
	 
	}


  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleConfirmEmailChange(event) {
    this.setState({confirm: event.target.value});
  }

  handleSubmit(event) {
    const context = this;
    if (this.state.email !== this.state.confirm) {
      context.setState({

      })
    }
    console.log("Your job application has been submitted:");
    event.preventDefault();
  }

    render() {
    return (
      <div>
        <div className="card-panel purple simple-forms " style={{color: 'white'}}>Powered by SimpleForms</div>
          <div style={{textAlign: 'center'}}>
            <h1>Apply for SimpleForms</h1>
            <p> Fill out the following form to apply for an open position at SimpleForms</p>
          </div>

      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <p> 1. Selection Location/Position </p>
          <hr/>
    
      <div className="input-field col s6">
        <select>
          <option value="" disabled selected>Select Location</option>
          <option value="1">San Diego</option>
          <option value="2">Los Angeles</option>
          <option value="3">San Francisco</option>
        </select>
      </div>

      <div className="input-field col s6">
        <select>
          <option value="" disabled selected>Select Position</option>
          <option value="1">Software Engineer</option>
          <option value="2">Accountant</option>
          <option value="3">Product Manager</option>
        </select>
      </div>

      <br/> <br/> <br/> <br />
      <p> 2. Personal Info </p> <hr /> <br />
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="first_name" type="text" className="validate" required></input>
          <label htmlFor="first_name" data-success="Valid" className="active">First Name</label>
        </div>

        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" required></input>
          <label htmlFor="last_name" data-sucess="Valid" className="active">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix ">email</i>
          <input id="email" type="email" value={this.state.email} onChange={this.handleEmailChange} className="validate" required></input>
          <label htmlFor="email" data-error="Invalid Email" data-success="Valid Email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <i className="material-icons prefix">verified_user</i>
          <input id="confirm" placeholder="Confirm Email" type="email" value={this.state.confirm} onChange={this.handleConfirmEmailChange} className="validate" required></input>
          <label htmlFor="confirm" data-error="Emails do not match" data-success="Valid Email"></label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s7">
          <i className="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" className="validate" required></input>
          <label htmlFor="icon_telephone" data-error="Invalid Phone Number" data-success="Valid Phone Number" className="active">Phone Number</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">person_pin</i>
          <input type="date" className="datepicker"></input>
        </div>
      </div>
      
      <div className="row">
        <div className="input-field col s6">
          <select>
            <option value="" disabled selected>Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Prefer not to answer</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <p> 3. Address Info </p> <hr/>
        </div>
      </div>
        <div className="input-field col s10">
          <input id="address" type="text" className="validate" required></input>
          <label htmlFor="address">Address</label>
        </div>
        <div className="input-field col s10">
          <input id="address2" type="text" className="validate"></input>
          <label htmlFor="address2">Address 2</label>
        </div>

      <div className="input-field col s12">

        <select>
          <option value="" disabled selected>Country</option>
          <option value="1">United States of America</option>
          <option value="2">Canada</option>
          <option value="3">United Kingdom</option>
        </select>

      </div> 
        <div className="input-field col s4">
          <input id="city" type="text" className="validate"></input>
          <label htmlFor="city">City</label>
        </div>
      <div className="input-field col s2">
        <select> 
          <option value="" disabled selected>State</option>
          <option value="1">California</option>
          <option value="2">Colorado</option>
          <option value="3">Washington</option>
        </select>

      </div> 
        <div className="input-field col s4">
          <input id="zip" type="text" className="validate" required></input>
          <label htmlFor="zip">Zip Code</label>
        </div>
        <div className="input-field col s12" style={{textAlign: 'center'}}>
          <button className="btn waves-effect waves-light teal simple-forms" type="submit" name="action">Submit</button>
        </div>
      </form>
    </div>
  </div>
  );
 }
}