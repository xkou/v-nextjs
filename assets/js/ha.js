function _typeof(t){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_typeof(t)}function asyncGeneratorStep(t,e,n,i,r,s,a){try{var o=t[s](a),c=o.value}catch(t){return void n(t)}o.done?e(c):Promise.resolve(c).then(i,r)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(i,r){var s=t.apply(e,n);function a(t){asyncGeneratorStep(s,i,r,a,o,"next",t)}function o(t){asyncGeneratorStep(s,i,r,a,o,"throw",t)}a(void 0)}))}}function getScript(t){var e=window._loads;function n(){return(n=_asyncToGenerator(regeneratorRuntime.mark((function n(i,r){var s;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e[t]?1==e[t]?(s=function(){2!=e[t]?setTimeout(s,10):i()})():2==e[t]&&i():(e[t]=1,$.getScript(t,(function(){e[t]=2,i()})).fail((function(t,e,n){r(n)})));case 1:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return new Promise((function(t,e){return n.apply(this,arguments)}))}function sleep(t){return new Promise((function(e){return setTimeout(e,t)}))}window._loads||(window._loads={}),$.ajaxSetup({headers:{"X-CSRFToken":csrftoken,"Content-Type":"application/json"},xhrFields:{withCredentials:!0}});var xx={};function post(t,e){return"object"==_typeof(e)&&(e=JSON.stringify(e),!0),new Promise((function(n){$.post(t,e,(function(t,e,i){n({status:200,text:i.responseText,json:function(){return JSON.parse(i.responseText)}})})).fail((function(t,e,i){n({status:t.status,text:t.responseText,json:function(){return JSON.parse(t.responseText)}})}))}))}function show_dlg(t,e){$("body").append(t);var n=new Vue({el:t.get(0),data:function(){return e||{}}});if($(n.$el).hasClass("_anim")){var i="x-modal-".concat((new Date).getTime()),r=$('<a href="#'.concat(i,'"></a>'));$("body").append(r),$(n.$el).attr("id",i),$(n.$el).find(".close-modal").addClass("close-"+i),$(r).animatedModal({color:"#00000000",afterClose:function(){r.remove(),n.$children[0].close&&n.$children[0].close(),n.$destroy(),n.$el.remove()}}),r.click()}else $(n.$el).modal("show"),t.on("hidden.bs.modal",(function(t){n.$destroy()}));return n.$children[0]}function loadimg(t,e){return t.src=e,new Promise((function(e,n){t.onload=function(){e(t)},t.onerror=function(){n()}}))}function click_copy_tiktok(t){$(t).attr("title","抖音口令已经复制到剪贴板");var e=navigator.userAgent.match(/ipad|iphone/i),n=$("<input />");$("body").append(n),n.val("0K-:/ 【#换个姿势解锁热爱】长按复制此条消息，打开抖音搜索，查看话题##jvQ2tkmahm8##[抖音口令]");var i=n.get(0);if(e){i.contentEditable=!0,i.readOnly=!1;var r=document.createRange();r.selectNodeContents(i);var s=window.getSelection();s.removeAllRanges(),s.addRange(r),i.readOnly=!0,i.setSelectionRange(0,999999)}else i.select();document.execCommand("copy"),n.remove(),$(t).tooltip("show"),setTimeout((function(e){$(t).tooltip("hide")}),1e3)}Vue.component("a-wxconfig",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return err?_c("div",[_v(_s(err))]):_e()},data:function(){return{err:null}},mounted:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="换个姿势，解锁热爱 - 海尔京东超级品牌日主题活动",e.next=3,post("get_sign",{url:location.href});case 3:if(200==(n=e.sent).status){e.next=7;break}if(!(location.href.search("/testbg/")>-1)){e.next=7;break}return e.abrupt("return",alert("get_sign 失败"));case 7:(i=n.json()).debug=!1,t.oid=i.oid,wx.ready((function(e){return t.ready()})),wx.error((function(e){return t.err=e})),wx.config(i),t.initxx();case 14:case"end":return e.stop()}}),e)})))()},methods:{ready:function(){var t="https://hr-server.fancyguo.com/fancybg/ha/quickkv",e="快来为你喜欢的城市加油";this.$attrs.hasOwnProperty("prebuy")&&(t="https://hr-server.fancyguo.com/fancybg/ha/prebuykv",e="海尔京东超级品牌日主题活动"),location.href.search("testbg")>-1&&(t=t.replace("fancybg","testbg")),t+="?from="+this.oid;wx.updateAppMessageShareData({title:"换个姿势，解锁热爱",desc:e,link:t,imgUrl:"https://hr-server.fancyguo.com/fancybg/assets/H5-2-01-UI-INDEX/link-logo.jpg"}),this.$root.wxinit=!0},initxx:function(){xx=new Proxy({},{get:function(t,e){return function(t){return new Promise((function(n,i){t.success=n,wx[e](t)}))}}})}}}),Vue.component("a-slider-common",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticClass:"swiper-slide"},[_c("div",{staticClass:"swiper"},[_c("div",{staticClass:"swiper-wrapper"},[_c("div",{staticClass:"swiper-slide"},[_t("default")],2)]),_v(" "),_c("div",{staticClass:"swiper-scrollbar"})])])},mounted:function(){var t,e=this;new Swiper((t=".swiper",$(e.$el).find(t).get(0)),{parallax:!0,freeMode:!0,direction:"horizontal"})}}),Vue.component("a-slider-common2",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticClass:"swiper-slide"},[_c("div",{staticClass:"c",staticStyle:{positin:"relative","overflow-x":"scroll"}},[_t("default")],2)])},mounted:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var n,i,r,s,a,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=document.documentElement.clientHeight,(i=$(t.$el).find("img[cityimg]")).attr("height",n),r=i.attr("src")){e.next=6;break}return e.abrupt("return");case 6:return s=new Image,e.next=9,loadimg(s,r);case 9:(a=i.prev()).css("position","relative"),a.css("width",i.width()+"px"),a.css("height",i.height()+"px"),a.css("background","url(".concat(r,") top center/cover")),a.get(0).scale=s.height/i.height(),(o=$(t.$el).find(".c").get(0)).scrollTo((i.get(0).width-o.clientWidth)/2,0),i.css("display","none");case 18:case"end":return e.stop()}}),e)})))()},methods:{}}),Vue.component("a-city-invite",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticStyle:{position:"absolute",bottom:"2%"}},[_c("img",{staticStyle:{width:"150px",height:"auto"},attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-city/BTN-guider.gif"},on:{click:function(t){return $root.scan()}}})])},mounted:function(){var t=$(this.$el).find("img"),e=$(window).width()-t.width();$(this.$el).css("left",e/2+"px")}}),Vue.component("a-city-xa",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-slider-common2",[_c("a-city-topbar",{attrs:{z:"1"}}),_v(" "),_c("div",{on:{click:function(t){return $parent.clickimg("xa",t)}}}),_v(" "),_c("img",{attrs:{cityimg:"xa","data-swiper-parallax":"-20",src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-city/H5-1-02-XiAn.jpg"}}),_v(" "),_c("div",{staticStyle:{position:"absolute",top:"25px",left:"0",width:"200px",height:"100px",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-city/HEAD-LOGO.png) top center/90% no-repeat","pointer-events":"none"}},[_c("a-center")],1),_v(" "),_c("div",{staticStyle:{position:"absolute",top:"70px",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-city/city1-logo.png) top center/100% no-repeat",left:"0",width:"200px",height:"150px","pointer-events":"none"}},[_c("a-center"),_v(" "),_c("div",{staticStyle:{"margin-top":"62px","padding-left":"132px"}},[_c("span",{staticStyle:{"font-size":"10px",color:"yellow"}},[_v(_s(t.hot))])]),_v(" "),_c("div",{staticStyle:{"margin-top":"-2px","padding-left":"98px"}},[_c("span",{staticStyle:{"font-size":"12px","font-weight":"600",color:"red"}},[_v(_s(t.hot/10))])])],1),_v(" "),_c("a-city-invite")],1)},data:function(){return{t:sts.filter((function(t){return 0==t.key.search("xa-")}))[0]}},mounted:function(){},methods:{}}),Vue.component("a-city-cq",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-slider-common2",[_c("a-city-topbar",{attrs:{z:"1"}}),_v(" "),_c("div",{on:{click:function(t){return $parent.clickimg("cq",t)}}}),_v(" "),_c("img",{attrs:{cityimg:"cq","data-swiper-parallax":"-20",src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-city/H5-1-05-Chongqing.jpg"}}),_v(" "),_c("div",{staticStyle:{position:"absolute",top:"25px",left:"0",width:"200px",height:"100px",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-city/HEAD-LOGO.png) top center/90% no-repeat","pointer-events":"none"}},[_c("a-center")],1),_v(" "),_c("div",{staticStyle:{position:"absolute",top:"70px",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-city/city2-logo.png) top center/100% no-repeat",left:"0",width:"200px",height:"200px","pointer-events":"none"}},[_c("a-center"),_v(" "),_c("div",{staticStyle:{"margin-top":"65px","padding-left":"132px"}},[_c("span",{staticStyle:{"font-size":"10px",color:"yellow"}},[_v(_s(t.hot))])]),_v(" "),_c("div",{staticStyle:{"margin-top":"-4px","padding-left":"98px"}},[_c("span",{staticStyle:{"font-size":"12px","font-weight":"600",color:"white"}},[_v(_s(t.hot/10))])])],1),_v(" "),_c("a-city-invite")],1)},data:function(){return{t:sts.filter((function(t){return 0==t.key.search("cq-")}))[0]}},mounted:function(){}}),Vue.component("a-city-hf",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-slider-common2",[_c("a-city-topbar",{attrs:{z:"1"}}),_v(" "),_c("div",{on:{click:function(t){return $parent.clickimg("hf",t)}}}),_v(" "),_c("img",{attrs:{cityimg:"hf","data-swiper-parallax":"-20",src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-city/H5-1-07-HeFei.jpg"}}),_v(" "),_c("div",{staticStyle:{position:"absolute",top:"25px",left:"0",width:"200px",height:"100px",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-city/HEAD-LOGO.png) top center/90% no-repeat","pointer-events":"none"}},[_c("a-center")],1),_v(" "),_c("div",{staticStyle:{position:"absolute",top:"70px",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-city/city3-logo.png) top  center/100% no-repeat",left:"0",width:"200px",height:"180px","pointer-events":"none"}},[_c("a-center"),_v(" "),_c("div",{staticStyle:{"margin-top":"58px","padding-left":"134px"}},[_c("span",{staticStyle:{"font-size":"10px",color:"yellow"}},[_v(_s(t.hot))])]),_v(" "),_c("div",{staticStyle:{"margin-top":"0px","padding-left":"98px"}},[_c("span",{staticStyle:{"font-size":"12px","font-weight":"600",color:"white"}},[_v(_s(t.hot/10))])])],1),_v(" "),_c("a-city-invite")],1)},data:function(){return{t:sts.filter((function(t){return 0==t.key.search("hf-")}))[0]}},mounted:function(){}}),Vue.component("a-city-full",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticStyle:{width:"100%",position:"relative"}},[_c("div",{staticClass:"swiper mySwiper"},[_c("div",{staticClass:"swiper-wrapper"},[_c("a-city-xa"),_v(" "),_c("a-city-cq"),_v(" "),_c("a-city-hf")],1),_v(" "),_c("div",{staticClass:"swiper-pagination"})])])},mounted:function(){var t,e=this,n=function(t){return $(e.$el).find(t).get(0)},i=$(window).height()+"px";$(this.$el).css("height",i),(t=".bg",$(e.$el).find(t)).css("height",i);var r={"data-reveal":"enter right and move 50px over 0.8s"};$(this.$el).find("div[style*='city/city']").attr(r),$(this.$el).find("div[style*='LOGO']").attr(r),new scrollReveal({elem:this.$el});new SwiperAnimation;var s=new Swiper(n(".swiper"),{direction:"vertical",speed:500,autoHeight:!0,pagination:{el:n(".swiper-pagination")},on:{slideChange:function(){_reveal._scrollPage()}}});s.mousewheel.enable();document.head.append($("<style>".concat(".swiper {\n      width: 100%;\n      height: 100%;\n    }","</style>")).get(0));s.slideTo({xa:0,cq:1,hf:2}[key.substring(0,2)],0)},methods:{clickimg:function(t,e){var n=this;return _asyncToGenerator(regeneratorRuntime.mark((function i(){var r,s,a,o,c;return regeneratorRuntime.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(r=e.target,s=e.offsetX*r.scale,a=e.offsetY*r.scale,o=n.$root.get_product(t,s,a)){i.next=6;break}return i.abrupt("return");case 6:(c=show_dlg($('<a-pop-viewproduct tag="'.concat(t,'" />')))).st=o[1],c.s=o[0],fetch("clickev!查看产品~".concat(t,"~").concat(c.s[0])),c.refresh();case 11:case"end":return i.stop()}}),i)})))()}}}),Vue.component("a-modal",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticClass:"modal",attrs:{tabindex:"-1"}},[_c("div",{staticClass:"modal-dialog modal-dialog-centered"},[_c("div",{staticClass:"modal-content",staticStyle:{"background-color":"#00000000",border:"0"}},[_t("default")],2)])])}}),Vue.component("a-pop-prebuyinfo",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{h100:"",alpha:""}},[_c("div",{staticClass:"row mx-0",staticStyle:{position:"relative"}},[_c("div",{staticClass:"col-md mx-auto px-0 mt-4",staticStyle:{background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-03-UI-APPT/Popup-APPT.png) top left /100%",width:"334px",height:"550px"}},[_c("div",{staticClass:"row",staticStyle:{"padding-top":"8%"}},[_c("div",{staticClass:"col-10 mx-auto px-0",staticStyle:{height:"40px"}},[_c("a-city-topbar")],1)]),_v(" "),_c("div",{staticClass:"row mx-0",staticStyle:{"margin-top":"140px"}},[_c("div",{staticClass:"input1 col-12"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:info.name,expression:"info.name"}],staticStyle:{border:"0","background-color":"#00000000",width:"137px","margin-left":"132px","margin-top":"11px"},domProps:{value:info.name},on:{input:function(t){t.target.composing||$set(info,"name",t.target.value)}}})]),_v(" "),_c("div",{staticClass:"input2 col-12"},[_c("input",{directives:[{name:"model",rawName:"v-model",value:info.mobile,expression:"info.mobile"}],staticStyle:{border:"0","background-color":"#00000000",width:"137px","margin-left":"132px","margin-top":"11px"},domProps:{value:info.mobile},on:{input:function(t){t.target.composing||$set(info,"mobile",t.target.value)}}})])]),_v(" "),_c("div",{staticClass:"row mx-0",staticStyle:{position:"absolute",bottom:"20px",left:"3px",width:"100%"}},[_c("div",{staticClass:"col-12",on:{click:submit}},[_c("div",{staticStyle:{height:"50px",width:"100%",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-03-UI-APPT/BTN-APPT.png) top center/80% no-repeat"}})])])])])])},data:function(){return{info:{name:"",mobile:"",want:!0}}},mounted:function(){$("body").append($("<style>".concat("\n      .input1{ height:55px;\n        background:url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-03-UI-APPT/APPT-NAME.png) top center /70% no-repeat;\n      }\n      .input2{ height:55px; margin-top:15px;\n        background:url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-03-UI-APPT/APPT-PHONE.png) top center /70% no-repeat;\n      }\n    ","</style>")))},methods:{submit:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,post("prebuy_book_do",t.info);case 2:if(200==(n=e.sent).status){e.next=5;break}return e.abrupt("return",alert("prebuy_book_do 失败"));case 5:if(!(i=n.json()).err){e.next=8;break}return e.abrupt("return",alert(i.err));case 8:show_dlg($("<a-pop-prebuydone />"));case 9:case"end":return e.stop()}}),e)})))()}}}),Vue.component("a-pop-prebuydone",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{h100:"",alpha:""}},[_c("div",{staticClass:"h-25 close-modal"}),_v(" "),_c("div",{staticClass:"row close-modal",staticStyle:{position:"relative"}},[_c("div",{staticClass:"col-auto mx-auto px-0",staticStyle:{background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-04-UI-APPT-succ/Popup-APPT-succ.png) top left/100%"}},[_c("div",{staticStyle:{width:"337px",height:"264px"}})])])])},mounted:function(){},methods:{close:function(){location.href="prebuygift"}}}),Vue.component("a-pop-modal",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticClass:"mx-auto _anim",staticStyle:{width:"300px"}},[_c("div",{staticClass:"close-modal"}),_v(" "),_c("div",{ref:"modalbg",staticClass:"modal-content  animate__fadeIn mx-auto",staticStyle:{border:"0",position:"relative","animation-duration":"1s","background-color":"rgba(0, 0, 0, 0)"},on:{click:clickbg}},[_t("default")],2)])},mounted:function(){this.$attrs.hasOwnProperty("alpha")&&$(this.$el).find(".modal-content").css("background-color","rgba(0, 0, 0, 0.9)"),this.$attrs.hasOwnProperty("h100")&&$(this.$el).find(".modal-content").css("height","100%")},methods:{clickbg:function(t){t.target==this.$refs.modalbg&&$(this.$el).find(".close-modal").click()}}}),Vue.component("a-center",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div")},mounted:function(){var t=$(this.$el).parent().get(0).scrollWidth,e=document.documentElement.clientWidth;$(this.$el).parent().css("left",(e-t)/2+"px")}}),Vue.component("a-bgsize",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div")}}),Vue.component("a-loadbg",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{attrs:{aa:""}},[_v("1111\r\n  ")])},props:["bgurl","src"],mounted:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){var n,i,r,s,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=$(t.$el).parent(),i=new Image,r=t.bgurl||t.src,e.next=5,loadimg(i,r);case 5:s=333,t.src&&(s=Math.min(t.$el.parentNode.scrollWidth)),t.$attrs.hasOwnProperty("w100")&&(s=$(window).width()),n.css("width",s+"px"),a=s*i.height/i.width,n.css("height",a+"px"),n.css("background","url(".concat(r,") top left/100% no-repeat")),n.attr("data-reveal")&&_reveal.bank_style(n.get(0),{add:"height:".concat(n.css("height"),"; background:").concat(n.css("background"))}),t.$destroy(),t.$el.remove();case 15:case"end":return e.stop()}}),e)})))()}}),Vue.component("a-rotate",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div")},mounted:function(){$(this.$el).parent().addClass("rotate_anim");$("head").append($("<style>".concat("\n    @keyframes rotate_keys{\n      0%{\n        transform: rotate(0);\n        }\n      50%{\n        transform:rotate(200deg);\n      }\n      100%{\n         transform: rotate(1);\n        }\n      }\n      .rotate_anim{\n          transition: 0.5s;\n          transform-origin: 50% 50%;\n          animation: rotate_keys 10s linear infinite;  /*开始动画后无限循环，用来控制rotate*/\n      }","</style>"))),this.$destroy()}}),Vue.component("a-pop-storesign-done",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{alpha:"",h100:""}},[_c("div",{staticStyle:{width:"330px",height:"600px","z-index":"0"}},[_c("div",{staticStyle:{width:"100%",position:"absolute",top:"0",left:"0"}},[_c("img",{staticClass:"w-100",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-04-UI-SUCC/shine-roller.png"}}),_v(" "),_c("a-rotate")],1),_v(" "),_c("div",{staticStyle:{width:"330px",height:"600px","z-index":"1",position:"absolute",top:"10%",background:"url(https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-04-UI-SUCC/Popup-succ.png) top center/330px auto no-repeat"}},[_c("a-center"),_v(" "),_c("div",{staticClass:"row mx-auto text-center",staticStyle:{"margin-top":"185px"}},[_c("div",{staticClass:"col"},[_c("img",{attrs:{width:"110px",src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-04-UI-SUCC/Popup-BTN-share.png"},on:{click:to_share}})]),_v(" "),_c("div",{staticClass:"col"},[_c("img",{staticClass:"close-modal",attrs:{width:"110px",src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-04-UI-SUCC/Popup-BTN-back.png"}})])]),_v(" "),_c("div",{staticClass:"row mx-0 text-center",staticStyle:{"margin-top":"185px"}},[_c("div",{staticClass:"col"},[_c("img",{ref:"tk",attrs:{title:"已复制抖音口令",width:"180px",src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-04-UI-SUCC/BTN-tiktok.png"},on:{click:to_tictok}})])])],1)])])},mounted:function(){},methods:{to_tictok:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("clickev!快闪签到完抖音"),click_copy_tiktok(t.$refs.tk);case 2:case"end":return e.stop()}}),e)})))()},to_share:function(){fetch("clickev!快闪签到完分享"),show_dlg($("<a-share-tip />"))}}}),Vue.component("a-pop-viewproduct",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{alpha:"",h100:""}},[_c("div",{staticClass:"w-100 position-relative"},[_c("a-loadbg",{attrs:{src:bgurl}}),_v(" "),_c("div",{staticClass:"close-modal",staticStyle:{position:"absolute",right:"8%",top:"5%"}},[_c("img",{attrs:{width:"30",src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-UI-Popup/closer-1.png"}})]),_v(" "),producturl?_c("div",{staticClass:"noclick",staticStyle:{height:"66%"}},[_c("div",{staticClass:"row mx-0 noclick",staticStyle:{"padding-top":"19%",height:"100%"}},[_c("div",{staticClass:"col-8 mx-auto product",staticStyle:{height:"100%"}})]),_v(" "),_c("div",{staticClass:"row mx-0",staticStyle:{"margin-top":"13%"}},[_c("div",{staticClass:"col-11 mx-auto text-center font-weight-bold",staticStyle:{color:"white"}},[_v("\r\n              "+_s(s[1])+"\r\n            ")])]),_v(" "),_c("div",{staticClass:"row mx-0 text-center color:white ",staticStyle:{color:"white","margin-top":"3%","font-size":"13px"}},[_c("div",{staticClass:"col-11 mx-auto"},[_v("\r\n              "+_s(s[2])+"\r\n            ")]),_v(" "),_c("div",{staticClass:"col-8 mx-auto mt-1",staticStyle:{"font-size":"11px"}},[_v("\r\n              "+_s(s[3])+"\r\n            ")])])]):_e()],1)])},props:["tag"],data:function(){var t="https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-UI-Popup/city1-popup.png";return"cq"==this.tag&&(t=t.replace("city1","city2")),"hf"==this.tag&&(t=t.replace("city1","city3")),{bgurl:t,s:[],st:{},producturl:null}},mounted:function(){},methods:{refresh:function(){var t=this;return _asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.producturl="https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/".concat(t.st.name,"/").concat(t.s[0],".png"),e.next=3,t.$nextTick();case 3:$(t.$el).find("div.product").css("background","url(".concat(t.producturl,") top center / contain no-repeat"));case 4:case"end":return e.stop()}}),e)})))()}}}),Vue.component("a-city-topbar",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticStyle:{position:"absolute",width:"100%"}},[_c("div",{staticClass:"row mx-0"},[_c("div",{staticClass:"col-auto"},[_c("img",{staticStyle:{height:"30px",width:"auto"},attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-city/BTN-Back.png"},on:{click:home}})]),_v(" "),_c("div",{staticClass:"col-auto ml-auto"},[_c("img",{staticStyle:{height:"30px",width:"auto"},attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-1-city/BTN-Share.png"},on:{click:share}})])])])},props:["z"],mounted:function(){this.$attrs.hasOwnProperty("relative")&&(this.$el.style.position=""),this.z&&$(this.$el).css("z-index",this.z)},methods:{home:function(){fetch("clickev!top返回点击"),location.href.search(/prebuy/)>-1?location.href="prebuykv":location.href="quickkv"},share:function(){fetch("clickev!top分享点击"),show_dlg($("<a-share-tip />"))}}}),Vue.component("a-share-tip",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{alpha:"",h100:""}},[_c("div",{staticClass:"text-center"},[_c("img",{staticClass:"mx-auto",staticStyle:{width:"333px"},attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-06-UI-Tik-Share/Popup-share.png"}}),_v(" "),_c("img",{staticClass:"close-modal",staticStyle:{width:"200px","margin-top":"50px"},attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-06-UI-Tik-Share/BTN-done.png"}})])])},mounted:function(){return _asyncToGenerator(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(location.href.search(/prebuy/)>-1)){t.next=10;break}return t.next=3,fetch("prebuy_share");case 3:if(200==(e=t.sent).status){t.next=6;break}return t.abrupt("return",alert("prebuy_share 失败"));case 6:return t.next=8,e.json();case 8:n=t.sent,window.user&&(user.inviten=n.inviten);case 10:case"end":return t.stop()}}),t)})))()}}),Vue.component("a-get-gift",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{alpha:"",h100:""}},[_c("div",{staticClass:"h-25 close-modal"}),_v(" "),_c("div",{staticClass:"text-center"},[_c("img",{staticClass:"w-75",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-05-UI-Tik-none/BTN-APPT-tic.png"},on:{click:pre}}),_v(" "),_c("img",{staticClass:"w-75",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-05-UI-Tik-none/BTN-sign-Tic.png"},on:{click:scan}}),_v(" "),_c("img",{staticClass:"w-75",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-05-UI-Tik-none/BTN-SHARE.png"},on:{click:share}})]),_v(" "),_c("div",{staticClass:"h-25 close-modal"})])},methods:{share:function(){fetch("clickev!如何获取奖券分享"),show_dlg($("<a-share-tip />"))},pre:function(){return _asyncToGenerator(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("clickev!如何获取奖券预约");case 2:location.href="prebuy_book";case 3:case"end":return t.stop()}}),t)})))()},scan:function(){fetch("clickev!如何获取奖券扫码"),xx.scanQRCode({needResult:0,scanType:["qrCode","barCode"]})}}}),Vue.component("a-gift",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("div",{staticStyle:{position:"relative"}},[g?null==store.gift_at?_c("div",{attrs:{wait:""},on:{click:function(t){return pop("https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-07-UI-Tik/tic-wait.png")}}},[_c("a-loadbg",{attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-07-UI-Tik/tic-thumb-wait.png"}})],1):g.win?g.win?_c("div",{attrs:{win:""},on:{click:function(t){return pop("https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-07-UI-Tik/tic-win.png")}}},[_c("a-loadbg",{attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-07-UI-Tik/tic-thumb-win.png"}})],1):_e():_c("div",{attrs:{lose:""},on:{click:function(t){return pop("https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-07-UI-Tik/tic-lose.png")}}},[_c("a-loadbg",{attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-07-UI-Tik/tic-thumb-lose.png"}})],1):_c("div",{attrs:{add:""},on:{click:$root.get_gift}},[_c("a-loadbg",{attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-07-UI-Tik/tic-thumb-last.png"}})],1),_v(" "),g?_c("div",{staticClass:"text-font-bold",staticStyle:{position:"absolute","font-size":"12px",left:"50%",bottom:"32%",color:"yellow"}},[_v("\r\n        "+_s(g.key)+"\r\n      ")]):_e()])},props:["g"],data:function(){return{store:store}},methods:{pop:function(t){show_dlg($("<a-gift-pop />"),{src:t})}}}),Vue.component("a-gift-pop",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{alpha:"",h100:""}},[_c("div",{staticClass:"h-25 close-modal"}),_v(" "),_c("div",{staticClass:"text-center"},[_c("img",{staticClass:"w-75",attrs:{src:src}}),_v(" "),_c("img",{staticClass:"w-25 mt-2 close-modal",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-07-UI-Tik/tic-BTN-back.png"}})])])},data:function(){return this.$root.$data}}),Vue.component("a-signgift-done",{template:null,_compiled:!0,staticRenderFns:[],render:function render(){with(this)return _c("a-pop-modal",{attrs:{alpha:"",h100:""}},[_c("div",{staticClass:"h-25 close-modal"}),_v(" "),_c("div",{staticClass:"text-center"},[_c("img",{staticClass:"w-75",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-02-UI-succ/Popup-sign-succ.png"}}),_v(" "),_c("div",{staticStyle:{"margin-top":"-18%"}},[_c("img",{staticClass:"w-25 mt-2 close-modal",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-02-UI-succ/Popup-BTN-back.png"}}),_v(" "),_c("img",{staticClass:"w-25 mt-2 ",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-02-UI-succ/Popup-BTN-MYTIC.png"},on:{click:togift}})]),_v(" "),_c("div",{staticStyle:{"margin-top":"15%"}},[_c("img",{staticClass:"w-50",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-02-UI-succ/BTN-APPT.png"},on:{click:tobook}})]),_v(" "),_c("div",{staticStyle:{"margin-top":"0%"}},[_v("1\r\n        "),_c("img",{staticClass:"w-50",attrs:{src:"https://cdn.jsdelivr.net/gh/xkou/v-nextjs@v0.13/assets/H5-2-02-UI-succ/BTN-tiktok.png"},on:{click:to_tiktok}})])])])},data:function(){return{}},methods:{togift:function(){fetch("clickev!内购签到查看奖券"),location.href="prebuygift"},tobook:function(){fetch("clickev!内购签到预约"),location.href="prebuy_book"},to_tiktok:function(t){fetch("clickev!内购签到抖音"),click_copy_tiktok(t.target)}}});
