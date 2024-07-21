import React, { Component } from 'react';
import { createStore } from 'redux'

function reduce (state=0,action){
   switch(action.type){
       case 'ADD':
           state +=1; break;
        case 'REDUCE':
           state -=1; break;  
   }
   return state;
}
const store = createStore(reduce);
let unmount = false;
class reduxTest extends Component {
    state = { 
        count:store.getState(),
        input1:0,
        input2:1,
        sum:0
     }
    componentWillUnmount(){
       unmount = true;
       console.log(unmount,"will unmount");
    }
    componentDidMount(){
        unmount = false;
        console.log(unmount,"did mount");
    }
    caculate = (e)=>{
        console.log(e.target.value);
       this.setState({input1:e.target.value})
       this.setState((state,prop)=> ({sum:state.input1}))
    }
    testFunction=(e)=>{
        this.setState({input2:e.target.value});
        console.log(e.target.value)
    }
    render() { 
        store.subscribe(()=>{
            if(!unmount){
                this.setState({ count: store.getState() });
            }
        })
        return ( <div>
            {this.state.count}
            <button onClick={()=>{store.dispatch({type:'ADD'})}}>add</button>
            <button onClick={()=>{store.dispatch({type:'REDUCE'})}}>reduce</button>
            <h3>test prop and state add function {this.state.sum}</h3>
            <input value={this.state.input1} onChange={this.caculate}></input>
            <input value={this.state.input2} onChange={this.testFunction}></input>
            </div> );
    }
}
 

export default reduxTest;

