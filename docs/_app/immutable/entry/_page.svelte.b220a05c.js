import{S as Q,i as W,s as Y,k as o,q as V,a as I,l as r,m as p,r as k,h as u,c as L,n as e,b as Z,G as t,J as M,K as B,L as ee,H as z,M as te}from"../chunks/index.fe9ef46a.js";function ae(m){let f,a,l,n,b,D,s,N,h,E,P,U,i,$,v,w,j,q,d,J,x,y,O,R,C;return{c(){f=o("div"),a=o("form"),l=o("div"),n=o("label"),b=V("Name"),D=I(),s=o("input"),N=I(),h=o("div"),E=o("label"),P=V("Email"),U=I(),i=o("input"),$=I(),v=o("div"),w=o("label"),j=V("Message"),q=I(),d=o("textarea"),J=I(),x=o("div"),y=o("button"),O=V("Send Message"),this.h()},l(c){f=r(c,"DIV",{class:!0});var g=p(f);a=r(g,"FORM",{class:!0});var _=p(a);l=r(_,"DIV",{class:!0});var T=p(l);n=r(T,"LABEL",{class:!0,for:!0});var F=p(n);b=k(F,"Name"),F.forEach(u),D=L(T),s=r(T,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),T.forEach(u),N=L(_),h=r(_,"DIV",{class:!0});var A=p(h);E=r(A,"LABEL",{class:!0,for:!0});var G=p(E);P=k(G,"Email"),G.forEach(u),U=L(A),i=r(A,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),A.forEach(u),$=L(_),v=r(_,"DIV",{class:!0});var S=p(v);w=r(S,"LABEL",{class:!0,for:!0});var H=p(w);j=k(H,"Message"),H.forEach(u),q=L(S),d=r(S,"TEXTAREA",{class:!0,id:!0,placeholder:!0,rows:!0}),p(d).forEach(u),S.forEach(u),J=L(_),x=r(_,"DIV",{class:!0});var K=p(x);y=r(K,"BUTTON",{class:!0,type:!0});var X=p(y);O=k(X,"Send Message"),X.forEach(u),K.forEach(u),_.forEach(u),g.forEach(u),this.h()},h(){e(n,"class","block text-gray-700 font-bold mb-2"),e(n,"for","name"),e(s,"class","shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"),e(s,"id","name"),e(s,"type","text"),e(s,"placeholder","John Doe"),e(l,"class","mb-4"),e(E,"class","block text-gray-700 font-bold mb-2"),e(E,"for","email"),e(i,"class","shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"),e(i,"id","email"),e(i,"type","email"),e(i,"placeholder","johndoe@example.com"),e(h,"class","mb-4"),e(w,"class","block text-gray-700 font-bold mb-2"),e(w,"for","message"),e(d,"class","shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"),e(d,"id","message"),e(d,"placeholder","Enter your message here"),e(d,"rows","5"),e(v,"class","mb-6"),e(y,"class","bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"),e(y,"type","submit"),e(x,"class","flex items-center justify-between"),e(a,"class","bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"),e(f,"class","w-full max-w-lg")},m(c,g){Z(c,f,g),t(f,a),t(a,l),t(l,n),t(n,b),t(l,D),t(l,s),M(s,m[0]),t(a,N),t(a,h),t(h,E),t(E,P),t(h,U),t(h,i),M(i,m[1]),t(a,$),t(a,v),t(v,w),t(w,j),t(v,q),t(v,d),M(d,m[2]),t(a,J),t(a,x),t(x,y),t(y,O),R||(C=[B(s,"input",m[4]),B(i,"input",m[5]),B(d,"input",m[6]),B(a,"submit",ee(m[3]))],R=!0)},p(c,[g]){g&1&&s.value!==c[0]&&M(s,c[0]),g&2&&i.value!==c[1]&&M(i,c[1]),g&4&&M(d,c[2])},i:z,o:z,d(c){c&&u(f),R=!1,te(C)}}}function le(m,f,a){let l="",n="",b="";function D(){console.log(`Name: ${l}, Email: ${n}, Message: ${b}`)}function s(){l=this.value,a(0,l)}function N(){n=this.value,a(1,n)}function h(){b=this.value,a(2,b)}return[l,n,b,D,s,N,h]}class oe extends Q{constructor(f){super(),W(this,f,le,ae,Y,{})}}export{oe as default};
