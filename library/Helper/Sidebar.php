<?php

/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

namespace Helper;

/**
 * Description of Html Helper
 *
 * @author Andreas Kollaros
 */

class Sidebar
{
	protected static $arr_sidebar_menu;
	public static function draw($sidebar_menu_items){
		self::$arr_sidebar_menu = '';
		if(!is_array($sidebar_menu_items)){
			return false;
		}
		if(count($sidebar_menu_items) < 1){
			return false;
		}

		for($i=0; $i<count($sidebar_menu_items);$i++){
			//first
			$p = true;
			$item = $sidebar_menu_items[$i];
			$class = '';
			if( $i == 0 ){
				$class = "start";
			}
			//last
			if( $i == count($sidebar_menu_items) - 1){
				$class = "last";
			}

			//顶级菜单单独处理
			$ajaxify = isset($item['url']) && $item['url'] != '#' ? 'ajaxify' : '';
			$url = (isset($item['url']) ? $item['url'] : 'javascript:;');
			self::$arr_sidebar_menu .= '<li class="'.$class.'">
				<a class="'.$ajaxify.' '.$class.'" href="'.$url.'">'.
				'<i class="fa '.(isset($item['icon']) ? $item['icon'] : 'fa-gear').'"></i>'.
				'<span class="title">'.$item['title'].'</span>'.
				'<span class="selected"></span>';
			
			if(isset($item['sub_menu']) && count($item['sub_menu']) > 0){
				self::$arr_sidebar_menu .= '<span class="arrow"></span></a><ul class="sub-menu">';
				self::recusiveDrawItem($item['sub_menu']);
				self::$arr_sidebar_menu .= '</ul>';
			}else{
				self::$arr_sidebar_menu .= '</a>';
			}
			self::$arr_sidebar_menu .= '</li>';
		}
		return self::$arr_sidebar_menu;
	}

	//递归调用画子菜单
	public static function recusiveDrawItem($item_list){
		for($i=0; $i<count($item_list);$i++){
			$item = $item_list[$i];

			$ajaxify = isset($item['url']) && $item['url'] != '#' ? 'ajaxify' : '';
			$url = (isset($item['url']) ? $item['url'] : 'javascript:;');
			self::$arr_sidebar_menu .= '<li>
				<a class="'.$ajaxify.'" href="'.$url.'">'.
				(isset($item['icon']) ? '<i class="fa '. $item['icon'] .'"></i>' : '').
				$item['title'];
			
			if(isset($item['sub_menu']) && count($item['sub_menu']) > 0){
				self::$arr_sidebar_menu .= '<span class="arrow"></span></a><ul class="sub-menu">';
				self::recusiveDrawItem($item['sub_menu']);
				self::$arr_sidebar_menu .= '</ul>';
			}else{
				self::$arr_sidebar_menu .= '</a>';
			}
			self::$arr_sidebar_menu .= '</li>';
		}	
	}
}