_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"4BRi":function(e,n,r){"use strict";r.r(n),r.d(n,"__N_SSG",(function(){return C}));var t=r("q1tI"),a=r("52DT"),o=r("J3Rv"),c=r.n(o),i=r("sKyC"),l=r("U6LL"),u=r("BXwj"),s=r("pr4h"),f=r("epLR"),p=f.b?t.useLayoutEffect:t.useEffect;function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function b(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}var m=t.forwardRef(((e,n)=>{var{htmlWidth:r,htmlHeight:a,alt:o}=e,c=b(e,["htmlWidth","htmlHeight","alt"]);return t.createElement("img",d({width:r,height:a,ref:n,alt:o},c))})),O=Object(i.a)(((e,n)=>{var{fallbackSrc:r,fallback:a,src:o,align:c,fit:i,loading:s,ignoreFallback:f,crossOrigin:O}=e,g=b(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),v=null!=s||f,y=function(e){var{src:n,srcSet:r,onLoad:a,onError:o,crossOrigin:c,sizes:i,ignoreFallback:l}=e,[u,s]=Object(t.useState)("pending");Object(t.useEffect)((()=>{s(n?"loading":"pending")}),[n]);var f=Object(t.useRef)(),d=Object(t.useCallback)((()=>{if(n){b();var e=new Image;e.src=n,c&&(e.crossOrigin=c),r&&(e.srcset=r),i&&(e.sizes=i),e.onload=e=>{b(),s("loaded"),null==a||a(e)},e.onerror=e=>{b(),s("failed"),null==o||o(e)},f.current=e}}),[n,c,r,i,a,o]),b=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return p((()=>{if(!l)return"loading"===u&&d(),()=>{b()}}),[u,d,l]),l?"loaded":u}(d({},e,{ignoreFallback:v})),w=d({ref:n,objectFit:i,objectPosition:c},v?g:Object(u.h)(g,["onError","onLoad"]));return"loaded"!==y?a||t.createElement(l.a.img,d({as:m,className:"chakra-image__placeholder",src:r},w)):t.createElement(l.a.img,d({as:m,src:o,crossOrigin:O,loading:s,className:"chakra-image"},w))}));s.a&&(O.displayName="Image");var g=r("rGDf"),v=r("MAJE"),y=r("4jWa"),w=r("CRla");function j(){return(j=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var h=Object(i.a)(((e,n)=>{var r=Object(y.b)("Code",e),a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(Object(w.b)(e),["className"]);return t.createElement(l.a.code,j({ref:n,className:Object(f.a)("chakra-code",e.className)},a,{__css:j({display:"inline-block"},r)}))}));s.a&&(h.displayName="Code");var E=r("tofy"),k=r("teXn"),P=r("AeFk"),_={img:O,h1:g.a,p:v.a,inlineCode:h},C=!0;n.default=function(e){var n=e.mdxSource,r=n?c()(n,{components:_}):null,t=Object(k.a)();return Object(P.b)(a.a,{headProps:{seoTitle:null===t||void 0===t?void 0:t.page.title}},Object(P.b)(E.a,{wrap:"wrap",padding:"1.5rem",color:"gray.900"},Object(P.b)("div",{className:"wrapper"},r)))}},"7ljp":function(e,n,r){"use strict";r.r(n),r.d(n,"MDXContext",(function(){return s})),r.d(n,"MDXProvider",(function(){return d})),r.d(n,"mdx",(function(){return O})),r.d(n,"useMDXComponents",(function(){return p})),r.d(n,"withMDXComponents",(function(){return f}));var t=r("q1tI"),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),f=function(e){return function(n){var r=p(n.components);return a.a.createElement(e,c({},n,{components:r}))}},p=function(e){var n=a.a.useContext(s),r=n;return e&&(r="function"===typeof e?e(n):l(l({},n),e)),r},d=function(e){var n=p(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=p(r),f=t,d=s["".concat(c,".").concat(f)]||s[f]||b[f]||o;return r?a.a.createElement(d,l(l({ref:n},i),{},{components:r})):a.a.createElement(d,l({ref:n},i))}));function O(e,n){var r=arguments,t=n&&n.mdxType;if("string"===typeof e||t){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"===typeof e?e:t,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},J3Rv:function(e,n,r){r("aoOK");var t=r("q1tI"),a=r("7ljp");e.exports=function(e,n){var r=e.compiledSource,o=e.renderedOutput,c=e.scope||{},i=n&&n.components||{},l=n&&n.provider,u=t.useState(t.createElement("div",{dangerouslySetInnerHTML:{__html:o}})),s=u[0],f=u[1];return"undefined"===typeof window?s:(t.useEffect((function(){var e=window.requestIdleCallback((function(){var n=Object.assign({mdx:a.mdx},i,c),o=Object.keys(n),l=Object.values(n),u=Reflect.construct(Function,["React"].concat(o).concat(r+"\nreturn React.createElement(MDXContent, {});")),s=u.apply(u,[t].concat(l)),p=t.createElement(a.MDXProvider,{components:i},s);f(p),window.cancelIdleCallback(e)}))}),[r]),l?t.createElement(l.component,l.props||{},s):s)}},aoOK:function(e,n){"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)})},itEd:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[slug]",function(){return r("4BRi")}])}},[["itEd",0,1,6,5,3,2,4,7]]]);
//# sourceMappingURL=[slug]-bfd914baad2757d9d1ca.js.map