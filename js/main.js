"use strict";console.log(String.raw`
          _____                    _____                    _____                    _____          
         /\    \                  /\    \                  /\    \                  /\    \         
        /::\____\                /::\    \                /::\    \                /::\    \        
       /:::/    /               /::::\    \               \:::\    \              /::::\    \       
      /:::/    /               /::::::\    \               \:::\    \            /::::::\    \      
     /:::/    /               /:::/\:::\    \               \:::\    \          /:::/\:::\    \     
    /:::/____/               /:::/__\:::\    \               \:::\    \        /:::/__\:::\    \    
   /::::\    \              /::::\   \:::\    \               \:::\    \      /::::\   \:::\    \   
  /::::::\____\________    /::::::\   \:::\    \               \:::\    \    /::::::\   \:::\    \  
 /:::/\:::::::::::\    \  /:::/\:::\   \:::\    \               \:::\    \  /:::/\:::\   \:::\    \ 
/:::/  |:::::::::::\____\/:::/  \:::\   \:::\____\_______________\:::\____\/:::/__\:::\   \:::\____\
\::/   |::|~~~|~~~~~     \::/    \:::\  /:::/    /\::::::::::::::::::/    /\:::\   \:::\   \::/    /
 \/____|::|   |           \/____/ \:::\/:::/    /  \::::::::::::::::/____/  \:::\   \:::\   \/____/ 
       |::|   |                    \::::::/    /    \:::\~~~~\~~~~~~         \:::\   \:::\    \     
       |::|   |                     \::::/    /      \:::\    \               \:::\   \:::\____\    
       |::|   |                     /:::/    /        \:::\    \               \:::\   \::/    /    
       |::|   |                    /:::/    /          \:::\    \               \:::\   \/____/     
       |::|   |                   /:::/    /            \:::\    \               \:::\    \         
       \::|   |                  /:::/    /              \:::\____\               \:::\____\        
        \:|   |                  \::/    /                \::/    /                \::/    /        
         \|___|                   \/____/                  \/____/                  \/____/         
see theme at https://github.com/theme-kaze/hexo-theme-kaze
`);const scrollWidth=document.body.scrollWidth||document.documentElement.scrollWidth;let darkControlButton=null,searchControlButton=null;scrollWidth<=742?(darkControlButton=document.getElementsByClassName("darkwidget")[0],searchControlButton=document.getElementsByClassName("searchwidget")[0]):(darkControlButton=document.getElementsByClassName("darknavbar")[0],searchControlButton=document.getElementsByClassName("searchnavbar")[0]),darkControlButton.addEventListener("click",()=>{setDarkmode(reverseDarkModeSetting())});const smoothScrollToTop=()=>{let t=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;t>1?(window.requestAnimationFrame(smoothScrollToTop),scrollTo(0,Math.floor(.85*t))):scrollTo(0,0)};setTimeout(()=>{document.getElementById("scrollbutton").onclick=smoothScrollToTop},0);const reversePopButton=()=>{const t=document.getElementById("scrollbutton"),e=document.getElementById("menubutton"),o=document.getElementById("popbutton"),n=document.body.scrollWidth||document.documentElement.scrollWidth;"1"===t.style.opacity?(t.style.bottom="32px",t.style.opacity="0",o.style.transform="none"):(o.style.transform="rotate(90deg)",t.style.bottom="85px",t.style.opacity="1");const l=document.getElementById("mobiletoc");n<=862&&l&&("1"===e.style.opacity?(e.style.right="32px",e.style.opacity="0"):(e.style.right="85px",e.style.opacity="1"));const c=document.querySelector(".darkwidget"),s=document.querySelector(".searchwidget");n<=742&&("1"===c.style.opacity?(c.style.bottom="32px",c.style.opacity="0",c.style.transform="none"):(c.style.display="flex",o.style.transform="rotate(90deg)",c.style.bottom="138px",c.style.opacity="1"),"1"===s.style.opacity?(s.style.bottom="32px",s.style.opacity="0",s.style.transform="none"):(s.style.display="flex",s.style.transform="rotate(90deg)",s.style.bottom="191px",s.style.opacity="1"))};function menuClick(t){const e=t.target,o=document.getElementById("mobiletoc");o&&(o.contains(e)||(o.style.display="none",mask.remove(),document.removeEventListener("click",menuClick)))}setTimeout(()=>{document.getElementById("popbutton").addEventListener("click",reversePopButton)},0);const clickMenuButton=()=>{const t=document.getElementById("mobiletoc");if(!t)return;t.style.display="block";const e=document.createElement("div");e.id="mask",document.body.append(e),setTimeout(()=>{document.addEventListener("click",menuClick)},0)};function searchClick(t){const e=document.querySelector("#local-search");if(!e.contains(t.target)){const t=document.querySelector("#search-input"),o=document.querySelector("#search-content");t.value="",e.style.display="none",o.innerHTML="",mask.remove(),document.removeEventListener("click",searchClick)}}setTimeout(()=>{document.getElementById("menubutton").onclick=clickMenuButton},0),setTimeout(()=>{searchControlButton.addEventListener("click",()=>{const t=document.createElement("div");t.id="mask",document.body.append(t),document.querySelector("#local-search").style.display="block",setTimeout(()=>{document.addEventListener("click",searchClick)},0)})});const localSearch=function(t){fetch(t).then(t=>t.json()).then(t=>{let e=document.getElementById("search-input"),o=document.getElementById("search-content");e.addEventListener("input",function(){let e='<ul class="search-result-list">',n=this.value.trim().toLowerCase();if(o.innerHTML="",!(this.value.trim().length<=0)){if(t.forEach(function(t){let o=!0;t.title&&""!==t.title.trim()||(t.title="Untitled");const l=t.title.trim().toLowerCase(),c=t.content.trim().replace(/<[^>]+>/g,"").toLowerCase();let s=-1;if(""!==c){const t=l.indexOf(n),e=c.indexOf(n);s=e,t<0&&e<0?o=!1:e<0&&(s=0)}else o=!1;if(o){e+=`<li><a href="${t.url}" class="search-result-title" >'${l}</a>`;const o=t.content;if(s>=0){const t=Math.max(0,s-12),l=Math.min(o.length,s+12);let c=o.substr(t,l);c=c.replace(new RegExp(n,"gi"),'<em class="search-keyword">'+n+"</em>"),e+='<p class="search-result">'+c+"...</p>"}e+="</li>"}}),-1===(e+="</ul>").indexOf("<li>"))return o.innerHTML='<ul><span class="local-search-empty">没有搜索到结果<span></ul>';o.innerHTML=e}})})};