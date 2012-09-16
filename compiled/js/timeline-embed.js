/*jslint browser: true, eqeqeq: true, bitwise: true, newcap: true, immed: true, regexp: false *//**
LazyLoad makes it easy and painless to lazily load one or more external
JavaScript or CSS files on demand either during or after the rendering of a web
page.

Supported browsers include Firefox 2+, IE6+, Safari 3+ (including Mobile
Safari), Google Chrome, and Opera 9+. Other browsers may or may not work and
are not officially supported.

Visit https://github.com/rgrove/lazyload/ for more info.

Copyright (c) 2011 Ryan Grove <ryan@wonko.com>
All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@module lazyload
@class LazyLoad
@static
@version 2.0.3 (git)
*/function getScriptPath(a)
{
   var b=document.getElementsByTagName("script"),
   c="";
   for(var d=0;d<b.length;d++)b[d].src.match(a)&&(c=b[d].src);
   return c.split("?")[0].split("/").slice(0,-1).join("/")+"/"
}
LazyLoad=function(a)
{
    function h(b,c)
    {
        var d=a.createElement(b),e;
        for(e in c)c.hasOwnProperty(e)&&d.setAttribute(e,c[e]);
        return d
    }
    
    function i(a)
    {
        var b=d[a],c,g;
        if(b)
        {
            c=b.callback;
            g=b.urls;g.shift();
            e=0;
            if(!g.length)
            {
                c&&c.call(b.context,b.obj);
                d[a]=null;
                f[a].length&&k(a)
            }
        }
    }
    
    function j()
    {
        var c=navigator.userAgent;
        b={async:a.createElement("script").async===!0};
        (b.webkit=/AppleWebKit\//.test(c))||(b.ie=/MSIE/.test(c))||(b.opera=/Opera/.test(c))||(b.gecko=/Gecko\//.test(c))||(b.unknown=!0)
    }
    
    function k(e,g,k,n,o)
    {
        var p=function(){i(e)},q=e==="css",r=[],s,t,u,v,w,x;b||j();
        
        if(g)
        {
            g=typeof g=="string"?[g]:g.concat();
            if
            (q||b.async||b.gecko||b.opera)f[e].push({urls:g,callback:k,obj:n,context:o});else for(s=0,t=g.length;s<t;++s)f[e].push({urls:[g[s]],callback:s===t-1?k:null,obj:n,context:o})}if(d[e]||!(v=d[e]=f[e].shift()))return;c||(c=a.head||a.getElementsByTagName("head")[0]);w=v.urls;for(s=0,t=w.length;s<t;++s){x=w[s];if(q)u=b.gecko?h("style"):h("link",{href:x,rel:"stylesheet"});else{u=h("script",{src:x});u.async=!1}u.className="lazyload";u.setAttribute("charset","utf-8");if(b.ie&&!q)u.onreadystatechange=function(){if(/loaded|complete/.test(u.readyState)){u.onreadystatechange=null;p()}};else if(q&&(b.gecko||b.webkit))if(b.webkit){v.urls[s]=u.href;m()}else{u.innerHTML='@import "'+x+'";';l(u)}else u.onload=u.onerror=p;r.push(u)}for(s=0,t=r.length;s<t;++s)c.appendChild(r[s])}function l(a){var b;try{b=!!a.sheet.cssRules}catch(c){e+=1;e<200?setTimeout(function(){l(a)},50):b&&i("css");return}i("css")}function m(){var a=d.css,b;if(a){b=g.length;while(--b>=0)if(g[b].href===a.urls[0]){i("css");break}e+=1;a&&(e<200?setTimeout(m,50):i("css"))}}var b,c,d={},e=0,f={css:[],js:[]},g=a.styleSheets;return{css:function(a,b,c,d){k("css",a,b,c,d)},js:function(a,b,c,d){k("js",a,b,c,d)}}}(this.document);LazyLoad=function(a){function h(b,c){var d=a.createElement(b),e;for(e in c)c.hasOwnProperty(e)&&d.setAttribute(e,c[e]);return d}function i(a){var b=d[a],c,g;if(b){c=b.callback;g=b.urls;g.shift();e=0;if(!g.length){c&&c.call(b.context,b.obj);d[a]=null;f[a].length&&k(a)}}}function j(){var c=navigator.userAgent;b={async:a.createElement("script").async===!0};(b.webkit=/AppleWebKit\//.test(c))||(b.ie=/MSIE/.test(c))||(b.opera=/Opera/.test(c))||(b.gecko=/Gecko\//.test(c))||(b.unknown=!0)}function k(e,g,k,n,o){var p=function(){i(e)},q=e==="css",r=[],s,t,u,v,w,x;b||j();if(g){g=typeof g=="string"?[g]:g.concat();if(q||b.async||b.gecko||b.opera)f[e].push({urls:g,callback:k,obj:n,context:o});else for(s=0,t=g.length;s<t;++s)f[e].push({urls:[g[s]],callback:s===t-1?k:null,obj:n,context:o})}if(d[e]||!(v=d[e]=f[e].shift()))return;c||(c=a.head||a.getElementsByTagName("head")[0]);w=v.urls;for(s=0,t=w.length;s<t;++s){x=w[s];if(q)u=b.gecko?h("style"):h("link",{href:x,rel:"stylesheet"});else{u=h("script",{src:x});u.async=!1}u.className="lazyload";u.setAttribute("charset","utf-8");if(b.ie&&!q)u.onreadystatechange=function(){if(/loaded|complete/.test(u.readyState)){u.onreadystatechange=null;p()}};else if(q&&(b.gecko||b.webkit))if(b.webkit){v.urls[s]=u.href;m()}else{u.innerHTML='@import "'+x+'";';l(u)}else u.onload=u.onerror=p;r.push(u)}for(s=0,t=r.length;s<t;++s)c.appendChild(r[s])}function l(a){var b;try{b=!!a.sheet.cssRules}catch(c){e+=1;e<200?setTimeout(function(){l(a)},50):b&&i("css");return}i("css")}function m(){var a=d.css,b;if(a){b=g.length;while(--b>=0)if(g[b].href===a.urls[0]){i("css");break}e+=1;a&&(e<200?setTimeout(m,50):i("css"))}}var b,c,d={},e=0,f={css:[],js:[]},g=a.styleSheets;return{css:function(a,b,c,d){k("css",a,b,c,d)},js:function(a,b,c,d){k("js",a,b,c,d)}}}(this.document);var WebFontConfig;if(typeof timeline_path=="undefined"||typeof timeline_path=="undefined")var timeline_path=getScriptPath("timeline-embed.js").split("js/")[0];(function(){function p(){LazyLoad.js(k.js,q)}function q(){i.js=!0;k.lang!="en"?LazyLoad.js(j.locale,r):i.language=!0;v()}function r(){i.language=!0;v()}function s(){i.css=!0;v()}function t(){i.font.css=!0;v()}function u(){i.font.js=!0;v()}function v(){if(i.checks>40)return;i.checks++;if(i.js&&i.css&&i.font.css&&i.font.js&&i.language){if(!i.finished){i.finished=!0;x()}}else i.timeout=setTimeout("onloaded_check_again();",250)}function w(){b=document.createElement("div");c=document.getElementById("timeline-embed");c.appendChild(b);b.setAttribute("id","timeline");if(k.width.toString().match("%")){c.style.width=k.width;c.setAttribute("class","full-embed ");c.setAttribute("className","full-embed ")}else{c.setAttribute("class"," sized-embed");c.setAttribute("className"," sized-embed");k.width=k.width-2;c.style.width=k.width+"px"}if(k.height.toString().match("%"))c.style.height=k.height;else{k.height=k.height-16;c.style.height=k.height+"px"}b.style.position="relative"}function x(){VMM.debug=k.debug;a=new VMM.Timeline;a.init(k.source);e&&VMM.bindEvent(global,onTimelineHeadline,"TIMELINE_HEADLINE")}var a,b,c,d,e=!1,f="1.58",g="1.7.1",h="",i={timeout:"",checks:0,finished:!1,js:!1,css:!1,jquery:!1,has_jquery:!1,language:!1,font:{css:!1,js:!1}},j={base:timeline_path,css:timeline_path+"css/",js:timeline_path+"js/",locale:timeline_path+"js/locale/",jquery:"http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js",font:{google:!1,css:timeline_path+"css/themes/font/",js:"http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"}},k={version:f,debug:!1,embed:!0,width:"100%",height:"650",source:"https://docs.google.com/spreadsheet/pub?key=0Agl_Dv6iEbDadFYzRjJPUGktY0NkWXFUWkVIZDNGRHc&output=html",lang:"en",font:"default",css:j.css+"timeline.css?"+f,js:j.js+"timeline-min.js?"+f},l=[{name:"Merriweather-NewsCycle",google:["News+Cycle:400,700:latin","Merriweather:400,700,900:latin"]},{name:"PoiretOne-Molengo",google:["Poiret+One::latin","Molengo::latin"]},{name:"Arvo-PTSans",google:["Arvo:400,700,400italic:latin","PT+Sans:400,700,400italic:latin"]},{name:"PTSerif-PTSans",google:["PT+Sans:400,700,400italic:latin","PT+Serif:400,700,400italic:latin"]},{name:"PT",google:["PT+Sans+Narrow:400,700:latin","PT+Sans:400,700,400italic:latin","PT+Serif:400,700,400italic:latin"]},{name:"DroidSerif-DroidSans",google:["Droid+Sans:400,700:latin","Droid+Serif:400,700,400italic:latin"]},{name:"Lekton-Molengo",google:["Lekton:400,700,400italic:latin","Molengo::latin"]},{name:"NixieOne-Ledger",google:["Nixie+One::latin","Ledger::latin"]},{name:"AbrilFatface-Average",google:["Average::latin","Abril+Fatface::latin"]},{name:"PlayfairDisplay-Muli",google:["Playfair+Display:400,400italic:latin","Muli:300,400,300italic,400italic:latin"]},{name:"Rancho-Gudea",google:["Rancho::latin","Gudea:400,700,400italic:latin"]},{name:"Bevan-PotanoSans",google:["Bevan::latin","Pontano+Sans::latin"]},{name:"BreeSerif-OpenSans",google:["Bree+Serif::latin","Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800:latin"]},{name:"SansitaOne-Kameron",google:["Sansita+One::latin","Kameron:400,700:latin"]},{name:"Lora-Istok",google:["Lora:400,700,400italic,700italic:latin","Istok+Web:400,700,400italic,700italic:latin"]},{name:"Pacifico-Arimo",google:["Pacifico::latin","Arimo:400,700,400italic,700italic:latin"]}];if(typeof url_config=="object"){k.height="100%";for(d in url_config)Object.prototype.hasOwnProperty.call(url_config,d)&&(k[d]=url_config[d]);k.source.match("docs.google.com")||k.source.match("json")||k.source.match("storify")||(k.source="https://docs.google.com/spreadsheet/pub?key="+k.source+"&output=html");e=!0}else if(typeof timeline_config=="object")for(d in timeline_config)Object.prototype.hasOwnProperty.call(timeline_config,d)&&(k[d]=timeline_config[d]);else if(typeof config=="object")for(d in config)Object.prototype.hasOwnProperty.call(config,d)&&(k[d]=config[d]);k.lang.match("/")?j.locale=k.lang:j.locale=j.locale+k.lang+".js?"+f;if(k.js.match("locale")){k.lang=k.js.split("locale/")[1].replace(".js","");k.js=j.js+"timeline-min.js?"+f}timeline_config=k;w();LazyLoad.css(k.css,s);if(k.font=="default"){i.font.js=!0;i.font.css=!0}else{var m;if(k.font.match("/")){m=k.font.split(".css")[0].split("/");j.font.name=m[m.length-1];j.font.css=k.font}else{j.font.name=k.font;j.font.css=j.font.css+k.font+".css?"+f}LazyLoad.css(j.font.css,t);for(var n=0;n<l.length;n++)if(j.font.name==l[n].name){j.font.google=!0;WebFontConfig={google:{families:l[n].google}}}j.font.google?LazyLoad.js(j.font.js,u):i.font.js=!0}try{i.has_jquery=jQuery;i.has_jquery=!0;if(i.has_jquery){var h=parseFloat(jQuery.fn.jquery);h<parseFloat(g)?i.jquery=!1:i.jquery=!0}}catch(o){i.jquery=!1}i.jquery?p():LazyLoad.js(j.jquery,p);this.onloaded_check_again=function(){v()}})();