_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("QeBL")}])},QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return ne}));var a=n("q1tI"),o=n("52DT"),r=n("tofy"),i=n("v7Hm"),l=n("rGDf"),c=n("oSKe"),s=n("sKyC"),u=n("4jWa"),d=n("CRla"),b=n("5+Am"),m=n("U6LL"),p=(e,t)=>{var n=a.useRef(!1);return a.useEffect((()=>{if(n.current)return e();n.current=!0}),t),n.current},f=n("KwD7"),v=n("epLR"),O=n("pr4h"),g=n("ZMKu"),h=n("2Ylp");function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var x=e=>null!=e&&parseInt(e.toString(),10)>0,y={exit:e=>j({},e.animateOpacity&&{opacity:x(e.startingHeight)?1:0},{height:e.startingHeight,transition:{height:{duration:.2,ease:h.a.ease},opacity:{duration:.3,ease:h.a.ease}}}),enter:e=>j({},e.animateOpacity&&{opacity:1},{height:e.endingHeight,transition:{height:{duration:.3,ease:h.a.ease},opacity:{duration:.4,ease:h.a.ease}}})},w=a.forwardRef(((e,t)=>{var{in:n,unmountOnExit:o,animateOpacity:r=!0,startingHeight:i=0,endingHeight:l="auto",style:c,className:s,onAnimationComplete:u}=e,d=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["in","unmountOnExit","animateOpacity","startingHeight","endingHeight","style","className","onAnimationComplete"]),b=0===i,[m,O]=a.useState(!!n),[h,w]=a.useState((()=>b&&!n&&!x(i)?"none":"block"));p((()=>{w("block"),O(!!n)}),[n]),i>0&&o&&Object(f.e)("startingHeight and unmountOnExit are mutually exclusive. You can't use them together");var C={startingHeight:i,endingHeight:l,animateOpacity:r},E=j({ref:t,onAnimationComplete:()=>{!m&&b&&w("none"),null==u||u()},className:Object(v.a)("chakra-collapse",s)},d,{variants:y,style:j({overflow:"hidden"},c),custom:C});return o?a.createElement(g.a,{initial:!1,custom:C},n&&a.createElement(g.b.div,j({},E,{initial:"exit",animate:"enter",exit:"exit"}))):a.createElement(g.b.div,j({},E,{style:j({},E.style,{display:h}),initial:!1,animate:m?"enter":"exit"}))}));O.a&&(w.displayName="Collapse");var C=n("JX03");function E(e,t){return void 0===t&&(t=[]),a.useEffect((()=>()=>e()),t)}var k=n("zlS4");function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}function S(e){var{context:t,element:n,index:o,disabled:r,focusable:i}=e,l=A(e,["context","element","index","disabled","focusable"]),c=function(){var e=a.useRef(!1),[t,n]=a.useState(0);return E((()=>{e.current=!0})),a.useCallback((()=>{e.current||n(t+1)}),[t])}(),{register:s,unregister:u,descendants:d}=t;return Object(k.a)((()=>{if(n||c(),!r||i)return s(_({element:n,disabled:r,focusable:i},l)),()=>{n&&u(n)}}),[n,r,i,...Object.values(l)]),null!=o?o:d.findIndex((e=>e.element===n))}function N(e){var{value:t,defaultValue:n,onChange:o}=e,r=function(e){var t=a.useRef(e);return Object(k.a)((()=>{t.current=e})),a.useCallback((function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return null==t.current?void 0:t.current(...n)}),[])}(o),[i,l]=a.useState(n),c=void 0!==t,s=c?t:i,u=a.useCallback((e=>{var t=Object(f.d)(e,s);c||l(t),r(t)}),[c,r,s]);return[s,u]}var I=!1,P=0,D=()=>++P;function M(e,t){var n=e||(I?D():null),[o,r]=a.useState(n);Object(k.a)((()=>{null===o&&r(D())}),[]),a.useEffect((()=>{!1===I&&(I=!0)}),[]);var i=null!=o?o.toString():void 0;return t?t+"-"+i:i}function q(e){return e instanceof HTMLElement}var H=e=>document.activeElement===e;function F(e,t){void 0===t&&(t={});var{isActive:n=H,preventScroll:a}=t;return n(e)?-1:requestAnimationFrame((()=>{e.focus({preventScroll:a}),function(e){return q(e)&&"input"===e.tagName.toLowerCase()&&"select"in e}(e)&&e.select()}))}function z(e,t){var{shouldFocus:n,preventScroll:a}=t;p((()=>{var t,o=e.current;o&&n&&(t=o,document.activeElement&&t.contains(document.activeElement)||F(o,{preventScroll:a}))}),[n,e,a])}var L=n("ypkU");function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}function U(e){var{onChange:t,defaultIndex:n,index:o,allowMultiple:r,allowToggle:i}=e,l=T(e,["onChange","defaultIndex","index","allowMultiple","allowToggle"]);!function(e){var t=e.index||e.defaultIndex,n=!Object(O.h)(t)&&!Object(O.b)(t)&&e.allowMultiple;Object(f.e)({condition:!!n,message:"If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: "+typeof t+","})}(e),function(e){Object(f.e)({condition:!(!e.allowMultiple||!e.allowToggle),message:"If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"})}(e);var c=function(){var[e,t]=Object(a.useState)([]),n=Object(a.useCallback)((e=>{var{element:n}=e,a=A(e,["element"]);n&&t((e=>{if(null==e.find((e=>e.element===n))){var t=e.findIndex((e=>!(!e.element||!n)&&Boolean(e.element.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_PRECEDING))),o=_({element:n},a);return-1===t?[...e,o]:[...e.slice(0,t),o,...e.slice(t)]}return e}))}),[]),o=Object(a.useCallback)((e=>{e&&t((t=>t.filter((t=>e!==t.element))))}),[]);return Object(a.useMemo)((()=>({descendants:e,register:n,unregister:o})),[e,n,o])}(),[s,u]=Object(a.useState)(-1);E((()=>{u(-1)}),[c.descendants]);var[d,b]=N({value:o,defaultValue:()=>r?null!=n?n:[]:null!=n?n:-1,onChange:t});return{index:d,setIndex:b,htmlProps:l,getAccordionItemProps:e=>{var t=!1;null!==e&&(t=Object(O.b)(d)?d.includes(e):d===e);return{isOpen:t,onChange:t=>{if(null!==e)if(r&&Object(O.b)(d)){var n=t?Object(L.a)(d,e):Object(L.f)(d,e);b(n)}else t?b(e):i&&b(-1)}}},focusedIndex:s,setFocusedIndex:u,domContext:c}}var[B,W]=Object(C.a)({name:"AccordionContext",errorMessage:"useAccordionContext: `context` is undefined. Seems you forgot to wrap the accordion components in `<Accordion />`"});function K(e){var{isDisabled:t,isFocusable:n,id:o}=e,r=T(e,["isDisabled","isFocusable","id"]),{getAccordionItemProps:i,domContext:l,focusedIndex:c,setFocusedIndex:s}=W(),{descendants:u}=l,d=Object(a.useRef)(null),[b,m]=function(e){for(var t=M(e),n=arguments.length,a=new Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];return a.map((e=>e+"-"+t))}(o,"accordion-button","accordion-panel");!function(e){Object(f.e)({condition:!(!e.isFocusable||e.isDisabled),message:"Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.\n    "})}(e);var p=S({element:d.current,context:l,disabled:t,focusable:n}),{isOpen:O,onChange:g}=i(-1===p?null:p);z(d,{shouldFocus:p===c});var h=Object(a.useCallback)((()=>{null==g||g(!O),s(p)}),[p,O,g,s]),j=Object(a.useCallback)((e=>{var t={ArrowDown:()=>{var e,t=Object(L.c)(p,u.length),n=u[t];null==n||null==(e=n.element)||e.focus()},ArrowUp:()=>{var e,t=Object(L.d)(p,u.length),n=u[t];null==n||null==(e=n.element)||e.focus()},Home:()=>{var e,t=u[0];null==t||null==(e=t.element)||e.focus()},End:()=>{var e,t=u[u.length-1];null==t||null==(e=t.element)||e.focus()}}[Object(v.c)(e)];t&&(e.preventDefault(),t(e))}),[u,p]),x=Object(a.useCallback)((()=>s(p)),[p,s]),y=Object(a.useCallback)((function(e,n){return void 0===e&&(e={}),void 0===n&&(n=null),R({},e,{type:"button",ref:Object(C.c)(d,n),id:b,disabled:!!t,"aria-expanded":!!O,"aria-controls":m,onClick:Object(f.a)(e.onClick,h),onFocus:Object(f.a)(e.onFocus,x),onKeyDown:Object(f.a)(e.onKeyDown,j)})}),[b,t,O,h,x,j,m]),w=Object(a.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),R({},e,{ref:t,role:"region",id:m,"aria-labelledby":b,hidden:!O})}),[b,O,m]);return{isOpen:O,isDisabled:t,isFocusable:n,onOpen:()=>{null==g||g(!0)},onClose:()=>{null==g||g(!1)},getButtonProps:y,getPanelProps:w,htmlProps:r}}function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function J(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}var X=Object(s.a)(((e,t)=>{var{children:n,reduceMotion:o}=e,r=J(e,["children","reduceMotion"]),i=Object(u.a)("Accordion",r),l=U(Object(d.b)(r)),{htmlProps:c}=l,s=J(l,["htmlProps"]),p=a.useMemo((()=>G({},s,{reduceMotion:!!o})),[s,o]);return a.createElement(B,{value:p},a.createElement(b.b,{value:i},a.createElement(m.a.div,G({ref:t},c,{className:Object(v.a)("chakra-accordion",r.className)}),n)))}));O.a&&(X.displayName="Accordion");var[Y,Q]=Object(C.a)({name:"AccordionItemContext",errorMessage:"useAccordionItemContext: `context` is undefined. Seems you forgot to wrap the accordion item parts in `<AccordionItem />` "}),V=Object(s.a)(((e,t)=>{var{children:n,className:o}=e,r=K(e),{htmlProps:i}=r,l=J(r,["htmlProps"]),c=G({},Object(b.c)().container,{overflowAnchor:"none"}),s=a.useMemo((()=>l),[l]);return a.createElement(Y,{value:s},a.createElement(m.a.div,G({ref:t},i,{className:Object(v.a)("chakra-accordion__item",o),__css:c}),Object(f.d)(n,{isExpanded:!!l.isOpen,isDisabled:!!l.isDisabled})))}));O.a&&(V.displayName="AccordionItem");var Z=Object(s.a)(((e,t)=>{var{getButtonProps:n}=Q(),o=n(e,t),r=G({display:"flex",alignItems:"center",width:"100%",transition:"all 0.2s",outline:0},Object(b.c)().button);return a.createElement(m.a.button,G({},o,{className:Object(v.a)("chakra-accordion__button",e.className),__css:r}))}));O.a&&(Z.displayName="AccordionButton");var $=Object(s.a)(((e,t)=>{var{reduceMotion:n}=W(),{getPanelProps:o,isOpen:r}=Q(),i=o(e,t),l=Object(v.a)("chakra-accordion__panel",e.className),c=Object(b.c)();n||delete i.hidden;var s=a.createElement(m.a.div,G({},i,{__css:c.panel,className:l}));return n?s:a.createElement(w,{in:r},s)}));O.a&&($.displayName="AccordionPanel");var ee=e=>{var{isOpen:t,isDisabled:n}=Q(),{reduceMotion:o}=W(),r={fontSize:"1.25em",opacity:n?.4:1,transform:t?"rotate(-180deg)":void 0,transition:o?void 0:"transform 0.2s",transformOrigin:"center"};return a.createElement(c.a,G({viewBox:"0 0 24 24","aria-hidden":!0,__css:r},e),a.createElement("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}))};O.a&&(ee.displayName="AccordionIcon");var te=n("AeFk"),ne=!0;t.default=function(){return Object(te.b)(o.a,null,Object(te.b)(r.a,{wrap:"wrap",padding:"1.5rem",color:"gray.900"},Object(te.b)(i.a,{w:{md:"66%",lg:"50%"},py:8,my:8,bgGradient:"linear(to-tl, #6ee7b7,#000)",borderRadius:"1em",backgroundClip:"text"},Object(te.b)(l.a,{fontSize:{base:"48px",md:"64px",lg:"76px"},bgGradient:"linear(to-tl, #6ee7b7,#000)",bgClip:"text"},"We help you to build your digital future.")),Object(te.b)(i.a,{w:"100%",py:"4rem"},Object(te.b)(X,{defaultIndex:[0],allowMultiple:!0},Object(te.b)(V,{borderColor:"black"},Object(te.b)(Z,{px:0},Object(te.b)(i.a,{flex:"1",textAlign:"left"},Object(te.b)(l.a,{fontSize:{base:"48px",md:"64px",lg:"76px"}},"Who We are")),Object(te.b)(ee,{boxSize:12})),Object(te.b)($,{pb:4,fontSize:{base:"24px",md:"64px",lg:"34px"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),Object(te.b)(V,{borderColor:"black"},Object(te.b)(Z,{px:0},Object(te.b)(i.a,{flex:"1",textAlign:"left"},Object(te.b)(l.a,{fontSize:{base:"48px",md:"64px",lg:"76px"}},"What We Do")),Object(te.b)(ee,{boxSize:12})),Object(te.b)($,{pb:4},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),Object(te.b)(V,{borderColor:"black"},Object(te.b)(Z,{px:0},Object(te.b)(i.a,{flex:"1",textAlign:"left"},Object(te.b)(l.a,{fontSize:{base:"48px",md:"64px",lg:"76px"}},"How We Do")),Object(te.b)(ee,{boxSize:12})),Object(te.b)($,{pb:4},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."))))))}}},[["/EDR",0,1,6,5,3,2,4,7]]]);
//# sourceMappingURL=index-73228b4d01d708309281.js.map