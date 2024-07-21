import React from 'react';
class CommentBox extends React.Component{
  constructor(props){
     super(props);
     this.state = {
       value:''
     }
     this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e){
    alert(this.inputElement.value);
    e.preventDefault();

  }
  render(){
    return (
      <form className = "p-5" onSubmit={this.handleSubmit}>
         <label>留言内容</label>
         <input type="text"
          className="form-control"
          placeholder="请输入内容"
          ref={(inputElement)=>{this.inputElement = inputElement}}
         />
         <button type="submit" className="btn btn-primary" >留言</button>
      </form>
    )
  }
}
export default CommentBox