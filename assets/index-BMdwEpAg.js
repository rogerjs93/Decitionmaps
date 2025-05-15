import{r as l,a as x}from"./vendor-SIwY82C9.js";import{m as f}from"./mermaid-CGvMi-a9.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(s){if(s.ep)return;s.ep=!0;const t=a(s);fetch(s.href,t)}})();var p={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=l,j=Symbol.for("react.element"),D=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,N=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function g(r,n,a){var o,s={},t=null,i=null;a!==void 0&&(t=""+a),n.key!==void 0&&(t=""+n.key),n.ref!==void 0&&(i=n.ref);for(o in n)b.call(n,o)&&!E.hasOwnProperty(o)&&(s[o]=n[o]);if(r&&r.defaultProps)for(o in n=r.defaultProps,n)s[o]===void 0&&(s[o]=n[o]);return{$$typeof:j,type:r,key:t,ref:i,props:s,_owner:N.current}}u.Fragment=D;u.jsx=g;u.jsxs=g;p.exports=u;var e=p.exports,y,h=x;y=h.createRoot,h.hydrateRoot;const w=()=>e.jsx("header",{className:"app-header",children:e.jsx("h1",{children:"Conceptual Maps"})}),S=({categories:r,onSelectCategory:n})=>e.jsx("div",{className:"category-list",children:r.map(a=>e.jsx("button",{className:"category-button",onClick:()=>n(a),children:a},a))});f.initialize({startOnLoad:!1,theme:"default",securityLevel:"loose"});const Q=({diagram:r})=>{const[n,a]=l.useState(""),[o,s]=l.useState(!0),[t,i]=l.useState(null);return l.useEffect(()=>{r&&(async()=>{try{s(!0),i(null);const{svg:d}=await f.render("diagram",r);a(d)}catch(d){console.error("Failed to render diagram:",d),i(d.message)}finally{s(!1)}})()},[r]),o?e.jsxs("div",{className:"diagram-container loading",children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("p",{children:"Loading diagram..."})]}):t?e.jsxs("div",{className:"diagram-container error",children:[e.jsxs("p",{children:["Failed to render diagram: ",t]}),e.jsx("button",{onClick:()=>window.location.reload(),children:"Retry"})]}):e.jsx("div",{className:"diagram-container",dangerouslySetInnerHTML:{__html:n}})},L=({map:r,onDownload:n,onShare:a})=>{const[o,s]=l.useState(!0);l.useEffect(()=>{s(!0)},[r.diagram]);const t=()=>{s(!1)};return e.jsxs("div",{className:"map-preview",children:[e.jsx("h3",{children:r.title}),e.jsxs("div",{className:"map-container",children:[o&&e.jsxs("div",{className:"loading-indicator",children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("p",{children:"Loading diagram..."})]}),e.jsx("div",{style:{opacity:o?0:1},children:r.diagram?e.jsx(Q,{diagram:r.diagram,onRendered:t}):r.image?e.jsx("img",{src:r.image,alt:r.title,className:"map-image",onLoad:t}):e.jsx("div",{className:"error-message",children:"No diagram or image available"})})]}),e.jsxs("div",{className:"map-actions",children:[e.jsx("button",{onClick:()=>n(r),children:"Download"}),e.jsx("button",{onClick:()=>a(r),children:"Share"})]})]})},P=({maps:r,onDownload:n,onShare:a})=>e.jsx("div",{className:"map-gallery",children:r.map(o=>e.jsx(L,{map:o,onDownload:n,onShare:a},o.id))}),_=[{id:"flowchart-1",title:"Medical Specialty Decision Tree",diagram:`flowchart TD
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
    class A1,A2,A3,B1,B2,C1,C2,D2,D3,D4,E2,E3,F1,F2 specialty;`}],m={Flowcharts:_},O=()=>{const[r,n]=l.useState("All"),a=Object.keys(m),o=r==="All"?Object.values(m).flat():m[r],s=r==="All"?o:o.filter(c=>c.category===r),t=c=>{console.log(`Downloading ${c.title}`)},i=c=>{console.log(`Sharing ${c.title}`)};return e.jsxs("div",{className:"app",children:[e.jsx(w,{}),e.jsx(S,{categories:a,onSelectCategory:n}),e.jsx(P,{maps:s,onDownload:t,onShare:i})]})};y(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(O,{})}));
//# sourceMappingURL=index-BMdwEpAg.js.map
