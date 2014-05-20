<?php 

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 * @ORM\Table(name="roles")
 */
class RolesModel
{
	/**
	 * @ORM\Id()
	 * @ORM\Column(type="integer")
	 * @ORM\GeneratedValue(strategy="AUTO")
	 * @var int
	 */
	private $id;

	/**
	 * ORM\ManyToOne(targetEntity="GroupsModel", inversedBy="group")
	 * @var string
	 */
	private $group;
	
	public function __construct($group, $permission)
	{
		$this->setGroup( $group );
		$this->setPermission( $permission );
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
	 * @return PermissionsModel
	 */
	public function getPermission()
	{
		return $this->permission;
	}
	 
	/**
	 * @param string $permission
	 */
	public function setPermission($permission)
	{
		if( $permission instanceof PermissionsModel )
		{
			$this->permission = $permission;
		}
		elseif( is_numeric($permission) )
		{
			$em = Yaf\Registry::get('entityManager');
			$this->setGroup( $em->find('PermissionsModel', $permission) );
		}
		else
		{
			throw new InvalidArgumentException('$permission must be instance of PermissionsModel or null!');
		}
	}
}