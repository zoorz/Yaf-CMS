<?php
class IndexController extends AppController
{
	public function init()
	{
		parent::init();
		$this->_layout->meta_title = 'Teste de Caraga :: YafCMS';
		$this->_layout->body = 'Hello Wrold';
	}
	
	public function indexAction()
	{
		$page = ($this->getRequest()->getParam('page')) ?: 0;

		$blog = new BlogModel();
		
		$this->_view->page = $page;

		$this->_layout->meta_title = 'A Blog';
		$this->_layout->body = 'Hello Wrold';
	}
	
	public function testeAction()
	{
		$mysqli = new mysqli("localhost", "root", "yO3aS%*Z", "yafcms");
		$mysqli->set_charset("utf8");
		$result = $mysqli->query("SELECT * FROM usuarios");
		$this->_view->entries = $result;		
	}
	
	public function listaAction()
	{
		$usuarios = new UsuariosModel();
		$this->_view->entries = $usuarios->fetchAll();
	}
}
