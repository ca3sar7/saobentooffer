    value:!0
  }
  ),Object.assign(s.default,s),t.exports=s.default)
}
,93386,(e,t,s)=>{
  "use strict";
  Object.defineProperty(s,"__esModule",{
    value:!0
  }
  );
  var a={
    default:function(){
      return d
    }
    ,getImageProps:function(){
      return c
    }
    
  }
  ;
  for(var r in a)Object.defineProperty(s,r,{
    enumerable:!0,get:a[r]
  }
  );
  let l=e.r(81258),n=e.r(33355),o=e.r(37490),i=l._(e.r(26142));
  function c(e){
    let{
      props:t
    }
    =(0,n.getImgProps)(e,{
      defaultLoader:i.default,imgConf:{
        deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0
      }
      
    }
    );
    for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];
    return{
      props:t
    }
    
  }
  let d=o.Image
}
,23526,(e,t,s)=>{
  t.exports=e.r(93386)
}
,31713,e=>{
  "use strict";
  var t=e.i(72828),s=e.i(75368),a=e.i(23526),r=e.i(909);
  let l=(...e)=>e.filter((e,t,s)=>!!e&&""!==e.trim()&&s.indexOf(e)===t).join(" ").trim();
  var n={
    xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"
  }
  ;
  let o=(0,r.forwardRef)(({
    color:e="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:i,iconNode:c,...d
  }
  ,u)=>(0,r.createElement)("svg",{
    ref:u,...n,width:t,height:t,stroke:e,strokeWidth:a?24*Number(s)/Number(t):s,className:l("lucide",o),...d
  }
  ,[...c.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(i)?i:[i]])),i=(e,t)=>{
    let s=(0,r.forwardRef)(({
      className:s,...a
    }
    ,n)=>(0,r.createElement)(o,{
      ref:n,iconNode:t,className:l(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,s),...a
    }
    ));
    return s.displayName=`${e}`,s
  }
  ,c=i("BookOpen",[["path",{
    d:"M12 7v14",key:"1akyts"
  }
  ],["path",{
    d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"
  }
  ]]),d=i("Trash2",[["path",{
    d:"M3 6h18",key:"d0wm0j"
  }
  ],["path",{
    d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"
  }
  ],["path",{
    d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"
  }
  ],["line",{
    x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"
  }
  ],["line",{
    x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"
  }
  ]]),u=i("Calendar",[["path",{
    d:"M8 2v4",key:"1cmpym"
  }
  ],["path",{
    d:"M16 2v4",key:"4m81vk"
  }
  ],["rect",{
    width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"
  }
  ],["path",{
    d:"M3 10h18",key:"8toen8"
  }
  ]]),x=i("Bookmark",[["path",{
    d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"
  }
  ]]),f=i("BookCheck",[["path",{
    d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"
  }
  ],["path",{
    d:"m9 9.5 2 2 4-4",key:"1dth82"
  }
  ]]),b=i("CircleCheck",[["circle",{
    cx:"12",cy:"12",r:"10",key:"1mglay"
  }
  ],["path",{
    d:"m9 12 2 2 4-4",key:"dzmm74"
  }
  ]]);
  e.s(["default",0,function(){
    let[e,l]=(0,r.useState)(1),[n,o]=(0,r.useState)(!1),i=e=>{
      o(!0),setTimeout(()=>{
        l(e),o(!1)
      }
      ,300)
    }
    ;
    return((0,r.useEffect)(()=>{
      if(2===e){
        let e=document.createElement("script");
        return e.src="https://scripts.converteai.net/c8a9a7ba-7f84-44ad-b1ed-27b61dce250c/players/6ac1d70dec818c746566dbdc/v4/player.js",e.async=!0,document.head.appendChild(e),()=>{
          document.head.removeChild(e)
        }
        
      }
      if(8===e){
        let e=document.createElement("script");
        return e.src="https://scripts.converteai.net/c8a9a7ba-7f84-44ad-b1ed-27b61dce250c/players/6ac1d7100c349e20d18a5150/v4/player.js",e.async=!0,document.head.appendChild(e),()=>{
          document.head.removeChild(e)
        }
        
      }
      
    }
    ,[e]),1===e)?(0,t.jsxs)("div",{
      style:{
        backgroundColor:"#FEF9E9"
      }
      ,className:"jsx-87d94268db40e7b min-h-screen flex flex-col animate-fadeIn",children:[(0,t.jsxs)("div",{
        className:"jsx-87d94268db40e7b flex flex-col gap-0 px-4 pt-2 pb-0.5 text-center",children:[(0,t.jsx)("p",{
          style:{
            color:"rgb(112, 60, 0)"
          }
          ,className:"jsx-87d94268db40e7b text-base font-extrabold text-balance leading-tight",children:"Olá, Devoto! Preparamos algo especial para fortalecer sua fé."
        }
        ),(0,t.jsxs)("p",{
          style:{
            color:"rgb(117, 63, 0)"
          }
          ,className:"jsx-87d94268db40e7b text-xs font-semibold",children:["O Mosteiro de São Bento tem um ",(0,t.jsx)("strong",{
            className:"jsx-87d94268db40e7b",children:"presente para você."
          }
          )]
        }
        )]
      }
      ),(0,t.jsx)("div",{
        className:"jsx-87d94268db40e7b flex-auto flex items-center justify-center px-3",children:(0,t.jsx)("div",{
          className:"jsx-87d94268db40e7b w-full max-w-[360px]",children:(0,t.jsx)(a.default,{
            src:"/images/kit-sao-bento.webp",alt:"Kit Bênção de São Bento",width:360,height:350,className:"w-full h-auto",priority:!0
          }
          )
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-87d94268db40e7b px-4 pb-1.5",children:(0,t.jsx)("button",{
          type:"button",onClick:()=>i(2),style:{
            backgroundColor:"rgb(103, 57, 4)",color:"rgb(255, 255, 255)",boxShadow:"0 6px 8px -1px rgba(79, 39, 13, 0.4), 0 4px 6px -1px rgba(79, 39, 13, 0.3)"
          }
          ,className:"jsx-87d94268db40e7b w-full py-4 text-center font-extrabold text-base rounded-xl transition-all hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 animate-pulse-button",children:"RESPONDER QUESTIONÁRIO"
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-87d94268db40e7b px-4 pb-2",children:(0,t.jsxs)("div",{
          className:"jsx-87d94268db40e7b bg-white rounded-xl shadow-sm p-2 flex flex-col gap-1 items-center text-center",children:[(0,t.jsx)(c,{
            className:"flex-none",size:20,strokeWidth:2.5
          }
          ),(0,t.jsx)("div",{
            className:"jsx-87d94268db40e7b text-[11px] font-extrabold leading-tight",children:(0,t.jsx)("p",{
              style:{
                color:"rgb(87, 45, 5)"
              }
              ,className:"jsx-87d94268db40e7b",children:"Mosteiro de São Bento"
            }
            )
          }
          ),(0,t.jsx)("div",{
            style:{
              color:"rgb(87, 45, 5)"
            }
            ,className:"jsx-87d94268db40e7b text-[10px] font-semibold leading-snug",children:(0,t.jsxs)("p",{
              className:"jsx-87d94268db40e7b",children:["O ",(0,t.jsx)("strong",{
                className:"jsx-87d94268db40e7b",children:"Mosteiro de São Bento"
              }
              )," é um espaço de fé e tradição que, além das celebrações, oferece"," ",(0,t.jsx)("strong",{
                className:"jsx-87d94268db40e7b",children:"itens religiosos"
              }
              )," aos fiéis para fortalecer sua devoção."]
            }
            )
          }
          )]
        }
        )
      }
      ),(0,t.jsx)(s.default,{
        id:"87d94268db40e7b",children:"@keyframes pulse-button{0%,to{transform:scale(1);box-shadow:0 6px 8px -1px #4f270d66,0 4px 6px -1px #4f270d4d}50%{transform:scale(1.02);box-shadow:0 8px 12px -1px #4f270d80,0 6px 8px -1px #4f270d66}}.animate-pulse-button.jsx-87d94268db40e7b{animation:2s ease-in-out infinite pulse-button}"
      }
      )]
    }
    ):2===e?(0,t.jsxs)("div",{
      style:{
        backgroundColor:"#FEF9E9"
      }
      ,className:"jsx-ce6083c37ab05de9 min-h-screen flex flex-col animate-fadeIn",children:[(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pt-6 pb-3 flex justify-center",children:(0,t.jsx)("img",{
          src:"https://cdn.xquiz.co/images/48da2adb-d8a2-4e76-abdf-417e0dd481e3",alt:"Mosteiro de São Bento",width:160,height:32,style:{
            width:"160px",height:"auto"
          }
          ,className:"jsx-ce6083c37ab05de9"
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-4",children:(0,t.jsx)("div",{
          className:"jsx-ce6083c37ab05de9 w-full bg-gray-200 rounded-full h-3.5 overflow-hidden",children:(0,t.jsx)("div",{
            style:{
              width:"100%",backgroundImage:"linear-gradient(to right, rgb(128, 68, 0), rgb(102, 49, 0))",animation:"progressBar 300ms ease-out forwards"
            }
            ,className:"jsx-ce6083c37ab05de9 h-3.5 rounded-full origin-left"
          }
          )
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-3 text-center",children:(0,t.jsx)("p",{
          style:{
            color:"rgb(120, 67, 18)"
          }
          ,className:"jsx-ce6083c37ab05de9 text-sm font-extrabold",children:"📿 (Assista o vídeo abaixo para entender sobre nossos kits). 📿"
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-4 flex justify-center",children:(0,t.jsx)("div",{
          style:{
            aspectRatio:"9 / 16"
          }
          ,className:"jsx-ce6083c37ab05de9 w-full max-w-[200px] md:max-w-[240px]",children:(0,t.jsx)("vturb-smartplayer",{
            id:"vid-6ac1d70dec818c746566dbdc",style:{
              display:"block",margin:"0 auto",width:"100%",height:"100%"
            }
            ,className:"jsx-ce6083c37ab05de9"
          }
          )
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-3 text-center",children:(0,t.jsx)("p",{
          style:{
            color:"rgb(107, 57, 4)"
          }
          ,className:"jsx-ce6083c37ab05de9 text-base font-extrabold",children:"Escute o nosso querido padre."
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-3 text-center",children:(0,t.jsx)("p",{
          style:{
            color:"rgb(107, 57, 4)"
          }
          ,className:"jsx-ce6083c37ab05de9 text-base font-extrabold",children:"Responda o questionário para obter seu kit devocional"
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-4 text-center",children:(0,t.jsxs)("p",{
          style:{
            color:"rgb(107, 57, 4)"
          }
          ,className:"jsx-ce6083c37ab05de9 text-sm font-semibold leading-relaxed",children:["📿 Como recompensa, no final do questionário você receberá um"," ",(0,t.jsx)("span",{
            style:{
              color:"rgb(117, 47, 0)"
            }
            ,className:"jsx-ce6083c37ab05de9 font-extrabold",children:"Kit de São Bento"
          }
          ),", com terço, água benta e livro, para"," ",(0,t.jsx)("span",{
            style:{
              color:"rgb(133, 60, 0)"
            }
            ,className:"jsx-ce6083c37ab05de9 font-extrabold",children:"fortalecer sua devoção!"
          }
          )]
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-6",children:(0,t.jsx)("button",{
          type:"button",onClick:()=>i(3),style:{
            backgroundColor:"rgb(103, 57, 4)",color:"rgb(255, 255, 255)",boxShadow:"0 4px 6px -1px rgba(79, 39, 13, 0.3), 0 2px 4px -1px rgba(79, 39, 13, 0.2)"
          }
          ,className:"jsx-ce6083c37ab05de9 w-full py-4 text-center font-extrabold text-base rounded-xl transition-all hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0",children:"CONTINUAR QUESTIONÁRIO"
        }
        )
      }
      ),(0,t.jsx)(s.default,{
        id:"ce6083c37ab05de9",children:"@keyframes progressBar{0%{transform:scaleX(0)}to{transform:scaleX(1)}}"
      }
      )]
    }
    ):3===e?(0,t.jsxs)("div",{
      style:{
        backgroundColor:"#FEF9E9"
      }
      ,className:`jsx-ce6083c37ab05de9 min-h-screen flex flex-col ${n?"animate-fadeOut":"animate-fadeIn"}`,children:[(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pt-6 pb-3 text-center",children:(0,t.jsx)("p",{
          style:{
            color:"rgb(107, 57, 4)"
          }
          ,className:"jsx-ce6083c37ab05de9 text-base font-extrabold",children:"Mosteiro de São Bento"
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-4",children:(0,t.jsx)("div",{
          className:"jsx-ce6083c37ab05de9 w-full bg-gray-200 rounded-full h-3.5 overflow-hidden",children:(0,t.jsx)("div",{
            style:{
              width:"100%",backgroundImage:"linear-gradient(to right, rgb(128, 68, 0), rgb(102, 49, 0))",animation:"progressBar 300ms ease-out forwards"
            }
            ,className:"jsx-ce6083c37ab05de9 h-3.5 rounded-full origin-left"
          }
          )
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-4",children:(0,t.jsxs)("div",{
          style:{
            borderColor:"rgb(107, 57, 4)"
          }
          ,className:"jsx-ce6083c37ab05de9 flex items-center gap-3 p-3 border-2 rounded-xl",children:[(0,t.jsx)("div",{
            style:{
              color:"rgb(107, 57, 4)"
            }
            ,className:"jsx-ce6083c37ab05de9 flex-none pl-1",children:(0,t.jsx)(c,{
              size:24,strokeWidth:2.5
            }
            )
          }
          ),(0,t.jsxs)("div",{
            className:"jsx-ce6083c37ab05de9 flex-auto",children:[(0,t.jsx)("div",{
              className:"jsx-ce6083c37ab05de9 text-sm font-extrabold leading-none mb-1",children:(0,t.jsx)("p",{
                className:"jsx-ce6083c37ab05de9",children:"DEVOÇÃO"
              }
              )
            }
            ),(0,t.jsx)("div",{
              className:"jsx-ce6083c37ab05de9 text-xs font-bold",children:(0,t.jsx)("p",{
                className:"jsx-ce6083c37ab05de9",children:"ACUMULADO"
              }
              )
            }
            )]
          }
          ),(0,t.jsx)("div",{
            style:{
              backgroundColor:"rgb(146, 74, 7)",color:"white"
            }
            ,className:"jsx-ce6083c37ab05de9 flex-none px-3 py-1.5 rounded-lg",children:(0,t.jsx)("p",{
              className:"jsx-ce6083c37ab05de9 text-2xl font-extrabold leading-none",children:"25%"
            }
            )
          }
          )]
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-4 text-center",children:(0,t.jsx)("p",{
          className:"jsx-ce6083c37ab05de9 text-base font-extrabold leading-tight",children:"Quantas vezes por semana você reza o terço de São Bento?"
        }
        )
      }
      ),(0,t.jsxs)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-6 flex flex-col gap-3",children:[(0,t.jsxs)("button",{
          type:"button",onClick:()=>i(4),className:"jsx-ce6083c37ab05de9 flex items-center gap-4 p-3 border rounded-xl shadow-lg transition-all hover:scale-[1.025] active:scale-[0.97] bg-white",children:[(0,t.jsx)(d,{
            size:36,strokeWidth:2.5,className:"flex-none"
          }
          ),(0,t.jsx)("div",{
            className:"jsx-ce6083c37ab05de9 flex-auto text-center",children:(0,t.jsx)("p",{
              className:"jsx-ce6083c37ab05de9 leading-none font-bold",children:"Nunca"
            }
            )
          }
          )]
        }
        ),(0,t.jsxs)("button",{
          type:"button",onClick:()=>i(4),className:"jsx-ce6083c37ab05de9 flex items-center gap-4 p-3 border rounded-xl shadow-lg transition-all hover:scale-[1.025] active:scale-[0.97] bg-white",children:[(0,t.jsx)(u,{
            size:36,strokeWidth:2.5,className:"flex-none"
          }
          ),(0,t.jsx)("div",{
            className:"jsx-ce6083c37ab05de9 flex-auto text-center",children:(0,t.jsx)("p",{
              className:"jsx-ce6083c37ab05de9 leading-none font-bold",children:"1-2x por semana"
            }
            )
          }
          )]
        }
        ),(0,t.jsxs)("button",{
          type:"button",onClick:()=>i(4),className:"jsx-ce6083c37ab05de9 flex items-center gap-4 p-3 border rounded-xl shadow-lg transition-all hover:scale-[1.025] active:scale-[0.97] bg-white",children:[(0,t.jsx)(x,{
            size:36,strokeWidth:2.5,className:"flex-none"
          }
          ),(0,t.jsx)("div",{
            className:"jsx-ce6083c37ab05de9 flex-auto text-center",children:(0,t.jsx)("p",{
              className:"jsx-ce6083c37ab05de9 leading-none font-bold",children:"3-5x por semana"
            }
            )
          }
          )]
        }
        ),(0,t.jsxs)("button",{
          type:"button",onClick:()=>i(4),className:"jsx-ce6083c37ab05de9 flex items-center gap-4 p-3 border rounded-xl shadow-lg transition-all hover:scale-[1.025] active:scale-[0.97] bg-white",children:[(0,t.jsx)(f,{
            size:36,strokeWidth:2.5,className:"flex-none"
          }
          ),(0,t.jsx)("div",{
            className:"jsx-ce6083c37ab05de9 flex-auto text-center",children:(0,t.jsx)("p",{
              className:"jsx-ce6083c37ab05de9 leading-none font-bold",children:"Diariamente"
            }
            )
          }
          )]
        }
        )]
      }
      ),(0,t.jsx)(s.default,{
        id:"ce6083c37ab05de9",children:"@keyframes progressBar{0%{transform:scaleX(0)}to{transform:scaleX(1)}}"
      }
      )]
    }
    ):4===e?(0,t.jsxs)("div",{
      style:{
        backgroundColor:"#FEF9E9"
      }
      ,className:`jsx-ce6083c37ab05de9 min-h-screen flex flex-col ${n?"animate-fadeOut":"animate-fadeIn"}`,children:[(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pt-6 pb-3 text-center",children:(0,t.jsx)("p",{
          style:{
            color:"rgb(107, 57, 4)"
          }
          ,className:"jsx-ce6083c37ab05de9 text-base font-extrabold",children:"Mosteiro de São Bento"
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-4",children:(0,t.jsx)("div",{
          className:"jsx-ce6083c37ab05de9 w-full bg-gray-200 rounded-full h-3.5 overflow-hidden",children:(0,t.jsx)("div",{
            style:{
              width:"100%",backgroundImage:"linear-gradient(to right, rgb(128, 68, 0), rgb(102, 49, 0))",animation:"progressBar 300ms ease-out forwards"
            }
            ,className:"jsx-ce6083c37ab05de9 h-3.5 rounded-full origin-left"
          }
          )
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-4",children:(0,t.jsxs)("div",{
          style:{
            borderColor:"rgb(107, 57, 4)"
          }
          ,className:"jsx-ce6083c37ab05de9 flex items-center gap-3 p-3 border-2 rounded-xl",children:[(0,t.jsx)("div",{
            style:{
              color:"rgb(107, 57, 4)"
            }
            ,className:"jsx-ce6083c37ab05de9 flex-none pl-1",children:(0,t.jsx)(c,{
              size:24,strokeWidth:2.5
            }
            )
          }
          ),(0,t.jsxs)("div",{
            className:"jsx-ce6083c37ab05de9 flex-auto",children:[(0,t.jsx)("div",{
              className:"jsx-ce6083c37ab05de9 text-sm font-extrabold leading-none mb-1",children:(0,t.jsx)("p",{
                className:"jsx-ce6083c37ab05de9",children:"DEVOÇÃO"
              }
              )
            }
            ),(0,t.jsx)("div",{
              className:"jsx-ce6083c37ab05de9 text-xs font-bold",children:(0,t.jsx)("p",{
                className:"jsx-ce6083c37ab05de9",children:"ACUMULADO"
              }
              )
            }
            )]
          }
          ),(0,t.jsx)("div",{
            style:{
              backgroundColor:"rgb(146, 74, 7)",color:"white"
            }
            ,className:"jsx-ce6083c37ab05de9 flex-none px-3 py-1.5 rounded-lg",children:(0,t.jsx)("p",{
              className:"jsx-ce6083c37ab05de9 text-2xl font-extrabold leading-none",children:"55%"
            }
            )
          }
          )]
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-4 text-center",children:(0,t.jsx)("p",{
          className:"jsx-ce6083c37ab05de9 text-base font-extrabold leading-tight",children:"Você conhece a oração de São Bento para proteção?"
        }
        )
      }
      ),(0,t.jsxs)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-6 flex flex-col gap-3",children:[(0,t.jsxs)("button",{
          type:"button",onClick:()=>i(5),className:"jsx-ce6083c37ab05de9 flex items-center gap-4 p-3 border rounded-xl shadow-lg transition-all hover:scale-[1.025] active:scale-[0.97] bg-white",children:[(0,t.jsx)(d,{
            size:36,strokeWidth:2.5,className:"flex-none"
          }
          ),(0,t.jsx)("div",{
            className:"jsx-ce6083c37ab05de9 flex-auto text-center",children:(0,t.jsx)("p",{
              className:"jsx-ce6083c37ab05de9 leading-none font-bold",children:"Não conheço"
            }
            )
          }
          )]
        }
        ),(0,t.jsxs)("button",{
          type:"button",onClick:()=>i(5),className:"jsx-ce6083c37ab05de9 flex items-center gap-4 p-3 border rounded-xl shadow-lg transition-all hover:scale-[1.025] active:scale-[0.97] bg-white",children:[(0,t.jsx)(u,{
            size:36,strokeWidth:2.5,className:"flex-none"
          }
          ),(0,t.jsx)("div",{
            className:"jsx-ce6083c37ab05de9 flex-auto text-center",children:(0,t.jsx)("p",{
              className:"jsx-ce6083c37ab05de9 leading-none font-bold",children:"Já ouvi falar"
            }
            )
          }
          )]
        }
        ),(0,t.jsxs)("button",{
          type:"button",onClick:()=>i(5),className:"jsx-ce6083c37ab05de9 flex items-center gap-4 p-3 border rounded-xl shadow-lg transition-all hover:scale-[1.025] active:scale-[0.97] bg-white",children:[(0,t.jsx)(f,{
            size:36,strokeWidth:2.5,className:"flex-none"
          }
          ),(0,t.jsx)("div",{
            className:"jsx-ce6083c37ab05de9 flex-auto text-center",children:(0,t.jsx)("p",{
              className:"jsx-ce6083c37ab05de9 leading-none font-bold",children:"Uso diariamente"
            }
            )
          }
          )]
        }
        ),(0,t.jsxs)("button",{
          type:"button",onClick:()=>i(5),className:"jsx-ce6083c37ab05de9 flex items-center gap-4 p-3 border rounded-xl shadow-lg transition-all hover:scale-[1.025] active:scale-[0.97] bg-white",children:[(0,t.jsx)(c,{
            size:36,strokeWidth:2.5,className:"flex-none"
          }
          ),(0,t.jsx)("div",{
            className:"jsx-ce6083c37ab05de9 flex-auto text-center",children:(0,t.jsx)("p",{
              className:"jsx-ce6083c37ab05de9 leading-none font-bold",children:"Recito de memória"
            }
            )
          }
          )]
        }
        )]
      }
      ),(0,t.jsx)(s.default,{
        id:"ce6083c37ab05de9",children:"@keyframes progressBar{0%{transform:scaleX(0)}to{transform:scaleX(1)}}"
      }
      )]
    }
    ):5===e?(0,t.jsxs)("div",{
      style:{
        backgroundColor:"#FEF9E9"
      }
      ,className:`jsx-ce6083c37ab05de9 min-h-screen flex flex-col ${n?"animate-fadeOut":"animate-fadeIn"}`,children:[(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pt-6 pb-3 text-center",children:(0,t.jsx)("p",{
          style:{
            color:"rgb(107, 57, 4)"
          }
          ,className:"jsx-ce6083c37ab05de9 text-base font-extrabold",children:"Mosteiro de São Bento"
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-4",children:(0,t.jsx)("div",{
          className:"jsx-ce6083c37ab05de9 w-full bg-gray-200 rounded-full h-3.5 overflow-hidden",children:(0,t.jsx)("div",{
            style:{
              width:"100%",backgroundImage:"linear-gradient(to right, rgb(128, 68, 0), rgb(102, 49, 0))",animation:"progressBar 300ms ease-out forwards"
            }
            ,className:"jsx-ce6083c37ab05de9 h-3.5 rounded-full origin-left"
          }
          )
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-4",children:(0,t.jsxs)("div",{
          style:{
            borderColor:"rgb(107, 57, 4)"
          }
          ,className:"jsx-ce6083c37ab05de9 flex items-center gap-3 p-3 border-2 rounded-xl",children:[(0,t.jsx)("div",{
            style:{
              color:"rgb(107, 57, 4)"
            }
            ,className:"jsx-ce6083c37ab05de9 flex-none pl-1",children:(0,t.jsx)(c,{
              size:24,strokeWidth:2.5
            }
            )
          }
          ),(0,t.jsxs)("div",{
            className:"jsx-ce6083c37ab05de9 flex-auto",children:[(0,t.jsx)("div",{
              className:"jsx-ce6083c37ab05de9 text-sm font-extrabold leading-none mb-1",children:(0,t.jsx)("p",{
                className:"jsx-ce6083c37ab05de9",children:"DEVOÇÃO"
              }
              )
            }
            ),(0,t.jsx)("div",{
              className:"jsx-ce6083c37ab05de9 text-xs font-bold",children:(0,t.jsx)("p",{
                className:"jsx-ce6083c37ab05de9",children:"ACUMULADO"
              }
              )
            }
            )]
          }
          ),(0,t.jsx)("div",{
            style:{
              backgroundColor:"rgb(146, 74, 7)",color:"white"
            }
            ,className:"jsx-ce6083c37ab05de9 flex-none px-3 py-1.5 rounded-lg",children:(0,t.jsx)("p",{
              className:"jsx-ce6083c37ab05de9 text-2xl font-extrabold leading-none",children:"85%"
            }
            )
          }
          )]
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-4 text-center",children:(0,t.jsx)("p",{
          style:{
            color:"rgb(107, 57, 4)"
          }
          ,className:"jsx-ce6083c37ab05de9 text-base font-semibold leading-relaxed",children:"Você já utilizou água benta de São Bento em sua casa ou objetos?"
        }
        )
      }
      ),(0,t.jsxs)("div",{
        className:"jsx-ce6083c37ab05de9 px-5 pb-6 flex flex-col gap-3",children:[(0,t.jsxs)("button",{
          type:"button",onClick:()=>i(6),className:"jsx-ce6083c37ab05de9 flex items-center gap-4 p-3 border rounded-xl shadow-lg transition-all hover:scale-[1.025] active:scale-[0.97] bg-white",children:[(0,t.jsx)(d,{
            size:36,strokeWidth:2.5,className:"flex-none"
          }
          ),(0,t.jsx)("div",{
            className:"jsx-ce6083c37ab05de9 flex-auto text-center",children:(0,t.jsx)("p",{
              className:"jsx-ce6083c37ab05de9 leading-none font-bold",children:"Nunca"
            }
            )
          }
          )]
        }
        ),(0,t.jsxs)("button",{
          type:"button",onClick:()=>i(6),className:"jsx-ce6083c37ab05de9 flex items-center gap-4 p-3 border rounded-xl shadow-lg transition-all hover:scale-[1.025] active:scale-[0.97] bg-white",children:[(0,t.jsx)(u,{
            size:36,strokeWidth:2.5,className:"flex-none"
          }
          ),(0,t.jsx)("div",{
            className:"jsx-ce6083c37ab05de9 flex-auto text-center",children:(0,t.jsx)("p",{
              className:"jsx-ce6083c37ab05de9 leading-none font-bold",children:"Ocasionalmente"
            }
            )
          }
          )]
        }
        ),(0,t.jsxs)("button",{
          type:"button",onClick:()=>i(6),className:"jsx-ce6083c37ab05de9 flex items-center gap-4 p-3 border rounded-xl shadow-lg transition-all hover:scale-[1.025] active:scale-[0.97] bg-white",children:[(0,t.jsx)(f,{
            size:36,strokeWidth:2.5,className:"flex-none"
          }
          ),(0,t.jsx)("div",{
            className:"jsx-ce6083c37ab05de9 flex-auto text-center",children:(0,t.jsx)("p",{
              className:"jsx-ce6083c37ab05de9 leading-none font-bold",children:"Em ocasiões especiais"
            }
            )
          }
          )]
        }
        ),(0,t.jsxs)("button",{
          type:"button",onClick:()=>i(6),className:"jsx-ce6083c37ab05de9 flex items-center gap-4 p-3 border rounded-xl shadow-lg transition-all hover:scale-[1.025] active:scale-[0.97] bg-white",children:[(0,t.jsx)(b,{
            size:36,strokeWidth:2.5,className:"flex-none"
          }
          ),(0,t.jsx)("div",{
            className:"jsx-ce6083c37ab05de9 flex-auto text-center",children:(0,t.jsx)("p",{
              className:"jsx-ce6083c37ab05de9 leading-none font-bold",children:"Regularmente"
            }
            )
          }
          )]
        }
        )]
      }
      ),(0,t.jsx)(s.default,{
        id:"ce6083c37ab05de9",children:"@keyframes progressBar{0%{transform:scaleX(0)}to{transform:scaleX(1)}}"
      }
      )]
    }
    ):6===e?(0,t.jsxs)("div",{
      style:{
        backgroundColor:"#FEF9E9"
      }
      ,className:"jsx-faa5beefbad7cc9b min-h-screen flex flex-col animate-fadeIn",children:[(0,t.jsx)("div",{
        className:"jsx-faa5beefbad7cc9b px-5 pt-4 pb-2 text-center",children:(0,t.jsx)("p",{
          style:{
            color:"rgb(107, 57, 4)"
          }
          ,className:"jsx-faa5beefbad7cc9b text-sm font-extrabold",children:"Mosteiro de São Bento"
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-faa5beefbad7cc9b px-5 pb-3",children:(0,t.jsxs)("div",{
          style:{
            backgroundImage:"url('/funnel/report-grid.svg'), linear-gradient(to right, rgb(107, 54, 4), rgb(171, 94, 23))",backgroundColor:"rgb(17, 17, 17)",color:"rgb(255, 255, 255)"
          }
          ,className:"jsx-faa5beefbad7cc9b relative flex flex-col overflow-hidden p-5 shadow-lg rounded-xl",children:[(0,t.jsx)("div",{
            className:"jsx-faa5beefbad7cc9b mb-12 flex flex-row items-center justify-between",children:(0,t.jsx)("div",{
              className:"jsx-faa5beefbad7cc9b text-xs font-bold",children:(0,t.jsx)("p",{
                className:"jsx-faa5beefbad7cc9b",children:"Você é um devoto merecedor!"
              }
              )
            }
            )
          }
          ),(0,t.jsx)("div",{
            className:"jsx-faa5beefbad7cc9b block w-full pb-3",children:(0,t.jsx)("div",{
              style:{
                backgroundImage:"linear-gradient(to right, rgba(255, 255, 255, 0.063), rgba(255, 255, 255, 0.584))",backgroundColor:"rgb(240, 159, 20)"
              }
              ,className:"jsx-faa5beefbad7cc9b relative h-2.5 rounded-md",children:(0,t.jsx)("div",{
                style:{
                  width:"75%"
                }
                ,className:"jsx-faa5beefbad7cc9b relative animate-ball-progress",children:(0,t.jsxs)("div",{
                  className:"jsx-faa5beefbad7cc9b absolute right-0 top-1.5 h-6 w-6 -translate-y-1/2 translate-x-1/2",children:[(0,t.jsxs)("div",{
                    style:{
                      transform:"translateX(calc(-50% + 12px)) translateY(calc(-100% - 11px))",backgroundColor:"rgb(255, 255, 255)",color:"rgb(0, 0, 0)"
                    }
                    ,className:"jsx-faa5beefbad7cc9b inline-flex rounded-md px-[8px] pb-1.5 pt-1.5",children:[(0,t.jsx)("div",{
                      className:"jsx-faa5beefbad7cc9b rounded-xs whitespace-nowrap text-xs font-normal leading-3",children:"Você está aqui"
                    }
                    ),(0,t.jsx)("span",{
                      style:{
                        borderColor:"rgb(255, 255, 255)"
                      }
                      ,className:"jsx-faa5beefbad7cc9b absolute left-1/2 top-full -translate-x-1/2 -translate-y-1/2 rotate-45 border-[5px] border-solid"
                    }
                    )]
                  }
                  ),(0,t.jsx)("div",{
                    style:{
                      borderColor:"rgb(255, 255, 255)"
                    }
                    ,className:"jsx-faa5beefbad7cc9b absolute top-0 box-border flex h-6 w-6 items-center justify-center rounded-full border-[2px] border-solid",children:(0,t.jsx)("span",{
                      style:{
                        backgroundColor:"rgb(255, 255, 255)"
                      }
                      ,className:"jsx-faa5beefbad7cc9b h-3 w-3 rounded-full"
                    }
                    )
                  }
                  )]
                }
                )
              }
              )
            }
            )
          }
          ),(0,t.jsxs)("div",{
            className:"jsx-faa5beefbad7cc9b flex items-center justify-between text-xs font-bold",children:[(0,t.jsx)("div",{
              className:"jsx-faa5beefbad7cc9b",children:"Pecador"
            }
            ),(0,t.jsx)("div",{
              className:"jsx-faa5beefbad7cc9b",children:"Devoto"
            }
            ),(0,t.jsx)("div",{
              className:"jsx-faa5beefbad7cc9b",children:"Devoto fiel"
            }
            )]
          }
          )]
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-faa5beefbad7cc9b px-5 pb-2",children:(0,t.jsxs)("div",{
          className:"jsx-faa5beefbad7cc9b flex flex-col items-center text-center gap-2",children:[(0,t.jsx)(a.default,{
            src:"/images/kit-aguarde.webp",alt:"Medalha de São Bento",width:320,height:320,className:"flex-none w-full max-w-[320px] h-auto"
          }
          ),(0,t.jsx)("h2",{
            style:{
              color:"rgb(17, 17, 17)"
            }
            ,className:"jsx-faa5beefbad7cc9b text-xl font-extrabold text-balance leading-tight",children:"Você é um Devoto Fiel!"
          }
          ),(0,t.jsx)("p",{
            style:{
              color:"rgb(17, 17, 17)"
            }
            ,className:"jsx-faa5beefbad7cc9b text-xs font-semibold leading-relaxed",children:"Sua devoção foi comprovada! Você agora tem direito a um dos 50 Kits Bênção de São Bento — um presente especial do Mosteiro para fortalecer sua fé."
          }
          )]
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-faa5beefbad7cc9b px-5 pb-2 text-center",children:(0,t.jsx)("p",{
          style:{
            color:"rgb(107, 57, 4)"
          }
          ,className:"jsx-faa5beefbad7cc9b text-xs font-extrabold",children:"Clique no botão abaixo para dar continuidade ao seu presente."
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-faa5beefbad7cc9b px-5 pb-4",children:(0,t.jsx)("button",{
          type:"button",onClick:()=>i(8),style:{
            backgroundColor:"rgb(107, 57, 4)",color:"rgb(255, 255, 255)",boxShadow:"0 6px 10px -1px rgba(70, 35, 7, 0.4), 0 4px 6px -1px rgba(70, 35, 7, 0.3)"
          }
          ,className:"jsx-faa5beefbad7cc9b w-full py-5 text-center font-extrabold text-lg rounded-xl transition-all hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 animate-pulse-button-step6",children:"RESGATAR KIT DE SÃO BENTO"
        }
        )
      }
      ),(0,t.jsx)(s.default,{
        id:"faa5beefbad7cc9b",children:"@keyframes ballProgress{0%{width:0%}to{width:75%}}.animate-ball-progress.jsx-faa5beefbad7cc9b{animation:2.5s ease-out forwards ballProgress}@keyframes pulse-button-step6{0%,to{transform:scale(1);box-shadow:0 6px 10px -1px #46230766,0 4px 6px -1px #4623074d}50%{transform:scale(1.02);box-shadow:0 8px 14px -1px #46230780,0 6px 10px -1px #46230766}}.animate-pulse-button-step6.jsx-faa5beefbad7cc9b{animation:2s ease-in-out infinite pulse-button-step6}"
      }
      )]
    }
    ):8===e?(0,t.jsxs)("div",{
      style:{
        backgroundColor:"#FEF9E9"
      }
      ,className:"jsx-7a89ef406db4072d min-h-screen flex flex-col animate-fadeIn",children:[(0,t.jsx)("div",{
        className:"jsx-7a89ef406db4072d px-5 pt-6 pb-3 text-center",children:(0,t.jsx)("p",{
          style:{
            color:"rgb(107, 57, 4)"
          }
          ,className:"jsx-7a89ef406db4072d text-base font-extrabold",children:"Mosteiro de São Bento"
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-7a89ef406db4072d px-5 pb-3 text-center",children:(0,t.jsx)("h1",{
          style:{
            color:"rgb(107, 57, 4)"
          }
          ,className:"jsx-7a89ef406db4072d text-xl font-extrabold text-balance leading-tight",children:"Sua devoção foi comprovada!"
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-7a89ef406db4072d px-5 pb-4 text-center",children:(0,t.jsxs)("p",{
          style:{
            color:"rgb(107, 57, 4)"
          }
          ,className:"jsx-7a89ef406db4072d text-base font-semibold leading-relaxed",children:["Você agora tem direito a um dos"," ",(0,t.jsx)("span",{
            style:{
              color:"rgb(117, 47, 0)"
            }
            ,className:"jsx-7a89ef406db4072d font-extrabold",children:"50 Kits Bênção de São Bento"
          }
          )," ","— um presente especial do Mosteiro para fortalecer sua fé."]
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-7a89ef406db4072d px-5 pb-4 flex justify-center",children:(0,t.jsx)("div",{
          style:{
            aspectRatio:"9 / 16"
          }
          ,className:"jsx-7a89ef406db4072d w-full max-w-[200px] md:max-w-[240px]",children:(0,t.jsx)("vturb-smartplayer",{
            id:"vid-6ac1d7100c349e20d18a5150",style:{
              display:"block",margin:"0 auto",width:"100%",height:"100%"
            }
            ,className:"jsx-7a89ef406db4072d"
          }
          )
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-7a89ef406db4072d px-5 pb-4 text-center",children:(0,t.jsxs)("p",{
          style:{
            color:"rgb(107, 57, 4)"
          }
          ,className:"jsx-7a89ef406db4072d text-sm font-semibold leading-relaxed",children:["Clique no botão abaixo para"," ",(0,t.jsx)("span",{
            style:{
              color:"rgb(117, 47, 0)"
            }
            ,className:"jsx-7a89ef406db4072d font-extrabold",children:"resgatar seu presente!"
          }
          )]
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-7a89ef406db4072d px-5 pb-4",children:(0,t.jsx)("a",{
          href:"https://pay.saobentobrasilbr.online/checkout/ac21c5b6-c372-4560-8558-47dc8590bc3b",style:{
            backgroundColor:"rgb(107, 57, 4)",color:"rgb(255, 255, 255)",boxShadow:"0 4px 6px -1px rgba(70, 35, 7, 0.3), 0 2px 4px -1px rgba(70, 35, 7, 0.2)"
          }
          ,className:"jsx-7a89ef406db4072d block w-full py-4 text-center font-extrabold text-base rounded-xl transition-all hover:translate-y-[-2px] hover:shadow-lg active:translate-y-0 animate-pulse-subtle",children:"RESGATAR KIT DE SÃO BENTO"
        }
        )
      }
      ),(0,t.jsx)("div",{
        className:"jsx-7a89ef406db4072d px-5 pb-6 text-center",children:(0,t.jsxs)("p",{
          style:{
            color:"rgb(107, 57, 4)"
          }
          ,className:"jsx-7a89ef406db4072d text-xs font-semibold leading-relaxed",children:["*O kit, composto"," ",(0,t.jsx)("span",{
            className:"jsx-7a89ef406db4072d font-extrabold",children:"por um terço, água benta e um livro devocional, é gratuito"
          }
          ),". Para recebê-lo em sua residência, é necessário"," ",(0,t.jsx)("span",{
            className:"jsx-7a89ef406db4072d font-extrabold",children:"apenas o pagamento do frete, referente aos custos de envio"
          }
          ),"."]
        }
        )
      }
      ),(0,t.jsx)(s.default,{
        id:"7a89ef406db4072d",children:"@keyframes pulse-subtle{0%,to{opacity:1;transform:scale(1)}50%{opacity:.95;transform:scale(1.02)}}.animate-pulse-subtle.jsx-7a89ef406db4072d{animation:2s ease-in-out infinite pulse-subtle}"
      }
      )]
    }
    ):null
  }
  ],31713)
}
]);
