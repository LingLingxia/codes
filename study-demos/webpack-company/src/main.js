import './style.css';
import printMe from './print.js';
import { cube } from './math.js';
import 'xyz/file.js';//此处解析为  node_modules/xyz/file.js
import  './modu/dir'

// if ('serviceWorker' in navigator) {
//    window.addEventListener('load', () => {
//      navigator.serviceWorker.register('/service-worker.js').then(registration => {
//        console.log('SW registered: ', registration);
//      }).catch(registrationError => {
//       console.log('SW registration failed: ', registrationError);
//     });
//   });
//  }
function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = 'click me' +cube(5);

   btn.innerHTML = 'Click me and check the console!---';
   //btn.onclick = printMe;
   btn.onclick = sayHello;

   element.appendChild(btn);

  return element;
}
function sayHello(){
      import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
         var element = document.createElement('div');
   
         element.innerHTML = _.join(['Hello', 'webpack'], ' ');
         console.log(2333);
        document.body.appendChild(element);
    
      }).catch(error => 'An error occurred while loading the component');
}

document.body.appendChild(component());
console.log('ok');
if (module.hot) {
   module.hot.accept('./print.js', function() {
     console.log('Accepting the updated printMe module!');
     printMe();
   })
 }