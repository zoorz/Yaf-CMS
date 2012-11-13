<?php
class ApplicationController extends \Yaf\Controller_Abstract
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
        $this->session = Yaf\Session::getInstance();

        // Assign session to views too.
        $this->getView()->session = $this->session;

        // Assign application config file to this controller
        $this->_config = Yaf\Application::app()->getConfig();

        // Assign config file to views
        $this->getView()->config = $this->_config;
        
        $this->getView()->module = $this->getRequest()->getModuleName();
        $this->getView()->controller = $this->getRequest()->getControllerName();
        $this->getView()->action = $this->getRequest()->getActionName();
        
        $this->_entity = Yaf\Registry::get('entityManager');
    }
}