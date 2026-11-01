(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hl="180",fs={ROTATE:0,DOLLY:1,PAN:2},hs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ju=0,Yl=1,Zu=2,vh=1,xh=2,Hn=3,Zn=0,ze=1,xe=2,Gn=0,ps=1,ha=2,jl=3,Zl=4,Ku=5,Pi=100,Ju=101,$u=102,Qu=103,td=104,ed=200,nd=201,id=202,sd=203,ua=204,da=205,rd=206,od=207,ad=208,ld=209,cd=210,hd=211,ud=212,dd=213,fd=214,fa=0,pa=1,ma=2,gs=3,ga=4,_a=5,va=6,xa=7,ul=0,pd=1,md=2,ci=0,Mh=1,yh=2,Sh=3,dl=4,wh=5,bh=6,Eh=7,Th=300,_s=301,vs=302,Ma=303,ya=304,fo=306,eo=1e3,Li=1001,Sa=1002,an=1003,gd=1004,gr=1005,pn=1006,To=1007,Ii=1008,bn=1009,Ah=1010,Rh=1011,$s=1012,fl=1013,zi=1014,Rn=1015,Pn=1016,pl=1017,ml=1018,Qs=1020,Ch=35902,Ph=35899,Dh=1021,Lh=1022,Sn=1023,tr=1026,er=1027,po=1028,gl=1029,Ih=1030,_l=1031,vl=1033,Yr=33776,jr=33777,Zr=33778,Kr=33779,wa=35840,ba=35841,Ea=35842,Ta=35843,Aa=36196,Ra=37492,Ca=37496,Pa=37808,Da=37809,La=37810,Ia=37811,Ua=37812,Na=37813,Fa=37814,Oa=37815,za=37816,Ba=37817,ka=37818,Va=37819,Ha=37820,Ga=37821,Wa=36492,Xa=36494,qa=36495,Ya=36283,ja=36284,Za=36285,Ka=36286,_d=3200,Uh=3201,mo=0,vd=1,li="",nn="srgb",xs="srgb-linear",no="linear",ce="srgb",Xi=7680,Kl=519,xd=512,Md=513,yd=514,Nh=515,Sd=516,wd=517,bd=518,Ed=519,Jl=35044,Td=35048,$l="300 es",Cn=2e3,io=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const s=n[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const qs=Math.PI/180,nr=180/Math.PI;function Hi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function xl(i,t){return(i%t+t)%t}function Ad(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Rd(i,t,e){return i!==t?(e-i)/(t-i):0}function Ys(i,t,e){return(1-e)*i+e*t}function Cd(i,t,e,n){return Ys(i,t,1-Math.exp(-e*n))}function Pd(i,t=1){return t-Math.abs(xl(i,t*2)-t)}function Dd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ld(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Id(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ud(i,t){return i+Math.random()*(t-i)}function Nd(i){return i*(.5-Math.random())}function Fd(i){i!==void 0&&(Ql=i);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Od(i){return i*qs}function zd(i){return i*nr}function Bd(i){return(i&i-1)===0&&i!==0}function kd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hd(i,t,e,n,s){const r=Math.cos,o=Math.sin,a=r(e/2),h=o(e/2),l=r((t+n)/2),c=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*c,h*u,h*d,a*l);break;case"YZY":i.set(h*d,a*c,h*u,a*l);break;case"ZXZ":i.set(h*u,h*d,a*c,a*l);break;case"XZX":i.set(a*c,h*g,h*f,a*l);break;case"YXY":i.set(h*f,a*c,h*g,a*l);break;case"ZYZ":i.set(h*g,h*f,a*c,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function cs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const me={DEG2RAD:qs,RAD2DEG:nr,generateUUID:Hi,clamp:Kt,euclideanModulo:xl,mapLinear:Ad,inverseLerp:Rd,lerp:Ys,damp:Cd,pingpong:Pd,smoothstep:Dd,smootherstep:Ld,randInt:Id,randFloat:Ud,randFloatSpread:Nd,seededRandom:Fd,degToRad:Od,radToDeg:zd,isPowerOfTwo:Bd,ceilPowerOfTwo:kd,floorPowerOfTwo:Vd,setQuaternionFromProperEuler:Hd,normalize:We,denormalize:cs};class ct{constructor(t=0,e=0){ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ge{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let h=n[s+0],l=n[s+1],c=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||h!==d||l!==f||c!==g){let m=1-a;const p=h*d+l*f+c*g+u*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),M=Math.atan2(A,p*x);m=Math.sin(m*M)/A,a=Math.sin(a*M)/A}const v=a*x;if(h=h*m+d*v,l=l*m+f*v,c=c*m+g*v,u=u*m+_*v,m===1-a){const A=1/Math.sqrt(h*h+l*l+c*c+u*u);h*=A,l*=A,c*=A,u*=A}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],h=n[s+1],l=n[s+2],c=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+c*u+h*f-l*d,t[e+1]=h*g+c*d+l*u-a*f,t[e+2]=l*g+c*f+a*d-h*u,t[e+3]=c*g-a*u-h*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,h=Math.sin,l=a(n/2),c=a(s/2),u=a(r/2),d=h(n/2),f=h(s/2),g=h(r/2);switch(o){case"XYZ":this._x=d*c*u+l*f*g,this._y=l*f*u-d*c*g,this._z=l*c*g+d*f*u,this._w=l*c*u-d*f*g;break;case"YXZ":this._x=d*c*u+l*f*g,this._y=l*f*u-d*c*g,this._z=l*c*g-d*f*u,this._w=l*c*u+d*f*g;break;case"ZXY":this._x=d*c*u-l*f*g,this._y=l*f*u+d*c*g,this._z=l*c*g+d*f*u,this._w=l*c*u-d*f*g;break;case"ZYX":this._x=d*c*u-l*f*g,this._y=l*f*u+d*c*g,this._z=l*c*g-d*f*u,this._w=l*c*u+d*f*g;break;case"YZX":this._x=d*c*u+l*f*g,this._y=l*f*u+d*c*g,this._z=l*c*g-d*f*u,this._w=l*c*u-d*f*g;break;case"XZY":this._x=d*c*u-l*f*g,this._y=l*f*u-d*c*g,this._z=l*c*g+d*f*u,this._w=l*c*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],h=e[9],l=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-h)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(c-h)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(h+c)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(h+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,h=e._y,l=e._z,c=e._w;return this._x=n*c+o*a+s*l-r*h,this._y=s*c+o*h+r*a-n*l,this._z=r*c+o*l+n*h-s*a,this._w=o*c-n*a-s*h-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const h=1-a*a;if(h<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(h),c=Math.atan2(l,a),u=Math.sin((1-e)*c)/l,d=Math.sin(e*c)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(t=0,e=0,n=0){E.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,h=t.w,l=2*(o*s-a*n),c=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+h*l+o*u-a*c,this.y=n+h*c+a*l-r*u,this.z=s+h*u+r*c-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,h=e.z;return this.x=s*h-r*a,this.y=r*o-n*h,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ao.copy(this).projectOnVector(t),this.sub(Ao)}reflect(t){return this.sub(Ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new E,tc=new ge;class $t{constructor(t,e,n,s,r,o,a,h,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,h,l)}set(t,e,n,s,r,o,a,h,l){const c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=h,c[6]=n,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],h=n[6],l=n[1],c=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],x=s[1],y=s[4],v=s[7],A=s[2],M=s[5],S=s[8];return r[0]=o*_+a*x+h*A,r[3]=o*m+a*y+h*M,r[6]=o*p+a*v+h*S,r[1]=l*_+c*x+u*A,r[4]=l*m+c*y+u*M,r[7]=l*p+c*v+u*S,r[2]=d*_+f*x+g*A,r[5]=d*m+f*y+g*M,r[8]=d*p+f*v+g*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8];return e*o*c-e*a*l-n*r*c+n*a*h+s*r*l-s*o*h}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8],u=c*o-a*l,d=a*h-c*r,f=l*r-o*h,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-c*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(c*e-s*h)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*h-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const h=Math.cos(r),l=Math.sin(r);return this.set(n*h,n*l,-n*(h*o+l*a)+o+t,-s*l,s*h,-s*(-l*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ro.makeScale(t,e)),this}rotate(t){return this.premultiply(Ro.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ro=new $t;function Fh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function so(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gd(){const i=so("canvas");return i.style.display="block",i}const ec={};function ir(i){i in ec||(ec[i]=!0,console.warn(i))}function Wd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const nc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ic=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xd(){const i={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ce&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ce&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?no:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ir("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ir("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xs]:{primaries:t,whitePoint:n,transfer:no,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:nc,fromXYZ:ic,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}const re=Xd();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class qd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qi===void 0&&(qi=so("canvas")),qi.width=t.width,qi.height=t.height;const s=qi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=so("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Yd=0;class Ml{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Hi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Co(s[o].image)):r.push(Co(s[o]))}else r=Co(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jd=0;const Po=new E;class qe extends Vi{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=Li,s=Li,r=pn,o=Ii,a=Sn,h=bn,l=qe.DEFAULT_ANISOTROPY,c=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Hi(),this.name="",this.source=new Ml(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Po).x}get height(){return this.source.getSize(Po).y}get depth(){return this.source.getSize(Po).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case eo:t.x=t.x-Math.floor(t.x);break;case Li:t.x=t.x<0?0:1;break;case Sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case eo:t.y=t.y-Math.floor(t.y);break;case Li:t.y=t.y<0?0:1;break;case Sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Th;qe.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,s=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const h=t.elements,l=h[0],c=h[4],u=h[8],d=h[1],f=h[5],g=h[9],_=h[2],m=h[6],p=h[10];if(Math.abs(c-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(f+1)/2,A=(p+1)/2,M=(c+d)/4,S=(u+_)/4,R=(g+m)/4;return y>v&&y>A?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=M/n,r=S/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=M/s,r=R/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=S/r,s=R/r),this.set(n,s,r,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-c)*(d-c));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-_)/x,this.z=(d-c)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zd extends Vi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e);const s={width:t,height:e,depth:n.depth},r=new qe(s);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ml(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends Zd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Oh extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zh extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gi{constructor(t=new E(1/0,1/0,1/0),e=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(r,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_r.copy(n.boundingBox)),_r.applyMatrix4(t.matrixWorld),this.union(_r)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),vr.subVectors(this.max,Ls),Yi.subVectors(t.a,Ls),ji.subVectors(t.b,Ls),Zi.subVectors(t.c,Ls),$n.subVectors(ji,Yi),Qn.subVectors(Zi,ji),yi.subVectors(Yi,Zi);let e=[0,-$n.z,$n.y,0,-Qn.z,Qn.y,0,-yi.z,yi.y,$n.z,0,-$n.x,Qn.z,0,-Qn.x,yi.z,0,-yi.x,-$n.y,$n.x,0,-Qn.y,Qn.x,0,-yi.y,yi.x,0];return!Do(e,Yi,ji,Zi,vr)||(e=[1,0,0,0,1,0,0,0,1],!Do(e,Yi,ji,Zi,vr))?!1:(xr.crossVectors($n,Qn),e=[xr.x,xr.y,xr.z],Do(e,Yi,ji,Zi,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const On=[new E,new E,new E,new E,new E,new E,new E,new E],gn=new E,_r=new gi,Yi=new E,ji=new E,Zi=new E,$n=new E,Qn=new E,yi=new E,Ls=new E,vr=new E,xr=new E,Si=new E;function Do(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Si.fromArray(i,r);const a=s.x*Math.abs(Si.x)+s.y*Math.abs(Si.y)+s.z*Math.abs(Si.z),h=t.dot(Si),l=e.dot(Si),c=n.dot(Si);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>a)return!1}return!0}const Kd=new gi,Is=new E,Lo=new E;class As{constructor(t=new E,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Kd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);const e=Is.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(Lo)),this.expandByPoint(Is.copy(t.center).sub(Lo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const zn=new E,Io=new E,Mr=new E,ti=new E,Uo=new E,yr=new E,No=new E;class go{constructor(t=new E,e=new E(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(zn.copy(this.origin).addScaledVector(this.direction,e),zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Io.copy(t).add(e).multiplyScalar(.5),Mr.copy(e).sub(t).normalize(),ti.copy(this.origin).sub(Io);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Mr),a=ti.dot(this.direction),h=-ti.dot(Mr),l=ti.lengthSq(),c=Math.abs(1-o*o);let u,d,f,g;if(c>0)if(u=o*h-a,d=o*a-h,g=r*c,u>=0)if(d>=-g)if(d<=g){const _=1/c;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*h)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*h)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*h)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-h),r),f=-u*u+d*(d+2*h)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-h),r),f=d*(d+2*h)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-h),r),f=-u*u+d*(d+2*h)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Io).addScaledVector(Mr,d),f}intersectSphere(t,e){zn.subVectors(t.center,this.origin);const n=zn.dot(this.direction),s=zn.dot(zn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,h=n+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,h;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),c>=0?(r=(t.min.y-d.y)*c,o=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,o=(t.min.y-d.y)*c),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,h=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,h=(t.min.z-d.z)*u),n>h||a>s)||((a>n||n!==n)&&(n=a),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,zn)!==null}intersectTriangle(t,e,n,s,r){Uo.subVectors(e,t),yr.subVectors(n,t),No.crossVectors(Uo,yr);let o=this.direction.dot(No),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ti.subVectors(this.origin,t);const h=a*this.direction.dot(yr.crossVectors(ti,yr));if(h<0)return null;const l=a*this.direction.dot(Uo.cross(ti));if(l<0||h+l>o)return null;const c=-a*ti.dot(No);return c<0?null:this.at(c/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,o,a,h,l,c,u,d,f,g,_,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,h,l,c,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,h,l,c,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=h,p[2]=l,p[6]=c,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ki.setFromMatrixColumn(t,0).length(),r=1/Ki.setFromMatrixColumn(t,1).length(),o=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),h=Math.cos(s),l=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*c,f=o*u,g=a*c,_=a*u;e[0]=h*c,e[4]=-h*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*h,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*h}else if(t.order==="YXZ"){const d=h*c,f=h*u,g=l*c,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*h}else if(t.order==="ZXY"){const d=h*c,f=h*u,g=l*c,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*c,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){const d=o*c,f=o*u,g=a*c,_=a*u;e[0]=h*c,e[4]=g*l-f,e[8]=d*l+_,e[1]=h*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){const d=o*h,f=o*l,g=a*h,_=a*l;e[0]=h*c,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-l*c,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*h,f=o*l,g=a*h,_=a*l;e[0]=h*c,e[4]=-u,e[8]=l*c,e[1]=d*u+_,e[5]=o*c,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*c,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jd,t,$d)}lookAt(t,e,n){const s=this.elements;return tn.subVectors(t,e),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ei.crossVectors(n,tn),ei.lengthSq()===0&&(Math.abs(n.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ei.crossVectors(n,tn)),ei.normalize(),Sr.crossVectors(tn,ei),s[0]=ei.x,s[4]=Sr.x,s[8]=tn.x,s[1]=ei.y,s[5]=Sr.y,s[9]=tn.y,s[2]=ei.z,s[6]=Sr.z,s[10]=tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],h=n[8],l=n[12],c=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],x=n[3],y=n[7],v=n[11],A=n[15],M=s[0],S=s[4],R=s[8],w=s[12],b=s[1],P=s[5],k=s[9],B=s[13],q=s[2],I=s[6],U=s[10],O=s[14],F=s[3],Y=s[7],J=s[11],D=s[15];return r[0]=o*M+a*b+h*q+l*F,r[4]=o*S+a*P+h*I+l*Y,r[8]=o*R+a*k+h*U+l*J,r[12]=o*w+a*B+h*O+l*D,r[1]=c*M+u*b+d*q+f*F,r[5]=c*S+u*P+d*I+f*Y,r[9]=c*R+u*k+d*U+f*J,r[13]=c*w+u*B+d*O+f*D,r[2]=g*M+_*b+m*q+p*F,r[6]=g*S+_*P+m*I+p*Y,r[10]=g*R+_*k+m*U+p*J,r[14]=g*w+_*B+m*O+p*D,r[3]=x*M+y*b+v*q+A*F,r[7]=x*S+y*P+v*I+A*Y,r[11]=x*R+y*k+v*U+A*J,r[15]=x*w+y*B+v*O+A*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],h=t[9],l=t[13],c=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*h*u-s*l*u-r*a*d+n*l*d+s*a*f-n*h*f)+_*(+e*h*f-e*l*d+r*o*d-s*o*f+s*l*c-r*h*c)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*c-n*l*c)+p*(-s*a*c-e*h*u+e*a*d+s*o*u-n*o*d+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],x=u*m*l-_*d*l+_*h*f-a*m*f-u*h*p+a*d*p,y=g*d*l-c*m*l-g*h*f+o*m*f+c*h*p-o*d*p,v=c*_*l-g*u*l+g*a*f-o*_*f-c*a*p+o*u*p,A=g*u*h-c*_*h-g*a*d+o*_*d+c*a*m-o*u*m,M=e*x+n*y+s*v+r*A;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/M;return t[0]=x*S,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*S,t[2]=(a*m*r-_*h*r+_*s*l-n*m*l-a*s*p+n*h*p)*S,t[3]=(u*h*r-a*d*r-u*s*l+n*d*l+a*s*f-n*h*f)*S,t[4]=y*S,t[5]=(c*m*r-g*d*r+g*s*f-e*m*f-c*s*p+e*d*p)*S,t[6]=(g*h*r-o*m*r-g*s*l+e*m*l+o*s*p-e*h*p)*S,t[7]=(o*d*r-c*h*r+c*s*l-e*d*l-o*s*f+e*h*f)*S,t[8]=v*S,t[9]=(g*u*r-c*_*r-g*n*f+e*_*f+c*n*p-e*u*p)*S,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*S,t[11]=(c*a*r-o*u*r-c*n*l+e*u*l+o*n*f-e*a*f)*S,t[12]=A*S,t[13]=(c*_*s-g*u*s+g*n*d-e*_*d-c*n*m+e*u*m)*S,t[14]=(g*a*s-o*_*s-g*n*h+e*_*h+o*n*m-e*a*m)*S,t[15]=(o*u*s-c*a*s+c*n*h-e*u*h-o*n*d+e*a*d)*S,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,h=t.z,l=r*o,c=r*a;return this.set(l*o+n,l*a-s*h,l*h+s*a,0,l*a+s*h,c*a+n,c*h-s*o,0,l*h-s*a,c*h+s*o,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,h=e._w,l=r+r,c=o+o,u=a+a,d=r*l,f=r*c,g=r*u,_=o*c,m=o*u,p=a*u,x=h*l,y=h*c,v=h*u,A=n.x,M=n.y,S=n.z;return s[0]=(1-(_+p))*A,s[1]=(f+v)*A,s[2]=(g-y)*A,s[3]=0,s[4]=(f-v)*M,s[5]=(1-(d+p))*M,s[6]=(m+x)*M,s[7]=0,s[8]=(g+y)*S,s[9]=(m-x)*S,s[10]=(1-(d+_))*S,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ki.set(s[0],s[1],s[2]).length();const o=Ki.set(s[4],s[5],s[6]).length(),a=Ki.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);const l=1/r,c=1/o,u=1/a;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=c,_n.elements[5]*=c,_n.elements[6]*=c,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Cn,h=!1){const l=this.elements,c=2*r/(e-t),u=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s);let g,_;if(h)g=r/(o-r),_=o*r/(o-r);else if(a===Cn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===io)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Cn,h=!1){const l=this.elements,c=2/(e-t),u=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s);let g,_;if(h)g=1/(o-r),_=o/(o-r);else if(a===Cn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===io)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ki=new E,_n=new se,Jd=new E(0,0,0),$d=new E(1,1,1),ei=new E,Sr=new E,tn=new E,sc=new se,rc=new ge;class Wt{constructor(t=0,e=0,n=0,s=Wt.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],h=s[1],l=s[5],c=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rc.setFromEuler(this),this.setFromQuaternion(rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wt.DEFAULT_ORDER="XYZ";class yl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qd=0;const oc=new E,Ji=new ge,Bn=new se,wr=new E,Us=new E,tf=new E,ef=new ge,ac=new E(1,0,0),lc=new E(0,1,0),cc=new E(0,0,1),hc={type:"added"},nf={type:"removed"},$i={type:"childadded",child:null},Fo={type:"childremoved",child:null};class Le extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new E,e=new Wt,n=new ge,s=new E(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new $t}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(ac,t)}rotateY(t){return this.rotateOnAxis(lc,t)}rotateZ(t){return this.rotateOnAxis(cc,t)}translateOnAxis(t,e){return oc.copy(t).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ac,t)}translateY(t){return this.translateOnAxis(lc,t)}translateZ(t){return this.translateOnAxis(cc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?wr.copy(t):wr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Us,wr,this.up):Bn.lookAt(wr,Us,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Bn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hc),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nf),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hc),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,t,tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,ef,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const u=h[l];r(t.shapes,u)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(r(t.materials,this.material[h]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];s.animations.push(r(t.animations,h))}}if(e){const a=o(t.geometries),h=o(t.materials),l=o(t.textures),c=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const h=[];for(const l in a){const c=a[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Le.DEFAULT_UP=new E(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new E,kn=new E,Oo=new E,Vn=new E,Qi=new E,ts=new E,uc=new E,zo=new E,Bo=new E,ko=new E,Vo=new ae,Ho=new ae,Go=new ae;class yn{constructor(t=new E,e=new E,n=new E){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),kn.subVectors(n,e),Oo.subVectors(t,e);const o=vn.dot(vn),a=vn.dot(kn),h=vn.dot(Oo),l=kn.dot(kn),c=kn.dot(Oo),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*h-a*c)*d,g=(o*c-a*h)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,o,a,h){return this.getBarycoord(t,e,n,s,Vn)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Vn.x),h.addScaledVector(o,Vn.y),h.addScaledVector(a,Vn.z),h)}static getInterpolatedAttribute(t,e,n,s,r,o){return Vo.setScalar(0),Ho.setScalar(0),Go.setScalar(0),Vo.fromBufferAttribute(t,e),Ho.fromBufferAttribute(t,n),Go.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Vo,r.x),o.addScaledVector(Ho,r.y),o.addScaledVector(Go,r.z),o}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),kn.subVectors(t,e),vn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),vn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Qi.subVectors(s,n),ts.subVectors(r,n),zo.subVectors(t,n);const h=Qi.dot(zo),l=ts.dot(zo);if(h<=0&&l<=0)return e.copy(n);Bo.subVectors(t,s);const c=Qi.dot(Bo),u=ts.dot(Bo);if(c>=0&&u<=c)return e.copy(s);const d=h*u-c*l;if(d<=0&&h>=0&&c<=0)return o=h/(h-c),e.copy(n).addScaledVector(Qi,o);ko.subVectors(t,r);const f=Qi.dot(ko),g=ts.dot(ko);if(g>=0&&f<=g)return e.copy(r);const _=f*l-h*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ts,a);const m=c*g-f*u;if(m<=0&&u-c>=0&&f-g>=0)return uc.subVectors(r,s),a=(u-c)/(u-c+(f-g)),e.copy(s).addScaledVector(uc,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Qi,o).addScaledVector(ts,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},br={h:0,s:0,l:0};function Wo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=xl(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Wo(o,r,t+1/3),this.g=Wo(o,r,t),this.b=Wo(o,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=Bh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return re.workingToColorSpace(ke.copy(this),t),Math.round(Kt(ke.r*255,0,255))*65536+Math.round(Kt(ke.g*255,0,255))*256+Math.round(Kt(ke.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(ke.copy(this),e);const n=ke.r,s=ke.g,r=ke.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let h,l;const c=(a+o)/2;if(a===o)h=0,l=0;else{const u=o-a;switch(l=c<=.5?u/(o+a):u/(2-o-a),o){case n:h=(s-r)/u+(s<r?6:0);break;case s:h=(r-n)/u+2;break;case r:h=(n-s)/u+4;break}h/=6}return t.h=h,t.s=l,t.l=c,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=nn){re.workingToColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,s=ke.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ni),this.setHSL(ni.h+t,ni.s+e,ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ni),t.getHSL(br);const n=Ys(ni.h,br.h,e),s=Ys(ni.s,br.s,e),r=Ys(ni.l,br.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Pt;Pt.NAMES=Bh;let sf=0;class _i extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=ps,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ua,this.blendDst=da,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xi,this.stencilZFail=Xi,this.stencilZPass=Xi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ps&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ua&&(n.blendSrc=this.blendSrc),this.blendDst!==da&&(n.blendDst=this.blendDst),this.blendEquation!==Pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Xi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Xi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const h=r[a];delete h.metadata,o.push(h)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class hr extends _i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ie=new E,Er=new ct;let rf=0;class Ae{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Er.fromBufferAttribute(this,e),Er.applyMatrix3(t),this.setXY(e,Er.x,Er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=cs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Jl&&(t.usage=this.usage),t}}class kh extends Ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Vh extends Ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class xt extends Ae{constructor(t,e,n){super(new Float32Array(t),e,n)}}let of=0;const un=new se,Xo=new Le,es=new E,en=new gi,Ns=new gi,Oe=new E;class qt extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fh(t)?Vh:kh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new As);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(t){const n=this.boundingSphere.center;if(en.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Ns.setFromBufferAttribute(a),this.morphTargetsRelative?(Oe.addVectors(en.min,Ns.min),en.expandByPoint(Oe),Oe.addVectors(en.max,Ns.max),en.expandByPoint(Oe)):(en.expandByPoint(Ns.min),en.expandByPoint(Ns.max))}en.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],h=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)Oe.fromBufferAttribute(a,l),h&&(es.fromBufferAttribute(t,l),Oe.add(es)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ae(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],h=[];for(let R=0;R<n.count;R++)a[R]=new E,h[R]=new E;const l=new E,c=new E,u=new E,d=new ct,f=new ct,g=new ct,_=new E,m=new E;function p(R,w,b){l.fromBufferAttribute(n,R),c.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,R),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,b),c.sub(l),u.sub(l),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(c,-g.x).multiplyScalar(P),a[R].add(_),a[w].add(_),a[b].add(_),h[R].add(m),h[w].add(m),h[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let R=0,w=x.length;R<w;++R){const b=x[R],P=b.start,k=b.count;for(let B=P,q=P+k;B<q;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new E,v=new E,A=new E,M=new E;function S(R){A.fromBufferAttribute(s,R),M.copy(A);const w=a[R];y.copy(w),y.sub(A.multiplyScalar(A.dot(w))).normalize(),v.crossVectors(M,w);const P=v.dot(h[R])<0?-1:1;o.setXYZW(R,y.x,y.y,y.z,P)}for(let R=0,w=x.length;R<w;++R){const b=x[R],P=b.start,k=b.count;for(let B=P,q=P+k;B<q;B+=3)S(t.getX(B+0)),S(t.getX(B+1)),S(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new E,r=new E,o=new E,a=new E,h=new E,l=new E,c=new E,u=new E;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),a.fromBufferAttribute(n,g),h.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(c),h.add(c),l.add(c),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),c.subVectors(o,r),u.subVectors(s,r),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(a,h){const l=a.array,c=a.itemSize,u=a.normalized,d=new l.constructor(h.length*c);let f=0,g=0;for(let _=0,m=h.length;_<m;_++){a.isInterleavedBufferAttribute?f=h[_]*a.data.stride+a.offset:f=h[_]*c;for(let p=0;p<c;p++)d[g++]=l[f++]}return new Ae(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qt,n=this.index.array,s=this.attributes;for(const a in s){const h=s[a],l=t(h,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const h=[],l=r[a];for(let c=0,u=l.length;c<u;c++){const d=l[c],f=t(d,n);h.push(f)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const l=n[h];t.data.attributes[h]=l.toJSON(t.data)}const s={};let r=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];c.push(f.toJSON(t.data))}c.length>0&&(s[h]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const s=t.attributes;for(const l in s){const c=s[l];this.setAttribute(l,c.clone(e))}const r=t.morphAttributes;for(const l in r){const c=[],u=r[l];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new se,wi=new go,Tr=new As,fc=new E,Ar=new E,Rr=new E,Cr=new E,qo=new E,Pr=new E,pc=new E,Dr=new E;class te extends Le{constructor(t=new qt,e=new hr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Pr.set(0,0,0);for(let h=0,l=r.length;h<l;h++){const c=a[h],u=r[h];c!==0&&(qo.fromBufferAttribute(u,t),o?Pr.addScaledVector(qo,c):Pr.addScaledVector(qo.sub(e),c))}e.add(Pr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(Tr.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Tr,fc)===null||wi.origin.distanceToSquared(fc)>(t.far-t.near)**2))&&(dc.copy(r).invert(),wi.copy(t.ray).applyMatrix4(dc),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,h=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,A=y;v<A;v+=3){const M=a.getX(v),S=a.getX(v+1),R=a.getX(v+2);s=Lr(this,p,t,n,l,c,u,M,S,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);s=Lr(this,o,t,n,l,c,u,x,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(h.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,A=y;v<A;v+=3){const M=v,S=v+1,R=v+2;s=Lr(this,p,t,n,l,c,u,M,S,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(h.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,v=m+2;s=Lr(this,o,t,n,l,c,u,x,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function af(i,t,e,n,s,r,o,a){let h;if(t.side===ze?h=n.intersectTriangle(o,r,s,!0,a):h=n.intersectTriangle(s,r,o,t.side===Zn,a),h===null)return null;Dr.copy(a),Dr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Dr);return l<e.near||l>e.far?null:{distance:l,point:Dr.clone(),object:i}}function Lr(i,t,e,n,s,r,o,a,h,l){i.getVertexPosition(a,Ar),i.getVertexPosition(h,Rr),i.getVertexPosition(l,Cr);const c=af(i,t,e,n,Ar,Rr,Cr,pc);if(c){const u=new E;yn.getBarycoord(pc,Ar,Rr,Cr,u),s&&(c.uv=yn.getInterpolatedAttribute(s,a,h,l,u,new ct)),r&&(c.uv1=yn.getInterpolatedAttribute(r,a,h,l,u,new ct)),o&&(c.normal=yn.getInterpolatedAttribute(o,a,h,l,u,new E),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:h,c:l,normal:new E,materialIndex:0};yn.getNormal(Ar,Rr,Cr,d.normal),c.face=d,c.barycoord=u}return c}class In extends qt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const h=[],l=[],c=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(u,2));function g(_,m,p,x,y,v,A,M,S,R,w){const b=v/S,P=A/R,k=v/2,B=A/2,q=M/2,I=S+1,U=R+1;let O=0,F=0;const Y=new E;for(let J=0;J<U;J++){const D=J*P-B;for(let G=0;G<I;G++){const it=G*b-k;Y[_]=it*x,Y[m]=D*y,Y[p]=q,l.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[p]=M>0?1:-1,c.push(Y.x,Y.y,Y.z),u.push(G/S),u.push(1-J/R),O+=1}}for(let J=0;J<R;J++)for(let D=0;D<S;D++){const G=d+D+I*J,it=d+D+I*(J+1),W=d+(D+1)+I*(J+1),Q=d+(D+1)+I*J;h.push(G,it,Q),h.push(it,W,Q),F+=6}a.addGroup(f,F,w),f+=F,d+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new In(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Xe(i){const t={};for(let e=0;e<i.length;e++){const n=Ms(i[e]);for(const s in n)t[s]=n[s]}return t}function lf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Hh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}const sr={clone:Ms,merge:Xe};var cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class De extends _i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cf,this.fragmentShader=hf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=lf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Gh extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ii=new E,mc=new ct,gc=new ct;class sn extends Gh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,mc,gc),e.subVectors(gc,mc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/h,e-=o.offsetY*n/l,s*=o.width/h,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ns=-90,is=1;class uf extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new sn(ns,is,t,e);s.layers=this.layers,this.add(s);const r=new sn(ns,is,t,e);r.layers=this.layers,this.add(r);const o=new sn(ns,is,t,e);o.layers=this.layers,this.add(o);const a=new sn(ns,is,t,e);a.layers=this.layers,this.add(a);const h=new sn(ns,is,t,e);h.layers=this.layers,this.add(h);const l=new sn(ns,is,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,h]=e;for(const l of e)this.remove(l);if(t===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===io)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,h,l,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,h),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wh extends qe{constructor(t=[],e=_s,n,s,r,o,a,h,l,c){super(t,e,n,s,r,o,a,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class df extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Wh(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new In(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:Ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ze,blending:Gn});r.uniforms.tEquirect.value=e;const o=new te(s,r),a=e.minFilter;return e.minFilter===Ii&&(e.minFilter=pn),new uf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}class ee extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ff={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ff)))}return a!==null&&(a.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Sl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new Sl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xh extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wt,this.environmentIntensity=1,this.environmentRotation=new Wt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class pf extends qe{constructor(t=null,e=1,n=1,s,r,o,a,h,l=an,c=an,u,d){super(null,o,a,h,l,c,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ja extends Ae{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ss=new se,_c=new se,Ir=[],vc=new gi,mf=new se,Fs=new te,Os=new As;class _o extends te{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ja(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,mf)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new gi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),vc.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(vc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new As),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Os.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Fs.geometry=this.geometry,Fs.material=this.material,Fs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Os.copy(this.boundingSphere),Os.applyMatrix4(n),t.ray.intersectsSphere(Os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ss),_c.multiplyMatrices(n,ss),Fs.matrixWorld=_c,Fs.raycast(t,Ir);for(let o=0,a=Ir.length;o<a;o++){const h=Ir[o];h.instanceId=r,h.object=this,e.push(h)}Ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ja(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new pf(new Float32Array(s*this.count),s,this.count,po,Rn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,h=s*t;r[h]=a,r.set(n,h+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const jo=new E,gf=new E,_f=new $t;class oi{constructor(t=new E(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=jo.subVectors(n,e).cross(gf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(jo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||_f.getNormalMatrix(t),s=this.coplanarPoint(jo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new As,vf=new ct(.5,.5),Ur=new E;class wl{constructor(t=new oi,e=new oi,n=new oi,s=new oi,r=new oi,o=new oi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Cn,n=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],h=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],x=r[12],y=r[13],v=r[14],A=r[15];if(s[0].setComponents(l-o,f-c,p-g,A-x).normalize(),s[1].setComponents(l+o,f+c,p+g,A+x).normalize(),s[2].setComponents(l+a,f+u,p+_,A+y).normalize(),s[3].setComponents(l-a,f-u,p-_,A-y).normalize(),n)s[4].setComponents(h,d,m,v).normalize(),s[5].setComponents(l-h,f-d,p-m,A-v).normalize();else if(s[4].setComponents(l-h,f-d,p-m,A-v).normalize(),e===Cn)s[5].setComponents(l+h,f+d,p+m,A+v).normalize();else if(e===io)s[5].setComponents(h,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){bi.center.set(0,0,0);const e=vf.distanceTo(t.center);return bi.radius=.7071067811865476+e,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Ur.x=s.normal.x>0?t.max.x:t.min.x,Ur.y=s.normal.y>0?t.max.y:t.min.y,Ur.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ur)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xf extends _i{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const xc=new se,$a=new go,Nr=new As,Fr=new E;class qh extends Le{constructor(t=new qt,e=new xf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Nr.radius+=r,t.ray.intersectsSphere(Nr)===!1)return;xc.copy(s).invert(),$a.copy(t.ray).applyMatrix4(xc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);Fr.fromBufferAttribute(u,m),Mc(Fr,m,h,s,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,_=f;g<_;g++)Fr.fromBufferAttribute(u,g),Mc(Fr,g,h,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Mc(i,t,e,n,s,r,o){const a=$a.distanceSqToPoint(i);if(a<e){const h=new E;$a.closestPointToPoint(i,h),h.applyMatrix4(n);const l=s.ray.origin.distanceTo(h);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:h,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Yh extends qe{constructor(t,e,n=zi,s,r,o,a=an,h=an,l,c=tr,u=1){if(c!==tr&&c!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,s,r,o,a,h,c,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ml(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class jh extends qe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class bl extends qt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],h=[],l=new E,c=new ct;o.push(0,0,0),a.push(0,0,1),h.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),c.x=(o[d]/t+1)/2,c.y=(o[d+1]/t+1)/2,h.push(c.x,c.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(a,3)),this.setAttribute("uv",new xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bl(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Ke extends qt{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:h};const l=this;s=Math.floor(s),r=Math.floor(r);const c=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(f,2));function x(){const v=new E,A=new E;let M=0;const S=(e-t)/n;for(let R=0;R<=r;R++){const w=[],b=R/r,P=b*(e-t)+t;for(let k=0;k<=s;k++){const B=k/s,q=B*h+a,I=Math.sin(q),U=Math.cos(q);A.x=P*I,A.y=-b*n+m,A.z=P*U,u.push(A.x,A.y,A.z),v.set(I,S,U).normalize(),d.push(v.x,v.y,v.z),f.push(B,1-b),w.push(g++)}_.push(w)}for(let R=0;R<s;R++)for(let w=0;w<r;w++){const b=_[w][R],P=_[w+1][R],k=_[w+1][R+1],B=_[w][R+1];(t>0||w!==0)&&(c.push(b,P,B),M+=3),(e>0||w!==r-1)&&(c.push(P,k,B),M+=3)}l.addGroup(p,M,0),p+=M}function y(v){const A=g,M=new ct,S=new E;let R=0;const w=v===!0?t:e,b=v===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const P=g;for(let k=0;k<=s;k++){const q=k/s*h+a,I=Math.cos(q),U=Math.sin(q);S.x=w*U,S.y=m*b,S.z=w*I,u.push(S.x,S.y,S.z),d.push(0,b,0),M.x=I*.5+.5,M.y=U*.5*b+.5,f.push(M.x,M.y),g++}for(let k=0;k<s;k++){const B=A+k,q=P+k;v===!0?c.push(q,q+1,B):c.push(q+1,q,B),R+=3}l.addGroup(p,R,v===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bi extends Ke{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Bi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class El extends qt{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),c(),this.setAttribute("position",new xt(r,3)),this.setAttribute("normal",new xt(r.slice(),3)),this.setAttribute("uv",new xt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(x){const y=new E,v=new E,A=new E;for(let M=0;M<e.length;M+=3)f(e[M+0],y),f(e[M+1],v),f(e[M+2],A),h(y,v,A,x)}function h(x,y,v,A){const M=A+1,S=[];for(let R=0;R<=M;R++){S[R]=[];const w=x.clone().lerp(v,R/M),b=y.clone().lerp(v,R/M),P=M-R;for(let k=0;k<=P;k++)k===0&&R===M?S[R][k]=w:S[R][k]=w.clone().lerp(b,k/P)}for(let R=0;R<M;R++)for(let w=0;w<2*(M-R)-1;w++){const b=Math.floor(w/2);w%2===0?(d(S[R][b+1]),d(S[R+1][b]),d(S[R][b])):(d(S[R][b+1]),d(S[R+1][b+1]),d(S[R+1][b]))}}function l(x){const y=new E;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(x),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function c(){const x=new E;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const v=m(x)/2/Math.PI+.5,A=p(x)/Math.PI+.5;o.push(v,1-A)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){const y=o[x+0],v=o[x+2],A=o[x+4],M=Math.max(y,v,A),S=Math.min(y,v,A);M>.9&&S<.1&&(y<.2&&(o[x+0]+=1),v<.2&&(o[x+2]+=1),A<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function f(x,y){const v=x*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const x=new E,y=new E,v=new E,A=new E,M=new ct,S=new ct,R=new ct;for(let w=0,b=0;w<r.length;w+=9,b+=6){x.set(r[w+0],r[w+1],r[w+2]),y.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),M.set(o[b+0],o[b+1]),S.set(o[b+2],o[b+3]),R.set(o[b+4],o[b+5]),A.copy(x).add(y).add(v).divideScalar(3);const P=m(A);_(M,b+0,x,P),_(S,b+2,y,P),_(R,b+4,v,P)}}function _(x,y,v,A){A<0&&x.x===1&&(o[y]=x.x-1),v.x===0&&v.z===0&&(o[y]=A/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new El(t.vertices,t.indices,t.radius,t.details)}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,h=r-1,l;for(;a<=h;)if(s=Math.floor(a+(h-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)h=s-1;else{h=s;break}if(s=h,n[s]===o)return s/(r-1);const c=n[s],d=n[s+1]-c,f=(o-c)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),h=e||(o.isVector2?new ct:new E);return h.copy(a).sub(o).normalize(),h}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new E,s=[],r=[],o=[],a=new E,h=new se;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new E)}r[0]=new E,o[0]=new E;let l=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);c<=l&&(l=c,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(h.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Kt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(h.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Tl extends Un{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=h}getPoint(t,e=new ct){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let h=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=h-this.aX,f=l-this.aY;h=d*c-f*u+this.aX,l=d*u+f*c+this.aY}return n.set(h,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Mf extends Tl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Al(){let i=0,t=0,e=0,n=0;function s(r,o,a,h){i=r,t=a,e=-3*r+3*o-2*a-h,n=2*r-2*o+a+h}return{initCatmullRom:function(r,o,a,h,l){s(o,a,l*(a-r),l*(h-o))},initNonuniformCatmullRom:function(r,o,a,h,l,c,u){let d=(o-r)/l-(a-r)/(l+c)+(a-o)/c,f=(a-o)/c-(h-o)/(c+u)+(h-a)/u;d*=c,f*=c,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const Or=new E,Zo=new Al,Ko=new Al,Jo=new Al;class pi extends Un{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new E){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),h=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:h===0&&a===r-1&&(a=r-2,h=1);let l,c;this.closed||a>0?l=s[(a-1)%r]:(Or.subVectors(s[0],s[1]).add(s[0]),l=Or);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(Or.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Or),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(c),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Zo.initNonuniformCatmullRom(l.x,u.x,d.x,c.x,g,_,m),Ko.initNonuniformCatmullRom(l.y,u.y,d.y,c.y,g,_,m),Jo.initNonuniformCatmullRom(l.z,u.z,d.z,c.z,g,_,m)}else this.curveType==="catmullrom"&&(Zo.initCatmullRom(l.x,u.x,d.x,c.x,this.tension),Ko.initCatmullRom(l.y,u.y,d.y,c.y,this.tension),Jo.initCatmullRom(l.z,u.z,d.z,c.z,this.tension));return n.set(Zo.calc(h),Ko.calc(h),Jo.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new E().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function yc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,h=i*a;return(2*e-2*n+r+o)*h+(-3*e+3*n-2*r-o)*a+r*i+e}function yf(i,t){const e=1-i;return e*e*t}function Sf(i,t){return 2*(1-i)*i*t}function wf(i,t){return i*i*t}function js(i,t,e,n){return yf(i,t)+Sf(i,e)+wf(i,n)}function bf(i,t){const e=1-i;return e*e*e*t}function Ef(i,t){const e=1-i;return 3*e*e*i*t}function Tf(i,t){return 3*(1-i)*i*i*t}function Af(i,t){return i*i*i*t}function Zs(i,t,e,n,s){return bf(i,t)+Ef(i,e)+Tf(i,n)+Af(i,s)}class Zh extends Un{constructor(t=new ct,e=new ct,n=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(t,s.x,r.x,o.x,a.x),Zs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Kh extends Un{constructor(t=new E,e=new E,n=new E,s=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new E){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zs(t,s.x,r.x,o.x,a.x),Zs(t,s.y,r.y,o.y,a.y),Zs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Jh extends Un{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Rf extends Un{constructor(t=new E,e=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new E){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new E){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class $h extends Un{constructor(t=new ct,e=new ct,n=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ct){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(js(t,s.x,r.x,o.x),js(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qh extends Un{constructor(t=new E,e=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new E){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(js(t,s.x,r.x,o.x),js(t,s.y,r.y,o.y),js(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tu extends Un{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,h=s[o===0?o:o-1],l=s[o],c=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(yc(a,h.x,l.x,c.x,u.x),yc(a,h.y,l.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ct().fromArray(s))}return this}}var ro=Object.freeze({__proto__:null,ArcCurve:Mf,CatmullRomCurve3:pi,CubicBezierCurve:Zh,CubicBezierCurve3:Kh,EllipseCurve:Tl,LineCurve:Jh,LineCurve3:Rf,QuadraticBezierCurve:$h,QuadraticBezierCurve3:Qh,SplineCurve:tu});class Cf extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ro[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],h=a.getLength(),l=h===0?0:1-o/h;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,h=o.getPoints(a);for(let l=0;l<h.length;l++){const c=h[l];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new ro[s.type]().fromJSON(s))}return this}}class Qa extends Cf{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Jh(this.currentPoint.clone(),new ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new $h(this.currentPoint.clone(),new ct(t,e),new ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Zh(this.currentPoint.clone(),new ct(t,e),new ct(n,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new tu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+a,e+h,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,h){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,s,r,o,a,h),this}absellipse(t,e,n,s,r,o,a,h){const l=new Tl(t,e,n,s,r,o,a,h);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Je extends Qa{constructor(t){super(t),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Qa().fromJSON(s))}return this}}function Pf(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=eu(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,h,l;if(n&&(r=Nf(i,t,r,e)),i.length>80*e){a=1/0,h=1/0;let c=-1/0,u=-1/0;for(let d=e;d<s;d+=e){const f=i[d],g=i[d+1];f<a&&(a=f),g<h&&(h=g),f>c&&(c=f),g>u&&(u=g)}l=Math.max(c-a,u-h),l=l!==0?32767/l:0}return rr(r,o,e,a,h,l,0),o}function eu(i,t,e,n,s){let r;if(s===qf(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Sc(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Sc(o/n|0,i[o],i[o+1],r);return r&&ys(r,r.next)&&(ar(r),r=r.next),r}function ki(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ys(e,e.next)||Te(e.prev,e,e.next)===0)){if(ar(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function rr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&kf(i,n,s,r);let a=i;for(;i.prev!==i.next;){const h=i.prev,l=i.next;if(r?Lf(i,n,s,r):Df(i)){t.push(h.i,i.i,l.i),ar(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=If(ki(i),t),rr(i,t,e,n,s,r,2)):o===2&&Uf(i,t,e,n,s,r):rr(ki(i),t,e,n,s,r,1);break}}}function Df(i){const t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,h=e.y,l=n.y,c=Math.min(s,r,o),u=Math.min(a,h,l),d=Math.max(s,r,o),f=Math.max(a,h,l);let g=n.next;for(;g!==t;){if(g.x>=c&&g.x<=d&&g.y>=u&&g.y<=f&&Ws(s,a,r,h,o,l,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lf(i,t,e,n){const s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;const a=s.x,h=r.x,l=o.x,c=s.y,u=r.y,d=o.y,f=Math.min(a,h,l),g=Math.min(c,u,d),_=Math.max(a,h,l),m=Math.max(c,u,d),p=tl(f,g,t,e,n),x=tl(_,m,t,e,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=x;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ws(a,c,h,u,l,d,y.x,y.y)&&Te(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ws(a,c,h,u,l,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Ws(a,c,h,u,l,d,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Ws(a,c,h,u,l,d,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function If(i,t){let e=i;do{const n=e.prev,s=e.next.next;!ys(n,s)&&iu(n,e,e.next,s)&&or(n,s)&&or(s,n)&&(t.push(n.i,e.i,s.i),ar(e),ar(e.next),e=i=s),e=e.next}while(e!==i);return ki(e)}function Uf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Gf(o,a)){let h=su(o,a);o=ki(o,o.next),h=ki(h,h.next),rr(o,t,e,n,s,r,0),rr(h,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Nf(i,t,e,n){const s=[];for(let r=0,o=t.length;r<o;r++){const a=t[r]*n,h=r<o-1?t[r+1]*n:i.length,l=eu(i,a,h,n,!1);l===l.next&&(l.steiner=!0),s.push(Hf(l))}s.sort(Ff);for(let r=0;r<s.length;r++)e=Of(s[r],e);return e}function Ff(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Of(i,t){const e=zf(i,t);if(!e)return t;const n=su(e,i);return ki(n,n.next),ki(e,e.next)}function zf(i,t){let e=t;const n=i.x,s=i.y;let r=-1/0,o;if(ys(i,e))return e;do{if(ys(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const u=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>r&&(r=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;const a=o,h=o.x,l=o.y;let c=1/0;e=o;do{if(n>=e.x&&e.x>=h&&n!==e.x&&nu(s<l?n:r,s,h,l,s<l?r:n,s,e.x,e.y)){const u=Math.abs(s-e.y)/(n-e.x);or(e,i)&&(u<c||u===c&&(e.x>o.x||e.x===o.x&&Bf(o,e)))&&(o=e,c=u)}e=e.next}while(e!==a);return o}function Bf(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function kf(i,t,e,n){let s=i;do s.z===0&&(s.z=tl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Vf(s)}function Vf(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let h=e;for(;a>0||h>0&&o;)a!==0&&(h===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,h--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function tl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Hf(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function nu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Ws(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&nu(i,t,e,n,s,r,o,a)}function Gf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Wf(i,t)&&(or(i,t)&&or(t,i)&&Xf(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||ys(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ys(i,t){return i.x===t.x&&i.y===t.y}function iu(i,t,e,n){const s=Br(Te(i,t,e)),r=Br(Te(i,t,n)),o=Br(Te(e,n,i)),a=Br(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&zr(i,e,t)||r===0&&zr(i,n,t)||o===0&&zr(e,i,n)||a===0&&zr(e,t,n))}function zr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Br(i){return i>0?1:i<0?-1:0}function Wf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&iu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function or(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function Xf(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function su(i,t){const e=el(i.i,i.x,i.y),n=el(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Sc(i,t,e,n){const s=el(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ar(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function el(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qf(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Yf{static triangulate(t,e,n=2){return Pf(t,e,n)}}class us{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return us.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];wc(t),bc(n,t);let o=t.length;e.forEach(wc);for(let h=0;h<e.length;h++)s.push(o),o+=e[h].length,bc(n,e[h]);const a=Yf.triangulate(n,s);for(let h=0;h<a.length;h+=3)r.push(a.slice(h,h+3));return r}}function wc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function bc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Gi extends qt{constructor(t=new Je([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,h=t.length;a<h;a++){const l=t[a];o(l)}this.setAttribute("position",new xt(s,3)),this.setAttribute("uv",new xt(r,2)),this.computeVertexNormals();function o(a){const h=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:jf;let y,v=!1,A,M,S,R;p&&(y=p.getSpacedPoints(c),v=!0,d=!1,A=p.computeFrenetFrames(c,!1),M=new E,S=new E,R=new E),d||(m=0,f=0,g=0,_=0);const w=a.extractPoints(l);let b=w.shape;const P=w.holes;if(!us.isClockWise(b)){b=b.reverse();for(let lt=0,rt=P.length;lt<rt;lt++){const ot=P[lt];us.isClockWise(ot)&&(P[lt]=ot.reverse())}}function B(lt){const ot=10000000000000001e-36;let at=lt[0];for(let St=1;St<=lt.length;St++){const ft=St%lt.length,Mt=lt[ft],Vt=Mt.x-at.x,Yt=Mt.y-at.y,L=Vt*Vt+Yt*Yt,T=Math.max(Math.abs(Mt.x),Math.abs(Mt.y),Math.abs(at.x),Math.abs(at.y)),K=ot*T*T;if(L<=K){lt.splice(ft,1),St--;continue}at=Mt}}B(b),P.forEach(B);const q=P.length,I=b;for(let lt=0;lt<q;lt++){const rt=P[lt];b=b.concat(rt)}function U(lt,rt,ot){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),lt.clone().addScaledVector(rt,ot)}const O=b.length;function F(lt,rt,ot){let at,St,ft;const Mt=lt.x-rt.x,Vt=lt.y-rt.y,Yt=ot.x-lt.x,L=ot.y-lt.y,T=Mt*Mt+Vt*Vt,K=Mt*L-Vt*Yt;if(Math.abs(K)>Number.EPSILON){const nt=Math.sqrt(T),ut=Math.sqrt(Yt*Yt+L*L),st=rt.x-Vt/nt,Nt=rt.y+Mt/nt,yt=ot.x-L/ut,Lt=ot.y+Yt/ut,It=((yt-st)*L-(Lt-Nt)*Yt)/(Mt*L-Vt*Yt);at=st+Mt*It-lt.x,St=Nt+Vt*It-lt.y;const mt=at*at+St*St;if(mt<=2)return new ct(at,St);ft=Math.sqrt(mt/2)}else{let nt=!1;Mt>Number.EPSILON?Yt>Number.EPSILON&&(nt=!0):Mt<-Number.EPSILON?Yt<-Number.EPSILON&&(nt=!0):Math.sign(Vt)===Math.sign(L)&&(nt=!0),nt?(at=-Vt,St=Mt,ft=Math.sqrt(T)):(at=Mt,St=Vt,ft=Math.sqrt(T/2))}return new ct(at/ft,St/ft)}const Y=[];for(let lt=0,rt=I.length,ot=rt-1,at=lt+1;lt<rt;lt++,ot++,at++)ot===rt&&(ot=0),at===rt&&(at=0),Y[lt]=F(I[lt],I[ot],I[at]);const J=[];let D,G=Y.concat();for(let lt=0,rt=q;lt<rt;lt++){const ot=P[lt];D=[];for(let at=0,St=ot.length,ft=St-1,Mt=at+1;at<St;at++,ft++,Mt++)ft===St&&(ft=0),Mt===St&&(Mt=0),D[at]=F(ot[at],ot[ft],ot[Mt]);J.push(D),G=G.concat(D)}let it;if(m===0)it=us.triangulateShape(I,P);else{const lt=[],rt=[];for(let ot=0;ot<m;ot++){const at=ot/m,St=f*Math.cos(at*Math.PI/2),ft=g*Math.sin(at*Math.PI/2)+_;for(let Mt=0,Vt=I.length;Mt<Vt;Mt++){const Yt=U(I[Mt],Y[Mt],ft);pt(Yt.x,Yt.y,-St),at===0&&lt.push(Yt)}for(let Mt=0,Vt=q;Mt<Vt;Mt++){const Yt=P[Mt];D=J[Mt];const L=[];for(let T=0,K=Yt.length;T<K;T++){const nt=U(Yt[T],D[T],ft);pt(nt.x,nt.y,-St),at===0&&L.push(nt)}at===0&&rt.push(L)}}it=us.triangulateShape(lt,rt)}const W=it.length,Q=g+_;for(let lt=0;lt<O;lt++){const rt=d?U(b[lt],G[lt],Q):b[lt];v?(S.copy(A.normals[0]).multiplyScalar(rt.x),M.copy(A.binormals[0]).multiplyScalar(rt.y),R.copy(y[0]).add(S).add(M),pt(R.x,R.y,R.z)):pt(rt.x,rt.y,0)}for(let lt=1;lt<=c;lt++)for(let rt=0;rt<O;rt++){const ot=d?U(b[rt],G[rt],Q):b[rt];v?(S.copy(A.normals[lt]).multiplyScalar(ot.x),M.copy(A.binormals[lt]).multiplyScalar(ot.y),R.copy(y[lt]).add(S).add(M),pt(R.x,R.y,R.z)):pt(ot.x,ot.y,u/c*lt)}for(let lt=m-1;lt>=0;lt--){const rt=lt/m,ot=f*Math.cos(rt*Math.PI/2),at=g*Math.sin(rt*Math.PI/2)+_;for(let St=0,ft=I.length;St<ft;St++){const Mt=U(I[St],Y[St],at);pt(Mt.x,Mt.y,u+ot)}for(let St=0,ft=P.length;St<ft;St++){const Mt=P[St];D=J[St];for(let Vt=0,Yt=Mt.length;Vt<Yt;Vt++){const L=U(Mt[Vt],D[Vt],at);v?pt(L.x,L.y+y[c-1].y,y[c-1].x+ot):pt(L.x,L.y,u+ot)}}}H(),N();function H(){const lt=s.length/3;if(d){let rt=0,ot=O*rt;for(let at=0;at<W;at++){const St=it[at];dt(St[2]+ot,St[1]+ot,St[0]+ot)}rt=c+m*2,ot=O*rt;for(let at=0;at<W;at++){const St=it[at];dt(St[0]+ot,St[1]+ot,St[2]+ot)}}else{for(let rt=0;rt<W;rt++){const ot=it[rt];dt(ot[2],ot[1],ot[0])}for(let rt=0;rt<W;rt++){const ot=it[rt];dt(ot[0]+O*c,ot[1]+O*c,ot[2]+O*c)}}n.addGroup(lt,s.length/3-lt,0)}function N(){const lt=s.length/3;let rt=0;$(I,rt),rt+=I.length;for(let ot=0,at=P.length;ot<at;ot++){const St=P[ot];$(St,rt),rt+=St.length}n.addGroup(lt,s.length/3-lt,1)}function $(lt,rt){let ot=lt.length;for(;--ot>=0;){const at=ot;let St=ot-1;St<0&&(St=lt.length-1);for(let ft=0,Mt=c+m*2;ft<Mt;ft++){const Vt=O*ft,Yt=O*(ft+1),L=rt+at+Vt,T=rt+St+Vt,K=rt+St+Yt,nt=rt+at+Yt;Ft(L,T,K,nt)}}}function pt(lt,rt,ot){h.push(lt),h.push(rt),h.push(ot)}function dt(lt,rt,ot){Bt(lt),Bt(rt),Bt(ot);const at=s.length/3,St=x.generateTopUV(n,s,at-3,at-2,at-1);z(St[0]),z(St[1]),z(St[2])}function Ft(lt,rt,ot,at){Bt(lt),Bt(rt),Bt(at),Bt(rt),Bt(ot),Bt(at);const St=s.length/3,ft=x.generateSideWallUV(n,s,St-6,St-3,St-2,St-1);z(ft[0]),z(ft[1]),z(ft[3]),z(ft[1]),z(ft[2]),z(ft[3])}function Bt(lt){s.push(h[lt*3+0]),s.push(h[lt*3+1]),s.push(h[lt*3+2])}function z(lt){r.push(lt.x),r.push(lt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zf(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new ro[s.type]().fromJSON(s)),new Gi(n,t.options)}}const jf={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],h=t[n*3+1],l=t[s*3],c=t[s*3+1];return[new ct(r,o),new ct(a,h),new ct(l,c)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],h=t[e*3+2],l=t[n*3],c=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-c)<Math.abs(o-l)?[new ct(o,1-h),new ct(l,1-u),new ct(d,1-g),new ct(_,1-p)]:[new ct(a,1-h),new ct(c,1-u),new ct(f,1-g),new ct(m,1-p)]}};function Zf(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Rl extends qt{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Kt(s,0,Math.PI*2);const r=[],o=[],a=[],h=[],l=[],c=1/e,u=new E,d=new ct,f=new E,g=new E,_=new E;let m=0,p=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),h.push(f.x,f.y,f.z);break;case t.length-1:h.push(_.x,_.y,_.z);break;default:m=t[x+1].x-t[x].x,p=t[x+1].y-t[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),h.push(f.x,f.y,f.z),_.copy(g)}for(let x=0;x<=e;x++){const y=n+x*c*s,v=Math.sin(y),A=Math.cos(y);for(let M=0;M<=t.length-1;M++){u.x=t[M].x*v,u.y=t[M].y,u.z=t[M].x*A,o.push(u.x,u.y,u.z),d.x=x/e,d.y=M/(t.length-1),a.push(d.x,d.y);const S=h[3*M+0]*v,R=h[3*M+1],w=h[3*M+0]*A;l.push(S,R,w)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){const v=y+x*t.length,A=v,M=v+t.length,S=v+t.length+1,R=v+1;r.push(A,M,R),r.push(S,R,M)}this.setIndex(r),this.setAttribute("position",new xt(o,3)),this.setAttribute("uv",new xt(a,2)),this.setAttribute("normal",new xt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rl(t.points,t.segments,t.phiStart,t.phiLength)}}class Fi extends qt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),h=Math.floor(s),l=a+1,c=h+1,u=t/a,d=e/h,f=[],g=[],_=[],m=[];for(let p=0;p<c;p++){const x=p*d-o;for(let y=0;y<l;y++){const v=y*u-r;g.push(v,-x,0),_.push(0,0,1),m.push(y/a),m.push(1-p/h)}}for(let p=0;p<h;p++)for(let x=0;x<a;x++){const y=x+l*p,v=x+l*(p+1),A=x+1+l*(p+1),M=x+1+l*p;f.push(y,v,M),f.push(v,A,M)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.width,t.height,t.widthSegments,t.heightSegments)}}class Se extends qt{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(o+a,Math.PI);let l=0;const c=[],u=new E,d=new E,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&h===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){const M=A/e;u.x=-t*Math.cos(s+M*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(s+M*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(M+v,1-y),x.push(l++)}c.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=c[p][x+1],v=c[p][x],A=c[p+1][x],M=c[p+1][x+1];(p!==0||o>0)&&f.push(y,v,M),(p!==n-1||h<Math.PI)&&f.push(v,A,M)}this.setIndex(f),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(_,3)),this.setAttribute("uv",new xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Se(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class oo extends El{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oo(t.radius,t.detail)}}class Dn extends qt{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],h=[],l=[],c=new E,u=new E,d=new E;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),c.x=t*Math.cos(_),c.y=t*Math.sin(_),d.subVectors(u,c).normalize(),h.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,x=(s+1)*f+g;o.push(_,m,x),o.push(m,p,x)}this.setIndex(o),this.setAttribute("position",new xt(a,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ss extends qt{constructor(t=new Qh(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new E,h=new E,l=new ct;let c=new E;const u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new xt(u,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(f,2));function _(){for(let y=0;y<e;y++)m(y);m(r===!1?e:0),x(),p()}function m(y){c=t.getPointAt(y/e,c);const v=o.normals[y],A=o.binormals[y];for(let M=0;M<=s;M++){const S=M/s*Math.PI*2,R=Math.sin(S),w=-Math.cos(S);h.x=w*v.x+R*A.x,h.y=w*v.y+R*A.y,h.z=w*v.z+R*A.z,h.normalize(),d.push(h.x,h.y,h.z),a.x=c.x+n*h.x,a.y=c.y+n*h.y,a.z=c.z+n*h.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){const A=(s+1)*(y-1)+(v-1),M=(s+1)*y+(v-1),S=(s+1)*y+v,R=(s+1)*(y-1)+v;g.push(A,M,R),g.push(M,S,R)}}function x(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)l.x=y/e,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Ss(new ro[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Kf extends De{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ne extends _i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mo,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Jf extends ne{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class $f extends _i{constructor(t){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mo,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}class Qf extends _i{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mo,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wt,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ru extends _i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_d,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tp extends _i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Cl extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class ep extends Cl{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $o=new se,Ec=new E,Tc=new E;class ou{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wl,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ec.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ec),Tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Tc),e.updateMatrixWorld(),$o.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($o,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($o)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ac=new se,zs=new E,Qo=new E;class np extends ou{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new ae(2,1,1,1),new ae(0,1,1,1),new ae(3,1,1,1),new ae(1,1,1,1),new ae(3,0,1,1),new ae(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zs.setFromMatrixPosition(t.matrixWorld),n.position.copy(zs),Qo.copy(n.position),Qo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Qo),n.updateMatrixWorld(),s.makeTranslation(-zs.x,-zs.y,-zs.z),Ac.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac,n.coordinateSystem,n.reversedDepth)}}class au extends Cl{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new np}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Pl extends Gh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,h=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=c*this.view.offsetY,h=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ip extends ou{constructor(){super(new Pl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sp extends Cl{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new ip}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rp extends sn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class op{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const Rc=new se;class lr{constructor(t,e,n=0,s=1/0){this.ray=new go(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new yl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Rc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rc),this}intersectObject(t,e=!0,n=[]){return nl(t,this,n,e),n.sort(Cc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)nl(t[s],this,n,e);return n.sort(Cc),n}}function Cc(i,t){return i.distance-t.distance}function nl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)nl(r[o],t,e,!0)}}class Pc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class ap extends Vi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Dc(i,t,e,n){const s=lp(n);switch(e){case Dh:return i*t;case po:return i*t/s.components*s.byteLength;case gl:return i*t/s.components*s.byteLength;case Ih:return i*t*2/s.components*s.byteLength;case _l:return i*t*2/s.components*s.byteLength;case Lh:return i*t*3/s.components*s.byteLength;case Sn:return i*t*4/s.components*s.byteLength;case vl:return i*t*4/s.components*s.byteLength;case Yr:case jr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Zr:case Kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:case Ta:return Math.max(i,16)*Math.max(t,8)/4;case wa:case Ea:return Math.max(i,8)*Math.max(t,8)/2;case Aa:case Ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case La:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ua:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Na:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case za:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ba:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ka:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Va:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ha:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ga:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Wa:case Xa:case qa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ya:case ja:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Za:case Ka:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lp(i){switch(i){case bn:case Ah:return{byteLength:1,components:1};case $s:case Rh:case Pn:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case zi:case fl:case Rn:return{byteLength:4,components:1};case Ch:case Ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hl);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lu(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cp(i){const t=new WeakMap;function e(a,h){const l=a.array,c=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(h,d),i.bufferData(h,l,c),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,h,l){const c=h.array,u=h.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,c);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const h=t.get(a);h&&(i.deleteBuffer(h.buffer),t.delete(a))}function o(a,h){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,h));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,h),l.version=a.version}}return{get:s,remove:r,update:o}}var hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,up=`#ifdef USE_ALPHAHASH
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
#endif`,dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gp=`#ifdef USE_AOMAP
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
#endif`,_p=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vp=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wp=`#ifdef USE_IRIDESCENCE
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
#endif`,bp=`#ifdef USE_BUMPMAP
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ip=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Up=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Np=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wp=`#ifdef USE_ENVMAP
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
#endif`,Xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jp=`#ifdef USE_GRADIENTMAP
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
}`,$p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,e0=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,n0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,i0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,r0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,a0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,l0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,c0=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x0=`#if defined( USE_POINTS_UV )
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
#endif`,M0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,y0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,E0=`#ifdef USE_MORPHTARGETS
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
#endif`,T0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,R0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,C0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L0=`#ifdef USE_NORMALMAP
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
#endif`,I0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,B0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,G0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,W0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,j0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,K0=`#ifdef USE_SKINNING
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
#endif`,J0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,Q0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,gm=`#if DEPTH_PACKING == 3200
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
}`,_m=`#define DISTANCE
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
}`,vm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ym=`uniform float scale;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,bm=`uniform vec3 diffuse;
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
}`,Em=`#define LAMBERT
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
}`,Tm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Am=`#define MATCAP
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
}`,Rm=`#define MATCAP
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
}`,Cm=`#define NORMAL
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
}`,Pm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dm=`#define PHONG
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
}`,Lm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Im=`#define STANDARD
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
}`,Um=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Nm=`#define TOON
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
}`,Fm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Om=`uniform float size;
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
}`,zm=`uniform vec3 diffuse;
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
}`,Bm=`#include <common>
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
}`,km=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Vm=`uniform float rotation;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:hp,alphahash_pars_fragment:up,alphamap_fragment:dp,alphamap_pars_fragment:fp,alphatest_fragment:pp,alphatest_pars_fragment:mp,aomap_fragment:gp,aomap_pars_fragment:_p,batching_pars_vertex:vp,batching_vertex:xp,begin_vertex:Mp,beginnormal_vertex:yp,bsdfs:Sp,iridescence_fragment:wp,bumpmap_pars_fragment:bp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:Tp,clipping_planes_pars_vertex:Ap,clipping_planes_vertex:Rp,color_fragment:Cp,color_pars_fragment:Pp,color_pars_vertex:Dp,color_vertex:Lp,common:Ip,cube_uv_reflection_fragment:Up,defaultnormal_vertex:Np,displacementmap_pars_vertex:Fp,displacementmap_vertex:Op,emissivemap_fragment:zp,emissivemap_pars_fragment:Bp,colorspace_fragment:kp,colorspace_pars_fragment:Vp,envmap_fragment:Hp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Wp,envmap_pars_vertex:Xp,envmap_physical_pars_fragment:n0,envmap_vertex:qp,fog_vertex:Yp,fog_pars_vertex:jp,fog_fragment:Zp,fog_pars_fragment:Kp,gradientmap_pars_fragment:Jp,lightmap_pars_fragment:$p,lights_lambert_fragment:Qp,lights_lambert_pars_fragment:t0,lights_pars_begin:e0,lights_toon_fragment:i0,lights_toon_pars_fragment:s0,lights_phong_fragment:r0,lights_phong_pars_fragment:o0,lights_physical_fragment:a0,lights_physical_pars_fragment:l0,lights_fragment_begin:c0,lights_fragment_maps:h0,lights_fragment_end:u0,logdepthbuf_fragment:d0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:p0,logdepthbuf_vertex:m0,map_fragment:g0,map_pars_fragment:_0,map_particle_fragment:v0,map_particle_pars_fragment:x0,metalnessmap_fragment:M0,metalnessmap_pars_fragment:y0,morphinstance_vertex:S0,morphcolor_vertex:w0,morphnormal_vertex:b0,morphtarget_pars_vertex:E0,morphtarget_vertex:T0,normal_fragment_begin:A0,normal_fragment_maps:R0,normal_pars_fragment:C0,normal_pars_vertex:P0,normal_vertex:D0,normalmap_pars_fragment:L0,clearcoat_normal_fragment_begin:I0,clearcoat_normal_fragment_maps:U0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:F0,opaque_fragment:O0,packing:z0,premultiplied_alpha_fragment:B0,project_vertex:k0,dithering_fragment:V0,dithering_pars_fragment:H0,roughnessmap_fragment:G0,roughnessmap_pars_fragment:W0,shadowmap_pars_fragment:X0,shadowmap_pars_vertex:q0,shadowmap_vertex:Y0,shadowmask_pars_fragment:j0,skinbase_vertex:Z0,skinning_pars_vertex:K0,skinning_vertex:J0,skinnormal_vertex:$0,specularmap_fragment:Q0,specularmap_pars_fragment:tm,tonemapping_fragment:em,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:om,uv_vertex:am,worldpos_vertex:lm,background_vert:cm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:dm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:gm,distanceRGBA_vert:_m,distanceRGBA_frag:vm,equirect_vert:xm,equirect_frag:Mm,linedashed_vert:ym,linedashed_frag:Sm,meshbasic_vert:wm,meshbasic_frag:bm,meshlambert_vert:Em,meshlambert_frag:Tm,meshmatcap_vert:Am,meshmatcap_frag:Rm,meshnormal_vert:Cm,meshnormal_frag:Pm,meshphong_vert:Dm,meshphong_frag:Lm,meshphysical_vert:Im,meshphysical_frag:Um,meshtoon_vert:Nm,meshtoon_frag:Fm,points_vert:Om,points_frag:zm,shadow_vert:Bm,shadow_frag:km,sprite_vert:Vm,sprite_frag:Hm},bt={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},An={basic:{uniforms:Xe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:Xe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:Xe([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:Xe([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:Xe([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:Xe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:Xe([bt.points,bt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:Xe([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:Xe([bt.common,bt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:Xe([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:Xe([bt.sprite,bt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:Xe([bt.common,bt.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:Xe([bt.lights,bt.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};An.physical={uniforms:Xe([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const kr={r:0,b:0,g:0},Ei=new Wt,Gm=new se;function Wm(i,t,e,n,s,r,o){const a=new Pt(0);let h=r===!0?0:1,l,c,u=null,d=0,f=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const A=g(y);A===null?p(a,h):A&&A.isColor&&(p(A,1),v=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,v){const A=g(v);A&&(A.isCubeTexture||A.mapping===fo)?(c===void 0&&(c=new te(new In(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:Ms(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),Ei.copy(v.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(Ei)),c.material.toneMapped=re.getTransfer(A.colorSpace)!==ce,(u!==A||d!==A.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new te(new Fi(2,2),new De({name:"BackgroundMaterial",uniforms:Ms(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=re.getTransfer(A.colorSpace)!==ce,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||d!==A.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=A,d=A.version,f=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function p(y,v){y.getRGB(kr,Hh(i)),n.buffers.color.setClear(kr.r,kr.g,kr.b,v,o)}function x(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),h=v,p(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(y){h=y,p(a,h)},render:_,addToRenderList:m,dispose:x}}function Xm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(b,P,k,B,q){let I=!1;const U=u(B,k,P);r!==U&&(r=U,l(r.object)),I=f(b,B,k,q),I&&g(b,B,k,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,v(b,P,k,B),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function h(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function c(b){return i.deleteVertexArray(b)}function u(b,P,k){const B=k.wireframe===!0;let q=n[b.id];q===void 0&&(q={},n[b.id]=q);let I=q[P.id];I===void 0&&(I={},q[P.id]=I);let U=I[B];return U===void 0&&(U=d(h()),I[B]=U),U}function d(b){const P=[],k=[],B=[];for(let q=0;q<e;q++)P[q]=0,k[q]=0,B[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:B,object:b,attributes:{},index:null}}function f(b,P,k,B){const q=r.attributes,I=P.attributes;let U=0;const O=k.getAttributes();for(const F in O)if(O[F].location>=0){const J=q[F];let D=I[F];if(D===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(D=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(D=b.instanceColor)),J===void 0||J.attribute!==D||D&&J.data!==D.data)return!0;U++}return r.attributesNum!==U||r.index!==B}function g(b,P,k,B){const q={},I=P.attributes;let U=0;const O=k.getAttributes();for(const F in O)if(O[F].location>=0){let J=I[F];J===void 0&&(F==="instanceMatrix"&&b.instanceMatrix&&(J=b.instanceMatrix),F==="instanceColor"&&b.instanceColor&&(J=b.instanceColor));const D={};D.attribute=J,J&&J.data&&(D.data=J.data),q[F]=D,U++}r.attributes=q,r.attributesNum=U,r.index=B}function _(){const b=r.newAttributes;for(let P=0,k=b.length;P<k;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const k=r.newAttributes,B=r.enabledAttributes,q=r.attributeDivisors;k[b]=1,B[b]===0&&(i.enableVertexAttribArray(b),B[b]=1),q[b]!==P&&(i.vertexAttribDivisor(b,P),q[b]=P)}function x(){const b=r.newAttributes,P=r.enabledAttributes;for(let k=0,B=P.length;k<B;k++)P[k]!==b[k]&&(i.disableVertexAttribArray(k),P[k]=0)}function y(b,P,k,B,q,I,U){U===!0?i.vertexAttribIPointer(b,P,k,q,I):i.vertexAttribPointer(b,P,k,B,q,I)}function v(b,P,k,B){_();const q=B.attributes,I=k.getAttributes(),U=P.defaultAttributeValues;for(const O in I){const F=I[O];if(F.location>=0){let Y=q[O];if(Y===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(Y=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(Y=b.instanceColor)),Y!==void 0){const J=Y.normalized,D=Y.itemSize,G=t.get(Y);if(G===void 0)continue;const it=G.buffer,W=G.type,Q=G.bytesPerElement,H=W===i.INT||W===i.UNSIGNED_INT||Y.gpuType===fl;if(Y.isInterleavedBufferAttribute){const N=Y.data,$=N.stride,pt=Y.offset;if(N.isInstancedInterleavedBuffer){for(let dt=0;dt<F.locationSize;dt++)p(F.location+dt,N.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let dt=0;dt<F.locationSize;dt++)m(F.location+dt);i.bindBuffer(i.ARRAY_BUFFER,it);for(let dt=0;dt<F.locationSize;dt++)y(F.location+dt,D/F.locationSize,W,J,$*Q,(pt+D/F.locationSize*dt)*Q,H)}else{if(Y.isInstancedBufferAttribute){for(let N=0;N<F.locationSize;N++)p(F.location+N,Y.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let N=0;N<F.locationSize;N++)m(F.location+N);i.bindBuffer(i.ARRAY_BUFFER,it);for(let N=0;N<F.locationSize;N++)y(F.location+N,D/F.locationSize,W,J,D*Q,D/F.locationSize*N*Q,H)}}else if(U!==void 0){const J=U[O];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(F.location,J);break;case 3:i.vertexAttrib3fv(F.location,J);break;case 4:i.vertexAttrib4fv(F.location,J);break;default:i.vertexAttrib1fv(F.location,J)}}}}x()}function A(){R();for(const b in n){const P=n[b];for(const k in P){const B=P[k];for(const q in B)c(B[q].object),delete B[q];delete P[k]}delete n[b]}}function M(b){if(n[b.id]===void 0)return;const P=n[b.id];for(const k in P){const B=P[k];for(const q in B)c(B[q].object),delete B[q];delete P[k]}delete n[b.id]}function S(b){for(const P in n){const k=n[P];if(k[b.id]===void 0)continue;const B=k[b.id];for(const q in B)c(B[q].object),delete B[q];delete k[b.id]}}function R(){w(),o=!0,r!==s&&(r=s,l(r.object))}function w(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:M,releaseStatesOfProgram:S,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function qm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let g=0;g<u;g++)f+=c[g];e.update(f,n,1)}function h(l,c,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],c[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,c,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=c[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=h}function Ym(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==Sn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){const R=S===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==bn&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Rn&&!R)}function h(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const c=h(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:M}}function jm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new oi,a=new $t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?c(null):l();else{const x=r?0:n,y=x*4;let v=p.clippingState||null;h.value=v,v=c(g,d,y,f);for(let A=0;A!==y;++A)v[A]=e[A];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=h.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}h.value=m,h.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Zm(i){let t=new WeakMap;function e(o,a){return a===Ma?o.mapping=_s:a===ya&&(o.mapping=vs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ma||a===ya)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const l=new df(h.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ds=4,Lc=[.125,.215,.35,.446,.526,.582],Di=20,ta=new Pl,Ic=new Pt;let ea=null,na=0,ia=0,sa=!1;const Ri=(1+Math.sqrt(5))/2,rs=1/Ri,Uc=[new E(-Ri,rs,0),new E(Ri,rs,0),new E(-rs,0,Ri),new E(rs,0,Ri),new E(0,Ri,-rs),new E(0,Ri,rs),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)],Km=new E;class il{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){const{size:o=256,position:a=Km}=r;ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(t,n,s,h,a),e>0&&this._blur(h,0,0,e),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ea,na,ia),this._renderer.xr.enabled=sa,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ea=this._renderer.getRenderTarget(),na=this._renderer.getActiveCubeFace(),ia=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Pn,format:Sn,colorSpace:xs,depthBuffer:!1},s=Nc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jm(r)),this._blurMaterial=$m(r,t,e)}return s}_compileMaterial(t){const e=new te(this._lodPlanes[0],t);this._renderer.compile(e,ta)}_sceneToCubeUV(t,e,n,s,r){const h=new sn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Ic),u.toneMapping=ci,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));const _=new hr({name:"PMREM.Background",side:ze,depthWrite:!1,depthTest:!1}),m=new te(new In,_);let p=!1;const x=t.background;x?x.isColor&&(_.color.copy(x),t.background=null,p=!0):(_.color.copy(Ic),p=!0);for(let y=0;y<6;y++){const v=y%3;v===0?(h.up.set(0,l[y],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x+c[y],r.y,r.z)):v===1?(h.up.set(0,0,l[y]),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y+c[y],r.z)):(h.up.set(0,l[y],0),h.position.set(r.x,r.y,r.z),h.lookAt(r.x,r.y,r.z+c[y]));const A=this._cubeSize;Vr(s,v*A,y>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,h),u.render(t,h)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=x}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===_s||t.mapping===vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new te(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const h=this._cubeSize;Vr(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(o,ta)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Uc[(s-r-1)%Uc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const h=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new te(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Di-1),_=r/g,m=isFinite(r)?1+Math.floor(c*_):Di;m>Di&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);const p=[];let x=0;for(let S=0;S<Di;++S){const R=S/_,w=Math.exp(-R*R/2);p.push(w),S===0?x+=w:S<m&&(x+=2*w)}for(let S=0;S<p.length;S++)p[S]=p[S]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const v=this._sizeLods[s],A=3*v*(s>y-ds?s-y+ds:0),M=4*(this._cubeSize-v);Vr(e,A,M,3*v,2*v),h.setRenderTarget(e),h.render(u,ta)}}function Jm(i){const t=[],e=[],n=[];let s=i;const r=i-ds+1+Lc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let h=1/a;o>i-ds?h=Lc[o-i+ds-1]:o===0&&(h=0),n.push(h);const l=1/(a-2),c=-l,u=1+l,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let M=0;M<f;M++){const S=M%3*2/3-1,R=M>2?0:-1,w=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];x.set(w,_*g*M),y.set(d,m*g*M);const b=[M,M,M,M,M,M];v.set(b,p*g*M)}const A=new qt;A.setAttribute("position",new Ae(x,_)),A.setAttribute("uv",new Ae(y,m)),A.setAttribute("faceIndex",new Ae(v,p)),t.push(A),s>ds&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Nc(i,t,e){const n=new mn(i,t,e);return n.texture.mapping=fo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $m(i,t,e){const n=new Float32Array(Di),s=new E(0,1,0);return new De({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Fc(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Oc(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Dl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const h=a.mapping,l=h===Ma||h===ya,c=h===_s||h===vs;if(l||c){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new il(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||c&&f&&s(f)?(e===null&&(e=new il(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let h=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&h++;return h===l}function r(a){const h=a.target;h.removeEventListener("dispose",r);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function tg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ir("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function eg(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function h(u){const d=u.attributes;for(const f in d)t.update(d[f],i.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,v=x.length;y<v;y+=3){const A=x[y+0],M=x[y+1],S=x[y+2];d.push(A,M,M,S,S,A)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const A=y+0,M=y+1,S=y+2;d.push(A,M,M,S,S,A)}}else return;const m=new(Fh(d)?Vh:kh)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function c(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:h,getWireframeAttribute:c}}function ng(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function h(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function c(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x]*_[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=h,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function ig(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function sg(i,t,e){const n=new WeakMap,s=new ae;function r(o,a,h){const l=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let b=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let A=a.attributes.position.count*v,M=1;A>t.maxTextureSize&&(M=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const S=new Float32Array(A*M*4*u),R=new Oh(S,A,M,u);R.type=Rn,R.needsUpdate=!0;const w=v*4;for(let P=0;P<u;P++){const k=p[P],B=x[P],q=y[P],I=A*M*4*P;for(let U=0;U<k.count;U++){const O=U*w;g===!0&&(s.fromBufferAttribute(k,U),S[I+O+0]=s.x,S[I+O+1]=s.y,S[I+O+2]=s.z,S[I+O+3]=0),_===!0&&(s.fromBufferAttribute(B,U),S[I+O+4]=s.x,S[I+O+5]=s.y,S[I+O+6]=s.z,S[I+O+7]=0),m===!0&&(s.fromBufferAttribute(q,U),S[I+O+8]=s.x,S[I+O+9]=s.y,S[I+O+10]=s.z,S[I+O+11]=q.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new ct(A,M)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;h.getUniforms().setValue(i,"morphTargetBaseInfluence",_),h.getUniforms().setValue(i,"morphTargetInfluences",l)}h.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function rg(i,t,e,n){let s=new WeakMap;function r(h){const l=n.render.frame,c=h.geometry,u=t.get(h,c);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),s.get(h)!==l&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,l))),h.isSkinnedMesh){const d=h.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(h){const l=h.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const cu=new qe,zc=new Yh(1,1),hu=new Oh,uu=new zh,du=new Wh,Bc=[],kc=[],Vc=new Float32Array(16),Hc=new Float32Array(9),Gc=new Float32Array(4);function Rs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Bc[s];if(r===void 0&&(r=new Float32Array(s),Bc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function vo(i,t){let e=kc[t];e===void 0&&(e=new Int32Array(t),kc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function og(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ag(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function lg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function cg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function hg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Gc.set(n),i.uniformMatrix2fv(this.addr,!1,Gc),Fe(e,n)}}function ug(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Hc.set(n),i.uniformMatrix3fv(this.addr,!1,Hc),Fe(e,n)}}function dg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Ne(e,n))return;Vc.set(n),i.uniformMatrix4fv(this.addr,!1,Vc),Fe(e,n)}}function fg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function gg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function _g(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function xg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function yg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zc.compareFunction=Nh,r=zc):r=cu,e.setTexture2D(t||r,s)}function Sg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||uu,s)}function wg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||du,s)}function bg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||hu,s)}function Eg(i){switch(i){case 5126:return og;case 35664:return ag;case 35665:return lg;case 35666:return cg;case 35674:return hg;case 35675:return ug;case 35676:return dg;case 5124:case 35670:return fg;case 35667:case 35671:return pg;case 35668:case 35672:return mg;case 35669:case 35673:return gg;case 5125:return _g;case 36294:return vg;case 36295:return xg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return yg;case 35679:case 36299:case 36307:return Sg;case 35680:case 36300:case 36308:case 36293:return wg;case 36289:case 36303:case 36311:case 36292:return bg}}function Tg(i,t){i.uniform1fv(this.addr,t)}function Ag(i,t){const e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function Rg(i,t){const e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function Cg(i,t){const e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function Pg(i,t){const e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Dg(i,t){const e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Lg(i,t){const e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ig(i,t){i.uniform1iv(this.addr,t)}function Ug(i,t){i.uniform2iv(this.addr,t)}function Ng(i,t){i.uniform3iv(this.addr,t)}function Fg(i,t){i.uniform4iv(this.addr,t)}function Og(i,t){i.uniform1uiv(this.addr,t)}function zg(i,t){i.uniform2uiv(this.addr,t)}function Bg(i,t){i.uniform3uiv(this.addr,t)}function kg(i,t){i.uniform4uiv(this.addr,t)}function Vg(i,t,e){const n=this.cache,s=t.length,r=vo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||cu,r[o])}function Hg(i,t,e){const n=this.cache,s=t.length,r=vo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uu,r[o])}function Gg(i,t,e){const n=this.cache,s=t.length,r=vo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||du,r[o])}function Wg(i,t,e){const n=this.cache,s=t.length,r=vo(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||hu,r[o])}function Xg(i){switch(i){case 5126:return Tg;case 35664:return Ag;case 35665:return Rg;case 35666:return Cg;case 35674:return Pg;case 35675:return Dg;case 35676:return Lg;case 5124:case 35670:return Ig;case 35667:case 35671:return Ug;case 35668:case 35672:return Ng;case 35669:case 35673:return Fg;case 5125:return Og;case 36294:return zg;case 36295:return Bg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Wg}}class qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Eg(e.type)}}class Yg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Xg(e.type)}}class jg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ra=/(\w+)(\])?(\[|\.)?/g;function Wc(i,t){i.seq.push(t),i.map[t.id]=t}function Zg(i,t,e){const n=i.name,s=n.length;for(ra.lastIndex=0;;){const r=ra.exec(n),o=ra.lastIndex;let a=r[1];const h=r[2]==="]",l=r[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===s){Wc(e,l===void 0?new qg(a,i,t):new Yg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new jg(a),Wc(e,u)),e=u}}}class Jr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Zg(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],h=n[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Xc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Kg=37297;let Jg=0;function $g(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const qc=new $t;function Qg(i){re._getMatrix(qc,re.workingColorSpace,i);const t=`mat3( ${qc.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case no:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+$g(i.getShaderSource(t),a)}else return r}function t_(i,t){const e=Qg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function e_(i,t){let e;switch(t){case Mh:e="Linear";break;case yh:e="Reinhard";break;case Sh:e="Cineon";break;case dl:e="ACESFilmic";break;case bh:e="AgX";break;case Eh:e="Neutral";break;case wh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Hr=new E;function n_(){re.getLuminanceCoefficients(Hr);const i=Hr.x.toFixed(4),t=Hr.y.toFixed(4),e=Hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function s_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function r_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Xs(i){return i!==""}function jc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const o_=/^[ \t]*#include +<([\w\d./]+)>/gm;function sl(i){return i.replace(o_,l_)}const a_=new Map;function l_(i,t){let e=Qt[t];if(e===void 0){const n=a_.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return sl(e)}const c_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(i){return i.replace(c_,h_)}function h_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Jc(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function u_(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===vh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Hn&&(t="SHADOWMAP_TYPE_VSM"),t}function d_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _s:case vs:t="ENVMAP_TYPE_CUBE";break;case fo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function f_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function p_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case pd:t="ENVMAP_BLENDING_MIX";break;case md:t="ENVMAP_BLENDING_ADD";break}return t}function m_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function g_(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const h=u_(e),l=d_(e),c=f_(e),u=p_(e),d=m_(e),f=i_(e),g=s_(r),_=s.createProgram();let m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),p.length>0&&(p+=`
`)):(m=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),p=[Jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ci?"#define TONE_MAPPING":"",e.toneMapping!==ci?Qt.tonemapping_pars_fragment:"",e.toneMapping!==ci?e_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,t_("linearToOutputTexel",e.outputColorSpace),n_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),o=sl(o),o=jc(o,e),o=Zc(o,e),a=sl(a),a=jc(a,e),a=Zc(a,e),o=Kc(o),a=Kc(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+o,v=x+p+a,A=Xc(s,s.VERTEX_SHADER,y),M=Xc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,A),s.attachShader(_,M),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function S(P){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_)||"",B=s.getShaderInfoLog(A)||"",q=s.getShaderInfoLog(M)||"",I=k.trim(),U=B.trim(),O=q.trim();let F=!0,Y=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,M);else{const J=Yc(s,A,"vertex"),D=Yc(s,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+J+`
`+D)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||O==="")&&(Y=!1);Y&&(P.diagnostics={runnable:F,programLog:I,vertexShader:{log:U,prefix:m},fragmentShader:{log:O,prefix:p}})}s.deleteShader(A),s.deleteShader(M),R=new Jr(s,_),w=r_(s,_)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(_,Kg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=M,this}let __=0;class v_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new x_(t),e.set(t,n)),n}}class x_{constructor(t){this.id=__++,this.code=t,this.usedTimes=0}}function M_(i,t,e,n,s,r,o){const a=new yl,h=new v_,l=new Set,c=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,b,P,k,B){const q=k.fog,I=B.geometry,U=w.isMeshStandardMaterial?k.environment:null,O=(w.isMeshStandardMaterial?e:t).get(w.envMap||U),F=O&&O.mapping===fo?O.image.height:null,Y=g[w.type];w.precision!==null&&(f=s.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const J=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,D=J!==void 0?J.length:0;let G=0;I.morphAttributes.position!==void 0&&(G=1),I.morphAttributes.normal!==void 0&&(G=2),I.morphAttributes.color!==void 0&&(G=3);let it,W,Q,H;if(Y){const le=An[Y];it=le.vertexShader,W=le.fragmentShader}else it=w.vertexShader,W=w.fragmentShader,h.update(w),Q=h.getVertexShaderID(w),H=h.getFragmentShaderID(w);const N=i.getRenderTarget(),$=i.state.buffers.depth.getReversed(),pt=B.isInstancedMesh===!0,dt=B.isBatchedMesh===!0,Ft=!!w.map,Bt=!!w.matcap,z=!!O,lt=!!w.aoMap,rt=!!w.lightMap,ot=!!w.bumpMap,at=!!w.normalMap,St=!!w.displacementMap,ft=!!w.emissiveMap,Mt=!!w.metalnessMap,Vt=!!w.roughnessMap,Yt=w.anisotropy>0,L=w.clearcoat>0,T=w.dispersion>0,K=w.iridescence>0,nt=w.sheen>0,ut=w.transmission>0,st=Yt&&!!w.anisotropyMap,Nt=L&&!!w.clearcoatMap,yt=L&&!!w.clearcoatNormalMap,Lt=L&&!!w.clearcoatRoughnessMap,It=K&&!!w.iridescenceMap,mt=K&&!!w.iridescenceThicknessMap,At=nt&&!!w.sheenColorMap,Gt=nt&&!!w.sheenRoughnessMap,Ot=!!w.specularMap,Et=!!w.specularColorMap,Jt=!!w.specularIntensityMap,X=ut&&!!w.transmissionMap,vt=ut&&!!w.thicknessMap,wt=!!w.gradientMap,Ct=!!w.alphaMap,gt=w.alphaTest>0,ht=!!w.alphaHash,Ut=!!w.extensions;let Zt=ci;w.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Zt=i.toneMapping);const _e={shaderID:Y,shaderType:w.type,shaderName:w.name,vertexShader:it,fragmentShader:W,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:H,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:dt,batchingColor:dt&&B._colorsTexture!==null,instancing:pt,instancingColor:pt&&B.instanceColor!==null,instancingMorph:pt&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?i.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:xs,alphaToCoverage:!!w.alphaToCoverage,map:Ft,matcap:Bt,envMap:z,envMapMode:z&&O.mapping,envMapCubeUVHeight:F,aoMap:lt,lightMap:rt,bumpMap:ot,normalMap:at,displacementMap:d&&St,emissiveMap:ft,normalMapObjectSpace:at&&w.normalMapType===vd,normalMapTangentSpace:at&&w.normalMapType===mo,metalnessMap:Mt,roughnessMap:Vt,anisotropy:Yt,anisotropyMap:st,clearcoat:L,clearcoatMap:Nt,clearcoatNormalMap:yt,clearcoatRoughnessMap:Lt,dispersion:T,iridescence:K,iridescenceMap:It,iridescenceThicknessMap:mt,sheen:nt,sheenColorMap:At,sheenRoughnessMap:Gt,specularMap:Ot,specularColorMap:Et,specularIntensityMap:Jt,transmission:ut,transmissionMap:X,thicknessMap:vt,gradientMap:wt,opaque:w.transparent===!1&&w.blending===ps&&w.alphaToCoverage===!1,alphaMap:Ct,alphaTest:gt,alphaHash:ht,combine:w.combine,mapUv:Ft&&_(w.map.channel),aoMapUv:lt&&_(w.aoMap.channel),lightMapUv:rt&&_(w.lightMap.channel),bumpMapUv:ot&&_(w.bumpMap.channel),normalMapUv:at&&_(w.normalMap.channel),displacementMapUv:St&&_(w.displacementMap.channel),emissiveMapUv:ft&&_(w.emissiveMap.channel),metalnessMapUv:Mt&&_(w.metalnessMap.channel),roughnessMapUv:Vt&&_(w.roughnessMap.channel),anisotropyMapUv:st&&_(w.anisotropyMap.channel),clearcoatMapUv:Nt&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:yt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Lt&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:At&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:Gt&&_(w.sheenRoughnessMap.channel),specularMapUv:Ot&&_(w.specularMap.channel),specularColorMapUv:Et&&_(w.specularColorMap.channel),specularIntensityMapUv:Jt&&_(w.specularIntensityMap.channel),transmissionMapUv:X&&_(w.transmissionMap.channel),thicknessMapUv:vt&&_(w.thicknessMap.channel),alphaMapUv:Ct&&_(w.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(at||Yt),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!I.attributes.uv&&(Ft||Ct),fog:!!q,useFog:w.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:$,skinning:B.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:G,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Ft&&w.map.isVideoTexture===!0&&re.getTransfer(w.map.colorSpace)===ce,decodeVideoTextureEmissive:ft&&w.emissiveMap.isVideoTexture===!0&&re.getTransfer(w.emissiveMap.colorSpace)===ce,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===xe,flipSided:w.side===ze,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ut&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&w.extensions.multiDraw===!0||dt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return _e.vertexUv1s=l.has(1),_e.vertexUv2s=l.has(2),_e.vertexUv3s=l.has(3),l.clear(),_e}function p(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)b.push(P),b.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(x(b,w),y(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function x(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function y(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),b.gradientMap&&a.enable(22),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const b=g[w.type];let P;if(b){const k=An[b];P=sr.clone(k.uniforms)}else P=w.uniforms;return P}function A(w,b){let P;for(let k=0,B=c.length;k<B;k++){const q=c[k];if(q.cacheKey===b){P=q,++P.usedTimes;break}}return P===void 0&&(P=new g_(i,b,w,r),c.push(P)),P}function M(w){if(--w.usedTimes===0){const b=c.indexOf(w);c[b]=c[c.length-1],c.pop(),w.destroy()}}function S(w){h.remove(w)}function R(){h.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:M,releaseShaderCache:S,programs:c,dispose:R}}function y_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,h){i.get(o)[a]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function S_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function $c(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function h(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||S_),n.length>1&&n.sort(d||$c),s.length>1&&s.sort(d||$c)}function c(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:h,finish:c,sort:l}}function w_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Qc,i.set(n,[o])):s>=r.length?(o=new Qc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function b_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new E,color:new Pt};break;case"SpotLight":e={position:new E,direction:new E,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new E,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new E,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new E,halfWidth:new E,halfHeight:new E};break}return i[t.id]=e,e}}}function E_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let T_=0;function A_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function R_(i){const t=new b_,e=E_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new E);const s=new E,r=new se,o=new se;function a(l){let c=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,y=0,v=0,A=0,M=0,S=0;l.sort(A_);for(let w=0,b=l.length;w<b;w++){const P=l[w],k=P.color,B=P.intensity,q=P.distance,I=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=k.r*B,u+=k.g*B,d+=k.b*B;else if(P.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(P.sh.coefficients[U],B);S++}else if(P.isDirectionalLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,F=e.get(P);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,n.directionalShadow[f]=F,n.directionalShadowMap[f]=I,n.directionalShadowMatrix[f]=P.shadow.matrix,x++}n.directional[f]=U,f++}else if(P.isSpotLight){const U=t.get(P);U.position.setFromMatrixPosition(P.matrixWorld),U.color.copy(k).multiplyScalar(B),U.distance=q,U.coneCos=Math.cos(P.angle),U.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),U.decay=P.decay,n.spot[_]=U;const O=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,O.updateMatrices(P),P.castShadow&&M++),n.spotLightMatrix[_]=O.matrix,P.castShadow){const F=e.get(P);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,n.spotShadow[_]=F,n.spotShadowMap[_]=I,v++}_++}else if(P.isRectAreaLight){const U=t.get(P);U.color.copy(k).multiplyScalar(B),U.halfWidth.set(P.width*.5,0,0),U.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=U,m++}else if(P.isPointLight){const U=t.get(P);if(U.color.copy(P.color).multiplyScalar(P.intensity),U.distance=P.distance,U.decay=P.decay,P.castShadow){const O=P.shadow,F=e.get(P);F.shadowIntensity=O.intensity,F.shadowBias=O.bias,F.shadowNormalBias=O.normalBias,F.shadowRadius=O.radius,F.shadowMapSize=O.mapSize,F.shadowCameraNear=O.camera.near,F.shadowCameraFar=O.camera.far,n.pointShadow[g]=F,n.pointShadowMap[g]=I,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=U,g++}else if(P.isHemisphereLight){const U=t.get(P);U.skyColor.copy(P.color).multiplyScalar(B),U.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=U,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==x||R.numPointShadows!==y||R.numSpotShadows!==v||R.numSpotMaps!==A||R.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-M,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=S,R.directionalLength=f,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=x,R.numPointShadows=y,R.numSpotShadows=v,R.numSpotMaps=A,R.numLightProbes=S,n.version=T_++)}function h(l,c){let u=0,d=0,f=0,g=0,_=0;const m=c.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const y=l[p];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:h,state:n}}function th(i){const t=new R_(i),e=[],n=[];function s(c){l.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function o(c){n.push(c)}function a(){t.setup(e)}function h(c){t.setupView(e,c)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:h,pushLight:r,pushShadow:o}}function C_(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new th(i),t.set(s,[a])):r>=o.length?(a=new th(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const P_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function L_(i,t,e){let n=new wl;const s=new ct,r=new ct,o=new ae,a=new ru({depthPacking:Uh}),h=new tp,l={},c=e.maxTextureSize,u={[Zn]:ze,[ze]:Zn,[xe]:xe},d=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:P_,fragmentShader:D_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new qt;g.setAttribute("position",new Ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new te(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vh;let p=this.type;this.render=function(M,S,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const w=i.getRenderTarget(),b=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Gn),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const B=p!==Hn&&this.type===Hn,q=p===Hn&&this.type!==Hn;for(let I=0,U=M.length;I<U;I++){const O=M[I],F=O.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const Y=F.getFrameExtents();if(s.multiply(Y),r.copy(F.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/Y.x),s.x=r.x*Y.x,F.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/Y.y),s.y=r.y*Y.y,F.mapSize.y=r.y)),F.map===null||B===!0||q===!0){const D=this.type!==Hn?{minFilter:an,magFilter:an}:{};F.map!==null&&F.map.dispose(),F.map=new mn(s.x,s.y,D),F.map.texture.name=O.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const J=F.getViewportCount();for(let D=0;D<J;D++){const G=F.getViewport(D);o.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),k.viewport(o),F.updateMatrices(O,D),n=F.getFrustum(),v(S,R,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===Hn&&x(F,R),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,b,P)};function x(M,S){const R=t.update(_);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new mn(s.x,s.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(S,null,R,d,_,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(S,null,R,f,_,null)}function y(M,S,R,w){let b=null;const P=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)b=P;else if(b=R.isPointLight===!0?h:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){const k=b.uuid,B=S.uuid;let q=l[k];q===void 0&&(q={},l[k]=q);let I=q[B];I===void 0&&(I=b.clone(),q[B]=I,S.addEventListener("dispose",A)),b=I}if(b.visible=S.visible,b.wireframe=S.wireframe,w===Hn?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:u[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=i.properties.get(b);k.light=R}return b}function v(M,S,R,w,b){if(M.visible===!1)return;if(M.layers.test(S.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&b===Hn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);const B=t.update(M),q=M.material;if(Array.isArray(q)){const I=B.groups;for(let U=0,O=I.length;U<O;U++){const F=I[U],Y=q[F.materialIndex];if(Y&&Y.visible){const J=y(M,Y,w,b);M.onBeforeShadow(i,M,S,R,B,J,F),i.renderBufferDirect(R,null,B,J,M,F),M.onAfterShadow(i,M,S,R,B,J,F)}}}else if(q.visible){const I=y(M,q,w,b);M.onBeforeShadow(i,M,S,R,B,I,null),i.renderBufferDirect(R,null,B,I,M,null),M.onAfterShadow(i,M,S,R,B,I,null)}}const k=M.children;for(let B=0,q=k.length;B<q;B++)v(k[B],S,R,w,b)}function A(M){M.target.removeEventListener("dispose",A);for(const R in l){const w=l[R],b=M.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const I_={[fa]:pa,[ma]:va,[ga]:xa,[gs]:_a,[pa]:fa,[va]:ma,[xa]:ga,[_a]:gs};function U_(i,t){function e(){let X=!1;const vt=new ae;let wt=null;const Ct=new ae(0,0,0,0);return{setMask:function(gt){wt!==gt&&!X&&(i.colorMask(gt,gt,gt,gt),wt=gt)},setLocked:function(gt){X=gt},setClear:function(gt,ht,Ut,Zt,_e){_e===!0&&(gt*=Zt,ht*=Zt,Ut*=Zt),vt.set(gt,ht,Ut,Zt),Ct.equals(vt)===!1&&(i.clearColor(gt,ht,Ut,Zt),Ct.copy(vt))},reset:function(){X=!1,wt=null,Ct.set(-1,0,0,0)}}}function n(){let X=!1,vt=!1,wt=null,Ct=null,gt=null;return{setReversed:function(ht){if(vt!==ht){const Ut=t.get("EXT_clip_control");ht?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT),vt=ht;const Zt=gt;gt=null,this.setClear(Zt)}},getReversed:function(){return vt},setTest:function(ht){ht?N(i.DEPTH_TEST):$(i.DEPTH_TEST)},setMask:function(ht){wt!==ht&&!X&&(i.depthMask(ht),wt=ht)},setFunc:function(ht){if(vt&&(ht=I_[ht]),Ct!==ht){switch(ht){case fa:i.depthFunc(i.NEVER);break;case pa:i.depthFunc(i.ALWAYS);break;case ma:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case ga:i.depthFunc(i.EQUAL);break;case _a:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case xa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ct=ht}},setLocked:function(ht){X=ht},setClear:function(ht){gt!==ht&&(vt&&(ht=1-ht),i.clearDepth(ht),gt=ht)},reset:function(){X=!1,wt=null,Ct=null,gt=null,vt=!1}}}function s(){let X=!1,vt=null,wt=null,Ct=null,gt=null,ht=null,Ut=null,Zt=null,_e=null;return{setTest:function(le){X||(le?N(i.STENCIL_TEST):$(i.STENCIL_TEST))},setMask:function(le){vt!==le&&!X&&(i.stencilMask(le),vt=le)},setFunc:function(le,Fn,Tn){(wt!==le||Ct!==Fn||gt!==Tn)&&(i.stencilFunc(le,Fn,Tn),wt=le,Ct=Fn,gt=Tn)},setOp:function(le,Fn,Tn){(ht!==le||Ut!==Fn||Zt!==Tn)&&(i.stencilOp(le,Fn,Tn),ht=le,Ut=Fn,Zt=Tn)},setLocked:function(le){X=le},setClear:function(le){_e!==le&&(i.clearStencil(le),_e=le)},reset:function(){X=!1,vt=null,wt=null,Ct=null,gt=null,ht=null,Ut=null,Zt=null,_e=null}}}const r=new e,o=new n,a=new s,h=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,A=null,M=null,S=new Pt(0,0,0),R=0,w=!1,b=null,P=null,k=null,B=null,q=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,O=0;const F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),U=O>=1):F.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),U=O>=2);let Y=null,J={};const D=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),it=new ae().fromArray(D),W=new ae().fromArray(G);function Q(X,vt,wt,Ct){const gt=new Uint8Array(4),ht=i.createTexture();i.bindTexture(X,ht),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ut=0;Ut<wt;Ut++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(vt+Ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return ht}const H={};H[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(i.DEPTH_TEST),o.setFunc(gs),ot(!1),at(Yl),N(i.CULL_FACE),lt(Gn);function N(X){c[X]!==!0&&(i.enable(X),c[X]=!0)}function $(X){c[X]!==!1&&(i.disable(X),c[X]=!1)}function pt(X,vt){return u[X]!==vt?(i.bindFramebuffer(X,vt),u[X]=vt,X===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),X===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function dt(X,vt){let wt=f,Ct=!1;if(X){wt=d.get(vt),wt===void 0&&(wt=[],d.set(vt,wt));const gt=X.textures;if(wt.length!==gt.length||wt[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Ut=gt.length;ht<Ut;ht++)wt[ht]=i.COLOR_ATTACHMENT0+ht;wt.length=gt.length,Ct=!0}}else wt[0]!==i.BACK&&(wt[0]=i.BACK,Ct=!0);Ct&&i.drawBuffers(wt)}function Ft(X){return g!==X?(i.useProgram(X),g=X,!0):!1}const Bt={[Pi]:i.FUNC_ADD,[Ju]:i.FUNC_SUBTRACT,[$u]:i.FUNC_REVERSE_SUBTRACT};Bt[Qu]=i.MIN,Bt[td]=i.MAX;const z={[ed]:i.ZERO,[nd]:i.ONE,[id]:i.SRC_COLOR,[ua]:i.SRC_ALPHA,[cd]:i.SRC_ALPHA_SATURATE,[ad]:i.DST_COLOR,[rd]:i.DST_ALPHA,[sd]:i.ONE_MINUS_SRC_COLOR,[da]:i.ONE_MINUS_SRC_ALPHA,[ld]:i.ONE_MINUS_DST_COLOR,[od]:i.ONE_MINUS_DST_ALPHA,[hd]:i.CONSTANT_COLOR,[ud]:i.ONE_MINUS_CONSTANT_COLOR,[dd]:i.CONSTANT_ALPHA,[fd]:i.ONE_MINUS_CONSTANT_ALPHA};function lt(X,vt,wt,Ct,gt,ht,Ut,Zt,_e,le){if(X===Gn){_===!0&&($(i.BLEND),_=!1);return}if(_===!1&&(N(i.BLEND),_=!0),X!==Ku){if(X!==m||le!==w){if((p!==Pi||v!==Pi)&&(i.blendEquation(i.FUNC_ADD),p=Pi,v=Pi),le)switch(X){case ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ha:i.blendFunc(i.ONE,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ha:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}x=null,y=null,A=null,M=null,S.set(0,0,0),R=0,m=X,w=le}return}gt=gt||vt,ht=ht||wt,Ut=Ut||Ct,(vt!==p||gt!==v)&&(i.blendEquationSeparate(Bt[vt],Bt[gt]),p=vt,v=gt),(wt!==x||Ct!==y||ht!==A||Ut!==M)&&(i.blendFuncSeparate(z[wt],z[Ct],z[ht],z[Ut]),x=wt,y=Ct,A=ht,M=Ut),(Zt.equals(S)===!1||_e!==R)&&(i.blendColor(Zt.r,Zt.g,Zt.b,_e),S.copy(Zt),R=_e),m=X,w=!1}function rt(X,vt){X.side===xe?$(i.CULL_FACE):N(i.CULL_FACE);let wt=X.side===ze;vt&&(wt=!wt),ot(wt),X.blending===ps&&X.transparent===!1?lt(Gn):lt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);const Ct=X.stencilWrite;a.setTest(Ct),Ct&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ft(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?N(i.SAMPLE_ALPHA_TO_COVERAGE):$(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){b!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),b=X)}function at(X){X!==ju?(N(i.CULL_FACE),X!==P&&(X===Yl?i.cullFace(i.BACK):X===Zu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):$(i.CULL_FACE),P=X}function St(X){X!==k&&(U&&i.lineWidth(X),k=X)}function ft(X,vt,wt){X?(N(i.POLYGON_OFFSET_FILL),(B!==vt||q!==wt)&&(i.polygonOffset(vt,wt),B=vt,q=wt)):$(i.POLYGON_OFFSET_FILL)}function Mt(X){X?N(i.SCISSOR_TEST):$(i.SCISSOR_TEST)}function Vt(X){X===void 0&&(X=i.TEXTURE0+I-1),Y!==X&&(i.activeTexture(X),Y=X)}function Yt(X,vt,wt){wt===void 0&&(Y===null?wt=i.TEXTURE0+I-1:wt=Y);let Ct=J[wt];Ct===void 0&&(Ct={type:void 0,texture:void 0},J[wt]=Ct),(Ct.type!==X||Ct.texture!==vt)&&(Y!==wt&&(i.activeTexture(wt),Y=wt),i.bindTexture(X,vt||H[X]),Ct.type=X,Ct.texture=vt)}function L(){const X=J[Y];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{i.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function K(){try{i.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(){try{i.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{i.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function st(){try{i.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Nt(){try{i.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{i.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Lt(){try{i.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function It(){try{i.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function mt(){try{i.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(X){it.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),it.copy(X))}function Gt(X){W.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),W.copy(X))}function Ot(X,vt){let wt=l.get(vt);wt===void 0&&(wt=new WeakMap,l.set(vt,wt));let Ct=wt.get(X);Ct===void 0&&(Ct=i.getUniformBlockIndex(vt,X.name),wt.set(X,Ct))}function Et(X,vt){const Ct=l.get(vt).get(X);h.get(vt)!==Ct&&(i.uniformBlockBinding(vt,Ct,X.__bindingPointIndex),h.set(vt,Ct))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Y=null,J={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,x=null,y=null,v=null,A=null,M=null,S=new Pt(0,0,0),R=0,w=!1,b=null,P=null,k=null,B=null,q=null,it.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:N,disable:$,bindFramebuffer:pt,drawBuffers:dt,useProgram:Ft,setBlending:lt,setMaterial:rt,setFlipSided:ot,setCullFace:at,setLineWidth:St,setPolygonOffset:ft,setScissorTest:Mt,activeTexture:Vt,bindTexture:Yt,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:K,texImage2D:It,texImage3D:mt,updateUBOMapping:Ot,uniformBlockBinding:Et,texStorage2D:yt,texStorage3D:Lt,texSubImage2D:nt,texSubImage3D:ut,compressedTexSubImage2D:st,compressedTexSubImage3D:Nt,scissor:At,viewport:Gt,reset:Jt}}function N_(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,c=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return f?new OffscreenCanvas(L,T):so("canvas")}function _(L,T,K){let nt=1;const ut=Yt(L);if((ut.width>K||ut.height>K)&&(nt=K/Math.max(ut.width,ut.height)),nt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const st=Math.floor(nt*ut.width),Nt=Math.floor(nt*ut.height);u===void 0&&(u=g(st,Nt));const yt=T?g(st,Nt):u;return yt.width=st,yt.height=Nt,yt.getContext("2d").drawImage(L,0,0,st,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ut.width+"x"+ut.height+") to ("+st+"x"+Nt+")."),yt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ut.width+"x"+ut.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){i.generateMipmap(L)}function x(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(L,T,K,nt,ut=!1){if(L!==null){if(i[L]!==void 0)return i[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let st=T;if(T===i.RED&&(K===i.FLOAT&&(st=i.R32F),K===i.HALF_FLOAT&&(st=i.R16F),K===i.UNSIGNED_BYTE&&(st=i.R8)),T===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(st=i.R8UI),K===i.UNSIGNED_SHORT&&(st=i.R16UI),K===i.UNSIGNED_INT&&(st=i.R32UI),K===i.BYTE&&(st=i.R8I),K===i.SHORT&&(st=i.R16I),K===i.INT&&(st=i.R32I)),T===i.RG&&(K===i.FLOAT&&(st=i.RG32F),K===i.HALF_FLOAT&&(st=i.RG16F),K===i.UNSIGNED_BYTE&&(st=i.RG8)),T===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(st=i.RG8UI),K===i.UNSIGNED_SHORT&&(st=i.RG16UI),K===i.UNSIGNED_INT&&(st=i.RG32UI),K===i.BYTE&&(st=i.RG8I),K===i.SHORT&&(st=i.RG16I),K===i.INT&&(st=i.RG32I)),T===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(st=i.RGB8UI),K===i.UNSIGNED_SHORT&&(st=i.RGB16UI),K===i.UNSIGNED_INT&&(st=i.RGB32UI),K===i.BYTE&&(st=i.RGB8I),K===i.SHORT&&(st=i.RGB16I),K===i.INT&&(st=i.RGB32I)),T===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),K===i.UNSIGNED_INT&&(st=i.RGBA32UI),K===i.BYTE&&(st=i.RGBA8I),K===i.SHORT&&(st=i.RGBA16I),K===i.INT&&(st=i.RGBA32I)),T===i.RGB&&(K===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),T===i.RGBA){const Nt=ut?no:re.getTransfer(nt);K===i.FLOAT&&(st=i.RGBA32F),K===i.HALF_FLOAT&&(st=i.RGBA16F),K===i.UNSIGNED_BYTE&&(st=Nt===ce?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function v(L,T){let K;return L?T===null||T===zi||T===Qs?K=i.DEPTH24_STENCIL8:T===Rn?K=i.DEPTH32F_STENCIL8:T===$s&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===zi||T===Qs?K=i.DEPTH_COMPONENT24:T===Rn?K=i.DEPTH_COMPONENT32F:T===$s&&(K=i.DEPTH_COMPONENT16),K}function A(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==an&&L.minFilter!==pn?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function M(L){const T=L.target;T.removeEventListener("dispose",M),R(T),T.isVideoTexture&&c.delete(T)}function S(L){const T=L.target;T.removeEventListener("dispose",S),b(T)}function R(L){const T=n.get(L);if(T.__webglInit===void 0)return;const K=L.source,nt=d.get(K);if(nt){const ut=nt[T.__cacheKey];ut.usedTimes--,ut.usedTimes===0&&w(L),Object.keys(nt).length===0&&d.delete(K)}n.remove(L)}function w(L){const T=n.get(L);i.deleteTexture(T.__webglTexture);const K=L.source,nt=d.get(K);delete nt[T.__cacheKey],o.memory.textures--}function b(L){const T=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(T.__webglFramebuffer[nt]))for(let ut=0;ut<T.__webglFramebuffer[nt].length;ut++)i.deleteFramebuffer(T.__webglFramebuffer[nt][ut]);else i.deleteFramebuffer(T.__webglFramebuffer[nt]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[nt])}else{if(Array.isArray(T.__webglFramebuffer))for(let nt=0;nt<T.__webglFramebuffer.length;nt++)i.deleteFramebuffer(T.__webglFramebuffer[nt]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let nt=0;nt<T.__webglColorRenderbuffer.length;nt++)T.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[nt]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=L.textures;for(let nt=0,ut=K.length;nt<ut;nt++){const st=n.get(K[nt]);st.__webglTexture&&(i.deleteTexture(st.__webglTexture),o.memory.textures--),n.remove(K[nt])}n.remove(L)}let P=0;function k(){P=0}function B(){const L=P;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),P+=1,L}function q(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function I(L,T){const K=n.get(L);if(L.isVideoTexture&&Mt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&K.__version!==L.version){const nt=L.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(K,L,T);return}}else L.isExternalTexture&&(K.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+T)}function U(L,T){const K=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){H(K,L,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+T)}function O(L,T){const K=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&K.__version!==L.version){H(K,L,T);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+T)}function F(L,T){const K=n.get(L);if(L.version>0&&K.__version!==L.version){N(K,L,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+T)}const Y={[eo]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[Sa]:i.MIRRORED_REPEAT},J={[an]:i.NEAREST,[gd]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[To]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},D={[xd]:i.NEVER,[Ed]:i.ALWAYS,[Md]:i.LESS,[Nh]:i.LEQUAL,[yd]:i.EQUAL,[bd]:i.GEQUAL,[Sd]:i.GREATER,[wd]:i.NOTEQUAL};function G(L,T){if(T.type===Rn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===pn||T.magFilter===To||T.magFilter===gr||T.magFilter===Ii||T.minFilter===pn||T.minFilter===To||T.minFilter===gr||T.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,Y[T.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,Y[T.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,Y[T.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,J[T.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,J[T.minFilter]),T.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,D[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===an||T.minFilter!==gr&&T.minFilter!==Ii||T.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function it(L,T){let K=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",M));const nt=T.source;let ut=d.get(nt);ut===void 0&&(ut={},d.set(nt,ut));const st=q(T);if(st!==L.__cacheKey){ut[st]===void 0&&(ut[st]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),ut[st].usedTimes++;const Nt=ut[L.__cacheKey];Nt!==void 0&&(ut[L.__cacheKey].usedTimes--,Nt.usedTimes===0&&w(T)),L.__cacheKey=st,L.__webglTexture=ut[st].texture}return K}function W(L,T,K){return Math.floor(Math.floor(L/K)/T)}function Q(L,T,K,nt){const st=L.updateRanges;if(st.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,T.width,T.height,K,nt,T.data);else{st.sort((mt,At)=>mt.start-At.start);let Nt=0;for(let mt=1;mt<st.length;mt++){const At=st[Nt],Gt=st[mt],Ot=At.start+At.count,Et=W(Gt.start,T.width,4),Jt=W(At.start,T.width,4);Gt.start<=Ot+1&&Et===Jt&&W(Gt.start+Gt.count-1,T.width,4)===Et?At.count=Math.max(At.count,Gt.start+Gt.count-At.start):(++Nt,st[Nt]=Gt)}st.length=Nt+1;const yt=i.getParameter(i.UNPACK_ROW_LENGTH),Lt=i.getParameter(i.UNPACK_SKIP_PIXELS),It=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,T.width);for(let mt=0,At=st.length;mt<At;mt++){const Gt=st[mt],Ot=Math.floor(Gt.start/4),Et=Math.ceil(Gt.count/4),Jt=Ot%T.width,X=Math.floor(Ot/T.width),vt=Et,wt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),i.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,Jt,X,vt,wt,K,nt,T.data)}L.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,yt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Lt),i.pixelStorei(i.UNPACK_SKIP_ROWS,It)}}function H(L,T,K){let nt=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(nt=i.TEXTURE_3D);const ut=it(L,T),st=T.source;e.bindTexture(nt,L.__webglTexture,i.TEXTURE0+K);const Nt=n.get(st);if(st.version!==Nt.__version||ut===!0){e.activeTexture(i.TEXTURE0+K);const yt=re.getPrimaries(re.workingColorSpace),Lt=T.colorSpace===li?null:re.getPrimaries(T.colorSpace),It=T.colorSpace===li||yt===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let mt=_(T.image,!1,s.maxTextureSize);mt=Vt(T,mt);const At=r.convert(T.format,T.colorSpace),Gt=r.convert(T.type);let Ot=y(T.internalFormat,At,Gt,T.colorSpace,T.isVideoTexture);G(nt,T);let Et;const Jt=T.mipmaps,X=T.isVideoTexture!==!0,vt=Nt.__version===void 0||ut===!0,wt=st.dataReady,Ct=A(T,mt);if(T.isDepthTexture)Ot=v(T.format===er,T.type),vt&&(X?e.texStorage2D(i.TEXTURE_2D,1,Ot,mt.width,mt.height):e.texImage2D(i.TEXTURE_2D,0,Ot,mt.width,mt.height,0,At,Gt,null));else if(T.isDataTexture)if(Jt.length>0){X&&vt&&e.texStorage2D(i.TEXTURE_2D,Ct,Ot,Jt[0].width,Jt[0].height);for(let gt=0,ht=Jt.length;gt<ht;gt++)Et=Jt[gt],X?wt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Et.width,Et.height,At,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,gt,Ot,Et.width,Et.height,0,At,Gt,Et.data);T.generateMipmaps=!1}else X?(vt&&e.texStorage2D(i.TEXTURE_2D,Ct,Ot,mt.width,mt.height),wt&&Q(T,mt,At,Gt)):e.texImage2D(i.TEXTURE_2D,0,Ot,mt.width,mt.height,0,At,Gt,mt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Ot,Jt[0].width,Jt[0].height,mt.depth);for(let gt=0,ht=Jt.length;gt<ht;gt++)if(Et=Jt[gt],T.format!==Sn)if(At!==null)if(X){if(wt)if(T.layerUpdates.size>0){const Ut=Dc(Et.width,Et.height,T.format,T.type);for(const Zt of T.layerUpdates){const _e=Et.data.subarray(Zt*Ut/Et.data.BYTES_PER_ELEMENT,(Zt+1)*Ut/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,Zt,Et.width,Et.height,1,At,_e)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Et.width,Et.height,mt.depth,At,Et.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,gt,Ot,Et.width,Et.height,mt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?wt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,gt,0,0,0,Et.width,Et.height,mt.depth,At,Gt,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,gt,Ot,Et.width,Et.height,mt.depth,0,At,Gt,Et.data)}else{X&&vt&&e.texStorage2D(i.TEXTURE_2D,Ct,Ot,Jt[0].width,Jt[0].height);for(let gt=0,ht=Jt.length;gt<ht;gt++)Et=Jt[gt],T.format!==Sn?At!==null?X?wt&&e.compressedTexSubImage2D(i.TEXTURE_2D,gt,0,0,Et.width,Et.height,At,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,gt,Ot,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?wt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,Et.width,Et.height,At,Gt,Et.data):e.texImage2D(i.TEXTURE_2D,gt,Ot,Et.width,Et.height,0,At,Gt,Et.data)}else if(T.isDataArrayTexture)if(X){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Ot,mt.width,mt.height,mt.depth),wt)if(T.layerUpdates.size>0){const gt=Dc(mt.width,mt.height,T.format,T.type);for(const ht of T.layerUpdates){const Ut=mt.data.subarray(ht*gt/mt.data.BYTES_PER_ELEMENT,(ht+1)*gt/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,mt.width,mt.height,1,At,Gt,Ut)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,At,Gt,mt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ot,mt.width,mt.height,mt.depth,0,At,Gt,mt.data);else if(T.isData3DTexture)X?(vt&&e.texStorage3D(i.TEXTURE_3D,Ct,Ot,mt.width,mt.height,mt.depth),wt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,At,Gt,mt.data)):e.texImage3D(i.TEXTURE_3D,0,Ot,mt.width,mt.height,mt.depth,0,At,Gt,mt.data);else if(T.isFramebufferTexture){if(vt)if(X)e.texStorage2D(i.TEXTURE_2D,Ct,Ot,mt.width,mt.height);else{let gt=mt.width,ht=mt.height;for(let Ut=0;Ut<Ct;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,Ot,gt,ht,0,At,Gt,null),gt>>=1,ht>>=1}}else if(Jt.length>0){if(X&&vt){const gt=Yt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,Ot,gt.width,gt.height)}for(let gt=0,ht=Jt.length;gt<ht;gt++)Et=Jt[gt],X?wt&&e.texSubImage2D(i.TEXTURE_2D,gt,0,0,At,Gt,Et):e.texImage2D(i.TEXTURE_2D,gt,Ot,At,Gt,Et);T.generateMipmaps=!1}else if(X){if(vt){const gt=Yt(mt);e.texStorage2D(i.TEXTURE_2D,Ct,Ot,gt.width,gt.height)}wt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,Gt,mt)}else e.texImage2D(i.TEXTURE_2D,0,Ot,At,Gt,mt);m(T)&&p(nt),Nt.__version=st.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function N(L,T,K){if(T.image.length!==6)return;const nt=it(L,T),ut=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+K);const st=n.get(ut);if(ut.version!==st.__version||nt===!0){e.activeTexture(i.TEXTURE0+K);const Nt=re.getPrimaries(re.workingColorSpace),yt=T.colorSpace===li?null:re.getPrimaries(T.colorSpace),Lt=T.colorSpace===li||Nt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const It=T.isCompressedTexture||T.image[0].isCompressedTexture,mt=T.image[0]&&T.image[0].isDataTexture,At=[];for(let ht=0;ht<6;ht++)!It&&!mt?At[ht]=_(T.image[ht],!0,s.maxCubemapSize):At[ht]=mt?T.image[ht].image:T.image[ht],At[ht]=Vt(T,At[ht]);const Gt=At[0],Ot=r.convert(T.format,T.colorSpace),Et=r.convert(T.type),Jt=y(T.internalFormat,Ot,Et,T.colorSpace),X=T.isVideoTexture!==!0,vt=st.__version===void 0||nt===!0,wt=ut.dataReady;let Ct=A(T,Gt);G(i.TEXTURE_CUBE_MAP,T);let gt;if(It){X&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Jt,Gt.width,Gt.height);for(let ht=0;ht<6;ht++){gt=At[ht].mipmaps;for(let Ut=0;Ut<gt.length;Ut++){const Zt=gt[Ut];T.format!==Sn?Ot!==null?X?wt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,0,0,Zt.width,Zt.height,Ot,Zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,Jt,Zt.width,Zt.height,0,Zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,0,0,Zt.width,Zt.height,Ot,Et,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,Jt,Zt.width,Zt.height,0,Ot,Et,Zt.data)}}}else{if(gt=T.mipmaps,X&&vt){gt.length>0&&Ct++;const ht=Yt(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Jt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(mt){X?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,At[ht].width,At[ht].height,Ot,Et,At[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Jt,At[ht].width,At[ht].height,0,Ot,Et,At[ht].data);for(let Ut=0;Ut<gt.length;Ut++){const _e=gt[Ut].image[ht].image;X?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,0,0,_e.width,_e.height,Ot,Et,_e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,Jt,_e.width,_e.height,0,Ot,Et,_e.data)}}else{X?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ot,Et,At[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Jt,Ot,Et,At[ht]);for(let Ut=0;Ut<gt.length;Ut++){const Zt=gt[Ut];X?wt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,0,0,Ot,Et,Zt.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,Jt,Ot,Et,Zt.image[ht])}}}m(T)&&p(i.TEXTURE_CUBE_MAP),st.__version=ut.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function $(L,T,K,nt,ut,st){const Nt=r.convert(K.format,K.colorSpace),yt=r.convert(K.type),Lt=y(K.internalFormat,Nt,yt,K.colorSpace),It=n.get(T),mt=n.get(K);if(mt.__renderTarget=T,!It.__hasExternalTextures){const At=Math.max(1,T.width>>st),Gt=Math.max(1,T.height>>st);ut===i.TEXTURE_3D||ut===i.TEXTURE_2D_ARRAY?e.texImage3D(ut,st,Lt,At,Gt,T.depth,0,Nt,yt,null):e.texImage2D(ut,st,Lt,At,Gt,0,Nt,yt,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),ft(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,ut,mt.__webglTexture,0,St(T)):(ut===i.TEXTURE_2D||ut>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ut<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,ut,mt.__webglTexture,st),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(L,T,K){if(i.bindRenderbuffer(i.RENDERBUFFER,L),T.depthBuffer){const nt=T.depthTexture,ut=nt&&nt.isDepthTexture?nt.type:null,st=v(T.stencilBuffer,ut),Nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=St(T);ft(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt,st,T.width,T.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt,st,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,st,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Nt,i.RENDERBUFFER,L)}else{const nt=T.textures;for(let ut=0;ut<nt.length;ut++){const st=nt[ut],Nt=r.convert(st.format,st.colorSpace),yt=r.convert(st.type),Lt=y(st.internalFormat,Nt,yt,st.colorSpace),It=St(T);K&&ft(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,It,Lt,T.width,T.height):ft(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,It,Lt,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function dt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(T.depthTexture);nt.__renderTarget=T,(!nt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),I(T.depthTexture,0);const ut=nt.__webglTexture,st=St(T);if(T.depthTexture.format===tr)ft(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ut,0);else if(T.depthTexture.format===er)ft(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0,st):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ut,0);else throw new Error("Unknown depthTexture format")}function Ft(L){const T=n.get(L),K=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const nt=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),nt){const ut=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,nt.removeEventListener("dispose",ut)};nt.addEventListener("dispose",ut),T.__depthDisposeCallback=ut}T.__boundDepthTexture=nt}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const nt=L.texture.mipmaps;nt&&nt.length>0?dt(T.__webglFramebuffer[0],L):dt(T.__webglFramebuffer,L)}else if(K){T.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[nt]),T.__webglDepthbuffer[nt]===void 0)T.__webglDepthbuffer[nt]=i.createRenderbuffer(),pt(T.__webglDepthbuffer[nt],L,!1);else{const ut=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=T.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,st)}}else{const nt=L.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),pt(T.__webglDepthbuffer,L,!1);else{const ut=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,st),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,st)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Bt(L,T,K){const nt=n.get(L);T!==void 0&&$(nt.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Ft(L)}function z(L){const T=L.texture,K=n.get(L),nt=n.get(T);L.addEventListener("dispose",S);const ut=L.textures,st=L.isWebGLCubeRenderTarget===!0,Nt=ut.length>1;if(Nt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=T.version,o.memory.textures++),st){K.__webglFramebuffer=[];for(let yt=0;yt<6;yt++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[yt]=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)K.__webglFramebuffer[yt][Lt]=i.createFramebuffer()}else K.__webglFramebuffer[yt]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let yt=0;yt<T.mipmaps.length;yt++)K.__webglFramebuffer[yt]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Nt)for(let yt=0,Lt=ut.length;yt<Lt;yt++){const It=n.get(ut[yt]);It.__webglTexture===void 0&&(It.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&ft(L)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let yt=0;yt<ut.length;yt++){const Lt=ut[yt];K.__webglColorRenderbuffer[yt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[yt]);const It=r.convert(Lt.format,Lt.colorSpace),mt=r.convert(Lt.type),At=y(Lt.internalFormat,It,mt,Lt.colorSpace,L.isXRRenderTarget===!0),Gt=St(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,At,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,K.__webglColorRenderbuffer[yt])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(K.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(st){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),G(i.TEXTURE_CUBE_MAP,T);for(let yt=0;yt<6;yt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)$(K.__webglFramebuffer[yt][Lt],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Lt);else $(K.__webglFramebuffer[yt],L,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0);m(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let yt=0,Lt=ut.length;yt<Lt;yt++){const It=ut[yt],mt=n.get(It);let At=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,mt.__webglTexture),G(At,It),$(K.__webglFramebuffer,L,It,i.COLOR_ATTACHMENT0+yt,At,0),m(It)&&p(At)}e.unbindTexture()}else{let yt=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(yt=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(yt,nt.__webglTexture),G(yt,T),T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)$(K.__webglFramebuffer[Lt],L,T,i.COLOR_ATTACHMENT0,yt,Lt);else $(K.__webglFramebuffer,L,T,i.COLOR_ATTACHMENT0,yt,0);m(T)&&p(yt),e.unbindTexture()}L.depthBuffer&&Ft(L)}function lt(L){const T=L.textures;for(let K=0,nt=T.length;K<nt;K++){const ut=T[K];if(m(ut)){const st=x(L),Nt=n.get(ut).__webglTexture;e.bindTexture(st,Nt),p(st),e.unbindTexture()}}}const rt=[],ot=[];function at(L){if(L.samples>0){if(ft(L)===!1){const T=L.textures,K=L.width,nt=L.height;let ut=i.COLOR_BUFFER_BIT;const st=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Nt=n.get(L),yt=T.length>1;if(yt)for(let It=0;It<T.length;It++)e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer);const Lt=L.texture.mipmaps;Lt&&Lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let It=0;It<T.length;It++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ut|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ut|=i.STENCIL_BUFFER_BIT)),yt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[It]);const mt=n.get(T[It]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,K,nt,0,0,K,nt,ut,i.NEAREST),h===!0&&(rt.length=0,ot.length=0,rt.push(i.COLOR_ATTACHMENT0+It),L.depthBuffer&&L.resolveDepthBuffer===!1&&(rt.push(st),ot.push(st),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ot)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),yt)for(let It=0;It<T.length;It++){e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.RENDERBUFFER,Nt.__webglColorRenderbuffer[It]);const mt=n.get(T[It]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Nt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+It,i.TEXTURE_2D,mt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const T=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function St(L){return Math.min(s.maxSamples,L.samples)}function ft(L){const T=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Mt(L){const T=o.render.frame;c.get(L)!==T&&(c.set(L,T),L.update())}function Vt(L,T){const K=L.colorSpace,nt=L.format,ut=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||K!==xs&&K!==li&&(re.getTransfer(K)===ce?(nt!==Sn||ut!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function Yt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=k,this.setTexture2D=I,this.setTexture2DArray=U,this.setTexture3D=O,this.setTextureCube=F,this.rebindTextures=Bt,this.setupRenderTarget=z,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=$,this.useMultisampledRTT=ft}function F_(i,t){function e(n,s=li){let r;const o=re.getTransfer(s);if(n===bn)return i.UNSIGNED_BYTE;if(n===pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ph)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ah)return i.BYTE;if(n===Rh)return i.SHORT;if(n===$s)return i.UNSIGNED_SHORT;if(n===fl)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===Dh)return i.ALPHA;if(n===Lh)return i.RGB;if(n===Sn)return i.RGBA;if(n===tr)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===po)return i.RED;if(n===gl)return i.RED_INTEGER;if(n===Ih)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===vl)return i.RGBA_INTEGER;if(n===Yr||n===jr||n===Zr||n===Kr)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Yr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Yr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wa||n===ba||n===Ea||n===Ta)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ba)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Aa||n===Ra||n===Ca)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Aa||n===Ra)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ca)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pa||n===Da||n===La||n===Ia||n===Ua||n===Na||n===Fa||n===Oa||n===za||n===Ba||n===ka||n===Va||n===Ha||n===Ga)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Da)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===La)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ia)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ua)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Na)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===za)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ba)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ka)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Va)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ha)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ga)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wa||n===Xa||n===qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Wa)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ya||n===ja||n===Za||n===Ka)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Za)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ka)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const O_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z_=`
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

}`;class B_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new jh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new De({vertexShader:O_,fragmentShader:z_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new te(new Fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class k_ extends Vi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",h=1,l=null,c=null,u=null,d=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new B_,p={},x=e.getContextAttributes();let y=null,v=null;const A=[],M=[],S=new ct;let R=null;const w=new sn;w.viewport=new ae;const b=new sn;b.viewport=new ae;const P=[w,b],k=new rp;let B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let N=A[H];return N===void 0&&(N=new Yo,A[H]=N),N.getTargetRaySpace()},this.getControllerGrip=function(H){let N=A[H];return N===void 0&&(N=new Yo,A[H]=N),N.getGripSpace()},this.getHand=function(H){let N=A[H];return N===void 0&&(N=new Yo,A[H]=N),N.getHandSpace()};function I(H){const N=M.indexOf(H.inputSource);if(N===-1)return;const $=A[N];$!==void 0&&($.update(H.inputSource,H.frame,l||o),$.dispatchEvent({type:H.type,data:H.inputSource}))}function U(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",O);for(let H=0;H<A.length;H++){const N=M[H];N!==null&&(M[H]=null,A[H].disconnect(N))}B=null,q=null,m.reset();for(const H in p)delete p[H];t.setRenderTarget(y),f=null,d=null,u=null,s=null,v=null,Q.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,e)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",U),s.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(S),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let $=null,pt=null,dt=null;x.depth&&(dt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=x.stencil?er:tr,pt=x.stencil?Qs:zi);const Ft={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ft),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),v=new mn(d.textureWidth,d.textureHeight,{format:Sn,type:bn,depthTexture:new Yh(d.textureWidth,d.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const $={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new mn(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await s.requestReferenceSpace(a),Q.setContext(s),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(H){for(let N=0;N<H.removed.length;N++){const $=H.removed[N],pt=M.indexOf($);pt>=0&&(M[pt]=null,A[pt].disconnect($))}for(let N=0;N<H.added.length;N++){const $=H.added[N];let pt=M.indexOf($);if(pt===-1){for(let Ft=0;Ft<A.length;Ft++)if(Ft>=M.length){M.push($),pt=Ft;break}else if(M[Ft]===null){M[Ft]=$,pt=Ft;break}if(pt===-1)break}const dt=A[pt];dt&&dt.connect($)}}const F=new E,Y=new E;function J(H,N,$){F.setFromMatrixPosition(N.matrixWorld),Y.setFromMatrixPosition($.matrixWorld);const pt=F.distanceTo(Y),dt=N.projectionMatrix.elements,Ft=$.projectionMatrix.elements,Bt=dt[14]/(dt[10]-1),z=dt[14]/(dt[10]+1),lt=(dt[9]+1)/dt[5],rt=(dt[9]-1)/dt[5],ot=(dt[8]-1)/dt[0],at=(Ft[8]+1)/Ft[0],St=Bt*ot,ft=Bt*at,Mt=pt/(-ot+at),Vt=Mt*-ot;if(N.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Vt),H.translateZ(Mt),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),dt[10]===-1)H.projectionMatrix.copy(N.projectionMatrix),H.projectionMatrixInverse.copy(N.projectionMatrixInverse);else{const Yt=Bt+Mt,L=z+Mt,T=St-Vt,K=ft+(pt-Vt),nt=lt*z/L*Yt,ut=rt*z/L*Yt;H.projectionMatrix.makePerspective(T,K,nt,ut,Yt,L),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function D(H,N){N===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(N.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let N=H.near,$=H.far;m.texture!==null&&(m.depthNear>0&&(N=m.depthNear),m.depthFar>0&&($=m.depthFar)),k.near=b.near=w.near=N,k.far=b.far=w.far=$,(B!==k.near||q!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),B=k.near,q=k.far),k.layers.mask=H.layers.mask|6,w.layers.mask=k.layers.mask&3,b.layers.mask=k.layers.mask&5;const pt=H.parent,dt=k.cameras;D(k,pt);for(let Ft=0;Ft<dt.length;Ft++)D(dt[Ft],pt);dt.length===2?J(k,w,b):k.projectionMatrix.copy(w.projectionMatrix),G(H,k,pt)};function G(H,N,$){$===null?H.matrix.copy(N.matrixWorld):(H.matrix.copy($.matrixWorld),H.matrix.invert(),H.matrix.multiply(N.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(N.projectionMatrix),H.projectionMatrixInverse.copy(N.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=nr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return h},this.setFoveation=function(H){h=H,d!==null&&(d.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(H){return p[H]};let it=null;function W(H,N){if(c=N.getViewerPose(l||o),g=N,c!==null){const $=c.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let pt=!1;$.length!==k.cameras.length&&(k.cameras.length=0,pt=!0);for(let z=0;z<$.length;z++){const lt=$[z];let rt=null;if(f!==null)rt=f.getViewport(lt);else{const at=u.getViewSubImage(d,lt);rt=at.viewport,z===0&&(t.setRenderTargetTextures(v,at.colorTexture,at.depthStencilTexture),t.setRenderTarget(v))}let ot=P[z];ot===void 0&&(ot=new sn,ot.layers.enable(z),ot.viewport=new ae,P[z]=ot),ot.matrix.fromArray(lt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(lt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(rt.x,rt.y,rt.width,rt.height),z===0&&(k.matrix.copy(ot.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),pt===!0&&k.cameras.push(ot)}const dt=s.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const z=u.getDepthInformation($[0]);z&&z.isValid&&z.texture&&m.init(z,s.renderState)}if(dt&&dt.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let z=0;z<$.length;z++){const lt=$[z].camera;if(lt){let rt=p[lt];rt||(rt=new jh,p[lt]=rt);const ot=u.getCameraImage(lt);rt.sourceTexture=ot}}}}for(let $=0;$<A.length;$++){const pt=M[$],dt=A[$];pt!==null&&dt!==void 0&&dt.update(pt,N,l||o)}it&&it(H,N),N.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:N}),g=null}const Q=new lu;Q.setAnimationLoop(W),this.setAnimationLoop=function(H){it=H},this.dispose=function(){}}}const Ti=new Wt,V_=new se;function H_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Hh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?h(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,Ti.copy(v),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(V_.makeRotationFromEuler(Ti)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function h(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function G_(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function l(x,y){let v=s[x.id];v===void 0&&(g(x),v=c(x),s[x.id]=v,x.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(x,A);const M=t.render.frame;r[x.id]!==M&&(d(x),r[x.id]=M)}function c(x){const y=u();x.__bindingPointIndex=y;const v=i.createBuffer(),A=x.__size,M=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],v=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,S=v.length;M<S;M++){const R=Array.isArray(v[M])?v[M]:[v[M]];for(let w=0,b=R.length;w<b;w++){const P=R[w];if(f(P,M,w,A)===!0){const k=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let I=0;I<B.length;I++){const U=B[I],O=_(U);typeof U=="number"||typeof U=="boolean"?(P.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,k+q,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=0,P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=0,P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=0):(U.toArray(P.__data,q),q+=O.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,y,v,A){const M=x.value,S=y+"_"+v;if(A[S]===void 0)return typeof M=="number"||typeof M=="boolean"?A[S]=M:A[S]=M.clone(),!0;{const R=A[S];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return A[S]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function g(x){const y=x.uniforms;let v=0;const A=16;for(let S=0,R=y.length;S<R;S++){const w=Array.isArray(y[S])?y[S]:[y[S]];for(let b=0,P=w.length;b<P;b++){const k=w[b],B=Array.isArray(k.value)?k.value:[k.value];for(let q=0,I=B.length;q<I;q++){const U=B[q],O=_(U),F=v%A,Y=F%O.boundary,J=F+Y;v+=Y,J!==0&&A-J<O.storage&&(v+=A-J),k.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=O.storage}}}const M=v%A;return M>0&&(v+=A-M),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:h,update:l,dispose:p}}class W_{constructor(t={}){const{canvas:e=Gd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let A=!1;this._outputColorSpace=nn;let M=0,S=0,R=null,w=-1,b=null;const P=new ae,k=new ae;let B=null;const q=new Pt(0);let I=0,U=e.width,O=e.height,F=1,Y=null,J=null;const D=new ae(0,0,U,O),G=new ae(0,0,U,O);let it=!1;const W=new wl;let Q=!1,H=!1;const N=new se,$=new E,pt=new ae,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function Bt(){return R===null?F:1}let z=n;function lt(C,j){return e.getContext(C,j)}try{const C={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hl}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Ct,!1),e.addEventListener("webglcontextcreationerror",gt,!1),z===null){const j="webgl2";if(z=lt(j,C),z===null)throw lt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let rt,ot,at,St,ft,Mt,Vt,Yt,L,T,K,nt,ut,st,Nt,yt,Lt,It,mt,At,Gt,Ot,Et,Jt;function X(){rt=new tg(z),rt.init(),Ot=new F_(z,rt),ot=new Ym(z,rt,t,Ot),at=new U_(z,rt),ot.reversedDepthBuffer&&d&&at.buffers.depth.setReversed(!0),St=new ig(z),ft=new y_,Mt=new N_(z,rt,at,ft,ot,Ot,St),Vt=new Zm(v),Yt=new Qm(v),L=new cp(z),Et=new Xm(z,L),T=new eg(z,L,St,Et),K=new rg(z,T,L,St),mt=new sg(z,ot,Mt),yt=new jm(ft),nt=new M_(v,Vt,Yt,rt,ot,Et,yt),ut=new H_(v,ft),st=new w_,Nt=new C_(rt),It=new Wm(v,Vt,Yt,at,K,f,h),Lt=new L_(v,K,ot),Jt=new G_(z,St,ot,at),At=new qm(z,rt,St),Gt=new ng(z,rt,St),St.programs=nt.programs,v.capabilities=ot,v.extensions=rt,v.properties=ft,v.renderLists=st,v.shadowMap=Lt,v.state=at,v.info=St}X();const vt=new k_(v,z);this.xr=vt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=rt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=rt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(C){C!==void 0&&(F=C,this.setSize(U,O,!1))},this.getSize=function(C){return C.set(U,O)},this.setSize=function(C,j,tt=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,O=j,e.width=Math.floor(C*F),e.height=Math.floor(j*F),tt===!0&&(e.style.width=C+"px",e.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(U*F,O*F).floor()},this.setDrawingBufferSize=function(C,j,tt){U=C,O=j,F=tt,e.width=Math.floor(C*tt),e.height=Math.floor(j*tt),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(D)},this.setViewport=function(C,j,tt,et){C.isVector4?D.set(C.x,C.y,C.z,C.w):D.set(C,j,tt,et),at.viewport(P.copy(D).multiplyScalar(F).round())},this.getScissor=function(C){return C.copy(G)},this.setScissor=function(C,j,tt,et){C.isVector4?G.set(C.x,C.y,C.z,C.w):G.set(C,j,tt,et),at.scissor(k.copy(G).multiplyScalar(F).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(C){at.setScissorTest(it=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){J=C},this.getClearColor=function(C){return C.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor(...arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha(...arguments)},this.clear=function(C=!0,j=!0,tt=!0){let et=0;if(C){let Z=!1;if(R!==null){const _t=R.texture.format;Z=_t===vl||_t===_l||_t===gl}if(Z){const _t=R.texture.type,Tt=_t===bn||_t===zi||_t===$s||_t===Qs||_t===pl||_t===ml,Dt=It.getClearColor(),Rt=It.getClearAlpha(),Ht=Dt.r,Xt=Dt.g,zt=Dt.b;Tt?(g[0]=Ht,g[1]=Xt,g[2]=zt,g[3]=Rt,z.clearBufferuiv(z.COLOR,0,g)):(_[0]=Ht,_[1]=Xt,_[2]=zt,_[3]=Rt,z.clearBufferiv(z.COLOR,0,_))}else et|=z.COLOR_BUFFER_BIT}j&&(et|=z.DEPTH_BUFFER_BIT),tt&&(et|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Ct,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),It.dispose(),st.dispose(),Nt.dispose(),ft.dispose(),Vt.dispose(),Yt.dispose(),K.dispose(),Et.dispose(),Jt.dispose(),nt.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",Tn),vt.removeEventListener("sessionend",Vl),xi.stop()};function wt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const C=St.autoReset,j=Lt.enabled,tt=Lt.autoUpdate,et=Lt.needsUpdate,Z=Lt.type;X(),St.autoReset=C,Lt.enabled=j,Lt.autoUpdate=tt,Lt.needsUpdate=et,Lt.type=Z}function gt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ht(C){const j=C.target;j.removeEventListener("dispose",ht),Ut(j)}function Ut(C){Zt(C),ft.remove(C)}function Zt(C){const j=ft.get(C).programs;j!==void 0&&(j.forEach(function(tt){nt.releaseProgram(tt)}),C.isShaderMaterial&&nt.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,tt,et,Z,_t){j===null&&(j=dt);const Tt=Z.isMesh&&Z.matrixWorld.determinant()<0,Dt=Hu(C,j,tt,et,Z);at.setMaterial(et,Tt);let Rt=tt.index,Ht=1;if(et.wireframe===!0){if(Rt=T.getWireframeAttribute(tt),Rt===void 0)return;Ht=2}const Xt=tt.drawRange,zt=tt.attributes.position;let ie=Xt.start*Ht,ue=(Xt.start+Xt.count)*Ht;_t!==null&&(ie=Math.max(ie,_t.start*Ht),ue=Math.min(ue,(_t.start+_t.count)*Ht)),Rt!==null?(ie=Math.max(ie,0),ue=Math.min(ue,Rt.count)):zt!=null&&(ie=Math.max(ie,0),ue=Math.min(ue,zt.count));const Re=ue-ie;if(Re<0||Re===1/0)return;Et.setup(Z,et,Dt,tt,Rt);let Me,pe=At;if(Rt!==null&&(Me=L.get(Rt),pe=Gt,pe.setIndex(Me)),Z.isMesh)et.wireframe===!0?(at.setLineWidth(et.wireframeLinewidth*Bt()),pe.setMode(z.LINES)):pe.setMode(z.TRIANGLES);else if(Z.isLine){let kt=et.linewidth;kt===void 0&&(kt=1),at.setLineWidth(kt*Bt()),Z.isLineSegments?pe.setMode(z.LINES):Z.isLineLoop?pe.setMode(z.LINE_LOOP):pe.setMode(z.LINE_STRIP)}else Z.isPoints?pe.setMode(z.POINTS):Z.isSprite&&pe.setMode(z.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ir("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),pe.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))pe.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const kt=Z._multiDrawStarts,we=Z._multiDrawCounts,oe=Z._multiDrawCount,$e=Rt?L.get(Rt).bytesPerElement:1,Wi=ft.get(et).currentProgram.getUniforms();for(let Qe=0;Qe<oe;Qe++)Wi.setValue(z,"_gl_DrawID",Qe),pe.render(kt[Qe]/$e,we[Qe])}else if(Z.isInstancedMesh)pe.renderInstances(ie,Re,Z.count);else if(tt.isInstancedBufferGeometry){const kt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,we=Math.min(tt.instanceCount,kt);pe.renderInstances(ie,Re,we)}else pe.render(ie,Re)};function _e(C,j,tt){C.transparent===!0&&C.side===xe&&C.forceSinglePass===!1?(C.side=ze,C.needsUpdate=!0,mr(C,j,tt),C.side=Zn,C.needsUpdate=!0,mr(C,j,tt),C.side=xe):mr(C,j,tt)}this.compile=function(C,j,tt=null){tt===null&&(tt=C),p=Nt.get(tt),p.init(j),y.push(p),tt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),C!==tt&&C.traverseVisible(function(Z){Z.isLight&&Z.layers.test(j.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights();const et=new Set;return C.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const _t=Z.material;if(_t)if(Array.isArray(_t))for(let Tt=0;Tt<_t.length;Tt++){const Dt=_t[Tt];_e(Dt,tt,Z),et.add(Dt)}else _e(_t,tt,Z),et.add(_t)}),p=y.pop(),et},this.compileAsync=function(C,j,tt=null){const et=this.compile(C,j,tt);return new Promise(Z=>{function _t(){if(et.forEach(function(Tt){ft.get(Tt).currentProgram.isReady()&&et.delete(Tt)}),et.size===0){Z(C);return}setTimeout(_t,10)}rt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let le=null;function Fn(C){le&&le(C)}function Tn(){xi.stop()}function Vl(){xi.start()}const xi=new lu;xi.setAnimationLoop(Fn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(C){le=C,vt.setAnimationLoop(C),C===null?xi.stop():xi.start()},vt.addEventListener("sessionstart",Tn),vt.addEventListener("sessionend",Vl),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(j),j=vt.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,j,R),p=Nt.get(C,y.length),p.init(j),y.push(p),N.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),W.setFromProjectionMatrix(N,Cn,j.reversedDepth),H=this.localClippingEnabled,Q=yt.init(this.clippingPlanes,H),m=st.get(C,x.length),m.init(),x.push(m),vt.enabled===!0&&vt.isPresenting===!0){const _t=v.xr.getDepthSensingMesh();_t!==null&&bo(_t,j,-1/0,v.sortObjects)}bo(C,j,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(Y,J),Ft=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,Ft&&It.addToRenderList(m,C),this.info.render.frame++,Q===!0&&yt.beginShadows();const tt=p.state.shadowsArray;Lt.render(tt,C,j),Q===!0&&yt.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=m.opaque,Z=m.transmissive;if(p.setupLights(),j.isArrayCamera){const _t=j.cameras;if(Z.length>0)for(let Tt=0,Dt=_t.length;Tt<Dt;Tt++){const Rt=_t[Tt];Gl(et,Z,C,Rt)}Ft&&It.render(C);for(let Tt=0,Dt=_t.length;Tt<Dt;Tt++){const Rt=_t[Tt];Hl(m,C,Rt,Rt.viewport)}}else Z.length>0&&Gl(et,Z,C,j),Ft&&It.render(C),Hl(m,C,j);R!==null&&S===0&&(Mt.updateMultisampleRenderTarget(R),Mt.updateRenderTargetMipmap(R)),C.isScene===!0&&C.onAfterRender(v,C,j),Et.resetDefaultState(),w=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],Q===!0&&yt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function bo(C,j,tt,et){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)tt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||W.intersectsSprite(C)){et&&pt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(N);const Tt=K.update(C),Dt=C.material;Dt.visible&&m.push(C,Tt,Dt,tt,pt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||W.intersectsObject(C))){const Tt=K.update(C),Dt=C.material;if(et&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pt.copy(C.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),pt.copy(Tt.boundingSphere.center)),pt.applyMatrix4(C.matrixWorld).applyMatrix4(N)),Array.isArray(Dt)){const Rt=Tt.groups;for(let Ht=0,Xt=Rt.length;Ht<Xt;Ht++){const zt=Rt[Ht],ie=Dt[zt.materialIndex];ie&&ie.visible&&m.push(C,Tt,ie,tt,pt.z,zt)}}else Dt.visible&&m.push(C,Tt,Dt,tt,pt.z,null)}}const _t=C.children;for(let Tt=0,Dt=_t.length;Tt<Dt;Tt++)bo(_t[Tt],j,tt,et)}function Hl(C,j,tt,et){const Z=C.opaque,_t=C.transmissive,Tt=C.transparent;p.setupLightsView(tt),Q===!0&&yt.setGlobalState(v.clippingPlanes,tt),et&&at.viewport(P.copy(et)),Z.length>0&&pr(Z,j,tt),_t.length>0&&pr(_t,j,tt),Tt.length>0&&pr(Tt,j,tt),at.buffers.depth.setTest(!0),at.buffers.depth.setMask(!0),at.buffers.color.setMask(!0),at.setPolygonOffset(!1)}function Gl(C,j,tt,et){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[et.id]===void 0&&(p.state.transmissionRenderTarget[et.id]=new mn(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?Pn:bn,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:re.workingColorSpace}));const _t=p.state.transmissionRenderTarget[et.id],Tt=et.viewport||P;_t.setSize(Tt.z*v.transmissionResolutionScale,Tt.w*v.transmissionResolutionScale);const Dt=v.getRenderTarget(),Rt=v.getActiveCubeFace(),Ht=v.getActiveMipmapLevel();v.setRenderTarget(_t),v.getClearColor(q),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear(),Ft&&It.render(tt);const Xt=v.toneMapping;v.toneMapping=ci;const zt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),p.setupLightsView(et),Q===!0&&yt.setGlobalState(v.clippingPlanes,et),pr(C,tt,et),Mt.updateMultisampleRenderTarget(_t),Mt.updateRenderTargetMipmap(_t),rt.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let ue=0,Re=j.length;ue<Re;ue++){const Me=j[ue],pe=Me.object,kt=Me.geometry,we=Me.material,oe=Me.group;if(we.side===xe&&pe.layers.test(et.layers)){const $e=we.side;we.side=ze,we.needsUpdate=!0,Wl(pe,tt,et,kt,we,oe),we.side=$e,we.needsUpdate=!0,ie=!0}}ie===!0&&(Mt.updateMultisampleRenderTarget(_t),Mt.updateRenderTargetMipmap(_t))}v.setRenderTarget(Dt,Rt,Ht),v.setClearColor(q,I),zt!==void 0&&(et.viewport=zt),v.toneMapping=Xt}function pr(C,j,tt){const et=j.isScene===!0?j.overrideMaterial:null;for(let Z=0,_t=C.length;Z<_t;Z++){const Tt=C[Z],Dt=Tt.object,Rt=Tt.geometry,Ht=Tt.group;let Xt=Tt.material;Xt.allowOverride===!0&&et!==null&&(Xt=et),Dt.layers.test(tt.layers)&&Wl(Dt,j,tt,Rt,Xt,Ht)}}function Wl(C,j,tt,et,Z,_t){C.onBeforeRender(v,j,tt,et,Z,_t),C.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Z.onBeforeRender(v,j,tt,et,C,_t),Z.transparent===!0&&Z.side===xe&&Z.forceSinglePass===!1?(Z.side=ze,Z.needsUpdate=!0,v.renderBufferDirect(tt,j,et,Z,C,_t),Z.side=Zn,Z.needsUpdate=!0,v.renderBufferDirect(tt,j,et,Z,C,_t),Z.side=xe):v.renderBufferDirect(tt,j,et,Z,C,_t),C.onAfterRender(v,j,tt,et,Z,_t)}function mr(C,j,tt){j.isScene!==!0&&(j=dt);const et=ft.get(C),Z=p.state.lights,_t=p.state.shadowsArray,Tt=Z.state.version,Dt=nt.getParameters(C,Z.state,_t,j,tt),Rt=nt.getProgramCacheKey(Dt);let Ht=et.programs;et.environment=C.isMeshStandardMaterial?j.environment:null,et.fog=j.fog,et.envMap=(C.isMeshStandardMaterial?Yt:Vt).get(C.envMap||et.environment),et.envMapRotation=et.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,Ht===void 0&&(C.addEventListener("dispose",ht),Ht=new Map,et.programs=Ht);let Xt=Ht.get(Rt);if(Xt!==void 0){if(et.currentProgram===Xt&&et.lightsStateVersion===Tt)return ql(C,Dt),Xt}else Dt.uniforms=nt.getUniforms(C),C.onBeforeCompile(Dt,v),Xt=nt.acquireProgram(Dt,Rt),Ht.set(Rt,Xt),et.uniforms=Dt.uniforms;const zt=et.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(zt.clippingPlanes=yt.uniform),ql(C,Dt),et.needsLights=Wu(C),et.lightsStateVersion=Tt,et.needsLights&&(zt.ambientLightColor.value=Z.state.ambient,zt.lightProbe.value=Z.state.probe,zt.directionalLights.value=Z.state.directional,zt.directionalLightShadows.value=Z.state.directionalShadow,zt.spotLights.value=Z.state.spot,zt.spotLightShadows.value=Z.state.spotShadow,zt.rectAreaLights.value=Z.state.rectArea,zt.ltc_1.value=Z.state.rectAreaLTC1,zt.ltc_2.value=Z.state.rectAreaLTC2,zt.pointLights.value=Z.state.point,zt.pointLightShadows.value=Z.state.pointShadow,zt.hemisphereLights.value=Z.state.hemi,zt.directionalShadowMap.value=Z.state.directionalShadowMap,zt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,zt.spotShadowMap.value=Z.state.spotShadowMap,zt.spotLightMatrix.value=Z.state.spotLightMatrix,zt.spotLightMap.value=Z.state.spotLightMap,zt.pointShadowMap.value=Z.state.pointShadowMap,zt.pointShadowMatrix.value=Z.state.pointShadowMatrix),et.currentProgram=Xt,et.uniformsList=null,Xt}function Xl(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Jr.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function ql(C,j){const tt=ft.get(C);tt.outputColorSpace=j.outputColorSpace,tt.batching=j.batching,tt.batchingColor=j.batchingColor,tt.instancing=j.instancing,tt.instancingColor=j.instancingColor,tt.instancingMorph=j.instancingMorph,tt.skinning=j.skinning,tt.morphTargets=j.morphTargets,tt.morphNormals=j.morphNormals,tt.morphColors=j.morphColors,tt.morphTargetsCount=j.morphTargetsCount,tt.numClippingPlanes=j.numClippingPlanes,tt.numIntersection=j.numClipIntersection,tt.vertexAlphas=j.vertexAlphas,tt.vertexTangents=j.vertexTangents,tt.toneMapping=j.toneMapping}function Hu(C,j,tt,et,Z){j.isScene!==!0&&(j=dt),Mt.resetTextureUnits();const _t=j.fog,Tt=et.isMeshStandardMaterial?j.environment:null,Dt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:xs,Rt=(et.isMeshStandardMaterial?Yt:Vt).get(et.envMap||Tt),Ht=et.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,Xt=!!tt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),zt=!!tt.morphAttributes.position,ie=!!tt.morphAttributes.normal,ue=!!tt.morphAttributes.color;let Re=ci;et.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Re=v.toneMapping);const Me=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,pe=Me!==void 0?Me.length:0,kt=ft.get(et),we=p.state.lights;if(Q===!0&&(H===!0||C!==b)){const Ge=C===b&&et.id===w;yt.setState(et,C,Ge)}let oe=!1;et.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==we.state.version||kt.outputColorSpace!==Dt||Z.isBatchedMesh&&kt.batching===!1||!Z.isBatchedMesh&&kt.batching===!0||Z.isBatchedMesh&&kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&kt.instancing===!1||!Z.isInstancedMesh&&kt.instancing===!0||Z.isSkinnedMesh&&kt.skinning===!1||!Z.isSkinnedMesh&&kt.skinning===!0||Z.isInstancedMesh&&kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&kt.instancingMorph===!1&&Z.morphTexture!==null||kt.envMap!==Rt||et.fog===!0&&kt.fog!==_t||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==yt.numPlanes||kt.numIntersection!==yt.numIntersection)||kt.vertexAlphas!==Ht||kt.vertexTangents!==Xt||kt.morphTargets!==zt||kt.morphNormals!==ie||kt.morphColors!==ue||kt.toneMapping!==Re||kt.morphTargetsCount!==pe)&&(oe=!0):(oe=!0,kt.__version=et.version);let $e=kt.currentProgram;oe===!0&&($e=mr(et,j,Z));let Wi=!1,Qe=!1,Ds=!1;const be=$e.getUniforms(),cn=kt.uniforms;if(at.useProgram($e.program)&&(Wi=!0,Qe=!0,Ds=!0),et.id!==w&&(w=et.id,Qe=!0),Wi||b!==C){at.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),be.setValue(z,"projectionMatrix",C.projectionMatrix),be.setValue(z,"viewMatrix",C.matrixWorldInverse);const je=be.map.cameraPosition;je!==void 0&&je.setValue(z,$.setFromMatrixPosition(C.matrixWorld)),ot.logarithmicDepthBuffer&&be.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&be.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,Qe=!0,Ds=!0)}if(Z.isSkinnedMesh){be.setOptional(z,Z,"bindMatrix"),be.setOptional(z,Z,"bindMatrixInverse");const Ge=Z.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),be.setValue(z,"boneTexture",Ge.boneTexture,Mt))}Z.isBatchedMesh&&(be.setOptional(z,Z,"batchingTexture"),be.setValue(z,"batchingTexture",Z._matricesTexture,Mt),be.setOptional(z,Z,"batchingIdTexture"),be.setValue(z,"batchingIdTexture",Z._indirectTexture,Mt),be.setOptional(z,Z,"batchingColorTexture"),Z._colorsTexture!==null&&be.setValue(z,"batchingColorTexture",Z._colorsTexture,Mt));const hn=tt.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&mt.update(Z,tt,$e),(Qe||kt.receiveShadow!==Z.receiveShadow)&&(kt.receiveShadow=Z.receiveShadow,be.setValue(z,"receiveShadow",Z.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(cn.envMap.value=Rt,cn.flipEnvMap.value=Rt.isCubeTexture&&Rt.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&j.environment!==null&&(cn.envMapIntensity.value=j.environmentIntensity),Qe&&(be.setValue(z,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&Gu(cn,Ds),_t&&et.fog===!0&&ut.refreshFogUniforms(cn,_t),ut.refreshMaterialUniforms(cn,et,F,O,p.state.transmissionRenderTarget[C.id]),Jr.upload(z,Xl(kt),cn,Mt)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(Jr.upload(z,Xl(kt),cn,Mt),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&be.setValue(z,"center",Z.center),be.setValue(z,"modelViewMatrix",Z.modelViewMatrix),be.setValue(z,"normalMatrix",Z.normalMatrix),be.setValue(z,"modelMatrix",Z.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const Ge=et.uniformsGroups;for(let je=0,Eo=Ge.length;je<Eo;je++){const Mi=Ge[je];Jt.update(Mi,$e),Jt.bind(Mi,$e)}}return $e}function Gu(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Wu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(C,j,tt){const et=ft.get(C);et.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),ft.get(C.texture).__webglTexture=j,ft.get(C.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:tt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,j){const tt=ft.get(C);tt.__webglFramebuffer=j,tt.__useDefaultFramebuffer=j===void 0};const Xu=z.createFramebuffer();this.setRenderTarget=function(C,j=0,tt=0){R=C,M=j,S=tt;let et=!0,Z=null,_t=!1,Tt=!1;if(C){const Rt=ft.get(C);if(Rt.__useDefaultFramebuffer!==void 0)at.bindFramebuffer(z.FRAMEBUFFER,null),et=!1;else if(Rt.__webglFramebuffer===void 0)Mt.setupRenderTarget(C);else if(Rt.__hasExternalTextures)Mt.rebindTextures(C,ft.get(C.texture).__webglTexture,ft.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const zt=C.depthTexture;if(Rt.__boundDepthTexture!==zt){if(zt!==null&&ft.has(zt)&&(C.width!==zt.image.width||C.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Mt.setupDepthRenderbuffer(C)}}const Ht=C.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Tt=!0);const Xt=ft.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xt[j])?Z=Xt[j][tt]:Z=Xt[j],_t=!0):C.samples>0&&Mt.useMultisampledRTT(C)===!1?Z=ft.get(C).__webglMultisampledFramebuffer:Array.isArray(Xt)?Z=Xt[tt]:Z=Xt,P.copy(C.viewport),k.copy(C.scissor),B=C.scissorTest}else P.copy(D).multiplyScalar(F).floor(),k.copy(G).multiplyScalar(F).floor(),B=it;if(tt!==0&&(Z=Xu),at.bindFramebuffer(z.FRAMEBUFFER,Z)&&et&&at.drawBuffers(C,Z),at.viewport(P),at.scissor(k),at.setScissorTest(B),_t){const Rt=ft.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+j,Rt.__webglTexture,tt)}else if(Tt){const Rt=j;for(let Ht=0;Ht<C.textures.length;Ht++){const Xt=ft.get(C.textures[Ht]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,tt,Rt)}}else if(C!==null&&tt!==0){const Rt=ft.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Rt.__webglTexture,tt)}w=-1},this.readRenderTargetPixels=function(C,j,tt,et,Z,_t,Tt,Dt=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=ft.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt){at.bindFramebuffer(z.FRAMEBUFFER,Rt);try{const Ht=C.textures[Dt],Xt=Ht.format,zt=Ht.type;if(!ot.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-et&&tt>=0&&tt<=C.height-Z&&(C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Dt),z.readPixels(j,tt,et,Z,Ot.convert(Xt),Ot.convert(zt),_t))}finally{const Ht=R!==null?ft.get(R).__webglFramebuffer:null;at.bindFramebuffer(z.FRAMEBUFFER,Ht)}}},this.readRenderTargetPixelsAsync=async function(C,j,tt,et,Z,_t,Tt,Dt=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=ft.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt)if(j>=0&&j<=C.width-et&&tt>=0&&tt<=C.height-Z){at.bindFramebuffer(z.FRAMEBUFFER,Rt);const Ht=C.textures[Dt],Xt=Ht.format,zt=Ht.type;if(!ot.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ie=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ie),z.bufferData(z.PIXEL_PACK_BUFFER,_t.byteLength,z.STREAM_READ),C.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Dt),z.readPixels(j,tt,et,Z,Ot.convert(Xt),Ot.convert(zt),0);const ue=R!==null?ft.get(R).__webglFramebuffer:null;at.bindFramebuffer(z.FRAMEBUFFER,ue);const Re=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Wd(z,Re,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ie),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,_t),z.deleteBuffer(ie),z.deleteSync(Re),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,j=null,tt=0){const et=Math.pow(2,-tt),Z=Math.floor(C.image.width*et),_t=Math.floor(C.image.height*et),Tt=j!==null?j.x:0,Dt=j!==null?j.y:0;Mt.setTexture2D(C,0),z.copyTexSubImage2D(z.TEXTURE_2D,tt,0,0,Tt,Dt,Z,_t),at.unbindTexture()};const qu=z.createFramebuffer(),Yu=z.createFramebuffer();this.copyTextureToTexture=function(C,j,tt=null,et=null,Z=0,_t=null){_t===null&&(Z!==0?(ir("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=Z,Z=0):_t=0);let Tt,Dt,Rt,Ht,Xt,zt,ie,ue,Re;const Me=C.isCompressedTexture?C.mipmaps[_t]:C.image;if(tt!==null)Tt=tt.max.x-tt.min.x,Dt=tt.max.y-tt.min.y,Rt=tt.isBox3?tt.max.z-tt.min.z:1,Ht=tt.min.x,Xt=tt.min.y,zt=tt.isBox3?tt.min.z:0;else{const hn=Math.pow(2,-Z);Tt=Math.floor(Me.width*hn),Dt=Math.floor(Me.height*hn),C.isDataArrayTexture?Rt=Me.depth:C.isData3DTexture?Rt=Math.floor(Me.depth*hn):Rt=1,Ht=0,Xt=0,zt=0}et!==null?(ie=et.x,ue=et.y,Re=et.z):(ie=0,ue=0,Re=0);const pe=Ot.convert(j.format),kt=Ot.convert(j.type);let we;j.isData3DTexture?(Mt.setTexture3D(j,0),we=z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(Mt.setTexture2DArray(j,0),we=z.TEXTURE_2D_ARRAY):(Mt.setTexture2D(j,0),we=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,j.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,j.unpackAlignment);const oe=z.getParameter(z.UNPACK_ROW_LENGTH),$e=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Wi=z.getParameter(z.UNPACK_SKIP_PIXELS),Qe=z.getParameter(z.UNPACK_SKIP_ROWS),Ds=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Me.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Me.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ht),z.pixelStorei(z.UNPACK_SKIP_ROWS,Xt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,zt);const be=C.isDataArrayTexture||C.isData3DTexture,cn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const hn=ft.get(C),Ge=ft.get(j),je=ft.get(hn.__renderTarget),Eo=ft.get(Ge.__renderTarget);at.bindFramebuffer(z.READ_FRAMEBUFFER,je.__webglFramebuffer),at.bindFramebuffer(z.DRAW_FRAMEBUFFER,Eo.__webglFramebuffer);for(let Mi=0;Mi<Rt;Mi++)be&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ft.get(C).__webglTexture,Z,zt+Mi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ft.get(j).__webglTexture,_t,Re+Mi)),z.blitFramebuffer(Ht,Xt,Tt,Dt,ie,ue,Tt,Dt,z.DEPTH_BUFFER_BIT,z.NEAREST);at.bindFramebuffer(z.READ_FRAMEBUFFER,null),at.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Z!==0||C.isRenderTargetTexture||ft.has(C)){const hn=ft.get(C),Ge=ft.get(j);at.bindFramebuffer(z.READ_FRAMEBUFFER,qu),at.bindFramebuffer(z.DRAW_FRAMEBUFFER,Yu);for(let je=0;je<Rt;je++)be?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,hn.__webglTexture,Z,zt+je):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,hn.__webglTexture,Z),cn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ge.__webglTexture,_t,Re+je):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ge.__webglTexture,_t),Z!==0?z.blitFramebuffer(Ht,Xt,Tt,Dt,ie,ue,Tt,Dt,z.COLOR_BUFFER_BIT,z.NEAREST):cn?z.copyTexSubImage3D(we,_t,ie,ue,Re+je,Ht,Xt,Tt,Dt):z.copyTexSubImage2D(we,_t,ie,ue,Ht,Xt,Tt,Dt);at.bindFramebuffer(z.READ_FRAMEBUFFER,null),at.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else cn?C.isDataTexture||C.isData3DTexture?z.texSubImage3D(we,_t,ie,ue,Re,Tt,Dt,Rt,pe,kt,Me.data):j.isCompressedArrayTexture?z.compressedTexSubImage3D(we,_t,ie,ue,Re,Tt,Dt,Rt,pe,Me.data):z.texSubImage3D(we,_t,ie,ue,Re,Tt,Dt,Rt,pe,kt,Me):C.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,_t,ie,ue,Tt,Dt,pe,kt,Me.data):C.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,_t,ie,ue,Me.width,Me.height,pe,Me.data):z.texSubImage2D(z.TEXTURE_2D,_t,ie,ue,Tt,Dt,pe,kt,Me);z.pixelStorei(z.UNPACK_ROW_LENGTH,oe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,$e),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Wi),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ds),_t===0&&j.generateMipmaps&&z.generateMipmap(we),at.unbindTexture()},this.initRenderTarget=function(C){ft.get(C).__webglFramebuffer===void 0&&Mt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?Mt.setTextureCube(C,0):C.isData3DTexture?Mt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Mt.setTexture2DArray(C,0):Mt.setTexture2D(C,0),at.unbindTexture()},this.resetState=function(){M=0,S=0,R=null,at.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}}const $r={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Cs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const X_=new Pl(-1,1,1,-1,0,1);class q_ extends qt{constructor(){super(),this.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xt([0,2,0,0,2,0],2))}}const Y_=new q_;class Ll{constructor(t){this._mesh=new te(Y_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,X_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class fu extends Cs{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof De?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=sr.clone(t.uniforms),this.material=new De({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ll(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class eh extends Cs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class j_ extends Cs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Z_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new ct);this._width=n.width,this._height=n.height,e=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Pn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fu($r),this.copyPass.material.blending=Gn,this.clock=new op}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),h.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}eh!==void 0&&(o instanceof eh?n=!0:o instanceof j_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class K_ extends Cs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const J_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class ws extends Cs{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new ct(t.x,t.y):new ct(256,256),this.clearColor=new Pt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(r,o,{type:Pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const u=new mn(r,o,{type:Pn});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new mn(r,o,{type:Pn});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}const a=J_;this.highPassUniforms=sr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new ct(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1),new E(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=sr.clone($r.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:$r.vertexShader,fragmentShader:$r.fragmentShader,blending:ha,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Pt,this._oldClearAlpha=1,this._basic=new hr,this._fsQuad=new Ll(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ct(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[h].uniforms.direction.value=ws.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[h]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=ws.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[h]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new De({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new ct(.5,.5)},direction:{value:new ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new De({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}ws.BlurDirectionX=new ct(1,0);ws.BlurDirectionY=new ct(0,1);const Gr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $_ extends Cs{constructor(){super(),this.uniforms=sr.clone(Gr.uniforms),this.material=new Kf({name:Gr.name,uniforms:this.uniforms,vertexShader:Gr.vertexShader,fragmentShader:Gr.fragmentShader}),this._fsQuad=new Ll(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},re.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Mh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Sh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===bh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Eh?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===wh&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Q_ extends Xh{constructor(){super();const t=new In;t.deleteAttribute("uv");const e=new ne({side:ze}),n=new ne,s=new au(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new te(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new _o(t,n,6),a=new Le;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const h=new te(t,os(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const l=new te(t,os(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);const c=new te(t,os(17));c.position.set(14.904,12.198,-1.832),c.scale.set(.15,4.265,6.331),this.add(c);const u=new te(t,os(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);const d=new te(t,os(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);const f=new te(t,os(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function os(i){return new Qf({color:0,emissive:16777215,emissiveIntensity:i})}const nh={type:"change"},Il={type:"start"},pu={type:"end"},Wr=new go,ih=new oi,tv=Math.cos(70*me.DEG2RAD),Ue=new E,Ze=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},oa=1e-6;class ev extends ap{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new E,this.cursor=new E,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fs.ROTATE,MIDDLE:fs.DOLLY,RIGHT:fs.PAN},this.touches={ONE:hs.ROTATE,TWO:hs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new E,this._lastQuaternion=new ge,this._lastTargetPosition=new E,this._quat=new ge().setFromUnitVectors(t.up,new E(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pc,this._sphericalDelta=new Pc,this._scale=1,this._panOffset=new E,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new E,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iv.bind(this),this._onPointerDown=nv.bind(this),this._onPointerUp=sv.bind(this),this._onContextMenu=uv.bind(this),this._onMouseWheel=av.bind(this),this._onKeyDown=lv.bind(this),this._onTouchStart=cv.bind(this),this._onTouchMove=hv.bind(this),this._onMouseDown=rv.bind(this),this._onMouseMove=ov.bind(this),this._interceptControlDown=dv.bind(this),this._interceptControlUp=fv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(nh),this.update(),this.state=fe.NONE}update(t=null){const e=this.object.position;Ue.copy(e).sub(this.target),Ue.applyQuaternion(this._quat),this._spherical.setFromVector3(Ue),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ze:n>Math.PI&&(n-=Ze),s<-Math.PI?s+=Ze:s>Math.PI&&(s-=Ze),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ue.setFromSpherical(this._spherical),Ue.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ue),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ue.length();o=this._clampDistance(a*this._scale);const h=a-o;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),r=!!h}else if(this.object.isOrthographicCamera){const a=new E(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=h!==this.object.zoom;const l=new E(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=Ue.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Wr.origin.copy(this.object.position),Wr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wr.direction))<tv?this.object.lookAt(this.target):(ih.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wr.intersectPlane(ih,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>oa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>oa||this._lastTargetPosition.distanceToSquared(this.target)>oa?(this.dispatchEvent(nh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ze/60*this.autoRotateSpeed*t:Ze/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ue.setFromMatrixColumn(e,0),Ue.multiplyScalar(-t),this._panOffset.add(Ue)}_panUp(t,e){this.screenSpacePanning===!0?Ue.setFromMatrixColumn(e,1):(Ue.setFromMatrixColumn(e,0),Ue.crossVectors(this.object.up,Ue)),Ue.multiplyScalar(t),this._panOffset.add(Ue)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ue.copy(s).sub(this.target);let r=Ue.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ze*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ze*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ze*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ct,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function nv(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function iv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(pu),this.state=fe.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function rv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=fe.DOLLY;break;case fs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}break;case fs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Il)}function ov(i){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function av(i){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(i.preventDefault(),this.dispatchEvent(Il),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(pu))}function lv(i){this.enabled!==!1&&this._handleKeyDown(i)}function cv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case hs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=fe.TOUCH_ROTATE;break;case hs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case hs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=fe.TOUCH_DOLLY_PAN;break;case hs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(Il)}function hv(i){switch(this._trackPointer(i),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=fe.NONE}}function uv(i){this.enabled!==!1&&i.preventDefault()}function dv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const mu=[.1,.24,.36].map((i,t)=>({mid:i,start:i-.027,end:i+.034,width:[1.02,1.16,.98][t]}));function Ul(i,t){for(const e of mu)if(t>=e.start&&t<=e.end){const n=(t-e.start)/(e.end-e.start),s=n-.72*Math.sin(n*Math.PI*2)/(Math.PI*2);return i.getPoint(e.start).y*(1-s)+i.getPoint(e.end).y*s}return i.getPoint(t).y}const mi=me.clamp,ai=(i,t,e)=>{const n=mi((e-i)/(t-i),0,1);return n*n*(3-2*n)};function Ye(i=7341){let t=i|0;return()=>{t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}const Kn=(i,t)=>Math.sin(i*1.71+Math.cos(t*.73))*Math.cos(t*1.31+i*.28)*.55+Math.sin(i*3.13-t*2.07)*.23;function pv(i,t,e,n){const s=n.x-e.x,r=n.z-e.z,o=mi(((i-e.x)*s+(t-e.z)*r)/(s*s+r*r||1),0,1);return{d:Math.hypot(i-e.x-s*o,t-e.z-r*o),t:o}}function Ks(i,t=.45){return new pi(i.map(e=>new E(e[0],e[1],e[2])),!1,"catmullrom",t)}const gu={cottage:new E(8,.9,-5),windmill:new E(-12,3.2,-8),tree:new E(1,1,-8),bridge:new E(-2,1.05,.5),dock:new E(10.2,.65,7),pond:new E(5,.18,7),waterfall:new E(-1,.18,13.2)},hi=Ks([[-11,3.15,-5.5],[-9,2.55,-3.7],[-7.5,1.85,-2.9],[-5,1.35,-1.7],[-3.6,.66,-.4],[-2,.44,.5],[-.6,.24,2.3],[1.2,.18,4],[3,.18,5.8]],.42),_u=Ks([[3.5,.18,8.2],[1.3,.18,9.2],[-.6,.18,11.1],[-1,.18,13.3],[-1,.12,14.6],[-1,-.3,15.3]],.4),vu=[Ks([[-12,3.2,-5.7],[-11,2.7,-2.7],[-8,1.7,1.4],[-5.2,1.05,.5],[-2,1.05,.5],[1.3,1.05,.5],[4,.9,.2],[8,.9,.2]]),Ks([[8,.9,.2],[11,.9,1.8],[12,.8,5.5],[10.2,.65,7]]),Ks([[3,.9,.4],[2,1,-3.2],[1,1,-7.2]])],mv=hi.getPoints(240),gv=_u.getPoints(100),_v=vu.map(i=>i.getPoints(80));function cr(i){return 1+.047*Math.sin(i*5+.4)+.032*Math.sin(i*9-1.2)+.018*Math.cos(i*13)}function vv(i,t){const e=Math.atan2(t/15,i/21);return Math.hypot(i/21,t/15)/cr(e)}function xo(i,t){const e=Math.atan2((t-7)/3.35,(i-5)/5.45);return Math.hypot((i-5)/5.45,(t-7)/3.35)/(1+.055*Math.sin(e*5)+.03*Math.cos(e*7))}function rl(i,t,e){let n={d:1e9,y:0,t:0,x:0,z:0};for(let s=0;s<i.length-1;s++){const r=pv(t,e,i[s],i[s+1]);if(r.d<n.d){const o=i[s].clone().lerp(i[s+1],r.t);n={d:r.d,y:o.y,t:(s+r.t)/(i.length-1),x:o.x,z:o.z}}}return n}function ao(i,t){const e=rl(mv,i,t),n=rl(gv,i,t),s=e.d<n.d?e:n;return{...s,y:e.d<n.d?Ul(hi,s.t):s.y,width:e.d<n.d?1.75+.48*Math.sin(s.t*5)**2:2.4+.6*s.t}}function xv(i,t){let e=1e5;for(const n of _v)e=Math.min(e,rl(n,i,t).d);return e}function Mv(i,t,e=0){const n=gu.cottage,s=i-n.x,r=t-n.z,o=Math.cos(.22),a=Math.sin(.22),h=s*o-r*a,l=s*a+r*o;return Math.abs(h)<4.6+e&&l>-4.1-e&&l<6+e||Math.hypot(i+12,t+8)<2.5+e||Math.abs(i+2)<3.5+e&&Math.abs(t-.5)<1.15+e||Math.abs(i-9)<2.7+e&&Math.abs(t-7)<1.15+e}function Nl(i,t){let e=.62+3.3*Math.exp(-((i+12)**2/42+(t+8)**2/32))+.23*Math.sin(i*.22+t*.3)+Kn(i*.42,t*.42)*.13;const n=1-ai(4.5,6.2,Math.max(Math.abs(i-8),Math.abs(t+5)));e=me.lerp(e,.9,n);const s=1-ai(2.1,3.5,Math.hypot(i+12,t+8));e=me.lerp(e,3.2,s);const r=1-ai(1.8,3.5,Math.hypot(i-1,t+8));e=me.lerp(e,1,r);const o=ao(i,t),a=o.width*.5,h=ai(a,a+.8,o.d),l=o.y-.38+Kn(i*2,t*2)*.035,c=me.lerp(l,o.y+.012,ai(a*.55,a,o.d));e=me.lerp(c,e,h);const u=xo(i,t),d=-.58+.52*Math.pow(Math.min(u,1),2);return e=me.lerp(d,e,ai(.83,1.16,u)),e}function xu(i,t){if(xo(i,t)<1.02)return .18;const e=ao(i,t);return e.d<e.width*.53?e.y:null}const Ui={heightAt:Nl,riverInfo:ao,riverDistance:(i,t)=>ao(i,t).d,pathDistance:xv,occupied:Mv,pondValue:xo,islandValue:vv,waterAt:xu,anchors:gu};function yv(){const i=[],t=[],e=[],n=[],o=new Pt("#80ad5c"),a=new Pt("#c5c5a2");for(let l=0;l<=96;l++){const c=l/96;for(let u=0;u<=240;u++){const d=u/240*Math.PI*2,f=c*cr(d),g=Math.cos(d)*21*f,_=Math.sin(d)*15*f,m=Nl(g,_);i.push(g,m,_),e.push(g/42+.5,_/30+.5);const p=xu(g,_),x=o.clone();x.lerp(new Pt("#608c4d"),mi(Kn(g*.5,_*.5)*.3+.12,0,.4)),p!==null&&x.lerp(a,.9),t.push(x.r,x.g,x.b)}}for(let l=0;l<96;l++)for(let c=0;c<240;c++){const u=l*241+c;n.push(u,u+1,u+240+1,u+1,u+240+2,u+240+1)}const h=new qt;return h.setAttribute("position",new xt(i,3)),h.setAttribute("color",new xt(t,3)),h.setAttribute("uv",new xt(e,2)),h.setIndex(n),h.computeVertexNormals(),h}const vi={overview:{position:[37,27,47],target:[0,1,0],label:"Overview"},cottage:{position:[20,10,13],target:[8,3.1,-3.5],label:"Cottage"},tree:{position:[-1,7.3,14],target:[.6,4.8,-7.5],label:"Garden"},windmill:{position:[-24,12,8],target:[-12,6.8,-7],label:"Windmill"},bridge:{position:[8,6.7,10],target:[-2,1.3,.6],label:"Bridge"},lake:{position:[20,8.2,20],target:[6,.9,7.7],label:"Lake"},waterfall:{position:[-17,2,28],target:[-1,-4,14.2],label:"Waterfall"},rear:{position:[-33,22,-43],target:[0,1,0],label:"Rear view"},top:{position:[2,58,8],target:[0,0,0],label:"Top view"},low:{position:[25,5.5,27],target:[1,3,0],label:"Low view"},far:{position:[56,39,68],target:[0,1,0],label:"Distant view"},underside:{position:[-25,-8,33],target:[0,-5,0],label:"Island underside"}};vi.porch={position:[10,5.2,6.5],target:[6.8,2.05,.1],label:"Tea table"};vi.parasol={position:[17.5,2.9,12.9],target:[13.3,2.2,8.9],label:"Parasol"};vi.flowers={position:[18.8,3,-.3],target:[13.55,1.25,-3.35],label:"Flowers"};vi.roots={position:[-3.8,2.7,-3.7],target:[.85,2,-7.9],label:"Bark and roots"};vi.sheep={position:[-23,7,-7],target:[-14.2,4.25,-8],label:"Sheep"};class Sv{camera;controls;active="overview";auto=!1;tour=null;constructor(t){this.camera=new sn(innerWidth<600?55:39,innerWidth/innerHeight,.1,440),this.controls=new ev(this.camera,t),this.controls.enableDamping=!0,this.controls.dampingFactor=.075,this.controls.minDistance=5,this.controls.maxDistance=160,this.controls.maxPolarAngle=1.56,this.controls.minPolarAngle=.08,this.controls.autoRotateSpeed=.28,this.controls.screenSpacePanning=!1,this.controls.target.set(0,1,0),this.setView("overview",!0),this.controls.addEventListener("start",()=>{this.tour=null,this.auto=!1,this.controls.autoRotate=!1})}setView(t,e=!1){const n=vi[t];if(!n)return;this.auto=!1,this.controls.autoRotate=!1,this.active=t;const s=new E().fromArray(n.position),r=new E().fromArray(n.target);innerWidth<600&&(t==="overview"||t==="far")&&s.sub(r).multiplyScalar(1.55).add(r),e?(this.tour=null,this.camera.position.copy(s),this.controls.target.copy(r),this.controls.update()):this.tour={startP:this.camera.position.clone(),startT:this.controls.target.clone(),endP:s,endT:r,t:0,duration:2.2}}setAuto(t){this.tour=null,this.auto=t,this.controls.autoRotate=t}update(t){if(this.tour){const n=this.tour;n.t=Math.min(1,n.t+t/n.duration);const s=n.t*n.t*(3-2*n.t);this.camera.position.lerpVectors(n.startP,n.endP,s),this.camera.position.y+=Math.sin(s*Math.PI)*5,this.controls.target.lerpVectors(n.startT,n.endT,s),n.t>=1&&(this.tour=null)}const e=this.camera.position;if(Ui.islandValue(e.x,e.z)<1.03){e.y=Math.max(e.y,Ui.heightAt(e.x,e.z)+1.5);const n=Ui.anchors.cottage;if(Math.abs(e.x-n.x)<5.4&&Math.abs(e.z-n.z)<5.2&&e.y<9.3){const r=new ct(e.x-n.x,e.z-n.z);r.length()<.01&&r.set(0,1),r.setLength(7.5),e.x=n.x+r.x,e.z=n.z+r.y}const s=Ui.anchors.windmill;if(Math.hypot(e.x-s.x,e.z-s.z)<3.2&&e.y<13){const r=Math.atan2(e.z-s.z,e.x-s.x);e.x=s.x+Math.cos(r)*3.3,e.z=s.z+Math.sin(r)*3.3}}this.controls.target.x=me.clamp(this.controls.target.x,-23,23),this.controls.target.z=me.clamp(this.controls.target.z,-18,18),this.controls.target.y=me.clamp(this.controls.target.y,-9,14),this.controls.update(t)}resize(){this.camera.fov=innerWidth<600?55:39,this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix()}get touring(){return!!this.tour}}class wv{constructor(t,e,n,s,r){this.renderer=t,this.sun=e,this.ctx=n,this.cloud=s,this.resize=r}value="standard";set(t){this.value=t,this.ctx.quality=t,this.renderer.setPixelRatio(Math.min(devicePixelRatio,t==="high"?2:t==="standard"?1.35:1));const e=t==="high"?4096:t==="standard"?2048:1024;this.sun.shadow.mapSize.x!==e&&(this.sun.shadow.mapSize.set(e,e),this.sun.shadow.map?.dispose(),this.sun.shadow.map=null),this.cloud(t);for(const n of this.ctx.qualityObjects)n.object.visible=t==="high"||t==="standard"&&n.level==="standard";this.resize()}}class bv{context=null;gain=null;master=null;enabled=!1;nextBird=0;constructor(){document.addEventListener("visibilitychange",()=>{this.context&&(document.hidden?this.context.suspend():this.enabled&&this.context.resume())})}async toggle(){if(!this.context){this.context=new AudioContext,this.gain=this.context.createGain(),this.gain.gain.value=0,this.master=this.context.createGain(),this.master.gain.value=0,this.gain.connect(this.master),this.master.connect(this.context.destination);const t=this.context.sampleRate*4,e=this.context.createBuffer(1,t,this.context.sampleRate),n=e.getChannelData(0);let s=0;for(let a=0;a<t;a++){s=(s+(Math.random()*2-1)*.02)/1.02;const h=Math.min(1,a/2e3,(t-a)/2e3);n[a]=s*3*h}const r=this.context.createBufferSource();r.buffer=e,r.loop=!0;const o=this.context.createBiquadFilter();o.type="lowpass",o.frequency.value=1300,r.connect(o),o.connect(this.gain),r.start()}return await this.context.resume(),this.enabled=!this.enabled,this.master.gain.setTargetAtTime(this.enabled?1:0,this.context.currentTime,.06),this.gain.gain.setTargetAtTime(this.enabled?.085:0,this.context.currentTime,.6),this.enabled}get state(){return{enabled:this.enabled,context:this.context?.state??"uninitialized",masterGain:this.master?.gain.value??0}}update(t,e){if(!(!this.context||!this.enabled)&&(this.gain.gain.setTargetAtTime(.067+e*.022,this.context.currentTime,.8),t>this.nextBird)){this.nextBird=t+12+Math.random()*11;const n=this.context,s=n.createOscillator(),r=n.createGain();s.type="sine",s.frequency.setValueAtTime(2200,n.currentTime),s.frequency.exponentialRampToValueAtTime(3300,n.currentTime+.07),s.frequency.exponentialRampToValueAtTime(1800,n.currentTime+.2),r.gain.setValueAtTime(0,n.currentTime),r.gain.linearRampToValueAtTime(.009,n.currentTime+.03),r.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.24),s.connect(r),r.connect(this.master),s.start(),s.stop(n.currentTime+.25),s.onended=()=>{s.disconnect(),r.disconnect()}}}}function Ev(){return new fu({uniforms:{tDiffuse:{value:null},uTexel:{value:new ct(1/1280,1/720)},uDiagnostic:{value:!1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform vec2 uTexel;uniform bool uDiagnostic;varying vec2 vUv;
  bool finiteColor(vec3 c){return !any(isnan(c))&&!any(isinf(c));}
  void main(){vec4 c=texture2D(tDiffuse,vUv);bool valid=finiteColor(c.rgb);
   if(!valid){vec3 sum=vec3(0.);float weight=0.;
    for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){vec3 tap=texture2D(tDiffuse,vUv+vec2(float(x),float(y))*uTexel).rgb;if(finiteColor(tap)){sum+=clamp(tap,0.,16.);weight+=1.;}}
    c.rgb=weight>0.?sum/weight:vec3(.48,.65,.69);
   }
   if(uDiagnostic)c.rgb=valid?vec3(0.):vec3(1.,0.,0.);
   gl_FragColor=vec4(clamp(c.rgb,0.,16.),1.);
  }`})}class Tv{constructor(t,e,n){this.canvas=t,this.camera=e,this.scene=n,t.addEventListener("pointerdown",s=>{this.pointers.add(s.pointerId),this.pointers.size>1&&(this.multi=!0),s.button===0&&this.pointers.size===1&&(this.multi=!1,this.down={x:s.clientX,y:s.clientY,time:performance.now()})}),t.addEventListener("pointerup",s=>{const r=this.down;if(r&&!this.multi&&s.button===0&&Math.hypot(s.clientX-r.x,s.clientY-r.y)<6&&performance.now()-r.time<650){const o=this.pick(s.clientX,s.clientY);o&&(o.entry.action(o.hit.point),this.counts[o.entry.id]=(this.counts[o.entry.id]||0)+1,this.last=o.entry.id)}this.pointers.delete(s.pointerId),this.pointers.size===0&&(this.down=null,this.multi=!1)}),t.addEventListener("pointercancel",s=>{this.pointers.delete(s.pointerId),this.down=null}),t.addEventListener("pointermove",s=>{this.pointers.size||performance.now()-this.lastHover<100||(this.lastHover=performance.now(),t.style.cursor=this.pick(s.clientX,s.clientY)?"pointer":"grab")}),t.addEventListener("contextmenu",s=>s.preventDefault())}entries=[];counts={};last="";ray=new lr;pointer=new ct;down=null;pointers=new Set;multi=!1;lastHover=0;register=(t,e,n)=>{t.userData.interactionId=e,this.entries.push({object:t,id:e,action:n}),this.counts[e]=0};ancestor(t,e){let n=t;for(;n;){if(n===e)return!0;n=n.parent}return!1}pick(t,e){const n=this.canvas.getBoundingClientRect();this.pointer.set((t-n.left)/n.width*2-1,-(e-n.top)/n.height*2+1),this.ray.setFromCamera(this.pointer,this.camera);const s=this.ray.intersectObjects(this.entries.map(o=>o.object),!0);let r=null;for(const o of s){const a=this.entries.find(c=>this.ancestor(o.object,c.object));if(!a)continue;let h=!0;for(let c=o.object;c;c=c.parent)h&&=c.visible;if(!h)continue;if(r??=this.ray.intersectObjects(this.scene.children,!0),!r.some(c=>{if(c.distance>=o.distance-.08||this.ancestor(c.object,a.object)||!(c.object instanceof te))return!1;for(let d=c.object;d;d=d.parent)if(!d.visible)return!1;return!(Array.isArray(c.object.material)?c.object.material[0]:c.object.material).transparent&&c.object.visible&&!c.object.name.includes("Sky")&&!c.object.userData.nonOccluding}))return{entry:a,hit:o}}return null}projectTargets(){return this.scene.updateMatrixWorld(!0),this.entries.map(t=>{const e=new gi().setFromObject(t.object),n=e.getCenter(new E).project(this.camera);return{id:t.id,x:(n.x*.5+.5)*innerWidth,y:(-.5*n.y+.5)*innerHeight,visible:Math.abs(n.x)<1&&Math.abs(n.y)<1&&n.z<1}})}}const Av={home:'<path d="M3 9 9 3l6 6M5 8v7h8V8M8 15v-4h3v4"/>',orbit:'<ellipse cx="9" cy="9" rx="7" ry="3" transform="rotate(-30 9 9)"/><circle cx="9" cy="9" r="2"/>',sound:'<path d="m3 7 4 0 4-4v12l-4-4H3zM14 6c2 2 2 4 0 6"/>',quality:'<path d="m9 2 2 4 4 .5-3 3 .8 4.5L9 12l-3.8 2 .8-4.5-3-3L7 6z"/>',eye:'<path d="M2 9s3-5 7-5 7 5 7 5-3 5-7 5-7-5-7-5Z"/><circle cx="9" cy="9" r="2"/>'};function Rv(i,t,e){const n=document.querySelector("#navigation"),s=document.querySelector("#controls"),r=document.querySelector("#ui");n.innerHTML="",s.innerHTML="";const o=[];Object.entries(vi).slice(0,6).forEach(([_,m])=>{const p=document.createElement("button");p.textContent=m.label,p.dataset.view=_,p.onclick=()=>i.setView(_),n.append(p),o.push(p)});function a(_,m,p){const x=document.createElement("button");return x.setAttribute("aria-label",_),x.title=_,x.innerHTML=`<svg viewBox="0 0 18 18" aria-hidden="true">${Av[m]}</svg>`,x.onclick=p,s.append(x),x}a("Return to overview","home",()=>i.setView("overview"));const h=a("Auto orbit","orbit",()=>i.setAuto(!i.auto)),l=a("Ambient sound","sound",async()=>{await t.toggle(),l.setAttribute("aria-pressed",String(t.enabled))});l.setAttribute("aria-pressed","false");const c=a("Quality settings","quality",()=>{u.hidden=!u.hidden,c.setAttribute("aria-expanded",String(!u.hidden))}),u=document.createElement("div");u.id="quality-menu",u.hidden=!0,u.setAttribute("role","menu"),["high","standard","performance"].forEach((_,m)=>{const p=document.createElement("button");p.textContent=["High","Standard","Performance"][m],p.setAttribute("role","menuitemradio"),p.dataset.quality=_,p.onclick=()=>{e.set(_),u.hidden=!0,c.setAttribute("aria-expanded","false")},u.append(p)}),s.append(u);let d=!1;function f(_){d=_,r.classList.toggle("hidden",_),document.body.dataset.uiHidden=String(_)}a("Hide interface · H / Esc to restore","eye",()=>f(!0)),addEventListener("keydown",_=>{_.key.toLowerCase()==="h"&&f(!d),_.key==="Escape"&&(f(!1),u.hidden=!0),_.key.toLowerCase()==="r"&&i.setView("overview")}),g();function g(){document.querySelector("canvas").addEventListener("dblclick",()=>{d&&f(!1)})}return()=>{h.setAttribute("aria-pressed",String(i.auto)),o.forEach(_=>_.setAttribute("aria-pressed",String(_.dataset.view===i.active))),u.querySelectorAll("button").forEach(_=>_.setAttribute("aria-checked",String(_.dataset.quality===e.value)))}}const Bs=new E;function dn(i,t,e,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),h=Math.PI/4;Bs.copy(t),Bs[n]=0,Bs.normalize();const l=.5*o/(o+a),c=1-Bs.angleTo(i)/h;return Math.sign(Bs[e])===1?c*l:a/(o+a)+l+l*(1-c)}class Mo extends In{constructor(t=1,e=1,n=1,s=2,r=.1){const o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const h=new E,l=new E,c=new E(t,e,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=u.length/6,_=new E,m=.5/o;for(let p=0,x=0;p<u.length;p+=3,x+=2)switch(h.fromArray(u,p),l.copy(h),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),u[p+0]=c.x*Math.sign(h.x)+l.x*r,u[p+1]=c.y*Math.sign(h.y)+l.y*r,u[p+2]=c.z*Math.sign(h.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[x+0]=dn(_,l,"z","y",r,n),f[x+1]=1-dn(_,l,"y","z",r,e);break;case 1:_.set(-1,0,0),f[x+0]=1-dn(_,l,"z","y",r,n),f[x+1]=1-dn(_,l,"y","z",r,e);break;case 2:_.set(0,1,0),f[x+0]=1-dn(_,l,"x","z",r,t),f[x+1]=dn(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),f[x+0]=1-dn(_,l,"x","z",r,t),f[x+1]=1-dn(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),f[x+0]=1-dn(_,l,"x","y",r,t),f[x+1]=1-dn(_,l,"y","x",r,e);break;case 5:_.set(0,0,-1),f[x+0]=dn(_,l,"x","y",r,t),f[x+1]=1-dn(_,l,"y","x",r,e);break}}static fromJSON(t){return new Mo(t.width,t.height,t.depth,t.segments,t.radius)}}function Ps(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,h=new qt;let l=0;for(let c=0;c<i.length;++c){const u=i[c];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;h.addGroup(l,f,c),l+=f}}if(e){let c=0;const u=[];for(let d=0;d<i.length;++d){const f=i[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+c);c+=i[d].attributes.position.count}h.setIndex(u)}for(const c in r){const u=sh(r[c]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;h.setAttribute(c,u)}for(const c in o){const u=o[c][0].length;if(u===0)break;h.morphAttributes=h.morphAttributes||{},h.morphAttributes[c]=[];for(let d=0;d<u;++d){const f=[];for(let _=0;_<o[c].length;++_)f.push(o[c][_][d]);const g=sh(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;h.morphAttributes[c].push(g)}}return h}function sh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){const c=i[l];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=c.normalized),n!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}const o=new t(r),a=new Ae(o,e,n);let h=0;for(let l=0;l<i.length;++l){const c=i[l];if(c.isInterleavedBufferAttribute){const u=h/e;for(let d=0,f=c.count;d<f;d++)for(let g=0;g<e;g++){const _=c.getComponent(d,g);a.setComponent(d+u,g,_)}}else o.set(c.array,h);h+=c.count*e}return s!==void 0&&(a.gpuType=s),a}function he(i,t,e,n=0,s=0,r=0){const o=new te(i,t);return o.position.set(n,s,r),o.castShadow=!0,o.receiveShadow=!0,e?.add(o),o}function fn(i,t,e,n=.035){return new Mo(i,t,e,2,Math.min(n,i*.2,t*.2,e*.2))}function Cv(i,t,e,n,s,r=e){const o=he(new Ke(r,e,i.distanceTo(t),8),n,s);return o.position.copy(i).add(t).multiplyScalar(.5),o.quaternion.setFromUnitVectors(new E(0,1,0),t.clone().sub(i).normalize()),o}function bs(i,t,e){if(!i.length)return null;const n=i.some(r=>r.geometry.index!==null)&&i.some(r=>r.geometry.index===null),s=i.map(r=>{r.updateMatrix();let o=r.geometry.clone().applyMatrix4(r.matrix);if(n&&o.index){const a=o.toNonIndexed();o.dispose(),o=a}return o});try{const r=Ps(s,!1);if(!r)throw new Error(`Could not merge ${i.length} static meshes: incompatible geometry attributes`);let o=e??i[0].material;if(!e){const h=[],l=[];let c=0;const u=d=>{let f=h.indexOf(d);return f<0&&(f=h.length,h.push(d)),f};if(i.forEach((d,f)=>{const g=s[f],_=g.index?.count??g.getAttribute("position").count;if(Array.isArray(d.material))for(const m of g.groups){const p=d.material[m.materialIndex??0];if(!p)throw new Error("Static batch has an invalid material group");l.push({start:c+m.start,count:m.count,materialIndex:u(p)})}else l.push({start:c,count:_,materialIndex:u(d.material)});c+=_}),h.length===1&&!i.some(d=>Array.isArray(d.material)))o=h[0];else{o=h;for(const d of l)r.addGroup(d.start,d.count,d.materialIndex)}}const a=he(r,o,t);return a.userData.batchSourceCount=i.length,a}finally{s.forEach(r=>r.dispose())}}function ui(i=1,t=.4){const e=[],n=[],s=[];for(let a=0;a<=8;a++){const h=a/8,l=Math.sin(Math.PI*h)*t*.5;for(let c=0;c<3;c++){const u=c-1;e.push(u*l,h*i,Math.sin(h*Math.PI)*.06+Math.abs(u)*.035),n.push(c/2,h)}}for(let a=0;a<8;a++)for(let h=0;h<2;h++){const l=a*3+h;s.push(l,l+3,l+1,l+1,l+3,l+4)}const o=new qt;return o.setAttribute("position",new xt(e,3)),o.setAttribute("uv",new xt(n,2)),o.setIndex(s),o.computeVertexNormals(),o}function Pv(i,t){const e=Ye(137),n=[];for(const s of vu){const r=Math.floor(s.getLength()/.66);for(let o=0;o<r;o++){const a=o/r,h=s.getPointAt(a),l=s.getTangentAt(a);if(!(Math.abs(h.x+2)<3.4&&Math.abs(h.z-.5)<1.2))for(let c=0;c<2;c++){const u=(c-.5)*.58,d=h.x-l.z*u,f=h.z+l.x*u;if(Ui.waterAt(d,f)!==null)continue;const g=new Je;for(let p=0;p<7;p++){const x=p/7*Math.PI*2,y=.31*(.83+e()*.22),v=Math.cos(x)*y,A=Math.sin(x)*y*.82;p?g.lineTo(v,A):g.moveTo(v,A)}g.closePath();const _=new Gi(g,{depth:.085,bevelEnabled:!0,bevelSize:.025,bevelThickness:.018,bevelSegments:1,steps:1});_.rotateX(-Math.PI/2);const m=he(_,t.stoneLight);m.position.set(d,Ui.heightAt(d,f)+.04,f),m.rotation.y=e()*.55,n.push(m)}}}return bs(n,i),n.forEach(s=>s.geometry.dispose()),n.length}function Dv(i){const t=Ye(i.seed+152),e=new ee;e.name="Embedded shore rocks and strata",i.scene.add(e);const n=[],s=new Se(1,13,9),r=s.attributes.position;for(let l=0;l<r.count;l++){const c=r.getX(l),u=r.getY(l),d=r.getZ(l),f=1+Kn(c*4+u*2,d*5)*.18;r.setXYZ(l,c*f,u*f,d*f)}s.computeVertexNormals();for(let l=0;l<105;l++){let c,u;const d=t()*Math.PI*2;if(l<48?(c=5+Math.cos(d)*(5.7+t()*.8),u=7+Math.sin(d)*(3.6+t()*.7)):(c=(t()-.5)*39,u=(t()-.5)*27),i.terrain.islandValue(c,u)>.98||i.terrain.occupied(c,u,.2)||i.terrain.pathDistance(c,u)<.9)continue;const f=.13+t()*.47,g=he(s,i.materials.stoneDark);g.position.set(c,i.terrain.heightAt(c,u)-f*.1,u),g.scale.set(f*1.4,f*.7,f),g.rotation.set(t()*.6,t()*6,t()*.3),n.push(g)}bs(n,e);const o=[],a=i.scene.getObjectByName("Continuous layered rock mass");a?.updateWorldMatrix(!0,!1);const h=new lr;for(let l=0;l<10;l++){const c=l/10*Math.PI*2+.1,u=1.5+t()*4,d=new E(Math.cos(c),0,Math.sin(c));h.set(new E(d.x*35,-u,d.z*35),d.clone().negate());const f=a?h.intersectObject(a)[0]:null;if(!f)continue;const g=he(s,i.materials.stoneDark);g.position.copy(f.point).addScaledVector(d,-.22),g.scale.set(.85+t()*.35,.17+t()*.12,.52),g.rotation.y=Math.PI*.5-c,o.push(g)}return bs(o,e),e}function Mu(){const i=[],t=[],e=[],r=new Pt("#c7c6b8"),o=new Pt("#d4c7b1"),a=new Pt("#8d9991");for(let l=0;l<=72;l++)for(let c=0;c<=192;c++){const u=c/192*Math.PI*2,d=l/72,f=Math.cos(u)*21*cr(u),g=Math.sin(u)*15*cr(u),_=Math.pow(1-d,.46),m=Math.sin(d*Math.PI),p=Math.pow(.5+.5*Math.sin(u*19+Math.sin(u*7)*2+d*3.3),12),x=d*19+Math.sin(u*3)*1.6+Math.cos(u*7)*.6,y=Math.sin(x)*.018+Math.sin(x*2.07)*.009-Math.pow(.5+.5*Math.sin(x*2.07),14)*.018,v=1+m*(.062*Math.sin(u*5+d*5)+.035*Math.sin(u*11-d*3)+y-p*.065),A=f*_*v-d*1.7,M=g*_*v-d*.7,S=Nl(f,g)*(1-d)-13.4*d+m*(Math.sin(u*4+d*6)*.36+Kn(A*.35,M*.35)*.25);i.push(A,S,M);const R=r.clone().lerp(o,.25+.22*Math.sin(x*.65));R.lerp(a,p*.28+Math.pow(.5+.5*Math.sin(x),18)*.14),d<.13&&R.lerp(new Pt("#82966b"),.24*(1-d/.13)),Math.abs(A+1)<2.6&&M>7&&R.multiplyScalar(.75),t.push(R.r,R.g,R.b)}for(let l=0;l<72;l++)for(let c=0;c<192;c++){const u=l*193+c;e.push(u,u+1,u+192+1,u+1,u+192+2,u+192+1)}const h=new qt;return h.setAttribute("position",new xt(i,3)),h.setAttribute("color",new xt(t,3)),h.setIndex(e),h.computeVertexNormals(),h}function Lv(){const i=new ne({color:"#ffffff",vertexColors:!0,roughness:1});return i.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCliff;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCliff=position;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
  varying vec3 vCliff;
  float mineral(vec3 p){return sin(p.x*15.3+sin(p.y*11.))*sin(p.z*17.7-p.y*22.);}`),t.fragmentShader=t.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
  float bedding=vCliff.y*4.7+sin(vCliff.x*.53)*.8+sin(vCliff.z*.45)*.65;
  float line=pow(.5+.5*sin(bedding),18.);
  float grain=mineral(vCliff);
  diffuseColor.rgb*=.96-line*.11+grain*.035;
  `),t.fragmentShader=t.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  float relief=sin(vCliff.y*4.7+sin(vCliff.x*.53)*.8+sin(vCliff.z*.45)*.65)*.007+mineral(vCliff)*.00035;
  vec3 sx=dFdx(-vViewPosition),sy=dFdy(-vViewPosition);
  vec3 rx=cross(sy,normal),ry=cross(normal,sx);float determinant=dot(sx,rx);
  vec3 bumped=abs(determinant)*normal-sign(determinant)*(dFdx(relief)*rx+dFdy(relief)*ry);
  normal=length(bumped)>.0000001?normalize(bumped):normal;
  `)},i.customProgramCacheKey=()=>"stratified-cliff-v1",i}function Iv(i){const t=new ee;t.name="Quiet garden boundaries and path lanterns",i.scene.add(t);const e=[],n=[],s=[[16.6,-7.1],[17.5,-5.6],[18,-3.8],[18.2,-2],[18.2,-.2]].map(([r,o])=>new E(r,i.terrain.heightAt(r,o),o));for(let r=0;r<s.length;r++){const o=s[r],a=he(fn(.15,.98,.16,.025),i.materials.woodLight);if(a.position.copy(o).add(new E(0,.47,0)),a.rotation.z=Math.sin(r*4)*.035,e.push(a),r)for(const h of[.35,.74]){const l=Cv(s[r-1].clone().add(new E(0,h,0)),o.clone().add(new E(0,h,0)),.042,i.materials.woodLight,new ee);e.push(l)}}for(const[r,o]of[[-8.1,2.5],[2.4,1.35],[10.9,2.8],[12.8,5.7]]){const a=i.terrain.heightAt(r,o),h=he(fn(.1,.72,.1,.018),i.materials.wood);h.position.set(r,a+.34,o),e.push(h);const l=he(new Ke(.16,.21,.1,8),i.materials.stoneDark,t,r,a+.035,o);l.receiveShadow=!0;for(const u of[.7,.99]){const d=he(fn(.23,.045,.23,.015),i.materials.metal);d.position.set(r,a+u,o),n.push(d)}for(const u of[-.095,.095])for(const d of[-.095,.095]){const f=he(fn(.018,.28,.018,.004),i.materials.metal);f.position.set(r+u,a+.85,o+d),n.push(f)}he(new Se(.044,8,6),i.materials.warm,t,r,a+.83,o).scale.y=1.8;const c=he(fn(.18,.23,.18,.015),i.materials.glass,t,r,a+.85,o);c.castShadow=!1}return bs(e,t,i.materials.woodLight),bs(n,t,i.materials.metal),t}const Uv="varying vec3 vW;void main(){vW=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(vW,1.);}",Nv=`precision highp sampler3D;uniform sampler3D uNoise;uniform float uTime;uniform int uSteps;varying vec3 vW;
float localLight=1.;float density(vec3 p){vec3 q=p+vec3(uTime*.16,0.,uTime*.055);float broad=texture(uNoise,vec3(q.x*.0024,.4,q.z*.0024)).r;float top=-30.+broad*18.;float n=texture(uNoise,q*.0045).r*.72+texture(uNoise,q*.011).r*.28;float shell=smoothstep(-43.,-33.,p.y)*(1.-smoothstep(top-5.,top+1.,p.y));localLight=clamp((p.y-top+5.)*.11+.36+(n-.5)*.18,.1,.98);return max(0.,n-.22)*shell*.42;}
void main(){vec3 dir=normalize(vW-cameraPosition);vec3 lo=vec3(-190.,-43.,-190.),hi=vec3(190.,-11.,190.);vec3 safe=mix(vec3(-1.),vec3(1.),step(vec3(0.),dir))*max(abs(dir),vec3(.00001));vec3 ta=(lo-cameraPosition)/safe,tb=(hi-cameraPosition)/safe;vec3 tn=min(ta,tb),tf=max(ta,tb);float enter=max(max(tn.x,tn.y),tn.z);float leave=min(min(tf.x,tf.y),tf.z);float start=max(enter,0.);if(leave<=start)discard;float stepSize=min((leave-start)/float(uSteps),8.);vec3 sum=vec3(0.);float tr=1.;for(int i=0;i<48;i++){if(i>=uSteps)break;vec3 p=cameraPosition+dir*(start+(float(i)+.5)*stepSize);float den=density(p);float a=1.-exp(-den*stepSize);float light=localLight;vec3 col=mix(vec3(.39,.59,.72),vec3(1.18,1.2,1.12),light);sum+=tr*a*col;tr*=1.-a;if(tr<.025)break;}gl_FragColor=vec4(sum/max(1.-tr,.0001),1.-tr);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`;function rh(i,t,e){const n=Ye(e),s=[],r=[],o=[],a=48,h=12,l=Array.from({length:a+1},()=>n());l[a]=l[0];for(let u=0;u<=h;u++)for(let d=0;d<=a;d++){const f=d/a*Math.PI*2,g=u/h,_=i*Math.pow(1-g,.82)*(1+.07*Math.sin(f*3+e)+.035*Math.sin(f*7-e));s.push(Math.cos(f)*_,Math.pow(g,.88)*t+Math.sin(f*5+g*5)*t*.065*Math.sin(g*Math.PI),Math.sin(f)*_);const m=new Pt("#98b7bf").multiplyScalar(.83+.15*Math.sin(f-.4)+g*.1);r.push(m.r,m.g,m.b)}for(let u=0;u<h;u++)for(let d=0;d<a;d++){const f=u*(a+1)+d;o.push(f,f+a+1,f+1,f+1,f+a+1,f+a+2)}const c=new qt;return c.setAttribute("position",new xt(s,3)),c.setAttribute("color",new xt(r,3)),c.setIndex(o),c.computeVertexNormals(),c}function Fv(i){const t=new De({side:ze,depthWrite:!1,vertexShader:"varying vec3 vDirection;void main(){vDirection=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vDirection;void main(){vec3 d=normalize(vDirection);float h=smoothstep(-.12,.8,d.y);vec3 c=mix(vec3(.32,.64,.79),vec3(.16,.46,.7),h);float sun=pow(max(dot(d,normalize(vec3(-.5,.85,.4))),0.),90.);c+=sun*vec3(.12,.105,.07);gl_FragColor=vec4(c,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}),e=he(new Se(290,40,24),t,i.scene);e.castShadow=!1,e.receiveShadow=!1,e.renderOrder=-20;const n=32,s=Ye(179),r=new Uint8Array(n**3);for(let f=0;f<r.length;f++)r[f]=Math.floor(s()*255);const o=new zh(r,n,n,n);o.format=po,o.type=bn,o.minFilter=pn,o.magFilter=pn,o.wrapR=o.wrapS=o.wrapT=eo,o.unpackAlignment=1,o.needsUpdate=!0;const a=new De({uniforms:{uNoise:{value:o},uTime:i.timeUniform,uSteps:{value:30}},vertexShader:Uv,fragmentShader:Nv,transparent:!0,depthWrite:!1,side:ze}),h=he(new In(380,32,380),a,i.scene,0,-27,0);h.castShadow=!1,h.receiveShadow=!1,h.renderOrder=-5;const l=new ne({vertexColors:!0,roughness:1});for(let f=0;f<7;f++){const g=2.4+f*.48,_=he(rh(17+f%3*4,14+f%4*4,142+f),l,i.scene,Math.cos(g)*170,-35,Math.sin(g)*170);_.castShadow=!1}const c=new ee;c.position.set(-68,-1,-34),i.scene.add(c);const u=he(rh(6,4,951),new ne({color:"#a3bca9",roughness:1}),c,0,0,0);u.rotation.z=Math.PI,he(new Ke(5,4.3,.5,28),new ne({color:"#95b78a",roughness:1}),c,0,.2,0),he(new In(1.7,1.5,1.3),i.materials.stoneLight,c,1,1.2,0);const d=he(new Bi(1.4,.9,4),i.materials.roof,c,1,2.3,0);d.rotation.y=Math.PI/4;for(let f=0;f<3;f++){he(new Ke(.08,.15,1.2,7),i.materials.wood,c,-2+f*.6,1,1+f*.3);const g=new Se(1,10,7),_=g.attributes.position;for(let m=0;m<_.count;m++){const p=_.getX(m),x=_.getY(m),y=_.getZ(m),v=1+Kn(p*3+m*.01,y*3)*.18;_.setXYZ(m,p*v,x*v,y*v)}g.computeVertexNormals(),he(g,i.materials.leaf,c,-2+f*.6,2,1+f*.3).scale.set(.75,1,.7)}return i.qualityObjects.push({object:c,level:"standard"}),{sky:e,cloud:h,material:a,noiseTexture:o,setQuality:f=>{a.uniforms.uSteps.value=f==="high"?32:f==="performance"?16:24},debug:f=>{h.visible=!f}}}function de(i,t,e=.87){const n=new ne({color:i,roughness:e});return n.onBeforeCompile=s=>{s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vArtPosition;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vArtPosition=position;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vArtPosition;
float artHash(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,45.164)))*43758.5453);}`);const r=t==="wood"?"sin(vArtPosition.y*31.+sin(vArtPosition.z*5.)*2.+vArtPosition.x*14.)":t==="stone"?"sin(vArtPosition.y*16.+sin(vArtPosition.x*2.8+vArtPosition.z)*1.7)":"sin(vArtPosition.x*11.+vArtPosition.y*22.+vArtPosition.z*17.)";s.fragmentShader=s.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
float artGrain=${r};
float fine=artHash(floor(vArtPosition*110.));
diffuseColor.rgb*=0.94+artGrain*0.038+fine*0.08;`)},n.customProgramCacheKey=()=>t,n}function Ov(){return{stone:de("#ded5bc","stone"),stoneLight:de("#f0e9d5","stone"),stoneDark:de("#a5aa94","stone"),wood:de("#b78d57","wood"),woodLight:de("#d5b37b","wood"),woodDark:de("#796046","wood"),roof:de("#d88758","tile"),teal:de("#6baca1","wood"),soil:de("#ad9670","earth"),metal:new ne({color:"#5f6254",metalness:.72,roughness:.34}),glass:new Jf({color:"#e2f3df",roughness:.12,metalness:.05,transmission:0,clearcoat:.7,clearcoatRoughness:.12,thickness:.09,transparent:!0,opacity:.22,depthWrite:!1}),warm:new ne({color:"#ffe5ad",emissive:"#efba68",emissiveIntensity:.28,roughness:.7}),cream:new ne({color:"#f0e5c9",roughness:1}),pink:new ne({color:"#e5b9b6",roughness:.92,side:xe}),leaf:new ne({color:"#83ac45",roughness:.83,side:xe})}}const zv=new E(0,1,0);function xn(i){const t=hi.getPoint(i),e=hi.getTangent(i);return t.y=Ul(hi,i),e.y=0,e.normalize(),{t:i,point:t,direction:e,side:new E(e.z,0,-e.x)}}function ks(i,t,e,n){if(!i.length)return null;const s=i.map(a=>{const h=a.index?a.toNonIndexed():a.clone();return h.deleteAttribute("uv"),h}),r=Ps(s);if(s.forEach(a=>a.dispose()),i.forEach(a=>a.dispose()),!r)return null;const o=new te(r,t);return o.name=n,o.castShadow=o.receiveShadow=!0,e.add(o),o}function as(i,t,e,n=new ge){return i.clone().applyMatrix4(new se().compose(t,n,e))}function Bv(){const i=new Se(1,18,12),t=i.attributes.position;for(let e=0;e<t.count;e++){const n=t.getX(e),s=t.getY(e),r=t.getZ(e),o=1+.06*Math.sin(n*8+r*5)*Math.cos(s*7)+.035*Math.sin(r*14-s*5);t.setXYZ(e,n*o,s*o+.035*Math.sin(n*11+r*7),r*o)}return i.computeVertexNormals(),i}function ls(i){return new ge().setFromRotationMatrix(new se().makeBasis(i.side,zv,i.direction))}function kv(i,t,e,n){const s=[],r=[],o=[];for(let l=0;l<=9;l++)for(let c=0;c<3;c++){const u=l/9,d=c-1,f=Math.sin(Math.PI*u)*t*.5;s.push(d*f+Math.sin(u*2.1)*e,u*i,Math.sin(u*Math.PI)*.018+Math.abs(d)*.004+Math.sin(u*3+n)*.012*u),r.push(c*.5,u)}for(let l=0;l<9;l++)for(let c=0;c<2;c++){const u=l*3+c;o.push(u,u+1,u+3,u+1,u+4,u+3)}const h=new qt;return h.setAttribute("position",new xt(s,3)),h.setAttribute("uv",new xt(r,2)),h.setIndex(o),h.computeVertexNormals(),h}function Vv(i,t){const n=Math.sqrt(.11864406779661017),s=14.65+1.2*(1-Math.exp(-n*7))+.23*Math.sin(n*3),r=new E(.27,-2,s+.012),o=i.scene.getObjectByName("Continuous layered rock mass");let a=new E(.27,-2.15,14.65),h=!1,l=14.91;if(o){o.updateWorldMatrix(!0,!1);const A=new lr(new E(.27,-2.15,25),new E(0,0,-1)).intersectObject(o,!1)[0];A&&(a=A.point.clone(),l=a.z,a.z-=.26,h=!0)}const c=[],u=[],d=16,f=18,g=(d+1)*(f+1),_=s+.1;for(let v=0;v<2;v++)for(let A=0;A<=d;A++){const M=A/d,S=1.08-.27*M+.045*Math.sin(M*8),R=.37-.15*M;for(let w=0;w<=f;w++){const b=w/f*2-1,P=a.x+b*S*(1+.025*Math.sin(b*7+M*4)),k=a.z+(_-a.z)*M+.045*Math.sin(b*5+.6)*M,B=-1.98-.065*M+.014*Math.sin(M*9+b*2)-.026*b*b;c.push(P,B-v*R,k)}}for(let v=0;v<d;v++)for(let A=0;A<f;A++){const M=v*(f+1)+A,S=M+f+1;u.push(M,S,M+1,M+1,S,S+1,g+M,g+M+1,g+S,g+M+1,g+S+1,g+S)}for(let v=0;v<d;v++)for(const A of[0,f]){const M=v*(f+1)+A,S=M+f+1;A===0?u.push(M,g+M,S,S,g+M,g+S):u.push(M,S,g+M,S,g+S,g+M)}for(const v of[0,d])for(let A=0;A<f;A++){const M=v*(f+1)+A;v===0?u.push(M,M+1,g+M,M+1,g+M+1,g+M):u.push(M,g+M,M+1,M+1,g+M,g+M+1)}const m=new qt;m.setAttribute("position",new xt(c,3)),m.setIndex(u),m.computeVertexNormals(),t.push(m);const p=new hr({side:xe}),x=new te(m,p),y=new lr(new E(r.x,r.y+2,r.z),new E(0,-1,0)).intersectObject(x,!1)[0];return y&&(r.copy(y.point),r.y+=.008),p.dispose(),{contact:r,root:a,attached:h,exposedLength:_-l,width:2.16,thickness:[.22,.37],profile:"short tabular wet limestone shelf"}}function Hv(i){const t=new ee;t.name="Spring cascades and riparian details",i.scene.add(t);const e=Ye(i.seed+841),n=[],s=[],r=[],o=[],a=[],h=Bv(),l=de("#a49e91","stone",.83),c=new ne({color:"#6b9361",roughness:1}),u=[],d=xn(0),f=ls(d),g=new Je;g.moveTo(-1.1,-.42),g.lineTo(-1.12,.22),g.lineTo(-.87,.64),g.lineTo(-.5,.8),g.lineTo(.1,.76),g.lineTo(.66,.6),g.lineTo(1.03,.31),g.lineTo(1.08,-.42),g.lineTo(.17,-.42),g.lineTo(.17,.34),g.lineTo(.045,.45),g.lineTo(-.16,.34),g.lineTo(-.19,-.42),g.closePath();const _=new Gi(g,{depth:.52,bevelEnabled:!0,bevelThickness:.055,bevelSize:.055,bevelSegments:2,steps:1,curveSegments:8});_.applyMatrix4(new se().compose(d.point.clone().addScaledVector(d.direction,-.36),f,new E(1,1,1))),n.push(_),u.push({kind:"spring-crevice",point:d.point.toArray()});for(let U=0;U<9;U++){const O=xn(.012+U*.009),F=U%2?1:-1,Y=O.point.clone().addScaledVector(O.side,F*(.7+U*.014)),J=i.terrain.heightAt(Y.x,Y.z),D=O.point.y+.08+e()*.06;Y.y=(J-.07+D)*.5;const G=(D-J+.07)*.5;n.push(as(h,Y,new E(.24+e()*.1,G,.31+e()*.12),ls(O)))}const m=[],p=[];for(let U=0;U<3;U++){const{mid:O,start:F,end:Y,width:J}=mu[U],D=xn(O),G=xn(Y);for(const N of[-1,1]){const $=D.point.clone().addScaledVector(D.side,N*(J*.51+.11)),pt=i.terrain.heightAt($.x,$.z),dt=D.point.y+.09;$.y=(pt-.055+dt)*.5,n.push(as(h,$,new E(.2,(dt-pt+.055)*.5,.28),ls(D)))}const it=xn(F+(Y-F)*.33);for(let N=0;N<3;N++){const $=it.point.clone().addScaledVector(it.side,(N-1)*J*.29).addScaledVector(it.direction,[.06,-.08,.025][N]);$.y-=.105+[.018,0,.027][N],s.push(as(h,$,new E(J*(.19+N*.018),.1,.25+N*.025),ls(it)))}const W=G.point.clone().addScaledVector(G.direction,.16);W.y=i.terrain.waterAt(W.x,W.z)??G.point.y,m.push(new ae(W.x,W.z,.3,.55));const Q=xn(Y+.01).point,H=(Q.y-G.point.y)/Math.hypot(Q.x-G.point.x,Q.z-G.point.z);p.push({point:G.point.clone().add(new E(0,.03,0)),direction:G.direction.clone(),main:!1,slope:H}),u.push({kind:"shallow-cascade",parameter:[F,Y],start:xn(F).point.toArray(),end:G.point.toArray(),drop:xn(F).point.y-G.point.y,width:J})}for(let U=0;U<6;U++){const O=xn(.14+U*.105),F=O.point.clone().addScaledVector(O.side,(U%2?1:-1)*(.36+e()*.12)),Y=i.terrain.heightAt(F.x,F.z),J=O.point.y+.035;F.y=(Y+J)*.5,s.push(as(h,F,new E(.13+e()*.07,(J-Y)*.5,.18+e()*.06),ls(O)));const D=F.clone().addScaledVector(O.direction,.29);D.y=O.point.y,m.push(new ae(F.x,F.z,.14+e()*.045,.7));const G=F.clone();G.y=J+.008,r.push(as(h,G,new E(.09,.012,.11),ls(O)))}let x=0;for(let U=0;U<34;U++){const O=xn(.055+e()*.86),F=(U%2?1:-1)*(.5+e()*.21),Y=O.point.clone().addScaledVector(O.side,F),J=i.terrain.heightAt(Y.x,Y.z),D=O.point.y-J;if(!(D<.1||D>.7)){x++;for(let G=0;G<4;G++){const it=Math.min(D-.035,.11+e()*.18),W=kv(it,.025+e()*.02,.025+e()*.04,G*.8),Q=e()*Math.PI*2;W.rotateY(Q),W.translate(Y.x+(e()-.5)*.06,J+.012,Y.z+(e()-.5)*.06),o.push(W)}if(U%4===0){const G=Y.clone();G.y=J+.012,r.push(as(h,G,new E(.14,.014,.1)))}}}const y=new ne({color:"#72a27b",roughness:.9,side:xe}),v=o.map(U=>{const O=U.attributes.uv,F=U.attributes.position.count,Y=new Float32Array(F);for(let J=0;J<F;J++)Y[J]=O.getY(J);return U.setAttribute("aSway",new Ae(Y,1)),U});y.onBeforeCompile=U=>{U.uniforms.uRiverTime=i.timeUniform,U.vertexShader=U.vertexShader.replace("#include <common>",`#include <common>
uniform float uRiverTime;attribute float aSway;`).replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.x+=sin(position.x*3.1+position.z*2.4-uRiverTime*1.3)*aSway*aSway*.008;`)},y.customProgramCacheKey=()=>"fresh-river-grass-1";const A=ks(v,y,t,"Submerged rooted ribbon grasses");A&&(A.castShadow=!1);for(let U=0;U<7;U++){const O=xn(.12+U*.103),F=O.point.clone().addScaledVector(O.side,(U%2?1:-1)*.55),Y=i.terrain.heightAt(F.x,F.z);F.y=Y+.025;const J=O.direction.clone().multiplyScalar(.17+e()*.13),D=F.clone().add(J);D.y=i.terrain.heightAt(D.x,D.z)+.027;const G=F.clone().lerp(D,.5).add(new E(.025,.006,-.008));a.push(new Ss(new pi([F,G,D]),9,.011,5,!1));const it=D.clone().lerp(F,.4).addScaledVector(O.side,.08);it.y=i.terrain.heightAt(it.x,it.z)+.025,a.push(new Ss(new pi([D.clone().lerp(F,.65),it]),5,.006,4,!1))}ks(a,i.materials.woodDark,t,"A few settled riverbed twigs");const M=Vv(i,s);p.push({point:M.contact.clone(),direction:new E(.5,0,.86).normalize(),main:!0,slope:0}),u.push({kind:"waterfall-rock-contact",point:M.contact.toArray(),rockRoot:M.root.toArray(),attachedToCurrentCliff:M.attached,exposedLength:M.exposedLength,width:M.width,thickness:M.thickness,profile:M.profile}),ks(n,i.materials.stoneDark,t,"Embedded spring headwall and cascade shoulders"),ks(s,l,t,"Wet sills flow obstacles and attached cliff lip"),ks(r,c,t,"Sparse wet-stone moss"),h.dispose();const S=60,R=new Float32Array(S*3),w=new Float32Array(S),b=new Float32Array(S),P=Array.from({length:S},()=>({phase:e(),side:e()*2-1,reach:.7+e()*.6})),k=new qt;k.setAttribute("position",new Ae(R,3)),k.setAttribute("aOpacity",new Ae(w,1)),k.setAttribute("aSize",new Ae(b,1));const B=new De({transparent:!0,depthWrite:!1,vertexShader:"attribute float aOpacity;attribute float aSize;varying float vOpacity;void main(){vOpacity=aOpacity;vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(aSize*170./max(1.,-mv.z),.6,3.5);gl_Position=projectionMatrix*mv;}",fragmentShader:`varying float vOpacity;void main(){float r=length(gl_PointCoord-.5);float edge=1.-smoothstep(.1,.5,r);gl_FragColor=vec4(.74,.9,.89,edge*vOpacity);
#include <tonemapping_fragment>
#include <colorspace_fragment>}`}),q=new qh(k,B);q.name="Pooled little waterfall splashes",q.frustumCulled=!1,q.renderOrder=9,t.add(q);const I=U=>{for(let O=0;O<S;O++){const F=p[O<24?Math.floor(O/8):3],Y=P[O],J=F.main,D=J?1.6:1.15,G=(U/D+Y.phase)%1,it=G*(J?.82:.45),W=J?.55:.24,Q=Y.side*(J?.27:.26),H=W*it*Y.reach;R[O*3]=F.point.x+F.direction.x*H+F.direction.z*Q*it,R[O*3+2]=F.point.z+F.direction.z*H-F.direction.x*Q*it,R[O*3+1]=F.point.y+(J?.35:.38)*it-(J?2.3:2.5)*it*it;const N=J?null:F.point.y-.03+H*F.slope;w[O]=(N!==null&&R[O*3+1]<N?0:Math.sin(Math.PI*G))*(J?.15:.16),b[O]=(J?.17:.1)*Y.reach}k.attributes.position.needsUpdate=!0,k.attributes.aOpacity.needsUpdate=!0,k.attributes.aSize.needsUpdate=!0};return I(0),i.addUpdate(U=>I(U)),t.userData.waterDetailStats={cascadeCount:3,aquaticPlantClumps:x,submergedTwigs:7,foamWakes:9,surfaceLayers:1,pooledDroplets:S,placements:u},{root:t,obstacles:m,stats:t.userData.waterDetailStats}}const Gv=`
uniform float uTime;
attribute float aDepth;attribute float aRegion;attribute vec2 aFlow;
attribute vec4 aFlowGradient;attribute vec2 aDepthGradient;
varying vec3 vWorld;varying vec3 vNormalW;varying vec2 vFlowUV;varying vec2 vDownstream;
varying float vDepth;varying float vRegion;varying float vLakeBlend;
float lakeField(vec2 p){vec2 q=(p-vec2(5.,7.))/vec2(5.45,3.35);float a=atan(q.y,q.x+.0000001);return length(q)/(1.+.055*sin(a*5.)+.03*cos(a*7.));}
void main(){
 vec3 p=position;float shore=smoothstep(0.,.24,aDepth);
 float lake=max(aRegion,1.-smoothstep(1.,1.18,lakeField(p.xz)));vLakeBlend=lake;
 vec2 flowGradient=aFlowGradient.zw;vDownstream=flowGradient/max(length(flowGradient),.00001);
 float pa=mix(aFlow.y*4.3+.25*sin(aFlow.x*6.),dot(p.xz,vec2(1.8,.8)),lake);
 float pb=mix(aFlow.y*8.9+.2*cos(aFlow.x*9.),dot(p.xz,vec2(-1.1,3.6)),lake);
 float pc=mix(aFlow.y*13.7+aFlow.x*4.,dot(p.xz,vec2(4.1,-1.4)),lake);
 float a=pa-uTime*mix(1.05,.55,lake),b=pb-uTime*mix(1.9,.9,lake),c=pc-uTime*mix(3.,1.35,lake);
 float h=sin(a)*.012+sin(b)*.005+sin(c)*.0025;
 vec2 ga=mix(flowGradient*4.3+1.5*cos(aFlow.x*6.)*aFlowGradient.xy,vec2(1.8,.8),lake);
 vec2 gb=mix(flowGradient*8.9-1.8*sin(aFlow.x*9.)*aFlowGradient.xy,vec2(-1.1,3.6),lake);
 vec2 gc=mix(flowGradient*13.7+4.*aFlowGradient.xy,vec2(4.1,-1.4),lake);
 vec2 dh=(cos(a)*.012*ga+cos(b)*.005*gb+cos(c)*.0025*gc)*shore;
 float s=clamp(aDepth/.24,0.,1.);dh+=h*(6.*s*(1.-s)/.24)*aDepthGradient;
 p.y+=h*shore;vec3 baseNormal=normal.y<0.?-normal:normal;
 vec2 slope=-baseNormal.xz/max(baseNormal.y,.05)+dh;
 vNormalW=normalize(vec3(-slope.x,1.,-slope.y));vWorld=(modelMatrix*vec4(p,1.)).xyz;
 vFlowUV=aFlow;vDepth=aDepth;vRegion=aRegion;
 gl_Position=projectionMatrix*viewMatrix*vec4(vWorld,1.);
}`,Wv=`
uniform float uTime;uniform vec3 uSun;uniform int uDebug;
uniform vec4 uRipples[8];uniform vec4 uObstacles[9];uniform mat4 uBoatInverse;
varying vec3 vWorld;varying vec3 vNormalW;varying vec2 vFlowUV;varying vec2 vDownstream;
varying float vDepth;varying float vRegion;varying float vLakeBlend;
float lakeField(vec2 p){vec2 q=(p-vec2(5.,7.))/vec2(5.45,3.35);float a=atan(q.y,q.x+.0000001);return length(q)/(1.+.055*sin(a*5.)+.03*cos(a*7.));}
float hashWater(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseWater(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hashWater(i),hashWater(i+vec2(1,0)),f.x),mix(hashWater(i+vec2(0,1)),hashWater(i+vec2(1,1)),f.x),f.y);}
void main(){
 if(vDepth<=.002)discard;
 if(vRegion<.5&&lakeField(vWorld.xz)<1.)discard;
 vec3 localBoat=(uBoatInverse*vec4(vWorld,1.)).xyz;float s=(localBoat.z+1.64)/3.28;
 if(s>0.&&s<1.){float keel=-.36+.53*pow(abs(2.*s-1.),3.1);float height=localBoat.y-keel-.063;
  if(height>0.){float halfWidth=.637*pow(max(sin(3.14159265*s),0.),.68)*pow(clamp(height/.57,0.,1.),1./1.65);if(abs(localBoat.x)<halfWidth)discard;}}
 vec2 along=vDownstream/max(length(vDownstream),.00001),across=vec2(along.y,-along.x);
 vec3 n=vNormalW;float speed=mix(.34,.075,vLakeBlend);
 vec2 flow=mix(vec2(vFlowUV.x*4.,vFlowUV.y*.9),vWorld.xz*.7,vLakeBlend)-vec2(.025,uTime*speed);
 float nx=noiseWater(flow+vec2(.07,0))-noiseWater(flow-vec2(.07,0));
 float ny=noiseWater(flow+vec2(0,.07))-noiseWater(flow-vec2(0,.07));
 n.xz+=(across*nx+along*ny)*.11;
 float foam=0.;
 for(int i=0;i<9;i++){vec4 obstacle=uObstacles[i];if(obstacle.z<=0.)continue;
  vec2 delta=vWorld.xz-obstacle.xy;float downstream=dot(delta,along),lateral=dot(delta,across);
  float width=obstacle.z+max(0.,downstream)*.13;
  float wake=smoothstep(0.,obstacle.z,downstream)*exp(-max(0.,downstream)/(obstacle.z*4.))*exp(-lateral*lateral/max(.001,width*width));
  float phase=downstream*13.-uTime*1.8+noiseWater(delta*3.)*2.;
  n.xz+=along*cos(phase)*wake*.027*obstacle.w;
  float bubbles=smoothstep(.54,.73,noiseWater(vec2(lateral*22.,downstream*9.-uTime*2.4)));
  foam+=wake*bubbles*.28*obstacle.w;
 }
 float ring=0.;for(int i=0;i<8;i++){float age=uTime-uRipples[i].z;if(age<0.||age>6.)continue;
  vec2 radial=vWorld.xz-uRipples[i].xy;float d=length(radial),offset=(d-age*1.1)*3.1;
  float envelope=exp(-offset*offset-age*.75),rr=sin(d*17.-age*16.);
  ring+=rr*envelope*uRipples[i].w;n.xz+=radial/max(d,.001)*rr*envelope*.035*uRipples[i].w;}
 n=n/max(length(n),.00001);vec3 eyeVector=cameraPosition-vWorld;vec3 eye=eyeVector/max(length(eyeVector),.00001);
 float fres=pow(1.-clamp(dot(eye,n),0.,1.),4.3);
 vec3 body=mix(vec3(.12,.57,.55),vec3(.035,.36,.46),smoothstep(.08,1.,vDepth));
 vec3 reflection=mix(vec3(.46,.76,.83),vec3(.22,.53,.73),clamp(reflect(-eye,n).y,0.,1.));
 vec3 halfVector=uSun/max(length(uSun),.00001)+eye;vec3 halfDir=halfVector/max(length(halfVector),.00001);
 float spec=pow(clamp(dot(n,halfDir),0.,1.),190.)*.42;
 vec3 col=mix(body,reflection,.10+fres*.57)+vec3(spec)+vec3(.72,.88,.85)*ring*.016;
 // Broad, broken reflections advect with the same flow field. No repeated
 // parallel white lines, separate foam sheets or unrelated scrolling axes.
 float glimmer=noiseWater(flow*vec2(3.8,1.35)+vec2(noiseWater(flow*.7),0.));
 col+=vec3(.60,.84,.86)*(glimmer-.48)*mix(.095,.035,vLakeBlend);
 col=mix(col,vec3(.74,.88,.87),clamp(foam,0.,.2));
 float alpha=(mix(.35,.79,smoothstep(.03,.9,vDepth))+.14*fres)*smoothstep(.002,.085,vDepth);
 if(uDebug==1){col=n*.5+.5;alpha=1.;}if(uDebug==2){col=vec3(fres);alpha=1.;}if(uDebug==3){col=vec3(max(0.,vDepth));alpha=1.;}
 gl_FragColor=vec4(max(col,vec3(0.)),clamp(alpha,0.,1.));
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`;function aa(i){const t=i.getAttribute("position"),e=i.getAttribute("aFlow"),n=i.getAttribute("aDepth"),s=i.index,r=new Float64Array(t.count*6),o=new Float64Array(t.count);for(let l=0;l<s.count;l+=3){const c=[s.getX(l),s.getX(l+1),s.getX(l+2)],u=c[0],d=c[1],f=c[2],g=t.getX(d)-t.getX(u),_=t.getZ(d)-t.getZ(u),m=t.getX(f)-t.getX(u),p=t.getZ(f)-t.getZ(u),x=g*p-m*_;if(Math.abs(x)<1e-10)continue;const y=Math.abs(x);[e.getX.bind(e),e.getY.bind(e),n.getX.bind(n)].forEach((A,M)=>{const S=A(d)-A(u),R=A(f)-A(u),w=(S*p-R*_)/x,b=(g*R-m*S)/x;for(const P of c)r[P*6+M*2]+=w*y,r[P*6+M*2+1]+=b*y});for(const A of c)o[A]+=y}const a=new Float32Array(t.count*4),h=new Float32Array(t.count*2);for(let l=0;l<t.count;l++){const c=o[l]||1;for(let u=0;u<4;u++)a[l*4+u]=r[l*6+u]/c;h[l*2]=r[l*6+4]/c,h[l*2+1]=r[l*6+5]/c}return i.setAttribute("aFlowGradient",new Ae(a,4)),i.setAttribute("aDepthGradient",new Ae(h,2)),i}function oh(i,t,e=!1){const n=[],s=[],r=[],o=[],a=[];let c=0,u=i.getPoint(0),d=10;for(let g=0;g<=200;g++){const _=g/200,m=i.getPoint(_),p=i.getTangent(_),x=new E(-p.z,0,p.x).normalize(),y=e?2.4+.6*_:1.75+.48*Math.sin(_*5)**2,v=e?1.1:1.45/y;c+=m.distanceTo(u)/v,u=m.clone(),m.y=Math.min(d,e?m.y:Math.max(.18,Ul(i,_))),d=m.y;const A=e?2.4+.6*_:1.75+.48*Math.sin(_*5)**2;for(let M=0;M<=16;M++){const S=M/16,R=m.clone().addScaledVector(x,(S-.5)*A);n.push(R.x,R.y+.012,R.z),s.push(mi(R.y+.012-t.terrain.heightAt(R.x,R.z),-.5,1.4)),r.push(0),o.push(S,c)}}for(let g=0;g<200;g++)for(let _=0;_<16;_++){const m=g*17+_;a.push(m,m+1,m+16+1,m+1,m+16+2,m+16+1)}const f=new qt;return f.setAttribute("position",new xt(n,3)),f.setAttribute("aDepth",new xt(s,1)),f.setAttribute("aRegion",new xt(r,1)),f.setAttribute("aFlow",new xt(o,2)),f.setIndex(a),f.computeVertexNormals(),f}function Xv(i){const t=[],e=[],n=[],s=[],r=[];for(let l=0;l<=40;l++)for(let c=0;c<=128;c++){const u=c/128*Math.PI*2,d=l/40*(1+.055*Math.sin(u*5)+.03*Math.cos(u*7)),f=5+Math.cos(u)*d*5.45,g=7+Math.sin(u)*d*3.35;t.push(f,.192,g),e.push(mi(.192-i.terrain.heightAt(f,g),-.5,1.3)),n.push(1),s.push(f*.06+.5,g)}for(let l=0;l<40;l++)for(let c=0;c<128;c++){const u=l*129+c;r.push(u,u+1,u+128+1,u+1,u+128+2,u+128+1)}const h=new qt;return h.setAttribute("position",new xt(t,3)),h.setAttribute("aDepth",new xt(e,1)),h.setAttribute("aRegion",new xt(n,1)),h.setAttribute("aFlow",new xt(s,2)),h.setIndex(r),h.computeVertexNormals(),h}const qv=`uniform float uTime;varying vec2 vUv;varying vec3 vW;
void main(){vUv=uv;vec3 p=position;p.x+=sin(uv.y*18.-uTime*3.4+uv.x*7.)*.035*uv.y;p.z+=sin(uv.x*31.+uv.y*12.-uTime*4.)*.025;vW=(modelMatrix*vec4(p,1.)).xyz;gl_Position=projectionMatrix*viewMatrix*vec4(vW,1.);}`,Yv=`uniform float uTime;uniform float uLayer;varying vec2 vUv;varying vec3 vW;
float hashFall(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noiseFall(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hashFall(i),hashFall(i+vec2(1,0)),f.x),mix(hashFall(i+vec2(0,1)),hashFall(i+vec2(1,1)),f.x),f.y);}
void main(){vec2 uv=clamp(vUv,0.,1.);float moving=uv.y*12.-uTime*(1.4+uLayer*.17);
 float broad=noiseFall(vec2(uv.x*9.+uLayer*.8,moving*.65));
 float fineNoise=noiseFall(vec2(uv.x*29.,moving*2.1));
 float threads=pow(clamp(.5+.5*sin(uv.x*103.+broad*8.+fineNoise*3.),0.,1.),9.);
 float body=smoothstep(.30,.79,broad);float whitewater=smoothstep(.56,.86,fineNoise)*body;
 float wavering=.018+.026*noiseFall(vec2(moving*.4,uLayer+1.));
 float edge=smoothstep(wavering,wavering+.07,uv.x)*smoothstep(wavering,wavering+.07,1.-uv.x);
 float fade=1.-smoothstep(.63,1.,uv.y);
 float alpha=(.09+body*.21+threads*.13+whitewater*.07)*edge*fade;
 vec3 col=mix(vec3(.14,.56,.63),vec3(.83,.94,.93),body*.48+threads*.25+whitewater*.18);
 gl_FragColor=vec4(col,alpha);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}`;function jv(i){const t=[],e=[],n=[];for(let a=0;a<=100;a++){const h=a/100;for(let l=0;l<=28;l++){const c=l/28,u=3.45*(1-.2*h)+.22*Math.sin(h*17+i*1.4)*h,d=.1-17.7*h*h,f=14.65+1.2*(1-Math.exp(-h*7))+.23*Math.sin(h*3)+i*.065;t.push(-1+(c-.5)*u+.035*Math.sin(h*11),d,f+Math.sin(h*33+c*9)*h*.06),e.push(c,h)}}for(let a=0;a<100;a++)for(let h=0;h<28;h++){const l=a*29+h;n.push(l,l+28+1,l+1,l+1,l+28+1,l+28+2)}const o=new qt;return o.setAttribute("position",new xt(t,3)),o.setAttribute("uv",new xt(e,2)),o.setIndex(n),o.computeVertexNormals(),o}function Zv(i){const t=new ee;t.name="Connected water system",i.scene.add(t);const e=Array.from({length:8},()=>new ae(0,0,-100,0));let n=0,s=0;const r=new De({uniforms:{uTime:i.timeUniform,uSun:{value:new E(-.5,1,.4)},uDebug:{value:0},uRipples:{value:e},uObstacles:{value:Array.from({length:9},()=>new ae)},uBoatInverse:{value:new se().makeTranslation(1e4,1e4,1e4)}},vertexShader:Gv,fragmentShader:Wv,transparent:!0,depthWrite:!1,side:Zn}),o=he(aa(oh(hi,i)),r,t),a=he(aa(oh(_u,i,!0)),r,t),h=he(aa(Xv(i)),r,t);for(const S of[o,a,h])S.castShadow=!1,S.renderOrder=3;h.name="Pond interaction surface",i.registerInteraction(h,"pond",S=>{S&&(e[n].set(S.x,S.z,s,1),n=(n+1)%8)});for(let S=0;S<3;S++){const R=new De({uniforms:{uTime:i.timeUniform,uLayer:{value:S}},vertexShader:qv,fragmentShader:Yv,transparent:!0,depthWrite:!1,side:xe}),w=he(jv(S),R,t);w.name="Curved accelerating waterfall "+S,w.castShadow=!1,w.renderOrder=5+S}const l=i.scene.getObjectByName("moored-rowboat");l&&i.addUpdate(()=>{l.updateWorldMatrix(!0,!1),r.uniforms.uBoatInverse.value.copy(l.matrixWorld).invert()});const c=Ye(i.seed+20),u=[],d=new Se(1,8,5);for(let S=0;S<460;S++){let R,w;if(S<210){const B=c()*.97,q=hi.getPoint(B),I=hi.getTangent(B),U=(c()-.5)*1.9;R=q.x-I.z*U,w=q.z+I.x*U}else if(R=-.5+c()*11,w=3.4+c()*7,xo(R,w)>.98)continue;const b=i.terrain.heightAt(R,w),P=he(d,i.materials.stoneLight),k=.055+c()*.13;P.scale.set(k*1.4,k*.48,k),P.position.set(R,b+.025,w),P.rotation.set(c(),c()*6,c()*.4),u.push(P)}bs(u,t);const f=new ne({color:"#7dba79",roughness:.6,side:xe});for(const[S,R,w]of[[6.8,5.2,.36],[7.5,5.6,.28],[3.6,8.5,.32]]){const b=new Je;b.moveTo(0,0);for(let B=0;B<=48;B++){const q=.2+B/48*(Math.PI*2-.4);b.lineTo(Math.cos(q)*w,Math.sin(q)*w)}b.lineTo(0,0);const P=new Gi(b,{depth:.012,bevelEnabled:!1,steps:1});P.rotateX(-Math.PI/2);const k=he(P,f,t,S,.224,R);i.addUpdate(B=>{k.rotation.z=Math.sin(B*.8+S)*.018,k.position.y=.224+Math.sin(B*1.1+S)*.008})}const g=160,_=new Float32Array(g*3),m=new Float32Array(g),p=Array.from({length:g},()=>c()),x=new qt;x.setAttribute("position",new Ae(_,3)),x.setAttribute("aSize",new Ae(m,1));const y=new De({uniforms:{uScale:{value:150}},vertexShader:"attribute float aSize;varying float vA;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(aSize*150./max(.1,-mv.z),1.,5.);vA=aSize;gl_Position=projectionMatrix*mv;}",fragmentShader:"varying float vA;void main(){float d=length(gl_PointCoord-.5);float a=(1.-smoothstep(.1,.5,d))*.25*clamp(vA,0.,1.);gl_FragColor=vec4(.8,.96,1.,a);}",transparent:!0,depthWrite:!1}),v=new qh(x,y);v.frustumCulled=!1,v.renderOrder=8,t.add(v);let A=-20;i.addUpdate(S=>{s=S,S-A>5.7&&(A=S,e[n].set(4.4+Math.sin(S)*1.8,7+Math.cos(S*.3),S,.3),n=(n+1)%8);for(let R=0;R<g;R++){const w=(S*.18+p[R])%1,b=(p[(R+7)%g]-.5)*3.5;_[R*3]=-1+b*(1+w*.25),_[R*3+1]=-.3-w*w*16.7,_[R*3+2]=15.5+w*.7+Math.sin(R*4.1)*.25,m[R]=Math.sin(w*Math.PI)*(.6+p[R]*.5)}x.attributes.position.needsUpdate=!0,x.attributes.aSize.needsUpdate=!0});const M=Hv(i);return M.obstacles.forEach((S,R)=>r.uniforms.uObstacles.value[R].copy(S)),t.userData.waterStats={connected:!0,boatInteriorMask:!!l,flow:"arc travel time / local width speed",normal:"single surface with flow-aligned waves, terrain shoreline and obstacle wakes",pondHeight:.18,fallLayers:3,submergedStones:u.length,ripplePool:8,dropletPool:g,details:M.stats},{group:t,material:r,pond:h,ripples:e,debug:S=>r.uniforms.uDebug.value=S}}const V=(i=0,t=0,e=0)=>new E(i,t,e),yu=(i,t,e,n=.035)=>new Mo(i,t,e,1,Math.min(n,i*.18,t*.18,e*.18));class rn{entries=new Map;add(t,e,n=V(),s=new Wt,r=V(1,1,1)){const o=new ge().setFromEuler(s),a=new se().compose(n,o,r);let h=t.clone().applyMatrix4(a);if(h.index){const l=h.toNonIndexed();h.dispose(),h=l}h.attributes.normal||h.computeVertexNormals(),h.attributes.uv||h.setAttribute("uv",new xt(new Float32Array(h.attributes.position.count*2),2));for(const l of Object.keys(h.attributes))["position","normal","uv"].includes(l)||h.deleteAttribute(l);return this.entries.has(e)||this.entries.set(e,[]),this.entries.get(e).push(h),this}block(t,e,n,s,r,o,a,h=0,l=0,c=0,u=.035){const d=yu(r,o,a,u);return this.add(d,t,V(e,n,s),new Wt(h,l,c)),d.dispose(),this}rod(t,e,n,s=.045,r=s,o=8){const a=new Ke(r,s,e.distanceTo(n),o),h=new ge().setFromUnitVectors(V(0,1,0),n.clone().sub(e).normalize());return this.add(a,t,e.clone().add(n).multiplyScalar(.5),new Wt().setFromQuaternion(h)),a.dispose(),this}curve(t,e,n=.035,s=24,r=6){const o=new Ss(new pi(e),s,n,r,!1);return this.add(o,t),o.dispose(),this}finish(t,e="static architecture"){for(const[n,s]of this.entries){const r=Ps(s,!1);if(s.forEach(a=>a.dispose()),!r)throw new Error("Architecture geometry merge failed");const o=new te(r,n);o.name=e,o.castShadow=!n.transparent,o.receiveShadow=!0,t.add(o)}this.entries.clear()}}function Su(i,t){const e=i*.5,n=t-e,s=new Je;return s.moveTo(-e,0),s.lineTo(e,0),s.lineTo(e,n),s.absarc(0,n,e,0,Math.PI,!1),s.lineTo(-e,0),s}function Ln(i,t,e=.025){return new Gi(i,{depth:t,steps:1,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:1,curveSegments:16})}function Vs(i,t,e,n){const s=i*.5,r=t*.5,o=new Je,a=()=>.055+n()*.13;o.moveTo(-s+i*a(),-r),o.lineTo(s-i*a(),-r+n()*.009),o.lineTo(s,-r+t*a()),o.lineTo(s-n()*.012,r-t*a()),o.lineTo(s-i*a(),r),o.lineTo(-s+i*a(),r-n()*.01),o.lineTo(-s,r-t*a()),o.lineTo(-s+n()*.008,-r+t*a()),o.closePath();const h=Ln(o,e,Math.min(.023,t*.065)),l=h.attributes.position;for(let c=0;c<l.count;c++){const u=l.getX(c),d=l.getY(c);l.getZ(c)>e*.7&&l.setZ(c,l.getZ(c)+.009*Math.sin(u*13+d*9)+.006*Math.cos(u*7-d*17))}return h.computeVertexNormals(),h}function wu(i,t,e,n,s,r,o,a=.23,h=.32){const l=r*.5,c=o-l,u=.36;for(let f=0;f<Math.ceil(c/u);f++){const g=(f+.5)*c/Math.ceil(c/u);for(const _ of[-1,1])i.block(t,e+_*(l+a*.5),n+g,s,a,c/Math.ceil(c/u)-.035,h,0,0,_*.006)}const d=11;for(let f=0;f<d;f++){const g=f*Math.PI/d+.012,_=(f+1)*Math.PI/d-.012,m=new Je;m.moveTo(Math.cos(g)*l,Math.sin(g)*l),m.lineTo(Math.cos(g)*(l+a),Math.sin(g)*(l+a)),m.absarc(0,0,l+a,g,_,!1),m.lineTo(Math.cos(_)*l,Math.sin(_)*l),m.absarc(0,0,l,_,g,!0),m.closePath();const p=Ln(m,h,.012);i.add(p,t,V(e,n+c,s-h*.5)),p.dispose()}}function Xn(i,t=24){return new Rl(i.map(e=>new ct(e[0],e[1])),t)}function lo(i,t,e,n,s,r,o=1,a=0){const h=Xn([[.12,0],[.18,.025],[.215,.39],[.24,.405],[.24,.455],[.19,.46],[.19,.405],[.18,.06],[.12,0]],20);i.add(h,t,r,new Wt,V(o,o,o)),h.dispose();const l=new Ke(.184,.184,.022,18);i.add(l,e,r.clone().add(V(0,.398*o,0)),new Wt,V(o,o,o)),l.dispose();const c=ui(.21*o,.105*o);for(let u=0;u<7;u++){const d=u*2.399+a*.8,f=.07*o*Math.sqrt(u),g=(.64+.1*Math.sin(u*8.4+a))*o,_=r.clone().add(V(Math.cos(d)*f,g,Math.sin(d)*f));i.rod(n,r.clone().add(V(Math.cos(d)*f*.4,.4*o,Math.sin(d)*f*.4)),_,.012*o);for(let x=0;x<2;x++)i.add(c,n,r.clone().add(V(Math.cos(d)*f*.7,g*.72+x*.04,Math.sin(d)*f*.7)),new Wt(.7,d+x*2.2,1));const m=ui(.12*o,.085*o);for(let x=0;x<6;x++)i.add(m,s,_,new Wt(Math.PI*.5+.12*Math.sin(x),0,x/6*Math.PI*2));m.dispose();const p=new Se(.028*o,7,5);i.add(p,t,_.clone().add(V(0,.012*o,0))),p.dispose()}c.dispose()}function bu(i,t,e,n,s=.75,r=.9){for(let h=-s+.085;h<s;h+=.17){const l=Math.sqrt(Math.max(.01,s*s-h*h));i.block(t,n.x,n.y+r,n.z+h,l*2,.11,.16,0,0,0,.025)}const o=new Dn(s,.045,7,48);i.add(o,e,n.clone().add(V(0,r-.02,0)),new Wt(Math.PI*.5,0,0)),o.dispose();const a=Xn([[.24,0],[.16,.06],[.095,.18],[.08,r-.16],[.22,r-.08]],16);i.add(a,e,n),a.dispose();for(let h=0;h<3;h++){const l=h*Math.PI*2/3;i.curve(e,[n.clone().add(V(0,.2,0)),n.clone().add(V(Math.cos(l)*.24,.14,Math.sin(l)*.24)),n.clone().add(V(Math.cos(l)*.49,.045,Math.sin(l)*.49))],.055)}}function co(i,t,e,n,s=0,r=1){const o=new rn,a=new ee;for(const l of[-.24,.24])for(const c of[-.24,.24])o.rod(t,V(l*1.14,0,c*1.16),V(l,.49,c),.035);for(const l of[-.26,.26])o.rod(t,V(-.26,.46,l),V(.26,.46,l),.038);for(const l of[-.26,.26])o.rod(t,V(l,.46,-.26),V(l,.46,.26),.038);for(let l=0;l<10;l++){const c=-.225+l*.05;o.rod(e,V(c,.485,-.24),V(c,.485,.24),.014),o.rod(e,V(-.24,.49,c),V(.24,.49,c),.009)}for(const l of[-.25,.25])o.curve(t,[V(l,.46,-.25),V(l*1.04,.83,-.33),V(l*.9,1.1,-.31)],.038);o.curve(t,[V(-.225,1.1,-.31),V(0,1.17,-.35),V(.225,1.1,-.31)],.045);for(let l=0;l<7;l++){const c=-.19+l*.063;o.curve(e,[V(c,.54,-.27),V(c,.8,-.325),V(c,1.09,-.33)],.015)}for(const l of[-.3,.3])o.rod(t,V(l,.46,.16),V(l,.72,.13),.027),o.curve(t,[V(l,.72,.2),V(l,.76,-.08),V(l*.86,.76,-.3)],.033);o.finish(a);const h=new se().compose(n,new ge().setFromEuler(new Wt(0,s,0)),V(r,r,r));for(const l of a.children){const c=l,u=c.geometry.clone().applyMatrix4(h);i.add(u,c.material),u.dispose(),c.geometry.dispose()}}function Eu(i,t,e,n,s,r){const o=Xn([[0,0],[.105,0],[.15,.04],[.17,.14],[.12,.25],[.075,.27],[.075,.285],[0,.29]],22);i.add(o,r??t,s),o.dispose();const a=new Se(.042,10,7);i.add(a,n,s.clone().add(V(0,.315,0))),a.dispose(),i.curve(t,[s.clone().add(V(.12,.08,0)),s.clone().add(V(.22,.16,0)),s.clone().add(V(.28,.23,0))],.035,12),i.curve(t,[s.clone().add(V(-.12,.21,0)),s.clone().add(V(-.25,.24,0)),s.clone().add(V(-.26,.08,0)),s.clone().add(V(-.13,.05,0))],.021,18);for(const h of[V(-.25,0,.28),V(.23,0,.25)]){const l=s.clone().add(h),c=Xn([[.044,0],[.06,.012],[.075,.1],[.07,.12],[.058,.12],[.047,.025],[.044,0]],16);i.add(c,t,l),c.dispose();const u=new Ke(.115,.105,.018,20);i.add(u,t,l.clone().add(V(0,-.008,0))),u.dispose();const d=new Dn(.034,.009,6,12);i.add(d,t,l.clone().add(V(.077,.065,0))),d.dispose();const f=new bl(.058,18);i.add(f,n,l.clone().add(V(0,.098,0)),new Wt(-Math.PI/2,0,0)),f.dispose()}i.block(e,s.x+.32,s.y+.02,s.z-.08,.2,.012,.027,0,.35,0,.006)}function ah(i,t,e,n=!1){const s=new Je;s.moveTo(-i/2,0),s.lineTo(i/2,0),s.lineTo(i/2,t),n&&s.lineTo(0,7.34),s.lineTo(-i/2,t),s.closePath();for(const r of e){const o=new Qa,a=r.w/2;o.moveTo(r.x-a,r.y),o.lineTo(r.x+a,r.y),r.arch?(o.lineTo(r.x+a,r.y+r.h-a),o.absarc(r.x,r.y+r.h-a,a,0,Math.PI,!1)):(o.lineTo(r.x+a,r.y+r.h),o.lineTo(r.x-a,r.y+r.h)),o.lineTo(r.x-a,r.y),s.holes.push(o)}return Ln(s,.26,.012)}function Kv(i){const t=[],e=[],n=[];for(let u=0;u<2;u++)for(let d=0;d<=4;d++)for(let f=0;f<=6;f++){const g=(f/6-.5)*.58,_=d/4,m=.052*Math.cos((f/6-.5)*Math.PI*1.7);t.push(i*(_*.7*.811+(m-u*.045)*.585),-_*.7*.585+(m-u*.045)*.811,g),e.push(f/6,_)}const h=7,l=h*5;for(let u=0;u<4;u++)for(let d=0;d<6;d++){const f=u*h+d;n.push(f,f+1,f+h,f+1,f+h+1,f+h),n.push(l+f,l+f+h,l+f+1,l+f+1,l+f+h,l+f+h+1)}for(let u=0;u<6;u++)for(const d of[0,4]){const f=d*h+u;n.push(f,l+f,f+1,f+1,l+f,l+f+1)}for(let u=0;u<4;u++)for(const d of[0,6]){const f=u*h+d;n.push(f,f+h,l+f,f+h,l+f+h,l+f)}if(i<0)for(let u=0;u<n.length;u+=3){const d=n[u+1];n[u+1]=n[u+2],n[u+2]=d}const c=new qt;return c.setAttribute("position",new xt(t,3)),c.setAttribute("uv",new xt(e,2)),c.setIndex(n),c.computeVertexNormals(),c}function Jv(){const i=[],t=[],e=[];for(let a=0;a<2;a++)for(let h=0;h<2;h++)for(let l=0;l<=12;l++){const c=l/12*Math.PI,u=.205-h*.013-a*.035;i.push(Math.cos(c)*u,Math.sin(c)*u,h*.56),t.push(l/12,h)}const r=26;for(let a=0;a<12;a++)e.push(a,a+1,a+13,a+1,a+13+1,a+13),e.push(r+a,r+a+13,r+a+1,r+a+1,r+a+13,r+a+13+1);for(let a=0;a<2;a++)for(let h=0;h<12;h++){const l=a*13+h;e.push(l,l+r,l+1,l+1,l+r,l+r+1)}for(const a of[0,12])e.push(a,a+13,r+a,a+13,r+a+13,r+a);const o=new qt;return o.setAttribute("position",new xt(i,3)),o.setAttribute("uv",new xt(t,2)),o.setIndex(e),o.computeVertexNormals(),o}function Hs(i,t,e,n,s,r,o=1.5,a=1.7,h=!1,l=!1){const c=e.materials,u=l?-1:1;for(const g of[n-o/2,n+o/2])t.block(c.woodDark,g,s+a/2,r,.115,a+.18,.18);for(const g of[s,s+a])t.block(c.woodLight,n,g,r,o+.22,.11,.2);t.block(c.woodLight,n,s+a/2,r+u*.025,.07,a,.15),t.block(c.woodLight,n,s+a*.52,r+u*.035,o,.065,.15),t.block(c.stoneLight,n,s-.13,r+u*.14,o+.45,.18,.5,0,0,0,.045);const d=new Fi(o-.1,a-.08);t.add(d,c.glass,V(n,s+a/2,r-u*.065),new Wt(0,l?Math.PI:0,0)),d.dispose();const f=new Fi(o-.14,a-.12);t.add(f,c.warm,V(n,s+a/2,r-u*.2),new Wt(0,l?Math.PI:0,0)),f.dispose();for(const g of[-1,1]){const _=new Fi(o*.24,a-.14,8,10),m=_.attributes.position;for(let p=0;p<m.count;p++){const x=m.getX(p),y=m.getY(p);m.setZ(p,Math.sin((x/o+.5)*Math.PI*22)*.025+Math.sin((y/a+.5)*Math.PI)*.045),m.setX(p,x+g*.04*Math.sin((y/a+.5)*Math.PI))}_.computeVertexNormals(),t.add(_,c.cream,V(n+g*o*.32,s+a*.5,r-u*.11),new Wt(0,l?Math.PI:0,0)),_.dispose()}if(!h)for(const g of[-1,1]){const _=new ee;_.position.set(n+g*(o*.5+.16),s,r+u*.14),_.rotation.y=g*(l?-1:1)*(.22+(g<0?.25:0));const m=new rn,p=g*(o*.28);m.block(c.teal,p,a*.5,0,o*.52,a,.09);for(let x=0;x<8;x++)m.block(c.woodDark,p,.14+x*(a-.25)/7,.06,o*.43,.075,.045,.25,0,0,.013);m.block(c.woodLight,p,.12,.08,o*.52,.075,.07),m.block(c.woodLight,p,a-.12,.08,o*.52,.075,.07),m.finish(_,"window shutters"),_.updateMatrix();for(const x of _.children){const y=x,v=y.geometry.clone().applyMatrix4(_.matrix);t.add(v,y.material),v.dispose(),y.geometry.dispose()}}}function lh(i,t,e,n,s,r=1){const o=t.materials;i.block(o.metal,e,n+.25*r,s-.18*r,.11*r,.34*r,.1*r),i.curve(o.metal,[V(e,n+.4*r,s-.13*r),V(e,n+.57*r,s+.1*r),V(e,n+.4*r,s+.19*r)],.025*r,12);const a=new Bi(.19*r,.15*r,4);i.add(a,o.metal,V(e,n+.25*r,s+.18*r),new Wt(0,Math.PI/4,0)),a.dispose();for(const l of[-.105,.105])for(const c of[-.105,.105])i.rod(o.metal,V(e+l*r,n-.14*r,s+(.18+c)*r),V(e+l*r,n+.19*r,s+(.18+c)*r),.012*r);for(const l of[-1,1])i.block(o.glass,e,n+.015*r,s+(.18+l*.1)*r,.19*r,.3*r,.008*r,0,0,0,.002),i.block(o.glass,e+l*.1*r,n+.015*r,s+.18*r,.008*r,.3*r,.19*r,0,0,0,.002);const h=new Se(.048*r,12,8);i.add(h,o.warm,V(e,n+.035*r,s+.18*r)),h.dispose(),i.rod(o.metal,V(e,n-.14*r,s+.18*r),V(e,n-.012*r,s+.18*r),.022*r),i.block(o.metal,e,n-.16*r,s+.18*r,.26*r,.05*r,.26*r)}function $v(i){const t=i.materials,e=Ye(i.seed+501),n=new ee;n.name="cottage",n.position.copy(i.terrain.anchors.cottage),n.rotation.y=.22,i.scene.add(n);const s=["#d6cbb5","#e1d8c2","#e8dfca","#c9c9b4","#dad0bc"].map(D=>de(D,"stone"));for(const D of s){const G=D.onBeforeCompile;D.onBeforeCompile=(it,W)=>{G.call(D,it,W),it.fragmentShader=it.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
   float wallPatch=.5+.5*sin(vArtPosition.x*8.7+vArtPosition.z*4.3+sin(vArtPosition.y*19.));
   float footMoss=(1.-smoothstep(.08,.56,vArtPosition.y))*smoothstep(.39,.86,wallPatch)*.20;
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.25,.32,.115),footMoss);
   float windowX=vArtPosition.z>0.?2.5:1.85;
   float belowWindow=(1.-smoothstep(.60,.76,abs(abs(vArtPosition.x)-windowX)))*step(3.4,abs(vArtPosition.z));
   float rainHeight=smoothstep(.42,1.30,vArtPosition.y)*(1.-smoothstep(1.53,1.78,vArtPosition.y));
   float rainStripe=.5+.5*sin(vArtPosition.x*43.+sin(vArtPosition.y*2.));
   diffuseColor.rgb*=1.-belowWindow*rainHeight*rainStripe*rainStripe*.065;
  `)},D.customProgramCacheKey=()=>"stone-cottage-local-weather-1"}const r=["#ca7950","#d48a5c","#d19566","#bb704c","#df9a6c"].map(D=>de(D,"tile",.83)),o=de("#bf8260","earth"),a=new ne({color:"#ecc4cb",roughness:.88,side:xe}),h=new ne({color:"#f2eacb",roughness:.88,side:xe}),l=new ne({color:"#ece7d0",roughness:.3}),c=new rn,u=[{x:0,y:.035,w:1.66,h:2.85,arch:!0},{x:-2.5,y:1.8,w:1.5,h:1.7},{x:2.5,y:1.8,w:1.5,h:1.7},{x:.1,y:5.03,w:1.08,h:1.2}],d=[{x:-1.85,y:1.8,w:1.4,h:1.5},{x:1.85,y:1.8,w:1.4,h:1.5}];c.add(ah(8,4.15,u,!0),t.stone,V(0,0,3.37)),c.add(ah(8,4.15,d,!0),t.stone,V(0,0,-3.63)),c.block(t.stone,4,2.075,0,.3,4.15,7),c.block(t.stone,-4,2.075,0,.3,4.15,7);const f=(D,G,it,W,Q)=>Q.some(H=>Math.abs(D-H.x)<(it+H.w)/2+.12&&G+W/2>H.y-.1&&G-W/2<H.y+H.h+.1),g=[.33,.42,.35,.45,.36,.41,.31,.4,.39,.37,.36];for(const D of[-1,1]){let G=.02;for(let it=0;it<g.length;it++){const W=g[it],Q=G+W*.5;let H=-3.97;for(;H<3.97;){const N=Math.min(.53+e()*.61,3.98-H),$=H+N*.5;if(N>.14&&!f($,Q,N,W,D>0?u:d)){const dt=N>.9&&it%3===1&&e()>.4?2:1;for(let Ft=0;Ft<dt;Ft++){const Bt=W/dt-.025,z=G+(Ft+.5)*W/dt,lt=Vs(N-.026,Bt,.195+e()*.024,e);c.add(lt,s[Math.floor(e()*5)],V($,z,D*3.49),new Wt(0,D<0?Math.PI:0,(e()-.5)*.012)),lt.dispose()}}H+=N}G+=W}}for(const D of[-1,1]){let G=.02;for(let it=0;it<g.length;it++){const W=g[it];let Q=-3.5;for(;Q<3.5;){const H=Math.min(.56+e()*.64,3.51-Q);if(H>.15){const N=Vs(H-.027,W-.025,.19+e()*.025,e);c.add(N,s[Math.floor(e()*5)],V(D*3.99,G+W*.5,Q+H/2),new Wt(0,D*Math.PI/2,(e()-.5)*.012)),N.dispose()}Q+=H}G+=W}}for(const D of[-1,1])for(let G=0;G<7;G++){const it=4.32+G*.37,W=(7.35-it)/.8;for(let Q=-W+.32;Q<W;Q+=.69){if(D>0&&Math.abs(Q-.1)<.75&&it>4.85&&it<6.38)continue;const H=Vs(.63,.335,.2,e);c.add(H,s[(G+Math.floor(e()*3))%5],V(Q,it,D*3.49),new Wt(0,D<0?Math.PI:0,(e()-.5)*.015)),H.dispose()}}for(const D of[-3.9,3.9])for(const G of[-3.5,3.5])c.block(t.woodDark,D,2.1,G,.18,4.2,.18,0,0,0,.04);for(const D of[-3.64,3.65])c.block(t.woodDark,0,4.14,D,8.25,.18,.18,0,0,0,.035);c.block(t.wood,0,.11,0,7.65,.22,6.85);for(let D=-3.1;D<3.2;D+=.31)c.block(t.woodDark,0,.235,D,7.4,.012,.014,0,0,0,.002);c.block(t.stoneDark,0,-.13,0,8.22,.25,7.25,0,0,0,.05),wu(c,t.stoneLight,0,0,3.73,1.66,2.85,.25,.4),Hs(n,c,i,-2.5,1.8,3.69),Hs(n,c,i,2.5,1.8,3.69),Hs(n,c,i,.1,5.03,3.7,1.08,1.2,!0),Hs(n,c,i,-1.85,1.8,-3.68,1.4,1.5,!1,!0),Hs(n,c,i,1.85,1.8,-3.68,1.4,1.5,!1,!0);for(const D of[-2.5,2.5]){c.block(t.woodDark,D,1.55,3.87,1.5,.24,.34);for(let G=0;G<6;G++)c.block(t.woodLight,D-.64+G*.255,1.55,4.055,.075,.3,.055);for(let G=0;G<4;G++)lo(c,o,t.soil,t.leaf,G%2?a:h,V(D-.52+G*.35,1.67,3.88),.52,G)}for(const D of[-1,1]){const G=new Je;G.moveTo(0,7.4),G.lineTo(D*4.6,4.08),G.lineTo(D*4.6,3.94),G.lineTo(0,7.25),G.closePath(),c.add(Ln(G,8.2,0),t.woodDark,V(0,0,-4.1));const it=Kv(D);for(let W=0;W<9;W++)for(let Q=0;Q<15;Q++){const H=W*.61,N=-4.03+Q*.56+W%2*.02;c.add(it,r[Math.floor(e()*r.length)],V(D*H*.811,7.47-H*.585+W*.006,N))}it.dispose();for(const W of[-4.15,4.3])c.rod(t.woodDark,V(0,7.35,W),V(D*4.7,3.96,W),.105,.105,10);c.block(t.woodDark,D*4.59,4,.1,.15,.23,8.6,0,0,0,.04);for(let W=-3.8;W<4.2;W+=.67)c.rod(t.wood,V(D*3.55,4.17,W),V(D*4.58,3.92,W),.065,.05)}const _=Jv();for(let D=-4.15;D<4.1;D+=.44)c.add(_,r[2],V(0,7.425,D));_.dispose();for(const D of[-3.69,3.71])c.rod(t.wood,V(-2.7,4.25,D),V(0,6.65,D),.075),c.rod(t.wood,V(2.7,4.25,D),V(0,6.65,D),.075);for(const D of[-1.4,1.4])c.rod(t.woodDark,V(D,2.95,3.67),V(D,3.55,4.37),.055),c.rod(t.woodDark,V(D,3.58,3.67),V(D,3.58,4.4),.06);for(let D=0;D<3;D++)for(let G=0;G<7;G++)c.block(r[(G+D)%5],-1.52+G*.5,3.72-D*.09,3.65+D*.28,.49,.09,.4,.28,0,0,.035);c.block(t.woodDark,0,3.45,4.43,3.5,.13,.13);const m=new ee;m.name="cottage-door-pivot",m.position.set(-.77,.24,3.77),n.add(m);const p=new rn,x=2.535,y=Su(1.51,x),v=Ln(y,.025,.008);p.add(v,t.woodDark,V(.755,0,0)),v.dispose();const A=[de("#71a99d","wood"),de("#699e94","wood"),de("#78aea0","wood")];for(let D=0;D<7;D++){const G=D*1.51/7+.009,it=(D+1)*1.51/7-.009,W=new Je;W.moveTo(G,.018),W.lineTo(it,.018);for(let H=0;H<=5;H++){const N=it+(G-it)*H/5,$=x-.755+Math.sqrt(Math.max(0,.755**2-(N-.755)**2))-.013;W.lineTo(N,$)}W.closePath();const Q=Ln(W,.078,.006);p.add(Q,A[D%3],V(0,0,.035)),Q.dispose()}for(const D of[.43,1.87]){p.block(t.metal,.26,D,.13,.47,.085,.045,0,0,.02,.015);for(const G of[.08,.41]){const it=new Se(.026,7,5);p.add(it,t.metal,V(G,D,.16)),it.dispose()}}p.block(t.metal,1.24,1.18,.14,.115,.23,.045);const M=new Dn(.073,.014,7,18);p.add(M,t.metal,V(1.24,1.18,.19)),M.dispose(),p.finish(m,"carved arched teal door");let S=!1,R=0;i.registerInteraction(m,"door",()=>{S=!S,m.userData.open=S}),i.addUpdate((D,G)=>{R=me.damp(R,S?-1.2:0,5,G),m.rotation.y=R}),m.userData.open=!1,c.block(t.cream,0,2,-3.36,7.5,3.7,.05),c.block(t.woodDark,0,.45,-2.5,1.3,.1,.6);for(const D of[-.5,.5])for(const G of[-2.7,-2.3])c.block(t.woodDark,D,.23,G,.07,.46,.07);const w=new au("#ffd18a",.9,7,2);w.position.set(.8,2.55,1.1),n.add(w);const b=new Bi(.28,.35,16,1,!0);c.add(b,t.warm,V(.8,2.4,1.1)),b.dispose(),c.rod(t.metal,V(.8,2.65,1.1),V(.8,4,1.1),.018);for(let D=0;D<27;D++)c.block(D%4?t.wood:t.woodLight,-4.05+D*.31,.12,4.65,.294,.18,2.36,0,0,(e()-.5)*.004,.025);for(const D of[-4.08,4.08])c.block(t.woodDark,D,-.02,4.65,.16,.26,2.5);for(const D of[3.48,5.82])c.block(t.woodDark,0,-.015,D,8.3,.27,.16);for(const D of[-3.8,0,3.8])for(const G of[3.65,5.55]){const it=n.localToWorld(V(D,0,G)),W=i.terrain.heightAt(it.x,it.z)-n.position.y;W<-.08&&(c.rod(t.woodDark,V(D,W-.08,G),V(D,.02,G),.085,.07),c.block(t.stoneDark,D,W-.02,G,.29,.12,.29,0,0,0,.04))}for(const D of[-4,4])for(const G of[3.65,4.65,5.75])c.block(t.woodDark,D,.59,G,.1,1,.1);for(const D of[-4,4])for(const G of[.42,1.02])c.rod(t.woodLight,V(D,G,3.65),V(D,G,5.75),.045);for(const D of[-1,1]){c.rod(t.woodLight,V(D*1.25,1.02,5.75),V(D*4,1.02,5.75),.045);for(let G=1.3;G<4;G+=.65)c.block(t.woodDark,D*G,.59,5.75,.095,1,.095)}c.block(t.stoneLight,0,-.03,5.95,2.2,.25,.55,0,0,0,.09),c.block(t.stone,0,-.2,6.35,2.4,.23,.55,0,.015,0,.09),bu(c,t.woodLight,t.woodDark,V(-2.28,.22,4.7),.7,.78),co(c,t.woodDark,t.woodLight,V(-3.25,.22,4.65),-Math.PI*.48,.83),co(c,t.woodDark,t.woodLight,V(-2.05,.22,5.55),Math.PI+.35,.83),Eu(c,l,t.metal,t.woodDark,V(-2.3,1.065,4.67));for(const D of[-1,1]){c.block(t.teal,-2.22+D*.105,1.086,4.29,.22,.025,.28,0,0,-D*.18,.006),c.block(t.cream,-2.22+D*.1,1.105,4.29,.198,.028,.255,0,0,-D*.18,.003);for(let G=0;G<5;G++)c.block(t.stoneDark,-2.22+D*.1,1.124,4.21+G*.032,.15,.003,.004,0,0,-D*.18,.001)}const P=Xn([[.055,0],[.095,.03],[.09,.14],[.04,.24],[.045,.28]],18);c.add(P,l,V(-2.65,1.055,4.52)),P.dispose();for(let D=0;D<4;D++){const G=V(-2.65+(D-1.5)*.03,1.52+.035*Math.sin(D),4.52+.03*Math.cos(D));c.rod(t.leaf,V(-2.65,1.3,4.52),G,.008);const it=ui(.07,.045);for(let W=0;W<5;W++)c.add(it,h,G,new Wt(Math.PI/2,0,W*Math.PI*2/5));it.dispose()}for(const[D,G,it]of[[-1.25,4,.9],[1.3,3.98,1.15],[3.3,5.25,1.3]])lo(c,o,t.soil,t.leaf,a,V(D,.22,G),it);lh(c,i,-1.18,2.66,3.74,.92),lh(c,i,1.18,2.66,3.74,.92);const k=ui(.26,.17);for(let D=0;D<5;D++){const G=-3.7+D*.25,it=[];for(let W=0;W<9;W++)it.push(V(G+Math.sin(W*.85+D)*.25,W*.45,3.79+.025*Math.cos(W)));c.curve(t.woodDark,it,.018,30);for(let W=0;W<22;W++){const Q=.12+W*.16,H=G+Math.sin(Q/.45*.85+D)*.25,N=W%2?1:-1;if(c.add(k,t.leaf,V(H,Q,3.83),new Wt(.35,N*.4,N*.8+Math.sin(W)*.2),V(1,1,1)),W%7===D%7){const $=ui(.09,.065);for(let pt=0;pt<5;pt++)c.add($,a,V(H,Q+.1,3.91),new Wt(.2,0,pt*Math.PI*2/5));$.dispose()}}}k.dispose();for(let D=0;D<5;D++)c.block(t.woodLight,-4.2,.3+D*.34,1.4,.08,.055,1.75);for(const D of[.65,1.25,1.95])c.block(t.woodDark,-4.2,.98,D,.08,1.95,.065);const B=Xn([[.33,0],[.4,.13],[.44,.56],[.39,.95],[.34,1.02]],22);c.add(B,t.wood,V(-4.42,0,-1.7)),B.dispose();for(const D of[.13,.5,.89]){const G=new Dn(.405+(D===.5?.035:0),.028,6,24);c.add(G,t.metal,V(-4.42,D,-1.7),new Wt(Math.PI/2,0,0)),G.dispose()}const q=Xn([[.14,0],[.18,.03],[.17,.28],[.13,.3]],18);c.add(q,t.teal,V(3.25,.22,4.3)),q.dispose(),c.curve(t.metal,[V(3.12,.48,4.3),V(3.1,.72,4.3),V(3.42,.72,4.3),V(3.42,.48,4.3)],.018),c.rod(t.teal,V(3.4,.31,4.3),V(3.68,.57,4.3),.035,.065);for(let D=0;D<7;D++){const G=5.35+D*.38;for(const it of[-1,1]){const W=D%2?[.55,.43]:[.4,.58];let Q=1.96;for(const N of W){const $=Vs(N-.018,.345,.15,e);c.add($,s[(D+1)%5],V(Q+N/2,G,-2.03+it*.39),new Wt(0,it<0?Math.PI:0,0)),$.dispose(),Q+=N}const H=Vs(.75,.345,.15,e);c.add(H,s[(D+2)%5],V(2.45+it*.39,G,-2.03),new Wt(0,it*Math.PI/2,0)),H.dispose()}}for(const D of[-2.48,-1.58])c.block(t.stoneDark,2.45,7.94,D,1.18,.18,.27,0,0,0,.035);for(const D of[1.99,2.91])c.block(t.stoneDark,D,7.94,-2.03,.26,.18,.65,0,0,0,.035);c.block(t.woodDark,2.45,7.78,-2.03,.65,.04,.65),c.finish(n,"cottage masonry timber and everyday details");const I=new Se(1,10,7),U=new Ja(new Float32Array(12),1);I.setAttribute("aSmokeOpacity",U);const O=new hr({color:"#e9ece1",transparent:!0,opacity:.035,depthWrite:!1});O.onBeforeCompile=D=>{D.vertexShader=D.vertexShader.replace("#include <common>",`#include <common>
attribute float aSmokeOpacity; varying float vSmokeOpacity;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vSmokeOpacity=aSmokeOpacity;`),D.fragmentShader=D.fragmentShader.replace("#include <common>",`#include <common>
varying float vSmokeOpacity;`).replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a *= vSmokeOpacity;`)};const F=new _o(I,O,12);F.name="chimney-light-smoke",F.castShadow=!1,F.frustumCulled=!1,n.add(F),i.qualityObjects.push({object:F,level:"standard"});const Y=new Le,J=(D,G,it)=>{for(let W=0;W<12;W++){const Q=(D*.11+W/12)%1;Y.position.set(2.45+Q*.7+Math.sin(D*.43+W)*.08*Q,8.12+Q*3,-2.03+Q*.2+Math.cos(D*.35+W)*.07*Q),Y.scale.setScalar(.12+Q*.43),Y.updateMatrix(),F.setMatrixAt(W,Y.matrix),U.setX(W,Math.sin(Math.PI*Q)**1.5*(.85+it*.15))}F.instanceMatrix.needsUpdate=!0,U.needsUpdate=!0};return J(0,0,1),i.addUpdate(J),{root:n,door:m,doorWorld:n.localToWorld(V(0,1.4,3.8))}}function Qv(){const i=[],t=[],e=[];for(let o=0;o<=26;o++)for(let a=0;a<=80;a++){const h=o/26*6.4,l=a/80*Math.PI*2,c=1.8-h*.078;i.push(Math.sin(l)*c,h,Math.cos(l)*c),t.push(a/80,o/26)}for(let o=0;o<26;o++)for(let a=0;a<80;a++){const h=(o+.5)/26*6.4,l=(a+.5)/80*Math.PI*2,c=Math.sin(l)*(1.8-h*.078),u=Math.cos(l),d=u>.9&&Math.abs(c)<.64&&h<1.95,f=u>.9&&Math.abs(c)<.31&&h>3.15&&h<3.95;if(d||f)continue;const g=o*81+a;e.push(g,g+80+1,g+1,g+1,g+80+1,g+80+2)}for(let o=0;o<e.length;o+=3){const a=e[o+1];e[o+1]=e[o+2],e[o+2]=a}const r=new qt;return r.setAttribute("position",new xt(i,3)),r.setAttribute("uv",new xt(t,2)),r.setIndex(e),r.computeVertexNormals(),r}function t1(i,t,e,n){const s=[],r=[],o=[],u=.9459459459459459,d=1/Math.sqrt(1+u*u);for(let g=0;g<2;g++)for(let _=0;_<=3;_++)for(let m=0;m<=5;m++){const p=m/5,x=_/3,y=i+(p-.5)*t,v=e+.009*Math.abs(p-.5)*2,A=me.lerp(v,n,x),M=.008+(1-x)*.018+(g===0?.025:0),S=Math.max(.008,1.75*(1-(A-6.345)/1.85))+M*d;s.push(Math.sin(y)*S,A+M*u*d,Math.cos(y)*S),r.push(p,x)}for(let g=0;g<3;g++)for(let _=0;_<5;_++){const m=g*6+_;o.push(m,m+1,m+6,m+1,m+6+1,m+6,24+m,24+m+6,24+m+1,24+m+1,24+m+6,24+m+6+1)}for(let g=0;g<5;g++){let _=g;o.push(_,24+_,_+1,_+1,24+_,24+_+1),_=18+g,o.push(_,_+1,24+_,_+1,24+_+1,24+_)}for(let g=0;g<3;g++){let _=g*6;o.push(_,_+6,24+_,_+6,24+_+6,24+_),_+=5,o.push(_,24+_,_+6,_+6,24+_,24+_+6)}const f=new qt;return f.setAttribute("position",new xt(s,3)),f.setAttribute("uv",new xt(r,2)),f.setIndex(o),f.computeVertexNormals(),f}function e1(i){const t=i.materials,e=Ye(i.seed+729),n=new ee;n.name="windmill",n.position.copy(i.terrain.anchors.windmill),i.scene.add(n);const s=new rn,r=["#e4e1ca","#d4d4bf","#ece6cf","#c6c9b5"].map(B=>de(B,"stone"));s.add(Qv(),t.stoneLight);for(let B=0;B<17;B++){const q=.19+B*.375,I=1.8-q*.078,U=18;for(let O=0;O<U;O++){const F=(O+B%2*.5)/U*Math.PI*2,Y=Math.sin(F)*I,J=Math.cos(F)*I,D=Math.cos(F)>.88&&Math.abs(Y)<.84&&q<2.3,G=Math.cos(F)>.9&&Math.abs(Y)<.55&&q>2.98&&q<4.2;if(D||G)continue;const it=new In(.53,.33,.22,2,2,1),W=it.attributes.position;for(let Q=0;Q<W.count;Q++)W.setZ(Q,W.getZ(Q)+(e()-.5)*.045);it.computeVertexNormals(),s.add(it,r[Math.floor(e()*r.length)],V(Y,q,J),new Wt(0,F+(e()-.5)*.03,(e()-.5)*.015)),it.dispose()}}const o=new Ke(1.87,1.97,.25,48);s.add(o,t.stoneDark,V(0,-.08,0)),o.dispose();const a=new Ke(1.6,1.6,.08,40);s.add(a,t.woodDark,V(0,.03,0)),a.dispose();const h=Ln(Su(1.16,1.95),.11,.025);s.add(h,t.woodDark,V(0,0,1.77)),h.dispose(),wu(s,t.stoneLight,0,0,1.82,1.26,2.08,.19,.27);for(let B=-2;B<=2;B++)s.block(t.woodLight,B*.19,.78,1.9,.012,1.46,.015,0,0,0,.003);s.block(t.metal,.38,.95,1.92,.08,.17,.05);const l=new Dn(.05,.012,6,14);s.add(l,t.metal,V(.38,.95,1.96)),l.dispose();for(let B=0;B<3;B++)s.block(t.stone,0,-.08-B*.12,2+B*.38,1.6+B*.17,.2,.47,0,0,(e()-.5)*.02,.075);for(const B of[3.08,4.02])s.block(t.woodDark,0,B,1.57,.83,.1,.18);for(const B of[-.37,.37])s.block(t.woodDark,B,3.55,1.57,.1,.98,.18);s.block(t.woodLight,0,3.55,1.59,.06,.85,.12),s.block(t.warm,0,3.55,1.48,.65,.85,.025),s.block(t.stoneLight,0,3.01,1.64,1,.12,.38);const c=new rn;c.block(t.woodDark,0,0,0,.74,.94,.12),c.block(t.warm,0,0,.07,.58,.78,.025),c.block(t.woodLight,0,0,.1,.055,.8,.06),c.block(t.woodLight,0,0,.1,.6,.055,.06);const u=new ee;c.finish(u),u.position.set(-1.42,4.75,-.25),u.rotation.y=-Math.PI/2,n.add(u);const d=new Bi(1.75,1.85,48);s.add(d,t.woodDark,V(0,7.27,0)),d.dispose();const f=[t.woodDark,de("#6e6250","wood"),de("#8c7457","wood")];let g=0;for(let B=0;B<8;B++){const q=6.36+B*.225,I=Math.min(8.18,q+.3),U=1.75*(1-((q+I)*.5-6.345)/1.85),O=Math.max(5,Math.round(Math.PI*2*U/.34));for(let F=0;F<O;F++){const Y=(F+B%2*.5)/O*Math.PI*2,J=t1(Y,Math.PI*2/O*.985,q,I);s.add(J,f[(F+B)%3]),J.dispose(),g++}}n.userData.roofShingles={count:g,rows:8,thickness:.025,verticalOverlap:.075,construction:"curved solid shingles conforming to the roof cone"};const _=new Dn(1.76,.09,8,48);s.add(_,t.woodDark,V(0,6.38,0),new Wt(Math.PI/2,0,0)),_.dispose(),s.rod(t.metal,V(0,8.08,0),V(0,8.55,0),.026),s.block(t.metal,.18,8.4,0,.47,.1,.02,0,0,.2,.015),s.rod(t.woodDark,V(0,5.24,1.14),V(0,5.24,2.12),.17,.14,14);const m=new Dn(.28,.065,8,20);s.add(m,t.metal,V(0,5.24,1.5)),m.dispose();const p=new ee;p.name="windmill-rotor",p.position.set(0,5.24,2.16),n.add(p);const x=new rn,y=new Ke(.34,.4,.32,16);x.add(y,t.woodDark,V(0,0,.04),new Wt(Math.PI/2,0,0)),y.dispose();for(let B=0;B<4;B++){const q=new ee,I=new rn;q.rotation.z=B*Math.PI*.5,I.rod(t.woodDark,V(0,.14,0),V(0,3.7,0),.07,.045);const U=[V(.12,1,.02),V(.87,1.17,.02),V(1.03,3.62,.02),V(.12,3.75,.02)];for(let O=0;O<4;O++)I.rod(t.woodLight,U[O],U[(O+1)%4],.045);I.rod(t.woodDark,U[0],U[2],.032),I.rod(t.woodDark,U[1],U[3],.032);for(let O=0;O<10;O++){const F=O/9,Y=1.13+F*2.45,J=.73+F*.14;I.block(O%3?t.woodLight:t.wood,.14+J/2,Y,-.015,J,.085,.048,.08,0,.045,.014)}for(let O=0;O<3;O++)I.rod(t.woodDark,V(.3+O*.21,1.18,.045),V(.35+O*.24,3.62,.045),.019);I.finish(q,"windmill timber lattice sail"),q.updateMatrix();for(const O of q.children){const F=O,Y=F.geometry.clone().applyMatrix4(q.matrix);x.add(Y,F.material),Y.dispose(),F.geometry.dispose()}}const v=new Se(.12,12,8);x.add(v,t.metal,V(0,0,.23)),v.dispose(),x.finish(p,"windmill hub");let A=0;i.registerInteraction(n,"windmill",()=>{A=1,n.userData.boost=1}),i.addUpdate((B,q,I)=>{A=Math.max(0,A-q*.2),p.rotation.z-=q*(Math.PI*2*6.4/60)*(1+.55*A)*(.92+I*.08),n.userData.boost=A});const S=[[-4,-2.2],[-4.3,-.8],[-4.2,1],[-3.8,2.8],[-2.6,3.7],[-1.1,4.1],[1.2,4],[2.9,3.2],[3.6,1.9]].map(([B,q])=>{const I=i.terrain.heightAt(n.position.x+B,n.position.z+q)-n.position.y;return V(B,I,q)});S.forEach((B,q)=>{s.block(t.wood,B.x,B.y+.52,B.z,.13,1.15,.13,0,q*.12,0,.03);const I=new Se(.095,8,6);s.add(I,t.woodLight,B.clone().add(V(0,1.12,0))),I.dispose()});for(let B=0;B<S.length-1;B++)if(B!==5)for(const q of[.42,.85])s.rod(t.woodLight,S[B].clone().add(V(0,q,0)),S[B+1].clone().add(V(0,q,0)),.048,.042);const R=V(2.8,i.terrain.heightAt(-9.2,-4.9)-3.2,3.1);s.rod(t.woodDark,R,R.clone().add(V(0,1.5,0)),.07),s.block(t.woodLight,R.x,R.y+1.24,R.z,.85,.29,.085,0,.2,.035,.055),s.block(t.woodDark,R.x+.3,R.y+.96,R.z,.72,.23,.085,0,.2,-.04,.04);const w=de("#ba8862","earth");lo(s,w,t.soil,t.leaf,t.cream,V(-1.3,0,1.6),.85);const b=ui(.225,.135);for(let B=0;B<2;B++){const q=[];for(let I=0;I<=14;I++){const U=.06+I*.17,O=-1.03+B*.24+Math.sin(I*.6+B)*.065,F=1.8-U*.078+.145;q.push(V(Math.sin(O)*F,U,Math.cos(O)*F))}s.curve(t.woodDark,q,.013,30);for(let I=1;I<14;I++){const U=q[I],O=Math.atan2(U.x,U.z),F=I%2?1:-1;s.add(b,t.leaf,U.clone().add(V(Math.sin(O)*.013,0,Math.cos(O)*.013)),new Wt(.12,O,F*.67),V(.8+I%3*.11,1,1))}}b.dispose();const P=V(-3.1,i.terrain.heightAt(-15.1,-4.9)-3.2,3.1);s.rod(t.woodDark,P,P.clone().add(V(0,2.1,0)),.065,.05),s.rod(t.woodDark,P.clone().add(V(0,1.96,0)),P.clone().add(V(.43,1.96,0)),.04),s.block(t.glass,P.x+.4,P.y+1.65,P.z,.19,.28,.19,0,0,0,.012),s.block(t.warm,P.x+.4,P.y+1.65,P.z,.06,.18,.06,0,0,0,.018);for(const B of[-.105,.105])for(const q of[-.105,.105])s.rod(t.metal,P.clone().add(V(.4+B,1.49,q)),P.clone().add(V(.4+B,1.8,q)),.01);s.block(t.metal,P.x+.4,P.y+1.49,P.z,.25,.035,.25,0,0,0,.01);const k=new Bi(.22,.18,4);return s.add(k,t.metal,P.clone().add(V(.4,1.88,0)),new Wt(0,Math.PI/4,0)),k.dispose(),s.finish(n,"windmill stonework and pasture furnishings"),{root:n,rotor:p,interactionPoint:n.localToWorld(V(0,5.24,2.2))}}function n1(i){const t=i.materials,e=new ee;e.name="stone-arch-bridge",e.position.copy(i.terrain.anchors.bridge),i.scene.add(e);const n=new rn,s=de("#d9d2bb","stone"),r=de("#e7ddc4","stone"),o=l=>.1+.88*Math.sin((l+3.35)/6.7*Math.PI),a=new Je;a.moveTo(-3.35,-.62),a.lineTo(-3.35,o(-3.35));for(let l=1;l<=32;l++){const c=-3.35+l/32*6.7;a.lineTo(c,o(c))}a.lineTo(3.35,-.62),a.lineTo(2.4,-.62);for(let l=0;l<=32;l++){const c=l/32*Math.PI;a.lineTo(Math.cos(c)*2.4,-.32+Math.sin(c)*.72)}a.lineTo(-2.4,-.62),a.lineTo(-3.35,-.62),a.closePath(),n.add(Ln(a,1.95,.025),t.stone,V(0,0,-.975));for(const l of[-1,1])for(let c=0;c<15;c++){const u=c/15*Math.PI+.009,d=(c+1)/15*Math.PI-.009,f=new Je;f.moveTo(Math.cos(u)*2.4,-.32+Math.sin(u)*.72),f.lineTo(Math.cos(u)*2.66,-.32+Math.sin(u)*1.05);for(let g=1;g<=4;g++){const _=u+(d-u)*g/4;f.lineTo(Math.cos(_)*2.66,-.32+Math.sin(_)*1.05)}f.lineTo(Math.cos(d)*2.4,-.32+Math.sin(d)*.72);for(let g=1;g<=4;g++){const _=d-(d-u)*g/4;f.lineTo(Math.cos(_)*2.4,-.32+Math.sin(_)*.72)}f.closePath(),n.add(Ln(f,.18,.012),c%3?r:s,V(0,0,l>0?.96:-1.14))}for(const l of[-1,1])for(let c=0;c<3;c++)for(let u=0;u<2;u++)for(const d of[-1.05,1.05])n.block(c%2?s:r,l*(2.69+u*.34),-.48+c*.27,d,.32,.235,.22,0,0,0,.04);for(let l=0;l<19;l++){const c=-3.2+l*.356,u=o(c),d=.88*Math.PI/6.7*Math.cos((c+3.35)/6.7*Math.PI);for(let f=0;f<5;f++)n.block((l+f)%4?r:s,c,u+.045,-.8+f*.4,.337,.1,.38,0,0,Math.atan(d),.035)}for(const l of[-1.13,1.13]){const c=[];for(let u=0;u<9;u++){const d=-3.3+u*.825,f=o(d);n.block(t.woodDark,d,f+.43,l,.1,.93,.1);const g=new Se(.092,9,6);n.add(g,t.woodLight,V(d,f+.94,l)),g.dispose(),c.push(V(d,f+.86,l))}n.curve(t.woodLight,c,.055,50),n.curve(t.wood,c.map(u=>u.clone().add(V(0,-.43,0))),.03,50)}const h=[];for(const l of[-1,1]){const c=l*3.36,u=i.terrain.heightAt(e.position.x+c,e.position.z),d=u-e.position.y;n.block(s,c,(d-.15)*.5,0,.43,.15-d,2.1,0,0,0,.04);const f=l<0?1.48:1.12,g=l<0?4:3,_=l<0?.35:-.12,m=e.position.x+l*(3.35+f),p=e.position.z+_,x=i.terrain.heightAt(m,p)+.07,y=e.position.y+.17;for(let v=0;v<g;v++){const A=(v+.5)/g,M=l*(3.35+f*A),S=_*A,R=i.terrain.heightAt(e.position.x+M,e.position.z+S),w=Math.max(R+.065,me.lerp(y,x,(v+1)/g)),b=R-.11,P=w-b;for(let k=0;k<3;k++){const B=1.9-.18*A;n.block((v+k)%3?r:s,M,(w+b)*.5-e.position.y,S+(k-1)*B/3,f/g-.012,P,B/3-.015,0,0,0,.027)}h.push({x:e.position.x+M,z:e.position.z+S,top:w,ground:R})}}return e.userData.approachTreads=h,n.finish(e,"continuous stone barrel bridge with radial voussoirs"),{root:e,deckAt:l=>e.position.y+o(l-e.position.x)}}function Ci(i,t,e=!1){const n=Math.abs(i*2-1),s=Math.pow(Math.sin(Math.PI*i),.68)*.7,r=-.36+.53*Math.pow(n,3.1);return V(t*s*(e?.91:1),r+.57*Math.pow(Math.abs(t),1.65)+(e?.063:0),-1.64+i*3.28)}function i1(){const i=[],t=[],e=[];for(let a=0;a<2;a++)for(let h=0;h<=30;h++)for(let l=0;l<=20;l++){const c=Ci(h/30,l/20*2-1,a===1);i.push(c.x,c.y,c.z),t.push(h/30,l/20)}for(let a=0;a<30;a++)for(let h=0;h<20;h++){const l=a*21+h;e.push(l,l+1,l+20+1,l+1,l+20+2,l+20+1),e.push(651+l,651+l+20+1,651+l+1,651+l+1,651+l+20+1,651+l+20+2)}for(let a=0;a<30;a++)for(const h of[0,20]){const l=a*21+h;e.push(l,l+20+1,651+l,l+20+1,651+l+20+1,651+l)}const o=new qt;return o.setAttribute("position",new xt(i,3)),o.setAttribute("uv",new xt(t,2)),o.setIndex(e),o.computeVertexNormals(),o}function s1(i,t,e){const n=i.materials,s=new rn;s.rod(n.woodDark,e,e.clone().add(V(0,3.38,0)),.04,.033,12);const r=Xn([[.37,0],[.36,.1],[.16,.16],[.08,.22]],20);s.add(r,n.stone,e),r.dispose();const o=[],a=[[],[]],h=10,l=1.7,c=[new ne({color:"#f2e8cf",roughness:.96,side:xe}),new ne({color:"#e6c3be",roughness:.95,side:xe})];for(let d=0;d<h;d++){const f=[],g=[],_=[];for(let M=0;M<=8;M++)for(let S=0;S<=7;S++){const R=M/8*l,w=(d+S/7)/h*Math.PI*2,b=Math.sin(S/7*Math.PI),P=3.28-.48*Math.pow(M/8,.75)-.12*Math.pow(M/8,4)*b;f.push(e.x+Math.cos(w)*R,e.y+P,e.z+Math.sin(w)*R),g.push(S/7,M/8)}for(let M=0;M<8;M++)for(let S=0;S<7;S++){const R=M*8+S;_.push(R,R+7+1,R+1,R+1,R+7+1,R+7+2)}const x=new qt;x.setAttribute("position",new xt(f,3)),x.setAttribute("uv",new xt(g,2)),x.setIndex(_),x.computeVertexNormals(),a[d%2].push(x);const y=d/h*Math.PI*2,v=[];for(let M=0;M<=10;M++){const S=M/10*l;v.push(V(e.x+Math.cos(y)*S,e.y+3.25-.48*Math.pow(M/10,.75),e.z+Math.sin(y)*S))}s.curve(n.woodLight,v,.018,24),s.rod(n.woodDark,e.clone().add(V(0,2.42,0)),V(e.x+Math.cos(y)*l*.65,e.y+2.92,e.z+Math.sin(y)*l*.65),.016);const A=[];for(let M=0;M<=8;M++){const S=(d+M/8)/h*Math.PI*2;A.push(V(e.x+Math.cos(S)*l,e.y+2.8-.12*Math.sin(M/8*Math.PI),e.z+Math.sin(S)*l))}s.curve(n.cream,A,.021,18)}for(let d=0;d<2;d++){const f=Ps(a[d]);if(a[d].forEach(_=>_.dispose()),!f)throw new Error("Parasol panel merge failed");const g=new te(f,c[d]);g.name="parasol cloth panels",g.castShadow=!0,g.receiveShadow=!0,g.userData.restPositions=new Float32Array(f.attributes.position.array),t.add(g),o.push(g)}const u=new Se(.07,12,8);s.add(u,n.woodDark,e.clone().add(V(0,3.34,0))),u.dispose(),s.finish(t,"parasol ribs and mast"),i.addUpdate((d,f,g)=>{for(const _ of o){const m=_.geometry.attributes.position,p=_.userData.restPositions;for(let x=0;x<m.count;x++){const y=p[x*3]-e.x,v=p[x*3+2]-e.z,A=Math.min(1,Math.hypot(y,v)/l);m.setY(x,p[x*3+1]+Math.sin(d*1.25+y*2+v)*A*A*.012*g)}m.needsUpdate=!0}})}function r1(i){const t=i.materials,e=new ee;e.name="lakeside-dock",e.position.copy(i.terrain.anchors.dock),i.scene.add(e);const n=new rn,s=de("#716e56","wood"),r=de("#c7b48a","wood");for(let W=0;W<17;W++){const Q=-.03-W*.246;n.block(W%4?t.wood:t.woodLight,Q,0,0,.231,.13,2.12,0,0,Math.sin(W*1.7)*.006,.025);for(const H of[-.81,.81]){const N=new Se(.018,6,4);n.add(N,t.metal,V(Q,.071,H)),N.dispose()}}for(const W of[-.79,.79])n.block(t.woodDark,-2,-.2,W,4.3,.25,.17);for(const W of[-.15,-2.05,-3.95])for(const Q of[-.9,.9]){n.rod(t.woodDark,V(W,-1.65,Q),V(W,.34,Q),.09,.075,12),n.rod(s,V(W,-.75,Q),V(W,-.38,Q),.095,.095,12);const H=new Se(.095,10,6);n.add(H,t.woodLight,V(W,.34,Q)),H.dispose()}const o=V(11.12,0,6.54),a=i.terrain.heightAt(o.x,o.z),h=a+.095,l=V(.045,.015,0),c=V(o.x-e.position.x,h-.05-e.position.y,o.z-e.position.z),u=c.clone().sub(l),d=u.length();u.normalize();const f=new Wt().setFromQuaternion(new ge().setFromUnitVectors(V(1,0,0),u));for(let W=0;W<6;W++){const Q=yu(d/6-.012,.1,1.02,.021);n.add(Q,W%3?t.wood:t.woodLight,l.clone().lerp(c,(W+.5)/6),f),Q.dispose()}const g=V(-u.z,0,u.x).normalize();for(const W of[-1,1]){const Q=l.clone().addScaledVector(g,W*.38).add(V(0,-.095,0)),H=c.clone().addScaledVector(g,W*.38).add(V(0,-.095,0));n.rod(t.woodDark,Q,H,.045,.045,8);const N=i.terrain.heightAt(e.position.x+H.x,e.position.z+H.z)-e.position.y;n.block(t.stoneDark,H.x,N-.045,H.z,.26,.12,.27,0,0,0,.025)}e.userData.shoreAccess={start:l.clone().add(e.position).add(V(0,.05,0)).toArray(),end:[o.x,h,o.z],shoreGround:a};const _=[];for(let W=0;W<190;W++){const Q=W/189*Math.PI*9,H=.07+W/189*.28;_.push(V(-.8+Math.cos(Q)*H,.092+Math.sin(W*.2)*.004,.35+Math.sin(Q)*H))}n.curve(r,_,.021,170,6),n.curve(r,[_.at(-1).clone(),V(-1.1,.1,.75),V(-1.3,.05,1.01),V(-1.4,-.11,1.3)],.021,18),n.finish(e,"dock individual boards submerged piles and rope");const m=new ee;m.name="moored-rowboat",m.position.set(7.8,.18,8.95),m.rotation.y=1.45,i.scene.add(m);const p=new rn,x=de("#936a45","wood"),y=de("#b38b5d","wood"),v=de("#66513b","wood"),A=new te(i1(),new ne({color:"#a17b53",roughness:.82,side:xe}));A.castShadow=!0,A.receiveShadow=!0,A.name="curved double wall hull",m.add(A);for(const W of[-1,1]){const Q=[];for(let N=0;N<=32;N++)Q.push(Ci(N/32,W,!0).add(V(0,.026,0)));p.curve(t.woodDark,Q,.048,70,8);for(let N=1;N<7;N++){const $=W*N/7,pt=[];for(let dt=1;dt<30;dt++)pt.push(Ci(dt/30,$).add(V(0,-.006,0)));p.curve(v,pt,.0085,52,4)}const H=[];for(let N=3;N<=27;N++){const $=N/30,pt=Ci($,0).y,dt=Math.pow(Math.max(0,-pt/.57),1/1.65);H.push(Ci($,W*dt).add(V(W*.012,0,0)))}p.curve(s,H,.018,40,5)}for(let W=3;W<28;W+=4){const Q=[];for(let H=0;H<=18;H++)Q.push(Ci(W/30,H/9-1,!0).add(V(0,.026,0)));p.curve(y,Q,.023,24,6)}for(const W of[-.55,.52]){const Q=(W+1.64)/3.28,H=Ci(Q,1,!0).x;p.block(y,0,.29,W,H*1.85,.11,.3,0,0,0,.03);for(const N of[-H*.65,H*.65])p.rod(x,V(N,-.08,W),V(N,.26,W),.035)}for(let W=0;W<5;W++)p.block(y,-.27+W*.135,-.2,0,.12,.05,1.2,0,0,0,.015);for(const W of[-1,1]){const Q=V(W*.3,.34,-.85),H=V(-W*.25,.38,.65);p.rod(t.woodLight,Q,H,.027,.018);const N=new Je;N.moveTo(-.045,0),N.bezierCurveTo(-.11,.19,-.17,.55,-.08,.68),N.quadraticCurveTo(0,.73,.08,.68),N.bezierCurveTo(.17,.55,.11,.19,.045,0),N.closePath();const $=Ln(N,.033,.008),pt=H.clone().sub(Q).normalize(),dt=new ge().setFromUnitVectors(V(0,1,0),pt);p.add($,t.woodLight,H,new Wt().setFromQuaternion(dt)),$.dispose()}for(const W of[-1.42,1.42]){const Q=new Dn(.052,.012,6,12);p.add(Q,t.metal,V(0,.58,W),new Wt(Math.PI/2,0,0)),Q.dispose()}p.finish(m,"rowboat ribs strakes seats and wooden oars");const M=V(0,.58,-1.42),S=m.localToWorld(M.clone()),R=V(6.25,.94,7.9),w=new Ss(new pi([S.clone(),V(6.3,.53,8.43),V(6.25,.64,8.14),R]),28,.018,6,!1),b=new te(w,r);b.name="mooring rope attached to animated bow",b.castShadow=!0,b.receiveShadow=!0,b.frustumCulled=!1,i.scene.add(b);const P=new Float32Array(w.attributes.position.array),k=w.attributes.uv,B=new E,q=new E;let I=0;i.registerInteraction(m,"boat",()=>{I=1,m.userData.reaction=1}),i.addUpdate((W,Q)=>{I=Math.max(0,I-Q*.35),m.position.y=.18+Math.sin(W*.9)*.017+Math.sin(W*1.73+.6)*.009,m.rotation.z=Math.sin(W*1.13+.7)*(.012+I*.042),m.rotation.x=Math.sin(W*.73)*.009+Math.sin(W*2.2)*I*.013,m.userData.reaction=I,m.updateMatrixWorld(!0),B.copy(M).applyMatrix4(m.matrixWorld),q.copy(B).sub(S);const H=w.attributes.position;for(let N=0;N<H.count;N++){const $=(1-k.getX(N))**2;H.setXYZ(N,P[N*3]+q.x*$,P[N*3+1]+q.y*$,P[N*3+2]+q.z*$)}H.needsUpdate=!0,w.computeVertexNormals(),b.userData.bowWorld=B.toArray()});const U=new ee;U.name="lakeside-tea-garden",U.position.set(13.3,i.terrain.heightAt(13.3,8.9),8.9),i.scene.add(U);const O=new rn,F=new ne({color:"#f0e8d4",roughness:.28}),Y=de("#c48d67","earth");bu(O,t.woodLight,t.woodDark,V(0,0,0),.72,.9),co(O,t.woodDark,t.woodLight,V(-1.03,i.terrain.heightAt(12.27,8.9)-U.position.y,0),-Math.PI/2,.94),co(O,t.woodDark,t.woodLight,V(.38,i.terrain.heightAt(13.68,10)-U.position.y,1.1),Math.PI+.25,.94),Eu(O,F,t.metal,t.woodDark,V(0,.965,0),t.glass),lo(O,Y,t.soil,t.leaf,t.cream,V(-.76,0,-.55),.8);const J=V(.37,.96,-.31),D=Xn([[.045,0],[.085,.04],[.075,.13],[.033,.21]],16);O.add(D,F,J),D.dispose();const G=ui(.065,.045),it=ui(.095,.045);for(let W=0;W<4;W++){const Q=W*2.399,H=J.clone().add(V(Math.cos(Q)*.055,.42+W*.018,Math.sin(Q)*.055));O.rod(t.leaf,J.clone().add(V(0,.17,0)),H,.006),O.add(it,t.leaf,H.clone().add(V(0,-.09,0)),new Wt(.45,Q,.7));for(let N=0;N<5;N++)O.add(G,W%2?t.pink:t.cream,H,new Wt(Math.PI*.5,0,N*Math.PI*2/5))}return G.dispose(),it.dispose(),O.finish(U,"lakeside wicker chairs tea glass and flowers"),s1(i,U,V(.72,i.terrain.heightAt(14.02,8.35)-U.position.y,-.55)),{root:e,boat:m,terrace:U,boatPoint:m.position.clone().add(V(0,.3,0))}}function o1(i){const t=$v(i),e=e1(i),n=n1(i),s=r1(i);return{cottage:t,windmill:e,bridge:n,lakeside:s}}const di={leaf:["#88af50","#9ec66a","#709b42","#aecf73","#6d9845"],grass:["#8ab763","#a2c76b","#79a64f","#92bb61","#a9ce79"],stem:"#63904b",bark:"#8b7857"};function Ce(i,t){const e=typeof t=="string"?new Pt(t):t,n=i.getAttribute("position").count,s=new Float32Array(n*3);for(let r=0;r<n;r++)e.toArray(s,r*3);return i.setAttribute("color",new Ae(s,3)),i}function wn(i){const t=i.map(n=>{const s=n.index?n.toNonIndexed():n;return s.deleteAttribute("uv"),s}),e=Ps(t,!1);return e.computeVertexNormals(),e}function fi(i=1,t=.3,e=.09,n=5){const s=[],r=[],o=[];for(let h=0;h<=n;h++){const l=h/n,c=Math.pow(Math.sin(Math.PI*l),.82)*t*.5;for(let u=-1;u<=1;u++)s.push(u*c,l*i,e*l*l+Math.abs(u)*t*.09*Math.sin(Math.PI*l)),r.push((u+1)*.5,l)}for(let h=0;h<n;h++)for(let l=0;l<2;l++){const c=h*3+l;o.push(c,c+1,c+3,c+1,c+4,c+3)}const a=new qt;return a.setAttribute("position",new xt(s,3)),a.setAttribute("uv",new xt(r,2)),a.setIndex(o),a.computeVertexNormals(),a}function Fl(i=.35,t=.155,e=.045){const n=[0,0,0],s=[.5,0],r=[0,1,2,0,2,3];for(const a of[.34,.72]){const h=Math.sin(Math.PI*a)*t*.5;for(let l=-1;l<=1;l++)n.push(l*h,a*i,e*a*a+Math.abs(l)*t*.07),s.push((l+1)*.5,a)}n.push(0,i,e),s.push(.5,1),r.push(1,4,2,2,4,5,2,5,3,3,5,6,4,7,5,5,7,6);const o=new qt;return o.setAttribute("position",new xt(n,3)),o.setAttribute("uv",new xt(s,2)),o.setIndex(r),o.computeVertexNormals(),o}function Tu(i=.32,t=.04,e=.085){const n=[-t*.33,0,0,t*.33,0,0,-t*.4,i*.57,e*.31,t*.4,i*.57,e*.31,0,i,e],s=new qt;return s.setAttribute("position",new xt(n,3)),s.setIndex([0,1,2,1,3,2,2,3,4]),s.computeVertexNormals(),s}function Qr(i=.16,t=.07,e=.035,n=3){const s=fi(i,t,e,n);return s.rotateX(Math.PI*.5),s}function Es(i,t,e,n=14,s=8,r=.07){const o=new pi(i),a=o.computeFrenetFrames(n,!1),h=[],l=[],c=[];for(let d=0;d<=n;d++){const f=d/n,g=o.getPoint(f),_=me.lerp(t,e,Math.pow(f,.7));for(let m=0;m<=s;m++){const p=m/s*Math.PI*2,x=_*(1+r*Math.sin(p*5+f*4)+r*.45*Math.sin(p*9-f*3)),y=g.clone().addScaledVector(a.normals[d],Math.cos(p)*x).addScaledVector(a.binormals[d],Math.sin(p)*x);h.push(y.x,y.y,y.z),l.push(m/s,f)}}for(let d=0;d<n;d++)for(let f=0;f<s;f++){const g=d*(s+1)+f;c.push(g,g+1,g+s+1,g+1,g+s+2,g+s+1)}const u=new qt;return u.setAttribute("position",new xt(h,3)),u.setAttribute("uv",new xt(l,2)),u.setIndex(c),u.computeVertexNormals(),u}function a1(i){return`
vec3 natureRoot=vec3(0.0);
#ifdef USE_INSTANCING
natureRoot=instanceMatrix[3].xyz;
#endif
vec3 natureAt=position+natureRoot;
float slow=sin(uNatureTime*.68+natureAt.x*.31+natureAt.z*.21);
float cross=sin(uNatureTime*.97+natureAt.x*.17-natureAt.z*.41+1.9);
float breeze=uNatureWind*(.66+.22*slow+.12*cross);
${i==="canopy"||i==="twig"?`float crownFlex=smoothstep(4.1,10.8,natureAt.y);
transformed.x+=crownFlex*(sin(uNatureTime*.64+natureAt.x*.29+natureAt.z*.18)*.075+sin(uNatureTime*.93-natureAt.z*.3)*.025)*uNatureWind;
transformed.z+=crownFlex*cos(uNatureTime*.71+natureAt.z*.23)*.045*uNatureWind;`:""}
${i==="grass"?"float tip=pow(clamp(position.y/0.65,0.,1.),1.45);transformed.x+=tip*breeze*(.11*slow+.045*cross);transformed.z+=tip*breeze*.065*cos(uNatureTime*.83+natureAt.x*.24);":""}
${i==="flower"?"float tip=pow(max(position.y,0.),1.35);transformed.x+=tip*breeze*(.035*slow+.016*cross);transformed.z+=tip*breeze*.024*cos(uNatureTime*.78+natureAt.z*.3);":""}
${i==="canopy"?"float leafTip=clamp(position.y/0.7,0.,1.);transformed.z+=leafTip*sin(uNatureTime*1.87+natureRoot.x*1.7+natureRoot.z*.91)*.025*breeze;":""}
${i==="vine"?"float tip=clamp(-natureAt.y/3.8,0.,1.);transformed.x+=tip*sin(uNatureTime*.62+natureAt.z)*.06*breeze;transformed.z+=tip*cos(uNatureTime*.73+natureAt.x)*.035*breeze;":""}
`}function Au(i,t,e){i.uniforms.uNatureTime=t.timeUniform,i.uniforms.uNatureWind=t.windUniform,i.vertexShader=i.vertexShader.replace("#include <common>",`#include <common>
uniform float uNatureTime; uniform float uNatureWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
`+a1(e))}function on(i,t,e="#ffffff",n=!1){const s=new ne({color:e,vertexColors:n,roughness:.89,side:xe});return s.onBeforeCompile=r=>{Au(r,i,t),(t==="canopy"||t==="grass")&&(r.fragmentShader=r.fragmentShader.replace("#include <dithering_fragment>",`gl_FragColor.rgb += diffuseColor.rgb * 0.024;
#include <dithering_fragment>`))},s.customProgramCacheKey=()=>`nature-${t}-${n}`,s}function ur(i,t){const e=new ru({depthPacking:Uh,side:xe});return e.onBeforeCompile=n=>Au(n,i,t),e.customProgramCacheKey=()=>`nature-depth-${t}`,e}function qn(i,t,e,n,s,r){const o=new _o(i,t,e);return o.castShadow=!0,o.receiveShadow=!0,o.customDepthMaterial=ur(n,s),r.add(o),o}function Yn(i,t,e,n,s,r){i.setMatrixAt(t,new se().compose(e,n,s)),r&&i.setColorAt(t,r)}function ch(i,t,e,n,s=1,r=0,o=!0){const a=Ye(i.seed+460+r),h=new ee;h.name=o?"Ancient life tree":"Young broadleaf tree",h.position.set(e,i.terrain.heightAt(e,n),n),h.scale.setScalar(s),t.add(h);const l=[],c=[],u=[];let d=0;const f=I=>{if(o)I.x>0&&(I.x*=.74);else{const U=1-.29*mi((I.y-3.4)/2.4,0,1);I.x*=U,I.z*=U}return I},g=(I,U,O,F=14)=>{const Y=o&&U>=.18?U>=.45?18:16:U>.25?12:7,J=Es(I,U,O,F,Y,.07),D=J.getAttribute("position"),G=new E;for(let it=0;it<D.count;it++)f(G.fromBufferAttribute(D,it)),D.setXYZ(it,G.x,G.y,G.z);J.computeVertexNormals(),Ce(J,new Pt(di.bark).multiplyScalar(.87+a()*.2)),l.push(J),d++},_=[new E(0,0,0),new E(-.25,1.4,.1),new E(-.05,3,.12),new E(-.46,4.4,-.14),new E(-.33,6.25,-.4),new E(-.5,8.25,-.58)];g(_,.67,.075,35);const m=o?8:6;for(let I=0;I<m;I++){const U=I/m*Math.PI*2+a()*.32,O=1.6+a()*1.1,F=Math.cos(U)*O,Y=Math.sin(U)*O,J=(i.terrain.heightAt(e+F*s,n+Y*s)-h.position.y)/s-.1;g([new E(Math.cos(U)*.23,.42,Math.sin(U)*.23),new E(F*.43,.08+a()*.06,Y*.43),new E(F*.78,J+.035,Y*.78),new E(F,J-.035,Y)],.23,.012,12)}for(let I=0;I<(o?7:4);I++){const U=.3+I*2.39996+(a()-.5)*.23,O=2.45+a()*.85,F=new E(-.2,3.5+I*.39,-.16),Y=new E(Math.cos(U)*O-.65,6.45+a()*1.5,Math.sin(U)*O*.87-.4);Y.x>2.2&&Y.z>-.1&&(Y.x=2.15,Y.z-=.8),g([F,F.clone().lerp(Y,.3).add(new E(.1,-.05,0)),F.clone().lerp(Y,.68).add(new E(-.1,.45,.08)),Y],.27-I*.013,.055,18);for(let J=0;J<(o?4:3);J++){const D=.45+J*.16,G=F.clone().lerp(Y,D),it=U+(J%2?-.7:.72),W=.85+a()*.72,Q=G.clone().add(new E(Math.cos(it)*W,.75+a()*.95,Math.sin(it)*W));Q.x>3&&Q.z>-.4&&(Q.x=2.9,Q.z-=.6),g([G,G.clone().lerp(Q,.55).add(new E(0,.17,0)),Q],.055+(1-D)*.06,.012,10);for(let H=0;H<2;H++){const N=it+(H?-.62:.62),$=Q.clone().add(new E(Math.cos(N)*(.4+a()*.4),.3+a()*.55,Math.sin(N)*(.4+a()*.4)));g([Q.clone().lerp(G,.15),Q.clone().lerp($,.4),$],.019,.004,6),c.push({p:$,anchor:Q.clone(),radius:.62+a()*.49})}}}const p=new E(-.43,6.4,-.4),x=[new E(-.6,9.45,-.8),new E(-1.65,9.05,-1.25),new E(.48,8.75,-1.3),new E(-2.1,8.45,.3),new E(.45,7.6,.95)];for(let I=0;I<x.length;I++){const U=x[I],O=p.clone().add(new E(0,I*.22,0));g([O,O.clone().lerp(U,.55).add(new E(-.12,.12,.08)),U],.085-I*.008,.014,13);for(let F=0;F<3;F++){const Y=I*1.7+F*2.1,J=U.clone().add(new E(Math.cos(Y)*.44,(F-1)*.17,Math.sin(Y)*.42));g([U.clone().lerp(O,.23),U.clone().lerp(J,.4),J],.023,.004,6),c.push({p:J,anchor:U.clone().lerp(O,.2),radius:.59+a()*.2})}}for(let I=0;I<x.length;I++)for(const U of[.43,.69]){const O=p.clone().lerp(x[I],U);O.z+=I%2?.16:.31,u.push({p:O,anchor:p.clone().lerp(x[I],U-.18),radius:.83+I%3*.065})}const y=on(i,"twig","#ffffff",!0),v=y.onBeforeCompile;y.onBeforeCompile=(I,U)=>{v(I,U),I.vertexShader=I.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vNatureBark;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vNatureBark=position;`),I.fragmentShader=I.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vNatureBark;`),I.fragmentShader=I.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 float grain=sin(vNatureBark.x*38.+sin(vNatureBark.y*2.4)*.5+vNatureBark.z*33.);
 float fissure=pow(abs(sin(vNatureBark.x*17.+vNatureBark.z*21.+sin(vNatureBark.y*.8))),12.);
 diffuseColor.rgb*=.95+.065*grain-.13*fissure;
`)},y.customProgramCacheKey=()=>"nature-bark";const A=new te(wn(l),y);A.name="Tapered branch hierarchy and buried roots",A.castShadow=A.receiveShadow=!0,A.customDepthMaterial=ur(i,"twig"),h.add(A);const M=on(i,"canopy"),S=Fl(.35,.155,.045),R=[],w=o?[7400,3300,2500]:[760,420,240];let b=0;for(let I=0;I<w.length;I++){const U=qn(S,M,w[I],i,"canopy",h);U.name=`${o?"Ancient":"Young"} leaves tier ${I}`,I&&i.qualityObjects.push({object:U,level:I===1?"standard":"high"});for(let O=0;O<w[I];O++){const F=o&&O%7<2?u:c,Y=F[Math.floor(a()*F.length)],J=a()*Math.PI*2,D=a()*2-1,G=Y.radius*Math.pow(a(),.43)*(o?1:.77),it=Math.sqrt(Math.max(0,1-D*D)),W=Y.p.clone().lerp(Y.anchor,a()*.5).add(new E(Math.cos(J)*it*G*(.9+.18*Math.sin(Y.p.z*2)),D*G*(.53+.13*Math.cos(Y.p.x))+Math.sin(J*3+Y.p.x)*.065,Math.sin(J)*it*G*(.86+.16*Math.cos(Y.p.x))));f(W);const Q=W.clone().sub(f(Y.p.clone())).normalize(),H=new ge().setFromUnitVectors(new E(0,1,0),new E(Q.x*.6+.15,Q.y*.45+.35,Q.z*.6).normalize());H.multiply(new ge().setFromAxisAngle(new E(0,1,0),a()*Math.PI*2));const N=(.68+a()*.63)*(o?1:1.22),$=new Pt(di.leaf[Math.floor(a()*di.leaf.length)]);$.multiplyScalar(.95+a()*.08),Yn(U,O,W,H,new E(N*(.8+a()*.4),N,N),$)}U.instanceMatrix.needsUpdate=!0,U.computeBoundingSphere(),U.boundingSphere&&(U.boundingSphere.radius+=.2),R.push(U),b+=w[I]}const P=new ne({color:"#7b9850",roughness:1}),k=[];for(let I=0;I<14;I++){const U=a()*Math.PI*2,O=.3+a()*.9,F=.09+a()*.11,Y=new Se(F,6,4);Y.scale(1,.23,1.7),Y.rotateY(U),Y.translate(Math.cos(U)*O,0,Math.sin(U)*O);const J=Y.getAttribute("position");for(let D=0;D<J.count;D++){const G=(i.terrain.heightAt(e+J.getX(D)*s,n+J.getZ(D)*s)-h.position.y)/s;J.setY(D,G+(J.getY(D)+F*.23)*.4-.005)}Y.computeVertexNormals(),k.push(Y)}const B=new te(wn(k),P);B.name="Ground-conforming root moss",B.receiveShadow=!0,h.add(B);let q=()=>{};if(o){let I=function(){const G=F[Y++%U],it=c[Math.floor(a()*c.length)];G.origin.copy(it.p).add(new E((a()-.5)*.5,0,(a()-.5)*.5)),f(G.origin),G.age=0,G.life=9+a()*4,G.phase=a()*Math.PI*2,G.speed=.7+a()*.45,G.landed=!1};const U=44,O=new _o(fi(.37,.18,.05,4),new ne({color:"#b6bf73",roughness:.9,side:xe}),44);O.name="Pooled falling leaves",O.castShadow=!0,O.count=0,h.add(O);const F=Array.from({length:44},()=>({age:100,life:9,origin:new E,phase:0,speed:1,landed:!1,landPosition:new E}));let Y=0,J=3;q=()=>{for(let G=0;G<15;G++)I()};const D=new Le;i.addUpdate((G,it,W)=>{J-=it,J<=0&&(I(),J=4.8+a()*4.2);let Q=0;for(let H=0;H<44;H++){const N=F[H];if(N.age+=it,N.age>=N.life)continue;const $=N.age,pt=1-mi(($-N.life+1.6)/1.6,0,1);if(!(pt<=1e-4)){if(N.landed)D.position.copy(N.landPosition),D.rotation.set(-Math.PI*.5,N.phase,0,"YXZ");else{D.position.copy(N.origin).add(new E(Math.sin($*.83+N.phase)*.48+$*.055*W,-$*N.speed,Math.cos($*.62+N.phase)*.35));const dt=(i.terrain.heightAt(e+D.position.x*s,n+D.position.z*s)-h.position.y)/s+.018;D.position.y<=dt?(D.position.y=dt,N.landPosition.copy(D.position),N.landed=!0,D.rotation.set(-Math.PI*.5,N.phase,0,"YXZ")):D.rotation.set($*.7+N.phase,$*.55,Math.sin($*.94+N.phase)*.5,"XYZ")}D.scale.setScalar(pt*(.8+Math.sin(N.phase)*.15)),D.updateMatrix(),O.setMatrixAt(Q++,D.matrix)}}O.count=Q,O.instanceMatrix.needsUpdate=!0}),O.frustumCulled=!1,h.userData.leafPoolSize=44}return h.userData.branchCount=d,h.userData.leafCount=b,{root:h,canopy:R,branchCount:d,leafCount:b,dropLeaves:q}}function l1(i,t,e,n=.01){i.push(Ce(Es([new E(0,0,0),new E(e*.35,t*.5,0),new E(e,t,0)],n,n*.55,7,5,0),di.stem));for(let s=0;s<3;s++){const r=.23+s*.19,o=s%2?1:-1,a=fi(t*.29,t*.09,.025,3);a.rotateZ(o*1.12),a.rotateY(s*1.8),a.translate(e*r,t*r,0),i.push(Ce(a,s%2?"#6c984d":"#7fa957"))}}function c1(i,t){const e=[],n=Ye(830+t*31+i.length*97),s=i==="hydrangea"?.68:i==="lavender"?.59:i==="rose"?.64:.34+t*.055,r=(n()-.5)*.065;if(l1(e,s,r,i==="hydrangea"?.018:.009),i==="daisy"||i==="wildflower"){const o=i==="daisy"?11:6,a=i==="daisy"?.13:.085,h=i==="daisy"?.045:.064;for(let c=0;c<o;c++){const u=c/o*Math.PI*2+(n()-.5)*.08,d=Qr(a*(.92+n()*.15),h,-.018,3);d.rotateY(u),d.translate(r,s,0),e.push(Ce(d,i==="daisy"?c%3?"#f7f4dd":"#e9edcf":c%2?"#e8d58a":"#f0df9b"))}const l=new Se(i==="daisy"?.037:.022,6,4);l.scale(1,.58,1),l.translate(r,s+.014,0),e.push(Ce(l,i==="daisy"?"#cfb460":"#bb9e59"));for(let c=0;c<6;c++){const u=c/6*Math.PI*2,d=new oo(.007);d.translate(r+Math.cos(u)*.022,s+.033,Math.sin(u)*.022),e.push(Ce(d,"#e6ce7f"))}}else if(i==="rose")if(t===2){const o=new Se(.052,8,6);o.scale(.85,1.45,.85),o.translate(r,s+.025,0),e.push(Ce(o,"#d5a6b0"));for(let a=0;a<5;a++){const h=fi(.09,.027,.01,3);h.rotateZ(.35),h.rotateY(a/5*Math.PI*2),h.translate(r,s-.04,0),e.push(Ce(h,"#729350"))}}else{for(let a=0;a<3;a++){const h=a===2?5:7;for(let l=0;l<h;l++){const c=l/h*Math.PI*2+a*.4,u=Qr(.12-a*.027,.1-a*.021,-(.035+a*.008),4);u.rotateY(c),u.translate(r+Math.sin(c)*a*.007,s+a*.025,Math.cos(c)*a*.007),e.push(Ce(u,a===0?"#e3b8c5":a===1?"#e9c7cd":"#dca5b6"))}}const o=new Se(.024,7,4);o.translate(r,s+.075,0),e.push(Ce(o,"#d6bd83"))}else if(i==="hydrangea"){for(let o=0;o<28;o++){const a=o*2.39996,h=.25+o/28*.75,l=Math.sqrt(Math.max(0,1-h*h))*.18,c=new E(r+Math.cos(a)*l,s+.04+h*.16,Math.sin(a)*l),u=new E(Math.cos(a)*l,h*.2,Math.sin(a)*l).normalize(),d=new ge().setFromUnitVectors(new E(0,1,0),u);for(let g=0;g<4;g++){const _=Qr(.052,.044,-.009,2);_.rotateY(g*Math.PI*.5+.3),_.applyQuaternion(d),_.translate(c.x,c.y,c.z),e.push(Ce(_,["#bbcfdd","#c5c4df","#aabfd5","#e0e1d9"][o%4]))}const f=new oo(.011);f.translate(c.x,c.y+.008,c.z),e.push(Ce(f,"#d5dbb9"))}for(let o=0;o<4;o++){const a=fi(.28,.14,.04,4);a.rotateZ(.9),a.rotateY(o*Math.PI*.5),a.translate(0,s*.55,0),e.push(Ce(a,"#699955"))}}else{for(let o=0;o<10;o++){const a=s*.73+o*.03,h=.029*(1-o*.055);for(let l=0;l<4;l++){const c=l*Math.PI*.5+o*.63,u=new Se(.018,4,3);u.scale(.85,1.2,1),u.translate(r*(a/s)+Math.cos(c)*h,a,Math.sin(c)*h),e.push(Ce(u,o%2?"#b7a5d0":"#9d99bd"))}}for(let o=0;o<4;o++){const a=fi(.23,.018,.026,3);a.rotateZ((o%2?1:-1)*.8),a.rotateY(o),a.translate(0,s*.34,0),e.push(Ce(a,"#8aab80"))}}return wn(e)}function ol(i,t,e,n=.06){const s=i.terrain;if(s.islandValue(t,e)>.94||s.occupied(t,e,n)||s.pathDistance(t,e)<.62+n||s.pondValue(t,e)<1.12)return!1;const r=s.riverInfo(t,e);if(r.d<r.width*.5+.22||t>-1.15&&t<2.75&&e>-5.75&&e<-3.85||Math.hypot(t-13.3,e-8.9)<2.05)return!1;for(const[a,h]of[[-14,-3.8],[-16,-7],[-13.9,-10.5]])if(Math.hypot(t-a,e-h)<.8)return!1;const o=s.heightAt(t,e);return Math.abs(s.heightAt(t+.2,e)-o)+Math.abs(s.heightAt(t,e+.2)-o)<.26}function h1(i,t){const e=Ye(i.seed+3210),n=on(i,"flower","#ffffff",!0),s={},r=[{x:3.3,z:-1.6,rx:1.3,rz:1,kind:"rose",n:20},{x:14,z:-4.6,rx:1.6,rz:2.15,kind:"hydrangea",n:16},{x:13.7,z:-1.6,rx:1,rz:.85,kind:"hydrangea",n:6},{x:4,z:-8.6,rx:1.5,rz:.8,kind:"hydrangea",n:14},{x:12.8,z:-.4,rx:1.5,rz:1.1,kind:"rose",n:24},{x:3.4,z:-3.7,rx:1.15,rz:1.35,kind:"lavender",n:42},{x:13.45,z:-7,rx:1.15,rz:1.5,kind:"lavender",n:38},{x:2,z:10.9,rx:1.8,rz:.7,kind:"daisy",n:35},{x:8.7,z:11.25,rx:2.1,rz:.55,kind:"wildflower",n:45},{x:12.7,z:4.35,rx:1.5,rz:1.1,kind:"hydrangea",n:16},{x:-3.5,z:-5.5,rx:2.1,rz:1.4,kind:"daisy",n:38},{x:-10.5,z:-4.2,rx:1.2,rz:1.1,kind:"wildflower",n:34},{x:-14.5,z:-1.2,rx:2,rz:1.3,kind:"daisy",n:42},{x:-5.7,z:4.6,rx:3.8,rz:1.2,kind:"wildflower",n:34},{x:-1.3,z:-10.3,rx:1.7,rz:1.4,kind:"daisy",n:32}],o=new Map,a=(h,l,c,u,d)=>{const f=Math.floor(e()*(h==="rose"?3:2)),g=h+":"+f,_=o.get(g)??[];_.push({x:l,z:c,height:i.terrain.heightAt(l,c),scale:u,seed:e(),patch:d}),o.set(g,_)};for(const[h,l]of r.entries()){let c=0;const u=e()*Math.PI*2;for(let d=0;d<l.n*20&&c<l.n;d++){const f=e()*Math.PI*2,g=Math.sqrt(e())*(.75+.2*Math.sin(f*3+u)),_=Math.floor(e()*3)*2.094+u,m=l.x+Math.cos(f)*g*l.rx+Math.cos(_)*l.rx*.22,p=l.z+Math.sin(f)*g*l.rz+Math.sin(_)*l.rz*.2,x=.1+.22*(.5+.5*Math.sin(m*1.8+p*.9));!ol(i,m,p,x)||e()>.86+.15*Kn(m*2.2,p*2.2)||(a(l.kind,m,p,.64+e()*.68,`bed-${h}`),c++)}}for(let h=0;h<1200;h++){const l=(e()-.5)*40,c=(e()-.5)*29;if(!ol(i,l,c))continue;const u=i.terrain.pathDistance(l,c),d=u<1.8?.52:.12;e()>d||a(e()<.62?"daisy":"wildflower",l,c,.55+e()*.7,`meadow-${Math.floor((l+21)/8)}-${Math.floor((c+15)/7)}`)}for(const[h,l]of o){const c=new Map;for(const p of l){const x=c.get(p.patch)??[];x.push(p),c.set(p.patch,x)}const u=[...c.values()].flatMap(p=>p.map((x,y)=>({p:x,rank:(y+.5)/p.length}))).sort((p,x)=>p.rank-x.rank||p.p.seed-x.p.seed).map(p=>p.p),[d,f]=h.split(":"),g=c1(d,Number(f)),_=[Math.ceil(l.length*.65),Math.ceil(l.length*.23),l.length-Math.ceil(l.length*.65)-Math.ceil(l.length*.23)];let m=0;for(let p=0;p<3;p++){const x=_[p];if(x<=0)continue;const y=qn(g,n,x,i,"flower",t);y.name=`${d} botanical variant ${f} layer ${p}`,p&&i.qualityObjects.push({object:y,level:p===1?"standard":"high"});for(let v=0;v<x;v++){const A=u[m++],M=new ge().setFromEuler(new Wt((e()-.5)*.12,A.seed*Math.PI*2,(e()-.5)*.14));Yn(y,v,new E(A.x,A.height+.012,A.z),M,new E(A.scale,A.scale,A.scale))}y.computeBoundingSphere(),y.boundingSphere&&(y.boundingSphere.radius+=.15),s[d]=(s[d]??0)+x}}return s}function u1(){const i=Mu(),t=i.getAttribute("position"),e=i.getAttribute("normal"),n=new E().fromBufferAttribute(t,t.count-1);let s=1;for(let h=t.count-2;h>=0&&!(new E().fromBufferAttribute(t,h).distanceToSquared(n)>1e-9);h--)s++;const r=s-1,o=t.count/s-1;function a(h,l){const c=(h/(Math.PI*2)%1+1)%1*r,u=mi(l,0,.98)*o,d=Math.floor(c),f=Math.floor(u),g=c-d,_=u-f,m=f*s+d,p=g+_<=1?[m,m+1,m+s]:[m+1,m+s+1,m+s],x=g+_<=1?[1-g-_,g,_]:[1-_,g+_-1,1-g],y=new E,v=new E;for(let A=0;A<3;A++)y.addScaledVector(new E().fromBufferAttribute(t,p[A]),x[A]),v.addScaledVector(new E().fromBufferAttribute(e,p[A]),x[A]);return{p:y,n:v.normalize()}}return{sample:a,dispose:()=>i.dispose()}}const hh=i=>!(i.p.z>7&&Math.abs(i.p.x+1)<4);function d1(i,t,e){const n=Ye(i.seed+6231),s=[];for(let M=0;M<Math.PI*2;M+=.042)for(let S=.075;S<.31;S+=.022){const R=e.sample(M,S);R.n.y>.045&&hh(R)&&R.p.y>-4.6&&s.push({a:M,t:S,s:R})}const r=[],o=[],a=Array.from({length:25},(M,S)=>({a:S*2.39996+.18,t:.04+n()*.32}));for(const M of a){if(!hh(e.sample(M.a,M.t)))continue;const S=[],R=[],w=[],b=n()*6.28,P=.28+n()*.38,k=new Pt(["#899967","#91a571","#a2af7b"][Math.floor(n()*3)]),B=11,q=(U,O)=>{const F=1+.14*Math.sin(O*3+b)+.11*Math.cos(O*5-b),Y=M.a+Math.cos(O)*U*P*.052*F,J=M.t+Math.sin(O)*U*P*.063*F,D=e.sample(Y,J);D.p.addScaledVector(D.n,.012+(1-U)*.018),S.push(...D.p.toArray()),k.clone().multiplyScalar(.94+n()*.12).toArray(R,R.length)};q(0,0);for(let U=1;U<=2;U++)for(let O=0;O<B;O++)q(U/2,O/B*Math.PI*2);for(let U=0;U<B;U++){const O=(U+1)%B;w.push(0,1+U,1+O),w.push(1+U,1+B+U,1+O,1+O,1+B+U,1+B+O)}const I=new qt;I.setAttribute("position",new xt(S,3)),I.setAttribute("color",new xt(R,3)),I.setIndex(w),I.computeVertexNormals(),o.push(I)}const h=new ne({color:"#ffffff",vertexColors:!0,roughness:1,side:xe,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),l=new te(wn(o),h);l.name="Conforming limestone moss islands",l.receiveShadow=!0,t.add(l);const c=[];for(const M of[2.64,4.77,5.48]){const S=s.filter(R=>!c.some(w=>R.s.p.distanceTo(w.s.p)<3)).sort((R,w)=>Math.abs(R.a-M)-Math.abs(w.a-M))[0];S&&c.push(S)}const u=[];for(const M of s){if(u.length>=36)break;n()>.38||u.some(S=>S.p.distanceTo(M.s.p)<.37)||u.push(M.s)}const d=wn(Array.from({length:5},(M,S)=>{const R=Tu(.16+S*.023,.026,.09);return R.rotateY(S*2.4),R})),f=qn(d,on(i,"grass","#a6b86e"),u.length,i,"grass",t);f.name="Attached rock seam grasses",f.userData.natureGrass=!0,u.forEach((M,S)=>{const R=M.n.clone().multiplyScalar(.38).add(new E(0,1,0)).normalize(),w=new ge().setFromUnitVectors(new E(0,1,0),R),b=M.p.clone().addScaledVector(M.n,-.012);Yn(f,S,b,w,new E(.75,.7+n()*.5,.75)),r.push(b.toArray())}),f.computeBoundingSphere();const g=[Ce(Es([new E,new E(.035,.14,0),new E(.06,.24,0)],.006,.003,5,4,0),"#718b53")];for(let M=0;M<6;M++){const S=Qr(.06,.027,-.012,2);S.rotateY(M*Math.PI/3),S.translate(.06,.24,0),g.push(Ce(S,"#eeefdb"))}const _=new Se(.015,5,3);_.translate(.06,.246,0),g.push(Ce(_,"#d1bc72"));const m=u.filter((M,S)=>S%3===0),p=qn(wn(g),on(i,"flower","#ffffff",!0),m.length,i,"flower",t);p.name="Sparse cliff white saxifrage",m.forEach((M,S)=>{const R=M.p.clone().addScaledVector(M.n,.012),w=M.n.clone().multiplyScalar(.52).add(new E(0,1,0)).normalize();Yn(p,S,R,new ge().setFromUnitVectors(new E(0,1,0),w),new E(1,1,1)),r.push(R.toArray())}),p.computeBoundingSphere();const x=[],y=[];for(const M of c){const S=M.s,R=S.p.clone().addScaledVector(S.n,-.025),w=S.n.clone().multiplyScalar(.25);w.y=.2,r.push(R.toArray());for(let b=0;b<7;b++){const P=b*2.39996,k=R.clone().add(w).add(new E(Math.cos(P)*(.16+n()*.13),.1+n()*.23,Math.sin(P)*(.16+n()*.13)));x.push(Ce(Es([R,R.clone().lerp(k,.5).add(new E(0,.05,0)),k],.018,.004,6,5,0),"#8d9062"));for(let B=0;B<8;B++){const q=R.clone().lerp(k,.45+n()*.55).add(new E((n()-.5)*.15,n()*.1,(n()-.5)*.15)),I=new ge().setFromEuler(new Wt((n()-.5)*1.6,n()*6.28,(n()-.5)*1.9));y.push({p:q,q:I,s:.55+n()*.45})}}}const v=new te(wn(x),on(i,"twig","#ffffff",!0));v.name="Rooted cliff shrubs",v.castShadow=v.receiveShadow=!0,v.customDepthMaterial=ur(i,"twig"),t.add(v);const A=qn(Fl(.18,.105,.023),on(i,"canopy","#97ad6f"),y.length,i,"canopy",t);return A.name="Cliff shrub spring leaves",y.forEach((M,S)=>Yn(A,S,M.p,M.q,new E(M.s,M.s,M.s))),A.computeBoundingSphere(),t.userData.cliffAttachedRootPoints=r,{mossPatches:o.length,rockGrassClumps:u.length,whiteFlowers:m.length,rockShrubs:c.length,rockShrubLeaves:y.length}}function f1(i,t){const e=Ye(i.seed+2345),n=on(i,"grass","#ffffff",!0),s=[4,5,7],r=s.map((c,u)=>{const d=[];for(let f=0;f<c;f++){const g=e()*Math.PI*2,_=.17+e()*(u===2?.32:.23),m=Tu(_,.026+e()*.025,.055+e()*.12);m.rotateZ((e()-.5)*.48),m.rotateY(g);const p=.06+e()*.12;m.translate(Math.cos(g)*p,0,Math.sin(g)*p),d.push(Ce(m,new Pt().setScalar(.94+e()*.1)))}return wn(d)}),o=[3400,1900,2100],a=[];let h=0,l=0;for(let c=0;c<3;c++)for(let u=0;u<3;u++){const d=Math.floor(o[c]*[.32,.4,.28][u]),f=qn(r[u],n,d,i,"grass",t);f.name=`Living meadow layer ${c} form ${u}`,c&&i.qualityObjects.push({object:f,level:c===1?"standard":"high"});let g=0;for(let _=0;g<d&&_<d*25;_++){const m=(e()-.5)*42,p=(e()-.5)*30,x=i.terrain;if(x.islandValue(m,p)>.976||x.occupied(m,p,.04)||x.pondValue(m,p)<1.09||x.pathDistance(m,p)<.57||m>-1.1&&m<2.7&&p>-5.7&&p<-3.9)continue;const y=x.riverInfo(m,p);if(y.d<y.width*.5+.2)continue;const v=x.heightAt(m,p);if(Math.abs(x.heightAt(m+.18,p)-v)+Math.abs(x.heightAt(m,p+.18)-v)>.26||Math.hypot(m-1,p+8)<1.25)continue;const M=.48+.24*Math.sin(m*.46+Math.cos(p*.68))+.3*Kn(m*.8,p*.8)+.14*Kn(m*2.1,p*2.1);if(e()>M+.24)continue;const S=ai(.6,2.3,x.pathDistance(m,p)),R=1-ai(y.width*.5+.3,y.width*.5+2,y.d);let w=(.56+e()*.65)*(.64+S*.42)*(.9+.12*Math.sin(m*.9+p*.4));(Math.hypot(m-13.3,p-8.9)<2||[[-14,-3.8],[-16,-7],[-13.9,-10.5]].some(([B,q])=>Math.hypot(m-B,p-q)<.9))&&(w*=.32);const b=new ge().setFromAxisAngle(new E(0,1,0),e()*Math.PI*2),P=new Pt(di.grass[Math.floor(e()*di.grass.length)]);P.lerp(new Pt("#769e59"),R*.2);const k=.85+e()*.65;Yn(f,g,new E(m,v-.016,p),b,new E(k,w,k),P),g++}f.count=g,f.instanceMatrix.needsUpdate=!0,f.computeBoundingSphere(),f.boundingSphere&&(f.boundingSphere.radius+=.25),f.userData.natureGrass=!0,h+=g,l+=g*s[u],a.push(f)}return{clumps:h,blades:l,meshes:a}}function p1(i,t){const e=Ye(i.seed+4512),n=[],s=[],r=[[-5.8,-9.7,.8],[-8.2,-7.4,.65],[-17,1.8,.7],[-10,8,.85],[-5.6,9.4,.6],[3.5,-10.8,.65],[14.1,-7.1,.7],[14.1,-1.9,.55],[10.7,10.8,.55],[15,3.9,.6],[2.1,-1.6,.48],[-3.4,-5.4,.55]];let o=0;for(const[c,u,d]of r){if(!ol(i,c,u,.16))continue;o++;const f=i.terrain.heightAt(c,u);for(let g=0;g<12;g++){const _=g*2.39996,m=.23+e()*.4,p=new E(c+Math.cos(_)*m*d,f+(.45+e()*.5)*d,u+Math.sin(_)*m*d),x=new E(c+(e()-.5)*.12,f,u+(e()-.5)*.12);n.push(Ce(Es([x,x.clone().lerp(p,.5).add(new E(0,.07,0)),p],.019*d,.004,7,5,0),"#7d8052"));for(let y=0;y<12;y++){const v=e()*Math.PI*2,A=Math.pow(e(),.6)*.22*d,M=p.clone().add(new E(Math.cos(v)*A,(e()-.5)*.22*d,Math.sin(v)*A)),S=new ge().setFromEuler(new Wt((e()-.5)*1.8,e()*Math.PI*2,(e()-.5)*1.6));s.push({p:M,q:S,s:(.42+e()*.5)*d,color:new Pt(di.leaf[Math.floor(e()*di.leaf.length)])})}}}if(n.length){const c=new te(wn(n),on(i,"twig","#ffffff",!0));c.customDepthMaterial=ur(i,"twig"),c.castShadow=c.receiveShadow=!0,t.add(c)}const a=Fl(.34,.16,.045),h=on(i,"canopy"),l=qn(a,h,s.length,i,"canopy",t);l.name="Layered shrub leaf blades";for(let c=0;c<s.length;c++){const u=s[c];Yn(l,c,u.p,u.q,new E(u.s,u.s,u.s),u.color)}return l.computeBoundingSphere(),{shrubs:o,leaves:s.length}}function m1(i,t){const e=Ye(i.seed+518),n=[],s=[];let r=0;const o=u1(),a=[-.14,.17,.53,.89,1.01,1.83,2.15,2.37,2.64,2.88,3.23,3.65,3.9,4.15,4.43,4.91,5.23,5.45,5.85];for(const _ of a){const m=_+(e()-.5)*.08,p=o.sample(m,.003);if(Math.abs(p.p.x+1)<3&&p.p.z>11)continue;const x=.8+Math.pow(e(),.7)*3.2,y=x/15,v=[];for(let A=0;A<=20;A++){const M=A/20,S=o.sample(m+Math.sin(M*4+m)*.003,.003+y*M);v.push(S.p.addScaledVector(S.n,.018))}n.push(Ce(Es(v,.027,.004,30,5,0),"#7c9254"));for(let A=0;A<Math.floor(x*9);A++){const M=(A+.3)/(x*9),S=o.sample(m+Math.sin(M*4+m)*.003,.003+y*M),R=S.p.addScaledVector(S.n,.025),w=A%2?1:-1,b=new E(-Math.sin(m)*w*.7,-.45,Math.cos(m)*w*.7).addScaledVector(S.n,.25).normalize(),P=new ge().setFromUnitVectors(new E(0,1,0),b);P.multiply(new ge().setFromAxisAngle(new E(0,1,0),(e()-.5)*1.2)),s.push({p:R,q:P,s:.7+e()*.5,c:new Pt(A%3?"#87a962":"#a3bc70")})}r++}const h=on(i,"vine","#ffffff",!0),l=new te(wn(n),h);l.customDepthMaterial=ur(i,"vine"),l.castShadow=l.receiveShadow=!0,l.name="Rock-attached cascading vines",t.add(l);const c=qn(fi(.27,.17,.04,3),on(i,"vine"),s.length,i,"vine",t);c.name="Cliff vine leaves",s.forEach((_,m)=>Yn(c,m,_.p,_.q,new E(_.s,_.s,_.s),_.c)),c.computeBoundingSphere(),c.boundingSphere&&(c.boundingSphere.radius+=.2);const u=wn(Array.from({length:4},(_,m)=>{const p=fi(.28+m*.03,.038,.06,2);return p.rotateY(m*2.4),p.rotateZ(.2),p})),d=qn(u,on(i,"grass"),a.length*3,i,"grass",t);d.name="Rock rim grass",d.userData.natureGrass=!0;let f=0;for(const _ of a)for(let m=0;m<3;m++){const p=_+m*.018,x=cr(p)*(.967+m*.003),y=Math.cos(p)*21*x,v=Math.sin(p)*15*x;i.terrain.waterAt(y,v)===null&&Yn(d,f++,new E(y,i.terrain.heightAt(y,v)-.025,v),new ge().setFromAxisAngle(new E(0,1,0),p),new E(1,.7+e()*.7,1),new Pt("#91b061"))}d.count=f,d.computeBoundingSphere();const g=d1(i,t,o);return o.dispose(),{vines:r,leaves:s.length,rimTufts:f,...g}}function g1(i){const t=new ee;t.name="Living spring vegetation",i.scene.add(t);const e=ch(i,t,1,-8,1,0,!0);i.registerInteraction(e.root,"tree",e.dropLeaves);const s=[[-17.1,-3.1,.35],[-12.3,8.2,.33],[-3.8,-11.7,.36],[15.2,-8.2,.32],[15.7,3.3,.285]].map(([d,f,g],_)=>ch(i,t,d,f,g,300+_*31,!1)),r=f1(i,t),o=h1(i,t),a=p1(i,t),h=m1(i,t),l=[];t.traverse(d=>{d instanceof te&&d.userData.natureGrass&&l.push(d)});let c=i.quality;const u=()=>{for(const d of l)d.castShadow=i.quality!=="performance"};return u(),i.addUpdate(()=>{i.quality!==c&&(c=i.quality,u())}),t.userData.natureStats={seed:i.seed,ancientTree:{branchJobs:e.branchCount,leafInstances:e.leafCount,leafPool:44},youngTrees:{count:s.length,branchJobs:s.reduce((d,f)=>d+f.branchCount,0),leafInstances:s.reduce((d,f)=>d+f.leafCount,0)},grassClumps:r.clumps,grassBlades:r.blades,flowers:o,shrubs:a,cliff:h,interactionPoint:[1,5,-8]},t.userData.visualNotes="True curved botanical geometry. Shared wind field and matched depth deformation. Vegetation excludes water, paths, platforms, bench, sheep resting areas and lakeside seating.",{root:t,tree:e.root,dropLeaves:e.dropLeaves,stats:t.userData.natureStats}}function Pe(i,t,e,n=0,s=0,r=32,o=22){const a=[],h=[],l=[],c=[];for(let d=0;d<=o;d++){const f=d/o,g=f*Math.PI;for(let _=0;_<=r;_++){const m=_/r,p=m*Math.PI*2,x=Math.sin(g),y=Math.sin(p*5+n)*x*x*.42+Math.sin(p*9-n*.7)*Math.sin(g*6)*x*.29+Math.cos(p*13+n)*Math.sin(g*9)*x*.18,v=1+s*y;a.push(Math.cos(p)*x*i*v,Math.cos(g)*t*v,Math.sin(p)*x*e*v);const A=.97+.025*y;h.push(A,A,A),l.push(m,f)}}for(let d=0;d<o;d++)for(let f=0;f<r;f++){const g=d*(r+1)+f,_=g+r+1;c.push(g,g+1,_,g+1,_+1,_)}const u=new qt;return u.setAttribute("position",new xt(a,3)),u.setAttribute("color",new xt(h,3)),u.setAttribute("uv",new xt(l,2)),u.setIndex(c),u.computeVertexNormals(),u}function ve(i,t=0,e=0,n=0,s=0,r=0,o=0){return i.applyMatrix4(new se().compose(new E(t,e,n),new ge().setFromEuler(new Wt(s,r,o)),new E(1,1,1)))}function Ve(i,t,e=20,n=10,s=1){const r=new pi(i,!1,"centripetal"),o=r.computeFrenetFrames(e,!1),a=[],h=[],l=[],c=[];for(let d=0;d<=e;d++){const f=d/e,g=r.getPointAt(f),_=f*(t.length-1),m=Math.min(t.length-2,Math.floor(_)),p=me.lerp(t[m],t[m+1],_-m);for(let x=0;x<=n;x++){const y=x/n*Math.PI*2,v=o.normals[d],A=o.binormals[d];a.push(g.x+p*(Math.cos(y)*v.x+Math.sin(y)*A.x*s),g.y+p*(Math.cos(y)*v.y+Math.sin(y)*A.y*s),g.z+p*(Math.cos(y)*v.z+Math.sin(y)*A.z*s)),h.push(1,1,1),l.push(x/n,f)}}for(let d=0;d<e;d++)for(let f=0;f<n;f++){const g=d*(n+1)+f,_=g+n+1;c.push(g,g+1,_,g+1,_+1,_)}const u=new qt;return u.setAttribute("position",new xt(a,3)),u.setAttribute("color",new xt(h,3)),u.setAttribute("uv",new xt(l,2)),u.setIndex(c),u.computeVertexNormals(),u}function Ee(i,t,e,n,s=!0){const r=e.map(h=>{const l=h.index?h.toNonIndexed():h.clone();if(l.deleteAttribute("uv"),l.deleteAttribute("uv1"),!l.getAttribute("color")){const c=new Float32Array(l.getAttribute("position").count*3);c.fill(1),l.setAttribute("color",new Ae(c,3))}return l}),o=Ps(r,!1);if(r.forEach(h=>h.dispose()),e.forEach(h=>h.dispose()),!o)throw new Error(`Could not combine creature geometry: ${n}`);const a=new te(o,t);return a.name=n,a.castShadow=s,a.receiveShadow=!0,i.add(a),a}function ho(i,t=!1){const e=new ne({color:i,roughness:1,metalness:0,vertexColors:!0});return e.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vFurPoint;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFurPoint = position;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vFurPoint;`),n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      float fiber = sin(vFurPoint.x * ${t?"138.":"165."} + sin(vFurPoint.z * 57.) * 1.8) * sin(vFurPoint.y * 121. + vFurPoint.z * 89.);
      float fiberFootprint = max(fwidth(vFurPoint.x * 165.), max(fwidth(vFurPoint.y * 121.), fwidth(vFurPoint.z * 89.)));
      float resolvedFiber = 1. - smoothstep(.5, 2.5, fiberFootprint);
      diffuseColor.rgb *= 1. + fiber * resolvedFiber * ${t?".035":".018"};
    `)},e.customProgramCacheKey=()=>`fresh-organic-fiber-${t?"wool":"cat"}-1`,e}function Ru(i){let t=i>>>0;return()=>(t=Math.imul(t,1664525)+1013904223>>>0,t/4294967296)}function _1(i){const t=new ee;t.name="Ancient tree resting bench";const e=.8,n=-4.8,s=i.terrain.heightAt(e,n);t.position.set(e,s,n),i.scene.add(t);const r=[],o=[];for(let h=0;h<5;h++)r.push(ve(fn(2.85,.075,.127,.025),0,.68,-.285+h*.143));for(let h=0;h<3;h++)r.push(ve(fn(2.86,.125,.065,.028),0,.94+h*.17,-.36-h*.022,-.1));for(const h of[-1,1]){for(const l of[-1,1]){const c=h*1.1,u=l*.27,d=i.terrain.heightAt(e+c,n+u)-s-.025;o.push(ve(fn(.13,.7-d,.13,.026),c,d+(.7-d)/2,u))}o.push(ve(fn(.11,.72,.11,.025),h*1.22,.96,-.365,-.12)),o.push(ve(fn(.13,.105,.76,.025),h*1.1,.59,0)),o.push(Ve([new E(h*1.27,.85,.32),new E(h*1.28,.91,.05),new E(h*1.25,.96,-.3)],[.048,.05,.055],14,8)),o.push(ve(fn(.07,.22,.07,.02),h*1.26,.77,.23))}o.push(ve(fn(2.35,.12,.1,.02),0,.28,-.02)),Ee(t,i.materials.woodLight,r,"Rounded individual bench planks"),Ee(t,i.materials.wood,o,"Bench legs rails and carved arms");const a=[];for(const h of[-1,1])for(let l=0;l<3;l++)a.push(ve(new Ke(.015,.015,.014,8),h*1.22,.94+l*.17,-.32-l*.022,Math.PI/2));return Ee(t,i.materials.metal,a,"Bench joinery pins"),{root:t,seatY:s+.73,anchor:new E(e,s,n)}}function Xr(i,t=!1){const e=[],n=[],s=[];for(let h=0;h<=9;h++){const l=h/9,c=(t?.074:.102)*Math.pow(1-l,.82)+.002,u=t?.193:.235;for(let d=0;d<=12;d++){const f=d/12*Math.PI*2;e.push(-.045+Math.sin(f)*c*.42+(t?.018:0),.13+l*u,i*(.125+.046*l)+Math.cos(f)*c),n.push(1,1,1)}}for(let h=0;h<9;h++)for(let l=0;l<12;l++){const c=h*13+l,u=c+12+1;s.push(c,c+1,u,c+1,u+1,u)}const a=new qt;return a.setAttribute("position",new xt(e,3)),a.setAttribute("color",new xt(n,3)),a.setIndex(s),a.computeVertexNormals(),a}function v1(i,t){const e=new ee;e.name="Cream cat resting on the garden bench",e.position.set(.8,t,-4.76),i.scene.add(e);const n=ho("#eee7d5"),s=ho("#e4dcc7"),r=new ne({color:"#c99c91",roughness:.91,vertexColors:!0}),o=new ne({color:"#34433a",roughness:.51,vertexColors:!0}),a=new ne({color:"#c9c5b8",roughness:1,vertexColors:!0}),h=new ee;h.position.set(-.13,.255,0),e.add(h);const l=Ee(h,n,[Pe(.56,.23,.265,2,.026,40,26),ve(Pe(.26,.24,.225,.4,.018,30,22),.35,.014,.01),ve(Pe(.28,.235,.275,4.7,.016,30,22),-.31,-.008,-.005)],"Sculpted sleeping torso shoulder and haunch"),c=[];for(const M of[-1,1])c.push(Ve([new E(.26,.23,M*.145),new E(.4,.095,M*.15),new E(.66,.065,M*.16)],[.1,.075,.065],22,12)),c.push(ve(Pe(.135,.065,.09,0,.018,24,16),.66,.058,M*.16)),c.push(ve(Pe(.21,.12,.13,2,.02,24,16),-.48,.11,M*.19,0,M*.35));Ee(e,n,c,"Four tucked and extended paws");const u=[];for(const M of[-1,1])for(const S of[-.025,.025])u.push(Ve([new E(.715,.096,M*.16+S),new E(.758,.084,M*.16+S),new E(.785,.06,M*.16+S)],[.0028,.003,.0015],6,5));Ee(e,s,u,"Subtle paw toe folds",!1);const d=new ee;d.position.set(.47,.29,.015),e.add(d),Ee(d,n,[ve(Pe(.226,.196,.19,.8,.014,40,26),.045,0,0),ve(Pe(.116,.087,.113,2,.012,28,18),.19,-.077,0),ve(Pe(.075,.05,.073,1,.01,24,16),.209,-.12,0),Xr(-1),Xr(1)],"Cat skull cheeks muzzle chin and triangular ears"),Ee(d,r,[Xr(-1,!0),Xr(1,!0),ve(Pe(.02,.016,.026,0,0,16,10),.298,-.069,0)],"Ear folds and tiny rose nose");const f=[];for(const M of[-1,1]){const S=new te(Pe(.018,.025,.035,0,0,20,14),o);S.position.set(.192,.027,M*.132),S.rotation.y=M*-.24,S.name=M>0?"Near almond eye":"Far almond eye",d.add(S),f.push(S)}const g=[];for(const M of[-1,1])for(let S=0;S<3;S++)g.push(Ve([new E(.233,-.074-S*.013,M*.065),new E(.24-S*.018,-.065-S*.016,M*.16),new E(.2-S*.024,-.05-S*.021,M*.245)],[.0015,.0011,5e-4],8,4));Ee(d,a,g,"Fine individual whiskers",!1);const _=Ve([new E(-.57,.18,-.12),new E(-.8,.12,-.23),new E(-.97,.095,-.06),new E(-.86,.1,.23),new E(-.62,.12,.33),new E(-.38,.16,.29)],[.102,.091,.075,.061,.045,.014],42,10),m=new te(_,n);m.name="Curved resting tail with living tip",m.castShadow=!0,m.receiveShadow=!0,e.add(m);const p=_.getAttribute("position").array.slice(),x=new E(29,18,38),y=new E;l.onBeforeRender=(M,S,R)=>{R.isPerspectiveCamera&&R.getWorldPosition(x)};let v=0,A=-100;return i.registerInteraction(e,"cat",()=>{A=v,e.userData.reactions=Number(e.userData.reactions??0)+1}),i.addUpdate(M=>{v=M;const S=M-A,R=me.smoothstep(S,0,.45)*(1-me.smoothstep(S,2.8,4.4)),w=(M+4.2)%23,b=Math.sin(Math.PI*me.clamp((w-17)/4.5,0,1))**2*.27,P=Math.max(R,b);e.getWorldPosition(y);const k=x.x-y.x,B=x.z-y.z,q=me.clamp(-Math.atan2(B,k),-1.45,1.45),I=me.clamp(Math.atan2(x.y-y.y,Math.hypot(k,B)),-.08,.45);d.position.y=.29+P*.105,d.rotation.y=me.lerp(-.21+Math.sin(M*.13)*.018,q,R),d.rotation.z=-.09+P*.21+R*I*.35,h.scale.y=1+Math.sin(M*1.64)*.008,h.scale.z=1+Math.sin(M*1.64+.3)*.003;const U=(M+1.77)%5.93,O=U<.22?Math.max(.06,Math.abs(U-.11)/.11):1;f.forEach(Y=>{Y.scale.y=(.35+P*.65)*O});const F=_.getAttribute("position");for(let Y=0;Y<F.count;Y++){const J=Math.floor(Y/11)/42,D=me.smoothstep(J,.57,1),G=Math.sin(M*1.1+J*3.4)*(.007+R*.028)*D;F.setXYZ(Y,p[Y*3],p[Y*3+1]+G*.65,p[Y*3+2]+G)}F.needsUpdate=!0,_.computeVertexNormals(),e.userData.reacting=R>.01}),e.userData.interactionPoint=[.8+.48,t+.38,-4.76+.08],e.userData.coreQuality=!0,e}const jt=(i=0,t=0,e=0)=>new E(i,t,e);function x1(i,t){const s=[],r=[],o=[],a=(l,c)=>{const u=Math.sin(l),d=Math.cos(l),f=Math.cos(c),g=Math.sin(c),_=Math.exp(-(((d-.55)/.34)**2)),m=Math.exp(-(((d+.45)/.48)**2)),p=1+.045*_+.035*m,x=u*(.009*Math.sin(c*19+l*14+i)*Math.sin(l*21-c*3)+.004*Math.sin(c*31-l*28+i)),y=t&&g<0?-.28*Math.pow(Math.max(0,-g*u),.35):g*u*((t?.4:.475)*(g<0?.92:1)+x);return jt(f*u*((t?.59:.535)*p+x),y+d*(t?.008:.028),d*.86+u*.011*Math.sin(c*5+l*4+i))};for(let l=0;l<=36;l++)for(let c=0;c<=56;c++){const u=l/36*Math.PI,d=c/56*Math.PI*2,f=a(u,d);s.push(f.x,f.y,f.z);const g=.98+.018*Math.sin(d*19+u*14+i)*Math.sin(u*21-d*3);r.push(g,g,g)}for(let l=0;l<36;l++)for(let c=0;c<56;c++){const u=l*57+c,d=u+56+1;l>0&&o.push(u,d,u+1),l<35&&o.push(u+1,d,d+1)}const h=new qt;return h.setAttribute("position",new xt(s,3)),h.setAttribute("color",new xt(r,3)),h.setIndex(o),h.computeVertexNormals(),{geometry:h,point:a}}function la(i,t=!1){const e=t?[jt(i*.205,.104,.036),jt(i*.3,.093,.025),jt(i*.411,.043,.046)]:[jt(i*.155,.1,.037),jt(i*.27,.104,.018),jt(i*.385,.059,.026),jt(i*.445,.016,.065)];return Ve(e,t?[.026,.054,.003]:[.056,.088,.067,.003],20,12,t?.18:.4)}function M1(){const i=Pe(.033,.065,.101,0,.012,18,12),t=i.attributes.position;for(let e=0;e<t.count;e++){const n=t.getY(e),s=1-Math.max(0,n)*2;t.setXYZ(e,t.getX(e)*s,Math.max(-.051,n),t.getZ(e))}return i.computeVertexNormals(),i}function y1(i,t,e,n){const o=new Float32Array(1317),a=[];for(let w=0;w<22;w++)for(let b=0;b<18;b++){const P=w*19+b,k=P+18+1;a.push(P,P+1,k,P+1,k+1,k)}const h=437,l=h+1;for(let w=0;w<18;w++){a.push(h,w+1,w);const b=418+w;a.push(l,b,b+1)}const c=new qt;c.setAttribute("position",new Ae(o,3).setUsage(Td)),c.setAttribute("color",new xt(new Float32Array(o.length).fill(1),3)),c.setIndex(a);const u=new te(c,t);u.name="Continuous animated shoulder neck and throat",u.castShadow=u.receiveShadow=!0,u.frustumCulled=!1,i.add(u);const d=jt(0,e+.035,.49),f=jt(),g=jt(),_=jt(),m=jt(),p=jt(),x=jt(),y=jt(),v=jt(),A=jt(),M=jt(0,-.025,-.055),S=c.attributes.position;return{neck:u,update:w=>{d.y=e+.035+w*.18,_.copy(M).applyQuaternion(n.quaternion).add(n.position),m.set(0,0,1).applyQuaternion(n.quaternion),f.copy(d).lerp(_,.32),f.y+=.045,g.copy(_).addScaledVector(m,-.18);for(let b=0;b<=22;b++){const P=b/22,k=1-P;p.copy(d).multiplyScalar(k*k*k).addScaledVector(f,3*k*k*P).addScaledVector(g,3*k*P*P).addScaledVector(_,P*P*P),x.copy(f).sub(d).multiplyScalar(3*k*k).addScaledVector(A.copy(g).sub(f),6*k*P).addScaledVector(A.copy(_).sub(g),3*P*P).normalize(),y.set(x.z,0,-x.x),y.lengthSq()<1e-6&&y.set(1,0,0),y.normalize(),v.crossVectors(x,y).normalize();const B=.292*(1-P)+.151*P+Math.sin(P*Math.PI)*.022;for(let q=0;q<=18;q++){const I=q/18*Math.PI*2,U=1+.025*Math.sin(I*9+P*11)+.015*Math.sin(I*15-P*17);A.copy(p).addScaledVector(y,Math.cos(I)*B*.92*U).addScaledVector(v,Math.sin(I)*B*U),S.setXYZ(b*19+q,A.x,A.y,A.z)}}S.setXYZ(h,d.x,d.y,d.z),S.setXYZ(l,_.x,_.y,_.z),S.needsUpdate=!0,c.computeVertexNormals(),u.userData.socket=_.toArray(),u.userData.chest=d.toArray()},socket:M}}function S1(i){const t=new ee;t.name="Three pasture sheep",i.scene.add(t);const e=ho("#e8dfc6",!0),n=ho("#c8bfa9"),s=new ne({color:"#4c4a40",roughness:.95}),r=new ne({color:"#292e26",roughness:.54}),o=new ne({color:"#cfb7a5",roughness:1}),a=[{x:-13.9,z:-6.05,yaw:-.15,state:"grazing",scale:.97},{x:-14.9,z:-8,yaw:0,state:"watching",scale:1.01},{x:-13.4,z:-10.2,yaw:2.1,state:"resting",scale:.92}],h=[],l=i.scene.getObjectByName("Living terrain");l?.updateWorldMatrix(!0,!1);const c=new lr,u=jt(0,-1,0);return a.forEach((d,f)=>{let{x:g,z:_}=d;for(;i.terrain.islandValue(g,_)>.91;)g*=.985,_*=.985;const m=new ee;m.name=`Sheep ${f+1} ${d.state}`,m.position.set(g,i.terrain.heightAt(g,_),_),m.rotation.y=d.yaw,m.scale.setScalar(d.scale),t.add(m);const p=Math.cos(d.yaw),x=Math.sin(d.yaw),y=(N,$,pt=!1)=>{const dt=g+(N*p+$*x)*d.scale,Ft=_+(-N*x+$*p)*d.scale;let Bt=i.terrain.heightAt(dt,Ft);if(pt&&l){c.set(jt(dt,Bt+3,Ft),u);const z=c.intersectObject(l,!1)[0];z&&(Bt=z.point.y)}return(Bt-m.position.y)/d.scale},v=d.state==="resting",A=[[-.25,-.32],[.25,-.32],[-.25,.32],[.25,.32]].map(([N,$])=>y(N,$,!0)),M=v?A.reduce((N,$)=>N+$)/A.length+.2:.92,S=new ee;S.name="Breathing coherent fleece torso",S.position.y=M,m.add(S);const R=x1(f*1.7,v),w=[R.geometry],b=Ru(i.seed+f*723+51);if(v){const N=R.geometry.attributes.position;for(let $=0;$<N.count;$++)N.getY($)<-.12&&N.setY($,Math.max(N.getY($),y(N.getX($),N.getZ($),!0)-M-.014));N.needsUpdate=!0,R.geometry.computeVertexNormals()}for(let N=0;N<115;N++){const $=b()*Math.PI*2,pt=.22+b()*2.7;if(Math.sin($)<-.55)continue;const dt=R.point(pt,$),Ft=jt(dt.x/.535**2,dt.y/.475**2,dt.z/.86**2).normalize(),Bt=jt(0,1,0).cross(Ft);Bt.lengthSq()<.01&&Bt.set(1,0,0),Bt.normalize();const z=Ft.clone().cross(Bt).normalize(),lt=.026+b()*.018,rt=[-1,-.4,.4,1].map((ot,at)=>dt.clone().addScaledVector(Bt,ot*lt).addScaledVector(z,Math.sin(at*1.3)*lt*.55).addScaledVector(Ft,.004+Math.sin(at*Math.PI/3)*.008));w.push(Ve(rt,[.004,.009,.008,.003],7,5))}Ee(S,e,w,"Sculpted continuous fleece with fine irregular curls");const P=[],k=[],B=[],q=[];for(const N of[-1,1])for(const $ of[!1,!0]){const pt=N*.325,dt=$?.53:-.5,Ft=v?N*($?.365:.33):pt,Bt=v?$?.82:-.26:$?.58:-.56,z=y(Ft,Bt,!0);if(v){const lt=N*($?.41:.43),rt=$?.65:-.5,ot=y(lt,rt,!0)+.085;P.push(Ve([jt(pt*.85,M-.07,dt*.9),jt(lt,ot,rt),jt(Ft,z+.065,Bt)],[.11,.072,.052],22,12)),k.push(Ve([jt(pt*.85,M-.07,dt*.9),jt(lt,ot+.014,rt)],[.15,.073],14,14))}else{const lt=$?[jt(pt*.88,M-.18,dt),jt(pt,.43,.53),jt(Ft,z+.15,Bt-.02),jt(Ft,z+.07,Bt)]:[jt(pt*.88,M-.18,dt),jt(pt*1.02,.49,-.475),jt(pt,Math.max(z+.2,.24),-.575),jt(Ft,z+.075,Bt)];P.push(Ve(lt,[.126,.085,.057,.052],22,12)),k.push(Ve(lt.slice(0,2),[.175,.105],14,14))}for(const lt of[-1,1]){const rt=Ft+lt*.036,ot=y(rt,Bt,!0),at=M1(),St=(y(rt+.04,Bt,!0)-y(rt-.04,Bt,!0))/.08,ft=(y(rt,Bt+.06,!0)-y(rt,Bt-.06,!0))/.12,Mt=at.attributes.position;for(let Vt=0;Vt<Mt.count;Vt++)Mt.setY(Vt,Mt.getY(Vt)+Mt.getX(Vt)*St+Mt.getZ(Vt)*ft);at.computeVertexNormals(),B.push(ve(at,rt,ot+.048,Bt)),q.push({limb:`${$?"front":"rear"}-${N}`,toe:lt,local:[rt,ot,Bt],soleY:ot-.003})}}Ee(m,n,P,v?"Four folded limbs supported by the grass":"Four articulated individually grounded limbs"),Ee(m,e,k,"Shoulder and haunch fleece tapering into shins"),Ee(m,s,B,"Eight grounded toes with visible cloven clefts"),m.userData.hoofContacts=q;const I=new ee;I.name="Connected skull pivot",I.position.set(0,M+.31,.9),m.add(I);const U=Ee(I,n,[ve(Pe(.195,.245,.27,1,.023,36,24),0,.008,.13),ve(Pe(.145,.125,.198,3,.02,32,22),0,-.115,.347),la(-1),la(1)],"Continuous cheek muzzle and rooted drooping ears");Ee(I,e,[ve(Pe(.225,.151,.21,f+.8,.12,36,24),0,.171,.045)],"Soft forehead fleece overlapping the skull"),Ee(I,o,[-1,1].map(N=>la(N,!0)),"Inset warm ear folds");const O=Ee(I,s,[ve(Pe(.082,.039,.026,0,.01,24,16),0,-.113,.548),...[-1,1].map(N=>ve(Pe(.015,.01,.009,0,0,14,10),N*.037,-.104,.571)),Ve([jt(-.061,-.171,.502),jt(0,-.181,.523),jt(.061,-.171,.502)],[.004,.005,.004],12,5)],"Small divided nose nostrils and quiet mouth"),F=new ee;F.name="Subtle blinking eyes",I.add(F),Ee(F,r,[-1,1].map(N=>ve(Pe(.019,.025,.031,0,0,18,12),N*.183,.039,.232)),"Small natural lateral eyes");const Y=y1(m,e,M,I),J=[];for(const N of[U.geometry,O.geometry]){const $=N.attributes.position;for(let pt=0;pt<$.count;pt+=9)J.push(jt().fromBufferAttribute($,pt))}const D=new ee;D.name="Short attached fleece tail",D.position.set(0,M+.065,-.77),m.add(D),Ee(D,e,[Ve([jt(0,0,0),jt(0,-.09,-.12),jt(0,-.225,-.13)],[.115,.103,.025],22,12)],"Tapered hanging wool tail");const G=f*1.93+.4,it=jt(),W=jt(),Q=y(0,1.22,!0)-y(0,1.22),H=N=>{const $=Math.sin(N*1.42+G)*.0035;if(S.scale.y=1+$,d.state==="grazing"){I.rotation.set(1.015+Math.sin(N*.7+G)*.032+Math.sin(N*1.8)*.007,Math.sin(N*.23+G)*.055,Math.sin(N*.31)*.013),I.position.set(0,0,.955+Math.sin(N*.21)*.012),W.set(0,1/0,0);for(const dt of J)it.copy(dt).applyQuaternion(I.quaternion),it.y<W.y&&W.copy(it);I.position.y=y(W.x,I.position.z+W.z)+Q+.07-W.y}else if(d.state==="watching"){const dt=(N+2.1)%18,Ft=Math.sin(Math.PI*me.clamp((dt-8)/5,0,1))**2;I.rotation.set(.065-Ft*.15,Math.sin(N*.25+G)*.09+Ft*.15,Math.sin(N*.37)*.012),I.position.set(0,M+.31+Ft*.035,.9)}else I.rotation.set(.18+Math.sin(N*.34+G)*.018,-.1+Math.sin(N*.19)*.035,.018),I.position.set(0,M+.28,.82);Y.update($);const pt=(N+f*2.79)%(6.8+f*.91);F.scale.y=pt<.17?Math.max(.08,Math.abs(pt-.085)/.085):1,D.rotation.z=Math.sin(N*.72+G)*.03+Math.sin(N*.13+G)*.018};H(0),i.addUpdate(N=>H(N)),m.userData.neckAttachment={chest:[0,M+.035,.49],skullSocket:Y.socket.toArray(),endRadius:.151,rootRadius:.292},m.userData.pose=d.state,m.userData.bodyY=M,m.userData.support={renderedTerrain:!!l,bellyGroundRange:Math.max(...A)-Math.min(...A),restingLegsTucked:v},h.push({state:d.state,x:g,y:m.position.y,z:_,yaw:d.yaw,islandValue:i.terrain.islandValue(g,_),scale:d.scale,bodyY:M,support:m.userData.support,neck:m.userData.neckAttachment,hoofContacts:q})}),t.userData={count:3,coreQuality:!0,anchors:h,notes:"Continuous sculpted torso and animated neck; true skull sockets; terrain-grounded cloven hooves; folded resting limbs."},t}function uh(i){const t=new Je;i?(t.moveTo(.015,-.005),t.bezierCurveTo(.15,.035,.3,-.075,.285,-.18),t.bezierCurveTo(.27,-.27,.14,-.29,.065,-.18),t.bezierCurveTo(.025,-.13,.012,-.06,.015,-.005)):(t.moveTo(.012,.055),t.bezierCurveTo(.09,.24,.22,.35,.31,.3),t.bezierCurveTo(.4,.24,.4,.11,.31,.055),t.bezierCurveTo(.21,-.01,.08,-.06,.012,-.026));const e=new Gi(t,{depth:.0035,bevelEnabled:!0,bevelSegments:1,steps:1,bevelSize:.0015,bevelThickness:.001,curveSegments:16}),n=e.getAttribute("position");for(let s=0;s<n.count;s++){const r=n.getX(s),o=n.getY(s),a=-n.getZ(s)+Math.sin(r*7)*.027+o*o*.09;n.setXYZ(s,r,a,o)}return n.needsUpdate=!0,e.computeVertexNormals(),e}function w1(i){const t=new ne({color:i,roughness:.85,metalness:0,side:xe,transparent:!0,opacity:.94});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWing;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWing = position;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWing;`),e.fragmentShader=e.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      float a = atan(vWing.z, max(.003, abs(vWing.x)));
      float veinWave = sin(a * 13. + vWing.x * 8.);
      float aa = max(.04, fwidth(veinWave));
      float veins = 1. - smoothstep(.08, .08 + aa, abs(veinWave));
      float rootShade = 1. - smoothstep(.015, .20, abs(vWing.x));
      vec2 patchDelta = vec2((abs(vWing.x) - .235) / .055, (vWing.z - .19) / .065);
      float wingPatch = exp(-dot(patchDelta, patchDelta));
      diffuseColor.rgb *= 1. - veins * .13 - rootShade * .17 - wingPatch * .16;
    `)},t.customProgramCacheKey=()=>"fresh-real-wing-veins-2-finite",t}const Cu=[[-3,-.4,-5.5,-1.8],[14.2,17,-5.4,-.4],[-6.3,-1.4,3.2,7],[7.4,13,2.1,4.7],[-3.2,0,7.5,10.7],[3.2,8.4,10.3,12.7]],al=i=>i*i*i*(i*(i*6-15)+10),b1=(i,t)=>Math.atan2(Math.sin(i-t),Math.cos(i-t));function dh(i,t,e){if(t.x<e[0]||t.x>e[1]||t.z<e[2]||t.z>e[3]||i.terrain.islandValue(t.x,t.z)>.9)return!1;const n=i.terrain.anchors.cottage,s=t.x-n.x,r=t.z-n.z,o=Math.cos(.22),a=Math.sin(.22),h=o*s-a*r,l=a*s+o*r;if(Math.abs(h)<5&&l>-4.4&&l<6.65||Math.hypot(t.x+12,t.z+8)<2.9||t.x>-5.9&&t.x<1.9&&t.z>-1.1&&t.z<2||Math.hypot(t.x-1.2,t.z+4.7)<1.4||Math.hypot(t.x-1,t.z+8)<1.6||t.x>5.7&&t.x<11.5&&t.z>5.55&&t.z<9.95||Math.hypot(t.x-13.3,t.z-8.9)<2.25||[[15.2,-8.2],[15.7,3.3],[-17.1,-3.1],[-12.3,8.2],[-3.8,-11.7]].some(([u,d])=>Math.hypot(t.x-u,t.z-d)<1.4))return!1;const c=Math.max(i.terrain.heightAt(t.x,t.z),i.terrain.waterAt(t.x,t.z)??-1/0);return t.y>c+.55}function E1(i,t){const e=Ru(i.seed+8911+t*1777),n=Cu[t],s=[];for(let o=0;s.length<96&&o<2e3;o++){const a=me.lerp(n[0]+.18,n[1]-.18,e()),h=me.lerp(n[2]+.18,n[3]-.18,e()),l=i.terrain.waterAt(a,h),c=Math.max(i.terrain.heightAt(a,h),l??-1/0),u=l===null&&e()<.3?1.1+e()*1.3:0,d=new E(a,c+(u?.78+e()*.12:1+e()*.48),h);dh(i,d,n)&&s.push({point:d,hold:u})}const r=(o,a,h)=>{const l=new ct(a.x-o.x,a.z-o.z).normalize(),c=new ct(h.x-a.x,h.z-a.z).normalize();return l.dot(c)>-.62};for(let o=0;o<120&&!(s.length<12);o++){const a=[s[Math.floor(e()*s.length)]];for(let d=1;d<12;d++){for(let f=0;f<180;f++){const g=s[Math.floor(e()*s.length)],_=a[d-1].point,m=_.distanceTo(g.point);if(!(m<1.45||m>5.6||d>1&&!r(a[d-2].point,_,g.point))&&!(d===11&&(g.point.distanceTo(a[0].point)<1.45||!r(_,g.point,a[0].point)||!r(g.point,a[0].point,a[1].point)))){a.push(g);break}}if(a.length!==d+1)break}if(a.length<12)continue;const h=a.map((d,f)=>a[(f+1)%12].point.clone().sub(a[(f+11)%12].point).normalize()),l=[];let c=0,u=!0;for(let d=0;d<12&&u;d++){const f=a[d],g=a[(d+1)%12],_=f.point.distanceTo(g.point);let m;for(let M=0;M<5;M++){const S=Math.min(_*.24,.75)*Math.pow(.72,M),R=new Kh(f.point,f.point.clone().addScaledVector(h[d],S),g.point.clone().addScaledVector(h[(d+1)%12],-S),g.point);if(R.getPoints(48).every(w=>dh(i,w,n))){m=R;break}}if(!m){u=!1;break}let p=0,x=0;const y=Array.from({length:97},(M,S)=>m.getPoint(al(S/96)));let v=Math.atan2(h[d].x,h[d].z);for(let M=1;M<=96;M++){p=Math.max(p,y[M].distanceTo(y[M-1])*96);const S=m.getTangent(al(M/96)),R=Math.atan2(S.x,S.z);x=Math.max(x,Math.abs(b1(R,v))*96),v=R}const A=Math.max(4.5,p/.76,x/.9);if(A>25){u=!1;break}l.push({curve:m,start:c,duration:A,hold:g.hold,length:m.getLength()}),c+=A+g.hold}if(u&&l.length===12)return{legs:l,duration:c,waypoints:a.map(d=>d.point),zone:n}}throw new Error(`Could not make a safe butterfly route in garden ${t+1}`)}function T1(i){const t=new ee;t.name="Six flower garden butterflies",i.scene.add(t);const n=["#eadc9d","#ead0d1","#b7d8e5"].map(w1),s=new ne({color:"#797e53",roughness:.9}),r=uh(!1),o=uh(!0),a=[];return Cu.forEach((h,l)=>{const c=new ee;c.name=`Butterfly ${l+1}`,c.scale.setScalar(.72+l%3*.1),t.add(c);const u=[];for(const m of[-1,1]){const p=new ee;p.scale.x=m,c.add(p),u.push(p),Ee(p,n[l%n.length],[r.clone(),o.clone()],"Curved forewing and scalloped hindwing",!1)}Ee(c,s,[Pe(.024,.023,.12,l,.018,18,12),ve(Pe(.034,.03,.039,0,.01,16,10),0,.005,.1),...[-1,1].map(m=>Ve([new E(m*.015,.015,.12),new E(m*.03,.055,.16),new E(m*.045,.052,.19)],[.0025,.002,.0035],10,4))],"Butterfly abdomen head and antennae",!1);const d=E1(i,l),f=l*1.71,g=new E;a.push(d);const _=(m,p)=>{const x=((m+l*13.37)%d.duration+d.duration)%d.duration,y=d.legs.findIndex(b=>x<b.start+b.duration+b.hold),v=d.legs[y<0?d.legs.length-1:y],A=me.clamp((x-v.start)/v.duration,0,1),M=al(A);v.curve.getPoint(M,c.position),v.curve.getTangent(M,g),c.position.y+=Math.sin(m*1.6+f)*.018*p;const S=Math.sin(A*Math.PI),R=x>=v.start+v.duration;c.rotation.set(-Math.atan2(g.y,Math.hypot(g.x,g.z))*.45,Math.atan2(g.x,g.z),Math.sin(m*.82+f)*.11*S);const w=.24+Math.sin(m*(13.4+l*.37)+f)*(.3+S*.43);u[0].rotation.z=-w,u[1].rotation.z=w,c.userData.flight={leg:y,holding:R,progress:M,routeDuration:d.duration}};_(0,i.windUniform.value),i.addUpdate((m,p,x)=>_(m,x))}),r.dispose(),o.dispose(),t.userData={count:6,coreQuality:!0,wingGeometry:"Extruded curved forewings and hindwings with analytic vein shading",phaseSeparated:!0,motion:"Seeded garden waypoints, continuous cubic flight, gentle arrival and occasional flower hover; elapsed-time deterministic",routes:a.map(h=>({zone:h.zone,seconds:h.duration,distance:h.legs.reduce((l,c)=>l+c.length,0),waypoints:h.waypoints.map(l=>l.toArray()),holds:h.legs.filter(l=>l.hold>0).length}))},t}function fh(i){const t=[],e=[];for(let o=0;o<=14;o++){const a=o/14,h=(.14*Math.sin(Math.PI*(.12+a*.79))+.015)*(1-a*.65);for(let l=0;l<=10;l++){const c=l/10*Math.PI*2;t.push(i*(.055+a*.56),Math.sin(a*Math.PI)*.055+Math.sin(c)*(.018*(1-a)+.003),-.03-a*a*.14+Math.cos(c)*h)}}for(let o=0;o<14;o++)for(let a=0;a<10;a++){const h=o*11+a,l=h+10+1;i>0?e.push(h,l,h+1,h+1,l,l+1):e.push(h,h+1,l,h+1,l+1,l)}const r=new qt;return r.setAttribute("position",new xt(t,3)),r.setIndex(e),r.computeVertexNormals(),r}function A1(i){const t=new ee;t.name="Three distant swallows",i.scene.add(t);const e=new ne({color:"#657b7b",roughness:.96,side:xe}),n=new ne({color:"#d3ddcf",roughness:1});for(let s=0;s<3;s++){const r=new ee;r.name=`Distant bird ${s+1}`,t.add(r),Ee(r,e,[Pe(.07,.07,.19,s,.015,20,14),ve(Pe(.075,.065,.08,1,.015,18,12),0,.025,.16),Ve([new E(0,.02,.19),new E(0,.015,.26),new E(0,.015,.3)],[.031,.015,.001],8,7),...[-1,1].map(l=>Ve([new E(0,0,-.14),new E(l*.07,-.01,-.26),new E(l*.1,-.005,-.34)],[.044,.024,.002],12,7))],"Streamlined bird body beak and forked tail",!1),Ee(r,n,[ve(Pe(.062,.045,.13,0,0,18,12),0,-.036,.026)],"Pale swallow breast",!1);const o=new te(fh(-1),e),a=new te(fh(1),e);o.name="Swept left wing",a.name="Swept right wing",r.add(o,a);const h=s*.24;i.addUpdate(l=>{const c=l*.026+s*.5;r.position.set(Math.cos(c+h)*(33+s*1.8)-8,12.5+s*1.4+Math.sin(c*2+s)*1.1,Math.sin(c+h)*26-29),r.rotation.y=-(c+h),r.rotation.z=-.09+Math.sin(c*1.7)*.04;const u=Math.max(0,Math.sin(l*.34+s*1.7))**3,d=.1+Math.sin(l*5.9+s*.8)*.28*u;o.rotation.z=-d,a.rotation.z=d})}return t.userData={count:3,coreQuality:!0,notes:"Distant restrained three-dimensional swallow silhouettes, alternating glide and mild flap."},t}function R1(i){const t=_1(i),e=v1(i,t.seatY),n=S1(i),s=T1(i),r=A1(i);return{bench:t.root,cat:e,sheep:n,butterflies:s,birds:r}}const ln=new URLSearchParams(location.search),Pu=Number(ln.get("seed")??7341),ph=document.querySelector("#error"),Du=[];function yo(i){const t=String(i);Du.push(t),ph.hidden=!1,ph.textContent=t,console.error(i)}addEventListener("error",i=>yo(i.error??i.message));addEventListener("unhandledrejection",i=>yo(i.reason));const dr=document.querySelector("#world");dr.tabIndex=0;const ye=new W_({canvas:dr,antialias:!0,alpha:!1,powerPreference:"high-performance"});ye.setPixelRatio(Math.min(devicePixelRatio,1.35));ye.setSize(innerWidth,innerHeight);ye.shadowMap.enabled=!0;ye.shadowMap.type=xh;ye.toneMapping=dl;ye.toneMappingExposure=1;ye.outputColorSpace=nn;ye.info.autoReset=!1;ye.debug.onShaderError=(i,t,e,n)=>yo("Shader: "+i.getProgramInfoLog(t)+`
`+i.getShaderInfoLog(e)+`
`+i.getShaderInfoLog(n));const He=new Xh;He.background=new Pt("#d1eaf0");He.fog=new Sl("#d1eaf0",85,220);const jn=new Sv(dr),fr=jn.camera;He.add(new ep("#e1f2ff","#d1d6c7",1.15));const Nn=new sp("#fff5e5",2.75);Nn.position.set(-24,40,18);Nn.castShadow=!0;Nn.shadow.mapSize.set(2048,2048);Object.assign(Nn.shadow.camera,{left:-29,right:29,top:29,bottom:-29,near:1,far:110});Nn.shadow.normalBias=.025;Nn.shadow.bias=-12e-5;Nn.shadow.radius=2.5;He.add(Nn);He.add(Nn.target);const Lu=new il(ye),Iu=new Q_,C1=Lu.fromScene(Iu,.04);He.environment=C1.texture;He.environmentIntensity=.16;Iu.dispose();Lu.dispose();const Uu=Ov(),Nu=[],Js=new Tv(dr,fr,He),En={scene:He,seed:Pu,terrain:Ui,materials:Uu,addUpdate:i=>Nu.push(i),registerInteraction:Js.register,quality:"standard",qualityObjects:[],windUniform:{value:.5},timeUniform:{value:0}},P1=new ne({vertexColors:!0,roughness:1}),D1=he(yv(),P1,He);D1.name="Living terrain";const L1=Lv(),I1=he(Mu(),L1,He);I1.name="Continuous layered rock mass";const U1=Pv(He,Uu);Dv(En);Iv(En);const si=o1(En),N1=g1(En),Fu=R1(En),Ts=Zv(En),Ol=Fv(En),uo=new bv,Ou=new mn(innerWidth,innerHeight,{type:Pn});Ou.samples=4;const Jn=new Z_(ye,Ou),F1=new K_(He,fr);Jn.addPass(F1);const zl=Ev();Jn.addPass(zl);const Bl=new ws(new ct(innerWidth,innerHeight),.115,.35,1.18);Jn.addPass(Bl);Jn.addPass(new $_);let kl=ln.get("post")==="0";function zu(){jn.resize(),ye.setSize(innerWidth,innerHeight),Jn.setPixelRatio(ye.getPixelRatio()),Jn.setSize(innerWidth,innerHeight),zl.uniforms.uTexel.value.set(1/(innerWidth*ye.getPixelRatio()),1/(innerHeight*ye.getPixelRatio()))}const So=new wv(ye,Nn,En,i=>{Ol.setQuality(i);for(const t of[Jn.renderTarget1,Jn.renderTarget2]){const e=i==="performance"?0:4;t.samples!==e&&(t.samples=e,t.dispose())}Bl.enabled=i!=="performance"},zu),mh=ln.get("quality");So.set(["high","standard","performance"].includes(mh)?mh:"standard");const O1=Rv(jn,uo,So);jn.setView(ln.get("view")??"overview",!0);ln.get("ui")==="0"&&document.querySelector("#ui").classList.add("hidden");ln.get("debug")==="finite"&&(zl.uniforms.uDiagnostic.value=!0,Bl.enabled=!1);ln.get("debug")==="water-normal"&&Ts.debug(1);ln.get("debug")==="fresnel"&&Ts.debug(2);ln.get("debug")==="depth"&&Ts.debug(3);ln.get("debug")==="normals"&&(He.overrideMaterial=new $f);ln.get("debug")==="no-cloud"&&(Ol.cloud.visible=!1);let ri=0,ll=ln.has("t")?Number(ln.get("t")):null,cl=performance.now(),Oi=[],Ni=[],qr=0,gh=0;const to=[],Mn=ye.getContext(),Gs=Mn.getExtension("EXT_disjoint_timer_query_webgl2"),Ai=[];let Bu=0;function ca(i){if(!i.length)return null;const t=i.slice().sort((e,n)=>e-n);return t[Math.floor(t.length*.5)]}function _h(i,t){if(!i.length)return null;const e=i.slice().sort((n,s)=>n-s);return e[Math.min(e.length-1,Math.floor(e.length*t))]}const wo=document.createElement("pre");wo.id="diagnostics";wo.hidden=!0;document.body.append(wo);function ku(){return{version:"1.1.1",stage:"release-review",seed:Pu,time:ri,quality:So.value,viewport:[innerWidth,innerHeight],dpr:ye.getPixelRatio(),calls:ye.info.render.calls,triangles:ye.info.render.triangles,geometries:ye.info.memory.geometries,textures:ye.info.memory.textures,frameMedianMs:ca(Oi),frameP95Ms:_h(Oi,.95),cpuRenderMedianMs:ca(to),gpuMedianMs:ca(Ni),gpuP95Ms:_h(Ni,.95),gpuSamples:Ni.length,gpuDisjoint:Bu,frameSamples:Oi.length,interactions:Js.counts,lastInteraction:Js.last,animation:{doorOpen:si.cottage.door.userData.open,doorAngle:si.cottage.door.rotation.y,windmillBoost:si.windmill.root.userData.boost,rotorAngle:si.windmill.rotor.rotation.z,boatReaction:si.lakeside.boat.userData.reaction,boatPosition:si.lakeside.boat.position.toArray(),boatRotation:si.lakeside.boat.rotation.toArray(),cat:Fu.cat.userData,audioEnabled:uo.enabled,audio:uo.state},targets:Js.projectTargets(),camera:{position:fr.position.toArray(),target:jn.controls.target.toArray(),touring:jn.touring,auto:jn.auto},water:Ts.group.userData.waterStats,pathStones:U1,errors:Du,post:!kl}}function Vu(){requestAnimationFrame(Vu);const i=performance.now(),t=i-cl;cl=i;const e=Math.min(t/1e3,.05);if(document.hidden)return;ri=ll??ri+e;const n=.46+Math.sin(ri*.19)*.14+Math.sin(ri*.43+.8)*.07;En.timeUniform.value=ri,En.windUniform.value=n;for(const o of Nu)o(ri,ll===null?e:0,n);jn.update(e),uo.update(ri,n),O1(),ye.info.reset();let s=null;Gs&&Ai.length<4&&qr%3===0&&(s=Mn.createQuery(),s&&Mn.beginQuery(Gs.TIME_ELAPSED_EXT,s));const r=performance.now();if(kl?ye.render(He,fr):Jn.render(e),to.push(performance.now()-r),s&&(Mn.endQuery(Gs.TIME_ELAPSED_EXT),Ai.push(s)),Gs&&Ai.length)if(Mn.getParameter(Gs.GPU_DISJOINT_EXT))Bu++,Ai.splice(0).forEach(o=>Mn.deleteQuery(o)),Ni=[];else for(;Ai.length&&Mn.getQueryParameter(Ai[0],Mn.QUERY_RESULT_AVAILABLE);){const o=Ai.shift();Ni.push(Mn.getQueryParameter(o,Mn.QUERY_RESULT)/1e6),Mn.deleteQuery(o)}qr>20&&t<500&&Oi.push(t),Oi.length>240&&Oi.shift(),Ni.length>160&&Ni.shift(),to.length>240&&to.shift(),i-gh>700&&(gh=i,wo.textContent=JSON.stringify(ku())),qr++,qr===3&&(document.querySelector("#loading").classList.add("ready"),document.body.dataset.ready="true")}addEventListener("resize",zu);document.addEventListener("visibilitychange",()=>{cl=performance.now(),Oi=[]});dr.addEventListener("webglcontextlost",i=>{i.preventDefault(),yo("Graphics paused. Please reload the page to restore the scene.")});Object.assign(window,{__FRESH__:{scene:He,renderer:ye,camera:fr,ctx:En,architecture:si,nature:N1,creatures:Fu,water:Ts,atmosphere:Ol,bookmarks:vi,stats:ku,view:i=>jn.setView(i,!0),freeze:i=>{ll=i},setQuality:i=>So.set(i),setPost:i=>{kl=!i},setWaterDebug:i=>Ts.debug(i),interaction:Js}});Vu();
