!function(t){function e(r){if(i[r])return i[r].exports;var o=i[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=7)}([function(t,e,i){"use strict";function r(t){if(t&&t.nodeType)return 1===t.nodeType}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();e.default=r},function(t,e,i){"use strict";function r(t,e){return Object(o.default)(t)?window.getComputedStyle(t,null).getPropertyValue(e):"string"==typeof t&&document.querySelector(t)?window.getComputedStyle(document.querySelector(t),null).getPropertyValue(e):void 0}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var o=i(0)},,,function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){return window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.clearTimeout}();e.default=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this.events={}}return t.prototype.on=function(t,e){this.events[t]?this.events[t].push(e):this.events[t]=[e]},t.prototype.off=function(t,e){this.events[t].splice(this.events[t].indexOf(e),1)},t.prototype.empty=function(t){this.events[t]=[]},t.prototype.triggle=function(t){this.events[t].forEach(function(t){t()})},t}();e.default=r},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(1),o=i(5),n=i(2),a=i(6),s=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),c=function(t){function e(e){var i=e.video,r=e.dataTime,o=t.call(this)||this;return o.currentTime=0,o.sumTime=0,o.videoEnd=!1,o.barrageWrap=[],o.readyShowBarrage=[],o.staticBarrageST=null,o.runST=0,o.video=i,o.scroxtVideo=document.querySelector(o.video),o.dataTime=o.quickSort(r),console.log(o.dataTime),o.tempDataTime=JSON.parse(JSON.stringify(o.dataTime)),o.lineHeight=28,o.videoWidth=parseInt(Object(n.default)(o.video,"width")),o.MAX_LINE=~~(parseInt(Object(n.default)(o.video,"height"))/o.lineHeight),o.MAX_NUM=50,o.distance=-5,o.colorFont=["#ffff38","#c80115","#189add"],o.startRun(),o}return s(e,t),e.prototype.quickSort=function(t){if(t.length<=1)return t;for(var e=t.splice(Math.floor(t.length/2),1)[0],i=[],r=[],o=0,n=t.length;o<n;o++)t[o].time<e.time?i.push(t[o]):r.push(t[o]);return this.quickSort(i).concat(e,this.quickSort(r))},e.prototype.startRun=function(){var t=this.scroxtVideo.className;this.scroxtVideo.className=t.indexOf("scroxt-video")>-1?t:t+" scroxt-video",this.playEvent()},e.prototype.restart=function(){this.sumTime=0,this.tempDataTime=JSON.parse(JSON.stringify(this.dataTime))},e.prototype.playEvent=function(){var t=this;4==this.scroxtVideo.readyState?t.videoClickEvent():(this.scroxtVideo.addEventListener("canplaythrough",function(){t.videoClickEvent()},!1),this.scroxtVideo.load())},e.prototype.videoClickEvent=function(){var t=this;t.scroxtVideo.addEventListener("click",function(e){e.stopImmediatePropagation(),t.videoEnd&&(t.videoEnd=!1,t.restart()),t.videoStatusMethod()},!1),t.scroxtVideo.addEventListener("ended",function(){t.videoEnd=!0,t.readyShowBarrage=[]})},e.prototype.videoStatusMethod=function(){this.scroxtVideo.paused?(this.currentTime=+new Date,this.scroxtVideo.play(),this.intervalRun()):(this.scroxtVideo.pause(),this.intervalStop())},e.prototype.timeUpdate=function(){this.sumTime+=(+new Date-this.currentTime)/1e3,this.currentTime=+new Date,this.distribution(this.sumTime)},e.prototype.distribution=function(t){for(var e=this.tempDataTime.length;0!==e&&this.tempDataTime[0].time<t;)this.readyShowBarrage.push(this.tempDataTime[0].data),this.tempDataTime.shift(),e=this.tempDataTime.length},e.prototype.createBarrage=function(){var t=this.readyShowBarrage.length;if(t&&!(this.barrageWrap.length>this.MAX_NUM))for(var e=0;e<t;e++){if(e>this.MAX_LINE){t>20&&!this.staticBarrageST&&this.createStaticBarrage(this.readyShowBarrage.splice(0,this.MAX_LINE));break}var i=e%this.MAX_LINE,r=document.querySelectorAll("[data-line='"+i+"']"),o=r.length,n=void 0;if(o>0){n=r[o-1];var a=+n.getAttribute("data-width"),s=+n.getAttribute("data-move");if(Math.abs(s)+a>this.videoWidth)continue}var c=this.readyShowBarrage.shift(),u=Math.floor(1e3*Math.random())+ +new Date+e,d=e%2==0?10:0,l=document.createElement("div");l.className="multi-barrage-line";var h=document.createTextNode(""+c);l.appendChild(h),this.scroxtVideo.parentNode.appendChild(l);var p=parseInt(window.getComputedStyle(l,null).getPropertyValue("width")),f=p/600>=.5?.5:p/600,m="#fff";.5===f&&(m=this.colorFont[~~(Math.random()*this.colorFont.length)]),this.barrageWrap.push({element:l,scroxt:u,line:i,move:this.videoWidth+d+10,width:p,distance:f,color:m})}},e.prototype.createStaticBarrage=function(t){for(var e=this,i=0,r=t.length;i<r;i++)!function(i,r){var o=i%e.MAX_LINE,n=document.createElement("div");n.className="multi-barrage-line static-barrage-line",n.style.top=o*e.lineHeight+"px",n.style.color=e.colorFont[~~(Math.random()*e.colorFont.length)];var a=document.createTextNode(""+t[i]);n.appendChild(a),e.staticBarrageST=setTimeout(function(){this.staticBarrageST=null,this.scroxtVideo.parentNode.removeChild(n)}.bind(e),3e3),e.scroxtVideo.parentNode.appendChild(n)}(i)},e.prototype.moveLine=function(){for(var t=0;t<this.barrageWrap.length;t++){var e=this.barrageWrap[t],i=e.element,r=(e.scroxt,e.line),o=e.move,n=e.width,a=e.distance,s=e.color;if(o<=-n){this.barrageWrap.splice(t,1),t--;var c=i.parentNode;c&&c.removeChild(i)}else{var u=o+this.distance*a+this.distance/10;this.barrageWrap[t].move=u,i.style.cssText="color:"+s+";transform:translate3d("+u+"px,"+r*this.lineHeight+"px,0);"}}},e.prototype.intervalRun=function(){this.runST=Object(r.default)(function(){this.createBarrage(),this.moveLine(),this.scroxtVideo.paused||this.timeUpdate(),this.intervalRun()}.bind(this))},e.prototype.intervalStop=function(){Object(o.default)(this.runST)},e}(a.default);e.default=c}]);