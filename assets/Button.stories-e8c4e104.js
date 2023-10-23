import{j as a}from"./jsx-runtime-6eef64cc.js";import{R as g}from"./react-svg.esm-b913811e.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";import"./inheritsLoose-9eefaa95.js";import"./index-f9722e9b.js";const _="_button_15s5m_12",p="_Link_15s5m_83",b="_loading_15s5m_1",n={button:_,"button-primary":"_button-primary_15s5m_28","button-danger":"_button-danger_15s5m_37","button-loading":"_button-loading_15s5m_46","button-disabled":"_button-disabled_15s5m_59","button-selected":"_button-selected_15s5m_71","button-dashed":"_button-dashed_15s5m_75",Link:p,"Loading-svg":"_Loading-svg_15s5m_93",loading:b},f=""+new URL("Loading-a9082c37.svg",import.meta.url).href;function s({type:e,onClick:m}){return e==="link"?a.jsx("a",{className:n.Link,children:e}):a.jsxs("button",{type:"button",disabled:e==="loading"||e==="disabled",className:`${n.button} ${n[`button-${e}`]}`,onClick:m,children:[e==="loading"&&a.jsx(g,{src:f,className:n["Loading-svg"]}),e||"Default"]})}try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"danger"'},{value:'"loading"'},{value:'"disabled"'},{value:'"selected"'},{value:'"dashed"'},{value:'"link"'}]}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(data?: MouseEvent<HTMLButtonElement, MouseEvent> | undefined) => void"}}}}}catch{}const C={title:"Components/Button",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{options:["primary","danger","loading","disabled","selected","dashed","link"],control:{type:"radio"}}}},t={args:{onClick:()=>{console.log("default")}}},o={args:{type:"danger",onClick:()=>{console.log("danger")}}};var r,d,l;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    onClick: () => {
      console.log('default');
    }
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var i,u,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    type: 'danger',
    onClick: () => {
      console.log('danger');
    }
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const j=["Default","Danger"];export{o as Danger,t as Default,j as __namedExportsOrder,C as default};
//# sourceMappingURL=Button.stories-e8c4e104.js.map
