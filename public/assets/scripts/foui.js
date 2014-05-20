if(!window.fouiData){window.fouiData={}}
if(!/msie/i.test(navigator.userAgent)){var CollectGarbage=function(){}}
var lastErrorHandler=window.onerror;window.onerror=function(c,b,a){window.onerror=lastErrorHandler;return true};if(typeof(HTMLElement)!="undefined"&&!window.opera){try{HTMLElement.prototype.__defineGetter__("outerHTML",function(){var b=this.attributes,d="<"+this.tagName,c=0;for(;c<b.length;c++){if(b[c].specified){d+=" "+b[c].name+'="'+b[c].value+'"'}}
if(!this.canHaveChildren){return d+" />"}
return d+">"+this.innerHTML+"</"+this.tagName+">"});HTMLElement.prototype.__defineSetter__("outerHTML",function(a){var b=this.ownerDocument.createRange();b.setStartBefore(this);var c=b.createContextualFragment(a);this.parentNode.replaceChild(c,this);return a});HTMLElement.prototype.__defineGetter__("canHaveChildren",function(){return!/^(area|base|basefont|col|frame|hr|img|br|input|isindex|link|meta|param)$/.test(this.tagName.toLowerCase())})}catch(e){}}(function(){var h=window.document,b=document.compatMode,a=jQuery.browser;var f={isIE:a.msie,isIE6:a.msie&&a.version<7,isIE7:a.msie&&a.version==7,isDTD:"CSS1Compat"==b,onLine:navigator.onLine,$F:function(i){return document.getElementById(i)},load:function(k,m,r){if("undefined"===typeof k||""==k){return false}
var o=window.document,j,n=o.getElementsByTagName("head")[0],i=k.substring(k.lastIndexOf(".")),l=r?"?v="+r:"";if(".css"==i){j=o.createElement("link");j.rel="stylesheet";j.type="text/css";j.href=k.concat(l);n.appendChild(j);var q=o.styleSheets,p=function(){for(var s=q.length;s--;){if(j===(q[s].ownerNode||q[s].owningElement)){return m()}}
setTimeout(arguments.callee,5)};m&&p()}else{if(".js"==i){j=o.createElement("script");j.type="text/javascript";j.src=k.concat(l);j.onload=j.onreadystatechange=function(){if(!j.readyState||/loaded|complete/.test(j.readyState)){j.onload=j.onreadystatechange=null;j.parentNode.removeChild(j);j=undefined;m&&m()}};o.body.appendChild(j)}}},ltrim:function(i){return i.replace(/(^\s*)/g,"")},rtrim:function(i){return i.replace(/(\s*$)/g,"")},trim:function(i){return i.replace(/(^\s*)|(\s*$)/g,"")},cookie:{get:function(l){var j=document.cookie;var n=null;if("undefined"!==typeof j&&j!=""){var o=j.split(";");for(var m=0;m<o.length;m++){var k=f.trim(o[m]);if(k.substring(0,l.length+1)==(l+"=")){n=decodeURIComponent(k.substring(l.length+1));break}}}
return n},set:function(l,n,k){k=k||{};if(null===n){n="";k.expires=-1}
var i="";if(k.expires&&("number"==typeof k.expires||k.expires.toUTCString)){var j;if("number"==typeof k.expires){j=new Date();j.setTime(j.getTime()+(k.expires*24*60*60*1000))}else{j=k.expires}
i="; expires="+j.toUTCString()}
var p=k.path?"; path="+(k.path):"";var m=k.domain?"; domain="+(k.domain):"";var o=k.secure?"; secure":"";document.cookie=[l,"=",encodeURIComponent(n),i,p,m,o].join("")}},sprintf:function(){var i=arguments;var k=function(){if(typeof i=="undefined"){return null}
if(i.length<1){return null}
if(typeof i[0]!="string"){return null}
if(typeof RegExp=="undefined"){return null}
var t=i[0];var n=new RegExp(/(%([%]|(\-)?(\+|\x20)?(0)?(\d+)?(\.(\d)?)?([bcdfosxX])))/g);var r=[];var v=[];var l=0;var s=0;var w=0;var o=0;var u="";var q=null;while(q=n.exec(t)){if(q[9]){l+=1}
s=o;w=n.lastIndex-q[0].length;v[v.length]=t.substring(s,w);o=n.lastIndex;r[r.length]={match:q[0],left:q[3]?true:false,sign:q[4]||"",pad:q[5]||" ",min:q[6]||0,precision:q[8],code:q[9]||"%",negative:parseInt(i[l])<0?true:false,argument:String(i[l])}}
v[v.length]=t.substring(o);if(r.length==0){return t}
if((i.length-1)<l){return null}
var m=null;var q=null;var p=null;for(p=0;p<r.length;p++){if(r[p].code=="%"){substitution="%"}else{if(r[p].code=="b"){r[p].argument=String(Math.abs(parseInt(r[p].argument)).toString(2));substitution=j(r[p],true)}else{if(r[p].code=="c"){r[p].argument=String(String.fromCharCode(parseInt(Math.abs(parseInt(r[p].argument)))));substitution=j(r[p],true)}else{if(r[p].code=="d"){r[p].argument=String(Math.abs(parseInt(r[p].argument)));substitution=j(r[p])}else{if(r[p].code=="f"){r[p].argument=String(Math.abs(parseFloat(r[p].argument)).toFixed(r[p].precision?r[p].precision:6));substitution=j(r[p])}else{if(r[p].code=="o"){r[p].argument=String(Math.abs(parseInt(r[p].argument)).toString(8));substitution=j(r[p])}else{if(r[p].code=="s"){r[p].argument=r[p].argument.substring(0,r[p].precision?r[p].precision:r[p].argument.length);substitution=j(r[p],true)}else{if(r[p].code=="x"){r[p].argument=String(Math.abs(parseInt(r[p].argument)).toString(16));substitution=j(r[p])}else{if(r[p].code=="X"){r[p].argument=String(Math.abs(parseInt(r[p].argument)).toString(16));substitution=j(r[p]).toUpperCase()}else{substitution=r[p].match}}}}}}}}}
u+=v[p];u+=substitution}
u+=v[p];return u};var j=function(n,p){if(p){n.sign=""}else{n.sign=n.negative?"-":n.sign}
var m=n.min-n.argument.length+1-n.sign.length;var o=new Array(m<0?0:m).join(n.pad);if(!n.left){if(n.pad=="0"||p){return n.sign+o+n.argument}else{return o+n.sign+n.argument}}else{if(n.pad=="0"||p){return n.sign+n.argument+o.replace(/0/g," ")}else{return n.sign+n.argument+o}}};return k()},getStringLength:function(l){var m=0;for(var j=0,k=l.length;j<k;j++){if(l.charCodeAt(j)>255){m+=2}else{m+=1}}
return m},IE:function(){if(/msie (\d+\.\d)/i.test(navigator.userAgent)){return document.documentMode||parseFloat(RegExp.$1)}
return 0},getMousePosition:function(l){var l=l||window.event;var i=l.srcElement;var k=0;var j=0;var m=[k+l.clientX,j+l.clientY];return m},addEvent:function(j,i,k){if(j.addEventListener){j.addEventListener(i,listener,false);return true}else{if(j.attachEvent){j["e"+i+listener]=listener;j[i+listener]=function(){j["e"+i+listener](window.event)};j.attachEvent("on"+i,j[i+listener]);return true}}
return false},removeEvent:function(j,i,k){if(j.removeEventListener){j.removeEventListener(i,k,false);return true}else{if(j.detachEvent){j.detachEvent("on"+i,j[i+k]);j[i+k]=null;return true}}
return false},getEventObject:function(i){return i||window.event},getPointerPositionInDocument:function(j){var k=this;j=j||k.getEventObject(j);var i=j.pageX||(j.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft));var l=j.pageY||(j.clientY+(document.documentElement.scrollTop||document.body.scrollTop));return{x:i,y:l}},getMouseButton:function(i){var k=this;i=i||k.getEventObject(i);var j={left:false,middle:false,right:false};if(i.toString&&i.toString().indexOf("MouseEvent")!=-1){switch(i.button){case 0:j.left=true;break;case 1:j.middle=true;break;case 2:j.right=true;break;default:break}}else{if(i.button){switch(i.button){case 1:j.left=true;break;case 2:j.right=true;break;case 3:j.left=true;j.right=true;break;case 4:j.middle=true;break;case 5:j.left=true;j.middle=true;break;case 6:j.middle=true;j.right=true;break;case 7:j.left=true;j.middle=true;j.right=true;break;default:break}}else{return false}}
return j},getBrowserWindowSize:function(){var k=document.documentElement,j=window,i=document.body;return{width:(j.innerWidth||(k&&k.clientWidth)||i.clientWidth),height:(j.innerHeight||(k&&k.clientHeight)||i.clientHeight)}},clone:function(l){if(typeof(l)!="object"){return l}
if(l==null){return l}
var k={};for(var j in l){k[j]=clone(l[j])}
return k},strSclice:function(m,o){if(m==""||o==""||typeof m!="string"||typeof o!="number"){return}
var l=this;var i=l.trim(m);var k=l.getByteLength(i);var j=(k>=o)?m.slice(0,o):i;return j},strSplit:function(j,k,i){if(j==""||k==""||typeof j!="string"||typeof i!="number"){return}
var j=j.split(k);return j[i]},getTime:function(p){var n=this;var j=new Date(),o;var l=j.getHours();var i=j.getMinutes();var k=j.getSeconds();i=n.checkTime(i);k=n.checkTime(k);switch(p){case 0:o=l+":"+i+":"+k;break;case 1:o=l+":"+i;break}
return o},checkTime:function(j){if(j<10){j="0"+j}
return j},lengthByte:function(i){return i.replace(/[^\x00-\xff]/g,"**").length},dimension:{clntWidth:function(){return f.isDTD?h.documentElement.clientWidth:h.body.clientWidth},clntHeight:function(){return f.isDTD?h.documentElement.clientHeight:h.body.clientHeight},docWidth:function(){var n=h.documentElement,m=h.body,i=n.scrollWidth,k=n.clientWidth,j=m.scrollWidth,l=m.clientWidth;return f.isDTD?(i>k?i:k):(j>l?j:l)},docHeight:function(){var n=h.documentElement,i=h.body,j=n.scrollHeight,l=n.clientHeight,k=i.scrollHeight,m=i.clientHeight;return f.isDTD?(j>l?j:l):(k>m?k:m)},scrlLeft:function(){return f.isDTD?h.documentElement.scrollLeft:h.body.scrollLeft},scrlTop:function(){return f.isDTD?h.documentElement.scrollTop:h.body.scrollTop}},mouse:{clntPosition:function(i){i=i||window.event;if(i.clientX||i.clientY){return{x:i.clientX,y:i.clientY}}
return{x:0,y:0}},docPosition:function(i){i=i||window.event;if(i.pageX||i.pageY){return{x:i.pageX,y:i.pageY}}else{if(i.clientX||i.clientY){return f.isDTD?{x:i.clientX+dd.scrollLeft,y:i.clientY+dd.scrollTop}:{x:i.clientX+db.scrollLeft,y:i.clientY+db.scrollTop}}}
return{x:0,y:0}}},frmTrans:function(i){i.onload=i.onreadystatechange=function(){if(!i.readyState||/loaded|complete/.test(i.readyState)){i.onload=i.onreadystatechange=null;var m=i.contentDocument||i.contentWindow.document;var k=m.getElementsByTagName("head")[0];var l=m.createElement("style");l.setAttribute("type","text/css");var j="body{background-color:transparent}";if(l.styleSheet){l.styleSheet.cssText=j}else{if(m.createTextNode){l.appendChild(m.createTextNode(j))}}
i.setAttribute("allowTransparency",true);k.appendChild(l)}}},escapeString:function(i){if(!i||"string"!=typeof i){return i}
return i.replace(/\"/g," ").replace(/\'/g,"").replace(/</g,"").replace(/>/g,"").replace(/\\/g,"").replace(/\//g,"")},encodeHTML:function(i){return String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/\'/g,"&#39;")},decodeHTML:function(i){var j=String(i).replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");return j.replace(/&#([\d]+);/g,function(l,k){return String.fromCharCode(parseInt(k,10))})},getByteLength:function(i){return String(i).replace(/[^\x00-\xff]/g,"ci").length},arrayRemove:function(k,j){if(isNaN(k)||k>j.length){return false}
for(var l=0,m=0;l<j.length;l++){if(j[l]!=j[k]){j[m++]=j[l]}}
return j.length-=1},bdam_show:function(){if(typeof(BAIDU_CLB_fillSlotAsync)=="function"){$("div[databdadid]").each(function(j,l){var k=$(l).attr("databdadid");if(k){BAIDU_CLB_fillSlotAsync(k,"div_databdadid_"+k)}})}},arrayGetIndexByValue:function(m,j){if(typeof j!="function"){return}
var k=-1;for(var l=0;l<j.length;l++){if(j[l]==m){k=l;break}}
return k},publicWinOpen:function(){var k=screen.availHeight;var i=screen.availWidth;var l=0,r=0,o=0,m=0,p="",j="";switch(arguments.length){case 0:break;case 1:if(typeof arguments[0]=="string"){j=arguments[0]}
break;case 2:if(typeof arguments[0]=="string"){j=arguments[0]}
if(typeof parseInt(arguments[1])=="number"){l=arguments[1]}
break;case 3:if(typeof arguments[0]=="string"){j=arguments[0]}
if(typeof parseInt(arguments[1])=="number"){l=arguments[1]}
if(typeof parseInt(arguments[2])=="number"){r=arguments[2]}
break;case 4:if(typeof arguments[0]=="string"){j=arguments[0]}
if(typeof parseInt(arguments[1])=="number"){l=arguments[1]}
if(typeof parseInt(arguments[2])=="number"){r=arguments[2]}
if(typeof arguments[3]=="string"){p=arguments[3]}
break;case 5:if(typeof arguments[0]=="string"){j=arguments[0]}
if(typeof parseInt(arguments[1])=="number"){l=arguments[1]}
if(typeof parseInt(arguments[2])=="number"){r=arguments[2]}
if(typeof arguments[3]=="string"){p=arguments[3]}
if(typeof parseInt(arguments[4])=="number"){o=arguments[4]}
break;case 6:if(typeof arguments[0]=="string"){j=arguments[0]}
if(typeof parseInt(arguments[1])=="number"){l=arguments[1]}
if(typeof parseInt(arguments[2])=="number"){r=arguments[2]}
if(typeof arguments[3]=="string"){p=arguments[3]}
if(typeof parseInt(arguments[4])=="number"){o=arguments[4]}
if(typeof parseInt(arguments[5])=="number"){m=arguments[5]}
break;default:break}
j=j?j:"http://jiaoyou.51.com/?c=webchat";l=l?l:865;r=r?r:645;p=p?p:"webchat";o=(parseInt(k)-parseInt(l))/2;m=(parseInt(i)-parseInt(r))/2;var q=window.open(j,p,"height="+r+",width="+l+",top="+o+",left="+m+",toolbar=no,menubar=no,scrollbars=no,location=no,status=no");try{if(q==null){}
q.focus()}catch(n){}}};window.foui=f;function g(){var j=d("sfromtomasi"),i=f.cookie.get("sfromtomasi");if(j!=""){if(i==null||i==""||typeof i=="undefined"){f.cookie.set("sfromtomasi",encodeURIComponent(j),{path:"/",expires:0,domain:"wuming.com"})}}}
window.writeMarkers=g;function d(n){if(n==""){return""}
var m=location.href;var p=m.substring(m.indexOf("?")+1,m.length).split("&");var k={},r;for(var o=0,l=p.length;o<l;o++){r=p[o];k[r.substring(0,r.indexOf("=")).toLowerCase()]=r.substring(r.indexOf("=")+1,r.length)}
var q=k[n.toLowerCase()];if(typeof(k)=="undefined"){return""}else{return k._s_from}}
window.requestpam=d;})();(function(){jQuery.extend({cookie:function(c,a,b){if("undefined"===typeof a){return foui.cookie.get(c)}else{return foui.cookie.set(c,a,b)}}})})(jQuery);