<?php

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="groups")
 */
class GroupsModel
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
	 * @ORM\Column(type="string", length=70)
	 * @var string
	 */
	private $name;
	
	/**
	 * @ORM\Column(type="string", columnDefinition="ENUM('yes', 'no')")
	 * @var string
	 */
	private $active = 'yes';
	
	/**
	 * @ORM\Column(type="datetime")
	 * @var string
	 */
	private $created;
	
	/**
	 * @ORM\Column(type="datetime")
	 * @var string
	 */
	private $modified;
	
	public function __construct($name)
	{
		$this->setName( $name );
		$this->created = new DateTime('now');
		$this->modified = new DateTime('now');
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
	public function getActive()
	{
		return $this->active;
	}
		
	/**
	 * @param string $active
	 */
	public function setActive($active)
	{
		if( !in_array($active, array(self::ACTIVE_YES, self::ACTIVE_NO)) )
		{
			throw new InvalidArgumentException("Invalid value to field 'active'");
		}
		return $this->active;
	}
	
		 
	/**
	 * @return string
	 */
	public function getCreated()
	{
		return $this->created;
	}
	 
	/**
	 * @param string $created
	 */
	public function setCreated($created)
	{
		$this->created = (string) $created;
	}
		 
	/**
	 * @return string
	 */
	public function getModified()
	{
		return $this->modified;
	}
	 
	/**
	 * @param string $modified
	 */
	public function setModified($modified)
	{
		$this->modified = (string) $modified;
	}
	
}