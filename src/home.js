import React, { Component } from 'react'
import Employee from './employee'

class home extends Component {
    constructor(){
        super();
        this.state = {
            value : ''
        }
        this.ChangeData = this.ChangeData.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);
    }
    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            alert("Form submitted");
        }
  
      }
  
    ChangeData(data){
        console.log(data.target.value)
        //alert(data)
        this.setState({
            value : data.target.value
        })
    }

    
  render() {
    return (
      <div id= "home">
       <Employee id="txtname" text={this.state.value} onchange={this.ChangeData}/> 
       <p>{this.state.value}</p>
      </div>
    )
  }
}
export default home;