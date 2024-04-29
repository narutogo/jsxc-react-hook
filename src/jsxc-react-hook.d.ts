//import * from './src/Jsxc';

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
 
export   function Jsxc(prop: JsxcProp);
