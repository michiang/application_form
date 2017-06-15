import React, { Component } from 'react';

export default class App extends Component {
	constructor() {
		super();

		this.state = {};

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
     <div style={{textAlign: 'center'}}>
        <h1>Apply for Jersey Mike's</h1>
        <p> Fill out the following form to apply for an open position at Jersey Mikes</p>
     </div>
    <div className="row">
    <form className="col s12">
        <p> 1. Selection Location/Position </p>
        <hr/>
    <div className="input-field col s6">
	  <a className='dropdown-button btn' href='#' data-activates='location'>Select Location</a>

  		<ul id='location' className='dropdown-content'>
    		<li><a href="#!">Location 1</a></li>
    		<li><a href="#!">Location 2</a></li>
    		<li><a href="#!">Location 3</a></li>
    		<li><a href="#!">Location 4</a></li>
    		<li><a href="#!">Location 5</a></li>
  		</ul>
  	</div>

  	<div className="input-field col s6">
  	 <a className='dropdown-button btn' href='#' data-activates='position'>Select Position</a>

  		<ul id='position' className='dropdown-content'>
    		<li><a href="#!">Position 1</a></li>
    		<li><a href="#!">Position 2</a></li>
    		<li><a href="#!">Position 3</a></li>
    		<li><a href="#!">Position 4</a></li>
    		<li><a href="#!">Position 5</a></li>
  		</ul>

  	</div>
  	<br/> <br/> <br/> 
  	    <p> 1. Personal Info </p> <hr /> <br />

      <div className="row">
        <div className="input-field col s6">
          <input id="first_name" type="text" className="validate"></input>
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"></input>
          <label htmlFor="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"></input>
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="confirm" placeholder="Confirm Email" type="email" className="validate"></input>
          <label htmlFor="confirm">Email</label>
        </div>
      </div>
      <div className="input-field col s6">
          <input id="icon_telephone" type="tel" className="validate"></input>
          <label htmlFor="icon_telephone">Phone Number</label>
        </div>
      <div className="input-field col s6" style={{display:'inline'}}>
          <input id="icon_telephone" type="tel" className="validate"></input>
          <label htmlF	or="icon_telephone">Birth Date</label>
        </div>
    </form>
  </div>
     </div>
    );
  }
}