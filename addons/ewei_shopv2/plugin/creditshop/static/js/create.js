define(["core","tpl"],function(d,e){var r={goods:!1,optionid:0,init:function(e){r.goods=goods=e.goods,r.storeid=0,r.optionid=e.optionid,r.jie=e.goods.jie,r.chance=e.goods.chance,r.num=0,r.showMoney=r.goods.money,r.realMoney=r.goods.money,r.credit=r.goods.credit,r.dispatch=r.goods.dispatch;var t=!1;void(r.wait=0)!==window.selectedStoreData&&(t=window.selectedStoreData,r.storeid=t.id,$("#storename").text(t.storename),delete window.selectedStoreData);var o=!1;if(void 0!==window.selectedAddressData)o=window.selectedAddressData;else if(void 0!==window.editAddressData)(o=window.editAddressData).address=o.areas.replace(/ /gi,"")+" "+o.address;else if("0"==r.goods.type){var i=r.getCookie("id"),s=r.getCookie("mobile"),n=decodeURIComponent(r.getCookie("realname")),a=decodeURIComponent(r.getCookie("addressd"));0<i&&(o={id:i,mobile:s,address:a,realname:n})}o&&(r.address=o,r.addressid=o.id,r.addressid&&d.json("creditshop/create/dispatch",{goodsid:r.goods.id,addressid:r.addressid,optionid:r.optionid},function(e){if(1!=e.status){t=e.result;return r.address="",r.addressid=0,$("#address_select").text("请选择收货地址"),$("#carrier_realname").show().find("input").val(""),$("#carrier_mobile").show().find("input").val(""),void FoxUI.toast.show(t.nodispatch)}var t=e.result;r.dispatch=t.dispatch;var o=parseFloat(t.dispatch)+parseFloat(goods.money);0<t.dispatch&&($(".dispatchprice").html("¥"+t.dispatch),$(".moneydispatch").html(o)),$("#address_select").html(r.address.address),$("#carrier_realname").show().find("input").val(r.address.realname),$("#carrier_mobile").show().find("input").val(r.address.mobile)}),$("#addressInfo a").attr("href",d.getUrl("member/address/selector")),$("#addressInfo a").click(function(){window.orderSelectedAddressID=o.id})),r.goods.timestate&&$(".fui-timer").timer({onEnd:function(){$(".fui-navbar .btn").removeClass("btn-danger").addClass("btn-disabled").removeAttr("id").text("活动已结束")}}),null==r.changeNum&&($(document).on("click",".minus",function(){r.changeNum(-1)}),$(document).on("click",".plus",function(){r.changeNum(1)})),$(".num").on("blur",function(e){var t=e.currentTarget.value;r.onchangeNum(t)}),r.onchangeNum=function(t){var e=t;r.chance=Number(r.chance),e=Number(e),0<r.chance&&e>r.chance?FoxUI.toast.show("每人限兑"+r.chance+"件!"):0<!e||(r.num=e,o&&(r.address=o,r.addressid=o.id,r.addressid&&d.json("creditshop/create/dispatch",{goodsid:r.goods.id,addressid:r.addressid,optionid:r.optionid,num:r.num},function(e){if(1!=e.status){t=e.result;return r.address="",r.addressid=0,$("#address_select").text("请选择收货地址"),$("#carrier_realname").show().find("input").val(""),$("#carrier_mobile").show().find("input").val(""),void FoxUI.toast.show(t.nodispatch)}var t=e.result;r.dispatch=t.dispatch;var o=parseFloat(t.dispatch)+parseFloat(goods.money);0<t.dispatch&&($(".dispatchprice").html("¥"+t.dispatch),$(".moneydispatch").html(o)),$("#address_select").html(r.address.address),$("#carrier_realname").show().find("input").val(r.address.realname),$("#carrier_mobile").show().find("input").val(r.address.mobile)}),$("#addressInfo a").attr("href",d.getUrl("member/address/selector")),$("#addressInfo a").click(function(){window.orderSelectedAddressID=o.id})),d.post("creditshop.create",{num:r.num,id:r.goods.id,optionid:r.optionid},function(e){r.goods=goods=e.result,r.showMoney=r.goods.money*r.num,r.credit=r.goods.credit*r.num,r.realMoney=Number(r.showMoney)+Number(r.dispatch),$("#showmoney").text(r.showMoney),$("#showcredit").text(r.credit),$(".moneydispatch").text(r.format(r.realMoney,2)),$("#realcredit").text(r.credit),$("#num").val(t),$("#num").attr("data-value",t)}))},r.changeNum=function(e){var t=r.num+e;0<!t||(0<r.chance&&t>r.chance?FoxUI.toast.show("每人限兑"+r.chance+"件!"):(r.num=t,o&&(r.address=o,r.addressid=o.id,r.addressid&&d.json("creditshop/create/dispatch",{goodsid:r.goods.id,addressid:r.addressid,optionid:r.optionid,num:r.num},function(e){if(1!=e.status){t=e.result;return r.address="",r.addressid=0,$("#address_select").text("请选择收货地址"),$("#carrier_realname").show().find("input").val(""),$("#carrier_mobile").show().find("input").val(""),void FoxUI.toast.show(t.nodispatch)}var t=e.result;r.dispatch=t.dispatch;var o=parseFloat(t.dispatch)+parseFloat(goods.money);0<t.dispatch&&($(".dispatchprice").html("¥"+t.dispatch),$(".moneydispatch").html(o)),$("#address_select").html(r.address.address),$("#carrier_realname").show().find("input").val(r.address.realname),$("#carrier_mobile").show().find("input").val(r.address.mobile)}),$("#addressInfo a").attr("href",d.getUrl("member/address/selector")),$("#addressInfo a").click(function(){window.orderSelectedAddressID=o.id})),d.post("creditshop.create",{num:r.num,id:r.goods.id,optionid:r.optionid},function(e){r.goods=goods=e.result,r.showMoney=r.goods.money*r.num,r.credit=r.goods.credit*r.num,r.realMoney=Number(r.showMoney)+Number(r.dispatch),$("#showmoney").text(r.showMoney),$("#showcredit").text(r.credit),$(".moneydispatch").text(r.format(r.realMoney,2)),$("#realcredit").text(r.credit),$("#num").val(r.num),$("#num").attr("data-value",r.num)})))},r.changeNum(1),r.format=function(e,t,o,i){e=(e+"").replace(/[^0-9+\-Ee.]/g,"");var s,n,a,d=isFinite(+e)?+e:0,r=isFinite(+t)?Math.abs(t):0,c=void 0===i?",":i,l=void 0===o?".":o,p="";return 3<(p=(r?(s=d,n=r,a=Math.pow(10,n),""+Math.round(s*a)/a):""+Math.round(d)).split("."))[0].length&&(p[0]=p[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,c)),(p[1]||"").length<r&&(p[1]=p[1]||"",p[1]+=new Array(r-p[1].length+1).join("0")),p.join(l)},r.paycheck=function(e){if(r.paytype=e,goods.canbuy)if("1"!=goods.followneed||goods.followed)if(r.realname=$.trim($("#carrier_realname").val()),r.mobile=$.trim($("#carrier_mobile").val()),0!=goods.type)r.pay(goods);else{if(1==goods.isverify&&0==goods.goodstype){if(""==r.realname&&0==$("#carrier_realname").attr("data-show"))return void FoxUI.toast.show("请填写真实姓名!");if(""==r.mobile&&0==$("#carrier_mobile").attr("data-show"))return void FoxUI.toast.show("请填写联系电话!");if(0==r.storeid)return void FoxUI.toast.show("请选择兑换门店!")}else if(0==goods.isverify&&0==goods.goodstype&&!r.addressid)return void FoxUI.toast.show("请选择收货地址!");FoxUI.message.show({title:"确认要兑换吗？",icon:"icon icon-information",content:"",buttons:[{text:"确定",extraClass:"btn-danger",onclick:function(){r.wait=1,r.pay(goods)}},{text:"取消",extraClass:"btn-default",onclick:function(){}}]})}else FoxUI.message.show({title:"提示",icon:"icon icon-information",content:goods.followtext,buttons:[{text:"立即去关注",extraClass:"btn-danger",onclick:function(){location.href=goods.followurl}}]});else FoxUI.toast.show(goods.buymsg)},$(document).click(function(){$("input").each(function(){$(this).attr("data-value",$(this).val())})}),$("input").each(function(){var e=$(this).attr("data-value")||"";""!=e&&$(this).val(e)}),$("#openActionSheet").off("click").on("click",function(){console.log(r.wait),1!=r.wait&&(0==goods.type?0<goods.money||0<r.dispatch?r.openActionSheet(!1):r.paycheck():0<goods.money?r.openActionSheet(!1):r.paycheck())}),$("#optionid").off("click").on("click",function(){r.optionPicker(),d.json("creditshop/detail/option",{goodsid:r.goods.id},function(e){0!=e.status?(r.specs=e.result.specs,r.options=e.result.options,r.good=e.result.goods,r.goods.id=r.goods.id,$(".option_thumb").attr("src",r.good.thumb),$(".option_credit").html(r.good.credit),$(".option_money").html(r.good.money),$(".option_total").html(r.good.total),d.tpl(".option-picker-options","option-picker-tpl",e.result),$(".spec-item").off("click").on("click",function(){r.chooseSpec(this)})):FoxUI.toast.show("未找到商品!")}),r.optionPicker1.show()})},getCookie:function(e){for(var t=e+"=",o=document.cookie.split(";"),i=0;i<o.length;i++){for(var s=o[i];" "==s.charAt(0);)s=s.substring(1);if(-1!=s.indexOf(t))return s.substring(t.length,s.length)}return""},getListlog:function(e,t){d.json("creditshop/detail/getlistlog",{page:e,goodsid:t},function(e){var t=e.result;t.total<=0?$(".logmore").hide():(t.list.length<=0||t.list.length<t.pagesize)&&$(".logmore").hide(),r.logpage++,d.tpl("#loglist","tpl_loglist",t,1<r.logpage)})},getListreply:function(e,t){d.json("creditshop/detail/getlistreply",{page:e,goodsid:t},function(e){var t=e.result;t.total<=0?$(".replymore").hide():(t.list.length<=0||t.list.length<t.pagesize)&&$(".replymore").hide(),r.replypage++,d.tpl("#comments_reply","tpl_replylist",t,1<r.replypage)})},openActionSheet:function(e){FoxUI.actionsheet.show("选择支付方式",[{text:"微信支付",extraClass:"wechat",onclick:function(){r.paycheck("wechat")}},{text:"支付宝支付",extraClass:"alipay",onclick:function(){r.paycheck("alipay")}},{text:"余额支付",extraClass:"balance",onclick:function(){r.paycheck("balance")}}],e)},optionPicker:function(){r.optionPicker1=new FoxUIModal({content:$("#option-picker").html(),extraClass:"picker-modal",maskClick:function(){r.optionPicker1.close()}}),$(".icon-roundclose").click(function(){r.optionPicker1.close()}),$(".confirmbtn").click(function(){r.optionPicker1.close()})},initOption:function(){$(".spec-item").removeClass("btn-danger");var e=r.optionid,o=!1;if($.each(r.options,function(){if(this.id==e)return o=this.specs.split("_"),!1}),o){var i=[];if($(".spec-item").each(function(){var e=$(this),t=e.data("id");$.each(o,function(){this==t&&(i.push(e),e.addClass("btn-danger"))})}),0<i.length){var t=i[i.length-1];r.chooseSpec(t,!1)}}},chooseSpec:function(e,t){var o=$(e);o.closest(".spec").find(".spec-item").removeClass("btn-danger"),o.addClass("btn-danger");var i=o.data("thumb")||"";i?$(".option_thumb").attr("src",i):i=r.goods.thumb,r.optionthumb=i;var s=$(".spec-item.btn-danger"),n=[];if(s.length==r.specs.length&&(s.each(function(){n.push($(this).data("id"))}),$.each(r.options,function(){if(this.specs.split("_").sort().join("_")==n.sort().join("_")){var e="-1"==this.total?"无限":this.stock;$(".total").html(e),"-1"!=this.total&&this.total<=0?$(".confirmbtn").show().addClass("disabled").html("库存不足"):$(".confirmbtn").removeClass("disabled").html("确定"),$(".option_money").html(this.money),$(".option_credit").html(this.credit),r.option=this,r.optionid=this.id}})),r.option){var a=[];s.each(function(){a.push($.trim($(this).html()))}),$(".info-titles").html("已选 "+r.option.title),$(".option_total").html(r.option.total),$("#optionid").html(r.option.title),t&&r.params.onSelected&&r.params.onSelected(r.params.total,r.params.optionid,r.params.titles)}},pay:function(){d.json("creditshop/detail/pay",{id:r.goods.id,optionid:r.optionid,addressid:r.addressid,storeid:r.storeid,realname:r.realname,mobile:r.mobile,paytype:r.paytype,num:r.num},function(e){var t=e.result;if(r.logid=t.logid,1==e.status)if(t.wechat){if(d.ish5app())return void appPay("wechat",t.payinfo.ordersn,t.payinfo.money,!0);var o=t.wechat;if(o.weixin){function i(){WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:o.appid?o.appid:o.appId,timeStamp:o.timeStamp,nonceStr:o.nonceStr,package:o.package,signType:o.signType,paySign:o.paySign},function(e){"get_brand_wcpay_request:ok"==e.err_msg?r.lottery(r.goods):"get_brand_wcpay_request:cancel"==e.err_msg?FoxUI.toast.show("取消支付"):r.jie&&d.json("creditshop/detail/pay",{id:r.goods.id,optionid:r.optionid,addressid:r.addressid,storeid:r.storeid,realname:r.realname,mobile:r.mobile,jie:1,num:r.num},function(e){r.logid=e.result.logid,r.payWechatJie(e.result.wechat)},!1,!0)})}"undefined"==typeof WeixinJSBridge?document.addEventListener?document.addEventListener("WeixinJSBridgeReady",i,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",i),document.attachEvent("onWeixinJSBridgeReady",i)):i()}!o.weixin_jie&&1!=o.jie||r.payWechatJie(o)}else if(t.alipay){if(d.ish5app())return void FoxUI.toast.show("暂不支持！");var s=t.alipay;s.success||FoxUI.toast.show("支付参数错误！"),location.href=d.getUrl("order/pay_alipay",{id:goods.id,logid:t.logid,type:20,url:s.url})}else r.lottery(r.goods);else FoxUI.toast.show(e.result.message)},!0,!0)},payWechatJie:function(e){var t=d.getUrl("index/qr",{url:e.code_url});$("#qrmoney").text(r.goods.money),$(".fui-header").hide(),$("#btnWeixinJieCancel").unbind("click").click(function(){clearInterval(r.settime),$(".order-weixinpay-hidden").hide(),$(".fui-header").show()}),$(".order-weixinpay-hidden").show(),r.settime=setInterval(function(){r.lottery(r.goods)},2e3),$(".verify-pop").find(".close").unbind("click").click(function(){$(".order-weixinpay-hidden").hide(),$(".fui-header").show(),clearInterval(r.settime)}),$(".verify-pop").find(".qrimg").attr("src",t).show()},lottery:function(e){0==e.type?d.json("creditshop/detail/lottery",{logid:r.logid,id:r.goods.id,num:r.num},function(e){var t=e.result;if(-1==t.status)return FoxUI.toast.show(e.result.message),void(window.location.href=d.getUrl("creditshop/log/detail",{id:r.logid,shine:1}));if(clearInterval(r.settime),$(".fui-header").show(),$(".order-weixinpay-hidden").hide(),2==t.status)setTimeout(function(){FoxUI.message.show({title:"恭喜您，兑换成功!",icon:"icon icon-success",content:"",buttons:[{text:"确定",extraClass:"btn-danger",onclick:function(){location.href=d.getUrl("creditshop/log/detail",{id:r.logid,shine:1})}}]})},1);else if(3==t.status){var o="优惠券";1==t.goodstype?o="优惠券":2==t.goodstype?o="余额":3==t.goodstype&&(o="红包"),setTimeout(function(){FoxUI.message.show({title:"恭喜您，"+o+"兑换成功!",icon:"icon icon-success",content:"",buttons:[{text:"确定",extraClass:"btn-danger",onclick:function(){r.wait=0,location.href=d.getUrl("creditshop/log/detail",{id:r.logid,shine:1})}}]})},1)}},!1,!0):(FoxUI.message.show({title:"",icon:"icon icon-clock",content:"努力抽奖中，请稍后....",buttons:[]}),setTimeout(function(){d.json("creditshop/detail/lottery",{id:r.goods.id,logid:r.logid,num:r.num},function(e){var t=e.result;if(-1!=e.status)if(clearInterval(r.settime),2!=t.status){if(3==t.status){var o="优惠券";return 1==t.goodstype?o="优惠券":2==t.goodstype?o="余额":3==t.goodstype&&(o="红包"),void FoxUI.message.show({title:"恭喜您，"+o+"已经发到您账户啦!",icon:"icon icon-success",content:"",buttons:[{text:"确定",extraClass:"btn-danger",onclick:function(){location.href=d.getUrl("creditshop/log/detail",{id:r.logid,shine:1})}}]})}FoxUI.message.show({title:"很遗憾，您没有中奖!",icon:"icon icon-wrong",content:"",buttons:[{text:"确定",extraClass:"btn-danger",onclick:function(){location.reload()}}]})}else FoxUI.message.show({title:"恭喜您，您中奖啦!",icon:"icon icon-success",content:"",buttons:[{text:"确定",extraClass:"btn-danger",onclick:function(){location.href=d.getUrl("creditshop/log/detail",{id:r.logid,shine:1})}}]});else FoxUI.toast.show(e.result.message)},!1,!0)},1e3))}};return r});