import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Normal from './screens/Normal'
import Break from './screens/break'
import Light from './screens/light'
import './bootstrap.css'

class App extends Component {
  
  
  constructor()
  {
    super();
  this.state={
    lightt:false,
    breakk:false,
    normall:true
  }
  this.on=this.on.bind(this);
  this.off=this.off.bind(this);
  this.break=this.break.bind(this);

}
  on()
  {
    this.setState({lightt:true,breakk:false,normall:false})
  }
  
  off()
  {
    this.setState({lightt:false,breakk:false,normall:true})
  }
  
  break()
  {
    this.setState({lightt:false,breakk:true,normall:false})
  }
  
  
  render() {
    
    const {lightt,breakk,normall} = this.state;


    return (
      <div className="App">
     {normall && <Normal/>}
     {breakk && <Break/>}
     {lightt && <Light/>}


<button onClick={this.on} className="btn btn-success" >Switch On </button>
<button onClick={this.off} className="btn btn-default"> Switch Off</button>
<button onClick={this.break} className="btn btn-success">Break</button>

      </div>

      
    )

      
    }
   
  }


export default App;
