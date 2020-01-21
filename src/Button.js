
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './Display';

class Button extends React.Component{
    constructor()
    {
        super()
        this.state={
            val1:'',
            val2:'',
            ans:'',
            setval: true,
            op:''
        }
    }
    getInput=(e)=>{
        const {setval}=this.state;
        if (setval) {
            this.setState({val1:(this.state.val1+e.target.value)});
        } else {
            this.setState({val2:(this.state.val2+e.target.value)});
            
        }
        
    }
    test=(e)=>{
        this.setState({
            setval:false,
            op:e.target.value
        })
    }
    final=(e)=>{
        
        let val1=Number(this.state.val1);
        
        let val2=Number(this.state.val2);
        //console.log("ans "+(val1+val2));
        
        if(this.state.op==='+')
        this.setState({ ans:val1+val2 });
        else  if(this.state.op==='-')
        this.setState({ ans:val1-val2 });
        else  if(this.state.op==='*')
        this.setState({ ans:val1*val2 });
        else  if(this.state.op==='/')
        this.setState({ ans:val1/val2 });
        console.log("ans "+this.state.ans);
        
    }
    clear=()=>{
        this.setState({
            val1:'',
            val2:'',
            ans:'',
            setval: true,
            op:''
        })
    }
    render(){
        console.log(this)
        return <div>
            <br/>
            
            <button onClick={this.getInput} value="1" name="one">1</button>
            <button onClick={this.getInput} value="2" name="two">2</button>
            <button onClick={this.getInput} name="three" value="3">3</button><br/>
            <button onClick={this.getInput} name="four" value="4">4</button>
            <button onClick={this.getInput} name="five" value="5">5</button>
            <button onClick={this.getInput} name="six" value="6">6</button><br/>
            <button onClick={this.getInput} name="seven" value="7">7</button>
            <button onClick={this.getInput} name="eigth" value="8">8</button>
            <button onClick={this.getInput} name="nine" value="9">9</button><br/>
            <button onClick={this.test} value="+" name="+">+</button>
            <button onClick={this.test} value="-" name="-">-</button>
            <button onClick={this.test} value="*" name="*">*</button><br/>
            <button onClick={this.test} value="/" name="/">/</button>
            <button onClick={this.final} value="=" name="=">=</button>
            <button onClick={this.clear}>Clear</button><br/>
            {/* this.state && this.state.eigth */}
            <Display value={this.state}/>
         </div>
    }
}
export default Button;