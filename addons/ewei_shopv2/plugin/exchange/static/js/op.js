define(["core","tpl","biz/plugin/diyform"],function(a,t,f){var g={init:function(){$(".order-verify").unbind("click").click(function(){var a=$(this).attr("value"),t=$(this).attr("data");a=a+"&yx="+$("#option"+t).val(),g.verify(a,t)}),$(".x").unbind("click").click(function(){if("default"!=$(this).attr("type")){$(this).removeClass("btn-danger").addClass("btn-default"),$(this).attr("type","default"),$(this).html("选择");var a="#goods"+$(this).attr("data");$(a).val("");var t,i=$("input[name='total']").val(),e=$(this).attr("data");$("div[data-id="+e+"]").remove();var n=0;for(t=0;t<goodsArr.length;t++)goodsArr[t][0]==$(this).attr("data")&&(goodsArr.splice(t,1),t--,n++);var d=Number(i)-Number(n);$("input[name='total']").val(d),$(".total").html(d),g.caculate(goodsArr,optionsss)}else{$(this).attr("diyformtype");g.diyformtype($(this).attr("diyformurl"),$(this).attr("data"))}})},diyformtype:function(a,c){htmlobj=$.ajax({url:a,async:!1,type:"get"}),container=new FoxUIModal({content:htmlobj.responseText,extraClass:"popup-modal"}),container.show("slow"),$(".closebtn").unbind("click").click(function(){container.close()}),$(".cartbtn").unbind("click").click(function(){container.close()}),$(".xuanhaole1").unbind("click").click(function(){var a="#chose"+c;$(a).removeClass("btn-default").addClass("btn-danger"),$(a).attr("type","danger"),$(a).html("<i class='icon icon-selected'></i> 已选择");var t="#goods"+$(a).attr("data");$(t).val($(a).attr("data"));var i=f.getData(".diyform-container");if(i){container.close();var e=$("input[name='total']").val(),n=Number(e)+Number("1");$("input[name='total']").val(n),$(".total").html(n),goodsArr.push([$(a).attr("data"),$(a).attr("value")]),i.goods_id=c,i=JSON.stringify(i),$("#diyformdata"+c).val(i),g.caculate(goodsArr,optionsss);var d=$(a).attr("data");if(1<=$("div[data-id="+d+"]").length){var l=$("div[data-id="+d+"]").find("input").val(),o=Number(l)+Number(1);l=$("div[data-id="+d+"]").find("input").val(o)}else{var s=$("div[data-goodsid="+d+"]").find(".name").text(),r='<div class="fui-list goods-item" data-id="'+d+'" data-goodsid="0"> <div class="fui-list-media"> <img src="'+$("div[data-id=g"+d+"]").attr("data-value")+'" class="round package-goods-img" style="height: 55.2px;"> </div> <div class="fui-list-inner"> <div class="text">'+s+'</div> <div class="text">'+$("button[data-id=0]").text()+'</div> </div> <div class="fui-list-angle"> <span class="price ">¥ <span class="marketprice">'+$(".g"+d).text()+'</span></span> <span class="amount"> <div class="fui-number small" data-value="" data-unit="" data-maxbuy="" data-minbuy="" data-goodsid=""> <div class="minus" onclick="minus(this)" data-id="'+d+'" data-option="0">-</div> <input class="num" type="tel" value="1" readonly data-value="'+$("div[data="+d+"]").attr("value")+'"/> <div class="plus" onclick="plus(this)" data-id="'+d+'" data-option="0">+</div> </div> </span> </div> </div>';$(".cart .fui-list-group").append(r)}}})},verify:function(a,m){htmlobj=$.ajax({url:a,async:!1,type:"get"}),container=new FoxUIModal({content:htmlobj.responseText,extraClass:"popup-modal"}),container.show("slow"),$(".closebtn").unbind("click").click(function(){container.close()}),$(".cartbtn").unbind("click").click(function(){container.close()}),$(".xuanhaole").unbind("click").click(function(){var a=f.getData(".diyform-container");if(a){var t=$("input[name='data']").val(),i="#option"+m,e=$(i).val();$(i).val(t);var n="a[data='"+m+"']",d=$("input[name='count']").val(),l=$("input[name='old_count']").val();if(0<oc){var o=Number($("input[name='count']").val())-Number(l);o=Number(o)-Number(oc)-Number(o);var s=Number(d)+Number(o);$("input[name='count']").val(s),oc=0;o=Number($("input[name='count']").val())-Number($("input[name='old_count']").val())}else o=Number(d)-Number(l);0<$("input[name='count']").val()?($(n).html("<i class='icon icon-selected'></i> 已选择"),$(n).removeClass("btn-default").addClass("btn-danger")):($(n).html(" 选择"),$(n).removeClass("btn-danger").addClass("btn-default")),optionsss=optionArr,$(".cart").find("div[data-goodsid="+m+"]").remove();for(var r=0;r<optionsss.length;r++)if(e=optionsss[r][0],null!=$("button[data-id="+e+"]").val())if(1<=$("div[data-id="+m+"_"+e+"]").length){var c=$("div[data-id="+m+"_"+e+"]").find("input").val(),u=Number(c)+Number(1);c=$("div[data-id="+m+"_"+e+"]").find("input").val(u)}else{var v=$("div[data-goodsid="+m+"]").find(".name").text(),p='<div class="fui-list goods-item" data-id="'+m+"_"+e+'" data-goodsid="'+m+'"> <div class="fui-list-media"> <img src="'+$(".fui-modal").find("img[data-id="+m+"]").attr("src")+'" class="round package-goods-img" style="height: 55.2px;"> </div> <div class="fui-list-inner"> <div class="text">'+v+'</div> <div class="text">'+$("button[data-id="+e+"]").text()+'</div> </div> <div class="fui-list-angle"> <span class="price ">¥ <span class="marketprice">'+$("button[data-id="+e+"]").val()+'</span></span> <span class="amount"> <div class="fui-number small" data-value="" data-unit="" data-maxbuy="" data-minbuy="" data-goodsid=""> <div class="minus" onclick="minus(this)" data-id="'+m+"_"+e+'">-</div> <input class="num" type="tel" value="1" readonly data-value="'+$("button[data-id="+e+"]").val()+'"/> <div class="plus" onclick="plus(this)" data-id="'+m+"_"+e+'" data-option="'+e+'">+</div> </div> </span> </div> </div>';$(".cart .fui-list-group").append(p)}g.caculate(goodsArr,optionsss),a.goods_id=m,a=JSON.stringify(a),$("#diyformdata"+m).val(a),container.close()}})},caculate:function(a,t){$("input[name='goods[]']").remove();for(var i=0;i<a.length;i++)$("div[data-goodsid="+a[i][0]+"]").append("<input type='hidden' name='goods[]' value='"+a[i][0]+"'>");$("input[name='option[]']").val("");var e="";for(i=0;i<t.length;i++){var n=$(".inoption"+t[i][0]).attr("data"),d=$("#option"+n).val();null==d&&(d=""),e=d+"_"+t[i][0],$("#option"+n).val(e)}var l=a.concat(t),o=l.length;if($(".total").text(l.length),$("input[name='total']").val(o),l.sort(function(a,t){return t[1]-a[1]}),1==exchangetype){if(0==!Number(exchangevalue)){for(var s=0;s<Number(exchangevalue);s++)l.splice(0,1);for(var r=0,c=0;c<l.length;c++)r=parseFloat(l[c][1])+parseFloat(r);r=parseFloat(r).toFixed(2),$(".value").html(r);var u=Number(exchangevalue)-Number(o);Number(u)<0&&(u=0),$(".again").html(u)}}else if(2==exchangetype){r=0;for(var v=0,p=0;p<l.length&&(r=parseFloat(l[p][1])+parseFloat(r))!=parseFloat(exchangevalue).toFixed(2);p++)if(r>parseFloat(exchangevalue).toFixed(2)){v=parseFloat(r)-parseFloat(exchangevalue);break}for(var m=0,f=p+1;f<l.length;f++)m=parseFloat(l[f][1])+parseFloat(m);var g=parseFloat(m)+parseFloat(v);g=g.toFixed(2),$(".value").html(g)}}};return g});