<?php 
class NewsController extends AdminController
{
	public function init()
	{
		parent::init();
		$this->getView()->breadcrumb[] = array('Products', array('module'=>'admin','controller'=>'products','action'=>'index'));
	}
	
	public function indexAction()
	{
	}
	
	public function addAction()
	{
		$this->getView()->breadcrumb[] = array('Add', array('module'=>'admin','controller'=>'products','action'=>'add'));
	}
}