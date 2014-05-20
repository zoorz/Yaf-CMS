<?php
abstract class ApplicationController extends Yaf_Controller_Abstract
{
    protected $layout = 'default';

    protected $_session;

    protected $_config;
    
    protected $_view;
    
    protected $_entity;

    public function init()
    {
    	// Set the layout.
        $this->getView()->setLayout($this->layout);

        //Set session.
        @$this->_session = Yaf_Session::getInstance();
        //var_dump($this->_session);
        // exit;

        // Assign session to views too.
        //$this->getView()->session = $this->session;

        // Assign application config file to this controller
        $this->_config = Yaf_Application::app()->getConfig();

        // Assign config file to views
        $this->getView()->config = $this->_config;
        
        $this->getView()->assets_base_url = $this->_config->application->assetsBase;
        $this->getView()->resource_version = $this->_config->application->resourceVersion;
        $this->getView()->module = $this->getRequest()->getModuleName();
        $this->getView()->controller = $this->getRequest()->getControllerName();
        $this->getView()->action = $this->getRequest()->getActionName();
        $sysConf = new SystemConfigModel();

        $this->getView()->header_nav = $sysConf->headerNav();
    }

    public function getParam($name, $default="") {
        $name = $this->getRequest()->getParam($name,$default);
        if(is_array($name)){
            return $name;
        }
        $name = htmlspecialchars($name);
        $name = get_magic_quotes_gpc() ? stripslashes($name) : mysql_escape_string($name);
        return $name;
    }
}