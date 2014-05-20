<?php
abstract class ServerStatController extends ApplicationController
{
	protected $game_id;
	protected $game_name;
	protected $breadcrumb = array();

	public function init()
	{
		parent::init();
		if($this->_session->has('PAGEGAME_ID')){
			$default_game_id = $this->_session->get('PAGEGAME_ID');
			$default_game_name = $this->_session->get('PAGEGAME_NAME');
		}else{
			$default_game_id = '5';//默认为街机武侠
			$default_game_name = _('街机武侠');
		}
		$this->game_id = $default_game_id;
		$this->game_name = $default_game_name;
		$game_id = $this->getRequest()->getParam('game_id','');
		
		if(!empty($game_id) && is_numeric($game_id)){
			$model = new ServerStatModel();
			$game_name_list = $model->getBelongTo();
			if(isset($game_name_list[$game_id])){
				$this->game_id = $game_id;
				$this->game_name = $game_name_list[$game_id];
				$this->_session->set('PAGEGAME_ID',$this->game_id);
				$this->_session->set('PAGEGAME_NAME',$this->game_name);
			}
		}
		$sysConf = new SystemConfigModel();
		$this->getView()->header_nav = $sysConf->headerNav($this->game_id);
		$this->getView()->sidebar_menu = $sysConf->sideBar();
		$this->getView()->setLayout('default');
		$this->getView()->setScriptPath( APP_PATH . 'modules' . DS . 'Area' . DS . 'views');
	}

	protected function getGameId()
	{
		return $this->game_id;
	}

	protected function getGameName()
	{
		return $this->game_name;
	}
}