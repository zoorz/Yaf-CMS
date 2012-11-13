<?php 
$dis=Yaf\Dispatcher::getInstance();

$routes = new Yaf\Config\Ini(__DIR__ . "/configs/routes.ini");
$dis->getRouter()->addConfig($routes->admin);