function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function asyncGeneratorStep(t,e,n,r,s,i,a){try{var c=t[i](a),o=c.value}catch(t){return void n(t)}c.done?e(o):Promise.resolve(o).then(r,s)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(r,s){var i=t.apply(e,n);function a(t){asyncGeneratorStep(i,r,s,a,c,"next",t)}function c(t){asyncGeneratorStep(i,r,s,a,c,"throw",t)}a(void 0)}))}}function getScript(t){var e=window._loads;function n(){return(n=_asyncToGenerator(regeneratorRuntime.mark((function n(r,s){var i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e[t]?1==e[t]?(i=function(){if(2==e[t])return r();setTimeout(i,10)})():2==e[t]&&r():(e[t]=1,$.getScript(t,(function(){e[t]=2,r()})).fail((function(t,e,n){s(n)})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return new Promise((function(t,e){return n.apply(this,arguments)}))}function addCss(t){if(window._csses||(window._csses={}),!window._csses[t])return 0==t.search("http")?new Promise(function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(200==(r=e.sent).status){e.next=5;break}return e.abrupt("return",alert("get "+t+" 失败"));case 5:return e.t0=$("body"),e.t1=$,e.t2="<style>",e.next=10,r.text();case 10:e.t3=e.sent,e.t4=e.t2.concat.call(e.t2,e.t3,"</style>"),e.t5=(0,e.t1)(e.t4),e.t0.append.call(e.t0,e.t5),n();case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()):void $("body").append($("<style>".concat(t,"</style>")))}function sleep(t){return new Promise((function(e){return setTimeout(e,t)}))}window._loads||(window._loads={}),$.ajaxSetup({headers:{"X-CSRFToken":csrftoken,"Content-Type":"application/json"},xhrFields:{withCredentials:!0}});var xx={};function post(t,e){return"object"==_typeof(e)&&(e=JSON.stringify(e),!0),new Promise((function(n){$.post(t,e,(function(t,e,r){n({status:200,text:r.responseText,json:function(){return JSON.parse(r.responseText)}})})).fail((function(t,e,r){n({status:t.status,text:t.responseText,json:function(){return JSON.parse(t.responseText)}})}))}))}function show_dlg(t,e){$("body").append(t);var n=new Vue({el:t.get(0),data:function(){return e||{}}});if($(n.$el).hasClass("_anim")){var r="x-modal-".concat((new Date).getTime()),s=$('<a href="#'.concat(r,'"></a>'));$("body").append(s),$(n.$el).attr("id",r),$(n.$el).find(".close-modal").addClass("close-"+r),$(s).animatedModal({color:"#00000000",afterClose:function(){s.remove(),n.$children[0].close&&n.$children[0].close(),n.$destroy(),n.$el.remove()}}),s.click()}else $(n.$el).modal("show"),t.on("hidden.bs.modal",(function(t){n.$destroy()}));return n.$children[0]}function loadimg(t,e){return t.src=e,new Promise((function(e,n){t.onload=function(){e(t)},t.onerror=function(){n()}}))}function click_copy_tiktok(t){$(t).attr("title","抖音口令已经复制到剪贴板");var e=navigator.userAgent.match(/ipad|iphone/i),n=$("<input />");$("body").append(n),n.val("0K-:/ 【#换个姿势解锁热爱】长按复制此条消息，打开抖音搜索，查看话题##jvQ2tkmahm8##[抖音口令]");var r=n.get(0);if(e){r.contentEditable=!0,r.readOnly=!1;var s=document.createRange();s.selectNodeContents(r);var i=window.getSelection();i.removeAllRanges(),i.addRange(s),r.readOnly=!0,r.setSelectionRange(0,999999)}else r.select();document.execCommand("copy"),n.remove(),$(t).tooltip("show"),setTimeout((function(e){$(t).tooltip("hide")}),1e3)}Vue.component("a-wxconfig",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return err?_c("div",[_v(_s(err))]):_e()},data:function(){return{err:null}},mounted:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="换个姿势，解锁热爱 - 海尔京东超级品牌日主题活动",e.next=3,post("get_sign",{url:location.href});case 3:if(200==(n=e.sent).status){e.next=7;break}if(!(location.href.search("/testbg/")>-1)){e.next=7;break}return e.abrupt("return",alert("get_sign 失败"));case 7:(r=n.json()).debug=!1,t.oid=r.oid,wx.ready((function(e){return t.ready()})),wx.error((function(e){return t.err=e})),wx.config(r),t.initxx();case 14:case"end":return e.stop()}}),e)})))()},methods:{ready:function(){var t="https://hr-server.fancyguo.com/fancybg/ha/quickkv",e="快来为你喜欢的城市加油",n="换个姿势，解锁热爱";this.$attrs.hasOwnProperty("prebuy")&&(t="https://hr-server.fancyguo.com/fancybg/ha/prebuykv",e="专属千元优惠、千元礼包等你领",n="海尔京东超级品牌日内购会"),location.href.search("testbg")>-1&&(t=t.replace("fancybg","testbg")),t+="?from="+this.oid;var r="https://hr-server.fancyguo.com/fancybg/assets/H5-2-01-UI-INDEX/link-logo.jpg";(new Image).src=r,wx.updateAppMessageShareData({title:n,desc:e,link:t,imgUrl:r}),wx.updateTimelineShareData({title:"".concat(n,"，").concat(e),link:t,imgUrl:r}),this.$root.wxinit=!0},initxx:function(){xx=new Proxy({},{get:function(t,e){return function(t){return new Promise((function(n,r){t.success=n,wx[e](t)}))}}})}}}),Vue.component("a-slider-common",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticClass:"swiper-slide"},[_c("div",{staticClass:"swiper"},[_c("div",{staticClass:"swiper-wrapper"},[_c("div",{staticClass:"swiper-slide"},[_t("default")],2)]),_v(" "),_c("div",{staticClass:"swiper-scrollbar"})])])},mounted:function(){var t,e=this;new Swiper((t=".swiper",$(e.$el).find(t).get(0)),{parallax:!0,freeMode:!0,direction:"horizontal"})}}),Vue.component("a-slider-common2",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticClass:"swiper-slide"},[_c("div",{staticClass:"c",staticStyle:{positin:"relative","overflow-x":"scroll"}},[_t("default")],2)])},mounted:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var n,r,s,i,a,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.documentElement.clientHeight,(r=$(t.$el).find("img[cityimg]")).attr("height",n),s=r.attr("src")){e.next=6;break}return e.abrupt("return");case 6:return i=new Image,e.next=9,loadimg(i,s);case 9:(a=r.prev()).css("position","relative"),a.css("width",r.width()+"px"),a.css("height",r.height()+"px"),a.css("background","url(".concat(s,") top center/cover")),a.get(0).scale=i.height/r.height()/.8,(c=$(t.$el).find(".c").get(0)).scrollTo((r.get(0).width-c.clientWidth)/2,0),r.css("display","none");case 18:case"end":return e.stop()}}),e)})))()}}),Vue.component("a-city-invite",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticClass:"w-100 text-center",staticStyle:{position:"absolute"}},[_c("img",{staticStyle:{width:"150px"},attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-city/BTN-guider.gif"},on:{click:function(t){return $root.scan()}}})])},mounted:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=window.innerHeight,$(t.$el).find("img").get(0),$(t.$el).css("top",n-60+"px");case 3:case"end":return e.stop()}}),e)})))()}}),Vue.component("a-city-xa",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-slider-common2",[_c("a-city-topbar",{attrs:{z:"1"}}),_v(" "),_c("div",{staticClass:"maindiv",on:{click:function(t){return $parent.clickimg("xa",t)}}}),_v(" "),_c("img",{attrs:{cityimg:"xa","data-swiper-parallax":"-20",src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-city/H5-1-02-XiAn.jpg"}}),_v(" "),_c("div",{staticStyle:{position:"absolute",top:"25px",left:"0",width:"200px",height:"100px",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-city/HEAD-LOGO.png) top center/90% no-repeat","pointer-events":"none"}},[_c("a-center")],1),_v(" "),_c("div",{staticStyle:{position:"absolute",top:"70px",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-city/city1-logo.png) top center/100% no-repeat",left:"0",width:"200px",height:"150px","pointer-events":"none"}},[_c("a-center"),_v(" "),_c("div",{staticStyle:{"margin-top":"62px","padding-left":"132px"}},[_c("span",{staticStyle:{"font-size":"10px",color:"yellow"}},[_v(_s(t.hot))])]),_v(" "),_c("div",{staticStyle:{"margin-top":"-2px","padding-left":"98px"}},[_c("span",{staticStyle:{"font-size":"12px","font-weight":"600",color:"red"}},[_v(_s(t.hot/10))])])],1),_v(" "),_c("a-city-invite")],1)},data:function(){return{t:sts.filter((function(t){return 0==t.key.search("xa-")}))[0]}},mounted:function(){}}),Vue.component("a-city-cq",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-slider-common2",[_c("a-city-topbar",{attrs:{z:"1"}}),_v(" "),_c("div",{on:{click:function(t){return $parent.clickimg("cq",t)}}}),_v(" "),_c("img",{attrs:{cityimg:"cq","data-swiper-parallax":"-20",src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-city/H5-1-05-Chongqing.jpg"}}),_v(" "),_c("div",{staticStyle:{position:"absolute",top:"25px",left:"0",width:"200px",height:"100px",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-city/HEAD-LOGO.png) top center/90% no-repeat","pointer-events":"none"}},[_c("a-center")],1),_v(" "),_c("div",{staticStyle:{position:"absolute",top:"70px",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-city/city2-logo.png) top center/100% no-repeat",left:"0",width:"200px",height:"200px","pointer-events":"none"}},[_c("a-center"),_v(" "),_c("div",{staticStyle:{"margin-top":"65px","padding-left":"132px"}},[_c("span",{staticStyle:{"font-size":"10px",color:"yellow"}},[_v(_s(t.hot))])]),_v(" "),_c("div",{staticStyle:{"margin-top":"-4px","padding-left":"98px"}},[_c("span",{staticStyle:{"font-size":"12px","font-weight":"600",color:"white"}},[_v(_s(t.hot/10))])])],1),_v(" "),_c("a-city-invite")],1)},data:function(){return{t:sts.filter((function(t){return 0==t.key.search("cq-")}))[0]}},mounted:function(){}}),Vue.component("a-city-hf",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-slider-common2",[_c("a-city-topbar",{attrs:{z:"1"}}),_v(" "),_c("div",{on:{click:function(t){return $parent.clickimg("hf",t)}}}),_v(" "),_c("img",{attrs:{cityimg:"hf","data-swiper-parallax":"-20",src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-city/H5-1-07-HeFei.jpg"}}),_v(" "),_c("div",{staticStyle:{position:"absolute",top:"25px",left:"0",width:"200px",height:"100px",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-city/HEAD-LOGO.png) top center/90% no-repeat","pointer-events":"none"}},[_c("a-center")],1),_v(" "),_c("div",{staticStyle:{position:"absolute",top:"70px",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-city/city3-logo.png) top  center/100% no-repeat",left:"0",width:"200px",height:"180px","pointer-events":"none"}},[_c("a-center"),_v(" "),_c("div",{staticStyle:{"margin-top":"58px","padding-left":"134px"}},[_c("span",{staticStyle:{"font-size":"10px",color:"yellow"}},[_v(_s(t.hot))])]),_v(" "),_c("div",{staticStyle:{"margin-top":"0px","padding-left":"98px"}},[_c("span",{staticStyle:{"font-size":"12px","font-weight":"600",color:"white"}},[_v(_s(t.hot/10))])])],1),_v(" "),_c("a-city-invite")],1)},data:function(){return{t:sts.filter((function(t){return 0==t.key.search("hf-")}))[0]}},mounted:function(){}}),Vue.component("a-city-full",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticStyle:{width:"100%",position:"relative"}},[_c("div",{staticClass:"swiper mySwiper"},[_c("div",{staticClass:"swiper-wrapper"},[_c("a-city-xa"),_v(" "),_c("a-city-cq"),_v(" "),_c("a-city-hf")],1),_v(" "),_c("div",{staticClass:"swiper-pagination"})])])},mounted:function(){var t,e=this,n=function(t){return $(e.$el).find(t).get(0)},r=$(window).height()+"px";$(this.$el).css("height",r),(t=".bg",$(e.$el).find(t)).css("height",r);var s={"data-reveal":"enter right and move 50px over 0.8s"};$(this.$el).find("div[style*='city/city']").attr(s),$(this.$el).find("div[style*='LOGO']").attr(s);new SwiperAnimation;var i=new Swiper(n(".swiper"),{direction:"vertical",autoHeight:!0,pagination:{el:n(".swiper-pagination")},on:{slideChange:function(){for(var t=i.slides,e=i.activeIndex,n=function(n){$(t[n]).find("[data-reveal]").each((function(){this.forceshow=n==e}))},r=0;r<i.slides.length;r++)n(r);_reveal._scrollPage()}}});i.mousewheel.enable();document.head.append($("<style>".concat(".swiper {\n      width: 100%;\n      height: 100%;\n    }","</style>")).get(0));i.slideTo({xa:0,cq:1,hf:2}[key.substring(0,2)],0)},methods:{clickimg:function(t,e){var n=this;return _asyncToGenerator(regeneratorRuntime.mark((function r(){var s,i,a,c,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=e.target,i=e.offsetX*s.scale,a=e.offsetY*s.scale,c=n.$root.get_product(t,i,a)){r.next=6;break}return r.abrupt("return");case 6:(o=show_dlg($('<a-pop-viewproduct tag="'.concat(t,'" />')))).st=c[1],o.s=c[0],fetch("clickev!查看产品~".concat(t,"~").concat(o.s[0])),o.refresh();case 11:case"end":return r.stop()}}),r)})))()}}}),Vue.component("a-modal",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticClass:"modal",attrs:{tabindex:"-1"}},[_c("div",{staticClass:"modal-dialog modal-dialog-centered"},[_c("div",{staticClass:"modal-content",staticStyle:{"background-color":"#00000000",border:"0"}},[_t("default")],2)])])}}),Vue.component("a-pop-prebuyinfo",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{h100:"",alpha:""}},[_c("div",{staticClass:"row mx-0",staticStyle:{position:"relative"}},[_c("div",{staticClass:"col-md mx-auto px-0 mt-4",staticStyle:{background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-03-UI-APPT/Popup-APPT.png) top left /100%",width:"334px",height:"550px"}},[_c("div",{staticClass:"row",staticStyle:{"padding-top":"8%"}},[_c("div",{staticClass:"col-10 mx-auto px-0",staticStyle:{height:"40px"}},[_c("a-city-topbar")],1)]),_v(" "),_c("div",{staticClass:"row mx-0",staticStyle:{"margin-top":"140px"}},[_c("div",{staticClass:"input1 col-12"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:info.name,expression:"info.name"}],staticStyle:{border:"0","background-color":"#00000000",width:"137px","margin-left":"132px","margin-top":"11px"},domProps:{value:info.name},on:{input:function(t){t.target.composing||$set(info,"name",t.target.value)}}})]),_v(" "),_c("div",{staticClass:"input2 col-12"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:info.mobile,expression:"info.mobile"}],staticStyle:{border:"0","background-color":"#00000000",width:"137px","margin-left":"132px","margin-top":"11px"},domProps:{value:info.mobile},on:{input:function(t){t.target.composing||$set(info,"mobile",t.target.value)}}})])]),_v(" "),_c("div",{staticClass:"row mx-0",staticStyle:{position:"absolute",bottom:"20px",left:"3px",width:"100%"}},[_c("div",{staticClass:"col-12",on:{click:submit}},[_c("div",{staticStyle:{height:"50px",width:"100%",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-03-UI-APPT/BTN-APPT.png) top center/80% no-repeat"}})])])])])])},data:function(){return{info:{name:"",mobile:"",want:!0}}},mounted:function(){addCss("\n      .input1{ height:55px;\n        background:url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-03-UI-APPT/APPT-NAME.png) top center /70% no-repeat;\n      }\n      .input2{ height:55px; margin-top:15px;\n        background:url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-03-UI-APPT/APPT-PHONE.png) top center /70% no-repeat;\n      }\n    ")},methods:{submit:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,post("prebuy_book_do",t.info);case 2:if(200==(n=e.sent).status){e.next=5;break}return e.abrupt("return",alert("prebuy_book_do 失败"));case 5:if(!(r=n.json()).err){e.next=8;break}return e.abrupt("return",alert(r.err));case 8:show_dlg($("<a-pop-prebuydone />"));case 9:case"end":return e.stop()}}),e)})))()}}}),Vue.component("a-pop-prebuydone",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{h100:"",alpha:""}},[_c("div",{staticClass:"h-25 close-modal"}),_v(" "),_c("div",{staticClass:"row close-modal",staticStyle:{position:"relative"}},[_c("div",{staticClass:"col-auto mx-auto px-0",staticStyle:{background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-04-UI-APPT-succ/Popup-APPT-succ.png) top left/100%"}},[_c("div",{staticStyle:{width:"337px",height:"264px"}})])])])},mounted:function(){},methods:{close:function(){location.href="prebuygift"}}}),Vue.component("a-pop-modal",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticClass:"mx-auto _anim",staticStyle:{width:"300px"}},[_c("div",{staticClass:"close-modal"}),_v(" "),_c("div",{ref:"modalbg",staticClass:"modal-content  animate__fadeIn mx-auto",staticStyle:{border:"0",position:"relative","animation-duration":"1s","background-color":"rgba(0, 0, 0, 0)"},on:{click:clickbg}},[_t("default")],2)])},beforeMount:function(){this.$attrs.hasOwnProperty("zoom")&&$(this.$refs.modalbg).removeClass("animate__fadeIn")},mounted:function(){this.$attrs.hasOwnProperty("alpha")&&$(this.$el).find(".modal-content").css("background-color","rgba(0, 0, 0, 0.9)"),this.$attrs.hasOwnProperty("h100")&&$(this.$el).find(".modal-content").css("height","100%")},methods:{clickbg:function(t){t.target==this.$refs.modalbg&&$(this.$el).find(".close-modal").click()}}}),Vue.component("a-center",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div")},mounted:function(){var t=$(this.$el).parent().get(0).scrollWidth,e=document.documentElement.clientWidth;$(this.$el).parent().css("left",(e-t)/2+"px")}}),Vue.component("a-bgsize",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div")}}),Vue.component("a-loadbg",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div")},props:["bgurl","src"],mounted:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var n,r,s,i,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=$(t.$el).parent(),r=new Image,s=t.bgurl||t.src,e.next=5,loadimg(r,s);case 5:i=333,t.src&&(i=Math.min(t.$el.parentNode.scrollWidth)),t.$attrs.hasOwnProperty("w100")&&(i=$(window).width()),n.css("width",i+"px"),a=i*r.height/r.width,n.css("height",a+"px"),n.css("background","url(".concat(s,") top left/100% no-repeat")),n.attr("data-reveal")&&_reveal.bank_style(n.get(0),{add:"height:".concat(n.css("height"),"; background:").concat(n.css("background"))}),t.$destroy(),t.$el.remove();case 15:case"end":return e.stop()}}),e)})))()}}),Vue.component("a-rotate",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div")},mounted:function(){$(this.$el).parent().addClass("rotate_anim");$("head").append($("<style>".concat("\n    @keyframes rotate_keys{\n      0%{\n        transform: rotate(0);\n        }\n      50%{\n        transform:rotate(200deg);\n      }\n      100%{\n         transform: rotate(1);\n        }\n      }\n      .rotate_anim{\n          transition: 0.5s;\n          transform-origin: 50% 50%;\n          animation: rotate_keys 10s linear infinite;  /*开始动画后无限循环，用来控制rotate*/\n      }","</style>"))),this.$destroy()}}),Vue.component("a-pop-storesign-done",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{alpha:"",h100:""}},[_c("div",{staticStyle:{width:"330px",height:"600px","z-index":"0"}},[_c("div",{staticStyle:{width:"100%",position:"absolute",top:"0",left:"0"}},[_c("img",{staticClass:"w-100",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-04-UI-SUCC/shine-roller.png"}}),_v(" "),_c("a-rotate")],1),_v(" "),_c("div",{staticStyle:{width:"330px",height:"600px","z-index":"1",position:"absolute",top:"10%",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-04-UI-SUCC/Popup-succ.png) top center/330px auto no-repeat"}},[_c("a-center"),_v(" "),_c("div",{staticClass:"row mx-auto text-center",staticStyle:{"margin-top":"185px"}},[_c("div",{staticClass:"col"},[_c("img",{attrs:{width:"110px",src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-04-UI-SUCC/Popup-BTN-share.png"},on:{click:to_share}})]),_v(" "),_c("div",{staticClass:"col"},[_c("img",{staticClass:"close-modal",attrs:{width:"110px",src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-04-UI-SUCC/Popup-BTN-back.png"}})])]),_v(" "),_c("div",{staticClass:"row mx-0 text-center",staticStyle:{"margin-top":"185px"}},[_c("div",{staticClass:"col"},[_c("img",{ref:"tk",attrs:{title:"已复制抖音口令",width:"180px",src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-04-UI-SUCC/BTN-tiktok.png"},on:{click:to_tictok}})])])],1)])])},mounted:function(){},methods:{to_tictok:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("clickev!快闪签到完抖音"),click_copy_tiktok(t.$refs.tk);case 2:case"end":return e.stop()}}),e)})))()},to_share:function(){fetch("clickev!快闪签到完分享"),show_dlg($("<a-share-tip />"))}}}),Vue.component("a-pop-viewproduct",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{alpha:"",h100:""}},[_c("div",{staticClass:"w-100 position-relative"},[_c("a-loadbg",{attrs:{src:bgurl}}),_v(" "),_c("div",{staticClass:"close-modal",staticStyle:{position:"absolute",right:"8%",top:"5%"}},[_c("img",{attrs:{width:"30",src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-UI-Popup/closer-1.png"}})]),_v(" "),producturl?_c("div",{staticClass:"noclick",staticStyle:{height:"65%"}},[_c("div",{staticClass:"row mx-0 noclick",staticStyle:{"padding-top":"19%",height:"100%"}},[_c("div",{staticClass:"col-8 mx-auto product",staticStyle:{height:"100%"}})]),_v(" "),_c("div",{staticClass:"row mx-0",staticStyle:{"margin-top":"13%"}},[_c("div",{staticClass:"col-11 mx-auto text-center font-weight-bold",staticStyle:{color:"white"}},[_v("\r\n              "+_s(s[1])+"\r\n            ")])]),_v(" "),_c("div",{staticClass:"row mx-0 text-center color:white ",staticStyle:{color:"white","margin-top":"3%","font-size":"13px"}},[_c("div",{staticClass:"col-11 mx-auto"},[_v("\r\n              "+_s(s[2])+"\r\n            ")]),_v(" "),_c("div",{staticClass:"col-8 mx-auto mt-1",staticStyle:{"font-size":"11px"}},[_v("\r\n              "+_s(s[3])+"\r\n            ")])])]):_e()],1)])},props:["tag"],data:function(){var t="https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-UI-Popup/city1-popup.png";return"cq"==this.tag&&(t=t.replace("city1","city2")),"hf"==this.tag&&(t=t.replace("city1","city3")),{bgurl:t,s:[],st:{},producturl:null}},mounted:function(){},methods:{refresh:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.producturl="https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/".concat(t.st.name,"/").concat(t.s[0],".png"),e.next=3,t.$nextTick();case 3:$(t.$el).find("div.product").css("background","url(".concat(t.producturl,") top center / contain no-repeat"));case 4:case"end":return e.stop()}}),e)})))()}}}),Vue.component("a-city-topbar",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticStyle:{position:"absolute",width:"100%"}},[_c("div",{staticClass:"row mx-0"},[_c("div",{staticClass:"col-auto"},[_c("img",{staticStyle:{height:"30px",width:"auto"},attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-city/BTN-Back.png"},on:{click:home}})]),_v(" "),_c("div",{staticClass:"col-auto ml-auto"},[_c("img",{staticStyle:{height:"30px",width:"auto"},attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-1-city/BTN-Share.png"},on:{click:share}})])])])},props:["z"],mounted:function(){this.$attrs.hasOwnProperty("relative")&&(this.$el.style.position=""),this.z&&$(this.$el).css("z-index",this.z)},methods:{home:function(){fetch("clickev!top返回点击"),location.href.search(/prebuy/)>-1?location.href="prebuykv":location.href="quickkv"},share:function(){fetch("clickev!top分享点击"),show_dlg($("<a-share-tip />"))}}}),Vue.component("a-share-tip",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{alpha:"",h100:""}},[_c("div",{staticClass:"text-center"},[_c("img",{staticClass:"mx-auto",staticStyle:{width:"333px"},attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-06-UI-Tik-Share/Popup-share.png"}}),_v(" "),_c("img",{staticClass:"close-modal",staticStyle:{width:"200px","margin-top":"50px"},attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-06-UI-Tik-Share/BTN-done.png"}})])])},mounted:function(){return _asyncToGenerator(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(location.href.search(/prebuy/)>-1)){t.next=10;break}return t.next=3,fetch("prebuy_share");case 3:if(200==(e=t.sent).status){t.next=6;break}return t.abrupt("return",alert("prebuy_share 失败"));case 6:return t.next=8,e.json();case 8:n=t.sent,window.user&&(user.inviten=n.inviten);case 10:case"end":return t.stop()}}),t)})))()}}),Vue.component("a-get-gift",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{alpha:"",h100:""}},[_c("div",{staticClass:"h-25 close-modal"}),_v(" "),_c("div",{staticClass:"text-center"},[_c("img",{staticClass:"w-75",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-05-UI-Tik-none/BTN-APPT-tic.png"},on:{click:pre}}),_v(" "),_c("img",{staticClass:"w-75",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-05-UI-Tik-none/BTN-sign-Tic.png"},on:{click:scan}}),_v(" "),_c("img",{staticClass:"w-75",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-05-UI-Tik-none/BTN-SHARE.png"},on:{click:share}})]),_v(" "),_c("div",{staticClass:"h-25 close-modal"})])},methods:{share:function(){fetch("clickev!如何获取奖券分享"),show_dlg($("<a-share-tip />"))},pre:function(){return _asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("clickev!如何获取奖券预约");case 2:location.href="prebuy_book";case 3:case"end":return t.stop()}}),t)})))()},scan:function(){fetch("clickev!如何获取奖券扫码"),xx.scanQRCode({needResult:0,scanType:["qrCode","barCode"]})}}}),Vue.component("a-gift",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticStyle:{position:"relative"}},[g?g.win?_c("div",{attrs:{win:""},on:{click:function(t){return pop("https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-07-UI-Tik/tic-win.png",g)}}},[_c("a-loadbg",{attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-07-UI-Tik/tic-thumb-win.png"}})],1):null==store.gift_at?_c("div",{attrs:{wait:""},on:{click:function(t){return pop("https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-07-UI-Tik/tic-wait.png")}}},[_c("a-loadbg",{attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-07-UI-Tik/tic-thumb-wait.png"}})],1):g.win?_e():_c("div",{attrs:{lose:""},on:{click:function(t){return pop("https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-07-UI-Tik/tic-lose.png")}}},[_c("a-loadbg",{attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-07-UI-Tik/tic-thumb-lose.png"}})],1):_c("div",{attrs:{add:""},on:{click:$root.get_gift}},[_c("a-loadbg",{attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-07-UI-Tik/tic-thumb-last.png"}})],1),_v(" "),g?_c("div",{staticClass:"text-font-bold",staticStyle:{position:"absolute","font-size":"12px",left:"50%",bottom:"32%",color:"yellow"}},[_v("\r\n        "+_s(g.key)+"\r\n      ")]):_e()])},props:["g"],data:function(){return{store:store}},methods:{pop:function(t,e){show_dlg($("<a-gift-pop />"),{src:t,g:e})}}}),Vue.component("a-gift-pop",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{alpha:"",h100:""}},[_c("div",{staticClass:"h-25 close-modal"}),_v(" "),_c("div",{staticClass:"text-center"},[_c("div",{staticClass:"w-75 mx-auto"},[_c("a-loadbg",{attrs:{src:src}}),_v(" "),_c("div",{staticStyle:{height:"10%"}}),_v(" "),g?_c("div",{staticClass:"w-50 mx-auto"},[_c("a-loadbg",{attrs:{src:purl(g)}})],1):_e()],1),_v(" "),_c("img",{staticClass:"w-25 mt-2 close-modal",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-07-UI-Tik/tic-BTN-back.png"}})])])},data:function(){return this.$root.$data},methods:{purl:function(t){return"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/ha-img/product".concat(t.win,".png")}}}),Vue.component("a-signgift-done",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{alpha:"",h100:""}},[_c("div",{staticClass:"h-25 close-modal"}),_v(" "),_c("div",{staticClass:"text-center"},[_c("img",{staticClass:"w-75",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-02-UI-succ/Popup-sign-succ.png"}}),_v(" "),_c("div",{staticStyle:{"margin-top":"-18%"}},[_c("img",{staticClass:"w-25 mt-2 close-modal",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-02-UI-succ/Popup-BTN-back.png"}}),_v(" "),_c("img",{staticClass:"w-25 mt-2 ",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-02-UI-succ/Popup-BTN-MYTIC.png"},on:{click:togift}})]),_v(" "),_c("div",{staticStyle:{"margin-top":"15%"}},[_c("img",{staticClass:"w-50",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-02-UI-succ/BTN-APPT.png"},on:{click:tobook}})]),_v(" "),_c("div",{staticStyle:{"margin-top":"0%"}},[_c("img",{staticClass:"w-50",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-02-UI-succ/BTN-tiktok.png"},on:{click:to_tiktok}})])])])},data:function(){return{}},methods:{togift:function(){fetch("clickev!内购签到查看奖券"),location.href="prebuygift"},tobook:function(){fetch("clickev!内购签到预约"),location.href="prebuy_book"},to_tiktok:function(t){fetch("clickev!内购签到抖音"),click_copy_tiktok(t.target)}}}),Vue.component("a-prebuy-rule",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{zoom:""}},[_c("div",{staticStyle:{height:"25vh"}}),_v(" "),_c("div",{staticClass:"w-100 close-modal"},[_c("a-loadbg",{attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-01-UI-INDEX/tips.png"}})],1)])}}),Vue.component("a-pop-rule",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",[_c("div",{staticStyle:{height:"5vh"}},[_v("1")]),_v(" "),_c("div",{staticClass:"close-modal",staticStyle:{width:"100%"}},[_c("a-loadbg",{attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/H5-2-01-UI-INDEX/readme-bg.png"}}),_v(" "),_c("div",{staticClass:"px-4",staticStyle:{"padding-top":"20%",height:"89%","font-size":"12px"}},[_c("textarea",{ref:"i",staticClass:"w-100 h-100",staticStyle:{"background-color":"#00000000",border:"0"},attrs:{onclick:"arguments[0].stopPropagation()"}})])],1)])},data:function(){return this.$parent.$data},mounted:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("query_config");case 2:if(200==(n=e.sent).status){e.next=5;break}return e.abrupt("return",alert("查询配置失败."));case 5:return e.next=7,n.json();case 7:r=e.sent,$(t.$refs.i).val(r[t.t]);case 9:case"end":return e.stop()}}),e)})))()}}),Vue.component("c-bar",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("canvas")},props:["chartdata","options"],mounted:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,getScript("https://cdn.jsdelivr.net/npm/chart.js@3.5.1/dist/chart.min.js");case 2:if(window.ResizeObserver){e.next=5;break}return e.next=5,getScript("https://cdn.jsdelivr.net/npm/resize-observer-polyfill@1.5.1/dist/ResizeObserver.min.js");case 5:$(t.$el).css("width",$(t.$el).parent().width()),$(t.$el).css("height",$(t.$el).parent().height()),(n=t.options||{}).plugins={title:{text:t.chartdata.title,display:!0}},t.ct=new Chart(t.$el,{type:"bar",data:t.chartdata,options:n});case 10:case"end":return e.stop()}}),e)})))()}}),Vue.component("c-game-slot",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticStyle:{height:"145px","padding-top":"28px",overflow:"hidden","font-size":"80px","font-family":"'Lucida Console', Courier, monospace"}},_l(s,(function(t){return _c("div",{staticStyle:{filter:"blur(0px)"}},[_v(_s(t.key))])})),0)},data:function(){return{s:[],idx:null}},mounted:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.starttime=(new Date).getTime(),e.next=3,getScript("https://cdn.jsdelivr.net/npm/jquery-slotmachine@4.0.2/dist/slotmachine.min.js");case 3:return e.next=5,addCss("https://cdn.jsdelivr.net/npm/jquery-slotmachine@4.0.2/dist/jquery.slotmachine.min.css");case 5:window.game=t,$(window).keydown((function(e){if("Enter"==e.key){if((new Date).getTime()-t.starttime<1e3)return;t.$root.started||t.start(),t.$root.started&&t.stop(),t.starttime=(new Date).getTime()}}));case 7:case"end":return e.stop()}}),e)})))()},methods:{query:function(t){var e=this;return _asyncToGenerator(regeneratorRuntime.mark((function n(){var r,s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.$root.result=null,e.idx=t,e.$root.started=!1,e.sm&&e.sm.destroy(),n.next=6,fetch("han_querygift?k="+storekey+"&idx="+t);case 6:if(200==(r=n.sent).status){n.next=9;break}return n.abrupt("return",alert("querygift 失败"));case 9:return n.next=11,r.json();case 11:return s=n.sent,e.s=s,n.next=15,e.$nextTick();case 15:if(1!=e.s.length){n.next=18;break}return e.$root.result=e.s[0],n.abrupt("return");case 18:e.sm=new SlotMachine(e.$el,{active:0,delay:4e3+1480*(e.s.length-2)}),e.sm.shuffle(999999);case 20:case"end":return n.stop()}}),n)})))()},start:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.$root.result){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.query(t.idx);case 4:t.$root.started=!0,t.sm&&t.sm.destroy(),t.sm=new SlotMachine(t.$el,{delay:1200}),t.sm.shuffle(999999);case 8:case"end":return e.stop()}}),e)})))()},stop:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var n,r,s,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$root.started=!1,e.next=3,fetch("prebuyslotstop?k=".concat(storekey,"&idx=").concat(t.idx));case 3:if(200==(n=e.sent).status){e.next=9;break}return e.abrupt("return",alert("prebuyslotstop 失败"));case 8:e.sent;case 9:return e.next=11,n.json();case 11:r=e.sent,s=t.s,1,e.t0=regeneratorRuntime.keys(s);case 15:if((e.t1=e.t0()).done){e.next=23;break}if(i=e.t1.value,s[i].key!=r.key){e.next=21;break}return t.sm.nextActive=parseInt(i),console.log("!!! done",i),e.abrupt("break",23);case 21:e.next=15;break;case 23:t.sm._animationFX="slotMachineBlurMedium",t.sm.stop(function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,sleep(500);case 2:t.$root.result=r;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 25:case"end":return e.stop()}}),e)})))()}}}),Vue.component("c-game-slot-item",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticStyle:{height:"329px",width:"408px",overflow:"hidden"}},_l(s,(function(t){return _c("div",{staticClass:"text-center",staticStyle:{filter:"blur(0px)",width:"100%"}},[_c("img",{staticStyle:{height:"329px"},attrs:{src:img(t)}})])})),0)},data:function(){return{s:[],idx:1}},mounted:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,getScript("https://cdn.jsdelivr.net/npm/jquery-slotmachine@4.0.2/dist/slotmachine.min.js");case 2:return e.next=4,addCss("https://cdn.jsdelivr.net/npm/jquery-slotmachine@4.0.2/dist/jquery.slotmachine.min.css");case 4:if(window.game){e.next=9;break}return e.next=7,sleep(20);case 7:e.next=4;break;case 9:return e.next=11,t.query();case 11:$(window).keydown((function(e){"ArrowDown"!=e.key&&"ArrowRight"!=e.key||t.next(),"ArrowUp"!=e.key&&"ArrowLeft"!=e.key||t.prev()}));case 12:case"end":return e.stop()}}),e)})))()},methods:{query:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var n,r,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("prebuyslotitem?k="+storekey);case 2:if(200==(n=e.sent).status){e.next=5;break}return e.abrupt("return",alert("prebuyslotitem 失败"));case 5:return e.next=7,n.json();case 7:return r=e.sent,t.s=r.s,e.next=11,t.$nextTick();case 11:return s=new Image,e.next=14,loadimg(s,$(t.$el).find("img").attr("src"));case 14:t.sm||(t.sm=new SlotMachine(t.$el,{direction:"down"})),window.game.query(t.idx);case 16:case"end":return e.stop()}}),e)})))()},img:function(t){return"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.46/assets/ha-img/product".concat(t,".png")},next:function(){this.idx=this.sm.next()+1,this.query()},prev:function(){this.idx=this.sm.prev()+1,this.query()}}});
