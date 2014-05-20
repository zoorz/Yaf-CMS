<?php

/**
 * 该类主要用于操作区服相关配置
 */
class Area_AreaModel extends BaseModel{
	
	protected $_GAME_ID;
	public function init() {
		parent::init();

		$this->_GAME_ID = Game::getGameID();
	}

	public function getPlatInfo() {
		echo $this->_GAME_ID;
	}
}