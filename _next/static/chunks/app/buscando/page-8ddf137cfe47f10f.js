(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[846],{7843:(A,e,t)=>{Promise.resolve().then(t.t.bind(t,8173,23)),Promise.resolve().then(t.bind(t,2508)),Promise.resolve().then(t.bind(t,1571))},1571:(A,e,t)=>{"use strict";t.d(e,{default:()=>o});var a=t(7437),r=t(2265),l=t(6161),s=t(6648);let i={src:"/_next/static/media/lupa.9d7e8625.png",height:32,width:32,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3KG9qAAAACnRSTlMBWxoqbnw+TpMNqiIOFAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADJJREFUeJwdyLkRAyEQADDtC/Tf8I2tUMjTB+reiMHsPnFk/7u939ogmrypIqan2PISHxnTAK4vAt+aAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},o=()=>{let{setPeliculas:A,setIsLoading:e,setCategoriaBuscada:t}=(0,r.useContext)(l.I),[o,n]=(0,r.useState)(""),[u,c]=(0,r.useState)(!1),d=()=>{c(!u)},[h,m]=(0,r.useState)(""),p=async a=>{a.preventDefault(),e(!0);let r="Series"===h?"https://imdb.iamidiotareyoutoo.com/justwatch?q="+o:"https://imdb.iamidiotareyoutoo.com/search?q="+o;try{let e=await fetch(r);e.ok||console.error("Error en la solicitud: ".concat(e.status));let a=await e.json();A(a.description),t(h)}catch(A){console.error("Error al realizar la peticion",A)}e(!1)};return(0,a.jsxs)("div",{className:"w-1/2 bg-white rounded-3xl text-[#2F3139] h-16 p-4 flex items-center justify-between",children:[!u&&(0,a.jsx)(a.Fragment,{children:["Peliculas","Series"].map(A=>(0,a.jsx)("div",{className:"cursor-pointer hover:bg-gray-100 h-12 p-3 rounded-2xl \n                                    ".concat(A===h?"font-bold":""),onClick:()=>m(A),children:A},A))}),(0,a.jsx)(s.default,{"aria-hidden":!0,src:i,alt:"Busqueda",width:32,height:32,className:"cursor-pointer",onClick:()=>d()}),u&&(0,a.jsx)("form",{onSubmit:p,className:"w-full",children:(0,a.jsx)("input",{type:"text",placeholder:"Introduce la pelicula a buscar",name:"buscar",defaultValue:o,onChange:A=>n(A.target.value),className:"w-full ml-2 h-10 p-3 text-[#2F3139] focus:outline-none focus:ring-0"})})]})}},6161:(A,e,t)=>{"use strict";t.d(e,{I:()=>l,w:()=>s});var a=t(7437),r=t(2265);let l=(0,r.createContext)(),s=A=>{let{children:e}=A,[t,s]=(0,r.useState)([]),[i,o]=(0,r.useState)(!1),[n,u]=(0,r.useState)("");return(0,a.jsx)(l.Provider,{value:{peliculas:t,setPeliculas:s,isLoading:i,setIsLoading:o,categoriaBuscada:n,setCategoriaBuscada:u},children:e})}},2508:(A,e,t)=>{"use strict";t.r(e),t.d(e,{default:()=>a});let a={src:"/_next/static/media/logo.33e1b9be.png",height:66,width:66,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEVMaXFE1IRD14RD2Yc8xHwIKzAdZk1D2YZAzoUzqm9H5I3///9L7pFD2IZL7ZFG44tF34pH5o1C1YR//39I541I5Y1B1YNI544+Q8I8AAAAGHRSTlMALjz1tmhzdA+f/gHOZu2y1UylAoKCXdJWWZvRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPElEQVR4nD2LSQ6AIBTF+pkeoDiB3v+oRhPdNWlLx9QyE8iX4B24Ose0bJmzpPWIYWd88Ks3rno+k9plN0iyAhU328l8AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}}},A=>{var e=e=>A(A.s=e);A.O(0,[648,130,215,744],()=>e(7843)),_N_E=A.O()}]);