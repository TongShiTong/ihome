(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2df2bc60"],{"707b":function(e,s,t){"use strict";t.r(s);var i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"distribution-posters"},[t("div",{staticClass:"slider-banner banner"},[t("swiper",{ref:"mySwiper",staticClass:"swiper-wrapper",attrs:{options:e.swiperPosters}},e._l(e.info,function(e,s){return t("swiperSlide",{key:s,staticClass:"swiper-slide"},[t("img",{staticClass:"slide-image",attrs:{src:e.wap_poster}})])}),1)],1),e._m(0)])},r=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"preserve acea-row row-center-wrapper"},[t("div",{staticClass:"line"}),t("div",{staticClass:"tip"},[e._v("长按保存图片")]),t("div",{staticClass:"line"})])}],n=t("7212"),a=(t("e5d0"),t("c24f")),c={name:"Poster",components:{swiper:n["swiper"],swiperSlide:n["swiperSlide"]},props:{},data:function(){return{swiperPosters:{speed:1e3,effect:"coverflow",slidesPerView:"auto",centeredSlides:!0,coverflowEffect:{rotate:0,stretch:-20,depth:100,modifier:3,slideShadows:!1},observer:!0,observeParents:!0},info:[],activeIndex:0}},mounted:function(){this.getIndex();var e=this;this.swiper.on("slideChange",function(){e.activeIndex=e.swiper.activeIndex})},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},methods:{getIndex:function(){var e=this;Object(a["A"])().then(function(s){e.info=s.data},function(s){e.$dialog.message(s.msg)})}}},o=c,d=(t("a8fd"),t("2877")),p=Object(d["a"])(o,i,r,!1,null,null,null);s["default"]=p.exports},a45b:function(e,s,t){},a8fd:function(e,s,t){"use strict";var i=t("a45b"),r=t.n(i);r.a}}]);
//# sourceMappingURL=chunk-2df2bc60.0fbdab83.js.map