import{j as e}from"./jsx-runtime-ffb262ed.js";import{R as b}from"./react-svg.esm-ff4de396.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./inheritsLoose-9eefaa95.js";import"./index-9d475cdf.js";const v=""+new URL("Base Avatar-030a11d7.svg",import.meta.url).href,h="_root_rvc8t_1",P="_item_rvc8t_7",S="_link_rvc8t_21",j="_text_rvc8t_31",t={root:h,item:P,link:S,text:j};function n({items:o}){return e.jsx("ul",{className:t.root,children:o.map((m,f)=>e.jsx("li",{className:t.item,children:e.jsxs("a",{className:t.link,children:[m.image&&e.jsx(b,{src:v}),e.jsx("p",{className:t.text,children:m.text})]})},m.text+f))})}try{n.displayName="Breadcrumb",n.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ text: string; image: boolean; }[]"}}}}}catch{}const k={title:"Components/Breadcrumb",component:n,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{items:[{text:"Home",image:!0},{text:"Page",image:!0}]}},r={args:{items:[{text:"Home",image:!0},{text:"Page",image:!0},{text:"Sub-page",image:!1}]}},s={args:{items:[{text:"Home",image:!0},{text:"Page",image:!0},{text:"Page-without-image",image:!1},{text:"Sub-page",image:!1}]}};var i,c,g;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Home',
      image: true
    }, {
      text: 'Page',
      image: true
    }]
  }
}`,...(g=(c=a.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var u,p,l;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Home',
      image: true
    }, {
      text: 'Page',
      image: true
    }, {
      text: 'Sub-page',
      image: false
    }]
  }
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var x,d,_;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items: [{
      text: 'Home',
      image: true
    }, {
      text: 'Page',
      image: true
    }, {
      text: 'Page-without-image',
      image: false
    }, {
      text: 'Sub-page',
      image: false
    }]
  }
}`,...(_=(d=s.parameters)==null?void 0:d.docs)==null?void 0:_.source}}};const E=["Elements","Image","ItemOverflow"];export{a as Elements,r as Image,s as ItemOverflow,E as __namedExportsOrder,k as default};
//# sourceMappingURL=Breadcrumb.stories-33213308.js.map
