import React from 'react'
import './todo.css'
class TodoItem extends React.Component{
    constructor(props){
       super(props);
       this.state={
           name:'233'
       }
    }
    deleteTodo(){
      this.props.deleteTodo(this.props.index)
    }
    render(){
        return (
        <li onClick={this.props.deleteTodo}>
            <span>{this.props.text}</span>
        </li>
        )
    }
}

export default TodoItem;