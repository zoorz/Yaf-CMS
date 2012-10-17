<?php
class IndexController extends AppController
{
	public function indexAction()
	{
		$page = ($this->getRequest()->getParam('page')) ?: 0;

		//$blog = new BlogModel();
		
		//$this->_view->entries = $blog->fetch(PDO::FETCH_LAZY);
		//$this->_view->entries = $blog->find();
		$this->_view->page = $page;

		/*layout*/
		$this->getView()->assign('meta_title', 'A Blog');
		$this->getView()->assign("body", "Hello Wrold<br/>");
	}
}
