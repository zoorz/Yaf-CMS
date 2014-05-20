<?php
/**
 * author: zoe
 * date: 2014-05-17
 * desc: Model Base
 */
abstract class BaseModel{
	private $_error;
	protected $db;
	protected $adapter;

	protected function load($dsn){
		$config = Yaf_Registry::get('config')->database;
		if(!$config->$dsn){
			$this->_error = 'DSN:'.$dsn.' NOT DEFINED IN APPLICATION INI';
			return false;
		}

		if(isset($adapter[$dsn])){
			$this->db = $adapter[$dsn];
			return $adapter[$dsn];
		}

		$db_config = $config->$dsn;
		$options = array(
				// required
				'database_type' => $db_config['driver'],
				'database_name' => $db_config['database'],
				'server'        => $db_config['hostname'],
				'username'      => $db_config['username'],
				'password'      => $db_config['password'],
			 
				// optional
				'port'    => isset($db_config['port']) ? $db_config['port'] : '3306',
				'charset' => isset($db_config['charset']) ? $db_config['charset'] : 'utf8',
				// driver_option for connection, read more from http://www.php.net/manual/en/pdo.setattribute.php
				'option' => array(
					PDO::ATTR_CASE => PDO::CASE_NATURAL
				)
		);

		$this->db = $adapter[$dsn] = new Medoo($options);
		return $adapter[$dsn];
	}

	public function getError(){
		return $this->_error;
	}
}