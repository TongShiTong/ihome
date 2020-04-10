<?php

if (!defined('IN_IA')) {
    exit('Access Denied');
}

require EWEI_SHOPV2_PLUGIN . 'sns/core/page_mobile.php';

class Index_EweiShopV2Page extends SnsMobilePage {

    public function main() {
        global $_W;
        global $_GPC;
        $openid = $_W['openid'];
        $uniacid = $_W['uniacid'];
        $cid = $_GPC['cid'];
        $shop = m('common')->getSysset('shop');
        $advs = pdo_fetchall('select id,advname,link,thumb from ' . tablename('ewei_shop_sns_adv') . ' where uniacid=:uniacid and enabled=1 order by displayorder desc', array(':uniacid' => $uniacid));
        $credit = m('member')->getCredit($openid, 'credit1');
        $category = pdo_fetchall('select id,`name`,thumb,isrecommand from ' . tablename('ewei_shop_sns_category') . ' where uniacid=:uniacid and isrecommand = 1 and enabled=1 order by displayorder desc', array(':uniacid' => $uniacid));
        //dump($category);die();
        $recommands = pdo_fetchall('select sb.id,sb.title,sb.logo,sb.`desc`  from ' . tablename('ewei_shop_sns_board') . ' as sb
						left join ' . tablename('ewei_shop_sns_category') . ' as sc on sc.id = sb.cid
						where sb.uniacid=:uniacid and sb.isrecommand=1 and sb.cid=' . $cid . '  and sb.status=1 and sc.enabled = 1 order by sb.displayorder desc', array(':uniacid' => $uniacid));

        foreach ($recommands as &$row) {
            $row['postcount'] = $this->model->getPostCount($row['id']);
            $row['followcount'] = $this->model->getFollowCount($row['id']);
        }
        unset($row);
        $_W['shopshare'] = array('title' => $this->set['share_title'], 'imgUrl' => tomedia($this->set['share_icon']), 'link' => mobileUrl('sns', array(), true), 'desc' => $this->set['share_desc']);

        $pindex = 1;
        $psize = 20;
        $condition = ' and `pid`=0 and `deleted`=0 and  cid='.$cid;
        // $condition .= ' and `isboardbest`=1';
        $condition .= ' and `checked`=1';
       //最新发布
        $sql = 'select id,title,createtime,content,images , nickname,avatar,isbest,isboardbest,checked from ' . tablename('ewei_shop_sns_post') . ('  where 1 ' . $condition . ' ORDER BY  createtime desc,id DESC LIMIT ') . ($pindex - 1) * $psize . ',' . $psize;
        $list = pdo_fetchall($sql, $params);
        //推荐居精华
        $sqlbset = 'select id,title,createtime,content,images , nickname,avatar,isbest,isboardbest,checked from ' . tablename('ewei_shop_sns_post') . ('  where 1 ' . $condition .' and isbest=1'.' ORDER BY id DESC LIMIT ') . ($pindex - 1) * $psize . ',' . $psize;
        $listbest = pdo_fetchall($sqlbset, $params);
        //热门
        $sqlhot = 'select id,title,createtime,content,images , nickname,avatar,isbest,isboardbest,checked from ' . tablename('ewei_shop_sns_post') . ('  where 1 ' . $condition . ' ORDER BY  views desc, id DESC LIMIT ') . ($pindex - 1) * $psize . ',' . $psize;
        $listhot = pdo_fetchall($sqlhot, $params);
        foreach ($list as &$row) {
            $row['avatar'] = $this->model->getAvatar($row['avatar']);
            $row['createtime'] = $this->model->timeBefore($row['createtime']);
            $row['goodcount'] = pdo_fetchcolumn('select count(*) from ' . tablename('ewei_shop_sns_like') . ' where pid=:pid limit 1', array(':pid' => $row['id']));
            $row['postcount'] = pdo_fetchcolumn('select count(*) from ' . tablename('ewei_shop_sns_post') . ' where pid=:pid and deleted = 0 limit 1', array(':pid' => $row['id']));
            $row['content'] = htmlspecialchars_decode($row['content']);
            $images = array();
            $rowimages = iunserializer($row['images']);
            if (is_array($rowimages) && !empty($rowimages)) {
                foreach ($rowimages as $img) {
                    if (count($images) <= 2) {
                        $images[] = tomedia($img);
                    }
                }
            }

            $row['images'] = $images;
            $row['imagewidth'] = '100%';
            $row['imagecount'] = count($rowimages);

            if (count($row['images']) == 2) {
                $row['imagewidth'] = '50%';
            } else {
                if (count($row['images']) == 3) {
                    $row['imagewidth'] = '33%';
                }
            }

            $row['content'] = $this->model->replaceContent($row['content']);
        }
        include $this->template();
    }

}
