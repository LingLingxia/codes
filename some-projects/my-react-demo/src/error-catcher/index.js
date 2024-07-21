import React from 'react';

class ErrorCatcherComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError(){
        return { hasError: true };
    }
    static componentDidCatch(error, errorInfo) {
        // 你同样可以将错误日志上报给服务器
        console.log(error, errorInfo);
      }
    render(){
        if (this.state.hasError) {
            // 你可以自定义降级后的 UI 并渲染
            return <h1>Something went wrong.  一个没有用的组件</h1>;
          }
        return this.props.children;
    }
};

export default ErrorCatcherComponent;