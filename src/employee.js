import React, { Component } from 'react'


class employee extends Component {
  render() {
    return (
      <div id="Emp">
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <input type ="text" value={this.props.text} onChange={this.props.onchange} />
        <input type="submit" className="button"  value="Register"/>
        </form>
      </div>
    )
  }
}

export default employee;