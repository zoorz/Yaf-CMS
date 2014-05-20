<?php
class DemoController extends ApplicationController
{
	public function indexAction()
	{
		//$this->getView()->setLayout('index');
		$this->getView()->assign('a','test');
	}
}