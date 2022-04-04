"use strict";(self.webpackChunkclickhouse=self.webpackChunkclickhouse||[]).push([[66250],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,b=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(b,o(o({ref:n},u),{},{components:t})):r.createElement(b,o({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3299:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={sidebar_label:"Lazy",sidebar_position:20},c="Lazy",l={unversionedId:"en/engines/database-engines/lazy",id:"en/engines/database-engines/lazy",title:"Lazy",description:"lazy}",source:"@site/docs/en/engines/database-engines/lazy.md",sourceDirName:"en/engines/database-engines",slug:"/en/engines/database-engines/lazy",permalink:"/docs/staging/docs/en/engines/database-engines/lazy",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_label:"Lazy",sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Atomic",permalink:"/docs/staging/docs/en/engines/database-engines/atomic"},next:{title:"Replicated",permalink:"/docs/staging/docs/en/engines/database-engines/replicated"}},u={},p=[{value:"Creating a Database",id:"creating-a-database",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lazy"},"Lazy"),(0,i.kt)("p",null,"Keeps tables in RAM only ",(0,i.kt)("inlineCode",{parentName:"p"},"expiration_time_in_seconds")," seconds after last access. Can be used only with ","*","Log tables."),(0,i.kt)("p",null,"It\u2019s optimized for storing many small ","*","Log tables, for which there is a long time interval between accesses."),(0,i.kt)("h2",{id:"creating-a-database"},"Creating a Database"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CREATE DATABASE testlazy ENGINE = Lazy(expiration_time_in_seconds);\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://clickhouse.com/docs/en/database_engines/lazy/"},"Original article")," "))}f.isMDXComponent=!0}}]);