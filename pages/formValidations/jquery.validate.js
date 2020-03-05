/*!
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var y=this,undefined,_jQuery=y.jQuery,_$=y.$,jQuery=y.jQuery=y.$=function(a,b){return new jQuery.fn.init(a,b)},quickExpr=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,isSimple=/^.[^:#\[\.,]*$/;jQuery.fn=jQuery.prototype={init:function(a,b){a=a||document;if(a.nodeType){this[0]=a;this.length=1;this.context=a;return this}if(typeof a==="string"){var c=quickExpr.exec(a);if(c&&(c[1]||!b)){if(c[1])a=jQuery.clean([c[1]],b);else{var d=document.getElementById(c[3]);if(d&&d.id!=c[3])return jQuery().find(a);var e=jQuery(d||[]);e.context=document;e.selector=a;return e}}else return jQuery(b).find(a)}else if(jQuery.isFunction(a))return jQuery(document).ready(a);if(a.selector&&a.context){this.selector=a.selector;this.context=a.context}return this.setArray(jQuery.isArray(a)?a:jQuery.makeArray(a))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(a){return a===undefined?Array.prototype.slice.call(this):this[a]},pushStack:function(a,b,c){var d=jQuery(a);d.prevObject=this;d.context=this.context;if(b==="find")d.selector=this.selector+(this.selector?" ":"")+c;else if(b)d.selector=this.selector+"."+b+"("+c+")";return d},setArray:function(a){this.length=0;Array.prototype.push.apply(this,a);return this},each:function(a,b){return jQuery.each(this,a,b)},index:function(a){return jQuery.inArray(a&&a.jquery?a[0]:a,this)},attr:function(a,b,c){var d=a;if(typeof a==="string")if(b===undefined)return this[0]&&jQuery[c||"attr"](this[0],a);else{d={};d[a]=b}return this.each(function(i){for(a in d)jQuery.attr(c?this.style:this,a,jQuery.prop(this,d[a],c,i,a))})},css:function(a,b){if((a=='width'||a=='height')&&parseFloat(b)<0)b=undefined;return this.attr(a,b,"curCSS")},text:function(a){if(typeof a!=="object"&&a!=null)return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(a));var b="";jQuery.each(a||this,function(){jQuery.each(this.childNodes,function(){if(this.nodeType!=8)b+=this.nodeType!=1?this.nodeValue:jQuery.fn.text([this])})});return b},wrapAll:function(b){if(this[0]){var c=jQuery(b,this[0].ownerDocument).clone();if(this[0].parentNode)c.insertBefore(this[0]);c.map(function(){var a=this;while(a.firstChild)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(function(){jQuery(this).contents().wrapAll(a)})},wrap:function(a){return this.each(function(){jQuery(this).wrapAll(a)})},append:function(){return this.domManip(arguments,true,function(a){if(this.nodeType==1)this.appendChild(a)})},prepend:function(){return this.domManip(arguments,true,function(a){if(this.nodeType==1)this.insertBefore(a,this.firstChild)})},before:function(){return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,false,function(a){this.parentNode.insertBefore(a,this.nextSibling)})},end:function(){return this.prevObject||jQuery([])},push:[].push,sort:[].sort,splice:[].splice,find:function(b){if(this.length===1){var c=this.pushStack([],"find",b);c.length=0;jQuery.find(b,this[0],c);return c}else{return this.pushStack(jQuery.unique(jQuery.map(this,function(a){return jQuery.find(b,a)})),"find",b)}},clone:function(d){var e=this.map(function(){if(!jQuery.support.noCloneEvent&&!jQuery.isXMLDoc(this)){var a=this.outerHTML;if(!a){var b=this.ownerDocument.createElement("div");b.appendChild(this.cloneNode(true));a=b.innerHTML}return jQuery.clean([a.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else return this.cloneNode(true)});if(d===true){var f=this.find("*").andSelf(),i=0;e.find("*").andSelf().each(function(){if(this.nodeName!==f[i].nodeName)return;var a=jQuery.data(f[i],"events");for(var b in a){for(var c in a[b]){jQuery.event.add(this,b,a[b][c],a[b][c].data)}}i++})}return e},filter:function(b){return this.pushStack(jQuery.isFunction(b)&&jQuery.grep(this,function(a,i){return b.call(a,i)})||jQuery.multiFilter(b,jQuery.grep(this,function(a){return a.nodeType===1})),"filter",b)},closest:function(b){var c=jQuery.expr.match.POS.test(b)?jQuery(b):null,closer=0;return this.map(function(){var a=this;while(a&&a.ownerDocument){if(c?c.index(a)>-1:jQuery(a).is(b)){jQuery.data(a,"closest",closer);return a}a=a.parentNode;closer++}})},not:function(a){if(typeof a==="string")if(isSimple.test(a))return this.pushStack(jQuery.multiFilter(a,this,true),"not",a);else a=jQuery.multiFilter(a,this);var b=a.length&&a[a.length-1]!==undefined&&!a.nodeType;return this.filter(function(){return b?jQuery.inArray(this,a)<0:this!=a})},add:function(a){return this.pushStack(jQuery.unique(jQuery.merge(this.get(),typeof a==="string"?jQuery(a):jQuery.makeArray(a))))},is:function(a){return!!a&&jQuery.multiFilter(a,this).length>0},hasClass:function(a){return!!a&&this.is("."+a)},val:function(b){if(b===undefined){var c=this[0];if(c){if(jQuery.nodeName(c,'option'))return(c.attributes.value||{}).specified?c.value:c.text;if(jQuery.nodeName(c,"select")){var d=c.selectedIndex,values=[],options=c.options,one=c.type=="select-one";if(d<0)return null;for(var i=one?d:0,max=one?d+1:options.length;i<max;i++){var e=options[i];if(e.selected){b=jQuery(e).val();if(one)return b;values.push(b)}}return values}return(c.value||"").replace(/\r/g,"")}return undefined}if(typeof b==="number")b+='';return this.each(function(){if(this.nodeType!=1)return;if(jQuery.isArray(b)&&/radio|checkbox/.test(this.type))this.checked=(jQuery.inArray(this.value,b)>=0||jQuery.inArray(this.name,b)>=0);else if(jQuery.nodeName(this,"select")){var a=jQuery.makeArray(b);jQuery("option",this).each(function(){this.selected=(jQuery.inArray(this.value,a)>=0||jQuery.inArray(this.text,a)>=0)});if(!a.length)this.selectedIndex=-1}else this.value=b})},html:function(a){return a===undefined?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(a)},replaceWith:function(a){return this.after(a).remove()},eq:function(i){return this.slice(i,+i+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(b){return this.pushStack(jQuery.map(this,function(a,i){return b.call(a,i,a)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(c,d,e){if(this[0]){var f=(this[0].ownerDocument||this[0]).createDocumentFragment(),scripts=jQuery.clean(c,(this[0].ownerDocument||this[0]),f),first=f.firstChild;if(first)for(var i=0,l=this.length;i<l;i++)e.call(root(this[i],first),this.length>1||i>0?f.cloneNode(true):f);if(scripts)jQuery.each(scripts,evalScript)}return this;function root(a,b){return d&&jQuery.nodeName(a,"table")&&jQuery.nodeName(b,"tr")?(a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody"))):a}}};jQuery.fn.init.prototype=jQuery.fn;function evalScript(i,a){if(a.src)jQuery.ajax({url:a.src,async:false,dataType:"script"});else jQuery.globalEval(a.text||a.textContent||a.innerHTML||"");if(a.parentNode)a.parentNode.removeChild(a)}function now(){return+new Date}jQuery.extend=jQuery.fn.extend=function(){var a=arguments[0]||{},i=1,length=arguments.length,deep=false,options;if(typeof a==="boolean"){deep=a;a=arguments[1]||{};i=2}if(typeof a!=="object"&&!jQuery.isFunction(a))a={};if(length==i){a=this;--i}for(;i<length;i++)if((options=arguments[i])!=null)for(var b in options){var c=a[b],copy=options[b];if(a===copy)continue;if(deep&&copy&&typeof copy==="object"&&!copy.nodeType)a[b]=jQuery.extend(deep,c||(copy.length!=null?[]:{}),copy);else if(copy!==undefined)a[b]=copy}return a};var z=/z-?index|font-?weight|opacity|zoom|line-?height/i,defaultView=document.defaultView||{},toString=Object.prototype.toString;jQuery.extend({noConflict:function(a){y.$=_$;if(a)y.jQuery=_jQuery;return jQuery},isFunction:function(a){return toString.call(a)==="[object Function]"},isArray:function(a){return toString.call(a)==="[object Array]"},isXMLDoc:function(a){return a.nodeType===9&&a.documentElement.nodeName!=="HTML"||!!a.ownerDocument&&jQuery.isXMLDoc(a.ownerDocument)},globalEval:function(a){if(a&&/\S/.test(a)){var b=document.getElementsByTagName("head")[0]||document.documentElement,script=document.createElement("script");script.type="text/javascript";if(jQuery.support.scriptEval)script.appendChild(document.createTextNode(a));else script.text=a;b.insertBefore(script,b.firstChild);b.removeChild(script)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()==b.toUpperCase()},each:function(a,b,c){var d,i=0,length=a.length;if(c){if(length===undefined){for(d in a)if(b.apply(a[d],c)===false)break}else for(;i<length;)if(b.apply(a[i++],c)===false)break}else{if(length===undefined){for(d in a)if(b.call(a[d],d,a[d])===false)break}else for(var e=a[0];i<length&&b.call(e,i,e)!==false;e=a[++i]){}}return a},prop:function(a,b,c,i,d){if(jQuery.isFunction(b))b=b.call(a,i);return typeof b==="number"&&c=="curCSS"&&!z.test(d)?b+"px":b},className:{add:function(b,c){jQuery.each((c||"").split(/\s+/),function(i,a){if(b.nodeType==1&&!jQuery.className.has(b.className,a))b.className+=(b.className?" ":"")+a})},remove:function(b,c){if(b.nodeType==1)b.className=c!==undefined?jQuery.grep(b.className.split(/\s+/),function(a){return!jQuery.className.has(c,a)}).join(" "):""},has:function(a,b){return a&&jQuery.inArray(b,(a.className||a).toString().split(/\s+/))>-1}},swap:function(a,b,c){var d={};for(var e in b){d[e]=a.style[e];a.style[e]=b[e]}c.call(a);for(var e in b)a.style[e]=d[e]},css:function(a,b,c,d){if(b=="width"||b=="height"){var e,props={position:"absolute",visibility:"hidden",display:"block"},which=b=="width"?["Left","Right"]:["Top","Bottom"];function getWH(){e=b=="width"?a.offsetWidth:a.offsetHeight;if(d==="border")return;jQuery.each(which,function(){if(!d)e-=parseFloat(jQuery.curCSS(a,"padding"+this,true))||0;if(d==="margin")e+=parseFloat(jQuery.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(jQuery.curCSS(a,"border"+this+"Width",true))||0})}if(a.offsetWidth!==0)getWH();else jQuery.swap(a,props,getWH);return Math.max(0,Math.round(e))}return jQuery.curCSS(a,b,c)},curCSS:function(c,d,e){var f,style=c.style;if(d=="opacity"&&!jQuery.support.opacity){f=jQuery.attr(style,"opacity");return f==""?"1":f}if(d.match(/float/i))d=E;if(!e&&style&&style[d])f=style[d];else if(defaultView.getComputedStyle){if(d.match(/float/i))d="float";d=d.replace(/([A-Z])/g,"-$1").toLowerCase();var g=defaultView.getComputedStyle(c,null);if(g)f=g.getPropertyValue(d);if(d=="opacity"&&f=="")f="1"}else if(c.currentStyle){var h=d.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()});f=c.currentStyle[d]||c.currentStyle[h];if(!/^\d+(px)?$/i.test(f)&&/^\d/.test(f)){var i=style.left,rsLeft=c.runtimeStyle.left;c.runtimeStyle.left=c.currentStyle.left;style.left=f||0;f=style.pixelLeft+"px";style.left=i;c.runtimeStyle.left=rsLeft}}return f},clean:function(h,k,l){k=k||document;if(typeof k.createElement==="undefined")k=k.ownerDocument||k[0]&&k[0].ownerDocument||document;if(!l&&h.length===1&&typeof h[0]==="string"){var m=/^<(\w+)\s*\/?>$/.exec(h[0]);if(m)return[k.createElement(m[1])]}var n=[],scripts=[],div=k.createElement("div");jQuery.each(h,function(i,d){if(typeof d==="number")d+='';if(!d)return;if(typeof d==="string"){d=d.replace(/(<(\w+)[^>]*?)\/>/g,function(a,b,c){return c.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?a:b+"></"+c+">"});var e=d.replace(/^\s+/,"").substring(0,10).toLowerCase();var f=!e.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!e.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||e.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!e.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!e.indexOf("<td")||!e.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!e.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!jQuery.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];div.innerHTML=f[1]+d+f[2];while(f[0]--)div=div.lastChild;if(!jQuery.support.tbody){var g=/<tbody/i.test(d),tbody=!e.indexOf("<table")&&!g?div.firstChild&&div.firstChild.childNodes:f[1]=="<table>"&&!g?div.childNodes:[];for(var j=tbody.length-1;j>=0;--j)if(jQuery.nodeName(tbody[j],"tbody")&&!tbody[j].childNodes.length)tbody[j].parentNode.removeChild(tbody[j])}if(!jQuery.support.leadingWhitespace&&/^\s/.test(d))div.insertBefore(k.createTextNode(d.match(/^\s*/)[0]),div.firstChild);d=jQuery.makeArray(div.childNodes)}if(d.nodeType)n.push(d);else n=jQuery.merge(n,d)});if(l){for(var i=0;n[i];i++){if(jQuery.nodeName(n[i],"script")&&(!n[i].type||n[i].type.toLowerCase()==="text/javascript")){scripts.push(n[i].parentNode?n[i].parentNode.removeChild(n[i]):n[i])}else{if(n[i].nodeType===1)n.splice.apply(n,[i+1,0].concat(jQuery.makeArray(n[i].getElementsByTagName("script"))));l.appendChild(n[i])}}return scripts}return n},attr:function(c,d,e){if(!c||c.nodeType==3||c.nodeType==8)return undefined;var f=!jQuery.isXMLDoc(c),set=e!==undefined;d=f&&jQuery.props[d]||d;if(c.tagName){var g=/href|src|style/.test(d);if(d=="selected"&&c.parentNode)c.parentNode.selectedIndex;if(d in c&&f&&!g){if(set){if(d=="type"&&jQuery.nodeName(c,"input")&&c.parentNode)throw"type property can't be changed";c[d]=e}if(jQuery.nodeName(c,"form")&&c.getAttributeNode(d))return c.getAttributeNode(d).nodeValue;if(d=="tabIndex"){var h=c.getAttributeNode("tabIndex");return h&&h.specified?h.value:c.nodeName.match(/(button|input|object|select|textarea)/i)?0:c.nodeName.match(/^(a|area)$/i)&&c.href?0:undefined}return c[d]}if(!jQuery.support.style&&f&&d=="style")return jQuery.attr(c.style,"cssText",e);if(set)c.setAttribute(d,""+e);var i=!jQuery.support.hrefNormalized&&f&&g?c.getAttribute(d,2):c.getAttribute(d);return i===null?undefined:i}if(!jQuery.support.opacity&&d=="opacity"){if(set){c.zoom=1;c.filter=(c.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(e)+''=="NaN"?"":"alpha(opacity="+e*100+")")}return c.filter&&c.filter.indexOf("opacity=")>=0?(parseFloat(c.filter.match(/opacity=([^)]*)/)[1])/100)+'':""}d=d.replace(/-([a-z])/ig,function(a,b){return b.toUpperCase()});if(set)c[d]=e;return c[d]},trim:function(a){return(a||"").replace(/^\s+|\s+$/g,"")},makeArray:function(a){var b=[];if(a!=null){var i=a.length;if(i==null||typeof a==="string"||jQuery.isFunction(a)||a.setInterval)b[0]=a;else while(i)b[--i]=a[i]}return b},inArray:function(a,b){for(var i=0,length=b.length;i<length;i++)if(b[i]===a)return i;return-1},merge:function(a,b){var i=0,elem,pos=a.length;if(!jQuery.support.getAll){while((elem=b[i++])!=null)if(elem.nodeType!=8)a[pos++]=elem}else while((elem=b[i++])!=null)a[pos++]=elem;return a},unique:function(a){var b=[],done={};try{for(var i=0,length=a.length;i<length;i++){var c=jQuery.data(a[i]);if(!done[c]){done[c]=true;b.push(a[i])}}}catch(e){b=a}return b},grep:function(a,b,c){var d=[];for(var i=0,length=a.length;i<length;i++)if(!c!=!b(a[i],i))d.push(a[i]);return d},map:function(a,b){var c=[];for(var i=0,length=a.length;i<length;i++){var d=b(a[i],i);if(d!=null)c[c.length]=d}return c.concat.apply([],c)}});var A=navigator.userAgent.toLowerCase();jQuery.browser={version:(A.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,'0'])[1],safari:/webkit/.test(A),opera:/opera/.test(A),msie:/msie/.test(A)&&!/opera/.test(A),mozilla:/mozilla/.test(A)&&!/(compatible|webkit)/.test(A)};jQuery.each({parent:function(a){return a.parentNode},parents:function(a){return jQuery.dir(a,"parentNode")},next:function(a){return jQuery.nth(a,2,"nextSibling")},prev:function(a){return jQuery.nth(a,2,"previousSibling")},nextAll:function(a){return jQuery.dir(a,"nextSibling")},prevAll:function(a){return jQuery.dir(a,"previousSibling")},siblings:function(a){return jQuery.sibling(a.parentNode.firstChild,a)},children:function(a){return jQuery.sibling(a.firstChild)},contents:function(a){return jQuery.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:jQuery.makeArray(a.childNodes)}},function(c,d){jQuery.fn[c]=function(a){var b=jQuery.map(this,d);if(a&&typeof a=="string")b=jQuery.multiFilter(a,b);return this.pushStack(jQuery.unique(b),c,a)}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(d,e){jQuery.fn[d]=function(a){var b=[],insert=jQuery(a);for(var i=0,l=insert.length;i<l;i++){var c=(i>0?this.clone(true):this).get();jQuery.fn[e].apply(jQuery(insert[i]),c);b=b.concat(c)}return this.pushStack(b,d,a)}});jQuery.each({removeAttr:function(a){jQuery.attr(this,a,"");if(this.nodeType==1)this.removeAttribute(a)},addClass:function(a){jQuery.className.add(this,a)},removeClass:function(a){jQuery.className.remove(this,a)},toggleClass:function(a,b){if(typeof b!=="boolean")b=!jQuery.className.has(this,a);jQuery.className[b?"add":"remove"](this,a)},remove:function(a){if(!a||jQuery.filter(a,[this]).length){jQuery("*",this).add([this]).each(function(){jQuery.event.remove(this);jQuery.removeData(this)});if(this.parentNode)this.parentNode.removeChild(this)}},empty:function(){jQuery(this).children().remove();while(this.firstChild)this.removeChild(this.firstChild)}},function(a,b){jQuery.fn[a]=function(){return this.each(b,arguments)}});function num(a,b){return a[0]&&parseInt(jQuery.curCSS(a[0],b,true),10)||0}var B="jQuery"+now(),uuid=0,windowData={};jQuery.extend({cache:{},data:function(a,b,c){a=a==y?windowData:a;var d=a[B];if(!d)d=a[B]=++uuid;if(b&&!jQuery.cache[d])jQuery.cache[d]={};if(c!==undefined)jQuery.cache[d][b]=c;return b?jQuery.cache[d][b]:d},removeData:function(a,b){a=a==y?windowData:a;var c=a[B];if(b){if(jQuery.cache[c]){delete jQuery.cache[c][b];b="";for(b in jQuery.cache[c])break;if(!b)jQuery.removeData(a)}}else{try{delete a[B]}catch(e){if(a.removeAttribute)a.removeAttribute(B)}delete jQuery.cache[c]}},queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var q=jQuery.data(a,b);if(!q||jQuery.isArray(c))q=jQuery.data(a,b,jQuery.makeArray(c));else if(c)q.push(c)}return q},dequeue:function(a,b){var c=jQuery.queue(a,b),fn=c.shift();if(!b||b==="fx")fn=c[0];if(fn!==undefined)fn.call(a)}});jQuery.fn.extend({data:function(a,b){var c=a.split(".");c[1]=c[1]?"."+c[1]:"";if(b===undefined){var d=this.triggerHandler("getData"+c[1]+"!",[c[0]]);if(d===undefined&&this.length)d=jQuery.data(this[0],a);return d===undefined&&c[1]?this.data(c[0]):d}else return this.trigger("setData"+c[1]+"!",[c[0],b]).each(function(){jQuery.data(this,a,b)})},removeData:function(a){return this.each(function(){jQuery.removeData(this,a)})},queue:function(b,c){if(typeof b!=="string"){c=b;b="fx"}if(c===undefined)return jQuery.queue(this[0],b);return this.each(function(){var a=jQuery.queue(this,b,c);if(b=="fx"&&a.length==1)a[0].call(this)})},dequeue:function(a){return this.each(function(){jQuery.dequeue(this,a)})}});(function(){var k=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,done=0,toString=Object.prototype.toString;var o=function(a,b,c,d){c=c||[];b=b||document;if(b.nodeType!==1&&b.nodeType!==9)return[];if(!a||typeof a!=="string"){return c}var e=[],m,set,checkSet,check,mode,extra,prune=true;k.lastIndex=0;while((m=k.exec(a))!==null){e.push(m[1]);if(m[2]){extra=RegExp.rightContext;break}}if(e.length>1&&q.exec(a)){if(e.length===2&&p.relative[e[0]]){set=x(e[0]+e[1],b)}else{set=p.relative[e[0]]?[b]:o(e.shift(),b);while(e.length){a=e.shift();if(p.relative[a])a+=e.shift();set=x(a,set)}}}else{var f=d?{expr:e.pop(),set:t(d)}:o.find(e.pop(),e.length===1&&b.parentNode?b.parentNode:b,w(b));set=o.filter(f.expr,f.set);if(e.length>0){checkSet=t(set)}else{prune=false}while(e.length){var g=e.pop(),pop=g;if(!p.relative[g]){g=""}else{pop=e.pop()}if(pop==null){pop=b}p.relative[g](checkSet,pop,w(b))}}if(!checkSet){checkSet=set}if(!checkSet){throw"Syntax error, unrecognized expression: "+(g||a);}if(toString.call(checkSet)==="[object Array]"){if(!prune){c.push.apply(c,checkSet)}else if(b.nodeType===1){for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&v(b,checkSet[i]))){c.push(set[i])}}}else{for(var i=0;checkSet[i]!=null;i++){if(checkSet[i]&&checkSet[i].nodeType===1){c.push(set[i])}}}}else{t(checkSet,c)}if(extra){o(extra,b,c,d);if(u){hasDuplicate=false;c.sort(u);if(hasDuplicate){for(var i=1;i<c.length;i++){if(c[i]===c[i-1]){c.splice(i--,1)}}}}}return c};o.matches=function(a,b){return o(a,null,null,b)};o.find=function(a,b,c){var d,match;if(!a){return[]}for(var i=0,l=p.order.length;i<l;i++){var e=p.order[i],match;if((match=p.match[e].exec(a))){var f=RegExp.leftContext;if(f.substr(f.length-1)!=="\\"){match[1]=(match[1]||"").replace(/\\/g,"");d=p.find[e](match,b,c);if(d!=null){a=a.replace(p.match[e],"");break}}}}if(!d){d=b.getElementsByTagName("*")}return{set:d,expr:a}};o.filter=function(a,b,c,d){var e=a,result=[],curLoop=b,match,anyFound,isXMLFilter=b&&b[0]&&w(b[0]);while(a&&b.length){for(var f in p.filter){if((match=p.match[f].exec(a))!=null){var g=p.filter[f],found,item;anyFound=false;if(curLoop==result){result=[]}if(p.preFilter[f]){match=p.preFilter[f](match,curLoop,c,result,d,isXMLFilter);if(!match){anyFound=found=true}else if(match===true){continue}}if(match){for(var i=0;(item=curLoop[i])!=null;i++){if(item){found=g(item,match,i,curLoop);var h=d^!!found;if(c&&found!=null){if(h){anyFound=true}else{curLoop[i]=false}}else if(h){result.push(item);anyFound=true}}}}if(found!==undefined){if(!c){curLoop=result}a=a.replace(p.match[f],"");if(!anyFound){return[]}break}}}if(a==e){if(anyFound==null){throw"Syntax error, unrecognized expression: "+a;}else{break}}e=a}return curLoop};var p=o.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")}},relative:{"+":function(a,b,c){var d=typeof b==="string",isTag=d&&!/\W/.test(b),isPartStrNotTag=d&&!isTag;if(isTag&&!c){b=b.toUpperCase()}for(var i=0,l=a.length,elem;i<l;i++){if((elem=a[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}a[i]=isPartStrNotTag||elem&&elem.nodeName===b?elem||false:elem===b}}if(isPartStrNotTag){o.filter(b,a,true)}},">":function(a,b,c){var d=typeof b==="string";if(d&&!/\W/.test(b)){b=c?b:b.toUpperCase();for(var i=0,l=a.length;i<l;i++){var e=a[i];if(e){var f=e.parentNode;a[i]=f.nodeName===b?f:false}}}else{for(var i=0,l=a.length;i<l;i++){var e=a[i];if(e){a[i]=d?e.parentNode:e.parentNode===b}}if(d){o.filter(b,a,true)}}},"":function(a,b,c){var d=done++,checkFn=dirCheck;if(!b.match(/\W/)){var e=b=c?b:b.toUpperCase();checkFn=dirNodeCheck}checkFn("parentNode",b,d,a,e,c)},"~":function(a,b,c){var d=done++,checkFn=dirCheck;if(typeof b==="string"&&!b.match(/\W/)){var e=b=c?b:b.toUpperCase();checkFn=dirNodeCheck}checkFn("previousSibling",b,d,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var m=b.getElementById(a[1]);return m?[m]:[]}},NAME:function(a,b,c){if(typeof b.getElementsByName!=="undefined"){var d=[],results=b.getElementsByName(a[1]);for(var i=0,l=results.length;i<l;i++){if(results[i].getAttribute("name")===a[1]){d.push(results[i])}}return d.length===0?null:d}},TAG:function(a,b){return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(/\\/g,"")+" ";if(f){return a}for(var i=0,elem;(elem=b[i])!=null;i++){if(elem){if(e^(elem.className&&(" "+elem.className+" ").indexOf(a)>=0)){if(!c)d.push(elem)}else if(c){b[i]=false}}}return false},ID:function(a){return a[1].replace(/\\/g,"")},TAG:function(a,b){for(var i=0;b[i]===false;i++){}return b[i]&&w(b[i])?a[1]:a[1].toUpperCase()},CHILD:function(a){if(a[1]=="nth"){var b=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(a[2]=="even"&&"2n"||a[2]=="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=(b[1]+(b[2]||1))-0;a[3]=b[3]-0}a[0]=done++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1].replace(/\\/g,"");if(!f&&p.attrMap[g]){a[1]=p.attrMap[g]}if(a[2]==="~="){a[4]=" "+a[4]+" "}return a},PSEUDO:function(a,b,c,d,e){if(a[1]==="not"){if(a[3].match(k).length>1||/^\w/.test(a[3])){a[3]=o(a[3],null,null,b)}else{var f=o.filter(a[3],b,c,true^e);if(!c){d.push.apply(d,f)}return false}}else if(p.match.POS.test(a[0])||p.match.CHILD.test(a[0])){return true}return a},POS:function(a){a.unshift(true);return a}},filters:{enabled:function(a){return a.disabled===false&&a.type!=="hidden"},disabled:function(a){return a.disabled===true},checked:function(a){return a.checked===true},selected:function(a){a.parentNode.selectedIndex;return a.selected===true},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,i,b){return!!o(b[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toUpperCase()==="BUTTON"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,i){return i===0},last:function(a,i,b,c){return i===c.length-1},even:function(a,i){return i%2===0},odd:function(a,i){return i%2===1},lt:function(a,i,b){return i<b[3]-0},gt:function(a,i,b){return i>b[3]-0},nth:function(a,i,b){return b[3]-0==i},eq:function(a,i,b){return b[3]-0==i}},filter:{PSEUDO:function(a,b,i,c){var d=b[1],filter=p.filters[d];if(filter){return filter(a,i,b,c)}else if(d==="contains"){return(a.textContent||a.innerText||"").indexOf(b[3])>=0}else if(d==="not"){var e=b[3];for(var i=0,l=e.length;i<l;i++){if(e[i]===a){return false}}return true}},CHILD:function(a,b){var c=b[1],node=a;switch(c){case'only':case'first':while(node=node.previousSibling){if(node.nodeType===1)return false}if(c=='first')return true;node=a;case'last':while(node=node.nextSibling){if(node.nodeType===1)return false}return true;case'nth':var d=b[2],last=b[3];if(d==1&&last==0){return true}var e=b[0],parent=a.parentNode;if(parent&&(parent.sizcache!==e||!a.nodeIndex)){var f=0;for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++f}}parent.sizcache=e}var g=a.nodeIndex-last;if(d==0){return g==0}else{return(g%d==0&&g/d>=0)}}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return(b==="*"&&a.nodeType===1)||a.nodeName===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],result=p.attrHandle[c]?p.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),value=result+"",s=b[2],check=b[4];return result==null?s==="!=":s==="="?value===check:s==="*="?value.indexOf(check)>=0:s==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:s==="!="?value!=check:s==="^="?value.indexOf(check)===0:s==="$="?value.substr(value.length-check.length)===check:s==="|="?value===check||value.substr(0,check.length+1)===check+"-":false},POS:function(a,b,i,c){var d=b[2],filter=p.setFilters[d];if(filter){return filter(a,i,b,c)}}}};var q=p.match.POS;for(var s in p.match){p.match[s]=RegExp(p.match[s].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var t=function(a,b){a=Array.prototype.slice.call(a);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(e){t=function(a,b){var c=b||[];if(toString.call(a)==="[object Array]"){Array.prototype.push.apply(c,a)}else{if(typeof a.length==="number"){for(var i=0,l=a.length;i<l;i++){c.push(a[i])}}else{for(var i=0;a[i];i++){c.push(a[i])}}}return c}}var u;if(document.documentElement.compareDocumentPosition){u=function(a,b){var c=a.compareDocumentPosition(b)&4?-1:a===b?0:1;if(c===0){hasDuplicate=true}return c}}else if("sourceIndex"in document.documentElement){u=function(a,b){var c=a.sourceIndex-b.sourceIndex;if(c===0){hasDuplicate=true}return c}}else if(document.createRange){u=function(a,b){var c=a.ownerDocument.createRange(),bRange=b.ownerDocument.createRange();c.selectNode(a);c.collapse(true);bRange.selectNode(b);bRange.collapse(true);var d=c.compareBoundaryPoints(Range.START_TO_END,bRange);if(d===0){hasDuplicate=true}return d}}(function(){var d=document.createElement("form"),id="script"+(new Date).getTime();d.innerHTML="<input name='"+id+"'/>";var e=document.documentElement;e.insertBefore(d,e.firstChild);if(!!document.getElementById(id)){p.find.ID=function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var m=b.getElementById(a[1]);return m?m.id===a[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===a[1]?[m]:undefined:[]}};p.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}}e.removeChild(d)})();(function(){var e=document.createElement("div");e.appendChild(document.createComment(""));if(e.getElementsByTagName("*").length>0){p.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var i=0;c[i];i++){if(c[i].nodeType===1){d.push(c[i])}}c=d}return c}}e.innerHTML="<a href='#'></a>";if(e.firstChild&&typeof e.firstChild.getAttribute!=="undefined"&&e.firstChild.getAttribute("href")!=="#"){p.attrHandle.href=function(a){return a.getAttribute("href",2)}}})();if(document.querySelectorAll)(function(){var f=o,div=document.createElement("div");div.innerHTML="<p class='TEST'></p>";if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return}o=function(a,b,c,d){b=b||document;if(!d&&b.nodeType===9&&!w(b)){try{return t(b.querySelectorAll(a),c)}catch(e){}}return f(a,b,c,d)};o.find=f.find;o.filter=f.filter;o.selectors=f.selectors;o.matches=f.matches})();if(document.getElementsByClassName&&document.documentElement.getElementsByClassName)(function(){var d=document.createElement("div");d.innerHTML="<div class='test e'></div><div class='test'></div>";if(d.getElementsByClassName("e").length===0)return;d.lastChild.className="e";if(d.getElementsByClassName("e").length===1)return;p.order.splice(1,0,"CLASS");p.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c){return b.getElementsByClassName(a[1])}}})();function dirNodeCheck(a,b,c,d,e,f){var g=a=="previousSibling"&&!f;for(var i=0,l=d.length;i<l;i++){var h=d[i];if(h){if(g&&h.nodeType===1){h.sizcache=c;h.sizset=i}h=h[a];var j=false;while(h){if(h.sizcache===c){j=d[h.sizset];break}if(h.nodeType===1&&!f){h.sizcache=c;h.sizset=i}if(h.nodeName===b){j=h;break}h=h[a]}d[i]=j}}}function dirCheck(a,b,c,d,e,f){var g=a=="previousSibling"&&!f;for(var i=0,l=d.length;i<l;i++){var h=d[i];if(h){if(g&&h.nodeType===1){h.sizcache=c;h.sizset=i}h=h[a];var j=false;while(h){if(h.sizcache===c){j=d[h.sizset];break}if(h.nodeType===1){if(!f){h.sizcache=c;h.sizset=i}if(typeof b!=="string"){if(h===b){j=true;break}}else if(o.filter(b,[h]).length>0){j=h;break}}h=h[a]}d[i]=j}}}var v=document.compareDocumentPosition?function(a,b){return a.compareDocumentPosition(b)&16}:function(a,b){return a!==b&&(a.contains?a.contains(b):true)};var w=function(a){return a.nodeType===9&&a.documentElement.nodeName!=="HTML"||!!a.ownerDocument&&w(a.ownerDocument)};var x=function(a,b){var c=[],later="",match,root=b.nodeType?[b]:b;while((match=p.match.PSEUDO.exec(a))){later+=match[0];a=a.replace(p.match.PSEUDO,"")}a=p.relative[a]?a+"*":a;for(var i=0,l=root.length;i<l;i++){o(a,root[i],c)}return o.filter(later,c)};jQuery.find=o;jQuery.filter=o.filter;jQuery.expr=o.selectors;jQuery.expr[":"]=jQuery.expr.filters;o.selectors.filters.hidden=function(a){return a.offsetWidth===0||a.offsetHeight===0};o.selectors.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0};o.selectors.filters.animated=function(b){return jQuery.grep(jQuery.timers,function(a){return b===a.elem}).length};jQuery.multiFilter=function(a,b,c){if(c){a=":not("+a+")"}return o.matches(a,b)};jQuery.dir=function(a,b){var c=[],cur=a[b];while(cur&&cur!=document){if(cur.nodeType==1)c.push(cur);cur=cur[b]}return c};jQuery.nth=function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType==1&&++e==b)break;return a};jQuery.sibling=function(n,a){var r=[];for(;n;n=n.nextSibling){if(n.nodeType==1&&n!=a)r.push(n)}return r};return;y.Sizzle=o})();jQuery.event={add:function(e,f,g,h){if(e.nodeType==3||e.nodeType==8)return;if(e.setInterval&&e!=y)e=y;if(!g.guid)g.guid=this.guid++;if(h!==undefined){var i=g;g=this.proxy(i);g.data=h}var j=jQuery.data(e,"events")||jQuery.data(e,"events",{}),handle=jQuery.data(e,"handle")||jQuery.data(e,"handle",function(){return typeof jQuery!=="undefined"&&!jQuery.event.triggered?jQuery.event.handle.apply(arguments.callee.elem,arguments):undefined});handle.elem=e;jQuery.each(f.split(/\s+/),function(a,b){var c=b.split(".");b=c.shift();g.type=c.slice().sort().join(".");var d=j[b];if(jQuery.event.specialAll[b])jQuery.event.specialAll[b].setup.call(e,h,c);if(!d){d=j[b]={};if(!jQuery.event.special[b]||jQuery.event.special[b].setup.call(e,h,c)===false){if(e.addEventListener)e.addEventListener(b,handle,false);else if(e.attachEvent)e.attachEvent("on"+b,handle)}}d[g.guid]=g;jQuery.event.global[b]=true});e=null},guid:1,global:{},remove:function(f,g,h){if(f.nodeType==3||f.nodeType==8)return;var i=jQuery.data(f,"events"),ret,index;if(i){if(g===undefined||(typeof g==="string"&&g.charAt(0)=="."))for(var j in i)this.remove(f,j+(g||""));else{if(g.type){h=g.handler;g=g.type}jQuery.each(g.split(/\s+/),function(a,b){var c=b.split(".");b=c.shift();var d=RegExp("(^|\\.)"+c.slice().sort().join(".*\\.")+"(\\.|$)");if(i[b]){if(h)delete i[b][h.guid];else for(var e in i[b])if(d.test(i[b][e].type))delete i[b][e];if(jQuery.event.specialAll[b])jQuery.event.specialAll[b].teardown.call(f,c);for(ret in i[b])break;if(!ret){if(!jQuery.event.special[b]||jQuery.event.special[b].teardown.call(f,c)===false){if(f.removeEventListener)f.removeEventListener(b,jQuery.data(f,"handle"),false);else if(f.detachEvent)f.detachEvent("on"+b,jQuery.data(f,"handle"))}ret=null;delete i[b]}}})}for(ret in i)break;if(!ret){var k=jQuery.data(f,"handle");if(k)k.elem=null;jQuery.removeData(f,"events");jQuery.removeData(f,"handle")}}},trigger:function(a,b,c,d){var f=a.type||a;if(!d){a=typeof a==="object"?a[B]?a:jQuery.extend(jQuery.Event(f),a):jQuery.Event(f);if(f.indexOf("!")>=0){a.type=f=f.slice(0,-1);a.exclusive=true}if(!c){a.stopPropagation();if(this.global[f])jQuery.each(jQuery.cache,function(){if(this.events&&this.events[f])jQuery.event.trigger(a,b,this.handle.elem)})}if(!c||c.nodeType==3||c.nodeType==8)return undefined;a.result=undefined;a.target=c;b=jQuery.makeArray(b);b.unshift(a)}a.currentTarget=c;var g=jQuery.data(c,"handle");if(g)g.apply(c,b);if((!c[f]||(jQuery.nodeName(c,'a')&&f=="click"))&&c["on"+f]&&c["on"+f].apply(c,b)===false)a.result=false;if(!d&&c[f]&&!a.isDefaultPrevented()&&!(jQuery.nodeName(c,'a')&&f=="click")){this.triggered=true;try{c[f]()}catch(e){}}this.triggered=false;if(!a.isPropagationStopped()){var h=c.parentNode||c.ownerDocument;if(h)jQuery.event.trigger(a,b,h,true)}},handle:function(a){var b,handlers;a=arguments[0]=jQuery.event.fix(a||y.event);a.currentTarget=this;var c=a.type.split(".");a.type=c.shift();b=!c.length&&!a.exclusive;var d=RegExp("(^|\\.)"+c.slice().sort().join(".*\\.")+"(\\.|$)");handlers=(jQuery.data(this,"events")||{})[a.type];for(var j in handlers){var e=handlers[j];if(b||d.test(e.type)){a.handler=e;a.data=e.data;var f=e.apply(this,arguments);if(f!==undefined){a.result=f;if(f===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[B])return a;var b=a;a=jQuery.Event(b);for(var i=this.props.length,prop;i;){prop=this.props[--i];a[prop]=b[prop]}if(!a.target)a.target=a.srcElement||document;if(a.target.nodeType==3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement==a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){var c=document.documentElement,body=document.body;a.pageX=a.clientX+(c&&c.scrollLeft||body&&body.scrollLeft||0)-(c.clientLeft||0);a.pageY=a.clientY+(c&&c.scrollTop||body&&body.scrollTop||0)-(c.clientTop||0)}if(!a.which&&((a.charCode||a.charCode===0)?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button)a.which=(a.button&1?1:(a.button&2?3:(a.button&4?2:0)));return a},proxy:function(a,b){b=b||function(){return a.apply(this,arguments)};b.guid=a.guid=a.guid||b.guid||this.guid++;return b},special:{ready:{setup:bindReady,teardown:function(){}}},specialAll:{live:{setup:function(a,b){jQuery.event.add(this,b[0],liveHandler)},teardown:function(a){if(a.length){var b=0,name=RegExp("(^|\\.)"+a[0]+"(\\.|$)");jQuery.each((jQuery.data(this,"events").live||{}),function(){if(name.test(this.type))b++});if(b<1)jQuery.event.remove(this,a[0],liveHandler)}}}}};jQuery.Event=function(a){if(!this.preventDefault)return new jQuery.Event(a);if(a&&a.type){this.originalEvent=a;this.type=a.type}else this.type=a;this.timeStamp=now();this[B]=true};function returnFalse(){return false}function returnTrue(){return true}jQuery.Event.prototype={preventDefault:function(){this.isDefaultPrevented=returnTrue;var e=this.originalEvent;if(!e)return;if(e.preventDefault)e.preventDefault();e.returnValue=false},stopPropagation:function(){this.isPropagationStopped=returnTrue;var e=this.originalEvent;if(!e)return;if(e.stopPropagation)e.stopPropagation();e.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation()},isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse};var C=function(a){var b=a.relatedTarget;while(b&&b!=this)try{b=b.parentNode}catch(e){b=this}if(b!=this){a.type=a.data;jQuery.event.handle.apply(this,arguments)}};jQuery.each({mouseover:'mouseenter',mouseout:'mouseleave'},function(a,b){jQuery.event.special[b]={setup:function(){jQuery.event.add(this,a,C,b)},teardown:function(){jQuery.event.remove(this,a,C)}}});jQuery.fn.extend({bind:function(a,b,c){return a=="unload"?this.one(a,b,c):this.each(function(){jQuery.event.add(this,a,c||b,c&&b)})},one:function(b,c,d){var e=jQuery.event.proxy(d||c,function(a){jQuery(this).unbind(a,e);return(d||c).apply(this,arguments)});return this.each(function(){jQuery.event.add(this,b,e,d&&c)})},unbind:function(a,b){return this.each(function(){jQuery.event.remove(this,a,b)})},trigger:function(a,b){return this.each(function(){jQuery.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=jQuery.Event(a);c.preventDefault();c.stopPropagation();jQuery.event.trigger(c,b,this[0]);return c.result}},toggle:function(b){var c=arguments,i=1;while(i<c.length)jQuery.event.proxy(b,c[i++]);return this.click(jQuery.event.proxy(b,function(a){this.lastToggle=(this.lastToggle||0)%i;a.preventDefault();return c[this.lastToggle++].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b)},ready:function(a){bindReady();if(jQuery.isReady)a.call(document,jQuery);else jQuery.readyList.push(a);return this},live:function(a,b){var c=jQuery.event.proxy(b);c.guid+=this.selector+a;jQuery(document).bind(liveConvert(a,this.selector),this.selector,c);return this},die:function(a,b){jQuery(document).unbind(liveConvert(a,this.selector),b?{guid:b.guid+this.selector+a}:null);return this}});function liveHandler(c){var d=RegExp("(^|\\.)"+c.type+"(\\.|$)"),stop=true,elems=[];jQuery.each(jQuery.data(this,"events").live||[],function(i,a){if(d.test(a.type)){var b=jQuery(c.target).closest(a.data)[0];if(b)elems.push({elem:b,fn:a})}});elems.sort(function(a,b){return jQuery.data(a.elem,"closest")-jQuery.data(b.elem,"closest")});jQuery.each(elems,function(){if(this.fn.call(this.elem,c,this.fn.data)===false)return(stop=false)});return stop}function liveConvert(a,b){return["live",a,b.replace(/\./g,"`").replace(/ /g,"|")].join(".")}jQuery.extend({isReady:false,readyList:[],ready:function(){if(!jQuery.isReady){jQuery.isReady=true;if(jQuery.readyList){jQuery.each(jQuery.readyList,function(){this.call(document,jQuery)});jQuery.readyList=null}jQuery(document).triggerHandler("ready")}}});var D=false;function bindReady(){if(D)return;D=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);jQuery.ready()},false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);jQuery.ready()}});if(document.documentElement.doScroll&&y==y.top)(function(){if(jQuery.isReady)return;try{document.documentElement.doScroll("left")}catch(error){setTimeout(arguments.callee,0);return}jQuery.ready()})()}jQuery.event.add(y,"load",jQuery.ready)}jQuery.each(("blur,focus,load,resize,scroll,unload,click,dblclick,"+"mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,"+"change,select,submit,keydown,keypress,keyup,error").split(","),function(i,b){jQuery.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)}});jQuery(y).bind('unload',function(){for(var a in jQuery.cache)if(a!=1&&jQuery.cache[a].handle)jQuery.event.remove(jQuery.cache[a].handle.elem)});(function(){jQuery.support={};var b=document.documentElement,script=document.createElement("script"),div=document.createElement("div"),id="script"+(new Date).getTime();div.style.display="none";div.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var c=div.getElementsByTagName("*"),a=div.getElementsByTagName("a")[0];if(!c||!c.length||!a){return}jQuery.support={leadingWhitespace:div.firstChild.nodeType==3,tbody:!div.getElementsByTagName("tbody").length,objectAll:!!div.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!div.getElementsByTagName("link").length,style:/red/.test(a.getAttribute("style")),hrefNormalized:a.getAttribute("href")==="/a",opacity:a.style.opacity==="0.5",cssFloat:!!a.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};script.type="text/javascript";try{script.appendChild(document.createTextNode("window."+id+"=1;"))}catch(e){}b.insertBefore(script,b.firstChild);if(y[id]){jQuery.support.scriptEval=true;delete y[id]}b.removeChild(script);if(div.attachEvent&&div.fireEvent){div.attachEvent("onclick",function(){jQuery.support.noCloneEvent=false;div.detachEvent("onclick",arguments.callee)});div.cloneNode(true).fireEvent("onclick")}jQuery(function(){var a=document.createElement("div");a.style.width=a.style.paddingLeft="1px";document.body.appendChild(a);jQuery.boxModel=jQuery.support.boxModel=a.offsetWidth===2;document.body.removeChild(a).style.display='none'})})();var E=jQuery.support.cssFloat?"cssFloat":"styleFloat";jQuery.props={"for":"htmlFor","class":"className","float":E,cssFloat:E,styleFloat:E,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};jQuery.fn.extend({_load:jQuery.fn.load,load:function(c,d,e){if(typeof c!=="string")return this._load(c);var f=c.indexOf(" ");if(f>=0){var g=c.slice(f,c.length);c=c.slice(0,f)}var h="GET";if(d)if(jQuery.isFunction(d)){e=d;d=null}else if(typeof d==="object"){d=jQuery.param(d);h="POST"}var i=this;jQuery.ajax({url:c,type:h,dataType:"html",data:d,complete:function(a,b){if(b=="success"||b=="notmodified")i.html(g?jQuery("<div/>").append(a.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(g):a.responseText);if(e)i.each(e,[a.responseText,b,a])}});return this},serialize:function(){return jQuery.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?jQuery.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(i,b){var c=jQuery(this).val();return c==null?null:jQuery.isArray(c)?jQuery.map(c,function(a,i){return{name:b.name,value:a}}):{name:b.name,value:c}}).get()}});jQuery.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(i,o){jQuery.fn[o]=function(f){return this.bind(o,f)}});var F=now();jQuery.extend({get:function(a,b,c,d){if(jQuery.isFunction(b)){c=b;b=null}return jQuery.ajax({type:"GET",url:a,data:b,success:c,dataType:d})},getScript:function(a,b){return jQuery.get(a,null,b,"script")},getJSON:function(a,b,c){return jQuery.get(a,b,c,"json")},post:function(a,b,c,d){if(jQuery.isFunction(b)){c=b;b={}}return jQuery.ajax({type:"POST",url:a,data:b,success:c,dataType:d})},ajaxSetup:function(a){jQuery.extend(jQuery.ajaxSettings,a)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return y.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(s){s=jQuery.extend(true,s,jQuery.extend(true,{},jQuery.ajaxSettings,s));var c,jsre=/=\?(&|$)/g,status,data,type=s.type.toUpperCase();if(s.data&&s.processData&&typeof s.data!=="string")s.data=jQuery.param(s.data);if(s.dataType=="jsonp"){if(type=="GET"){if(!s.url.match(jsre))s.url+=(s.url.match(/\?/)?"&":"?")+(s.jsonp||"callback")+"=?"}else if(!s.data||!s.data.match(jsre))s.data=(s.data?s.data+"&":"")+(s.jsonp||"callback")+"=?";s.dataType="json"}if(s.dataType=="json"&&(s.data&&s.data.match(jsre)||s.url.match(jsre))){c="jsonp"+F++;if(s.data)s.data=(s.data+"").replace(jsre,"="+c+"$1");s.url=s.url.replace(jsre,"="+c+"$1");s.dataType="script";y[c]=function(a){data=a;success();complete();y[c]=undefined;try{delete y[c]}catch(e){}if(h)h.removeChild(i)}}if(s.dataType=="script"&&s.cache==null)s.cache=false;if(s.cache===false&&type=="GET"){var d=now();var f=s.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+d+"$2");s.url=f+((f==s.url)?(s.url.match(/\?/)?"&":"?")+"_="+d:"")}if(s.data&&type=="GET"){s.url+=(s.url.match(/\?/)?"&":"?")+s.data;s.data=null}if(s.global&&!jQuery.active++)jQuery.event.trigger("ajaxStart");var g=/^(\w+:)?\/\/([^\/?#]+)/.exec(s.url);if(s.dataType=="script"&&type=="GET"&&g&&(g[1]&&g[1]!=location.protocol||g[2]!=location.host)){var h=document.getElementsByTagName("head")[0];var i=document.createElement("script");i.src=s.url;if(s.scriptCharset)i.charset=s.scriptCharset;if(!c){var j=false;i.onload=i.onreadystatechange=function(){if(!j&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){j=true;success();complete();i.onload=i.onreadystatechange=null;h.removeChild(i)}}}h.appendChild(i);return undefined}var k=false;var l=s.xhr();if(s.username)l.open(type,s.url,s.async,s.username,s.password);else l.open(type,s.url,s.async);try{if(s.data)l.setRequestHeader("Content-Type",s.contentType);if(s.ifModified)l.setRequestHeader("If-Modified-Since",jQuery.lastModified[s.url]||"Thu, 01 Jan 1970 00:00:00 GMT");l.setRequestHeader("X-Requested-With","XMLHttpRequest");l.setRequestHeader("Accept",s.dataType&&s.accepts[s.dataType]?s.accepts[s.dataType]+", */*":s.accepts._default)}catch(e){}if(s.beforeSend&&s.beforeSend(l,s)===false){if(s.global&&!--jQuery.active)jQuery.event.trigger("ajaxStop");l.abort();return false}if(s.global)jQuery.event.trigger("ajaxSend",[l,s]);var m=function(a){if(l.readyState==0){if(n){clearInterval(n);n=null;if(s.global&&!--jQuery.active)jQuery.event.trigger("ajaxStop")}}else if(!k&&l&&(l.readyState==4||a=="timeout")){k=true;if(n){clearInterval(n);n=null}status=a=="timeout"?"timeout":!jQuery.httpSuccess(l)?"error":s.ifModified&&jQuery.httpNotModified(l,s.url)?"notmodified":"success";if(status=="success"){try{data=jQuery.httpData(l,s.dataType,s)}catch(e){status="parsererror"}}if(status=="success"){var b;try{b=l.getResponseHeader("Last-Modified")}catch(e){}if(s.ifModified&&b)jQuery.lastModified[s.url]=b;if(!c)success()}else jQuery.handleError(s,l,status);complete();if(a)l.abort();if(s.async)l=null}};if(s.async){var n=setInterval(m,13);if(s.timeout>0)setTimeout(function(){if(l&&!k)m("timeout")},s.timeout)}try{l.send(s.data)}catch(e){jQuery.handleError(s,l,null,e)}if(!s.async)m();function success(){if(s.success)s.success(data,status);if(s.global)jQuery.event.trigger("ajaxSuccess",[l,s])}function complete(){if(s.complete)s.complete(l,status);if(s.global)jQuery.event.trigger("ajaxComplete",[l,s]);if(s.global&&!--jQuery.active)jQuery.event.trigger("ajaxStop")}return l},handleError:function(s,a,b,e){if(s.error)s.error(a,b,e);if(s.global)jQuery.event.trigger("ajaxError",[a,s,e])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol=="file:"||(a.status>=200&&a.status<300)||a.status==304||a.status==1223}catch(e){}return false},httpNotModified:function(a,b){try{var c=a.getResponseHeader("Last-Modified");return a.status==304||c==jQuery.lastModified[b]}catch(e){}return false},httpData:function(a,b,s){var c=a.getResponseHeader("content-type"),xml=b=="xml"||!b&&c&&c.indexOf("xml")>=0,data=xml?a.responseXML:a.responseText;if(xml&&data.documentElement.tagName=="parsererror")throw"parsererror";if(s&&s.dataFilter)data=s.dataFilter(data,b);if(typeof data==="string"){if(b=="script")jQuery.globalEval(data);if(b=="json")data=y["eval"]("("+data+")")}return data},param:function(a){var s=[];function add(a,b){s[s.length]=encodeURIComponent(a)+'='+encodeURIComponent(b)};if(jQuery.isArray(a)||a.jquery)jQuery.each(a,function(){add(this.name,this.value)});else for(var j in a)if(jQuery.isArray(a[j]))jQuery.each(a[j],function(){add(j,this)});else add(j,jQuery.isFunction(a[j])?a[j]():a[j]);return s.join("&").replace(/%20/g,"+")}});var G={},timerId,fxAttrs=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function genFx(a,b){var c={};jQuery.each(fxAttrs.concat.apply([],fxAttrs.slice(0,b)),function(){c[this]=a});return c}jQuery.fn.extend({show:function(a,b){if(a){return this.animate(genFx("show",3),a,b)}else{for(var i=0,l=this.length;i<l;i++){var c=jQuery.data(this[i],"olddisplay");this[i].style.display=c||"";if(jQuery.css(this[i],"display")==="none"){var d=this[i].tagName,display;if(G[d]){display=G[d]}else{var e=jQuery("<"+d+" />").appendTo("body");display=e.css("display");if(display==="none")display="block";e.remove();G[d]=display}jQuery.data(this[i],"olddisplay",display)}}for(var i=0,l=this.length;i<l;i++){this[i].style.display=jQuery.data(this[i],"olddisplay")||""}return this}},hide:function(a,b){if(a){return this.animate(genFx("hide",3),a,b)}else{for(var i=0,l=this.length;i<l;i++){var c=jQuery.data(this[i],"olddisplay");if(!c&&c!=="none")jQuery.data(this[i],"olddisplay",jQuery.css(this[i],"display"))}for(var i=0,l=this.length;i<l;i++){this[i].style.display="none"}return this}},_toggle:jQuery.fn.toggle,toggle:function(b,c){var d=typeof b==="boolean";return jQuery.isFunction(b)&&jQuery.isFunction(c)?this._toggle.apply(this,arguments):b==null||d?this.each(function(){var a=d?b:jQuery(this).is(":hidden");jQuery(this)[a?"show":"hide"]()}):this.animate(genFx("toggle",3),b,c)},fadeTo:function(a,b,c){return this.animate({opacity:b},a,c)},animate:function(g,h,i,j){var k=jQuery.speed(h,i,j);return this[k.queue===false?"each":"queue"](function(){var f=jQuery.extend({},k),p,hidden=this.nodeType==1&&jQuery(this).is(":hidden"),self=this;for(p in g){if(g[p]=="hide"&&hidden||g[p]=="show"&&!hidden)return f.complete.call(this);if((p=="height"||p=="width")&&this.style){f.display=jQuery.css(this,"display");f.overflow=this.style.overflow}}if(f.overflow!=null)this.style.overflow="hidden";f.curAnim=jQuery.extend({},g);jQuery.each(g,function(a,b){var e=new jQuery.fx(self,f,a);if(/toggle|show|hide/.test(b))e[b=="toggle"?hidden?"show":"hide":b](g);else{var c=b.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),start=e.cur(true)||0;if(c){var d=parseFloat(c[2]),unit=c[3]||"px";if(unit!="px"){self.style[a]=(d||1)+unit;start=((d||1)/e.cur(true))*start;self.style[a]=start+unit}if(c[1])d=((c[1]=="-="?-1:1)*d)+start;e.custom(start,d,unit)}else e.custom(start,b,"")}});return true})},stop:function(a,b){var c=jQuery.timers;if(a)this.queue([]);this.each(function(){for(var i=c.length-1;i>=0;i--)if(c[i].elem==this){if(b)c[i](true);c.splice(i,1)}});if(!b)this.dequeue();return this}});jQuery.each({slideDown:genFx("show",1),slideUp:genFx("hide",1),slideToggle:genFx("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(c,d){jQuery.fn[c]=function(a,b){return this.animate(d,a,b)}});jQuery.extend({speed:function(a,b,c){var d=typeof a==="object"?a:{complete:c||!c&&b||jQuery.isFunction(a)&&a,duration:a,easing:c&&b||b&&!jQuery.isFunction(b)&&b};d.duration=jQuery.fx.off?0:typeof d.duration==="number"?d.duration:jQuery.fx.speeds[d.duration]||jQuery.fx.speeds._default;d.old=d.complete;d.complete=function(){if(d.queue!==false)jQuery(this).dequeue();if(jQuery.isFunction(d.old))d.old.call(this)};return d},easing:{linear:function(p,n,a,b){return a+b*p},swing:function(p,n,a,b){return((-Math.cos(p*Math.PI)/2)+0.5)*b+a}},timers:[],fx:function(a,b,c){this.options=b;this.elem=a;this.prop=c;if(!b.orig)b.orig={}}});jQuery.fx.prototype={update:function(){if(this.options.step)this.options.step.call(this.elem,this.now,this);(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var r=parseFloat(jQuery.css(this.elem,this.prop,a));return r&&r>-10000?r:parseFloat(jQuery.curCSS(this.elem,this.prop))||0},custom:function(b,c,d){this.startTime=now();this.start=b;this.end=c;this.unit=d||this.unit||"px";this.now=this.start;this.pos=this.state=0;var e=this;function t(a){return e.step(a)}t.elem=this.elem;if(t()&&jQuery.timers.push(t)&&!timerId){timerId=setInterval(function(){var a=jQuery.timers;for(var i=0;i<a.length;i++)if(!a[i]())a.splice(i--,1);if(!a.length){clearInterval(timerId);timerId=undefined}},13)}},show:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());jQuery(this.elem).show()},hide:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var t=now();if(a||t>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var b=true;for(var i in this.options.curAnim)if(this.options.curAnim[i]!==true)b=false;if(b){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(jQuery.css(this.elem,"display")=="none")this.elem.style.display="block"}if(this.options.hide)jQuery(this.elem).hide();if(this.options.hide||this.options.show)for(var p in this.options.curAnim)jQuery.attr(this.elem.style,p,this.options.orig[p]);this.options.complete.call(this.elem)}return false}else{var n=t-this.startTime;this.state=n/this.options.duration;this.pos=jQuery.easing[this.options.easing||(jQuery.easing.swing?"swing":"linear")](this.state,n,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};jQuery.extend(jQuery.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){jQuery.attr(a.elem.style,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=a.now+a.unit;else a.elem[a.prop]=a.now}}});if(document.documentElement["getBoundingClientRect"])jQuery.fn.offset=function(){if(!this[0])return{top:0,left:0};if(this[0]===this[0].ownerDocument.body)return jQuery.offset.bodyOffset(this[0]);var a=this[0].getBoundingClientRect(),doc=this[0].ownerDocument,body=doc.body,docElem=doc.documentElement,clientTop=docElem.clientTop||body.clientTop||0,clientLeft=docElem.clientLeft||body.clientLeft||0,top=a.top+(self.pageYOffset||jQuery.boxModel&&docElem.scrollTop||body.scrollTop)-clientTop,left=a.left+(self.pageXOffset||jQuery.boxModel&&docElem.scrollLeft||body.scrollLeft)-clientLeft;return{top:top,left:left}};else jQuery.fn.offset=function(){if(!this[0])return{top:0,left:0};if(this[0]===this[0].ownerDocument.body)return jQuery.offset.bodyOffset(this[0]);jQuery.offset.initialized||jQuery.offset.initialize();var a=this[0],offsetParent=a.offsetParent,prevOffsetParent=a,doc=a.ownerDocument,computedStyle,docElem=doc.documentElement,body=doc.body,defaultView=doc.defaultView,prevComputedStyle=defaultView.getComputedStyle(a,null),top=a.offsetTop,left=a.offsetLeft;while((a=a.parentNode)&&a!==body&&a!==docElem){computedStyle=defaultView.getComputedStyle(a,null);top-=a.scrollTop,left-=a.scrollLeft;if(a===offsetParent){top+=a.offsetTop,left+=a.offsetLeft;if(jQuery.offset.doesNotAddBorder&&!(jQuery.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(a.tagName)))top+=parseInt(computedStyle.borderTopWidth,10)||0,left+=parseInt(computedStyle.borderLeftWidth,10)||0;prevOffsetParent=offsetParent,offsetParent=a.offsetParent}if(jQuery.offset.subtractsBorderForOverflowNotVisible&&computedStyle.overflow!=="visible")top+=parseInt(computedStyle.borderTopWidth,10)||0,left+=parseInt(computedStyle.borderLeftWidth,10)||0;prevComputedStyle=computedStyle}if(prevComputedStyle.position==="relative"||prevComputedStyle.position==="static")top+=body.offsetTop,left+=body.offsetLeft;if(prevComputedStyle.position==="fixed")top+=Math.max(docElem.scrollTop,body.scrollTop),left+=Math.max(docElem.scrollLeft,body.scrollLeft);return{top:top,left:left}};jQuery.offset={initialize:function(){if(this.initialized)return;var a=document.body,container=document.createElement('div'),innerDiv,checkDiv,table,td,rules,prop,bodyMarginTop=a.style.marginTop,html='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';rules={position:'absolute',top:0,left:0,margin:0,border:0,width:'1px',height:'1px',visibility:'hidden'};for(prop in rules)container.style[prop]=rules[prop];container.innerHTML=html;a.insertBefore(container,a.firstChild);innerDiv=container.firstChild,checkDiv=innerDiv.firstChild,td=innerDiv.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(checkDiv.offsetTop!==5);this.doesAddBorderForTableAndCells=(td.offsetTop===5);innerDiv.style.overflow='hidden',innerDiv.style.position='relative';this.subtractsBorderForOverflowNotVisible=(checkDiv.offsetTop===-5);a.style.marginTop='1px';this.doesNotIncludeMarginInBodyOffset=(a.offsetTop===0);a.style.marginTop=bodyMarginTop;a.removeChild(container);this.initialized=true},bodyOffset:function(a){jQuery.offset.initialized||jQuery.offset.initialize();var b=a.offsetTop,left=a.offsetLeft;if(jQuery.offset.doesNotIncludeMarginInBodyOffset)b+=parseInt(jQuery.curCSS(a,'marginTop',true),10)||0,left+=parseInt(jQuery.curCSS(a,'marginLeft',true),10)||0;return{top:b,left:left}}};jQuery.fn.extend({position:function(){var a=0,top=0,results;if(this[0]){var b=this.offsetParent(),offset=this.offset(),parentOffset=/^body|html$/i.test(b[0].tagName)?{top:0,left:0}:b.offset();offset.top-=num(this,'marginTop');offset.left-=num(this,'marginLeft');parentOffset.top+=num(b,'borderTopWidth');parentOffset.left+=num(b,'borderLeftWidth');results={top:offset.top-parentOffset.top,left:offset.left-parentOffset.left}}return results},offsetParent:function(){var a=this[0].offsetParent||document.body;while(a&&(!/^body|html$/i.test(a.tagName)&&jQuery.css(a,'position')=='static'))a=a.offsetParent;return jQuery(a)}});jQuery.each(['Left','Top'],function(i,b){var c='scroll'+b;jQuery.fn[c]=function(a){if(!this[0])return null;return a!==undefined?this.each(function(){this==y||this==document?y.scrollTo(!i?a:jQuery(y).scrollLeft(),i?a:jQuery(y).scrollTop()):this[c]=a}):this[0]==y||this[0]==document?self[i?'pageYOffset':'pageXOffset']||jQuery.boxModel&&document.documentElement[c]||document.body[c]:this[0][c]}});jQuery.each(["Height","Width"],function(i,b){var c=i?"Left":"Top",br=i?"Right":"Bottom",lower=b.toLowerCase();jQuery.fn["inner"+b]=function(){return this[0]?jQuery.css(this[0],lower,false,"padding"):null};jQuery.fn["outer"+b]=function(a){return this[0]?jQuery.css(this[0],lower,false,a?"margin":"border"):null};var d=b.toLowerCase();jQuery.fn[d]=function(a){return this[0]==y?document.compatMode=="CSS1Compat"&&document.documentElement["client"+b]||document.body["client"+b]:this[0]==document?Math.max(document.documentElement["client"+b],document.body["scroll"+b],document.documentElement["scroll"+b],document.body["offset"+b],document.documentElement["offset"+b]):a===undefined?(this.length?jQuery.css(this[0],d):null):this.css(d,typeof a==="string"?a:a+"px")}})})();
/**
/**
 * jQuery Validation Plugin 1.9.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

(function($) {

$.extend($.fn, {
	// http://docs.jquery.com/Plugins/Validation/validate
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if (!this.length) {
			options && options.debug && window.console && console.warn( "nothing selected, can't validate, returning nothing" );
			return;
		}

		// check if a validator for this form was already created
		var validator = $.data(this[0], 'validator');
		if ( validator ) {
			return validator;
		}

		// Add novalidate tag if HTML5.
		this.attr('novalidate', 'novalidate');

		validator = new $.validator( options, this[0] );
		$.data(this[0], 'validator', validator);

		if ( validator.settings.onsubmit ) {

			var inputsAndButtons = this.find("input, button");

			// allow suppresing validation by adding a cancel class to the submit button
			inputsAndButtons.filter(".cancel").click(function () {
				validator.cancelSubmit = true;
			});

			// when a submitHandler is used, capture the submitting button
			if (validator.settings.submitHandler) {
				inputsAndButtons.filter(":submit").click(function () {
					validator.submitButton = this;
				});
			}

			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug )
					// prevent form submit to be able to see console output
					event.preventDefault();

				function handle() {
					if ( validator.settings.submitHandler ) {
						if (validator.submitButton) {
							// insert a hidden input as a replacement for the missing submit button
							var hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);
						}
						validator.settings.submitHandler.call( validator, validator.currentForm );
						if (validator.submitButton) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						}
						return false;
					}
					return true;
				}

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				}
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					}
					return handle();
				} else {
					validator.focusInvalid();
					return false;
				}
			});
		}

		return validator;
	},
	// http://docs.jquery.com/Plugins/Validation/valid
	valid: function() {
        if ( $(this[0]).is('form')) {
            return this.validate().form();
        } else {
            var valid = true;
            var validator = $(this[0].form).validate();
            this.each(function() {
				valid &= validator.element(this);
            });
            return valid;
        }
    },
	// attributes: space seperated list of attributes to retrieve and remove
	removeAttrs: function(attributes) {
		var result = {},
			$element = this;
		$.each(attributes.split(/\s/), function(index, value) {
			result[value] = $element.attr(value);
			$element.removeAttr(value);
		});
		return result;
	},
	// http://docs.jquery.com/Plugins/Validation/rules
	rules: function(command, argument) {
		var element = this[0];

		if (command) {
			var settings = $.data(element.form, 'validator').settings;
			var staticRules = settings.rules;
			var existingRules = $.validator.staticRules(element);
			switch(command) {
			case "add":
				$.extend(existingRules, $.validator.normalizeRule(argument));
				staticRules[element.name] = existingRules;
				if (argument.messages)
					settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
				break;
			case "remove":
				if (!argument) {
					delete staticRules[element.name];
					return existingRules;
				}
				var filtered = {};
				$.each(argument.split(/\s/), function(index, method) {
					filtered[method] = existingRules[method];
					delete existingRules[method];
				});
				return filtered;
			}
		}

		var data = $.validator.normalizeRules(
		$.extend(
			{},
			$.validator.metadataRules(element),
			$.validator.classRules(element),
			$.validator.attributeRules(element),
			$.validator.staticRules(element)
		), element);

		// make sure required is at front
		if (data.required) {
			var param = data.required;
			delete data.required;
			data = $.extend({required: param}, data);
		}

		return data;
	}
});

// Custom selectors
$.extend($.expr[":"], {
	// http://docs.jquery.com/Plugins/Validation/blank
	blank: function(a) {return !$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/filled
	filled: function(a) {return !!$.trim("" + a.value);},
	// http://docs.jquery.com/Plugins/Validation/unchecked
	unchecked: function(a) {return !a.checked;}
});

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {}, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
};

$.validator.format = function(source, params) {
	if ( arguments.length == 1 )
		return function() {
			var args = $.makeArray(arguments);
			args.unshift(source);
			return $.validator.format.apply( this, args );
		};
	if ( arguments.length > 2 && params.constructor != Array  ) {
		params = $.makeArray(arguments).slice(1);
	}
	if ( params.constructor != Array ) {
		params = [ params ];
	}
	$.each(params, function(i, n) {
		source = source.replace(new RegExp("\\{" + i + "\\}", "g"), n);
	});
	return source;
};

$.extend($.validator, {

	defaults: {
		messages: {},
		groups: {},
		rules: {},
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function(element, event) {
			this.lastActive = element;

			// hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
				this.settings.unhighlight && this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				this.addWrapper(this.errorsFor(element)).hide();
			}
		},
		onfocusout: function(element, event) {
			if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
				this.element(element);
			}
		},
		onkeyup: function(element, event) {
			if ( element.name in this.submitted || element == this.lastElement ) {
				this.element(element);
			}
		},
		onclick: function(element, event) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted )
				this.element(element);
			// or option elements, check parent select in that case
			else if (element.parentNode.name in this.submitted)
				this.element(element.parentNode);
		},
		highlight: function(element, errorClass, validClass) {
			if (element.type === 'radio') {
				this.findByName(element.name).addClass(errorClass).removeClass(validClass);
			} else {
				$(element).addClass(errorClass).removeClass(validClass);
			}
		},
		unhighlight: function(element, errorClass, validClass) {
			if (element.type === 'radio') {
				this.findByName(element.name).removeClass(errorClass).addClass(validClass);
			} else {
				$(element).removeClass(errorClass).addClass(validClass);
			}
		}
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
	setDefaults: function(settings) {
		$.extend( $.validator.defaults, settings );
	},

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date (ISO).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		accept: "Please enter a value with a valid extension.",
		maxlength: $.validator.format("Please enter no more than {0} characters."),
		minlength: $.validator.format("Please enter at least {0} characters."),
		rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
		range: $.validator.format("Please enter a value between {0} and {1}."),
		max: $.validator.format("Please enter a value less than or equal to {0}."),
		min: $.validator.format("Please enter a value greater than or equal to {0}.")
	},

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $(this.settings.errorLabelContainer);
			this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
			this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
			this.submitted = {};
			this.valueCache = {};
			this.pendingRequest = 0;
			this.pending = {};
			this.invalid = {};
			this.reset();

			var groups = (this.groups = {});
			$.each(this.settings.groups, function(key, value) {
				$.each(value.split(/\s/), function(index, name) {
					groups[name] = key;
				});
			});
			var rules = this.settings.rules;
			$.each(rules, function(key, value) {
				rules[key] = $.validator.normalizeRule(value);
			});

			function delegate(event) {
				var validator = $.data(this[0].form, "validator"),
					eventType = "on" + event.type.replace(/^validate/, "");
				validator.settings[eventType] && validator.settings[eventType].call(validator, this[0], event);
			}
			$(this.currentForm)
			       .validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, " +
						"[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
						"[type='email'], [type='datetime'], [type='date'], [type='month'], " +
						"[type='week'], [type='time'], [type='datetime-local'], " +
						"[type='range'], [type='color'] ",
						"focusin focusout keyup", delegate)
				.validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

			if (this.settings.invalidHandler)
				$(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/form
		form: function() {
			this.checkForm();
			$.extend(this.submitted, this.errorMap);
			this.invalid = $.extend({}, this.errorMap);
			if (!this.valid())
				$(this.currentForm).triggerHandler("invalid-form", [this]);
			this.showErrors();
			return this.valid();
		},

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
				this.check( elements[i] );
			}
			return this.valid();
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/element
		element: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );
			this.lastElement = element;
			this.prepareElement( element );
			this.currentElements = $(element);
			var result = this.check( element );
			if ( result ) {
				delete this.invalid[element.name];
			} else {
				this.invalid[element.name] = true;
			}
			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			}
			this.showErrors();
			return result;
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/showErrors
		showErrors: function(errors) {
			if(errors) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[name],
						element: this.findByName(name)[0]
					});
				}
				// remove items from success list
				this.successList = $.grep( this.successList, function(element) {
					return !(element.name in errors);
				});
			}
			this.settings.showErrors
				? this.settings.showErrors.call( this, this.errorMap, this.errorList )
				: this.defaultShowErrors();
		},

		// http://docs.jquery.com/Plugins/Validation/Validator/resetForm
		resetForm: function() {
			if ( $.fn.resetForm )
				$( this.currentForm ).resetForm();
			this.submitted = {};
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			this.elements().removeClass( this.settings.errorClass );
		},

		numberOfInvalids: function() {
			return this.objectLength(this.invalid);
		},

		objectLength: function( obj ) {
			var count = 0;
			for ( var i in obj )
				count++;
			return count;
		},

		hideErrors: function() {
			this.addWrapper( this.toHide ).hide();
		},

		valid: function() {
			return this.size() == 0;
		},

		size: function() {
			return this.errorList.length;
		},

		focusInvalid: function() {
			if( this.settings.focusInvalid ) {
				try {
					$(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
					.filter(":visible")
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger("focusin");
				} catch(e) {
					// ignore IE throwing errors when focusing hidden elements
				}
			}
		},

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep(this.errorList, function(n) {
				return n.element.name == lastActive.name;
			}).length == 1 && lastActive;
		},

		elements: function() {
			var validator = this,
				rulesCache = {};

			// select all valid inputs inside the form (no submit or reset buttons)
			return $(this.currentForm)
			.find("input, select, textarea")
			.not(":submit, :reset, :image, [disabled]")
			.not( this.settings.ignore )
			.filter(function() {
				!this.name && validator.settings.debug && window.console && console.error( "%o has no name assigned", this);

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength($(this).rules()) )
					return false;

				rulesCache[this.name] = true;
				return true;
			});
		},

		clean: function( selector ) {
			return $( selector )[0];
		},

		errors: function() {
			return $( this.settings.errorElement + "." + this.settings.errorClass, this.errorContext );
		},

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {};
			this.toShow = $([]);
			this.toHide = $([]);
			this.currentElements = $([]);
		},

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		},

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor(element);
		},

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $(element).rules();
			var dependencyMismatch = false;
			for (var method in rules ) {
				var rule = { method: method, parameters: rules[method] };
				try {
					var result = $.validator.methods[method].call( this, element.value.replace(/\r/g, ""), element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result == "dependency-mismatch" ) {
						dependencyMismatch = true;
						continue;
					}
					dependencyMismatch = false;

					if ( result == "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor(element) );
						return;
					}

					if( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					}
				} catch(e) {
					this.settings.debug && window.console && console.log("exception occured when checking element " + element.id
						 + ", check the '" + rule.method + "' method", e);
					throw e;
				}
			}
			if (dependencyMismatch)
				return;
			if ( this.objectLength(rules) )
				this.successList.push(element);
			return true;
		},

		// return the custom message for the given element and validation method
		// specified in the element's "messages" metadata
		customMetaMessage: function(element, method) {
			if (!$.metadata)
				return;

			var meta = this.settings.meta
				? $(element).metadata()[this.settings.meta]
				: $(element).metadata();

			return meta && meta.messages && meta.messages[method];
		},

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[name];
			return m && (m.constructor == String
				? m
				: m[method]);
		},

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for(var i = 0; i < arguments.length; i++) {
				if (arguments[i] !== undefined)
					return arguments[i];
			}
			return undefined;
		},

		defaultMessage: function( element, method) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customMetaMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[method],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		},

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\}/g;
			if ( typeof message == "function" ) {
				message = message.call(this, rule.parameters, element);
			} else if (theregex.test(message)) {
				message = jQuery.format(message.replace(theregex, '{$1}'), rule.parameters);
			}
			this.errorList.push({
				message: message,
				element: element
			});

			this.errorMap[element.name] = message;
			this.submitted[element.name] = message;
		},

		addWrapper: function(toToggle) {
			if ( this.settings.wrapper )
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			return toToggle;
		},

		defaultShowErrors: function() {
			for ( var i = 0; this.errorList[i]; i++ ) {
				var error = this.errorList[i];
				this.settings.highlight && this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				this.showLabel( error.element, error.message );
			}
			if( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			}
			if (this.settings.success) {
				for ( var i = 0; this.successList[i]; i++ ) {
					this.showLabel( this.successList[i] );
				}
			}
			if (this.settings.unhighlight) {
				for ( var i = 0, elements = this.validElements(); elements[i]; i++ ) {
					this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
				}
			}
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		},

		validElements: function() {
			return this.currentElements.not(this.invalidElements());
		},

		invalidElements: function() {
			return $(this.errorList).map(function() {
				return this.element;
			});
		},

		showLabel: function(element, message) {
			var label = this.errorsFor( element );
			if ( label.length ) {
				// refresh error/success class
				label.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );

				// check if we have a generated label, replace the message then
				label.attr("generated") && label.html(message);
			} else {
				// create label
				label = $("<" + this.settings.errorElement + "/>")
					.attr({"for":  this.idOrName(element), generated: true})
					.addClass(this.settings.errorClass)
					.html(message || "");
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
				}
				if ( !this.labelContainer.append(label).length )
					this.settings.errorPlacement
						? this.settings.errorPlacement(label, $(element) )
						: label.insertAfter(element);
			}
			if ( !message && this.settings.success ) {
				label.text("");
				typeof this.settings.success == "string"
					? label.addClass( this.settings.success )
					: this.settings.success( label );
			}
			this.toShow = this.toShow.add(label);
		},

		errorsFor: function(element) {
			var name = this.idOrName(element);
    		return this.errors().filter(function() {
				return $(this).attr('for') == name;
			});
		},

		idOrName: function(element) {
			return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
		},

		validationTargetFor: function(element) {
			// if radio/checkbox, validate first element in group instead
			if (this.checkable(element)) {
				element = this.findByName( element.name ).not(this.settings.ignore)[0];
			}
			return element;
		},

		checkable: function( element ) {
			return /radio|checkbox/i.test(element.type);
		},

		findByName: function( name ) {
			// select by name and filter by form for performance over form.find("[name=...]")
			var form = this.currentForm;
			return $(document.getElementsByName(name)).map(function(index, element) {
				return element.form == form && element.name == name && element  || null;
			});
		},

		getLength: function(value, element) {
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				return $("option:selected", element).length;
			case 'input':
				if( this.checkable( element) )
					return this.findByName(element.name).filter(':checked').length;
			}
			return value.length;
		},

		depend: function(param, element) {
			return this.dependTypes[typeof param]
				? this.dependTypes[typeof param](param, element)
				: true;
		},

		dependTypes: {
			"boolean": function(param, element) {
				return param;
			},
			"string": function(param, element) {
				return !!$(param, element.form).length;
			},
			"function": function(param, element) {
				return param(element);
			}
		},

		optional: function(element) {
			return !$.validator.methods.required.call(this, $.trim(element.value), element) && "dependency-mismatch";
		},

		startRequest: function(element) {
			if (!this.pending[element.name]) {
				this.pendingRequest++;
				this.pending[element.name] = true;
			}
		},

		stopRequest: function(element, valid) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if (this.pendingRequest < 0)
				this.pendingRequest = 0;
			delete this.pending[element.name];
			if ( valid && this.pendingRequest == 0 && this.formSubmitted && this.form() ) {
				$(this.currentForm).submit();
				this.formSubmitted = false;
			} else if (!valid && this.pendingRequest == 0 && this.formSubmitted) {
				$(this.currentForm).triggerHandler("invalid-form", [this]);
				this.formSubmitted = false;
			}
		},

		previousValue: function(element) {
			return $.data(element, "previousValue") || $.data(element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			});
		}

	},

	classRuleSettings: {
		required: {required: true},
		email: {email: true},
		url: {url: true},
		date: {date: true},
		dateISO: {dateISO: true},
		dateDE: {dateDE: true},
		number: {number: true},
		numberDE: {numberDE: true},
		digits: {digits: true},
		creditcard: {creditcard: true}
	},

	addClassRules: function(className, rules) {
		className.constructor == String ?
			this.classRuleSettings[className] = rules :
			$.extend(this.classRuleSettings, className);
	},

	classRules: function(element) {
		var rules = {};
		var classes = $(element).attr('class');
		classes && $.each(classes.split(' '), function() {
			if (this in $.validator.classRuleSettings) {
				$.extend(rules, $.validator.classRuleSettings[this]);
			}
		});
		return rules;
	},

	attributeRules: function(element) {
		var rules = {};
		var $element = $(element);

		for (var method in $.validator.methods) {
			var value;
			// If .prop exists (jQuery >= 1.6), use it to get true/false for required
			if (method === 'required' && typeof $.fn.prop === 'function') {
				value = $element.prop(method);
			} else {
				value = $element.attr(method);
			}
			if (value) {
				rules[method] = value;
			} else if ($element[0].getAttribute("type") === method) {
				rules[method] = true;
			}
		}

		// maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
		if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
			delete rules.maxlength;
		}

		return rules;
	},

	metadataRules: function(element) {
		if (!$.metadata) return {};

		var meta = $.data(element.form, 'validator').settings.meta;
		return meta ?
			$(element).metadata()[meta] :
			$(element).metadata();
	},

	staticRules: function(element) {
		var rules = {};
		var validator = $.data(element.form, 'validator');
		if (validator.settings.rules) {
			rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
		}
		return rules;
	},

	normalizeRules: function(rules, element) {
		// handle dependency check
		$.each(rules, function(prop, val) {
			// ignore rule when param is explicitly false, eg. required:false
			if (val === false) {
				delete rules[prop];
				return;
			}
			if (val.param || val.depends) {
				var keepRule = true;
				switch (typeof val.depends) {
					case "string":
						keepRule = !!$(val.depends, element.form).length;
						break;
					case "function":
						keepRule = val.depends.call(element, element);
						break;
				}
				if (keepRule) {
					rules[prop] = val.param !== undefined ? val.param : true;
				} else {
					delete rules[prop];
				}
			}
		});

		// evaluate parameters
		$.each(rules, function(rule, parameter) {
			rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
		});

		// clean number parameters
		$.each(['minlength', 'maxlength', 'min', 'max'], function() {
			if (rules[this]) {
				rules[this] = Number(rules[this]);
			}
		});
		$.each(['rangelength', 'range'], function() {
			if (rules[this]) {
				rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
			}
		});

		if ($.validator.autoCreateRanges) {
			// auto-create ranges
			if (rules.min && rules.max) {
				rules.range = [rules.min, rules.max];
				delete rules.min;
				delete rules.max;
			}
			if (rules.minlength && rules.maxlength) {
				rules.rangelength = [rules.minlength, rules.maxlength];
				delete rules.minlength;
				delete rules.maxlength;
			}
		}

		// To support custom messages in metadata ignore rule methods titled "messages"
		if (rules.messages) {
			delete rules.messages;
		}

		return rules;
	},

	// Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
	normalizeRule: function(data) {
		if( typeof data == "string" ) {
			var transformed = {};
			$.each(data.split(/\s/), function() {
				transformed[this] = true;
			});
			data = transformed;
		}
		return data;
	},

	// http://docs.jquery.com/Plugins/Validation/Validator/addMethod
	addMethod: function(name, method, message) {
		$.validator.methods[name] = method;
		$.validator.messages[name] = message != undefined ? message : $.validator.messages[name];
		if (method.length < 3) {
			$.validator.addClassRules(name, $.validator.normalizeRule(name));
		}
	},

	methods: {

		// http://docs.jquery.com/Plugins/Validation/Methods/required
		required: function(value, element, param) {
			// check if dependency is met
			if ( !this.depend(param, element) )
				return "dependency-mismatch";
			switch( element.nodeName.toLowerCase() ) {
			case 'select':
				// could be an array for select-multiple or a string, both are fine this way
				var val = $(element).val();
				return val && val.length > 0;
			case 'input':
				if ( this.checkable(element) )
					return this.getLength(value, element) > 0;
			default:
				return $.trim(value).length > 0;
			}
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/remote
		remote: function(value, element, param) {
			if ( this.optional(element) )
				return "dependency-mismatch";

			var previous = this.previousValue(element);
			if (!this.settings.messages[element.name] )
				this.settings.messages[element.name] = {};
			previous.originalMessage = this.settings.messages[element.name].remote;
			this.settings.messages[element.name].remote = previous.message;

			param = typeof param == "string" && {url:param} || param;

			if ( this.pending[element.name] ) {
				return "pending";
			}
			if ( previous.old === value ) {
				return previous.valid;
			}

			previous.old = value;
			var validator = this;
			this.startRequest(element);
			var data = {};
			data[element.name] = value;
			$.ajax($.extend(true, {
				url: param,
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				success: function(response) {
					validator.settings.messages[element.name].remote = previous.originalMessage;
					var valid = response === true;
					if ( valid ) {
						var submitted = validator.formSubmitted;
						validator.prepareElement(element);
						validator.formSubmitted = submitted;
						validator.successList.push(element);
						validator.showErrors();
					} else {
						var errors = {};
						var message = response || validator.defaultMessage( element, "remote" );
						errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
						validator.showErrors(errors);
					}
					previous.valid = valid;
					validator.stopRequest(element, valid);
				}
			}, param));
			return "pending";
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/minlength
		minlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/maxlength
		maxlength: function(value, element, param) {
			return this.optional(element) || this.getLength($.trim(value), element) <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/rangelength
		rangelength: function(value, element, param) {
			var length = this.getLength($.trim(value), element);
			return this.optional(element) || ( length >= param[0] && length <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/min
		min: function( value, element, param ) {
			return this.optional(element) || value >= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/max
		max: function( value, element, param ) {
			return this.optional(element) || value <= param;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/range
		range: function( value, element, param ) {
			return this.optional(element) || ( value >= param[0] && value <= param[1] );
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/email
		email: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
			return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/url
		url: function(value, element) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/date
		date: function(value, element) {
			return this.optional(element) || !/Invalid|NaN/.test(new Date(value));
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/dateISO
		dateISO: function(value, element) {
			return this.optional(element) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/number
		number: function(value, element) {
			return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/digits
		digits: function(value, element) {
			return this.optional(element) || /^\d+$/.test(value);
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/creditcard
		// based on http://en.wikipedia.org/wiki/Luhn
		creditcard: function(value, element) {
			if ( this.optional(element) )
				return "dependency-mismatch";
			// accept only spaces, digits and dashes
			if (/[^0-9 -]+/.test(value))
				return false;
			var nCheck = 0,
				nDigit = 0,
				bEven = false;

			value = value.replace(/\D/g, "");

			for (var n = value.length - 1; n >= 0; n--) {
				var cDigit = value.charAt(n);
				var nDigit = parseInt(cDigit, 10);
				if (bEven) {
					if ((nDigit *= 2) > 9)
						nDigit -= 9;
				}
				nCheck += nDigit;
				bEven = !bEven;
			}

			return (nCheck % 10) == 0;
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/accept
		accept: function(value, element, param) {
			param = typeof param == "string" ? param.replace(/,/g, '|') : "png|jpe?g|gif";
			return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
		},

		// http://docs.jquery.com/Plugins/Validation/Methods/equalTo
		equalTo: function(value, element, param) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $(param).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
				$(element).valid();
			});
			return value == target.val();
		}

	}

});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

})(jQuery);

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
;(function($) {
	var pendingRequests = {};
	// Use a prefilter if available (1.5+)
	if ( $.ajaxPrefilter ) {
		$.ajaxPrefilter(function(settings, _, xhr) {
			var port = settings.port;
			if (settings.mode == "abort") {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				pendingRequests[port] = xhr;
			}
		});
	} else {
		// Proxy ajax
		var ajax = $.ajax;
		$.ajax = function(settings) {
			var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
				port = ( "port" in settings ? settings : $.ajaxSettings ).port;
			if (mode == "abort") {
				if ( pendingRequests[port] ) {
					pendingRequests[port].abort();
				}
				return (pendingRequests[port] = ajax.apply(this, arguments));
			}
			return ajax.apply(this, arguments);
		};
	}
})(jQuery);

// provides cross-browser focusin and focusout events
// IE has native support, in other browsers, use event caputuring (neither bubbles)

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
;(function($) {
	// only implement if not provided by jQuery core (since 1.4)
	// TODO verify if jQuery 1.4's implementation is compatible with older jQuery special-event APIs
	if (!jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener) {
		$.each({
			focus: 'focusin',
			blur: 'focusout'
		}, function( original, fix ){
			$.event.special[fix] = {
				setup:function() {
					this.addEventListener( original, handler, true );
				},
				teardown:function() {
					this.removeEventListener( original, handler, true );
				},
				handler: function(e) {
					arguments[0] = $.event.fix(e);
					arguments[0].type = fix;
					return $.event.handle.apply(this, arguments);
				}
			};
			function handler(e) {
				e = $.event.fix(e);
				e.type = fix;
				return $.event.handle.call(this, e);
			}
		});
	};
	$.extend($.fn, {
		validateDelegate: function(delegate, type, handler) {
			return this.bind(type, function(event) {
				var target = $(event.target);
				if (target.is(delegate)) {
					return handler.apply(target, arguments);
				}
			});
		}
	});
})(jQuery);
