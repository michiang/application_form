import React, { Component } from 'react';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
      email: '',
			confirm: '',
      zip: '',
      validate: false,
      zipValidate: false
      
		};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleConfirmEmailChange = this.handleConfirmEmailChange.bind(this);
    this.handleEmailBlur = this.handleEmailBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.confirmEmail = this.confirmEmail.bind(this);
    this.handleZipChange = this.handleZipChange.bind(this);
    this.handleZipBlur = this.handleZipBlur.bind(this);
    this.confirmZip = this.confirmZip.bind(this);
	}  

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handleConfirmEmailChange(event) {
    this.setState({confirm: event.target.value});
  }

  handleEmailBlur() {
    this.setState({validate: true});
  }

  handleSubmit(event) {
    console.log("Your job application has been submitted:");
    event.preventDefault();
  }

  confirmEmail() {
    if (this.state.validate && this.state.email !== this.state.confirm) {
      let email = document.getElementById("email");
      let confirmEmail = document.getElementById("confirm");
        function validateEmail() {
          if (email.value != confirmEmail.value) {
            confirmEmail.setCustomValidity("Emails Don't Match");
          } else {
            confirmEmail.setCustomValidity('');
          }
        } 
        email.onchange = validateEmail;
        confirmEmail.onkeyup = validateEmail;

      return (
          <label htmlFor="confirm" data-error="The emails do not match">Confirm Email</label>
        );
    } else if (this.state.validate && this.state.email === this.state.confirm) {
      return (
          <label htmlFor="confirm" data-success="Match">Confirm Email</label>
        )
    }
    return null;
  }

  handleZipChange(event) {
    this.setState({zip: event.target.value});
  }

  handleZipBlur() {
    this.setState({zipValidate: true});
  }

  confirmZip() {
    if (this.state.zipValidate && this.state.zip.length < 5) {
      let confirmZip = document.getElementById("zip");
        function validateZip() {
          if (zip.value.length < 5) {  
            confirmZip.setCustomValidity("Invalid Zip Code");      
          } else {
            confirmZip.setCustomValidity('');
          }
        }
        zip.onchange = validateZip;
        confirmZip.onkeyup = validateZip;

    return (
        <label htmlFor="zip" data-error="Invalid Zip Code">Zip Code</label>
      );
  } else if (this.state.zipValidate && this.state.zip.length >= 5) {
    return (
        <label htmlFor="zip" data-success="Valid Zip Code">Zip Code</label>
      )
  }
  return null;    
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
    
      <div className="input-field col s6" style={{display: 'inline'}}>
        <select required>
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
          <label htmlFor="last_name" data-success="Valid" className="active">Last Name</label>
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
          <input id="confirm" type="email" value={this.state.confirm} onChange={this.handleConfirmEmailChange} onBlur={this.handleEmailBlur} className="validate" required></input>
          {this.confirmEmail() ||
            <label htmlFor="confirm">Confirm Email</label>
          }
        </div>
      </div>
      <div className="row">
        <div className="input-field col s7">
          <i className="material-icons prefix">phone</i>
          <input id="icon_telephone" type="number" className="validate" required></input>
          <label htmlFor="icon_telephone" data-error="Invalid Phone Number" data-success="Valid Phone Number" className="active">Phone Number</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">person_pin</i>
          <input type="date" className="datepicker"></input>
        </div>
      
        <div className="input-field col s2">
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

      <div className="input-field col s9">

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
          <input id="zip" type="tel" value={this.state.zip} onChange={this.handleZipChange} onBlur={this.handleZipBlur} minLength="5" className="validate" required></input>
          {this.confirmZip() ||
            <label htmlFor="zip">Zip Code</label>
          }
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