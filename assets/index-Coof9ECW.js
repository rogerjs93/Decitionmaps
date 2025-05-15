import{r as l,a as R}from"./vendor-SIwY82C9.js";/* empty css               */import{_}from"./mermaid-DtogqvnA.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();var E={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S=l,L=Symbol.for("react.element"),P=Symbol.for("react.fragment"),M=Object.prototype.hasOwnProperty,Q=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function D(r,s,a){var o,t={},n=null,i=null;a!==void 0&&(n=""+a),s.key!==void 0&&(n=""+s.key),s.ref!==void 0&&(i=s.ref);for(o in s)M.call(s,o)&&!C.hasOwnProperty(o)&&(t[o]=s[o]);if(r&&r.defaultProps)for(o in s=r.defaultProps,s)t[o]===void 0&&(t[o]=s[o]);return{$$typeof:L,type:r,key:n,ref:i,props:t,_owner:Q.current}}p.Fragment=P;p.jsx=D;p.jsxs=D;E.exports=p;var e=E.exports,b,v=R;b=v.createRoot,v.hydrateRoot;const O=()=>e.jsx("header",{className:"app-header",children:e.jsx("h1",{children:"Conceptual Maps"})}),k=({categories:r,onSelectCategory:s})=>e.jsx("div",{className:"category-list",children:r.map(a=>e.jsx("button",{className:"category-button",onClick:()=>s(a),children:a},a))}),g=3,A=1e3,T=({diagram:r})=>{const[s,a]=l.useState(!0),[o,t]=l.useState(null),[n,i]=l.useState(0),d=l.useRef(null),m=l.useRef(null),h=l.useRef(null),N=async()=>{if(!h.current){const{default:u}=await _(async()=>{const{default:c}=await import("./mermaid-DtogqvnA.js").then(f=>f.b7);return{default:c}},[]);u.initialize({startOnLoad:!1,theme:"default",securityLevel:"loose",flowchart:{useMaxWidth:!0,htmlLabels:!0},fontSize:16,fontFamily:"Arial",maxTextSize:5e4}),h.current=u}return h.current},y=async(u=0)=>{if(!(!r||!d.current))try{a(!0),t(null),d.current.innerHTML="";const c=document.createElement("pre");c.className="mermaid",c.textContent=r,d.current.appendChild(c);const f=await N();m.current&&clearTimeout(m.current),m.current=setTimeout(async()=>{try{await f.parse(r),await f.run({nodes:[c],suppressErrors:!0}),a(!1),i(0)}catch(j){console.error(`Mermaid render error (attempt ${u+1}):`,j),u<g?setTimeout(()=>{i(u+1),y(u+1)},A):(t(`Failed to render diagram after ${g} attempts. ${j.message||""}`),a(!1))}},100)}catch(c){console.error("Mermaid load error:",c),t(`Failed to load Mermaid: ${c.message||"Unknown error"}`),a(!1)}};l.useEffect(()=>{let u=!0;const c=()=>{u=!1,m.current&&clearTimeout(m.current)};return u&&y(n),c},[r,n]);const w=()=>{i(0),y(0)};return e.jsxs("div",{className:"diagram-wrapper",children:[s&&e.jsxs("div",{className:"loading-overlay",children:[e.jsx("div",{className:"loading-spinner"}),e.jsxs("p",{children:["Loading diagram",n>0?` (Attempt ${n+1}/${g})`:"","..."]})]}),o&&e.jsxs("div",{className:"error-message",children:[e.jsx("p",{children:o}),e.jsx("button",{onClick:w,children:"Retry"})]}),e.jsx("div",{ref:d,className:"diagram-container"})]})},F=({map:r,onDownload:s,onShare:a})=>{const[o,t]=l.useState(!0);l.useEffect(()=>{t(!0)},[r.diagram]);const n=()=>{t(!1)};return e.jsxs("div",{className:"map-preview",children:[e.jsx("h3",{children:r.title}),e.jsxs("div",{className:"map-container",children:[o&&e.jsxs("div",{className:"loading-indicator",children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("p",{children:"Loading diagram..."})]}),e.jsx("div",{style:{opacity:o?0:1},children:r.diagram?e.jsx(T,{diagram:r.diagram,onRendered:n}):r.image?e.jsx("img",{src:r.image,alt:r.title,className:"map-image",onLoad:n}):e.jsx("div",{className:"error-message",children:"No diagram or image available"})})]}),e.jsxs("div",{className:"map-actions",children:[e.jsx("button",{onClick:()=>s(r),children:"Download"}),e.jsx("button",{onClick:()=>a(r),children:"Share"})]})]})},I=({maps:r,onDownload:s,onShare:a})=>e.jsx("div",{className:"map-gallery",children:r.map(o=>e.jsx(F,{map:o,onDownload:s,onShare:a},o.id))}),$=[{id:"flowchart-1",title:"Medical Specialty Decision Tree",diagram:`flowchart TD
    %% Root question
    Q1(["Which medical specialty should I choose?"])
    Q1 --> Q2{"Are you a people person?"}

    %% People Person: Yes branch
    Q2 -->|Yes| Q3{"Do you love variety across ages?"}
    Q3 -->|Yes| A1(["Family Medicine
🏡 Grandma to dog ear"])
    Q3 -->|No| A2(["Pediatrics
🧸 Baby talk & rainbows"])
    Q3 -->|Maybe| A3(["Psychiatry
🛋️ Charged by emotion"])

    %% People Person: No branch
    Q2 -->|No| Q4{"Do you hate small talk but like crisis?"}
    Q4 -->|Yes| B1(["Emergency Med
🚑 4-hour crises"])
    Q4 -->|No| B2(["Radiology
📷 Shadow whispers"])

    %% People Person: Maybe branch
    Q2 -->|Maybe| Q5{"Do you like microscopes or scanners?"}
    Q5 -->|Microscopes| C1(["Pathology
🔬 Dead is fun"])
    Q5 -->|Scanners| C2(["Interventional Radiology
🩻 Catheter gymnastics"])

    %% Add lateral branches for puzzle & action seekers
    Q1 --> D1(["Prefer puzzle & complexity?"])
    D1 --> D2(["Cardiology
❤️ Beeps & boops"])
    D1 --> D3(["Infectious Disease
🦠 Bug-chasing hero"])
    D1 --> D4(["Endocrinology
🩸 Hormone tears"])

    Q1 --> E1(["Need adrenaline & action?"])
    E1 --> E2(["Trauma Surgery
🔪 Midnight gunshots"])
    E1 --> E3(["Neurosurgery
🧠 Saturday cortex"])

    %% Lifestyle & ivory tower side panel
    subgraph SIDE_PANEL ["Other Paths"]
        F1(["Lifestyle Enthusiast
💄 Dermatology & Ophthalmology"])
        F2(["Academic Tower
🎓 Oncology & PubHealth"])
    end

    classDef question fill:#fffbcc,stroke:#f4c542,stroke-width:2px;
    classDef decision fill:#e0f7fa,stroke:#0288d1,stroke-width:2px;
    classDef specialty fill:#f3e5f5,stroke:#7b1fa2,stroke-width:1px,stroke-dasharray: 5 5;

    class Q1 question;
    class Q2,Q3,Q4,Q5,D1,E1 decision;
    class A1,A2,A3,B1,B2,C1,C2,D2,D3,D4,E2,E3,F1,F2 specialty;`}],x={Flowcharts:$},B=()=>{const[r,s]=l.useState("All"),a=Object.keys(x),o=r==="All"?Object.values(x).flat():x[r],t=r==="All"?o:o.filter(d=>d.category===r),n=d=>{console.log(`Downloading ${d.title}`)},i=d=>{console.log(`Sharing ${d.title}`)};return e.jsxs("div",{className:"app",children:[e.jsx(O,{}),e.jsx(k,{categories:a,onSelectCategory:s}),e.jsx(I,{maps:t,onDownload:n,onShare:i})]})};b(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(B,{})}));
//# sourceMappingURL=index-Coof9ECW.js.map
