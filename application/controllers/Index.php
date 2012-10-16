<?php
class IndexController extends AppController
{
	public function indexAction()
	{
		$page = ($this->getRequest()->getParam('page')) ?: 0; //unused - see Bootstrap::_initRoutes

		//$blog = new BlogModel();
		$blog = new RoleModel();

		/*view*/
		//$this->_view->entries = $blog->fetch(PDO::FETCH_LAZY);
		$this->_view->entries = $blog->fetchAll(null, null, 5000);
		$this->_view->page = $page;

		/*layout*/
		$this->_layout->meta_title = 'A Blog';
	}
}
