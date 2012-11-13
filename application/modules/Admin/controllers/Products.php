<?php 
class ProductsController extends AdminController
{
	public function init()
	{
		parent::init();
		$this->getView()->breadcrumb[] = array('Products', array('module'=>'admin','controller'=>'products','action'=>'index'));
	}
	
	public function indexAction()
	{
		//require_once LIBRARY_PATH . '/Doctrine/bootstrap.php';
		//$greeting = new Greeting('Hello World!');
		/*$model = new ProductsModel('Hello World!');
		$this->_entity->persist( $model );
		$this->_entity->flush();*/
		/*
		$model = $this->_entity->find('ProductsModel', 1);
		echo '<pre>';
		print_r( $model->getContent() );
		$model->setContent('Hello test!!');
		$this->_entity->flush();
		print_r( $model->getContent() );
		exit;*/
		//$repository = $this->_entity->getRepository('UsersModel');
		//$model = new GroupsModel('Administrador');
		
		//$worldGreetings = $repository->findBy(array('content' => 'Hello World!'));
		//$testGreetings = $repository->findBy(array('content' => 'Hello Test!!'));
		
		//Displaying results
		/*echo 'Found ' . count($worldGreetings) . ' "Hello World!" greetings:' . PHP_EOL;
		foreach($worldGreetings as $worldGreeting) {
			echo ' - ' . $worldGreeting->getId() . PHP_EOL;
		}
		 
		echo 'Found ' . count($testGreetings) . ' "Hello Test!" greetings:' . PHP_EOL;
		foreach($testGreetings as $testGreeting) {
			echo ' - ' . $testGreeting->getId() . PHP_EOL;
		}*/
	}
	
	public function addAction()
	{
		$this->getView()->breadcrumb[] = array('Add', array('module'=>'admin','controller'=>'products','action'=>'add'));
	}
}