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
     <div className="card-panel teal simple-forms ">Powered by SimpleForms</div>
     <div style={{textAlign: 'center'}}>
        <h1>Apply for SimpleForms</h1>
        <p> Fill out the following form to apply for an open position at SimpleForms</p>
     </div>
    <div className="row">
    <form className="col s12" onSubmit={this.handleSubmit}>
        <p> 1. Selection Location/Position </p>
        <hr/>
    <div className="input-field col s6">
	  <a id='location'className="dropdown-button btn purple simple-forms " href='#' data-activates='location'>Select Location</a>

  		<ul id='location'className='dropdown-content'>
    		<li><a href="#!">Location 1</a></li>
    		<li><a href="#!">Location 2</a></li>
    		<li><a href="#!">Location 3</a></li>
    		<li><a href="#!">Location 4</a></li>
    		<li><a href="#!">Location 5</a></li>
  		</ul>
  	</div>

  	<div className="input-field col s6">
  	 <a className='dropdown-button btn purple simple-forms' href='#' data-activates='position'>Select Position</a>

  		<ul id='position' className='dropdown-content'>
    		<li><a href="#!">Position 1</a></li>
    		<li><a href="#!">Position 2</a></li>
    		<li><a href="#!">Position 3</a></li>
    		<li><a href="#!">Position 4</a></li>
    		<li><a href="#!">Position 5</a></li>
  		</ul>

  	</div>
  	<br/> <br/> <br/> 
  	    <p> 2. Personal Info </p> <hr /> <br />
      <div className="row">
        <div className="input-field col s6">
          <input id="first_name" type="text" className="validate" required="" aria-required="true"></input>
          <label htmlFor="first_name" data-success="Valid" className="active">First Name</label>
        </div>

        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" required="" aria-required="true"></input>
          <label htmlFor="last_name" data-sucess="Valid" className="active">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" value={this.state.email} onChange={this.handleEmailChange} className="validate"></input>
          <label htmlFor="email" data-error="Invalid Email" data-success="Valid Email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="confirm" placeholder="Confirm Email" type="email" value={this.state.confirm} onChange={this.handleConfirmEmailChange} className="validate
          "></input>
          <label htmlFor="confirm">Email</label>
        </div>
      </div>
      <div className="row">
      	<div className="input-field col s7">
          <input id="icon_telephone" type="tel" className="validate"></input>
          <label htmlFor="icon_telephone" data-error="Invalid Phone Number" data-success="Valid Phone Number" className="active">Phone Number</label>
        </div>
      	<div className="input-field col s6">
          <input id="birthdate" type="tel" className="validate"></input>
          <label htmlFor="birthdate">Birth Date</label>
        </div>
      <div className="row">
      	<div className="input-field col s6">
  	 		<a className='dropdown-button btn purple simple-forms' href='#' data-activates='gender'>Gender</a>

  		<ul id='gender' className='dropdown-content'>
    		<li><a href="#!">Male</a></li>
    		<li><a href="#!">Female</a></li>
    		<li><a href="#!">Prefer not to answer</a></li>
  		</ul>
  		</div>
  	<div>
  	 <div className="row">
  	 	<div className="input-field col s12">
  	 		<p> 3. Address Info </p> <hr/>
  	 	</div>
  	 </div>
  	 	<div className="input-field col s10">
          <input id="address" type="text" className="validate"></input>
          <label htmlFor="address">Address</label>
        </div>
        <div className="input-field col s10">
          <input id="address2" type="text" className="validate"></input>
          <label htmlFor="address2">Address 2</label>
        </div>
     </div>

     <div className="input-field col s12">
  	 <a className='dropdown-button btn purple simple-forms' href='#' data-activates='country'>Country</a>

  		<ul id='country' className='dropdown-content'>
    		<li><a href="#!">Position 1</a></li>
    		<li><a href="#!">Position 2</a></li>
    		<li><a href="#!">Position 3</a></li>
    		<li><a href="#!">Position 4</a></li>
    		<li><a href="#!">Position 5</a></li>
  		</ul>

  	</div> 
  	<div className="input-field col s4">
         <input id="city" type="text" className="validate"></input>
         <label htmlFor="city">City</label>
     </div>
    <div className="input-field col s2">
  	 <a className='dropdown-button btn purple simple-forms' href='#' data-activates='state'>State</a>

  		<ul id='state' className='dropdown-content'>
    		<li><a href="#!">Position 1</a></li>
    		<li><a href="#!">Position 2</a></li>
    		<li><a href="#!">Position 3</a></li>
    		<li><a href="#!">Position 4</a></li>
    		<li><a href="#!">Position 5</a></li>
  		</ul>

  	</div> 
  	<div className="input-field col s4">
         <input id="zip" type="text" className="validate"></input>
         <label htmlFor="zip">City</label>
     </div>
  	<div className="input-field col s12" style={{textAlign: 'center'}}>
        <button className="btn waves-effect waves-light purple simple-forms" type="submit" name="action">Submit</button>
     </div>



  	</div>

     </div>
    </form>
  </div>
     </div>
    );
  }
}