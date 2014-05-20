<?php

namespace Tectrend;

class Autoloader
{
	protected static $_instance;
	
	protected $_modules;
	
	public static function getInstance( $modules )
	{
		if (null === self::$_instance)
		{
			self::$_instance = new self();
			self::$_instance->setModules( $modules );
		}
		return self::$_instance;
	}
	
	public function __construct()
	{
		spl_autoload_register(array($this, 'autoload'));
	}
	
	public function autoload( $className )
	{
		foreach( $this->modules as $module )
		{
			if( $this->isCategoryType( $className, 'Controller') )
			{
				$class_file = APP_PATH . 'modules' . DS . $module . DS . 'controllers' . DS . $this->resolveCategory($className, 'Controller') . ".php";
				if(file_exists($class_file)){
					require_once APP_PATH . 'modules' . DS . $module . DS . 'controllers' . DS . $this->resolveCategory($className, 'Controller') . ".php";	
				}
			}
		}
	}
	
	public function setModules( $modules )
	{
		unset( $modules[ array_search('Index', $modules) ] );
		$this->modules = $modules;
	}
	
	private function isCategoryType($className, $category)
	{
		if ( $category == substr( $className, strlen($className)-strlen($category), strlen($category) ) )
		{
			return true;
		}
	}
	
	private function resolveCategory($className, $category)
	{
		return substr( $className, 0, strlen($className)-strlen($category) );
	}
}