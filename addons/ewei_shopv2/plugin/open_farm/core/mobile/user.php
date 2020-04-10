<?php

if (!defined('IN_IA')) {
	exit('Access Denied');
}

class User_EweiShopV2Page extends PluginMobilePage
{
	/**
	private $table = 'ewei_open_farm_user';
	/**
	private $field = array('id', 'uniacid', 'name', 'openid', 'tofakeid', 'follow', 'consume', 'parent_id', 'portrait', 'autograph', 'sex', 'birthday', 'distribution', 'create_time');

	/**
	public function getInfo($method)
	{
		global $_W;
		$sql = 'SELECT * FROM ' . tablename($this->table) . (' WHERE `uniacid` = \'' . $_W['uniacid'] . '\' AND `openid` = \'' . $_W['openid'] . '\' ');
		$info = pdo_fetch($sql);

		if ($method) {
			return $info;
		}

		$this->model->returnJson($info);
	}
}

?>