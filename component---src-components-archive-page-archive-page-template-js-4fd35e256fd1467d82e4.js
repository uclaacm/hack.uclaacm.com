"use strict";(self.webpackChunkhack_uclaacm_com=self.webpackChunkhack_uclaacm_com||[]).push([[116],{4590:function(e,a,t){t.r(a),t.d(a,{default:function(){return v}});var n=t(7294),r=t(453),i=t(1293),c=t(4040),l=t(920),s=t(6229),m=t(4998),o=(0,l.Z)((function(e){return{chips:{display:"flex",alignItems:"center",flexWrap:"wrap",marginBottom:"10px"},chip:{margin:e.spacing(.4,.25)}}}));var u=function(e){var a=e.tags,t=o(),i=a.map((function(e){return n.createElement(m.Z,{key:e.displayName,label:n.createElement(r.Z,{variant:"caption"},e.displayName),size:"small",className:t.chip,component:"a",href:"/archive/tags/"+e.slugURL,clickable:!0})}));return n.createElement("div",{className:t.chips},i)},p=t(1323),g=t(2248),f=(0,l.Z)((function(e){return{container:{marginTop:e.spacing(4),marginBottom:e.spacing(4)},quarterItem:{display:"flex",flexDirection:"column",width:"100%"},quarterEvent:{padding:e.spacing(2,0)},tagContainer:{margin:e.spacing(5,0)},tagDetails:{margin:e.spacing(1,0,0)}}}));function d(e,a){var t=e.split(" "),n=t[0],r=t[1],i=a.split(" "),c=i[0],l=i[1],s=["Winter","Spring","Summer","Fall"];return r===l?s.indexOf(c)-s.indexOf(n):parseInt(l)-parseInt(r)}function h(e,a){return e===a?0:e<a?-1:1}var v=function(e){var a=e.pageContext,t=f(),l=a.quarterEvents,m=a.allTags,o=function(e){for(var a=[],t=0,n=Object.keys(e);t<n.length;t++){var r=n[t];a.push(r)}return a.sort(d),a}(l);for(var v in l)l[v].sort((function(e,a){return h(e.name,a.name)}));m.sort((function(e,a){return h(e.displayName,a.displayName)}));var E=o.map((function(e){return n.createElement("div",{className:t.quarterItem,key:e},n.createElement(r.Z,{variant:"h5",component:"h2"},e),n.createElement("div",{className:t.quarterEvent},l[e].map((function(e){return n.createElement(c.Z,{key:e.name,name:e.name,mainLink:e.mainLink,tags:e.tags,directors:e.directors,workshops:e.workshops})}))))}));return n.createElement(p.Z,null,n.createElement(g.Z,{title:"Workshop Archive"}),n.createElement(i.Z,{maxWidth:"md",className:t.container},n.createElement(s.Z,{align:"center"},"Workshop Archive"),n.createElement("details",{className:t.tagContainer},n.createElement("summary",null,n.createElement(r.Z,{display:"inline"},"Filter by tag...")),n.createElement("div",{className:t.tagDetails},n.createElement(u,{tags:m}))),E))}}}]);
//# sourceMappingURL=component---src-components-archive-page-archive-page-template-js-4fd35e256fd1467d82e4.js.map