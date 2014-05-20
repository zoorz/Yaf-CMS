<?php
ini_set('date.timezone','Asia/Shanghai');
ini_set('yaf.use_spl_autoload','0');
define("DS", '/');
define("APP_PATH",  dirname(__FILE__).DS.'..'.DS.'application'.DS);

 //开发环境配置
define("ENV",'devel');
$app  = new Yaf_Application(APP_PATH . "conf/application.ini",ENV);
$app->bootstrap()->run();



