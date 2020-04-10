<?php

if (!defined('IN_IA')) {
	exit('Access Denied');
}

require_once EWEI_SHOPV2_PLUGIN . 'app/core/page_mobile.php';
class Index_EweiShopV2Page extends AppMobilePage
{
	//品牌列表
	public function index()
	{
		global $_W;
		global $_GPC;
		$id = intval($_GPC['id']);
		$uniacid = $_W['uniacid'];
		$data=array(
			'status'=>1,
			'uniacid'=>$uniacid,
		);
		$merch = pdo_fetchall("select * from " . tablename('ewei_shop_merch_user'),$data);
		foreach ($merch as $k=>$v){
			$merch[$k]['logo']=tomedia($v['logo']);
			$merch[$k]['banner']=tomedia($v['banner']);
		}
		return app_json(array('merch' => $merch));
	}
	/**
	 * 每个商铺下对应商品列表
	 */
	public function get_list()
	{
		global $_GPC;
		global $_W;
		$uniacid = $_W['uniacid'];
		$cid = $_GPC['merchid'];
		$couponid = intval($_GPC['couponid']);
		if (!empty($couponid)) {
			$this->getlistbyCoupon($couponid);
			return NULL;
		}
		//商铺banner
		$merchbanner = pdo_fetch("select * from " . tablename('ewei_shop_merch_user')." WHERE id =:uid and uniacid=:uniacid and status=1 LIMIT 1",array(':uid'=>$cid,':uniacid'=>$uniacid));
		$merchbanner['logo']=tomedia($merchbanner['logo']);
		$merchbanner['banner']=tomedia($merchbanner['banner']);
		//判断传来的分类是数组还是单个
		if(is_array($_GPC['cate'])){
			//数组删除为0的值
			$_GPC['cate']=array_values(array_diff($_GPC['cate'],[0]));
		}
		$args = array('pagesize' => intval($_GPC['pagesize']), 'page' => intval($_GPC['page']), 'from' => 'miniprogram');
		$merch_plugin = p('merch');
		$merch_data = m('common')->getPluginset('merch');
		if ($merch_plugin && $merch_data['is_openmerch']) {
			$args['merchid'] = intval($_GPC['merchid']);
		}

		if (isset($_GPC['nocommission'])) {
			$args['nocommission'] = intval($_GPC['nocommission']);
		}
		$goods = m('goods')->getList($args);
		$saleout = !empty($_W['shopset']['shop']['saleout']) ? tomedia($_W['shopset']['shop']['saleout']) : '/static/images/saleout-2.png';
		$goods_list = array();
		if (0 < $goods['total']) {
			$goods_list = $goods['list'];
			foreach ($goods_list as $index => $item) {
				if ($goods_list[$index]['isdiscount']) {
					if (time() < $goods_list[$index]['isdiscount_time']) {
						$goods_list[$index]['isdiscount'] = 0;
					}
				}

				$goods_list[$index]['minprice'] = (double) $goods_list[$index]['minprice'];
				unset($goods_list[$index]['marketprice']);
				unset($goods_list[$index]['maxprice']);
				unset($goods_list[$index]['isdiscount_discounts']);
				unset($goods_list[$index]['description']);
				unset($goods_list[$index]['discount_time']);

				if ($item['total'] < 1) {
					$goods_list[$index]['saleout'] = $saleout;
				}
			}
		}
		return app_json(array('list' => $goods_list,'banner'=>$merchbanner, 'total' => $goods['total'], 'pagesize' => $args['pagesize']));
	}

}

?>
