/*! For license information please see 14351faf3f75868bece722acaed3370a99381df5-77821780472cb6f8a3ce.js.LICENSE.txt */
"use strict";(self.webpackChunkhack_uclaacm_com=self.webpackChunkhack_uclaacm_com||[]).push([[810],{2376:function(e,t,n){n.d(t,{Z:function(){return R}});var a=n(4038),o=n(5469),r=n(7826),i=n(112),s=n(9497);var c=n(2277),d=n(1951),l=n(7294),u=(n(7301),n(5505)),p=n(1423),f=n(4621),m=n(381),h=n(9701),v=n(9355),g=n(1291),b=l.forwardRef((function(e,t){var n=e.children,o=e.classes,r=e.className,i=e.collapsedHeight,s=e.collapsedSize,f=void 0===s?"0px":s,b=e.component,x=void 0===b?"div":b,Z=e.disableStrictModeCompat,y=void 0!==Z&&Z,E=e.in,C=e.onEnter,R=e.onEntered,k=e.onEntering,N=e.onExit,w=e.onExited,$=e.onExiting,H=e.style,T=e.timeout,_=void 0===T?m.x9.standard:T,M=e.TransitionComponent,A=void 0===M?p.ZP:M,I=(0,d.Z)(e,["children","classes","className","collapsedHeight","collapsedSize","component","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),S=(0,v.Z)(),B=l.useRef(),D=l.useRef(null),V=l.useRef(),P="number"==typeof(i||f)?"".concat(i||f,"px"):i||f;l.useEffect((function(){return function(){clearTimeout(B.current)}}),[]);var z=S.unstable_strictMode&&!y,L=l.useRef(null),q=(0,g.Z)(t,z?L:void 0),j=function(e){return function(t,n){if(e){var a=z?[L.current,t]:[t,n],o=(0,c.Z)(a,2),r=o[0],i=o[1];void 0===i?e(r):e(r,i)}}},G=j((function(e,t){e.style.height=P,C&&C(e,t)})),O=j((function(e,t){var n=D.current?D.current.clientHeight:0,a=(0,h.C)({style:H,timeout:_},{mode:"enter"}).duration;if("auto"===_){var o=S.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(o,"ms"),V.current=o}else e.style.transitionDuration="string"==typeof a?a:"".concat(a,"ms");e.style.height="".concat(n,"px"),k&&k(e,t)})),F=j((function(e,t){e.style.height="auto",R&&R(e,t)})),J=j((function(e){var t=D.current?D.current.clientHeight:0;e.style.height="".concat(t,"px"),N&&N(e)})),K=j(w),Q=j((function(e){var t=D.current?D.current.clientHeight:0,n=(0,h.C)({style:H,timeout:_},{mode:"exit"}).duration;if("auto"===_){var a=S.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(a,"ms"),V.current=a}else e.style.transitionDuration="string"==typeof n?n:"".concat(n,"ms");e.style.height=P,$&&$(e)}));return l.createElement(A,(0,a.Z)({in:E,onEnter:G,onEntered:F,onEntering:O,onExit:J,onExited:K,onExiting:Q,addEndListener:function(e,t){var n=z?e:t;"auto"===_&&(B.current=setTimeout(n,V.current||0))},nodeRef:z?L:void 0,timeout:"auto"===_?null:_},I),(function(e,t){return l.createElement(x,(0,a.Z)({className:(0,u.Z)(o.root,o.container,r,{entered:o.entered,exited:!E&&"0px"===P&&o.hidden}[e]),style:(0,a.Z)({minHeight:P},H),ref:q},t),l.createElement("div",{className:o.wrapper,ref:D},l.createElement("div",{className:o.wrapperInner},n)))}))}));b.muiSupportAuto=!0;var x=(0,f.Z)((function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height")},entered:{height:"auto",overflow:"visible"},hidden:{visibility:"hidden"},wrapper:{display:"flex"},wrapperInner:{width:"100%"}}}),{name:"MuiCollapse"})(b),Z=n(8063),y=n(9866),E=n(2933),C=l.forwardRef((function(e,t){var n,p=e.children,f=e.classes,m=e.className,h=e.defaultExpanded,v=void 0!==h&&h,g=e.disabled,b=void 0!==g&&g,C=e.expanded,R=e.onChange,k=e.square,N=void 0!==k&&k,w=e.TransitionComponent,$=void 0===w?x:w,H=e.TransitionProps,T=(0,d.Z)(e,["children","classes","className","defaultExpanded","disabled","expanded","onChange","square","TransitionComponent","TransitionProps"]),_=(0,E.Z)({controlled:C,default:v,name:"Accordion",state:"expanded"}),M=(0,c.Z)(_,2),A=M[0],I=M[1],S=l.useCallback((function(e){I(!A),R&&R(e,!A)}),[A,R,I]),B=l.Children.toArray(p),D=(n=B,(0,o.Z)(n)||(0,r.Z)(n)||(0,i.Z)(n)||(0,s.Z)()),V=D[0],P=D.slice(1),z=l.useMemo((function(){return{expanded:A,disabled:b,toggle:S}}),[A,b,S]);return l.createElement(Z.Z,(0,a.Z)({className:(0,u.Z)(f.root,m,A&&f.expanded,b&&f.disabled,!N&&f.rounded),ref:t,square:N},T),l.createElement(y.Z.Provider,{value:z},V),l.createElement($,(0,a.Z)({in:A,timeout:"auto"},H),l.createElement("div",{"aria-labelledby":V.props.id,id:V.props["aria-controls"],role:"region"},P)))})),R=(0,f.Z)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{position:"relative",transition:e.transitions.create(["margin"],t),"&:before":{position:"absolute",left:0,top:-1,right:0,height:1,content:'""',opacity:1,backgroundColor:e.palette.divider,transition:e.transitions.create(["opacity","background-color"],t)},"&:first-child":{"&:before":{display:"none"}},"&$expanded":{margin:"16px 0","&:first-child":{marginTop:0},"&:last-child":{marginBottom:0},"&:before":{opacity:0}},"&$expanded + &":{"&:before":{display:"none"}},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},rounded:{borderRadius:0,"&:first-child":{borderTopLeftRadius:e.shape.borderRadius,borderTopRightRadius:e.shape.borderRadius},"&:last-child":{borderBottomLeftRadius:e.shape.borderRadius,borderBottomRightRadius:e.shape.borderRadius,"@supports (-ms-ime-align: auto)":{borderBottomLeftRadius:0,borderBottomRightRadius:0}}},expanded:{},disabled:{}}}),{name:"MuiAccordion"})(C)},9866:function(e,t,n){var a=n(7294).createContext({});t.Z=a},7171:function(e,t,n){var a=n(4038),o=n(1951),r=n(7294),i=n(5505),s=n(4621),c=r.forwardRef((function(e,t){var n=e.classes,s=e.className,c=(0,o.Z)(e,["classes","className"]);return r.createElement("div",(0,a.Z)({className:(0,i.Z)(n.root,s),ref:t},c))}));t.Z=(0,s.Z)((function(e){return{root:{display:"flex",padding:e.spacing(1,2,2)}}}),{name:"MuiAccordionDetails"})(c)},5371:function(e,t,n){var a=n(4038),o=n(1951),r=n(7294),i=n(5505),s=n(7055),c=n(3729),d=n(4621),l=n(9866),u=r.forwardRef((function(e,t){var n=e.children,d=e.classes,u=e.className,p=e.expandIcon,f=e.focusVisibleClassName,m=e.IconButtonProps,h=void 0===m?{}:m,v=e.onClick,g=(0,o.Z)(e,["children","classes","className","expandIcon","focusVisibleClassName","IconButtonProps","onClick"]),b=r.useContext(l.Z),x=b.disabled,Z=void 0!==x&&x,y=b.expanded,E=b.toggle;return r.createElement(s.Z,(0,a.Z)({focusRipple:!1,disableRipple:!0,disabled:Z,component:"div","aria-expanded":y,className:(0,i.Z)(d.root,u,Z&&d.disabled,y&&d.expanded),focusVisibleClassName:(0,i.Z)(d.focusVisible,d.focused,f),onClick:function(e){E&&E(e),v&&v(e)},ref:t},g),r.createElement("div",{className:(0,i.Z)(d.content,y&&d.expanded)},n),p&&r.createElement(c.Z,(0,a.Z)({className:(0,i.Z)(d.expandIcon,y&&d.expanded),edge:"end",component:"div",tabIndex:null,role:null,"aria-hidden":!0},h),p))}));t.Z=(0,d.Z)((function(e){var t={duration:e.transitions.duration.shortest};return{root:{display:"flex",minHeight:48,transition:e.transitions.create(["min-height","background-color"],t),padding:e.spacing(0,2),"&:hover:not($disabled)":{cursor:"pointer"},"&$expanded":{minHeight:64},"&$focused, &$focusVisible":{backgroundColor:e.palette.action.focus},"&$disabled":{opacity:e.palette.action.disabledOpacity}},expanded:{},focused:{},focusVisible:{},disabled:{},content:{display:"flex",flexGrow:1,transition:e.transitions.create(["margin"],t),margin:"12px 0","&$expanded":{margin:"20px 0"}},expandIcon:{transform:"rotate(0deg)",transition:e.transitions.create("transform",t),"&:hover":{backgroundColor:"transparent"},"&$expanded":{transform:"rotate(180deg)"}}}}),{name:"MuiAccordionSummary"})(u)},1846:function(e,t){var n=60103,a=60106,o=60107,r=60108,i=60114,s=60109,c=60110,d=60112,l=60113,u=60120,p=60115,f=60116,m=60121,h=60122,v=60117,g=60129,b=60131;if("function"==typeof Symbol&&Symbol.for){var x=Symbol.for;n=x("react.element"),a=x("react.portal"),o=x("react.fragment"),r=x("react.strict_mode"),i=x("react.profiler"),s=x("react.provider"),c=x("react.context"),d=x("react.forward_ref"),l=x("react.suspense"),u=x("react.suspense_list"),p=x("react.memo"),f=x("react.lazy"),m=x("react.block"),h=x("react.server.block"),v=x("react.fundamental"),g=x("react.debug_trace_mode"),b=x("react.legacy_hidden")}function Z(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case o:case i:case r:case l:case u:return e;default:switch(e=e&&e.$$typeof){case c:case d:case f:case p:case s:return e;default:return t}}case a:return t}}}},7301:function(e,t,n){n(1846)},4878:function(e,t,n){var a=n(8580),o=n(1022);t.Z=void 0;var r=o(n(7294)),i=(0,a(n(8786)).default)(r.createElement("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.Z=i},4430:function(e,t,n){var a=n(8580),o=n(1022);t.Z=void 0;var r=o(n(7294)),i=(0,a(n(8786)).default)(r.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.Z=i}}]);
//# sourceMappingURL=14351faf3f75868bece722acaed3370a99381df5-77821780472cb6f8a3ce.js.map