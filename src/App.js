import React,{ Component } from "react";
//To dispatch and subscribe we need helper class i.e connect
import { connect } from "react-redux";

class App extends React.Component{
  render(){
    return(
      <div>
        <p>Bal : <span style={{color:"green"}}> {this.props.bal} </span></p>
        <br></br><br></br>
        <button onClick={this.props.deposit}>DEPOSIT</button>
        <button onClick={this.props.withdraw}>WITHDRAW</button>
      </div>
    )
  }
};

//subscribe
const receive = (state)=>{
  return{
    bal : state.bal
  }
};



//dispatch
const send = (dispatch)=>{
  return{
    deposit : ()=>{ dispatch({type:"DEPOSIT",value:5000})},
    withdraw : ()=>{dispatch({type:"WITHDRAW",value:1000})}
  }
};

export default connect(receive,send)(App);