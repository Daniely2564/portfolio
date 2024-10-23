import{n as h,m as g,r as u,j as e,s as j,G as l,T as f}from"./index-c9015bdd.js";import{S as b,C as y,a as w,P as T,v as k,g as C}from"./index-88c90f3d.js";import{B as v,T as x}from"./BoxWrapper-e297236c.js";import{e as i}from"./aboutme-d22598ae.js";import{L as p}from"./List-83c3e6c9.js";const E=`import Daniel from "@daniel/experiences"

// -----------------------------------------------------------------------------

type Experience = {
  title: string;
  since: string;
  company: string;
  bullets: string[];
}

export default function AboutMe({ experiences }: { experiences: Experience[]}) {
  return (
    <Daniel 
      experiences={${JSON.stringify(i.experiences,null,2).replace(/\n/g,`
	`)}}
    />
  );
}`;function M(){const t=h(),a=g("(max-width: 1000px)"),[o,d]=u.useState(!1),c=()=>e.jsx(e.Fragment,{children:i.experiences.map((r,n)=>e.jsxs("div",{children:[e.jsxs(l,{position:"apart",mb:11,mt:13,children:[e.jsxs(x,{order:4,sx:s=>({color:s.colorScheme==="dark"?s.colors.yellow[2]:s.colors.orange[3]}),mb:6,children:[r.title,", ",r.company]}),e.jsx(f,{size:"md",fw:900,variant:"gradient",gradient:{from:"blue",to:"cyan",deg:90},children:r.since})]}),e.jsx(p,{children:r.bullets.map((s,m)=>e.jsx(p.Item,{children:s},m))})]},n))});return e.jsx(j,{px:"xl",size:"lg",children:e.jsxs(v,{withBackground:!1,children:[e.jsxs(l,{position:"apart",mb:30,children:[e.jsx(x,{order:1,sx:r=>({color:r.colorScheme==="dark"?r.colors.yellow[5]:r.colors.orange[5]}),children:i.title}),!a&&e.jsx(b,{label:o?"Dev view":"Non tech view",checked:o,onChange:()=>d(!o),onLabel:e.jsx(y,{size:16,strokeWidth:2.5,color:t.colors.gray[4]}),offLabel:e.jsx(w,{size:16,strokeWidth:2.5,color:t.colors.yellow[4]}),color:"orange",size:"lg"})]}),a?e.jsx(c,{}):o?e.jsx(T,{noCopy:!0,language:"tsx",getPrismTheme:(r,n)=>n==="dark"?k:C,children:E}):e.jsx(c,{})]})})}export{M as E};
