<?php
define("DS", '/');
define("APP_PATH",  dirname(__FILE__).DS.'..'.DS.'application'.DS);

global $_DEBUGGER, $_PROFILER;
if( isset( $_SERVER['SERVER_NAME'] ) )
{
	$name = "{$_SERVER['REQUEST_METHOD']}:{$_SERVER['REQUEST_URI']}";
}
else
{
	$name = $_SERVER['SCRIPT_FILENAME'];
}

$app  = new Yaf_Application(APP_PATH . "conf/application.ini");

$_DEBUGGER = new RDS_Network( $name, 'localhost', '6660', true, false );
$_PROFILER = $_DEBUGGER->newProfiler( 'GLOBAL_PROFILER' );

$app->bootstrap()->run();

$_PROFILER->end();