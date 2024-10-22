import{n as c,m as x,r as d,j as e,s as h,G as m,T as p}from"./index-6af1604d.js";import{S as u,C as g,a as j,P as f,v as b,g as T}from"./index-d7ac4601.js";import{B as C,T as k}from"./BoxWrapper-4d6398aa.js";import{b as a}from"./aboutme-161a24eb.js";const w=`import Daniel from "@daniel/core"

type Props = {
  name: string;
  age: number;
  location: string;
  email: string;
}

export default function AboutMe(props: Props) {
  return (
    <Daniel ${a.details.map(o=>`
      ${o.icon} = {\`${o.text}\`}`)}
    />
  );
}`;function D(){const o=c(),n=x("(max-width: 1000px)"),[r,l]=d.useState(!0),i=()=>e.jsx(e.Fragment,{children:a.details.map((s,t)=>e.jsx("div",{children:e.jsxs(p,{size:"lg",className:"text",mt:5,children:[e.jsx("span",{style:{marginRight:5},children:s.icon}),s.text]},s.id)},t))});return e.jsx(h,{px:"xl",size:"lg",children:e.jsxs(C,{withBackground:!1,children:[e.jsxs(m,{position:"apart",mb:25,children:[e.jsx(k,{order:1,sx:s=>({color:s.colorScheme==="dark"?s.colors.yellow[5]:s.colors.orange[5]}),children:a.title}),!n&&e.jsx(u,{label:r?"Dev view":"Non tech view",checked:r,onChange:()=>l(!r),onLabel:e.jsx(g,{size:16,strokeWidth:2.5,color:o.colors.gray[4]}),offLabel:e.jsx(j,{size:16,strokeWidth:2.5,color:o.colors.yellow[4]}),color:"orange",size:"lg"})]}),n?e.jsx(i,{}):r?e.jsx(f,{noCopy:!0,language:"tsx",getPrismTheme:(s,t)=>t==="dark"?b:T,children:w}):e.jsx(i,{})]})})}export{D as A};
