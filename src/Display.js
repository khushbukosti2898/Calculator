
import React from 'react';
import Button from './Button.js';

import logo from './logo.svg';
import './App.css';

class Display extends React.Component{
    /* inputChange =(e)=>{
        const {val1,val2,ans}=this.state;
            this.setState({
                [e.target.name]:e.target.value
            });   
    }  */ 
    inputChange
    render(){
        return <input type="text" onchange={this.inputChange} name="val1" value={this.props.value.val1}/>
    }
}
export default Display;