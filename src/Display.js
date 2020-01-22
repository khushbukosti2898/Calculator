
import React from 'react';
import './App.css';

class Display extends React.Component{
    
    render(){
        const {val1,val2,op,ans}=this.props.value;
        return <div>
            <h1>Calculator</h1>
            <input type="text" readonly className="form-control" onChange={this.inputChange} 
                    name="val1" value={val1 + op + val2 +"  "+ans}/>
        </div>
    }
}
export default Display;