
import {useState} from 'react';
import Jsxc from './Jsxc';

export default function Sel() {
   const [sel, setsel] = useState(false);

    return (
        <div className={"divContainer"} style={{
          width: 400, height: 400, borderStyle: 'dotted'
        }
        }>

         {sel && <Jsxc boshUrl = 'https://localhost:5443/bosh' fullscreen={true}
         id= 'user1@localhost' pw='987654'
         rosterAppend = 'roster' dialogAppend = 'dialog' windowListAppend = 'windowList'
          />}

        {!sel && <div>hellow world</div> }
        <button onClick={()=>{setsel(!sel)}}>sel</button>
        </div>


    );

}
