<?php

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="permissions")
 */
class PermissionsModel
{
	const ACTIVE_YES = 'yes';
	const ACTIVE_NO = 'no';
	
	/**
	 * @ORM\Id()
	 * @ORM\Column(type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 * @var int
	 */
	private $id;

	/**
	 * @ORM\Column(type="string", length=45)
	 * @var string
	 */
	private $name;
	
	/**
	 * @ORM\Column(type="text")
	 * @var string
	 */
	private $description;
	
	/**
	 * @ORM\Column(type="string", length=45)
	 * @var string
	 */
	private $prefix;
	
	/**
	 * @ORM\Column(type="string", length=45)
	 * @var string
	 */
	private $module;
	
	/**
	 * @ORM\Column(type="string", length=45)
	 * @var string
	 */
	private $controller;
	
	/**
	 * @ORM\Column(type="string", length=45)
	 * @var string
	 */
	private $action;
	
	public function __construct($name, $description, $prefix, $module, $controller, $action)
	{
		$this->setName( $name );
		$this->setDescription( $description );
		$this->setPrefix( $prefix );
		$this->setModule( $module );
		$this->setController( $controller );
		$this->setAction( $action );
	}

	/**
	 * @return int
	 */
	public function getId()
	{
		return $this->id;
	}
	
	/**
	 * @return string
	 */
	public function getName()
	{
		return $this->name;
	}
	 
	/**
	 * @param string $name
	 */
	public function setName($name)
	{
		$this->name = (string) $name;
	}
	 
	/**
	 * @return string
	 */
	public function getDescription()
	{
		return $this->description;
	}
	 
	/**
	 * @param string $description
	 */
	public function setDescription($description)
	{
		$this->description = (string) $description;
	}
	 
	/**
	 * @return string
	 */
	public function getPrefix()
	{
		return $this->prefix;
	}
	 
	/**
	 * @param string $prefix
	 */
	public function setPrefix($prefix)
	{
		$this->prefix = (string) $prefix;
	}
	 
	/**
	 * @return string
	 */
	public function getModule()
	{
		return $this->module;
	}
	 
	/**
	 * @param string $module
	 */
	public function setModule($module)
	{
		$this->module = (string) $module;
	}
	 
	/**
	 * @return string
	 */
	public function getController()
	{
		return $this->controller;
	}
	 
	/**
	 * @param string $controller
	 */
	public function setController($controller)
	{
		$this->controller = (string) $controller;
	}
	
	/**
	 * @return string
	 */
	public function getAction()
	{
		return $this->action;
	}
	 
	/**
	 * @param string $action
	 */
	public function setAction($action)
	{
		$this->action = (string) $action;
	}
	 
}