<?php
class AdminController extends ApplicationController
{
	protected $breadcrumb = array();
	
	public function init()
	{
		parent::init();
		$this->getView()->breadcrumb[] = array('Home', array('module'=>'admin','controller'=>'index','action'=>'index'));
		$this->getView()->setLayout('default');
		$this->getView()->setScriptPath( APPLICATION_PATH . DS . 'modules' . DS . 'Admin' . DS . 'views');
		//$this->getView()->assign('breadcrumb', $this->breadcrumb);
	}
}