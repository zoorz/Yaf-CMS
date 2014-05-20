<?php 
$dis=Yaf_Dispatcher::getInstance();

$routes = new Yaf_Config_Ini(__DIR__ . "/configs/routes.ini");
$dis->getRouter()->addConfig($routes->serverstat);