import{p as zn}from"./index-D9wqGSmT.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bo="186",y2=0,ca=1,b2=2,Cr=1,E2=2,Fi=3,kn=0,Ut=1,mn=2,xn=0,zi=1,Cs=2,ua=3,ha=4,T2=5,fi=100,A2=101,w2=102,R2=103,C2=104,P2=200,L2=201,D2=202,I2=203,S1=204,y1=205,U2=206,N2=207,F2=208,O2=209,B2=210,z2=211,G2=212,V2=213,H2=214,Ps=0,Ls=1,Ds=2,Wi=3,Is=4,Us=5,Ns=6,Fs=7,b1=0,k2=1,W2=2,on=0,E1=1,T1=2,A1=3,w1=4,R1=5,C1=6,Eo=7,P1=300,Wn=301,xi=302,Jr=303,Kr=304,Hr=306,Os=1e3,gn=1001,Bs=1002,Tt=1003,X2=1004,nr=1005,Ct=1006,$r=1007,Gn=1008,Bt=1009,L1=1010,D1=1011,Xi=1012,To=1013,ln=1014,Jt=1015,cn=1016,Ao=1017,wo=1018,qi=1020,I1=35902,U1=35899,N1=1021,F1=1022,Kt=1023,Mn=1026,Vn=1027,Ro=1028,Co=1029,Xn=1030,Po=1031,Lo=1033,Pr=33776,Lr=33777,Dr=33778,Ir=33779,zs=35840,Gs=35841,Vs=35842,Hs=35843,ks=36196,Ws=37492,Xs=37496,qs=37488,Ys=37489,Nr=37490,Zs=37491,Js=37808,Ks=37809,$s=37810,Qs=37811,js=37812,eo=37813,to=37814,no=37815,io=37816,ro=37817,so=37818,oo=37819,ao=37820,lo=37821,co=36492,uo=36494,ho=36495,fo=36283,po=36284,Fr=36285,mo=36286,q2=3200,go=0,Y2=1,Pn="",Ot="srgb",Or="srgb-linear",Br="linear",lt="srgb",Qr=7680,Z2=519,J2=512,K2=513,$2=514,Do=515,Q2=516,j2=517,Io=518,el=519,tl=35044,nl=35048,fa="300 es",sn=2e3,Yi=2001;function il(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rl(){const i=zr("canvas");return i.style.display="block",i}const da={};function pa(...i){const e="THREE."+i.shift();console.log(e,...i)}function O1(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ze(...i){i=O1(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function nt(...i){i=O1(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function gi(...i){const e=i.join(" ");e in da||(da[e]=!0,ze(...i))}function sl(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const ol={[Ps]:Ls,[Ds]:Ns,[Is]:Fs,[Wi]:Us,[Ls]:Ps,[Ns]:Ds,[Fs]:Is,[Us]:Wi};class Yn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ma=1234567;const Gi=Math.PI/180,Zi=180/Math.PI;function Zn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function Je(i,e,t){return Math.max(e,Math.min(t,i))}function Uo(i,e){return(i%e+e)%e}function al(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function ll(i,e,t){return i!==e?(t-i)/(e-i):0}function Vi(i,e,t){return(1-t)*i+t*e}function cl(i,e,t,n){return Vi(i,e,1-Math.exp(-t*n))}function ul(i,e=1){return e-Math.abs(Uo(i,e*2)-e)}function hl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function fl(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function dl(i,e){return i+Math.floor(Math.random()*(e-i+1))}function pl(i,e){return i+Math.random()*(e-i)}function ml(i){return i*(.5-Math.random())}function gl(i){i!==void 0&&(ma=i);let e=ma+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _l(i){return i*Gi}function xl(i){return i*Zi}function vl(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ml(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yl(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),d=o((e+n)/2),f=s((e-n)/2),u=o((e-n)/2),p=s((n-e)/2),x=o((n-e)/2);switch(r){case"XYX":i.set(a*d,l*f,l*u,a*c);break;case"YZY":i.set(l*u,a*d,l*f,a*c);break;case"ZXZ":i.set(l*f,l*u,a*d,a*c);break;case"XZX":i.set(a*d,l*x,l*p,a*c);break;case"YXY":i.set(l*p,a*d,l*x,a*c);break;case"ZYZ":i.set(l*x,l*p,a*d,a*c);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function di(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const yt={DEG2RAD:Gi,RAD2DEG:Zi,generateUUID:Zn,clamp:Je,euclideanModulo:Uo,mapLinear:al,inverseLerp:ll,lerp:Vi,damp:cl,pingpong:ul,smoothstep:hl,smootherstep:fl,randInt:dl,randFloat:pl,randFloatSpread:ml,seededRandom:gl,degToRad:_l,radToDeg:xl,isPowerOfTwo:vl,ceilPowerOfTwo:Ml,floorPowerOfTwo:Sl,setQuaternionFromProperEuler:yl,normalize:Dt,denormalize:di},Zo=class Zo{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zo.prototype.isVector2=!0;let de=Zo;class yi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],d=n[r+2],f=n[r+3],u=s[o+0],p=s[o+1],x=s[o+2],b=s[o+3];if(f!==b||l!==u||c!==p||d!==x){let m=l*u+c*p+d*x+f*b;m<0&&(u=-u,p=-p,x=-x,b=-b,m=-m);let h=1-a;if(m<.9995){const y=Math.acos(m),S=Math.sin(y);h=Math.sin(h*y)/S,a=Math.sin(a*y)/S,l=l*h+u*a,c=c*h+p*a,d=d*h+x*a,f=f*h+b*a}else{l=l*h+u*a,c=c*h+p*a,d=d*h+x*a,f=f*h+b*a;const y=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=y,c*=y,d*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],d=n[r+3],f=s[o],u=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+d*f+l*p-c*u,e[t+1]=l*x+d*u+c*f-a*p,e[t+2]=c*x+d*p+a*u-l*f,e[t+3]=d*x-a*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),d=a(r/2),f=a(s/2),u=l(n/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=u*d*f+c*p*x,this._y=c*p*f-u*d*x,this._z=c*d*x+u*p*f,this._w=c*d*f-u*p*x;break;case"YXZ":this._x=u*d*f+c*p*x,this._y=c*p*f-u*d*x,this._z=c*d*x-u*p*f,this._w=c*d*f+u*p*x;break;case"ZXY":this._x=u*d*f-c*p*x,this._y=c*p*f+u*d*x,this._z=c*d*x+u*p*f,this._w=c*d*f-u*p*x;break;case"ZYX":this._x=u*d*f-c*p*x,this._y=c*p*f+u*d*x,this._z=c*d*x-u*p*f,this._w=c*d*f+u*p*x;break;case"YZX":this._x=u*d*f+c*p*x,this._y=c*p*f+u*d*x,this._z=c*d*x-u*p*f,this._w=c*d*f-u*p*x;break;case"XZY":this._x=u*d*f-c*p*x,this._y=c*p*f-u*d*x,this._z=c*d*x+u*p*f,this._w=c*d*f+u*p*x;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=n+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>f){const p=2*Math.sqrt(1+n-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-n-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-n*c,this._z=s*d+o*c+n*l-r*a,this._w=o*d-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jo=class Jo{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ga.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),d=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*d,this.y=n+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jr.copy(this).projectOnVector(e),this.sub(jr)}reflect(e){return this.sub(jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jo.prototype.isVector3=!0;let U=Jo;const jr=new U,ga=new yi,Ko=class Ko{constructor(e,t,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=n,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],d=n[4],f=n[7],u=n[2],p=n[5],x=n[8],b=r[0],m=r[3],h=r[6],y=r[1],S=r[4],v=r[7],E=r[2],T=r[5],P=r[8];return s[0]=o*b+a*y+l*E,s[3]=o*m+a*S+l*T,s[6]=o*h+a*v+l*P,s[1]=c*b+d*y+f*E,s[4]=c*m+d*S+f*T,s[7]=c*h+d*v+f*P,s[2]=u*b+p*y+x*E,s[5]=u*m+p*S+x*T,s[8]=u*h+p*v+x*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-n*s*d+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,u=a*l-d*s,p=c*s-o*l,x=t*f+n*u+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=f*b,e[1]=(r*c-d*n)*b,e[2]=(a*n-r*o)*b,e[3]=u*b,e[4]=(d*t-r*l)*b,e[5]=(r*s-a*t)*b,e[6]=p*b,e[7]=(n*l-c*t)*b,e[8]=(o*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return gi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(es.makeScale(e,t)),this}rotate(e){return gi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(es.makeRotation(-e)),this}translate(e,t){return gi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ko.prototype.isMatrix3=!0;let We=Ko;const es=new We,_a=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xa=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bl(){const i={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=vn(r.r),r.g=vn(r.g),r.b=vn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=_i(r.r),r.g=_i(r.g),r.b=_i(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pn?Br:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return gi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return gi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Or]:{primaries:e,whitePoint:n,transfer:Br,toXYZ:_a,fromXYZ:xa,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:lt,toXYZ:_a,fromXYZ:xa,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}const et=bl();function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function _i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qn;class El{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Qn===void 0&&(Qn=zr("canvas")),Qn.width=e.width,Qn.height=e.height;const r=Qn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Qn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=vn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Tl=0;class No{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Tl++}),this.uuid=Zn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ts(r[o].image)):s.push(ts(r[o]))}else s=ts(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ts(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?El.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let Al=0;const ns=new U;class Pt extends Yn{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=gn,r=gn,s=Ct,o=Gn,a=Kt,l=Bt,c=Pt.DEFAULT_ANISOTROPY,d=Pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Al++}),this.uuid=Zn(),this.name="",this.source=new No(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ns).x}get height(){return this.source.getSize(ns).y}get depth(){return this.source.getSize(ns).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ze(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case Bs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case Bs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=P1;Pt.DEFAULT_ANISOTROPY=1;const $o=class $o{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],p=l[5],x=l[9],b=l[2],m=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-b)<.01&&Math.abs(x-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+b)<.1&&Math.abs(x+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(p+1)/2,E=(h+1)/2,T=(d+u)/4,P=(f+b)/4,_=(x+m)/4;return S>v&&S>E?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=T/n,s=P/n):v>E?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=T/r,s=_/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=P/s,r=_/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-x)*(m-x)+(f-b)*(f-b)+(u-d)*(u-d));return Math.abs(y)<.001&&(y=1),this.x=(m-x)/y,this.y=(f-b)/y,this.z=(u-d)/y,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$o.prototype.isVector4=!0;let pt=$o;class wl extends Yn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Pt(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new No(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $t extends wl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class B1 extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rl extends Pt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Vr=class Vr{constructor(e,t,n,r,s,o,a,l,c,d,f,u,p,x,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,d,f,u,p,x,b,m)}set(e,t,n,r,s,o,a,l,c,d,f,u,p,x,b,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=p,h[7]=x,h[11]=b,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/jn.setFromMatrixColumn(e,0).length(),s=1/jn.setFromMatrixColumn(e,1).length(),o=1/jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*d,p=o*f,x=a*d,b=a*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=p+x*c,t[5]=u-b*c,t[9]=-a*l,t[2]=b-u*c,t[6]=x+p*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,p=l*f,x=c*d,b=c*f;t[0]=u+b*a,t[4]=x*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=p*a-x,t[6]=b+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,p=l*f,x=c*d,b=c*f;t[0]=u-b*a,t[4]=-o*f,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*d,t[9]=b-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,p=o*f,x=a*d,b=a*f;t[0]=l*d,t[4]=x*c-p,t[8]=u*c+b,t[1]=l*f,t[5]=b*c+u,t[9]=p*c-x,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,x=a*l,b=a*c;t[0]=l*d,t[4]=b-u*f,t[8]=x*f+p,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*f+x,t[10]=u-b*f}else if(e.order==="XZY"){const u=o*l,p=o*c,x=a*l,b=a*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+b,t[5]=o*d,t[9]=p*f-x,t[2]=x*f-p,t[6]=a*d,t[10]=b*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cl,e,Pl)}lookAt(e,t,n){const r=this.elements;return Nt.subVectors(e,t),Nt.lengthSq()===0&&(Nt.z=1),Nt.normalize(),En.crossVectors(n,Nt),En.lengthSq()===0&&(Math.abs(n.z)===1?Nt.x+=1e-4:Nt.z+=1e-4,Nt.normalize(),En.crossVectors(n,Nt)),En.normalize(),ir.crossVectors(Nt,En),r[0]=En.x,r[4]=ir.x,r[8]=Nt.x,r[1]=En.y,r[5]=ir.y,r[9]=Nt.y,r[2]=En.z,r[6]=ir.z,r[10]=Nt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],d=n[1],f=n[5],u=n[9],p=n[13],x=n[2],b=n[6],m=n[10],h=n[14],y=n[3],S=n[7],v=n[11],E=n[15],T=r[0],P=r[4],_=r[8],A=r[12],C=r[1],L=r[5],N=r[9],O=r[13],D=r[2],B=r[6],q=r[10],W=r[14],ie=r[3],Y=r[7],Z=r[11],Q=r[15];return s[0]=o*T+a*C+l*D+c*ie,s[4]=o*P+a*L+l*B+c*Y,s[8]=o*_+a*N+l*q+c*Z,s[12]=o*A+a*O+l*W+c*Q,s[1]=d*T+f*C+u*D+p*ie,s[5]=d*P+f*L+u*B+p*Y,s[9]=d*_+f*N+u*q+p*Z,s[13]=d*A+f*O+u*W+p*Q,s[2]=x*T+b*C+m*D+h*ie,s[6]=x*P+b*L+m*B+h*Y,s[10]=x*_+b*N+m*q+h*Z,s[14]=x*A+b*O+m*W+h*Q,s[3]=y*T+S*C+v*D+E*ie,s[7]=y*P+S*L+v*B+E*Y,s[11]=y*_+S*N+v*q+E*Z,s[15]=y*A+S*O+v*W+E*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],p=e[14],x=e[3],b=e[7],m=e[11],h=e[15],y=l*p-c*u,S=a*p-c*f,v=a*u-l*f,E=o*p-c*d,T=o*u-l*d,P=o*f-a*d;return t*(b*y-m*S+h*v)-n*(x*y-m*E+h*T)+r*(x*S-b*E+h*P)-s*(x*v-b*T+m*P)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],c=e[6],d=e[10];return t*(o*d-a*c)-n*(s*d-a*l)+r*(s*c-o*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],p=e[11],x=e[12],b=e[13],m=e[14],h=e[15],y=t*a-n*o,S=t*l-r*o,v=t*c-s*o,E=n*l-r*a,T=n*c-s*a,P=r*c-s*l,_=d*b-f*x,A=d*m-u*x,C=d*h-p*x,L=f*m-u*b,N=f*h-p*b,O=u*h-p*m,D=y*O-S*N+v*L+E*C-T*A+P*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/D;return e[0]=(a*O-l*N+c*L)*B,e[1]=(r*N-n*O-s*L)*B,e[2]=(b*P-m*T+h*E)*B,e[3]=(u*T-f*P-p*E)*B,e[4]=(l*C-o*O-c*A)*B,e[5]=(t*O-r*C+s*A)*B,e[6]=(m*v-x*P-h*S)*B,e[7]=(d*P-u*v+p*S)*B,e[8]=(o*N-a*C+c*_)*B,e[9]=(n*C-t*N-s*_)*B,e[10]=(x*T-b*v+h*y)*B,e[11]=(f*v-d*T-p*y)*B,e[12]=(a*A-o*L-l*_)*B,e[13]=(t*L-n*A+r*_)*B,e[14]=(b*S-x*E-m*y)*B,e[15]=(d*E-f*S+u*y)*B,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+n,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,f=a+a,u=s*c,p=s*d,x=s*f,b=o*d,m=o*f,h=a*f,y=l*c,S=l*d,v=l*f,E=n.x,T=n.y,P=n.z;return r[0]=(1-(b+h))*E,r[1]=(p+v)*E,r[2]=(x-S)*E,r[3]=0,r[4]=(p-v)*T,r[5]=(1-(u+h))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(x+S)*P,r[9]=(m-y)*P,r[10]=(1-(u+b))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let o=jn.set(r[0],r[1],r[2]).length();const a=jn.set(r[4],r[5],r[6]).length(),l=jn.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Wt.copy(this);const c=1/o,d=1/a,f=1/l;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=d,Wt.elements[5]*=d,Wt.elements[6]*=d,Wt.elements[8]*=f,Wt.elements[9]*=f,Wt.elements[10]*=f,t.setFromRotationMatrix(Wt),n.x=o,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,o,a=sn,l=!1){const c=this.elements,d=2*s/(t-e),f=2*s/(n-r),u=(t+e)/(t-e),p=(n+r)/(n-r);let x,b;if(l)x=s/(o-s),b=o*s/(o-s);else if(a===sn)x=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===Yi)x=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=sn,l=!1){const c=this.elements,d=2/(t-e),f=2/(n-r),u=-(t+e)/(t-e),p=-(n+r)/(n-r);let x,b;if(l)x=1/(o-s),b=o/(o-s);else if(a===sn)x=-2/(o-s),b=-(o+s)/(o-s);else if(a===Yi)x=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Vr.prototype.isMatrix4=!0;let at=Vr;const jn=new U,Wt=new at,Cl=new U(0,0,0),Pl=new U(1,1,1),En=new U,ir=new U,Nt=new U,va=new at,Ma=new yi;class Ln{constructor(e=0,t=0,n=0,r=Ln.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(va,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ma.setFromEuler(this),this.setFromQuaternion(Ma,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ln.DEFAULT_ORDER="XYZ";class Fo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ll=0;const Sa=new U,ei=new yi,un=new at,rr=new U,wi=new U,Dl=new U,Il=new yi,ya=new U(1,0,0),ba=new U(0,1,0),Ea=new U(0,0,1),Ta={type:"added"},Ul={type:"removed"},ti={type:"childadded",child:null},is={type:"childremoved",child:null};class bt extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ll++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new U,t=new Ln,n=new yi,r=new U(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new at},normalMatrix:{value:new We}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.multiply(ei),this}rotateOnWorldAxis(e,t){return ei.setFromAxisAngle(e,t),this.quaternion.premultiply(ei),this}rotateX(e){return this.rotateOnAxis(ya,e)}rotateY(e){return this.rotateOnAxis(ba,e)}rotateZ(e){return this.rotateOnAxis(Ea,e)}translateOnAxis(e,t){return Sa.copy(e).applyQuaternion(this.quaternion),this.position.add(Sa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ya,e)}translateY(e){return this.translateOnAxis(ba,e)}translateZ(e){return this.translateOnAxis(Ea,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rr.copy(e):rr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(wi,rr,this.up):un.lookAt(rr,wi,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),ei.setFromRotationMatrix(un),this.quaternion.premultiply(ei.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ta),ti.child=e,this.dispatchEvent(ti),ti.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ul),is.child=e,this.dispatchEvent(is),is.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ta),ti.child=e,this.dispatchEvent(ti),ti.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,e,Dl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wi,Il,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bt.DEFAULT_UP=new U(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class _n extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nl={type:"move"};class rs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),h=this._getHandJoint(c,b);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&u>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Nl)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const z1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function ss(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=et.workingColorSpace){if(e=Uo(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=ss(o,s,e+1/3),this.g=ss(o,s,e),this.b=ss(o,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=z1[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return et.workingToColorSpace(Rt.copy(this),e),Math.round(Je(Rt.r*255,0,255))*65536+Math.round(Je(Rt.g*255,0,255))*256+Math.round(Je(Rt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Rt.copy(this),t);const n=Rt.r,r=Rt.g,s=Rt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=Ot){et.workingToColorSpace(Rt.copy(this),e);const t=Rt.r,n=Rt.g,r=Rt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Tn),this.setHSL(Tn.h+e,Tn.s+t,Tn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Tn),e.getHSL(sr);const n=Vi(Tn.h,sr.h,t),r=Vi(Tn.s,sr.s,t),s=Vi(Tn.l,sr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rt=new Ge;Ge.NAMES=z1;class Fl extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xt=new U,hn=new U,os=new U,fn=new U,ni=new U,ii=new U,Aa=new U,as=new U,ls=new U,cs=new U,us=new pt,hs=new pt,fs=new pt;class Zt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Xt.subVectors(e,t),r.cross(Xt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Xt.subVectors(r,t),hn.subVectors(n,t),os.subVectors(e,t);const o=Xt.dot(Xt),a=Xt.dot(hn),l=Xt.dot(os),c=hn.dot(hn),d=hn.dot(os),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*l-a*d)*u,x=(o*d-a*l)*u;return s.set(1-p-x,x,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fn.x),l.addScaledVector(o,fn.y),l.addScaledVector(a,fn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return us.setScalar(0),hs.setScalar(0),fs.setScalar(0),us.fromBufferAttribute(e,t),hs.fromBufferAttribute(e,n),fs.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(us,s.x),o.addScaledVector(hs,s.y),o.addScaledVector(fs,s.z),o}static isFrontFacing(e,t,n,r){return Xt.subVectors(n,t),hn.subVectors(e,t),Xt.cross(hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Xt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ni.subVectors(r,n),ii.subVectors(s,n),as.subVectors(e,n);const l=ni.dot(as),c=ii.dot(as);if(l<=0&&c<=0)return t.copy(n);ls.subVectors(e,r);const d=ni.dot(ls),f=ii.dot(ls);if(d>=0&&f<=d)return t.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(n).addScaledVector(ni,o);cs.subVectors(e,s);const p=ni.dot(cs),x=ii.dot(cs);if(x>=0&&p<=x)return t.copy(s);const b=p*c-l*x;if(b<=0&&c>=0&&x<=0)return a=c/(c-x),t.copy(n).addScaledVector(ii,a);const m=d*x-p*f;if(m<=0&&f-d>=0&&p-x>=0)return Aa.subVectors(s,r),a=(f-d)/(f-d+(p-x)),t.copy(r).addScaledVector(Aa,a);const h=1/(m+b+u);return o=b*h,a=u*h,t.copy(n).addScaledVector(ni,o).addScaledVector(ii,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Jn{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qt):qt.fromBufferAttribute(s,o),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),ar.subVectors(this.max,Ri),ri.subVectors(e.a,Ri),si.subVectors(e.b,Ri),oi.subVectors(e.c,Ri),An.subVectors(si,ri),wn.subVectors(oi,si),In.subVectors(ri,oi);let t=[0,-An.z,An.y,0,-wn.z,wn.y,0,-In.z,In.y,An.z,0,-An.x,wn.z,0,-wn.x,In.z,0,-In.x,-An.y,An.x,0,-wn.y,wn.x,0,-In.y,In.x,0];return!ds(t,ri,si,oi,ar)||(t=[1,0,0,0,1,0,0,0,1],!ds(t,ri,si,oi,ar))?!1:(lr.crossVectors(An,wn),t=[lr.x,lr.y,lr.z],ds(t,ri,si,oi,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const dn=[new U,new U,new U,new U,new U,new U,new U,new U],qt=new U,or=new Jn,ri=new U,si=new U,oi=new U,An=new U,wn=new U,In=new U,Ri=new U,ar=new U,lr=new U,Un=new U;function ds(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Un.fromArray(i,s);const a=r.x*Math.abs(Un.x)+r.y*Math.abs(Un.y)+r.z*Math.abs(Un.z),l=e.dot(Un),c=t.dot(Un),d=n.dot(Un);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const xt=new U,cr=new de;let Ol=0;class an extends Yn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ol++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tl,this.updateRanges=[],this.gpuType=Jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class G1 extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class V1 extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Bl=new Jn,Ci=new U,ps=new U;class bi{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bl.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ci.subVectors(e,this.center);const t=Ci.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ci,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ps.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ci.copy(e.center).add(ps)),this.expandByPoint(Ci.copy(e.center).sub(ps))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let zl=0;const Gt=new at,ms=new bt,ai=new U,Ft=new Jn,Pi=new Jn,St=new U;class Et extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zl++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(il(e)?V1:G1)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return ms.lookAt(e),ms.updateMatrix(),this.applyMatrix4(ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new st(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(St.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(St),St.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(St)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Pi.setFromBufferAttribute(a),this.morphTargetsRelative?(St.addVectors(Ft.min,Pi.min),Ft.expandByPoint(St),St.addVectors(Ft.max,Pi.max),Ft.expandByPoint(St)):(Ft.expandByPoint(Pi.min),Ft.expandByPoint(Pi.max))}Ft.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)St.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(St));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)St.fromBufferAttribute(a,c),l&&(ai.fromBufferAttribute(e,c),St.add(ai)),r=Math.max(r,n.distanceToSquared(St))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new an(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new U,l[_]=new U;const c=new U,d=new U,f=new U,u=new de,p=new de,x=new de,b=new U,m=new U;function h(_,A,C){c.fromBufferAttribute(n,_),d.fromBufferAttribute(n,A),f.fromBufferAttribute(n,C),u.fromBufferAttribute(s,_),p.fromBufferAttribute(s,A),x.fromBufferAttribute(s,C),d.sub(c),f.sub(c),p.sub(u),x.sub(u);const L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(b.copy(d).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(L),a[_].add(b),a[A].add(b),a[C].add(b),l[_].add(m),l[A].add(m),l[C].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let _=0,A=y.length;_<A;++_){const C=y[_],L=C.start,N=C.count;for(let O=L,D=L+N;O<D;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const S=new U,v=new U,E=new U,T=new U;function P(_){E.fromBufferAttribute(r,_),T.copy(E);const A=a[_];S.copy(A),S.sub(E.multiplyScalar(E.dot(A))).normalize(),v.crossVectors(T,A);const L=v.dot(l[_])<0?-1:1;o.setXYZW(_,S.x,S.y,S.z,L)}for(let _=0,A=y.length;_<A;++_){const C=y[_],L=C.start,N=C.count;for(let O=L,D=L+N;O<D;O+=3)P(e.getX(O+0)),P(e.getX(O+1)),P(e.getX(O+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,d=new U,f=new U;if(e)for(let u=0,p=e.count;u<p;u+=3){const x=e.getX(u+0),b=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,m),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),a.add(d),l.add(d),c.add(d),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)St.fromBufferAttribute(e,t),St.normalize(),e.setXYZ(t,St.x,St.y,St.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,u=new c.constructor(l.length*d);let p=0,x=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?p=l[b]*a.data.stride+a.offset:p=l[b]*d;for(let h=0;h<d;h++)u[x++]=c[p++]}return new an(u,d,f)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const u=c[d],p=e(u,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gs=new U,Gl=new U,Vl=new We;class Cn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=gs.subVectors(n,t).cross(Gl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(gs),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Vl.getNormalMatrix(e),r=this.coplanarPoint(gs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Hl=0;class Ei extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hl++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=zi,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=S1,this.blendDst=y1,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Z2,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){ze(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Cn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new de().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const pn=new U,_s=new U,ur=new U,hr=new U;class Oo{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){_s.copy(e).add(t).multiplyScalar(.5),ur.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(_s);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ur),a=hr.dot(this.direction),l=-hr.dot(ur),c=hr.lengthSq(),d=Math.abs(1-o*o);let f,u,p,x;if(d>0)if(f=o*l-a,u=o*a-l,x=s*d,f>=0)if(u>=-x)if(u<=x){const b=1/d;f*=b,u*=b,p=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-x?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c):u<=x?(f=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(_s).addScaledVector(ur,u),p}intersectSphere(e,t){if(e.radius<0)return null;pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),r=pn.dot(pn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,r,s){const o=this.origin,a=this.direction,l=a.x,c=a.y,d=a.z,f=e.x-o.x,u=e.y-o.y,p=e.z-o.z,x=t.x-o.x,b=t.y-o.y,m=t.z-o.z,h=n.x-o.x,y=n.y-o.y,S=n.z-o.z,v=Math.abs(l),E=Math.abs(c),T=Math.abs(d);let P,_,A,C,L,N,O,D,B,q,W,ie;if(v>=E&&v>=T?(A=l,N=f,B=x,ie=h,l>=0?(P=c,_=d,C=u,L=p,O=b,D=m,q=y,W=S):(P=d,_=c,C=p,L=u,O=m,D=b,q=S,W=y)):E>=T?(A=c,N=u,B=b,ie=y,c>=0?(P=d,_=l,C=p,L=f,O=m,D=x,q=S,W=h):(P=l,_=d,C=f,L=p,O=x,D=m,q=h,W=S)):(A=d,N=p,B=m,ie=S,d>=0?(P=l,_=c,C=f,L=u,O=x,D=b,q=h,W=y):(P=c,_=l,C=u,L=f,O=b,D=x,q=y,W=h)),A===0)return null;const Y=P/A,Z=_/A,Q=1/A,Ee=C-Y*N,ye=L-Z*N,Ke=O-Y*B,Xe=D-Z*B,ke=q-Y*ie,K=W-Z*ie,te=ke*Xe-K*Ke,ge=Ee*K-ye*ke,Be=Ke*ye-Xe*Ee;if(r){if(te<0||ge<0||Be<0)return null}else if((te<0||ge<0||Be<0)&&(te>0||ge>0||Be>0))return null;const be=te+ge+Be;if(be===0)return null;const Ie=Q*(te*N+ge*B+Be*ie);return(be>0?Ie<0:Ie>0)?null:this.at(Ie/be,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bo extends Ei{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=b1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wa=new at,Nn=new Oo,fr=new bi,Ra=new U,dr=new U,pr=new U,mr=new U,xs=new U,gr=new U,Ca=new U,_r=new U;class dt extends bt{constructor(e=new Et,t=new Bo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){gr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(xs.fromBufferAttribute(f,e),o?gr.addScaledVector(xs,d):gr.addScaledVector(xs.sub(t),d))}t.add(gr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere),fr.applyMatrix4(s),Nn.copy(e.ray).recast(e.near),!(fr.containsPoint(Nn.origin)===!1&&(Nn.intersectSphere(fr,Ra)===null||Nn.origin.distanceToSquared(Ra)>(e.far-e.near)**2))&&(wa.copy(s).invert(),Nn.copy(e.ray).applyMatrix4(wa),!(n.boundingBox!==null&&Nn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Nn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,b=u.length;x<b;x++){const m=u[x],h=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,E=S;v<E;v+=3){const T=a.getX(v),P=a.getX(v+1),_=a.getX(v+2);r=xr(this,h,e,n,c,d,f,T,P,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),b=Math.min(a.count,p.start+p.count);for(let m=x,h=b;m<h;m+=3){const y=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);r=xr(this,o,e,n,c,d,f,y,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,b=u.length;x<b;x++){const m=u[x],h=o[m.materialIndex],y=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=y,E=S;v<E;v+=3){const T=v,P=v+1,_=v+2;r=xr(this,h,e,n,c,d,f,T,P,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),b=Math.min(l.count,p.start+p.count);for(let m=x,h=b;m<h;m+=3){const y=m,S=m+1,v=m+2;r=xr(this,o,e,n,c,d,f,y,S,v),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function kl(i,e,t,n,r,s,o,a){let l;if(e.side===Ut?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===kn,a),l===null)return null;_r.copy(a),_r.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(_r);return c<t.near||c>t.far?null:{distance:c,point:_r.clone(),object:i}}function xr(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,dr),i.getVertexPosition(l,pr),i.getVertexPosition(c,mr);const d=kl(i,e,t,n,dr,pr,mr,Ca);if(d){const f=new U;Zt.getBarycoord(Ca,dr,pr,mr,f),r&&(d.uv=Zt.getInterpolatedAttribute(r,a,l,c,f,new de)),s&&(d.uv1=Zt.getInterpolatedAttribute(s,a,l,c,f,new de)),o&&(d.normal=Zt.getInterpolatedAttribute(o,a,l,c,f,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new U,materialIndex:0};Zt.getNormal(dr,pr,mr,u.normal),d.face=u,d.barycoord=f}return d}class H1 extends Pt{constructor(e=null,t=1,n=1,r,s,o,a,l,c=Tt,d=Tt,f,u){super(null,o,a,l,c,d,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pa extends an{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const li=new at,La=new at,vr=[],Da=new Jn,Wl=new at,Li=new dt,Di=new bi;class Xl extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Pa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Wl)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,li),Da.copy(e.boundingBox).applyMatrix4(li),this.boundingBox.union(Da)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,li),Di.copy(e.boundingSphere).applyMatrix4(li),this.boundingSphere.union(Di)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Li.geometry=this.geometry,Li.material=this.material,Li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Di.copy(this.boundingSphere),Di.applyMatrix4(n),e.ray.intersectsSphere(Di)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,li),La.multiplyMatrices(n,li),Li.matrixWorld=La,Li.raycast(e,vr);for(let o=0,a=vr.length;o<a;o++){const l=vr[o];l.instanceId=s,l.object=this,t.push(l)}vr.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Pa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new H1(new Float32Array(r*this.count),r,this.count,Ro,Jt));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Fn=new bi,ql=new de(.5,.5),Mr=new U;class zo{constructor(e=new Cn,t=new Cn,n=new Cn,r=new Cn,s=new Cn,o=new Cn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=sn,n=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],f=s[5],u=s[6],p=s[7],x=s[8],b=s[9],m=s[10],h=s[11],y=s[12],S=s[13],v=s[14],E=s[15];if(r[0].setComponents(c-o,p-d,h-x,E-y).normalize(),r[1].setComponents(c+o,p+d,h+x,E+y).normalize(),r[2].setComponents(c+a,p+f,h+b,E+S).normalize(),r[3].setComponents(c-a,p-f,h-b,E-S).normalize(),n)r[4].setComponents(l,u,m,v).normalize(),r[5].setComponents(c-l,p-u,h-m,E-v).normalize();else if(r[4].setComponents(c-l,p-u,h-m,E-v).normalize(),t===sn)r[5].setComponents(c+l,p+u,h+m,E+v).normalize();else if(t===Yi)r[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){Fn.center.set(0,0,0);const t=ql.distanceTo(e.center);return Fn.radius=.7071067811865476+t,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Mr.x=r.normal.x>0?e.max.x:e.min.x,Mr.y=r.normal.y>0?e.max.y:e.min.y,Mr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yl extends Ei{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ia=new at,_o=new Oo,Sr=new bi,yr=new U;class Zl extends bt{constructor(e=new Et,t=new Yl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),Sr.radius+=s,e.ray.intersectsSphere(Sr)===!1)return;Ia.copy(r).invert(),_o.copy(e.ray).applyMatrix4(Ia);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let x=u,b=p;x<b;x++){const m=c.getX(x);yr.fromBufferAttribute(f,m),Ua(yr,m,l,r,e,t,this)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=u,b=p;x<b;x++)yr.fromBufferAttribute(f,x),Ua(yr,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ua(i,e,t,n,r,s,o){const a=_o.distanceSqToPoint(i);if(a<t){const l=new U;_o.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class k1 extends Pt{constructor(e=[],t=Wn,n,r,s,o,a,l,c,d){super(e,t,n,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jl extends Pt{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ji extends Pt{constructor(e,t,n=ln,r,s,o,a=Tt,l=Tt,c,d=Mn,f=1){if(d!==Mn&&d!==Vn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,o,a,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new No(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Kl extends Ji{constructor(e,t=ln,n=Wn,r,s,o=Tt,a=Tt,l,c=Mn){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class W1 extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ti extends Et{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let u=0,p=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function x(b,m,h,y,S,v,E,T,P,_,A){const C=v/P,L=E/_,N=v/2,O=E/2,D=T/2,B=P+1,q=_+1;let W=0,ie=0;const Y=new U;for(let Z=0;Z<q;Z++){const Q=Z*L-O;for(let Ee=0;Ee<B;Ee++){const ye=Ee*C-N;Y[b]=ye*y,Y[m]=Q*S,Y[h]=D,c.push(Y.x,Y.y,Y.z),Y[b]=0,Y[m]=0,Y[h]=T>0?1:-1,d.push(Y.x,Y.y,Y.z),f.push(Ee/P),f.push(1-Z/_),W+=1}}for(let Z=0;Z<_;Z++)for(let Q=0;Q<P;Q++){const Ee=u+Q+B*Z,ye=u+Q+B*(Z+1),Ke=u+(Q+1)+B*(Z+1),Xe=u+(Q+1)+B*Z;l.push(Ee,ye,Xe),l.push(ye,Ke,Xe),ie+=6}a.addGroup(p,ie,A),p+=ie,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ti(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class kr extends Et{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],f=[],u=[],p=[];let x=0;const b=[],m=n/2;let h=0;y(),o===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new st(f,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(p,2));function y(){const v=new U,E=new U;let T=0;const P=(t-e)/n;for(let _=0;_<=s;_++){const A=[],C=_/s,L=C*(t-e)+e;for(let N=0;N<=r;N++){const O=N/r,D=O*l+a,B=Math.sin(D),q=Math.cos(D);E.x=L*B,E.y=-C*n+m,E.z=L*q,f.push(E.x,E.y,E.z),v.set(B,P,q).normalize(),u.push(v.x,v.y,v.z),p.push(O,1-C),A.push(x++)}b.push(A)}for(let _=0;_<r;_++)for(let A=0;A<s;A++){const C=b[A][_],L=b[A+1][_],N=b[A+1][_+1],O=b[A][_+1];(e>0||A!==0)&&(d.push(C,L,O),T+=3),(t>0||A!==s-1)&&(d.push(L,N,O),T+=3)}c.addGroup(h,T,0),h+=T}function S(v){const E=x,T=new de,P=new U;let _=0;const A=v===!0?e:t,C=v===!0?1:-1;for(let N=1;N<=r;N++)f.push(0,m*C,0),u.push(0,C,0),p.push(.5,.5),x++;const L=x;for(let N=0;N<=r;N++){const D=N/r*l+a,B=Math.cos(D),q=Math.sin(D);P.x=A*q,P.y=m*C,P.z=A*B,f.push(P.x,P.y,P.z),u.push(0,C,0),T.x=B*.5+.5,T.y=q*.5*C+.5,p.push(T.x,T.y),x++}for(let N=0;N<r;N++){const O=E+N,D=L+N;v===!0?d.push(D,D+1,O):d.push(D+1,D,O),_+=3}c.addGroup(h,_,v===!0?1:2),h+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Go extends kr{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Go(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qt{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const d=n[r],u=n[r+1]-d,p=(o-d)/u;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new de:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new U,r=[],s=[],o=[],a=new U,l=new at;for(let p=0;p<=e;p++){const x=p/e;r[p]=this.getTangentAt(x,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const d=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);d<=c&&(c=d,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const x=Math.acos(Je(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,x))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Je(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let x=1;x<=e;x++)s[x].applyMatrix4(l.makeRotationAxis(r[x],p*x)),o[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Vo extends Qt{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new de){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*d-p*f+this.aX,c=u*f+p*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class $l extends Vo{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ho(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,f){let u=(o-s)/c-(a-s)/(c+d)+(a-o)/d,p=(a-o)/d-(l-o)/(d+f)+(l-a)/f;u*=d,p*=d,r(o,a,u,p)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const Na=new U,Fa=new U,vs=new Ho,Ms=new Ho,Ss=new Ho;class X1 extends Qt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new U){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(Fa.subVectors(r[0],r[1]).add(r[0]),c=Fa);const f=r[a%s],u=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Na.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Na),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let x=Math.pow(c.distanceToSquared(f),p),b=Math.pow(f.distanceToSquared(u),p),m=Math.pow(u.distanceToSquared(d),p);b<1e-4&&(b=1),x<1e-4&&(x=b),m<1e-4&&(m=b),vs.initNonuniformCatmullRom(c.x,f.x,u.x,d.x,x,b,m),Ms.initNonuniformCatmullRom(c.y,f.y,u.y,d.y,x,b,m),Ss.initNonuniformCatmullRom(c.z,f.z,u.z,d.z,x,b,m)}else this.curveType==="catmullrom"&&(vs.initCatmullRom(c.x,f.x,u.x,d.x,this.tension),Ms.initCatmullRom(c.y,f.y,u.y,d.y,this.tension),Ss.initCatmullRom(c.z,f.z,u.z,d.z,this.tension));return n.set(vs.calc(l),Ms.calc(l),Ss.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Oa(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,l=i*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*i+t}function Ql(i,e){const t=1-i;return t*t*e}function jl(i,e){return 2*(1-i)*i*e}function e3(i,e){return i*i*e}function Hi(i,e,t,n){return Ql(i,e)+jl(i,t)+e3(i,n)}function t3(i,e){const t=1-i;return t*t*t*e}function n3(i,e){const t=1-i;return 3*t*t*i*e}function i3(i,e){return 3*(1-i)*i*i*e}function r3(i,e){return i*i*i*e}function ki(i,e,t,n,r){return t3(i,e)+n3(i,t)+i3(i,n)+r3(i,r)}class q1 extends Qt{constructor(e=new de,t=new de,n=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new de){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ki(e,r.x,s.x,o.x,a.x),ki(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class s3 extends Qt{constructor(e=new U,t=new U,n=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new U){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ki(e,r.x,s.x,o.x,a.x),ki(e,r.y,s.y,o.y,a.y),ki(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Y1 extends Qt{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class o3 extends Qt{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Z1 extends Qt{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Hi(e,r.x,s.x,o.x),Hi(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class J1 extends Qt{constructor(e=new U,t=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new U){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(Hi(e,r.x,s.x,o.x),Hi(e,r.y,s.y,o.y),Hi(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class K1 extends Qt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return n.set(Oa(a,l.x,c.x,d.x,f.x),Oa(a,l.y,c.y,d.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new de().fromArray(r))}return this}}var Gr=Object.freeze({__proto__:null,ArcCurve:$l,CatmullRomCurve3:X1,CubicBezierCurve:q1,CubicBezierCurve3:s3,EllipseCurve:Vo,LineCurve:Y1,LineCurve3:o3,QuadraticBezierCurve:Z1,QuadraticBezierCurve3:J1,SplineCurve:K1});class a3 extends Qt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Gr[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new Gr[r.type]().fromJSON(r))}return this}}class Ba extends a3{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Y1(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new Z1(this.currentPoint.clone(),new de(e,t),new de(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new q1(this.currentPoint.clone(),new de(e,t),new de(n,r),new de(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new K1(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,l){const c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,r,s,o,a,l),this}absellipse(e,t,n,r,s,o,a,l){const c=new Vo(e,t,n,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $1 extends Ba{constructor(e){super(e),this.uuid=Zn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new Ba().fromJSON(r))}return this}}function l3(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Q1(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=d3(i,e,s,t)),i.length>80*t){a=i[0],l=i[1];let d=a,f=l;for(let u=t;u<r;u+=t){const p=i[u],x=i[u+1];p<a&&(a=p),x<l&&(l=x),p>d&&(d=p),x>f&&(f=x)}c=Math.max(d-a,f-l),c=c!==0?32767/c:0}return Ki(s,o,t,a,l,c,0),o}function Q1(i,e,t,n,r){let s;if(r===E3(i,e,t,n)>0)for(let o=e;o<t;o+=n)s=za(o/n|0,i[o],i[o+1],s);else for(let o=t-n;o>=e;o-=n)s=za(o/n|0,i[o],i[o+1],s);return s&&vi(s,s.next)&&(Qi(s),s=s.next),s}function qn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(vi(t,t.next)||mt(t.prev,t,t.next)===0)){if(Qi(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ki(i,e,t,n,r,s,o){if(!i)return;!o&&s&&x3(i,n,r,s);let a=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?u3(i,n,r,s):c3(i)){e.push(l.i,i.i,c.i),Qi(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=h3(qn(i),e),Ki(i,e,t,n,r,s,2)):o===2&&f3(i,e,t,n,r,s):Ki(qn(i),e,t,n,r,s,1);break}}}function c3(i){const e=i.prev,t=i,n=i.next;if(mt(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,d=Math.min(r,s,o),f=Math.min(a,l,c),u=Math.max(r,s,o),p=Math.max(a,l,c);let x=n.next;for(;x!==e;){if(x.x>=d&&x.x<=u&&x.y>=f&&x.y<=p&&Oi(r,a,s,l,o,c,x.x,x.y)&&mt(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function u3(i,e,t,n){const r=i.prev,s=i,o=i.next;if(mt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,d=r.y,f=s.y,u=o.y,p=Math.min(a,l,c),x=Math.min(d,f,u),b=Math.max(a,l,c),m=Math.max(d,f,u),h=xo(p,x,e,t,n),y=xo(b,m,e,t,n);let S=i.prevZ,v=i.nextZ;for(;S&&S.z>=h&&v&&v.z<=y;){if(S.x>=p&&S.x<=b&&S.y>=x&&S.y<=m&&S!==r&&S!==o&&Oi(a,d,l,f,c,u,S.x,S.y)&&mt(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=p&&v.x<=b&&v.y>=x&&v.y<=m&&v!==r&&v!==o&&Oi(a,d,l,f,c,u,v.x,v.y)&&mt(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=h;){if(S.x>=p&&S.x<=b&&S.y>=x&&S.y<=m&&S!==r&&S!==o&&Oi(a,d,l,f,c,u,S.x,S.y)&&mt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=b&&v.y>=x&&v.y<=m&&v!==r&&v!==o&&Oi(a,d,l,f,c,u,v.x,v.y)&&mt(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function h3(i,e){let t=i;do{const n=t.prev,r=t.next.next;!vi(n,r)&&e2(n,t,t.next,r)&&$i(n,r)&&$i(r,n)&&(e.push(n.i,t.i,r.i),Qi(t),Qi(t.next),t=i=r),t=t.next}while(t!==i);return qn(t)}function f3(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&S3(o,a)){let l=t2(o,a);o=qn(o,o.next),l=qn(l,l.next),Ki(o,e,t,n,r,s,0),Ki(l,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function d3(i,e,t,n){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*n,l=s<o-1?e[s+1]*n:i.length,c=Q1(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(M3(c))}r.sort(p3);for(let s=0;s<r.length;s++)t=m3(r[s],t);return t}function p3(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=n-r}return t}function m3(i,e){const t=g3(i,e);if(!t)return e;const n=t2(t,i);return qn(n,n.next),qn(t,t.next)}function g3(i,e){let t=e;const n=i.x,r=i.y;let s=-1/0,o;if(vi(i,t))return t;do{if(vi(i,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const f=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>s&&(s=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let d=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&j1(r<c?n:s,r,l,c,r<c?s:n,r,t.x,t.y)){const f=Math.abs(r-t.y)/(n-t.x);$i(t,i)&&(f<d||f===d&&(t.x>o.x||t.x===o.x&&_3(o,t)))&&(o=t,d=f)}t=t.next}while(t!==a);return o}function _3(i,e){return mt(i.prev,i,e.prev)<0&&mt(e.next,i,i.next)<0}function x3(i,e,t,n){let r=i;do r.z===0&&(r.z=xo(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,v3(r)}function v3(i){let e,t=1;do{let n=i,r;i=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,t*=2}while(e>1);return i}function xo(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function M3(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function j1(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Oi(i,e,t,n,r,s,o,a){return!(i===o&&e===a)&&j1(i,e,t,n,r,s,o,a)}function S3(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!y3(i,e)&&($i(i,e)&&$i(e,i)&&b3(i,e)&&(mt(i.prev,i,e.prev)||mt(i,e.prev,e))||vi(i,e)&&mt(i.prev,i,i.next)>0&&mt(e.prev,e,e.next)>0)}function mt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function vi(i,e){return i.x===e.x&&i.y===e.y}function e2(i,e,t,n){const r=Er(mt(i,e,t)),s=Er(mt(i,e,n)),o=Er(mt(t,n,i)),a=Er(mt(t,n,e));return!!(r!==s&&o!==a||r===0&&br(i,t,e)||s===0&&br(i,n,e)||o===0&&br(t,i,n)||a===0&&br(t,e,n))}function br(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Er(i){return i>0?1:i<0?-1:0}function y3(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&e2(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $i(i,e){return mt(i.prev,i,i.next)<0?mt(i,e,i.next)>=0&&mt(i,i.prev,e)>=0:mt(i,e,i.prev)<0||mt(i,i.next,e)<0}function b3(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function t2(i,e){const t=vo(i.i,i.x,i.y),n=vo(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function za(i,e,t,n){const r=vo(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Qi(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function vo(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function E3(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class T3{static triangulate(e,t,n=2){return l3(e,t,n)}}class pi{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return pi.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Ga(e),Va(n,e);let o=e.length;t.forEach(Ga);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,Va(n,t[l]);const a=T3.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Ga(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Va(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ko extends Et{constructor(e=new $1([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new st(r,3)),this.setAttribute("uv",new st(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,x=t.bevelSize!==void 0?t.bevelSize:p-.1,b=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const h=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:A3;let S,v=!1,E,T,P,_;if(h){S=h.getSpacedPoints(d),v=!0,u=!1;const ne=h.isCatmullRomCurve3?h.closed:!1;E=h.computeFrenetFrames(d,ne),T=new U,P=new U,_=new U}u||(m=0,p=0,x=0,b=0);const A=a.extractPoints(c);let C=A.shape;const L=A.holes;if(!pi.isClockWise(C)){C=C.reverse();for(let ne=0,se=L.length;ne<se;ne++){const ae=L[ne];pi.isClockWise(ae)&&(L[ne]=ae.reverse())}}function O(ne){const ae=10000000000000001e-36;let le=ne[0];for(let fe=1;fe<=ne.length;fe++){const Ne=fe%ne.length,Ue=ne[Ne],Fe=Ue.x-le.x,Ve=Ue.y-le.y,I=Fe*Fe+Ve*Ve,je=Math.max(Math.abs(Ue.x),Math.abs(Ue.y),Math.abs(le.x),Math.abs(le.y)),qe=ae*je*je;if(I<=qe){ne.splice(Ne,1),fe--;continue}le=Ue}}O(C),L.forEach(O);const D=L.length,B=C;for(let ne=0;ne<D;ne++){const se=L[ne];C=C.concat(se)}function q(ne,se,ae){return se||nt("ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(se,ae)}const W=C.length;function ie(ne,se,ae){let le,fe,Ne;const Ue=ne.x-se.x,Fe=ne.y-se.y,Ve=ae.x-ne.x,I=ae.y-ne.y,je=Ue*Ue+Fe*Fe,qe=Ue*I-Fe*Ve;if(Math.abs(qe)>Number.EPSILON){const w=Math.sqrt(je),g=Math.sqrt(Ve*Ve+I*I),z=se.x-Fe/w,H=se.y+Ue/w,J=ae.x-I/g,ce=ae.y+Ve/g,he=((J-z)*I-(ce-H)*Ve)/(Ue*I-Fe*Ve);le=z+Ue*he-ne.x,fe=H+Fe*he-ne.y;const $=le*le+fe*fe;if($<=2)return new de(le,fe);Ne=Math.sqrt($/2)}else{let w=!1;Ue>Number.EPSILON?Ve>Number.EPSILON&&(w=!0):Ue<-Number.EPSILON?Ve<-Number.EPSILON&&(w=!0):Math.sign(Fe)===Math.sign(I)&&(w=!0),w?(le=-Fe,fe=Ue,Ne=Math.sqrt(je)):(le=Ue,fe=Fe,Ne=Math.sqrt(je/2))}return new de(le/Ne,fe/Ne)}const Y=[];for(let ne=0,se=B.length,ae=se-1,le=ne+1;ne<se;ne++,ae++,le++)ae===se&&(ae=0),le===se&&(le=0),Y[ne]=ie(B[ne],B[ae],B[le]);const Z=[];let Q,Ee=Y.concat();for(let ne=0,se=D;ne<se;ne++){const ae=L[ne];Q=[];for(let le=0,fe=ae.length,Ne=fe-1,Ue=le+1;le<fe;le++,Ne++,Ue++)Ne===fe&&(Ne=0),Ue===fe&&(Ue=0),Q[le]=ie(ae[le],ae[Ne],ae[Ue]);Z.push(Q),Ee=Ee.concat(Q)}let ye;if(m===0)ye=pi.triangulateShape(B,L);else{const ne=[],se=[];for(let ae=0;ae<m;ae++){const le=ae/m,fe=p*Math.cos(le*Math.PI/2),Ne=x*Math.sin(le*Math.PI/2)+b;for(let Ue=0,Fe=B.length;Ue<Fe;Ue++){const Ve=q(B[Ue],Y[Ue],Ne);ge(Ve.x,Ve.y,-fe),le===0&&ne.push(Ve)}for(let Ue=0,Fe=D;Ue<Fe;Ue++){const Ve=L[Ue];Q=Z[Ue];const I=[];for(let je=0,qe=Ve.length;je<qe;je++){const w=q(Ve[je],Q[je],Ne);ge(w.x,w.y,-fe),le===0&&I.push(w)}le===0&&se.push(I)}}ye=pi.triangulateShape(ne,se)}const Ke=ye.length,Xe=x+b;for(let ne=0;ne<W;ne++){const se=u?q(C[ne],Ee[ne],Xe):C[ne];v?(P.copy(E.normals[0]).multiplyScalar(se.x),T.copy(E.binormals[0]).multiplyScalar(se.y),_.copy(S[0]).add(P).add(T),ge(_.x,_.y,_.z)):ge(se.x,se.y,0)}for(let ne=1;ne<=d;ne++)for(let se=0;se<W;se++){const ae=u?q(C[se],Ee[se],Xe):C[se];v?(P.copy(E.normals[ne]).multiplyScalar(ae.x),T.copy(E.binormals[ne]).multiplyScalar(ae.y),_.copy(S[ne]).add(P).add(T),ge(_.x,_.y,_.z)):ge(ae.x,ae.y,f/d*ne)}for(let ne=m-1;ne>=0;ne--){const se=ne/m,ae=p*Math.cos(se*Math.PI/2),le=x*Math.sin(se*Math.PI/2)+b;for(let fe=0,Ne=B.length;fe<Ne;fe++){const Ue=q(B[fe],Y[fe],le);ge(Ue.x,Ue.y,f+ae)}for(let fe=0,Ne=L.length;fe<Ne;fe++){const Ue=L[fe];Q=Z[fe];for(let Fe=0,Ve=Ue.length;Fe<Ve;Fe++){const I=q(Ue[Fe],Q[Fe],le);v?ge(I.x,I.y+S[d-1].y,S[d-1].x+ae):ge(I.x,I.y,f+ae)}}}ke(),K();function ke(){const ne=r.length/3;if(u){let se=0,ae=W*se;for(let le=0;le<Ke;le++){const fe=ye[le];Be(fe[2]+ae,fe[1]+ae,fe[0]+ae)}se=d+m*2,ae=W*se;for(let le=0;le<Ke;le++){const fe=ye[le];Be(fe[0]+ae,fe[1]+ae,fe[2]+ae)}}else{for(let se=0;se<Ke;se++){const ae=ye[se];Be(ae[2],ae[1],ae[0])}for(let se=0;se<Ke;se++){const ae=ye[se];Be(ae[0]+W*d,ae[1]+W*d,ae[2]+W*d)}}n.addGroup(ne,r.length/3-ne,0)}function K(){const ne=r.length/3;let se=0;te(B,se),se+=B.length;for(let ae=0,le=L.length;ae<le;ae++){const fe=L[ae];te(fe,se),se+=fe.length}n.addGroup(ne,r.length/3-ne,1)}function te(ne,se){let ae=ne.length;for(;--ae>=0;){const le=ae;let fe=ae-1;fe<0&&(fe=ne.length-1);for(let Ne=0,Ue=d+m*2;Ne<Ue;Ne++){const Fe=W*Ne,Ve=W*(Ne+1),I=se+le+Fe,je=se+fe+Fe,qe=se+fe+Ve,w=se+le+Ve;be(I,je,qe,w)}}}function ge(ne,se,ae){l.push(ne),l.push(se),l.push(ae)}function Be(ne,se,ae){Ie(ne),Ie(se),Ie(ae);const le=r.length/3,fe=y.generateTopUV(n,r,le-3,le-2,le-1);Qe(fe[0]),Qe(fe[1]),Qe(fe[2])}function be(ne,se,ae,le){Ie(ne),Ie(se),Ie(le),Ie(se),Ie(ae),Ie(le);const fe=r.length/3,Ne=y.generateSideWallUV(n,r,fe-6,fe-3,fe-2,fe-1);Qe(Ne[0]),Qe(Ne[1]),Qe(Ne[3]),Qe(Ne[1]),Qe(Ne[2]),Qe(Ne[3])}function Ie(ne){r.push(l[ne*3+0]),r.push(l[ne*3+1]),r.push(l[ne*3+2])}function Qe(ne){s.push(ne.x),s.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return w3(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Gr[r.type]().fromJSON(r)),new ko(n,e.options)}}const A3={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[r*3],d=e[r*3+1];return[new de(s,o),new de(a,l),new de(c,d)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],f=e[n*3+2],u=e[r*3],p=e[r*3+1],x=e[r*3+2],b=e[s*3],m=e[s*3+1],h=e[s*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new de(o,1-l),new de(c,1-f),new de(u,1-x),new de(b,1-h)]:[new de(a,1-l),new de(d,1-f),new de(p,1-x),new de(m,1-h)]}};function w3(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Wo extends Et{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=Je(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],d=1/t,f=new U,u=new de,p=new U,x=new U,b=new U;let m=0,h=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,h=e[y+1].y-e[y].y,p.x=h*1,p.y=-m,p.z=h*0,b.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(b.x,b.y,b.z);break;default:m=e[y+1].x-e[y].x,h=e[y+1].y-e[y].y,p.x=h*1,p.y=-m,p.z=h*0,x.copy(p),p.x+=b.x,p.y+=b.y,p.z+=b.z,p.normalize(),l.push(p.x,p.y,p.z),b.copy(x)}for(let y=0;y<=t;y++){const S=n+y*d*r,v=Math.sin(S),E=Math.cos(S);for(let T=0;T<=e.length-1;T++){f.x=e[T].x*v,f.y=e[T].y,f.z=e[T].x*E,o.push(f.x,f.y,f.z),u.x=y/t,u.y=T/(e.length-1),a.push(u.x,u.y);const P=l[3*T+0]*v,_=l[3*T+1],A=l[3*T+0]*E;c.push(P,_,A)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){const v=S+y*e.length,E=v,T=v+e.length,P=v+e.length+1,_=v+1;s.push(E,T,_),s.push(P,_,T)}this.setIndex(s),this.setAttribute("position",new st(o,3)),this.setAttribute("uv",new st(a,2)),this.setAttribute("normal",new st(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.points,e.segments,e.phiStart,e.phiLength)}}class ji extends Et{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,d=l+1,f=e/a,u=t/l,p=[],x=[],b=[],m=[];for(let h=0;h<d;h++){const y=h*u-o;for(let S=0;S<c;S++){const v=S*f-s;x.push(v,-y,0),b.push(0,0,1),m.push(S/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<a;y++){const S=y+c*h,v=y+c*(h+1),E=y+1+c*(h+1),T=y+1+c*h;p.push(S,v,T),p.push(v,E,T)}this.setIndex(p),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(b,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mi extends Et{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new U,u=new U,p=[],x=[],b=[],m=[];for(let h=0;h<=n;h++){const y=[],S=h/n,v=o+S*a,E=e*Math.cos(v),T=Math.sqrt(e*e-E*E);let P=0;h===0&&o===0?P=.5/t:h===n&&l===Math.PI&&(P=-.5/t);for(let _=0;_<=t;_++){const A=_/t,C=r+A*s;f.x=-T*Math.cos(C),f.y=E,f.z=T*Math.sin(C),x.push(f.x,f.y,f.z),u.copy(f).normalize(),b.push(u.x,u.y,u.z),m.push(A+P,1-S),y.push(c++)}d.push(y)}for(let h=0;h<n;h++)for(let y=0;y<t;y++){const S=d[h][y+1],v=d[h][y],E=d[h+1][y],T=d[h+1][y+1];(h!==0||o>0)&&p.push(S,v,T),(h!==n-1||l<Math.PI)&&p.push(v,E,T)}this.setIndex(p),this.setAttribute("position",new st(x,3)),this.setAttribute("normal",new st(b,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xo extends Et{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},n=Math.floor(n),r=Math.floor(r);const l=[],c=[],d=[],f=[],u=new U,p=new U,x=new U;for(let b=0;b<=n;b++){const m=o+b/n*a;for(let h=0;h<=r;h++){const y=h/r*s;p.x=(e+t*Math.cos(m))*Math.cos(y),p.y=(e+t*Math.cos(m))*Math.sin(y),p.z=t*Math.sin(m),c.push(p.x,p.y,p.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),x.subVectors(p,u).normalize(),d.push(x.x,x.y,x.z),f.push(h/r),f.push(b/n)}}for(let b=1;b<=n;b++)for(let m=1;m<=r;m++){const h=(r+1)*b+m-1,y=(r+1)*(b-1)+m-1,S=(r+1)*(b-1)+m,v=(r+1)*b+m;l.push(h,y,v),l.push(y,S,v)}this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class qo extends Et{constructor(e=new J1(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,l=new U,c=new de;let d=new U;const f=[],u=[],p=[],x=[];b(),this.setIndex(x),this.setAttribute("position",new st(f,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(p,2));function b(){for(let S=0;S<t;S++)m(S);m(s===!1?t:0),y(),h()}function m(S){d=e.getPointAt(S/t,d);const v=o.normals[S],E=o.binormals[S];for(let T=0;T<=r;T++){const P=T/r*Math.PI*2,_=Math.sin(P),A=-Math.cos(P);l.x=A*v.x+_*E.x,l.y=A*v.y+_*E.y,l.z=A*v.z+_*E.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=d.x+n*l.x,a.y=d.y+n*l.y,a.z=d.z+n*l.z,f.push(a.x,a.y,a.z)}}function h(){for(let S=1;S<=t;S++)for(let v=1;v<=r;v++){const E=(r+1)*(S-1)+(v-1),T=(r+1)*S+(v-1),P=(r+1)*S+v,_=(r+1)*(S-1)+v;x.push(E,T,_),x.push(T,P,_)}}function y(){for(let S=0;S<=t;S++)for(let v=0;v<=r;v++)c.x=S/t,c.y=v/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new qo(new Gr[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Si(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Ha(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Ha(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function It(i){const e={};for(let t=0;t<i.length;t++){const n=Si(i[t]);for(const r in n)e[r]=n[r]}return e}function Ha(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function R3(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function n2(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const C3={clone:Si,merge:It};var P3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,L3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ht extends Ei{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P3,this.fragmentShader=L3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=R3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new Ge().setHex(r.value);break;case"v2":this.uniforms[n].value=new de().fromArray(r.value);break;case"v3":this.uniforms[n].value=new U().fromArray(r.value);break;case"v4":this.uniforms[n].value=new pt().fromArray(r.value);break;case"m3":this.uniforms[n].value=new We().fromArray(r.value);break;case"m4":this.uniforms[n].value=new at().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class D3 extends Ht{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class i2 extends Ei{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class I3 extends i2{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class U3 extends Ei{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class N3 extends Ei{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class r2 extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class F3 extends r2{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const ys=new at,ka=new U,Wa=new U;class O3{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Bt,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zo,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;ka.setFromMatrixPosition(e.matrixWorld),t.position.copy(ka),Wa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){ys.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(ys,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,o=r?r.z/s.x:1,a=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Yi||e.reversedDepth?t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),t.multiply(ys)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Tr=new U,Ar=new yi,tn=new U;class s2 extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Tr,Ar,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tr,Ar,tn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Tr,Ar,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Tr,Ar,tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new U,Xa=new de,qa=new de;class Yt extends s2{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zi*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,Xa,qa),t.subVectors(qa,Xa)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Wr extends s2{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class B3 extends O3{constructor(){super(new Wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z3 extends r2{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new B3}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const ci=-90,ui=1;class G3 extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yt(ci,ui,e,t);r.layers=this.layers,this.add(r);const s=new Yt(ci,ui,e,t);s.layers=this.layers,this.add(s);const o=new Yt(ci,ui,e,t);o.layers=this.layers,this.add(o);const a=new Yt(ci,ui,e,t);a.layers=this.layers,this.add(a);const l=new Yt(ci,ui,e,t);l.layers=this.layers,this.add(l);const c=new Yt(ci,ui,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===sn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yi)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,p),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class V3 extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ya=new at;class H3{constructor(e,t,n=0,r=1/0){this.ray=new Oo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Fo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ya.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ya),this}intersectObject(e,t=!0,n=[]){return Mo(e,this,n,t),n.sort(Za),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Mo(e[r],this,n,t);return n.sort(Za),n}}function Za(i,e){return i.distance-e.distance}function Mo(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,a=s.length;o<a;o++)Mo(s[o],e,t,!0)}}const Qo=class Qo{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};Qo.prototype.isMatrix2=!0;let Ja=Qo;function Ka(i,e,t,n){const r=k3(n);switch(t){case N1:return i*e;case Ro:return i*e/r.components*r.byteLength;case Co:return i*e/r.components*r.byteLength;case Xn:return i*e*2/r.components*r.byteLength;case Po:return i*e*2/r.components*r.byteLength;case F1:return i*e*3/r.components*r.byteLength;case Kt:return i*e*4/r.components*r.byteLength;case Lo:return i*e*4/r.components*r.byteLength;case Pr:case Lr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Dr:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gs:case Hs:return Math.max(i,16)*Math.max(e,8)/4;case zs:case Vs:return Math.max(i,8)*Math.max(e,8)/2;case ks:case Ws:case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xs:case Nr:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Js:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ks:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case $s:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qs:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case js:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case eo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ro:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case so:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case lo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case co:case uo:case ho:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fo:case po:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Fr:case mo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function k3(i){switch(i){case Bt:case L1:return{byteLength:1,components:1};case Xi:case D1:case cn:return{byteLength:2,components:1};case Ao:case wo:return{byteLength:2,components:4};case ln:case To:case Jt:return{byteLength:4,components:1};case I1:case U1:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bo}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bo);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function o2(){let i=null,e=!1,t=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),t(s,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function W3(i){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){const d=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,d);else{f.sort((p,x)=>p.start-x.start);let u=0;for(let p=1;p<f.length;p++){const x=f[u],b=f[p];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++u,f[u]=b)}f.length=u+1;for(let p=0,x=f.length;p<x;p++){const b=f[p];i.bufferSubData(c,b.start*d.BYTES_PER_ELEMENT,d,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var X3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,q3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Y3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,K3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Q3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,j3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ec=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ic=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,rc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,oc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ac=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cc=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,hc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dc=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,pc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mc=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,_c=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,vc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sc="gl_FragColor = linearToOutputTexel( gl_FragColor );",yc=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Ec=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Tc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ac=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Rc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ic=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Oc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Bc=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kc=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Wc=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xc=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,qc=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yc=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Zc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jc=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kc=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$c=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qc=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jc=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,e0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,t0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,n0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,i0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,o0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,l0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,u0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,p0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,m0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,g0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,v0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,S0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,A0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,P0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,L0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,D0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,U0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,N0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,O0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,B0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,z0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,G0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,H0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,W0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,K0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Q0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,j0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,e4=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,t4=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n4=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i4=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r4=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,s4=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,o4=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a4=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,l4=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c4=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,u4=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h4=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f4=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,d4=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p4=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m4=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,g4=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v4=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,M4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S4=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,y4=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b4=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,E4=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:X3,alphahash_pars_fragment:q3,alphamap_fragment:Y3,alphamap_pars_fragment:Z3,alphatest_fragment:J3,alphatest_pars_fragment:K3,aomap_fragment:$3,aomap_pars_fragment:Q3,batching_pars_vertex:j3,batching_vertex:ec,begin_vertex:tc,beginnormal_vertex:nc,bsdfs:ic,iridescence_fragment:rc,bumpmap_pars_fragment:sc,clipping_planes_fragment:oc,clipping_planes_pars_fragment:ac,clipping_planes_pars_vertex:lc,clipping_planes_vertex:cc,color_fragment:uc,color_pars_fragment:hc,color_pars_vertex:fc,color_vertex:dc,common:pc,cube_uv_reflection_fragment:mc,defaultnormal_vertex:gc,displacementmap_pars_vertex:_c,displacementmap_vertex:xc,emissivemap_fragment:vc,emissivemap_pars_fragment:Mc,colorspace_fragment:Sc,colorspace_pars_fragment:yc,envmap_fragment:bc,envmap_common_pars_fragment:Ec,envmap_pars_fragment:Tc,envmap_pars_vertex:Ac,envmap_physical_pars_fragment:Oc,envmap_vertex:wc,fog_vertex:Rc,fog_pars_vertex:Cc,fog_fragment:Pc,fog_pars_fragment:Lc,gradientmap_pars_fragment:Dc,lightmap_pars_fragment:Ic,lights_lambert_fragment:Uc,lights_lambert_pars_fragment:Nc,lights_pars_begin:Fc,lights_toon_fragment:Bc,lights_toon_pars_fragment:zc,lights_phong_fragment:Gc,lights_phong_pars_fragment:Vc,lights_physical_fragment:Hc,lights_physical_pars_fragment:kc,lights_fragment_begin:Wc,lights_fragment_maps:Xc,lights_fragment_end:qc,lightprobes_pars_fragment:Yc,logdepthbuf_fragment:Zc,logdepthbuf_pars_fragment:Jc,logdepthbuf_pars_vertex:Kc,logdepthbuf_vertex:$c,map_fragment:Qc,map_pars_fragment:jc,map_particle_fragment:e0,map_particle_pars_fragment:t0,metalnessmap_fragment:n0,metalnessmap_pars_fragment:i0,morphinstance_vertex:r0,morphcolor_vertex:s0,morphnormal_vertex:o0,morphtarget_pars_vertex:a0,morphtarget_vertex:l0,normal_fragment_begin:c0,normal_fragment_maps:u0,normal_pars_fragment:h0,normal_pars_vertex:f0,normal_vertex:d0,normalmap_pars_fragment:p0,clearcoat_normal_fragment_begin:m0,clearcoat_normal_fragment_maps:g0,clearcoat_pars_fragment:_0,iridescence_pars_fragment:x0,opaque_fragment:v0,packing:M0,premultiplied_alpha_fragment:S0,project_vertex:y0,dithering_fragment:b0,dithering_pars_fragment:E0,roughnessmap_fragment:T0,roughnessmap_pars_fragment:A0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:R0,shadowmap_vertex:C0,shadowmask_pars_fragment:P0,skinbase_vertex:L0,skinning_pars_vertex:D0,skinning_vertex:I0,skinnormal_vertex:U0,specularmap_fragment:N0,specularmap_pars_fragment:F0,tonemapping_fragment:O0,tonemapping_pars_fragment:B0,transmission_fragment:z0,transmission_pars_fragment:G0,uv_pars_fragment:V0,uv_pars_vertex:H0,uv_vertex:k0,worldpos_vertex:W0,background_vert:X0,background_frag:q0,backgroundCube_vert:Y0,backgroundCube_frag:Z0,cube_vert:J0,cube_frag:K0,depth_vert:$0,depth_frag:Q0,distance_vert:j0,distance_frag:e4,equirect_vert:t4,equirect_frag:n4,linedashed_vert:i4,linedashed_frag:r4,meshbasic_vert:s4,meshbasic_frag:o4,meshlambert_vert:a4,meshlambert_frag:l4,meshmatcap_vert:c4,meshmatcap_frag:u4,meshnormal_vert:h4,meshnormal_frag:f4,meshphong_vert:d4,meshphong_frag:p4,meshphysical_vert:m4,meshphysical_frag:g4,meshtoon_vert:_4,meshtoon_frag:x4,points_vert:v4,points_frag:M4,shadow_vert:S4,shadow_frag:y4,sprite_vert:b4,sprite_frag:E4},ve={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},rn={basic:{uniforms:It([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:It([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:It([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:It([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:It([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:It([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:It([ve.points,ve.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:It([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:It([ve.common,ve.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:It([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:It([ve.sprite,ve.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:It([ve.common,ve.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:It([ve.lights,ve.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};rn.physical={uniforms:It([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const wr={r:0,b:0,g:0},T4=new at,a2=new We;a2.set(-1,0,0,0,1,0,0,0,1);function A4(i,e,t,n,r,s){const o=new Ge(0);let a=r===!0?0:1,l,c,d=null,f=0,u=null;function p(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){const v=y.backgroundBlurriness>0;S=e.get(S,v)}return S}function x(y){let S=!1;const v=p(y);v===null?m(o,a):v&&v.isColor&&(m(v,1),S=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(y,S){const v=p(S);v&&(v.isCubeTexture||v.mapping===Hr)?(c===void 0&&(c=new dt(new Ti(1,1,1),new Ht({name:"BackgroundCubeMaterial",uniforms:Si(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(T4.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(a2),c.material.toneMapped=et.getTransfer(v.colorSpace)!==lt,(d!==v||f!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new dt(new ji(2,2),new Ht({name:"BackgroundMaterial",uniforms:Si(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=et.getTransfer(v.colorSpace)!==lt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,d=v,f=v.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(wr,n2(i)),t.buffers.color.setClear(wr.r,wr.g,wr.b,S,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,S=1){o.set(y),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,m(o,a)},render:x,addToRenderList:b,dispose:h}}function w4(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null);let s=r,o=!1;function a(L,N,O,D,B){let q=!1;const W=f(L,D,O,N);s!==W&&(s=W,c(s.object)),q=p(L,D,O,B),q&&x(L,D,O,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(L,N,O,D),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function d(L){return i.deleteVertexArray(L)}function f(L,N,O,D){const B=D.wireframe===!0;let q=n[N.id];q===void 0&&(q={},n[N.id]=q);const W=L.isInstancedMesh===!0?L.id:0;let ie=q[W];ie===void 0&&(ie={},q[W]=ie);let Y=ie[O.id];Y===void 0&&(Y={},ie[O.id]=Y);let Z=Y[B];return Z===void 0&&(Z=u(l()),Y[B]=Z),Z}function u(L){const N=[],O=[],D=[];for(let B=0;B<t;B++)N[B]=0,O[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:O,attributeDivisors:D,object:L,attributes:{},index:null}}function p(L,N,O,D){const B=s.attributes,q=N.attributes;let W=0;const ie=O.getAttributes();for(const Y in ie)if(ie[Y].location>=0){const Q=B[Y];let Ee=q[Y];if(Ee===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(Ee=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(Ee=L.instanceColor)),Q===void 0||Q.attribute!==Ee||Ee&&Q.data!==Ee.data)return!0;W++}return s.attributesNum!==W||s.index!==D}function x(L,N,O,D){const B={},q=N.attributes;let W=0;const ie=O.getAttributes();for(const Y in ie)if(ie[Y].location>=0){let Q=q[Y];Q===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));const Ee={};Ee.attribute=Q,Q&&Q.data&&(Ee.data=Q.data),B[Y]=Ee,W++}s.attributes=B,s.attributesNum=W,s.index=D}function b(){const L=s.newAttributes;for(let N=0,O=L.length;N<O;N++)L[N]=0}function m(L){h(L,0)}function h(L,N){const O=s.newAttributes,D=s.enabledAttributes,B=s.attributeDivisors;O[L]=1,D[L]===0&&(i.enableVertexAttribArray(L),D[L]=1),B[L]!==N&&(i.vertexAttribDivisor(L,N),B[L]=N)}function y(){const L=s.newAttributes,N=s.enabledAttributes;for(let O=0,D=N.length;O<D;O++)N[O]!==L[O]&&(i.disableVertexAttribArray(O),N[O]=0)}function S(L,N,O,D,B,q,W){W===!0?i.vertexAttribIPointer(L,N,O,B,q):i.vertexAttribPointer(L,N,O,D,B,q)}function v(L,N,O,D){b();const B=D.attributes,q=O.getAttributes(),W=N.defaultAttributeValues;for(const ie in q){const Y=q[ie];if(Y.location>=0){let Z=B[ie];if(Z===void 0&&(ie==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),ie==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){const Q=Z.normalized,Ee=Z.itemSize,ye=e.get(Z);if(ye===void 0)continue;const Ke=ye.buffer,Xe=ye.type,ke=ye.bytesPerElement,K=Xe===i.INT||Xe===i.UNSIGNED_INT||Z.gpuType===To;if(Z.isInterleavedBufferAttribute){const te=Z.data,ge=te.stride,Be=Z.offset;if(te.isInstancedInterleavedBuffer){for(let be=0;be<Y.locationSize;be++)h(Y.location+be,te.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let be=0;be<Y.locationSize;be++)m(Y.location+be);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let be=0;be<Y.locationSize;be++)S(Y.location+be,Ee/Y.locationSize,Xe,Q,ge*ke,(Be+Ee/Y.locationSize*be)*ke,K)}else{if(Z.isInstancedBufferAttribute){for(let te=0;te<Y.locationSize;te++)h(Y.location+te,Z.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let te=0;te<Y.locationSize;te++)m(Y.location+te);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let te=0;te<Y.locationSize;te++)S(Y.location+te,Ee/Y.locationSize,Xe,Q,Ee*ke,Ee/Y.locationSize*te*ke,K)}}else if(W!==void 0){const Q=W[ie];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(Y.location,Q);break;case 3:i.vertexAttrib3fv(Y.location,Q);break;case 4:i.vertexAttrib4fv(Y.location,Q);break;default:i.vertexAttrib1fv(Y.location,Q)}}}}y()}function E(){A();for(const L in n){const N=n[L];for(const O in N){const D=N[O];for(const B in D){const q=D[B];for(const W in q)d(q[W].object),delete q[W];delete D[B]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;const N=n[L.id];for(const O in N){const D=N[O];for(const B in D){const q=D[B];for(const W in q)d(q[W].object),delete q[W];delete D[B]}}delete n[L.id]}function P(L){for(const N in n){const O=n[N];for(const D in O){const B=O[D];if(B[L.id]===void 0)continue;const q=B[L.id];for(const W in q)d(q[W].object),delete q[W];delete B[L.id]}}}function _(L){for(const N in n){const O=n[N],D=L.isInstancedMesh===!0?L.id:0,B=O[D];if(B!==void 0){for(const q in B){const W=B[q];for(const ie in W)d(W[ie].object),delete W[ie];delete B[q]}delete O[D],Object.keys(O).length===0&&delete n[N]}}}function A(){C(),o=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:m,disableUnusedAttributes:y}}function R4(i,e,t){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function a(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let u=0;for(let p=0;p<d;p++)u+=c[p];t.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function C4(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Kt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const _=P===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Bt&&P!==Jt&&!_&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(ze("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,maxSamples:E,samples:T}}function P4(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Cn,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||n!==0||r;return r=u,n=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,p){const x=f.clippingPlanes,b=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!r||x===null||x.length===0||s&&!m)s?d(null):c();else{const y=s?0:n,S=y*4;let v=h.clippingState||null;l.value=v,v=d(x,u,S,p);for(let E=0;E!==S;++E)v[E]=t[E];h.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,u,p,x){const b=f!==null?f.length:0;let m=null;if(b!==0){if(m=l.value,x!==!0||m===null){const h=p+b*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,v=p;S!==b;++S,v+=4)o.copy(f[S]).applyMatrix4(y,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}const mi=4,L4=6,D4=20,I4=256,Ii=new Wr,$a=new Ge;let bs=null,Es=0,Ts=0,As=!1;const U4=new U,On=new U;class Qa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:a=U4}=s;bs=this._renderer.getRenderTarget(),Es=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=t1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=e1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(bs,Es,Ts),this._renderer.xr.enabled=As,e.scissorTest=!1,hi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wn||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bs=this._renderer.getRenderTarget(),Es=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),As=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:cn,format:Kt,colorSpace:Or,depthBuffer:!1},r=ja(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ja(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=N4(s)),this._blurMaterial=O4(s,e,t),this._ggxMaterial=F4(s,e,t)}return r}_compileMaterial(e){const t=new dt(new Et,e);this._renderer.compile(t,Ii)}_sceneToCubeUV(e,t,n,r,s){const l=new Yt(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor($a),f.toneMapping=on,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dt(new Ti,new Bo({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,m=b.material;let h=!1;const y=e.background;y?y.isColor&&(m.color.copy(y),e.background=null,h=!0):(m.color.copy($a),h=!0);for(let S=0;S<6;S++){const v=S%3;v===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[S],s.y,s.z)):v===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[S]));const E=this._cubeSize;hi(r,v*E,S>2?E:0,E,E),f.setRenderTarget(r),h&&f.render(b,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Wn||e.mapping===xi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=t1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=e1());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ii)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;const l=o.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=c*1.25,p=f*u,{_lodMax:x}=this,b=this._sizeLods[n],m=3*b*(n>x-mi?n-x+mi:0),h=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,hi(s,m,h,3*b,2*b),r.setRenderTarget(s),r.render(a,Ii),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,hi(e,m,h,3*b,2*b),r.setRenderTarget(e),r.render(a,Ii)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,o),this._blurPass(s,e,n,n,o)}_blurPass(e,t,n,r,s){const o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;const c=a.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;const d=this._sizeLods[r],f=3*d*(r>this._lodMax-mi?r-this._lodMax+mi:0),u=4*(this._cubeSize-d);hi(t,f,u,3*d,2*d),o.setRenderTarget(t),o.render(l,Ii)}}function N4(i){const e=[],t=[];let n=i;const r=i-mi+1+L4;for(let s=0;s<r;s++){const o=Math.pow(2,n);e.push(o);const a=1/(o-2),l=-a,c=1+a,d=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,u=6,p=3,x=new Float32Array(p*u*f),b=new Float32Array(p*u*f);for(let h=0;h<f;h++){const y=h%3*2/3-1,S=h>2?0:-1,v=[y,S,0,y+2/3,S,0,y+2/3,S+1,0,y,S,0,y+2/3,S+1,0,y,S+1,0];x.set(v,p*u*h);for(let E=0;E<u;E++){const T=d[E*2]*2-1,P=d[E*2+1]*2-1;h===0?On.set(1,P,T):h===1?On.set(-T,1,-P):h===2?On.set(-T,P,1):h===3?On.set(-1,P,-T):h===4?On.set(-T,-1,P):On.set(T,P,-1),On.toArray(b,(h*u+E)*p)}}const m=new Et;m.setAttribute("position",new an(x,p)),m.setAttribute("outputDirection",new an(b,p)),t.push(new dt(m,null)),n>mi&&n--}return{lodMeshes:t,sizeLods:e}}function ja(i,e,t){const n=new $t(i,e,t);return n.texture.mapping=Hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function F4(i,e,t){return new Ht({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I4,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function O4(i,e,t){return new Ht({name:"SphericalGaussianBlur",defines:{SAMPLES:D4,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Xr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function e1(){return new Ht({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function t1(){return new Ht({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Xr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class l2 extends $t{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new k1(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ti(5,5,5),s=new Ht({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:xn});s.uniforms.tEquirect.value=t;const o=new dt(r,s),a=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Ct),new G3(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}function B4(i){let e=new WeakMap,t=new WeakMap,n=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===Jr||p===Kr)if(e.has(u)){const x=e.get(u).texture;return a(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const b=new l2(x.height);return b.fromEquirectangularTexture(i,u),e.set(u,b),u.addEventListener("dispose",c),a(b.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,x=p===Jr||p===Kr,b=p===Wn||p===xi;if(x||b){let m=t.get(u);const h=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return n===null&&(n=new Qa(i)),m=x?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{const y=u.image;return x&&y&&y.height>0||b&&y&&l(y)?(n===null&&(n=new Qa(i)),m=x?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",d),m.texture):null}}}return u}function a(u,p){return p===Jr?u.mapping=Wn:p===Kr&&(u.mapping=xi),u}function l(u){let p=0;const x=6;for(let b=0;b<x;b++)u[b]!==void 0&&p++;return p===x}function c(u){const p=u.target;p.removeEventListener("dispose",c);const x=e.get(p);x!==void 0&&(e.delete(p),x.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const x=t.get(p);x!==void 0&&(t.delete(p),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function z4(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&gi("WebGLRenderer: "+n+" extension not supported."),r}}}function G4(i,e,t,n){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],i.ARRAY_BUFFER)}function c(f){const u=[],p=f.index,x=f.attributes.position;let b=0;if(x===void 0)return;if(p!==null){const y=p.array;b=p.version;for(let S=0,v=y.length;S<v;S+=3){const E=y[S+0],T=y[S+1],P=y[S+2];u.push(E,T,T,P,P,E)}}else{const y=x.array;b=x.version;for(let S=0,v=y.length/3-1;S<v;S+=3){const E=S+0,T=S+1,P=S+2;u.push(E,T,T,P,P,E)}}const m=new(x.count>=65535?V1:G1)(u,1);m.version=b;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function d(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function V4(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,u){i.drawElements(n,u,s,f*o),t.update(u,n,1)}function c(f,u,p){p!==0&&(i.drawElementsInstanced(n,u,s,f*o,p),t.update(u,n,p))}function d(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,f,0,p);let b=0;for(let m=0;m<p;m++)b+=u[m];t.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function H4(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function k4(i,e,t){const n=new WeakMap,r=new pt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let u=n.get(a);if(u===void 0||u.count!==f){let A=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const p=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),x===!0&&(S=2),b===!0&&(S=3);let v=a.attributes.position.count*S,E=1;v>e.maxTextureSize&&(E=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const T=new Float32Array(v*E*4*f),P=new B1(T,v,E,f);P.type=Jt,P.needsUpdate=!0;const _=S*4;for(let C=0;C<f;C++){const L=m[C],N=h[C],O=y[C],D=v*E*4*C;for(let B=0;B<L.count;B++){const q=B*_;p===!0&&(r.fromBufferAttribute(L,B),T[D+q+0]=r.x,T[D+q+1]=r.y,T[D+q+2]=r.z,T[D+q+3]=0),x===!0&&(r.fromBufferAttribute(N,B),T[D+q+4]=r.x,T[D+q+5]=r.y,T[D+q+6]=r.z,T[D+q+7]=0),b===!0&&(r.fromBufferAttribute(O,B),T[D+q+8]=r.x,T[D+q+9]=r.y,T[D+q+10]=r.z,T[D+q+11]=O.itemSize===4?r.w:1)}}u={count:f,texture:P,size:new de(v,E)},n.set(a,u),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let b=0;b<c.length;b++)p+=c[b];const x=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function W4(i,e,t,n,r){let s=new WeakMap;function o(c){const d=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function a(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}const X4={[E1]:"LINEAR_TONE_MAPPING",[T1]:"REINHARD_TONE_MAPPING",[A1]:"CINEON_TONE_MAPPING",[w1]:"ACES_FILMIC_TONE_MAPPING",[C1]:"AGX_TONE_MAPPING",[Eo]:"NEUTRAL_TONE_MAPPING",[R1]:"CUSTOM_TONE_MAPPING"};function q4(i,e,t,n,r,s){const o=new $t(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let a=null,l=null;const c=new Et;c.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new st([0,2,0,0,2,0],2));const d=new D3({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new dt(c,d),u=new Wr(-1,1,1,-1,0,1);let p=null,x=null,b=!1,m,h=null,y=[],S=!1;this.setSize=function(v,E){o.setSize(v,E),a!==null&&a.setSize(v,E),l!==null&&l.setSize(v,E);for(let T=0;T<y.length;T++){const P=y[T];P.setSize&&P.setSize(v,E)}},this.setEffects=function(v){y=v,S=y.length>0&&y[0].isRenderPass===!0;const E=o.width,T=o.height;y.length>0&&a===null&&(a=new $t(E,T,{type:cn,depthBuffer:!1,stencilBuffer:!1}),l=new $t(E,T,{type:cn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<y.length;P++){const _=y[P];_.setSize&&_.setSize(E,T)}},this.begin=function(v,E){if(b||v.toneMapping===on&&y.length===0)return!1;if(h=E,E!==null){const T=E.width,P=E.height;(o.width!==T||o.height!==P)&&this.setSize(T,P)}return S===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=on,!0},this.hasRenderPass=function(){return S},this.end=function(v,E){v.toneMapping=m,b=!0;let T=o,P=a;for(let _=0;_<y.length;_++){const A=y[_];A.enabled!==!1&&(A.render(v,P,T,E),A.needsSwap!==!1&&(T=P,P=P===a?l:a))}if(p!==v.outputColorSpace||x!==v.toneMapping){p=v.outputColorSpace,x=v.toneMapping,d.defines={},et.getTransfer(p)===lt&&(d.defines.SRGB_TRANSFER="");const _=X4[x];_&&(d.defines[_]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(h),v.render(f,u),h=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}const c2=new Pt,So=new Ji(1,1),u2=new B1,h2=new Rl,f2=new k1,n1=[],i1=[],r1=new Float32Array(16),s1=new Float32Array(9),o1=new Float32Array(4);function Ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=n1[r];if(s===void 0&&(s=new Float32Array(r),n1[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qr(i,e){let t=i1[e];t===void 0&&(t=new Int32Array(e),i1[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Y4(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Z4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function J4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function K4(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function $4(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;o1.set(n),i.uniformMatrix2fv(this.addr,!1,o1),Mt(t,n)}}function Q4(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;s1.set(n),i.uniformMatrix3fv(this.addr,!1,s1),Mt(t,n)}}function j4(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;r1.set(n),i.uniformMatrix4fv(this.addr,!1,r1),Mt(t,n)}}function eu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function tu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function nu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function iu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function ru(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function su(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function ou(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function au(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function lu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(So.compareFunction=t.isReversedDepthBuffer()?Io:Do,s=So):s=c2,t.setTexture2D(e||s,r)}function cu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||h2,r)}function uu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||f2,r)}function hu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||u2,r)}function fu(i){switch(i){case 5126:return Y4;case 35664:return Z4;case 35665:return J4;case 35666:return K4;case 35674:return $4;case 35675:return Q4;case 35676:return j4;case 5124:case 35670:return eu;case 35667:case 35671:return tu;case 35668:case 35672:return nu;case 35669:case 35673:return iu;case 5125:return ru;case 36294:return su;case 36295:return ou;case 36296:return au;case 35678:case 36198:case 36298:case 36306:case 35682:return lu;case 35679:case 36299:case 36307:return cu;case 35680:case 36300:case 36308:case 36293:return uu;case 36289:case 36303:case 36311:case 36292:return hu}}function du(i,e){i.uniform1fv(this.addr,e)}function pu(i,e){const t=Ai(e,this.size,2);i.uniform2fv(this.addr,t)}function mu(i,e){const t=Ai(e,this.size,3);i.uniform3fv(this.addr,t)}function gu(i,e){const t=Ai(e,this.size,4);i.uniform4fv(this.addr,t)}function _u(i,e){const t=Ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function xu(i,e){const t=Ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vu(i,e){const t=Ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Mu(i,e){i.uniform1iv(this.addr,e)}function Su(i,e){i.uniform2iv(this.addr,e)}function yu(i,e){i.uniform3iv(this.addr,e)}function bu(i,e){i.uniform4iv(this.addr,e)}function Eu(i,e){i.uniform1uiv(this.addr,e)}function Tu(i,e){i.uniform2uiv(this.addr,e)}function Au(i,e){i.uniform3uiv(this.addr,e)}function wu(i,e){i.uniform4uiv(this.addr,e)}function Ru(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=So:o=c2;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function Cu(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||h2,s[o])}function Pu(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||f2,s[o])}function Lu(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||u2,s[o])}function Du(i){switch(i){case 5126:return du;case 35664:return pu;case 35665:return mu;case 35666:return gu;case 35674:return _u;case 35675:return xu;case 35676:return vu;case 5124:case 35670:return Mu;case 35667:case 35671:return Su;case 35668:case 35672:return yu;case 35669:case 35673:return bu;case 5125:return Eu;case 36294:return Tu;case 36295:return Au;case 36296:return wu;case 35678:case 36198:case 36298:case 36306:case 35682:return Ru;case 35679:case 36299:case 36307:return Cu;case 35680:case 36300:case 36308:case 36293:return Pu;case 36289:case 36303:case 36311:case 36292:return Lu}}class Iu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fu(t.type)}}class Uu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Du(t.type)}}class Nu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const ws=/(\w+)(\])?(\[|\.)?/g;function a1(i,e){i.seq.push(e),i.map[e.id]=e}function Fu(i,e,t){const n=i.name,r=n.length;for(ws.lastIndex=0;;){const s=ws.exec(n),o=ws.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){a1(t,c===void 0?new Iu(a,i,e):new Uu(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Nu(a),a1(t,f)),t=f}}}class Ur{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Fu(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function l1(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Ou=37297;let Bu=0;function zu(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const c1=new We;function Gu(i){et._getMatrix(c1,et.workingColorSpace,i);const e=`mat3( ${c1.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Br:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function u1(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+zu(i.getShaderSource(e),a)}else return s}function Vu(i,e){const t=Gu(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Hu={[E1]:"Linear",[T1]:"Reinhard",[A1]:"Cineon",[w1]:"ACESFilmic",[C1]:"AgX",[Eo]:"Neutral",[R1]:"Custom"};function ku(i,e){const t=Hu[e];return t===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Rr=new U;function Wu(){et.getLuminanceCoefficients(Rr);const i=Rr.x.toFixed(4),e=Rr.y.toFixed(4),t=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xu(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}function qu(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Yu(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Bi(i){return i!==""}function h1(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f1(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zu=/^[ \t]*#include +<([\w\d./]+)>/gm;function yo(i){return i.replace(Zu,Ku)}const Ju=new Map;function Ku(i,e){let t=Ze[e];if(t===void 0){const n=Ju.get(e);if(n!==void 0)t=Ze[n],ze('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return yo(t)}const $u=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function d1(i){return i.replace($u,Qu)}function Qu(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function p1(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ju={[Cr]:"SHADOWMAP_TYPE_PCF",[Fi]:"SHADOWMAP_TYPE_VSM"};function e5(i){return ju[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const t5={[Wn]:"ENVMAP_TYPE_CUBE",[xi]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE_UV"};function n5(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":t5[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const i5={[xi]:"ENVMAP_MODE_REFRACTION"};function r5(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":i5[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const s5={[b1]:"ENVMAP_BLENDING_MULTIPLY",[k2]:"ENVMAP_BLENDING_MIX",[W2]:"ENVMAP_BLENDING_ADD"};function o5(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":s5[i.combine]||"ENVMAP_BLENDING_NONE"}function a5(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function l5(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=e5(t),c=n5(t),d=r5(t),f=o5(t),u=a5(t),p=Xu(t),x=qu(s),b=r.createProgram();let m,h,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Bi).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Bi).join(`
`),h.length>0&&(h+=`
`)):(m=[p1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),h=[p1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==on?"#define TONE_MAPPING":"",t.toneMapping!==on?Ze.tonemapping_pars_fragment:"",t.toneMapping!==on?ku("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,Vu("linearToOutputTexel",t.outputColorSpace),Wu(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bi).join(`
`)),o=yo(o),o=h1(o,t),o=f1(o,t),a=yo(a),a=h1(a,t),a=f1(a,t),o=d1(o),a=d1(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=y+m+o,v=y+h+a,E=l1(r,r.VERTEX_SHADER,S),T=l1(r,r.FRAGMENT_SHADER,v);r.attachShader(b,E),r.attachShader(b,T),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function P(L){if(i.debug.checkShaderErrors){const N=r.getProgramInfoLog(b)||"",O=r.getShaderInfoLog(E)||"",D=r.getShaderInfoLog(T)||"",B=N.trim(),q=O.trim(),W=D.trim();let ie=!0,Y=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(ie=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,E,T);else{const Z=u1(r,E,"vertex"),Q=u1(r,T,"fragment");nt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+Z+`
`+Q)}else B!==""?ze("WebGLProgram: Program Info Log:",B):(q===""||W==="")&&(Y=!1);Y&&(L.diagnostics={runnable:ie,programLog:B,vertexShader:{log:q,prefix:m},fragmentShader:{log:W,prefix:h}})}r.deleteShader(E),r.deleteShader(T),_=new Ur(r,b),A=Yu(r,b)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let A;this.getAttributes=function(){return A===void 0&&P(this),A};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(b,Ou)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bu++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=E,this.fragmentShader=T,this}let c5=0;class u5{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new h5(e),t.set(e,n)),n}}class h5{constructor(e){this.id=c5++,this.code=e,this.usedTimes=0}}function f5(i){return i===Xn||i===Nr||i===Fr}function d5(i,e,t,n,r,s){const o=new Fo,a=new u5,l=new Set,c=[],d=new Map,f=n.logarithmicDepthBuffer;let u=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,A,C,L,N,O){const D=L.fog,B=N.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ie=e.get(_.envMap||q,W),Y=ie&&ie.mapping===Hr?ie.image.height:null,Z=p[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&ze("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));const Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Ee=Q!==void 0?Q.length:0;let ye=0;B.morphAttributes.position!==void 0&&(ye=1),B.morphAttributes.normal!==void 0&&(ye=2),B.morphAttributes.color!==void 0&&(ye=3);let Ke,Xe,ke,K;if(Z){const it=rn[Z];Ke=it.vertexShader,Xe=it.fragmentShader}else{Ke=_.vertexShader,Xe=_.fragmentShader;const it=a.getVertexShaderStage(_),tt=a.getFragmentShaderStage(_);a.update(_,it,tt),ke=it.id,K=tt.id}const te=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Be=N.isInstancedMesh===!0,be=N.isBatchedMesh===!0,Ie=!!_.map,Qe=!!_.matcap,ne=!!ie,se=!!_.aoMap,ae=!!_.lightMap,le=!!_.bumpMap&&_.wireframe===!1,fe=!!_.normalMap,Ne=!!_.displacementMap,Ue=!!_.emissiveMap,Fe=!!_.metalnessMap,Ve=!!_.roughnessMap,I=_.anisotropy>0,je=_.clearcoat>0,qe=_.dispersion>0,w=_.retroreflectivity>0,g=_.iridescence>0,z=_.sheen>0,H=_.transmission>0,J=I&&!!_.anisotropyMap,ce=je&&!!_.clearcoatMap,he=je&&!!_.clearcoatNormalMap,$=je&&!!_.clearcoatRoughnessMap,j=g&&!!_.iridescenceMap,pe=g&&!!_.iridescenceThicknessMap,Pe=z&&!!_.sheenColorMap,_e=z&&!!_.sheenRoughnessMap,me=!!_.specularMap,Le=!!_.specularColorMap,Oe=!!_.specularIntensityMap,He=H&&!!_.transmissionMap,R=H&&!!_.thicknessMap,re=!!_.gradientMap,k=!!_.alphaMap,oe=_.alphaTest>0,ue=!!_.alphaHash,ee=!!_.extensions;let Te=on;_.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Te=i.toneMapping);const xe={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:Ke,fragmentShader:Xe,defines:_.defines,customVertexShaderID:ke,customFragmentShaderID:K,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:be,batchingColor:be&&N._colorsTexture!==null,instancing:Be,instancingColor:Be&&N.instanceColor!==null,instancingMorph:Be&&N.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Ie,matcap:Qe,envMap:ne,envMapMode:ne&&ie.mapping,envMapCubeUVHeight:Y,aoMap:se,lightMap:ae,bumpMap:le,normalMap:fe,displacementMap:Ne,emissiveMap:Ue,normalMapObjectSpace:fe&&_.normalMapType===Y2,normalMapTangentSpace:fe&&_.normalMapType===go,packedNormalMap:fe&&_.normalMapType===go&&f5(_.normalMap.format),metalnessMap:Fe,roughnessMap:Ve,anisotropy:I,anisotropyMap:J,clearcoat:je,clearcoatMap:ce,clearcoatNormalMap:he,clearcoatRoughnessMap:$,dispersion:qe,retroreflection:w,iridescence:g,iridescenceMap:j,iridescenceThicknessMap:pe,sheen:z,sheenColorMap:Pe,sheenRoughnessMap:_e,specularMap:me,specularColorMap:Le,specularIntensityMap:Oe,transmission:H,transmissionMap:He,thicknessMap:R,gradientMap:re,opaque:_.transparent===!1&&_.blending===zi&&_.alphaToCoverage===!1,alphaMap:k,alphaTest:oe,alphaHash:ue,combine:_.combine,mapUv:Ie&&x(_.map.channel),aoMapUv:se&&x(_.aoMap.channel),lightMapUv:ae&&x(_.lightMap.channel),bumpMapUv:le&&x(_.bumpMap.channel),normalMapUv:fe&&x(_.normalMap.channel),displacementMapUv:Ne&&x(_.displacementMap.channel),emissiveMapUv:Ue&&x(_.emissiveMap.channel),metalnessMapUv:Fe&&x(_.metalnessMap.channel),roughnessMapUv:Ve&&x(_.roughnessMap.channel),anisotropyMapUv:J&&x(_.anisotropyMap.channel),clearcoatMapUv:ce&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(_.sheenRoughnessMap.channel),specularMapUv:me&&x(_.specularMap.channel),specularColorMapUv:Le&&x(_.specularColorMap.channel),specularIntensityMapUv:Oe&&x(_.specularIntensityMap.channel),transmissionMapUv:He&&x(_.transmissionMap.channel),thicknessMapUv:R&&x(_.thicknessMap.channel),alphaMapUv:k&&x(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(fe||I),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Ie||k),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&fe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ge,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ye,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:Ie&&_.map.isVideoTexture===!0&&et.getTransfer(_.map.colorSpace)===lt,decodeVideoTextureEmissive:Ue&&_.emissiveMap.isVideoTexture===!0&&et.getTransfer(_.emissiveMap.colorSpace)===lt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===mn,flipSided:_.side===Ut,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ee&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&_.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return xe.vertexUv1s=l.has(1),xe.vertexUv2s=l.has(2),xe.vertexUv3s=l.has(3),l.clear(),xe}function m(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)A.push(C),A.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(h(A,_),y(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function h(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function y(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function S(_){const A=p[_.type];let C;if(A){const L=rn[A];C=C3.clone(L.uniforms)}else C=_.uniforms;return C}function v(_,A){let C=d.get(A);return C!==void 0?++C.usedTimes:(C=new l5(i,A,_,r),c.push(C),d.set(A,C)),C}function E(_){if(--_.usedTimes===0){const A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function P(){a.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:S,acquireProgram:v,releaseProgram:E,releaseShaderCache:T,programs:c,dispose:P}}function p5(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function m5(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function m1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function g1(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,x,b,m,h){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:p,material:x,materialVariant:o(u),groupOrder:b,renderOrder:u.renderOrder,z:m,group:h},i[e]=y):(y.id=u.id,y.object=u,y.geometry=p,y.material=x,y.materialVariant=o(u),y.groupOrder=b,y.renderOrder=u.renderOrder,y.z=m,y.group=h),e++,y}function l(u,p,x,b,m,h,y){y.reversedDepth===!0&&(m=-m);const S=a(u,p,x,b,m,h);x.transmission>0?n.push(S):x.transparent===!0?r.push(S):t.push(S)}function c(u,p,x,b,m,h){const y=a(u,p,x,b,m,h);x.transmission>0?n.unshift(y):x.transparent===!0?r.unshift(y):t.unshift(y)}function d(u,p){t.length>1&&t.sort(u||m5),n.length>1&&n.sort(p||m1),r.length>1&&r.sort(p||m1)}function f(){for(let u=e,p=i.length;u<p;u++){const x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:f,sort:d}}function g5(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new g1,i.set(n,[o])):r>=s.length?(o=new g1,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function _5(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Ge};break;case"SpotLight":t={position:new U,direction:new U,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function x5(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let v5=0;function M5(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function S5(i){const e=new _5,t=x5(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const r=new U,s=new at,o=new at;function a(c){let d=0,f=0,u=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,x=0,b=0,m=0,h=0,y=0,S=0,v=0,E=0,T=0,P=0,_=0,A=0,C=0;c.sort(M5);for(let N=0,O=c.length;N<O;N++){const D=c[N],B=D.color,q=D.intensity,W=D.distance;let ie=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Xn?ie=D.shadow.map.texture:ie=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)d+=B.r*q,f+=B.g*q,u+=B.b*q;else if(D.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(D.sh.coefficients[Y],q);C++}else if(D.isSunLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,Q=t.get(D);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),n.sunShadow[x]=Q,n.sunShadowMap[x]=ie;const Ee=Z.getViewportCount();for(let ye=0;ye<Ee;ye++)n.sunShadowMatrix[b+ye]=Z.getMatrix(ye),n.sunShadowCascade[b+ye]=Z._cascadeData[ye];b+=Ee,x++}n.sun[p]=Y,p++}else if(D.isDirectionalLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Z=D.shadow,Q=t.get(D);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=ie,n.directionalShadowMatrix[m]=D.shadow.matrix,E++}n.directional[m]=Y,m++}else if(D.isSpotLight){const Y=e.get(D);Y.position.setFromMatrixPosition(D.matrixWorld),Y.color.copy(B).multiplyScalar(q),Y.distance=W,Y.coneCos=Math.cos(D.angle),Y.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Y.decay=D.decay,n.spot[y]=Y;const Z=D.shadow;if(D.map&&(n.spotLightMap[_]=D.map,_++,Z.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[y]=Z.matrix,D.castShadow){const Q=t.get(D);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,n.spotShadow[y]=Q,n.spotShadowMap[y]=ie,P++}y++}else if(D.isRectAreaLight){const Y=e.get(D);Y.color.copy(B).multiplyScalar(q),Y.halfWidth.set(D.width*.5,0,0),Y.halfHeight.set(0,D.height*.5,0),n.rectArea[S]=Y,S++}else if(D.isPointLight){const Y=e.get(D);if(Y.color.copy(D.color).multiplyScalar(D.intensity),Y.distance=D.distance,Y.decay=D.decay,D.castShadow){const Z=D.shadow,Q=t.get(D);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,Q.shadowCameraNear=Z.camera.near,Q.shadowCameraFar=Z.camera.far,n.pointShadow[h]=Q,n.pointShadowMap[h]=ie,n.pointShadowMatrix[h]=D.shadow.matrix,T++}n.point[h]=Y,h++}else if(D.isHemisphereLight){const Y=e.get(D);Y.skyColor.copy(D.color).multiplyScalar(q),Y.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[v]=Y,v++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=u;const L=n.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==h||L.spotLength!==y||L.rectAreaLength!==S||L.hemiLength!==v||L.numSunShadows!==x||L.numDirectionalShadows!==E||L.numPointShadows!==T||L.numSpotShadows!==P||L.numSpotMaps!==_||L.numLightProbes!==C)&&(n.sun.length=p,n.directional.length=m,n.spot.length=y,n.rectArea.length=S,n.point.length=h,n.hemi.length=v,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,L.sunLength=p,L.directionalLength=m,L.pointLength=h,L.spotLength=y,L.rectAreaLength=S,L.hemiLength=v,L.numSunShadows=x,L.numDirectionalShadows=E,L.numPointShadows=T,L.numSpotShadows=P,L.numSpotMaps=_,L.numLightProbes=C,n.version=v5++)}function l(c,d){let f=0,u=0,p=0,x=0,b=0,m=0;const h=d.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){const v=c[y];if(v.isSunLight){const E=n.sun[f];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(h),f++}else if(v.isDirectionalLight){const E=n.directional[u];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(h),u++}else if(v.isSpotLight){const E=n.spot[x];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(h),x++}else if(v.isRectAreaLight){const E=n.rectArea[b];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(h),o.identity(),s.copy(v.matrixWorld),s.premultiply(h),o.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),b++}else if(v.isPointLight){const E=n.point[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(h),p++}else if(v.isHemisphereLight){const E=n.hemi[m];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:a,setupView:l,state:n}}function _1(i){const e=new S5(i),t=[],n=[],r=[];function s(u){f.camera=u,t.length=0,n.length=0,r.length=0}function o(u){t.push(u)}function a(u){n.push(u)}function l(u){r.push(u)}function c(){e.setup(t)}function d(u){e.setupView(t,u)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:d,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function y5(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new _1(i),e.set(r,[a])):s>=o.length?(a=new _1(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const b5=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E5=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,T5=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],A5=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],x1=new at,Ui=new U,Rs=new U;function w5(i,e,t){let n=new zo;const r=new de,s=new de,o=new pt,a=new U3,l=new N3,c={},d=t.maxTextureSize,f={[kn]:Ut,[Ut]:kn,[mn]:mn},u=new Ht({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:b5,fragmentShader:E5}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const x=new Et;x.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new dt(x,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cr;let h=this.type;this.render=function(T,P,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===E2&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cr);const A=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),N=i.state;N.setBlending(xn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=h!==this.type;O&&P.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(B=>B.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,B=T.length;D<B;D++){const q=T[D],W=q.shadow;if(W===void 0){ze("WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const ie=W.getFrameExtents();r.multiply(ie),s.copy(W.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ie.x),r.x=s.x*ie.x,W.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ie.y),r.y=s.y*ie.y,W.mapSize.y=s.y));const Y=i.state.buffers.depth.getReversed();if(W.camera._reversedDepth=Y,W.map===null||O===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Fi){if(q.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new $t(r.x,r.y,{format:Xn,type:cn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),W.map.texture.name=q.name+".shadowMap",W.map.depthTexture=new Ji(r.x,r.y,Jt),W.map.depthTexture.name=q.name+".shadowMapDepth",W.map.depthTexture.format=Mn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Tt,W.map.depthTexture.magFilter=Tt}else q.isPointLight?(W.map=new l2(r.x),W.map.depthTexture=new Kl(r.x,ln)):(W.map=new $t(r.x,r.y),W.map.depthTexture=new Ji(r.x,r.y,ln)),W.map.depthTexture.name=q.name+".shadowMap",W.map.depthTexture.format=Mn,this.type===Cr?(W.map.depthTexture.compareFunction=Y?Io:Do,W.map.depthTexture.minFilter=Ct,W.map.depthTexture.magFilter=Ct):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Tt,W.map.depthTexture.magFilter=Tt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==r.x||W.map.height!==r.y)&&W.map.setSize(r.x,r.y);const Z=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();q.isPointLight!==!0&&W.updateMatrices(q,_);for(let Q=0;Q<Z;Q++){const Ee=W.getCamera(Q);if(q.isPointLight){const ye=W.camera,Ke=W.matrix,Xe=q.distance||ye.far;Xe!==ye.far&&(ye.far=Xe,ye.updateProjectionMatrix()),Ui.setFromMatrixPosition(q.matrixWorld),ye.position.copy(Ui),Rs.copy(ye.position),Rs.add(T5[Q]),ye.up.copy(A5[Q]),ye.lookAt(Rs),ye.updateMatrixWorld(),Ke.makeTranslation(-Ui.x,-Ui.y,-Ui.z),x1.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),W._frustum.setFromProjectionMatrix(x1,ye.coordinateSystem,ye.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)i.setRenderTarget(W.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(W.map),i.clear());const ye=W.getViewport(Q);o.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),N.viewport(o)}n=W.getFrustum(Q),v(P,_,Ee,q,this.type)}W.isPointLightShadow!==!0&&this.type===Fi&&y(W,_),W.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(A,C,L)};function y(T,P){const _=e.update(b);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new $t(r.x,r.y,{format:Xn,type:cn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,_,u,b,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,_,p,b,null)}function S(T,P,_,A){let C=null;const L=_.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=_.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const N=C.uuid,O=P.uuid;let D=c[N];D===void 0&&(D={},c[N]=D);let B=D[O];B===void 0&&(B=C.clone(),D[O]=B,P.addEventListener("dispose",E)),C=B}if(C.visible=P.visible,C.wireframe=P.wireframe,A===Fi?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:f[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const N=i.properties.get(C);N.light=_}return C}function v(T,P,_,A,C){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Fi)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,T.matrixWorld);const O=e.update(T),D=T.material;if(Array.isArray(D)){const B=O.groups;for(let q=0,W=B.length;q<W;q++){const ie=B[q],Y=D[ie.materialIndex];if(Y&&Y.visible){const Z=S(T,Y,A,C);T.onBeforeShadow(i,T,P,_,O,Z,ie),i.renderBufferDirect(_,null,O,Z,T,ie),T.onAfterShadow(i,T,P,_,O,Z,ie)}}}else if(D.visible){const B=S(T,D,A,C);T.onBeforeShadow(i,T,P,_,O,B,null),i.renderBufferDirect(_,null,O,B,T,null),T.onAfterShadow(i,T,P,_,O,B,null)}}const N=T.children;for(let O=0,D=N.length;O<D;O++)v(N[O],P,_,A,C)}function E(T){T.target.removeEventListener("dispose",E);for(const _ in c){const A=c[_],C=T.target.uuid;C in A&&(A[C].dispose(),delete A[C])}}}function R5(i,e){function t(){let R=!1;const re=new pt;let k=null;const oe=new pt(0,0,0,0);return{setMask:function(ue){k!==ue&&!R&&(i.colorMask(ue,ue,ue,ue),k=ue)},setLocked:function(ue){R=ue},setClear:function(ue,ee,Te,xe,it){it===!0&&(ue*=xe,ee*=xe,Te*=xe),re.set(ue,ee,Te,xe),oe.equals(re)===!1&&(i.clearColor(ue,ee,Te,xe),oe.copy(re))},reset:function(){R=!1,k=null,oe.set(-1,0,0,0)}}}function n(){let R=!1,re=!1,k=null,oe=null,ue=null;return{setReversed:function(ee){if(re!==ee){const Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),re=ee;const xe=ue;ue=null,this.setClear(xe)}},getReversed:function(){return re},setTest:function(ee){ee?te(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(ee){k!==ee&&!R&&(i.depthMask(ee),k=ee)},setFunc:function(ee){if(re&&(ee=ol[ee]),oe!==ee){switch(ee){case Ps:i.depthFunc(i.NEVER);break;case Ls:i.depthFunc(i.ALWAYS);break;case Ds:i.depthFunc(i.LESS);break;case Wi:i.depthFunc(i.LEQUAL);break;case Is:i.depthFunc(i.EQUAL);break;case Us:i.depthFunc(i.GEQUAL);break;case Ns:i.depthFunc(i.GREATER);break;case Fs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=ee}},setLocked:function(ee){R=ee},setClear:function(ee){ue!==ee&&(ue=ee,re&&(ee=1-ee),i.clearDepth(ee))},reset:function(){R=!1,k=null,oe=null,ue=null,re=!1}}}function r(){let R=!1,re=null,k=null,oe=null,ue=null,ee=null,Te=null,xe=null,it=null;return{setTest:function(tt){R||(tt?te(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(tt){re!==tt&&!R&&(i.stencilMask(tt),re=tt)},setFunc:function(tt,kt,jt){(k!==tt||oe!==kt||ue!==jt)&&(i.stencilFunc(tt,kt,jt),k=tt,oe=kt,ue=jt)},setOp:function(tt,kt,jt){(ee!==tt||Te!==kt||xe!==jt)&&(i.stencilOp(tt,kt,jt),ee=tt,Te=kt,xe=jt)},setLocked:function(tt){R=tt},setClear:function(tt){it!==tt&&(i.clearStencil(tt),it=tt)},reset:function(){R=!1,re=null,k=null,oe=null,ue=null,ee=null,Te=null,xe=null,it=null}}}const s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},u={},p=new WeakMap,x=[],b=null,m=!1,h=null,y=null,S=null,v=null,E=null,T=null,P=null,_=new Ge(0,0,0),A=0,C=!1,L=null,N=null,O=null,D=null,B=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ie=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Y)[1]),W=ie>=1):Y.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),W=ie>=2);let Z=null,Q={};const Ee=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Ke=new pt().fromArray(Ee),Xe=new pt().fromArray(ye);function ke(R,re,k,oe){const ue=new Uint8Array(4),ee=i.createTexture();i.bindTexture(R,ee),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<k;Te++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(re,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(re+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ee}const K={};K[i.TEXTURE_2D]=ke(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(i.DEPTH_TEST),o.setFunc(Wi),le(!1),fe(ca),te(i.CULL_FACE),se(xn);function te(R){d[R]!==!0&&(i.enable(R),d[R]=!0)}function ge(R){d[R]!==!1&&(i.disable(R),d[R]=!1)}function Be(R,re){return u[R]!==re?(i.bindFramebuffer(R,re),u[R]=re,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=re),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=re),!0):!1}function be(R,re){let k=x,oe=!1;if(R){k=p.get(re),k===void 0&&(k=[],p.set(re,k));const ue=R.textures;if(k.length!==ue.length||k[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Te=ue.length;ee<Te;ee++)k[ee]=i.COLOR_ATTACHMENT0+ee;k.length=ue.length,oe=!0}}else k[0]!==i.BACK&&(k[0]=i.BACK,oe=!0);oe&&i.drawBuffers(k)}function Ie(R){return b!==R?(i.useProgram(R),b=R,!0):!1}const Qe={[fi]:i.FUNC_ADD,[A2]:i.FUNC_SUBTRACT,[w2]:i.FUNC_REVERSE_SUBTRACT};Qe[R2]=i.MIN,Qe[C2]=i.MAX;const ne={[P2]:i.ZERO,[L2]:i.ONE,[D2]:i.SRC_COLOR,[S1]:i.SRC_ALPHA,[B2]:i.SRC_ALPHA_SATURATE,[F2]:i.DST_COLOR,[U2]:i.DST_ALPHA,[I2]:i.ONE_MINUS_SRC_COLOR,[y1]:i.ONE_MINUS_SRC_ALPHA,[O2]:i.ONE_MINUS_DST_COLOR,[N2]:i.ONE_MINUS_DST_ALPHA,[z2]:i.CONSTANT_COLOR,[G2]:i.ONE_MINUS_CONSTANT_COLOR,[V2]:i.CONSTANT_ALPHA,[H2]:i.ONE_MINUS_CONSTANT_ALPHA};function se(R,re,k,oe,ue,ee,Te,xe,it,tt){if(R===xn){m===!0&&(ge(i.BLEND),m=!1);return}if(m===!1&&(te(i.BLEND),m=!0),R!==T2){if(R!==h||tt!==C){if((y!==fi||E!==fi)&&(i.blendEquation(i.FUNC_ADD),y=fi,E=fi),tt)switch(R){case zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cs:i.blendFunc(i.ONE,i.ONE);break;case ua:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ha:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",R);break}else switch(R){case zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ua:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ha:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",R);break}S=null,v=null,T=null,P=null,_.set(0,0,0),A=0,h=R,C=tt}return}ue=ue||re,ee=ee||k,Te=Te||oe,(re!==y||ue!==E)&&(i.blendEquationSeparate(Qe[re],Qe[ue]),y=re,E=ue),(k!==S||oe!==v||ee!==T||Te!==P)&&(i.blendFuncSeparate(ne[k],ne[oe],ne[ee],ne[Te]),S=k,v=oe,T=ee,P=Te),(xe.equals(_)===!1||it!==A)&&(i.blendColor(xe.r,xe.g,xe.b,it),_.copy(xe),A=it),h=R,C=!1}function ae(R,re){R.side===mn?ge(i.CULL_FACE):te(i.CULL_FACE);let k=R.side===Ut;re&&(k=!k),le(k),R.blending===zi&&R.transparent===!1?se(xn):se(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);const oe=R.stencilWrite;a.setTest(oe),oe&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ue(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(R){L!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),L=R)}function fe(R){R!==y2?(te(i.CULL_FACE),R!==N&&(R===ca?i.cullFace(i.BACK):R===b2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),N=R}function Ne(R){R!==O&&(W&&i.lineWidth(R),O=R)}function Ue(R,re,k){R?(te(i.POLYGON_OFFSET_FILL),(D!==re||B!==k)&&(D=re,B=k,o.getReversed()&&(re=-re),i.polygonOffset(re,k))):ge(i.POLYGON_OFFSET_FILL)}function Fe(R){R?te(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function Ve(R){R===void 0&&(R=i.TEXTURE0+q-1),Z!==R&&(i.activeTexture(R),Z=R)}function I(R,re,k){k===void 0&&(Z===null?k=i.TEXTURE0+q-1:k=Z);let oe=Q[k];oe===void 0&&(oe={type:void 0,texture:void 0},Q[k]=oe),(oe.type!==R||oe.texture!==re)&&(Z!==k&&(i.activeTexture(k),Z=k),i.bindTexture(R,re||K[R]),oe.type=R,oe.texture=re)}function je(){const R=Q[Z];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function qe(){try{i.compressedTexImage2D(...arguments)}catch(R){nt("WebGLState:",R)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(R){nt("WebGLState:",R)}}function g(){try{i.texSubImage2D(...arguments)}catch(R){nt("WebGLState:",R)}}function z(){try{i.texSubImage3D(...arguments)}catch(R){nt("WebGLState:",R)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(R){nt("WebGLState:",R)}}function J(){try{i.compressedTexSubImage3D(...arguments)}catch(R){nt("WebGLState:",R)}}function ce(){try{i.texStorage2D(...arguments)}catch(R){nt("WebGLState:",R)}}function he(){try{i.texStorage3D(...arguments)}catch(R){nt("WebGLState:",R)}}function $(){try{i.texImage2D(...arguments)}catch(R){nt("WebGLState:",R)}}function j(){try{i.texImage3D(...arguments)}catch(R){nt("WebGLState:",R)}}function pe(R){return f[R]!==void 0?f[R]:i.getParameter(R)}function Pe(R,re){f[R]!==re&&(i.pixelStorei(R,re),f[R]=re)}function _e(R){Ke.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Ke.copy(R))}function me(R){Xe.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Xe.copy(R))}function Le(R,re){let k=c.get(re);k===void 0&&(k=new WeakMap,c.set(re,k));let oe=k.get(R);oe===void 0&&(oe=i.getUniformBlockIndex(re,R.name),k.set(R,oe))}function Oe(R,re){const oe=c.get(re).get(R);l.get(re)!==oe&&(i.uniformBlockBinding(re,oe,R.__bindingPointIndex),l.set(re,oe))}function He(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},Z=null,Q={},u={},p=new WeakMap,x=[],b=null,m=!1,h=null,y=null,S=null,v=null,E=null,T=null,P=null,_=new Ge(0,0,0),A=0,C=!1,L=null,N=null,O=null,D=null,B=null,Ke.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:ge,bindFramebuffer:Be,drawBuffers:be,useProgram:Ie,setBlending:se,setMaterial:ae,setFlipSided:le,setCullFace:fe,setLineWidth:Ne,setPolygonOffset:Ue,setScissorTest:Fe,activeTexture:Ve,bindTexture:I,unbindTexture:je,compressedTexImage2D:qe,compressedTexImage3D:w,texImage2D:$,texImage3D:j,pixelStorei:Pe,getParameter:pe,updateUBOMapping:Le,uniformBlockBinding:Oe,texStorage2D:ce,texStorage3D:he,texSubImage2D:g,texSubImage3D:z,compressedTexSubImage2D:H,compressedTexSubImage3D:J,scissor:_e,viewport:me,reset:He}}function C5(i,e,t,n,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,d=new WeakMap,f=new Set;let u;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,g){return x?new OffscreenCanvas(w,g):zr("canvas")}function m(w,g,z){let H=1;const J=qe(w);if((J.width>z||J.height>z)&&(H=z/Math.max(J.width,J.height)),H<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ce=Math.floor(H*J.width),he=Math.floor(H*J.height);u===void 0&&(u=b(ce,he));const $=g?b(ce,he):u;return $.width=ce,$.height=he,$.getContext("2d").drawImage(w,0,0,ce,he),ze("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ce+"x"+he+")."),$}else return"data"in w&&ze("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function h(w){return w.generateMipmaps}function y(w){i.generateMipmap(w)}function S(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(w,g,z,H,J,ce=!1){if(w!==null){if(i[w]!==void 0)return i[w];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let he;H&&(he=e.get("EXT_texture_norm16"),he||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=g;if(g===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8),z===i.UNSIGNED_SHORT&&he&&($=he.R16_EXT),z===i.SHORT&&he&&($=he.R16_SNORM_EXT)),g===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),g===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8),z===i.UNSIGNED_SHORT&&he&&($=he.RG16_EXT),z===i.SHORT&&he&&($=he.RG16_SNORM_EXT)),g===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),g===i.RGB&&(z===i.UNSIGNED_SHORT&&he&&($=he.RGB16_EXT),z===i.SHORT&&he&&($=he.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){const j=ce?Br:et.getTransfer(J);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=j===lt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&he&&($=he.RGBA16_EXT),z===i.SHORT&&he&&($=he.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function E(w,g){let z;return w?g===null||g===ln||g===qi?z=i.DEPTH24_STENCIL8:g===Jt?z=i.DEPTH32F_STENCIL8:g===Xi&&(z=i.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===ln||g===qi?z=i.DEPTH_COMPONENT24:g===Jt?z=i.DEPTH_COMPONENT32F:g===Xi&&(z=i.DEPTH_COMPONENT16),z}function T(w,g){return h(w)===!0||w.isFramebufferTexture&&w.minFilter!==Tt&&w.minFilter!==Ct?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function P(w){const g=w.target;g.removeEventListener("dispose",P),A(g),g.isVideoTexture&&d.delete(g),g.isHTMLTexture&&f.delete(g)}function _(w){const g=w.target;g.removeEventListener("dispose",_),L(g)}function A(w){const g=n.get(w);if(g.__webglInit===void 0)return;const z=w.source,H=p.get(z);if(H){const J=H[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&C(w),Object.keys(H).length===0&&p.delete(z)}n.remove(w)}function C(w){const g=n.get(w);i.deleteTexture(g.__webglTexture);const z=w.source,H=p.get(z);delete H[g.__cacheKey],o.memory.textures--}function L(w){const g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(g.__webglFramebuffer[H]))for(let J=0;J<g.__webglFramebuffer[H].length;J++)i.deleteFramebuffer(g.__webglFramebuffer[H][J]);else i.deleteFramebuffer(g.__webglFramebuffer[H]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[H])}else{if(Array.isArray(g.__webglFramebuffer))for(let H=0;H<g.__webglFramebuffer.length;H++)i.deleteFramebuffer(g.__webglFramebuffer[H]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let H=0;H<g.__webglColorRenderbuffer.length;H++)g.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[H]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const z=w.textures;for(let H=0,J=z.length;H<J;H++){const ce=n.get(z[H]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(z[H])}n.remove(w)}let N=0;function O(){N=0}function D(){return N}function B(w){N=w}function q(){const w=N;return w>=r.maxTextures&&ze("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+r.maxTextures),N+=1,w}function W(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function ie(w,g){const z=n.get(w);if(w.isVideoTexture&&I(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){const H=w.image;if(H===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(z,w,g);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+g)}function Y(w,g){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){ge(z,w,g);return}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+g)}function Z(w,g){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){ge(z,w,g);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+g)}function Q(w,g){const z=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&z.__version!==w.version){Be(z,w,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+g)}const Ee={[Os]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[Bs]:i.MIRRORED_REPEAT},ye={[Tt]:i.NEAREST,[X2]:i.NEAREST_MIPMAP_NEAREST,[nr]:i.NEAREST_MIPMAP_LINEAR,[Ct]:i.LINEAR,[$r]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},Ke={[J2]:i.NEVER,[el]:i.ALWAYS,[K2]:i.LESS,[Do]:i.LEQUAL,[$2]:i.EQUAL,[Io]:i.GEQUAL,[Q2]:i.GREATER,[j2]:i.NOTEQUAL};function Xe(w,g){if(g.type===Jt&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Ct||g.magFilter===$r||g.magFilter===nr||g.magFilter===Gn||g.minFilter===Ct||g.minFilter===$r||g.minFilter===nr||g.minFilter===Gn)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Ee[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Ee[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Ee[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ye[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ye[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ke[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Tt||g.minFilter!==nr&&g.minFilter!==Gn||g.type===Jt&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function ke(w,g){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",P));const H=g.source;let J=p.get(H);J===void 0&&(J={},p.set(H,J));const ce=W(g);if(ce!==w.__cacheKey){J[ce]===void 0&&(J[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),J[ce].usedTimes++;const he=J[w.__cacheKey];he!==void 0&&(J[w.__cacheKey].usedTimes--,he.usedTimes===0&&C(g)),w.__cacheKey=ce,w.__webglTexture=J[ce].texture}return z}function K(w,g,z){return Math.floor(Math.floor(w/z)/g)}function te(w,g,z,H){const ce=w.updateRanges;if(ce.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,z,H,g.data);else{ce.sort((Pe,_e)=>Pe.start-_e.start);let he=0;for(let Pe=1;Pe<ce.length;Pe++){const _e=ce[he],me=ce[Pe],Le=_e.start+_e.count,Oe=K(me.start,g.width,4),He=K(_e.start,g.width,4);me.start<=Le+1&&Oe===He&&K(me.start+me.count-1,g.width,4)===Oe?_e.count=Math.max(_e.count,me.start+me.count-_e.start):(++he,ce[he]=me)}ce.length=he+1;const $=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let Pe=0,_e=ce.length;Pe<_e;Pe++){const me=ce[Pe],Le=Math.floor(me.start/4),Oe=Math.ceil(me.count/4),He=Le%g.width,R=Math.floor(Le/g.width),re=Oe,k=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,He),t.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,He,R,re,k,z,H,g.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,$),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function ge(w,g,z){let H=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(H=i.TEXTURE_3D);const J=ke(w,g),ce=g.source;t.bindTexture(H,w.__webglTexture,i.TEXTURE0+z);const he=n.get(ce);if(ce.version!==he.__version||J===!0){if(t.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){const k=et.getPrimaries(et.workingColorSpace),oe=g.colorSpace===Pn?null:et.getPrimaries(g.colorSpace),ue=g.colorSpace===Pn||k===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment);let j=m(g.image,!1,r.maxTextureSize);j=je(g,j);const pe=s.convert(g.format,g.colorSpace),Pe=s.convert(g.type);let _e=v(g.internalFormat,pe,Pe,g.normalized,g.colorSpace,g.isVideoTexture);Xe(H,g);let me;const Le=g.mipmaps,Oe=g.isVideoTexture!==!0,He=he.__version===void 0||J===!0,R=ce.dataReady,re=T(g,j);if(g.isDepthTexture)_e=E(g.format===Vn,g.type),He&&(Oe?t.texStorage2D(i.TEXTURE_2D,1,_e,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,pe,Pe,null));else if(g.isDataTexture)if(Le.length>0){Oe&&He&&t.texStorage2D(i.TEXTURE_2D,re,_e,Le[0].width,Le[0].height);for(let k=0,oe=Le.length;k<oe;k++)me=Le[k],Oe?R&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,me.width,me.height,pe,Pe,me.data):t.texImage2D(i.TEXTURE_2D,k,_e,me.width,me.height,0,pe,Pe,me.data);g.generateMipmaps=!1}else Oe?(He&&t.texStorage2D(i.TEXTURE_2D,re,_e,j.width,j.height),R&&te(g,j,pe,Pe)):t.texImage2D(i.TEXTURE_2D,0,_e,j.width,j.height,0,pe,Pe,j.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Oe&&He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,_e,Le[0].width,Le[0].height,j.depth);for(let k=0,oe=Le.length;k<oe;k++)if(me=Le[k],g.format!==Kt)if(pe!==null)if(Oe){if(R)if(g.layerUpdates.size>0){const ue=Ka(me.width,me.height,g.format,g.type);for(const ee of g.layerUpdates){const Te=me.data.subarray(ee*ue/me.data.BYTES_PER_ELEMENT,(ee+1)*ue/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,ee,me.width,me.height,1,pe,Te)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,me.width,me.height,j.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,k,_e,me.width,me.height,j.depth,0,me.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,k,0,0,0,me.width,me.height,j.depth,pe,Pe,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,k,_e,me.width,me.height,j.depth,0,pe,Pe,me.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Oe&&He&&t.texStorage2D(i.TEXTURE_2D,re,_e,Le[0].width,Le[0].height);for(let k=0,oe=Le.length;k<oe;k++)me=Le[k],g.format!==Kt?pe!==null?Oe?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,k,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,k,_e,me.width,me.height,0,me.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?R&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,me.width,me.height,pe,Pe,me.data):t.texImage2D(i.TEXTURE_2D,k,_e,me.width,me.height,0,pe,Pe,me.data)}else if(g.isDataArrayTexture)if(Oe){if(He&&t.texStorage3D(i.TEXTURE_2D_ARRAY,re,_e,j.width,j.height,j.depth),R)if(g.layerUpdates.size>0){const k=Ka(j.width,j.height,g.format,g.type);for(const oe of g.layerUpdates){const ue=j.data.subarray(oe*k/j.data.BYTES_PER_ELEMENT,(oe+1)*k/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,oe,j.width,j.height,1,pe,Pe,ue)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,pe,Pe,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,j.width,j.height,j.depth,0,pe,Pe,j.data);else if(g.isData3DTexture)Oe?(He&&t.texStorage3D(i.TEXTURE_3D,re,_e,j.width,j.height,j.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,pe,Pe,j.data)):t.texImage3D(i.TEXTURE_3D,0,_e,j.width,j.height,j.depth,0,pe,Pe,j.data);else if(g.isFramebufferTexture){if(He)if(Oe)t.texStorage2D(i.TEXTURE_2D,re,_e,j.width,j.height);else{let k=j.width,oe=j.height;for(let ue=0;ue<re;ue++)t.texImage2D(i.TEXTURE_2D,ue,_e,k,oe,0,pe,Pe,null),k>>=1,oe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in i){const k=i.canvas;if(k.hasAttribute("layoutsubtree")||k.setAttribute("layoutsubtree","true"),j.parentNode!==k){k.appendChild(j),f.add(g),k.onpaint=oe=>{const ue=oe.changedElements;for(const ee of f)ue.includes(ee.image)&&(ee.needsUpdate=!0)},k.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{const ue=i.RGBA,ee=i.RGBA,Te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ue,ee,Te,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Oe&&He){const k=qe(Le[0]);t.texStorage2D(i.TEXTURE_2D,re,_e,k.width,k.height)}for(let k=0,oe=Le.length;k<oe;k++)me=Le[k],Oe?R&&t.texSubImage2D(i.TEXTURE_2D,k,0,0,pe,Pe,me):t.texImage2D(i.TEXTURE_2D,k,_e,pe,Pe,me);g.generateMipmaps=!1}else if(Oe){if(He){const k=qe(j);t.texStorage2D(i.TEXTURE_2D,re,_e,k.width,k.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Pe,j)}else t.texImage2D(i.TEXTURE_2D,0,_e,pe,Pe,j);h(g)&&y(H),he.__version=ce.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Be(w,g,z){if(g.image.length!==6)return;const H=ke(w,g),J=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const ce=n.get(J);if(J.version!==ce.__version||H===!0){t.activeTexture(i.TEXTURE0+z);const he=et.getPrimaries(et.workingColorSpace),$=g.colorSpace===Pn?null:et.getPrimaries(g.colorSpace),j=g.colorSpace===Pn||he===$?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);const pe=g.isCompressedTexture||g.image[0].isCompressedTexture,Pe=g.image[0]&&g.image[0].isDataTexture,_e=[];for(let ee=0;ee<6;ee++)!pe&&!Pe?_e[ee]=m(g.image[ee],!0,r.maxCubemapSize):_e[ee]=Pe?g.image[ee].image:g.image[ee],_e[ee]=je(g,_e[ee]);const me=_e[0],Le=s.convert(g.format,g.colorSpace),Oe=s.convert(g.type),He=v(g.internalFormat,Le,Oe,g.normalized,g.colorSpace),R=g.isVideoTexture!==!0,re=ce.__version===void 0||H===!0,k=J.dataReady;let oe=T(g,me);Xe(i.TEXTURE_CUBE_MAP,g);let ue;if(pe){R&&re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,He,me.width,me.height);for(let ee=0;ee<6;ee++){ue=_e[ee].mipmaps;for(let Te=0;Te<ue.length;Te++){const xe=ue[Te];g.format!==Kt?Le!==null?R?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,xe.width,xe.height,Le,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,He,xe.width,xe.height,0,xe.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,xe.width,xe.height,Le,Oe,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,He,xe.width,xe.height,0,Le,Oe,xe.data)}}}else{if(ue=g.mipmaps,R&&re){ue.length>0&&oe++;const ee=qe(_e[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,He,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Pe){R?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,_e[ee].width,_e[ee].height,Le,Oe,_e[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,_e[ee].width,_e[ee].height,0,Le,Oe,_e[ee].data);for(let Te=0;Te<ue.length;Te++){const it=ue[Te].image[ee].image;R?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,it.width,it.height,Le,Oe,it.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,He,it.width,it.height,0,Le,Oe,it.data)}}else{R?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,Oe,_e[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,He,Le,Oe,_e[ee]);for(let Te=0;Te<ue.length;Te++){const xe=ue[Te];R?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Le,Oe,xe.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,He,Le,Oe,xe.image[ee])}}}h(g)&&y(i.TEXTURE_CUBE_MAP),ce.__version=J.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function be(w,g,z,H,J,ce){const he=s.convert(z.format,z.colorSpace),$=s.convert(z.type),j=v(z.internalFormat,he,$,z.normalized,z.colorSpace),pe=n.get(g),Pe=n.get(z);if(Pe.__renderTarget=g,!pe.__hasExternalTextures){const _e=Math.max(1,g.width>>ce),me=Math.max(1,g.height>>ce);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,ce,j,_e,me,g.depth,0,he,$,null):t.texImage2D(J,ce,j,_e,me,0,he,$,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ve(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,J,Pe.__webglTexture,0,Fe(g)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,J,Pe.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(w,g,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){const H=g.depthTexture,J=H&&H.isDepthTexture?H.type:null,ce=E(g.stencilBuffer,J),he=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ve(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe(g),ce,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe(g),ce,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ce,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,w)}else{const H=g.textures;for(let J=0;J<H.length;J++){const ce=H[J],he=s.convert(ce.format,ce.colorSpace),$=s.convert(ce.type),j=v(ce.internalFormat,he,$,ce.normalized,ce.colorSpace);Ve(g)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe(g),j,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe(g),j,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,j,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qe(w,g,z){const H=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=n.get(g.depthTexture);if(J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),H){if(J.__webglInit===void 0&&(J.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),J.__webglTexture===void 0){J.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,g.depthTexture);const pe=s.convert(g.depthTexture.format),Pe=s.convert(g.depthTexture.type);let _e;g.depthTexture.format===Mn?_e=i.DEPTH_COMPONENT24:g.depthTexture.format===Vn&&(_e=i.DEPTH24_STENCIL8);for(let me=0;me<6;me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,_e,g.width,g.height,0,pe,Pe,null)}}else ie(g.depthTexture,0);const ce=J.__webglTexture,he=Fe(g),$=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,j=g.depthTexture.format===Vn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(g.depthTexture.format===Mn)Ve(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,ce,0);else if(g.depthTexture.format===Vn)Ve(g)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,$,ce,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,j,$,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ne(w){const g=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const H=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),H){const J=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,H.removeEventListener("dispose",J)};H.addEventListener("dispose",J),g.__depthDisposeCallback=J}g.__boundDepthTexture=H}if(w.depthTexture&&!g.__autoAllocateDepthBuffer)if(z)for(let H=0;H<6;H++)Qe(g.__webglFramebuffer[H],w,H);else{const H=w.texture.mipmaps;H&&H.length>0?Qe(g.__webglFramebuffer[0],w,0):Qe(g.__webglFramebuffer,w,0)}else if(z){g.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[H]),g.__webglDepthbuffer[H]===void 0)g.__webglDepthbuffer[H]=i.createRenderbuffer(),Ie(g.__webglDepthbuffer[H],w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ce)}}else{const H=w.texture.mipmaps;if(H&&H.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ie(g.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ce)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(w,g,z){const H=n.get(w);g!==void 0&&be(H.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ne(w)}function ae(w){const g=w.texture,z=n.get(w),H=n.get(g);w.addEventListener("dispose",_);const J=w.textures,ce=w.isWebGLCubeRenderTarget===!0,he=J.length>1;if(he||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=g.version,o.memory.textures++),ce){z.__webglFramebuffer=[];for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[$]=[];for(let j=0;j<g.mipmaps.length;j++)z.__webglFramebuffer[$][j]=i.createFramebuffer()}else z.__webglFramebuffer[$]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let $=0;$<g.mipmaps.length;$++)z.__webglFramebuffer[$]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(he)for(let $=0,j=J.length;$<j;$++){const pe=n.get(J[$]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Ve(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let $=0;$<J.length;$++){const j=J[$];z.__webglColorRenderbuffer[$]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[$]);const pe=s.convert(j.format,j.colorSpace),Pe=s.convert(j.type),_e=v(j.internalFormat,pe,Pe,j.normalized,j.colorSpace,w.isXRRenderTarget===!0),me=Fe(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,_e,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+$,i.RENDERBUFFER,z.__webglColorRenderbuffer[$])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ie(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,g);for(let $=0;$<6;$++)if(g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)be(z.__webglFramebuffer[$][j],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,j);else be(z.__webglFramebuffer[$],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);h(g)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let $=0,j=J.length;$<j;$++){const pe=J[$],Pe=n.get(pe);let _e=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_e=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,Pe.__webglTexture),Xe(_e,pe),be(z.__webglFramebuffer,w,pe,i.COLOR_ATTACHMENT0+$,_e,0),h(pe)&&y(_e)}t.unbindTexture()}else{let $=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&($=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,H.__webglTexture),Xe($,g),g.mipmaps&&g.mipmaps.length>0)for(let j=0;j<g.mipmaps.length;j++)be(z.__webglFramebuffer[j],w,g,i.COLOR_ATTACHMENT0,$,j);else be(z.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,$,0);h(g)&&y($),t.unbindTexture()}w.depthBuffer&&ne(w)}function le(w){const g=w.textures;for(let z=0,H=g.length;z<H;z++){const J=g[z];if(h(J)){const ce=S(w),he=n.get(J).__webglTexture;t.bindTexture(ce,he),y(ce),t.unbindTexture()}}}const fe=[],Ne=[];function Ue(w){if(w.samples>0){if(Ve(w)===!1){const g=w.textures,z=w.width,H=w.height;let J=i.COLOR_BUFFER_BIT;const ce=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(w),$=g.length>1;if($)for(let pe=0;pe<g.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const j=w.texture.mipmaps;j&&j.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let pe=0;pe<g.length;pe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),$){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Pe=n.get(g[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Pe,0)}i.blitFramebuffer(0,0,z,H,0,0,z,H,J,i.NEAREST),l===!0&&(fe.length=0,Ne.length=0,fe.push(i.COLOR_ATTACHMENT0+pe),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(fe.push(ce),Ne.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),$)for(let pe=0;pe<g.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Pe=n.get(g[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Pe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Fe(w){return Math.min(r.maxSamples,w.samples)}function Ve(w){const g=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function I(w){const g=o.render.frame;d.get(w)!==g&&(d.set(w,g),w.update())}function je(w,g){const z=w.colorSpace,H=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Or&&z!==Pn&&(et.getTransfer(z)===lt?(H!==Kt||J!==Bt)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",z)),g}function qe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=O,this.getTextureUnits=D,this.setTextureUnits=B,this.setTexture2D=ie,this.setTexture2DArray=Y,this.setTexture3D=Z,this.setTextureCube=Q,this.rebindTextures=se,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function P5(i,e){function t(n,r=Pn){let s;const o=et.getTransfer(r);if(n===Bt)return i.UNSIGNED_BYTE;if(n===Ao)return i.UNSIGNED_SHORT_4_4_4_4;if(n===wo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===I1)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===U1)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===L1)return i.BYTE;if(n===D1)return i.SHORT;if(n===Xi)return i.UNSIGNED_SHORT;if(n===To)return i.INT;if(n===ln)return i.UNSIGNED_INT;if(n===Jt)return i.FLOAT;if(n===cn)return i.HALF_FLOAT;if(n===N1)return i.ALPHA;if(n===F1)return i.RGB;if(n===Kt)return i.RGBA;if(n===Mn)return i.DEPTH_COMPONENT;if(n===Vn)return i.DEPTH_STENCIL;if(n===Ro)return i.RED;if(n===Co)return i.RED_INTEGER;if(n===Xn)return i.RG;if(n===Po)return i.RG_INTEGER;if(n===Lo)return i.RGBA_INTEGER;if(n===Pr||n===Lr||n===Dr||n===Ir)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Pr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Pr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ir)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zs||n===Gs||n===Vs||n===Hs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===zs)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vs)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ks||n===Ws||n===Xs||n===qs||n===Ys||n===Nr||n===Zs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ks||n===Ws)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xs)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===qs)return s.COMPRESSED_R11_EAC;if(n===Ys)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Nr)return s.COMPRESSED_RG11_EAC;if(n===Zs)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Js||n===Ks||n===$s||n===Qs||n===js||n===eo||n===to||n===no||n===io||n===ro||n===so||n===oo||n===ao||n===lo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Js)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ks)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$s)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qs)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===js)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===to)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===no)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===io)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ro)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===so)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ao)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lo)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===co||n===uo||n===ho)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===co)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ho)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fo||n===po||n===Fr||n===mo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===fo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===po)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const L5=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,D5=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class I5{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new W1(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ht({vertexShader:L5,fragmentShader:D5,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class U5 extends Yn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,u=null,p=null,x=null;const b=typeof XRWebGLBinding<"u",m=new I5,h={},y=t.getContextAttributes();let S=null,v=null;const E=[],T=[],P=new de;let _=null,A=null;const C=new Yt;C.viewport=new pt;const L=new Yt;L.viewport=new pt;const N=[C,L],O=new V3;let D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=E[K];return te===void 0&&(te=new rs,E[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=E[K];return te===void 0&&(te=new rs,E[K]=te),te.getGripSpace()},this.getHand=function(K){let te=E[K];return te===void 0&&(te=new rs,E[K]=te),te.getHandSpace()};function q(K){const te=T.indexOf(K.inputSource);if(te===-1)return;const ge=E[te];ge!==void 0&&(ge.update(K.inputSource,K.frame,c||o),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",ie);for(let K=0;K<E.length;K++){const te=T[K];te!==null&&(T[K]=null,E[K].disconnect(te))}D=null,B=null,m.reset();for(const K in h)delete h[K];if(e.setRenderTarget(S),p=null,u=null,f=null,r=null,v=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(P.width,P.height,!1),A!==null){const K=A.camera;K.fov=A.fov,K.zoom=A.zoom,K.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",W),r.addEventListener("inputsourceschange",ie),y.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Be=null,be=null;y.depth&&(be=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=y.stencil?Vn:Mn,Be=y.stencil?qi:ln);const Ie={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Ie),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),v=new $t(u.textureWidth,u.textureHeight,{format:Kt,type:Bt,depthTexture:new Ji(u.textureWidth,u.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ge={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new $t(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:Bt,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(K){for(let te=0;te<K.removed.length;te++){const ge=K.removed[te],Be=T.indexOf(ge);Be>=0&&(T[Be]=null,E[Be].disconnect(ge))}for(let te=0;te<K.added.length;te++){const ge=K.added[te];let Be=T.indexOf(ge);if(Be===-1){for(let Ie=0;Ie<E.length;Ie++)if(Ie>=T.length){T.push(ge),Be=Ie;break}else if(T[Ie]===null){T[Ie]=ge,Be=Ie;break}if(Be===-1)break}const be=E[Be];be&&be.connect(ge)}}const Y=new U,Z=new U;function Q(K,te,ge){Y.setFromMatrixPosition(te.matrixWorld),Z.setFromMatrixPosition(ge.matrixWorld);const Be=Y.distanceTo(Z),be=te.projectionMatrix.elements,Ie=ge.projectionMatrix.elements,Qe=be[14]/(be[10]-1),ne=be[14]/(be[10]+1),se=(be[9]+1)/be[5],ae=(be[9]-1)/be[5],le=(be[8]-1)/be[0],fe=(Ie[8]+1)/Ie[0],Ne=Qe*le,Ue=Qe*fe,Fe=Be/(-le+fe),Ve=Fe*-le;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ve),K.translateZ(Fe),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),be[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const I=Qe+Fe,je=ne+Fe,qe=Ne-Ve,w=Ue+(Be-Ve),g=se*ne/je*I,z=ae*ne/je*I;K.projectionMatrix.makePerspective(qe,w,g,z,I,je),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ee(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let te=K.near,ge=K.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ge=m.depthFar)),O.near=L.near=C.near=te,O.far=L.far=C.far=ge,(D!==O.near||B!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),D=O.near,B=O.far),O.layers.mask=K.layers.mask|6,C.layers.mask=O.layers.mask&-5,L.layers.mask=O.layers.mask&-3;const Be=K.parent,be=O.cameras;Ee(O,Be);for(let Ie=0;Ie<be.length;Ie++)Ee(be[Ie],Be);be.length===2?Q(O,C,L):O.projectionMatrix.copy(C.projectionMatrix),A===null&&K.isPerspectiveCamera&&(A={camera:K,fov:K.fov,zoom:K.zoom}),ye(K,O,Be)};function ye(K,te,ge){ge===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Zi*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(O)},this.getCameraTexture=function(K){return h[K]};let Ke=null;function Xe(K,te){if(d=te.getViewerPose(c||o),x=te,d!==null){const ge=d.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let Be=!1;ge.length!==O.cameras.length&&(O.cameras.length=0,Be=!0);for(let ne=0;ne<ge.length;ne++){const se=ge[ne];let ae=null;if(p!==null)ae=p.getViewport(se);else{const fe=f.getViewSubImage(u,se);ae=fe.viewport,ne===0&&(e.setRenderTargetTextures(v,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(v))}let le=N[ne];le===void 0&&(le=new Yt,le.layers.enable(ne),le.viewport=new pt,N[ne]=le),le.matrix.fromArray(se.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(se.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(ae.x,ae.y,ae.width,ae.height),ne===0&&(O.matrix.copy(le.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),Be===!0&&O.cameras.push(le)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=n.getBinding();const ne=f.getDepthInformation(ge[0]);ne&&ne.isValid&&ne.texture&&m.init(ne,r.renderState)}if(be&&be.includes("camera-access")&&b){e.state.unbindTexture(),f=n.getBinding();for(let ne=0;ne<ge.length;ne++){const se=ge[ne].camera;if(se){let ae=h[se];ae||(ae=new W1,h[se]=ae);const le=f.getCameraImage(se);ae.sourceTexture=le}}}}for(let ge=0;ge<E.length;ge++){const Be=T[ge],be=E[ge];Be!==null&&be!==void 0&&be.update(Be,te,c||o)}Ke&&Ke(K,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),x=null}const ke=new o2;ke.setAnimationLoop(Xe),this.setAnimationLoop=function(K){Ke=K},this.dispose=function(){}}}const N5=new at,d2=new We;d2.set(-1,0,0,0,1,0,0,0,1);function F5(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,n2(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,y,S,v){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(m,h):h.isMeshLambertMaterial?(s(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),d(m,h),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(m,h),u(m,h),h.isMeshPhysicalMaterial&&p(m,h,v)):h.isMeshMatcapMaterial?(s(m,h),x(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),b(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,y,S):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Ut&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Ut&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const y=e.get(h),S=y.envMap,v=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(N5.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(d2),m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,y,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*y,m.scale.value=S*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function d(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function u(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,y){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ut&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.retroreflectivity>0&&(m.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,h){h.matcap&&(m.matcap.value=h.matcap)}function b(m,h){const y=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function O5(i,e,t,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const T=E.program;n.uniformBlockBinding(v,T)}function c(v,E){let T=r[v.id];T===void 0&&(m(v),T=d(v),r[v.id]=T,v.addEventListener("dispose",y));const P=E.program;n.updateUBOMapping(v,P);const _=e.render.frame;s[v.id]!==_&&(u(v),s[v.id]=_)}function d(v){const E=f();v.__bindingPointIndex=E;const T=i.createBuffer(),P=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,T),T}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const E=r[v.id],T=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let _=0,A=T.length;_<A;_++){const C=T[_];if(Array.isArray(C))for(let L=0,N=C.length;L<N;L++)p(C[L],_,L,P);else p(C,_,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,E,T,P){if(b(v,E,T,P)===!0){const _=v.__offset,A=v.value;if(Array.isArray(A)){let C=0;for(let L=0;L<A.length;L++){const N=A[L],O=h(N);x(N,v.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(A,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function x(v,E,T){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,T)}function b(v,E,T,P){const _=v.value,A=E+"_"+T;if(P[A]===void 0)return typeof _=="number"||typeof _=="boolean"?P[A]=_:ArrayBuffer.isView(_)?P[A]=_.slice():P[A]=_.clone(),!0;{const C=P[A];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return P[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(v){const E=v.uniforms;let T=0;const P=16;for(let A=0,C=E.length;A<C;A++){const L=Array.isArray(E[A])?E[A]:[E[A]];for(let N=0,O=L.length;N<O;N++){const D=L[N],B=Array.isArray(D.value)?D.value:[D.value];for(let q=0,W=B.length;q<W;q++){const ie=B[q],Y=h(ie),Z=T%P,Q=Z%Y.boundary,Ee=Z+Q;T+=Q,Ee!==0&&P-Ee<Y.storage&&(T+=P-Ee),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=Y.storage}}}const _=T%P;return _>0&&(T+=P-_),v.__size=T,v.__cache={},this}function h(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",v),E}function y(v){const E=v.target;E.removeEventListener("dispose",y);const T=o.indexOf(E.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function S(){for(const v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:S}}const B5=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let nn=null;function z5(){return nn===null&&(nn=new H1(B5,16,16,Xn,cn),nn.name="DFG_LUT",nn.minFilter=Ct,nn.magFilter=Ct,nn.wrapS=gn,nn.wrapT=gn,nn.generateMipmaps=!1,nn.needsUpdate=!0),nn}class G5{constructor(e={}){const{canvas:t=rl(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=Bt}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const b=p,m=new Set([Lo,Po,Co]),h=new Set([Bt,ln,Xi,qi,Ao,wo]),y=new Uint32Array(4),S=new Int32Array(4),v=new U;let E=null,T=null;const P=[],_=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=on,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,N=null,O=null,D=null,B=null;this._outputColorSpace=Ot;let q=0,W=0,ie=null,Y=-1,Z=null;const Q=new pt,Ee=new pt;let ye=null;const Ke=new Ge(0);let Xe=0,ke=t.width,K=t.height,te=1,ge=null,Be=null;const be=new pt(0,0,ke,K),Ie=new pt(0,0,ke,K);let Qe=!1;const ne=new zo;let se=!1,ae=!1;const le=new at,fe=new U,Ne=new pt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function Ve(){return ie===null?te:1}let I=n;function je(M,F){return t.getContext(M,F)}let qe,w,g,z,H,J,ce,he,$,j,pe,Pe,_e,me,Le,Oe,He,R,re,k,oe,ue,ee;try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bo}`),t.addEventListener("webglcontextlost",it,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",kt,!1),I===null){const F="webgl2";if(I=je(F,M),I===null)throw je(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(M){throw t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",kt,!1),nt("WebGLRenderer: "+M.message),M}function Te(){qe=new z4(I),qe.init(),oe=new P5(I,qe),w=new C4(I,qe,e,oe),g=new R5(I,qe),w.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),O=I.createFramebuffer(),D=I.createFramebuffer(),B=I.createFramebuffer(),z=new H4(I),H=new p5,J=new C5(I,qe,g,H,w,oe,z),ce=new B4(C),he=new W3(I),ue=new w4(I,he),$=new G4(I,he,z,ue),j=new W4(I,$,he,ue,z),R=new k4(I,w,J),Le=new P4(H),pe=new d5(C,ce,qe,w,ue,Le),Pe=new F5(C,H),_e=new g5,me=new y5(qe),He=new A4(C,ce,g,j,x,l),Oe=new w5(C,j,w),ee=new O5(I,z,w,g),re=new R4(I,qe,z),k=new V4(I,qe,z),z.programs=pe.programs,C.capabilities=w,C.extensions=qe,C.properties=H,C.renderLists=_e,C.shadowMap=Oe,C.state=g,C.info=z}b!==Bt&&(A=new q4(b,t.width,t.height,a,r,s));const xe=new U5(C,I);this.xr=xe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const M=qe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=qe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(ke,K,!1))},this.getSize=function(M){return M.set(ke,K)},this.setSize=function(M,F,X=!0){if(xe.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}ke=M,K=F,t.width=Math.floor(M*te),t.height=Math.floor(F*te),X===!0&&(t.style.width=M+"px",t.style.height=F+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(ke*te,K*te).floor()},this.setDrawingBufferSize=function(M,F,X){ke=M,K=F,te=X,t.width=Math.floor(M*X),t.height=Math.floor(F*X),this.setViewport(0,0,M,F)},this.setEffects=function(M){if(b===Bt){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let F=0;F<M.length;F++)if(M[F].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(Q)},this.getViewport=function(M){return M.copy(be)},this.setViewport=function(M,F,X,G){M.isVector4?be.set(M.x,M.y,M.z,M.w):be.set(M,F,X,G),g.viewport(Q.copy(be).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(Ie)},this.setScissor=function(M,F,X,G){M.isVector4?Ie.set(M.x,M.y,M.z,M.w):Ie.set(M,F,X,G),g.scissor(Ee.copy(Ie).multiplyScalar(te).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(M){g.setScissorTest(Qe=M)},this.setOpaqueSort=function(M){ge=M},this.setTransparentSort=function(M){Be=M},this.getClearColor=function(M){return M.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(M=!0,F=!0,X=!0){let G=0;if(M){let V=!1;if(ie!==null){const Se=ie.texture.format;V=m.has(Se)}if(V){const Se=ie.texture.type,we=h.has(Se),Me=He.getClearColor(),Re=He.getClearAlpha(),De=Me.r,Ye=Me.g,$e=Me.b;we?(y[0]=De,y[1]=Ye,y[2]=$e,y[3]=Re,I.clearBufferuiv(I.COLOR,0,y)):(S[0]=De,S[1]=Ye,S[2]=$e,S[3]=Re,I.clearBufferiv(I.COLOR,0,S))}else G|=I.COLOR_BUFFER_BIT}F&&(G|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(G|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&I.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),N=M},this.dispose=function(){t.removeEventListener("webglcontextlost",it,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",kt,!1),He.dispose(),_e.dispose(),me.dispose(),H.dispose(),ce.dispose(),j.dispose(),ue.dispose(),ee.dispose(),pe.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",ea),xe.removeEventListener("sessionend",ta),Dn.stop()};function it(M){M.preventDefault(),pa("WebGLRenderer: Context Lost."),L=!0}function tt(){pa("WebGLRenderer: Context Restored."),L=!1;const M=z.autoReset,F=Oe.enabled,X=Oe.autoUpdate,G=Oe.needsUpdate,V=Oe.type;Te(),z.autoReset=M,Oe.enabled=F,Oe.autoUpdate=X,Oe.needsUpdate=G,Oe.type=V}function kt(M){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function jt(M){const F=M.target;F.removeEventListener("dispose",jt),m2(F)}function m2(M){g2(M),H.remove(M)}function g2(M){const F=H.get(M).programs;F!==void 0&&(F.forEach(function(X){pe.releaseProgram(X)}),M.isShaderMaterial&&pe.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,X,G,V,Se){F===null&&(F=Ue);const we=V.isMesh&&V.matrixWorld.determinantAffine()<0,Me=v2(M,F,X,G,V);g.setMaterial(G,we);let Re=X.index,De=1;if(G.wireframe===!0){if(Re=$.getWireframeAttribute(X),Re===void 0)return;De=2}const Ye=X.drawRange,$e=X.attributes.position;let Ce=Ye.start*De,ot=(Ye.start+Ye.count)*De;Se!==null&&(Ce=Math.max(Ce,Se.start*De),ot=Math.min(ot,(Se.start+Se.count)*De)),Re!==null?(Ce=Math.max(Ce,0),ot=Math.min(ot,Re.count)):$e!=null&&(Ce=Math.max(Ce,0),ot=Math.min(ot,$e.count));const _t=ot-Ce;if(_t<0||_t===1/0)return;ue.setup(V,G,Me,X,Re);let ft,ut=re;if(Re!==null&&(ft=he.get(Re),ut=k,ut.setIndex(ft)),V.isMesh)G.wireframe===!0?(g.setLineWidth(G.wireframeLinewidth*Ve()),ut.setMode(I.LINES)):ut.setMode(I.TRIANGLES);else if(V.isLine){let At=G.linewidth;At===void 0&&(At=1),g.setLineWidth(At*Ve()),V.isLineSegments?ut.setMode(I.LINES):V.isLineLoop?ut.setMode(I.LINE_LOOP):ut.setMode(I.LINE_STRIP)}else V.isPoints?ut.setMode(I.POINTS):V.isSprite&&ut.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))ut.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const At=V._multiDrawStarts,Ae=V._multiDrawCounts,Lt=V._multiDrawCount,rt=Re?he.get(Re).bytesPerElement:1,zt=H.get(G).currentProgram.getUniforms();for(let en=0;en<Lt;en++)zt.setValue(I,"_gl_DrawID",en),ut.render(At[en]/rt,Ae[en])}else if(V.isInstancedMesh)ut.renderInstances(Ce,_t,V.count);else if(X.isInstancedBufferGeometry){const At=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ae=Math.min(X.instanceCount,At);ut.renderInstances(Ce,_t,Ae)}else ut.render(Ce,_t)};function jo(M,F,X,G){N!==null&&M.isNodeMaterial&&N.setObject(G,M),se===!0&&Le.setState(M,X,!1),M.transparent===!0&&M.side===mn&&M.forceSinglePass===!1?(M.side=Ut,M.needsUpdate=!0,tr(M,F,G),M.side=kn,M.needsUpdate=!0,tr(M,F,G),M.side=mn):tr(M,F,G)}this.compile=function(M,F,X=null){X===null&&(X=M),N!==null&&N.renderStart(M,F,X),T=me.get(X),T.init(F),_.push(T),X.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),M!==X&&M.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),N!==null&&N.updateLights(T.state.lightsArray),ae=this.localClippingEnabled,se=Le.init(this.clippingPlanes,ae),se===!0&&Le.setGlobalState(this.clippingPlanes,F),N!==null&&Oe.render(T.state.shadowsArray,X,F);const G=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Se=V.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){const Me=Se[we];jo(Me,X,F,V),G.add(Me)}else jo(Se,X,F,V),G.add(Se)}),T=_.pop(),N!==null&&N.renderEnd(),G},this.compileAsync=function(M,F,X=null){const G=this.compile(M,F,X);return new Promise(V=>{function Se(){if(G.forEach(function(we){const Re=H.get(we).currentProgram;(Re===void 0||Re.isReady())&&G.delete(we)}),G.size===0){V(M);return}setTimeout(Se,10)}qe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Yr=null;function _2(M){Yr&&Yr(M)}function ea(){Dn.stop()}function ta(){Dn.start()}const Dn=new o2;Dn.setAnimationLoop(_2),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(M){Yr=M,xe.setAnimationLoop(M),M===null?Dn.stop():Dn.start()},xe.addEventListener("sessionstart",ea),xe.addEventListener("sessionend",ta),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(M,F);const X=xe.enabled===!0&&xe.isPresenting===!0,G=A!==null&&(ie===null||X)&&A.begin(C,ie);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(F),F=xe.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,F,ie),T=me.get(M,_.length),T.init(F),T.state.textureUnits=J.getTextureUnits(),_.push(T),le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ne.setFromProjectionMatrix(le,sn,F.reversedDepth),ae=this.localClippingEnabled,se=Le.init(this.clippingPlanes,ae),E=_e.get(M,P.length),E.init(),P.push(E),xe.enabled===!0&&xe.isPresenting===!0){const we=C.xr.getDepthSensingMesh();we!==null&&Zr(we,F,-1/0,C.sortObjects)}Zr(M,F,0,C.sortObjects),E.finish(),N!==null&&N.updateLights(T.state.lightsArray),C.sortObjects===!0&&E.sort(ge,Be),Fe=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Fe&&He.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Le.beginShadows();const V=T.state.shadowsArray;if(Oe.render(V,M,F),se===!0&&Le.endShadows(),(G&&A.hasRenderPass())===!1){const we=E.opaque,Me=E.transmissive;if(T.setupLights(),F.isArrayCamera){const Re=F.cameras;if(Me.length>0)for(let De=0,Ye=Re.length;De<Ye;De++){const $e=Re[De];ia(we,Me,M,$e)}Fe&&He.render(M);for(let De=0,Ye=Re.length;De<Ye;De++){const $e=Re[De];na(E,M,$e,$e.viewport)}}else Me.length>0&&ia(we,Me,M,F),Fe&&He.render(M),na(E,M,F)}ie!==null&&W===0&&(J.updateMultisampleRenderTarget(ie),J.updateRenderTargetMipmap(ie)),G&&A.end(C),M.isScene===!0&&M.onAfterRender(C,M,F),ue.resetDefaultState(),Y=-1,Z=null,_.pop(),_.length>0?(T=_[_.length-1],J.setTextureUnits(T.state.textureUnits),se===!0&&Le.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?E=P[P.length-1]:E=null,N!==null&&N.renderEnd()};function Zr(M,F,X,G){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLightProbeGrid)T.pushLightProbeGrid(M);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(ne)){G&&Ne.setFromMatrixPosition(M.matrixWorld).applyMatrix4(le);const we=j.update(M),Me=M.material;Me.visible&&E.push(M,we,Me,X,Ne.z,null,F)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(ne))){const we=j.update(M),Me=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ne.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Ne.copy(we.boundingSphere.center)),Ne.applyMatrix4(M.matrixWorld).applyMatrix4(le)),Array.isArray(Me)){const Re=we.groups;for(let De=0,Ye=Re.length;De<Ye;De++){const $e=Re[De],Ce=Me[$e.materialIndex];Ce&&Ce.visible&&E.push(M,we,Ce,X,Ne.z,$e,F)}}else Me.visible&&E.push(M,we,Me,X,Ne.z,null,F)}}const Se=M.children;for(let we=0,Me=Se.length;we<Me;we++)Zr(Se[we],F,X,G)}function na(M,F,X,G){const{opaque:V,transmissive:Se,transparent:we}=M;T.setupLightsView(X),se===!0&&Le.setGlobalState(C.clippingPlanes,X),G&&g.viewport(Q.copy(G)),V.length>0&&er(V,F,X),Se.length>0&&er(Se,F,X),we.length>0&&er(we,F,X),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function ia(M,F,X,G){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[G.id]===void 0){const Ce=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[G.id]=new $t(1,1,{generateMipmaps:!0,type:Ce?cn:Bt,minFilter:Gn,samples:Math.max(4,w.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const Se=T.state.transmissionRenderTarget[G.id],we=G.viewport||Q;Se.setSize(we.z*C.transmissionResolutionScale,we.w*C.transmissionResolutionScale);const Me=C.getRenderTarget(),Re=C.getActiveCubeFace(),De=C.getActiveMipmapLevel();C.setRenderTarget(Se),C.getClearColor(Ke),Xe=C.getClearAlpha(),Xe<1&&C.setClearColor(16777215,.5),C.clear(),Fe&&He.render(X);const Ye=C.toneMapping;C.toneMapping=on;const $e=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),T.setupLightsView(G),se===!0&&Le.setGlobalState(C.clippingPlanes,G),er(M,X,G),J.updateMultisampleRenderTarget(Se),J.updateRenderTargetMipmap(Se),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ot=0,_t=F.length;ot<_t;ot++){const ft=F[ot],{object:ut,geometry:At,material:Ae,group:Lt}=ft;if(Ae.side===mn&&ut.layers.test(G.layers)){const rt=Ae.side;Ae.side=Ut,Ae.needsUpdate=!0,ra(ut,X,G,At,Ae,Lt),Ae.side=rt,Ae.needsUpdate=!0,Ce=!0}}Ce===!0&&(J.updateMultisampleRenderTarget(Se),J.updateRenderTargetMipmap(Se))}C.setRenderTarget(Me,Re,De),C.setClearColor(Ke,Xe),$e!==void 0&&(G.viewport=$e),C.toneMapping=Ye}function er(M,F,X){const G=F.isScene===!0?F.overrideMaterial:null;for(let V=0,Se=M.length;V<Se;V++){const we=M[V],{object:Me,geometry:Re,group:De}=we;let Ye=we.material;Ye.allowOverride===!0&&G!==null&&(Ye=G),Me.layers.test(X.layers)&&ra(Me,F,X,Re,Ye,De)}}function ra(M,F,X,G,V,Se){N!==null&&V.isNodeMaterial&&N.setObject(M,V),M.onBeforeRender(C,F,X,G,V,Se),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(C,F,X,G,M,Se),V.transparent===!0&&V.side===mn&&V.forceSinglePass===!1?(V.side=Ut,V.needsUpdate=!0,C.renderBufferDirect(X,F,G,V,M,Se),V.side=kn,V.needsUpdate=!0,C.renderBufferDirect(X,F,G,V,M,Se),V.side=mn):C.renderBufferDirect(X,F,G,V,M,Se),M.onAfterRender(C,F,X,G,V,Se)}function tr(M,F,X){F.isScene!==!0&&(F=Ue);const G=H.get(M),V=T.state.lights,Se=T.state.shadowsArray,we=V.state.version,Me=pe.getParameters(M,V.state,Se,F,X,T.state.lightProbeGridArray),Re=pe.getProgramCacheKey(Me);let De=G.programs;G.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;const Ye=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;G.envMap=ce.get(M.envMap||G.environment,Ye),G.envMapRotation=G.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,De===void 0&&(M.addEventListener("dispose",jt),De=new Map,G.programs=De);let $e=De.get(Re);if($e!==void 0){if(G.currentProgram===$e&&G.lightsStateVersion===we)return oa(M,Me),$e}else Me.uniforms=pe.getUniforms(M),N!==null&&M.isNodeMaterial&&N.build(M,X,Me),M.onBeforeCompile(Me,C),$e=pe.acquireProgram(Me,Re),De.set(Re,$e),G.uniforms=Me.uniforms;const Ce=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ce.clippingPlanes=Le.uniform),oa(M,Me),G.needsLights=S2(M),G.lightsStateVersion=we,G.needsLights&&(Ce.ambientLightColor.value=V.state.ambient,Ce.lightProbe.value=V.state.probe,Ce.sunLights.value=V.state.sun,Ce.sunLightShadows.value=V.state.sunShadow,Ce.directionalLights.value=V.state.directional,Ce.directionalLightShadows.value=V.state.directionalShadow,Ce.spotLights.value=V.state.spot,Ce.spotLightShadows.value=V.state.spotShadow,Ce.rectAreaLights.value=V.state.rectArea,Ce.ltc_1.value=V.state.rectAreaLTC1,Ce.ltc_2.value=V.state.rectAreaLTC2,Ce.pointLights.value=V.state.point,Ce.pointLightShadows.value=V.state.pointShadow,Ce.hemisphereLights.value=V.state.hemi,Ce.sunShadowMatrix.value=V.state.sunShadowMatrix,Ce.sunShadowCascade.value=V.state.sunShadowCascade,Ce.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ce.spotLightMatrix.value=V.state.spotLightMatrix,Ce.spotLightMap.value=V.state.spotLightMap,Ce.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=T.state.lightProbeGridArray.length>0,G.currentProgram=$e,G.uniformsList=null,$e}function sa(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Ur.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function oa(M,F){const X=H.get(M);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function x2(M,F){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let X=0,G=M.length;X<G;X++){const V=M[X];if(V.texture!==null&&V.boundingBox.containsPoint(v))return V}return null}function v2(M,F,X,G,V){F.isScene!==!0&&(F=Ue),J.resetTextureUnits();const Se=F.fog,we=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,Me=ie===null?C.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:et.workingColorSpace,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,De=ce.get(G.envMap||we,Re),Ye=G.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,$e=!!X.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ce=!!X.morphAttributes.position,ot=!!X.morphAttributes.normal,_t=!!X.morphAttributes.color;let ft=on;G.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ft=C.toneMapping);const ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,At=ut!==void 0?ut.length:0,Ae=H.get(G),Lt=T.state.lights;if(se===!0&&(ae===!0||M!==Z)){const ht=M===Z&&G.id===Y;Le.setState(G,M,ht)}let rt=!1;G.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Lt.state.version||Ae.outputColorSpace!==Me||V.isBatchedMesh&&Ae.batching===!1||!V.isBatchedMesh&&Ae.batching===!0||V.isBatchedMesh&&Ae.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ae.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ae.instancing===!1||!V.isInstancedMesh&&Ae.instancing===!0||V.isSkinnedMesh&&Ae.skinning===!1||!V.isSkinnedMesh&&Ae.skinning===!0||V.isInstancedMesh&&Ae.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ae.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ae.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ae.instancingMorph===!1&&V.morphTexture!==null||Ae.envMap!==De||G.fog===!0&&Ae.fog!==Se||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Le.numPlanes||Ae.numIntersection!==Le.numIntersection)||Ae.vertexAlphas!==Ye||Ae.vertexTangents!==$e||Ae.morphTargets!==Ce||Ae.morphNormals!==ot||Ae.morphColors!==_t||Ae.toneMapping!==ft||Ae.morphTargetsCount!==At||!!Ae.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(rt=!0):(rt=!0,Ae.__version=G.version);let zt=Ae.currentProgram;rt===!0&&(zt=tr(G,F,V),N&&G.isNodeMaterial&&N.onUpdateProgram(G,zt,Ae));let en=!1,Sn=!1,Kn=!1;const ct=zt.getUniforms(),gt=Ae.uniforms;if(g.useProgram(zt.program)&&(en=!0,Sn=!0,Kn=!0),G.id!==Y&&(Y=G.id,Sn=!0),Ae.needsLights){const ht=x2(T.state.lightProbeGridArray,V);Ae.lightProbeGrid!==ht&&(Ae.lightProbeGrid=ht,Sn=!0)}if(en||Z!==M){g.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ct.setValue(I,"projectionMatrix",M.projectionMatrix),ct.setValue(I,"viewMatrix",M.matrixWorldInverse);const bn=ct.map.cameraPosition;bn!==void 0&&bn.setValue(I,fe.setFromMatrixPosition(M.matrixWorld)),w.logarithmicDepthBuffer&&ct.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ct.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),Z!==M&&(Z=M,Sn=!0,Kn=!0)}if(Ae.needsLights&&(Lt.state.sunShadowMap.length>0&&ct.setValue(I,"sunShadowMap",Lt.state.sunShadowMap,J),Lt.state.directionalShadowMap.length>0&&ct.setValue(I,"directionalShadowMap",Lt.state.directionalShadowMap,J),Lt.state.spotShadowMap.length>0&&ct.setValue(I,"spotShadowMap",Lt.state.spotShadowMap,J),Lt.state.pointShadowMap.length>0&&ct.setValue(I,"pointShadowMap",Lt.state.pointShadowMap,J)),V.isSkinnedMesh){ct.setOptional(I,V,"bindMatrix"),ct.setOptional(I,V,"bindMatrixInverse");const ht=V.skeleton;ht&&(ht.boneTexture===null&&ht.computeBoneTexture(),ct.setValue(I,"boneTexture",ht.boneTexture,J))}V.isBatchedMesh&&(ct.setOptional(I,V,"batchingTexture"),ct.setValue(I,"batchingTexture",V._matricesTexture,J),ct.setOptional(I,V,"batchingIdTexture"),ct.setValue(I,"batchingIdTexture",V._indirectTexture,J),ct.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&ct.setValue(I,"batchingColorTexture",V._colorsTexture,J));const yn=X.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&R.update(V,X,zt),(Sn||Ae.receiveShadow!==V.receiveShadow)&&(Ae.receiveShadow=V.receiveShadow,ct.setValue(I,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(gt.envMapIntensity.value=F.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=z5()),Sn){if(ct.setValue(I,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&M2(gt,Kn),Se&&G.fog===!0&&Pe.refreshFogUniforms(gt,Se),Pe.refreshMaterialUniforms(gt,G,te,K,T.state.transmissionRenderTarget[M.id]),Ae.needsLights&&Ae.lightProbeGrid){const ht=Ae.lightProbeGrid;gt.probesSH.value=ht.texture,gt.probesMin.value.copy(ht.boundingBox.min),gt.probesMax.value.copy(ht.boundingBox.max),gt.probesResolution.value.copy(ht.resolution)}Ur.upload(I,sa(Ae),gt,J)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ur.upload(I,sa(Ae),gt,J),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ct.setValue(I,"center",V.center),ct.setValue(I,"modelViewMatrix",V.modelViewMatrix),ct.setValue(I,"normalMatrix",V.normalMatrix),ct.setValue(I,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const ht=G.uniformsGroups;for(let bn=0,$n=ht.length;bn<$n;bn++){const la=ht[bn];ee.update(la,zt),ee.bind(la,zt)}}return zt}function M2(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.sunLights.needsUpdate=F,M.sunLightShadows.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function S2(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(M,F,X){const G=H.get(M);G.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),H.get(M.texture).__webglTexture=F,H.get(M.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:X,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,F){const X=H.get(M);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(M,F=0,X=0){ie=M,q=F,W=X;let G=null,V=!1,Se=!1;if(M){const Me=H.get(M);if(Me.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(I.FRAMEBUFFER,Me.__webglFramebuffer),Q.copy(M.viewport),Ee.copy(M.scissor),ye=M.scissorTest,g.viewport(Q),g.scissor(Ee),g.setScissorTest(ye),Y=-1;return}else if(Me.__webglFramebuffer===void 0)J.setupRenderTarget(M);else if(Me.__hasExternalTextures)J.rebindTextures(M,H.get(M.texture).__webglTexture,H.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ye=M.depthTexture;if(Me.__boundDepthTexture!==Ye){if(Ye!==null&&H.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(M)}}const Re=M.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Se=!0);const De=H.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(De[F])?G=De[F][X]:G=De[F],V=!0):M.samples>0&&J.useMultisampledRTT(M)===!1?G=H.get(M).__webglMultisampledFramebuffer:Array.isArray(De)?G=De[X]:G=De,Q.copy(M.viewport),Ee.copy(M.scissor),ye=M.scissorTest}else Q.copy(be).multiplyScalar(te).floor(),Ee.copy(Ie).multiplyScalar(te).floor(),ye=Qe;if(X!==0&&(G=O),g.bindFramebuffer(I.FRAMEBUFFER,G)&&g.drawBuffers(M,G),g.viewport(Q),g.scissor(Ee),g.setScissorTest(ye),V){const Me=H.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,X)}else if(Se){const Me=F;for(let Re=0;Re<M.textures.length;Re++){const De=H.get(M.textures[Re]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Re,De.__webglTexture,X,Me)}}else if(M!==null&&X!==0){const Me=H.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Me.__webglTexture,X)}Y=-1};function aa(M){const F=H.get(M);return(F.__readFormat!==M.format||F.__readType!==M.type)&&(F.__readFormat=M.format,F.__readType=M.type,F.__formatReadable=w.textureFormatReadable(M.format),F.__typeReadable=w.textureTypeReadable(M.type)),F}this.readRenderTargetPixels=function(M,F,X,G,V,Se,we,Me=0){if(!(M&&M.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re){g.bindFramebuffer(I.FRAMEBUFFER,Re);try{const De=M.textures[Me],Ye=De.format,$e=De.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Me);const Ce=aa(De);if(Ce.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-G&&X>=0&&X<=M.height-V&&I.readPixels(F,X,G,V,oe.convert(Ye),oe.convert($e),Se)}finally{const De=ie!==null?H.get(ie).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(M,F,X,G,V,Se,we,Me=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=H.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Re=Re[we]),Re)if(F>=0&&F<=M.width-G&&X>=0&&X<=M.height-V){g.bindFramebuffer(I.FRAMEBUFFER,Re);const De=M.textures[Me],Ye=De.format,$e=De.type;M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Me);const Ce=aa(De);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ot),I.bufferData(I.PIXEL_PACK_BUFFER,Se.byteLength,I.STREAM_READ),I.readPixels(F,X,G,V,oe.convert(Ye),oe.convert($e),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);const _t=ie!==null?H.get(ie).__webglFramebuffer:null;g.bindFramebuffer(I.FRAMEBUFFER,_t);const ft=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await sl(I,ft,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ot),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Se),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ot),I.deleteSync(ft),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,F=null,X=0){const G=Math.pow(2,-X),V=Math.floor(M.image.width*G),Se=Math.floor(M.image.height*G),we=F!==null?F.x:0,Me=F!==null?F.y:0;J.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,we,Me,V,Se),g.unbindTexture()},this.copyTextureToTexture=function(M,F,X=null,G=null,V=0,Se=0){let we,Me,Re,De,Ye,$e,Ce,ot,_t;const ft=M.isCompressedTexture?M.mipmaps[Se]:M.image;if(X!==null)we=X.max.x-X.min.x,Me=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,De=X.min.x,Ye=X.min.y,$e=X.isBox3?X.min.z:0;else{const gt=Math.pow(2,-V);we=Math.floor(ft.width*gt),Me=Math.floor(ft.height*gt),M.isDataArrayTexture?Re=ft.depth:M.isData3DTexture?Re=Math.floor(ft.depth*gt):Re=1,De=0,Ye=0,$e=0}G!==null?(Ce=G.x,ot=G.y,_t=G.z):(Ce=0,ot=0,_t=0);const ut=oe.convert(F.format),At=oe.convert(F.type);let Ae;F.isData3DTexture?(J.setTexture3D(F,0),Ae=I.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(J.setTexture2DArray(F,0),Ae=I.TEXTURE_2D_ARRAY):(J.setTexture2D(F,0),Ae=I.TEXTURE_2D),g.activeTexture(I.TEXTURE0),g.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,F.flipY),g.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),g.pixelStorei(I.UNPACK_ALIGNMENT,F.unpackAlignment);const Lt=g.getParameter(I.UNPACK_ROW_LENGTH),rt=g.getParameter(I.UNPACK_IMAGE_HEIGHT),zt=g.getParameter(I.UNPACK_SKIP_PIXELS),en=g.getParameter(I.UNPACK_SKIP_ROWS),Sn=g.getParameter(I.UNPACK_SKIP_IMAGES);g.pixelStorei(I.UNPACK_ROW_LENGTH,ft.width),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ft.height),g.pixelStorei(I.UNPACK_SKIP_PIXELS,De),g.pixelStorei(I.UNPACK_SKIP_ROWS,Ye),g.pixelStorei(I.UNPACK_SKIP_IMAGES,$e);const Kn=M.isDataArrayTexture||M.isData3DTexture,ct=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const gt=H.get(M),yn=H.get(F),ht=H.get(gt.__renderTarget),bn=H.get(yn.__renderTarget);g.bindFramebuffer(I.READ_FRAMEBUFFER,ht.__webglFramebuffer),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let $n=0;$n<Re;$n++)Kn&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(M).__webglTexture,V,$e+$n),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(F).__webglTexture,Se,_t+$n)),I.blitFramebuffer(De,Ye,we,Me,Ce,ot,we,Me,I.DEPTH_BUFFER_BIT,I.NEAREST);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||H.has(M)){const gt=H.get(M),yn=H.get(F);g.bindFramebuffer(I.READ_FRAMEBUFFER,D),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,B);for(let ht=0;ht<Re;ht++)Kn?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,gt.__webglTexture,V,$e+ht):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,gt.__webglTexture,V),ct?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,yn.__webglTexture,Se,_t+ht):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,yn.__webglTexture,Se),V!==0?I.blitFramebuffer(De,Ye,we,Me,Ce,ot,we,Me,I.COLOR_BUFFER_BIT,I.NEAREST):ct?I.copyTexSubImage3D(Ae,Se,Ce,ot,_t+ht,De,Ye,we,Me):I.copyTexSubImage2D(Ae,Se,Ce,ot,De,Ye,we,Me);g.bindFramebuffer(I.READ_FRAMEBUFFER,null),g.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ct?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(Ae,Se,Ce,ot,_t,we,Me,Re,ut,At,ft.data):F.isCompressedArrayTexture?I.compressedTexSubImage3D(Ae,Se,Ce,ot,_t,we,Me,Re,ut,ft.data):I.texSubImage3D(Ae,Se,Ce,ot,_t,we,Me,Re,ut,At,ft):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Se,Ce,ot,we,Me,ut,At,ft.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Se,Ce,ot,ft.width,ft.height,ut,ft.data):I.texSubImage2D(I.TEXTURE_2D,Se,Ce,ot,we,Me,ut,At,ft);g.pixelStorei(I.UNPACK_ROW_LENGTH,Lt),g.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt),g.pixelStorei(I.UNPACK_SKIP_PIXELS,zt),g.pixelStorei(I.UNPACK_SKIP_ROWS,en),g.pixelStorei(I.UNPACK_SKIP_IMAGES,Sn),Se===0&&F.generateMipmaps&&I.generateMipmap(Ae),g.unbindTexture()},this.initRenderTarget=function(M){H.get(M).__webglFramebuffer===void 0&&J.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?J.setTextureCube(M,0):M.isData3DTexture?J.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?J.setTexture2DArray(M,0):J.setTexture2D(M,0),g.unbindTexture()},this.resetState=function(){q=0,W=0,ie=null,g.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const Ni=new U;function Vt(i,e,t,n,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;Ni.copy(e),Ni[n]=0,Ni.normalize();const c=.5*o/(o+a),d=1-Ni.angleTo(i)/l;return Math.sign(Ni[t])===1?d*c:a/(o+a)+c+c*(1-d)}class Yo extends Ti{constructor(e=1,t=1,n=1,r=2,s=.1){const o=r*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:r,radius:s},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const l=new U,c=new U,d=new U(e,t,n).divideScalar(2).subScalar(s),f=this.attributes.position.array,u=this.attributes.normal.array,p=this.attributes.uv.array,x=f.length/6,b=new U,m=.5/o;for(let h=0,y=0;h<f.length;h+=3,y+=2)switch(l.fromArray(f,h),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[h+0]=d.x*Math.sign(l.x)+c.x*s,f[h+1]=d.y*Math.sign(l.y)+c.y*s,f[h+2]=d.z*Math.sign(l.z)+c.z*s,u[h+0]=c.x,u[h+1]=c.y,u[h+2]=c.z,Math.floor(h/x)){case 0:b.set(1,0,0),p[y+0]=Vt(b,c,"z","y",s,n),p[y+1]=1-Vt(b,c,"y","z",s,t);break;case 1:b.set(-1,0,0),p[y+0]=1-Vt(b,c,"z","y",s,n),p[y+1]=1-Vt(b,c,"y","z",s,t);break;case 2:b.set(0,1,0),p[y+0]=1-Vt(b,c,"x","z",s,e),p[y+1]=Vt(b,c,"z","x",s,n);break;case 3:b.set(0,-1,0),p[y+0]=1-Vt(b,c,"x","z",s,e),p[y+1]=1-Vt(b,c,"z","x",s,n);break;case 4:b.set(0,0,1),p[y+0]=1-Vt(b,c,"x","y",s,e),p[y+1]=1-Vt(b,c,"y","x",s,t);break;case 5:b.set(0,0,-1),p[y+0]=Vt(b,c,"x","y",s,e),p[y+1]=1-Vt(b,c,"y","x",s,t);break}}static fromJSON(e){return new Yo(e.width,e.height,e.depth,e.segments,e.radius)}}const V5=448,H5=224,k5=JSON.parse("[2707,-1,27,-2,402,-1,11,-2,2,-1,23,-2,401,-1,44,-2,118,-1,1,-2,281,-1,49,-2,116,-1,7,-2,271,-1,51,-2,112,-1,29,-2,253,-1,63,-2,95,-1,8,-2,6,-1,8,-2,7,-1,20,-2,239,-1,66,-2,88,-1,19,-2,2,-1,9,-2,11,-1,18,-2,236,-1,46,-2,4,-1,7,-2,94,-1,34,-2,9,-1,9,-2,247,-1,43,-2,2,-1,5,-2,99,-1,36,-2,6,-1,10,-2,252,-1,44,-2,105,-1,52,-2,244,-1,60,-2,88,-1,60,-2,239,-1,63,-2,97,-1,58,-2,231,-1,67,-2,43,-1,2,-2,5,-1,2,-2,45,-1,58,-2,227,-1,78,-2,1,-1,4,-2,1,-1,11,-2,7,-1,15,-2,49,-1,58,-2,226,-1,83,-2,2,-1,4,-2,1,-1,23,-2,6,-1,3,-2,15,-1,3,-2,5,-1,5,-2,15,-1,56,-2,231,-1,108,-2,1,-1,44,-2,8,-1,59,-2,229,-1,109,-2,4,-1,30,-2,8,-1,1,-2,8,-1,62,-2,99,-1,4,-2,124,-1,145,-2,5,-1,1,-2,7,-1,68,-2,2,-1,9,-2,84,-1,4,-2,120,-1,149,-2,3,-1,1,-2,7,-1,87,-2,3,-1,3,-2,12,-1,8,-2,49,-1,7,-2,109,-1,159,-2,2,-1,2,-2,7,-1,118,-2,7,-1,2,-2,38,-1,9,-2,101,-1,167,-2,3,-1,123,-2,2,-1,8,-2,34,-1,12,-2,90,-1,4,-2,1,-1,171,-2,2,-1,139,-2,19,-1,2,-2,6,-1,17,-2,82,-1,181,-2,3,-1,143,-2,11,-1,35,-2,3,-1,13,-2,23,-1,4,-2,31,-1,184,-2,4,-1,142,-2,7,-1,38,-2,1,-1,16,-2,4,-1,9,-2,4,-1,23,-2,3,-1,199,-2,2,-1,246,-2,1,-1,200,-2,2,-1,451,-2,2,-1,4912,-2,7,1,438,-2,8,1,439,-2,1,1,1,-2,5,1,441,-2,7,1,439,-2,8,1,10,-2,4,1,427,-2,7,1,440,-2,9,1,439,-2,10,1,170,-2,2,3,266,-2,11,1,437,-2,12,1,438,-2,9,1,437,-2,10,1,291,-2,5,9,143,-2,10,1,291,-2,5,9,142,-2,12,1,290,-2,4,9,144,-2,10,1,292,-2,4,9,142,-2,11,1,261,-2,3,9,28,-2,4,9,140,-2,11,1,1,-2,1,1,260,-2,3,9,29,-2,3,9,140,-2,11,1,261,-2,5,9,29,-2,3,9,1,-2,1,9,137,-2,15,1,295,-2,2,9,136,-2,15,1,294,-2,3,9,137,-2,13,1,295,-2,5,9,135,-2,19,1,248,-2,8,9,33,-2,5,9,134,-2,21,1,245,-2,13,9,30,-2,2,9,138,-2,20,1,245,-2,13,9,30,-2,1,9,140,-2,19,1,244,-2,14,9,29,-2,1,9,141,-2,18,1,217,-2,2,9,25,-2,16,9,27,-2,1,9,142,-2,17,1,1,-2,5,1,90,-2,4,4,116,-2,6,9,19,-2,2,9,1,-2,17,9,171,-2,23,1,89,-2,11,4,110,-2,10,9,14,-2,3,9,1,-2,17,9,170,-2,24,1,87,-2,13,4,109,-2,12,9,11,-2,23,9,169,-2,25,1,87,-2,14,4,107,-2,17,9,3,-2,26,9,169,-2,26,1,85,-2,16,4,106,-2,47,9,168,-2,27,1,83,-2,17,4,105,-2,48,9,168,-2,27,1,83,-2,18,4,104,-2,48,9,168,-2,28,1,81,-2,20,4,103,-2,48,9,169,-2,28,1,79,-2,21,4,102,-2,49,9,169,-2,28,1,79,-2,22,4,101,-2,49,9,169,-2,28,1,79,-2,22,4,100,-2,50,9,169,-2,28,1,78,-2,23,4,15,-2,1,4,85,-2,48,9,170,-2,29,1,77,-2,26,4,10,-2,5,4,82,-2,48,9,171,-2,32,1,74,-2,26,4,10,-2,5,4,82,-2,47,9,173,-2,35,1,70,-2,26,4,10,-2,5,4,83,-2,46,9,173,-2,36,1,69,-2,26,4,10,-2,6,4,82,-2,44,9,21,-2,1,9,153,-2,36,1,68,-2,27,4,10,-2,6,4,84,-2,42,9,19,-2,2,9,154,-2,37,1,66,-2,27,4,12,-2,5,4,87,-2,38,9,19,-2,1,9,156,-2,37,1,66,-2,28,4,11,-2,6,4,89,-2,34,9,177,-2,38,1,65,-2,29,4,10,-2,6,4,90,-2,31,9,178,-2,39,1,64,-2,31,4,9,-2,6,4,91,-2,30,9,39,-2,1,9,137,-2,40,1,64,-2,32,4,8,-2,7,4,90,-2,21,9,2,-2,7,9,175,-2,42,1,64,-2,34,4,6,-2,7,4,92,-2,18,9,4,-2,5,9,27,-2,1,9,14,-2,1,9,131,-2,45,1,63,-2,35,4,8,-2,5,4,92,-2,15,9,6,-2,5,9,173,-2,46,1,63,-2,36,4,8,-2,4,4,93,-2,4,9,1,-2,8,9,7,-2,5,9,26,-2,1,9,145,-2,47,1,63,-2,36,4,9,-2,2,4,95,-2,2,9,2,-2,8,9,7,-2,3,9,174,-2,47,1,64,-2,34,4,11,-2,1,4,100,-2,8,9,6,-2,3,9,173,-2,49,1,64,-2,33,4,11,-2,1,4,101,-2,7,9,6,-2,2,9,174,-2,49,1,64,-2,33,4,115,-2,1,9,11,-2,1,9,173,-2,51,1,63,-2,33,4,301,-2,52,1,61,-2,34,4,99,-2,1,8,4,-2,1,8,29,-2,3,9,163,-2,54,1,60,-2,33,4,105,-2,2,8,21,-2,1,9,5,-2,3,9,14,-2,1,9,149,-2,54,1,60,-2,33,4,93,-2,2,8,2,-2,2,8,1,-2,2,8,1,-2,1,8,4,-2,1,8,17,-2,1,8,2,9,4,-2,3,9,164,-2,56,1,59,-2,33,4,85,-2,7,8,31,-2,3,8,9,9,13,-2,1,9,150,-2,57,1,59,-2,33,4,82,-2,5,8,2,-2,2,8,32,-2,3,8,8,9,164,-2,57,1,59,-2,33,4,84,-2,2,8,33,-2,1,8,4,-2,3,8,9,9,1,-2,3,9,159,-2,57,1,59,-2,34,4,80,-2,3,8,17,-2,1,8,2,-2,1,8,18,-2,4,8,7,9,6,-2,1,9,3,-2,1,9,154,-2,54,1,61,-2,35,4,79,-2,4,8,17,-2,1,8,1,-2,2,8,15,-2,7,8,6,9,8,-2,2,9,157,-2,52,1,61,-2,37,4,77,-2,5,8,11,-2,2,8,4,-2,3,8,5,-2,1,8,4,-2,1,8,2,-2,10,8,4,9,10,-2,1,9,159,-2,47,1,64,-2,38,4,76,-2,6,8,5,-2,8,8,3,-2,2,8,1,-2,1,8,12,-2,3,8,2,-2,6,8,1,9,12,-2,1,9,158,-2,46,1,67,-2,39,4,75,-2,4,8,7,-2,8,8,3,-2,3,8,13,-2,3,8,3,-2,3,8,174,-2,44,1,68,-2,41,4,73,-2,5,8,6,-2,10,8,3,-2,1,8,1,-2,2,8,10,-2,4,8,181,-2,40,1,71,-2,42,4,71,-2,5,8,7,-2,10,8,202,-2,37,1,75,-2,42,4,69,-2,6,8,7,-2,10,8,3,-2,3,8,1,-2,2,8,4,-2,1,8,189,-2,37,1,74,-2,43,4,68,-2,5,8,8,-2,12,8,2,-2,1,8,4,-2,1,8,3,-2,1,8,190,-2,35,1,75,-2,45,4,65,-2,5,8,1,-2,2,8,8,-2,9,8,204,-2,29,1,3,2,2,1,75,-2,46,4,63,-2,3,8,2,-2,3,8,10,-2,7,8,206,-2,29,1,2,2,1,1,76,-2,47,4,61,-2,3,8,3,-2,3,8,12,-2,5,8,206,-2,28,1,4,2,54,-2,1,4,16,-2,2,4,2,-2,49,4,59,-2,3,8,3,-2,4,8,13,-2,5,8,205,-2,28,1,2,2,54,-2,11,4,7,-2,54,4,59,-2,2,8,4,-2,3,8,15,-2,5,8,204,-2,25,1,58,-2,15,4,4,-2,55,4,64,-2,3,8,16,-2,2,8,9,-2,1,8,195,-2,24,1,59,-2,76,4,37,-2,3,6,22,-2,2,8,19,-2,1,8,8,-2,2,8,191,-2,1,1,3,-2,24,1,57,-2,78,4,37,-2,3,6,22,-2,1,8,27,-2,5,8,187,-2,4,1,2,-2,23,1,59,-2,79,4,33,-2,1,6,2,-2,2,6,21,-2,3,8,28,-2,1,8,1,-2,2,8,187,-2,2,1,2,-2,3,1,2,-2,19,1,59,-2,46,4,2,5,32,4,32,-2,4,6,1,-2,1,6,21,-2,1,8,7,-2,2,8,24,-2,1,8,184,-2,4,1,9,-2,4,1,1,-2,11,1,1,-2,1,1,58,-2,47,4,2,5,1,4,5,5,1,4,1,5,24,4,32,-2,4,6,32,-2,2,8,20,-2,1,8,187,-2,3,1,10,-2,9,1,67,-2,47,4,11,5,1,4,2,5,11,4,4,-2,6,4,30,-2,5,6,24,-2,1,8,5,-2,6,8,13,-2,1,8,3,-2,2,8,1,-2,1,8,185,-2,3,1,13,-2,2,1,69,-2,48,4,12,5,1,4,3,5,9,4,9,-2,2,4,30,-2,5,6,24,-2,1,8,4,-2,8,8,19,-2,1,8,184,-2,4,1,83,-2,49,4,16,5,10,4,39,-2,7,6,23,-2,1,8,3,-2,9,8,19,-2,1,8,181,-2,7,1,83,-2,49,4,17,5,8,4,1,-2,3,5,36,-2,7,6,22,-2,3,8,1,-2,10,8,14,-2,1,8,2,-2,1,8,180,-2,10,1,83,-2,49,4,17,5,7,4,2,-2,7,5,32,-2,7,6,22,-2,14,8,14,-2,3,8,180,-2,11,1,82,-2,50,4,17,5,6,4,2,-2,9,5,30,-2,8,6,22,-2,14,8,14,-2,1,8,181,-2,11,1,84,-2,51,4,16,5,3,4,4,-2,12,5,27,-2,8,6,22,-2,13,8,14,-2,2,8,174,-2,13,1,89,-2,51,4,16,5,3,4,4,-2,12,5,26,-2,11,6,15,-2,3,8,1,-2,13,8,16,-2,2,8,170,-2,16,1,90,-2,50,4,16,5,2,4,5,-2,16,5,22,-2,12,6,15,-2,15,8,17,-2,2,8,168,-2,18,1,13,-2,2,1,11,-2,2,1,62,-2,50,4,18,5,4,-2,18,5,21,-2,13,6,13,-2,15,8,18,-2,2,8,166,-2,11,1,5,-2,5,1,19,-2,5,1,65,-2,50,4,17,5,4,-2,20,5,20,-2,14,6,12,-2,15,8,3,-2,2,7,117,-2,1,0,62,-2,11,1,7,-2,4,1,18,-2,3,1,68,-2,24,4,3,5,22,4,17,5,5,-2,21,5,19,-2,15,6,11,-2,15,8,4,-2,2,7,179,-2,10,1,8,-2,5,1,12,-2,3,1,72,-2,23,4,7,5,18,4,19,5,3,-2,24,5,18,-2,17,6,7,-2,18,8,4,-2,1,7,113,-2,1,0,65,-2,10,1,10,-2,3,1,10,-2,3,1,74,-2,22,4,9,5,15,4,21,5,3,-2,25,5,13,-2,21,6,7,-2,11,8,1,7,7,8,3,-2,1,7,111,-2,1,0,67,-2,9,1,17,-2,1,1,3,-2,4,1,76,-2,5,5,15,4,13,5,11,4,23,5,3,-2,25,5,12,-2,27,6,1,-2,1,6,9,8,3,7,6,8,8,7,175,-2,10,1,18,-2,4,1,80,-2,4,5,14,4,16,5,3,4,2,5,2,4,24,5,3,-2,26,5,12,-2,30,6,8,8,6,7,2,8,12,7,6,-2,1,7,159,-2,2,1,3,-2,11,1,102,-2,5,5,11,4,48,5,4,-2,25,5,12,-2,31,6,7,8,23,7,4,-2,1,7,158,-2,1,1,4,-2,12,1,103,-2,4,5,10,4,49,5,2,-2,18,5,4,-2,3,5,13,-2,34,6,4,8,26,7,2,-2,2,7,156,-2,2,1,3,-2,14,1,20,-2,1,0,82,-2,3,5,8,4,50,5,3,-2,18,5,5,-2,1,5,5,-2,2,5,4,6,2,-2,35,6,4,8,26,7,160,-2,1,1,3,-2,14,1,1,0,19,-2,2,0,82,-2,7,5,3,4,50,5,3,-2,17,5,9,-2,6,5,41,6,5,8,26,7,157,-2,3,1,2,-2,13,1,3,0,19,-2,2,0,83,-2,6,5,1,4,52,5,3,-2,17,5,4,-2,3,5,2,-2,8,5,40,6,4,8,27,7,155,-2,3,1,2,-2,14,1,3,0,18,-2,3,0,84,-2,57,5,3,-2,17,5,4,-2,13,5,32,6,1,7,10,6,1,8,28,7,156,-2,1,1,2,-2,14,1,5,0,17,-2,3,0,86,-2,74,5,4,-2,13,5,29,6,10,7,4,6,32,7,153,-2,1,1,2,-2,11,1,1,0,2,1,8,0,5,-2,2,0,8,-2,2,0,88,-2,53,5,1,-2,19,5,3,-2,13,5,28,6,15,7,1,6,32,7,152,-2,1,1,3,-2,10,1,19,0,4,-2,6,0,89,-2,88,5,26,6,49,7,152,-2,2,1,2,-2,10,1,30,0,89,-2,34,5,3,-2,52,5,22,6,53,7,151,-2,5,1,5,0,2,1,32,0,89,-2,31,5,6,-2,6,5,12,-2,33,5,22,6,54,7,10,-2,2,7,138,-2,3,1,43,0,88,-2,30,5,8,-2,3,5,14,-2,33,5,23,6,52,7,11,-2,2,7,138,-2,48,0,88,-2,24,5,30,-2,32,5,22,6,52,7,11,-2,3,7,1,-2,1,7,134,-2,51,0,88,-2,22,5,31,-2,32,5,22,6,52,7,13,-2,2,7,1,-2,4,7,128,-2,55,0,87,-2,21,5,18,-2,1,2,8,-2,2,5,3,-2,31,5,21,6,51,7,9,-2,3,7,4,-2,10,7,123,-2,57,0,93,-2,15,5,31,-2,31,5,3,3,17,6,53,7,8,-2,4,7,8,-2,6,7,121,-2,58,0,86,-2,2,2,8,-2,11,5,15,-2,1,2,7,-2,2,5,2,-2,3,5,2,-2,30,5,5,3,14,6,57,7,6,-2,4,7,9,-2,5,7,121,-2,58,0,83,-2,9,2,18,-2,3,2,8,-2,2,2,5,-2,28,5,5,-2,1,3,6,5,8,3,1,6,3,3,3,6,2,3,2,6,55,7,1,-2,3,7,5,-2,4,7,11,-2,3,7,120,-2,57,0,1,-2,1,0,83,-2,10,2,27,-2,4,2,3,-2,28,5,6,-2,21,3,1,6,4,3,54,7,8,-2,5,7,13,-2,2,7,119,-2,60,0,82,-2,12,2,20,-2,1,2,5,-2,3,2,4,-2,28,5,6,-2,25,3,55,7,9,-2,3,7,15,-2,2,7,118,-2,62,0,81,-2,11,2,10,-2,2,2,7,-2,2,2,4,-2,3,2,5,-2,29,5,4,-2,26,3,57,7,2,-2,3,7,1,-2,4,7,15,-2,3,7,116,-2,63,0,81,-2,12,2,9,-2,2,2,6,-2,4,2,2,-2,6,2,2,-2,2,5,2,-2,26,5,4,-2,29,3,55,7,2,-2,9,7,13,-2,2,7,117,-2,66,0,78,-2,14,2,13,-2,4,2,4,-2,5,2,1,3,1,2,1,3,1,2,3,5,3,-2,7,5,5,-2,8,5,1,3,1,5,6,-2,31,3,63,7,132,-2,67,0,77,-2,15,2,7,-2,1,2,2,-2,4,2,6,-2,4,2,7,3,17,-2,5,5,3,3,5,-2,35,3,62,7,12,-2,2,7,117,-2,67,0,76,-2,16,2,9,-2,4,2,5,-2,6,2,7,3,16,-2,3,5,5,3,5,-2,36,3,63,7,1,3,1,-2,2,3,7,-2,5,7,115,-2,67,0,5,-2,1,0,79,-2,12,2,3,-2,3,2,4,-2,8,2,8,3,13,-2,10,3,4,-2,37,3,63,7,5,3,8,-2,5,7,113,-2,70,0,2,-2,3,0,77,-2,17,2,4,-2,8,2,9,3,5,-2,2,3,4,-2,11,3,6,-2,36,3,63,7,7,3,6,-2,2,7,116,-2,78,0,74,-2,17,2,2,-2,9,2,11,3,3,-2,5,3,2,-2,12,3,7,-2,36,3,64,7,5,3,123,-2,74,0,1,-2,1,0,2,-2,1,0,73,-2,23,2,17,3,2,-2,4,3,4,-2,13,3,5,-2,37,3,64,7,5,3,6,-2,1,3,115,-2,66,0,1,-2,6,0,11,-2,1,0,2,-2,1,0,63,-2,23,2,27,3,2,-2,54,3,64,7,5,3,5,-2,1,3,115,-2,2,0,1,-2,65,0,1,-2,5,0,7,-2,8,0,61,-2,26,2,86,3,56,7,2,3,3,7,5,3,120,-2,1,0,1,-2,67,0,2,-2,4,0,6,-2,7,0,61,-2,27,2,87,3,55,7,11,3,3,-2,1,3,112,-2,3,0,1,-2,70,0,5,-2,2,0,5,-2,3,0,1,-2,1,0,65,-2,18,2,94,3,25,7,4,3,22,7,14,3,2,-2,3,3,108,-2,77,0,4,-2,4,0,3,-2,2,0,63,-2,1,2,8,-2,13,2,98,3,5,7,4,3,6,7,2,3,3,7,15,3,11,7,16,3,2,-2,2,3,110,-2,86,0,2,-2,2,0,63,-2,7,2,1,-2,16,2,104,3,5,7,22,3,9,7,17,3,2,-2,2,3,110,-2,58,0,3,-2,28,0,58,-2,2,2,4,-2,7,2,4,-2,13,2,105,3,1,7,26,3,7,7,21,3,17,-2,2,3,91,-2,58,0,4,-2,29,0,57,-2,4,2,2,-2,8,2,4,-2,12,2,132,3,7,7,21,3,16,-2,3,3,85,-2,2,0,3,-2,59,0,4,-2,28,0,58,-2,4,2,2,-2,1,2,1,-2,4,2,7,-2,11,2,134,3,2,7,21,3,2,-2,1,3,16,-2,5,3,87,-2,59,0,4,-2,28,0,60,-2,4,2,3,-2,4,2,11,-2,3,2,1,-2,1,2,3,-2,10,3,3,2,138,3,7,-2,1,3,16,-2,6,3,44,-2,2,0,39,-2,61,0,4,-2,25,0,63,-2,2,2,2,-2,4,2,13,-2,1,2,2,-2,1,2,11,-2,2,3,5,2,136,3,25,-2,8,3,45,-2,3,0,34,-2,56,0,12,-2,21,0,68,-2,4,2,13,-2,2,2,2,-2,4,2,8,-2,8,2,136,3,24,-2,8,3,47,-2,3,0,31,-2,55,0,15,-2,18,0,70,-2,4,2,13,-2,3,2,2,-2,5,2,6,-2,9,2,137,3,22,-2,9,3,48,-2,3,0,2,-2,2,0,24,-2,51,0,19,-2,19,0,70,-2,4,2,15,-2,1,2,2,-2,6,2,6,-2,1,2,2,-2,4,2,140,3,21,-2,8,3,49,-2,4,0,22,-2,54,0,19,-2,19,0,71,-2,3,2,12,-2,2,2,4,-2,7,2,9,-2,4,2,141,3,22,-2,5,3,44,-2,11,0,18,-2,55,0,21,-2,11,0,4,-2,3,0,86,-2,5,2,1,-2,9,2,7,-2,6,2,142,3,11,-2,4,3,7,-2,4,3,38,-2,1,0,2,-2,1,0,1,-2,12,0,1,-2,4,0,9,-2,58,0,22,-2,9,0,6,-2,1,0,87,-2,16,2,5,-2,1,2,7,-2,156,3,8,-2,6,3,36,-2,17,0,1,-2,4,0,2,-2,65,0,20,-2,10,0,30,-2,3,0,60,-2,16,2,5,-2,8,2,159,3,5,-2,1,3,2,-2,11,3,28,-2,90,0,20,-2,8,0,28,-2,8,0,59,-2,15,2,6,-2,10,2,158,3,3,-2,4,3,2,-2,12,3,26,-2,91,0,11,-2,1,0,3,-2,1,0,2,-2,3,0,1,-2,2,0,6,-2,2,0,21,-2,9,0,60,-2,15,2,4,-2,13,2,164,3,1,-2,16,3,23,-2,92,0,24,-2,5,0,1,-2,2,0,18,-2,11,0,61,-2,14,2,4,-2,12,2,184,3,25,-2,88,0,4,-2,4,0,1,-2,3,0,10,-2,9,0,16,-2,14,0,24,-2,6,2,33,-2,13,2,3,-2,10,2,184,3,8,-2,3,3,8,-2,6,0,1,-2,91,0,2,-2,4,0,5,-2,16,0,17,-2,14,0,22,-2,11,2,31,-2,14,2,3,-2,7,2,6,3,3,-2,2,3,2,-2,173,3,1,-2,1,3,1,-2,1,3,1,-2,6,3,5,-2,101,0,1,-2,1,0,14,-2,8,0,3,-2,2,0,13,-2,17,0,20,-2,11,2,33,-2,12,2,4,-2,6,2,6,3,6,-2,187,3,6,-2,2,0,3,-2,94,0,1,-2,1,0,13,-2,8,0,1,-2,6,0,10,-2,23,0,15,-2,2,2,6,-2,3,2,34,-2,21,2,5,3,4,-2,4,3,2,-2,2,3,1,-2,34,3,1,-2,140,3,14,-2,103,0,10,-2,12,0,12,-2,25,0,59,-2,19,2,15,3,4,-2,2,3,3,-2,30,3,2,-2,136,3,15,-2,62,0,9,-2,7,0,4,-2,3,0,1,-2,9,0,3,-2,5,0,6,-2,3,0,2,-2,10,0,15,-2,26,0,59,-2,18,2,13,3,5,-2,3,3,4,-2,29,3,2,-2,132,3,16,-2,64,0,2,-2,4,0,4,-2,1,0,15,-2,4,0,1,-2,2,0,3,-2,6,0,7,-2,8,0,22,-2,30,0,55,-2,14,2,12,3,19,-2,2,3,4,-2,2,3,2,-2,7,3,3,-2,5,3,2,-2,131,3,21,-2,30,0,5,-2,11,0,1,-2,1,0,1,-2,4,0,5,-2,17,0,4,-2,4,0,2,-2,5,0,7,-2,4,0,6,-2,12,0,16,-2,3,0,2,-2,33,0,53,-2,15,2,3,3,34,-2,4,3,4,-2,7,3,2,-2,108,3,1,-2,5,3,1,-2,2,3,3,-2,9,3,25,-2,17,0,25,-2,2,0,18,-2,13,0,7,-2,6,0,5,-2,24,0,17,-2,35,0,62,-2,9,2,45,-2,8,3,1,-2,107,3,25,-2,3,3,25,-2,3,0,39,-2,2,0,6,-2,16,0,10,-2,5,0,5,-2,21,0,23,-2,34,0,1,-2,4,0,61,-2,1,2,32,-2,3,3,13,-2,7,3,2,-2,70,3,2,-2,25,3,33,-2,2,3,67,-2,7,0,2,-2,13,0,1,-2,3,0,6,-2,5,0,8,-2,19,0,24,-2,40,0,93,-2,5,3,16,-2,5,3,3,-2,1,3,1,-2,65,3,14,-2,13,3,105,-2,13,0,1,-2,3,0,2,-2,1,0,1,-2,4,0,3,-2,7,0,2,-2,3,0,4,-2,5,0,1,-2,6,0,32,-2,40,0,93,-2,5,3,16,-2,4,3,3,-2,1,3,6,-2,60,3,14,-2,3,3,117,-2,10,0,11,-2,2,0,5,-2,5,0,2,-2,6,0,3,-2,3,0,3,-2,2,0,1,-2,4,0,27,-2,44,0,93,-2,4,3,29,-2,41,3,1,-2,6,3,5,-2,5,3,17,-2,3,3,116,-2,4,0,79,-2,47,0,93,-2,4,3,34,-2,30,3,165,-2,6,0,1,-2,7,0,6,-2,4,0,2,-2,3,0,2,-2,16,0,26,-2,47,0,96,-2,6,3,33,-2,32,3,30,-2,9,3,2,-2,5,3,116,-2,6,0,2,-2,5,0,4,-2,6,0,6,-2,4,0,37,-2,50,0,99,-2,8,3,34,-2,26,3,29,-2,6,3,120,-2,6,0,8,-2,1,0,15,-2,7,0,3,-2,14,0,9,-2,62,0,108,-2,3,3,41,-2,7,3,169,-2,1,0,5,-2,2,0,19,-2,2,0,7,-2,13,0,10,-2,63,0,42,-2,4,2,5,-2,2,2,100,-2,2,3,188,-2,4,0,3,-2,3,0,3,-2,5,0,2,-2,15,0,3,-2,66,0,40,-2,8,2,4,-2,2,2,95,-2,7,3,186,-2,2,0,12,-2,9,0,2,-2,12,0,10,-2,60,0,38,-2,12,2,92,-2,6,3,2,-2,3,3,199,-2,11,0,1,-2,20,0,5,-2,61,0,41,-2,3,2,1,-2,11,2,81,-2,9,3,205,-2,5,0,3,-2,26,0,3,-2,63,0,77,-2,2,3,1,-2,3,3,51,-2,7,3,212,-2,30,0,6,-2,50,0,3,-2,9,0,356,-2,4,0,1,-2,26,0,14,-2,1,0,4,-2,30,0,384,-2,4,0,34,-2,24,0,3838,-2]"),Bn={columns:V5,rows:H5,runs:k5};function W5(){const i=new Int8Array(Bn.columns*Bn.rows);let e=0;for(let t=0;t<Bn.runs.length;t+=2)i.fill(Bn.runs[t+1],e,e+Bn.runs[t]),e+=Bn.runs[t];if(e!==i.length)throw new Error("Invalid globe region grid.");return i}const Hn=(i,e,t)=>new U(Math.cos(i*Math.PI/180)*Math.sin(e*Math.PI/180),Math.sin(i*Math.PI/180),Math.cos(i*Math.PI/180)*Math.cos(e*Math.PI/180)).multiplyScalar(t);function X5(){const{columns:i,rows:e}=Bn,t=360/i,n=180/e,r=W5(),s=new Ge("#8bb99a"),o=new Ge("#c1d6a3"),a=new Ge("#eddbb7"),l=new Ge("#edf2ed"),c=new Ge("#d8dfca"),d=[];for(let _=0;_<e;_++)for(let A=0;A<i;A++){const C=-90+(_+.5)*n,L=-180+(A+.5)*t,N=r[_*i+A];if(N===-2){d.push({region:N,height:2.035,color:s,lat:C,lon:L,dry:!1});continue}const O=(Q,Ee,ye,Ke)=>Math.max(0,1-((L-Q)/ye)**2-((C-Ee)/Ke)**2),D=Math.max(O(16,24,49,18),O(48,27,28,15),O(134,-25,20,14)),B=D>.45,q=Math.max(O(86,31,17,7),O(-72,-20,6,26)*.85,O(-111,42,8,19)*.65,O(10,46,8,4)*.65,O(35,-4,5,15)*.45,O(-4,31,13,5)*.45,O(138,37,5,10)*.5),W=2.065+q*.095,ie=(Math.sin(L*.08)+Math.cos(C*.12))*.5,Y=yt.smoothstep(Math.abs(C),10,40),Z=s.clone().lerp(o,Y*.85);Z.lerp(a,yt.smoothstep(D,.12,.72)),Z.lerp(l,yt.smoothstep(Math.abs(C),61,76)),q>.72&&Z.lerp(c,yt.smoothstep(q,.72,1)*.8),Z.offsetHSL(0,0,ie*.018),d.push({region:N,height:W,color:Z,lat:C,lon:L,dry:B})}const f=[],u=[],p=[],x=(_,A,C)=>{const L=new U().subVectors(_[1],_[0]).cross(new U().subVectors(_[2],_[0])).normalize().negate();for(const N of[0,2,1,0,3,2]){const O=_[N],D=C?O.clone().normalize():L;f.push(O.x,O.y,O.z),u.push(D.x,D.y,D.z);const B=Array.isArray(A)?A[N]:A;p.push(B.r,B.g,B.b)}},b=(_,A)=>{const C=[[-1,-1],[-1,0],[0,-1],[0,0]].map(([O,D])=>d[yt.clamp(_+O,0,e-1)*i+yt.euclideanModulo(A+D,i)]).filter(O=>O.region!==-2),L=C.length?C.reduce((O,D)=>O+D.height,0)/C.length:2.035,N=new Ge(0,0,0);return C.forEach(O=>N.add(O.color)),C.length&&N.multiplyScalar(1/C.length),{height:L,color:N}},m=Array.from({length:(e+1)*i},(_,A)=>b(Math.floor(A/i),A%i)),h=(_,A)=>m[_*i+yt.euclideanModulo(A,i)],y=[];d.forEach((_,A)=>{if(_.region===-2)return;const C=Math.floor(A/i),L=A%i,N=-180+L*t,O=N+t,D=-90+C*n,B=D+n,q=[[D,N],[B,N],[B,O],[D,O]],W=[h(C,L),h(C+1,L),h(C+1,L+1),h(C,L+1)],ie=q.map(([Z,Q],Ee)=>Hn(Z,Q,W[Ee].height));x(ie,W.map(Z=>Z.color),!0);const Y=[d[C*i+(L+i-1)%i],d[(C+1)*i+L],d[C*i+(L+1)%i],d[(C-1)*i+L]];for(let Z=0;Z<4;Z++){if(Y[Z]&&Y[Z].region!==-2)continue;const Q=(Z+1)%4,Ee=q[Z],ye=q[Q];x([ie[Z],Hn(Ee[0],Ee[1],2.035),Hn(ye[0],ye[1],2.035),ie[Q]],_.color.clone().lerp(new Ge("#cdd4b9"),.3),!1)}y.push({position:Hn(_.lat,_.lon,W.reduce((Z,Q)=>Z+Q.height,0)/4),region:_.region,dry:_.dry})});const S=new Et;S.setAttribute("position",new st(f,3)),S.setAttribute("normal",new st(u,3)),S.setAttribute("color",new st(p,3)),S.computeBoundingSphere();const v=new Mi(2.035,160,112),E=[],T=v.getAttribute("position");for(let _=0;_<T.count;_++){const A=T.getY(_)/2.035,C=new Ge("#579bb7").lerp(new Ge("#86c6ce"),Math.pow(Math.max(0,1-Math.abs(A)),.7)*.65);E.push(C.r,C.g,C.b)}return v.setAttribute("color",new st(E,3)),{land:S,ocean:v,samples:y,heightAt:(_,A)=>{const C=yt.clamp(Math.floor((_+90)/n),0,e-1),L=yt.euclideanModulo(Math.floor((A+180)/t),i);if(d[C*i+L].region===-2)return 2.035;const N=yt.clamp((_+90)/n-C,0,1),O=yt.euclideanModulo((A+180)/t,1);return yt.lerp(yt.lerp(h(C,L).height,h(C,L+1).height,O),yt.lerp(h(C+1,L).height,h(C+1,L+1).height,O),N)}}}function q5(i){const e=i.getUTCFullYear(),t=Date.UTC(e,0,1),n=(Date.UTC(e+1,0,1)-t)/864e5,r=(i.getTime()-t)/864e5,s=2*Math.PI/n*(r-.5),o=229.18*(75e-6+.001868*Math.cos(s)-.032077*Math.sin(s)-.014615*Math.cos(2*s)-.040849*Math.sin(2*s)),a=.006918-.399912*Math.cos(s)+.070257*Math.sin(s)-.006758*Math.cos(2*s)+907e-6*Math.sin(2*s)-.002697*Math.cos(3*s)+.00148*Math.sin(3*s),d=(((720-(i.getUTCHours()*60+i.getUTCMinutes()+i.getUTCSeconds()/60+i.getUTCMilliseconds()/6e4)-o)/4+180)%360+360)%360-180,f=a*180/Math.PI,u=d*Math.PI/180;return{latitude:f,longitude:d,direction:{x:Math.cos(a)*Math.sin(u),y:Math.sin(a),z:Math.cos(a)*Math.cos(u)}}}function Y5(i){const e={value:new U},t={value:new at},n={value:new at},r={value:0},s=new z3("#fff8ee",2.05);i.add(s,s.target);let o=-1;const a=(c,d)=>{const f=Math.floor(c.getTime()/6e4);if(f!==o){const u=q5(c).direction;e.value.set(u.x,u.y,u.z),s.position.copy(e.value).multiplyScalar(12),o=f}i.updateMatrixWorld(!0),t.value.copy(i.matrixWorld),n.value.copy(i.matrixWorld).invert(),r.value=d},l=(c,d=!1,f=!1)=>(c.onBeforeCompile=u=>{Object.assign(u.uniforms,{uSolarDirection:e,uEarthToWorld:t,uWorldToEarth:n,uWaterTime:r}),u.vertexShader=`uniform mat4 uWorldToEarth; varying vec3 vEarthPosition;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
        vec4 earthVertex=vec4(transformed,1.0);
        #ifdef USE_INSTANCING
          earthVertex=instanceMatrix*earthVertex;
        #endif
        vEarthPosition=(uWorldToEarth*modelMatrix*earthVertex).xyz;
      `),u.fragmentShader=`
        float earthNoise(vec3 p){
          vec3 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);
          vec3 seed=vec3(127.1,311.7,74.7);
          return mix(mix(mix(fract(sin(dot(i,seed))*43758.5453),fract(sin(dot(i+vec3(1,0,0),seed))*43758.5453),f.x),
            mix(fract(sin(dot(i+vec3(0,1,0),seed))*43758.5453),fract(sin(dot(i+vec3(1,1,0),seed))*43758.5453),f.x),f.y),
            mix(mix(fract(sin(dot(i+vec3(0,0,1),seed))*43758.5453),fract(sin(dot(i+vec3(1,0,1),seed))*43758.5453),f.x),
            mix(fract(sin(dot(i+vec3(0,1,1),seed))*43758.5453),fract(sin(dot(i+vec3(1,1,1),seed))*43758.5453),f.x),f.y),f.z);
        }
      uniform vec3 uSolarDirection; uniform mat4 uEarthToWorld; uniform float uWaterTime; varying vec3 vEarthPosition;
`+u.fragmentShader,u.fragmentShader=u.fragmentShader.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        float sunHeight=dot(normalize(vEarthPosition),uSolarDirection);
        float dayAmount=smoothstep(-0.10,0.12,sunHeight);
        float lampsOn=1.0-smoothstep(-0.10,0.025,sunHeight);
        totalEmissiveRadiance*=lampsOn;
      `),f&&(u.fragmentShader=u.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
          float grain=earthNoise(vEarthPosition*65.0)*.55+earthNoise(vEarthPosition*180.0)*.30+earthNoise(vEarthPosition*420.0)*.15;
          diffuseColor.rgb*=.92+.16*grain;
        `)),d&&(u.fragmentShader=u.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
          vec3 p=vEarthPosition;
          vec3 radial=normalize(p);
          vec3 d1=normalize(vec3(0.8,0.3,0.5)),d2=normalize(vec3(-0.4,0.7,0.2)),d3=normalize(vec3(0.1,-0.3,0.9));
          float swell=sin(p.x*9.1+p.y*5.7)+sin(p.z*7.7-p.y*11.3);
          float crossSwell=sin(p.x*13.3-p.z*8.1)+sin(p.y*17.7+p.z*4.3);
          vec3 ripple=d1*cos(dot(p,d1)*112.0+4.2*swell-uWaterTime*.8)*.018
                    +d2*cos(dot(p,d2)*179.0+3.6*crossSwell+uWaterTime*.55)*.012
                    +d3*cos(dot(p,d3)*293.0+2.7*swell-uWaterTime*.35)*.007;
          ripple-=radial*dot(ripple,radial);
          normal=normalize(normal+mat3(viewMatrix)*mat3(uEarthToWorld)*ripple);
        `),u.fragmentShader=u.fragmentShader.replace("#include <clearcoat_normal_fragment_maps>",`#include <clearcoat_normal_fragment_maps>
          #ifdef USE_CLEARCOAT
            clearcoatNormal=normal;
          #endif
        `)),u.fragmentShader=u.fragmentShader.replace("#include <opaque_fragment>",`
        float nightRelief=.65+.35*max(dot(normal,normalize(vec3(-.35,.65,1.0))),0.0);
        vec3 nightColor=(diffuseColor.rgb*vec3(.14,.18,.24)+vec3(.009,.013,.021))*nightRelief;
        outgoingLight=mix(nightColor+outgoingLight*.18+totalEmissiveRadiance*.82,outgoingLight,dayAmount);
        float sunset=exp(-pow(sunHeight/.075,2.0));
        outgoingLight+=diffuseColor.rgb*vec3(.035,.019,.012)*sunset;
        ${d?`float skyReflection=pow(1.0-max(dot(normal,geometryViewDir),0.0),3.0);
          outgoingLight+=vec3(.05,.08,.10)*skyReflection*dayAmount;`:""}
        #include <opaque_fragment>
      `)},c.customProgramCacheKey=()=>d?"earth-daylight-water-v2":f?"earth-daylight-land-v2":"earth-daylight-v2",c);return a(new Date,0),{decorate:l,update:a,sunDirection:e,earthToWorld:t}}function p2(i,e,t=!1){const n=new _n,r=new Map,s=[];for(const l of i){if(l.parent)throw new Error("Batched roots must use parent-local coordinates and be detached");l.updateMatrixWorld(!0),l.traverse(c=>{if(!(c instanceof dt))return;const d=c.material;if(Array.isArray(d)||d.transparent){const p=c.clone(!1);p.matrixAutoUpdate=!1,s.push({source:c,render:p}),n.add(p);return}let f=r.get(c.geometry);f||(f=new Map,r.set(c.geometry,f));const u=f.get(d)??[];u.push(c),f.set(d,u)})}const o=[];for(const[l,c]of r)for(const[d,f]of c){const u=new Xl(l,d,f.length);t&&u.instanceMatrix.setUsage(nl),u.userData.instancePlaces=f.map(p=>p.userData.place),o.push({sources:f,render:u}),n.add(u)}const a=()=>{for(const l of i)l.updateMatrixWorld(!0);for(const{sources:l,render:c}of o)l.forEach((d,f)=>c.setMatrixAt(f,d.matrixWorld)),c.instanceMatrix.needsUpdate=!0;for(const{source:l,render:c}of s)c.matrix.copy(l.matrixWorld),c.matrixWorldNeedsUpdate=!0};a();for(const{render:l}of o)l.computeBoundingSphere(),t&&l.boundingSphere&&(l.boundingSphere.radius+=.05);return e.add(n),{group:n,update:a,dispose(){n.removeFromParent();for(const{render:l}of o)l.dispose()}}}function v1(i){var t;const e=i.instanceId===void 0?i.object.userData.place:(t=i.object.userData.instancePlaces)==null?void 0:t[i.instanceId];return typeof e=="number"?e:null}function Z5(i,e,t){const n=[],r=S=>(n.push(S),S),s=r(new kr(.009,.017,.16,7)),o=r(new Mi(1,10,7)),a=o.getAttribute("position");for(let S=0;S<a.count;S++){const v=a.getX(S),E=a.getY(S),T=a.getZ(S),P=1+.16*Math.sin(v*12+E*5)*Math.sin(T*9-E*4);a.setXYZ(S,v*P,E*P,T*P)}o.computeVertexNormals();const l=r(new Go(1,1,9)),c=["#739c73","#94b574","#aac486","#79a88b"].map(S=>t(S,{roughness:.88})),d=t("#a48b70",{roughness:1}),f=[],u=[],p=(S,v,E)=>Math.abs(Math.sin(S*127.1+v*311.7+E*73.3)*43758.5453)%1,x=new U(0,1,0);e.forEach(({position:S,region:v,dry:E},T)=>{if(v<0||E||Math.abs(S.y)>1.91||p(S.x,S.y,S.z)>.0065||zn.some(L=>S.angleTo(Hn(L.lat,L.lon,1))<.095))return;const P=new _n;P.position.copy(S),P.quaternion.setFromUnitVectors(x,S.clone().normalize()),P.scale.setScalar(.46+p(S.z,S.x,3)*.3),u.push(P);const _=new dt(s,d);_.position.y=.08,P.add(_);const A=new _n;if(A.position.y=.11,P.add(A),Math.abs(S.y)>1.45)for(let L=0;L<3;L++){const N=new dt(l,c[(T+L)%4]),O=.09-L*.018;N.scale.set(O,.15-L*.016,O),N.position.y=.055+L*.063,A.add(N)}else{for(const[L,N,O,D]of[[0,.085,0,.08],[-.048,.037,.013,.058],[.045,.044,-.012,.064],[.008,.065,.043,.051]]){const B=new dt(o,c[(T+Math.round(N*100))%4]);B.position.set(L,N,O),B.scale.set(D,D*1.12,D*.91),A.add(B)}for(const L of[-1,1]){const N=new dt(s,d);N.scale.set(.48,.45,.48),N.position.set(L*.025,.115,0),N.rotation.z=-L*.7,P.add(N)}}f.push({group:A,phase:T*.71})});const b=p2(u,i,!0),m=r(new Mi(2.205,96,64)),h=t("#ffffff",{roughness:1,transparent:!0,opacity:.62,depthWrite:!1,alphaTest:.008}),y=h.onBeforeCompile;return h.onBeforeCompile=(S,v)=>{y.call(h,S,v),S.fragmentShader=S.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      // earthNoise / vEarthPosition come from the shared geographic daylight shader.
      vec3 p=vEarthPosition;
      // Broad connected wisps, with only a little edge detail: no granular flecks.
      vec3 flow=p+vec3(earthNoise(p*2.7),earthNoise(p*2.7+vec3(13.0)),earthNoise(p*2.7+vec3(29.0)))*.24;
      float detail=earthNoise(flow*17.0+vec3(7.0));
      float cover=earthNoise(flow*vec3(3.5,6.0,3.5))+.075*(detail-.5);
      float cloudRegion=smoothstep(.48,.62,earthNoise(p*1.9+vec3(31.0,7.0,11.0)));
      diffuseColor.a*=cloudRegion*smoothstep(.76,.87,cover)*(.65+.35*detail);
    `),S.fragmentShader=S.fragmentShader.replace("#include <opaque_fragment>",`
      // Diffuse sky fill keeps the daytime cloud tops pearl-white instead of gray.
      outgoingLight=mix(outgoingLight,vec3(.88,.92,.96),dayAmount*.42);
      diffuseColor.a*=mix(.5,1.0,dayAmount);
      #include <opaque_fragment>
    `)},h.customProgramCacheKey=()=>"earth-thin-clouds-v2",i.add(new dt(m,h)),{update(S){for(const{group:v,phase:E}of f)v.rotation.z=Math.sin(S*.75+E)*.024,v.rotation.x=Math.cos(S*.54+E)*.013;b.update()},dispose(){b.dispose(),n.forEach(S=>S.dispose())}}}function J5(i,e,t){const n=[],r=[],s=[],o=u=>Math.abs(Math.sin(u*127.1)*43758.5453)%1;zn.forEach((u,p)=>{for(let x=0;x<22;x++){const b=o(p*31+x+2)*Math.PI*2,m=Math.sqrt(o(p*47+x+9))*.8,h=u.lat+Math.sin(b)*m,y=u.lon+Math.cos(b)*m/Math.max(.3,Math.cos(u.lat*Math.PI/180)),S=e(h,y);if(S<2.06)continue;const v=Hn(h,y,S+.009);n.push(v.x,v.y,v.z);const E=new Ge(x%4===0?"#ffad53":"#ffe0a0");r.push(E.r,E.g,E.b),s.push(.025+o(p+x)*.026)}});const a=new Et;a.setAttribute("position",new st(n,3)),a.setAttribute("aLightColor",new st(r,3)),a.setAttribute("aSize",new st(s,1));const l={value:100},c=new Ht({uniforms:{uSolarDirection:t,uPointScale:l},transparent:!0,depthWrite:!1,blending:Cs,vertexShader:`uniform vec3 uSolarDirection;uniform float uPointScale;attribute vec3 aLightColor;attribute float aSize;varying vec3 vColor;varying float vNight;
      void main(){vColor=aLightColor;vNight=1.0-smoothstep(-.10,.025,dot(normalize(position),uSolarDirection));
      gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);gl_PointSize=clamp(aSize*uPointScale,2.0,28.0);}`,fragmentShader:`varying vec3 vColor;varying float vNight;
      void main(){if(vNight<.005)discard;float r=length(gl_PointCoord-.5);if(r>.5)discard;
      float glow=exp(-r*r*140.0)+.42*exp(-r*r*22.0);gl_FragColor=vec4(vColor*1.25,glow*vNight);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`});i.add(new Zl(a,c));const d=new Mi(2.16,96,64),f=new Ht({uniforms:{uSolarDirection:t},side:Ut,transparent:!0,depthWrite:!1,vertexShader:`varying vec3 vLocal;varying vec3 vNormal;varying vec3 vView;
      void main(){vLocal=normalize(position);vNormal=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.0);vView=-mv.xyz;gl_Position=projectionMatrix*mv;}`,fragmentShader:`uniform vec3 uSolarDirection;varying vec3 vLocal;varying vec3 vNormal;varying vec3 vView;
      void main(){float sun=dot(normalize(vLocal),uSolarDirection);float rim=pow(1.0-abs(dot(normalize(vNormal),normalize(vView))),2.3);
      vec3 color=mix(vec3(.11,.19,.42),vec3(.22,.61,.82),smoothstep(-.2,.3,sun));
      color=mix(color,vec3(.92,.39,.16),exp(-pow(sun/.11,2.0))*.65);gl_FragColor=vec4(color,rim*.22);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`});return i.add(new dt(d,f)),{update(u,p){l.value=p*u.zoom/(u.top-u.bottom)},dispose(){a.dispose(),c.dispose(),d.dispose(),f.dispose()}}}const K5=JSON.parse('[{"region":9,"bounds":[178.597,-17.012,180,-16.067],"rings":[[[180,-16.067],[180,-16.555],[179.364,-16.801],[178.725,-17.012],[178.597,-16.639],[179.097,-16.434],[179.414,-16.379],[180,-16.067]]]},{"region":9,"bounds":[177.285,-18.288,178.718,-17.34],"rings":[[[178.126,-17.505],[178.374,-17.34],[178.718,-17.628],[178.553,-18.151],[177.933,-18.288],[177.381,-18.164],[177.285,-17.725],[177.671,-17.381],[178.126,-17.505]]]},{"region":9,"bounds":[-180,-16.555,-179.793,-16.021],"rings":[[[-179.793,-16.021],[-179.917,-16.502],[-180,-16.555],[-180,-16.067],[-179.793,-16.021]]]},{"region":4,"bounds":[29.34,-11.721,40.317,-0.95],"rings":[[[33.904,-0.95],[34.073,-1.06],[37.699,-3.097],[37.767,-3.677],[39.202,-4.677],[38.741,-5.909],[38.8,-6.476],[39.44,-6.84],[39.47,-7.1],[39.195,-7.704],[39.252,-8.008],[39.187,-8.486],[39.536,-9.112],[39.95,-10.098],[40.317,-10.317],[40.317,-10.317],[39.521,-10.897],[38.428,-11.285],[37.828,-11.269],[37.471,-11.569],[36.775,-11.595],[36.514,-11.721],[35.312,-11.439],[34.56,-11.52],[34.28,-10.16],[33.941,-9.694],[33.74,-9.417],[32.759,-9.231],[32.192,-8.93],[31.556,-8.762],[31.158,-8.595],[30.74,-8.34],[30.74,-8.34],[30.2,-7.08],[29.62,-6.52],[29.42,-5.94],[29.52,-5.42],[29.34,-4.5],[29.754,-4.452],[30.116,-4.09],[30.506,-3.569],[30.752,-3.359],[30.743,-3.034],[30.528,-2.808],[30.47,-2.414],[30.47,-2.414],[30.758,-2.287],[30.816,-1.699],[30.419,-1.135],[30.77,-1.015],[31.866,-1.027],[33.904,-0.95]]]},{"region":5,"bounds":[-17.063,21,-8.665,27.656],"rings":[[[-8.666,27.656],[-8.665,27.589],[-8.684,27.396],[-8.687,25.881],[-11.969,25.933],[-11.937,23.375],[-12.874,23.285],[-13.119,22.771],[-12.929,21.327],[-16.845,21.333],[-17.063,21],[-17.02,21.422],[-17.003,21.421],[-14.751,21.501],[-14.631,21.861],[-14.221,22.31],[-13.891,23.691],[-12.501,24.77],[-12.031,26.031],[-11.718,26.104],[-11.393,26.883],[-10.551,26.991],[-10.189,26.861],[-9.735,26.861],[-9.413,27.088],[-8.795,27.121],[-8.818,27.656],[-8.666,27.656]]]},{"region":0,"bounds":[-140.998,41.675,-55.683,71.921],"rings":[[[-122.84,49],[-122.974,49.003],[-124.91,49.985],[-125.625,50.417],[-127.436,50.831],[-127.993,51.716],[-127.85,52.33],[-129.13,52.755],[-129.305,53.562],[-130.515,54.288],[-130.536,54.803],[-130.536,54.803],[-129.98,55.285],[-130.008,55.916],[-131.708,56.552],[-132.73,57.693],[-133.356,58.41],[-134.271,58.861],[-134.945,59.271],[-135.476,59.788],[-136.48,59.464],[-137.452,58.905],[-138.341,59.562],[-139.039,60],[-140.013,60.277],[-140.998,60.306],[-140.993,66],[-140.986,69.712],[-140.986,69.712],[-139.121,69.471],[-137.546,68.99],[-136.504,68.898],[-135.626,69.315],[-134.415,69.627],[-132.929,69.505],[-131.431,69.945],[-129.795,70.194],[-129.108,69.779],[-128.362,70.013],[-128.138,70.484],[-127.447,70.377],[-125.756,69.481],[-124.425,70.158],[-124.29,69.4],[-123.061,69.564],[-122.683,69.856],[-121.472,69.798],[-119.943,69.378],[-117.603,69.011],[-116.226,68.842],[-115.247,68.906],[-113.898,68.399],[-115.305,67.903],[-113.497,67.688],[-110.798,67.806],[-109.946,67.981],[-108.88,67.381],[-107.792,67.887],[-108.813,68.312],[-108.167,68.654],[-106.95,68.7],[-106.15,68.8],[-105.343,68.561],[-104.338,68.018],[-103.221,68.098],[-101.454,67.647],[-99.902,67.806],[-98.443,67.782],[-98.559,68.404],[-97.669,68.579],[-96.12,68.239],[-96.126,67.293],[-95.489,68.091],[-94.685,68.064],[-94.233,69.069],[-95.304,69.686],[-96.471,70.09],[-96.391,71.195],[-95.209,71.921],[-93.89,71.76],[-92.878,71.319],[-91.52,70.191],[-92.407,69.7],[-90.547,69.498],[-90.552,68.475],[-89.215,69.259],[-88.02,68.615],[-88.317,67.873],[-87.35,67.199],[-86.306,67.921],[-85.577,68.785],[-85.522,69.882],[-84.101,69.805],[-82.623,69.658],[-81.28,69.162],[-81.22,68.666],[-81.964,68.133],[-81.259,67.597],[-81.387,67.111],[-83.345,66.412],[-84.735,66.257],[-85.769,66.558],[-86.068,66.056],[-87.031,65.213],[-87.323,64.776],[-88.483,64.099],[-89.914,64.033],[-90.704,63.61],[-90.77,62.96],[-91.933,62.835],[-93.157,62.025],[-94.242,60.899],[-94.629,60.11],[-94.685,58.949],[-93.215,58.782],[-92.765,57.846],[-92.297,57.087],[-90.898,57.285],[-89.04,56.852],[-88.04,56.472],[-87.324,55.999],[-86.071,55.724],[-85.012,55.303],[-83.361,55.245],[-82.273,55.148],[-82.436,54.282],[-82.125,53.277],[-81.401,52.158],[-79.913,51.208],[-79.143,51.534],[-78.602,52.562],[-79.124,54.141],[-79.83,54.668],[-78.229,55.136],[-77.096,55.837],[-76.541,56.534],[-76.623,57.203],[-77.302,58.052],[-78.517,58.805],[-77.337,59.853],[-77.773,60.758],[-78.107,62.32],[-77.411,62.551],[-75.696,62.278],[-74.668,62.181],[-73.84,62.444],[-72.909,62.105],[-71.677,61.525],[-71.374,61.137],[-69.59,61.061],[-69.62,60.221],[-69.288,58.957],[-68.375,58.801],[-67.65,58.212],[-66.202,58.767],[-65.245,59.871],[-64.584,60.336],[-63.805,59.443],[-62.502,58.167],[-61.397,56.967],[-61.799,56.339],[-60.469,55.775],[-59.57,55.204],[-57.975,54.945],[-57.333,54.627],[-56.937,53.78],[-56.158,53.647],[-55.756,53.27],[-55.683,52.147],[-56.409,51.771],[-57.127,51.42],[-58.775,51.064],[-60.033,50.243],[-61.724,50.08],[-63.863,50.291],[-65.363,50.298],[-66.399,50.229],[-67.236,49.512],[-68.511,49.068],[-69.954,47.745],[-71.105,46.822],[-70.255,46.986],[-68.65,48.3],[-66.552,49.133],[-65.056,49.233],[-64.171,48.742],[-65.115,48.071],[-64.799,46.993],[-64.472,46.238],[-63.173,45.739],[-61.521,45.884],[-60.518,47.008],[-60.449,46.283],[-59.803,45.92],[-61.04,45.265],[-63.255,44.67],[-64.247,44.266],[-65.364,43.545],[-66.123,43.619],[-66.162,44.465],[-64.425,45.292],[-66.026,45.259],[-67.137,45.138],[-67.791,45.703],[-67.79,47.066],[-68.234,47.355],[-68.905,47.185],[-69.237,47.448],[-70,46.693],[-70.305,45.915],[-70.66,45.46],[-71.085,45.305],[-71.405,45.255],[-71.505,45.008],[-73.348,45.007],[-74.867,45],[-75.318,44.816],[-76.375,44.096],[-76.5,44.018],[-76.82,43.629],[-77.738,43.629],[-78.72,43.625],[-79.172,43.466],[-79.01,43.27],[-78.92,42.965],[-78.939,42.864],[-80.247,42.366],[-81.278,42.209],[-82.439,41.675],[-82.69,41.675],[-83.03,41.833],[-83.142,41.976],[-83.12,42.08],[-82.9,42.43],[-82.43,42.98],[-82.138,43.571],[-82.338,44.44],[-82.551,45.348],[-83.593,45.817],[-83.47,45.995],[-83.616,46.117],[-83.891,46.117],[-84.092,46.275],[-84.142,46.512],[-84.337,46.409],[-84.605,46.44],[-84.544,46.539],[-84.779,46.637],[-84.876,46.9],[-85.652,47.22],[-86.462,47.553],[-87.44,47.94],[-88.378,48.303],[-89.273,48.02],[-89.6,48.01],[-90.83,48.27],[-91.64,48.14],[-92.61,48.45],[-93.631,48.609],[-94.329,48.671],[-94.64,48.84],[-94.818,49.389],[-95.156,49.384],[-95.159,49],[-97.229,49.001],[-100.65,49],[-104.048,49],[-107.05,49],[-110.05,49],[-113,49],[-116.048,49],[-117.031,49],[-120,49],[-122.84,49]]]},{"region":0,"bounds":[-83.994,62.159,-81.877,62.914],"rings":[[[-83.994,62.453],[-83.25,62.914],[-81.877,62.905],[-81.898,62.711],[-83.069,62.159],[-83.775,62.182],[-83.994,62.453]]]},{"region":0,"bounds":[-80.876,72.742,-76.251,73.76],"rings":[[[-79.776,72.803],[-80.876,73.333],[-80.834,73.693],[-80.353,73.76],[-78.064,73.652],[-76.34,73.103],[-76.251,72.826],[-77.314,72.856],[-78.392,72.877],[-79.486,72.742],[-79.776,72.803]]]},{"region":0,"bounds":[-80.362,61.633,-79.266,62.386],"rings":[[[-80.315,62.086],[-79.929,62.386],[-79.52,62.364],[-79.266,62.159],[-79.658,61.633],[-80.1,61.718],[-80.362,62.016],[-80.315,62.086]]]},{"region":0,"bounds":[-96.821,74.592,-93.613,75.647],"rings":[[[-93.613,74.98],[-94.157,74.592],[-95.609,74.667],[-96.821,74.928],[-96.289,75.378],[-94.851,75.647],[-93.978,75.296],[-93.613,74.98]]]},{"region":0,"bounds":[-96.436,77.491,-93.721,77.835],"rings":[[[-93.84,77.52],[-94.296,77.491],[-96.17,77.555],[-96.436,77.835],[-94.423,77.82],[-93.721,77.634],[-93.84,77.52]]]},{"region":0,"bounds":[-98.632,77.851,-95.559,78.872],"rings":[[[-96.754,78.766],[-95.559,78.418],[-95.83,78.057],[-97.31,77.851],[-98.124,78.083],[-98.553,78.458],[-98.632,78.872],[-97.337,78.832],[-96.754,78.766]]]},{"region":0,"bounds":[-97.121,74.392,-79.834,77.161],"rings":[[[-88.15,74.392],[-89.765,74.516],[-92.422,74.838],[-92.768,75.387],[-92.89,75.883],[-93.894,76.319],[-95.962,76.441],[-97.121,76.751],[-96.745,77.161],[-94.684,77.098],[-93.574,76.776],[-91.605,76.779],[-90.742,76.45],[-90.97,76.074],[-89.822,75.848],[-89.187,75.61],[-87.838,75.566],[-86.379,75.482],[-84.79,75.699],[-82.753,75.784],[-81.129,75.714],[-80.058,75.337],[-79.834,74.923],[-80.458,74.657],[-81.949,74.442],[-83.229,74.564],[-86.097,74.41],[-88.15,74.392]]]},{"region":0,"bounds":[-113.534,77.409,-109.854,78.153],"rings":[[[-111.264,78.153],[-109.854,77.996],[-110.187,77.697],[-112.051,77.409],[-113.534,77.732],[-112.725,78.051],[-111.264,78.153]]]},{"region":0,"bounds":[-112.542,78.407,-109.663,78.85],"rings":[[[-110.964,78.804],[-109.663,78.602],[-110.881,78.407],[-112.542,78.408],[-112.526,78.551],[-111.5,78.85],[-110.964,78.804]]]},{"region":0,"bounds":[-59.419,46.618,-52.648,51.632],"rings":[[[-55.6,51.317],[-56.134,50.687],[-56.796,49.812],[-56.143,50.15],[-55.471,49.936],[-55.822,49.587],[-54.935,49.313],[-54.474,49.557],[-53.477,49.249],[-53.786,48.517],[-53.086,48.688],[-52.959,48.157],[-52.648,47.536],[-53.069,46.655],[-53.521,46.618],[-54.179,46.807],[-53.962,47.625],[-54.24,47.752],[-55.401,46.885],[-55.997,46.92],[-55.291,47.39],[-56.251,47.633],[-57.325,47.573],[-59.266,47.603],[-59.419,47.899],[-58.797,48.252],[-59.232,48.523],[-58.392,49.126],[-57.359,50.718],[-56.739,51.287],[-55.871,51.632],[-55.407,51.588],[-55.6,51.317]]]},{"region":0,"bounds":[-87.222,63.052,-80.103,65.739],"rings":[[[-83.883,65.11],[-82.788,64.767],[-81.642,64.455],[-81.553,63.98],[-80.817,64.057],[-80.103,63.726],[-80.991,63.411],[-82.547,63.652],[-83.109,64.102],[-84.1,63.57],[-85.523,63.052],[-85.867,63.637],[-87.222,63.541],[-86.353,64.036],[-86.225,64.823],[-85.884,65.739],[-85.161,65.657],[-84.976,65.218],[-84.464,65.372],[-83.883,65.11]]]},{"region":0,"bounds":[-90.205,61.931,-61.852,73.804],"rings":[[[-78.771,72.352],[-77.825,72.75],[-75.606,72.244],[-74.229,71.767],[-74.099,71.331],[-72.242,71.557],[-71.2,70.92],[-68.786,70.525],[-67.915,70.122],[-66.969,69.186],[-68.805,68.72],[-66.45,68.067],[-64.862,67.848],[-63.425,66.928],[-61.852,66.862],[-62.163,66.16],[-63.918,64.999],[-65.149,65.426],[-66.721,66.388],[-68.015,66.263],[-68.141,65.69],[-67.09,65.108],[-65.732,64.648],[-65.32,64.383],[-64.669,63.393],[-65.014,62.674],[-66.275,62.945],[-68.783,63.746],[-67.37,62.884],[-66.328,62.28],[-66.166,61.931],[-68.877,62.33],[-71.023,62.911],[-72.235,63.398],[-71.886,63.68],[-73.378,64.194],[-74.834,64.679],[-74.819,64.389],[-77.71,64.23],[-78.556,64.573],[-77.897,65.309],[-76.018,65.327],[-73.96,65.455],[-74.294,65.812],[-73.945,66.311],[-72.651,67.285],[-72.926,67.727],[-73.312,68.069],[-74.843,68.555],[-76.869,68.895],[-76.229,69.148],[-77.287,69.77],[-78.169,69.826],[-78.957,70.167],[-79.492,69.872],[-81.305,69.743],[-84.945,69.967],[-87.06,70.26],[-88.682,70.411],[-89.513,70.762],[-88.468,71.218],[-89.888,71.223],[-90.205,72.235],[-89.437,73.129],[-88.408,73.538],[-85.826,73.804],[-86.562,73.157],[-85.774,72.534],[-84.85,73.34],[-82.316,73.751],[-80.6,72.717],[-80.749,72.062],[-78.771,72.352]]]},{"region":0,"bounds":[-96.034,72.025,-90.51,74.135],"rings":[[[-94.504,74.135],[-92.42,74.1],[-90.51,73.857],[-92.004,72.966],[-93.196,72.772],[-94.269,72.025],[-95.41,72.062],[-96.034,72.94],[-96.018,73.437],[-95.496,73.862],[-94.504,74.135]]]},{"region":0,"bounds":[-122.855,75.9,-116.199,77.645],"rings":[[[-122.855,76.117],[-122.855,76.117],[-121.158,76.865],[-119.104,77.512],[-117.57,77.498],[-116.199,77.645],[-116.336,76.877],[-117.106,76.53],[-118.04,76.481],[-119.899,76.053],[-121.5,75.9],[-122.855,76.117]]]},{"region":0,"bounds":[-133.24,52.18,-131.179,54.17],"rings":[[[-132.71,54.04],[-131.75,54.12],[-132.049,52.985],[-131.179,52.18],[-131.578,52.182],[-132.18,52.64],[-132.55,53.1],[-133.055,53.411],[-133.24,53.851],[-133.18,54.17],[-132.71,54.04]]]},{"region":0,"bounds":[-105.492,77.908,-99.671,79.302],"rings":[[[-105.492,79.302],[-103.529,79.165],[-100.825,78.8],[-100.06,78.325],[-99.671,77.908],[-101.304,78.019],[-102.95,78.343],[-105.176,78.38],[-104.21,78.677],[-105.42,78.918],[-105.492,79.302]]]},{"region":0,"bounds":[-128.445,48.371,-123.51,50.771],"rings":[[[-123.51,48.51],[-124.013,48.371],[-125.655,48.825],[-125.955,49.18],[-126.85,49.53],[-127.03,49.815],[-128.059,49.995],[-128.445,50.539],[-128.358,50.771],[-127.309,50.553],[-126.695,50.401],[-125.755,50.295],[-125.415,49.95],[-124.921,49.475],[-123.923,49.062],[-123.51,48.51]]]},{"region":0,"bounds":[-125.929,70.902,-115.511,74.449],"rings":[[[-121.538,74.449],[-120.11,74.241],[-117.556,74.186],[-116.584,73.896],[-115.511,73.475],[-116.768,73.223],[-119.22,72.52],[-120.46,71.82],[-120.46,71.384],[-123.092,70.902],[-123.62,71.34],[-125.929,71.869],[-125.5,72.292],[-124.807,73.023],[-123.94,73.68],[-124.918,74.293],[-121.538,74.449]]]},{"region":0,"bounds":[-117.71,74.394,-105.705,76.794],"rings":[[[-107.819,75.846],[-106.929,76.013],[-105.881,75.969],[-105.705,75.48],[-106.313,75.005],[-109.7,74.85],[-112.223,74.417],[-113.744,74.394],[-113.871,74.72],[-111.794,75.162],[-116.312,75.043],[-117.71,75.222],[-116.346,76.199],[-115.405,76.479],[-112.591,76.141],[-110.814,75.549],[-109.067,75.473],[-110.497,76.43],[-109.581,76.794],[-108.549,76.678],[-108.211,76.202],[-107.819,75.846]]]},{"region":0,"bounds":[-119.402,68.536,-100.981,73.315],"rings":[[[-106.523,73.076],[-105.402,72.673],[-104.775,71.698],[-104.465,70.993],[-102.785,70.498],[-100.981,70.024],[-101.089,69.584],[-102.731,69.504],[-102.093,69.12],[-102.43,68.753],[-104.24,68.91],[-105.96,69.18],[-107.123,69.119],[-109,68.78],[-111.534,68.63],[-113.313,68.536],[-113.855,69.007],[-115.22,69.28],[-116.108,69.168],[-117.34,69.96],[-116.675,70.067],[-115.131,70.237],[-113.721,70.192],[-112.416,70.366],[-114.35,70.6],[-116.487,70.52],[-117.905,70.541],[-118.432,70.909],[-116.113,71.309],[-117.656,71.295],[-119.402,71.559],[-118.563,72.308],[-117.866,72.706],[-115.189,73.315],[-114.167,73.121],[-114.666,72.653],[-112.441,72.955],[-111.05,72.45],[-109.92,72.961],[-109.007,72.633],[-108.188,71.651],[-107.686,72.065],[-108.396,73.09],[-107.516,73.236],[-106.523,73.076]]]},{"region":0,"bounds":[-102.5,71.273,-96.54,73.844],"rings":[[[-100.438,72.706],[-101.54,73.36],[-100.356,73.844],[-99.164,73.633],[-97.38,73.76],[-97.12,73.47],[-98.054,72.991],[-96.54,72.56],[-96.72,71.66],[-98.36,71.273],[-99.323,71.356],[-100.015,71.738],[-102.5,72.51],[-102.48,72.83],[-100.438,72.706]]]},{"region":0,"bounds":[-106.94,72.76,-104.5,73.64],"rings":[[[-106.6,73.6],[-105.26,73.64],[-104.5,73.42],[-105.38,72.76],[-106.94,73.46],[-106.6,73.6]]]},{"region":0,"bounds":[-102.566,74.897,-97.704,76.72],"rings":[[[-98.5,76.72],[-97.736,76.257],[-97.704,75.743],[-98.16,75],[-99.809,74.897],[-100.884,75.057],[-100.863,75.641],[-102.502,75.564],[-102.566,76.337],[-101.49,76.305],[-99.983,76.646],[-98.577,76.589],[-98.5,76.72]]]},{"region":0,"bounds":[-96.71,78.215,-85.814,81.257],"rings":[[[-96.016,80.602],[-95.323,80.907],[-94.298,80.977],[-94.735,81.206],[-92.41,81.257],[-91.133,80.723],[-89.45,80.509],[-87.81,80.32],[-87.02,79.66],[-85.814,79.337],[-87.188,79.039],[-89.035,78.287],[-90.804,78.215],[-92.877,78.343],[-93.951,78.751],[-93.936,79.114],[-93.145,79.38],[-94.974,79.372],[-96.076,79.705],[-96.71,80.158],[-96.016,80.602]]]},{"region":0,"bounds":[-91.587,76.178,-61.85,83.233],"rings":[[[-91.587,81.894],[-90.1,82.085],[-88.932,82.118],[-86.97,82.28],[-85.5,82.652],[-84.26,82.6],[-83.18,82.32],[-82.42,82.86],[-81.1,83.02],[-79.307,83.131],[-76.25,83.172],[-75.719,83.064],[-72.832,83.233],[-70.666,83.17],[-68.5,83.106],[-65.827,83.028],[-63.68,82.9],[-61.85,82.629],[-61.894,82.362],[-64.334,81.928],[-66.753,81.725],[-67.658,81.501],[-65.48,81.507],[-67.84,80.9],[-69.47,80.617],[-71.18,79.8],[-73.243,79.634],[-73.88,79.43],[-76.908,79.323],[-75.529,79.198],[-76.22,79.019],[-75.393,78.526],[-76.344,78.183],[-77.889,77.9],[-78.363,77.509],[-79.76,77.21],[-79.62,76.983],[-77.911,77.022],[-77.889,76.778],[-80.561,76.178],[-83.174,76.454],[-86.112,76.299],[-87.6,76.42],[-89.491,76.472],[-89.616,76.952],[-87.767,77.178],[-88.26,77.9],[-87.65,77.97],[-84.976,77.539],[-86.34,78.18],[-87.962,78.372],[-87.152,78.759],[-85.379,78.997],[-85.095,79.345],[-86.507,79.736],[-86.932,80.251],[-84.198,80.208],[-83.409,80.1],[-81.848,80.464],[-84.1,80.58],[-87.599,80.516],[-89.367,80.856],[-90.2,81.26],[-91.368,81.553],[-91.587,81.894]]]},{"region":0,"bounds":[-77.236,67.099,-75.103,68.287],"rings":[[[-75.216,67.444],[-75.866,67.149],[-76.987,67.099],[-77.236,67.588],[-76.812,68.149],[-75.895,68.287],[-75.115,68.01],[-75.103,67.582],[-75.216,67.444]]]},{"region":0,"bounds":[-99.797,68.757,-95.648,70.144],"rings":[[[-96.257,69.49],[-95.648,69.108],[-96.27,68.757],[-97.617,69.06],[-98.432,68.951],[-99.797,69.4],[-98.917,69.71],[-98.218,70.144],[-97.157,69.86],[-96.557,69.68],[-96.257,69.49]]]},{"region":0,"bounds":[-64.519,49.087,-61.806,49.957],"rings":[[[-64.519,49.873],[-64.173,49.957],[-62.858,49.706],[-61.836,49.289],[-61.806,49.105],[-62.293,49.087],[-63.589,49.401],[-64.519,49.873]]]},{"region":0,"bounds":[-64.393,45.968,-62.012,47.036],"rings":[[[-64.015,47.036],[-63.664,46.55],[-62.939,46.416],[-62.012,46.443],[-62.504,46.033],[-62.874,45.968],[-64.143,46.393],[-64.393,46.727],[-64.015,47.036]]]},{"region":0,"bounds":[-124.687,25.08,-66.965,49.389],"rings":[[[-122.84,49],[-120,49],[-117.031,49],[-116.048,49],[-113,49],[-110.05,49],[-107.05,49],[-104.048,49],[-100.65,49],[-97.229,49.001],[-95.159,49],[-95.156,49.384],[-94.818,49.389],[-94.64,48.84],[-94.329,48.671],[-93.631,48.609],[-92.61,48.45],[-91.64,48.14],[-90.83,48.27],[-89.6,48.01],[-89.273,48.02],[-88.378,48.303],[-87.44,47.94],[-86.462,47.553],[-85.652,47.22],[-84.876,46.9],[-84.779,46.637],[-84.544,46.539],[-84.605,46.44],[-84.337,46.409],[-84.142,46.512],[-84.092,46.275],[-83.891,46.117],[-83.616,46.117],[-83.47,45.995],[-83.593,45.817],[-82.551,45.348],[-82.338,44.44],[-82.138,43.571],[-82.43,42.98],[-82.9,42.43],[-83.12,42.08],[-83.142,41.976],[-83.03,41.833],[-82.69,41.675],[-82.439,41.675],[-81.278,42.209],[-80.247,42.366],[-78.939,42.864],[-78.92,42.965],[-79.01,43.27],[-79.172,43.466],[-78.72,43.625],[-77.738,43.629],[-76.82,43.629],[-76.5,44.018],[-76.375,44.096],[-75.318,44.816],[-74.867,45],[-73.348,45.007],[-71.505,45.008],[-71.405,45.255],[-71.085,45.305],[-70.66,45.46],[-70.305,45.915],[-70,46.693],[-69.237,47.448],[-68.905,47.185],[-68.234,47.355],[-67.79,47.066],[-67.791,45.703],[-67.137,45.138],[-66.965,44.81],[-68.033,44.325],[-69.06,43.98],[-70.116,43.684],[-70.645,43.09],[-70.815,42.865],[-70.825,42.335],[-70.495,41.805],[-70.08,41.78],[-70.185,42.145],[-69.885,41.923],[-69.965,41.637],[-70.64,41.475],[-71.12,41.494],[-71.86,41.32],[-72.295,41.27],[-72.876,41.221],[-73.71,40.931],[-72.241,41.119],[-71.945,40.93],[-73.345,40.63],[-73.982,40.628],[-73.952,40.751],[-74.257,40.474],[-73.962,40.428],[-74.178,39.709],[-74.906,38.94],[-74.98,39.196],[-75.2,39.248],[-75.528,39.498],[-75.32,38.96],[-75.072,38.782],[-75.057,38.404],[-75.377,38.016],[-75.94,37.217],[-76.031,37.257],[-75.722,37.937],[-76.233,38.319],[-76.35,39.15],[-76.543,38.718],[-76.329,38.083],[-76.99,38.24],[-76.302,37.918],[-76.259,36.966],[-75.972,36.897],[-75.868,36.551],[-75.727,35.551],[-76.363,34.809],[-77.398,34.512],[-78.055,33.925],[-78.554,33.861],[-79.061,33.494],[-79.204,33.158],[-80.301,32.509],[-80.865,32.033],[-81.336,31.44],[-81.49,30.73],[-81.314,30.036],[-80.98,29.18],[-80.536,28.472],[-80.53,28.04],[-80.057,26.88],[-80.088,26.206],[-80.132,25.817],[-80.381,25.206],[-80.68,25.08],[-81.172,25.201],[-81.33,25.64],[-81.71,25.87],[-82.24,26.73],[-82.705,27.495],[-82.855,27.886],[-82.65,28.55],[-82.93,29.1],[-83.71,29.937],[-84.1,30.09],[-85.109,29.636],[-85.288,29.686],[-85.773,30.153],[-86.4,30.4],[-87.53,30.274],[-88.418,30.385],[-89.18,30.316],[-89.594,30.16],[-89.414,29.894],[-89.43,29.489],[-89.218,29.291],[-89.408,29.16],[-89.779,29.307],[-90.155,29.117],[-90.88,29.149],[-91.627,29.677],[-92.499,29.552],[-93.226,29.784],[-93.848,29.714],[-94.69,29.48],[-95.6,28.739],[-96.594,28.307],[-97.14,27.83],[-97.37,27.38],[-97.38,26.69],[-97.33,26.21],[-97.14,25.87],[-97.53,25.84],[-98.24,26.06],[-99.02,26.37],[-99.3,26.84],[-99.52,27.54],[-100.11,28.11],[-100.456,28.696],[-100.958,29.381],[-101.662,29.779],[-102.48,29.76],[-103.11,28.97],[-103.94,29.27],[-104.457,29.572],[-104.706,30.122],[-105.037,30.644],[-105.632,31.084],[-106.143,31.4],[-106.508,31.755],[-108.24,31.755],[-108.242,31.342],[-109.035,31.342],[-111.024,31.335],[-113.305,32.039],[-114.815,32.525],[-114.721,32.721],[-115.991,32.612],[-117.128,32.535],[-117.296,33.046],[-117.944,33.621],[-118.411,33.741],[-118.52,34.028],[-119.081,34.078],[-119.439,34.348],[-120.368,34.447],[-120.623,34.609],[-120.744,35.157],[-121.715,36.162],[-122.547,37.552],[-122.512,37.783],[-122.953,38.114],[-123.727,38.952],[-123.865,39.767],[-124.398,40.313],[-124.179,41.142],[-124.214,42],[-124.533,42.766],[-124.142,43.708],[-124.021,44.616],[-123.899,45.523],[-124.08,46.865],[-124.396,47.72],[-124.687,48.184],[-124.566,48.38],[-123.12,48.04],[-122.587,47.096],[-122.34,47.36],[-122.5,48.18],[-122.84,49]]]},{"region":0,"bounds":[-156.073,18.916,-154.807,20.267],"rings":[[[-155.402,20.08],[-155.225,19.993],[-155.062,19.859],[-154.807,19.509],[-154.831,19.453],[-155.222,19.24],[-155.542,19.083],[-155.688,18.916],[-155.937,19.059],[-155.908,19.339],[-156.073,19.703],[-156.024,19.814],[-155.85,19.977],[-155.919,20.174],[-155.861,20.267],[-155.785,20.249],[-155.402,20.08]]]},{"region":0,"bounds":[-156.711,20.572,-155.996,21.012],"rings":[[[-155.996,20.764],[-156.079,20.644],[-156.414,20.572],[-156.587,20.783],[-156.702,20.864],[-156.711,20.927],[-156.613,21.012],[-156.257,20.917],[-155.996,20.764]]]},{"region":0,"bounds":[-157.325,21.069,-156.758,21.22],"rings":[[[-156.758,21.177],[-156.789,21.069],[-157.325,21.098],[-157.25,21.22],[-156.758,21.177]]]},{"region":0,"bounds":[-158.293,21.264,-157.653,21.717],"rings":[[[-158.025,21.717],[-157.942,21.653],[-157.653,21.322],[-157.707,21.264],[-157.779,21.277],[-158.127,21.312],[-158.254,21.539],[-158.293,21.579],[-158.025,21.717]]]},{"region":0,"bounds":[-159.801,21.883,-159.345,22.236],"rings":[[[-159.366,22.215],[-159.345,21.982],[-159.464,21.883],[-159.801,22.065],[-159.749,22.138],[-159.596,22.236],[-159.366,22.215]]]},{"region":0,"bounds":[-167.455,59.754,-165.579,60.384],"rings":[[[-166.468,60.384],[-165.674,60.294],[-165.579,59.91],[-166.193,59.754],[-166.848,59.941],[-167.455,60.213],[-166.468,60.384]]]},{"region":0,"bounds":[-154.671,56.735,-152.141,57.969],"rings":[[[-153.229,57.969],[-152.565,57.901],[-152.141,57.591],[-153.006,57.116],[-154.005,56.735],[-154.516,56.993],[-154.671,57.461],[-153.763,57.817],[-153.229,57.969]]]},{"region":0,"bounds":[-168.111,54.404,-129.98,71.358],"rings":[[[-140.986,69.712],[-140.986,69.712],[-140.993,66],[-140.998,60.306],[-140.013,60.277],[-139.039,60],[-138.341,59.562],[-137.452,58.905],[-136.48,59.464],[-135.476,59.788],[-134.945,59.271],[-134.271,58.861],[-133.356,58.41],[-132.73,57.693],[-131.708,56.552],[-130.008,55.916],[-129.98,55.285],[-130.536,54.803],[-130.536,54.803],[-130.536,54.803],[-131.086,55.179],[-131.967,55.498],[-132.25,56.37],[-133.539,57.179],[-134.078,58.123],[-135.038,58.188],[-136.628,58.212],[-137.8,58.5],[-139.868,59.538],[-140.825,59.728],[-142.574,60.084],[-143.959,59.999],[-145.926,60.459],[-147.114,60.885],[-148.224,60.673],[-148.018,59.978],[-148.571,59.914],[-149.728,59.706],[-150.608,59.368],[-151.716,59.156],[-151.859,59.745],[-151.41,60.726],[-150.347,61.034],[-150.621,61.284],[-151.896,60.727],[-152.578,60.062],[-154.019,59.35],[-153.288,58.865],[-154.232,58.146],[-155.307,57.728],[-156.308,57.423],[-156.556,56.98],[-158.117,56.464],[-158.433,55.994],[-159.603,55.567],[-160.29,55.644],[-161.223,55.365],[-162.238,55.024],[-163.069,54.69],[-164.786,54.404],[-164.942,54.572],[-163.848,55.039],[-162.87,55.348],[-161.804,55.895],[-160.564,56.008],[-160.071,56.418],[-158.684,57.017],[-158.461,57.217],[-157.723,57.57],[-157.55,58.328],[-157.042,58.919],[-158.195,58.616],[-158.517,58.788],[-159.059,58.424],[-159.712,58.931],[-159.981,58.573],[-160.355,59.071],[-161.355,58.671],[-161.969,58.672],[-162.055,59.267],[-161.874,59.634],[-162.518,59.99],[-163.818,59.798],[-164.662,60.267],[-165.346,60.507],[-165.351,61.074],[-166.121,61.5],[-165.734,62.075],[-164.919,62.633],[-164.563,63.146],[-163.753,63.219],[-163.067,63.059],[-162.261,63.542],[-161.534,63.456],[-160.773,63.766],[-160.958,64.223],[-161.518,64.403],[-160.778,64.789],[-161.392,64.777],[-162.453,64.559],[-162.758,64.339],[-163.546,64.559],[-164.961,64.447],[-166.425,64.687],[-166.845,65.089],[-168.111,65.67],[-166.705,66.088],[-164.475,66.577],[-163.653,66.577],[-163.789,66.077],[-161.678,66.116],[-162.49,66.736],[-163.72,67.116],[-164.431,67.616],[-165.39,68.043],[-166.764,68.359],[-166.205,68.883],[-164.431,68.916],[-163.169,69.371],[-162.931,69.858],[-161.909,70.333],[-160.935,70.448],[-159.039,70.892],[-158.12,70.825],[-156.581,71.358],[-155.068,71.148],[-154.344,70.696],[-153.9,70.89],[-152.21,70.83],[-152.27,70.6],[-150.74,70.43],[-149.72,70.53],[-147.613,70.214],[-145.69,70.12],[-144.92,69.99],[-143.589,70.153],[-142.073,69.852],[-140.986,69.712],[-140.986,69.712]]]},{"region":0,"bounds":[-171.791,62.977,-168.689,63.783],"rings":[[[-171.732,63.783],[-171.114,63.592],[-170.491,63.695],[-169.683,63.431],[-168.689,63.298],[-168.772,63.189],[-169.529,62.977],[-170.291,63.194],[-170.671,63.376],[-171.553,63.318],[-171.791,63.406],[-171.732,63.783]]]},{"region":3,"bounds":[46.466,40.662,87.36,55.385],"rings":[[[87.36,49.215],[86.599,48.549],[85.768,48.456],[85.72,47.453],[85.164,47.001],[83.18,47.33],[82.459,45.54],[81.947,45.317],[79.966,44.918],[80.866,43.18],[80.18,42.92],[80.26,42.35],[79.644,42.497],[79.142,42.856],[77.658,42.961],[76,42.988],[75.637,42.878],[74.213,43.298],[73.645,43.091],[73.49,42.501],[71.845,42.845],[71.186,42.704],[70.962,42.266],[70.389,42.081],[69.07,41.384],[68.632,40.669],[68.26,40.662],[67.986,41.136],[66.714,41.168],[66.511,41.988],[66.023,41.995],[66.098,42.998],[64.901,43.728],[63.186,43.65],[62.013,43.504],[61.058,44.406],[60.24,44.784],[58.69,45.5],[58.503,45.587],[55.929,44.996],[55.968,41.309],[55.455,41.26],[54.755,42.044],[54.079,42.324],[52.944,42.116],[52.502,41.783],[52.446,42.027],[52.692,42.444],[52.501,42.792],[51.342,43.133],[50.891,44.031],[50.339,44.284],[50.306,44.61],[51.279,44.515],[51.317,45.246],[52.167,45.408],[53.041,45.259],[53.221,46.235],[53.043,46.853],[52.042,46.805],[51.192,47.049],[50.034,46.609],[49.101,46.399],[48.593,46.561],[48.695,47.076],[48.057,47.744],[47.315,47.716],[46.466,48.394],[47.044,49.152],[46.752,49.356],[47.549,50.455],[48.578,49.875],[48.702,50.605],[50.767,51.693],[52.329,51.719],[54.533,51.026],[55.717,50.622],[56.778,51.044],[58.363,51.064],[59.642,50.545],[59.933,50.842],[61.337,50.799],[61.588,51.273],[59.968,51.96],[60.927,52.448],[60.74,52.72],[61.7,52.98],[60.978,53.665],[61.437,54.006],[65.179,54.354],[65.667,54.601],[68.169,54.97],[69.068,55.385],[70.865,55.17],[71.18,54.133],[72.224,54.377],[73.509,54.036],[73.426,53.49],[74.385,53.547],[76.891,54.491],[76.525,54.177],[77.801,53.404],[80.036,50.865],[80.568,51.388],[81.946,50.812],[83.383,51.069],[83.935,50.889],[84.416,50.311],[85.116,50.117],[85.541,49.693],[86.829,49.827],[87.36,49.215]]]},{"region":3,"bounds":[55.929,37.145,73.055,45.587],"rings":[[[55.968,41.309],[55.929,44.996],[58.503,45.587],[58.69,45.5],[60.24,44.784],[61.058,44.406],[62.013,43.504],[63.186,43.65],[64.901,43.728],[66.098,42.998],[66.023,41.995],[66.511,41.988],[66.714,41.168],[67.986,41.136],[68.26,40.662],[68.632,40.669],[69.07,41.384],[70.389,42.081],[70.962,42.266],[71.259,42.168],[70.42,41.52],[71.158,41.144],[71.87,41.393],[73.055,40.866],[71.775,40.146],[71.014,40.244],[70.601,40.219],[70.458,40.496],[70.667,40.96],[69.329,40.728],[69.012,40.086],[68.536,39.533],[67.701,39.58],[67.442,39.14],[68.176,38.902],[68.392,38.157],[67.83,37.145],[67.076,37.356],[66.519,37.363],[66.546,37.975],[65.216,38.403],[64.17,38.892],[63.518,39.363],[62.374,40.054],[61.883,41.085],[61.547,41.266],[60.466,41.22],[60.083,41.425],[59.976,42.223],[58.629,42.752],[57.787,42.171],[56.932,41.826],[57.096,41.322],[55.968,41.309]]]},{"region":9,"bounds":[141,-10.652,150.802,-2.6],"rings":[[[141,-2.6],[142.735,-3.289],[144.584,-3.861],[145.273,-4.374],[145.83,-4.876],[145.982,-5.466],[147.648,-6.084],[147.891,-6.614],[146.971,-6.722],[147.192,-7.388],[148.085,-8.044],[148.734,-9.105],[149.307,-9.071],[149.267,-9.514],[150.039,-9.684],[149.739,-9.873],[150.802,-10.294],[150.691,-10.583],[150.028,-10.652],[149.782,-10.393],[148.923,-10.281],[147.913,-10.13],[147.135,-9.492],[146.568,-8.943],[146.048,-8.067],[144.744,-7.63],[143.897,-7.915],[143.286,-8.245],[143.414,-8.983],[142.628,-9.327],[142.068,-9.16],[141.034,-9.118],[141.017,-5.859],[141,-2.6]]]},{"region":9,"bounds":[150.662,-4.766,153.14,-2.5],"rings":[[[152.64,-3.66],[153.02,-3.98],[153.14,-4.5],[152.827,-4.766],[152.639,-4.176],[152.406,-3.79],[151.953,-3.462],[151.384,-3.035],[150.662,-2.741],[150.94,-2.5],[151.48,-2.78],[151.82,-3],[152.24,-3.24],[152.64,-3.66]]]},{"region":9,"bounds":[148.319,-6.318,152.339,-4.149],"rings":[[[151.301,-5.841],[150.754,-6.084],[150.241,-6.318],[149.71,-6.317],[148.89,-6.026],[148.319,-5.747],[148.402,-5.438],[149.298,-5.584],[149.846,-5.506],[149.996,-5.026],[150.14,-5.001],[150.237,-5.532],[150.807,-5.456],[151.09,-5.114],[151.648,-4.757],[151.538,-4.168],[152.137,-4.149],[152.339,-4.313],[152.319,-4.868],[151.983,-5.478],[151.459,-5.56],[151.301,-5.841]]]},{"region":9,"bounds":[154.514,-6.92,156.02,-5.042],"rings":[[[154.76,-5.34],[155.063,-5.567],[155.548,-6.201],[156.02,-6.54],[155.88,-6.82],[155.6,-6.92],[155.167,-6.536],[154.729,-5.901],[154.514,-5.139],[154.653,-5.042],[154.76,-5.34]]]},{"region":8,"bounds":[130.52,-9.118,141.034,-0.37],"rings":[[[141,-2.6],[141.017,-5.859],[141.034,-9.118],[140.143,-8.297],[139.128,-8.096],[138.881,-8.381],[137.614,-8.412],[138.039,-7.598],[138.669,-7.32],[138.408,-6.233],[137.928,-5.393],[135.989,-4.547],[135.165,-4.463],[133.663,-3.539],[133.368,-4.025],[132.984,-4.113],[132.757,-3.746],[132.754,-3.312],[131.99,-2.821],[133.067,-2.46],[133.78,-2.48],[133.696,-2.215],[132.232,-2.213],[131.836,-1.617],[130.943,-1.433],[130.52,-0.938],[131.868,-0.695],[132.38,-0.37],[133.986,-0.78],[134.143,-1.152],[134.423,-2.769],[135.458,-3.368],[136.293,-2.307],[137.441,-1.704],[138.33,-1.703],[139.185,-2.051],[139.927,-2.409],[141,-2.6]]]},{"region":8,"bounds":[123.46,-10.36,125.089,-8.893],"rings":[[[124.969,-8.893],[125.07,-9.09],[125.089,-9.393],[124.436,-10.14],[123.58,-10.36],[123.46,-10.24],[123.55,-9.9],[123.98,-9.29],[124.969,-8.893]]]},{"region":8,"bounds":[134.113,-6.895,134.727,-5.445],"rings":[[[134.21,-6.895],[134.113,-6.142],[134.29,-5.783],[134.5,-5.445],[134.727,-5.738],[134.725,-6.214],[134.21,-6.895]]]},{"region":8,"bounds":[108.953,-4.107,118.997,4.307],"rings":[[[117.882,4.138],[117.313,3.234],[118.048,2.288],[117.876,1.828],[118.997,0.902],[117.812,0.784],[117.478,0.102],[117.522,-0.804],[116.56,-1.488],[116.534,-2.484],[116.148,-4.013],[116.001,-3.657],[114.865,-4.107],[114.469,-3.496],[113.756,-3.439],[113.257,-3.119],[112.068,-3.478],[111.703,-2.994],[111.048,-3.049],[110.224,-2.934],[110.071,-1.593],[109.572,-1.315],[109.092,-0.46],[108.953,0.415],[109.069,1.342],[109.663,2.006],[109.83,1.338],[110.514,0.773],[111.159,0.976],[111.798,0.904],[112.38,1.41],[112.86,1.498],[113.806,1.218],[114.621,1.431],[115.134,2.821],[115.519,3.169],[115.866,4.307],[117.015,4.306],[117.882,4.138]]]},{"region":8,"bounds":[127.899,-3.858,130.835,-2.802],"rings":[[[129.371,-2.802],[130.471,-3.094],[130.835,-3.858],[129.991,-3.446],[129.155,-3.363],[128.591,-3.429],[127.899,-3.393],[128.136,-2.844],[129.371,-2.802]]]},{"region":8,"bounds":[125.989,-3.791,127.249,-3.129],"rings":[[[126.875,-3.791],[126.184,-3.607],[125.989,-3.177],[127.001,-3.129],[127.249,-3.459],[126.875,-3.791]]]},{"region":8,"bounds":[127.399,-0.9,128.688,2.175],"rings":[[[127.932,2.175],[128.004,1.629],[128.595,1.541],[128.688,1.132],[128.636,0.258],[128.12,0.356],[127.968,-0.252],[128.38,-0.78],[128.1,-0.9],[127.696,-0.267],[127.399,1.012],[127.601,1.811],[127.932,2.175]]]},{"region":8,"bounds":[118.768,-5.673,125.241,1.643],"rings":[[[122.928,0.875],[124.078,0.917],[125.066,1.643],[125.241,1.42],[124.437,0.428],[123.686,0.236],[122.723,0.431],[121.057,0.381],[120.183,0.237],[120.041,-0.52],[120.936,-1.409],[121.476,-0.956],[123.341,-0.616],[123.258,-1.076],[122.823,-0.931],[122.389,-1.517],[121.508,-1.904],[122.455,-3.186],[122.272,-3.53],[123.171,-4.684],[123.162,-5.341],[122.629,-5.635],[122.236,-5.283],[122.72,-4.464],[121.738,-4.851],[121.489,-4.575],[121.619,-4.188],[120.898,-3.602],[120.972,-2.628],[120.305,-2.932],[120.39,-4.098],[120.431,-5.528],[119.797,-5.673],[119.367,-5.38],[119.654,-4.459],[119.499,-3.494],[119.078,-3.487],[118.768,-2.802],[119.181,-2.147],[119.323,-1.353],[119.826,0.154],[120.036,0.566],[120.886,1.309],[121.667,1.014],[122.928,0.875]]]},{"region":8,"bounds":[118.968,-10.259,120.776,-9.361],"rings":[[[120.295,-10.259],[118.968,-9.558],[119.9,-9.361],[120.426,-9.666],[120.776,-9.97],[120.716,-10.24],[120.295,-10.259]]]},{"region":8,"bounds":[119.921,-8.934,122.904,-8.094],"rings":[[[121.342,-8.537],[122.007,-8.461],[122.904,-8.094],[122.757,-8.65],[121.254,-8.934],[119.924,-8.81],[119.921,-8.445],[120.715,-8.237],[121.342,-8.537]]]},{"region":8,"bounds":[116.74,-9.041,119.127,-8.096],"rings":[[[118.261,-8.362],[118.878,-8.281],[119.127,-8.706],[117.97,-8.907],[117.278,-9.041],[116.74,-9.033],[117.084,-8.457],[117.632,-8.449],[117.9,-8.096],[118.261,-8.362]]]},{"region":8,"bounds":[105.365,-8.752,115.706,-5.896],"rings":[[[108.487,-6.422],[108.623,-6.778],[110.539,-6.877],[110.76,-6.465],[112.615,-6.946],[112.979,-7.594],[114.479,-7.777],[115.706,-8.371],[114.565,-8.752],[113.465,-8.349],[112.56,-8.376],[111.522,-8.302],[110.586,-8.123],[109.428,-7.741],[108.694,-7.642],[108.278,-7.767],[106.454,-7.355],[106.281,-6.925],[105.365,-6.851],[106.052,-5.896],[107.265,-5.955],[108.072,-6.346],[108.487,-6.422]]]},{"region":8,"bounds":[95.293,-5.873,106.109,5.48],"rings":[[[104.37,-1.085],[104.539,-1.782],[104.888,-2.34],[105.622,-2.429],[106.109,-3.062],[105.857,-4.306],[105.818,-5.852],[104.71,-5.873],[103.868,-5.037],[102.584,-4.22],[102.156,-3.614],[101.399,-2.8],[100.903,-2.05],[100.142,-0.65],[99.264,0.183],[98.97,1.043],[98.601,1.824],[97.7,2.453],[97.177,3.309],[96.424,3.869],[95.381,4.971],[95.293,5.48],[95.937,5.44],[97.485,5.246],[98.369,4.268],[99.143,3.59],[99.694,3.174],[100.641,2.099],[101.658,2.084],[102.498,1.399],[103.077,0.561],[103.838,0.105],[103.438,-0.712],[104.011,-1.059],[104.37,-1.085]]]},{"region":1,"bounds":[-68.634,-55.25,-65.05,-52.636],"rings":[[[-68.634,-52.636],[-68.25,-53.1],[-67.75,-53.85],[-66.45,-54.45],[-65.05,-54.7],[-65.5,-55.2],[-66.45,-55.25],[-66.96,-54.897],[-67.562,-54.87],[-68.633,-54.87],[-68.634,-52.636]]]},{"region":1,"bounds":[-73.415,-52.35,-53.628,-21.832],"rings":[[[-57.625,-30.216],[-57.875,-31.017],[-58.142,-32.045],[-58.133,-33.041],[-58.35,-33.263],[-58.427,-33.909],[-58.495,-34.431],[-57.226,-35.288],[-57.362,-35.977],[-56.737,-36.413],[-56.788,-36.902],[-57.749,-38.184],[-59.232,-38.72],[-61.237,-38.928],[-62.336,-38.828],[-62.126,-39.424],[-62.331,-40.173],[-62.146,-40.677],[-62.746,-41.029],[-63.77,-41.167],[-64.732,-40.803],[-65.118,-41.064],[-64.979,-42.058],[-64.303,-42.359],[-63.756,-42.044],[-63.458,-42.563],[-64.379,-42.874],[-65.182,-43.495],[-65.329,-44.501],[-65.565,-45.037],[-66.51,-45.04],[-67.294,-45.552],[-67.581,-46.302],[-66.597,-47.034],[-65.641,-47.236],[-65.985,-48.133],[-67.166,-48.697],[-67.816,-49.87],[-68.729,-50.264],[-69.139,-50.733],[-68.816,-51.771],[-68.15,-52.35],[-68.572,-52.299],[-69.498,-52.143],[-71.915,-52.009],[-72.329,-51.426],[-72.31,-50.677],[-72.976,-50.741],[-73.328,-50.379],[-73.415,-49.318],[-72.648,-48.879],[-72.331,-48.244],[-72.447,-47.739],[-71.917,-46.885],[-71.552,-45.561],[-71.659,-44.974],[-71.223,-44.784],[-71.33,-44.408],[-71.794,-44.207],[-71.464,-43.788],[-71.915,-43.409],[-72.149,-42.255],[-71.747,-42.051],[-71.916,-40.832],[-71.681,-39.808],[-71.414,-38.916],[-70.815,-38.553],[-71.119,-37.577],[-71.122,-36.658],[-70.365,-36.005],[-70.388,-35.17],[-69.817,-34.194],[-69.815,-33.274],[-70.074,-33.091],[-70.535,-31.365],[-69.919,-30.336],[-70.014,-29.368],[-69.656,-28.459],[-69.001,-27.521],[-68.296,-26.899],[-68.595,-26.507],[-68.386,-26.185],[-68.418,-24.519],[-67.328,-24.025],[-66.985,-22.986],[-67.107,-22.736],[-66.273,-21.832],[-64.965,-22.076],[-64.377,-22.798],[-63.987,-21.994],[-62.846,-22.035],[-62.685,-22.249],[-60.847,-23.881],[-60.029,-24.033],[-58.807,-24.771],[-57.777,-25.162],[-57.634,-25.604],[-58.618,-27.124],[-57.61,-27.396],[-56.487,-27.548],[-55.696,-27.388],[-54.789,-26.622],[-54.625,-25.739],[-54.13,-25.548],[-53.628,-26.125],[-53.649,-26.923],[-54.491,-27.475],[-55.162,-27.882],[-56.291,-28.853],[-57.625,-30.216]]]},{"region":1,"bounds":[-74.663,-55.612,-66.96,-52.518],"rings":[[[-68.634,-52.636],[-68.633,-54.87],[-67.562,-54.87],[-66.96,-54.897],[-67.291,-55.301],[-68.149,-55.612],[-68.64,-55.58],[-69.232,-55.499],[-69.958,-55.198],[-71.006,-55.054],[-72.264,-54.495],[-73.285,-53.958],[-74.663,-52.837],[-73.838,-53.047],[-72.434,-53.715],[-71.108,-54.074],[-70.592,-53.616],[-70.267,-52.931],[-69.346,-52.518],[-68.634,-52.636]]]},{"region":1,"bounds":[-75.644,-53.856,-66.985,-17.58],"rings":[[[-69.59,-17.58],[-69.1,-18.26],[-68.967,-18.982],[-68.442,-19.405],[-68.757,-20.373],[-68.22,-21.494],[-67.828,-22.873],[-67.107,-22.736],[-66.985,-22.986],[-67.328,-24.025],[-68.418,-24.519],[-68.386,-26.185],[-68.595,-26.507],[-68.296,-26.899],[-69.001,-27.521],[-69.656,-28.459],[-70.014,-29.368],[-69.919,-30.336],[-70.535,-31.365],[-70.074,-33.091],[-69.815,-33.274],[-69.817,-34.194],[-70.388,-35.17],[-70.365,-36.005],[-71.122,-36.658],[-71.119,-37.577],[-70.815,-38.553],[-71.414,-38.916],[-71.681,-39.808],[-71.916,-40.832],[-71.747,-42.051],[-72.149,-42.255],[-71.915,-43.409],[-71.464,-43.788],[-71.794,-44.207],[-71.33,-44.408],[-71.223,-44.784],[-71.659,-44.974],[-71.552,-45.561],[-71.917,-46.885],[-72.447,-47.739],[-72.331,-48.244],[-72.648,-48.879],[-73.415,-49.318],[-73.328,-50.379],[-72.976,-50.741],[-72.31,-50.677],[-72.329,-51.426],[-71.915,-52.009],[-69.498,-52.143],[-68.572,-52.299],[-69.461,-52.292],[-69.943,-52.538],[-70.845,-52.899],[-71.006,-53.833],[-71.43,-53.856],[-72.558,-53.531],[-73.703,-52.835],[-73.703,-52.835],[-74.947,-52.263],[-75.26,-51.629],[-74.977,-51.043],[-75.48,-50.378],[-75.608,-48.674],[-75.183,-47.712],[-74.127,-46.939],[-75.644,-46.648],[-74.692,-45.764],[-74.352,-44.103],[-73.24,-44.455],[-72.718,-42.383],[-73.389,-42.118],[-73.701,-43.366],[-74.332,-43.225],[-74.018,-41.795],[-73.677,-39.942],[-73.218,-39.259],[-73.506,-38.283],[-73.588,-37.156],[-73.167,-37.124],[-72.553,-35.509],[-71.862,-33.909],[-71.438,-32.419],[-71.669,-30.921],[-71.37,-30.096],[-71.49,-28.861],[-70.905,-27.64],[-70.725,-25.706],[-70.404,-23.629],[-70.091,-21.393],[-70.164,-19.756],[-70.373,-18.348],[-69.858,-18.093],[-69.59,-17.58]]]},{"region":4,"bounds":[12.182,-13.257,31.174,5.256],"rings":[[[29.34,-4.5],[29.52,-5.42],[29.42,-5.94],[29.62,-6.52],[30.2,-7.08],[30.74,-8.34],[30.74,-8.34],[30.346,-8.238],[29.003,-8.407],[28.735,-8.527],[28.45,-9.165],[28.674,-9.606],[28.496,-10.79],[28.372,-11.794],[28.642,-11.972],[29.342,-12.361],[29.616,-12.179],[29.7,-13.257],[28.934,-13.249],[28.524,-12.699],[28.155,-12.272],[27.389,-12.133],[27.164,-11.609],[26.553,-11.924],[25.752,-11.785],[25.418,-11.331],[24.783,-11.239],[24.315,-11.263],[24.257,-10.952],[23.912,-10.927],[23.457,-10.868],[22.837,-11.018],[22.403,-10.993],[22.155,-11.085],[22.209,-9.895],[21.875,-9.524],[21.802,-8.909],[21.949,-8.306],[21.746,-7.92],[21.728,-7.291],[20.515,-7.3],[20.602,-6.939],[20.092,-6.943],[20.038,-7.116],[19.418,-7.155],[19.167,-7.738],[19.017,-7.988],[18.464,-7.847],[18.134,-7.988],[17.473,-8.069],[17.09,-7.546],[16.86,-7.222],[16.573,-6.623],[16.327,-5.877],[13.376,-5.864],[13.025,-5.984],[12.735,-5.966],[12.322,-6.1],[12.182,-5.79],[12.437,-5.684],[12.468,-5.248],[12.632,-4.991],[12.996,-4.781],[13.258,-4.883],[13.6,-4.5],[14.145,-4.51],[14.209,-4.793],[14.583,-4.97],[15.171,-4.344],[15.754,-3.855],[16.006,-3.535],[15.973,-2.712],[16.407,-1.741],[16.865,-1.226],[17.524,-0.744],[17.639,-0.425],[17.664,-0.058],[17.827,0.289],[17.774,0.856],[17.899,1.742],[18.094,2.366],[18.394,2.9],[18.453,3.504],[18.543,4.202],[18.932,4.71],[19.468,5.032],[20.291,4.692],[20.928,4.323],[21.659,4.224],[22.405,4.029],[22.704,4.633],[22.841,4.71],[23.297,4.61],[24.411,5.109],[24.805,4.897],[25.129,4.927],[25.279,5.17],[25.65,5.256],[26.403,5.151],[27.044,5.128],[27.374,5.234],[27.98,4.408],[28.429,4.287],[28.697,4.455],[29.159,4.389],[29.716,4.601],[29.953,4.174],[30.834,3.509],[30.834,3.509],[30.773,2.34],[31.174,2.204],[30.853,1.849],[30.469,1.584],[30.086,1.062],[29.876,0.597],[29.82,-0.205],[29.588,-0.587],[29.579,-1.341],[29.292,-1.62],[29.255,-2.215],[29.117,-2.292],[29.025,-2.839],[29.276,-3.294],[29.34,-4.5]]]},{"region":4,"bounds":[40.981,-1.683,51.134,12.025],"rings":[[[41.585,-1.683],[40.993,-0.858],[40.981,2.785],[41.855,3.919],[42.129,4.234],[42.77,4.253],[43.661,4.958],[44.964,5.002],[47.789,8.003],[48.487,8.838],[48.938,9.452],[48.938,9.973],[48.938,10.982],[48.942,11.394],[48.948,11.411],[48.948,11.411],[49.268,11.43],[49.729,11.579],[50.259,11.68],[50.732,12.022],[51.111,12.025],[51.134,11.748],[51.042,11.167],[51.045,10.641],[50.834,10.28],[50.552,9.199],[50.071,8.082],[49.453,6.805],[48.595,5.339],[47.741,4.219],[46.565,2.855],[45.564,2.046],[44.068,1.053],[43.136,0.292],[42.042,-0.919],[41.811,-1.446],[41.585,-1.683]]]},{"region":4,"bounds":[33.894,-4.677,41.855,5.506],"rings":[[[39.202,-4.677],[37.767,-3.677],[37.699,-3.097],[34.073,-1.06],[33.904,-0.95],[33.894,0.11],[34.18,0.515],[34.672,1.177],[35.036,1.906],[34.596,3.054],[34.479,3.556],[34.005,4.25],[34.62,4.847],[35.298,5.506],[35.817,5.338],[35.817,4.777],[36.159,4.448],[36.855,4.448],[38.121,3.599],[38.437,3.589],[38.671,3.616],[38.893,3.501],[39.559,3.422],[39.855,3.839],[40.768,4.257],[41.172,3.919],[41.855,3.919],[40.981,2.785],[40.993,-0.858],[41.585,-1.683],[40.885,-2.083],[40.638,-2.5],[40.263,-2.573],[40.121,-3.278],[39.8,-3.681],[39.605,-4.347],[39.202,-4.677]]]},{"region":5,"bounds":[21.937,8.229,38.41,22],"rings":[[[24.567,8.229],[23.806,8.666],[23.459,8.954],[23.395,9.265],[23.557,9.681],[23.554,10.089],[22.978,10.714],[22.864,11.142],[22.876,11.385],[22.509,11.679],[22.498,12.26],[22.288,12.646],[21.937,12.588],[22.038,12.955],[22.297,13.372],[22.183,13.786],[22.512,14.093],[22.304,14.327],[22.568,14.944],[23.025,15.681],[23.887,15.611],[23.838,19.58],[23.85,20],[25,20.003],[25,22],[29.02,22],[32.9,22],[36.866,22],[37.189,21.019],[36.969,20.837],[37.115,19.808],[37.482,18.614],[37.863,18.368],[38.41,17.998],[37.904,17.428],[37.167,17.263],[36.853,16.957],[36.754,16.292],[36.323,14.822],[36.43,14.422],[36.27,13.563],[35.864,12.578],[35.26,12.083],[34.832,11.319],[34.731,10.91],[34.257,10.63],[33.962,9.584],[33.975,8.685],[33.963,9.464],[33.825,9.484],[33.842,9.982],[33.722,10.325],[33.207,10.72],[33.087,11.441],[33.207,12.179],[32.743,12.248],[32.675,12.025],[32.074,11.973],[32.314,11.681],[32.4,11.081],[31.851,10.531],[31.353,9.81],[30.838,9.707],[29.997,10.291],[29.619,10.085],[29.516,9.793],[29.001,9.604],[28.967,9.398],[27.971,9.398],[27.834,9.604],[27.113,9.639],[26.752,9.467],[26.477,9.553],[25.962,10.136],[25.791,10.411],[25.07,10.274],[24.795,9.81],[24.537,8.918],[24.194,8.729],[23.887,8.62],[24.567,8.229]]]},{"region":4,"bounds":[13.54,7.422,23.887,23.41],"rings":[[[23.838,19.58],[23.887,15.611],[23.025,15.681],[22.568,14.944],[22.304,14.327],[22.512,14.093],[22.183,13.786],[22.297,13.372],[22.038,12.955],[21.937,12.588],[22.288,12.646],[22.498,12.26],[22.509,11.679],[22.876,11.385],[22.864,11.142],[22.231,10.972],[21.724,10.567],[21.001,9.476],[20.06,9.013],[19.094,9.075],[18.812,8.983],[18.911,8.631],[18.39,8.281],[17.965,7.891],[16.706,7.508],[16.456,7.735],[16.291,7.754],[16.106,7.497],[15.279,7.422],[15.436,7.693],[15.121,8.382],[14.98,8.796],[14.544,8.966],[13.954,9.549],[14.171,10.021],[14.627,9.921],[14.909,9.992],[15.468,9.982],[14.924,10.891],[14.96,11.556],[14.893,12.219],[14.496,12.859],[14.596,13.33],[13.954,13.353],[13.957,13.997],[13.54,14.367],[13.972,15.684],[15.248,16.627],[15.3,17.928],[15.686,19.957],[15.903,20.388],[15.487,20.73],[15.471,21.048],[15.097,21.309],[14.851,22.863],[15.861,23.41],[19.849,21.495],[23.838,19.58]]]},{"region":1,"bounds":[-74.458,18.031,-71.625,19.916],"rings":[[[-71.712,19.714],[-71.625,19.17],[-71.701,18.785],[-71.945,18.617],[-71.688,18.317],[-71.708,18.045],[-72.372,18.215],[-72.844,18.146],[-73.455,18.218],[-73.922,18.031],[-74.458,18.343],[-74.37,18.665],[-73.45,18.526],[-72.695,18.446],[-72.335,18.668],[-72.792,19.102],[-72.784,19.484],[-73.415,19.64],[-73.19,19.916],[-72.58,19.872],[-71.712,19.714]]]},{"region":1,"bounds":[-71.945,17.599,-68.318,19.885],"rings":[[[-71.708,18.045],[-71.688,18.317],[-71.945,18.617],[-71.701,18.785],[-71.625,19.17],[-71.712,19.714],[-71.587,19.885],[-70.807,19.88],[-70.214,19.623],[-69.951,19.648],[-69.769,19.293],[-69.222,19.313],[-69.254,19.015],[-68.809,18.979],[-68.318,18.612],[-68.689,18.205],[-69.165,18.423],[-69.624,18.381],[-69.953,18.428],[-70.133,18.246],[-70.517,18.184],[-70.669,18.427],[-71,18.283],[-71.4,17.599],[-71.658,17.758],[-71.708,18.045]]]},{"region":3,"bounds":[178.725,70.781,180,71.516],"rings":[[[178.725,71.099],[180,71.516],[180,70.832],[178.903,70.781],[178.725,71.099]]]},{"region":3,"bounds":[27.288,41.151,180,77.698],"rings":[[[49.101,46.399],[48.645,45.806],[47.676,45.641],[46.682,44.609],[47.591,43.66],[47.493,42.987],[48.584,41.809],[48.584,41.809],[47.987,41.406],[47.816,41.151],[47.373,41.22],[46.686,41.827],[46.405,41.861],[45.776,42.092],[45.47,42.503],[44.538,42.712],[43.931,42.555],[43.756,42.741],[42.394,43.22],[40.922,43.382],[40.077,43.553],[39.955,43.435],[38.68,44.28],[37.539,44.657],[36.675,45.245],[37.403,45.405],[38.233,46.241],[37.674,46.637],[39.148,47.045],[39.121,47.263],[38.224,47.102],[38.255,47.546],[38.771,47.826],[39.738,47.899],[39.896,48.232],[39.675,48.784],[40.081,49.307],[40.069,49.601],[38.595,49.926],[38.011,49.916],[37.393,50.384],[36.626,50.226],[35.356,50.577],[35.378,50.774],[35.022,51.208],[34.225,51.256],[34.142,51.566],[34.392,51.769],[33.753,52.335],[32.716,52.238],[32.412,52.289],[32.159,52.061],[31.786,52.102],[31.786,52.102],[31.54,52.742],[31.305,53.074],[31.498,53.167],[32.305,53.133],[32.694,53.351],[32.406,53.618],[31.731,53.794],[31.791,53.975],[31.384,54.157],[30.758,54.812],[30.972,55.082],[30.874,55.551],[29.896,55.789],[29.372,55.67],[29.23,55.918],[28.177,56.169],[27.855,56.759],[27.77,57.244],[27.288,57.475],[27.717,57.792],[27.42,58.725],[28.132,59.301],[27.981,59.475],[27.981,59.475],[29.118,60.028],[28.07,60.504],[28.07,60.504],[30.211,61.78],[31.14,62.358],[31.516,62.868],[30.036,63.553],[30.445,64.204],[29.544,64.949],[30.218,65.806],[29.055,66.944],[29.977,67.698],[28.446,68.365],[28.592,69.065],[29.4,69.157],[31.101,69.558],[31.101,69.558],[32.133,69.906],[33.775,69.301],[36.514,69.063],[40.292,67.932],[41.06,67.457],[41.126,66.792],[40.016,66.266],[38.383,66],[33.919,66.76],[33.184,66.633],[34.815,65.9],[34.879,65.436],[34.944,64.414],[36.231,64.109],[37.013,63.85],[37.142,64.335],[36.54,64.764],[37.176,65.143],[39.593,64.521],[40.436,64.764],[39.763,65.497],[42.093,66.476],[43.016,66.419],[43.95,66.069],[44.532,66.756],[43.698,67.352],[44.188,67.951],[43.453,68.571],[46.25,68.25],[46.821,67.69],[45.555,67.567],[45.562,67.01],[46.349,66.668],[47.894,66.885],[48.139,67.522],[50.228,67.999],[53.717,68.857],[54.472,68.808],[53.486,68.201],[54.726,68.097],[55.443,68.439],[57.317,68.466],[58.802,68.881],[59.941,68.278],[61.078,68.941],[60.03,69.52],[60.55,69.85],[63.504,69.547],[64.888,69.235],[68.512,68.092],[69.181,68.616],[68.164,69.144],[68.135,69.356],[66.93,69.455],[67.26,69.929],[66.725,70.709],[66.695,71.029],[68.54,71.934],[69.196,72.843],[69.94,73.04],[72.588,72.776],[72.796,72.22],[71.848,71.409],[72.47,71.09],[72.792,70.391],[72.565,69.021],[73.668,68.408],[73.239,67.74],[71.28,66.32],[72.423,66.173],[72.821,66.533],[73.921,66.789],[74.187,67.284],[75.052,67.76],[74.469,68.329],[74.936,68.989],[73.842,69.071],[73.602,69.628],[74.4,70.632],[73.101,71.447],[74.891,72.121],[74.659,72.832],[75.158,72.855],[75.684,72.301],[75.289,71.336],[76.359,71.153],[75.903,71.874],[77.577,72.267],[79.652,72.32],[81.5,71.75],[80.611,72.583],[80.511,73.648],[82.25,73.85],[84.655,73.806],[86.822,73.937],[86.01,74.46],[87.167,75.116],[88.316,75.144],[90.26,75.64],[92.901,75.773],[93.234,76.047],[95.86,76.14],[96.678,75.915],[98.923,76.447],[100.76,76.43],[101.035,76.862],[101.991,77.288],[104.352,77.698],[106.067,77.374],[104.705,77.127],[106.97,76.974],[107.24,76.48],[108.154,76.723],[111.077,76.71],[113.332,76.222],[114.134,75.848],[113.885,75.328],[112.779,75.032],[110.151,74.477],[109.4,74.18],[110.64,74.04],[112.119,73.788],[113.02,73.977],[113.53,73.335],[113.969,73.595],[115.568,73.753],[118.776,73.588],[119.02,73.12],[123.201,72.971],[123.258,73.735],[125.38,73.56],[126.976,73.565],[128.591,73.039],[129.052,72.399],[128.46,71.98],[129.716,71.193],[131.289,70.787],[132.254,71.836],[133.858,71.386],[135.562,71.655],[137.498,71.348],[138.234,71.628],[139.87,71.488],[139.148,72.416],[140.468,72.849],[149.5,72.2],[150.351,71.606],[152.969,70.842],[157.007,71.031],[158.998,70.867],[159.83,70.453],[159.709,69.722],[160.941,69.437],[162.279,69.642],[164.052,69.668],[165.94,69.472],[167.836,69.583],[169.578,68.694],[170.817,69.014],[170.008,69.653],[170.453,70.097],[173.644,69.817],[175.724,69.877],[178.6,69.4],[180,68.964],[180,64.98],[179.993,64.974],[178.707,64.535],[177.411,64.608],[178.313,64.076],[178.908,63.252],[179.37,62.983],[179.486,62.569],[179.228,62.304],[177.364,62.522],[174.569,61.769],[173.68,61.653],[172.15,60.95],[170.698,60.336],[170.331,59.882],[168.9,60.574],[166.295,59.789],[165.84,60.16],[164.877,59.732],[163.539,59.869],[163.217,59.211],[162.017,58.243],[162.053,57.839],[163.192,57.615],[163.058,56.159],[162.13,56.122],[161.701,55.286],[162.117,54.855],[160.369,54.344],[160.022,53.203],[158.531,52.959],[158.231,51.943],[156.79,51.011],[156.42,51.7],[155.992,53.159],[155.434,55.381],[155.914,56.768],[156.758,57.365],[156.81,57.832],[158.364,58.056],[160.151,59.315],[161.872,60.343],[163.67,61.141],[164.474,62.551],[163.258,62.466],[162.658,61.642],[160.121,60.544],[159.302,61.774],[156.721,61.434],[154.218,59.758],[155.044,59.145],[152.812,58.884],[151.266,58.781],[151.338,59.504],[149.784,59.656],[148.545,59.164],[145.487,59.336],[142.198,59.04],[138.958,57.088],[135.126,54.73],[136.702,54.604],[137.193,53.977],[138.165,53.755],[138.805,54.255],[139.902,54.19],[141.345,53.09],[141.379,52.239],[140.597,51.24],[140.513,50.046],[140.062,48.447],[138.555,47],[138.22,46.308],[136.862,45.144],[135.515,43.989],[134.869,43.398],[133.537,42.811],[132.906,42.798],[132.278,43.285],[130.936,42.553],[130.78,42.22],[130.78,42.22],[130.78,42.22],[130.78,42.22],[130.64,42.395],[130.64,42.395],[130.634,42.903],[131.145,42.93],[131.289,44.112],[131.025,44.968],[131.883,45.321],[133.097,45.144],[133.77,46.117],[134.112,47.212],[134.501,47.578],[135.026,48.478],[133.374,48.183],[132.507,47.789],[130.987,47.79],[130.582,48.73],[129.398,49.441],[127.657,49.76],[127.287,50.74],[126.939,51.354],[126.564,51.784],[125.946,52.793],[125.068,53.161],[123.571,53.459],[122.246,53.432],[121.003,53.251],[120.177,52.754],[120.726,52.516],[120.738,51.964],[120.182,51.644],[119.279,50.583],[119.288,50.143],[117.879,49.511],[116.679,49.889],[115.486,49.805],[114.962,50.14],[114.362,50.248],[112.898,49.544],[111.581,49.378],[110.662,49.13],[109.402,49.293],[108.475,49.283],[107.868,49.794],[106.889,50.274],[105.887,50.406],[104.622,50.275],[103.677,50.09],[102.256,50.511],[102.065,51.26],[100.889,51.517],[99.982,51.634],[98.861,52.047],[97.826,51.011],[98.232,50.422],[97.26,49.726],[95.814,49.977],[94.816,50.013],[94.148,50.481],[93.104,50.495],[92.235,50.802],[90.714,50.332],[88.806,49.471],[87.751,49.297],[87.36,49.215],[86.829,49.827],[85.541,49.693],[85.116,50.117],[84.416,50.311],[83.935,50.889],[83.383,51.069],[81.946,50.812],[80.568,51.388],[80.036,50.865],[77.801,53.404],[76.525,54.177],[76.891,54.491],[74.385,53.547],[73.426,53.49],[73.509,54.036],[72.224,54.377],[71.18,54.133],[70.865,55.17],[69.068,55.385],[68.169,54.97],[65.667,54.601],[65.179,54.354],[61.437,54.006],[60.978,53.665],[61.7,52.98],[60.74,52.72],[60.927,52.448],[59.968,51.96],[61.588,51.273],[61.337,50.799],[59.933,50.842],[59.642,50.545],[58.363,51.064],[56.778,51.044],[55.717,50.622],[54.533,51.026],[52.329,51.719],[50.767,51.693],[48.702,50.605],[48.578,49.875],[47.549,50.455],[46.752,49.356],[47.044,49.152],[46.466,48.394],[47.315,47.716],[48.057,47.744],[48.695,47.076],[48.593,46.561],[49.101,46.399]]]},{"region":3,"bounds":[91.181,78.756,100.187,81.25],"rings":[[[93.778,81.025],[95.941,81.25],[97.884,80.747],[100.187,79.78],[99.94,78.881],[97.758,78.756],[94.973,79.045],[93.313,79.427],[92.545,80.144],[91.181,80.341],[93.778,81.025]]]},{"region":3,"bounds":[99.438,77.921,105.372,79.346],"rings":[[[102.838,79.281],[105.372,78.713],[105.075,78.307],[99.438,77.921],[101.265,79.234],[102.086,79.346],[102.838,79.281]]]},{"region":3,"bounds":[136.974,74.611,145.086,76.137],"rings":[[[138.831,76.137],[141.472,76.093],[145.086,75.563],[144.3,74.82],[140.614,74.848],[138.955,74.611],[136.974,75.262],[137.512,75.949],[138.831,76.137]]]},{"region":3,"bounds":[146.119,74.689,150.732,75.497],"rings":[[[148.222,75.346],[150.732,75.084],[149.576,74.689],[147.977,74.778],[146.119,75.173],[146.358,75.497],[148.222,75.346]]]},{"region":3,"bounds":[139.863,73.205,143.604,73.858],"rings":[[[139.863,73.37],[140.812,73.765],[142.062,73.858],[143.483,73.475],[143.604,73.212],[142.088,73.205],[140.038,73.317],[139.863,73.37]]]},{"region":3,"bounds":[44.847,80.01,51.523,80.919],"rings":[[[44.847,80.59],[46.799,80.772],[48.318,80.784],[48.523,80.515],[49.097,80.754],[50.04,80.919],[51.523,80.7],[51.136,80.547],[49.794,80.415],[48.894,80.34],[48.755,80.175],[47.586,80.01],[46.503,80.247],[47.072,80.559],[44.847,80.59]]]},{"region":3,"bounds":[19.661,54.313,22.758,55.19],"rings":[[[22.731,54.328],[20.892,54.313],[19.661,54.426],[19.888,54.866],[21.268,55.19],[22.316,55.015],[22.758,54.857],[22.651,54.583],[22.731,54.328]]]},{"region":3,"bounds":[51.456,70.633,68.852,76.94],"rings":[[[53.508,73.75],[55.902,74.627],[55.632,75.081],[57.869,75.609],[61.17,76.252],[64.498,76.439],[66.211,76.81],[68.157,76.94],[68.852,76.545],[68.181,76.234],[64.637,75.738],[61.584,75.261],[58.477,74.309],[56.987,73.333],[55.419,72.371],[55.623,71.541],[57.536,70.72],[56.945,70.633],[53.677,70.763],[53.412,71.207],[51.602,71.475],[51.456,72.015],[52.478,72.229],[52.444,72.775],[54.428,73.628],[53.508,73.75]]]},{"region":3,"bounds":[141.594,45.967,144.654,54.366],"rings":[[[142.915,53.705],[143.261,52.741],[143.235,51.757],[143.648,50.748],[144.654,48.976],[143.174,49.307],[142.559,47.862],[143.533,46.837],[143.505,46.138],[142.748,46.741],[142.092,45.967],[141.907,46.806],[142.018,47.78],[141.904,48.859],[142.136,49.615],[142.18,50.952],[141.594,51.935],[141.683,53.302],[142.607,53.762],[142.21,54.225],[142.655,54.366],[142.915,53.705]]]},{"region":3,"bounds":[-180,64.253,-169.9,68.964],"rings":[[[-174.928,67.206],[-175.014,66.584],[-174.34,66.336],[-174.572,67.062],[-171.857,66.913],[-169.9,65.977],[-170.891,65.541],[-172.53,65.438],[-172.555,64.461],[-172.955,64.253],[-173.892,64.283],[-174.654,64.631],[-175.984,64.923],[-176.207,65.357],[-177.223,65.52],[-178.36,65.391],[-178.903,65.74],[-178.686,66.112],[-179.884,65.875],[-179.433,65.404],[-180,64.98],[-180,68.964],[-177.55,68.2],[-174.928,67.206]]]},{"region":3,"bounds":[-180,70.832,-177.578,71.558],"rings":[[[-178.694,70.893],[-180,70.832],[-180,71.516],[-179.872,71.558],[-179.024,71.556],[-177.578,71.269],[-177.664,71.133],[-178.694,70.893]]]},{"region":3,"bounds":[32.454,44.361,36.53,46.22],"rings":[[[33.436,45.972],[33.699,46.22],[34.41,46.005],[34.732,45.966],[34.862,45.768],[35.013,45.738],[35.021,45.651],[35.51,45.41],[36.53,45.47],[36.335,45.113],[35.24,44.94],[33.883,44.361],[33.326,44.565],[33.547,45.035],[32.454,45.327],[32.631,45.519],[33.588,45.852],[33.436,45.972]]]},{"region":1,"bounds":[-78.98,26.42,-77.82,26.87],"rings":[[[-78.98,26.79],[-78.51,26.87],[-77.85,26.84],[-77.82,26.58],[-78.91,26.42],[-78.98,26.79]]]},{"region":1,"bounds":[-77.79,25.879,-77,27.04],"rings":[[[-77.79,27.04],[-77,26.59],[-77.173,25.879],[-77.356,26.007],[-77.34,26.53],[-77.788,26.925],[-77.79,27.04]]]},{"region":1,"bounds":[-78.408,23.71,-77.535,25.21],"rings":[[[-78.191,25.21],[-77.89,25.17],[-77.54,24.34],[-77.535,23.76],[-77.78,23.71],[-78.034,24.286],[-78.408,24.576],[-78.191,25.21]]]},{"region":1,"bounds":[-61.2,-52.3,-57.75,-51.1],"rings":[[[-61.2,-51.85],[-60,-51.25],[-59.15,-51.5],[-58.55,-51.1],[-57.75,-51.55],[-58.05,-51.9],[-59.4,-52.2],[-59.85,-51.85],[-60.7,-52.3],[-61.2,-51.85]]]},{"region":2,"bounds":[10.445,76.77,21.544,80.051],"rings":[[[15.143,79.674],[15.523,80.016],[16.991,80.051],[18.252,79.702],[21.544,78.956],[19.027,78.563],[18.472,77.827],[17.594,77.638],[17.118,76.809],[15.913,76.77],[13.763,77.38],[14.67,77.736],[13.171,78.025],[11.222,78.869],[10.445,79.652],[13.171,80.01],[13.719,79.66],[15.143,79.674]]]},{"region":2,"bounds":[4.992,58.079,31.293,71.185],"rings":[[[31.101,69.558],[29.4,69.157],[28.592,69.065],[29.016,69.766],[27.732,70.164],[26.18,69.825],[25.689,69.092],[24.736,68.65],[23.662,68.891],[22.356,68.842],[21.245,69.37],[20.646,69.106],[20.025,69.065],[19.879,68.407],[17.994,68.567],[17.729,68.011],[16.769,68.014],[16.109,67.302],[15.108,66.194],[13.556,64.787],[13.92,64.445],[13.572,64.049],[12.58,64.066],[11.931,63.128],[11.992,61.8],[12.631,61.294],[12.3,60.118],[11.468,59.432],[11.027,58.856],[10.357,59.47],[8.382,58.313],[7.049,58.079],[5.666,58.588],[5.308,59.663],[4.992,61.971],[5.913,62.614],[8.553,63.454],[10.528,64.486],[12.358,65.88],[14.761,67.811],[16.436,68.563],[19.184,69.817],[21.378,70.255],[23.024,70.202],[24.547,71.03],[26.37,70.986],[28.166,71.185],[31.293,70.454],[30.005,70.186],[31.101,69.558]]]},{"region":2,"bounds":[17.368,79.4,27.408,80.657],"rings":[[[27.408,80.056],[25.925,79.518],[23.024,79.4],[20.075,79.567],[19.897,79.842],[18.462,79.86],[17.368,80.319],[20.456,80.598],[21.908,80.358],[22.919,80.657],[25.448,80.407],[27.408,80.056]]]},{"region":2,"bounds":[20.726,77.445,24.724,78.455],"rings":[[[24.724,77.854],[22.49,77.445],[20.726,77.677],[21.416,77.935],[20.812,78.255],[22.884,78.455],[23.281,78.08],[24.724,77.854]]]},{"region":0,"bounds":[-73.297,60.037,-12.209,83.645],"rings":[[[-46.764,82.628],[-43.406,83.225],[-39.898,83.18],[-38.622,83.549],[-35.088,83.645],[-27.1,83.52],[-20.845,82.727],[-22.692,82.342],[-26.518,82.298],[-31.9,82.2],[-31.396,82.022],[-27.857,82.132],[-24.844,81.787],[-22.903,82.093],[-22.072,81.734],[-23.17,81.153],[-20.624,81.525],[-15.768,81.912],[-12.77,81.719],[-12.209,81.292],[-16.285,80.58],[-16.85,80.35],[-20.046,80.177],[-17.73,80.129],[-18.9,79.4],[-19.705,78.751],[-19.674,77.639],[-18.473,76.986],[-20.035,76.944],[-21.679,76.628],[-19.834,76.098],[-19.599,75.248],[-20.668,75.156],[-19.373,74.296],[-21.594,74.224],[-20.435,73.817],[-20.762,73.464],[-22.172,73.31],[-23.566,73.307],[-22.313,72.629],[-22.3,72.184],[-24.278,72.598],[-24.793,72.33],[-23.443,72.08],[-22.133,71.469],[-21.754,70.664],[-23.536,70.471],[-24.307,70.856],[-25.543,71.431],[-25.201,70.752],[-26.363,70.226],[-23.727,70.184],[-22.349,70.129],[-25.029,69.259],[-27.747,68.47],[-30.674,68.125],[-31.777,68.121],[-32.811,67.735],[-34.202,66.68],[-36.353,65.979],[-37.044,65.938],[-38.375,65.692],[-39.812,65.458],[-40.669,64.84],[-40.683,64.139],[-41.189,63.482],[-42.819,62.682],[-42.417,61.901],[-42.866,61.074],[-43.378,60.098],[-44.788,60.037],[-46.264,60.853],[-48.263,60.858],[-49.233,61.407],[-49.9,62.383],[-51.633,63.627],[-52.14,64.278],[-52.277,65.177],[-53.662,66.1],[-53.302,66.837],[-53.969,67.189],[-52.98,68.358],[-51.475,68.73],[-51.08,69.148],[-50.871,69.929],[-52.014,69.575],[-52.558,69.426],[-53.456,69.284],[-54.683,69.61],[-54.75,70.289],[-54.359,70.821],[-53.431,70.836],[-51.39,70.57],[-53.109,71.205],[-54.004,71.547],[-55,71.407],[-55.835,71.654],[-54.718,72.586],[-55.326,72.959],[-56.12,73.65],[-57.324,74.71],[-58.597,75.099],[-58.585,75.517],[-61.269,76.102],[-63.392,76.175],[-66.064,76.135],[-68.504,76.061],[-69.665,76.38],[-71.403,77.009],[-68.777,77.323],[-66.764,77.376],[-71.043,77.636],[-73.297,78.044],[-73.159,78.433],[-69.373,78.914],[-65.711,79.394],[-65.324,79.758],[-68.023,80.117],[-67.151,80.516],[-63.689,81.214],[-62.234,81.321],[-62.651,81.77],[-60.282,82.034],[-57.207,82.191],[-54.134,82.2],[-53.043,81.888],[-50.391,82.439],[-48.004,82.065],[-46.6,81.986],[-44.523,81.661],[-46.901,82.2],[-46.764,82.628]]]},{"region":3,"bounds":[68.72,-49.775,70.56,-48.625],"rings":[[[68.935,-48.625],[69.58,-48.94],[70.525,-49.065],[70.56,-49.255],[70.28,-49.71],[68.745,-49.775],[68.72,-49.242],[68.868,-48.83],[68.935,-48.625]]]},{"region":8,"bounds":[124.969,-9.393,127.336,-8.273],"rings":[[[124.969,-8.893],[125.086,-8.657],[125.947,-8.432],[126.645,-8.398],[126.957,-8.273],[127.336,-8.397],[126.968,-8.668],[125.926,-9.106],[125.089,-9.393],[125.07,-9.09],[124.969,-8.893]]]},{"region":4,"bounds":[16.345,-34.819,32.83,-22.091],"rings":[[[16.345,-28.577],[16.824,-28.082],[17.219,-28.356],[17.387,-28.784],[17.836,-28.856],[18.465,-29.045],[19.002,-28.972],[19.895,-28.461],[19.896,-24.768],[20.166,-24.918],[20.759,-25.868],[20.666,-26.477],[20.89,-26.829],[21.606,-26.727],[22.106,-26.28],[22.58,-25.979],[22.824,-25.5],[23.312,-25.269],[23.734,-25.39],[24.211,-25.67],[25.025,-25.72],[25.665,-25.487],[25.766,-25.175],[25.942,-24.696],[26.486,-24.616],[26.786,-24.241],[27.119,-23.574],[28.017,-22.828],[29.432,-22.091],[29.839,-22.102],[30.323,-22.272],[30.66,-22.152],[31.191,-22.252],[31.67,-23.659],[31.931,-24.369],[31.752,-25.484],[31.838,-25.843],[31.333,-25.66],[31.044,-25.731],[30.95,-26.023],[30.677,-26.398],[30.686,-26.744],[31.283,-27.286],[31.868,-27.178],[32.072,-26.734],[32.83,-26.742],[32.58,-27.47],[32.462,-28.301],[32.203,-28.752],[31.521,-29.257],[31.326,-29.402],[30.902,-29.91],[30.623,-30.424],[30.056,-31.14],[28.926,-32.172],[28.22,-32.772],[27.465,-33.227],[26.419,-33.615],[25.91,-33.667],[25.781,-33.945],[25.173,-33.797],[24.678,-33.987],[23.594,-33.794],[22.988,-33.916],[22.574,-33.864],[21.543,-34.259],[20.689,-34.417],[20.071,-34.795],[19.616,-34.819],[19.193,-34.463],[18.855,-34.444],[18.425,-33.998],[18.377,-34.137],[18.244,-33.868],[18.25,-33.281],[17.925,-32.611],[18.248,-32.429],[18.222,-31.662],[17.567,-30.726],[17.064,-29.879],[17.063,-29.876],[16.345,-28.577]],[[28.978,-28.956],[28.542,-28.648],[28.074,-28.851],[27.533,-29.243],[26.999,-29.876],[27.749,-30.645],[28.107,-30.546],[28.291,-30.226],[28.848,-30.07],[29.018,-29.744],[29.325,-29.257],[28.978,-28.956]]]},{"region":4,"bounds":[26.999,-30.645,29.325,-28.648],"rings":[[[28.978,-28.956],[29.325,-29.257],[29.018,-29.744],[28.848,-30.07],[28.291,-30.226],[28.107,-30.546],[27.749,-30.645],[26.999,-29.876],[27.533,-29.243],[28.074,-28.851],[28.542,-28.648],[28.978,-28.956]]]},{"region":1,"bounds":[-117.128,14.539,-86.812,32.721],"rings":[[[-117.128,32.535],[-115.991,32.612],[-114.721,32.721],[-114.815,32.525],[-113.305,32.039],[-111.024,31.335],[-109.035,31.342],[-108.242,31.342],[-108.24,31.755],[-106.508,31.755],[-106.143,31.4],[-105.632,31.084],[-105.037,30.644],[-104.706,30.122],[-104.457,29.572],[-103.94,29.27],[-103.11,28.97],[-102.48,29.76],[-101.662,29.779],[-100.958,29.381],[-100.456,28.696],[-100.11,28.11],[-99.52,27.54],[-99.3,26.84],[-99.02,26.37],[-98.24,26.06],[-97.53,25.84],[-97.14,25.87],[-97.528,24.992],[-97.703,24.272],[-97.776,22.933],[-97.872,22.444],[-97.699,21.899],[-97.389,21.411],[-97.189,20.635],[-96.526,19.891],[-96.292,19.32],[-95.901,18.828],[-94.839,18.563],[-94.426,18.144],[-93.549,18.424],[-92.786,18.525],[-92.037,18.705],[-91.408,18.876],[-90.772,19.284],[-90.534,19.867],[-90.451,20.708],[-90.279,21],[-89.601,21.262],[-88.544,21.494],[-87.658,21.459],[-87.052,21.544],[-86.812,21.332],[-86.846,20.85],[-87.383,20.255],[-87.621,19.647],[-87.437,19.472],[-87.587,19.04],[-87.837,18.26],[-88.091,18.517],[-88.3,18.5],[-88.49,18.487],[-88.848,17.883],[-89.03,18.002],[-89.151,17.955],[-89.143,17.808],[-90.068,17.819],[-91.002,17.818],[-91.002,17.255],[-91.454,17.252],[-91.082,16.918],[-90.712,16.687],[-90.601,16.471],[-90.439,16.41],[-90.464,16.07],[-91.748,16.067],[-92.229,15.251],[-92.087,15.065],[-92.203,14.83],[-92.228,14.539],[-93.359,15.615],[-93.875,15.94],[-94.692,16.201],[-95.25,16.128],[-96.053,15.752],[-96.557,15.654],[-97.264,15.917],[-98.013,16.107],[-98.948,16.566],[-99.697,16.706],[-100.829,17.171],[-101.666,17.649],[-101.919,17.916],[-102.478,17.976],[-103.501,18.292],[-103.918,18.749],[-104.992,19.316],[-105.493,19.947],[-105.731,20.434],[-105.398,20.532],[-105.501,20.817],[-105.271,21.076],[-105.266,21.422],[-105.603,21.871],[-105.693,22.269],[-106.029,22.774],[-106.91,23.768],[-107.915,24.549],[-108.402,25.172],[-109.26,25.581],[-109.444,25.825],[-109.292,26.443],[-109.801,26.676],[-110.392,27.162],[-110.641,27.86],[-111.179,27.941],[-111.76,28.468],[-112.228,28.954],[-112.272,29.267],[-112.81,30.021],[-113.164,30.787],[-113.149,31.171],[-113.872,31.568],[-114.206,31.524],[-114.776,31.8],[-114.937,31.393],[-114.771,30.914],[-114.674,30.163],[-114.331,29.75],[-113.589,29.062],[-113.424,28.826],[-113.272,28.755],[-113.14,28.411],[-112.962,28.425],[-112.762,27.78],[-112.458,27.526],[-112.245,27.172],[-111.616,26.663],[-111.285,25.733],[-110.988,25.295],[-110.71,24.826],[-110.655,24.299],[-110.173,24.266],[-109.772,23.811],[-109.409,23.365],[-109.433,23.186],[-109.854,22.818],[-110.031,22.823],[-110.295,23.431],[-110.95,24.001],[-111.671,24.484],[-112.182,24.738],[-112.149,25.47],[-112.301,26.012],[-112.777,26.322],[-113.465,26.768],[-113.597,26.639],[-113.849,26.9],[-114.466,27.142],[-115.055,27.723],[-114.982,27.798],[-114.57,27.741],[-114.199,28.115],[-114.162,28.566],[-114.932,29.279],[-115.519,29.556],[-115.887,30.181],[-116.258,30.836],[-116.722,31.636],[-117.128,32.535]]]},{"region":1,"bounds":[-58.427,-34.953,-53.21,-30.11],"rings":[[[-57.625,-30.216],[-56.976,-30.11],[-55.973,-30.883],[-55.602,-30.854],[-54.572,-31.495],[-53.788,-32.047],[-53.21,-32.728],[-53.651,-33.202],[-53.374,-33.768],[-53.806,-34.397],[-54.936,-34.953],[-55.674,-34.753],[-56.215,-34.86],[-57.14,-34.43],[-57.818,-34.463],[-58.427,-33.909],[-58.35,-33.263],[-58.133,-33.041],[-58.142,-32.045],[-57.875,-31.017],[-57.625,-30.216]]]},{"region":1,"bounds":[-73.987,-33.768,-34.73,5.244],"rings":[[[-53.374,-33.768],[-53.651,-33.202],[-53.21,-32.728],[-53.788,-32.047],[-54.572,-31.495],[-55.602,-30.854],[-55.973,-30.883],[-56.976,-30.11],[-57.625,-30.216],[-56.291,-28.853],[-55.162,-27.882],[-54.491,-27.475],[-53.649,-26.923],[-53.628,-26.125],[-54.13,-25.548],[-54.625,-25.739],[-54.429,-25.162],[-54.293,-24.571],[-54.293,-24.021],[-54.653,-23.84],[-55.028,-24.001],[-55.401,-23.957],[-55.518,-23.572],[-55.611,-22.656],[-55.798,-22.357],[-56.473,-22.086],[-56.882,-22.282],[-57.937,-22.09],[-57.871,-20.733],[-58.166,-20.177],[-57.854,-19.97],[-57.95,-19.4],[-57.676,-18.962],[-57.498,-18.174],[-57.735,-17.552],[-58.281,-17.272],[-58.388,-16.877],[-58.241,-16.3],[-60.158,-16.258],[-60.543,-15.094],[-60.251,-15.077],[-60.264,-14.646],[-60.459,-14.354],[-60.503,-13.776],[-61.084,-13.479],[-61.713,-13.489],[-62.127,-13.199],[-62.803,-13.001],[-63.196,-12.627],[-64.316,-12.462],[-65.402,-11.566],[-65.322,-10.896],[-65.445,-10.511],[-65.338,-9.762],[-66.647,-9.931],[-67.174,-10.307],[-68.048,-10.712],[-68.271,-11.015],[-68.786,-11.036],[-69.53,-10.952],[-70.094,-11.124],[-70.549,-11.009],[-70.482,-9.49],[-71.302,-10.079],[-72.185,-10.054],[-72.563,-9.52],[-73.227,-9.462],[-73.015,-9.033],[-73.571,-8.424],[-73.987,-7.524],[-73.723,-7.341],[-73.724,-6.919],[-73.12,-6.63],[-73.22,-6.089],[-72.965,-5.741],[-72.892,-5.275],[-71.748,-4.594],[-70.929,-4.402],[-70.795,-4.251],[-69.894,-4.298],[-69.444,-1.556],[-69.42,-1.123],[-69.577,-0.55],[-70.021,-0.185],[-70.016,0.541],[-69.452,0.706],[-69.252,0.603],[-69.219,0.986],[-69.805,1.089],[-69.817,1.715],[-67.869,1.692],[-67.538,2.037],[-67.26,1.72],[-67.065,1.13],[-66.876,1.253],[-66.326,0.724],[-65.548,0.789],[-65.355,1.095],[-64.611,1.329],[-64.199,1.493],[-64.083,1.916],[-63.369,2.201],[-63.423,2.411],[-64.27,2.497],[-64.409,3.127],[-64.368,3.797],[-64.816,4.056],[-64.629,4.148],[-63.888,4.021],[-63.093,3.771],[-62.805,4.007],[-62.085,4.162],[-60.967,4.536],[-60.601,4.918],[-60.734,5.2],[-60.214,5.244],[-59.981,5.014],[-60.111,4.575],[-59.767,4.424],[-59.538,3.959],[-59.815,3.606],[-59.975,2.755],[-59.719,2.25],[-59.646,1.787],[-59.031,1.318],[-58.54,1.268],[-58.429,1.464],[-58.113,1.507],[-57.661,1.683],[-57.336,1.949],[-56.783,1.864],[-56.539,1.9],[-55.996,1.818],[-55.906,2.022],[-56.073,2.221],[-55.973,2.51],[-55.57,2.422],[-55.098,2.524],[-54.525,2.312],[-54.088,2.106],[-53.779,2.377],[-53.555,2.335],[-53.418,2.053],[-52.94,2.125],[-52.556,2.505],[-52.249,3.241],[-51.658,4.156],[-51.317,4.203],[-51.07,3.65],[-50.509,1.902],[-49.974,1.736],[-49.947,1.046],[-50.699,0.223],[-50.388,-0.078],[-48.621,-0.235],[-48.584,-1.238],[-47.825,-0.582],[-46.567,-0.941],[-44.906,-1.552],[-44.418,-2.138],[-44.582,-2.691],[-43.419,-2.383],[-41.473,-2.912],[-39.979,-2.873],[-38.5,-3.701],[-37.223,-4.821],[-36.453,-5.109],[-35.598,-5.15],[-35.235,-5.465],[-34.896,-6.738],[-34.73,-7.343],[-35.128,-8.996],[-35.637,-9.649],[-37.047,-11.041],[-37.684,-12.171],[-38.424,-13.038],[-38.674,-13.058],[-38.953,-13.793],[-38.882,-15.667],[-39.161,-17.208],[-39.267,-17.868],[-39.584,-18.262],[-39.761,-19.599],[-40.775,-20.905],[-40.945,-21.937],[-41.754,-22.371],[-41.988,-22.97],[-43.075,-22.968],[-44.648,-23.352],[-45.352,-23.797],[-46.472,-24.089],[-47.649,-24.885],[-48.495,-25.877],[-48.641,-26.624],[-48.475,-27.176],[-48.662,-28.186],[-48.888,-28.674],[-49.587,-29.224],[-50.697,-30.984],[-51.576,-31.778],[-52.256,-32.245],[-52.712,-33.197],[-53.374,-33.768]]]},{"region":1,"bounds":[-69.59,-22.873,-57.498,-9.762],"rings":[[[-69.53,-10.952],[-68.786,-11.036],[-68.271,-11.015],[-68.048,-10.712],[-67.174,-10.307],[-66.647,-9.931],[-65.338,-9.762],[-65.445,-10.511],[-65.322,-10.896],[-65.402,-11.566],[-64.316,-12.462],[-63.196,-12.627],[-62.803,-13.001],[-62.127,-13.199],[-61.713,-13.489],[-61.084,-13.479],[-60.503,-13.776],[-60.459,-14.354],[-60.264,-14.646],[-60.251,-15.077],[-60.543,-15.094],[-60.158,-16.258],[-58.241,-16.3],[-58.388,-16.877],[-58.281,-17.272],[-57.735,-17.552],[-57.498,-18.174],[-57.676,-18.962],[-57.95,-19.4],[-57.854,-19.97],[-58.166,-20.177],[-58.183,-19.868],[-59.115,-19.357],[-60.044,-19.343],[-61.786,-19.634],[-62.266,-20.514],[-62.291,-21.052],[-62.685,-22.249],[-62.846,-22.035],[-63.987,-21.994],[-64.377,-22.798],[-64.965,-22.076],[-66.273,-21.832],[-67.107,-22.736],[-67.828,-22.873],[-68.22,-21.494],[-68.757,-20.373],[-68.442,-19.405],[-68.967,-18.982],[-69.1,-18.26],[-69.59,-17.58],[-68.96,-16.501],[-69.39,-15.66],[-69.16,-15.324],[-69.34,-14.953],[-68.949,-14.454],[-68.929,-13.603],[-68.88,-12.9],[-68.665,-12.561],[-69.53,-10.952]]]},{"region":1,"bounds":[-81.411,-18.348,-68.665,-0.057],"rings":[[[-69.894,-4.298],[-70.795,-4.251],[-70.929,-4.402],[-71.748,-4.594],[-72.892,-5.275],[-72.965,-5.741],[-73.22,-6.089],[-73.12,-6.63],[-73.724,-6.919],[-73.723,-7.341],[-73.987,-7.524],[-73.571,-8.424],[-73.015,-9.033],[-73.227,-9.462],[-72.563,-9.52],[-72.185,-10.054],[-71.302,-10.079],[-70.482,-9.49],[-70.549,-11.009],[-70.094,-11.124],[-69.53,-10.952],[-68.665,-12.561],[-68.88,-12.9],[-68.929,-13.603],[-68.949,-14.454],[-69.34,-14.953],[-69.16,-15.324],[-69.39,-15.66],[-68.96,-16.501],[-69.59,-17.58],[-69.858,-18.093],[-70.373,-18.348],[-71.375,-17.774],[-71.462,-17.363],[-73.445,-16.359],[-75.238,-15.266],[-76.009,-14.649],[-76.423,-13.823],[-76.259,-13.535],[-77.106,-12.223],[-78.092,-10.378],[-79.037,-8.387],[-79.446,-7.931],[-79.761,-7.194],[-80.537,-6.542],[-81.25,-6.137],[-80.926,-5.691],[-81.411,-4.737],[-81.1,-4.036],[-80.303,-3.405],[-80.184,-3.821],[-80.469,-4.059],[-80.442,-4.426],[-80.029,-4.346],[-79.625,-4.454],[-79.205,-4.959],[-78.64,-4.548],[-78.451,-3.873],[-77.838,-3.003],[-76.635,-2.609],[-75.545,-1.562],[-75.234,-0.911],[-75.373,-0.152],[-75.107,-0.057],[-74.442,-0.531],[-74.122,-1.003],[-73.66,-1.26],[-73.07,-2.309],[-72.326,-2.434],[-71.775,-2.17],[-71.414,-2.343],[-70.813,-2.257],[-70.048,-2.725],[-70.693,-3.743],[-70.394,-3.767],[-69.894,-4.298]]]},{"region":1,"bounds":[-78.991,-4.298,-66.876,12.437],"rings":[[[-66.876,1.253],[-67.065,1.13],[-67.26,1.72],[-67.538,2.037],[-67.869,1.692],[-69.817,1.715],[-69.805,1.089],[-69.219,0.986],[-69.252,0.603],[-69.452,0.706],[-70.016,0.541],[-70.021,-0.185],[-69.577,-0.55],[-69.42,-1.123],[-69.444,-1.556],[-69.894,-4.298],[-70.394,-3.767],[-70.693,-3.743],[-70.048,-2.725],[-70.813,-2.257],[-71.414,-2.343],[-71.775,-2.17],[-72.326,-2.434],[-73.07,-2.309],[-73.66,-1.26],[-74.122,-1.003],[-74.442,-0.531],[-75.107,-0.057],[-75.373,-0.152],[-75.801,0.085],[-76.292,0.416],[-76.576,0.257],[-77.425,0.396],[-77.669,0.826],[-77.855,0.81],[-78.855,1.381],[-78.991,1.691],[-78.618,1.766],[-78.662,2.267],[-78.428,2.63],[-77.932,2.697],[-77.51,3.325],[-77.128,3.85],[-77.496,4.088],[-77.308,4.668],[-77.533,5.583],[-77.319,5.845],[-77.477,6.691],[-77.882,7.224],[-77.753,7.71],[-77.431,7.638],[-77.243,7.935],[-77.475,8.524],[-77.353,8.671],[-76.837,8.639],[-76.086,9.337],[-75.675,9.443],[-75.665,9.774],[-75.48,10.619],[-74.907,11.083],[-74.277,11.102],[-74.197,11.31],[-73.415,11.227],[-72.628,11.732],[-72.238,11.956],[-71.754,12.437],[-71.4,12.376],[-71.137,12.113],[-71.332,11.776],[-71.974,11.609],[-72.228,11.109],[-72.615,10.822],[-72.905,10.45],[-73.028,9.737],[-73.305,9.152],[-72.789,9.085],[-72.66,8.625],[-72.44,8.405],[-72.361,8.003],[-72.48,7.633],[-72.444,7.424],[-72.198,7.34],[-71.96,6.992],[-70.674,7.088],[-70.093,6.96],[-69.389,6.1],[-68.985,6.207],[-68.265,6.153],[-67.695,6.267],[-67.341,6.095],[-67.522,5.557],[-67.745,5.221],[-67.823,4.504],[-67.622,3.839],[-67.338,3.542],[-67.303,3.318],[-67.81,2.821],[-67.447,2.6],[-67.181,2.251],[-66.876,1.253]]]},{"region":1,"bounds":[-82.966,7.221,-77.243,9.612],"rings":[[[-77.353,8.671],[-77.475,8.524],[-77.243,7.935],[-77.431,7.638],[-77.753,7.71],[-77.882,7.224],[-78.215,7.512],[-78.429,8.052],[-78.182,8.319],[-78.435,8.388],[-78.622,8.718],[-79.12,8.996],[-79.558,8.932],[-79.761,8.585],[-80.164,8.333],[-80.383,8.298],[-80.481,8.09],[-80.004,7.548],[-80.277,7.42],[-80.421,7.272],[-80.886,7.221],[-81.06,7.818],[-81.19,7.648],[-81.52,7.707],[-81.721,8.109],[-82.131,8.175],[-82.391,8.292],[-82.82,8.291],[-82.851,8.074],[-82.966,8.225],[-82.913,8.424],[-82.83,8.626],[-82.869,8.807],[-82.719,8.926],[-82.927,9.074],[-82.933,9.477],[-82.546,9.566],[-82.187,9.207],[-82.208,8.996],[-81.809,8.951],[-81.714,9.032],[-81.439,8.786],[-80.947,8.859],[-80.522,9.111],[-79.915,9.313],[-79.573,9.612],[-79.021,9.553],[-79.058,9.455],[-78.501,9.42],[-78.056,9.248],[-77.73,8.947],[-77.353,8.671]]]},{"region":1,"bounds":[-85.942,8.225,-82.546,11.217],"rings":[[[-82.546,9.566],[-82.933,9.477],[-82.927,9.074],[-82.719,8.926],[-82.869,8.807],[-82.83,8.626],[-82.913,8.424],[-82.966,8.225],[-83.508,8.447],[-83.711,8.657],[-83.596,8.83],[-83.633,9.051],[-83.91,9.291],[-84.303,9.487],[-84.648,9.616],[-84.713,9.908],[-84.976,10.087],[-84.911,9.796],[-85.111,9.557],[-85.339,9.835],[-85.661,9.933],[-85.797,10.135],[-85.792,10.439],[-85.659,10.754],[-85.942,10.895],[-85.713,11.088],[-85.562,11.217],[-84.903,10.952],[-84.673,11.083],[-84.356,10.999],[-84.19,10.793],[-83.895,10.727],[-83.656,10.939],[-83.402,10.395],[-83.016,9.993],[-82.546,9.566]]]},{"region":1,"bounds":[-87.668,10.727,-83.147,15.016],"rings":[[[-83.656,10.939],[-83.895,10.727],[-84.19,10.793],[-84.356,10.999],[-84.673,11.083],[-84.903,10.952],[-85.562,11.217],[-85.713,11.088],[-86.058,11.403],[-86.526,11.807],[-86.746,12.144],[-87.168,12.458],[-87.668,12.91],[-87.557,13.065],[-87.392,12.914],[-87.317,12.985],[-87.006,13.026],[-86.881,13.254],[-86.734,13.263],[-86.755,13.755],[-86.521,13.778],[-86.312,13.771],[-86.096,14.038],[-85.801,13.836],[-85.699,13.96],[-85.514,14.079],[-85.165,14.354],[-85.149,14.56],[-85.053,14.552],[-84.925,14.79],[-84.82,14.82],[-84.65,14.667],[-84.449,14.622],[-84.228,14.749],[-83.976,14.749],[-83.629,14.88],[-83.49,15.016],[-83.147,14.996],[-83.233,14.9],[-83.284,14.677],[-83.182,14.311],[-83.412,13.97],[-83.52,13.568],[-83.552,13.127],[-83.499,12.869],[-83.473,12.419],[-83.626,12.321],[-83.72,11.893],[-83.651,11.629],[-83.855,11.373],[-83.809,11.103],[-83.656,10.939]]]},{"region":1,"bounds":[-89.353,12.985,-83.147,16.005],"rings":[[[-83.147,14.996],[-83.49,15.016],[-83.629,14.88],[-83.976,14.749],[-84.228,14.749],[-84.449,14.622],[-84.65,14.667],[-84.82,14.82],[-84.925,14.79],[-85.053,14.552],[-85.149,14.56],[-85.165,14.354],[-85.514,14.079],[-85.699,13.96],[-85.801,13.836],[-86.096,14.038],[-86.312,13.771],[-86.521,13.778],[-86.755,13.755],[-86.734,13.263],[-86.881,13.254],[-87.006,13.026],[-87.317,12.985],[-87.489,13.298],[-87.793,13.384],[-87.724,13.785],[-87.86,13.893],[-88.065,13.965],[-88.504,13.845],[-88.541,13.98],[-88.843,14.141],[-89.059,14.34],[-89.353,14.424],[-89.146,14.678],[-89.225,14.874],[-89.155,15.066],[-88.681,15.346],[-88.225,15.728],[-88.121,15.689],[-87.902,15.864],[-87.616,15.879],[-87.523,15.797],[-87.368,15.847],[-86.903,15.757],[-86.441,15.783],[-86.119,15.893],[-86.002,16.005],[-85.683,15.954],[-85.444,15.886],[-85.182,15.909],[-84.984,15.996],[-84.527,15.857],[-84.368,15.835],[-84.063,15.648],[-83.774,15.424],[-83.41,15.271],[-83.147,14.996]]]},{"region":1,"bounds":[-90.096,13.149,-87.724,14.424],"rings":[[[-89.353,14.424],[-89.059,14.34],[-88.843,14.141],[-88.541,13.98],[-88.504,13.845],[-88.065,13.965],[-87.86,13.893],[-87.724,13.785],[-87.793,13.384],[-87.904,13.149],[-88.483,13.164],[-88.843,13.26],[-89.257,13.459],[-89.812,13.521],[-90.096,13.735],[-90.065,13.882],[-89.722,14.134],[-89.534,14.245],[-89.587,14.363],[-89.353,14.424]]]},{"region":1,"bounds":[-92.229,13.735,-88.225,17.819],"rings":[[[-92.228,14.539],[-92.203,14.83],[-92.087,15.065],[-92.229,15.251],[-91.748,16.067],[-90.464,16.07],[-90.439,16.41],[-90.601,16.471],[-90.712,16.687],[-91.082,16.918],[-91.454,17.252],[-91.002,17.255],[-91.002,17.818],[-90.068,17.819],[-89.143,17.808],[-89.151,17.016],[-89.229,15.887],[-88.931,15.887],[-88.605,15.706],[-88.518,15.855],[-88.225,15.728],[-88.681,15.346],[-89.155,15.066],[-89.225,14.874],[-89.146,14.678],[-89.353,14.424],[-89.587,14.363],[-89.534,14.245],[-89.722,14.134],[-90.065,13.882],[-90.096,13.735],[-90.609,13.91],[-91.232,13.928],[-91.69,14.126],[-92.228,14.539]]]},{"region":1,"bounds":[-89.229,15.887,-88.107,18.5],"rings":[[[-89.143,17.808],[-89.151,17.955],[-89.03,18.002],[-88.848,17.883],[-88.49,18.487],[-88.3,18.5],[-88.296,18.353],[-88.107,18.349],[-88.123,18.077],[-88.285,17.644],[-88.198,17.489],[-88.303,17.132],[-88.24,17.036],[-88.355,16.531],[-88.552,16.265],[-88.732,16.234],[-88.931,15.887],[-89.229,15.887],[-89.151,17.016],[-89.143,17.808]]]},{"region":1,"bounds":[-73.305,0.724,-59.758,12.162],"rings":[[[-60.734,5.2],[-60.601,4.918],[-60.967,4.536],[-62.085,4.162],[-62.805,4.007],[-63.093,3.771],[-63.888,4.021],[-64.629,4.148],[-64.816,4.056],[-64.368,3.797],[-64.409,3.127],[-64.27,2.497],[-63.423,2.411],[-63.369,2.201],[-64.083,1.916],[-64.199,1.493],[-64.611,1.329],[-65.355,1.095],[-65.548,0.789],[-66.326,0.724],[-66.876,1.253],[-67.181,2.251],[-67.447,2.6],[-67.81,2.821],[-67.303,3.318],[-67.338,3.542],[-67.622,3.839],[-67.823,4.504],[-67.745,5.221],[-67.522,5.557],[-67.341,6.095],[-67.695,6.267],[-68.265,6.153],[-68.985,6.207],[-69.389,6.1],[-70.093,6.96],[-70.674,7.088],[-71.96,6.992],[-72.198,7.34],[-72.444,7.424],[-72.48,7.633],[-72.361,8.003],[-72.44,8.405],[-72.66,8.625],[-72.789,9.085],[-73.305,9.152],[-73.028,9.737],[-72.905,10.45],[-72.615,10.822],[-72.228,11.109],[-71.974,11.609],[-71.332,11.776],[-71.36,11.54],[-71.947,11.423],[-71.621,10.969],[-71.633,10.446],[-72.074,9.866],[-71.696,9.072],[-71.265,9.137],[-71.04,9.86],[-71.35,10.212],[-71.401,10.969],[-70.155,11.375],[-70.294,11.847],[-69.943,12.162],[-69.584,11.46],[-68.883,11.443],[-68.233,10.886],[-68.194,10.555],[-67.296,10.546],[-66.228,10.649],[-65.655,10.201],[-64.89,10.077],[-64.329,10.39],[-64.318,10.641],[-63.079,10.702],[-61.881,10.716],[-62.73,10.42],[-62.389,9.948],[-61.589,9.873],[-60.831,9.381],[-60.671,8.58],[-60.15,8.603],[-59.758,8.367],[-60.551,7.78],[-60.638,7.415],[-60.296,7.044],[-60.544,6.857],[-61.159,6.696],[-61.139,6.234],[-61.41,5.959],[-60.734,5.2]]]},{"region":1,"bounds":[-61.41,1.268,-56.539,8.367],"rings":[[[-56.539,1.9],[-56.783,1.864],[-57.336,1.949],[-57.661,1.683],[-58.113,1.507],[-58.429,1.464],[-58.54,1.268],[-59.031,1.318],[-59.646,1.787],[-59.719,2.25],[-59.975,2.755],[-59.815,3.606],[-59.538,3.959],[-59.767,4.424],[-60.111,4.575],[-59.981,5.014],[-60.214,5.244],[-60.734,5.2],[-61.41,5.959],[-61.139,6.234],[-61.159,6.696],[-60.544,6.857],[-60.296,7.044],[-60.638,7.415],[-60.551,7.78],[-59.758,8.367],[-59.102,7.999],[-58.483,7.348],[-58.455,6.833],[-58.078,6.809],[-57.542,6.321],[-57.147,5.973],[-57.307,5.074],[-57.914,4.813],[-57.86,4.577],[-58.045,4.061],[-57.602,3.335],[-57.281,3.333],[-57.15,2.769],[-56.539,1.9]]]},{"region":1,"bounds":[-58.045,1.818,-53.958,6.025],"rings":[[[-54.525,2.312],[-55.098,2.524],[-55.57,2.422],[-55.973,2.51],[-56.073,2.221],[-55.906,2.022],[-55.996,1.818],[-56.539,1.9],[-57.15,2.769],[-57.281,3.333],[-57.602,3.335],[-58.045,4.061],[-57.86,4.577],[-57.914,4.813],[-57.307,5.074],[-57.147,5.973],[-55.949,5.773],[-55.842,5.953],[-55.033,6.025],[-53.958,5.757],[-54.479,4.897],[-54.4,4.213],[-54.007,3.62],[-54.182,3.19],[-54.27,2.732],[-54.525,2.312]]]},{"region":2,"bounds":[-54.525,2.053,-51.658,5.757],"rings":[[[-51.658,4.156],[-52.249,3.241],[-52.556,2.505],[-52.94,2.125],[-53.418,2.053],[-53.555,2.335],[-53.779,2.377],[-54.088,2.106],[-54.525,2.312],[-54.27,2.732],[-54.182,3.19],[-54.007,3.62],[-54.4,4.213],[-54.479,4.897],[-53.958,5.757],[-53.618,5.647],[-52.882,5.41],[-51.823,4.566],[-51.658,4.156]]]},{"region":2,"bounds":[-4.592,42.343,8.099,51.149],"rings":[[[6.186,49.464],[6.658,49.202],[8.099,49.018],[7.594,48.333],[7.467,47.621],[7.192,47.45],[6.737,47.542],[6.769,47.288],[6.037,46.726],[6.023,46.273],[6.5,46.43],[6.844,45.991],[6.802,45.709],[7.097,45.333],[6.75,45.029],[7.008,44.255],[7.55,44.128],[7.435,43.694],[6.529,43.129],[4.557,43.4],[3.1,43.075],[2.986,42.473],[1.827,42.343],[0.702,42.796],[0.338,42.58],[-1.503,43.034],[-1.901,43.423],[-1.384,44.023],[-1.194,46.015],[-2.226,47.064],[-2.963,47.57],[-4.492,47.955],[-4.592,48.684],[-3.296,48.902],[-1.617,48.644],[-1.933,49.776],[-0.989,49.347],[1.339,50.127],[1.639,50.947],[2.514,51.149],[2.658,50.797],[3.123,50.78],[3.588,50.379],[4.286,49.907],[4.799,49.985],[5.674,49.529],[5.898,49.443],[6.186,49.464]]]},{"region":2,"bounds":[8.544,41.38,9.56,43.01],"rings":[[[8.746,42.628],[9.39,43.01],[9.56,42.152],[9.23,41.38],[8.776,41.584],[8.544,42.257],[8.746,42.628]]]},{"region":1,"bounds":[-80.968,-4.959,-75.234,1.381],"rings":[[[-75.373,-0.152],[-75.234,-0.911],[-75.545,-1.562],[-76.635,-2.609],[-77.838,-3.003],[-78.451,-3.873],[-78.64,-4.548],[-79.205,-4.959],[-79.625,-4.454],[-80.029,-4.346],[-80.442,-4.426],[-80.469,-4.059],[-80.184,-3.821],[-80.303,-3.405],[-79.77,-2.658],[-79.987,-2.221],[-80.369,-2.685],[-80.968,-2.247],[-80.765,-1.965],[-80.934,-1.057],[-80.583,-0.907],[-80.399,-0.284],[-80.021,0.36],[-80.091,0.768],[-79.543,0.983],[-78.855,1.381],[-77.855,0.81],[-77.669,0.826],[-77.425,0.396],[-76.576,0.257],[-76.292,0.416],[-75.801,0.085],[-75.373,-0.152]]]},{"region":1,"bounds":[-67.242,17.947,-65.591,18.521],"rings":[[[-66.282,18.515],[-65.771,18.427],[-65.591,18.228],[-65.847,17.976],[-66.6,17.982],[-67.184,17.947],[-67.242,18.374],[-67.101,18.521],[-66.282,18.515]]]},{"region":1,"bounds":[-78.338,17.701,-76.2,18.524],"rings":[[[-77.57,18.491],[-76.897,18.401],[-76.365,18.161],[-76.2,17.887],[-76.903,17.868],[-77.206,17.701],[-77.766,17.862],[-78.338,18.226],[-78.218,18.455],[-77.797,18.524],[-77.57,18.491]]]},{"region":1,"bounds":[-84.975,19.855,-74.178,23.189],"rings":[[[-82.268,23.189],[-81.404,23.117],[-80.619,23.106],[-79.68,22.765],[-79.281,22.399],[-78.347,22.512],[-77.993,22.277],[-77.146,21.658],[-76.524,21.207],[-76.195,21.221],[-75.598,21.017],[-75.671,20.735],[-74.934,20.694],[-74.178,20.285],[-74.297,20.05],[-74.962,19.923],[-75.635,19.874],[-76.324,19.953],[-77.755,19.855],[-77.085,20.413],[-77.493,20.673],[-78.137,20.74],[-78.483,21.029],[-78.72,21.598],[-79.285,21.559],[-80.217,21.827],[-80.518,22.037],[-81.821,22.192],[-82.17,22.387],[-81.795,22.637],[-82.776,22.688],[-83.494,22.169],[-83.909,22.155],[-84.052,21.911],[-84.547,21.801],[-84.975,21.896],[-84.447,22.205],[-84.23,22.566],[-83.778,22.788],[-83.268,22.983],[-82.51,23.079],[-82.268,23.189]]]},{"region":4,"bounds":[25.264,-22.272,32.85,-15.508],"rings":[[[31.191,-22.252],[30.66,-22.152],[30.323,-22.272],[29.839,-22.102],[29.432,-22.091],[28.795,-21.639],[28.021,-21.486],[27.727,-20.852],[27.725,-20.499],[27.297,-20.392],[26.165,-19.293],[25.85,-18.714],[25.649,-18.536],[25.264,-17.737],[26.382,-17.846],[26.707,-17.961],[27.044,-17.938],[27.598,-17.291],[28.468,-16.468],[28.826,-16.39],[28.947,-16.043],[29.517,-15.645],[30.274,-15.508],[30.339,-15.881],[31.173,-15.861],[31.636,-16.072],[31.852,-16.319],[32.328,-16.392],[32.848,-16.713],[32.85,-17.979],[32.655,-18.672],[32.612,-19.419],[32.773,-19.716],[32.66,-20.304],[32.509,-20.395],[32.245,-21.116],[31.191,-22.252]]]},{"region":4,"bounds":[19.895,-26.829,29.432,-17.662],"rings":[[[29.432,-22.091],[28.017,-22.828],[27.119,-23.574],[26.786,-24.241],[26.486,-24.616],[25.942,-24.696],[25.766,-25.175],[25.665,-25.487],[25.025,-25.72],[24.211,-25.67],[23.734,-25.39],[23.312,-25.269],[22.824,-25.5],[22.58,-25.979],[22.106,-26.28],[21.606,-26.727],[20.89,-26.829],[20.666,-26.477],[20.759,-25.868],[20.166,-24.918],[19.896,-24.768],[19.895,-21.849],[20.881,-21.814],[20.911,-18.252],[21.655,-18.219],[23.197,-17.869],[23.579,-18.281],[24.217,-17.889],[24.521,-17.887],[25.084,-17.662],[25.264,-17.737],[25.649,-18.536],[25.85,-18.714],[26.165,-19.293],[27.297,-20.392],[27.725,-20.499],[27.727,-20.852],[28.021,-21.486],[28.795,-21.639],[29.432,-22.091]]]},{"region":4,"bounds":[11.734,-29.045,25.084,-16.941],"rings":[[[19.896,-24.768],[19.895,-28.461],[19.002,-28.972],[18.465,-29.045],[17.836,-28.856],[17.387,-28.784],[17.219,-28.356],[16.824,-28.082],[16.345,-28.577],[15.602,-27.821],[15.21,-27.091],[14.99,-26.117],[14.743,-25.393],[14.408,-23.853],[14.386,-22.657],[14.258,-22.111],[13.869,-21.699],[13.352,-20.873],[12.827,-19.673],[12.609,-19.045],[11.795,-18.069],[11.734,-17.302],[12.215,-17.112],[12.814,-16.941],[13.462,-16.971],[14.059,-17.423],[14.21,-17.353],[18.263,-17.31],[18.956,-17.789],[21.377,-17.931],[23.215,-17.523],[24.034,-17.296],[24.682,-17.353],[25.077,-17.579],[25.084,-17.662],[24.521,-17.887],[24.217,-17.889],[23.579,-18.281],[23.197,-17.869],[21.655,-18.219],[20.911,-18.252],[20.881,-21.814],[19.895,-21.849],[19.896,-24.768]]]},{"region":4,"bounds":[-17.625,12.332,-11.468,16.598],"rings":[[[-16.714,13.595],[-17.126,14.374],[-17.625,14.73],[-17.185,14.919],[-16.701,15.622],[-16.463,16.135],[-16.121,16.456],[-15.624,16.369],[-15.136,16.587],[-14.577,16.598],[-14.1,16.304],[-13.436,16.039],[-12.831,15.304],[-12.171,14.617],[-12.125,13.995],[-11.928,13.422],[-11.553,13.141],[-11.468,12.755],[-11.514,12.443],[-11.658,12.387],[-12.204,12.466],[-12.279,12.354],[-12.499,12.332],[-13.218,12.576],[-13.7,12.586],[-15.548,12.628],[-15.817,12.516],[-16.148,12.548],[-16.677,12.385],[-16.842,13.151],[-15.931,13.13],[-15.691,13.27],[-15.512,13.279],[-15.141,13.51],[-14.712,13.298],[-14.278,13.281],[-13.845,13.505],[-14.047,13.794],[-14.377,13.626],[-14.687,13.63],[-15.082,13.876],[-15.399,13.86],[-15.625,13.624],[-16.714,13.595]]]},{"region":4,"bounds":[-12.171,10.096,4.27,24.975],"rings":[[[-11.514,12.443],[-11.468,12.755],[-11.553,13.141],[-11.928,13.422],[-12.125,13.995],[-12.171,14.617],[-11.834,14.799],[-11.666,15.388],[-11.349,15.411],[-10.651,15.133],[-10.087,15.33],[-9.7,15.264],[-9.55,15.486],[-5.538,15.502],[-5.315,16.202],[-5.489,16.325],[-5.971,20.641],[-6.454,24.957],[-4.923,24.975],[-1.55,22.793],[1.823,20.611],[2.061,20.142],[2.684,19.856],[3.147,19.694],[3.158,19.057],[4.267,19.155],[4.27,16.852],[3.723,16.184],[3.638,15.568],[2.75,15.41],[1.386,15.324],[1.016,14.968],[0.375,14.929],[-0.266,14.924],[-0.516,15.116],[-1.066,14.974],[-2.001,14.559],[-2.192,14.246],[-2.968,13.798],[-3.104,13.541],[-3.523,13.338],[-4.006,13.472],[-4.28,13.228],[-4.427,12.543],[-5.221,11.714],[-5.198,11.375],[-5.471,10.951],[-5.404,10.371],[-5.817,10.223],[-6.05,10.096],[-6.205,10.524],[-6.494,10.411],[-6.666,10.431],[-6.851,10.139],[-7.623,10.147],[-7.9,10.297],[-8.03,10.207],[-8.335,10.495],[-8.282,10.793],[-8.407,10.909],[-8.62,10.811],[-8.581,11.136],[-8.376,11.394],[-8.786,11.813],[-8.905,12.088],[-9.127,12.308],[-9.328,12.334],[-9.568,12.194],[-9.891,12.06],[-10.165,11.844],[-10.593,11.924],[-10.871,12.178],[-11.037,12.211],[-11.298,12.078],[-11.456,12.077],[-11.514,12.443]]]},{"region":4,"bounds":[-17.063,14.617,-4.923,27.396],"rings":[[[-17.063,21],[-16.845,21.333],[-12.929,21.327],[-13.119,22.771],[-12.874,23.285],[-11.937,23.375],[-11.969,25.933],[-8.687,25.881],[-8.684,27.396],[-4.923,24.975],[-6.454,24.957],[-5.971,20.641],[-5.489,16.325],[-5.315,16.202],[-5.538,15.502],[-9.55,15.486],[-9.7,15.264],[-10.087,15.33],[-10.651,15.133],[-11.349,15.411],[-11.666,15.388],[-11.834,14.799],[-12.171,14.617],[-12.831,15.304],[-13.436,16.039],[-14.1,16.304],[-14.577,16.598],[-15.136,16.587],[-15.624,16.369],[-16.121,16.456],[-16.463,16.135],[-16.55,16.674],[-16.271,17.167],[-16.146,18.108],[-16.257,19.097],[-16.378,19.594],[-16.278,20.093],[-16.536,20.568],[-17.063,21]]]},{"region":4,"bounds":[0.772,6.142,3.797,12.236],"rings":[[[2.692,6.259],[1.865,6.142],[1.619,6.832],[1.664,9.129],[1.463,9.335],[1.425,9.825],[1.078,10.176],[0.772,10.471],[0.9,10.997],[1.243,11.111],[1.447,11.548],[1.936,11.641],[2.154,11.94],[2.49,12.233],[2.849,12.236],[3.611,11.66],[3.572,11.328],[3.797,10.735],[3.6,10.332],[3.705,10.063],[3.22,9.444],[2.912,9.138],[2.724,8.507],[2.749,7.871],[2.692,6.259]]]},{"region":4,"bounds":[0.296,11.66,15.903,23.472],"rings":[[[14.851,22.863],[15.097,21.309],[15.471,21.048],[15.487,20.73],[15.903,20.388],[15.686,19.957],[15.3,17.928],[15.248,16.627],[13.972,15.684],[13.54,14.367],[13.957,13.997],[13.954,13.353],[14.596,13.33],[14.496,12.859],[14.214,12.802],[14.181,12.484],[13.995,12.462],[13.319,13.556],[13.084,13.596],[12.302,13.037],[11.528,13.329],[10.99,13.387],[10.701,13.247],[10.115,13.277],[9.525,12.851],[9.015,12.827],[7.805,13.344],[7.331,13.098],[6.82,13.115],[6.445,13.493],[5.443,13.866],[4.368,13.747],[4.108,13.531],[3.967,12.956],[3.681,12.553],[3.611,11.66],[2.849,12.236],[2.49,12.233],[2.154,11.94],[2.177,12.625],[1.024,12.852],[0.993,13.336],[0.43,13.989],[0.296,14.444],[0.375,14.929],[1.016,14.968],[1.386,15.324],[2.75,15.41],[3.638,15.568],[3.723,16.184],[4.27,16.852],[4.267,19.155],[5.678,19.601],[8.573,21.566],[12,23.472],[13.581,23.041],[14.144,22.491],[14.851,22.863]]]},{"region":4,"bounds":[2.692,4.241,14.577,13.866],"rings":[[[2.692,6.259],[2.749,7.871],[2.724,8.507],[2.912,9.138],[3.22,9.444],[3.705,10.063],[3.6,10.332],[3.797,10.735],[3.572,11.328],[3.611,11.66],[3.681,12.553],[3.967,12.956],[4.108,13.531],[4.368,13.747],[5.443,13.866],[6.445,13.493],[6.82,13.115],[7.331,13.098],[7.805,13.344],[9.015,12.827],[9.525,12.851],[10.115,13.277],[10.701,13.247],[10.99,13.387],[11.528,13.329],[12.302,13.037],[13.084,13.596],[13.319,13.556],[13.995,12.462],[14.181,12.484],[14.577,12.085],[14.468,11.905],[14.415,11.572],[13.573,10.799],[13.309,10.16],[13.168,9.641],[12.955,9.418],[12.754,8.718],[12.219,8.306],[12.064,7.8],[11.839,7.397],[11.746,6.981],[11.059,6.644],[10.497,7.055],[10.118,7.039],[9.523,6.453],[9.233,6.444],[8.758,5.48],[8.5,4.772],[7.462,4.412],[7.083,4.465],[6.698,4.241],[5.898,4.262],[5.363,4.888],[5.034,5.612],[4.326,6.271],[3.574,6.258],[2.692,6.259]]]},{"region":4,"bounds":[8.489,1.728,16.013,12.859],"rings":[[[14.496,12.859],[14.893,12.219],[14.96,11.556],[14.924,10.891],[15.468,9.982],[14.909,9.992],[14.627,9.921],[14.171,10.021],[13.954,9.549],[14.544,8.966],[14.98,8.796],[15.121,8.382],[15.436,7.693],[15.279,7.422],[14.777,6.408],[14.537,6.227],[14.459,5.452],[14.559,5.031],[14.478,4.733],[14.951,4.21],[15.036,3.851],[15.405,3.335],[15.863,3.014],[15.907,2.557],[16.013,2.268],[15.941,1.728],[15.146,1.964],[14.338,2.228],[13.076,2.267],[12.951,2.322],[12.359,2.193],[11.752,2.327],[11.276,2.261],[9.649,2.284],[9.795,3.073],[9.404,3.735],[8.948,3.904],[8.745,4.352],[8.489,4.496],[8.5,4.772],[8.758,5.48],[9.233,6.444],[9.523,6.453],[10.118,7.039],[10.497,7.055],[11.059,6.644],[11.746,6.981],[11.839,7.397],[12.064,7.8],[12.219,8.306],[12.754,8.718],[12.955,9.418],[13.168,9.641],[13.309,10.16],[13.573,10.799],[14.415,11.572],[14.468,11.905],[14.577,12.085],[14.181,12.484],[14.214,12.802],[14.496,12.859]]]},{"region":4,"bounds":[-0.05,5.929,1.865,11.019],"rings":[[[0.9,10.997],[0.772,10.471],[1.078,10.176],[1.425,9.825],[1.463,9.335],[1.664,9.129],[1.619,6.832],[1.865,6.142],[1.06,5.929],[0.837,6.28],[0.57,6.914],[0.491,7.412],[0.712,8.312],[0.461,8.677],[0.366,9.465],[0.368,10.191],[-0.05,10.707],[0.024,11.019],[0.9,10.997]]]},{"region":4,"bounds":[-3.244,4.71,1.06,11.098],"rings":[[[0.024,11.019],[-0.05,10.707],[0.368,10.191],[0.366,9.465],[0.461,8.677],[0.712,8.312],[0.491,7.412],[0.57,6.914],[0.837,6.28],[1.06,5.929],[-0.508,5.343],[-1.064,5.001],[-1.965,4.71],[-2.856,4.994],[-2.811,5.389],[-3.244,6.25],[-2.984,7.38],[-2.562,8.22],[-2.827,9.642],[-2.964,10.395],[-2.94,10.963],[-1.203,11.01],[-0.762,10.937],[-0.439,11.098],[0.024,11.019]]]},{"region":4,"bounds":[-8.603,4.338,-2.562,10.524],"rings":[[[-8.03,10.207],[-7.9,10.297],[-7.623,10.147],[-6.851,10.139],[-6.666,10.431],[-6.494,10.411],[-6.205,10.524],[-6.05,10.096],[-5.817,10.223],[-5.404,10.371],[-4.955,10.153],[-4.78,9.822],[-4.33,9.611],[-3.98,9.862],[-3.512,9.9],[-2.827,9.642],[-2.562,8.22],[-2.984,7.38],[-3.244,6.25],[-2.811,5.389],[-2.856,4.994],[-3.311,4.984],[-4.009,5.18],[-4.65,5.168],[-5.834,4.994],[-6.529,4.705],[-7.519,4.338],[-7.712,4.365],[-7.635,5.188],[-7.54,5.313],[-7.57,5.707],[-7.994,6.126],[-8.311,6.193],[-8.603,6.468],[-8.385,6.912],[-8.485,7.395],[-8.439,7.686],[-8.281,7.687],[-8.222,8.123],[-8.299,8.316],[-8.203,8.455],[-7.832,8.576],[-8.079,9.376],[-8.31,9.79],[-8.229,10.129],[-8.03,10.207]]]},{"region":4,"bounds":[-15.13,7.309,-7.832,12.586],"rings":[[[-13.7,12.586],[-13.218,12.576],[-12.499,12.332],[-12.279,12.354],[-12.204,12.466],[-11.658,12.387],[-11.514,12.443],[-11.456,12.077],[-11.298,12.078],[-11.037,12.211],[-10.871,12.178],[-10.593,11.924],[-10.165,11.844],[-9.891,12.06],[-9.568,12.194],[-9.328,12.334],[-9.127,12.308],[-8.905,12.088],[-8.786,11.813],[-8.376,11.394],[-8.581,11.136],[-8.62,10.811],[-8.407,10.909],[-8.282,10.793],[-8.335,10.495],[-8.03,10.207],[-8.229,10.129],[-8.31,9.79],[-8.079,9.376],[-7.832,8.576],[-8.203,8.455],[-8.299,8.316],[-8.222,8.123],[-8.281,7.687],[-8.439,7.686],[-8.722,7.712],[-8.926,7.309],[-9.209,7.314],[-9.403,7.527],[-9.337,7.929],[-9.755,8.541],[-10.017,8.429],[-10.23,8.406],[-10.505,8.349],[-10.494,8.716],[-10.655,8.977],[-10.622,9.268],[-10.839,9.688],[-11.117,10.046],[-11.917,10.047],[-12.15,9.859],[-12.426,9.836],[-12.597,9.62],[-12.712,9.343],[-13.247,8.903],[-13.685,9.495],[-14.074,9.886],[-14.33,10.016],[-14.58,10.214],[-14.693,10.656],[-14.84,10.877],[-15.13,11.04],[-14.686,11.528],[-14.382,11.509],[-14.121,11.677],[-13.901,11.679],[-13.743,11.811],[-13.828,12.143],[-13.719,12.247],[-13.7,12.586]]]},{"region":4,"bounds":[-16.677,11.04,-13.7,12.628],"rings":[[[-16.677,12.385],[-16.148,12.548],[-15.817,12.516],[-15.548,12.628],[-13.7,12.586],[-13.719,12.247],[-13.828,12.143],[-13.743,11.811],[-13.901,11.679],[-14.121,11.677],[-14.382,11.509],[-14.686,11.528],[-15.13,11.04],[-15.664,11.458],[-16.085,11.525],[-16.315,11.807],[-16.309,11.959],[-16.614,12.171],[-16.677,12.385]]]},{"region":4,"bounds":[-11.439,4.356,-7.54,8.541],"rings":[[[-8.439,7.686],[-8.485,7.395],[-8.385,6.912],[-8.603,6.468],[-8.311,6.193],[-7.994,6.126],[-7.57,5.707],[-7.54,5.313],[-7.635,5.188],[-7.712,4.365],[-7.974,4.356],[-9.005,4.832],[-9.913,5.594],[-10.765,6.141],[-11.439,6.786],[-11.2,7.106],[-11.147,7.397],[-10.696,7.939],[-10.23,8.406],[-10.017,8.429],[-9.755,8.541],[-9.337,7.929],[-9.403,7.527],[-9.209,7.314],[-8.926,7.309],[-8.722,7.712],[-8.439,7.686]]]},{"region":4,"bounds":[-13.247,6.786,-10.23,10.047],"rings":[[[-13.247,8.903],[-12.712,9.343],[-12.597,9.62],[-12.426,9.836],[-12.15,9.859],[-11.917,10.047],[-11.117,10.046],[-10.839,9.688],[-10.622,9.268],[-10.655,8.977],[-10.494,8.716],[-10.505,8.349],[-10.23,8.406],[-10.696,7.939],[-11.147,7.397],[-11.2,7.106],[-11.439,6.786],[-11.708,6.86],[-12.428,7.263],[-12.949,7.799],[-13.124,8.164],[-13.247,8.903]]]},{"region":4,"bounds":[-5.471,9.611,2.177,15.116],"rings":[[[-5.404,10.371],[-5.471,10.951],[-5.198,11.375],[-5.221,11.714],[-4.427,12.543],[-4.28,13.228],[-4.006,13.472],[-3.523,13.338],[-3.104,13.541],[-2.968,13.798],[-2.192,14.246],[-2.001,14.559],[-1.066,14.974],[-0.516,15.116],[-0.266,14.924],[0.375,14.929],[0.296,14.444],[0.43,13.989],[0.993,13.336],[1.024,12.852],[2.177,12.625],[2.154,11.94],[1.936,11.641],[1.447,11.548],[1.243,11.111],[0.9,10.997],[0.024,11.019],[-0.439,11.098],[-0.762,10.937],[-1.203,11.01],[-2.94,10.963],[-2.964,10.395],[-2.827,9.642],[-3.512,9.9],[-3.98,9.862],[-4.33,9.611],[-4.78,9.822],[-4.955,10.153],[-5.404,10.371]]]},{"region":4,"bounds":[14.459,2.268,27.374,11.142],"rings":[[[27.374,5.234],[27.044,5.128],[26.403,5.151],[25.65,5.256],[25.279,5.17],[25.129,4.927],[24.805,4.897],[24.411,5.109],[23.297,4.61],[22.841,4.71],[22.704,4.633],[22.405,4.029],[21.659,4.224],[20.928,4.323],[20.291,4.692],[19.468,5.032],[18.932,4.71],[18.543,4.202],[18.453,3.504],[17.81,3.56],[17.133,3.728],[16.537,3.198],[16.013,2.268],[15.907,2.557],[15.863,3.014],[15.405,3.335],[15.036,3.851],[14.951,4.21],[14.478,4.733],[14.559,5.031],[14.459,5.452],[14.537,6.227],[14.777,6.408],[15.279,7.422],[16.106,7.497],[16.291,7.754],[16.456,7.735],[16.706,7.508],[17.965,7.891],[18.39,8.281],[18.911,8.631],[18.812,8.983],[19.094,9.075],[20.06,9.013],[21.001,9.476],[21.724,10.567],[22.231,10.972],[22.864,11.142],[22.978,10.714],[23.554,10.089],[23.557,9.681],[23.395,9.265],[23.459,8.954],[23.806,8.666],[24.567,8.229],[25.115,7.825],[25.124,7.5],[25.797,6.979],[26.213,6.547],[26.466,5.947],[27.213,5.551],[27.374,5.234]]]},{"region":4,"bounds":[11.094,-5.038,18.453,3.728],"rings":[[[18.453,3.504],[18.394,2.9],[18.094,2.366],[17.899,1.742],[17.774,0.856],[17.827,0.289],[17.664,-0.058],[17.639,-0.425],[17.524,-0.744],[16.865,-1.226],[16.407,-1.741],[15.973,-2.712],[16.006,-3.535],[15.754,-3.855],[15.171,-4.344],[14.583,-4.97],[14.209,-4.793],[14.145,-4.51],[13.6,-4.5],[13.258,-4.883],[12.996,-4.781],[12.621,-4.438],[12.319,-4.606],[11.915,-5.038],[11.094,-3.979],[11.855,-3.427],[11.478,-2.766],[11.821,-2.514],[12.496,-2.392],[12.575,-1.949],[13.11,-2.429],[13.992,-2.471],[14.299,-1.998],[14.425,-1.333],[14.316,-0.553],[13.843,0.039],[14.276,1.197],[14.027,1.396],[13.283,1.314],[13.003,1.831],[13.076,2.267],[14.338,2.228],[15.146,1.964],[15.941,1.728],[16.013,2.268],[16.537,3.198],[17.133,3.728],[17.81,3.56],[18.453,3.504]]]},{"region":4,"bounds":[8.798,-3.979,14.425,2.327],"rings":[[[11.276,2.261],[11.752,2.327],[12.359,2.193],[12.951,2.322],[13.076,2.267],[13.003,1.831],[13.283,1.314],[14.027,1.396],[14.276,1.197],[13.843,0.039],[14.316,-0.553],[14.425,-1.333],[14.299,-1.998],[13.992,-2.471],[13.11,-2.429],[12.575,-1.949],[12.496,-2.392],[11.821,-2.514],[11.478,-2.766],[11.855,-3.427],[11.094,-3.979],[10.066,-2.969],[9.405,-2.144],[8.798,-1.111],[8.83,-0.779],[9.048,-0.459],[9.291,0.269],[9.493,1.01],[9.83,1.068],[11.285,1.058],[11.276,2.261]]]},{"region":4,"bounds":[9.306,1.01,11.285,2.284],"rings":[[[9.649,2.284],[11.276,2.261],[11.285,1.058],[9.83,1.068],[9.493,1.01],[9.306,1.161],[9.649,2.284]]]},{"region":4,"bounds":[21.888,-17.961,33.486,-8.238],"rings":[[[30.74,-8.34],[31.158,-8.595],[31.556,-8.762],[32.192,-8.93],[32.759,-9.231],[33.231,-9.677],[33.486,-10.526],[33.315,-10.797],[33.114,-11.607],[33.306,-12.436],[32.992,-12.784],[32.688,-13.713],[33.214,-13.972],[30.179,-14.796],[30.274,-15.508],[29.517,-15.645],[28.947,-16.043],[28.826,-16.39],[28.468,-16.468],[27.598,-17.291],[27.044,-17.938],[26.707,-17.961],[26.382,-17.846],[25.264,-17.737],[25.084,-17.662],[25.077,-17.579],[24.682,-17.353],[24.034,-17.296],[23.215,-17.523],[22.562,-16.898],[21.888,-16.08],[21.934,-12.898],[24.016,-12.911],[23.931,-12.566],[24.08,-12.191],[23.904,-11.722],[24.018,-11.237],[23.912,-10.927],[24.257,-10.952],[24.315,-11.263],[24.783,-11.239],[25.418,-11.331],[25.752,-11.785],[26.553,-11.924],[27.164,-11.609],[27.389,-12.133],[28.155,-12.272],[28.524,-12.699],[28.934,-13.249],[29.7,-13.257],[29.616,-12.179],[29.342,-12.361],[28.642,-11.972],[28.372,-11.794],[28.496,-10.79],[28.674,-9.606],[28.45,-9.165],[28.735,-8.527],[29.003,-8.407],[30.346,-8.238],[30.74,-8.34]]]},{"region":4,"bounds":[32.688,-16.801,35.772,-9.231],"rings":[[[32.759,-9.231],[33.74,-9.417],[33.941,-9.694],[34.28,-10.16],[34.56,-11.52],[34.28,-12.28],[34.56,-13.58],[34.907,-13.565],[35.268,-13.888],[35.687,-14.611],[35.772,-15.897],[35.339,-16.107],[35.034,-16.801],[34.381,-16.184],[34.307,-15.479],[34.518,-15.014],[34.46,-14.613],[34.065,-14.36],[33.79,-14.452],[33.214,-13.972],[32.688,-13.713],[32.992,-12.784],[33.306,-12.436],[33.114,-11.607],[33.315,-10.797],[33.486,-10.526],[33.231,-9.677],[32.759,-9.231]]]},{"region":4,"bounds":[30.179,-26.742,40.775,-10.317],"rings":[[[34.56,-11.52],[35.312,-11.439],[36.514,-11.721],[36.775,-11.595],[37.471,-11.569],[37.828,-11.269],[38.428,-11.285],[39.521,-10.897],[40.317,-10.317],[40.317,-10.317],[40.317,-10.317],[40.478,-10.765],[40.437,-11.762],[40.561,-12.639],[40.6,-14.202],[40.775,-14.692],[40.477,-15.406],[40.089,-16.101],[39.453,-16.721],[38.538,-17.101],[37.411,-17.586],[36.281,-18.66],[35.896,-18.842],[35.198,-19.553],[34.786,-19.784],[34.702,-20.497],[35.176,-21.254],[35.373,-21.841],[35.386,-22.14],[35.563,-22.09],[35.534,-23.071],[35.372,-23.535],[35.607,-23.707],[35.459,-24.123],[35.041,-24.478],[34.216,-24.816],[33.013,-25.358],[32.575,-25.727],[32.66,-26.149],[32.916,-26.216],[32.83,-26.742],[32.072,-26.734],[31.986,-26.292],[31.838,-25.843],[31.752,-25.484],[31.931,-24.369],[31.67,-23.659],[31.191,-22.252],[32.245,-21.116],[32.509,-20.395],[32.66,-20.304],[32.773,-19.716],[32.612,-19.419],[32.655,-18.672],[32.85,-17.979],[32.848,-16.713],[32.328,-16.392],[31.852,-16.319],[31.636,-16.072],[31.173,-15.861],[30.339,-15.881],[30.274,-15.508],[30.179,-14.796],[33.214,-13.972],[33.79,-14.452],[34.065,-14.36],[34.46,-14.613],[34.518,-15.014],[34.307,-15.479],[34.381,-16.184],[35.034,-16.801],[35.339,-16.107],[35.772,-15.897],[35.687,-14.611],[35.268,-13.888],[34.907,-13.565],[34.56,-13.58],[34.28,-12.28],[34.56,-11.52]]]},{"region":4,"bounds":[30.677,-27.286,32.072,-25.66],"rings":[[[32.072,-26.734],[31.868,-27.178],[31.283,-27.286],[30.686,-26.744],[30.677,-26.398],[30.95,-26.023],[31.044,-25.731],[31.333,-25.66],[31.838,-25.843],[31.986,-26.292],[32.072,-26.734]]]},{"region":4,"bounds":[11.915,-5.79,12.996,-4.438],"rings":[[[12.996,-4.781],[12.632,-4.991],[12.468,-5.248],[12.437,-5.684],[12.182,-5.79],[11.915,-5.038],[12.319,-4.606],[12.621,-4.438],[12.996,-4.781]]]},{"region":4,"bounds":[11.64,-17.931,24.08,-5.864],"rings":[[[12.322,-6.1],[12.735,-5.966],[13.025,-5.984],[13.376,-5.864],[16.327,-5.877],[16.573,-6.623],[16.86,-7.222],[17.09,-7.546],[17.473,-8.069],[18.134,-7.988],[18.464,-7.847],[19.017,-7.988],[19.167,-7.738],[19.418,-7.155],[20.038,-7.116],[20.092,-6.943],[20.602,-6.939],[20.515,-7.3],[21.728,-7.291],[21.746,-7.92],[21.949,-8.306],[21.802,-8.909],[21.875,-9.524],[22.209,-9.895],[22.155,-11.085],[22.403,-10.993],[22.837,-11.018],[23.457,-10.868],[23.912,-10.927],[24.018,-11.237],[23.904,-11.722],[24.08,-12.191],[23.931,-12.566],[24.016,-12.911],[21.934,-12.898],[21.888,-16.08],[22.562,-16.898],[23.215,-17.523],[21.377,-17.931],[18.956,-17.789],[18.263,-17.31],[14.21,-17.353],[14.059,-17.423],[13.462,-16.971],[12.814,-16.941],[12.215,-17.112],[11.734,-17.302],[11.64,-16.673],[11.779,-15.794],[12.124,-14.878],[12.176,-14.449],[12.5,-13.548],[12.738,-13.138],[13.313,-12.484],[13.634,-12.039],[13.739,-11.298],[13.686,-10.731],[13.387,-10.374],[13.121,-9.767],[12.875,-9.167],[12.929,-8.959],[13.236,-8.563],[12.933,-7.597],[12.728,-6.927],[12.227,-6.294],[12.322,-6.1]]]},{"region":4,"bounds":[29.025,-4.5,30.752,-2.348],"rings":[[[30.47,-2.414],[30.528,-2.808],[30.743,-3.034],[30.752,-3.359],[30.506,-3.569],[30.116,-4.09],[29.754,-4.452],[29.34,-4.5],[29.276,-3.294],[29.025,-2.839],[29.632,-2.918],[29.938,-2.348],[30.47,-2.414]]]},{"region":5,"bounds":[34.265,29.501,35.836,33.277],"rings":[[[35.72,32.709],[35.546,32.394],[35.184,32.533],[34.975,31.867],[35.226,31.754],[34.971,31.617],[34.927,31.353],[35.398,31.489],[35.421,31.1],[34.923,29.501],[34.823,29.761],[34.265,31.219],[34.265,31.219],[34.265,31.219],[34.556,31.549],[34.488,31.606],[34.753,32.073],[34.955,32.827],[35.098,33.081],[35.126,33.091],[35.461,33.089],[35.553,33.264],[35.821,33.277],[35.836,32.868],[35.701,32.716],[35.72,32.709]]]},{"region":5,"bounds":[35.126,33.089,36.612,34.645],"rings":[[[35.821,33.277],[35.553,33.264],[35.461,33.089],[35.126,33.091],[35.482,33.905],[35.98,34.61],[35.998,34.645],[36.448,34.594],[36.612,34.202],[36.066,33.825],[35.821,33.277]]]},{"region":4,"bounds":[43.254,-25.601,50.477,-12.041],"rings":[[[49.544,-12.47],[49.809,-12.895],[50.057,-13.556],[50.217,-14.759],[50.477,-15.227],[50.377,-15.706],[50.2,-16],[49.861,-15.414],[49.673,-15.71],[49.863,-16.451],[49.775,-16.875],[49.499,-17.106],[49.436,-17.953],[49.042,-19.119],[48.549,-20.497],[47.931,-22.392],[47.548,-23.782],[47.096,-24.942],[46.282,-25.178],[45.41,-25.601],[44.834,-25.346],[44.04,-24.988],[43.764,-24.461],[43.698,-23.574],[43.346,-22.777],[43.254,-22.057],[43.433,-21.336],[43.894,-21.163],[43.896,-20.83],[44.374,-20.072],[44.464,-19.435],[44.232,-18.962],[44.043,-18.331],[43.963,-17.41],[44.312,-16.85],[44.447,-16.216],[44.945,-16.179],[45.503,-15.974],[45.873,-15.793],[46.312,-15.78],[46.882,-15.21],[47.705,-14.594],[48.005,-14.091],[47.869,-13.664],[48.294,-13.784],[48.845,-13.089],[48.864,-12.488],[49.195,-12.041],[49.544,-12.47]]]},{"region":5,"bounds":[34.927,31.353,35.546,32.533],"rings":[[[35.398,31.489],[34.927,31.353],[34.971,31.617],[35.226,31.754],[34.975,31.867],[35.184,32.533],[35.546,32.394],[35.545,31.783],[35.398,31.489]]]},{"region":4,"bounds":[-16.842,13.13,-13.845,13.876],"rings":[[[-16.714,13.595],[-15.625,13.624],[-15.399,13.86],[-15.082,13.876],[-14.687,13.63],[-14.377,13.626],[-14.047,13.794],[-13.845,13.505],[-14.278,13.281],[-14.712,13.298],[-15.141,13.51],[-15.512,13.279],[-15.691,13.27],[-15.931,13.13],[-16.842,13.151],[-16.714,13.595]]]},{"region":5,"bounds":[7.524,30.308,11.489,37.35],"rings":[[[9.482,30.308],[9.056,32.103],[8.439,32.506],[8.43,32.748],[7.613,33.344],[7.524,34.097],[8.141,34.655],[8.376,35.48],[8.218,36.433],[8.421,36.946],[9.51,37.35],[10.21,37.23],[10.181,36.724],[11.029,37.092],[11.1,36.9],[10.6,36.41],[10.593,35.947],[10.94,35.699],[10.808,34.834],[10.15,34.331],[10.34,33.786],[10.857,33.769],[11.109,33.293],[11.489,33.137],[11.432,32.369],[10.945,32.082],[10.637,31.761],[9.95,31.376],[10.057,30.962],[9.97,30.539],[9.482,30.308]]]},{"region":5,"bounds":[-8.684,19.057,12,37.118],"rings":[[[-8.684,27.396],[-8.665,27.589],[-8.666,27.656],[-8.674,28.841],[-7.059,29.579],[-6.061,29.732],[-5.242,30],[-4.86,30.501],[-3.69,30.897],[-3.647,31.637],[-3.069,31.724],[-2.617,32.094],[-1.308,32.263],[-1.125,32.652],[-1.388,32.864],[-1.733,33.92],[-1.793,34.528],[-2.17,35.168],[-1.209,35.715],[-0.127,35.889],[0.504,36.301],[1.467,36.606],[3.162,36.784],[4.816,36.865],[5.32,36.717],[6.262,37.111],[7.33,37.118],[7.737,36.886],[8.421,36.946],[8.218,36.433],[8.376,35.48],[8.141,34.655],[7.524,34.097],[7.613,33.344],[8.43,32.748],[8.439,32.506],[9.056,32.103],[9.482,30.308],[9.806,29.425],[9.86,28.96],[9.684,28.144],[9.756,27.688],[9.629,27.141],[9.716,26.512],[9.319,26.094],[9.911,25.365],[9.948,24.937],[10.304,24.379],[10.771,24.563],[11.561,24.098],[12,23.472],[8.573,21.566],[5.678,19.601],[4.267,19.155],[3.158,19.057],[3.147,19.694],[2.684,19.856],[2.061,20.142],[1.823,20.611],[-1.55,22.793],[-4.923,24.975],[-8.684,27.396]]]},{"region":5,"bounds":[34.923,29.197,39.195,33.379],"rings":[[[35.546,32.394],[35.72,32.709],[36.834,32.313],[38.792,33.379],[39.195,32.161],[39.005,32.01],[37.002,31.508],[37.999,30.509],[37.668,30.339],[37.504,30.004],[36.741,29.865],[36.501,29.505],[36.069,29.197],[34.956,29.357],[34.923,29.501],[35.421,31.1],[35.398,31.489],[35.545,31.783],[35.546,32.394]]]},{"region":5,"bounds":[51.58,22.497,56.397,26.055],"rings":[[[51.58,24.245],[51.757,24.294],[51.794,24.02],[52.577,24.177],[53.404,24.151],[54.008,24.122],[54.693,24.798],[55.439,25.439],[56.071,26.055],[56.261,25.715],[56.397,24.925],[55.886,24.921],[55.804,24.27],[55.981,24.131],[55.529,23.934],[55.526,23.525],[55.234,23.111],[55.208,22.708],[55.007,22.497],[52.001,23.001],[51.618,24.014],[51.58,24.245]]]},{"region":5,"bounds":[50.744,24.556,51.607,26.115],"rings":[[[50.81,24.755],[50.744,25.482],[51.013,26.007],[51.286,26.115],[51.589,25.801],[51.607,25.216],[51.39,24.627],[51.112,24.556],[50.81,24.755]]]},{"region":5,"bounds":[46.569,28.526,48.416,30.059],"rings":[[[47.975,29.976],[48.183,29.534],[48.094,29.306],[48.416,28.552],[47.709,28.526],[47.46,29.003],[46.569,29.099],[47.303,30.059],[47.975,29.976]]]},{"region":5,"bounds":[38.792,29.099,48.568,37.385],"rings":[[[39.195,32.161],[38.792,33.379],[41.006,34.419],[41.384,35.628],[41.29,36.359],[41.837,36.606],[42.35,37.23],[42.779,37.385],[43.942,37.256],[44.293,37.002],[44.773,37.17],[45.421,35.978],[46.076,35.677],[46.152,35.093],[45.648,34.748],[45.417,33.968],[46.109,33.017],[47.335,32.469],[47.849,31.709],[47.685,30.985],[48.005,30.985],[48.015,30.452],[48.568,29.927],[47.975,29.976],[47.303,30.059],[46.569,29.099],[44.709,29.179],[41.89,31.19],[40.4,31.89],[39.195,32.161]]]},{"region":5,"bounds":[52,16.651,59.808,24.925],"rings":[[[55.208,22.708],[55.234,23.111],[55.526,23.525],[55.529,23.934],[55.981,24.131],[55.804,24.27],[55.886,24.921],[56.397,24.925],[56.845,24.242],[57.403,23.879],[58.137,23.748],[58.729,23.566],[59.181,22.992],[59.45,22.66],[59.808,22.534],[59.806,22.311],[59.442,21.715],[59.282,21.434],[58.861,21.114],[58.488,20.429],[58.034,20.481],[57.826,20.243],[57.666,19.736],[57.789,19.068],[57.694,18.945],[57.234,18.948],[56.61,18.574],[56.512,18.087],[56.284,17.876],[55.661,17.884],[55.27,17.632],[55.275,17.228],[54.791,16.951],[54.239,17.045],[53.571,16.708],[53.109,16.651],[52.782,17.35],[52,19],[55,20],[55.667,22],[55.208,22.708]]]},{"region":5,"bounds":[56.071,25.715,56.486,26.396],"rings":[[[56.261,25.715],[56.071,26.055],[56.362,26.396],[56.486,26.309],[56.391,25.896],[56.261,25.715]]]},{"region":9,"bounds":[167.18,-16.598,167.845,-15.892],"rings":[[[167.217,-15.892],[167.845,-16.466],[167.515,-16.598],[167.18,-16.16],[167.217,-15.892]]]},{"region":9,"bounds":[166.629,-15.74,167.27,-14.626],"rings":[[[166.793,-15.669],[166.65,-15.393],[166.629,-14.626],[167.108,-14.934],[167.27,-15.74],[167.001,-15.615],[166.793,-15.669]]]},{"region":8,"bounds":[102.348,10.487,107.615,14.571],"rings":[[[102.585,12.187],[102.348,13.394],[102.988,14.226],[104.281,14.417],[105.219,14.273],[106.044,13.881],[106.496,14.571],[107.383,14.202],[107.615,13.536],[107.491,12.337],[105.811,11.568],[106.25,10.962],[105.2,10.889],[104.334,10.487],[103.497,10.633],[103.091,11.154],[102.585,12.187]]]},{"region":8,"bounds":[97.376,5.691,105.589,20.418],"rings":[[[105.219,14.273],[104.281,14.417],[102.988,14.226],[102.348,13.394],[102.585,12.187],[101.687,12.646],[100.832,12.627],[100.978,13.413],[100.098,13.407],[100.019,12.307],[99.479,10.846],[99.154,9.963],[99.222,9.239],[99.874,9.208],[100.28,8.295],[100.459,7.43],[101.017,6.857],[101.623,6.741],[102.141,6.222],[101.814,5.811],[101.154,5.691],[101.076,6.205],[100.26,6.643],[100.086,6.464],[99.691,6.848],[99.52,7.343],[98.988,7.908],[98.504,8.382],[98.34,7.795],[98.15,8.35],[98.259,8.974],[98.554,9.933],[99.038,10.961],[99.587,11.893],[99.196,12.805],[99.212,13.269],[99.098,13.828],[98.431,14.622],[98.192,15.124],[98.537,15.308],[98.903,16.178],[98.494,16.838],[97.859,17.568],[97.376,18.445],[97.798,18.627],[98.254,19.708],[98.96,19.753],[99.543,20.187],[100.116,20.418],[100.549,20.109],[100.606,19.508],[101.282,19.463],[101.036,18.409],[101.06,17.512],[102.114,18.109],[102.413,17.933],[102.999,17.962],[103.2,18.31],[103.956,18.241],[104.717,17.429],[104.779,16.442],[105.589,15.57],[105.544,14.724],[105.219,14.273]]]},{"region":8,"bounds":[100.116,13.881,107.565,22.465],"rings":[[[107.383,14.202],[106.496,14.571],[106.044,13.881],[105.219,14.273],[105.544,14.724],[105.589,15.57],[104.779,16.442],[104.717,17.429],[103.956,18.241],[103.2,18.31],[102.999,17.962],[102.413,17.933],[102.114,18.109],[101.06,17.512],[101.036,18.409],[101.282,19.463],[100.606,19.508],[100.549,20.109],[100.116,20.418],[100.329,20.786],[101.18,21.437],[101.27,21.202],[101.803,21.174],[101.652,22.318],[102.17,22.465],[102.755,21.675],[103.204,20.767],[104.435,20.759],[104.823,19.887],[104.183,19.625],[103.897,19.265],[105.095,18.667],[105.926,17.485],[106.556,16.604],[107.313,15.909],[107.565,15.202],[107.383,14.202]]]},{"region":8,"bounds":[92.303,9.933,101.18,28.336],"rings":[[[100.116,20.418],[99.543,20.187],[98.96,19.753],[98.254,19.708],[97.798,18.627],[97.376,18.445],[97.859,17.568],[98.494,16.838],[98.903,16.178],[98.537,15.308],[98.192,15.124],[98.431,14.622],[99.098,13.828],[99.212,13.269],[99.196,12.805],[99.587,11.893],[99.038,10.961],[98.554,9.933],[98.457,10.675],[98.765,11.441],[98.428,12.033],[98.51,13.122],[98.104,13.64],[97.778,14.837],[97.597,16.101],[97.165,16.929],[96.506,16.427],[95.369,15.714],[94.808,15.803],[94.189,16.038],[94.533,17.277],[94.325,18.214],[93.541,19.366],[93.663,19.727],[93.078,19.855],[92.369,20.671],[92.303,21.475],[92.652,21.324],[92.673,22.041],[93.166,22.278],[93.06,22.703],[93.286,23.044],[93.325,24.079],[94.107,23.851],[94.553,24.675],[94.603,25.162],[95.155,26.001],[95.125,26.574],[96.419,27.265],[97.134,27.084],[97.052,27.699],[97.403,27.883],[97.327,28.262],[97.912,28.336],[98.246,27.747],[98.683,27.509],[98.712,26.744],[98.672,25.919],[97.725,25.084],[97.605,23.897],[98.66,24.063],[98.899,23.143],[99.532,22.949],[99.241,22.118],[99.983,21.743],[100.417,21.559],[101.15,21.85],[101.18,21.437],[100.329,20.786],[100.116,20.418]]]},{"region":8,"bounds":[102.17,8.6,109.335,23.352],"rings":[[[104.334,10.487],[105.2,10.889],[106.25,10.962],[105.811,11.568],[107.491,12.337],[107.615,13.536],[107.383,14.202],[107.565,15.202],[107.313,15.909],[106.556,16.604],[105.926,17.485],[105.095,18.667],[103.897,19.265],[104.183,19.625],[104.823,19.887],[104.435,20.759],[103.204,20.767],[102.755,21.675],[102.17,22.465],[102.707,22.709],[103.505,22.704],[104.477,22.819],[105.329,23.352],[105.811,22.977],[106.725,22.794],[106.567,22.218],[107.043,21.812],[108.05,21.552],[106.715,20.697],[105.882,19.752],[105.662,19.058],[106.427,18.004],[107.362,16.697],[108.269,16.08],[108.877,15.277],[109.335,13.426],[109.2,11.667],[108.366,11.008],[107.221,10.364],[106.405,9.531],[105.158,8.6],[104.795,9.241],[105.076,9.918],[104.334,10.487]]]},{"region":7,"bounds":[130.78,42.22,130.78,42.22],"rings":[[[130.78,42.22],[130.78,42.22],[130.78,42.22],[130.78,42.22]]]},{"region":7,"bounds":[124.266,37.669,130.78,42.985],"rings":[[[130.64,42.395],[130.64,42.395],[130.78,42.22],[130.4,42.28],[129.966,41.941],[129.667,41.601],[129.705,40.883],[129.188,40.662],[129.01,40.485],[128.633,40.19],[127.967,40.025],[127.533,39.757],[127.502,39.324],[127.385,39.213],[127.783,39.051],[128.35,38.612],[128.206,38.37],[127.78,38.305],[127.073,38.256],[126.684,37.805],[126.237,37.84],[126.175,37.75],[125.689,37.94],[125.568,37.752],[125.275,37.669],[125.24,37.857],[124.981,37.949],[124.712,38.108],[124.986,38.548],[125.222,38.666],[125.133,38.849],[125.387,39.388],[125.321,39.551],[124.737,39.66],[124.266,39.928],[125.08,40.57],[126.182,41.107],[126.869,41.817],[127.344,41.503],[128.208,41.467],[128.052,41.994],[129.597,42.425],[129.994,42.985],[130.64,42.395]]]},{"region":7,"bounds":[126.117,34.39,129.468,38.612],"rings":[[[126.175,37.75],[126.237,37.84],[126.684,37.805],[127.073,38.256],[127.78,38.305],[128.206,38.37],[128.35,38.612],[129.213,37.432],[129.46,36.784],[129.468,35.632],[129.091,35.082],[128.186,34.89],[127.387,34.476],[126.486,34.39],[126.374,34.935],[126.559,35.685],[126.117,36.725],[126.86,36.894],[126.175,37.75]]]},{"region":7,"bounds":[87.751,41.597,119.773,52.047],"rings":[[[87.751,49.297],[88.806,49.471],[90.714,50.332],[92.235,50.802],[93.104,50.495],[94.148,50.481],[94.816,50.013],[95.814,49.977],[97.26,49.726],[98.232,50.422],[97.826,51.011],[98.861,52.047],[99.982,51.634],[100.889,51.517],[102.065,51.26],[102.256,50.511],[103.677,50.09],[104.622,50.275],[105.887,50.406],[106.889,50.274],[107.868,49.794],[108.475,49.283],[109.402,49.293],[110.662,49.13],[111.581,49.378],[112.898,49.544],[114.362,50.248],[114.962,50.14],[115.486,49.805],[116.679,49.889],[116.192,49.135],[115.485,48.135],[115.743,47.727],[116.309,47.853],[117.296,47.698],[118.064,48.067],[118.867,47.747],[119.773,47.048],[119.663,46.693],[118.874,46.805],[117.422,46.673],[116.718,46.388],[115.985,45.727],[114.46,45.34],[113.464,44.809],[112.436,45.012],[111.873,45.102],[111.348,44.457],[111.668,44.073],[111.83,43.743],[111.13,43.407],[110.412,42.871],[109.244,42.519],[107.745,42.482],[106.129,42.134],[104.965,41.597],[104.522,41.908],[103.312,41.907],[101.833,42.515],[100.846,42.664],[99.516,42.525],[97.452,42.749],[96.349,42.726],[95.762,43.319],[95.307,44.241],[94.689,44.352],[93.481,44.975],[92.134,45.115],[90.946,45.286],[90.586,45.72],[90.971,46.888],[90.281,47.694],[88.854,48.069],[88.014,48.599],[87.751,49.297]]]},{"region":6,"bounds":[68.177,7.966,97.403,35.494],"rings":[[[97.327,28.262],[97.403,27.883],[97.052,27.699],[97.134,27.084],[96.419,27.265],[95.125,26.574],[95.155,26.001],[94.603,25.162],[94.553,24.675],[94.107,23.851],[93.325,24.079],[93.286,23.044],[93.06,22.703],[93.166,22.278],[92.673,22.041],[92.146,23.627],[91.87,23.624],[91.706,22.985],[91.159,23.504],[91.468,24.073],[91.915,24.13],[92.376,24.977],[91.8,25.147],[90.872,25.133],[89.921,25.27],[89.832,25.965],[89.355,26.014],[88.563,26.447],[88.21,25.768],[88.932,25.239],[88.306,24.866],[88.084,24.502],[88.7,24.234],[88.53,23.631],[88.876,22.879],[89.032,22.056],[88.889,21.691],[88.208,21.703],[86.976,21.496],[87.033,20.743],[86.499,20.152],[85.06,19.479],[83.941,18.302],[83.189,17.671],[82.193,17.017],[82.191,16.557],[81.693,16.31],[80.792,15.952],[80.325,15.899],[80.025,15.136],[80.233,13.836],[80.286,13.006],[79.863,12.056],[79.858,10.357],[79.341,10.309],[78.885,9.546],[79.19,9.217],[78.278,8.933],[77.941,8.253],[77.54,7.966],[76.593,8.899],[76.13,10.3],[75.746,11.308],[75.396,11.781],[74.865,12.742],[74.617,13.993],[74.444,14.617],[73.534,15.991],[73.12,17.929],[72.821,19.208],[72.824,20.42],[72.631,21.356],[71.175,20.757],[70.47,20.877],[69.164,22.089],[69.645,22.451],[69.35,22.843],[68.177,23.692],[68.843,24.359],[71.043,24.357],[70.845,25.215],[70.283,25.722],[70.169,26.492],[69.514,26.941],[70.616,27.989],[71.778,27.913],[72.824,28.962],[73.451,29.976],[74.421,30.98],[74.406,31.693],[75.259,32.271],[74.452,32.765],[74.104,33.441],[73.75,34.318],[74.24,34.749],[75.757,34.505],[76.872,34.654],[77.837,35.494],[78.912,34.322],[78.811,33.506],[79.209,32.994],[79.176,32.484],[78.458,32.618],[78.739,31.516],[79.721,30.883],[81.111,30.183],[80.477,29.73],[80.088,28.794],[81.057,28.416],[82,27.925],[83.304,27.365],[84.675,27.235],[85.252,26.726],[86.024,26.631],[87.227,26.398],[88.06,26.415],[88.175,26.81],[88.043,27.446],[88.12,27.877],[88.73,28.087],[88.814,27.299],[88.836,27.099],[89.745,26.719],[90.373,26.876],[91.218,26.809],[92.033,26.838],[92.104,27.453],[91.697,27.772],[92.503,27.897],[93.413,28.641],[94.566,29.277],[95.405,29.032],[96.118,29.453],[96.587,28.831],[96.249,28.411],[97.327,28.262]]]},{"region":6,"bounds":[88.084,20.671,92.673,26.447],"rings":[[[92.673,22.041],[92.652,21.324],[92.303,21.475],[92.369,20.671],[92.083,21.192],[92.025,21.702],[91.835,22.183],[91.417,22.765],[90.496,22.805],[90.587,22.393],[90.273,21.836],[89.847,22.039],[89.702,21.857],[89.419,21.966],[89.032,22.056],[88.876,22.879],[88.53,23.631],[88.7,24.234],[88.084,24.502],[88.306,24.866],[88.932,25.239],[88.21,25.768],[88.563,26.447],[89.355,26.014],[89.832,25.965],[89.921,25.27],[90.872,25.133],[91.8,25.147],[92.376,24.977],[91.915,24.13],[91.468,24.073],[91.159,23.504],[91.706,22.985],[91.87,23.624],[92.146,23.627],[92.673,22.041]]]},{"region":6,"bounds":[88.814,26.719,92.104,28.296],"rings":[[[91.697,27.772],[92.104,27.453],[92.033,26.838],[91.218,26.809],[90.373,26.876],[89.745,26.719],[88.836,27.099],[88.814,27.299],[89.476,28.043],[90.016,28.296],[90.731,28.065],[91.259,28.041],[91.697,27.772]]]},{"region":6,"bounds":[80.088,26.398,88.175,30.423],"rings":[[[88.12,27.877],[88.043,27.446],[88.175,26.81],[88.06,26.415],[87.227,26.398],[86.024,26.631],[85.252,26.726],[84.675,27.235],[83.304,27.365],[82,27.925],[81.057,28.416],[80.088,28.794],[80.477,29.73],[81.111,30.183],[81.526,30.423],[82.328,30.115],[83.337,29.464],[83.899,29.32],[84.235,28.84],[85.012,28.643],[85.823,28.204],[86.955,27.974],[88.12,27.877]]]},{"region":6,"bounds":[60.874,23.692,77.837,37.133],"rings":[[[77.837,35.494],[76.872,34.654],[75.757,34.505],[74.24,34.749],[73.75,34.318],[74.104,33.441],[74.452,32.765],[75.259,32.271],[74.406,31.693],[74.421,30.98],[73.451,29.976],[72.824,28.962],[71.778,27.913],[70.616,27.989],[69.514,26.941],[70.169,26.492],[70.283,25.722],[70.845,25.215],[71.043,24.357],[68.843,24.359],[68.177,23.692],[67.444,23.945],[67.145,24.664],[66.373,25.425],[64.53,25.237],[62.906,25.218],[61.497,25.078],[61.874,26.24],[63.317,26.757],[63.234,27.217],[62.755,27.379],[62.728,28.26],[61.772,28.699],[61.369,29.303],[60.874,29.829],[62.55,29.319],[63.55,29.468],[64.148,29.341],[64.35,29.56],[65.047,29.472],[66.346,29.888],[66.381,30.739],[66.939,31.305],[67.683,31.303],[67.793,31.583],[68.557,31.713],[68.927,31.62],[69.318,31.901],[69.263,32.502],[69.687,33.105],[70.324,33.359],[69.931,34.02],[70.882,33.989],[71.157,34.349],[71.115,34.733],[71.613,35.153],[71.499,35.651],[71.262,36.074],[71.846,36.51],[72.92,36.72],[74.068,36.836],[74.576,37.021],[75.158,37.133],[75.897,36.667],[76.193,35.898],[77.837,35.494]]]},{"region":6,"bounds":[60.528,29.319,75.158,38.486],"rings":[[[66.519,37.363],[67.076,37.356],[67.83,37.145],[68.136,37.023],[68.859,37.344],[69.196,37.151],[69.519,37.609],[70.117,37.588],[70.271,37.735],[70.376,38.138],[70.807,38.486],[71.348,38.259],[71.239,37.953],[71.542,37.906],[71.449,37.066],[71.845,36.738],[72.193,36.948],[72.637,37.048],[73.26,37.495],[73.949,37.422],[74.98,37.42],[75.158,37.133],[74.576,37.021],[74.068,36.836],[72.92,36.72],[71.846,36.51],[71.262,36.074],[71.499,35.651],[71.613,35.153],[71.115,34.733],[71.157,34.349],[70.882,33.989],[69.931,34.02],[70.324,33.359],[69.687,33.105],[69.263,32.502],[69.318,31.901],[68.927,31.62],[68.557,31.713],[67.793,31.583],[67.683,31.303],[66.939,31.305],[66.381,30.739],[66.346,29.888],[65.047,29.472],[64.35,29.56],[64.148,29.341],[63.55,29.468],[62.55,29.319],[60.874,29.829],[61.781,30.736],[61.699,31.38],[60.942,31.548],[60.864,32.183],[60.536,32.981],[60.964,33.529],[60.528,33.676],[60.803,34.404],[61.211,35.65],[62.231,35.271],[62.985,35.404],[63.194,35.857],[63.983,36.008],[64.546,36.312],[64.746,37.112],[65.589,37.305],[65.746,37.661],[66.217,37.394],[66.519,37.363]]]},{"region":3,"bounds":[67.442,36.738,74.98,40.96],"rings":[[[67.83,37.145],[68.392,38.157],[68.176,38.902],[67.442,39.14],[67.701,39.58],[68.536,39.533],[69.012,40.086],[69.329,40.728],[70.667,40.96],[70.458,40.496],[70.601,40.219],[71.014,40.244],[70.648,39.936],[69.56,40.103],[69.465,39.527],[70.549,39.604],[71.785,39.279],[73.675,39.431],[73.929,38.506],[74.258,38.607],[74.865,38.379],[74.83,37.99],[74.98,37.42],[73.949,37.422],[73.26,37.495],[72.637,37.048],[72.193,36.948],[71.845,36.738],[71.449,37.066],[71.542,37.906],[71.239,37.953],[71.348,38.259],[70.807,38.486],[70.376,38.138],[70.271,37.735],[70.117,37.588],[69.519,37.609],[69.196,37.151],[68.859,37.344],[68.136,37.023],[67.83,37.145]]]},{"region":3,"bounds":[69.465,39.279,80.26,43.298],"rings":[[[70.962,42.266],[71.186,42.704],[71.845,42.845],[73.49,42.501],[73.645,43.091],[74.213,43.298],[75.637,42.878],[76,42.988],[77.658,42.961],[79.142,42.856],[79.644,42.497],[80.26,42.35],[80.119,42.124],[78.544,41.582],[78.187,41.185],[76.904,41.066],[76.526,40.428],[75.468,40.562],[74.777,40.366],[73.822,39.894],[73.96,39.66],[73.675,39.431],[71.785,39.279],[70.549,39.604],[69.465,39.527],[69.56,40.103],[70.648,39.936],[71.014,40.244],[71.775,40.146],[73.055,40.866],[71.87,41.393],[71.158,41.144],[70.42,41.52],[71.259,42.168],[70.962,42.266]]]},{"region":3,"bounds":[52.502,35.271,66.546,42.752],"rings":[[[52.502,41.783],[52.944,42.116],[54.079,42.324],[54.755,42.044],[55.455,41.26],[55.968,41.309],[57.096,41.322],[56.932,41.826],[57.787,42.171],[58.629,42.752],[59.976,42.223],[60.083,41.425],[60.466,41.22],[61.547,41.266],[61.883,41.085],[62.374,40.054],[63.518,39.363],[64.17,38.892],[65.216,38.403],[66.546,37.975],[66.519,37.363],[66.217,37.394],[65.746,37.661],[65.589,37.305],[64.746,37.112],[64.546,36.312],[63.983,36.008],[63.194,35.857],[62.985,35.404],[62.231,35.271],[61.211,35.65],[61.123,36.492],[60.378,36.527],[59.235,37.413],[58.436,37.522],[57.33,38.029],[56.619,38.121],[56.18,37.935],[55.512,37.964],[54.8,37.392],[53.922,37.199],[53.736,37.906],[53.881,38.952],[53.101,39.291],[53.358,39.975],[52.694,40.034],[52.915,40.877],[53.858,40.631],[54.737,40.951],[54.008,41.551],[53.722,42.123],[52.917,41.868],[52.815,41.135],[52.502,41.783]]]},{"region":5,"bounds":[44.109,25.078,63.317,39.713],"rings":[[[48.568,29.927],[48.015,30.452],[48.005,30.985],[47.685,30.985],[47.849,31.709],[47.335,32.469],[46.109,33.017],[45.417,33.968],[45.648,34.748],[46.152,35.093],[46.076,35.677],[45.421,35.978],[44.773,37.17],[44.773,37.17],[44.226,37.972],[44.421,38.281],[44.109,39.428],[44.794,39.713],[44.953,39.336],[45.458,38.874],[46.144,38.741],[46.506,38.771],[47.685,39.508],[48.06,39.582],[48.356,39.289],[48.011,38.794],[48.634,38.27],[48.883,38.32],[49.2,37.583],[50.148,37.375],[50.842,36.873],[52.264,36.7],[53.826,36.965],[53.922,37.199],[54.8,37.392],[55.512,37.964],[56.18,37.935],[56.619,38.121],[57.33,38.029],[58.436,37.522],[59.235,37.413],[60.378,36.527],[61.123,36.492],[61.211,35.65],[60.803,34.404],[60.528,33.676],[60.964,33.529],[60.536,32.981],[60.864,32.183],[60.942,31.548],[61.699,31.38],[61.781,30.736],[60.874,29.829],[61.369,29.303],[61.772,28.699],[62.728,28.26],[62.755,27.379],[63.234,27.217],[63.317,26.757],[61.874,26.24],[61.497,25.078],[59.616,25.38],[58.526,25.61],[57.397,25.74],[56.971,26.966],[56.492,27.143],[55.724,26.965],[54.715,26.481],[53.493,26.812],[52.484,27.581],[51.521,27.866],[50.853,28.815],[50.115,30.148],[49.577,29.986],[48.941,30.317],[48.568,29.927]]]},{"region":5,"bounds":[35.701,32.313,42.35,37.23],"rings":[[[35.72,32.709],[35.701,32.716],[35.836,32.868],[35.821,33.277],[36.066,33.825],[36.612,34.202],[36.448,34.594],[35.998,34.645],[35.905,35.41],[36.15,35.822],[36.418,36.041],[36.685,36.26],[36.739,36.818],[37.067,36.623],[38.168,36.901],[38.7,36.713],[39.523,36.716],[40.673,37.091],[41.212,37.074],[42.35,37.23],[41.837,36.606],[41.29,36.359],[41.384,35.628],[41.006,34.419],[38.792,33.379],[36.834,32.313],[35.72,32.709]]]},{"region":5,"bounds":[43.583,38.741,46.506,41.248],"rings":[[[46.506,38.771],[46.144,38.741],[45.735,39.32],[45.74,39.474],[45.298,39.472],[45.002,39.74],[44.794,39.713],[44.4,40.005],[43.656,40.254],[43.753,40.74],[43.583,41.092],[44.972,41.248],[45.179,40.985],[45.56,40.812],[45.359,40.562],[45.892,40.218],[45.61,39.9],[46.035,39.628],[46.483,39.464],[46.506,38.771]]]},{"region":2,"bounds":[11.027,55.362,23.903,69.106],"rings":[[[11.027,58.856],[11.468,59.432],[12.3,60.118],[12.631,61.294],[11.992,61.8],[11.931,63.128],[12.58,64.066],[13.572,64.049],[13.92,64.445],[13.556,64.787],[15.108,66.194],[16.109,67.302],[16.769,68.014],[17.729,68.011],[17.994,68.567],[19.879,68.407],[20.025,69.065],[20.646,69.106],[21.979,68.617],[23.539,67.936],[23.566,66.396],[23.903,66.007],[22.183,65.724],[21.214,65.026],[21.37,64.414],[19.779,63.61],[17.848,62.749],[17.12,61.341],[17.831,60.637],[18.788,60.082],[17.869,58.954],[16.829,58.72],[16.448,57.041],[15.88,56.104],[14.667,56.201],[14.101,55.408],[12.943,55.362],[12.625,56.307],[11.788,57.442],[11.027,58.856]]]},{"region":3,"bounds":[23.199,51.32,32.694,56.169],"rings":[[[28.177,56.169],[29.23,55.918],[29.372,55.67],[29.896,55.789],[30.874,55.551],[30.972,55.082],[30.758,54.812],[31.384,54.157],[31.791,53.975],[31.731,53.794],[32.406,53.618],[32.694,53.351],[32.305,53.133],[31.498,53.167],[31.305,53.074],[31.54,52.742],[31.786,52.102],[31.786,52.102],[30.928,52.042],[30.619,51.823],[30.555,51.32],[30.157,51.416],[29.255,51.368],[28.993,51.602],[28.618,51.428],[28.242,51.572],[27.454,51.592],[26.338,51.832],[25.328,51.911],[24.553,51.888],[24.005,51.617],[23.527,51.578],[23.508,52.024],[23.199,52.487],[23.799,52.691],[23.805,53.09],[23.528,53.47],[23.484,53.912],[24.451,53.906],[25.536,54.282],[25.768,54.847],[26.588,55.167],[26.494,55.615],[27.102,55.783],[28.177,56.169]]]},{"region":3,"bounds":[22.086,45.293,40.081,52.335],"rings":[[[31.786,52.102],[32.159,52.061],[32.412,52.289],[32.716,52.238],[33.753,52.335],[34.392,51.769],[34.142,51.566],[34.225,51.256],[35.022,51.208],[35.378,50.774],[35.356,50.577],[36.626,50.226],[37.393,50.384],[38.011,49.916],[38.595,49.926],[40.069,49.601],[40.081,49.307],[39.675,48.784],[39.896,48.232],[39.738,47.899],[38.771,47.826],[38.255,47.546],[38.224,47.102],[37.425,47.022],[36.76,46.699],[35.824,46.646],[34.962,46.273],[35.013,45.738],[34.862,45.768],[34.732,45.966],[34.41,46.005],[33.699,46.22],[33.436,45.972],[33.299,46.081],[31.744,46.333],[31.675,46.706],[30.749,46.583],[30.378,46.032],[29.603,45.293],[29.15,45.465],[28.68,45.304],[28.234,45.488],[28.485,45.597],[28.66,45.94],[28.934,46.259],[28.863,46.438],[29.072,46.518],[29.171,46.379],[29.76,46.35],[30.025,46.424],[29.838,46.525],[29.909,46.674],[29.56,46.929],[29.415,47.347],[29.051,47.51],[29.123,47.849],[28.671,48.118],[28.26,48.156],[27.523,48.467],[26.858,48.368],[26.619,48.221],[26.197,48.221],[25.946,47.987],[25.208,47.891],[24.866,47.738],[24.402,47.982],[23.761,47.986],[23.142,48.096],[22.711,47.882],[22.641,48.15],[22.086,48.422],[22.281,48.825],[22.558,49.086],[22.776,49.027],[22.518,49.477],[23.427,50.309],[23.923,50.425],[24.03,50.705],[23.527,51.578],[24.005,51.617],[24.553,51.888],[25.328,51.911],[26.338,51.832],[27.454,51.592],[28.242,51.572],[28.618,51.428],[28.993,51.602],[29.255,51.368],[30.157,51.416],[30.555,51.32],[30.619,51.823],[30.928,52.042],[31.786,52.102]]]},{"region":3,"bounds":[14.075,49.027,24.03,54.852],"rings":[[[23.484,53.912],[23.528,53.47],[23.805,53.09],[23.799,52.691],[23.199,52.487],[23.508,52.024],[23.527,51.578],[24.03,50.705],[23.923,50.425],[23.427,50.309],[22.518,49.477],[22.776,49.027],[22.558,49.086],[21.608,49.47],[20.888,49.329],[20.416,49.431],[19.825,49.217],[19.321,49.572],[18.91,49.436],[18.853,49.496],[18.393,49.989],[17.649,50.049],[17.555,50.362],[16.869,50.474],[16.719,50.216],[16.176,50.423],[16.239,50.698],[15.491,50.785],[15.017,51.107],[14.607,51.745],[14.685,52.09],[14.438,52.625],[14.075,52.981],[14.353,53.248],[14.12,53.757],[14.803,54.051],[16.363,54.513],[17.623,54.852],[18.621,54.683],[18.696,54.439],[19.661,54.426],[20.892,54.313],[22.731,54.328],[23.244,54.221],[23.484,53.912]]]},{"region":2,"bounds":[9.48,46.432,16.98,49.039],"rings":[[[16.98,48.123],[16.904,47.715],[16.341,47.713],[16.534,47.496],[16.202,46.852],[16.012,46.684],[15.137,46.659],[14.632,46.432],[13.806,46.509],[12.376,46.768],[12.153,47.115],[11.165,46.942],[11.049,46.751],[10.443,46.894],[9.932,46.921],[9.48,47.103],[9.633,47.348],[9.594,47.525],[9.896,47.58],[10.402,47.302],[10.545,47.566],[11.426,47.524],[12.141,47.703],[12.621,47.672],[12.933,47.468],[13.026,47.638],[12.884,48.289],[13.243,48.416],[13.596,48.877],[14.339,48.555],[14.901,48.964],[15.253,49.039],[16.03,48.734],[16.499,48.786],[16.96,48.597],[16.88,48.47],[16.98,48.123]]]},{"region":3,"bounds":[16.202,45.759,22.711,48.624],"rings":[[[22.086,48.422],[22.641,48.15],[22.711,47.882],[22.1,47.672],[21.627,46.994],[21.022,46.316],[20.22,46.127],[19.596,46.172],[18.83,45.909],[18.83,45.909],[18.456,45.759],[17.63,45.952],[16.883,46.381],[16.565,46.504],[16.371,46.841],[16.202,46.852],[16.534,47.496],[16.341,47.713],[16.904,47.715],[16.98,48.123],[17.488,47.867],[17.857,47.758],[18.697,47.881],[18.777,48.082],[19.174,48.111],[19.661,48.267],[19.769,48.203],[20.239,48.328],[20.474,48.563],[20.801,48.624],[21.872,48.32],[22.086,48.422]]]},{"region":3,"bounds":[26.619,45.488,30.025,48.467],"rings":[[[26.619,48.221],[26.858,48.368],[27.523,48.467],[28.26,48.156],[28.671,48.118],[29.123,47.849],[29.051,47.51],[29.415,47.347],[29.56,46.929],[29.909,46.674],[29.838,46.525],[30.025,46.424],[29.76,46.35],[29.171,46.379],[29.072,46.518],[28.863,46.438],[28.934,46.259],[28.66,45.94],[28.485,45.597],[28.234,45.488],[28.054,45.945],[28.16,46.372],[28.128,46.81],[27.551,47.405],[27.234,47.827],[26.924,48.123],[26.619,48.221]]]},{"region":3,"bounds":[20.22,43.688,29.627,48.221],"rings":[[[28.234,45.488],[28.68,45.304],[29.15,45.465],[29.603,45.293],[29.627,45.035],[29.142,44.82],[28.838,44.914],[28.558,43.707],[27.97,43.812],[27.242,44.176],[26.065,43.943],[25.569,43.688],[24.101,43.741],[23.332,43.897],[22.945,43.824],[22.657,44.235],[22.474,44.409],[22.706,44.578],[22.459,44.703],[22.145,44.478],[21.562,44.769],[21.484,45.181],[20.874,45.416],[20.762,45.735],[20.22,46.127],[21.022,46.316],[21.627,46.994],[22.1,47.672],[22.711,47.882],[23.142,48.096],[23.761,47.986],[24.402,47.982],[24.866,47.738],[25.208,47.891],[25.946,47.987],[26.197,48.221],[26.619,48.221],[26.924,48.123],[27.234,47.827],[27.551,47.405],[28.128,46.81],[28.16,46.372],[28.054,45.945],[28.234,45.488]]]},{"region":2,"bounds":[21.056,53.906,26.588,56.373],"rings":[[[26.494,55.615],[26.588,55.167],[25.768,54.847],[25.536,54.282],[24.451,53.906],[23.484,53.912],[23.244,54.221],[22.731,54.328],[22.651,54.583],[22.758,54.857],[22.316,55.015],[21.268,55.19],[21.056,56.031],[22.201,56.338],[23.878,56.274],[24.861,56.373],[25.001,56.165],[25.533,56.1],[26.494,55.615]]]},{"region":2,"bounds":[21.056,55.615,28.177,57.97],"rings":[[[27.288,57.475],[27.77,57.244],[27.855,56.759],[28.177,56.169],[27.102,55.783],[26.494,55.615],[25.533,56.1],[25.001,56.165],[24.861,56.373],[23.878,56.274],[22.201,56.338],[21.056,56.031],[21.09,56.784],[21.582,57.412],[22.524,57.753],[23.318,57.006],[24.121,57.026],[24.313,57.793],[25.165,57.97],[25.603,57.848],[26.464,57.476],[27.288,57.475]]]},{"region":2,"bounds":[23.34,57.475,28.132,59.611],"rings":[[[27.981,59.475],[27.981,59.475],[28.132,59.301],[27.42,58.725],[27.717,57.792],[27.288,57.475],[26.464,57.476],[25.603,57.848],[25.165,57.97],[24.313,57.793],[24.429,58.383],[24.061,58.257],[23.427,58.613],[23.34,59.187],[24.604,59.466],[25.864,59.611],[26.949,59.446],[27.981,59.475],[27.981,59.475]]]},{"region":2,"bounds":[5.989,47.302,15.017,54.983],"rings":[[[14.12,53.757],[14.353,53.248],[14.075,52.981],[14.438,52.625],[14.685,52.09],[14.607,51.745],[15.017,51.107],[14.571,51.002],[14.307,51.117],[14.056,50.927],[13.338,50.733],[12.967,50.484],[12.24,50.266],[12.415,49.969],[12.521,49.547],[13.031,49.307],[13.596,48.877],[13.243,48.416],[12.884,48.289],[13.026,47.638],[12.933,47.468],[12.621,47.672],[12.141,47.703],[11.426,47.524],[10.545,47.566],[10.402,47.302],[9.896,47.58],[9.594,47.525],[8.523,47.831],[8.317,47.614],[7.467,47.621],[7.594,48.333],[8.099,49.018],[6.658,49.202],[6.186,49.464],[6.243,49.902],[6.043,50.128],[6.157,50.804],[5.989,51.852],[6.589,51.852],[6.843,52.228],[7.092,53.144],[6.905,53.482],[7.1,53.694],[7.936,53.748],[8.122,53.528],[8.801,54.021],[8.572,54.396],[8.526,54.963],[9.282,54.831],[9.922,54.983],[9.94,54.597],[10.95,54.364],[10.939,54.009],[11.956,54.196],[12.518,54.47],[13.647,54.076],[14.12,53.757]]]},{"region":3,"bounds":[22.381,41.234,28.558,44.235],"rings":[[[22.657,44.235],[22.945,43.824],[23.332,43.897],[24.101,43.741],[25.569,43.688],[26.065,43.943],[27.242,44.176],[27.97,43.812],[28.558,43.707],[28.039,43.293],[27.674,42.578],[27.997,42.007],[27.136,42.141],[26.117,41.827],[26.106,41.329],[25.197,41.234],[24.493,41.584],[23.692,41.309],[22.952,41.338],[22.881,41.999],[22.381,42.32],[22.545,42.461],[22.437,42.58],[22.605,42.899],[22.986,43.211],[22.5,43.643],[22.41,44.008],[22.657,44.235]]]},{"region":2,"bounds":[23.515,34.92,26.29,35.705],"rings":[[[26.29,35.3],[26.165,35.005],[24.725,34.92],[24.735,35.085],[23.515,35.28],[23.7,35.705],[24.247,35.368],[25.025,35.425],[25.769,35.354],[25.745,35.18],[26.29,35.3]]]},{"region":2,"bounds":[20.15,36.41,26.604,41.827],"rings":[[[22.952,41.338],[23.692,41.309],[24.493,41.584],[25.197,41.234],[26.106,41.329],[26.117,41.827],[26.604,41.562],[26.295,40.936],[26.057,40.824],[25.448,40.853],[24.926,40.947],[23.715,40.687],[24.408,40.125],[23.9,39.962],[23.343,39.961],[22.814,40.476],[22.626,40.257],[22.85,39.659],[23.35,39.19],[22.973,38.971],[23.53,38.51],[24.025,38.22],[24.04,37.655],[23.115,37.92],[23.41,37.41],[22.775,37.305],[23.154,36.423],[22.49,36.41],[21.67,36.845],[21.295,37.645],[21.12,38.31],[20.73,38.77],[20.218,39.34],[20.15,39.625],[20.615,40.11],[20.675,40.435],[21,40.58],[21.02,40.843],[21.674,40.931],[22.055,41.15],[22.597,41.13],[22.762,41.305],[22.952,41.338]]]},{"region":5,"bounds":[26.171,35.822,44.794,42.04],"rings":[[[44.773,37.17],[44.293,37.002],[43.942,37.256],[42.779,37.385],[42.35,37.23],[41.212,37.074],[40.673,37.091],[39.523,36.716],[38.7,36.713],[38.168,36.901],[37.067,36.623],[36.739,36.818],[36.685,36.26],[36.418,36.041],[36.15,35.822],[35.782,36.275],[36.161,36.651],[35.551,36.565],[34.715,36.796],[34.027,36.22],[32.509,36.108],[31.7,36.644],[30.622,36.678],[30.391,36.263],[29.7,36.144],[28.733,36.677],[27.641,36.659],[27.049,37.653],[26.318,38.208],[26.805,38.986],[26.171,39.464],[27.28,40.42],[28.82,40.46],[29.24,41.22],[31.146,41.088],[32.348,41.736],[33.513,42.019],[35.168,42.04],[36.913,41.335],[38.348,40.949],[39.513,41.103],[40.373,41.014],[41.554,41.536],[42.62,41.583],[43.583,41.092],[43.753,40.74],[43.656,40.254],[44.4,40.005],[44.794,39.713],[44.109,39.428],[44.421,38.281],[44.226,37.972],[44.773,37.17],[44.773,37.17]]]},{"region":5,"bounds":[26.043,40.152,28.988,42.141],"rings":[[[26.117,41.827],[27.136,42.141],[27.997,42.007],[28.116,41.623],[28.988,41.3],[28.806,41.055],[27.619,41],[27.192,40.691],[26.358,40.152],[26.043,40.618],[26.057,40.824],[26.295,40.936],[26.604,41.562],[26.117,41.827]]]},{"region":2,"bounds":[19.304,39.625,21.02,42.688],"rings":[[[21.02,40.843],[21,40.58],[20.675,40.435],[20.615,40.11],[20.15,39.625],[19.98,39.695],[19.96,39.915],[19.406,40.251],[19.319,40.727],[19.404,41.41],[19.54,41.72],[19.372,41.878],[19.372,41.878],[19.304,42.196],[19.738,42.688],[19.802,42.5],[20.071,42.589],[20.284,42.32],[20.523,42.218],[20.59,41.855],[20.59,41.855],[20.463,41.515],[20.605,41.086],[21.02,40.843]]]},{"region":2,"bounds":[13.657,42.48,19.39,46.504],"rings":[[[16.565,46.504],[16.883,46.381],[17.63,45.952],[18.456,45.759],[18.83,45.909],[19.073,45.522],[19.39,45.237],[19.005,44.86],[18.553,45.082],[17.862,45.068],[17.002,45.234],[16.535,45.212],[16.318,45.004],[15.959,45.234],[15.75,44.819],[16.24,44.351],[16.456,44.041],[16.916,43.668],[17.297,43.446],[17.675,43.029],[18.56,42.65],[18.45,42.48],[18.45,42.48],[17.51,42.85],[16.93,43.21],[16.015,43.507],[15.174,44.243],[15.376,44.318],[14.92,44.738],[14.902,45.076],[14.259,45.234],[13.952,44.802],[13.657,45.137],[13.679,45.484],[13.715,45.5],[14.412,45.466],[14.595,45.635],[14.935,45.472],[15.328,45.452],[15.324,45.732],[15.672,45.834],[15.769,46.238],[16.565,46.504]]]},{"region":2,"bounds":[6.023,45.777,10.443,47.831],"rings":[[[9.594,47.525],[9.633,47.348],[9.48,47.103],[9.932,46.921],[10.443,46.894],[10.363,46.484],[9.923,46.315],[9.183,46.44],[8.966,46.037],[8.49,46.005],[8.317,46.164],[7.756,45.824],[7.274,45.777],[6.844,45.991],[6.5,46.43],[6.023,46.273],[6.037,46.726],[6.769,47.288],[6.737,47.542],[7.192,47.45],[7.467,47.621],[8.317,47.614],[8.523,47.831],[9.594,47.525]]]},{"region":2,"bounds":[5.674,49.443,6.243,50.128],"rings":[[[6.043,50.128],[6.243,49.902],[6.186,49.464],[5.898,49.443],[5.674,49.529],[5.782,50.09],[6.043,50.128]]]},{"region":2,"bounds":[2.514,49.529,6.157,51.475],"rings":[[[6.157,50.804],[6.043,50.128],[5.782,50.09],[5.674,49.529],[4.799,49.985],[4.286,49.907],[3.588,50.379],[3.123,50.78],[2.658,50.797],[2.514,51.149],[3.315,51.346],[3.315,51.346],[3.315,51.346],[4.047,51.267],[4.974,51.475],[5.607,51.037],[6.157,50.804]]]},{"region":2,"bounds":[3.315,50.804,7.092,53.51],"rings":[[[6.905,53.482],[7.092,53.144],[6.843,52.228],[6.589,51.852],[5.989,51.852],[6.157,50.804],[5.607,51.037],[4.974,51.475],[4.047,51.267],[3.315,51.346],[3.315,51.346],[3.83,51.621],[4.706,53.092],[6.074,53.51],[6.905,53.482]]]},{"region":2,"bounds":[-9.527,36.838,-6.389,42.28],"rings":[[[-9.035,41.881],[-8.672,42.135],[-8.264,42.28],[-8.013,41.791],[-7.423,41.792],[-7.251,41.918],[-6.669,41.883],[-6.389,41.382],[-6.851,41.111],[-6.864,40.331],[-7.026,40.185],[-7.067,39.712],[-7.499,39.63],[-7.098,39.03],[-7.374,38.373],[-7.029,38.076],[-7.167,37.804],[-7.537,37.429],[-7.454,37.098],[-7.856,36.838],[-8.383,36.979],[-8.899,36.869],[-8.746,37.651],[-8.84,38.266],[-9.287,38.358],[-9.527,38.737],[-9.447,39.392],[-9.048,39.755],[-8.977,40.159],[-8.769,40.761],[-8.791,41.184],[-8.991,41.543],[-9.035,41.881]]]},{"region":2,"bounds":[-9.393,35.947,3.039,43.748],"rings":[[[-7.454,37.098],[-7.537,37.429],[-7.167,37.804],[-7.029,38.076],[-7.374,38.373],[-7.098,39.03],[-7.499,39.63],[-7.067,39.712],[-7.026,40.185],[-6.864,40.331],[-6.851,41.111],[-6.389,41.382],[-6.669,41.883],[-7.251,41.918],[-7.423,41.792],[-8.013,41.791],[-8.264,42.28],[-8.672,42.135],[-9.035,41.881],[-8.984,42.593],[-9.393,43.027],[-7.978,43.748],[-6.754,43.568],[-5.412,43.574],[-4.348,43.403],[-3.518,43.456],[-1.901,43.423],[-1.503,43.034],[0.338,42.58],[0.702,42.796],[1.827,42.343],[2.986,42.473],[3.039,41.892],[2.092,41.226],[0.811,41.015],[0.721,40.678],[0.107,40.124],[-0.279,39.31],[0.111,38.739],[-0.467,38.292],[-0.683,37.642],[-1.438,37.443],[-2.146,36.674],[-3.416,36.659],[-4.369,36.678],[-4.995,36.325],[-5.377,35.947],[-5.866,36.03],[-6.237,36.368],[-6.52,36.943],[-7.454,37.098]]]},{"region":2,"bounds":[-9.977,51.669,-6.033,55.132],"rings":[[[-6.198,53.868],[-6.033,53.153],[-6.789,52.26],[-8.562,51.669],[-9.977,51.82],[-9.166,52.865],[-9.689,53.881],[-8.328,54.665],[-7.572,55.132],[-7.366,54.596],[-7.572,54.06],[-6.954,54.074],[-6.198,53.868]]]},{"region":9,"bounds":[164.03,-22.4,167.12,-20.106],"rings":[[[165.78,-21.08],[166.6,-21.7],[167.12,-22.16],[166.74,-22.4],[166.19,-22.13],[165.474,-21.68],[164.83,-21.15],[164.168,-20.445],[164.03,-20.106],[164.46,-20.12],[165.02,-20.46],[165.46,-20.8],[165.78,-21.08]]]},{"region":9,"bounds":[161.32,-10.826,162.399,-10.205],"rings":[[[162.119,-10.483],[162.399,-10.826],[161.7,-10.82],[161.32,-10.205],[161.917,-10.447],[162.119,-10.483]]]},{"region":9,"bounds":[160.58,-9.784,161.68,-8.32],"rings":[[[161.68,-9.6],[161.529,-9.784],[160.788,-8.918],[160.58,-8.32],[160.92,-8.32],[161.28,-9.12],[161.68,-9.6]]]},{"region":9,"bounds":[159.64,-9.895,160.852,-9.243],"rings":[[[160.852,-9.873],[160.463,-9.895],[159.849,-9.794],[159.64,-9.64],[159.703,-9.243],[160.363,-9.4],[160.689,-9.61],[160.852,-9.873]]]},{"region":9,"bounds":[158.211,-8.538,159.917,-7.32],"rings":[[[159.64,-8.02],[159.875,-8.337],[159.917,-8.538],[159.134,-8.114],[158.586,-7.755],[158.211,-7.422],[158.36,-7.32],[158.82,-7.56],[159.64,-8.02]]]},{"region":9,"bounds":[156.491,-7.405,157.538,-6.599],"rings":[[[157.14,-7.022],[157.538,-7.348],[157.339,-7.405],[156.902,-7.177],[156.491,-6.766],[156.543,-6.599],[157.14,-7.022]]]},{"region":9,"bounds":[172.636,-41.688,178.517,-34.451],"rings":[[[176.886,-40.066],[176.508,-40.605],[176.012,-41.29],[175.24,-41.688],[175.068,-41.426],[174.651,-41.282],[175.228,-40.459],[174.9,-39.909],[173.824,-39.509],[173.852,-39.147],[174.575,-38.798],[174.743,-38.028],[174.697,-37.381],[174.292,-36.711],[174.319,-36.535],[173.841,-36.122],[173.054,-35.237],[172.636,-34.529],[173.007,-34.451],[173.551,-35.006],[174.329,-35.265],[174.612,-36.156],[175.337,-37.209],[175.358,-36.526],[175.809,-36.799],[175.958,-37.555],[176.763,-37.881],[177.439,-37.961],[178.01,-37.58],[178.517,-37.695],[178.275,-38.583],[177.97,-39.166],[177.207,-39.146],[176.94,-39.45],[177.033,-39.88],[176.886,-40.066]]]},{"region":9,"bounds":[166.509,-46.641,174.249,-40.494],"rings":[[[169.668,-43.555],[170.525,-43.032],[171.125,-42.513],[171.57,-41.767],[171.949,-41.514],[172.097,-40.956],[172.799,-40.494],[173.02,-40.919],[173.247,-41.332],[173.958,-40.927],[174.248,-41.349],[174.249,-41.77],[173.876,-42.233],[173.223,-42.97],[172.711,-43.372],[173.08,-43.853],[172.309,-43.866],[171.453,-44.243],[171.185,-44.897],[170.617,-45.909],[169.831,-46.356],[169.332,-46.641],[168.411,-46.62],[167.764,-46.29],[166.677,-46.22],[166.509,-45.853],[167.046,-45.111],[168.304,-44.124],[168.949,-43.936],[169.668,-43.555]]]},{"region":9,"bounds":[144.718,-43.635,148.36,-40.704],"rings":[[[147.689,-40.808],[148.289,-40.875],[148.36,-42.062],[148.017,-42.407],[147.914,-43.212],[147.565,-42.938],[146.87,-43.635],[146.663,-43.581],[146.048,-43.55],[145.432,-42.694],[145.295,-42.034],[144.718,-41.163],[144.744,-40.704],[145.398,-40.793],[146.364,-41.138],[146.909,-41.001],[147.689,-40.808]]]},{"region":9,"bounds":[113.339,-39.036,153.569,-10.668],"rings":[[[126.149,-32.216],[125.089,-32.729],[124.222,-32.959],[124.029,-33.484],[123.66,-33.89],[122.811,-33.914],[122.183,-34.003],[121.299,-33.821],[120.58,-33.93],[119.894,-33.976],[119.299,-34.509],[119.007,-34.464],[118.506,-34.747],[118.025,-35.065],[117.296,-35.025],[116.625,-35.025],[115.564,-34.386],[115.027,-34.197],[115.049,-33.623],[115.545,-33.487],[115.715,-33.26],[115.679,-32.9],[115.802,-32.205],[115.69,-31.612],[115.161,-30.602],[114.997,-30.031],[115.04,-29.461],[114.642,-28.81],[114.616,-28.516],[114.174,-28.118],[114.049,-27.335],[113.477,-26.543],[113.339,-26.117],[113.778,-26.549],[113.441,-25.621],[113.937,-25.911],[114.233,-26.298],[114.216,-25.786],[113.721,-24.999],[113.625,-24.684],[113.394,-24.385],[113.502,-23.806],[113.707,-23.56],[113.843,-23.06],[113.737,-22.475],[114.15,-21.756],[114.225,-22.517],[114.648,-21.83],[115.46,-21.495],[115.947,-21.069],[116.712,-20.702],[117.166,-20.624],[117.442,-20.747],[118.23,-20.374],[118.836,-20.263],[118.988,-20.044],[119.252,-19.953],[119.805,-19.977],[120.856,-19.684],[121.4,-19.24],[121.655,-18.705],[122.242,-18.198],[122.287,-17.799],[122.313,-17.255],[123.013,-16.405],[123.434,-17.269],[123.859,-17.069],[123.503,-16.597],[123.817,-16.111],[124.258,-16.328],[124.38,-15.567],[124.926,-15.075],[125.167,-14.68],[125.67,-14.51],[125.686,-14.231],[126.125,-14.347],[126.143,-14.096],[126.583,-13.953],[127.066,-13.818],[127.805,-14.277],[128.36,-14.869],[128.986,-14.876],[129.621,-14.97],[129.41,-14.421],[129.889,-13.619],[130.339,-13.357],[130.184,-13.108],[130.618,-12.536],[131.223,-12.184],[131.735,-12.302],[132.575,-12.114],[132.557,-11.603],[131.825,-11.274],[132.357,-11.129],[133.02,-11.376],[133.551,-11.787],[134.393,-12.042],[134.679,-11.941],[135.298,-12.249],[135.883,-11.962],[136.258,-12.049],[136.492,-11.857],[136.952,-12.352],[136.685,-12.887],[136.305,-13.291],[135.962,-13.325],[136.078,-13.724],[135.784,-14.224],[135.429,-14.715],[135.5,-14.998],[136.295,-15.55],[137.065,-15.871],[137.58,-16.215],[138.303,-16.808],[138.585,-16.807],[139.109,-17.063],[139.261,-17.372],[140.215,-17.711],[140.875,-17.369],[141.071,-16.832],[141.274,-16.389],[141.398,-15.841],[141.702,-15.045],[141.563,-14.561],[141.636,-14.27],[141.52,-13.698],[141.651,-12.945],[141.843,-12.742],[141.687,-12.408],[141.929,-11.877],[142.118,-11.328],[142.144,-11.043],[142.515,-10.668],[142.797,-11.157],[142.867,-11.785],[143.116,-11.906],[143.159,-12.326],[143.522,-12.834],[143.597,-13.4],[143.562,-13.764],[143.922,-14.548],[144.564,-14.171],[144.895,-14.594],[145.375,-14.985],[145.272,-15.428],[145.485,-16.286],[145.637,-16.785],[145.889,-16.907],[146.16,-17.762],[146.064,-18.28],[146.387,-18.958],[147.471,-19.481],[148.178,-19.956],[148.848,-20.391],[148.717,-20.633],[149.289,-21.261],[149.678,-22.343],[150.077,-22.123],[150.483,-22.556],[150.727,-22.402],[150.9,-23.462],[151.609,-24.076],[152.074,-24.458],[152.855,-25.268],[153.136,-26.071],[153.162,-26.641],[153.093,-27.26],[153.569,-28.11],[153.512,-28.995],[153.339,-29.458],[153.069,-30.35],[153.09,-30.924],[152.892,-31.64],[152.45,-32.55],[151.709,-33.041],[151.344,-33.816],[151.011,-34.31],[150.714,-35.173],[150.328,-35.672],[150.075,-36.42],[149.946,-37.109],[149.997,-37.425],[149.424,-37.773],[148.305,-37.809],[147.382,-38.219],[146.922,-38.607],[146.318,-39.036],[145.49,-38.594],[144.877,-38.417],[145.032,-37.896],[144.486,-38.085],[143.61,-38.809],[142.745,-38.538],[142.178,-38.38],[141.607,-38.309],[140.639,-38.019],[139.992,-37.403],[139.807,-36.644],[139.574,-36.138],[139.083,-35.733],[138.121,-35.612],[138.449,-35.127],[138.208,-34.385],[137.719,-35.077],[136.829,-35.261],[137.352,-34.707],[137.504,-34.13],[137.89,-33.64],[137.81,-32.9],[136.997,-33.753],[136.372,-34.095],[135.989,-34.89],[135.208,-34.479],[135.239,-33.948],[134.613,-33.223],[134.086,-32.848],[134.274,-32.617],[132.991,-32.011],[132.288,-31.983],[131.326,-31.496],[129.536,-31.59],[128.241,-31.948],[127.103,-32.282],[126.149,-32.216]]]},{"region":6,"bounds":[79.695,5.968,81.788,9.824],"rings":[[[81.788,7.523],[81.637,6.482],[81.218,6.197],[80.348,5.968],[79.872,6.763],[79.695,8.201],[80.148,9.824],[80.839,9.268],[81.304,8.564],[81.788,7.523]]]},{"region":7,"bounds":[108.626,18.198,111.01,20.101],"rings":[[[109.475,18.198],[108.655,18.508],[108.626,19.368],[109.119,19.821],[110.212,20.101],[110.787,20.078],[111.01,19.696],[110.571,19.256],[110.339,18.678],[109.475,18.198]]]},{"region":7,"bounds":[73.675,20.282,135.026,53.459],"rings":[[[80.26,42.35],[80.18,42.92],[80.866,43.18],[79.966,44.918],[81.947,45.317],[82.459,45.54],[83.18,47.33],[85.164,47.001],[85.72,47.453],[85.768,48.456],[86.599,48.549],[87.36,49.215],[87.751,49.297],[88.014,48.599],[88.854,48.069],[90.281,47.694],[90.971,46.888],[90.586,45.72],[90.946,45.286],[92.134,45.115],[93.481,44.975],[94.689,44.352],[95.307,44.241],[95.762,43.319],[96.349,42.726],[97.452,42.749],[99.516,42.525],[100.846,42.664],[101.833,42.515],[103.312,41.907],[104.522,41.908],[104.965,41.597],[106.129,42.134],[107.745,42.482],[109.244,42.519],[110.412,42.871],[111.13,43.407],[111.83,43.743],[111.668,44.073],[111.348,44.457],[111.873,45.102],[112.436,45.012],[113.464,44.809],[114.46,45.34],[115.985,45.727],[116.718,46.388],[117.422,46.673],[118.874,46.805],[119.663,46.693],[119.773,47.048],[118.867,47.747],[118.064,48.067],[117.296,47.698],[116.309,47.853],[115.743,47.727],[115.485,48.135],[116.192,49.135],[116.679,49.889],[117.879,49.511],[119.288,50.143],[119.279,50.583],[120.182,51.644],[120.738,51.964],[120.726,52.516],[120.177,52.754],[121.003,53.251],[122.246,53.432],[123.571,53.459],[125.068,53.161],[125.946,52.793],[126.564,51.784],[126.939,51.354],[127.287,50.74],[127.657,49.76],[129.398,49.441],[130.582,48.73],[130.987,47.79],[132.507,47.789],[133.374,48.183],[135.026,48.478],[134.501,47.578],[134.112,47.212],[133.77,46.117],[133.097,45.144],[131.883,45.321],[131.025,44.968],[131.289,44.112],[131.145,42.93],[130.634,42.903],[130.64,42.395],[129.994,42.985],[129.597,42.425],[128.052,41.994],[128.208,41.467],[127.344,41.503],[126.869,41.817],[126.182,41.107],[125.08,40.57],[124.266,39.928],[122.868,39.638],[122.131,39.17],[121.055,38.897],[121.586,39.361],[121.377,39.75],[122.169,40.422],[121.64,40.946],[120.769,40.593],[119.64,39.898],[119.023,39.252],[118.043,39.204],[117.533,38.738],[118.06,38.061],[118.878,37.897],[118.912,37.448],[119.703,37.156],[120.823,37.87],[121.711,37.481],[122.358,37.454],[122.52,36.931],[121.104,36.651],[120.637,36.111],[119.665,35.61],[119.151,34.91],[120.228,34.36],[120.62,33.377],[121.229,32.46],[121.908,31.692],[121.892,30.949],[121.264,30.676],[121.504,30.143],[122.092,29.833],[121.938,29.018],[121.684,28.226],[121.126,28.136],[120.395,27.053],[119.585,25.741],[118.657,24.547],[117.282,23.625],[115.891,22.783],[114.764,22.668],[114.153,22.224],[113.807,22.548],[113.241,22.051],[111.844,21.55],[110.785,21.397],[110.444,20.341],[109.89,20.282],[109.628,21.008],[109.864,21.395],[108.523,21.715],[108.05,21.552],[107.043,21.812],[106.567,22.218],[106.725,22.794],[105.811,22.977],[105.329,23.352],[104.477,22.819],[103.505,22.704],[102.707,22.709],[102.17,22.465],[101.652,22.318],[101.803,21.174],[101.27,21.202],[101.18,21.437],[101.15,21.85],[100.417,21.559],[99.983,21.743],[99.241,22.118],[99.532,22.949],[98.899,23.143],[98.66,24.063],[97.605,23.897],[97.725,25.084],[98.672,25.919],[98.712,26.744],[98.683,27.509],[98.246,27.747],[97.912,28.336],[97.327,28.262],[96.249,28.411],[96.587,28.831],[96.118,29.453],[95.405,29.032],[94.566,29.277],[93.413,28.641],[92.503,27.897],[91.697,27.772],[91.259,28.041],[90.731,28.065],[90.016,28.296],[89.476,28.043],[88.814,27.299],[88.73,28.087],[88.12,27.877],[86.955,27.974],[85.823,28.204],[85.012,28.643],[84.235,28.84],[83.899,29.32],[83.337,29.464],[82.328,30.115],[81.526,30.423],[81.111,30.183],[79.721,30.883],[78.739,31.516],[78.458,32.618],[79.176,32.484],[79.209,32.994],[78.811,33.506],[78.912,34.322],[77.837,35.494],[76.193,35.898],[75.897,36.667],[75.158,37.133],[74.98,37.42],[74.83,37.99],[74.865,38.379],[74.258,38.607],[73.929,38.506],[73.675,39.431],[73.96,39.66],[73.822,39.894],[74.777,40.366],[75.468,40.562],[76.526,40.428],[76.904,41.066],[78.187,41.185],[78.544,41.582],[80.119,42.124],[80.26,42.35]]]},{"region":7,"bounds":[120.106,21.971,121.951,25.295],"rings":[[[121.778,24.394],[121.176,22.791],[120.747,21.971],[120.22,22.815],[120.106,23.556],[120.695,24.538],[121.495,25.295],[121.951,24.998],[121.778,24.394]]]},{"region":2,"bounds":[6.75,37.909,18.48,47.115],"rings":[[[10.443,46.894],[11.049,46.751],[11.165,46.942],[12.153,47.115],[12.376,46.768],[13.806,46.509],[13.698,46.017],[13.938,45.591],[13.142,45.737],[12.329,45.382],[12.384,44.885],[12.261,44.6],[12.589,44.091],[13.527,43.588],[14.03,42.761],[15.143,41.955],[15.926,41.961],[16.17,41.74],[15.889,41.541],[16.785,41.18],[17.519,40.877],[18.377,40.356],[18.48,40.169],[18.293,39.811],[17.738,40.278],[16.87,40.442],[16.449,39.795],[17.171,39.425],[17.053,38.903],[16.635,38.844],[16.101,37.986],[15.684,37.909],[15.688,38.215],[15.892,38.751],[16.109,38.965],[15.719,39.544],[15.414,40.048],[14.998,40.173],[14.703,40.605],[14.061,40.786],[13.628,41.188],[12.888,41.253],[12.107,41.705],[11.192,42.355],[10.512,42.931],[10.2,43.92],[9.702,44.036],[8.889,44.366],[8.429,44.231],[7.851,43.767],[7.435,43.694],[7.55,44.128],[7.008,44.255],[6.75,45.029],[7.097,45.333],[6.802,45.709],[6.844,45.991],[7.274,45.777],[7.756,45.824],[8.317,46.164],[8.49,46.005],[8.966,46.037],[9.183,46.44],[9.923,46.315],[10.363,46.484],[10.443,46.894]]]},{"region":2,"bounds":[12.431,36.62,15.52,38.231],"rings":[[[14.761,38.144],[15.52,38.231],[15.16,37.444],[15.31,37.134],[15.1,36.62],[14.335,36.997],[13.827,37.105],[12.431,37.613],[12.571,38.126],[13.741,38.035],[14.761,38.144]]]},{"region":2,"bounds":[8.16,38.907,9.81,41.21],"rings":[[[8.71,40.9],[9.21,41.21],[9.81,40.5],[9.67,39.177],[9.215,39.24],[8.807,38.907],[8.428,39.172],[8.388,40.378],[8.16,40.95],[8.71,40.9]]]},{"region":2,"bounds":[8.09,54.831,10.912,57.73],"rings":[[[9.922,54.983],[9.282,54.831],[8.526,54.963],[8.12,55.518],[8.09,56.54],[8.257,56.81],[8.543,57.11],[9.424,57.172],[9.776,57.448],[10.58,57.73],[10.546,57.216],[10.25,56.89],[10.37,56.61],[10.912,56.459],[10.668,56.081],[10.37,56.19],[9.65,55.47],[9.922,54.983]]]},{"region":2,"bounds":[10.904,54.8,12.69,56.111],"rings":[[[12.371,56.111],[12.69,55.61],[12.09,54.8],[11.044,55.365],[10.904,55.78],[12.371,56.111]]]},{"region":2,"bounds":[-7.572,53.868,-5.662,55.173],"rings":[[[-6.198,53.868],[-6.954,54.074],[-7.572,54.06],[-7.366,54.596],[-7.572,55.132],[-6.734,55.173],[-5.662,54.555],[-6.198,53.868]]]},{"region":2,"bounds":[-6.15,49.96,1.682,58.635],"rings":[[[-3.094,53.405],[-3.092,53.404],[-2.945,53.985],[-3.615,54.601],[-3.63,54.615],[-4.844,54.791],[-5.083,55.062],[-4.719,55.508],[-5.048,55.784],[-5.586,55.311],[-5.645,56.275],[-6.15,56.785],[-5.787,57.819],[-5.01,58.63],[-4.211,58.551],[-3.005,58.635],[-4.074,57.553],[-3.055,57.69],[-1.959,57.685],[-2.22,56.87],[-3.119,55.974],[-2.085,55.91],[-2.006,55.805],[-1.115,54.625],[-0.43,54.464],[0.185,53.325],[0.47,52.93],[1.682,52.74],[1.56,52.1],[1.051,51.807],[1.45,51.289],[0.55,50.766],[-0.788,50.775],[-2.49,50.5],[-2.956,50.697],[-3.617,50.228],[-4.543,50.342],[-5.245,49.96],[-5.777,50.16],[-4.31,51.21],[-3.415,51.426],[-3.423,51.427],[-4.984,51.593],[-5.267,51.991],[-4.222,52.301],[-4.77,52.84],[-4.58,53.495],[-3.094,53.405]]]},{"region":2,"bounds":[-24.326,63.496,-13.61,66.527],"rings":[[[-14.509,66.456],[-14.74,65.809],[-13.61,65.127],[-14.91,64.364],[-17.794,63.679],[-18.656,63.496],[-19.973,63.644],[-22.763,63.96],[-21.778,64.402],[-23.955,64.891],[-22.184,65.085],[-22.227,65.379],[-24.326,65.611],[-23.651,66.263],[-22.135,66.41],[-20.576,65.732],[-19.057,66.277],[-17.799,65.994],[-16.168,66.527],[-14.509,66.456]]]},{"region":5,"bounds":[44.972,38.27,50.393,41.861],"rings":[[[46.405,41.861],[46.686,41.827],[47.373,41.22],[47.816,41.151],[47.987,41.406],[48.584,41.809],[49.11,41.282],[49.619,40.573],[50.085,40.526],[50.393,40.257],[49.569,40.176],[49.395,39.399],[49.223,39.049],[48.857,38.815],[48.883,38.32],[48.634,38.27],[48.011,38.794],[48.356,39.289],[48.06,39.582],[47.685,39.508],[46.506,38.771],[46.483,39.464],[46.035,39.628],[45.61,39.9],[45.892,40.218],[45.359,40.562],[45.56,40.812],[45.179,40.985],[44.972,41.248],[45.217,41.411],[45.963,41.124],[46.502,41.064],[46.638,41.182],[46.145,41.723],[46.405,41.861]]]},{"region":5,"bounds":[44.794,38.741,46.144,39.74],"rings":[[[46.144,38.741],[45.458,38.874],[44.953,39.336],[44.794,39.713],[45.002,39.74],[45.298,39.472],[45.74,39.474],[45.735,39.32],[46.144,38.741]]]},{"region":5,"bounds":[39.955,41.064,46.638,43.553],"rings":[[[39.955,43.435],[40.077,43.553],[40.922,43.382],[42.394,43.22],[43.756,42.741],[43.931,42.555],[44.538,42.712],[45.47,42.503],[45.776,42.092],[46.405,41.861],[46.145,41.723],[46.638,41.182],[46.502,41.064],[45.963,41.124],[45.217,41.411],[44.972,41.248],[43.583,41.092],[42.62,41.583],[41.554,41.536],[41.703,41.963],[41.453,42.645],[40.875,43.014],[40.321,43.129],[39.955,43.435]]]},{"region":8,"bounds":[120.323,12.206,121.527,13.466],"rings":[[[120.834,12.704],[120.323,13.466],[121.18,13.43],[121.527,13.07],[121.262,12.206],[120.834,12.704]]]},{"region":8,"bounds":[122.38,9.022,124.078,11.233],"rings":[[[122.586,9.981],[122.837,10.261],[122.947,10.882],[123.499,10.941],[123.338,10.267],[124.078,11.233],[123.982,10.279],[123.623,9.95],[123.31,9.318],[122.996,9.022],[122.38,9.713],[122.586,9.981]]]},{"region":8,"bounds":[121.92,5.581,126.537,9.76],"rings":[[[126.377,8.415],[126.479,7.75],[126.537,7.189],[126.197,6.274],[125.831,7.294],[125.364,6.786],[125.683,6.05],[125.397,5.581],[124.22,6.161],[123.939,6.885],[124.244,7.361],[123.61,7.834],[123.296,7.419],[122.826,7.457],[122.085,6.899],[121.92,7.192],[122.312,8.035],[122.942,8.316],[123.488,8.693],[123.841,8.24],[124.601,8.514],[124.765,8.96],[125.471,8.987],[125.412,9.76],[126.223,9.286],[126.307,8.782],[126.377,8.415]]]},{"region":8,"bounds":[117.174,8.367,119.69,11.37],"rings":[[[118.505,9.316],[117.174,8.367],[117.664,9.067],[118.387,9.684],[118.987,10.376],[119.511,11.37],[119.69,10.554],[119.029,10.004],[118.505,9.316]]]},{"region":8,"bounds":[119.884,12.537,124.181,18.505],"rings":[[[122.337,18.225],[122.174,17.81],[122.516,17.094],[122.252,16.262],[121.663,15.931],[121.505,15.125],[121.729,14.328],[122.259,14.218],[122.701,14.337],[123.95,13.782],[123.855,13.238],[124.181,12.998],[124.077,12.537],[123.298,13.028],[122.929,13.553],[122.671,13.186],[122.035,13.784],[121.126,13.637],[120.629,13.858],[120.679,14.271],[120.992,14.525],[120.693,14.757],[120.564,14.396],[120.07,14.971],[119.921,15.406],[119.884,16.364],[120.286,16.035],[120.39,17.599],[120.716,18.505],[121.321,18.504],[121.938,18.219],[122.246,18.479],[122.337,18.225]]]},{"region":8,"bounds":[121.884,10.441,123.12,11.892],"rings":[[[122.038,11.416],[121.884,11.892],[122.484,11.582],[123.12,11.584],[123.101,11.166],[122.638,10.741],[122.003,10.441],[121.967,10.906],[122.038,11.416]]]},{"region":8,"bounds":[124.267,10.135,125.783,12.558],"rings":[[[125.503,12.163],[125.783,11.046],[125.012,11.311],[125.033,10.976],[125.277,10.359],[124.802,10.135],[124.76,10.838],[124.459,10.89],[124.303,11.495],[124.891,11.416],[124.878,11.794],[124.267,12.558],[125.227,12.536],[125.503,12.163]]]},{"region":8,"bounds":[100.086,1.226,104.248,6.643],"rings":[[[100.086,6.464],[100.26,6.643],[101.076,6.205],[101.154,5.691],[101.814,5.811],[102.141,6.222],[102.371,6.128],[102.962,5.524],[103.381,4.855],[103.439,4.182],[103.332,3.727],[103.429,3.383],[103.502,2.791],[103.855,2.515],[104.248,1.631],[104.229,1.293],[103.52,1.226],[102.574,1.967],[101.391,2.761],[101.274,3.27],[100.695,3.939],[100.557,4.767],[100.197,5.312],[100.306,6.041],[100.086,6.464]]]},{"region":8,"bounds":[109.663,0.773,119.182,6.928],"rings":[[[117.882,4.138],[117.015,4.306],[115.866,4.307],[115.519,3.169],[115.134,2.821],[114.621,1.431],[113.806,1.218],[112.86,1.498],[112.38,1.41],[111.798,0.904],[111.159,0.976],[110.514,0.773],[109.83,1.338],[109.663,2.006],[110.396,1.664],[111.169,1.851],[111.37,2.697],[111.797,2.886],[112.996,3.102],[113.713,3.894],[114.204,4.526],[114.66,4.008],[114.87,4.348],[115.347,4.317],[115.406,4.955],[115.451,5.448],[116.221,6.143],[116.725,6.925],[117.13,6.928],[117.643,6.422],[117.689,5.987],[118.348,5.709],[119.182,5.408],[119.111,5.016],[118.44,4.967],[118.618,4.478],[117.882,4.138]]]},{"region":8,"bounds":[114.204,4.008,115.451,5.448],"rings":[[[115.451,5.448],[115.406,4.955],[115.347,4.317],[114.87,4.348],[114.66,4.008],[114.204,4.526],[114.6,4.9],[115.451,5.448]]]},{"region":2,"bounds":[13.698,45.452,16.565,46.852],"rings":[[[13.806,46.509],[14.632,46.432],[15.137,46.659],[16.012,46.684],[16.202,46.852],[16.371,46.841],[16.565,46.504],[15.769,46.238],[15.672,45.834],[15.324,45.732],[15.328,45.452],[14.935,45.472],[14.595,45.635],[14.412,45.466],[13.715,45.5],[13.938,45.591],[13.698,46.017],[13.806,46.509]]]},{"region":2,"bounds":[20.646,59.846,31.516,70.164],"rings":[[[28.592,69.065],[28.446,68.365],[29.977,67.698],[29.055,66.944],[30.218,65.806],[29.544,64.949],[30.445,64.204],[30.036,63.553],[31.516,62.868],[31.14,62.358],[30.211,61.78],[28.07,60.504],[28.07,60.504],[28.07,60.504],[26.255,60.424],[24.497,60.057],[22.87,59.846],[22.291,60.392],[21.322,60.72],[21.545,61.705],[21.059,62.607],[21.536,63.19],[22.443,63.818],[24.731,64.902],[25.398,65.111],[25.294,65.534],[23.903,66.007],[23.566,66.396],[23.539,67.936],[21.979,68.617],[20.646,69.106],[21.245,69.37],[22.356,68.842],[23.662,68.891],[24.736,68.65],[25.689,69.092],[26.18,69.825],[27.732,70.164],[29.016,69.766],[28.592,69.065]]]},{"region":3,"bounds":[16.88,47.758,22.558,49.572],"rings":[[[22.558,49.086],[22.281,48.825],[22.086,48.422],[21.872,48.32],[20.801,48.624],[20.474,48.563],[20.239,48.328],[19.769,48.203],[19.661,48.267],[19.174,48.111],[18.777,48.082],[18.697,47.881],[17.857,47.758],[17.488,47.867],[16.98,48.123],[16.88,48.47],[16.96,48.597],[17.102,48.817],[17.545,48.8],[17.886,48.903],[17.914,48.996],[18.105,49.044],[18.17,49.272],[18.4,49.315],[18.555,49.495],[18.853,49.496],[18.91,49.436],[19.321,49.572],[19.825,49.217],[20.416,49.431],[20.888,49.329],[21.608,49.47],[22.558,49.086]]]},{"region":3,"bounds":[12.24,48.555,18.853,51.117],"rings":[[[15.017,51.107],[15.491,50.785],[16.239,50.698],[16.176,50.423],[16.719,50.216],[16.869,50.474],[17.555,50.362],[17.649,50.049],[18.393,49.989],[18.853,49.496],[18.555,49.495],[18.4,49.315],[18.17,49.272],[18.105,49.044],[17.914,48.996],[17.886,48.903],[17.545,48.8],[17.102,48.817],[16.96,48.597],[16.499,48.786],[16.03,48.734],[15.253,49.039],[14.901,48.964],[14.339,48.555],[13.596,48.877],[13.031,49.307],[12.521,49.547],[12.415,49.969],[12.24,50.266],[12.967,50.484],[13.338,50.733],[14.056,50.927],[14.307,51.117],[14.571,51.002],[15.017,51.107]]]},{"region":4,"bounds":[36.323,12.455,43.081,17.998],"rings":[[[36.43,14.422],[36.323,14.822],[36.754,16.292],[36.853,16.957],[37.167,17.263],[37.904,17.428],[38.41,17.998],[38.991,16.841],[39.266,15.923],[39.814,15.436],[41.179,14.491],[41.735,13.921],[42.277,13.344],[42.59,13],[43.081,12.7],[42.78,12.455],[42.352,12.542],[42.01,12.866],[41.599,13.452],[41.155,13.773],[40.897,14.119],[40.026,14.52],[39.341,14.532],[39.099,14.741],[38.513,14.505],[37.906,14.959],[37.594,14.213],[36.43,14.422]]]},{"region":7,"bounds":[129.408,31.03,141.914,41.379],"rings":[[[141.885,39.181],[140.959,38.174],[140.976,37.142],[140.6,36.344],[140.774,35.843],[140.253,35.138],[138.976,34.668],[137.218,34.606],[135.793,33.465],[135.121,33.849],[135.079,34.597],[133.34,34.376],[132.157,33.905],[130.986,33.886],[132,33.15],[131.333,31.45],[130.686,31.03],[130.202,31.418],[130.448,32.319],[129.815,32.61],[129.408,33.296],[130.354,33.604],[130.878,34.233],[131.884,34.75],[132.618,35.433],[134.608,35.732],[135.678,35.527],[136.724,37.305],[137.391,36.827],[138.858,37.827],[139.426,38.216],[140.055,39.439],[139.883,40.563],[140.306,41.195],[141.369,41.379],[141.914,39.992],[141.885,39.181]]]},{"region":7,"bounds":[139.818,41.57,145.543,45.551],"rings":[[[144.613,43.961],[145.321,44.385],[145.543,43.262],[144.06,42.988],[143.184,41.995],[141.611,42.679],[141.067,41.585],[139.955,41.57],[139.818,42.564],[140.312,43.333],[141.381,43.389],[141.672,44.772],[141.968,45.551],[143.143,44.51],[143.91,44.174],[144.613,43.961]]]},{"region":7,"bounds":[132.363,32.705,134.766,34.365],"rings":[[[132.371,33.464],[132.924,34.06],[133.493,33.945],[133.904,34.365],[134.638,34.149],[134.766,33.806],[134.203,33.201],[133.793,33.522],[133.28,33.29],[133.015,32.705],[132.363,32.989],[132.371,33.464]]]},{"region":1,"bounds":[-62.685,-27.548,-54.293,-19.343],"rings":[[[-58.166,-20.177],[-57.871,-20.733],[-57.937,-22.09],[-56.882,-22.282],[-56.473,-22.086],[-55.798,-22.357],[-55.611,-22.656],[-55.518,-23.572],[-55.401,-23.957],[-55.028,-24.001],[-54.653,-23.84],[-54.293,-24.021],[-54.293,-24.571],[-54.429,-25.162],[-54.625,-25.739],[-54.789,-26.622],[-55.696,-27.388],[-56.487,-27.548],[-57.61,-27.396],[-58.618,-27.124],[-57.634,-25.604],[-57.777,-25.162],[-58.807,-24.771],[-60.029,-24.033],[-60.847,-23.881],[-62.685,-22.249],[-62.291,-21.052],[-62.266,-20.514],[-61.786,-19.634],[-60.044,-19.343],[-59.115,-19.357],[-58.183,-19.868],[-58.166,-20.177]]]},{"region":5,"bounds":[42.605,12.586,53.109,19],"rings":[[[52,19],[52.782,17.35],[53.109,16.651],[52.385,16.382],[52.192,15.938],[52.168,15.597],[51.173,15.175],[49.575,14.709],[48.679,14.003],[48.239,13.948],[47.939,14.007],[47.354,13.592],[46.717,13.4],[45.878,13.348],[45.625,13.291],[45.406,13.027],[45.144,12.954],[44.99,12.7],[44.495,12.722],[44.175,12.586],[43.483,12.637],[43.223,13.221],[43.251,13.768],[43.088,14.063],[42.892,14.802],[42.605,15.213],[42.805,15.262],[42.702,15.719],[42.824,15.912],[42.779,16.348],[43.218,16.667],[43.116,17.088],[43.381,17.58],[43.792,17.32],[44.063,17.41],[45.217,17.433],[45.4,17.333],[46.367,17.233],[46.75,17.283],[47,16.95],[47.467,17.117],[48.183,18.167],[49.117,18.617],[52,19]]]},{"region":5,"bounds":[34.632,16.348,55.667,32.161],"rings":[[[34.956,29.357],[36.069,29.197],[36.501,29.505],[36.741,29.865],[37.504,30.004],[37.668,30.339],[37.999,30.509],[37.002,31.508],[39.005,32.01],[39.195,32.161],[40.4,31.89],[41.89,31.19],[44.709,29.179],[46.569,29.099],[47.46,29.003],[47.709,28.526],[48.416,28.552],[48.808,27.69],[49.3,27.461],[49.471,27.11],[50.152,26.69],[50.213,26.277],[50.113,25.944],[50.24,25.608],[50.527,25.328],[50.661,25],[50.81,24.755],[51.112,24.556],[51.39,24.627],[51.58,24.245],[51.618,24.014],[52.001,23.001],[55.007,22.497],[55.208,22.708],[55.667,22],[55,20],[52,19],[49.117,18.617],[48.183,18.167],[47.467,17.117],[47,16.95],[46.75,17.283],[46.367,17.233],[45.4,17.333],[45.217,17.433],[44.063,17.41],[43.792,17.32],[43.381,17.58],[43.116,17.088],[43.218,16.667],[42.779,16.348],[42.65,16.775],[42.348,17.076],[42.271,17.475],[41.754,17.833],[41.221,18.672],[40.939,19.486],[40.248,20.175],[39.802,20.339],[39.139,21.292],[39.024,21.987],[39.066,22.58],[38.493,23.688],[38.024,24.079],[37.484,24.285],[37.155,24.858],[37.209,25.085],[36.932,25.603],[36.64,25.826],[36.249,26.57],[35.64,27.377],[35.13,28.063],[34.632,28.059],[34.788,28.607],[34.832,28.957],[34.956,29.357]]]},{"region":-1,"bounds":[-54.164,-81.025,-43.333,-77.831],"rings":[[[-48.661,-78.047],[-48.151,-78.047],[-46.663,-77.831],[-45.155,-78.047],[-43.921,-78.478],[-43.49,-79.086],[-43.372,-79.517],[-43.333,-80.026],[-44.881,-80.34],[-46.506,-80.594],[-48.386,-80.829],[-50.482,-81.025],[-52.852,-80.967],[-54.164,-80.634],[-53.988,-80.222],[-51.853,-79.948],[-50.991,-79.615],[-50.365,-79.183],[-49.914,-78.811],[-49.307,-78.459],[-48.661,-78.047],[-48.661,-78.047]]]},{"region":-1,"bounds":[-66.29,-81,-59.572,-79.629],"rings":[[[-66.29,-80.256],[-64.038,-80.295],[-61.883,-80.393],[-61.139,-79.981],[-60.61,-79.629],[-59.572,-80.04],[-59.866,-80.55],[-60.16,-81],[-62.255,-80.863],[-64.488,-80.922],[-65.742,-80.589],[-65.742,-80.55],[-66.29,-80.256]]]},{"region":-1,"bounds":[-75.013,-72.504,-68.334,-68.879],"rings":[[[-73.916,-71.269],[-73.916,-71.269],[-73.23,-71.152],[-72.075,-71.191],[-71.781,-70.681],[-71.722,-70.309],[-71.742,-69.506],[-71.174,-69.035],[-70.253,-68.879],[-69.724,-69.251],[-69.489,-69.623],[-69.059,-70.074],[-68.726,-70.505],[-68.451,-70.956],[-68.334,-71.406],[-68.51,-71.798],[-68.784,-72.171],[-69.959,-72.308],[-71.076,-72.504],[-72.388,-72.484],[-71.898,-72.092],[-73.074,-72.229],[-74.19,-72.367],[-74.954,-72.073],[-75.013,-71.661],[-73.916,-71.269]]]},{"region":-1,"bounds":[-102.331,-72.521,-96.2,-71.718],"rings":[[[-102.331,-71.894],[-102.331,-71.894],[-101.704,-71.718],[-100.431,-71.855],[-98.982,-71.933],[-97.885,-72.071],[-96.788,-71.953],[-96.2,-72.521],[-96.984,-72.443],[-98.198,-72.482],[-99.432,-72.443],[-100.783,-72.502],[-101.802,-72.306],[-102.331,-71.894]]]},{"region":-1,"bounds":[-122.622,-74.089,-118.724,-73.325],"rings":[[[-122.622,-73.658],[-122.622,-73.658],[-122.406,-73.325],[-121.212,-73.501],[-119.919,-73.658],[-118.724,-73.481],[-119.292,-73.834],[-120.232,-74.089],[-121.623,-74.01],[-122.622,-73.658]]]},{"region":-1,"bounds":[-127.283,-73.873,-124.032,-73.246],"rings":[[[-127.283,-73.462],[-127.283,-73.462],[-126.558,-73.246],[-125.56,-73.481],[-124.032,-73.873],[-124.619,-73.834],[-125.912,-73.736],[-127.283,-73.462]]]},{"region":-1,"bounds":[-163.713,-79.634,-159.208,-78.223],"rings":[[[-163.713,-78.596],[-163.713,-78.596],[-163.106,-78.223],[-161.245,-78.38],[-160.246,-78.694],[-159.482,-79.046],[-159.208,-79.497],[-161.128,-79.634],[-162.44,-79.281],[-163.027,-78.929],[-163.067,-78.87],[-163.713,-78.596]]]},{"region":-1,"bounds":[-180,-90,180,-63.271],"rings":[[[180,-84.713],[180,-90],[-180,-90],[-180,-84.713],[-179.942,-84.721],[-179.059,-84.139],[-177.257,-84.453],[-177.141,-84.418],[-176.085,-84.099],[-175.947,-84.11],[-175.83,-84.118],[-174.383,-84.534],[-173.117,-84.118],[-172.889,-84.061],[-169.951,-83.885],[-169,-84.118],[-168.53,-84.237],[-167.022,-84.57],[-164.182,-84.825],[-161.93,-85.139],[-158.071,-85.374],[-155.192,-85.1],[-150.942,-85.296],[-148.533,-85.609],[-145.889,-85.315],[-143.108,-85.041],[-142.892,-84.57],[-146.829,-84.531],[-150.061,-84.296],[-150.903,-83.904],[-153.586,-83.689],[-153.41,-83.238],[-153.038,-82.827],[-152.666,-82.454],[-152.862,-82.043],[-154.526,-81.768],[-155.29,-81.416],[-156.837,-81.102],[-154.409,-81.161],[-152.098,-81.004],[-150.648,-81.337],[-148.866,-81.043],[-147.221,-80.671],[-146.418,-80.338],[-146.77,-79.926],[-148.063,-79.652],[-149.532,-79.358],[-151.588,-79.299],[-153.39,-79.162],[-155.329,-79.064],[-155.976,-78.692],[-157.268,-78.378],[-158.052,-78.026],[-158.365,-76.889],[-157.875,-76.987],[-156.975,-77.301],[-155.329,-77.203],[-153.743,-77.066],[-152.92,-77.497],[-151.334,-77.399],[-150.002,-77.183],[-148.748,-76.909],[-147.612,-76.576],[-146.104,-76.478],[-146.144,-76.105],[-146.496,-75.733],[-146.202,-75.38],[-144.91,-75.204],[-144.322,-75.537],[-142.794,-75.341],[-141.639,-75.086],[-140.209,-75.067],[-138.858,-74.969],[-137.506,-74.734],[-136.429,-74.518],[-135.215,-74.303],[-134.431,-74.361],[-133.746,-74.44],[-132.257,-74.303],[-130.925,-74.479],[-129.554,-74.459],[-128.242,-74.322],[-126.891,-74.42],[-125.402,-74.518],[-124.011,-74.479],[-122.562,-74.499],[-121.074,-74.518],[-119.703,-74.479],[-118.684,-74.185],[-117.47,-74.028],[-116.216,-74.244],[-115.022,-74.068],[-113.944,-73.715],[-113.298,-74.028],[-112.945,-74.381],[-112.299,-74.714],[-111.261,-74.42],[-110.066,-74.793],[-108.715,-74.91],[-107.559,-75.184],[-106.149,-75.126],[-104.876,-74.949],[-103.368,-74.988],[-102.017,-75.126],[-100.646,-75.302],[-100.117,-74.871],[-100.763,-74.538],[-101.253,-74.185],[-102.545,-74.107],[-103.113,-73.734],[-103.329,-73.362],[-103.681,-72.618],[-102.917,-72.755],[-101.605,-72.813],[-100.313,-72.755],[-99.137,-72.911],[-98.119,-73.205],[-97.688,-73.558],[-96.337,-73.617],[-95.044,-73.48],[-93.673,-73.284],[-92.439,-73.166],[-91.421,-73.401],[-90.089,-73.323],[-89.227,-72.559],[-88.424,-73.009],[-87.268,-73.186],[-86.015,-73.088],[-85.192,-73.48],[-83.88,-73.519],[-82.666,-73.636],[-81.471,-73.852],[-80.687,-73.48],[-80.296,-73.127],[-79.297,-73.519],[-77.926,-73.421],[-76.907,-73.636],[-76.222,-73.97],[-74.89,-73.872],[-73.852,-73.656],[-72.834,-73.401],[-71.619,-73.264],[-70.209,-73.147],[-68.936,-73.009],[-67.957,-72.794],[-67.369,-72.48],[-67.134,-72.049],[-67.252,-71.638],[-67.565,-71.246],[-67.917,-70.854],[-68.231,-70.462],[-68.485,-70.109],[-68.544,-69.717],[-68.446,-69.326],[-67.976,-68.953],[-67.585,-68.542],[-67.428,-68.15],[-67.624,-67.719],[-67.741,-67.327],[-67.252,-66.876],[-66.703,-66.582],[-66.057,-66.21],[-65.371,-65.896],[-64.568,-65.603],[-64.177,-65.171],[-63.628,-64.897],[-63.001,-64.642],[-62.042,-64.584],[-61.415,-64.27],[-60.71,-64.074],[-59.887,-63.957],[-59.163,-63.702],[-58.595,-63.388],[-57.811,-63.271],[-57.224,-63.525],[-57.596,-63.859],[-58.614,-64.152],[-59.045,-64.368],[-59.789,-64.211],[-60.612,-64.309],[-61.297,-64.544],[-62.022,-64.799],[-62.512,-65.093],[-62.649,-65.485],[-62.59,-65.857],[-62.12,-66.19],[-62.806,-66.426],[-63.746,-66.504],[-64.294,-66.837],[-64.882,-67.15],[-65.508,-67.582],[-65.665,-67.954],[-65.313,-68.365],[-64.784,-68.679],[-63.961,-68.914],[-63.197,-69.228],[-62.786,-69.619],[-62.571,-69.992],[-62.277,-70.384],[-61.807,-70.717],[-61.513,-71.089],[-61.376,-72.01],[-61.082,-72.382],[-61.004,-72.774],[-60.69,-73.166],[-60.827,-73.695],[-61.376,-74.107],[-61.963,-74.44],[-63.295,-74.577],[-63.746,-74.93],[-64.353,-75.263],[-65.861,-75.635],[-67.193,-75.792],[-68.446,-76.007],[-69.798,-76.223],[-70.601,-76.634],[-72.207,-76.674],[-73.97,-76.634],[-75.556,-76.713],[-77.24,-76.713],[-76.927,-77.105],[-75.399,-77.281],[-74.283,-77.555],[-73.656,-77.908],[-74.773,-78.222],[-76.496,-78.124],[-77.926,-78.378],[-77.985,-78.79],[-78.024,-79.182],[-76.849,-79.515],[-76.633,-79.887],[-75.36,-80.26],[-73.245,-80.416],[-71.443,-80.691],[-70.013,-81.004],[-68.192,-81.318],[-65.704,-81.474],[-63.256,-81.749],[-61.552,-82.043],[-59.691,-82.376],[-58.712,-82.846],[-58.222,-83.218],[-57.008,-82.866],[-55.363,-82.572],[-53.62,-82.258],[-51.544,-82.004],[-49.761,-81.729],[-47.274,-81.71],[-44.826,-81.847],[-42.808,-82.082],[-42.162,-81.651],[-40.771,-81.357],[-38.245,-81.337],[-36.267,-81.122],[-34.386,-80.906],[-32.31,-80.769],[-30.097,-80.593],[-28.55,-80.338],[-29.255,-79.985],[-29.686,-79.633],[-29.686,-79.26],[-31.625,-79.299],[-33.681,-79.456],[-35.64,-79.456],[-35.914,-79.084],[-35.777,-78.339],[-35.327,-78.124],[-33.897,-77.889],[-32.212,-77.653],[-30.998,-77.36],[-29.784,-77.066],[-28.883,-76.674],[-27.512,-76.497],[-26.16,-76.36],[-25.475,-76.282],[-23.928,-76.243],[-22.459,-76.105],[-21.225,-75.909],[-20.01,-75.674],[-18.914,-75.439],[-17.523,-75.126],[-16.642,-74.793],[-15.701,-74.499],[-15.408,-74.107],[-16.465,-73.872],[-16.113,-73.46],[-15.447,-73.147],[-14.409,-72.951],[-13.312,-72.715],[-12.294,-72.402],[-11.51,-72.01],[-11.02,-71.54],[-10.296,-71.265],[-9.101,-71.324],[-8.611,-71.657],[-7.417,-71.697],[-7.377,-71.324],[-6.868,-70.932],[-5.791,-71.03],[-5.536,-71.403],[-4.342,-71.461],[-3.049,-71.285],[-1.795,-71.167],[-0.659,-71.226],[-0.229,-71.638],[0.868,-71.305],[1.887,-71.128],[3.023,-70.991],[4.139,-70.854],[5.158,-70.619],[6.274,-70.462],[7.136,-70.247],[7.743,-69.894],[8.487,-70.149],[9.525,-70.011],[10.25,-70.482],[10.818,-70.834],[11.954,-70.638],[12.404,-70.247],[13.423,-69.972],[14.735,-70.031],[15.127,-70.403],[15.949,-70.031],[17.027,-69.913],[18.202,-69.874],[19.259,-69.894],[20.376,-70.011],[21.453,-70.07],[21.923,-70.403],[22.569,-70.697],[23.666,-70.521],[24.841,-70.482],[25.977,-70.482],[27.094,-70.462],[28.093,-70.325],[29.15,-70.207],[30.032,-69.933],[30.972,-69.757],[31.99,-69.659],[32.754,-69.384],[33.302,-68.836],[33.87,-68.503],[34.908,-68.659],[35.3,-69.012],[36.162,-69.247],[37.2,-69.169],[37.905,-69.521],[38.649,-69.776],[39.668,-69.541],[40.02,-69.11],[40.921,-68.934],[41.959,-68.601],[42.939,-68.463],[44.114,-68.267],[44.897,-68.052],[45.72,-67.817],[46.503,-67.601],[47.443,-67.719],[48.344,-67.366],[48.991,-67.092],[49.931,-67.111],[50.753,-66.876],[50.949,-66.523],[51.792,-66.249],[52.614,-66.053],[53.613,-65.896],[54.534,-65.818],[55.415,-65.877],[56.355,-65.975],[57.158,-66.249],[57.256,-66.68],[58.137,-67.013],[58.745,-67.288],[59.939,-67.405],[60.605,-67.68],[61.428,-67.954],[62.387,-68.013],[63.19,-67.817],[64.052,-67.405],[64.992,-67.621],[65.972,-67.738],[66.912,-67.856],[67.891,-67.934],[68.89,-67.934],[69.713,-68.973],[69.673,-69.228],[69.556,-69.678],[68.596,-69.933],[67.813,-70.305],[67.95,-70.697],[69.066,-70.678],[68.929,-71.069],[68.42,-71.442],[67.95,-71.853],[68.714,-72.167],[69.869,-72.265],[71.025,-72.088],[71.573,-71.697],[71.906,-71.324],[72.455,-71.011],[73.081,-70.717],[73.336,-70.364],[73.865,-69.874],[74.492,-69.776],[75.628,-69.737],[76.626,-69.619],[77.645,-69.463],[78.135,-69.071],[78.428,-68.698],[79.114,-68.326],[80.093,-68.072],[80.935,-67.876],[81.484,-67.542],[82.052,-67.366],[82.776,-67.209],[83.775,-67.307],[84.676,-67.209],[85.656,-67.092],[86.752,-67.15],[87.477,-66.876],[87.986,-66.21],[88.358,-66.484],[88.828,-66.955],[89.671,-67.15],[90.63,-67.229],[91.59,-67.111],[92.609,-67.19],[93.549,-67.209],[94.175,-67.111],[95.018,-67.17],[95.781,-67.386],[96.682,-67.249],[97.76,-67.249],[98.68,-67.111],[99.718,-67.249],[100.384,-66.915],[100.893,-66.582],[101.579,-66.308],[102.832,-65.563],[103.479,-65.7],[104.243,-65.975],[104.908,-66.328],[106.182,-66.935],[107.161,-66.955],[108.081,-66.955],[109.159,-66.837],[110.236,-66.7],[111.058,-66.426],[111.744,-66.132],[112.86,-66.092],[113.605,-65.877],[114.388,-66.073],[114.897,-66.386],[115.602,-66.7],[116.699,-66.661],[117.385,-66.915],[118.579,-67.17],[119.833,-67.268],[120.871,-67.19],[121.654,-66.876],[122.32,-66.563],[123.221,-66.484],[124.122,-66.621],[125.16,-66.719],[126.1,-66.563],[127.001,-66.563],[127.883,-66.661],[128.803,-66.759],[129.704,-66.582],[130.781,-66.426],[131.8,-66.386],[132.936,-66.386],[133.856,-66.288],[134.757,-66.21],[135.032,-65.72],[135.071,-65.309],[135.697,-65.583],[135.874,-66.034],[136.207,-66.445],[136.618,-66.778],[137.46,-66.955],[138.596,-66.896],[139.908,-66.876],[140.809,-66.817],[142.122,-66.817],[143.062,-66.798],[144.374,-66.837],[145.49,-66.915],[146.196,-67.229],[146,-67.601],[146.646,-67.895],[147.723,-68.13],[148.84,-68.385],[150.132,-68.561],[151.484,-68.718],[152.502,-68.875],[153.638,-68.895],[154.285,-68.561],[155.166,-68.836],[155.93,-69.149],[156.811,-69.384],[158.026,-69.482],[159.181,-69.6],[159.671,-69.992],[160.807,-70.227],[161.57,-70.58],[162.687,-70.736],[163.842,-70.717],[164.92,-70.776],[166.114,-70.756],[167.309,-70.834],[168.426,-70.971],[169.464,-71.207],[170.502,-71.403],[171.207,-71.697],[171.089,-72.088],[170.56,-72.441],[170.11,-72.892],[169.757,-73.245],[169.287,-73.656],[167.975,-73.813],[167.387,-74.165],[166.095,-74.381],[165.644,-74.773],[164.959,-75.145],[164.234,-75.459],[163.823,-75.87],[163.568,-76.243],[163.47,-76.693],[163.49,-77.066],[164.058,-77.457],[164.273,-77.83],[164.743,-78.183],[166.604,-78.32],[166.996,-78.751],[165.194,-78.907],[163.666,-79.123],[161.766,-79.162],[160.924,-79.73],[160.748,-80.201],[160.317,-80.573],[159.788,-80.945],[161.12,-81.279],[161.629,-81.69],[162.491,-82.062],[163.705,-82.395],[165.096,-82.709],[166.604,-83.022],[168.896,-83.336],[169.405,-83.826],[172.284,-84.041],[172.477,-84.118],[173.224,-84.414],[175.986,-84.159],[178.277,-84.473],[180,-84.713]]]},{"region":5,"bounds":[32.732,35,34.576,35.672],"rings":[[[32.732,35.14],[32.802,35.146],[32.947,35.387],[33.667,35.373],[34.576,35.672],[33.901,35.246],[33.974,35.059],[33.866,35.094],[33.675,35.018],[33.526,35.039],[33.476,35],[33.456,35.101],[33.384,35.163],[33.191,35.173],[32.92,35.088],[32.732,35.14]]]},{"region":5,"bounds":[32.257,34.572,34.005,35.173],"rings":[[[32.732,35.14],[32.92,35.088],[33.191,35.173],[33.384,35.163],[33.456,35.101],[33.476,35],[33.526,35.039],[33.675,35.018],[33.866,35.094],[33.974,35.059],[34.005,34.978],[32.98,34.572],[32.49,34.702],[32.257,35.103],[32.732,35.14]]]},{"region":5,"bounds":[-17.02,21.421,-1.125,35.76],"rings":[[[-2.17,35.168],[-1.793,34.528],[-1.733,33.92],[-1.388,32.864],[-1.125,32.652],[-1.308,32.263],[-2.617,32.094],[-3.069,31.724],[-3.647,31.637],[-3.69,30.897],[-4.86,30.501],[-5.242,30],[-6.061,29.732],[-7.059,29.579],[-8.674,28.841],[-8.666,27.656],[-8.818,27.656],[-8.795,27.121],[-9.413,27.088],[-9.735,26.861],[-10.189,26.861],[-10.551,26.991],[-11.393,26.883],[-11.718,26.104],[-12.031,26.031],[-12.501,24.77],[-13.891,23.691],[-14.221,22.31],[-14.631,21.861],[-14.751,21.501],[-17.003,21.421],[-17.02,21.422],[-16.973,21.886],[-16.589,22.158],[-16.262,22.679],[-16.326,23.018],[-15.983,23.723],[-15.426,24.359],[-15.089,24.52],[-14.825,25.104],[-14.801,25.636],[-14.44,26.254],[-13.774,26.619],[-13.14,27.64],[-13.122,27.654],[-12.619,28.038],[-11.689,28.149],[-10.901,28.832],[-10.4,29.099],[-9.565,29.934],[-9.815,31.178],[-9.435,32.038],[-9.301,32.565],[-8.657,33.24],[-7.654,33.697],[-6.913,34.11],[-6.244,35.146],[-5.93,35.76],[-5.194,35.755],[-4.591,35.331],[-3.64,35.4],[-2.604,35.179],[-2.17,35.168]]]},{"region":5,"bounds":[24.7,22,36.866,31.586],"rings":[[[36.866,22],[32.9,22],[29.02,22],[25,22],[25,25.683],[25,29.239],[24.7,30.044],[24.958,30.662],[24.803,31.089],[25.165,31.569],[26.495,31.586],[27.458,31.321],[28.45,31.026],[28.914,30.87],[29.683,31.187],[30.095,31.473],[30.977,31.556],[31.688,31.43],[31.96,30.934],[32.192,31.26],[32.994,31.024],[33.773,30.967],[34.265,31.219],[34.265,31.219],[34.823,29.761],[34.923,29.501],[34.642,29.099],[34.427,28.344],[34.155,27.823],[33.921,27.649],[33.588,27.971],[33.137,28.418],[32.423,29.851],[32.32,29.76],[32.735,28.705],[33.349,27.7],[34.105,26.142],[34.474,25.599],[34.795,25.034],[35.692,23.927],[35.494,23.752],[35.526,23.102],[36.691,22.205],[36.866,22]]]},{"region":5,"bounds":[9.319,19.58,25.165,33.137],"rings":[[[25,22],[25,20.003],[23.85,20],[23.838,19.58],[19.849,21.495],[15.861,23.41],[14.851,22.863],[14.144,22.491],[13.581,23.041],[12,23.472],[11.561,24.098],[10.771,24.563],[10.304,24.379],[9.948,24.937],[9.911,25.365],[9.319,26.094],[9.716,26.512],[9.629,27.141],[9.756,27.688],[9.684,28.144],[9.86,28.96],[9.806,29.425],[9.482,30.308],[9.97,30.539],[10.057,30.962],[9.95,31.376],[10.637,31.761],[10.945,32.082],[11.432,32.369],[11.489,33.137],[12.663,32.793],[13.083,32.879],[13.919,32.712],[15.246,32.265],[15.714,31.376],[16.612,31.182],[18.021,30.764],[19.086,30.266],[19.574,30.526],[20.053,30.986],[19.82,31.752],[20.134,32.238],[20.855,32.707],[21.543,32.843],[22.896,32.639],[23.237,32.191],[23.609,32.187],[23.927,32.017],[24.921,31.899],[25.165,31.569],[24.803,31.089],[24.958,30.662],[24.7,30.044],[25,29.239],[25,25.683],[25,22]]]},{"region":4,"bounds":[32.954,3.422,47.789,14.959],"rings":[[[47.789,8.003],[44.964,5.002],[43.661,4.958],[42.77,4.253],[42.129,4.234],[41.855,3.919],[41.172,3.919],[40.768,4.257],[39.855,3.839],[39.559,3.422],[38.893,3.501],[38.671,3.616],[38.437,3.589],[38.121,3.599],[36.855,4.448],[36.159,4.448],[35.817,4.777],[35.817,5.338],[35.298,5.506],[34.707,6.594],[34.25,6.826],[34.075,7.226],[33.568,7.713],[32.954,7.785],[33.295,8.355],[33.825,8.379],[33.975,8.685],[33.962,9.584],[34.257,10.63],[34.731,10.91],[34.832,11.319],[35.26,12.083],[35.864,12.578],[36.27,13.563],[36.43,14.422],[37.594,14.213],[37.906,14.959],[38.513,14.505],[39.099,14.741],[39.341,14.532],[40.026,14.52],[40.897,14.119],[41.155,13.773],[41.599,13.452],[42.01,12.866],[42.352,12.542],[42,12.1],[41.662,11.631],[41.74,11.355],[41.756,11.051],[42.314,11.034],[42.555,11.105],[42.777,10.927],[42.559,10.573],[42.928,10.022],[43.297,9.54],[43.679,9.184],[46.948,7.997],[47.789,8.003]]]},{"region":4,"bounds":[41.662,10.927,43.318,12.7],"rings":[[[42.352,12.542],[42.78,12.455],[43.081,12.7],[43.318,12.39],[43.286,11.975],[42.716,11.736],[43.145,11.462],[42.777,10.927],[42.555,11.105],[42.314,11.034],[41.756,11.051],[41.74,11.355],[41.662,11.631],[42,12.1],[42.352,12.542]]]},{"region":4,"bounds":[42.559,7.997,48.948,11.462],"rings":[[[48.948,11.411],[48.948,11.411],[48.942,11.394],[48.938,10.982],[48.938,9.973],[48.938,9.452],[48.487,8.838],[47.789,8.003],[46.948,7.997],[43.679,9.184],[43.297,9.54],[42.928,10.022],[42.559,10.573],[42.777,10.927],[43.145,11.462],[43.471,11.278],[43.667,10.864],[44.118,10.446],[44.614,10.442],[45.557,10.698],[46.645,10.817],[47.526,11.127],[48.022,11.193],[48.379,11.375],[48.948,11.411],[48.948,11.411]]]},{"region":4,"bounds":[29.579,-1.443,35.036,4.25],"rings":[[[33.904,-0.95],[31.866,-1.027],[30.77,-1.015],[30.419,-1.135],[29.822,-1.443],[29.579,-1.341],[29.588,-0.587],[29.82,-0.205],[29.876,0.597],[30.086,1.062],[30.469,1.584],[30.853,1.849],[31.174,2.204],[30.773,2.34],[30.834,3.509],[30.834,3.509],[31.246,3.782],[31.881,3.558],[32.686,3.792],[33.39,3.79],[34.005,4.25],[34.479,3.556],[34.596,3.054],[35.036,1.906],[34.672,1.177],[34.18,0.515],[33.894,0.11],[33.904,-0.95]]]},{"region":4,"bounds":[29.025,-2.918,30.816,-1.135],"rings":[[[30.419,-1.135],[30.816,-1.699],[30.758,-2.287],[30.47,-2.414],[30.47,-2.414],[29.938,-2.348],[29.632,-2.918],[29.025,-2.839],[29.117,-2.292],[29.255,-2.215],[29.292,-1.62],[29.579,-1.341],[29.822,-1.443],[30.419,-1.135]]]},{"region":2,"bounds":[15.75,42.65,19.6,45.234],"rings":[[[18.56,42.65],[17.675,43.029],[17.297,43.446],[16.916,43.668],[16.456,44.041],[16.24,44.351],[15.75,44.819],[15.959,45.234],[16.318,45.004],[16.535,45.212],[17.002,45.234],[17.862,45.068],[18.553,45.082],[19.005,44.86],[19.005,44.86],[19.368,44.863],[19.118,44.423],[19.6,44.038],[19.454,43.568],[19.219,43.524],[19.032,43.433],[18.706,43.2],[18.56,42.65]]]},{"region":2,"bounds":[20.463,40.843,22.952,42.32],"rings":[[[22.381,42.32],[22.881,41.999],[22.952,41.338],[22.762,41.305],[22.597,41.13],[22.055,41.15],[21.674,40.931],[21.02,40.843],[20.605,41.086],[20.463,41.515],[20.59,41.855],[20.59,41.855],[20.717,41.847],[20.762,42.052],[21.353,42.207],[21.577,42.245],[21.917,42.304],[22.381,42.32]]]},{"region":2,"bounds":[18.83,42.245,22.986,46.172],"rings":[[[18.83,45.909],[18.83,45.909],[19.596,46.172],[20.22,46.127],[20.762,45.735],[20.874,45.416],[21.484,45.181],[21.562,44.769],[22.145,44.478],[22.459,44.703],[22.706,44.578],[22.474,44.409],[22.657,44.235],[22.41,44.008],[22.5,43.643],[22.986,43.211],[22.605,42.899],[22.437,42.58],[22.545,42.461],[22.381,42.32],[21.917,42.304],[21.577,42.245],[21.543,42.32],[21.663,42.439],[21.775,42.683],[21.633,42.677],[21.439,42.863],[21.274,42.91],[21.143,43.069],[20.957,43.131],[20.814,43.272],[20.635,43.217],[20.497,42.885],[20.258,42.813],[20.34,42.899],[19.959,43.106],[19.63,43.214],[19.484,43.352],[19.219,43.524],[19.454,43.568],[19.6,44.038],[19.118,44.423],[19.368,44.863],[19.005,44.86],[19.005,44.86],[19.39,45.237],[19.073,45.522],[18.83,45.909]]]},{"region":2,"bounds":[18.45,41.878,20.34,43.524],"rings":[[[20.071,42.589],[19.802,42.5],[19.738,42.688],[19.304,42.196],[19.372,41.878],[19.162,41.955],[18.882,42.282],[18.45,42.48],[18.56,42.65],[18.706,43.2],[19.032,43.433],[19.219,43.524],[19.484,43.352],[19.63,43.214],[19.959,43.106],[20.34,42.899],[20.258,42.813],[20.071,42.589]]]},{"region":2,"bounds":[20.071,41.847,21.775,43.272],"rings":[[[20.59,41.855],[20.523,42.218],[20.284,42.32],[20.071,42.589],[20.258,42.813],[20.497,42.885],[20.635,43.217],[20.814,43.272],[20.957,43.131],[21.143,43.069],[21.274,42.91],[21.439,42.863],[21.633,42.677],[21.775,42.683],[21.663,42.439],[21.543,42.32],[21.577,42.245],[21.353,42.207],[20.762,42.052],[20.717,41.847],[20.59,41.855]]]},{"region":1,"bounds":[-61.95,10,-60.895,10.89],"rings":[[[-61.68,10.76],[-61.105,10.89],[-60.895,10.855],[-60.935,10.11],[-61.77,10],[-61.95,10.09],[-61.66,10.365],[-61.68,10.76]]]},{"region":4,"bounds":[23.887,3.509,35.298,12.248],"rings":[[[30.834,3.509],[29.953,4.174],[29.716,4.601],[29.159,4.389],[28.697,4.455],[28.429,4.287],[27.98,4.408],[27.374,5.234],[27.213,5.551],[26.466,5.947],[26.213,6.547],[25.797,6.979],[25.124,7.5],[25.115,7.825],[24.567,8.229],[23.887,8.62],[24.194,8.729],[24.537,8.918],[24.795,9.81],[25.07,10.274],[25.791,10.411],[25.962,10.136],[26.477,9.553],[26.752,9.467],[27.113,9.639],[27.834,9.604],[27.971,9.398],[28.967,9.398],[29.001,9.604],[29.516,9.793],[29.619,10.085],[29.997,10.291],[30.838,9.707],[31.353,9.81],[31.851,10.531],[32.4,11.081],[32.314,11.681],[32.074,11.973],[32.675,12.025],[32.743,12.248],[33.207,12.179],[33.087,11.441],[33.207,10.72],[33.722,10.325],[33.842,9.982],[33.825,9.484],[33.963,9.464],[33.975,8.685],[33.825,8.379],[33.295,8.355],[32.954,7.785],[33.568,7.713],[34.075,7.226],[34.25,6.826],[34.707,6.594],[35.298,5.506],[34.62,4.847],[34.005,4.25],[33.39,3.79],[32.686,3.792],[31.881,3.558],[31.246,3.782],[30.834,3.509]]]}]');function M1(i,e,t){let n=!1;for(let r=0,s=t.length-1;r<t.length;s=r++){const[o,a]=t[r],[l,c]=t[s];a>e!=c>e&&i<(l-o)*(e-a)/(c-a)+o&&(n=!n)}return n}function $5(i,e){for(const t of K5){const[n,r,s,o]=t.bounds;if(!(i<n||i>s||e<r||e>o)&&M1(i,e,t.rings[0])&&!t.rings.slice(1).some(a=>M1(i,e,a)))return t.region}return-2}function Q5(i,e,t,n){const r=new _n,s=t("#f4dda9"),o=t("#fff5dc"),a=t("#cb6d51"),l=t("#617f8d"),c=t("#eebc60"),d=t("#769b60"),f=(h,y,S,v=0,E=y/2,T=0,P=s)=>{const _=new dt(e,P);return _.scale.set(h,y,S),_.position.set(v,E,T),r.add(_),_},u=(h,y,S,v)=>{const E=f(S,h.distanceTo(y),S,0,0,0,v);E.position.copy(h).add(y).multiplyScalar(.5),E.quaternion.setFromUnitVectors(new U(0,1,0),y.clone().sub(h).normalize())},p=(h,y,S)=>new U(h,y,S),x=(h,y,S)=>{n.push(h);const v=new dt(h,y);return v.position.set(S[0],S[1],S[2]),r.add(v),v},b=t("#90bdc0"),m=t("#496974");if(i==="eiffel"){for(const h of[-1,1])for(const y of[-1,1]){u(p(h*.145,0,y*.145),p(h*.067,.25,y*.067),.035,l),u(p(h*.067,.25,y*.067),p(h*.018,.55,y*.018),.026,l),u(p(h*.1,.1,y*.1),p(-h*.067,.25,y*.067),.013,l);for(const[S,v]of[[.27,.06],[.34,.045],[.41,.03]])u(p(h*v,S,y*v),p(-h*(v-.014),S+.065,y*(v-.014)),.008,l);f(.065,.023,.065,h*.145,.005,y*.145,s)}f(.25,.035,.25,0,.24,0,l),f(.14,.025,.14,0,.39,0,l);for(const h of[-.118,.118]){f(.24,.008,.009,0,.276,h,l);for(const y of[-.09,-.045,0,.045,.09])f(.008,.03,.008,y,.26,h,l)}f(.048,.15,.048,0,.56,0,l),f(.015,.1,.015,0,.68,0,c)}else if(i==="pyramid")for(const[h,y,S]of[[-.065,0,.36],[.17,.08,.22]])for(let v=0;v<14;v++){const E=S*(1-v/14);f(E,S/16,E,h,S/16*(v+.5),y,s)}else if(i==="skyline"||i==="spire"){for(const[h,y,S]of[[-.13,.04,.26],[.04,0,.48],[.14,.1,.23]]){f(.11,S,.1,h,S/2,y,b),f(.08,.06,.075,h,S+.03,y,o);for(let v=.045;v<S;v+=.045){f(.113,.006,.104,h,v,y,s);for(const E of[-.026,.026])f(.014,.022,.003,h+E,v+.018,y+.052,m)}}f(.045,.09,.045,.04,.59,0,l),f(.012,.13,.012,.04,.69,0,c)}else if(i==="bridge"){f(.57,.028,.12,0,.13,0,a);for(const h of[-.16,.16]){for(const y of[-.052,.052])f(.035,.36,.035,h,.18,y,a),u(p(h,.34,y),p(0,.15,y),.014,a),u(p(h,.34,y),p(Math.sign(h)*.29,.14,y),.014,a);f(.06,.025,.13,h,.28,0,a);for(const y of[-.052,.052])for(let S=-.12;S<=.12;S+=.04){const v=Math.sign(h)*S>0?.13:.16,E=.34-.19*Math.abs(S)/v;f(.007,Math.max(.015,E-.14),.007,h+S,(E+.14)/2,y,a)}}}else if(i==="palace"||i==="pagoda"){const h=i==="palace"?2:4;for(let y=0;y<h;y++){const S=.34-y*.055,v=y*.13;f(S*.7,.095,S*.65,0,v+.05,0,a);for(const E of[-S*.23,0,S*.23])f(.012,.08,.015,E,v+.046,S*.34,s),f(.035,.038,.004,E,v+.046,S*.331,m);f(S,.035,S,0,v+.105,0,i==="palace"?c:l),f(S*.68,.025,S*.68,0,v+.135,0,i==="palace"?c:l);for(const E of[-1,1])f(.035,.035,S,E*(S/2-.018),v+.13,0,i==="palace"?c:l)}f(.022,.07,.022,0,h*.13+.03,0,c)}else if(i==="domes")for(const[h,y,S]of[[0,0,.34],[-.13,.07,.23],[.13,.07,.23]]){f(.095,S,.095,h,S/2,y,a);const v=[[0,0],[.035,0],[.062,.035],[.067,.07],[.045,.11],[.018,.15],[0,.18]].map(([E,T])=>new de(E,T));x(new Wo(v,16),h===0?c:d,[h,S,y]),f(.012,.06,.012,h,S+.2,y,c)}else if(i==="gate"){f(.11,.28,.18,-.11,.14,0,a),f(.11,.28,.18,.11,.14,0,a),f(.34,.09,.2,0,.28,0,s),f(.38,.03,.23,0,.34,0,c);for(const h of[-.13,.13])f(.045,.055,.045,h,.38,0,s),f(.07,.02,.07,h,.41,0,c)}else if(i==="marina"){for(const h of[-.15,0,.15])f(.075,.32,.1,h,.16,0,l),f(.078,.02,.104,h,.21,0,o);f(.46,.045,.14,0,.34,0,s),f(.37,.018,.11,0,.37,0,d)}else if(i==="sails"){f(.46,.035,.27,0,.02,0,s);for(const[h,y,S]of[[-.14,.03,.23],[.015,-.025,.35],[.16,.035,.23]]){const v=new $1;v.moveTo(-.07,0),v.lineTo(.1,0),v.bezierCurveTo(.075,S*.3,.025,S*.78,.025,S),v.bezierCurveTo(-.018,S*.55,-.066,S*.27,-.07,0),x(new ko(v,{depth:.075,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.006,bevelThickness:.006,curveSegments:14}),o,[h,.044,y-.04])}}else if(i==="mountain"||i==="table"){for(let h=0;h<5;h++){const y=i==="table"?.44-h*.022:.33-h*.045;f(y,.055,.26-h*.025,0,h*.05+.025,0,h===4?d:s)}if(i==="mountain")for(let h=0;h<4;h++)f(.18-h*.03,.045,.2-h*.03,.2,h*.045+.02,.03,d)}else i==="acacia"?(f(.04,.26,.04,0,.13,0,a),u(p(0,.12,0),p(-.12,.26,0),.022,a),u(p(0,.16,0),p(.12,.28,0),.022,a),f(.37,.055,.25,0,.285,0,d),f(.25,.04,.2,-.025,.33,0,d)):i==="obelisk"?(f(.12,.035,.12,0,.02,0,s),f(.055,.37,.055,0,.21,0,o),f(.029,.06,.029,0,.42,0,c)):(f(.065,.04,.065,0,.025,0,c),f(.029,.07,.029,0,.075,0,o));return r}function j5(i,e,t,n){const r=e*(t===1?16:t===2?n:1);return yt.clamp(i*Math.exp(-r*.0012),.85,4)}function eh(i,e,t,n=!1){return n||Math.abs(i-e)<5e-4?e:e+(i-e)*Math.exp(-Math.max(0,t)*22)}function nh(i,e,t,n){const r=new G5({canvas:i,antialias:!0,alpha:!0,powerPreference:"high-performance"});r.setPixelRatio(Math.min(devicePixelRatio,2.5)),r.outputColorSpace=Ot,r.toneMapping=Eo,r.toneMappingExposure=1.32,r.setClearColor(0,0);const s=new Fl,o=new Wr(-4,4,3.15,-3.15,.1,40);o.position.set(0,.1,12),o.lookAt(0,.1,0),s.add(new F3("#e6ebed","#92978a",1.7));const a=new _n;a.rotation.set(.13,-.28,-.055),s.add(a);const l=Y5(a),c=new Yo(1,1,1,1,.07),d=[],f=(R,re={})=>{const k=new i2({color:R,roughness:.88,...re});return d.push(k),l.decorate(k)},u=X5(),p=f("#ffffff",{vertexColors:!0,roughness:1});l.decorate(p,!1,!0);const x=new dt(u.land,p);a.add(x);const b=u.ocean,m=new I3({color:"#ffffff",vertexColors:!0,roughness:.48,metalness:0,clearcoat:.035,clearcoatRoughness:.6});d.push(m),l.decorate(m,!0);const h=new dt(b,m);a.add(h);const y=Hn,S=new U(0,1,0),v=Z5(a,u.samples,f),E=J5(a,u.heightAt,l.sunDirection),T=[],P=f("#86bdc8");for(const R of[[[31,31],[27,31],[23,33],[18,33],[13,32],[6,31]],[[-1,-50],[-3,-56],[-3,-62],[-4,-68],[-5,-73]]]){const re=new X1(R.map(([ee,Te])=>y(ee,Te,2.095)));class k extends Qt{constructor(){super()}getPoint(Te){const xe=re.getPoint(Te).normalize();return xe.multiplyScalar(u.heightAt(Math.asin(xe.y)*180/Math.PI,Math.atan2(xe.x,xe.z)*180/Math.PI)+.002)}}const oe=new k,ue=new qo(oe,100,.0055,5,!1);T.push(ue),a.add(new dt(ue,P))}const _=new Map,A={"#f4dda9":"#f4dfb6","#fff5dc":"#fff8e9","#cb6d51":"#e79b80","#617f8d":"#8bafbf","#eebc60":"#f2ce87","#769b60":"#a2c480","#90bdc0":"#afdce0","#496974":"#749cab"},C=R=>{if(!_.has(R)){const re=R==="#496974"?2.4:R==="#eebc60"?.75:R==="#90bdc0"||R==="#617f8d"?.18:0;_.set(R,f(A[R]??R,{emissive:"#ffbd62",emissiveIntensity:re}))}return _.get(R)},L=document.createElement("canvas");L.width=L.height=64;const N=L.getContext("2d"),O=N.createRadialGradient(32,32,3,32,32,32);O.addColorStop(0,"rgba(45,65,43,.25)"),O.addColorStop(1,"rgba(45,65,43,0)"),N.fillStyle=O,N.fillRect(0,0,64,64);const D=new Jl(L),B=new Bo({map:D,transparent:!0,depthWrite:!1});d.push(B);const q=new ji(1,1),W=[],ie=zn.map((R,re)=>{const k=Q5(R.landmark,c,C,W),oe=Math.max(2.065,u.heightAt(R.lat,R.lon));k.position.copy(y(R.lat,R.lon,oe+.012)),R.landmark==="pin"&&k.scale.setScalar(.65);const ue=new dt(q,B);return ue.rotation.x=-Math.PI/2,ue.scale.setScalar(R.landmark==="pin"?.13:.46),ue.position.set(.025,-.008,-.015),k.add(ue),k.quaternion.setFromUnitVectors(S,k.position.clone().normalize()),k.traverse(ee=>{ee.userData.place=re}),k}),Y=p2(ie,a),Z=new Xo(.17,.016,4,32),Q=new dt(Z,f("#fbdd8d",{emissive:"#ffcc77",emissiveIntensity:1.2}));Q.visible=!1,a.add(Q);const Ee=new H3,ye=new de;let Ke=!0,Xe=!0,ke=!1,K=!1,te=0,ge=0,Be=0,be=0,Ie=null,Qe=-1,ne=0,se=0,ae=0,le=null,fe=a.rotation.x,Ne=1,Ue=-.9,Fe=[],Ve=0,I=null,je=!1,qe=1,w=1;const g=matchMedia("(prefers-reduced-motion: reduce)"),z=R=>{o.updateMatrixWorld(),a.updateMatrixWorld(!0);const re=i.getBoundingClientRect();ye.set((R.clientX-re.left)/re.width*2-1,-(R.clientY-re.top)/re.height*2+1),Ee.setFromCamera(ye,o);const k=Ee.intersectObjects([h,Y.group],!0);let oe=null;if(Fe=[],k.length){const ue=k[0];if(v1(ue)!==null)oe=v1(ue);else if(ue.object===h){const ee=a.worldToLocal(ue.point.clone()).normalize();if($5(Math.atan2(ee.x,ee.z)*180/Math.PI,Math.asin(ee.y)*180/Math.PI)<0)return Ie!==null&&(Ie=null,e(null)),i.style.cursor=ke?"grabbing":"grab",null;const xe=zn.map((it,tt)=>({i:tt,d:ee.angleTo(y(it.lat,it.lon,1))*6371})).sort((it,tt)=>it.d-tt.d);Fe=xe.map(it=>it.i),xe[0].d<650&&(oe=xe[0].i)}}return oe!==Ie&&(Ie=oe,e(oe)),i.style.cursor=ke?"grabbing":(oe!==null||Fe.length)&&Ke?"pointer":"grab",oe},H=R=>{R.button===0&&(ke=!0,I=null,K=!1,Be=te=R.clientX,be=ge=R.clientY,le=null,i.setPointerCapture(R.pointerId),ae=performance.now()+1e4)},J=R=>{if(ke){Math.hypot(R.clientX-Be,R.clientY-be)>5&&(K=!0),a.rotation.y+=(R.clientX-te)*.008/o.zoom,a.rotation.x=yt.clamp(a.rotation.x+(R.clientY-ge)*.005/o.zoom,-1.4,1.4),te=R.clientX,ge=R.clientY,i.style.cursor="grabbing",Ie!==null&&(Ie=null,e(null));return}I=R},ce=R=>{const re=ke;ke=!1,i.hasPointerCapture(R.pointerId)&&i.releasePointerCapture(R.pointerId);const k=z(R);re&&!K&&Ke&&(k!==null?(Qe=k,t(k)):Fe.length&&n(Fe)),ae=performance.now()+1e4},he=()=>{ke=!1,I=null,Ie=null,e(null)},$=R=>{R.key.startsWith("Arrow")&&(R.preventDefault(),le=null,a.rotation.y+=R.key==="ArrowLeft"?-.25:R.key==="ArrowRight"?.25:0,a.rotation.x=yt.clamp(a.rotation.x+(R.key==="ArrowUp"?-.18:R.key==="ArrowDown"?.18:0),-1.4,1.4),ae=performance.now()+1e4)},j=()=>{ke||he()},pe=R=>{R.preventDefault(),Ne=j5(Ne,R.deltaY,R.deltaMode,w);const re=performance.now();Ve=re+220,ae=re+1e4,I=null};i.addEventListener("wheel",pe,{passive:!1}),i.addEventListener("pointerdown",H),i.addEventListener("pointermove",J),i.addEventListener("pointerup",ce),i.addEventListener("pointercancel",he),i.addEventListener("pointerleave",j),i.addEventListener("keydown",$);const Pe=()=>{const R=Math.min(devicePixelRatio,je?1.5:2.5,Math.sqrt((je?2e6:8e6)/(qe*w)));Math.abs(r.getPixelRatio()-R)>.001&&r.setPixelRatio(R)},_e=()=>{const{width:R,height:re}=i.getBoundingClientRect();if(!R||!re)return;qe=R,w=re,Pe(),r.setSize(R,re,!1);const k=R/re,oe=Math.max(3.65,2.65/k);o.left=-oe*k,o.right=oe*k,o.top=oe,o.bottom=-oe,Ue=-oe*.25,o.position.y=Ue/o.zoom,o.lookAt(0,o.position.y,0),o.updateProjectionMatrix()},me=new ResizeObserver(_e);me.observe(i),_e();const Le=R=>{ne=requestAnimationFrame(Le);const re=Math.max(0,(R-se)/1e3),k=Math.min(re,.05);if(se=R,!Xe||document.hidden)return;const oe=ke||R<Ve||Math.abs(Ne-o.zoom)>.002;oe!==je&&(je=oe,Pe());const ue=g.matches?1:1-Math.exp(-k*9),ee=eh(o.zoom,Ne,re,g.matches);if(ee!==o.zoom&&(o.zoom=ee,o.position.y=Ue/o.zoom,o.lookAt(0,o.position.y,0),o.updateProjectionMatrix()),le!==null?(a.rotation.y+=(le-a.rotation.y)*ue,a.rotation.x+=(fe-a.rotation.x)*ue,Math.abs(le-a.rotation.y)<.002&&Math.abs(fe-a.rotation.x)<.002&&(le=null)):!ke&&!g.matches&&R>ae&&Ie===null&&(a.rotation.y+=k*.055),Qe>=0){const xe=ie[Qe];Q.visible=!0,Q.position.copy(xe.position).addScaledVector(xe.position.clone().normalize(),.025),Q.quaternion.setFromUnitVectors(new U(0,0,1),xe.position.clone().normalize())}else Q.visible=!1;const Te=g.matches?0:R/1e3;if(l.update(new Date,Te),v.update(Te),E.update(o,i.height),I&&!oe){const xe=I;I=null,z(xe)}r.render(s,o)};ne=requestAnimationFrame(Le);let Oe="";const He=(R,re=!1)=>{if(Qe=R,re){const k=-zn[R].lon*Math.PI/180;fe=(zn[R].lat-28/Ne)*Math.PI/180,le=a.rotation.y+yt.euclideanModulo(k-a.rotation.y+Math.PI,2*Math.PI)-Math.PI,ae=performance.now()+15e3}};return{setActive(R){Xe=R},setEnabled(R){Ke=R},select:He,setPersona(R){var ue;const re=zn.findIndex(ee=>{var Te;return ee.id===((Te=R.location)==null?void 0:Te.id)}),k=`${R.id}:${((ue=R.location)==null?void 0:ue.id)||""}`,oe=k!==Oe||Qe!==re;Oe=k,Qe=re,oe&&(Ie=null,e(null),re>=0&&He(re,!0))},dispose(){i.removeEventListener("wheel",pe),cancelAnimationFrame(ne),me.disconnect(),i.removeEventListener("pointerdown",H),i.removeEventListener("pointermove",J),i.removeEventListener("pointerup",ce),i.removeEventListener("pointercancel",he),i.removeEventListener("keydown",$),i.removeEventListener("pointerleave",j),Y.dispose(),c.dispose(),W.forEach(R=>R.dispose()),q.dispose(),D.dispose(),v.dispose(),E.dispose(),u.land.dispose(),T.forEach(R=>R.dispose()),b.dispose(),Z.dispose(),d.forEach(R=>R.dispose()),r.dispose()}}}export{nh as createGlobe};
