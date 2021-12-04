/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,t=(e,t,o=null)=>{for(;t!==o;){const o=t.nextSibling;e.removeChild(t),t=o}},o=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${o}--\x3e`,i=new RegExp(`${o}|${s}`);class n{constructor(e,t){this.parts=[],this.element=t;const s=[],n=[],a=document.createTreeWalker(t.content,133,null,!1);let c=0,h=-1,p=0;const{strings:u,values:{length:_}}=e;for(;p<_;){const e=a.nextNode();if(null!==e){if(h++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:o}=t;let s=0;for(let e=0;e<o;e++)r(t[e].name,"$lit$")&&s++;for(;s-- >0;){const t=u[p],o=l.exec(t)[2],s=o.toLowerCase()+"$lit$",n=e.getAttribute(s);e.removeAttribute(s);const r=n.split(i);this.parts.push({type:"attribute",index:h,name:o,strings:r}),p+=r.length-1}}"TEMPLATE"===e.tagName&&(n.push(e),a.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(o)>=0){const o=e.parentNode,n=t.split(i),a=n.length-1;for(let t=0;t<a;t++){let s,i=n[t];if(""===i)s=d();else{const e=l.exec(i);null!==e&&r(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),s=document.createTextNode(i)}o.insertBefore(s,e),this.parts.push({type:"node",index:++h})}""===n[a]?(o.insertBefore(d(),e),s.push(e)):e.data=n[a],p+=a}}else if(8===e.nodeType)if(e.data===o){const t=e.parentNode;null!==e.previousSibling&&h!==c||(h++,t.insertBefore(d(),e)),c=h,this.parts.push({type:"node",index:h}),null===e.nextSibling?e.data="":(s.push(e),h--),p++}else{let t=-1;for(;-1!==(t=e.data.indexOf(o,t+1));)this.parts.push({type:"node",index:-1}),p++}}else a.currentNode=n.pop()}for(const e of s)e.parentNode.removeChild(e)}}const r=(e,t)=>{const o=e.length-t.length;return o>=0&&e.slice(o)===t},a=e=>-1!==e.index,d=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function c(e,t){const{element:{content:o},parts:s}=e,i=document.createTreeWalker(o,133,null,!1);let n=p(s),r=s[n],a=-1,d=0;const l=[];let c=null;for(;i.nextNode();){a++;const e=i.currentNode;for(e.previousSibling===c&&(c=null),t.has(e)&&(l.push(e),null===c&&(c=e)),null!==c&&d++;void 0!==r&&r.index===a;)r.index=null!==c?-1:r.index-d,n=p(s,n),r=s[n]}l.forEach((e=>e.parentNode.removeChild(e)))}const h=e=>{let t=11===e.nodeType?0:1;const o=document.createTreeWalker(e,133,null,!1);for(;o.nextNode();)t++;return t},p=(e,t=-1)=>{for(let o=t+1;o<e.length;o++){const t=e[o];if(a(t))return o}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=new WeakMap,_=e=>"function"==typeof e&&u.has(e),g={},m={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class f{constructor(e,t,o){this.__parts=[],this.template=e,this.processor=t,this.options=o}update(e){let t=0;for(const o of this.__parts)void 0!==o&&o.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),o=[],s=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let n,r=0,d=0,l=i.nextNode();for(;r<s.length;)if(n=s[r],a(n)){for(;d<n.index;)d++,"TEMPLATE"===l.nodeName&&(o.push(l),i.currentNode=l.content),null===(l=i.nextNode())&&(i.currentNode=o.pop(),l=i.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,n.name,n.strings,this.options));r++}else this.__parts.push(void 0),r++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),y=` ${o} `;class v{constructor(e,t,o,s){this.strings=e,this.values=t,this.type=o,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let n=0;n<e;n++){const e=this.strings[n],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const a=l.exec(e);t+=null===a?e+(i?y:s):e.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+o}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==b&&(t=b.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=e=>null===e||!("object"==typeof e||"function"==typeof e),N=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class C{constructor(e,t,o){this.dirty=!0,this.element=e,this.name=t,this.strings=o,this.parts=[];for(let e=0;e<o.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new k(this)}_getValue(){const e=this.strings,t=e.length-1,o=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=o[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!N(e))return e}let s="";for(let i=0;i<t;i++){s+=e[i];const t=o[i];if(void 0!==t){const e=t.value;if(w(e)||!N(e))s+="string"==typeof e?e:String(e);else for(const t of e)s+="string"==typeof t?t:String(t)}}return s+=e[t],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class k{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===g||w(e)&&e===this.value||(this.value=e,_(e)||(this.committer.dirty=!0))}commit(){for(;_(this.value);){const e=this.value;this.value=g,e(this)}this.value!==g&&this.committer.commit()}}class S{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(d()),this.endNode=e.appendChild(d())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=d()),e.__insert(this.endNode=d())}insertAfterPart(e){e.__insert(this.startNode=d()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}const e=this.__pendingValue;e!==g&&(w(e)?e!==this.value&&this.__commitText(e):e instanceof v?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):N(e)?this.__commitIterable(e):e===m?(this.value=m,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,o="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof f&&this.value.template===t)this.value.update(e.values);else{const o=new f(t,e.processor,this.options),s=o._clone();o.update(e.values),this.__commitNode(s),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let o,s=0;for(const i of e)o=t[s],void 0===o&&(o=new S(this.options),t.push(o),0===s?o.appendIntoPart(this):o.insertAfterPart(t[s-1])),o.setValue(i),o.commit(),s++;s<t.length&&(t.length=s,this.clear(o&&o.endNode))}clear(e=this.startNode){t(this.startNode.parentNode,e.nextSibling,this.endNode)}}class x{constructor(e,t,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=o}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=g}}class E extends C{constructor(e,t,o){super(e,t,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new T(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class T extends k{}let A=!1;(()=>{try{const e={get capture(){return A=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class O{constructor(e,t,o){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=o,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;_(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=g,e(this)}if(this.__pendingValue===g)return;const e=this.__pendingValue,t=this.value,o=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),s=null!=e&&(null==t||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=P(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=g}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const P=e=>e&&(A?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function M(e){let t=L.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},L.set(e.type,t));let s=t.stringsArray.get(e.strings);if(void 0!==s)return s;const i=e.strings.join(o);return s=t.keyString.get(i),void 0===s&&(s=new n(e,e.getTemplateElement()),t.keyString.set(i,s)),t.stringsArray.set(e.strings,s),s}const L=new Map,I=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const R=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,o,s){const i=t[0];if("."===i){return new E(e,t.slice(1),o).parts}if("@"===i)return[new O(e,t.slice(1),s.eventContext)];if("?"===i)return[new x(e,t.slice(1),o)];return new C(e,t,o).parts}handleTextExpression(e){return new S(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const $=(e,...t)=>new v(e,t,"html",R)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,W=(e,t)=>`${e}--${t}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),B=!1);const F=e=>t=>{const s=W(t.type,e);let i=L.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},L.set(s,i));let r=i.stringsArray.get(t.strings);if(void 0!==r)return r;const a=t.strings.join(o);if(r=i.keyString.get(a),void 0===r){const o=t.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(o,e),r=new n(t,o),i.keyString.set(a,r)}return i.stringsArray.set(t.strings,r),r},H=["html","svg"],D=new Set,U=(e,t,o)=>{D.add(e);const s=o?o.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(s,e);const r=document.createElement("style");for(let e=0;e<n;e++){const t=i[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{H.forEach((t=>{const o=L.get(W(t,e));void 0!==o&&o.keyString.forEach((e=>{const{element:{content:t}}=e,o=new Set;Array.from(t.querySelectorAll("style")).forEach((e=>{o.add(e)})),c(e,o)}))}))})(e);const a=s.content;o?function(e,t,o=null){const{element:{content:s},parts:i}=e;if(null==o)return void s.appendChild(t);const n=document.createTreeWalker(s,133,null,!1);let r=p(i),a=0,d=-1;for(;n.nextNode();)for(d++,n.currentNode===o&&(a=h(t),o.parentNode.insertBefore(t,o));-1!==r&&i[r].index===d;){if(a>0){for(;-1!==r;)i[r].index+=a,r=p(i,r);return}r=p(i,r)}}(o,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const d=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==d)t.insertBefore(d.cloneNode(!0),t.firstChild);else if(o){a.insertBefore(r,a.firstChild);const e=new Set;e.add(r),c(o,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const q={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},j=(e,t)=>t!==e&&(t==t||e==e),V={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:j};class K extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach(((t,o)=>{const s=this._attributeNameForProperty(o,t);void 0!==s&&(this._attributeToPropertyMap.set(s,o),e.push(s))})),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach(((e,t)=>this._classProperties.set(t,e)))}}static createProperty(e,t=V){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const o="symbol"==typeof e?Symbol():`__${e}`,s=this.getPropertyDescriptor(e,o,t);void 0!==s&&Object.defineProperty(this.prototype,e,s)}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(s){const i=this[e];this[t]=s,this.requestUpdateInternal(e,i,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||V}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const o of t)this.createProperty(o,e[o])}}static _attributeNameForProperty(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,o=j){return o(e,t)}static _propertyValueFromAttribute(e,t){const o=t.type,s=t.converter||q,i="function"==typeof s?s:s.fromAttribute;return i?i(e,o):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const o=t.type,s=t.converter;return(s&&s.toAttribute||q.toAttribute)(e,o)}initialize(){this._updateState=0,this._updatePromise=new Promise((e=>this._enableUpdatingResolver=e)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((e,t)=>this[t]=e)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,o){t!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,t,o=V){const s=this.constructor,i=s._attributeNameForProperty(e,o);if(void 0!==i){const e=s._propertyValueToAttribute(t,o);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const o=this.constructor,s=o._attributeToPropertyMap.get(e);if(void 0!==s){const e=o.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=o._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,o){let s=!0;if(void 0!==e){const i=this.constructor;o=o||i.getPropertyOptions(e),i._valueHasChanged(this[e],t,o.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==o.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,o))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((e,t)=>this._propertyToAttribute(t,this[t],e))),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}K.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const z=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol();class J{constructor(e,t){if(t!==G)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(z?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const Y=(e,...t)=>{const o=t.reduce(((t,o,s)=>t+(e=>{if(e instanceof J)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+e[s+1]),e[0]);return new J(o,G)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const Z={};class Q extends K{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,o)=>e.reduceRight(((e,o)=>Array.isArray(o)?t(o,e):(e.add(o),e)),o),o=t(e,new Set),s=[];o.forEach((e=>s.unshift(e))),this._styles=s}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map((e=>{if(e instanceof CSSStyleSheet&&!z){const t=Array.prototype.slice.call(e.cssRules).reduce(((e,t)=>e+t.cssText),"");return new J(String(t),G)}return e}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?z?this.renderRoot.adoptedStyleSheets=e.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map((e=>e.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==Z&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)})))}render(){return Z}}Q.finalized=!0,Q.render=(e,o,s)=>{if(!s||"object"!=typeof s||!s.scopeName)throw new Error("The `scopeName` option is required.");const i=s.scopeName,n=I.has(o),r=B&&11===o.nodeType&&!!o.host,a=r&&!D.has(i),d=a?document.createDocumentFragment():o;if(((e,o,s)=>{let i=I.get(o);void 0===i&&(t(o,o.firstChild),I.set(o,i=new S(Object.assign({templateFactory:M},s))),i.appendInto(o)),i.setValue(e),i.commit()})(e,d,Object.assign({templateFactory:F(i)},s)),a){const e=I.get(d);I.delete(d);const s=e.value instanceof f?e.value.template:void 0;U(i,d,s),t(o,o.firstChild),o.appendChild(d),I.set(o,e)}!n&&r&&window.ShadyCSS.styleElement(o.host)};const X=new WeakMap;function ee(e){return t=>{if(function(e,t){let o=t;for(;o;){if(X.get(o)===e)return!0;o=Object.getPrototypeOf(o)}return!1}(e,t))return t;const o=e(t);return X.set(o,e),o}}class te{constructor(e){this._parent=e,this._cache=new Map}has(e){return!!(this._cache.has(e)||this._parent&&this._parent._cache.has(e))}set(e,t){return this._cache.set(e,t),this}get(e){return this._cache.get(e)||this._parent&&this._parent._cache.get(e)}}let oe=Math.round(1e5*Math.random());const se="-|\\.|[0-9]|[a-z]",ie=new RegExp(`[a-z](${se})*-(${se})*`),ne=(e,t)=>{const o=`${e}-${oe+=1}`;return((e,t)=>!!t.get(e))(o,t)?ne(e,t):o};function re(e,t=customElements){if(o=e,null===ie.exec(o))throw new Error("tagName is invalid");var o;return ne(e,t)}const ae=new WeakMap,de=(e,t)=>ae.set(t,e),le=(e,t,o=customElements)=>{de(e,t),o.define(e,class extends t{})},ce=(e,t,o)=>{const s=customElements;if(!(e=>Object.prototype.isPrototypeOf.call(HTMLElement,e))(t))return((e,t,o)=>{const s=re(e,t);if(!o)throw new Error("Lazy scoped elements requires the use of tags cache");return o.set(e,s),s})(e,s,o);if(t===customElements.get(e))return de(e,t),e;const i=re(e,s);return le(i,t,s),i};function he(e,t,o){return(e=>ae.get(e))(t)||o&&o.get(e)||ce(e,t,o)}const pe=new RegExp("<\\/?([a-z](-|\\.|[0-9]|[a-z])*-(-|\\.|[0-9]|[a-z])*)","g"),ue=new te,_e=(e,t,o,s)=>{const i=e.map((e=>{let o=e;const i=(e=>{const t=[];let o;for(;null!==(o=pe.exec(e));)t.push(o);return t})(e);for(let e=i.length-1;e>=0;e-=1){const n=i[e],[r,a]=n,d=he(a,t[a],s),l=n.index+r.length-a.length,c=l+a.length,h=0===r.indexOf("</");o=o.slice(0,l)+(h?d:`${d} data-tag-name="${a}"`)+o.slice(c)}return o}));return o.set(e,i),i};let ge=!0;const{ShadyCSS:me}=window;(void 0===me||void 0===me.prepareTemplateDom)&&(ge=!1);const fe=new WeakMap,be=new WeakMap,ye=e=>(be.has(e)||be.set(e,new te(be.get(e.constructor))),be.get(e)),ve=(e,t,o,s)=>e.map((e=>e instanceof v?we(e,t,o,s):Array.isArray(e)?ve(e,t,o,s):e)),we=(e,t,o,s)=>new v(function(e,t,o=ue,s){return o.get(e)||_e(e,t,o,s)}(e.strings,t,o,s),ve(e.values,t,o,s),e.type,e.processor),Ne=(e,t,s,i)=>r=>{const a=we(r,t,s,i);return(e=>t=>{const s=((e,t)=>`${e}--${t}`)(t.type,e);let i=L.get(s);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},L.set(s,i));let r=i.stringsArray.get(t.strings);if(void 0!==r)return r;const a=t.strings.join(o);if(r=i.keyString.get(a),void 0===r){const o=t.getTemplateElement();ge&&me.prepareTemplateDom(o,e),r=new n(t,o),i.keyString.set(a,r)}return i.stringsArray.set(t.strings,r),r})(e)(a)},Ce=ee((e=>class extends e{static get scopedElements(){return{}}static render(e,t,o){if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const{scopeName:s,eventContext:i}=o,n=(r=i,fe.has(r)||fe.set(r,new te(fe.get(r.constructor))),fe.get(r));var r;const a=ye(i),{scopedElements:d}=this;return super.render(e,t,{...o,templateFactory:Ne(s,d,n,a)})}defineScopedElement(e,t){return function(e,t,o){const s=o.get(e);s?void 0===customElements.get(s)&&le(s,t,customElements):o.set(e,he(e,t,o))}(e,t,ye(this))}static getScopedTagName(e){const t=this.scopedElements[e];return t?he(e,t,ye(this)):ye(this).get(e)}getScopedTagName(e){const t=this.constructor.scopedElements[e];return t?he(e,t,ye(this)):ye(this).get(e)}}));
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class ke{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const e of t)this.classes.add(e)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach((t=>e+=t+" ")),this.element.setAttribute("class",e)}}}const Se=new WeakMap,xe=(Ee=e=>t=>{if(!(t instanceof k)||t instanceof T||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:o}=t,{element:s}=o;let i=Se.get(t);void 0===i&&(s.setAttribute("class",o.strings.join(" ")),Se.set(t,i=new Set));const n=s.classList||new ke(s);i.forEach((t=>{t in e||(n.remove(t),i.delete(t))}));for(const t in e){const o=e[t];o!=i.has(t)&&(o?(n.add(t),i.add(t)):(n.remove(t),i.delete(t)))}"function"==typeof n.commit&&n.commit()},(...e)=>{const t=Ee(...e);return u.set(t,!0),t});var Ee;const Te=ee((e=>class extends e{static get properties(){return{disabled:{type:Boolean,reflect:!0}}}constructor(){super(),this.__requestedToBeDisabled=!1,this.__isUserSettingDisabled=!0,this.__restoreDisabledTo=!1,this.disabled=!1}makeRequestToBeDisabled(){!1===this.__requestedToBeDisabled&&(this.__requestedToBeDisabled=!0,this.__restoreDisabledTo=this.disabled,this.__internalSetDisabled(!0))}retractRequestToBeDisabled(){!0===this.__requestedToBeDisabled&&(this.__requestedToBeDisabled=!1,this.__internalSetDisabled(this.__restoreDisabledTo))}__internalSetDisabled(e){this.__isUserSettingDisabled=!1,this.disabled=e,this.__isUserSettingDisabled=!0}_requestUpdate(e,t){super._requestUpdate(e,t),"disabled"===e&&(this.__isUserSettingDisabled&&(this.__restoreDisabledTo=this.disabled),!1===this.disabled&&!0===this.__requestedToBeDisabled&&this.__internalSetDisabled(!0))}})),Ae=ee((e=>class extends(Te(e)){static get properties(){return{tabIndex:{type:Number,reflect:!0,attribute:"tabindex"}}}constructor(){super(),this.__isUserSettingTabIndex=!0,this.__restoreTabIndexTo=0,this.__internalSetTabIndex(0)}makeRequestToBeDisabled(){super.makeRequestToBeDisabled(),!1===this.__requestedToBeDisabled&&(this.__restoreTabIndexTo=this.tabIndex)}retractRequestToBeDisabled(){super.retractRequestToBeDisabled(),!0===this.__requestedToBeDisabled&&this.__internalSetTabIndex(this.__restoreTabIndexTo)}__internalSetTabIndex(e){this.__isUserSettingTabIndex=!1,this.tabIndex=e,this.__isUserSettingTabIndex=!0}_requestUpdate(e,t){super._requestUpdate(e,t),"disabled"===e&&(this.disabled?this.__internalSetTabIndex(-1):this.__internalSetTabIndex(this.__restoreTabIndexTo)),"tabIndex"===e&&(this.__isUserSettingTabIndex&&(this.__restoreTabIndexTo=this.tabIndex),-1!==this.tabIndex&&!0===this.__requestedToBeDisabled&&this.__internalSetTabIndex(-1))}firstUpdated(e){super.firstUpdated(e),this.disabled&&this.__internalSetTabIndex(-1)}})),Oe=ee((e=>class extends e{get slots(){return{}}constructor(){super(),this.__privateSlots=new Set(null)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._connectSlotMixin()}_connectSlotMixin(){this.__isConnectedSlotMixin||(Object.keys(this.slots).forEach((e=>{if(!this.querySelector(`[slot=${e}]`)){const t=(0,this.slots[e])();t instanceof Element&&(t.setAttribute("slot",e),this.appendChild(t),this.__privateSlots.add(e))}})),this.__isConnectedSlotMixin=!0)}_isPrivateSlot(e){return this.__privateSlots.has(e)}})),Pe=/Trident/.test(window.navigator.userAgent),Me=e=>32===e.keyCode||13===e.keyCode;class Le extends(Ae(Oe(Q))){static get properties(){return{role:{type:String,reflect:!0},active:{type:Boolean,reflect:!0},type:{type:String,reflect:!0}}}render(){return $`
      <div class="btn">
        <div class="click-area"></div>
        ${this._beforeTemplate()}
        ${Pe?$`
              <div id="${this._buttonId}"><slot></slot></div>
            `:$`
              <slot></slot>
            `}
        ${this._afterTemplate()}
        <slot name="_button"></slot>
      </div>
    `}_beforeTemplate(){return $``}_afterTemplate(){return $``}static get styles(){return[Y`
        :host {
          display: inline-block;
          padding-top: 2px;
          padding-bottom: 2px;
          min-height: 40px; /* src = https://www.smashingmagazine.com/2012/02/finger-friendly-design-ideal-mobile-touchscreen-target-sizes/ */
          outline: 0;
          background-color: transparent;
          box-sizing: border-box;
        }

        .btn {
          min-height: 24px;
          display: flex;
          align-items: center;
          position: relative;
          background: #eee; /* minimal styling to make it recognizable as btn */
          padding: 7px 15px;
          outline: none; /* focus style handled below, else it follows boundaries of click-area */
        }

        :host .btn ::slotted(button) {
          position: absolute;
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          overflow: hidden;
          white-space: nowrap;
          height: 1px;
          width: 1px;
        }

        .click-area {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: -3px -1px;
          padding: 0;
        }

        :host(:focus:not([disabled])) .btn {
          /* if you extend, please overwrite */
          outline: 2px solid #bde4ff;
        }

        :host(:hover) .btn {
          /* if you extend, please overwrite */
          background: #f4f6f7;
        }

        :host(:active) .btn, /* keep native :active to render quickly where possible */
        :host([active]) .btn /* use custom [active] to fix IE11 */ {
          /* if you extend, please overwrite */
          background: gray;
        }

        :host([disabled]) {
          pointer-events: none;
        }

        :host([disabled]) .btn {
          /* if you extend, please overwrite */
          background: lightgray;
          color: #adadad;
          fill: #adadad;
        }
      `]}get _nativeButtonNode(){return Array.from(this.children).find((e=>"_button"===e.slot))}get _form(){return this._nativeButtonNode.form}get slots(){return{...super.slots,_button:()=>(this.constructor._button||(this.constructor._button=document.createElement("button"),this.constructor._button.setAttribute("tabindex","-1"),this.constructor._button.setAttribute("aria-hidden","true")),this.constructor._button.cloneNode())}}constructor(){super(),this.role="button",this.type="submit",this.active=!1,this.__setupDelegationInConstructor(),Pe&&(this._buttonId=`button-${Math.random().toString(36).substr(2,10)}`,this.updateComplete.then((()=>this.setAttribute("aria-labelledby",this._buttonId))))}connectedCallback(){super.connectedCallback(),this.__setupEvents()}disconnectedCallback(){super.disconnectedCallback(),this.__teardownEvents()}updated(e){if(super.updated(e),e.has("type")){const e=this._nativeButtonNode;e&&(e.type=this.type)}}__clickDelegationHandler(e){if(("submit"===this.type||"reset"===this.type)&&e.target===this&&this._form){const e=document.createElement("button");e.type=this.type,this._form.appendChild(e),e.click(),this._form.removeChild(e)}}__setupDelegationInConstructor(){this.addEventListener("click",this.__clickDelegationHandler,!0)}__setupEvents(){this.addEventListener("mousedown",this.__mousedownHandler),this.addEventListener("keydown",this.__keydownHandler),this.addEventListener("keyup",this.__keyupHandler)}__teardownEvents(){this.removeEventListener("mousedown",this.__mousedownHandler),this.removeEventListener("keydown",this.__keydownHandler),this.removeEventListener("keyup",this.__keyupHandler)}__mousedownHandler(){this.active=!0;const e=()=>{this.active=!1,document.removeEventListener("mouseup",e)};document.addEventListener("mouseup",e)}__keydownHandler(e){if(this.active||!Me(e))return;(e=>32===e.keyCode)(e)&&e.preventDefault(),this.active=!0;const t=e=>{Me(e)&&(this.active=!1,document.removeEventListener("keyup",t,!0))};document.addEventListener("keyup",t,!0)}__keyupHandler(e){if(Me(e)){if(e.srcElement&&e.srcElement!==this)return;this.click()}}}const Ie=Y`#007ab9`,Re=Y`#8BC2DF`,$e=Y`#002D44`,We=Y`#BA1200`,Be=(Y`#F8E9E7`,Y`#440700`),Fe=Y`#0F100C`,He=Y`#E9E9E8`,De=Y`#020202`,Ue=Y`#FAFAFA`,qe=(Y`#E7F2F8`,Y`#7E8488`,Y`rgba(231, 242, 248, 0.7)`,Y`'Ubuntu Mono', sans-serif`),je=Y`0.25rem`;class Ve extends Le{static get styles(){return[...super.styles,Y`
        :host {
          font-family: ${qe};
        }
        .btn {
          background: ${Ie};
          color: ${Ue};
          padding: 0.5rem 0.75rem;
          border-radius: ${je};
          cursor: pointer;
        }

        :host([disabled]) .btn,
        :host([disabled][danger]) .btn {
          background: ${He};
          color: ${Fe};
          fill: ${Fe};
        }

        :host(:focus:not([disabled])) .btn {
          outline: 2px solid ${Re};
        }

        :host(:hover) .btn,
        :host(:active) .btn,
        :host([active]) .btn {
          background: ${$e};
        }

        :host([rounded]) .btn {
          border-radius: 50%;
          padding: 0.3rem 0.45rem;
        }

        ::slotted(svg) {
          fill: ${Ue};
        }

        :host([danger]) .btn {
          background: ${We};
          color: ${Ue};
        }

        :host(:hover[danger]) .btn,
        :host([active][danger]) .btn {
          background: ${Be};
        }
      `]}}class Ke extends Q{static get properties(){return{title:{type:String}}}static get styles(){return Y`
      :host {
        font-family: ${qe};
      }

      header {
        padding: 0.3rem;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid ${He};
      }

      .title {
        width: 100%;
        font-size: 1.5rem;
        line-height: 2.5rem;
        color: ${Ie};
        margin: 0;
      }
    `}render(){return $`
      <header>
        <h1 class="title" name="title">${this.title}</h1>
        <slot></slot>
      </header>
    `}}const ze=Y`
  .global-overlays {
    position: fixed;
    z-index: 200;
  }

  .global-overlays__overlay {
    pointer-events: auto;
  }

  .global-overlays__overlay-container {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .global-overlays__overlay-container--top-left {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .global-overlays__overlay-container--top {
    justify-content: center;
    align-items: flex-start;
  }

  .global-overlays__overlay-container--top-right {
    justify-content: flex-end;
    align-items: flex-start;
  }

  .global-overlays__overlay-container--right {
    justify-content: flex-end;
    align-items: center;
  }

  .global-overlays__overlay-container--bottom-left {
    justify-content: flex-start;
    align-items: flex-end;
  }

  .global-overlays__overlay-container--bottom {
    justify-content: center;
    align-items: flex-end;
  }

  .global-overlays__overlay-container--bottom-right {
    justify-content: flex-end;
    align-items: flex-end;
  }
  .global-overlays__overlay-container--left {
    justify-content: flex-start;
    align-items: center;
  }

  .global-overlays__overlay-container--center {
    justify-content: center;
    align-items: center;
  }

  .global-overlays__overlay--bottom-sheet {
    width: 100%;
  }

  .global-overlays .global-overlays__backdrop {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #333333;
    opacity: 0.3;
    display: none;
  }

  .global-overlays .global-overlays__backdrop--visible {
    display: block;
  }

  .global-overlays .global-overlays__backdrop--animation-in {
    animation: global-overlays-backdrop-fade-in 300ms;
  }

  .global-overlays .global-overlays__backdrop--animation-out {
    animation: global-overlays-backdrop-fade-out 300ms;
    opacity: 0;
  }

  @keyframes global-overlays-backdrop-fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes global-overlays-backdrop-fade-out {
    from {
      opacity: 0.3;
    }
  }

  body > *[inert] {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }

  body.global-overlays-scroll-lock {
    overflow: hidden;
  }

  body.global-overlays-scroll-lock-ios-fix {
    position: fixed;
    width: 100%;
  }
`,Ge=Symbol.for("lion::SingletonManagerClassStorage");const Je=new class{constructor(){this._map=window[Ge]?window[Ge]:window[Ge]=new Map}set(e,t){this.has(e)||this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}};const Ye=navigator.userAgent.match(/iPhone|iPad|iPod/i);class Ze{static __createGlobalRootNode(){const e=document.createElement("div");return e.classList.add("global-overlays"),document.body.appendChild(e),e}static __createGlobalStyleNode(){const e=document.createElement("style");return e.setAttribute("data-global-overlays",""),e.textContent=ze.cssText,document.head.appendChild(e),e}get globalRootNode(){return Ze.__globalRootNode||(Ze.__globalRootNode=Ze.__createGlobalRootNode(),Ze.__globalStyleNode=Ze.__createGlobalStyleNode()),Ze.__globalRootNode}get list(){return this.__list}get shownList(){return this.__shownList}constructor(){this.__list=[],this.__shownList=[],this.__siblingsInert=!1,this.__blockingMap=new WeakMap}add(e){if(this.list.find((t=>e===t)))throw new Error("controller instance is already added");return this.list.push(e),e}remove(e){if(!this.list.find((t=>e===t)))throw new Error("could not find controller to remove");this.__list=this.list.filter((t=>t!==e))}show(e){this.list.find((t=>e===t))&&this.hide(e),this.__shownList.unshift(e),Array.from(this.__shownList).reverse().forEach(((e,t)=>{e.elevation=t+1}))}hide(e){if(!this.list.find((t=>e===t)))throw new Error("could not find controller to hide");this.__shownList=this.shownList.filter((t=>t!==e))}teardown(){this.list.forEach((e=>{e.teardown()})),this.__list=[],this.__shownList=[],this.__siblingsInert=!1;const e=Ze.__globalRootNode;e&&(e.parentElement&&e.parentElement.removeChild(e),Ze.__globalRootNode=void 0,document.head.removeChild(Ze.__globalStyleNode),Ze.__globalStyleNode=void 0)}get siblingsInert(){return this.__siblingsInert}disableTrapsKeyboardFocusForAll(){this.shownList.forEach((e=>{!0===e.trapsKeyboardFocus&&e.disableTrapsKeyboardFocus&&e.disableTrapsKeyboardFocus({findNewTrap:!1})}))}informTrapsKeyboardFocusGotEnabled(e){!1===this.siblingsInert&&"global"===e&&(Ze.__globalRootNode&&function(e){const t=e.parentElement?.children;for(let o=0;o<t.length;o+=1){const s=t[o];s!==e&&(s.setAttribute("inert",""),s.setAttribute("aria-hidden","true"))}}(this.globalRootNode),this.__siblingsInert=!0)}informTrapsKeyboardFocusGotDisabled({disabledCtrl:e,findNewTrap:t=!0}={}){const o=this.shownList.find((t=>t!==e&&!0===t.trapsKeyboardFocus));o?t&&o.enableTrapsKeyboardFocus():!0===this.siblingsInert&&(Ze.__globalRootNode&&function(e){const t=e.parentElement?.children;for(let o=0;o<t.length;o+=1){const s=t[o];s!==e&&(s.removeAttribute("inert"),s.removeAttribute("aria-hidden"))}}(this.globalRootNode),this.__siblingsInert=!1)}requestToPreventScroll(){document.body.classList.add("global-overlays-scroll-lock"),Ye&&document.body.classList.add("global-overlays-scroll-lock-ios-fix")}requestToEnableScroll(){this.shownList.some((e=>!0===e.preventsScroll))||(document.body.classList.remove("global-overlays-scroll-lock"),Ye&&document.body.classList.remove("global-overlays-scroll-lock-ios-fix"))}requestToShowOnly(e){const t=this.shownList.filter((t=>t!==e));t.map((e=>e.hide())),this.__blockingMap.set(e,t)}retractRequestToShowOnly(e){if(this.__blockingMap.has(e)){this.__blockingMap.get(e).map((e=>e.show()))}}}Ze.__globalRootNode=void 0,Ze.__globalStyleNode=void 0;let Qe=Je.get("@lion/overlays::overlays::0.15.x")||new Ze;function Xe(){let e=document.activeElement||document.body;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}const et=({visibility:e,display:t})=>"hidden"!==e&&"none"!==t;function tt(e,t){const o=Math.max(e.tabIndex,0),s=Math.max(t.tabIndex,0);return 0===o||0===s?s>o:o>s}function ot(e){const t=e.length;if(t<2)return e;const o=Math.ceil(t/2);return function(e,t){const o=[];for(;e.length>0&&t.length>0;)tt(e[0],t[0])?o.push(t.shift()):o.push(e.shift());return[...o,...e,...t]}(ot(e.slice(0,o)),ot(e.slice(o)))}const st="matches"in Element.prototype?"matches":"msMatchesSelector";function it(e){return function(e){return e[st]("input, select, textarea, button, object")?e[st](":not([disabled])"):e[st]("a[href], area[href], iframe, [tabindex], [contentEditable]")}(e)?Number(e.getAttribute("tabindex")||0):-1}function nt(e){return e.nodeType===Node.ELEMENT_NODE&&("slot"===e.localName||function(e){return!!(e&&e.isConnected&&et(e.style)&&et(window.getComputedStyle(e))&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length))}(e))}function rt(e,t){if(!nt(e))return!1;const o=e,s=it(o);let i=s>0;s>=0&&t.push(o);const n=function(e){if("slot"===e.localName)return e.assignedNodes({flatten:!0});const{children:t}=e.shadowRoot||e;return t||[]}(o);for(let e=0;e<n.length;e+=1)i=rt(n[e],t)||i;return i}function at(e){const t=[];return rt(e,t)?ot(t):t}function dt(e,t){let o=e.contains(t);if(o)return!0;return!!(e instanceof HTMLElement&&e.shadowRoot&&(o=dt(e.shadowRoot,t),o))||(function e(s){for(let i=0;i<s.children.length;i+=1){const n=s.children[i];if(n.shadowRoot&&dt(n.shadowRoot,t)){o=!0;break}n.children.length>0&&e(n)}}(e),o)}const lt=9;function ct(e){const t=at(e),o=t.find((e=>e.hasAttribute("autofocus")))||e;let s;function i(t){t.keyCode===lt&&function(e,t){const o=at(e);let s;s=o.length>=2?[o[0],o[o.length-1]]:1===o.length?[o[0],o[0]]:[e,e],t.shiftKey&&s.reverse();const[i,n]=s,r=Xe();r===e||o.includes(r)&&n!==r||(t.preventDefault(),i.focus())}(e,t)}function n({resetToRoot:o=!1}={}){if(dt(e,Xe()))return;let i;i=o?e:t[s.compareDocumentPosition(document.activeElement)===Node.DOCUMENT_POSITION_PRECEDING?0:t.length-1],i&&i.focus()}function r(){window.removeEventListener("focusin",r),n()}function a(){setTimeout((()=>{dt(e,Xe())||n({resetToRoot:!0})})),window.addEventListener("focusin",r)}return o===e&&(e.tabIndex=-1,e.style.setProperty("outline","none")),o.focus(),window.addEventListener("keydown",i),window.addEventListener("focusout",a),s=document.createElement("div"),s.style.display="none",e.insertBefore(s,e.children[0]),{disconnect:function(){window.removeEventListener("keydown",i),window.removeEventListener("focusin",r),window.removeEventListener("focusout",a),e.removeChild(s),e.style.removeProperty("outline")}}}const ht=window.CSS&&CSS.number;class pt extends class{constructor(){const e=document.createDocumentFragment();this.addEventListener=(t,o,s)=>e.addEventListener(t,o,s),this.removeEventListener=(t,o,s)=>e.removeEventListener(t,o,s),this.dispatchEvent=t=>e.dispatchEvent(t)}}{constructor(e={},t=Qe){if(super(),this.manager=t,this.__sharedConfig=e,this._defaultConfig={placementMode:void 0,contentNode:e.contentNode,contentWrapperNode:e.contentWrapperNode,invokerNode:e.invokerNode,backdropNode:e.backdropNode,referenceNode:void 0,elementToFocusAfterHide:e.invokerNode,inheritsReferenceWidth:"none",hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,invokerRelation:"description",handlesAccessibility:!1,popperConfig:{placement:"top",positionFixed:!1,modifiers:{keepTogether:{enabled:!1},preventOverflow:{enabled:!0,boundariesElement:"viewport",padding:8},flip:{boundariesElement:"viewport",padding:16},offset:{enabled:!0,offset:"0, 8px"},arrow:{enabled:!1}}},viewportConfig:{placement:"center"}},this.manager.add(this),this._contentId=`overlay-content--${Math.random().toString(36).substr(2,10)}`,this.__originalAttrs=new Map,this._defaultConfig.contentNode){if(!this._defaultConfig.contentNode.isConnected)throw new Error('[OverlayController] Could not find a render target, since the provided contentNode is not connected to the DOM. Make sure that it is connected, e.g. by doing "document.body.appendChild(contentNode)", before passing it on.');this.__isContentNodeProjected=Boolean(this._defaultConfig.contentNode.assignedSlot)}this.updateConfig(e),this.__hasActiveTrapsKeyboardFocus=!1,this.__hasActiveBackdrop=!0,this.__backdropNodeToBeTornDown=void 0,this.__escKeyHandler=this.__escKeyHandler.bind(this)}get invoker(){return this.invokerNode}get content(){return this.contentWrapperNode}get placementMode(){return this.config?.placementMode}get invokerNode(){return this.config?.invokerNode}get referenceNode(){return this.config?.referenceNode}get contentNode(){return this.config?.contentNode}get contentWrapperNode(){return this.__contentWrapperNode||this.config?.contentWrapperNode}get backdropNode(){return this.__backdropNode||this.config?.backdropNode}get elementToFocusAfterHide(){return this.__elementToFocusAfterHide||this.config?.elementToFocusAfterHide}get hasBackdrop(){return!!this.backdropNode||this.config?.hasBackdrop}get isBlocking(){return this.config?.isBlocking}get preventsScroll(){return this.config?.preventsScroll}get trapsKeyboardFocus(){return this.config?.trapsKeyboardFocus}get hidesOnEsc(){return this.config?.hidesOnEsc}get hidesOnOutsideClick(){return this.config?.hidesOnOutsideClick}get hidesOnOutsideEsc(){return this.config?.hidesOnOutsideEsc}get inheritsReferenceWidth(){return this.config?.inheritsReferenceWidth}get handlesAccessibility(){return this.config?.handlesAccessibility}get isTooltip(){return this.config?.isTooltip}get invokerRelation(){return this.config?.invokerRelation}get popperConfig(){return this.config?.popperConfig}get viewportConfig(){return this.config?.viewportConfig}get _renderTarget(){return"global"===this.placementMode?this.manager.globalRootNode:this.__isContentNodeProjected?this.__originalContentParent?.getRootNode().host:this.__originalContentParent}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(e){this.contentWrapperNode&&(this.contentWrapperNode.style.zIndex=e),this.backdropNode&&(this.backdropNode.style.zIndex=e)}get elevation(){return Number(this.contentWrapperNode?.style.zIndex)}updateConfig(e){this.teardown(),this.__prevConfig=this.config||{},this.config={...this._defaultConfig,...this.__sharedConfig,...e,popperConfig:{...this._defaultConfig.popperConfig||{},...this.__sharedConfig.popperConfig||{},...e.popperConfig||{},modifiers:{...this._defaultConfig.popperConfig&&this._defaultConfig.popperConfig.modifiers||{},...this.__sharedConfig.popperConfig&&this.__sharedConfig.popperConfig.modifiers||{},...e.popperConfig&&e.popperConfig.modifiers||{}}}},this.__validateConfiguration(this.config),this._init({cfgToAdd:e}),this.__elementToFocusAfterHide=void 0}__validateConfiguration(e){if(!e.placementMode)throw new Error('[OverlayController] You need to provide a .placementMode ("global"|"local")');if(!["global","local"].includes(e.placementMode))throw new Error(`[OverlayController] "${e.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!e.contentNode)throw new Error("[OverlayController] You need to provide a .contentNode");if(this.__isContentNodeProjected&&!e.contentWrapperNode)throw new Error("[OverlayController] You need to provide a .contentWrapperNode when .contentNode is projected");if(e.isTooltip&&"local"!==e.placementMode)throw new Error('[OverlayController] .isTooltip should be configured with .placementMode "local"');if(e.isTooltip&&!e.handlesAccessibility)throw new Error("[OverlayController] .isTooltip only takes effect when .handlesAccessibility is enabled")}_init({cfgToAdd:e}){this.__initContentWrapperNode({cfgToAdd:e}),this.__initConnectionTarget(),"local"===this.placementMode&&(pt.popperModule||(pt.popperModule=async function(){return import("./popper.min-e00631c7.js")}())),this._handleFeatures({phase:"init"})}__initConnectionTarget(){if(this.contentWrapperNode!==this.__prevConfig?.contentWrapperNode&&("global"!==this.config?.placementMode&&this.__isContentNodeProjected||this.contentWrapperNode.appendChild(this.contentNode)),this._renderTarget)if(this.__isContentNodeProjected&&"local"===this.placementMode)this._renderTarget.appendChild(this.contentNode);else{const e=this._renderTarget===this.contentWrapperNode.parentNode,t=this.contentWrapperNode.contains(this._renderTarget);e||t||this._renderTarget.appendChild(this.contentWrapperNode)}}__initContentWrapperNode({cfgToAdd:e}){this.config?.contentWrapperNode&&"local"===this.placementMode?this.__contentWrapperNode=this.config.contentWrapperNode:this.__contentWrapperNode=document.createElement("div"),this.contentWrapperNode.style.cssText="",this.contentWrapperNode.style.display="none","absolute"===getComputedStyle(this.contentNode).position&&(this.contentNode.style.position="static"),this.__isContentNodeProjected&&this.contentWrapperNode.isConnected?this.__originalContentParent=this.contentWrapperNode.parentNode:e.contentNode&&e.contentNode.isConnected&&(this.__originalContentParent=this.contentNode?.parentNode)}_handleZIndex({phase:e}){if("local"===this.placementMode&&"setup"===e){const e=Number(getComputedStyle(this.contentNode).zIndex);(e<1||Number.isNaN(e))&&(this.contentWrapperNode.style.zIndex="1")}}__setupTeardownAccessibility({phase:e}){"init"===e?(this.__storeOriginalAttrs(this.contentNode,["role","id"]),this.invokerNode&&this.__storeOriginalAttrs(this.invokerNode,["aria-expanded","aria-labelledby","aria-describedby"]),this.contentNode.id||this.contentNode.setAttribute("id",this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute("label"===this.invokerRelation?"aria-labelledby":"aria-describedby",this._contentId),this.contentNode.setAttribute("role","tooltip")):(this.invokerNode&&this.invokerNode.setAttribute("aria-expanded",`${this.isShown}`),this.contentNode.getAttribute("role")||this.contentNode.setAttribute("role","dialog"))):"teardown"===e&&this.__restoreOriginalAttrs()}__storeOriginalAttrs(e,t){const o={};t.forEach((t=>{o[t]=e.getAttribute(t)})),this.__originalAttrs.set(e,o)}__restoreOriginalAttrs(){for(const[e,t]of this.__originalAttrs)Object.entries(t).forEach((([t,o])=>{null!==o?e.setAttribute(t,o):e.removeAttribute(t)}));this.__originalAttrs.clear()}get isShown(){return Boolean("none"!==this.contentWrapperNode.style.display)}async show(e=this.elementToFocusAfterHide){if(this._showComplete&&await this._showComplete,this._showComplete=new Promise((e=>{this._showResolve=e})),this.manager&&this.manager.show(this),this.isShown)return void this._showResolve();const t=new CustomEvent("before-show",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||(this.contentWrapperNode.style.display="",this._keepBodySize({phase:"before-show"}),await this._handleFeatures({phase:"show"}),this._keepBodySize({phase:"show"}),await this._handlePosition({phase:"show"}),this.__elementToFocusAfterHide=e,this.dispatchEvent(new Event("show")),await this._transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode})),this._showResolve()}async _handlePosition({phase:e}){if("global"===this.placementMode){const t="show"===e?"add":"remove",o=`global-overlays__overlay-container--${this.viewportConfig.placement}`;this.contentWrapperNode.classList[t]("global-overlays__overlay-container"),this.contentWrapperNode.classList[t](o),this.contentNode.classList[t]("global-overlays__overlay")}else"local"===this.placementMode&&"show"===e&&(await this.__createPopperInstance(),this._popper.update())}_keepBodySize({phase:e}){switch(e){case"before-show":this.__bodyClientWidth=document.body.clientWidth,this.__bodyClientHeight=document.body.clientHeight,this.__bodyMarginRight=0,this.__bodyMarginBottom=0;break;case"show":{if(ht)this.__bodyMarginRight=document.body.computedStyleMap().get("margin-right").value,this.__bodyMarginBottom=document.body.computedStyleMap().get("margin-bottom").value;else if(window.getComputedStyle){const e=window.getComputedStyle(document.body);e&&(this.__bodyMarginRight=parseInt(e.getPropertyValue("margin-right"),10),this.__bodyMarginBottom=parseInt(e.getPropertyValue("margin-bottom"),10))}const e=document.body.clientWidth-this.__bodyClientWidth,t=document.body.clientHeight-this.__bodyClientHeight,o=this.__bodyMarginRight+e,s=this.__bodyMarginBottom+t;ht?(document.body.attributeStyleMap.set("margin-right",CSS.px(o)),document.body.attributeStyleMap.set("margin-bottom",CSS.px(s))):(document.body.style.marginRight=`${o}px`,document.body.style.marginBottom=`${s}px`);break}case"hide":ht?(document.body.attributeStyleMap.set("margin-right",CSS.px(this.__bodyMarginRight)),document.body.attributeStyleMap.set("margin-bottom",CSS.px(this.__bodyMarginBottom))):(document.body.style.marginRight=`${this.__bodyMarginRight}px`,document.body.style.marginBottom=`${this.__bodyMarginBottom}px`)}}async hide(){if(this._hideComplete=new Promise((e=>{this._hideResolve=e})),this.manager&&this.manager.hide(this),!this.isShown)return void this._hideResolve();const e=new CustomEvent("before-hide",{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(await this._transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),this.contentWrapperNode.style.display="none",this._handleFeatures({phase:"hide"}),this._keepBodySize({phase:"hide"}),this.dispatchEvent(new Event("hide")),this._restoreFocus()),this._hideResolve()}async transitionHide(e){}async _transitionHide(e){if(await this.transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),e.backdropNode){let t;e.backdropNode.classList.remove(`${this.placementMode}-overlays__backdrop--animation-in`),e.backdropNode.classList.add(`${this.placementMode}-overlays__backdrop--animation-out`),this.__backdropAnimation=new Promise((o=>{t=()=>{e.backdropNode&&(e.backdropNode.classList.remove(`${this.placementMode}-overlays__backdrop--animation-out`),e.backdropNode.classList.remove(`${this.placementMode}-overlays__backdrop--visible`),e.backdropNode.removeEventListener("animationend",t)),o()}})),e.backdropNode.addEventListener("animationend",t)}}async transitionShow(e){}async _transitionShow(e){await this.transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode}),e.backdropNode&&e.backdropNode.classList.add(`${this.placementMode}-overlays__backdrop--animation-in`)}_restoreFocus(){this.elementToFocusAfterHide?this.elementToFocusAfterHide.focus():document.activeElement&&this.__contentWrapperNode?.contains(document.activeElement)&&document.activeElement.blur()}async toggle(){return this.isShown?this.hide():this.show()}_handleFeatures({phase:e}){this._handleZIndex({phase:e}),this.preventsScroll&&this._handlePreventsScroll({phase:e}),this.isBlocking&&this._handleBlocking({phase:e}),this.hasBackdrop&&this._handleBackdrop({phase:e}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:e}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:e}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:e}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:e}),this.handlesAccessibility&&this._handleAccessibility({phase:e}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth()}_handlePreventsScroll({phase:e}){switch(e){case"show":this.manager.requestToPreventScroll();break;case"hide":this.manager.requestToEnableScroll()}}_handleBlocking({phase:e}){switch(e){case"show":this.manager.requestToShowOnly(this);break;case"hide":this.manager.retractRequestToShowOnly(this)}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({phase:e}){switch(e){case"init":{this.backdropNode||(this.__backdropNode=document.createElement("div"),this.backdropNode.slot="backdrop",this.backdropNode.classList.add(`${this.placementMode}-overlays__backdrop`));let e=this.contentNode.parentNode,t=this.contentNode;"global"===this.placementMode&&(e=this.contentWrapperNode.parentElement,t=this.contentWrapperNode),e.insertBefore(this.backdropNode,t);break}case"show":this.backdropNode.classList.add(`${this.placementMode}-overlays__backdrop--visible`),this.__hasActiveBackdrop=!0;break;case"hide":if(!this.backdropNode)return;this.__hasActiveBackdrop=!1;break;case"teardown":if(!this.backdropNode||!this.backdropNode.parentNode)return;this.__backdropAnimation?(this.__backdropNodeToBeTornDown=this.backdropNode,this.__backdropAnimation.then((()=>{this.__backdropNodeToBeTornDown&&this.__backdropNodeToBeTornDown.parentNode.removeChild(this.__backdropNodeToBeTornDown)}))):this.backdropNode.parentNode.removeChild(this.backdropNode),this.__backdropNode=void 0}}get hasActiveTrapsKeyboardFocus(){return this.__hasActiveTrapsKeyboardFocus}_handleTrapsKeyboardFocus({phase:e}){"show"===e?this.enableTrapsKeyboardFocus():"hide"!==e&&"teardown"!==e||this.disableTrapsKeyboardFocus()}enableTrapsKeyboardFocus(){this.__hasActiveTrapsKeyboardFocus||(this.manager&&this.manager.disableTrapsKeyboardFocusForAll(),this._containFocusHandler=ct(this.contentNode),this.__hasActiveTrapsKeyboardFocus=!0,this.manager&&this.manager.informTrapsKeyboardFocusGotEnabled(this.placementMode))}disableTrapsKeyboardFocus({findNewTrap:e=!0}={}){this.__hasActiveTrapsKeyboardFocus&&(this._containFocusHandler&&(this._containFocusHandler.disconnect(),this._containFocusHandler=void 0),this.__hasActiveTrapsKeyboardFocus=!1,this.manager&&this.manager.informTrapsKeyboardFocusGotDisabled({disabledCtrl:this,findNewTrap:e}))}__escKeyHandler(e){return"Escape"===e.key&&this.hide()}_handleHidesOnEsc({phase:e}){"show"===e?(this.contentNode.addEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener("keyup",this.__escKeyHandler)):"hide"===e&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener("keyup",this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:e}){"show"===e?(this.__escKeyHandler=e=>"Escape"===e.key&&this.hide(),document.addEventListener("keyup",this.__escKeyHandler)):"hide"===e&&document.removeEventListener("keyup",this.__escKeyHandler)}_handleInheritsReferenceWidth(){if(!this._referenceNode||"global"===this.placementMode)return;const e=`${this._referenceNode.getBoundingClientRect().width}px`;switch(this.inheritsReferenceWidth){case"max":this.contentWrapperNode.style.maxWidth=e;break;case"full":this.contentWrapperNode.style.width=e;break;case"min":this.contentWrapperNode.style.minWidth=e,this.contentWrapperNode.style.width="auto"}}_handleHidesOnOutsideClick({phase:e}){const t="show"===e?"addEventListener":"removeEventListener";if("show"===e){let e=!1,t=!1;this.__preventCloseOutsideClick=()=>{e&&(t=!0),e=!0,setTimeout((()=>{e=!1,setTimeout((()=>{t=!1}))}))},this.__onCaptureHtmlClick=()=>{setTimeout((()=>{!1!==e||t||this.hide()}))}}this.contentWrapperNode[t]("click",this.__preventCloseOutsideClick,!0),this.invokerNode&&this.invokerNode[t]("click",this.__preventCloseOutsideClick,!0),document.documentElement[t]("click",this.__onCaptureHtmlClick,!0)}_handleAccessibility({phase:e}){"init"!==e&&"teardown"!==e||this.__setupTeardownAccessibility({phase:e}),this.invokerNode&&!this.isTooltip&&this.invokerNode.setAttribute("aria-expanded",`${"show"===e}`)}teardown(){this._handleFeatures({phase:"teardown"}),"global"===this.placementMode&&this.__isContentNodeProjected&&this.__originalContentParent.appendChild(this.contentNode),this._teardownContentWrapperNode()}_teardownContentWrapperNode(){"global"===this.placementMode&&this.contentWrapperNode&&this.contentWrapperNode.parentNode&&this.contentWrapperNode.parentNode.removeChild(this.contentWrapperNode)}async __createPopperInstance(){this._popper&&(this._popper.destroy(),this._popper=void 0);const{default:e}=await pt.popperModule;this._popper=new e(this._referenceNode,this.contentWrapperNode,{...this.config?.popperConfig})}}function ut(e,t){if("object"!=typeof e||"object"!=typeof e)return e===t;const o=Object.keys(e),s=Object.keys(t);if(o.length!==s.length)return!1;return o.every((o=>ut(e[o],t[o])))}pt.popperModule=void 0;const _t=ee((e=>class extends e{static get properties(){return{opened:{type:Boolean,reflect:!0}}}constructor(){super(),this.opened=!1,this.__needsSetup=!0,this.config={},this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}get config(){return this.__config}set config(e){const t=!ut(this.config,e);this._overlayCtrl&&t&&this._overlayCtrl.updateConfig(e),this.__config=e,this._overlayCtrl&&t&&this.__syncToOverlayController()}requestUpdateInternal(e,t){super.requestUpdateInternal(e,t),"opened"===e&&this.dispatchEvent(new Event("opened-changed"))}_defineOverlay({contentNode:e,invokerNode:t,referenceNode:o,backdropNode:s,contentWrapperNode:i}){return new pt({contentNode:e,invokerNode:t,referenceNode:o,backdropNode:s,contentWrapperNode:i,...this._defineOverlayConfig(),...this.config,popperConfig:{...this._defineOverlayConfig().popperConfig||{},...this.config.popperConfig||{},modifiers:{...this._defineOverlayConfig().popperConfig&&this._defineOverlayConfig()?.popperConfig?.modifiers||{},...this.config.popperConfig&&this.config.popperConfig.modifiers||{}}}})}_defineOverlayConfig(){return{placementMode:"local"}}updated(e){super.updated(e),e.has("opened")&&this._overlayCtrl&&!this.__blockSyncToOverlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=e=>{e.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener("close-overlay",this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener("close-overlay",this.__closeEventInContentNodeHandler)}connectedCallback(){super.connectedCallback(),this.__needsSetup=!0,this.updateComplete.then((()=>{this.__needsSetup&&this._setupOverlayCtrl(),this.__needsSetup=!1}))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this._overlayCtrl&&this._teardownOverlayCtrl()}get _overlayInvokerNode(){return Array.from(this.children).find((e=>"invoker"===e.slot))}get _overlayReferenceNode(){}get _overlayBackdropNode(){return Array.from(this.children).find((e=>"backdrop"===e.slot))}get _overlayContentNode(){return this._cachedOverlayContentNode||(this._cachedOverlayContentNode=Array.from(this.children).find((e=>"content"===e.slot))||this.config.contentNode),this._cachedOverlayContentNode}get _overlayContentWrapperNode(){return this.shadowRoot.querySelector("#overlay-content-node-wrapper")}_setupOverlayCtrl(){this._overlayCtrl=this._defineOverlay({contentNode:this._overlayContentNode,contentWrapperNode:this._overlayContentWrapperNode,invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode,backdropNode:this._overlayBackdropNode}),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown()}async _setOpenedWithoutPropertyEffects(e){this.__blockSyncToOverlayCtrl=!0,this.opened=e,await this.updateComplete,this.__blockSyncToOverlayCtrl=!1}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=e=>{const t=new CustomEvent("before-opened",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this.__onBeforeHide=e=>{const t=new CustomEvent("before-closed",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this._overlayCtrl.addEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.addEventListener("before-hide",this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.removeEventListener("before-hide",this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}async toggle(){await this._overlayCtrl.toggle()}async open(){await this._overlayCtrl.show()}async close(){await this._overlayCtrl.hide()}}));class gt extends(_t(Q)){constructor(){super(),this.__toggle=()=>{this.opened=!this.opened}}_defineOverlayConfig(){return{placementMode:"global",viewportConfig:{placement:"center"},hasBackdrop:!0,preventsScroll:!0,trapsKeyboardFocus:!0,hidesOnEsc:!0,handlesAccessibility:!0}}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),this._overlayInvokerNode&&this._overlayInvokerNode.addEventListener("click",this.__toggle)}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._overlayInvokerNode&&this._overlayInvokerNode.removeEventListener("click",this.__toggle)}render(){return $`
      <slot name="invoker"></slot>
      <div id="overlay-content-node-wrapper">
        <slot name="content"></slot>
      </div>
    `}}const mt=Y`
  :host {
    width: 300px;
    height: 200px;
  }
  /* The flip card container - set the width and height to whatever you want. 
  We have added the border property to demonstrate that the flip itself goes 
  out of the box on hover (remove perspective if you don't want the 3D effect */
  .flip-card {
    background-color: transparent;
    width: inherit;
    height: inherit;
    border: none;
    perspective: 1000px; /* Remove this if you don't want the 3D effect */
  }

  /* This container is needed to position the front and back side */
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
  }

  /* Do an horizontal flip when you move the mouse over the flip box container */
  .flipped {
    transform: rotateY(180deg);
  }

  .blocked {
    border: 0.5rem solid ${$e};
    box-sizing: border-box;
    border-radius: 50%;
  }

  /* Position the front and back side */
  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    border-radius: 50%;
    box-sizing: border-box;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  /* Style the front side (fallback if image is missing) */
  .flip-card-front {
    background-color: ${Ie};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Style the back side */
  .flip-card-back {
    color: white;
    transform: rotateY(180deg);
    background-color: ${Re};
  }

  img {
    object-fit: fill;
    width: 80%;
    height: 100%;
    border-radius: 10px;
  }

  .flip-card-front img {
    width: 70px;
    height: 70px;
  }
`;class ft extends Q{static get styles(){return mt}static get properties(){return{flipped:{type:Boolean,reflect:!0},blocked:{type:Boolean,reflect:!0},imageId:{type:String},idCard:{type:Number}}}constructor(){super(),this.flipped=!1,this.blocked=!1,this.imageId="",this.idCard=null}flipCard(){this.blocked||this.dispatchEvent(new CustomEvent("card-flipping-over",{detail:{idCard:this.idCard,imageId:this.imageId}}))}render(){const e={"flip-card-inner":!0,flipped:this.flipped,blocked:this.blocked};return $`
      <button class="flip-card" @click="${this.flipCard}">
        <div class=${xe(e)}>
          <div class="flip-card-front">
          <img src=${"./assets/mark.svg"} />
          </div>
          <div class="flip-card-back">
            ${this.imageId?$`<img src=${`./assets/${this.imageId}.svg`} />`:m}
          </div>
        </div>
      </button>
    `}}const bt=Y`
  .dialog-content {
    border-radius: 5px;
    width: 50vh;
    background: ${Ue};
    text-align: center;
    padding-bottom: 1rem;
  }

  h1 {
    font-family: ${qe};
    color: ${De};
  }

  img {
    width: 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
`;class yt extends(Ce(Q)){static get scopedElements(){return{"memory-button":Ve}}static get styles(){return bt}closeDialog(e){e.target.dispatchEvent(new Event("close-overlay",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("closing-dialog"))}render(){return $`
      <div class="dialog-content">
        <img src="./assets/win.gif" />
        <h1>You won!!</h1>
        <memory-button @click=${this.closeDialog}>Play again</memory-button>
      </div>
    `}}const vt=Array.from({length:37},((e,t)=>t+1)),wt=(e,t)=>Math.floor(Math.random()*(t-e))+e,Nt=e=>{const t=(e=>{const t=[...vt],o=[];for(let s=0;s<e;s++){const e=wt(0,t.length);o.push(t.splice(e,1)[0])}return o})(e),o=t.concat(t),s=[];for(let t=0;t<2*e;t++)s.push({idCard:t,imageId:o.splice(wt(0,o.length),1)[0],flipped:!1,blocked:!1});return s},Ct=Y`
  :host {
    display: block;
    margin: 0.5rem;
  }

  .game-table {
    display: grid;
    grid-gap: 0.5rem;
    row-gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(var(--cardSpace), 1fr));
    justify-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .game-card {
    width: var(--cardSpace);
    height: var(--cardSpace);
  }
`;class kt extends(Ce(Q)){static get scopedElements(){return{"memory-card":ft,"memory-button":Ve,"memory-header":Ke,"memory-dialog":gt,"memory-dialog-content":yt}}static get styles(){return Ct}loadGame(){const e=(window.visualViewport.height-60)/150,t=window.visualViewport.width/150,o=Math.floor(e*t/2);this.numberOfCards=o>37?37:o,this.gameTable=Nt(this.numberOfCards)}resetGame(){this.loadGame(),this.requestUpdate()}connectedCallback(){super.connectedCallback(),this.loadGame()}flipCard(e){this.gameTable=this.gameTable.map((t=>t.idCard!==e||t.blocked?t:{...t,flipped:!t.flipped}))}blockCard(e){this.gameTable=this.gameTable.map((t=>t.idCard!==e||t.blocked?t:{...t,blocked:!0}))}unFlipCards(e){this.gameTable=this.gameTable.map((t=>({...t,flipped:t.blocked?t.flipped:t.idCard===e})))}checkMatches(e){const t=this.gameTable.filter((t=>t.flipped&&t.imageId===e));2===t.length&&(this.blockCard(t[0].idCard),this.blockCard(t[1].idCard))}checkEndOfGame(){if(this.gameTable.filter((e=>e.blocked)).length===2*this.numberOfCards){this.shadowRoot.querySelector('[data-tag-name="memory-dialog"]').opened=!0}}flippingCard({detail:{idCard:e,imageId:t}}){switch(this.gameTable.filter((e=>e.flipped&&!e.blocked)).length){case 0:this.flipCard(e);break;case 1:this.flipCard(e),this.checkMatches(t),this.checkEndOfGame();break;default:this.unFlipCards(e)}this.requestUpdate()}renderGameTable(){return this.gameTable.map((e=>$`
          <memory-card
            class="game-card"
            .idCard=${e.idCard}
            .imageId=${e.imageId}
            ?flipped=${e.flipped}
            ?blocked=${e.blocked}
            @card-flipping-over=${e=>this.flippingCard(e)}
          ></memory-card>
        `))}render(){return $`
      <memory-header title="Avengers Memory Game">
        <memory-button danger @click=${this.resetGame}> Reset </memory-button>
      </memory-header>
      <memory-dialog id="memory-dialog">
        <memory-dialog-content
          slot="content"
          @closing-dialog=${this.resetGame}
        ></memory-dialog-content>
      </memory-dialog>
      <div class="game-table">${this.renderGameTable()}</div>
    `}}window.customElements.define("memory-app",kt);
