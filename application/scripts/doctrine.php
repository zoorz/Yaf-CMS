<?php
define("DS", '/');

//Caminho para a pasta da aplicação
defined('APP_PATH')
|| define("APP_PATH",  dirname(__FILE__).DS.'..'.DS);
//Ambiente em que a aplicação será executada
defined('APPLICATION_ENV')
    || define('APPLICATION_ENV', (getenv('APPLICATION_ENV') ? getenv('APPLICATION_ENV') : 'doctrineCLI'));
 
//Adiciona a "library" no include_path
set_include_path(implode(PATH_SEPARATOR, array(
    realpath(APP_PATH . '/../library'),
    get_include_path()
)));
 
$application = new Yaf_Application(APP_PATH . "conf/application.ini");

$application->bootstrap()->bootstrap('autoload');
$application->bootstrap()->bootstrap('doctrine');
 
$config = Yaf_Application::app()->getConfig()->doctrine->toArray();
 
//$cli = new Doctrine_Cli($config);
//$cli->run($_SERVER['argv']);

Doctrine_Core::generateModelsFromDb(
    'models',
    array('doctrine'),
    array('generateTableClasses' => true)
);