import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SwitchDemo = () =>{
    const history = useHistory()
    return <div>
        <ul>
        <li>when add Switch tag in router , "/game/demo" will only render the same content as "/game",
            because "/game" is the first match router . </li>
        <li> when remove Switch tag , "/game/demo" will render both "/game/demo" and "/game" component</li>
        <li> when use exact , "/game/demo"  will not render the content of "/game" without Switch Tag</li>
        <li> conclusion : most of the time we don't need switch, as long as we name path properly</li>
        </ul>

        <button onClick={ ()=>{history.push("/game") }}> go to game </button>
        </div>
}

export default SwitchDemo