import React from 'react';
import './App.css';
import TextArea from './textarea'
import ReduxTest from './redux'
import StatusPromotion from './status-promotion'
import TodoItem from './todo/todo';
import Clock from './clock/clock'
import CommentBox from './comment-box/comment-box'
import ThemeButton from './theme-context/theme-button'
import ThemeButtonConsumer from './theme-context/theme-button-consumer'
import routerHtml from './router';
import { ThemeContext,themes } from './theme-context/theme-context'
import { Route, Switch ,Redirect } from 'react-router-dom'
import ExceptionCatcher from './error-catcher';
import ReactSelectDemo from './react-select-demo';
import reduxTest from './redux';
import SwitchDemo from './switchRouter/SwitchDemo';


const Game = React.lazy(()=> import("./game/index"));
//when we use react.lazy,we should use Suspend too ,
//and don't forget to add fallback function
function Toolbar(props){
   return (
     <ThemeButton onClick={props.changeTheme}>
           changeTheme
     </ThemeButton>
   )
}

function TextComponent(){
    return <div> test test </div>
}

import("./util").then(math=>{
  console.log(math);
  // math.add(99,100);
  math.default.add(99,100);
})

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      inputValue:'',
      todos: ['1'],
      theme:themes.light
    }

    this.toggleTheme = ()=>{
      this.setState(state=>({
         theme:
           state.theme===themes.dark?
             themes.light:themes.dark
      }))
    }
  }
  deleteTodo(index){
     let todos = [...this.state.todos];
     todos.splice(index,1);
     this.setState({
       todos
     })
  }
  newTodoChange(e){
    let inputValue = e.target.value;
    this.setState({
        inputValue
    })
  }
  addTodo(){
    let todos = [...this.state.todos,this.state.inputValue];
    this.setState({
      todos
    })
    this.setState({
      inputValue:''
  })
  }

  render(){
   return (
      <div className="App">
        {routerHtml()}
        <React.Suspense fallback={<div>...</div>}>
  
            <Route path="/redux-test">
              <ReduxTest></ReduxTest>
            </Route>
            <Route path="/todo-item">
                <input onChange={this.newTodoChange.bind(this)} value={this.state.inputValue}></input> <button onClick={this.addTodo.bind(this)}>add</button>
              { this.state.todos.map((item,index)=>{
                return  (
                <TodoItem text={item} key={index} index={index} deleteTodo={this.deleteTodo.bind(this,index)}></TodoItem>
                )
              })
              }
            </Route>
            <Route path="/text-area" component={TextArea}>

            </Route>
            <Route path="/status-promotion" component={StatusPromotion}>

            </Route>
            <Route path="/strange-clock">
                <Clock key="clock"></Clock>
            </Route>
            <Route path="/comment-box" component={CommentBox}>

            </Route>
            <Route path="/strange-button">
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme}></Toolbar>
                    <ThemeButtonConsumer></ThemeButtonConsumer>
                </ThemeContext.Provider>
                <ThemeButton />
            </Route>  
            <Route path="/game" component={Game}>
            </Route>

            <Route path="/exception">
               <ExceptionCatcher>
                   a useless component
               </ExceptionCatcher>
            </Route>

            <Route path="/react-delect-demo" component={ReactSelectDemo}>
            </Route>
            <Route path="/game/demo" component={SwitchDemo}></Route>
              {/* default to todo-item */}
            <Redirect to="/todo-item"/>
   
 
        </React.Suspense>  
      </div>
    );
  }
}

export default App;
