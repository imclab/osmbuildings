(function(g){function D(l,r){var v=l[0]-r[0],d=l[1]-r[1];return v*v+d*d}function Ea(l){for(var r=0,v=0,d=0,f=l.length-3;d<f;d+=2){r+=l[d];v+=l[d+1]}l=(l.length-2)*2;return[r/l<<0,v/l<<0]}function Fa(l){var r=l.length/2,v=new Ga(r),d=0,f=r-1,h,m,s,w,E=[],M=[],H=[];for(v[d]=v[f]=1;f;){m=0;for(h=d+1;h<f;h++){s=l[h*2];var N=l[h*2+1],$=l[d*2],P=l[d*2+1],Q=l[f*2],I=l[f*2+1],z=Q-$,J=I-P,K=void 0;if(z!==0||J!==0){K=((s-$)*z+(N-P)*J)/(z*z+J*J);if(K>1){$=Q;P=I}else if(K>0){$+=z*K;P+=J*K}}z=s-$;J=N-P;s=z*z+
J*J;if(s>m){w=h;m=s}}if(m>7){v[w]=1;E.push(d);M.push(w);E.push(w);M.push(f)}d=E.pop();f=M.pop()}for(h=0;h<r;h++)v[h]&&H.push(l[h*2],l[h*2+1]);return H}var Ha=Ha||Array,Ga=Ga||Array,Ka=Math.exp,La=Math.log,Ma=Math.tan,Na=Math.atan,wa=Math.min,Oa=Math.max,xa=g.document,R=function(){function l(d,f,h){if(h<0)h+=1;if(h>1)h-=1;if(h<1/6)return d+(f-d)*6*h;if(h<0.5)return f;if(h<2/3)return d+(f-d)*(2/3-h)*6;return d}function r(d,f,h,m){this.r=d;this.g=f;this.b=h;this.a=arguments.length<4?1:m}var v=r.prototype;
v.toString=function(){return"rgba("+[this.r<<0,this.g<<0,this.b<<0,this.a.toFixed(2)].join(",")+")"};v.adjustLightness=function(d){var f=R.toHSLA(this);f.l*=d;f.l=Math.min(1,Math.max(0,f.l));var h,m;if(f.s===0)d=h=m=f.l;else{m=f.l<0.5?f.l*(1+f.s):f.l+f.s-f.l*f.s;var s=2*f.l-m;d=l(s,m,f.h+1/3);h=l(s,m,f.h);m=l(s,m,f.h-1/3)}return new R(d*255<<0,h*255<<0,m*255<<0,f.a)};v.adjustAlpha=function(d){return new R(this.r,this.g,this.b,this.a*d)};r.parse=function(d){d+="";if(~d.indexOf("#")){d=d.match(/^#?(\w{2})(\w{2})(\w{2})(\w{2})?$/);
return new R(parseInt(d[1],16),parseInt(d[2],16),parseInt(d[3],16),d[4]?parseInt(d[4],16)/255:1)}if(d=d.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))return new R(parseInt(d[1],10),parseInt(d[2],10),parseInt(d[3],10),d[4]?parseFloat(d[5],10):1)};r.toHSLA=function(d){var f=d.r/255,h=d.g/255,m=d.b/255,s=Math.max(f,h,m),w=Math.min(f,h,m),E,M=(s+w)/2,H;if(s===w)E=w=0;else{H=s-w;w=M>0.5?H/(2-s-w):H/(s+w);switch(s){case f:E=(h-m)/H+(h<m?6:0);break;case h:E=(m-f)/H+2;break;case m:E=(f-h)/H+4;break}E/=
6}return{h:E,s:w,l:M,a:d.a}};return r}(),fa=Math.PI,Ia=fa/2,Pa=fa/4,Qa=180/fa,Ra=256,ya=14,ga=400,qa=ga-50,ha="latitude",ia="longitude",X=0,Y=1,S=2,aa=3,ra=4,ja=5,Z=6;g.OSMBuildings=function(l){function r(a,e){var b={};a/=ka;e/=ka;b[ha]=e<=0?90:e>=1?-90:Qa*(2*Na(Ka(fa*(1-2*e)))-Ia);b[ia]=(a===1?1:(a%1+1)%1)*360-180;return b}function v(a,e){return a.replace(/\{ *([\w_]+) *\}/g,function(b,c){return e[c]})}function d(a,e){var b=new XMLHttpRequest;b.onreadystatechange=function(){if(b.readyState===4)!b.status||
b.status<200||b.status>299||b.responseText&&e(JSON.parse(b.responseText))};b.open("GET",a);b.send(null);return b}function f(){if(!(!za||O<ya)){var a=r(K-z,da-J),e=r(K+Q+z,da+I+J);sa&&sa.abort();sa=d(v(za,{w:a[ia],n:a[ha],e:e[ia],s:e[ha],z:O}),h)}}function h(a){var e,b,c,j=[],i,k=i=0;la=ya;M(O);sa=null;if(!(!a||a.meta.z!==O)){c=a.meta;b=a.data;if(A&&u&&A.z===c.z){i=A.x-c.x;k=A.y-c.y;a=0;for(e=u.length;a<e;a++)j[a]=u[a][S][0]+i+","+(u[a][S][1]+k)}A=c;u=[];a=0;for(e=b.length;a<e;a++){c=[];if(!(b[a][Y]>
qa)){i=Fa(b[a][S]);if(!(i.length<8)){c[S]=i;c[ra]=Ea(i);c[X]=wa(b[a][X],qa);c[Y]=b[a][Y];i=c[S][0]+","+c[S][1];c[ja]=!(j&&~j.indexOf(i));c[aa]=[];c[Z]=[];u.push(c)}}}H()}}function m(a,e){var b=[],c,j,i,k,o,n,p,F,x,G=Aa-O;c=0;for(j=a.length;c<j;c++){o=a[c];F=o[Y]>>G;if(!(F>qa)){n=o[S];x=new Ha(n.length);i=0;for(k=n.length-1;i<k;i+=2){p=n[i+1];var T=wa(1,Oa(0,0.5-La(Ma(Pa+Ia*n[i]/180))/fa/2));p={x:(p/360+0.5)*ka<<0,y:T*ka<<0};x[i]=p.x;x[i+1]=p.y}x=Fa(x);if(!(x.length<8)){k=[];k[S]=x;k[ra]=Ea(x);k[X]=
wa(o[X]>>G,qa);k[Y]=F;k[ja]=e;k[aa]=o[aa];k[Z]=[];for(i=0;i<3;i++)if(k[aa][i])k[Z][i]=k[aa][i].adjustAlpha(U)+"";b.push(k)}}}return b}function s(a,e){if(typeof a==="object")E(a,!e);else{var b=xa.documentElement,c=xa.createElement("script");g.jsonpCallback=function(j){delete g.jsonpCallback;b.removeChild(c);E(j,!e)};b.insertBefore(c,b.lastChild).src=a.replace(/\{callback\}/,"jsonpCallback")}}function w(a,e,b){if(b===undefined)b=[];var c,j,i,k=a[0]?a:a.features,o,n,p,F,x,G=e?1:0,T=e?0:1;if(k){c=0;for(a=
k.length;c<a;c++)w(k[c],e,b);return b}if(a.type==="Feature"){o=a.geometry;c=a.properties}if(o.type==="Polygon")n=[o.coordinates];if(o.type==="MultiPolygon")n=o.coordinates;if(n){e=c.height;if(c.color||c.wallColor)F=R.parse(c.color||c.wallColor);if(c.roofColor)x=R.parse(c.roofColor);c=0;for(a=n.length;c<a;c++){k=n[c][0];p=[];j=o=0;for(i=k.length;j<i;j++){p.push(k[j][G],k[j][T]);o+=e||k[j][2]||0}if(o){j=[];i=S;var t=void 0,q=void 0,B=void 0,V=void 0,ma=0,W=void 0,Ja=void 0;W=0;for(Ja=p.length-3;W<Ja;W+=
2){t=p[W];q=p[W+1];B=p[W+2];V=p[W+3];ma+=t*V-B*q}if((ma/2>0?"CW":"CCW")==="CW")p=p;else{t=[];for(q=p.length-2;q>=0;q-=2)t.push(p[q],p[q+1]);p=t}j[i]=p;j[X]=o/k.length<<0;j[aa]=[F||null,F?F.adjustLightness(0.8):null,x?x:F?F.adjustLightness(1.2):ca];b.push(j)}}}return b}function E(a,e){if(a){na=w(a,e);la=0;M(O);A={n:90,w:-180,s:-90,e:180,x:0,y:0,z:O};u=m(na,true);H()}else{na=null;N()}}function M(a){var e,b,c;O=a;ka=Ra<<O;U=1-(O-la)*0.3/(Aa-la);Ba=ba.adjustAlpha(U)+"";ta=ua.adjustAlpha(U)+"";va=ca.adjustAlpha(U)+
"";if(u){a=0;for(e=u.length;a<e;a++){c=u[a];c[Z]=[];for(b=0;b<3;b++)if(c[aa][b])c[Z][b]=c[aa][b].adjustAlpha(U)+""}}}function H(){ea=0;clearInterval(Ca);Ca=setInterval(function(){ea+=0.1;if(ea>1){clearInterval(Ca);ea=1;for(var a=0,e=u.length;a<e;a++)u[a][ja]=0}N()},33)}function N(){y.clearRect(0,0,Q,I);if(A&&u)if(!(O<la||Da)){var a,e,b,c,j,i,k,o,n,p=K-A.x,F=da-A.y,x=[oa+p,pa+F],G,T,t,q,B,V;u.sort(function(ma,W){return D(W[ra],x)/W[X]-D(ma[ra],x)/ma[X]});a=0;for(e=u.length;a<e;a++){j=u[a];t=false;
i=j[S];G=[];b=0;for(c=i.length-1;b<c;b+=2){G[b]=o=i[b]-p;G[b+1]=n=i[b+1]-F;t||(t=o>0&&o<Q&&n>0&&n<I)}if(t){b=j[ja]?j[X]*ea:j[X];i=ga/(ga-b);if(j[Y]){b=j[ja]?j[Y]*ea:j[Y];k=ga/(ga-b)}o=[];T=[];b=0;for(c=G.length-3;b<c;b+=2){n=G[b];q=G[b+1];t=G[b+2];B=G[b+3];V=P(n,q,i);T=P(t,B,i);if(j[Y]){q=P(n,q,k);B=P(t,B,k);n=q.x;q=q.y;t=B.x;B=B.y}if((t-n)*(V.y-q)>(V.x-n)*(B-q)){T=[t+0.5,B+0.5,n+0.5,q+0.5,V.x,V.y,T.x,T.y];y.fillStyle=n<t&&q<B||n>t&&q>B?j[Z][1]||ta:j[Z][0]||Ba;$(T)}o[b]=V.x;o[b+1]=V.y}y.fillStyle=
j[Z][2]||va;y.strokeStyle=j[Z][1]||ta;$(o,true)}}}}function $(a,e){if(a.length){y.beginPath();y.moveTo(a[0],a[1]);for(var b=2,c=a.length;b<c;b+=2)y.lineTo(a[b],a[b+1]);y.closePath();e&&y.stroke();y.fill()}}function P(a,e,b){return{x:((a-oa)*b+oa<<0)+0.5,y:((e-pa)*b+pa<<0)+0.5}}var Q=0,I=0,z=0,J=0,K=0,da=0,O,ka,sa,C,y,za,ba=new R(200,190,180),ua=ba.adjustLightness(0.8),ca=ba.adjustLightness(1.2),Ba=ba+"",ta=ua+"",va=ca+"",na,A,u,ea=1,Ca,U=1,la=ya,Aa=20,oa,pa,Da;this.setStyle=function(a){a=(a=a)||{};
if(a.color||a.wallColor){ba=R.parse(a.color||a.wallColor);Ba=ba.adjustAlpha(U)+"";ua=ba.adjustLightness(0.8);ta=ua.adjustAlpha(U)+"";ca=ba.adjustLightness(1.2);va=ca.adjustAlpha(U)+""}if(a.roofColor){ca=R.parse(a.roofColor);va=ca.adjustAlpha(U)+""}N();return this};this.geoJSON=function(a,e){s(a,e);return this};this.setCamOffset=function(a,e){oa=z+a;pa=I+e};this.setMaxZoom=function(a){Aa=a};this.createCanvas=function(a){C=xa.createElement("canvas");C.style.webkitTransform="translate3d(0,0,0)";C.style.imageRendering=
"optimizeSpeed";C.style.position="absolute";C.style.pointerEvents="none";C.style.left=0;C.style.top=0;a.appendChild(C);y=C.getContext("2d");y.lineCap="round";y.lineJoin="round";y.lineWidth=1;try{y.mozImageSmoothingEnabled=false}catch(e){}return C};this.destroyCanvas=function(){C.parentNode.removeChild(C)};this.loadData=f;this.onMoveEnd=function(){var a=r(K,da),e=r(K+Q,da+I);N();if(A&&(a[ha]>A.n||a[ia]<A.w||e[ha]<A.s||e[ia]>A.e))f()};this.onZoomEnd=function(a){Da=false;M(a.zoom);if(na){u=m(na);N()}else{N();
f()}};this.onZoomStart=function(){Da=true;N()};this.render=N;this.setOrigin=function(a,e){K=a;da=e};this.setSize=function(a,e){Q=a;I=e;z=Q/2<<0;J=I/2<<0;oa=z;pa=I;C.width=Q;C.height=I};this.setZoom=M;za=l};g.OSMBuildings.VERSION="0.1.7a";g.OSMBuildings.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>'})(this);
L.BuildingsLayer=L.Class.extend({map:null,osmb:null,canvas:null,blockMoveEvent:null,lastX:0,lastY:0,initialize:function(g){L.Util.setOptions(this,g)},onMove:function(){var g=L.DomUtil.getPosition(this.map._mapPane);this.osmb.setCamOffset(this.lastX-g.x,this.lastY-g.y);this.osmb.render()},onMoveEnd:function(){if(this.blockMoveEvent)this.blockMoveEvent=false;else{var g=L.DomUtil.getPosition(this.map._mapPane),D=this.map.getPixelOrigin();this.lastX=g.x;this.lastY=g.y;this.canvas.style.left=-g.x+"px";
this.canvas.style.top=-g.y+"px";this.osmb.setCamOffset(0,0);this.osmb.setSize(this.map._size.x,this.map._size.y);this.osmb.setOrigin(D.x-g.x,D.y-g.y);this.osmb.onMoveEnd()}},onZoomStart:function(){this.osmb.onZoomStart()},onZoomEnd:function(){var g=L.DomUtil.getPosition(this.map._mapPane),D=this.map.getPixelOrigin();this.osmb.setOrigin(D.x-g.x,D.y-g.y);this.osmb.onZoomEnd({zoom:this.map._zoom});this.blockMoveEvent=true},addTo:function(g){g.addLayer(this);return this},onAdd:function(g){this.map=g;
this.osmb=new OSMBuildings(this.options.url);this.canvas=this.osmb.createCanvas(this.map._panes.overlayPane);this.osmb.maxZoom=this.map._layersMaxZoom;g=L.DomUtil.getPosition(this.map._mapPane);var D=this.map.getPixelOrigin();this.osmb.setSize(this.map._size.x,this.map._size.y);this.osmb.setOrigin(D.x-g.x,D.y-g.y);this.osmb.setZoom(this.map._zoom);this.canvas.style.left=-g.x+"px";this.canvas.style.top=-g.y+"px";this.map.on({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd},
this);if(this.map.options.zoomAnimation)this.canvas.className="leaflet-zoom-animated";this.map.attributionControl.addAttribution(OSMBuildings.ATTRIBUTION);this.osmb.loadData();this.osmb.render()},onRemove:function(g){g.attributionControl.removeAttribution(OSMBuildings.ATTRIBUTION);g.off({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd},this);this.canvas=this.osmb.destroyCanvas();this.osmb=this.map=null},geoJSON:function(g,D){return this.osmb.geoJSON(g,D)},
setStyle:function(g){return this.osmb.setStyle(g)}});
