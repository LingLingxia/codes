import React from 'react';
import { withRouter } from 'react-router-dom';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state={
      date:new Date()
    }
    this.timer = null;
  }
  componentDidMount(){
    this.timer = setInterval(()=>{
       this.setState({
         date:new Date()
       })
    },1000)
  }
  componentDidUpdate(currentProps,currentState){
      console.log(currentState);
  }
  componentWillUnmount(){
      clearInterval(this.timer);
  }

  handleClick = () => {
    // 使用 this.props.history.push() 进行路由跳转
    this.props.history.push('/game');
  };

  render(){
    return (
      <div className="clock-wrap">
         <h1>{this.state.date.toLocaleTimeString()}</h1>
         <button onClick={this.handleClick}>router test</button>
      </div>
    )
  }
}

export default withRouter(Clock);