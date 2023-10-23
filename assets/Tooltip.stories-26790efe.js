import{j as a}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";const h="_root_1noxr_1",T="_text_1noxr_10",f="_triangle_1noxr_17",t={root:h,text:T,triangle:f,"triangle-top":"_triangle-top_1noxr_24","triangle-bottom":"_triangle-bottom_1noxr_31","triangle-right":"_triangle-right_1noxr_38","triangle-left":"_triangle-left_1noxr_45"};function n({direction:i,text:_}){return a.jsxs("div",{className:t.root,children:[a.jsx("p",{className:t.text,children:_}),a.jsx("div",{className:`${t.triangle} ${t[`triangle-${i}`]}`})]})}try{n.displayName="Tooltip",n.__docgenInfo={description:"",displayName:"Tooltip",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},text:{defaultValue:null,description:"",name:"text",required:!0,type:{name:"string"}}}}}catch{}const w={title:"Components/Tooltip",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{direction:{options:["bottom","top","left","right"],control:{type:"radio"}}}},e={args:{text:"Content",direction:"bottom"}},o={args:{text:"I’ve got a tip for you!",direction:"bottom"}},r={args:{text:"Text wraps when reaching 200px max-width",direction:"bottom"}};var s,p,c;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    text: 'Content',
    direction: 'bottom'
  }
}`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var l,m,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    text: 'I’ve got a tip for you!',
    direction: 'bottom'
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,u,x;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: 'Text wraps when reaching 200px max-width',
    direction: 'bottom'
  }
}`,...(x=(u=r.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const j=["BaseTooltip","TooltipResize","TooltipWrap"];export{e as BaseTooltip,o as TooltipResize,r as TooltipWrap,j as __namedExportsOrder,w as default};
//# sourceMappingURL=Tooltip.stories-26790efe.js.map
