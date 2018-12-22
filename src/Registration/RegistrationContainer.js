import React, { Component } from 'react';
import Registration from './Registration'


class RegistrationContainer extends Component {
    registerUser =(data) =>{
        console.log(data);
    }
    render() { 
        return ( 
            <div>
                <Registration register={this.registerUser} />
            </div>
         );
    }
}
 
export default RegistrationContainer;