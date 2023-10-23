import{j as e}from"./jsx-runtime-6eef64cc.js";import{R as u}from"./react-svg.esm-b913811e.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./inheritsLoose-9eefaa95.js";import"./index-f9722e9b.js";const j=""+new URL("cross-360c9843.svg",import.meta.url).href,v="_root_u173b_1",N="_title_u173b_23",V="_container_u173b_31",t={root:v,"root-error":"_root-error_u173b_7","root-warning":"_root-warning_u173b_10","root-success":"_root-success_u173b_13","root-info":"_root-info_u173b_16","root-notification":"_root-notification_u173b_19",title:N,container:V,"buttons-container":"_buttons-container_u173b_38","button-action":"_button-action_u173b_44","button-alternate":"_button-alternate_u173b_51"};function i({type:a,title:l,text:T,buttons:c,cross:k}){return e.jsxs("div",{className:`${t.root} ${t[`root-${a}`]}`,children:[e.jsx(u,{src:`src/components/Alert/assets/${a}.svg`}),e.jsxs("div",{className:t.container,children:[l&&e.jsx("p",{className:t.title,children:l}),e.jsxs("p",{children:[T," "]}),c&&e.jsxs("div",{className:t["buttons-container"],children:[e.jsx("button",{className:t["button-action"],children:c[0]}),e.jsx("button",{type:"button",className:t["button-alternate"],children:c[1]})]})]}),!k&&e.jsx(u,{src:j})]})}try{i.displayName="Alert",i.__docgenInfo={description:"",displayName:"Alert",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"warning"'},{value:'"success"'},{value:'"info"'},{value:'"notification"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}},buttons:{defaultValue:null,description:"",name:"buttons",required:!1,type:{name:"[string, string]"}},cross:{defaultValue:null,description:"",name:"cross",required:!1,type:{name:"boolean"}}}}}catch{}const E={title:"Components/Alert",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{options:["error","warning","success","info","notification"],control:{type:"radio"}},title:{type:"string",defaultValue:"Title"},cross:{type:"boolean"}}},o={args:{type:"error",text:"The body content lets the user know why, and how to remedy or proceed.",buttons:["Action to take","Alternate action"]}},r={args:{type:"error",title:"Title",text:"The body content lets the user know why, and how to remedy or proceed.",buttons:["Action to take","Alternate action"]}},n={args:{type:"error",text:"The body content lets the user know why, and how to remedy or proceed."}},s={args:{type:"error",cross:!0,text:"The body content lets the user know why, and how to remedy or proceed.",buttons:["Action to take","Alternate action"]}};var d,p,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'error',
    text: 'The body content lets the user know why, and how to remedy or proceed.',
    buttons: ['Action to take', 'Alternate action']
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var y,_,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: 'Title',
    text: 'The body content lets the user know why, and how to remedy or proceed.',
    buttons: ['Action to take', 'Alternate action']
  }
}`,...(b=(_=r.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var h,w,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'error',
    text: 'The body content lets the user know why, and how to remedy or proceed.'
  }
}`,...(g=(w=n.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var f,x,A;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'error',
    cross: true,
    text: 'The body content lets the user know why, and how to remedy or proceed.',
    buttons: ['Action to take', 'Alternate action']
  }
}`,...(A=(x=s.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};const G=["Type","Title","Label","Cross"];export{s as Cross,n as Label,r as Title,o as Type,G as __namedExportsOrder,E as default};
//# sourceMappingURL=Alert.stories-8abe603a.js.map
