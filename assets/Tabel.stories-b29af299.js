import{j as a}from"./jsx-runtime-ffb262ed.js";import{R as P}from"./react-svg.esm-ff4de396.js";import{r as j}from"./index-76fb7be0.js";import"./inheritsLoose-9eefaa95.js";import"./index-9d475cdf.js";import"./_commonjsHelpers-de833af9.js";const Q="_table_1a1oh_1",U="_head_1a1oh_6",W="_body_1a1oh_25",X="_container_1a1oh_33",r={table:Q,head:U,"header-text":"_header-text_1a1oh_17",body:W,container:X,"head-zebra":"_head-zebra_1a1oh_38","body-zebra":"_body-zebra_1a1oh_45"};function Y(s){let c;s&&(c=s.map(e=>[...e]));const[t,d]=j.useState([null,null]),[o,b]=j.useState(c);return{sortArray:o,sortIndex:t,onSortClick:e=>{if(t[0]!==e){d([e,"up"]);const n=o==null?void 0:o.sort((l,f)=>l[e].localeCompare(f[e]));b(n)}else if(t[1]==="up"){d([e,"down"]);const n=o==null?void 0:o.sort((l,f)=>f[e].localeCompare(l[e]));b(n)}else d([null,null]),b(c)}}}function x({head:s,body:c,zebra:t}){const{sortArray:d,sortIndex:o,onSortClick:b}=Y(c);return a.jsxs("table",{className:r.table,children:[a.jsx("thead",{children:a.jsx("tr",{className:`${r.container} ${r.head} ${t&&r["head-zebra"]}`,children:s==null?void 0:s.map((y,e)=>a.jsx("th",{onClick:()=>b(e),children:a.jsxs("div",{className:r["header-text"],children:[a.jsx("p",{children:y}),e===o[0]&&a.jsx(P,{src:`src/components/Table/assets/arrow-${o[1]}.svg`})]})},y+e))})}),a.jsx("tbody",{className:`${r.body} ${t&&r["body-zebra"]}`,children:d==null?void 0:d.map((y,e)=>a.jsx("tr",{className:r.container,children:y.map((n,l)=>a.jsx("td",{children:a.jsx("p",{children:n})},n+l))},e))})]})}try{x.displayName="Table",x.__docgenInfo={description:"",displayName:"Table",props:{head:{defaultValue:null,description:"",name:"head",required:!1,type:{name:"string[]"}},body:{defaultValue:null,description:"",name:"body",required:!1,type:{name:"string[][]"}},zebra:{defaultValue:null,description:"",name:"zebra",required:!1,type:{name:"boolean"}}}}}catch{}const de={title:"Components/Table",component:x,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{zebra:{type:"boolean"}}},p={args:{head:["head","head","head"]}},m={args:{head:["head","head"]}},h={args:{head:["head"]}},i={args:{body:[["body","body","body"]]}},u={args:{body:[["body","body"]]}},_={args:{body:[["body"]]}},g={args:{head:["head","head","head"],body:[["body1","body1","body1"],["body2","body2","body2"],["body3","body3","body3"]]}},S={args:{zebra:!0,head:["head","head","head"],body:[["body1","body1","body1"],["body2","body2","body2"],["body3","body3","body3"]]}};var z,B,T;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    head: ['head', 'head', 'head']
  }
}`,...(T=(B=p.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var C,N,H;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    head: ['head', 'head']
  }
}`,...(H=(N=m.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};var $,k,I;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    head: ['head']
  }
}`,...(I=(k=h.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var V,q,E;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    body: [['body', 'body', 'body']]
  }
}`,...(E=(q=i.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var R,v,w;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    body: [['body', 'body']]
  }
}`,...(w=(v=u.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var Z,D,G;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    body: [['body']]
  }
}`,...(G=(D=_.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var O,F,J;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    head: ['head', 'head', 'head'],
    body: [['body1', 'body1', 'body1'], ['body2', 'body2', 'body2'], ['body3', 'body3', 'body3']]
  }
}`,...(J=(F=g.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var K,L,M;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    zebra: true,
    head: ['head', 'head', 'head'],
    body: [['body1', 'body1', 'body1'], ['body2', 'body2', 'body2'], ['body3', 'body3', 'body3']]
  }
}`,...(M=(L=S.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const te=["Head_3","Head_2","Head_1","Body_3","Body_2","Body_1","BaseTable","Zebra"];export{g as BaseTable,_ as Body_1,u as Body_2,i as Body_3,h as Head_1,m as Head_2,p as Head_3,S as Zebra,te as __namedExportsOrder,de as default};
//# sourceMappingURL=Tabel.stories-b29af299.js.map
