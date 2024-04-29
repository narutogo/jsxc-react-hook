import './lib/styles/jsxc.bundle.css';
import {useEffect} from 'react';
//import Keepalive from 'react-activation';

export interface JsxcProp {
  boshUrl: string;
  id: string;
  pw: string;
  fullscreen?: boolean;
  jqueryUrl?: string;
  rosterAppend?: string;
  windowListAppend?: string;
  dialogAppend?: string;
}

export default function Jsxc(prop: JsxcProp) {
    const {fullscreen = false, jqueryUrl = 'https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.js', rosterAppend = 'body', windowListAppend = 'body', dialogAppend = 'body', boshUrl, id, pw} = prop;
    useEffect(()=>{

        if ((window as any).jsxc) {
            return;
        }
        if (fullscreen) {
        //  document.body.classList.add(' jsxc-fullscsreen ');
         document.getElementsByTagName('body')[0].className = 'jsxc-fullscreen'
        }
        const script1 = document.createElement('script');
        script1.type = 'text/javascript';
        script1.src = jqueryUrl;
        document.head.appendChild(script1);
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '/jsxc.bundle.js';
        document.head.appendChild(script);


        script.onload = ()=> { localStorage.removeItem('jsxc2:accounts'); // for fobidden show 'account has ..' error message;
        let jsx = new (window as any).JSXC({
          /*  loadConnectionOptions: function(username: any, password: any) {
                return Promise.resolve({
                    xmpp: {
                //    url: 'https://localhost:5443/bosh',
                //    domain: 'localhost',
                    }
                });
            },*/
            rosterAppend: '#' + rosterAppend,
            dialogAppend: '#' + dialogAppend,
            windowListAppend: '#' + windowListAppend,
        });
        (window as any).jsxc = jsx;
        jsx.start(boshUrl, id, pw);}

    },[]);


    return (
      //  <Keepalive>
            <div id='jsxc-containers'  >
                <div id={rosterAppend}></div>
                <div id={dialogAppend}></div>
                <div id={windowListAppend}></div>
            </div>
    //    </Keepalive>
    );
}
