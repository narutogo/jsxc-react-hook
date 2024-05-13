import './lib/styles/jsxc.bundle.css';
import {useEffect} from 'react';
//import Keepalive from 'react-activation';

let userJid: string = '';

export interface JsxcProp {
  boshUrl: string;
  id: string;
  pw: string;
  contactId?: string,
  marginTop?: string;
  marginLeft?: string;
  marginBottom?: string;
  marginRight?: string;
  fullscreen?: boolean;
  jqueryUrl?: string;
  showMenu: "yes"|"no";
}

export async function directOpenChatWindow(jid: string) {
  if (!userJid) {
    throw "user jid is empty, please initialize jsxc";
  }
  await (window as any).jsxc.getAccount(userJid).account.getConnection().getRosterService().
      addContact(new (window as any).jsxc.JID(jid), '');
  (window as any).jsxc.getAccount(userJid).getContact(jid).openChatWindow();
}

export  function Jsxc(prop: JsxcProp) {

    const rosterAppend = 'roster-append';
    const windowListAppend = 'windowlist-append';
    const dialogAppend = 'dialog-append';
    const {

      jqueryUrl = 'https://cdn.bootcdn.net/ajax/libs/jquery/3.7.1/jquery.js',
      marginTop = '40px',
      marginLeft = '40px',
      marginBottom = '40px',
      marginRight = '40px',
      contactId = null,
      showMenu,
      fullscreen,
      boshUrl,
      id,
      pw
    } = prop;

    userJid = id;

    useEffect(()=>{
        if ((window as any).jsxc) {
            if (contactId) {
              (window as any).jsxc.getAccount(id).getContact(contactId).openChatWindow();
            }
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

        const root = document.documentElement;
        root.style.setProperty('--jsxc-margin-top', marginTop);
        root.style.setProperty('--jsxc-margin-left', marginLeft);
        root.style.setProperty('--jsxc-margin-bottom', marginBottom);
        root.style.setProperty('--jsxc-margin-right', marginRight);




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

        if (showMenu === 'yes') {
          root.style.setProperty('--jsxc-show-menu', 'none');
          console.log('not show jsxc menu')
        }


    },[]);


    return (
      //  <Keepalive>
            <div id='jsxc-containers' style={{width: '100%', height: '100%'}} >
                <div  style={{width: '100%', height: '100%'}} id={rosterAppend}></div>
                <div  style={{width: '100%', height: '100%'}} id={dialogAppend}></div>
                <div  style={{width: '100%', height: '100%'}} id={windowListAppend}></div>
            </div>
    //    </Keepalive>
    );
}
