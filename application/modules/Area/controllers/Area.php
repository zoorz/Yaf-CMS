<?php
require_once 'ServerStat.php';
class AreaController extends ServerStatController
{
	public function indexAction()
	{
		echo "a";exit();
		$this->getView()->setLayout('index');
	}


	public function editAreaAction()
	{
		$model = new Area_AreaModel();
		$model->getPlatInfo();


        $this->getView()->statData = $model->overviewStat($this->game_id);

        $this->getView()->h_breadcrumb = array(
        	array($this->game_name,'/serverstat/index/index/game_id/'.$this->game_id),
        	array(_("区服配置"),'#')
        );
        $this->getView()->title = _('区服配置');
        $this->getView()->brief_desc = _('区服的详细配置查看和编辑');
	}
}