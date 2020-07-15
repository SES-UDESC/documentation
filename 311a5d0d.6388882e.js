(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),o=(a(0),a(157)),c=a(164),i=a(165),s={id:"docker",slug:"docker",title:"Docker"},l={id:"Instalacao/Docker/docker",isDocsHomePage:!1,title:"Docker",description:"O projeto tem sua infraestrutura construida baseado no docker.",source:"@site/docs/Instalacao/Docker/Docker.mdx",permalink:"/documentacao/Instalacao/Docker/docker",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Instalacao/Docker/Docker.mdx",sidebar:"docs",previous:{title:"Introdu\xe7\xe3o",permalink:"/documentacao/"},next:{title:"Docker Compose",permalink:"/documentacao/Instalacao/Docker/docker-compose"}},u=[],d={rightToc:u};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"O projeto tem sua infraestrutura construida baseado no docker.\nAssim, todos os componentes como o servidor e a interface s\xe3o disponibilizados atrav\xe9s de containers."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Todas as informa\xe7\xf5es aqui contidas podem ser conferidas na documenta\xe7\xe3o original do docker em: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.docker.com/engine/install/"}),"Docker Engine")))),Object(o.b)(c.a,{groupId:"os",defaultValue:"deb",values:[{label:"Linux (Deb Based)",value:"deb"},{label:"Windows",value:"win"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"deb",mdxType:"TabItem"},Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Confirmar strings no site oficial para cada distro, este exemplo \xe9 para debian"))),Object(o.b)("p",null,"Pode-se instalar o docker utilizando o apt e privil\xe9gios sudo."),Object(o.b)("p",null,"Remover instala\xe7\xf5es antigas, se existirem"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get update\n\nsudo apt-get remove docker docker-engine docker.io containerd runc\n")),Object(o.b)("p",null,"Instalar pacotes de apoio"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get install \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg-agent \\\n    software-properties-common\n")),Object(o.b)("p",null,"Adicionar o reposit\xf3rio do docker ao apt"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),'curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -\n\nsudo add-apt-repository \\\n   "deb [arch=amd64] https://download.docker.com/linux/debian \\\n   $(lsb_release -cs) \\\n   stable"\n\nsudo apt-get update\n')),Object(o.b)("p",null,"Instalar o docker"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get install docker-ce docker-ce-cli containerd.io\n")),Object(o.b)("p",null,"A partir desde ponto, o docker deve estar instalado na m\xe1quina  "),Object(o.b)("p",null,"Para confirir a instala\xe7\xe3o, pode-se executar o comando:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"docker run hello-world\n")),Object(o.b)("p",null,"Um output positivo deve aparecer no terminal")),Object(o.b)(i.a,{value:"win",mdxType:"TabItem"},Object(o.b)("p",null,"Para windows, a instala\xe7\xe3o do docker se d\xe1 atrav\xe9s do Docker Desktop."),Object(o.b)("p",null,"O Docker Desktop deve ser baixado atrav\xe9s do link ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://hub.docker.com/editions/community/docker-ce-desktop-windows"}),"Docker Desktop")),Object(o.b)("p",null,"O Docker Desktop tem a particularidade de instalar o docker-compose junto ao docker, assim, n\xe3o ser\xe1 preciso instala-lo a parte."))))}p.isMDXComponent=!0},157:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(a),b=n,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||o;return a?r.a.createElement(m,i(i({ref:t},l),{},{components:a})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},159:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},160:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=r},161:function(e,t,a){"use strict";var n=a(0),r=a(160);t.a=function(){return Object(n.useContext)(r.a)}},164:function(e,t,a){"use strict";a(24),a(19),a(20);var n=a(0),r=a.n(n),o=a(161),c=a(159),i=a(129),s=a.n(i),l=37,u=39;t.a=function(e){var t=e.block,a=e.children,i=e.defaultValue,d=e.values,p=e.groupId,b=Object(o.a)(),m=b.tabGroupChoices,f=b.setTabGroupChoices,O=Object(n.useState)(i),v=O[0],j=O[1];if(null!=p){var g=m[p];null!=g&&g!==v&&d.some((function(e){return e.value===g}))&&j(g)}var h=function(e){j(e),null!=p&&f(p,e)},k=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":v===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e)},onFocus:function(){return h(t)},onClick:function(){return h(t)}},a)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===v}))[0]))}},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);