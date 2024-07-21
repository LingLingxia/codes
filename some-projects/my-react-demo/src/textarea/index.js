import React from 'react';
class TextArea extends React.Component{
    constructor(props){
        super(props);
        this.state={
            value:'this is a demo',
            inputValue:'我是不可编辑的'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        this.setState({
            value:e.target.value
        })
    }
    handleSubmit(e){
        alert(this.state.value)
       // this.setState({inputValue:this.setState.value})
       //受控组件不能这样去改值,会报错  ,它说我因为从受控状态改成了非受控状态
        e.preventDefault();
    }
    render(){
       return(
           <form onSubmit={this.handleSubmit}>
               <textarea value={this.state.value} onChange={this.handleChange}></textarea>
               <input type="submit" value="提交"/>
               <input value={this.state.inputValue} disabled/>
           </form>
       )
    }
}

export default TextArea