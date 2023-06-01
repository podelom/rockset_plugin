define(["@grafana/data","@grafana/runtime","react","@grafana/ui"],((e,t,r,n)=>(()=>{var o={539:(e,t,r)=>{var n=r(400).Symbol;e.exports=n},349:e=>{e.exports=function(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}},213:(e,t,r)=>{var n=r(701),o=r(900),a=r(785),c=r(854),i=r(383),u=r(519),s=Object.prototype.hasOwnProperty;e.exports=function(e,t){var r=a(e),l=!r&&o(e),p=!r&&!l&&c(e),y=!r&&!l&&!p&&u(e),f=r||l||p||y,b=f?n(e.length,String):[],m=b.length;for(var g in e)!t&&!s.call(e,g)||f&&("length"==g||p&&("offset"==g||"parent"==g)||y&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||i(g,m))||b.push(g);return b}},736:(e,t,r)=>{var n=r(539),o=r(840),a=r(258),c=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":c&&c in Object(e)?o(e):a(e)}},829:(e,t,r)=>{var n=r(736),o=r(360);e.exports=function(e){return o(e)&&"[object Arguments]"==n(e)}},729:(e,t,r)=>{var n=r(338),o=r(678),a=r(611),c=r(532),i=/^\[object .+?Constructor\]$/,u=Function.prototype,s=Object.prototype,l=u.toString,p=s.hasOwnProperty,y=RegExp("^"+l.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!a(e)||o(e))&&(n(e)?y:i).test(c(e))}},972:(e,t,r)=>{var n=r(736),o=r(194),a=r(360),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1,e.exports=function(e){return a(e)&&o(e.length)&&!!c[n(e)]}},464:(e,t,r)=>{var n=r(611),o=r(16),a=r(586),c=Object.prototype.hasOwnProperty;e.exports=function(e){if(!n(e))return a(e);var t=o(e),r=[];for(var i in e)("constructor"!=i||!t&&c.call(e,i))&&r.push(i);return r}},197:(e,t,r)=>{var n=r(137),o=r(871),a=r(132);e.exports=function(e,t){return a(o(e,t,n),e+"")}},459:(e,t,r)=>{var n=r(551),o=r(630),a=r(137),c=o?function(e,t){return o(e,"toString",{configurable:!0,enumerable:!1,value:n(t),writable:!0})}:a;e.exports=c},701:e=>{e.exports=function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}},334:e=>{e.exports=function(e){return function(t){return e(t)}}},937:(e,t,r)=>{var n=r(400)["__core-js_shared__"];e.exports=n},630:(e,t,r)=>{var n=r(822),o=function(){try{var e=n(Object,"defineProperty");return e({},"",{}),e}catch(e){}}();e.exports=o},120:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},822:(e,t,r)=>{var n=r(729),o=r(371);e.exports=function(e,t){var r=o(e,t);return n(r)?r:void 0}},840:(e,t,r)=>{var n=r(539),o=Object.prototype,a=o.hasOwnProperty,c=o.toString,i=n?n.toStringTag:void 0;e.exports=function(e){var t=a.call(e,i),r=e[i];try{e[i]=void 0;var n=!0}catch(e){}var o=c.call(e);return n&&(t?e[i]=r:delete e[i]),o}},371:e=>{e.exports=function(e,t){return null==e?void 0:e[t]}},383:e=>{var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,r){var n=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&t.test(e))&&e>-1&&e%1==0&&e<r}},535:(e,t,r)=>{var n=r(638),o=r(68),a=r(383),c=r(611);e.exports=function(e,t,r){if(!c(r))return!1;var i=typeof t;return!!("number"==i?o(r)&&a(t,r.length):"string"==i&&t in r)&&n(r[t],e)}},678:(e,t,r)=>{var n,o=r(937),a=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!a&&a in e}},16:e=>{var t=Object.prototype;e.exports=function(e){var r=e&&e.constructor;return e===("function"==typeof r&&r.prototype||t)}},586:e=>{e.exports=function(e){var t=[];if(null!=e)for(var r in Object(e))t.push(r);return t}},125:(e,t,r)=>{e=r.nmd(e);var n=r(120),o=t&&!t.nodeType&&t,a=o&&e&&!e.nodeType&&e,c=a&&a.exports===o&&n.process,i=function(){try{return a&&a.require&&a.require("util").types||c&&c.binding&&c.binding("util")}catch(e){}}();e.exports=i},258:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},871:(e,t,r)=>{var n=r(349),o=Math.max;e.exports=function(e,t,r){return t=o(void 0===t?e.length-1:t,0),function(){for(var a=arguments,c=-1,i=o(a.length-t,0),u=Array(i);++c<i;)u[c]=a[t+c];c=-1;for(var s=Array(t+1);++c<t;)s[c]=a[c];return s[t]=r(u),n(e,this,s)}}},400:(e,t,r)=>{var n=r(120),o="object"==typeof self&&self&&self.Object===Object&&self,a=n||o||Function("return this")();e.exports=a},132:(e,t,r)=>{var n=r(459),o=r(591)(n);e.exports=o},591:e=>{var t=Date.now;e.exports=function(e){var r=0,n=0;return function(){var o=t(),a=16-(o-n);if(n=o,a>0){if(++r>=800)return arguments[0]}else r=0;return e.apply(void 0,arguments)}}},532:e=>{var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},551:e=>{e.exports=function(e){return function(){return e}}},236:(e,t,r)=>{var n=r(197),o=r(638),a=r(535),c=r(893),i=Object.prototype,u=i.hasOwnProperty,s=n((function(e,t){e=Object(e);var r=-1,n=t.length,s=n>2?t[2]:void 0;for(s&&a(t[0],t[1],s)&&(n=1);++r<n;)for(var l=t[r],p=c(l),y=-1,f=p.length;++y<f;){var b=p[y],m=e[b];(void 0===m||o(m,i[b])&&!u.call(e,b))&&(e[b]=l[b])}return e}));e.exports=s},638:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},137:e=>{e.exports=function(e){return e}},900:(e,t,r)=>{var n=r(829),o=r(360),a=Object.prototype,c=a.hasOwnProperty,i=a.propertyIsEnumerable,u=n(function(){return arguments}())?n:function(e){return o(e)&&c.call(e,"callee")&&!i.call(e,"callee")};e.exports=u},785:e=>{var t=Array.isArray;e.exports=t},68:(e,t,r)=>{var n=r(338),o=r(194);e.exports=function(e){return null!=e&&o(e.length)&&!n(e)}},854:(e,t,r)=>{e=r.nmd(e);var n=r(400),o=r(714),a=t&&!t.nodeType&&t,c=a&&e&&!e.nodeType&&e,i=c&&c.exports===a?n.Buffer:void 0,u=(i?i.isBuffer:void 0)||o;e.exports=u},338:(e,t,r)=>{var n=r(736),o=r(611);e.exports=function(e){if(!o(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},194:e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},611:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},360:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},519:(e,t,r)=>{var n=r(972),o=r(334),a=r(125),c=a&&a.isTypedArray,i=c?o(c):n;e.exports=i},893:(e,t,r)=>{var n=r(213),o=r(464),a=r(68);e.exports=function(e){return a(e)?n(e,!0):o(e)}},714:e=>{e.exports=function(){return!1}},305:t=>{"use strict";t.exports=e},545:e=>{"use strict";e.exports=t},388:e=>{"use strict";e.exports=n},650:e=>{"use strict";e.exports=r}},a={};function c(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={id:e,loaded:!1,exports:{}};return o[e](r,r.exports,c),r.loaded=!0,r.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var r in t)c.o(t,r)&&!c.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),c.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.nmd=e=>(e.paths=[],e.children||(e.children=[]),e);var i={};return(()=>{"use strict";c.r(i),c.d(i,{plugin:()=>S});var e=c(305),t=c(545);function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class n extends t.DataSourceWithBackend{applyTemplateVariables(e,n){const o=(0,t.getTemplateSrv)();return a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}({},e),c=null!=(c={queryText:e.queryText?o.replace(e.queryText,n):""})?c:{},Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(c)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r}(Object(c)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(c,e))})),a;var a,c}constructor(e){super(e)}}var o=c(650),a=c.n(o),u=c(388);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}function p(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const{SecretFormField:y,FormField:f}=u.LegacyForms;class b extends o.PureComponent{render(){const{options:e}=this.props,{jsonData:t,secureJsonFields:r}=e,n=e.secureJsonData||{};return a().createElement("div",{className:"gf-form-group"},a().createElement("div",{className:"gf-form"},a().createElement(f,{label:"API server",labelWidth:6,inputWidth:20,onChange:this.onServerChange,value:t.server||"",placeholder:"api server (https://rockset.com/docs/rest-api/)","data-testid":"rockset api server configuration"})),a().createElement("div",{className:"gf-form-inline"},a().createElement("div",{className:"gf-form"},a().createElement(y,{isConfigured:r&&r.apiKey,value:n.apiKey||"",label:"API Key",placeholder:"Rockset API Key",labelWidth:6,inputWidth:64,onReset:this.onResetAPIKey,onChange:this.onAPIKeyChange,"data-testid":"rockset api key configuration"}))))}constructor(...e){super(...e),this.setServer=e=>{const{onOptionsChange:t,options:r}=this.props,n=p(l({},r.jsonData),{server:e});t(p(l({},r),{jsonData:n}))},this.onServerChange=e=>{this.setServer(e.target.value)},this.onAPIKeyChange=e=>{const{onOptionsChange:t,options:r}=this.props;t(p(l({},r),{secureJsonData:{apiKey:e.target.value}}))},this.onResetAPIKey=()=>{const{onOptionsChange:e,options:t}=this.props;e(p(l({},t),{secureJsonFields:p(l({},t.secureJsonFields),{apiKey:!1}),secureJsonData:p(l({},t.secureJsonData),{apiKey:""})}))}}}var m=c(236),g=c.n(m);const v={queryText:"-- sample query\nSELECT\n  TIME_BUCKET(MINUTES(5), _events._event_time) AS _event_time,\n  COUNT(_events.type) AS value\nFROM\n  commons._events\n-- you MUST specify a WHERE clause which scopes the query using :startTime and :stopTime\nWHERE\n  _events._event_time > :startTime AND\n  _events._event_time < :stopTime\nGROUP BY\n  _event_time\nORDER BY\n  _event_time",queryParamStart:":startTime",queryParamStop:":stopTime",queryTimeField:"_event_time",queryLabelColumn:""};function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){h(e,t,r[t])}))}return e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r}(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})),e}const{FormField:j}=u.LegacyForms;class P extends o.PureComponent{render(){const e=g()(this.props.query,v),{queryText:t,queryParamStart:r,queryParamStop:n,queryTimeField:o,queryLabelColumn:c}=e;return a().createElement(a().Fragment,null,a().createElement("div",{className:"gf-form"},a().createElement(j,{labelWidth:8,value:r||":startTime",onChange:this.onQueryParamStartChange,label:"Start Time",tooltip:"Name of the query parameter for the start time"}),a().createElement(j,{labelWidth:8,value:n||":stopTime",onChange:this.onQueryParamStopChange,label:"Stop Time",tooltip:"Name of the query parameter for the stop time"}),a().createElement(j,{labelWidth:8,value:o||"_event_time",onChange:this.onQueryTimeFieldChange,label:"Time Column",tooltip:"Name of the column containing the time series"}),a().createElement(j,{labelWidth:8,value:c||"",onChange:this.onQueryLabelColumnChange,label:"Label Column",tooltip:"Name of the column used to label the time series","data-testid":"rockset query label field"})),a().createElement("div",null,a().createElement(j,{labelWidth:8,label:"Query Text",tooltip:"Rockset SQL query to get the data. Must contain a WHERE clause which limits the query based on the startTime and stopTime.",inputEl:a().createElement(u.TextArea,{style:{height:"600px"},value:t||"",onChange:this.onQueryTextChange,"data-testid":"rockset query text field"})})))}constructor(...e){super(...e),this.onQueryTextChange=e=>{const{onChange:t,query:r}=this.props;t(d(O({},r),{queryText:e.target.value}))},this.onQueryParamStartChange=e=>{const{onChange:t,query:r,onRunQuery:n}=this.props;t(d(O({},r),{queryParamStart:e.target.value})),n()},this.onQueryParamStopChange=e=>{const{onChange:t,query:r,onRunQuery:n}=this.props;t(d(O({},r),{queryParamStop:e.target.value})),n()},this.onQueryTimeFieldChange=e=>{const{onChange:t,query:r,onRunQuery:n}=this.props;t(d(O({},r),{queryTimeField:e.target.value})),n()},this.onQueryLabelColumnChange=e=>{const{onChange:t,query:r,onRunQuery:n}=this.props;t(d(O({},r),{queryLabelColumn:e.target.value})),n()}}}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const S=new e.DataSourcePlugin(n).setConfigEditor(b).setQueryEditor(P).setVariableQueryEditor((({onChange:e,query:t})=>{const[r,n]=(0,o.useState)(t);return a().createElement(a().Fragment,null,a().createElement("div",{className:"gf-form"},a().createElement("span",{className:"gf-form-label width-10"},"Query"),a().createElement("input",{name:"rawQuery",className:"gf-form-input",onBlur:()=>{e(r,`${r.query}`)},onChange:e=>{return n((t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){x(e,t,r[t])}))}return e}({},r),o=null!=(o={[e.currentTarget.name]:e.currentTarget.value})?o:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r}(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})),t));var t,o},value:r.rawQuery})))}))})(),i})()));
//# sourceMappingURL=module.js.map