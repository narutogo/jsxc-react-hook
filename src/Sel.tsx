
import {useState} from 'react';
import {Jsxc} from './Jsxc';

export default function Sel() {
   const [sel, setsel] = useState(false);

    return (
        <div className={"divContainer"} style={{
          width: 400, height: 400
        }
        }>
         {sel &&
         <Jsxc boshUrl = 'https://localhost:5443/bosh' fullscreen={true}
            id= 'user1@localhost' pw='987654'
            showMenu={'yes'} showAudioButton={'no'} showVideoButton={'yes'}
            showOfflineButton='yes'
          />
        }

        {!sel && <div>hellow world</div> }
        <button onClick={()=>{setsel(!sel)}}>show</button>
        </div>
    );

}
