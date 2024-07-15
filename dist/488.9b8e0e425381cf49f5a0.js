"use strict";(self.webpackChunkmy_react_app=self.webpackChunkmy_react_app||[]).push([[488],{488:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(6540),i=a(7561),r=a(1867);const c=e=>{let{imageUrl:t,height:a,duration:i,currentImageIndex:c}=e;const l={hidden:{clipPath:"inset(50% 0 50% 0)",opacity:1},visible:{clipPath:"inset(0% 0 0% 0)",opacity:1,transition:{duration:i}}};return n.createElement(r.P.div,{className:"next-image",key:c,variants:l,initial:"hidden",animate:"visible",exit:"hidden",style:{backgroundImage:"url(".concat(t,")")}})},l=e=>{let{images:t,currentImageIndex:a}=e;return n.createElement("div",{className:"image-slider"},n.createElement("div",{className:"slider-container"},n.createElement("div",{className:"current-image",style:{backgroundImage:"url(".concat(t[a],")")}}),n.createElement(i.N,null,n.createElement(c,{imageUrl:t[(a+1)%t.length],height:"100%",duration:1.5,currentImageIndex:a}))))},m=e=>{let{images:t,currentImageIndex:a,nextImageIndex:l,slideDuration:m,goToNextImage:s}=e;const o={hidden:{pathLength:0,opacity:0},visible:e=>({pathLength:1,opacity:1,transition:{pathLength:{type:"smooth",duration:m/1e3,bounce:0,repeat:1/0,repeatType:"loop"},opacity:{duration:.01}}})};function d(e){return e<10?"0".concat(e):"".concat(e)}return n.createElement("div",{className:"next-preview-container"},n.createElement("div",{className:"next-preview"},n.createElement(r.P.div,{className:"next-image-preview",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5}},n.createElement(r.P.button,{className:"next-image-button",onClick:()=>{s()},initial:{fontSize:"1rem"},whileHover:{fontSize:"1.3rem"}},"Next"),n.createElement("div",{className:"next-image-container"},n.createElement("div",{className:"next-image-container-overlay"}),n.createElement("div",{className:"next-image",style:{backgroundImage:"url(".concat(t[l],")")}}),n.createElement(c,{imageUrl:t[l+1<=t.length-1?l+1:0],duration:1.5,currentImageIndex:a})),n.createElement(r.P.svg,{width:"143",height:"143",viewBox:"0 0 140 140",initial:"hidden",animate:"visible",className:"animated-svg"},n.createElement(r.P.rect,{width:"100%",height:"100%",strokeWidth:"15",fill:"none",stroke:"#fff",variants:o,custom:1,key:a})),n.createElement(r.P.div,{className:"image-slider-page-text",initial:{opacity:0},animate:{opacity:1},transition:{duration:.5,delay:.2}},n.createElement("div",null,n.createElement(i.N,{initial:!1},n.createElement(r.P.div,{key:a,initial:"initial",animate:"animate",exit:"exit",className:"current-slide-number",variants:{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}},transition:{duration:.5}},d(a+1))),n.createElement("div",{className:"slide-number-divider"}),n.createElement("div",{className:"total-slide-number"},d(t.length)))))))},s=["/images/img3.webp","/images/img1.webp","/images/img2.webp"],o=function(){const[e,t]=(0,n.useState)(0),[a,i]=(0,n.useState)(!1),[r,c]=(0,n.useState)(1);(0,n.useEffect)((()=>{const e=setTimeout((()=>{i(!0),setTimeout((()=>{i(!1),o()}),1e3)}),7e3);return()=>clearTimeout(e)}),[e,r]);const o=()=>{t((e=>e===s.length-1?0:e+1)),c((e=>e===s.length-1?0:e+1))};return n.createElement("section",{className:"hero-section"},n.createElement("div",{className:"hero-overlay"},n.createElement("div",{className:"hero-text-container"},n.createElement("p",{className:"hero-sub-title"},"Welcome To TenTwenty Farms"),n.createElement("p",{className:"hero-main-title"},"From our Farms",n.createElement("br",null),"to your hands"),n.createElement(m,{showBorderAnimation:a,images:s,nextImageIndex:r,goToNextImage:o,slideDuration:8e3,currentImageIndex:e}))),n.createElement(l,{images:s,currentImageIndex:e}))};var d=a(5902);const u=function(){return n.createElement(n.Fragment,null,n.createElement(d.mg,null,n.createElement("title",null,"TenTwenty")),n.createElement(o,null),n.createElement("section",null,n.createElement("div",{className:"secondary-section"},n.createElement("span",{className:"section-header"},"Quality Products"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),n.createElement("div",{className:"card-carousel-container"},n.createElement("img",{src:"/images/sec1.webp",className:"left-card"}),n.createElement("img",{src:"/images/sec2.webp",className:"center-card"}),n.createElement("img",{src:"/images/sec3.webp",className:"right-card"})),n.createElement("div",{className:"card-carousel-description"},n.createElement("span",null,"Client 1"),n.createElement("p",null,"Dubai, United Arab Emirates"))))}}}]);