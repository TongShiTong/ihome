<?php

if (!defined('IN_IA')) {
    exit('Access Denied');
}

require __DIR__ . '/base.php';

class Index_EweiShopV2Page extends Base_EweiShopV2Page {

    public function main() {
        global $_W;
        global $_GPC;
        $openid = $_W['openid'];
        $uniacid = $_W['uniacid'];
        $shop = m('common')->getSysset('shop');
        $advs = pdo_fetchall('select id,advname,link,thumb from ' . tablename('ewei_shop_sns_adv') . ' where uniacid=:uniacid and enabled=1 order by displayorder desc', array(':uniacid' => $uniacid));
        $credit = m('member')->getCredit($openid, 'credit1');
        $category = pdo_fetchall('select id,`name`,thumb,isrecommand from ' . tablename('ewei_shop_sns_category') . ' where uniacid=:uniacid and isrecommand = 1 and enabled=1 order by displayorder desc', array(':uniacid' => $uniacid));
        foreach ($category as &$cat) {
            $cat['thumb'] = tomedia($cat['thumb']);
        }

        $recommands = pdo_fetchall('select sb.id,sb.title,sb.logo,sb.`desc`  from ' . tablename('ewei_shop_sns_board') . ' as sb
						left join ' . tablename('ewei_shop_sns_category') . ' as sc on sc.id = sb.cid
						where sb.uniacid=:uniacid and sb.isrecommand=1 and sb.status=1 and sc.enabled = 1 order by sb.displayorder desc', array(':uniacid' => $uniacid));

        foreach ($recommands as &$row) {
            $row['postcount'] = $this->model->getPostCount($row['id']);
            $row['followcount'] = $this->model->getFollowCount($row['id']);
            $row['logo'] = tomedia($row['logo']);
        }

        unset($row);
        $_W['shopshare'] = array('title' => $this->set['share_title'], 'imgUrl' => tomedia($this->set['share_icon']), 'link' => mobileUrl('sns', array(), true), 'desc' => $this->set['share_desc']);
        $shop['logo'] = tomedia($shop['logo']);
        $shop['img'] = tomedia($shop['img']);
        $shop['signimg'] = tomedia($shop['signimg']);
        $data = array(
            'category' => $category,
            'credit' => $credit,
            'advs' => $advs,
            'shop' => $shop,
            'recommands' => $recommands,
        );
        return app_json($data);
//		include $this->template();
    }

}
