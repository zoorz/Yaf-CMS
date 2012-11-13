<?php 
class IndexController extends ApplicationController
{
	public function indexAction()
	{
		//$this->_layout->teste = 'testeeeeee';
		$this->getView()->assign('a', 'xxx');
	}
	
	public function testeAction()
	{
		echo 'teste';
		exit;
	}
}