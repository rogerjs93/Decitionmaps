import{r as c,a as R}from"./vendor-SIwY82C9.js";/* empty css               */import{_}from"./mermaid-DtogqvnA.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=a(t);fetch(t.href,s)}})();var D={exports:{}},h={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M=c,C=Symbol.for("react.element"),P=Symbol.for("react.fragment"),L=Object.prototype.hasOwnProperty,Q=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,O={key:!0,ref:!0,__self:!0,__source:!0};function E(r,n,a){var o,t={},s=null,l=null;a!==void 0&&(s=""+a),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(l=n.ref);for(o in n)L.call(n,o)&&!O.hasOwnProperty(o)&&(t[o]=n[o]);if(r&&r.defaultProps)for(o in n=r.defaultProps,n)t[o]===void 0&&(t[o]=n[o]);return{$$typeof:C,type:r,key:s,ref:l,props:t,_owner:Q.current}}h.Fragment=P;h.jsx=E;h.jsxs=E;D.exports=h;var e=D.exports,N,w=R;N=w.createRoot,w.hydrateRoot;const k=()=>e.jsx("header",{className:"app-header",children:e.jsx("h1",{children:"Conceptual Maps"})}),A=({categories:r,onSelectCategory:n})=>e.jsx("div",{className:"category-list",children:r.map(a=>e.jsx("button",{className:"category-button",onClick:()=>n(a),children:a},a))}),v=3,T=1e3,I=({diagram:r})=>{const[n,a]=c.useState(!0),[o,t]=c.useState(null),[s,l]=c.useState(0),u=c.useRef(null),f=c.useRef(null),y=c.useRef(null),S=async()=>{try{if(console.log("Initializing Mermaid..."),!y.current){const{default:i}=await _(async()=>{const{default:m}=await import("./mermaid-DtogqvnA.js").then(d=>d.b7);return{default:m}},[]);console.log("Mermaid imported successfully"),i.initialize({startOnLoad:!1,theme:"default",securityLevel:"loose",flowchart:{useMaxWidth:!0,htmlLabels:!0,curve:"basis",nodeSpacing:50,rankSpacing:50},sequence:{useMaxWidth:!0},gantt:{useMaxWidth:!0},fontSize:16,fontFamily:"Arial",maxTextSize:5e4,logLevel:"debug"}),y.current=i}return y.current}catch(i){throw console.error("Mermaid initialization error:",i),i}},x=async(i=0)=>{if(!r||!u.current){console.log("No diagram or element ref available");return}try{console.log("Starting diagram render attempt:",i+1),a(!0),t(null),u.current.innerHTML="",console.log("Cleared previous content");const m=`mermaid-${Date.now()}-${Math.random().toString(36).slice(2)}`,d=document.createElement("pre");d.className="mermaid",d.style.display="flex",d.style.justifyContent="center",d.style.width="100%",d.style.background="transparent",d.textContent=r,u.current.appendChild(d),console.log("Created new container with ID:",m);const b=await S();console.log("Mermaid initialized"),f.current&&clearTimeout(f.current),f.current=setTimeout(async()=>{try{console.log("Attempting to parse diagram"),await b.parse(r),console.log("Diagram parsed successfully");const{svg:g}=await b.render(m,r);d.innerHTML=g;const p=d.querySelector("svg");p&&(p.style.maxWidth="100%",p.style.height="auto",p.style.margin="0 auto"),a(!1),l(0),console.log("Render complete")}catch(g){console.error("Render error:",g),i<v?(console.log("Retrying render..."),setTimeout(()=>{l(i+1),x(i+1)},T)):(t(`Failed to render diagram after ${v} attempts. ${g.message||""}`),a(!1))}},100)}catch(m){console.error("Setup error:",m),t(`Failed to setup diagram: ${m.message||"Unknown error"}`),a(!1)}};return c.useEffect(()=>{let i=!0;const m=()=>{i=!1,f.current&&clearTimeout(f.current)};return i&&r&&(console.log("Diagram changed, starting new render"),x(s)),m},[r,s]),e.jsxs("div",{className:"diagram-wrapper",children:[n&&e.jsxs("div",{className:"loading-overlay",children:[e.jsx("div",{className:"loading-spinner"}),e.jsxs("p",{children:["Loading diagram",s>0?` (Attempt ${s+1}/${v})`:"","..."]})]}),o&&e.jsxs("div",{className:"error-message",children:[e.jsx("p",{children:o}),e.jsx("button",{onClick:()=>{l(0),x(0)},children:"Retry"})]}),e.jsx("div",{ref:u,className:"diagram-container"})]})},F=({map:r,onDownload:n,onShare:a})=>{const[o,t]=c.useState(!1);return c.useEffect(()=>{t(!1);const s=setTimeout(()=>{t(!0)},100);return()=>clearTimeout(s)},[r.diagram]),e.jsxs("div",{className:"map-preview",children:[e.jsx("h3",{children:r.title}),e.jsx("div",{className:"map-container",children:o?e.jsx("div",{className:"diagram-content",children:r.diagram?e.jsx(I,{diagram:r.diagram}):r.image?e.jsx("img",{src:r.image,alt:r.title,className:"map-image",onLoad:()=>t(!0)}):e.jsx("div",{className:"error-message",children:"No diagram or image available"})}):e.jsxs("div",{className:"loading-indicator",children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("p",{children:"Preparing diagram..."})]})}),e.jsxs("div",{className:"map-actions",children:[e.jsx("button",{onClick:()=>n(r),children:"Download"}),e.jsx("button",{onClick:()=>a(r),children:"Share"})]})]})},$=({maps:r,onDownload:n,onShare:a})=>e.jsx("div",{className:"map-gallery",children:r.map(o=>e.jsx(F,{map:o,onDownload:n,onShare:a},o.id))}),z=[{id:"flowchart-1",title:"Medical Specialty Decision Tree",diagram:`flowchart TD
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
    class A1,A2,A3,B1,B2,C1,C2,D2,D3,D4,E2,E3,F1,F2 specialty;`}],j={Flowcharts:z},B=()=>{const[r,n]=c.useState("All"),a=Object.keys(j),o=r==="All"?Object.values(j).flat():j[r],t=r==="All"?o:o.filter(u=>u.category===r),s=u=>{console.log(`Downloading ${u.title}`)},l=u=>{console.log(`Sharing ${u.title}`)};return e.jsxs("div",{className:"app",children:[e.jsx(k,{}),e.jsx(A,{categories:a,onSelectCategory:n}),e.jsx($,{maps:t,onDownload:s,onShare:l})]})};N(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(B,{})}));
//# sourceMappingURL=index-DahNxdH_.js.map
