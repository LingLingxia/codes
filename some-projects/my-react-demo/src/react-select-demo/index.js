import React,{useEffect, useState} from 'react';
import Select from 'react-dropdown-select';



const options = [
    {type:"group",title:"SDG",value:3,label:"label 3"},
    {value:1,label:"label 1",type:"account"},
    {value:2,label:"label 2",type:"account"}
]

const ReactSelectDemo = ()=>{
    const [account,setAccount] = useState([]);
    const renderItemFun = ({item, itemIndex, props, state, methods})=>{
        let str = "";
        if(item.type==="group"){
           str =  <h3 key={itemIndex}>{item.title}</h3>
        }else if(item.type==="account"){
            str =  <p key={itemIndex} onClick={()=>{methods.addItem(item)}}>{item.label} </p>
        }
        return <div key={itemIndex}> {str}</div>
    }

    return <Select
           values={account}
           options={options}
           itemRenderer={renderItemFun}
           onChange={(item)=>{console.log(item)}}
           />
    
}


export default ReactSelectDemo;