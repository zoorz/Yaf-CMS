<?php 
class Bootstrap extends Yaf_Bootstrap_Abstract
{
	private $_config;

	/*get a copy of the config*/
	public function _initBootstrap()
	{
		$this->_config = Yaf_Application::app()->getConfig();
	}

	public function _initIncludePath()
	{
		set_include_path(get_include_path() . PATH_SEPARATOR . $this->_config->application->library);
	}

	public function _initErrors()
	{
		if($this->_config->application->showErrors)
		{
			error_reporting (-1);
			ini_set('display_errors','On');
		}
	}

	public function _initNamespaces()
	{
		Yaf_Loader::getInstance()->registerLocalNameSpace(array("Zend", "Smarty"));
	}

	public function _initRoutes()
	{
		//this does nothing useful but shows the regex router in action...
		Yaf_Dispatcher::getInstance()->getRouter()->addRoute(
			"paging_example",
			new Yaf_Route_Regex(
				"#^/index/page/(\d+)#",
				array('controller' => "index"),
				array(1 => "page")
			)
		);
	}
/*
	public function _initLayout(Yaf_Dispatcher $dispatcher)
	{
		$smarty = new Smarty_Adapter();
		Yaf_Registry::set( 'layout', $smarty );
		$dispatcher->registerPlugin( $smarty );
	}
	*/
	public function _initSmarty(Yaf_Dispatcher $dispatcher)
	{
		Yaf_Loader::import("Smarty/Adapter.php");
		$smarty = new Smarty_Adapter(null, $this->_config->smarty);
		$dispatcher->setView($smarty);
	}
	
	protected function _initDoctrine()
	{
		//$this->getApplication()->getAutoloader()->pushAutoloader(array('Doctrine', 'autoload'));
		spl_autoload_register(array('Doctrine', 'modelsAutoload'));
		//$doctrineConfig = $this->getOption('doctrine');
		$doctrineConfig = $this->_config->doctrine;
		$manager = Doctrine_Manager::getInstance();
		$manager->setAttribute(Doctrine::ATTR_AUTO_ACCESSOR_OVERRIDE, true);
		$manager->setAttribute(
			Doctrine::ATTR_MODEL_LOADING,
			$doctrineConfig['model_autoloading']
		);
		Doctrine::loadModels($doctrineConfig['models_path']);
		$conn = Doctrine_Manager::connection($doctrineConfig['dsn'], 'doctrine');
		$conn->setAttribute(Doctrine::ATTR_USE_NATIVE_ENUM, true);
		return $conn;
	}
}
