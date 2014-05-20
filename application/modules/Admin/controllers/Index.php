<?php
require_once 'Admin.php';
class IndexController extends AdminController
{
	public function indexAction()
	{
		$this->getView()->setLayout('index');
	}

	public function overviewAction()
	{
		$model = new ServerStatModel();
        $this->getView()->statData = $model->overviewStat($this->game_id);

        $this->getView()->h_breadcrumb = array(
        	array($this->game_name,'/serverstat/index/index/game_id/'.$this->game_id),
        	array(_("服务器概览"),'#')
        );
        $this->getView()->title = _('服务器概览');
        $this->getView()->brief_desc = _('服务器,成本,硬件概览信息');
	}

	public function demoAction()
	{
		
	}
}