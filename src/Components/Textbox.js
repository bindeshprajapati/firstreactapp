import React, { Component } from 'react';

class Textbox extends Component {

    render() { 
        return ( 
            <div>
                {this.props.label}<input 
                placeholder = {this.props.placeholder}
                type={this.props.type}
                id ={this.props.id} 
                name={this.props.name} 
                text={this.props.text}
                value={this.props.value} 
                onChange={this.props.onchange}/>
            </div>
            
         );
    }
}
 
export default Textbox;