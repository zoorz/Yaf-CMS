<?php
/**
 * author:zoe
 * date:2015-05-18
 * desc: 系统配置相关数据(导航菜单,主题等)
 */
 class SystemConfigModel extends BaseModel
 {
 	public function headerNav($game_id=null)
 	{
 		//返回导航菜单数据:demo
        $statModel = new ServerStatModel();
        $game_list = $statModel->getBelongTo();
        $nav_menu = array();
        $sub_menu = array();
        $visual_num = 3; //导航菜单显示游戏个数,其余收进'更多',避免视图混乱

        $index = 0;
        krsort($game_list);
        foreach($game_list as $id=>$name){
            $item = array(
                    'url'=>'/serverstat/index/index/game_id/'.$id,
                    'title'=>_($name)
            );
            if($game_id == $id){
                $item['active'] = TRUE;
                if($index >= $visual_num){
                    $sub_menu['active'] = TRUE;
                }
            }

            if($index < $visual_num){
                $nav_menu[] = $item;
            }else{
                $sub_menu['sub_menu'][] = $item;
            }
            $index++;
        }
        if(count($game_list) > $visual_num){
            $sub_menu['title'] = _('更多');
            $nav_menu[] = $sub_menu;
        }
        $home = array(
                'url'=>'/index/index',
                'title'=>_('首页'),
        );
        if(empty($game_id)){
            $home['active'] = TRUE;
        }

        // $module = Yaf_Controller_Abstract::getModuleName();
        // var_dump($module);
        // exit;
        $manage = array(
                'url'=>'/admin/index/index',
                'title'=>_('服务器操作'),
        );
        array_unshift($nav_menu, $manage);
        array_unshift($nav_menu, $home);

        return $nav_menu;
 		
        /*
        return array(
            array(
                'url'=>'/index/index',
                'title'=>_('首页'),
                'active'=>TRUE,
            ),
            array(
                'url'=>'/serverstat/index/index/game_id/5',
                'title'=>_('街机武侠'),
            ),
             array(
                'url'=>'/serverstat/index/index/game_id/3',
                'title'=>_('天下第一'),
            ),
            array(
                'title'=>_('更多'),
                
                'sub_menu'=>array(
                    array(
                        'url'=>'/index/index/game_id/1',
                        'title'=>_('海贼I')
                    ),
                    array(
                        'url'=>'/index/index/game_id/4',
                        'title'=>_('海贼II'),
                    )
                )
            )
        );
        */
 	}

    public function sideBar()
    {
        //返回做菜单数据:demo
        return array(
            array(
                'url'=>'/serverstat/index/overview',
                'title'=>_('首页'),
                'icon'=>'fa-home'
            ),
            array(
                'title'=>_('硬件管理'),
                'sub_menu'=>array(
                    array(
                        'url'=>'/serverstat/index/demo',
                        'title'=>_('服务器成本')
                    ),
                    array(
                        'url'=>'/serverstat/index/demo',
                        'title'=>_('服务器参数详情')
                    ),
                    array(
                        'url'=>'/serverstat/index/demo',
                        'title'=>_('区服状态')
                    )
                )
            ),
            array(
                'title'=>_('DB管理'),
                'sub_menu'=>array(
                    array(
                        'url'=>'/serverstat/index/demo',
                        'title'=>_('DB备份')
                    ),
                    array(
                        'url'=>'/serverstat/index/demo',
                        'title'=>_('服务器参数详情')
                    ),
                    array(
                        'url'=>'/serverstat/index/demo',
                        'title'=>_('区服状态')
                    )
                )
            ),
            array(
                'title'=>_('区服管理'),
                'sub_menu'=>array(
                    array(
                        'url'=>'/area/area/editArea',
                        'title'=>_('区服信息配置')
                    )
                )
            )
        );
    }
 } 