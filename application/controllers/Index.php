<?php
class IndexController extends ApplicationController {

	public function init()
	{
		parent::init();
		$this->getView()->h_breadcrumb = array(
			array(_('首页'),'/index/index')
		);
		// Set the layout.
        $this->getView()->setLayout($this->layout);
	}
    public function indexAction() {
        $model = new ServerStatModel();
        $this->getView()->statData = $model->overviewStat();
        $this->getView()->h_breadcrumb = array(
        	
        	array(_('首页'),'/index/index'),
        	array(_("硬件概览"),'#')
        );
        $this->getView()->title = _('硬件概览');
        $this->getView()->brief_desc = _('服务器,成本,硬件概览信息');
    }

    public function demoAction(){
        $this->getView()->disableLayout();
        $this->getView()->test = 'aaaa';
    }
    
}
