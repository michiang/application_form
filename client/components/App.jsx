import React, { Component } from 'react';

export default class App extends Component {
	constructor() {
		super();

		this.state = {
			firstName: ""
		};

		this.firstNameValidate = this.firstNameValidate.bind(this);
		this.lastNameValidate = this.lastNameValidate.bind(this);

	}
	componentDidMount() {
		console.log("mounted");
	}

	firstNameValidate() {

	}

	lastNameValidate() {

	}



  render() {
    return (
    <div>
     <div className="card-panel teal simple-forms ">Powered by SimpleForms</div>
     <div style={{textAlign: 'center'}}>
        <h1>Apply for Jersey Mike's</h1>
        <p> Fill out the following form to apply for an open position at Jersey Mikes</p>
     </div>
    <div className="row">
    <form className="col s12">
        <p> 1. Selection Location/Position </p>
        <hr/>
    <div className="input-field col s6">
	  <a className="dropdown-button btn purple simple-forms " href='#' data-activates='location'>Select Location</a>

  		<ul id='location' className='dropdown-content'>
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
          <input id="first_name" type="text" className="validate[required]"></input>
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate[required]"></input>
          <label htmlFor="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate[required]"></input>
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="confirm" placeholder="Confirm Email" type="email" className="validate[required]"></input>
          <label htmlFor="confirm">Email</label>
        </div>
      </div>
      <div className="row">
      	<div className="input-field col s7">
          <input id="icon_telephone" type="tel" className="validate[required]"></input>
          <label htmlFor="icon_telephone">Phone Number</label>
        </div>
      	<div className="input-field col s6">
          <input id="birthdate" type="tel" className="validate[required]"></input>
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
          <input id="address" type="text" className="validate[required]"></input>
          <label htmlFor="address">Address</label>
        </div>
        <div className="input-field col s10">
          <input id="address2" type="text" className="validate[required]"></input>
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
         <input id="city" type="text" className="validate[required]"></input>
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
         <input id="zip" type="text" className="validate[required]"></input>
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