
import React from 'react';
import { ThemeContext } from './theme-context';
class ThemeButton extends React.Component{
    // constructor(){
    //   super();
    // }
    render(){
      let props = this.props;
      let theme = this.context;
      return (
        <button
          {...props}
          style={{background:theme.background}}>
            3333
        </button>
      )

    }
}

ThemeButton.contextType = ThemeContext;
//1.contextType是啥？是一个React.Context的实例，这样赋值是为了可以通过this.context访问 
//2. 写在这里是静态属性  等于static声明的属性
//3. consumer的写法请参考theme-button-consumer,两个文件为两种写法，等效
export default ThemeButton;