(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0b4a"],{"9e08":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"quality-recommend"},[s("div",{staticClass:"slider-banner swiper"},[s("swiper",{staticClass:"swiper-wrapper",attrs:{options:t.RecommendSwiper}},t._l(t.imgUrls,function(t,i){return s("swiperSlide",{key:i,staticClass:"swiper-slide"},[s("img",{staticClass:"slide-image",attrs:{src:t.img}})])}),1),s("div",{staticClass:"swiper-pagination"})],1),s("div",{staticClass:"title acea-row row-center-wrapper"},[s("div",{staticClass:"line"}),s("div",{staticClass:"name"},[s("span",{staticClass:"iconfont",class:t.icon}),t._v(t._s(t.name)+"\n    ")]),s("div",{staticClass:"line"})]),s("GoodList",{attrs:{"good-list":t.goodsList,"is-sort":!1}})],1)},n=[],a=s("7212"),o=(s("e5d0"),s("d829")),r=s("73f5"),c={name:"HotNewGoods",components:{swiper:a["swiper"],swiperSlide:a["swiperSlide"],GoodList:o["a"]},props:{},data:function(){return{imgUrls:[],goodsList:[],name:"",icon:"",RecommendSwiper:{pagination:{el:".swiper-pagination",clickable:!0},autoplay:{disableOnInteraction:!1,delay:2e3},loop:!0,speed:1e3,observer:!0,observeParents:!0}}},mounted:function(){this.titleInfo(),this.getIndexGroomList()},methods:{titleInfo:function(){var t=this.$route.params.type;"1"===t?(this.name="精品推荐",this.icon="icon-jingpintuijian",document.title="精品推荐"):"2"===t?(this.name="热门榜单",this.icon="icon-remen",document.title="热门榜单"):"3"===t&&(this.name="首发新品",this.icon="icon-xinpin",document.title="首发新品")},getIndexGroomList:function(){var t=this,i=this.$route.params.type;console.log(i),Object(r["e"])(i).then(function(i){t.imgUrls=i.data.banner,t.goodsList=i.data.list,console.log(i.data.list)}).catch(function(t){this.$dialog.toast({mes:t.msg})})}}},l=c,d=s("2877"),p=Object(d["a"])(l,e,n,!1,null,null,null);i["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0f0b4a.953c9fe4.js.map