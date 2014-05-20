<?php
/**
 * author:zoe
 * date: 2014-05-17
 * desc: 硬件概览
 */
class ServerStatModel extends BaseModel
{
	private $_category;
	private $_belongTo;

	public function __construct()
	{
		$this->setCategory();
		$this->setBelongTo();

	}

	public function setCategory($category=null)
	{
		if(empty($category)){
			$category = array(
				1=>'CPP',
				2=>'DB',
				3=>'Web',
				'default'=>_('未分配')
			);
		}
		$this->_category = $category;
	}

	public function getCategory(){
		return $this->_category;
	}

	//设置服务器所属项目组(游戏)信息
	public function setBelongTo($info=null)
	{
		if(empty($info)){
			$this->load('game_area_manage');
			$result = $this->db->select('game_info_new',array("game_id","game_name"));
			foreach($result as $row){
				$info[$row['game_id']] = $row['game_name'];
			}
		}
		$this->_belongTo = $info;
	}

	public function getBelongTo()
	{
		return $this->_belongTo;
	}

	public function overviewStat($game_id=null)
	{
		if(!empty($game_id)){
			$where = array("game_id"=>$game_id);
		}else{
			$where = array();
		}
		$this->load('server_stat');
		$query_result = $this->db->select('machine_table',
			array(
				"[>]static_info" => array("inner_ip","out_ip"),
				"[>]server_area_info" => array("inner_ip","out_ip"),
			),//left join
			array(
				'machine_table.inner_ip(inner_ip)',
				'machine_table.out_ip(out_ip)',
				'cpu',
				'mem',
				'disk',
				'idc',
				'status',
				'game_id',
				'flag'
			),//columns,
			$where
		);
		if(!empty($query_result))
		{
			foreach($query_result as &$row)
			{
				$row['category'] = isset($this->_category[$row['flag']]) ? $this->_category[$row['flag']] : $this->_category['default'];
				$row['belong_to'] = isset($this->_belongTo[$row['game_id']]) ? $this->_belongTo[$row['game_id']] : _('未分配');
			}	
		}
		
		return $query_result;
	}
}