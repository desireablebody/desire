(function(){var d=null;var h="google_conversion_id,google_conversion_format,google_conversion_type,google_conversion_order_id,google_conversion_language,google_conversion_value,google_conversion_domain,google_conversion_label,google_conversion_color,google_disable_viewthrough,google_remarketing_only,google_conversion_items,google_custom_params,google_conversion_date,google_conversion_time,google_conversion_js_version,onload_callback,opt_image_generator,google_is_call".split(",");
function i(a){return a!=d?escape(a.toString()):""}function j(a,b){var f=i(b);if(f!=""){var c=i(a);if(c!="")return"&".concat(c,"=",f)}return""}function k(a){var b=typeof a;return a==d||b=="object"||b=="function"?d:String(a).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")}
function l(a){var b;a=a.google_custom_params;if(!a||typeof a!="object"||typeof a.join=="function")b="";else{var f=[];for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];if(c&&typeof c.join=="function"){for(var e=[],g=0;g<c.length;++g){var q=k(c[g]);q!=d&&e.push(q)}c=e.length==0?d:e.join(",")}else c=k(c);(e=k(b))&&c!=d&&f.push(e+"="+c)}b=f.join(";")}return b==""?"":"&".concat("data=",encodeURIComponent(b))}
function m(a){return typeof a!="number"&&typeof a!="string"?"":i(a.toString())}function n(a){if(!a)return"";a=a.google_conversion_items;if(!a)return"";for(var b=[],f=0,c=a.length;f<c;f++){var e=a[f],g=[];e&&(g.push(m(e.value)),g.push(m(e.quantity)),g.push(m(e.item_id)),g.push(m(e.adwords_grouping)),g.push(m(e.sku)),b.push("("+g.join("*")+")"))}return b.length>0?"&item="+b.join(""):""}
function o(a,b,f){var c=[];if(a){var e=a.screen;e&&(c.push(j("u_h",e.height)),c.push(j("u_w",e.width)),c.push(j("u_ah",e.availHeight)),c.push(j("u_aw",e.availWidth)),c.push(j("u_cd",e.colorDepth)));a.history&&c.push(j("u_his",a.history.length))}f&&typeof f.getTimezoneOffset=="function"&&c.push(j("u_tz",-f.getTimezoneOffset()));b&&(typeof b.javaEnabled=="function"&&c.push(j("u_java",b.javaEnabled())),b.plugins&&c.push(j("u_nplug",b.plugins.length)),b.mimeTypes&&c.push(j("u_nmime",b.mimeTypes.length)));
return c.join("")}function p(a,b){var f="";if(b){var c=b.referrer;if(a&&a.top&&b.location&&a.top.location==b.location)f+=j("ref",c!=d?c.toString().substring(0,256):""),c=b.location;f+=j("url",c!=d?c.toString().substring(0,256):"")}return f}function r(a){return a&&a.location&&a.location.protocol&&a.location.protocol.toString().toLowerCase()=="https:"?"https:":"http:"}
function s(a){return a.google_remarketing_only?"googleads.g.doubleclick.net":a.google_conversion_domain||"www.googleadservices.com"}
function t(a,b){var f=navigator,c=document,e="/?";b.google_conversion_type=="landing"&&(e="/extclk?");var e=r(a)+"//"+s(b)+"/pagead/"+[b.google_remarketing_only?"viewthroughconversion/":"conversion/",i(b.google_conversion_id),e,"random=",i(b.google_conversion_time)].join(""),g;a:{g=b.google_conversion_language;if(g!=d){g=g.toString();if(2==g.length){g=j("hl",g);break a}if(5==g.length){g=j("hl",g.substring(0,2))+j("gl",g.substring(3,5));break a}}g=""}e+=[j("cv",b.google_conversion_js_version),j("fst",
b.google_conversion_first_time),j("num",b.google_conversion_snippets),j("fmt",b.google_conversion_format),j("value",b.google_conversion_value),j("label",b.google_conversion_label),j("oid",b.google_conversion_order_id),j("bg",b.google_conversion_color),g,j("guid","ON"),j("disvt",b.google_disable_viewthrough),j("is_call",b.google_is_call),n(b),o(a,f,b.google_conversion_date),p(a,c),l(b)].join("");return e}
function u(){var a=v,b=v,f=t(a,b),c=function(a,b,c){return'<img height="'+c+'" width="'+b+'" border="0" src="'+a+'" />'};return b.google_conversion_format==0&&b.google_conversion_domain==d?'<a href="'+(r(a)+"//services.google.com/sitestats/"+({ar:1,bg:1,cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[b.google_conversion_language]?b.google_conversion_language+
".html":"en_US.html")+"?cid="+i(b.google_conversion_id))+'" target="_blank">'+c(f,135,27)+"</a>":b.google_conversion_snippets>1||b.google_conversion_format==3?c(f,1,1):'<iframe name="google_conversion_frame" width="'+(b.google_conversion_format==2?200:300)+'" height="'+(b.google_conversion_format==2?26:13)+'" src="'+f+'" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no">'+c(f.replace(/\?random=/,"?frame=0&random="),1,1)+"</iframe>"}
function w(){var a=v;if(a.google_conversion_type=="landing"||!a.google_conversion_id)return false;if(a.google_remarketing_only&&a.google_disable_viewthrough)return false;a.google_conversion_date=new Date;a.google_conversion_time=a.google_conversion_date.getTime();typeof a.google_conversion_snippets=="number"&&a.google_conversion_snippets>0?a.google_conversion_snippets+=1:a.google_conversion_snippets=1;typeof a.google_conversion_first_time!="number"&&(a.google_conversion_first_time=a.google_conversion_time);
a.google_conversion_js_version="7";a.google_conversion_format!=0&&a.google_conversion_format!=1&&a.google_conversion_format!=2&&a.google_conversion_format!=3&&(a.google_conversion_format=1);return true};var v=window;if(v)if(/[\?&;]google_debug/.exec(document.URL)!=d){var x=v,y=document.getElementsByTagName("head")[0];y||(y=document.createElement("head"),document.getElementsByTagName("html")[0].insertBefore(y,document.getElementsByTagName("body")[0]));var z=document.createElement("script");z.src=r(window)+"//"+s(x)+"/pagead/conversion_debug_overlay.js";y.appendChild(z)}else{try{w()&&document.write(u())}catch(A){}for(var B=v,C=0;C<h.length;C++)B[h[C]]=d};})();