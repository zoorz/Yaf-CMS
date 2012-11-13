<?php

class Bootstrap extends \Yaf\Bootstrap_Abstract 
{
	private $debugger;
	private $profiler;
	
	public function __destruct()
	{
		if( $this->profiler->isOpen() )
			$this->profiler->end();
	}
	
	public function _initDebug()
	{
		global $_DEBUGGER, $_PROFILER;
		$this->debugger = $_DEBUGGER;
		$this->profiler = $_DEBUGGER->newProfiler('BOOTSTRAP_PROFILER');
	}
	
	public function _initLoader(Yaf\Dispatcher $dispatcher)
	{
		$event = $this->profiler->startEvent('Init YafCMS loader');
		$loader = Tectrend\Autoloader::getInstance( $dispatcher->getApplication()->getModules() );
		$this->profiler->endEvent( $event );
	}
	
	public function _initLocales(Yaf\Dispatcher $dispatcher)
	{
		$event = $this->profiler->startEvent('Init locales');
		putenv("LANG=pt_BR");
		setlocale(LC_ALL, 'pt_BR');
		bindtextdomain('messages', APPLICATION_PATH . DS . 'locales' . DS);
		textdomain('messages');
		$this->profiler->endEvent( $event );
	}
	
	public function _initErrorHandler(Yaf\Dispatcher $dispatcher)
	{
		$event = $this->profiler->startEvent('Init error handler');
		$dispatcher->setErrorHandler(array(get_class($this),'error_handler'));
		$this->profiler->endEvent( $event );
	}

	public function _initConfig(Yaf\Dispatcher $dispatcher)
	{
		$event = $this->profiler->startEvent('Init config');
		$this->config = Yaf\Application::app()->getConfig();
		$this->profiler->endEvent( $event );
	}

	public function _initRequest(Yaf\Dispatcher $dispatcher)
	{
		$event = $this->profiler->startEvent('Init request');
		$dispatcher->setRequest(new Request());
		$this->profiler->endEvent( $event );
	}

	public function _initPlugins(Yaf\Dispatcher $dispatcher)
	{
		$event = $this->profiler->startEvent('Init plugins');
		$dispatcher->registerPlugin(new LogPlugin());
		$dispatcher->registerPlugin(new AuthTokenPlugin());
		$this->profiler->endEvent( $event );
	}

	public function _initRoute(Yaf\Dispatcher $dispatcher)
	{
		$event = $this->profiler->startEvent('Init route');
		$config = new Yaf\Config\Ini(APPLICATION_PATH.'/configs/routes.ini');
		if( isset($config->routes) )
		{
			$dispatcher->getRouter()->addConfig($config->routes);
		}
		$this->profiler->endEvent( $event );
	}
	
	public function _initModules(Yaf\Dispatcher $dispatcher)
	{
		$event = $this->profiler->startEvent('Init modules');
		$app = $dispatcher->getApplication();
		$modules = $app->getModules();
		
		foreach ($modules as $module)
		{
			if ( strcmp($module, 'Index') == 0) continue;
			require_once $app->getAppDirectory() . "/modules/{$module}/_init.php";
		}
		$this->profiler->endEvent( $event );
	}

	public function _initLayout(Yaf\Dispatcher $dispatcher)
	{
		$event = $this->profiler->startEvent('Init layout');
		if( !$dispatcher->getRequest()->isXmlHttpRequest() )
		{
			$layout = new Layout($this->config->layout->dir);
			$dispatcher->setView($layout);
		}
		else
		{
			//
		}
		$this->profiler->endEvent( $event );
	}

	public function _initDoctrine()
	{
		$event = $this->profiler->startEvent('Init library: Doctrine');
		$loader = new Doctrine\Common\ClassLoader('Entity', $this->config->db->doctrine->entity);
		$loader->register();
		
		$loader = new Doctrine\Common\ClassLoader('EntityProxy', $this->config->db->doctrine->entityProxy);
		$loader->register();
		
		$config = new Doctrine\ORM\Configuration();
		$cache = new Doctrine\Common\Cache\ArrayCache();
		$config->setQueryCacheImpl($cache);
		$config->setProxyDir($this->config->db->doctrine->entityProxy);
		$config->setProxyNamespace('EntityProxy');
		$config->setAutoGenerateProxyClasses(true);
		
		Doctrine\Common\Annotations\AnnotationRegistry::registerFile( LIBRARY_PATH . '/Doctrine/ORM/Mapping/Driver/DoctrineAnnotations.php' );
		$driver = new Doctrine\ORM\Mapping\Driver\AnnotationDriver(
			new Doctrine\Common\Annotations\AnnotationReader(),
			array($this->config->db->doctrine->entity)
		);
		$config->setMetadataDriverImpl($driver);
		$config->setMetadataCacheImpl($cache);
		
		$em = Doctrine\ORM\EntityManager::create(
			$this->config->db->params->toArray(),
			$config
		);
		Yaf\Registry::set('entityManager', $em);
		$this->profiler->endEvent( $event );
	}

	public static function error_handler($errno, $errstr, $errfile, $errline)
	{
		global $_DEBUGGER;
		$_DEBUGGER->debug( RDS::ERROR, $errno );
		$_DEBUGGER->debug( RDS::ERROR, $errstr );
		$_DEBUGGER->debug( RDS::ERROR, $errfile );
		$_DEBUGGER->debug( RDS::ERROR, $errline );
		if (!(error_reporting() & $errno)) {
			// This error code is not included in error_reporting
			return;
		}
		echo "deu um erro > $errno, $errstr, $errfile, $errline !";
		//throw new \ErrorException($errstr, 0, $errno, $errfile, $errline);
		return true;
	}
}
