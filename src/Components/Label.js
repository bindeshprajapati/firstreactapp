import React, { Component } from 'react';

class Label extends Component {
    state = {  }
    render() { 
        return ( 
            <label id={this.props.id}>{this.props.id}</label>
         );
    }
}
export default Label;