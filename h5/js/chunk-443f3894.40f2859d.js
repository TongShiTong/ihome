(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-443f3894"],{dae1:function(t,i,e){t.exports=e.p+"h5/img/noNews.5f227afa.png"},e3f6:function(t,i,e){"use strict";e.r(i);var a=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{ref:"container",staticClass:"newsList"},[t.imgUrls.length>0?a("div",{staticClass:"slider-banner swiperNews"},[a("swiper",{staticClass:"swiper-wrapper",attrs:{options:t.swiperNew}},t._l(t.imgUrls,function(t,i){return a("swiperSlide",{key:i,staticClass:"swiper-slide"},[a("img",{staticClass:"slide-image",attrs:{src:t.image_input[0]}})])}),1),a("div",{staticClass:"swiper-pagination"})],1):t._e(),a("Tabs",{staticClass:"newsSwitch",attrs:{"line-height":"0.04rem","line-width":"0.24rem",color:"#e93323",animated:"","title-inactive-color":"2","nav-right":"0.46rem",sticky:""},on:{click:t.onClick},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},t._l(t.navLsit,function(i,s){return a("Tab",{key:s,attrs:{title:i.title,"title-inactive-color":"#999","title-active-color":"#282828"}},[t._l(t.articleList,function(i,e){return a("div",{key:e,staticClass:"list"},[1===i.image_input.length?a("router-link",{staticClass:"item acea-row row-between-wrapper",attrs:{to:{path:"/news_detail/"+i.id}}},[a("div",{staticClass:"text acea-row row-column-between"},[a("div",{staticClass:"name line2"},[t._v(t._s(i.title))]),a("div",[t._v(t._s(i.add_time))])]),a("div",{staticClass:"pictrue"},[a("img",{attrs:{src:i.image_input[0]}})])]):t._e(),2===i.image_input.length?a("router-link",{staticClass:"item",attrs:{to:{path:"/news_detail/"+i.id}}},[a("div",{staticClass:"title line1"},[t._v("\n            "+t._s(i.title)+"\n          ")]),a("div",{staticClass:"picList acea-row row-between-wrapper"},t._l(i.image_input,function(t,i){return a("div",{key:i,staticClass:"pictrue"},[a("img",{attrs:{src:t}})])}),0),a("div",{staticClass:"time"},[t._v(t._s(i.add_time))])]):t._e(),3===i.image_input.length?a("router-link",{staticClass:"item",attrs:{to:{path:"/news_detail/"+i.id}}},[a("div",{staticClass:"title line1"},[t._v("\n            "+t._s(i.title)+"\n          ")]),a("div",{staticClass:"picList on acea-row row-between-wrapper"},t._l(i.image_input,function(t,i){return a("div",{key:i,staticClass:"pictrue"},[a("img",{attrs:{src:t}})])}),0),a("div",{staticClass:"time"},[t._v(t._s(i.add_time))])]):t._e()],1)}),s>0&&t.articleList.length>0?a("Loading",{attrs:{loaded:t.loadend,loading:t.loading}}):t._e(),0===t.articleList.length&&t.page>1?a("div",{staticClass:"noCommodity"},[a("div",{staticClass:"noPictrue"},[a("img",{staticClass:"image",attrs:{src:e("dae1")}})])]):t._e()],2)}),1)],1)},s=[],n=(e("7f7f"),e("bda7"),e("5e46")),l=(e("da3c"),e("0b33")),r=e("7212"),c=(e("e5d0"),e("e876")),o=e("3a5e"),d={name:"NewsList",components:{swiper:r["swiper"],swiperSlide:r["swiperSlide"],Tab:l["a"],Tabs:n["a"],Loading:o["a"]},props:{},data:function(){return{page:1,limit:20,loadTitle:"",loading:!1,loadend:!1,imgUrls:[],navLsit:[],articleList:[],active:0,cid:0,swiperNew:{pagination:{el:".swiper-pagination",clickable:!0},autoplay:{disableOnInteraction:!1,delay:2e3},loop:!0,speed:1e3,observer:!0,observeParents:!0}}},mounted:function(){var t=this;this.articleBanner(),this.articleCategory(),this.articleHotList(),this.$scroll(this.$refs.container,function(){!t.loading&&t.getArticleLists()})},methods:{articleBanner:function(){var t=this;Object(c["a"])().then(function(i){t.imgUrls=i.data})},articleCategory:function(){var t=this;Object(c["b"])().then(function(i){t.navLsit=i.data})},articleHotList:function(){var t=this;Object(c["d"])().then(function(i){t.articleList=i.data})},getArticleLists:function(){var t=this;if(!t.loading&&!t.loadend){t.loading=!0;var i={page:t.page,limit:t.limit};Object(c["e"])(i,t.cid).then(function(i){t.loading=!1,t.articleList.push.apply(t.articleList,i.data),t.loadend=i.data.length<t.limit,t.page=t.page+1})}},onClick:function(t){0===t?this.articleHotList():(this.cid=this.navLsit[t].id,this.articleList=[],this.page=1,this.loadend=!1,this.loading=!1,this.getArticleLists(t))}}},p=d,g=e("2877"),u=Object(g["a"])(p,a,s,!1,null,null,null);i["default"]=u.exports}}]);
//# sourceMappingURL=chunk-443f3894.40f2859d.js.map