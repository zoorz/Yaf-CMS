<?php
class AppController extends Yaf_Controller_Abstract
{
	protected $_layout;
	
	protected $debugger;
	
	private $controller_profile;

	public function init()
	{
		global $_DEBUGGER;
		$this->debugger = $_DEBUGGER;
		$this->controller_profile = $this->debugger->newProfiler( 'CONTROLLER_PROFILER' );
		
		$this->_layout = Yaf_Registry::get('layout');
	}
	
	public function __destruct()
	{
		$this->controller_profile->end();
	}
}
