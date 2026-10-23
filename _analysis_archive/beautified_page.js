(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,55255,(e,t,s)=>{
  
}
,5212,(e,t,s)=>{
  var a=e.i(84598);
  e.r(55255);
  var r=e.r(909),l=r&&"object"==typeof r&&"default"in r?r:{
    default:r
  }
  ,n=void 0!==a.default&&a.default.env&&!0,o=function(e){
    return"[object String]"===Object.prototype.toString.call(e)
  }
  ,i=function(){
    function e(e){
      var t=void 0===e?{
        
      }
      :e,s=t.name,a=void 0===s?"stylesheet":s,r=t.optimizeForSpeed,l=void 0===r?n:r;
      c(o(a),"`name` must be a string"),this._name=a,this._deletedRulePlaceholder="#"+a+"-deleted-rule____{}",c("boolean"==typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;
      var i="u">typeof window&&document.querySelector('meta[property="csp-nonce"]');
      this._nonce=i?i.getAttribute("content"):null
    }
    var t,s=e.prototype;
    return s.setOptimizeForSpeed=function(e){
      c("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()
    }
    ,s.isOptimizeForSpeed=function(){
      return this._optimizeForSpeed
    }
    ,s.inject=function(){
      var e=this;
      if(c(!this._injected,"sheet already injected"),this._injected=!0,"u">typeof window&&this._optimizeForSpeed){
        this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0);
        return
      }
      this._serverSheet={
        cssRules:[],insertRule:function(t,s){
          return"number"==typeof s?e._serverSheet.cssRules[s]={
            cssText:t
          }
          :e._serverSheet.cssRules.push({
            cssText:t
          }
          ),s
        }
        ,deleteRule:function(t){
          e._serverSheet.cssRules[t]=null
        }
        
      }
      
    }
    ,s.getSheetForTag=function(e){
      if(e.sheet)return e.sheet;
      for(var t=0;
      t<document.styleSheets.length;
      t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]
    }
    ,s.getSheet=function(){
      return this.getSheetForTag(this._tags[this._tags.length-1])
    }
    ,s.insertRule=function(e,t){
      if(c(o(e),"`insertRule` accepts only strings"),"u"<typeof window)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;
      if(this._optimizeForSpeed){
        var s=this.getSheet();
        "number"!=typeof t&&(t=s.cssRules.length);
        try{
          s.insertRule(e,t)
        }
        catch(t){
          return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1
        }
        
      }
      else{
        var a=this._tags[t];
        this._tags.push(this.makeStyleTag(this._name,e,a))
      }
      return this._rulesCount++
    }
    ,s.replaceRule=function(e,t){
      if(this._optimizeForSpeed||"u"<typeof window){
        var s="u">typeof window?this.getSheet():this._serverSheet;
        if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;
        s.deleteRule(e);
        try{
          s.insertRule(t,e)
        }
        catch(a){
          n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)
        }
        
      }
      else{
        var a=this._tags[e];
        c(a,"old rule at index `"+e+"` not found"),a.textContent=t
      }
      return e
    }
    ,s.deleteRule=function(e){
      if("u"<typeof window)return void this._serverSheet.deleteRule(e);
      if(this._optimizeForSpeed)this.replaceRule(e,"");
      else{
        var t=this._tags[e];
        c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null
      }
      
    }
    ,s.flush=function(){
      this._injected=!1,this._rulesCount=0,"u">typeof window?(this._tags.forEach(function(e){
        return e&&e.parentNode.removeChild(e)
      }
      ),this._tags=[]):this._serverSheet.cssRules=[]
    }
    ,s.cssRules=function(){
      var e=this;
      return"u"<typeof window?this._serverSheet.cssRules:this._tags.reduce(function(t,s){
        return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,function(t){
          return t.cssText===e._deletedRulePlaceholder?null:t
        }
        )):t.push(null),t
      }
      ,[])
    }
    ,s.makeStyleTag=function(e,t,s){
      t&&c(o(t),"makeStyleTag accepts only strings as second parameter");
      var a=document.createElement("style");
      this._nonce&&a.setAttribute("nonce",this._nonce),a.type="text/css",a.setAttribute("data-"+e,""),t&&a.appendChild(document.createTextNode(t));
      var r=document.head||document.getElementsByTagName("head")[0];
      return s?r.insertBefore(a,s):r.appendChild(a),a
    }
    ,t=[{
      key:"length",get:function(){
        return this._rulesCount
      }
      
    }
    ],function(e,t){
      for(var s=0;
      s<t.length;
      s++){
        var a=t[s];
        a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)
      }
      
    }
    (e.prototype,t),e
  }
  ();
  function c(e,t){
    if(!e)throw Error("StyleSheet: "+t+".")
  }
  var d=function(e){
    for(var t=5381,s=e.length;
    s;
    )t=33*t^e.charCodeAt(--s);
    return t>>>0
  }
  ,u={
    
  }
  ;
  function x(e,t){
    if(!t)return"jsx-"+e;
    var s=String(t),a=e+s;
    return u[a]||(u[a]="jsx-"+d(e+"-"+s)),u[a]
  }
  function f(e,t){
    "u"<typeof window&&(t=t.replace(/\/style/gi,"\\/style"));
    var s=e+t;
    return u[s]||(u[s]=t.replace(/__jsx-style-dynamic-selector/g,e)),u[s]
  }
  var b=function(){
    function e(e){
      var t=void 0===e?{
        
      }
      :e,s=t.styleSheet,a=void 0===s?null:s,r=t.optimizeForSpeed,l=void 0!==r&&r;
      this._sheet=a||new i({
        name:"styled-jsx",optimizeForSpeed:l
      }
      ),this._sheet.inject(),a&&"boolean"==typeof l&&(this._sheet.setOptimizeForSpeed(l),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._fromServer=void 0,this._indices={
        
      }
      ,this._instancesCounts={
        
      }
      
    }
    var t=e.prototype;
    return t.add=function(e){
      var t=this;
      void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),"u">typeof window&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){
        return e[t]=0,e
      }
      ,{
        
      }
      ));
      var s=this.getIdAndRules(e),a=s.styleId,r=s.rules;
      if(a in this._instancesCounts){
        this._instancesCounts[a]+=1;
        return
      }
      var l=r.map(function(e){
        return t._sheet.insertRule(e)
      }
      ).filter(function(e){
        return -1!==e
      }
      );
      this._indices[a]=l,this._instancesCounts[a]=1
    }
    ,t.remove=function(e){
      var t=this,s=this.getIdAndRules(e).styleId;
      if(function(e,t){
        if(!e)throw Error("StyleSheetRegistry: "+t+".")
      }
      (s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){
        var a=this._fromServer&&this._fromServer[s];
        a?(a.parentNode.removeChild(a),delete this._fromServer[s]):(this._indices[s].forEach(function(e){
          return t._sheet.deleteRule(e)
        }
        ),delete this._indices[s]),delete this._instancesCounts[s]
      }
      
    }
    ,t.update=function(e,t){
      this.add(t),this.remove(e)
    }
    ,t.flush=function(){
      this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={
        
      }
      ,this._instancesCounts={
        
      }
      
    }
    ,t.cssRules=function(){
      var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){
        return[t,e._fromServer[t]]
      }
      ):[],s=this._sheet.cssRules();
      return t.concat(Object.keys(this._indices).map(function(t){
        return[t,e._indices[t].map(function(e){
          return s[e].cssText
        }
        ).join(e._optimizeForSpeed?"":"\n")]
      }
      ).filter(function(e){
        return!!e[1]
      }
      ))
    }
    ,t.styles=function(e){
      var t,s;
      return t=this.cssRules(),void 0===(s=e)&&(s={
        
      }
      ),t.map(function(e){
        var t=e[0],a=e[1];
        return l.default.createElement("style",{
          id:"__"+t,key:"__"+t,nonce:s.nonce?s.nonce:void 0,dangerouslySetInnerHTML:{
            __html:a
          }
          
        }
        )
      }
      )
    }
    ,t.getIdAndRules=function(e){
      var t=e.children,s=e.dynamic,a=e.id;
      if(s){
        var r=x(a,s);
        return{
          styleId:r,rules:Array.isArray(t)?t.map(function(e){
            return f(r,e)
          }
          ):[f(r,t)]
        }
        
      }
      return{
        styleId:x(a),rules:Array.isArray(t)?t:[t]
      }
      
    }
    ,t.selectFromServer=function(){
      return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){
        return e[t.id.slice(2)]=t,e
      }
      ,{
        
      }
      )
    }
    ,e
  }
  (),h=r.createContext(null);
  function p(){
    return new b
  }
  function m(){
    return r.useContext(h)
  }
  h.displayName="StyleSheetContext";
  var g=l.default.useInsertionEffect||l.default.useLayoutEffect,j="u">typeof window?p():void 0;
  function v(e){
    var t=j||m();
    return t&&("u"<typeof window?t.add(e):g(function(){
      return t.add(e),function(){
        t.remove(e)
      }
      
    }
    ,[e.id,String(e.dynamic)])),null
  }
  v.dynamic=function(e){
    return e.map(function(e){
      return x(e[0],e[1])
    }
    ).join(" ")
  }
  ,s.StyleRegistry=function(e){
    var t=e.registry,s=e.children,a=r.useContext(h),n=r.useState(function(){
      return a||t||p()
    }
    )[0];
    return l.default.createElement(h.Provider,{
      value:n
    }
    ,s)
  }
  ,s.createStyleRegistry=p,s.style=v,s.useStyleRegistry=m
}
,75368,(e,t,s)=>{
  t.exports=e.r(5212).style
}
,10926,(e,t,s)=>{
  "use strict";
  function a({
    widthInt:e,heightInt:t,blurWidth:s,blurHeight:r,blurDataURL:l,objectFit:n
  }
  ){
    let o=s?40*s:e,i=r?40*r:t,c=o&&i?`viewBox='0 0 ${o} ${i}'`:"";
    return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${l}'/%3E%3C/svg%3E`
  }
  Object.defineProperty(s,"__esModule",{
    value:!0
  }
  ),Object.defineProperty(s,"getImageBlurSvg",{
    enumerable:!0,get:function(){
      return a
    }
    
  }
  )
}
,16491,(e,t,s)=>{
  "use strict";
  Object.defineProperty(s,"__esModule",{
    value:!0
  }
  );
  var a={
    VALID_LOADERS:function(){
      return l
    }
    ,imageConfigDefault:function(){
      return n
    }
    
  }
  ;
  for(var r in a)Object.defineProperty(s,r,{
    enumerable:!0,get:a[r]
  }
  );
  let l=["default","imgix","cloudinary","akamai","custom"],n={
    deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1
  }
  
}
,33355,(e,t,s)=>{
  "use strict";
  Object.defineProperty(s,"__esModule",{
    value:!0
  }
  ),Object.defineProperty(s,"getImgProps",{
    enumerable:!0,get:function(){
      return c
    }
    
  }
  ),e.r(62777);
  let a=e.r(85763),r=e.r(10926),l=e.r(16491),n=["-moz-initial","fill","none","scale-down",void 0];
  function o(e){
    return void 0!==e.default
  }
  function i(e){
    return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN
  }
  function c({
    src:e,sizes:t,unoptimized:s=!1,priority:d=!1,preload:u=!1,loading:x,className:f,quality:b,width:h,height:p,fill:m=!1,style:g,overrideSrc:j,onLoad:v,onLoadingComplete:y,placeholder:N="empty",blurDataURL:w,fetchPriority:_,decoding:S="async",layout:k,objectFit:C,objectPosition:R,lazyBoundary:O,lazyRoot:E,...z
  }
  ,P){
    var I;
    let M,F,A,{
      imgConf:B,showAltText:T,blurComplete:D,defaultLoader:$
    }
    =P,W=B||l.imageConfigDefault;
    if("allSizes"in W)M=W;
    else{
      let e=[...W.deviceSizes,...W.imageSizes].sort((e,t)=>e-t),t=W.deviceSizes.sort((e,t)=>e-t),s=W.qualities?.sort((e,t)=>e-t);
      M={
        ...W,allSizes:e,deviceSizes:t,qualities:s
      }
      
    }
    if(void 0===$)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{
      value:"E163",enumerable:!1,configurable:!0
    }
    );
    let U=z.loader||$;
    delete z.loader,delete z.srcSet;
    let q="__next_img_default"in U;
    if(q){
      if("custom"===M.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{
        value:"E252",enumerable:!1,configurable:!0
      }
      )
    }
    else{
      let e=U;
      U=t=>{
        let{
          config:s,...a
        }
        =t;
        return e(a)
      }
      
    }
    if(k){
      "fill"===k&&(m=!0);
      let e={
        intrinsic:{
          maxWidth:"100%",height:"auto"
        }
        ,responsive:{
          width:"100%",height:"auto"
        }
        
      }
      [k];
      e&&(g={
        ...g,...e
      }
      );
      let s={
        responsive:"100vw",fill:"100vw"
      }
      [k];
      s&&!t&&(t=s)
    }
    let L="",V=i(h),X=i(p);
    if((I=e)&&"object"==typeof I&&(o(I)||void 0!==I.src)){
      let t=o(e)?e.default:e;
      if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{
        value:"E460",enumerable:!1,configurable:!0
      }
      );
      if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{
        value:"E48",enumerable:!1,configurable:!0
      }
      );
      if(F=t.blurWidth,A=t.blurHeight,w=w||t.blurDataURL,L=t.src,!m)if(V||X){
        if(V&&!X){
          let e=V/t.width;
          X=Math.round(t.height*e)
        }
        else if(!V&&X){
          let e=X/t.height;
          V=Math.round(t.width*e)
        }
        
      }
      else V=t.width,X=t.height
    }
    let G=!d&&!u&&("lazy"===x||void 0===x);
    (!(e="string"==typeof e?e:L)||e.startsWith("data:")||e.startsWith("blob:"))&&(s=!0,G=!1),M.unoptimized&&(s=!0),q&&!M.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(s=!0);
    let H=i(b),K=Object.assign(m?{
      position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:C,objectPosition:R
    }
    :{
      
    }
    ,T?{
      
    }
    :{
      color:"transparent"
    }
    ,g),Q=D||"empty"===N?null:"blur"===N?`url("data:image/svg+xml;charset=utf-8,${(0,r.getImageBlurSvg)({widthInt:V,heightInt:X,blurWidth:F,blurHeight:A,blurDataURL:w||"",objectFit:K.objectFit})}")`:`url("${N}")`,J=n.includes(K.objectFit)?"fill"===K.objectFit?"100% 100%":"cover":K.objectFit,Y=Q?{
      backgroundSize:J,backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Q
    }
    :{
      
    }
    ,Z=function({
      config:e,src:t,unoptimized:s,width:r,quality:l,sizes:n,loader:o
    }
    ){
      if(s){
        if(t.startsWith("/")&&!t.startsWith("//")){
          let e=(0,a.getDeploymentId)();
          if(e){
            let s=t.indexOf("?");
            if(-1!==s){
              let a=new URLSearchParams(t.slice(s+1));
              a.get("dpl")||(a.append("dpl",e),t=t.slice(0,s)+"?"+a.toString())
            }
            else t+=`?dpl=${e}`
          }
          
        }
        return{
          src:t,srcSet:void 0,sizes:void 0
        }
        
      }
      let{
        widths:i,kind:c
      }
      =function({
        deviceSizes:e,allSizes:t
      }
      ,s,a){
        if(a){
          let s=/(^|\s)(1?\d?\d)vw/g,r=[];
          for(let e;
          e=s.exec(a);
          )r.push(parseInt(e[2]));
          if(r.length){
            let s=.01*Math.min(...r);
            return{
              widths:t.filter(t=>t>=e[0]*s),kind:"w"
            }
            
          }
          return{
            widths:t,kind:"w"
          }
          
        }
        return"number"!=typeof s?{
          widths:e,kind:"w"
        }
        :{
          widths:[...new Set([s,2*s].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"
        }
        
      }
      (e,r,n),d=i.length-1;
      return{
        sizes:n||"w"!==c?n:"100vw",srcSet:i.map((s,a)=>`${o({config:e,src:t,quality:l,width:s})} ${"w"===c?s:a+1}${c}`).join(", "),src:o({
          config:e,src:t,quality:l,width:i[d]
        }
        )
      }
      
    }
    ({
      config:M,src:e,unoptimized:s,width:V,quality:H,sizes:t,loader:U
    }
    ),ee=G?"lazy":x;
    return{
      props:{
        ...z,loading:ee,fetchPriority:_,width:V,height:X,decoding:S,className:f,style:{
          ...K,...Y
        }
        ,sizes:Z.sizes,srcSet:Z.srcSet,src:j||Z.src
      }
      ,meta:{
        unoptimized:s,preload:u||d,placeholder:N,fill:m
      }
      
    }
    
  }
  
}
,36635,(e,t,s)=>{
  "use strict";
  Object.defineProperty(s,"__esModule",{
    value:!0
  }
  ),Object.defineProperty(s,"default",{
    enumerable:!0,get:function(){
      return o
    }
    
  }
  );
  let a=e.r(909),r="u"<typeof window,l=r?()=>{
    
  }
  :a.useLayoutEffect,n=r?()=>{
    
  }
  :a.useEffect;
  function o(e){
    let{
      headManager:t,reduceComponentsToState:s
    }
    =e;
    function o(){
      if(t&&t.mountedInstances){
        let e=a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
        t.updateHead(s(e))
      }
      
    }
    return r&&(t?.mountedInstances?.add(e.children),o()),l(()=>(t?.mountedInstances?.add(e.children),()=>{
      t?.mountedInstances?.delete(e.children)
    }
    )),l(()=>(t&&(t._pendingUpdate=o),()=>{
      t&&(t._pendingUpdate=o)
    }
    )),n(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{
      t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)
    }
    )),null
  }
  
}
,48329,(e,t,s)=>{
  "use strict";
  Object.defineProperty(s,"__esModule",{
    value:!0
  }
  );
  var a={
    default:function(){
      return h
    }
    ,defaultHead:function(){
      return u
    }
    
  }
  ;
  for(var r in a)Object.defineProperty(s,r,{
    enumerable:!0,get:a[r]
  }
  );
  let l=e.r(81258),n=e.r(44066),o=e.r(72828),i=n._(e.r(909)),c=l._(e.r(36635)),d=e.r(92150);
  function u(){
    return[(0,o.jsx)("meta",{
      charSet:"utf-8"
    }
    ,"charset"),(0,o.jsx)("meta",{
      name:"viewport",content:"width=device-width"
    }
    ,"viewport")]
  }
  function x(e,t){
    return"string"==typeof t||"number"==typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)
  }
  e.r(62777);
  let f=["name","httpEquiv","charSet","itemProp"];
  function b(e){
    let t,s,a,r;
    return e.reduce(x,[]).reverse().concat(u().reverse()).filter((t=new Set,s=new Set,a=new Set,r={
      
    }
    ,e=>{
      let l=!0,n=!1;
      if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){
        n=!0;
        let s=e.key.slice(e.key.indexOf("$")+1);
        t.has(s)?l=!1:t.add(s)
      }
      switch(e.type){
        case"title":case"base":s.has(e.type)?l=!1:s.add(e.type);
        break;
        case"meta":for(let t=0,s=f.length;
        t<s;
        t++){
          let s=f[t];
          if(e.props.hasOwnProperty(s))if("charSet"===s)a.has(s)?l=!1:a.add(s);
          else{
            let t=e.props[s],a=r[s]||new Set;
            ("name"!==s||!n)&&a.has(t)?l=!1:(a.add(t),r[s]=a)
          }
          
        }
        
      }
      return l
    }
    )).reverse().map((e,t)=>{
      let s=e.key||t;
      return i.default.cloneElement(e,{
        key:s
      }
      )
    }
    )
  }
  let h=function({
    children:e
  }
  ){
    let t=(0,i.useContext)(d.HeadManagerContext);
    return(0,o.jsx)(c.default,{
      reduceComponentsToState:b,headManager:t,children:e
    }
    )
  }
  ;
  ("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{
    value:!0
  }
  ),Object.assign(s.default,s),t.exports=s.default)
}
,13972,(e,t,s)=>{
  "use strict";
  Object.defineProperty(s,"__esModule",{
    value:!0
  }
  ),Object.defineProperty(s,"ImageConfigContext",{
    enumerable:!0,get:function(){
      return l
    }
    
  }
  );
  let a=e.r(81258)._(e.r(909)),r=e.r(16491),l=a.default.createContext(r.imageConfigDefault)
}
,11940,(e,t,s)=>{
  "use strict";
  Object.defineProperty(s,"__esModule",{
    value:!0
  }
  ),Object.defineProperty(s,"RouterContext",{
    enumerable:!0,get:function(){
      return a
    }
    
  }
  );
  let a=e.r(81258)._(e.r(909)).default.createContext(null)
}
,55121,(e,t,s)=>{
  "use strict";
  function a(e,t){
    let s=e||75;
    return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-s)<Math.abs(e-s)?t:e,t.qualities[0]):s
  }
  Object.defineProperty(s,"__esModule",{
    value:!0
  }
  ),Object.defineProperty(s,"findClosestQuality",{
    enumerable:!0,get:function(){
      return a
    }
    
  }
  )
}
,26142,(e,t,s)=>{
  "use strict";
  Object.defineProperty(s,"__esModule",{
    value:!0
  }
  ),Object.defineProperty(s,"default",{
    enumerable:!0,get:function(){
      return n
    }
    
  }
  );
  let a=e.r(55121),r=e.r(85763);
  function l({
    config:e,src:t,width:s,quality:n
  }
  ){
    let o=(0,r.getDeploymentId)();
    if(t.startsWith("/")&&!t.startsWith("//")){
      let e=t.indexOf("?");
      if(-1!==e){
        let s=new URLSearchParams(t.slice(e+1)),a=s.get("dpl");
        if(a){
          o=a,s.delete("dpl");
          let r=s.toString();
          t=t.slice(0,e)+(r?"?"+r:"")
        }
        
      }
      
    }
    if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{
      value:"E871",enumerable:!1,configurable:!0
    }
    );
    let i=(0,a.findClosestQuality)(n,e);
    return`${e.path}?url=${encodeURIComponent(t)}&w=${s}&q=${i}${t.startsWith("/")&&o?`&dpl=${
      o
    }
    `:""}`
  }
  l.__next_img_default=!0;
  let n=l
}
,91199,(e,t,s)=>{
  "use strict";
  Object.defineProperty(s,"__esModule",{
    value:!0
  }
  ),Object.defineProperty(s,"useMergedRef",{
    enumerable:!0,get:function(){
      return r
    }
    
  }
  );
  let a=e.r(909);
  function r(e,t){
    let s=(0,a.useRef)(null),r=(0,a.useRef)(null);
    return(0,a.useCallback)(a=>{
      if(null===a){
        let e=s.current;
        e&&(s.current=null,e());
        let t=r.current;
        t&&(r.current=null,t())
      }
      else e&&(s.current=l(e,a)),t&&(r.current=l(t,a))
    }
    ,[e,t])
  }
  function l(e,t){
    if("function"!=typeof e)return e.current=t,()=>{
      e.current=null
    }
    ;
    {
      let s=e(t);
      return"function"==typeof s?s:()=>e(null)
    }
    
  }
  ("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{
    value:!0
  }
  ),Object.assign(s.default,s),t.exports=s.default)
}
,37490,(e,t,s)=>{
  "use strict";
  Object.defineProperty(s,"__esModule",{
    value:!0
  }
  ),Object.defineProperty(s,"Image",{
    enumerable:!0,get:function(){
      return v
    }
    
  }
  );
  let a=e.r(81258),r=e.r(44066),l=e.r(72828),n=r._(e.r(909)),o=a._(e.r(14885)),i=a._(e.r(48329)),c=e.r(33355),d=e.r(16491),u=e.r(13972);
  e.r(62777);
  let x=e.r(11940),f=a._(e.r(26142)),b=e.r(91199),h={
    deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0
  }
  ;
  function p(e,t,s,a,r,l,n){
    let o=e?.src;
    e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{
      
    }
    ).then(()=>{
      if(e.parentElement&&e.isConnected){
        if("empty"!==t&&r(!0),s?.current){
          let t=new Event("load");
          Object.defineProperty(t,"target",{
            writable:!1,value:e
          }
          );
          let a=!1,r=!1;
          s.current({
            ...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>a,isPropagationStopped:()=>r,persist:()=>{
              
            }
            ,preventDefault:()=>{
              a=!0,t.preventDefault()
            }
            ,stopPropagation:()=>{
              r=!0,t.stopPropagation()
            }
            
          }
          )
        }
        a?.current&&a.current(e)
      }
      
    }
    ))
  }
  function m(e){
    return n.use?{
      fetchPriority:e
    }
    :{
      fetchpriority:e
    }
    
  }
  "u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);
  let g=(0,n.forwardRef)(({
    src:e,srcSet:t,sizes:s,height:a,width:r,decoding:o,className:i,style:c,fetchPriority:d,placeholder:u,loading:x,unoptimized:f,fill:h,onLoadRef:g,onLoadingCompleteRef:j,setBlurComplete:v,setShowAltText:y,sizesInput:N,onLoad:w,onError:_,...S
  }
  ,k)=>{
    let C=(0,n.useCallback)(e=>{
      e&&(_&&(e.src=e.src),e.complete&&p(e,u,g,j,v,f,N))
    }
    ,[e,u,g,j,v,_,f,N]),R=(0,b.useMergedRef)(k,C);
    return(0,l.jsx)("img",{
      ...S,...m(d),loading:x,width:r,height:a,decoding:o,"data-nimg":h?"fill":"1",className:i,style:c,sizes:s,srcSet:t,src:e,ref:R,onLoad:e=>{
        p(e.currentTarget,u,g,j,v,f,N)
      }
      ,onError:e=>{
        y(!0),"empty"!==u&&v(!0),_&&_(e)
      }
      
    }
    )
  }
  );
  function j({
    isAppRouter:e,imgAttributes:t
  }
  ){
    let s={
      as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...m(t.fetchPriority)
    }
    ;
    return e&&o.default.preload?(o.default.preload(t.src,s),null):(0,l.jsx)(i.default,{
      children:(0,l.jsx)("link",{
        rel:"preload",href:t.srcSet?void 0:t.src,...s
      }
      ,"__nimg-"+t.src+t.srcSet+t.sizes)
    }
    )
  }
  let v=(0,n.forwardRef)((e,t)=>{
    let s=(0,n.useContext)(x.RouterContext),a=(0,n.useContext)(u.ImageConfigContext),r=(0,n.useMemo)(()=>{
      let e=h||a||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),s=e.deviceSizes.sort((e,t)=>e-t),r=e.qualities?.sort((e,t)=>e-t);
      return{
        ...e,allSizes:t,deviceSizes:s,qualities:r,localPatterns:"u"<typeof window?a?.localPatterns:e.localPatterns
      }
      
    }
    ,[a]),{
      onLoad:o,onLoadingComplete:i
    }
    =e,b=(0,n.useRef)(o);
    (0,n.useEffect)(()=>{
      b.current=o
    }
    ,[o]);
    let p=(0,n.useRef)(i);
    (0,n.useEffect)(()=>{
      p.current=i
    }
    ,[i]);
    let[m,v]=(0,n.useState)(!1),[y,N]=(0,n.useState)(!1),{
      props:w,meta:_
    }
    =(0,c.getImgProps)(e,{
      defaultLoader:f.default,imgConf:r,blurComplete:m,showAltText:y
    }
    );
    return(0,l.jsxs)(l.Fragment,{
      children:[(0,l.jsx)(g,{
        ...w,unoptimized:_.unoptimized,placeholder:_.placeholder,fill:_.fill,onLoadRef:b,onLoadingCompleteRef:p,setBlurComplete:v,setShowAltText:N,sizesInput:e.sizes,ref:t
      }
      ),_.preload?(0,l.jsx)(j,{
        isAppRouter:!s,imgAttributes:w
      }
      ):null]
    }
    )
  }
  );
  ("function"==typeof s.default||"object"==typeof s.default&&null!==s.default)&&void 0===s.default.__esModule&&(Object.defineProperty(s.default,"__esModule",{
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
