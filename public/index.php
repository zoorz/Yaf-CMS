<?php
ini_set('display_errors', 'on');

define("BASE_PATH", realpath(dirname(__FILE__) . "/../"));
define("APPLICATION_PATH", realpath(dirname(__FILE__) . "/../application/"));
define("LIBRARY_PATH", realpath(dirname(__FILE__) . "/../library/"));
define("PUBLIC_PATH", dirname(__FILE__));
define("DS", '/');

require_once LIBRARY_PATH . DS . 'RDS' . DS . 'RDS_Network.php';
$rds_config = new Yaf\Config\Ini(APPLICATION_PATH.DS.'configs'.DS.'debug.ini');

$_DEBUGGER = new RDS_Network( $_SERVER['REQUEST_URI'], $rds_config->rds->host, $rds_config->rds->port, true, false );
$_PROFILER = $_DEBUGGER->newProfiler('GLOBAL_PROFILER');

$event = $_PROFILER->startEvent('Init application');
$app = new \Yaf\Application( APPLICATION_PATH . "/configs/application.ini" );
$_PROFILER->endEvent( $event );

$event = $_PROFILER->startEvent('Bootstrap loader');
$app->bootstrap();
$_PROFILER->endEvent( $event );

$event = $_PROFILER->startEvent('Run application');
$app->run();
$_PROFILER->endEvent( $event );

$_PROFILER->end();