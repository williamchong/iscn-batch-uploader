import{n as It,r as D,q as Nt,x as Dt,y as kt,z as lt,i as X,A as xt,f as c,B as Bt,C as Ft,h as st,D as Tt,E as Ut,g as Rt,G as At,H as Et,s as Ot,o as R,c as A,t as j,j as M,a as o,k as tt,v as et,l as nt,d as E}from"./entry.c1d31a9b.js";import{s as Lt,c as Mt,d as jt,e as $t,f as Pt,h as Vt,p as zt,i as Ht}from"./sync.a751affa.js";import{s as Jt}from"./sync.da280c3c.js";import{u as Kt}from"./wallet.daf2874b.js";import{A as Wt,L as qt,a as W}from"./index.060098c5.js";function Gt(...s){var U;const r=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(r);let[n,e,t={}]=s;if(typeof n!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const a=xt(),u=()=>null,I=()=>a.isHydrating?a.payload.data[n]:a.static.data[n];t.server=t.server??!0,t.default=t.default??u,t.getCachedData=t.getCachedData??I,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??It.deep;const f=()=>![null,void 0].includes(t.getCachedData(n));if(!a._asyncData[n]||!t.immediate){(U=a.payload._errors)[n]??(U[n]=null);const m=t.deep?D:Nt;a._asyncData[n]={data:m(t.getCachedData(n)??t.default()),pending:D(!f()),error:Dt(a.payload._errors,n),status:D("idle")}}const i={...a._asyncData[n]};i.refresh=i.execute=(m={})=>{if(a._asyncDataPromises[n]){if(m.dedupe===!1)return a._asyncDataPromises[n];a._asyncDataPromises[n].cancelled=!0}if((m._initial||a.isHydrating&&m._initial!==!1)&&f())return Promise.resolve(t.getCachedData(n));i.pending.value=!0,i.status.value="pending";const k=new Promise((v,N)=>{try{v(e(a))}catch(L){N(L)}}).then(v=>{if(k.cancelled)return a._asyncDataPromises[n];let N=v;t.transform&&(N=t.transform(v)),t.pick&&(N=Yt(N,t.pick)),i.data.value=N,i.error.value=null,i.status.value="success"}).catch(v=>{if(k.cancelled)return a._asyncDataPromises[n];i.error.value=v,i.data.value=c(t.default()),i.status.value="error"}).finally(()=>{k.cancelled||(i.pending.value=!1,a.payload.data[n]=i.data.value,i.error.value&&(a.payload._errors[n]=Bt(i.error.value)),delete a._asyncDataPromises[n])});return a._asyncDataPromises[n]=k,a._asyncDataPromises[n]};const y=()=>i.refresh({_initial:!0}),g=t.server!==!1&&a.payload.serverRendered;{const m=Ft();if(m&&!m._nuxtOnBeforeMountCbs){m._nuxtOnBeforeMountCbs=[];const v=m._nuxtOnBeforeMountCbs;m&&(kt(()=>{v.forEach(N=>{N()}),v.splice(0,v.length)}),lt(()=>v.splice(0,v.length)))}g&&a.isHydrating&&(i.error.value||f())?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):m&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?m._nuxtOnBeforeMountCbs.push(y):t.immediate&&y(),t.watch&&X(t.watch,()=>i.refresh());const k=a.hook("app:data:refresh",async v=>{(!v||v.includes(n))&&await i.refresh()});m&&lt(k)}const d=Promise.resolve(a._asyncDataPromises[n]).then(()=>i);return Object.assign(d,i),d}function Yt(s,r){const n={};for(const e of r)n[e]=s[e];return n}const ct=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Xt(s,r){r?r={...ct,...r}:r=ct;const n=ht(r);return n.dispatch(s),n.toString()}const Qt=Object.freeze(["prototype","__proto__","constructor"]);function ht(s){let r="",n=new Map;const e=t=>{r+=t};return{toString(){return r},getContext(){return n},dispatch(t){return s.replacer&&(t=s.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const a=Object.prototype.toString.call(t);let u="";const I=a.length;I<10?u="unknown:["+a+"]":u=a.slice(8,I-1),u=u.toLowerCase();let f=null;if((f=n.get(t))===void 0)n.set(t,n.size);else return this.dispatch("[CIRCULAR:"+f+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(u!=="object"&&u!=="function"&&u!=="asyncfunction")this[u]?this[u](t):s.ignoreUnknown||this.unkown(t,u);else{let i=Object.keys(t);s.unorderedObjects&&(i=i.sort());let y=[];s.respectType!==!1&&!ut(t)&&(y=Qt),s.excludeKeys&&(i=i.filter(d=>!s.excludeKeys(d)),y=y.filter(d=>!s.excludeKeys(d))),e("object:"+(i.length+y.length)+":");const g=d=>{this.dispatch(d),e(":"),s.excludeValues||this.dispatch(t[d]),e(",")};for(const d of i)g(d);for(const d of y)g(d)}},array(t,a){if(a=a===void 0?s.unorderedArrays!==!1:a,e("array:"+t.length+":"),!a||t.length<=1){for(const f of t)this.dispatch(f);return}const u=new Map,I=t.map(f=>{const i=ht(s);i.dispatch(f);for(const[y,g]of i.getContext())u.set(y,g);return i.toString()});return n=u,I.sort(),this.array(I,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),ut(t)?this.dispatch("[native]"):this.dispatch(t.toString()),s.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),s.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const a=[...t];return this.array(a,s.unorderedSets!==!1)},set(t){e("set:");const a=[...t];return this.array(a,s.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(s.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const pt="[native code] }",Zt=pt.length;function ut(s){return typeof s!="function"?!1:Function.prototype.toString.call(s).slice(-Zt)===pt}class P{constructor(r,n){r=this.words=r||[],this.sigBytes=n===void 0?r.length*4:n}toString(r){return(r||te).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let n=0;n<r.sigBytes;n++){const e=r.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=e<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<r.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=r.words[n>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new P([...this.words])}}const te={stringify(s){const r=[];for(let n=0;n<s.sigBytes;n++){const e=s.words[n>>>2]>>>24-n%4*8&255;r.push((e>>>4).toString(16),(e&15).toString(16))}return r.join("")}},ee={stringify(s){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let e=0;e<s.sigBytes;e+=3){const t=s.words[e>>>2]>>>24-e%4*8&255,a=s.words[e+1>>>2]>>>24-(e+1)%4*8&255,u=s.words[e+2>>>2]>>>24-(e+2)%4*8&255,I=t<<16|a<<8|u;for(let f=0;f<4&&e*8+f*6<s.sigBytes*8;f++)n.push(r.charAt(I>>>6*(3-f)&63))}return n.join("")}},ne={parse(s){const r=s.length,n=[];for(let e=0;e<r;e++)n[e>>>2]|=(s.charCodeAt(e)&255)<<24-e%4*8;return new P(n,r)}},se={parse(s){return ne.parse(unescape(encodeURIComponent(s)))}};class re{constructor(){this._data=new P,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new P,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=se.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,n){}_process(r){let n,e=this._data.sigBytes/(this.blockSize*4);r?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let u=0;u<t;u+=this.blockSize)this._doProcessBlock(this._data.words,u);n=this._data.words.splice(0,t),this._data.sigBytes-=a}return new P(n,a)}}class ae extends re{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const dt=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],oe=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],z=[];class ie extends ae{constructor(){super(...arguments),this._hash=new P([...dt])}reset(){super.reset(),this._hash=new P([...dt])}_doProcessBlock(r,n){const e=this._hash.words;let t=e[0],a=e[1],u=e[2],I=e[3],f=e[4],i=e[5],y=e[6],g=e[7];for(let d=0;d<64;d++){if(d<16)z[d]=r[n+d]|0;else{const B=z[d-15],F=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,O=z[d-2],H=(O<<15|O>>>17)^(O<<13|O>>>19)^O>>>10;z[d]=F+z[d-7]+H+z[d-16]}const U=f&i^~f&y,m=t&a^t&u^a&u,k=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),v=(f<<26|f>>>6)^(f<<21|f>>>11)^(f<<7|f>>>25),N=g+v+U+oe[d]+z[d],L=k+m;g=y,y=i,i=f,f=I+N|0,I=u,u=a,a=t,t=N+L|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+u|0,e[3]=e[3]+I|0,e[4]=e[4]+f|0,e[5]=e[5]+i|0,e[6]=e[6]+y|0,e[7]=e[7]+g|0}finalize(r){super.finalize(r);const n=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(e+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function le(s){return new ie().finalize(s).toString(ee)}function ce(s,r={}){const n=typeof s=="string"?s:Xt(s,r);return le(n).slice(0,10)}function q(s,r,n){var H;const[e={},t]=typeof r=="string"?[{},r]:[r,n],a=st(()=>{let $=s;return typeof $=="function"&&($=$()),c($)}),u=e.key||ce([t,((H=c(e.method))==null?void 0:H.toUpperCase())||"GET",c(e.baseURL),typeof a.value=="string"?a.value:"",c(e.params||e.query),c(e.headers)]);if(!u||typeof u!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+u);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const I=u===t?"$f"+u:u;if(!e.baseURL&&typeof a.value=="string"&&a.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:f,lazy:i,default:y,transform:g,pick:d,watch:U,immediate:m,getCachedData:k,deep:v,...N}=e,L=Tt({...Ut,...N,cache:typeof e.cache=="boolean"?void 0:e.cache}),B={server:f,lazy:i,default:y,transform:g,pick:d,immediate:m,getCachedData:k,deep:v,watch:U===!1?[]:[L,a,...U||[]]};let F;return Gt(I,()=>{var V;return(V=F==null?void 0:F.abort)==null||V.call(F),F=typeof AbortController<"u"?new AbortController:{},(e.$fetch||globalThis.$fetch)(a.value,{signal:F.signal,...L})},B)}let Y;const ue=new Uint8Array(16);function de(){if(!Y&&(Y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Y(ue)}const x=[];for(let s=0;s<256;++s)x.push((s+256).toString(16).slice(1));function fe(s,r=0){return(x[s[r+0]]+x[s[r+1]]+x[s[r+2]]+x[s[r+3]]+"-"+x[s[r+4]]+x[s[r+5]]+"-"+x[s[r+6]]+x[s[r+7]]+"-"+x[s[r+8]]+x[s[r+9]]+"-"+x[s[r+10]]+x[s[r+11]]+x[s[r+12]]+x[s[r+13]]+x[s[r+14]]+x[s[r+15]]).toLowerCase()}const he=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),ft={randomUUID:he};function pe(s,r,n){if(ft.randomUUID&&!r&&!s)return ft.randomUUID();s=s||{};const e=s.random||(s.rng||de)();if(e[6]=e[6]&15|64,e[8]=e[8]&63|128,r){n=n||0;for(let t=0;t<16;++t)r[n+t]=e[t];return r}return fe(e)}const ye=o("h1",null,"Mint LikeCoin NFT/NFT Book",-1),_e={key:0,style:{color:"red"}},ge={key:1,style:{color:"green"}},me=o("hr",null,null,-1),ve={key:2},we=o("h2",null,"1. Select or Create ISCN",-1),be={key:0},Ce=o("p",null,[o("label",null,"Enter ISCN ID or NFT Class ID:")],-1),Se=["disabled"],Ie=o("br",null,null,-1),Ne=o("br",null,null,-1),De=o("br",null,null,-1),ke=o("p",null,[o("label",null,[E("Upload ISCN data json ( "),o("a",{href:"https://github.com/likecoin/iscn-nft-tools/blob/master/mint-nft/samples/iscn.json",target:"_blank"}," iscn.json "),E(" ) file:")])],-1),xe={key:0},Be={cols:"100",rows:"10",readonly:""},Fe=o("br",null,null,-1),Te=["disabled"],Ue={key:3},Re=o("h3",null,"ISCN Information",-1),Ae=["href"],Ee=["href"],Oe=o("hr",null,null,-1),Le={key:4},Me=o("h2",null,"2. Create NFT Class",-1),je=o("label",null,"Max number of supply for this NFT Class (optional):",-1),$e=o("p",null,[o("label",null,[E("Upload NFT Class data json ( "),o("a",{href:"https://github.com/likecoin/iscn-nft-tools/blob/master/mint-nft/samples/nft_class.json",target:"_blank"}," nft_class.json "),E(" ) file: ")])],-1),Pe={key:0},Ve={cols:"100",rows:"10",readonly:""},ze=o("br",null,null,-1),He=["href"],Je=["disabled"],Ke={key:5},We=o("h3",null,"NFT Class Information",-1),qe=["href"],Ge=o("hr",null,null,-1),Ye={key:6},Xe=o("h2",null,"3. Mint NFT",-1),Qe=o("label",null,"Number of NFT to mint:",-1),Ze=o("p",null,[o("label",null,[E("Upload NFT default data json ( "),o("a",{href:"https://github.com/likecoin/iscn-nft-tools/blob/master/mint-nft/samples/nfts_default.json",target:"_blank"}," nfts_default.json "),E(") file: ")])],-1),tn={key:0},en={cols:"100",rows:"10",readonly:""},nn=o("p",null,[o("label",null,[E("Upload NFT CSV ("),o("a",{href:"https://github.com/likecoin/iscn-nft-tools/blob/master/mint-nft/samples/nfts.csv",target:"_blank"}," nfts.csv "),E(") file: ")])],-1),sn={key:1},rn=o("br",null,null,-1),an=["disabled"],on={key:7},ln=["disabled"],cn=["href"],gn=Rt({__name:"index",setup(s){const r=At(),n=Et(),e=Kt(),{wallet:t,signer:a}=Ot(e),{connect:u}=e,I=Wt,f=qt,i=D(1),y=D(""),g=D(!1),d=D(n.query.class_id||n.query.iscn_id||""),U=D(""),m=D(null),k=D(null),v=D(null),N=D(void 0),L=D(null),B=D([]),F=D(null),O=D(100),H=D(null),$=D(""),V=st(()=>{var l;return(l=k.value)==null?void 0:l["@id"]}),J=st(()=>{var l;return(l=v.value)==null?void 0:l.id});X(V,l=>{l&&r.replace({query:{...n.query,iscn_id:l}})}),X(J,l=>{l&&r.replace({query:{...n.query,class_id:l}})}),X(g,l=>{l&&(y.value="")});async function yt(){var l,h,C;try{if(g.value=!0,d.value.startsWith("iscn://")){const{data:p,error:w}=await q(`${W}/iscn/records/id?iscn_id=${encodeURIComponent(d.value)}`,"$2PvvmhBMH0");if(w.value)throw w.value;if(!(p!=null&&p.value))throw new Error("INVALID_ISCN_ID");const{records:T,owner:b}=p.value;k.value=T[0].data,U.value=b,i.value=2}else if(d.value.startsWith("likenft")){const{data:p,error:w}=await q(`${W}/cosmos/nft/v1beta1/classes/${encodeURIComponent(d.value)}`,"$FJ2w5pmi7L");if(w.value)throw w.value;if(!(p!=null&&p.value))throw new Error("INVALID_NFT_CLASS_ID");v.value=p.value.class;const T=(C=(h=(l=v.value)==null?void 0:l.data)==null?void 0:h.parent)==null?void 0:C.iscn_id_prefix,{data:b,error:_}=await q(`${W}/iscn/records/id?iscn_id=${encodeURIComponent(T)}`,"$dTIPOPNbJ2");if(_.value)throw _.value;const{records:S,owner:Q}=b.value;k.value=S[0].data,U.value=Q,i.value=3}else throw new Error("Invalid ISCN ID or NFT Class ID")}catch(p){console.error(p),y.value=p.toString()}finally{g.value=!1}}async function _t(){try{if(g.value=!0,(!t.value||!a.value)&&await u(),!t.value||!a.value)throw new Error("NO_WALLET");if(!m.value)throw new Error("NO_ISCN_DATA");const l=await Lt(m.value,a.value,t.value);await Mt(6e3);const{data:h,error:C}=await q(`${W}/iscn/records/id?iscn_id=${encodeURIComponent(l)}`,"$FCIXcWVl0c");if(C.value)throw C.value;if(!(h!=null&&h.value))throw new Error("INVALID_ISCN_ID");const{records:p,owner:w}=h.value;k.value=p[0].data,U.value=w,i.value=2}catch(l){console.error(l),y.value=l.toString()}finally{g.value=!1}}function gt(l){var w;if(!(l!=null&&l.target))return;const h=(w=l.target)==null?void 0:w.files;if(!h)return;const[C]=h,p=new FileReader;p.onload=T=>{var b;try{const _=(b=T.target)==null?void 0:b.result;if(typeof _!="string")return;const S=JSON.parse(_);if(!S||!S.contentMetadata)throw new Error("Invalid ISCN data json");m.value=S}catch(_){console.error(_),y.value=_.toString()}},p.readAsText(C)}async function mt(){try{if(g.value=!0,(!t.value||!a.value)&&await u(),!t.value||!a.value)return;if(!L.value)throw new Error("NO_CLASS_DATA");const l=await jt(L.value,V.value,a.value,t.value,{nftMaxSupply:N.value});await $t(l,k.value,U.value,!1,a.value,t.value);const{data:h,error:C}=await q(`${W}/cosmos/nft/v1beta1/classes/${encodeURIComponent(l)}`,"$eA1tg4Ymj6");if(C.value)throw C.value;if(!(h!=null&&h.value))throw new Error("INVALID_NFT_CLASS_ID");v.value=h.value.class,i.value=3}catch(l){console.error(l),y.value=l.toString()}finally{g.value=!1}}function vt(l){var w;if(!(l!=null&&l.target))return;const h=(w=l.target)==null?void 0:w.files;if(!h)return;const[C]=h,p=new FileReader;p.onload=T=>{var b;try{const _=(b=T.target)==null?void 0:b.result;if(typeof _!="string")return;const S=JSON.parse(_);if(!S||!S.name)throw new Error("Invalid Class data json");L.value=S}catch(_){console.error(_),y.value=_.toString()}},p.readAsText(C)}async function wt(){try{if(g.value=!0,(!t.value||!a.value)&&await u(),!t.value||!a.value)return;if(!F.value)throw new Error("NO_MINT_DATA");if(B.value.length&&B.value.length!==O.value)throw new Error("NFT data length and nft count not match");const l=F.value.uri,h=F.value.metadata,C=[...Array(O.value).keys()].map(w=>{var ot;const{nftId:T,uri:b,image:_,metadata:S,...Q}=((ot=B==null?void 0:B.value)==null?void 0:ot[w])||{},St=JSON.parse(S||"{}"),G={...h,...St};_&&(G.image=_),Object.entries(Q).forEach(([it,Z])=>{if(Z)try{G[it]=JSON.parse(Z)}catch{G[it]=Z}});const at=T||`nft-${pe()}`;let K=b||l||"";return K&&K.startsWith("https://")&&(K=Pt(K,{class_id:J.value,nft_id:at})),{id:at,uri:K,metadata:G}});$.value=Jt(C,{header:!0});const p=await Vt(C,J.value,a.value,t.value);H.value=p,i.value=4,rt()}catch(l){console.error(l),y.value=l.toString()}finally{g.value=!1}}function bt(l){var w;if(!(l!=null&&l.target))return;const h=(w=l.target)==null?void 0:w.files;if(!h)return;const[C]=h,p=new FileReader;p.onload=T=>{var b;try{const _=(b=T.target)==null?void 0:b.result;if(typeof _!="string")return;const S=JSON.parse(_);if(!S||S.uri===void 0)throw new Error("Invalid NFT default data json");F.value=S}catch(_){console.error(_),y.value=_.toString()}},p.readAsText(C)}function Ct(l){var w;if(!(l!=null&&l.target))return;const h=(w=l.target)==null?void 0:w.files;if(!h)return;const[C]=h,p=new FileReader;p.onload=T=>{var b;try{const _=(b=T.target)==null?void 0:b.result;if(typeof _!="string")return;const S=zt(_,{columns:!0});if(B.value=S,S.length&&S.length!==O.value)throw new Error("NFT data length and nft count not match")}catch(_){console.error(_),y.value=_.toString()}},p.readAsText(C)}function rt(){Ht($.value,"nft.csv","text/csv;charset=utf-8;")}return(l,h)=>{var C,p,w,T;return R(),A("div",null,[ye,c(y)?(R(),A("div",_e,j(c(y)),1)):M("",!0),c(g)?(R(),A("div",ge," Loading... ")):M("",!0),o("div",null,"Steps "+j(c(i))+" / 4",1),me,c(i)===1?(R(),A("section",ve,[we,c(m)?M("",!0):(R(),A("div",be,[Ce,tt(o("input",{"onUpdate:modelValue":h[0]||(h[0]=b=>nt(d)?d.value=b:null),placeholder:"iscn://... or likenft...."},null,512),[[et,c(d)]]),o("button",{disabled:c(g),onClick:yt}," Submit ",8,Se)])),Ie,Ne,E(" or "),De,o("div",null,[ke,c(m)?(R(),A("div",xe,[o("textarea",Be,j(JSON.stringify(c(m),null,2)),1)])):M("",!0),o("input",{type:"file",onChange:gt},null,32),Fe,o("button",{disabled:c(g),style:{"margin-top":"16px"},onClick:_t}," Create ",8,Te)])])):c(i)>1?(R(),A("section",Ue,[Re,o("p",null,[E(" ISCN ID: "),o("a",{target:"_blank",href:`${c(I)}/iscn/${encodeURIComponent(c(V))}`},j(c(V)),9,Ae)]),o("p",null,[E(" ISCN Owner: "),o("a",{target:"_blank",href:`${c(f)}/${encodeURIComponent(c(U))}`},j(c(U)),9,Ee)]),o("p",null,"ISCN Title: "+j((p=(C=c(k))==null?void 0:C.contentMetadata)==null?void 0:p.name),1),Oe])):M("",!0),c(i)===2?(R(),A("section",Le,[Me,o("div",null,[je,tt(o("input",{"onUpdate:modelValue":h[1]||(h[1]=b=>nt(N)?N.value=b:null),type:"number"},null,512),[[et,c(N)]]),$e,c(L)?(R(),A("div",Pe,[o("textarea",Ve,j(JSON.stringify(c(L),null,2)),1)])):M("",!0),o("input",{type:"file",onChange:vt},null,32),ze,o("p",null,[E("You can also create your ISCN using "),o("a",{href:`${c(I)}/new`,target:"_blank"},"app.like.co",8,He)]),o("button",{disabled:c(g),onClick:mt}," Create ",8,Je)])])):c(i)>2?(R(),A("section",Ke,[We,o("p",null,[E(" NFT Class ID: "),o("a",{target:"_blank",href:`${c(f)}/nft/class/${encodeURIComponent(c(J))}`},j(c(J)),9,qe)]),Ge])):M("",!0),c(i)===3?(R(),A("section",Ye,[Xe,o("div",null,[Qe,tt(o("input",{"onUpdate:modelValue":h[2]||(h[2]=b=>nt(O)?O.value=b:null),type:"number"},null,512),[[et,c(O)]]),Ze,c(F)?(R(),A("div",tn,[o("textarea",en,j(JSON.stringify(c(F),null,2)),1)])):M("",!0),o("input",{type:"file",onChange:bt},null,32),nn,(w=c(B))!=null&&w.length?(R(),A("div",sn,[o("pre",null,"Number of NFT data in CSV:"+j((T=c(B))==null?void 0:T.length),1)])):M("",!0),o("input",{type:"file",onChange:Ct},null,32),rn,o("button",{disabled:c(g),style:{"margin-top":"16px"},onClick:wt}," Create ",8,an)])])):M("",!0),c(i)>3?(R(),A("section",on,[E(" Success! "),o("button",{disabled:c(g),onClick:rt}," Download NFT result csv ",8,ln),o("p",null,[o("a",{target:"_blank",href:`${c(f)}/nft/class/${encodeURIComponent(c(J))}`}," View your NFT ",8,cn)])])):M("",!0)])}}});export{gn as default};
