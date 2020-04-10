<?php

function app_error($errcode = 0, $message = '')
{
	return json_encode(array('error' => $errcode, 'message' => empty($message) ? AppError::getError($errcode) : $message));
}

function app_json($result = NULL, $openid)
{
	global $_GPC;
	global $_W;
	$ret = array();

	if (!is_array($result)) {
		$result = array();
	}

	$ret['error'] = 0;
	$key = time() . '@' . $openid;
	$auth = array('authkey' => base64_encode(authcode($key, 'ENCODE', 'ewei_shopv2_wxapp')));
	m('cache')->set($auth['authkey'], 1);
	return json_encode(array_merge($ret, $auth, $result));
}

if (!defined('IN_IA')) {
	exit('Access Denied');
}

require EWEI_SHOPV2_PLUGIN . 'app/core/error_code.php';
require EWEI_SHOPV2_PLUGIN . 'app/core/wxapp/wxBizDataCrypt.php';
class Wxapp_EweiShopV2Page extends Page
{
	protected $appid;
	protected $appsecret;

	public function __construct()
	{
		$data = m('common')->getSysset('app');
		$this->appid = $data['appid'];
		$this->appsecret = $data['secret'];
	}

	public function login()
	{
		global $_GPC;
		global $_W;
		$code = trim($_GPC['code']);
		$encryptedData = trim($_GPC['encryptedData']);
		$iv = trim($_GPC['iv']);

		if (empty($code)) {
			return app_error(AppError::$ParamsError);
		}
		$url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' . $this->appid . '&secret=' . $this->appsecret . '&js_code=' . $code . '&grant_type=authorization_code';
		load()->func('communication');
		$resp = ihttp_request($url);
		if (is_error($resp)) {
			return app_error(AppError::$SystemError, $resp['message']);
		}
		$arr = @json_decode($resp['content'], true);
		$arr['isclose'] = $_W['shopset']['app']['isclose'];
		if (!empty($_W['shopset']['app']['isclose'])) {
			$arr['closetext'] = $_W['shopset']['app']['closetext'];
		}
		if (!is_array($arr) || !isset($arr['openid'])) {
			return app_error(AppError::$WxAppLoginError);
		}
//        
//        
//        $appid = 'wx4f4bc4dec97d474b';
//$sessionKey = 'tiihtNczf5v6AKRyjwEUhQ==';
//
//$encryptedData="CiyLU1Aw2KjvrjMdj8YKliAjtP4gsMZM
//                QmRzooG2xrDcvSnxIMXFufNstNGTyaGS
//                9uT5geRa0W4oTOb1WT7fJlAC+oNPdbB+
//                3hVbJSRgv+4lGOETKUQz6OYStslQ142d
//                NCuabNPGBzlooOmB231qMM85d2/fV6Ch
//                evvXvQP8Hkue1poOFtnEtpyxVLW1zAo6
//                /1Xx1COxFvrc2d7UL/lmHInNlxuacJXw
//                u0fjpXfz/YqYzBIBzD6WUfTIF9GRHpOn
//                /Hz7saL8xz+W//FRAUid1OksQaQx4CMs
//                8LOddcQhULW4ucetDf96JcR3g0gfRK4P
//                C7E/r7Z6xNrXd2UIeorGj5Ef7b1pJAYB
//                6Y5anaHqZ9J6nKEBvB4DnNLIVWSgARns
//                /8wR2SiRS7MNACwTyrGvt9ts8p12PKFd
//                lqYTopNHR1Vf7XjfhQlVsAJdNiKdYmYV
//                oKlaRv85IfVunYzO0IKXsyl7JCUjCpoG
//                20f0a04COwfneQAGGwd5oa+T8yO5hzuy
//                Db/XcxxmK01EpqOyuxINew==";
//
//$iv = 'r7BXXKkLb8qrSNn05n0qiA==';
//
//$pc = new WXBizDataCrypt($appid, $sessionKey);
//$errCode = $pc->decryptData($encryptedData, $iv, $data );
//
//if ($errCode == 0) {
//    print($data . "\n");
//} else {
//    print($errCode . "\n");
//}

		return app_json($arr, $arr['openid']);
	}

	/**
     * 微信小程序登录
     */
	public function auth()
	{
		global $_GPC;
		global $_W;
		$encryptedData = trim($_GPC['data']);
		$iv = trim($_GPC['iv']);
		$new_encryptedData = trim($_GPC['new_encryptedData']);
		$new_iv = trim($_GPC['new_iv']);
		$sessionKey = trim($_GPC['sessionKey']);
		if (empty($encryptedData) || empty($iv)) {
			return app_error(AppError::$ParamsError);
		}

		$pc = new WXBizDataCrypt($this->appid, $sessionKey);
		$errCode = $pc->decryptData($encryptedData, $iv, $data);
		$errCode2 = $pc->decryptData($new_encryptedData, $new_iv, $data2);
		if ($errCode == 0) {
			$data = json_decode($data, true);
			$this->refine($data['openId']);
			$unionid=m('member')->getUnionid($data['unionId']);
			$member = m('member')->getMember('sns_wa_' . $data['openId']);//使用unionid获取用户信息   确保公众号会员和小程序会员互通
			if (empty($member)) {//小程序会员不存在的情况
				//判断用户汇通的unionid是否存在
				if(!empty($unionid)){
					$tables = pdo_fetchall('SHOW TABLES like \'%_ewei_shop_%\'');
					foreach ($tables as $k => $v) {
						$v = array_values($v);
						$tablename = str_replace($_W['config']['db']['tablepre'], '', $v[0]);
						if (pdo_fieldexists($tablename, 'openid') && pdo_fieldexists($tablename, 'uniacid')) {
							pdo_update($tablename, array('openid' =>$unionid['openid']), array('uniacid' => $_W['uniacid'], 'openid' => 'sns_wa_' . $data['openId']));
						}

						if (pdo_fieldexists($tablename, 'openid') && pdo_fieldexists($tablename, 'acid')) {
							pdo_update($tablename, array('openid' => $unionid['openid']), array('acid' => $_W['acid'], 'openid' => 'sns_wa_' . $data['openId']));
						}

						if (pdo_fieldexists($tablename, 'mid') && pdo_fieldexists($tablename, 'uniacid')) {
							pdo_update($tablename, array('mid' => $unionid['id']), array('uniacid' => $_W['uniacid'], 'mid' => $unionid['id']));
						}
					}
					$updateData = array('nickname' => !empty($data['nickName']) ? $data['nickName'] : '', 'avatar' => !empty($data['avatarUrl']) ? $data['avatarUrl'] : '','unionid'=>$data['unionId'],'gender' => !empty($data['gender']) ? $data['gender'] : '-1','openid_wa' => $data['openId'], 'comefrom' => 'sns_wa',);
					pdo_update('ewei_shop_member', $updateData, array('id' => $unionid['id'], 'uniacid' => $unionid['uniacid']));
					$data['id'] = $unionid['id'];
					$data['uniacid'] = $unionid['uniacid'];
					$data['isblack'] = $unionid['isblack'];
				}else{
					$member = array('uniacid' => $_W['uniacid'],'unionid'=>$data['unionId'], 'uid' => 0,'unionid'=>$data['unionId'], 'openid' => 'sns_wa_' . $data['openId'], 'nickname' => !empty($data['nickName']) ? $data['nickName'] : '', 'avatar' => !empty($data['avatarUrl']) ? $data['avatarUrl'] : '', 'gender' => !empty($data['gender']) ? $data['gender'] : '-1', 'openid_wa' => $data['openId'], 'comefrom' => 'sns_wa', 'createtime' => time(), 'status' => 1);
					pdo_insert('ewei_shop_member', $member);
					$id = pdo_insertid();
					$data['id'] = $id;
					$data['uniacid'] = $_W['uniacid'];
					if (method_exists(m('member'), 'memberRadisCountDelete')) {
						m('member')->memberRadisCountDelete();
					}
				}
			}
			else {
				$updateData = array('nickname' => !empty($data['nickName']) ? $data['nickName'] : '','unionid'=>$data['unionId'], 'avatar' => !empty($data['avatarUrl']) ? $data['avatarUrl'] : '','unionid'=>$data['unionId'],'gender' => !empty($data['gender']) ? $data['gender'] : '-1');
				pdo_update('ewei_shop_member', $updateData, array('id' => $member['id'], 'uniacid' => $member['uniacid']));
				$data['id'] = $member['id'];
				$data['uniacid'] = $member['uniacid'];
				$data['isblack'] = $member['isblack'];
			}

			if (p('commission')) {
				p('commission')->checkAgent($member['openid']);
			}

			return app_json($data, $data['openId']);
		}

		return app_error(AppError::$WxAppError, '登录错误, 错误代码: ' . $errCode);
	}

	/**
     * 处理注册用户openid多生成一个sns_wa_前缀的问题
     * 例如:
     *   正常:sns_wa_oX-v90Cdn4BpQSByrQZgS8dKLK_w
     *   异常:sns_wa_sns_wa_oX-v90Cdn4BpQSByrQZgS8dKLK_w
     * @param $openid string
     */
	protected function refine(&$openid)
	{
		if (substr($openid, 0, 7) == 'sns_wa_') {
			$openid = substr($openid, 7);
		}
	}
}

?>
