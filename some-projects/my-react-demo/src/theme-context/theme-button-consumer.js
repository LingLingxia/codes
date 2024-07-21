import React from 'react';
import {ThemeContext} from './theme-context';
class ThemeButtonConsumer extends React.Component{
     render(){
       return(
        <ThemeContext.Consumer>
         {
           (theme)=>{
             return <span style={{background:theme.background}}>奇怪的按钮</span>
           }
         }
        </ThemeContext.Consumer>
  )}
}
export default ThemeButtonConsumer;