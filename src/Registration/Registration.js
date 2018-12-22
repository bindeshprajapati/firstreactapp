import React, { Component } from 'react';
// import Label from '../Components/Label';
import Textbox from '../Components/Textbox';


class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName : '',
            userEmail : '',
            userMobile : '',
            userPwd : '',
            userConPwd : ''
        };
         console.log('hi Constructor Call')
         
   }
//    componentDidMount(){
//        console.log('1');
//         setTimeout(() => {
//             console.log('component did mout settimeout')
//         }, 0);
//         console.log('3');
//     }

//     componentWillUnmount(){
//         console.log('component will unmount');
//     }
    handleChange(event) {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit(e){
        alert(this.state.userName);
        alert(this.state.userEmail);
        alert(this.state.userMobile);
        alert(this.state.userPwd);
        alert(this.state.userConPwd);  
        e.preventDefault(); // this line for page not refresh
    }

    render() { 
    console.log('render')
        return ( 
            <div>
                <form className="demoForm" onSubmit={(e)=>this.handleSubmit(e)}>
                    Name:<Textbox 
                        type ="text"
                        id="userName"
                        name = "userName"
                        placeholder = "Please enter Name"
                        value ={this.state.userName}
                        onchange={(event)=>this.handleChange(event)}
                    />
                    <br/>
                    Email Address : <Textbox 
                        type ="text"
                        id="userEmail"
                        name = "userEmail"
                        placeholder = "Please enter Email Address"
                        value ={this.state.userEmail}
                        onchange={(event)=>this.handleChange(event)}
                    />
                    <br/>
                    Mobile : <Textbox 
                        type ="text"
                        id="userMobile"
                        name = "userMobile"
                        placeholder = "Please enter Contact Number"
                        value ={this.state.userMobile}
                        onchange={(event)=>this.handleChange(event)}
                    />
                    <br/>
                    Password : <Textbox 
                        type ="password"
                        id="userPwd"
                        name = "userPwd"
                        placeholder = "Please enter Password"
                        value ={this.state.userPwd}
                        onchange={(event)=>this.handleChange(event)}
                    />
                    <br/>
                    Confirm Password : <Textbox 
                        type ="password"
                        id="userConPwd"
                        name = "userConPwd"
                        placeholder = "Plese enter Confirm Password"
                        value ={this.state.userConPwd}
                        onchange={(event)=>this.handleChange(event)}
                    />
                    <br/>
                <input type="submit" value="Submit" />
                </form>

                
            </div>
         );
    }
}
export default Registration;