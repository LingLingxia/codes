//import { yes } from './tmp.js';
import _ from 'lodash';
console.log(
    _.join(['Another', 'module', 'loaded!'], ' ')
  );
//yes();
alert('yes');
var button = document.createElement('button');
document.body.append(button);
   button.onclick = e => import(/* webpackChunkName: "yes" */ './tmp').then(module => {
      var yes = module.yes;
      yes();
    });
  