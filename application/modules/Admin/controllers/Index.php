<?php 

class IndexController extends AdminController
{
	public function indexAction()
	{
		//$this->layout->teste = 'testeeeeee';
		//$this->_view->a = 'xxx';
		$this->getView()->assign('teste', 'xxx');
		//$this->getView()->get
		//$this->getView()->setScriptPath( APPLICATION_PATH . DS . 'modules' );
		//echo '<pre>'; print_r( $this->getView()->getScriptPath() );exit;
	}
	
	public function testeAction()
	{
		echo 'teste';
		exit;
	}
}