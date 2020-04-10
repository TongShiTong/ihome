<?php

if (!defined('IN_IA')) {
	exit('Access Denied');
}

class Subscribe_EweiShopV2Page extends PluginWebPage
{
	public function main()
	{
		global $_W;
		global $_GPC;
		$pindex = max(1, intval($_GPC['page']));
		$psize = 10;
		$condition = ' and uniacid=:uniacid ';
		$uniacid = $_W['uniacid'];
		$params = array(':uniacid' => $uniacid);
		$type = trim($_GPC['type']);

		if ($type == 'processed') {
			$condition .= ' and checked = 1 and deleted = 0 ';
		}
		else if ($type == 'untreated') {

		}
		else if ($type == 'cancel') {
			$condition .= ' and checked = -1 and deleted = 0 ';
		}
		else {
			if ($type == 'deleted') {
				$condition .= ' and deleted = 1 ';
			}
		}

		$starttime = intval($_GPC['']);
		if (empty($starttime) || empty($endtime)) {
			$starttime = strtotime('-1 month');
			$endtime = time();
		}

		$searchtime = trim($_GPC['searchtime']);

		if (!empty($searchtime)) {
			$condition .= ' and ' . $searchtime . 'time > ' . strtotime($_GPC['time']['start']) . ' and ' . $searchtime . 'time < ' . strtotime($_GPC['time']['end']) . ' ';
			$starttime = strtotime($_GPC['time']['start']);
			$endtime = strtotime($_GPC['time']['end']);
		}

		if (!empty($_GPC['keyword'])) {
			$_GPC['keyword'] = trim($_GPC['keyword']);
			$condition .= ' and complaint_text like :keyword ';
			$params[':keyword'] = '%' . $_GPC['keyword'] . '%';
		}

		$complains = pdo_fetchall('SELECT * FROM ' . tablename('ewei_shop_sns_subscribe') . '
					WHERE 1=1 ' . $condition . ' ORDER BY id DESC limit ' . ($pindex - 1) * $psize . ',' . $psize, $params);
		if (empty($complains)) {
			$complains = array();
		}

		$total = pdo_fetchcolumn('SELECT count(1) FROM ' . tablename('ewei_shop_sns_subscribe') . (' WHERE 1 ' . $condition), $params);
		foreach ($complains as $key => $value) {
			//print_r($value['complainant']);die();
			$complains[$key]['complainant'] = $this->getMemberunioid($value['unionid']);//预约人openid
			$complains[$key]['defendant'] = $this->getMember($value['designer_id']);//预约师openid
		}
		$pager = pagination2($total, $pindex, $psize);
		include $this->template();
	}
	//配送提交
	public function post(){
		global $_W;
		global $_GPC;
		$id = intval($_GPC['id']);
		$item=[];
		include $this->template();
	}

	public function delivery()
	{
		global $_W;
		global $_GPC;
		$id = intval($_GPC['id']);
		if ($_W['ispost']) {
			$data=array(
				'uid'=>$_GPC['uid'],
				'money'=>$_GPC['money'],
				'uniacid'=> $_W['uniacid'],
				'project'=>$_GPC['project'],
				'subid'=>$_GPC['id'],
				'uphone'=>$_GPC['uphone'],
				'add_time'=>date('Y-m-d H:i:s',time()),
			);
			$data=pdo_insert("ewei_shop_sns_delivery",$data);
			if($data){
				$sub=array(
					'checked'=>'1',
					'designer_id'=>$_GPC['uid'],
				);
				pdo_update("ewei_shop_sns_subscribe",$sub,array('id' => $_GPC['id']));
			}
			show_json(1, array('url' => webUrl('sns/subscribe', array('type' => "untreated"))));
		}

		include $this->template();
	}

	public function query(){
		global $_W;
		global $_GPC;
		$kwd = trim($_GPC['keyword']);
		$params = array();
		$params[':uniacid'] = $_W['uniacid'];
		$condition = ' and uniacid=:uniacid and groupid in (1)';

		if (!empty($_GPC['no_wa'])) {
			$condition .= ' and openid not like \'sns_wa_%\'';
		}

		if (!empty($kwd)) {
			$condition .= ' AND (`realname` LIKE :keyword or `nickname` LIKE :keyword or `mobile` LIKE :keyword or `openid` LIKE :keyword)';
			$params[':keyword'] = '%' . $kwd . '%';
		}
		//$res_group = pdo_fetchall('select id,groupname from ' . tablename('ewei_shop_member_group') . ' where id in (' . implode(',', $list_group) . ')', array(), 'id');

		$ds = pdo_fetchall('SELECT * FROM ' . tablename('ewei_shop_member') . (' WHERE 1 ' . $condition . ' order by id asc'), $params);
		foreach ($ds as &$value) {
			$value['nickname'] = htmlspecialchars($value['nickname'], ENT_QUOTES);
			$value['nickname_wechat'] = htmlspecialchars($value['nickname_wechat'], ENT_QUOTES);
		}
		unset($value);
		if ($_GPC['suggest']) {
			exit(json_encode(array('value' => $ds)));
		}
		include $this->template();
	}

	//查看详情
	public function see(){
		global $_W;
		global $_GPC;
		$list=pdo_fetch("SELECT * FROM ".tablename('ewei_shop_sns_subscribe')." WHERE id=:id", array(':id' => $_GPC['id']));
		$list['complainant']=$this->getMember($list['uid']);//预约人openid
		$list['defendant']=$this->getMember($list['designer_id']);//预约人openid
		include $this->template();
	}

	public function verylist(){
		global $_W;
		global $_GPC;
		$uniacid=$_W['uniacid'];
		$pindex = max(1, intval($_GPC['page']));
		$psize = 10;
		$list=pdo_fetchall("SELECT * FROM ".tablename('ewei_shop_sns_delivery')." WHERE uniacid=:uniacid", array(':uniacid' => $uniacid));
		foreach ($list as $key=>$value){
			$list[$key]['complainant'] = $this->getMember($value['uid']);//预约人openid
		}
		$total = pdo_fetchcolumn('SELECT count(1) FROM ' . tablename('ewei_shop_sns_subscribe') . (' WHERE 1 ' . $condition), $params);
		$pager = pagination2($total, $pindex, $psize);
		include $this->template();
	}

	public function checked(){
		global $_W;
		global $_GPC;
		$uniacid=$_W['uniacid'];
		$id=$_GPC['id'];
		if($_W['ispost']){
			$data=array(
				'type'=>$_GPC['type'],
				'id'=>$_GPC['id'],
			);
			$data=pdo_update("ewei_shop_sns_delivery",$data,array('id' => $_GPC['id']));
			show_json(1, array('url' => webUrl('sns/subscribe/verylist')));
		}
		$list=pdo_fetch("SELECT * FROM ".tablename('ewei_shop_sns_delivery')." WHERE id=:id", array(':id' => $_GPC['id']));
		include $this->template();
	}
	public function sendComMessage($complainid, $type = true)
	{
		global $_W;
		global $_GPC;
		$uniacid = $_W['uniacid'];
		$complainid = intval($complainid);

		if (empty($complainid)) {
			return NULL;
		}

		$complain = pdo_fetch('select id,complainant,postsid from ' . tablename('ewei_shop_sns_complain') . ' where id = ' . $complainid . ' and uniacid = ' . $uniacid . ' ');

		if (empty($complain)) {
			return NULL;
		}

		$member = $this->model->getMember($complain['complainant']);

		if (empty($member)) {
			return NULL;
		}

		$post = pdo_fetch('select id,pid from ' . tablename('ewei_shop_sns_post') . ' where id = ' . $complain['postsid'] . ' and uniacid = ' . $uniacid . ' ');

		if (empty($post)) {
			return NULL;
		}

		if ($post['pid'] == 0) {
			$info = '话题';
		}
		else {
			$info = '评论';
		}

		if ($type == false) {
			$remark = '您提交的对于' . $member['nickname'] . '发表' . $info . '的投诉未通过审核！谢谢您的关注！';
		}
		else {
			$remark = '您提交的对于' . $member['nickname'] . '发表' . $info . '的投诉通过审核！相关内容已删除，感谢您的支持！';
		}

		$msg = array(
			'first'  => array('value' => '投诉消息通知', 'color' => '#4a5077'),
			'remark' => array('value' => $remark, 'color' => '#4a5077')
		);
		m('message')->sendCustomNotice($complain['complainant'], $msg);
	}

	public function restore()
	{
		global $_W;
		global $_GPC;
		$id = intval($_GPC['id']);

		if (empty($id)) {
			$id = is_array($_GPC['ids']) ? implode(',', $_GPC['ids']) : 0;
		}

		$items = pdo_fetchall('SELECT id FROM ' . tablename('ewei_shop_sns_complain') . (' WHERE id in( ' . $id . ' ) AND uniacid=') . $_W['uniacid']);

		if (empty($items)) {
			$items = array();
		}

		foreach ($items as $item) {
			pdo_update('ewei_shop_sns_complain', array('deleted' => 0, 'checked' => 0), array('id' => $item['id']));
			plog('sns.posts.complain.restore', '恢复投诉 ID: ' . $id . ' ');
		}

		show_json(1, array('url' => referer()));
	}

	public function catedel()
	{
		global $_W;
		global $_GPC;
		$id = intval($_GPC['id']);
		$item = pdo_fetch('SELECT id,name FROM ' . tablename('ewei_shop_sns_complaincate') . ' WHERE id = ' . $id . ' AND uniacid=' . $_W['uniacid'] . '');

		if (!empty($item)) {
			pdo_delete('ewei_shop_sns_complaincate', array('id' => $id));
			plog('sns.posts.complaincate.delete', '删除投诉分类 ID: ' . $id . ' 标题: ' . $item['name'] . ' ');
		}

		show_json(1);
	}

	public function category()
	{
		global $_W;
		global $_GPC;

		if (!empty($_GPC['catid'])) {
			foreach ($_GPC['catid'] as $key => $value) {
				$data = array('name' => trim($_GPC['catname'][$key]), 'displayorder' => $key, 'status' => intval($_GPC['status'][$key]), 'uniacid' => $_W['uniacid']);

				if (empty($value)) {
					pdo_insert('ewei_shop_sns_complaincate', $data);
					$insert_id = pdo_insertid();
					plog('sns.posts.complaincate.add', '添加投诉分类 ID: ' . $insert_id);
				}
				else {
					pdo_update('ewei_shop_sns_complaincate', $data, array('id' => $value));
					plog('sns.posts.complaincate.edit', '修改投诉分类 ID: ' . $value);
				}
			}

			plog('sns.posts.complaincate.edit', '批量修改投诉分类');
			show_json(1);
		}

		$list = pdo_fetchall('SELECT * FROM ' . tablename('ewei_shop_sns_complaincate') . (' WHERE uniacid = \'' . $_W['uniacid'] . '\' ORDER BY displayorder asc'));
		include $this->template();
	}

	/**
	 * 获取会员信息
	 */
	public function getMember($openid = '')
	{
		global $_W;
		$uid = (int) $openid;

		if ($uid == 0) {
			$info = pdo_fetch('select id,avatar,nickname from ' . tablename('ewei_shop_member') . ' where  openid=:openid and uniacid=:uniacid limit 1', array(':uniacid' => $_W['uniacid'], ':openid' => $openid));

			if (empty($info)) {
				$info = pdo_fetch('select id,avatar,nickname from ' . tablename('ewei_shop_member') . ' where  openid_qq=:openid and uniacid=:uniacid limit 1', array(':uniacid' => $_W['uniacid'], ':openid' => str_replace('qq_', '', $openid)));
			}
		}
		else {
			$info = pdo_fetch('select id,avatar,nickname from ' . tablename('ewei_shop_member') . ' where id=:id and uniacid=:uniacid limit 1', array(':uniacid' => $_W['uniacid'], ':id' => $openid));
		}
		if (!empty($info)) {
			$openid = $info['openid'];

			if (empty($info['uid'])) {
				$followed = m('user')->followed($openid);

				if ($followed) {
					load()->model('mc');
					$uid = mc_openid2uid($openid);

					if (!empty($uid)) {
						$info['uid'] = $uid;
						$upgrade = array('uid' => $uid);

						if (0 < $info['credit1']) {
							mc_credit_update($uid, 'credit1', $info['credit1']);
							$upgrade['credit1'] = 0;
						}

						if (0 < $info['credit2']) {
							mc_credit_update($uid, 'credit2', $info['credit2']);
							$upgrade['credit2'] = 0;
						}

						if (!empty($upgrade)) {
							pdo_update('ewei_shop_member', $upgrade, array('id' => $info['id']));
						}
					}
				}
			}

			$credits = m('member')->getCredits($openid);
			$info['credit1'] = $credits['credit1'];
			$info['credit2'] = $credits['credit2'];
		}

		return $info;
	}
	/**
	 * 获取会员信息2
	 */
	public function getMemberunioid($unionid = '')
	{
		global $_W;
		$uid = (int) $unionid;

		if ($uid == 0) {
			$info = pdo_fetch('select id,avatar,nickname from ' . tablename('ewei_shop_member') . ' where  unionid=:unionid and uniacid=:uniacid limit 1', array(':uniacid' => $_W['uniacid'], ':unionid' => $unionid));
		}
		if (!empty($info)) {
			$openid = $info['openid'];

			if (empty($info['uid'])) {
				$followed = m('user')->followed($openid);

				if ($followed) {
					load()->model('mc');
					$uid = mc_openid2uid($openid);

					if (!empty($uid)) {
						$info['uid'] = $uid;
						$upgrade = array('uid' => $uid);

						if (0 < $info['credit1']) {
							mc_credit_update($uid, 'credit1', $info['credit1']);
							$upgrade['credit1'] = 0;
						}

						if (0 < $info['credit2']) {
							mc_credit_update($uid, 'credit2', $info['credit2']);
							$upgrade['credit2'] = 0;
						}

						if (!empty($upgrade)) {
							pdo_update('ewei_shop_member', $upgrade, array('id' => $info['id']));
						}
					}
				}
			}

			$credits = m('member')->getCredits($openid);
			$info['credit1'] = $credits['credit1'];
			$info['credit2'] = $credits['credit2'];
		}

		return $info;
	}
}

?>
