(function(){(function(bk){"use strict";var K=Function.prototype.call.bind(Function.prototype.toString);var o=[];var x=[];var l={toString:function(){var a=o.lastIndexOf(this);if(a>=0){return x[a]}return K(this)}};l.toString.prototype=void 0;o=[l.toString];x=[K(Function.prototype.toString)];function z(a,c){if(typeof c!=="function"){return}try{var b=l.toString.call(c);x.push(b);o.push(a);if(Function.prototype.toString!==l.toString){Function.prototype.toString=l.toString}}catch(a){}}var C="ZT4tcOwEFkVEzfiT1T6u";var bh=Object.call.bind(Object.bind,Object.call);var bg=bh(Object.call);var bj=Array.prototype.push;var bi=Array.prototype.indexOf;var Y=Array.prototype.concat;var i=Array.prototype.slice;function A(){return{__callbacks:[],notify:function(g){var h;var d=bg(i,this.__callbacks);var a=d.length;for(var b=a-1;b>=0;--b){try{var e=d[b];if(e!=null){var c=e(g,h);if(c!=null){h=c}}}catch(a){}}return h},register:function(a){bg(bj,this.__callbacks,a)},unregister:function(b){var a=bg(bi,this.__callbacks,b);if(a!==-1){this.__callbacks[a]=null}},__merge:function(a){if(a!=null){this.__callbacks=bg(Y,this.__callbacks,a.__callbacks)}}}}var J=Object.hasOwnProperty;var L=Object.getPrototypeOf;var N=Object.getOwnPropertyDescriptor;var M=Object.getOwnPropertyNames;var V=Object.defineProperty;var bc=Object.call.bind(Object.bind,Object.call);var bf=bc(Object.apply);var Z=bc(Object.call);var W=Object.create;var bd=Function.prototype.bind;var m=Array.prototype.push;var H=Array.prototype.indexOf;var w=["arguments","caller"];var X;if(typeof Reflect!=="undefined"&&Reflect!=null&&typeof Reflect.construct==="function"){X=Reflect.construct}else{X=function(a,c){var d=[null];bf(m,d,c);var e=bf(bd,a,d);return new e}}function Q(a,e){var c=a;while(c!=null){var b=N(c,e);if(b!=null){return{containingObj:c,desc:b}}c=L(c)}return null}var D=W(null);function G(a){if(a==null){return}D=a}function B(b,e){var a=D[e];if(a==null){return null}for(var f=0;f<a.length;++f){var c=a[f];if(b===c.object){return c}}return null}function ba(d,b){var a=D[d];if(a==null){a=[];D[d]=a}Z(m,a,b)}function O(c,h){var a=Q(c,h);if(a==null){return void 0}var e=a.containingObj,d=a.desc;var f=B(e,h);if(f!=null){return f.original}var b=d.value;ba(h,{object:e,original:b});return b}function P(c,h){var a=Q(c,h);if(a==null){return void 0}var e=a.containingObj,d=a.desc;var f=B(e,h);if(f!=null){return f.original}if(Z(J,d,"value")){return void 0}var b=W(null);if(d.get!=null){b.get=d.get}if(d.set!=null){b.set=d.set}ba(h,{object:e,original:b});return b}function E(l,u,o){if(o===void 0){o=false}var b=Q(l,u);if(b==null){return null}var q=b.containingObj,p=b.desc;var r=p.configurable,a=p.writable;var h=p.value;if(!Z(J,p,"value")){return null}var f=W(null);f.value=h;if(r===false&&a===false||typeof h!=="function"){return{originals:f}}var s=B(q,u);if(s!=null){if(s.result!=null){return s.result}h=s.original;f.value=h}var j=A();var k=A();p.value=function g(){var f=arguments;var b=j.notify({args:f,thisObj:this});if(b){if(b.bypassResult!=null){if(b.bypassResult.throw){throw b.bypassResult.value}return b.bypassResult.value}else if(b.args!=null){f=b.args}}var a;var d={args:arguments,thisObj:this,threw:true,result:null};try{if(o&&this instanceof g){a=X(h,f)}else{a=bf(h,this,f)}d={args:arguments,thisObj:this,threw:false,result:a}}finally{var c=k.notify(d);if(c&&c.bypassResult!=null){if(c.bypassResult.throw){throw c.bypassResult.value}return c.bypassResult.value}}return a};var m=p.value;z(m,h);var e=M(h);for(var v=0;v<e.length;++v){var d=e[v];if(Z(H,w,d)===-1){var n=N(m,d);if(n==null||n.configurable===true||n.writable===true){var i=N(h,d);if(i!=null){if(n!=null&&n.configurable===false&&i.configurable===true){}else{V(m,d,i)}}}}}try{if(!Z(J,h,"prototype")){m.prototype=void 0}}catch(a){}V(q,u,p);var c={onBeforeInvoke:j,onAfterInvoke:k,originals:f};ba(u,{object:q,result:c,original:h});return c}function F(o,x){var i=Q(o,x);if(i==null){return null}var t=i.containingObj,s=i.desc;var u=s.configurable;var y=s,r=y.get,h=y.set;var q=Z(J,s,"value");var j=W(null);if(u===false||q){if(r!=null){j.get=r}if(h!=null){j.set=h}return{originals:j}}var v=B(t,x);if(v!=null){if(v.result!=null){return v.result}r=v.original.get;h=v.original.set}var p={onAfterGet:void 0,onBeforeGet:void 0,onAfterSet:void 0,onBeforeSet:void 0,originals:{}};if(r!=null){j.get=r;var l=A();var n=A();s.get=function(){var b=l.notify({thisObj:this});if(b&&b.bypassResult!=null){if(b.bypassResult.throw){throw b.bypassResult.value}return b.bypassResult.value}var a;var d={thisObj:this,result:null,threw:true};try{a=Z(r,this);d={thisObj:this,result:a,threw:false}}finally{var c=n.notify(d);if(c&&c.bypassResult!=null){if(c.bypassResult.throw){throw c.bypassResult.value}return c.bypassResult.value}}return a};z(s.get,r);try{if(!Z(J,r,"prototype")){s.get.prototype=void 0}}catch(a){}p.onBeforeGet=l;p.onAfterGet=n}if(h!=null){j.set=h;var k=A();var m=A();s.set=function(b){var f=b;var c=k.notify({param:b,thisObj:this});if(c){if(c.bypassResult!=null){if(c.bypassResult.throw){throw c.bypassResult.value}return c.bypassResult.value}else if(Z(J,c,"param")){f=c.param}}var a;var e={param:b,thisObj:this,result:null,threw:true};try{a=Z(h,this,f);e={param:b,thisObj:this,result:a,threw:false}}finally{var d=m.notify(e);if(d&&d.bypassResult!=null){if(d.bypassResult.throw){throw d.bypassResult.value}return d.bypassResult.value}}return a};z(s.set,h);try{if(!Z(J,h,"prototype")){s.set.prototype=void 0}}catch(a){}p.onBeforeSet=k;p.onAfterSet=m}V(t,x,s);p.originals=j;ba(x,{object:t,result:p,original:j});return p}try{if(typeof document.createEvent==="function"){var T=document.createEvent("CustomEvent");var bb=false;T.initCustomEvent(C,false,false,{exchange:function(a){G(a);bb=true}});dispatchEvent(T);if(!bb){var U=P(CustomEvent.prototype,"detail");if(U!=null&&typeof U.get==="function"){addEventListener(C,function(a){var c=a;var b=Z(U.get,c);if(b!=null&&typeof b.exchange==="function"){b.exchange(D)}})}}}}catch(a){}var bl=31556952;function j(u,o){var h=u.name,q=u.path,g=q===void 0?"/":q,t=u.domain,m=t===void 0?void 0:t,b=u.value,r=u.maxAge,j=r===void 0?bl:r,s=u.isSecure,k=s===void 0?false:s,p=u.sameSite,e=p===void 0?"Lax":p;if(e==="None"&&!k){throw new Error("SameSite=None requires Secure")}var a=h+"="+encodeURIComponent(b);var f=";Path="+g;var i=";Max-Age="+j;var l=m==null?"":";Domain="+m;var c=k?";Secure":"";var d=";SameSite="+e;o.cookie=[a,f,i,l,c,d].join("")}function d(i,j){var d=i.name,c=i.path,g=i.domain;var a=d+"=";var b=c==null?"":";Path="+c;var e=";Max-Age=0";var f=g==null?"":";Domain="+g;j.cookie=[a,b,e,f].join("")}var n="-2\u202EzXHrmoguk\u202D";var R=n+"u2g472";var I="ktlvDW7IG5ClOcxYTbmY";var S=document.createEvent("CustomEvent");S.initCustomEvent(R,true,true,void 0);if(dispatchEvent(S)){k();addEventListener(R,function(b){b.preventDefault()},true)}j({name:I,value:"a"},document);function k(){var x=Object.create(null);var D=Object.create(null);{var l="\u202EsttYZcFwx\u202D";var s=XMLHttpRequest;var v;var u}{var t=window.fetch;var w}var y="\u202EzXHrmoguk\u202D";var r=void 0;var C=Object.defineProperty.bind(Object);function z(f,b,c,a,e){if(a==="function"){x[f]=E(A(c),b,!!e)}else if(a==="accessor"){x[f]=F(A(c),b)}else if(a==="originalAccessor"){D[f]=P(A(c),b)}else if(a==="originalFunction"){D[f]=O(A(c),b)}}function A(b){var a=window;for(var d=0;d<b.length;d++){if(!{}.hasOwnProperty.call(a,b[d])){return void 0}a=a[b[d]]}return a}z("CustomEvent","CustomEvent",[],"function",true);z("Request","Request",[],"originalFunction",true);z("cancelBubble","cancelBubble",["Event","prototype"],"accessor");z("fetch","fetch",[],"function");z("formSubmit","submit",["HTMLFormElement","prototype"],"function");z("preventDefault","preventDefault",["Event","prototype"],"function");z("setRequestHeader","setRequestHeader",["XMLHttpRequest","prototype"],"originalFunction");z("stopImmediatePropagation","stopImmediatePropagation",["Event","prototype"],"function");z("stopPropagation","stopPropagation",["Event","prototype"],"function");z("xhrOpen","open",["XMLHttpRequest","prototype"],"function");z("xhrSend","send",["XMLHttpRequest","prototype"],"function");(function(){if(s==null){return}var j=D.setRequestHeader!=null?D.setRequestHeader:x.setRequestHeader!=null?x.setRequestHeader.originals.value:null;if(j==null){return}if(x.xhrOpen!=null){v=function(f,b){if(b!=null&&b.bypassResult!=null||f.args==null||f.args.length<2){return b}var c,a=null;var d;var g=b!=null&&b.args!=null?b.args:f.args;var c=g[0];var a=g[1];var d=g[2]==null?true:g[2];C(f.thisObj,l,{writable:true,configurable:true,enumerable:false,value:{method:c,url:a}});return{args:[c,a,d]}};x.xhrOpen.onBeforeInvoke.register(v)}if(x.xhrSend!=null){u=function(h,b){if(b!=null&&b.bypassResult!=null){return b}if(r!=null&&l in h.thisObj&&r.shouldHook(h.thisObj[l])){var e=r.getEncodedData();if(e){for(var a in e){if(!{}.hasOwnProperty.call(e,a))continue;var c=e[a];var d=r.config.headerNamePrefix+a;var f=r.chunk(d,c,r.config.headerChunkSize);for(var i in f){if(!{}.hasOwnProperty.call(f,i))continue;j.call(h.thisObj,i,f[i])}}}}return b};x.xhrSend.onBeforeInvoke.register(u)}}());(function(){if(t==null){return}var o=window.Request;if(x.fetch!=null&&window.fetch!=null&&o!=null){var p=function(m,c){var e=m.args;if(c!=null){if(c.bypassResult!=null){return c}if(c.args!=null){e=c.args}}if(e!=null&&e.length>0){var g=e[0];var h=e[1];var f=new o(g,h);var a={url:f.url,method:f.method};if(r!=null&&r.shouldHook(a)){var j=r.getEncodedData();if(j){for(var b in j){if(!{}.hasOwnProperty.call(j,b))continue;var d=j[b];var i=r.config.headerNamePrefix+b;var k=r.chunk(i,d,r.config.headerChunkSize);for(var n in k){if(!{}.hasOwnProperty.call(k,n))continue;f.headers.set(n,k[n])}}}}return{args:[f]}}return c};x.fetch.onBeforeInvoke.register(p)}}());addEventListener(y,function c(b){r=b.detail;removeEventListener(y,c,true)},true);addEventListener(n,function c(b){d({name:I},document);if(b.detail!=null&&b.detail.exchange!=null){{if(x.xhrOpen!=null&&v!=null){x.xhrOpen.onBeforeInvoke.unregister(v)}if(x.xhrSend!=null&&u!=null){x.xhrSend.onBeforeInvoke.unregister(u)}}{if(x.fetch!=null){x.fetch.onBeforeInvoke.unregister(w)}}b.detail.exchange({instrumented:x})}removeEventListener(n,c,true)},true)}}(this))}())
;(function(a){var d=document,w=window,u="/auth/login/static/js/general_alt.js?async&seed=AMBUQxOTAQAAdBOhXVOg3FEXripA7YYSwIicAMqW5qVNPZaQAYNTIv2Xhv4g&X-G2Q3kxs3--z=q",v="CFpRlHcea",i="607dde373d8d357e17eb1649e8385ef4";var s=d.currentScript;addEventListener(v,function f(e){e.stopImmediatePropagation();removeEventListener(v,f,!0);e.detail.init("AxGBSxOTAQAA05cKrz9PYKm0L3WPbldnoanLmtIGobiGqm0uhU7xYIcZjIeJAT6FPYP6KwsE4hdeCOfvosJeCA==","uxDeNiY-8L5anjfASv7Ew0kzQcUhg9Zpts4lXKR62T=GMybPr1CdIOFJoVBq_Wm3H",[],[720161013,1365446829,818519291,1817642189,105144305,888952163,1378072015,1797369428],document.currentScript&&document.currentScript.nonce||"7FEQmyP29Gx08AEsHxL0ywAH",document.currentScript&&document.currentScript.nonce||"7FEQmyP29Gx08AEsHxL0ywAH",[],a,(s||{})&&(s||{}).src||null)},!0);var o=s&&s.nonce?s.nonce:"";try{s&&s.parentNode.removeChild(s)}catch(e){}{var n=d.createElement("script");n.id=i;n.src=u;n.async=!0;n.nonce=o;d.head.appendChild(n)}}(typeof arguments==="undefined"?void 0:arguments))
;