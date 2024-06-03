
export interface JsxcProp {
    boshUrl: string;
    id: string;
    pw: string;
    contactId?: string;
    marginTop?: string;
    marginLeft?: string;
    marginBottom?: string;
    marginRight?: string;
    fullscreen?: boolean;
    jqueryUrl?: string;
    showMenu: "yes" | "no";
}
export declare function directOpenChatWindow(jid: string): Promise<void>;
export declare function Jsxc(prop: JsxcProp): import("react/jsx-runtime").JSX.Element;
