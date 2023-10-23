import{j as v}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const b="_primary_ag0vj_1",j="_secondary_ag0vj_9",f="_tertiary_ag0vj_17",s={primary:b,secondary:j,tertiary:f,"text-bold":"_text-bold_ag0vj_25","text-underline":"_text-underline_ag0vj_28","text-bold-underline":"_text-bold-underline_ag0vj_31"};function n({variant:t,scale:g,label:o,text:x}){return v.jsx("p",{className:`${t&&s[t]} ${o&&s[`text-${o}`]}`,style:{fontWeight:g},children:x})}try{n.displayName="Typography",n.__docgenInfo={description:"",displayName:"Typography",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},scale:{defaultValue:null,description:"",name:"scale",required:!1,type:{name:"number"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"underline"'},{value:'"bold-underline"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const T={title:"Components/Typography",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{options:["primary","secondary","tertiary"],control:{type:"radio"}},scale:{options:[100,200,300,400,500,600,700,800],control:{type:"radio"}},label:{options:["bold","underline","bold-underline"],control:{type:"radio"}}}},e={args:{variant:"primary",text:"Pajamas"}},a={args:{scale:100,text:"Pajamas"}},r={args:{label:"bold",text:"Pajamas"}};var l,i,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    text: 'Pajamas'
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    scale: 100,
    text: 'Pajamas'
  }
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,y,_;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'bold',
    text: 'Pajamas'
  }
}`,...(_=(y=r.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const q=["Primary","Scale","Label"];export{r as Label,e as Primary,a as Scale,q as __namedExportsOrder,T as default};
//# sourceMappingURL=Typography.stories-53cefc77.js.map
