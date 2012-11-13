<?php
define("BASE_PATH", realpath(dirname(__FILE__) . "/../../"));
define("APPLICATION_PATH", realpath(dirname(__FILE__) . "/../../application/"));
define("LIBRARY_PATH", realpath(dirname(__FILE__) . "/../../library/"));
define("PUBLIC_PATH", dirname(__FILE__) . "/../../public/");
define("DS", '/');

require_once LIBRARY_PATH . DS . 'RDS' . DS . 'RDS_Network.php';
$rds_config = new Yaf\Config\Ini(APPLICATION_PATH.DS.'configs'.DS.'debug.ini');

$_DEBUGGER = new RDS_Network( 'doctrine-cli.php', $rds_config->rds->host, $rds_config->rds->port, true, false );
$_PROFILER = $_DEBUGGER->newProfiler('GLOBAL_PROFILER');

$app = new \Yaf\Application( APPLICATION_PATH . "/configs/application.ini" );
$app->bootstrap();

use Symfony\Component\Console\Helper\HelperSet,
    Doctrine\ORM\Tools\Console\Helper\EntityManagerHelper,
    Doctrine\DBAL\Tools\Console\Helper\ConnectionHelper,
    Doctrine\ORM\Tools\Console\ConsoleRunner;

$em = Yaf\Registry::get('entityManager');

$helperSet = new HelperSet(array(
    'em' => new EntityManagerHelper($em),
    'conn' => new ConnectionHelper($em->getConnection())
));
ConsoleRunner::run($helperSet);

$app->run();

$_PROFILER->end();