<?php

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="products")
 */
class ProductsModel
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
	 * @ORM\ManyToOne(targetEntity="ProductsCategoryModel", inversedBy="products_category")
	 * @var ProductsCategory|null
	 */
	private $products_category;

	/**
	 * @ORM\Column(type="string", length=70)
	 * @var string
	 */
	private $name;
	
	/**
	 * @ORM\Column(type="string", length=100)
	 * @var string
	 */
	private $email;
	
	/**
	 * @ORM\Column(type="string", length=20)
	 * @var string
	 */
	private $login;
	
	/**
	 * @ORM\Column(type="string", length=200)
	 * @var string
	 */
	private $password;
	
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
	
	public function __construct($group, $name, $email, $login, $password)
	{
		$this->setGroup( $group );
		$this->setName( $name );
		$this->setEmail( $email );
		$this->setLogin( $login );
		$this->setPassword( $password );
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
	 * @return GroupsModel
	 */
	public function getGroup()
	{
		return $this->group;
	}
	 
	/**
	 * @param string $group
	 */
	public function setGroup($group)
	{
		if( $group instanceof GroupsModel )
		{
			$this->group = $group;
		}
		elseif( is_numeric($group) )
		{
			$em = Yaf\Registry::get('entityManager');
			$this->setGroup( $em->find('GroupsModel', $group) );
		}
		else
		{
			throw new InvalidArgumentException('$group must be instance of GroupsModel or null!');
		}
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
	public function getEmail()
	{
		return $this->email;
	}
	 
	/**
	 * @param string $email
	 */
	public function setEmail($email)
	{
		$this->email = (string) $email;
	}
	 
	/**
	 * @return string
	 */
	public function getLogin()
	{
		return $this->login;
	}
	 
	/**
	 * @param string $login
	 */
	public function setLogin($login)
	{
		$this->login = (string) $login;
	}
	 
	/**
	 * @return string
	 */
	public function getPassword()
	{
		return $this->password;
	}
	 
	/**
	 * @param string $password
	 */
	public function setPassword($password)
	{
		$this->password = (string) $password;
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