(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28b8a452"],{1012:function(t,e,s){},1643:function(t,e,s){"use strict";var a=s("a9b1"),i=s.n(a);i.a},2498:function(t,e,s){},"2a6d":function(t,e,s){"use strict";var a=s("1012"),i=s.n(a);i.a},"324b":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message-box"},[s("transition",{attrs:{name:"scale"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isMessageBoxShow,expression:"isMessageBoxShow"}],staticClass:"message"},[t._v(" "+t._s(t.msg)+" ")])])],1)},i=[],o={props:["msg"],data:function(){return{isMessageBoxShow:!1}},methods:{show:function(){var t=this;this.timer&&clearTimeout(this.timer),this.isMessageBoxShow=!0,this.timer=setTimeout((function(){t.isMessageBoxShow=!1}),2e3)},hidden:function(){this.isMessageBoxShow=!1}}},r=o,n=(s("a8a4"),s("2877")),c=Object(n["a"])(r,a,i,!1,null,"40253ff7",null);e["a"]=c.exports},"33f3":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADIWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMTQgNzkuMTUxNDgxLCAyMDEzLzAzLzEzLTEyOjA5OjE1ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVGRDI2NkI1RDI1RDExRUE4RjEzQjk3RDVBODgxMzVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVGRDI2NkI2RDI1RDExRUE4RjEzQjk3RDVBODgxMzVDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUZEMjY2QjNEMjVEMTFFQThGMTNCOTdENUE4ODEzNUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUZEMjY2QjREMjVEMTFFQThGMTNCOTdENUE4ODEzNUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz53PFCLAAABu0lEQVRIS7WWjW6CMBSFL6CCExAUddv7P9qSLdnEmUgBQVxvbRdTWmwT+ZKmrYme9v6c6lwpYMH3PgdSVrCMI0josMHlsxFdd4Wyqtm6ICWbbbASK6sSRCDatoVz07C1KVZiBan46obt7YzFuq6Dqr6FUEDKkcSegbEYVqBcuG17gfp85rvHGIvp8kMs8ubiaTEfQwMrT86XoKA3Vn1HHqjjfHx+XTEcY+N5HrhRGPLteHieC+s0AWZXmOSf/MAS/mwC34dslTLBf2/EuO4PR+veGQK9Ez1U0DPiU0Eg/z32ytwGzA/eJvBn/JMbStdvmha+85zNtswDH9YYNrffVdonBj/GPGIzmxJHIaTLmO/6aJvacRywDaTDZx1aMSyYir9dpjx6BYzt6hloxfCUmnRqaS/UmGu9MevFBvpNLul7ToTwVR+lGHs6FCfE/tlt1nRkrI9cWkQyqqdIoBQrFKebBwG87zbMfpDFyxze6H42m7K9YKiw1GJ3IcQWWCVL2GYrcKVGnUwm8EpvGUtmftJUZU8M/zEJ55jij20ziMIF26vAw6RJzA4jXKOs6BunCKXWQcZAGcZxAPgDyrMRGZNBC10AAAAASUVORK5CYII="},3753:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"book-detail"},[s("div",{staticClass:"content"},[s("scroll",{on:{onScroll:t.onScroll}},[s("div",{staticClass:"content-wrap"},[s("div",{staticClass:"bg-img"},[s("img",{attrs:{src:t.coverPath,alt:""}})]),s("div",{staticClass:"book-detail-wrap"},[s("div",{staticClass:"book-info"},[s("div",{staticClass:"left"},[s("img",{attrs:{src:t.coverPath,alt:""}})]),s("div",{staticClass:"right"},[s("div",{staticClass:"title"},[t._v(t._s(t.bookInfo.title))]),s("div",{staticClass:"author"},[t._v(" "+t._s(t.bookInfo.author)+" | "+t._s(t.bookInfo.cat)+" ")]),s("div",{staticClass:"words-count"},[t._v(t._s(t._f("unitToWan")(t.bookInfo.wordCount))+"万字")])])]),s("div",{staticClass:"score-wrap"},[s("div",{staticClass:"star-wrap item"},[s("div",{staticClass:"top"},[s("span",{staticClass:"bold"},[t._v(t._s(t._f("format1")(t.score)))]),s("span",[t._v("分")])]),s("div",{staticClass:"bottom"},t._l(t.starObjArr,(function(t,e){return s("span",{key:e,style:t.style})})),0)]),s("div",{staticClass:"lately-follower item"},[s("div",{staticClass:"top"},[s("span",{staticClass:"bold"},[t._v(t._s(t._f("unitToWan")(t.bookInfo.latelyFollower)))]),s("span",[t._v("万")])]),s("div",{staticClass:"bottom"},[t._v("7日人气")])]),s("div",{staticClass:"total-follower item"},[s("div",{staticClass:"top"},[s("span",{staticClass:"bold"},[t._v(t._s(t._f("unitToWan")(t.bookInfo.totalFollower)))]),s("span",[t._v("万")])]),s("div",{staticClass:"bottom"},[t._v("累计人气")])])]),s("div",{staticClass:"book-intro"},[s("div",{staticClass:"intro-wrap",class:{fold:t.isFold}},[s("div",{staticClass:"text"},[t._v(t._s(t.bookInfo.longIntro))]),t.isFold?s("div",{staticClass:"fold-text",on:{click:function(e){t.isFold=!1}}},[t._v("展开")]):t._e()]),s("div",{staticClass:"last-chapter"},[s("div",{staticClass:"left"},[t._v("目录")]),s("div",{staticClass:"right",on:{click:t.showChapterCatelogue}},[s("div",{staticClass:"update"},[t._v(t._s(t.updated))]),s("div",{staticClass:"chapter"},[t._v(t._s(t.bookInfo.lastChapter))]),s("span",{staticClass:"icon-forward"})])])]),s("div",{staticClass:"short-review"},[s("short-review",{attrs:{reviewsObj:t.reviewsObj},on:{"show-all-reviews":t.allReviewsShow}})],1),s("div",{staticClass:"copyright"},[s("div",{staticClass:"title"},[t._v("图书信息")]),s("div",{staticClass:"content"},[t._v(t._s(t.bookInfo.copyrightInfo))])])])])])],1),s("div",{staticClass:"title-bar",class:{"bg-transparent":t.isTransparent}},[s("div",{staticClass:"left"},[s("span",{staticClass:"icon-back",on:{click:t.back}}),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.isTransparent,expression:"!isTransparent"}],staticClass:"book-title"},[t._v(t._s(t.bookInfo.title))])]),s("div",{staticClass:"right"},[s("div",{staticClass:"heart-wrap",on:{click:t.toggleHeart}},[t.isHeartFull?s("span",{staticClass:"icon-heart-full"}):s("span",{staticClass:"icon-heart"})]),s("span",{staticClass:"icon-more"})])]),s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoaded,expression:"!isLoaded"}],staticClass:"loading-wrap"},[s("div",{staticClass:"loading"},[s("load-animate")],1),s("div",{staticClass:"text"},[t._v("加载中...")])]),s("div",{staticClass:"footer"},[s("div",{staticClass:"add",class:{added:t.isAddToBookShelf},on:{click:t.addToBookShelf}},[s("div",{staticClass:"icon-wrap"},[s("span",{class:[t.isAddToBookShelf?"icon-check":"icon-add"]})]),s("span",[t._v(t._s(t.isAddToBookShelf?"已加入":"加入书架"))])]),s("div",{staticClass:"read",on:{click:t.goReader}},[s("span",{staticClass:"icon-book"}),s("span",[t._v("免费阅读")])]),t._m(0)]),s("message-box",{ref:"messageBox",attrs:{msg:t.msg}}),s("transition",{attrs:{name:"slide-left"}},[s("all-reviews",{directives:[{name:"show",rawName:"v-show",value:t.isAllReviewsShow,expression:"isAllReviewsShow"}],attrs:{reviewsObj:t.reviewsObj},on:{"all-reviews-hide":t.hideAllReviews}})],1),s("chapter-catelogue",{attrs:{chapterLink:t.chapterLink},on:{"go-bookreader":t.goBookReader}})],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"download"},[s("span",{staticClass:"icon-download"}),s("span",[t._v("下载")])])}],o=(s("45fc"),s("b680"),s("d3b7"),s("9911"),s("e700")),r=s("aada"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"review-wrap"},[s("div",{staticClass:"head"},[s("div",{staticClass:"title"},[t._v("热门短评")]),s("div",{staticClass:"more",on:{click:t.showAllReviews}},[s("span",[t._v("查看更多 "+t._s(t.totalReviews))]),s("span",{staticClass:"icon-forward"})])]),t._l(t.reviewsList,(function(e,a){return s("div",{key:a,staticClass:"review-item"},[s("div",{staticClass:"author-wrap"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:t.avatarPath(e.author.avatar),alt:""}})]),s("div",{staticClass:"nick-name"},[t._v(t._s(e.author.nickname))]),s("div",{staticClass:"author-level"},[t._v("Lv."+t._s(e.author.lv)+" ")])]),s("div",{staticClass:"content-wrap"},[s("div",{staticClass:"title"},[t._v(t._s(e.title))]),s("div",{staticClass:"content"},[t._v(t._s(e.content))])])])}))],2)},c=[],l=(s("fb6a"),{props:["reviewsObj"],data:function(){return{}},methods:{avatarPath:function(t){return"http://statics.zhuishushenqi.com/"+t},showAllReviews:function(){this.$emit("show-all-reviews")}},computed:{totalReviews:function(){return"("+this.reviewsObj.total+"条)"},reviewsList:function(){return this.reviewsObj.reviews?this.reviewsObj.reviews.slice(0,3):[]}},mounted:function(){}}),A=l,u=(s("55af"),s("2877")),d=Object(u["a"])(A,n,c,!1,null,"2f262639",null),h=d.exports;function v(t){var e=new Date(t),s=Date.now();e=e.getTime();var a=(s-e)/1e3,i=Math.floor(a/60),o=Math.floor(a/3600),r=Math.floor(a/86400);return r>0?r+"天前":o>0?o+"小时前":i>0?i+"分钟前":"刚刚"}var f=s("324b"),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"reviews"},[s("div",{staticClass:"title-bar"},[s("span",{staticClass:"icon-back",on:{click:t.back}}),s("span",{staticClass:"title"},[t._v("全部书评")])]),s("div",{staticClass:"content"},[s("scroll",[s("div",{staticClass:"reviwes"},[s("reviews-list",{attrs:{reviewsObj:t.reviewsObj}})],1)])],1)])},p=[],b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"review-wrap"},t._l(t.reviewsObj.reviews,(function(e,a){return s("div",{key:a,staticClass:"review-item"},[s("div",{staticClass:"author-wrap"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:t.avatarPath(e.author.avatar),alt:""}})]),s("div",{staticClass:"nick-name"},[t._v(t._s(e.author.nickname))]),s("div",{staticClass:"author-level"},[t._v("Lv."+t._s(e.author.lv)+" ")])]),s("div",{staticClass:"content-wrap"},[s("div",{staticClass:"title"},[t._v(t._s(e.title))]),s("div",{staticClass:"content"},[t._v(t._s(e.content))])])])})),0)},m=[],g={props:["reviewsObj"],data:function(){return{}},methods:{avatarPath:function(t){return"http://statics.zhuishushenqi.com/"+t}}},C=g,k=(s("f508"),Object(u["a"])(C,b,m,!1,null,"61a17132",null)),I=k.exports,E={props:["reviewsObj"],components:{scroll:r["a"],reviewsList:I},methods:{back:function(){this.$emit("all-reviews-hide")}}},R=E,B=(s("2a6d"),Object(u["a"])(R,w,p,!1,null,"68846eb7",null)),M=B.exports,D=s("f988"),x=s("e8ec"),S=s("ac0d"),Q={mixins:[S["a"]],data:function(){return{isLoaded:!1,isTransparent:!1,score:"",bookInfo:"",coverPath:"",starObjArr:[],isFold:!0,updated:"",reviewsObj:"",isHeartFull:"",msg:"",isAllReviewsShow:!1,chapterLink:"",isAddToBookShelf:!1}},methods:{addToBookShelf:function(){if(this.isAddToBookShelf)return this.msg="已加入书架",this.$refs.messageBox.show(),!1;this.isAddToBookShelf=!0,Object(x["j"])({bookId:this.bookInfo._id,cover:this.bookInfo.cover,title:this.bookInfo.title,isSelected:!1})},goReader:function(){this.chapterLink||(this.chapterLink=this.chapterList[0].link,Object(x["k"])(this.$route.params.bookId,this.chapterLink)),this.$router.push("/bookreader/"+this.$route.params.bookId)},goBookReader:function(t){Object(x["k"])(this.$route.params.bookId,t),this.$router.push("/bookreader/"+this.$route.params.bookId)},showChapterCatelogue:function(){this.setIsChapterCatelogueShow(!0)},allReviewsShow:function(){this.isAllReviewsShow=!0},hideAllReviews:function(){this.isAllReviewsShow=!1},toggleHeart:function(){this.$refs.messageBox.hidden(),this.isHeartFull?(this.msg="已从想读清单中移除",this.$refs.messageBox.show(),Object(x["b"])(this.$route.params.bookId)):(this.msg="已标记为想读",this.$refs.messageBox.show(),Object(x["m"])(this.$route.params.bookId)),this.isHeartFull=!this.isHeartFull},onScroll:function(t){t.target.scrollTop>0?this.isTransparent=!1:this.isTransparent=!0},back:function(){window.history.length<=1?this.$router.push("/bookstore"):this.$router.go(-1)},getBookDetail:function(){var t=this;return new Promise((function(e,s){t.$http.get("/api/book/"+t.$route.params.bookId).then((function(t){200===t.status&&e(t.data)}))}))},getShortReview:function(){var t=this;return new Promise((function(e){t.$http.get("/api/post/review/by-book",{params:{book:t.$route.params.bookId,sort:"comment-count",start:0}}).then((function(t){200===t.status&&e(t.data)}))}))},getBookDetailInit:function(){var t=this;this.getBookDetail().then((function(e){t.isLoaded=!0,t.isTransparent=!0,t.bookInfo=e,t.coverPath=t.urlDecode(e.cover.substr(7)),t.score=e.rating.score,t.setStarObj(),t.updated=v(t.bookInfo.updated);var s=Object(x["c"])();s&&(t.isAddToBookShelf=s.some((function(e){return e.bookId===t.bookInfo._id})))})),this.getShortReview().then((function(e){t.reviewsObj=e}));var e=Object(x["g"])();e&&(this.isHeartFull=e.some((function(e){return e===t.$route.params.bookId}))),this.chapterLink=Object(x["d"])()[this.$route.params.bookId]},setStarObj:function(){for(var t=Math.floor(this.bookInfo.rating.score/2),e=this.bookInfo.rating.score%2>.5?1:0,a=5-t-e,i=0;i<t;i++)this.starObjArr.push({style:{"background-image":"url("+s("af1f")+")"}});0!==e&&this.starObjArr.push({style:{backgroundImage:"url("+s("b1c0")+")"}}),0!==a&&this.starObjArr.push({style:{"background-image":"url("+s("33f3")+")"}})}},filters:{unitToWan:function(t){return t/=1e4,t.toFixed(1)},format1:function(t){return isNaN(t)||void 0===t||null===t?null:Math.round(10*t)/10}},computed:{},components:{loadAnimate:o["a"],scroll:r["a"],shortReview:h,messageBox:f["a"],allReviews:M,chapterCatelogue:D["a"]},created:function(){},mounted:function(){this.getBookDetailInit()}},O=Q,j=(s("8baf"),Object(u["a"])(O,a,i,!1,null,"98a54f34",null));e["default"]=j.exports},"45fc":function(t,e,s){"use strict";var a=s("23e7"),i=s("b727").some,o=s("a640"),r=s("ae40"),n=o("some"),c=r("some");a({target:"Array",proto:!0,forced:!n||!c},{some:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"55af":function(t,e,s){"use strict";var a=s("c852"),i=s.n(a);i.a},"857a":function(t,e,s){var a=s("1d80"),i=/"/g;t.exports=function(t,e,s,o){var r=String(a(t)),n="<"+e;return""!==s&&(n+=" "+s+'="'+String(o).replace(i,"&quot;")+'"'),n+">"+r+"</"+e+">"}},"8baf":function(t,e,s){"use strict";var a=s("c023"),i=s.n(a);i.a},9911:function(t,e,s){"use strict";var a=s("23e7"),i=s("857a"),o=s("af03");a({target:"String",proto:!0,forced:o("link")},{link:function(t){return i(this,"a","href",t)}})},a8a4:function(t,e,s){"use strict";var a=s("2498"),i=s.n(a);i.a},a9b1:function(t,e,s){},af03:function(t,e,s){var a=s("d039");t.exports=function(t){return a((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},af1f:function(t,e){t.exports="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/4QMqaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUZEMDZBNTZEMjVEMTFFQThGMTNCOTdENUE4ODEzNUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUZEMDZBNTdEMjVEMTFFQThGMTNCOTdENUE4ODEzNUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRkQwNkE1NEQyNUQxMUVBOEYxM0I5N0Q1QTg4MTM1QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRkQwNkE1NUQyNUQxMUVBOEYxM0I5N0Q1QTg4MTM1QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv/uAA5BZG9iZQBkwAAAAAH/2wCEAAYEBAQFBAYFBQYJBgUGCQsIBgYICwwKCgsKCgwQDAwMDAwMEAwODxAPDgwTExQUExMcGxsbHB8fHx8fHx8fHx8BBwcHDQwNGBAQGBoVERUaHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fH//AABEIABsAGwMBEQACEQEDEQH/xACOAAEBAAMBAAAAAAAAAAAAAAAGBAEDBQgBAAICAwAAAAAAAAAAAAAAAAMFBAYAAQIQAAECBAIHAg8AAAAAAAAAAAECAwAREgQhBTFBkTITMwZRNGGBsSJSYnKSosIjQxQVFhEAAQIDBQYGAwAAAAAAAAAAAQACETEDUcEyBAXwIUFhcRKx4SJCglMTFBX/2gAMAwEAAhEDEQA/APVMYsQ/q3PF2ud2KGyabQh10DXWZU+55YQ6lmyyswD27zt08U903KB9F5Pu3Dbr4JehSVpC0maVAFJGsGHoMREJGRAwKzG1pDOocnz+zrubK+uXrXFSkcVZWgbcRFfz2Vr04uY5xb1MQrBks1Qqel7Wh3QQKIPPPPOFx5anHFby1kqUZYYkwic4uMSYlPGtDRACAXXyVnqPMnAzaXT6GG5JU5xFhCANAwOwCJ2UbmKpg1zoDmYBQc27L0hFzWxPIRKX/wA0/TL9pdz4VFXEXPiVTr3vFTD3+efsfK0zt8ki/fH1snYJWea2dWX/AOHkj1Jk6/8ARb7Zr0/DOO9Srfjom125c6bR76wsG9Fcu6IzK6tFPuqFssibLSwZn2vRhLQ0io9vcfTYNpJzX1emx3aPVadpq3o5V1lubv5XeILSnk1ISdakY+adYKZ7IkaWXUqppvEI3IGqBtWkKjDGF6axYVXlJf79ryOcOfp0HlevAK024Z8buaPRk7FLhfyVcHQFJc9/tO76V83nbv2fm8EAqY24eM5/G9Hp4HYuEpfK5VwdAX//2Q=="},b1c0:function(t,e){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAEAAAAAAAD/7AARRHVja3kAAQAEAAAAPAAA/+EDO2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4NCjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4NCgk8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPg0KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVGRDI2NkFERDI1RDExRUE4RjEzQjk3RDVBODgxMzVDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVGRDI2NkFFRDI1RDExRUE4RjEzQjk3RDVBODgxMzVDIj4NCgkJCTx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGRDA2QTVDRDI1RDExRUE4RjEzQjk3RDVBODgxMzVDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVGRDA2QTVERDI1RDExRUE4RjEzQjk3RDVBODgxMzVDIi8+DQoJCTwvcmRmOkRlc2NyaXB0aW9uPg0KCTwvcmRmOlJERj4NCjwveDp4bXBtZXRhPg0KPD94cGFja2V0IGVuZD0ndyc/Pv/bAEMAAgEBAgEBAgICAgICAgIDBQMDAwMDBgQEAwUHBgcHBwYHBwgJCwkICAoIBwcKDQoKCwwMDAwHCQ4PDQwOCwwMDP/bAEMBAgICAwMDBgMDBgwIBwgMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIABsAGwMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AP373qe4/OvIPHnxPa3+PWn6RDMzRaTpsl1cKrcM8kkQUH3Cg8Hs1ef/AB/+EXj7wFJcax4e8UeKNS0cZeSAajM09kOpPDfOgx25rzz9nDWrzX/ijqF5e3dzd3UmnvvmnkMjn54wPmOTX5xiuLsRLNaGU1aEqUpTV22mnFXelt02v87bH6FheE6CyutmtOvGrGMHZJNNSdlqns0m/wBNNT7hWRXUFWVgwyCD1FOryrw5b6x4gfyba6vI4IfldjM3lxew55rvbTwmYLdVfUNSkZRyxuGG4+vWv0h6H53c4f8Aax8ct4G+C+peS3+l6pjT4FB5zIMMQPZA1eV/swfsy6/pj3Wu6t/xLvtlqYbe1lQ+a2Sp3P8A3V+X7vWvpq/0Ky1V7drq0t7hrWTzYTLGHMT8jcueh5PIqyFA/lXy2I4bjic3hmlebappKEVpZ63b73vt5H02H4ilhsonldCCXtG3OT1bWlku22/mcF8Nnm8PeIbjTbpfJMwyqkcMR3B79676o5LOKWZJGjVpI/uMR8y9uD+NSV9S3d3Pmlof/9k="},c023:function(t,e,s){},c852:function(t,e,s){},c975:function(t,e,s){"use strict";var a=s("23e7"),i=s("4d64").indexOf,o=s("a640"),r=s("ae40"),n=[].indexOf,c=!!n&&1/[1].indexOf(1,-0)<0,l=o("indexOf"),A=r("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:c||!l||!A},{indexOf:function(t){return c?n.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},e4bc:function(t,e,s){},e8ec:function(t,e,s){"use strict";s.d(e,"h",(function(){return c})),s.d(e,"l",(function(){return l})),s.d(e,"f",(function(){return A})),s.d(e,"m",(function(){return u})),s.d(e,"g",(function(){return d})),s.d(e,"b",(function(){return h})),s.d(e,"k",(function(){return v})),s.d(e,"d",(function(){return f})),s.d(e,"i",(function(){return w})),s.d(e,"e",(function(){return p})),s.d(e,"j",(function(){return b})),s.d(e,"c",(function(){return m})),s.d(e,"a",(function(){return g}));s("4de4"),s("c975");var a=s("84f1"),i=s.n(a),o=new i.a;function r(t,e){return o.set(t,e)}function n(t){return o.get(t)}function c(t){return o.delete(t)}function l(t){var e=n("search-history");if(e){var s=e.indexOf(t);if(-1!==s)return!1}else e=[];return e.push(t),r("search-history",e)}function A(){return n("search-history")}function u(t){var e=n("want-read-list");if(e){var s=e.indexOf(t);if(-1!==s)return!1}else e=[];return e.push(t),r("want-read-list",e)}function d(){return n("want-read-list")}function h(t){var e=n("want-read-list"),s=e.filter((function(e){return e!==t}));return r("want-read-list",s)}function v(t,e){var s=n("chapter-link");return s||(s={}),s[t]=e,r("chapter-link",s)}function f(){return n("chapter-link")}function w(t,e){var s=n("reader-setting");return s||(s={}),s[t]=e,r("reader-setting",s)}function p(){return n("reader-setting")}function b(t){var e=n("bookshelf");return e||(e=[]),e.push(t),r("bookshelf",e)}function m(){var t=n("bookshelf");return t||""}function g(){return c("bookshelf")}},f508:function(t,e,s){"use strict";var a=s("e4bc"),i=s.n(a);i.a},f988:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isChapterCatelogueShow,expression:"isChapterCatelogueShow"}],staticClass:"chapter-catelogue",on:{click:function(e){return e.stopPropagation(),t.handleClick(e)}}},[s("transition",{attrs:{name:"slide-right"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.isChapterCatelogueShow,expression:"isChapterCatelogueShow"}],ref:"catelogue",staticClass:"catelogue-wrap",style:t.theme},[s("div",{staticClass:"title"},[t._v("目录")]),s("div",{staticClass:"content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.isLoaded,expression:"!isLoaded"}],staticClass:"load-animate-wrap"},[s("load-animate")],1),s("scroll",t._l(t.chapterArr,(function(e,a){return s("div",{key:a,staticClass:"chapter-item",class:{current:e.link===t.chapterLink},on:{click:function(s){return s.stopPropagation(),t.goBookReader(e.link)}}},[t._v(t._s(e.title))])})),0)],1)])])],1)])},i=[],o=(s("96cf"),s("1da1")),r=s("e700"),n=s("aada"),c=s("ac0d"),l={props:["chapterLink","theme"],mixins:[c["a"]],data:function(){return{isLoaded:!1,chapterArr:[]}},methods:{goBookReader:function(t){this.hideChapterCatelogue(),this.$emit("go-bookreader",t)},hideChapterCatelogue:function(){this.setIsChapterCatelogueShow(!1)},handleClick:function(t){return t.clientX>=this.$refs.catelogue.offsetLeft+this.$refs.catelogue.offsetWidth&&this.hideChapterCatelogue(),!1},getChapterCatelogue:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("/api/atoc",{params:{view:"summary",book:t.$route.params.bookId}});case 2:if(s=e.sent,200!==s.status){e.next=9;break}return t.isLoaded=!0,e.next=7,t.$http.get("/api/atoc/"+s.data[0]._id,{params:{view:"chapters"}});case 7:a=e.sent,200===a.status&&(t.isLoaded=!0,t.chapterArr=a.data.chapters?a.data.chapters:"",t.setChapterList(t.chapterArr));case 9:case"end":return e.stop()}}),e)})))()}},components:{loadAnimate:r["a"],scroll:n["a"]},created:function(){this.getChapterCatelogue()}},A=l,u=(s("1643"),s("2877")),d=Object(u["a"])(A,a,i,!1,null,"593a6959",null);e["a"]=d.exports},fb6a:function(t,e,s){"use strict";var a=s("23e7"),i=s("861d"),o=s("e8b5"),r=s("23cb"),n=s("50c4"),c=s("fc6a"),l=s("8418"),A=s("b622"),u=s("1dde"),d=s("ae40"),h=u("slice"),v=d("slice",{ACCESSORS:!0,0:0,1:2}),f=A("species"),w=[].slice,p=Math.max;a({target:"Array",proto:!0,forced:!h||!v},{slice:function(t,e){var s,a,A,u=c(this),d=n(u.length),h=r(t,d),v=r(void 0===e?d:e,d);if(o(u)&&(s=u.constructor,"function"!=typeof s||s!==Array&&!o(s.prototype)?i(s)&&(s=s[f],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return w.call(u,h,v);for(a=new(void 0===s?Array:s)(p(v-h,0)),A=0;h<v;h++,A++)h in u&&l(a,A,u[h]);return a.length=A,a}})}}]);
//# sourceMappingURL=chunk-28b8a452.3df81e8e.js.map