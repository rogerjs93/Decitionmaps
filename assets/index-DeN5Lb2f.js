import{r as c,a as g}from"./vendor-SIwY82C9.js";import{m as p}from"./mermaid-DxzRZhYp.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();var m={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=c,v=Symbol.for("react.element"),j=Symbol.for("react.fragment"),D=Object.prototype.hasOwnProperty,b=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function h(r,e,a){var s,t={},o=null,i=null;a!==void 0&&(o=""+a),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(i=e.ref);for(s in e)D.call(e,s)&&!w.hasOwnProperty(s)&&(t[s]=e[s]);if(r&&r.defaultProps)for(s in e=r.defaultProps,e)t[s]===void 0&&(t[s]=e[s]);return{$$typeof:v,type:r,key:o,ref:i,props:t,_owner:b.current}}d.Fragment=j;d.jsx=h;d.jsxs=h;m.exports=d;var n=m.exports,y,f=g;y=f.createRoot,f.hydrateRoot;const E=()=>n.jsx("header",{className:"app-header",children:n.jsx("h1",{children:"Conceptual Maps"})}),N=({categories:r,onSelectCategory:e})=>n.jsx("div",{className:"category-list",children:r.map(a=>n.jsx("button",{className:"category-button",onClick:()=>e(a),children:a},a))});typeof window<"u"&&p.initialize({startOnLoad:!1,theme:"default",securityLevel:"loose",flowchart:{useMaxWidth:!0,htmlLabels:!0},fontFamily:"system-ui, -apple-system, sans-serif"});const L=({diagram:r})=>{const e=c.useRef(null),[a,s]=c.useState(null);return c.useEffect(()=>{(async()=>{if(!(!r||!e.current))try{const o=`mermaid-${Math.random().toString(36).slice(2)}`;e.current.innerHTML="",e.current.id=o;const i=document.createElement("div");i.innerHTML=r,e.current.appendChild(i),await p.parse(r);const{svg:l}=await p.render(o,r);e.current&&(e.current.innerHTML=l),s(null)}catch(o){console.error("Error rendering diagram:",o),s(o.message||"Failed to render diagram"),e.current&&(e.current.innerHTML=`
            <div class="error-message">
              <p>Failed to render diagram</p>
              <pre>${o.message||"Unknown error"}</pre>
              <p>Diagram source:</p>
              <pre>${r}</pre>
            </div>
          `)}})()},[r]),n.jsxs("div",{className:"map-renderer-container",children:[n.jsx("div",{ref:e,className:"map-renderer"}),a&&n.jsxs("div",{className:"error-overlay",children:[n.jsxs("p",{children:["Error: ",a]}),n.jsx("button",{onClick:()=>window.location.reload(),children:"Retry"})]})]})},Q=({map:r,onDownload:e,onShare:a})=>{const[s,t]=c.useState(!0);return n.jsxs("div",{className:"map-preview",children:[n.jsx("h3",{children:r.title}),n.jsxs("div",{className:"map-container",children:[s&&n.jsx("div",{className:"loading",children:"Loading diagram..."}),n.jsx("div",{style:{opacity:s?0:1},children:r.diagram?n.jsx(L,{diagram:r.diagram,onRender:()=>t(!1)}):n.jsx("img",{src:r.image,alt:r.title,className:"map-image",onLoad:()=>t(!1)})})]}),n.jsxs("div",{className:"map-actions",children:[n.jsx("button",{onClick:()=>e(r),children:"Download"}),n.jsx("button",{onClick:()=>a(r),children:"Share"})]})]})},S=({maps:r,onDownload:e,onShare:a})=>n.jsx("div",{className:"map-gallery",children:r.map(s=>n.jsx(Q,{map:s,onDownload:e,onShare:a},s.id))}),M=[{id:"flowchart-1",title:"Medical Specialty Decision Tree",diagram:`flowchart TD
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
    class A1,A2,A3,B1,B2,C1,C2,D2,D3,D4,E2,E3,F1,F2 specialty;`}],u={Flowcharts:M},P=()=>{const[r,e]=c.useState("All"),a=Object.keys(u),s=r==="All"?Object.values(u).flat():u[r],t=r==="All"?s:s.filter(l=>l.category===r),o=l=>{console.log(`Downloading ${l.title}`)},i=l=>{console.log(`Sharing ${l.title}`)};return n.jsxs("div",{className:"app",children:[n.jsx(E,{}),n.jsx(N,{categories:a,onSelectCategory:e}),n.jsx(S,{maps:t,onDownload:o,onShare:i})]})};y(document.getElementById("root")).render(n.jsx(c.StrictMode,{children:n.jsx(P,{})}));
//# sourceMappingURL=index-DeN5Lb2f.js.map
