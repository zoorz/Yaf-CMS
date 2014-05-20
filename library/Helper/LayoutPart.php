<?php

namespace Helper;

/**
 * Description of Sidebar Helper
 *
 * @author zoe
 */

class LayoutPart
{
	protected static $arr_sidebar_menu; //左边菜单
	protected static $arr_header_nav_menu;	//头部导航
	protected static $arr_header_sidebar_menu;	//自适应菜单
	protected static $str_breadcrumb; //面包屑

	public static function drawSidebar($sidebar_menu_items){
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

	public static function  drawHeaderNavMenu($header_nav_items){
		
		self::$arr_header_nav_menu = '';
		if(!is_array($header_nav_items)){
			return false;
		}
		if(count($header_nav_items) < 1){
			return false;
		}

		for($i=0; $i<count($header_nav_items);$i++){
			//first
			$p = true;
			$item = $header_nav_items[$i];
			$class = $class_sub = '';
			if(isset($item['active'])){
				$class = "active";
				$class_sub = "open";
			}

			//顶级菜单单独处理
			$url = (isset($item['url']) ? $item['url'] : 'javascript:;');
			self::$arr_header_nav_menu .= '<li class="'.$class.'">';
				
			if(isset($item['sub_menu']) && count($item['sub_menu']) > 0){
				self::$arr_header_nav_menu .= '<a data-toggle="dropdown" data-hover="dropdown" data-close-others="true" class="dropdown-toggle" href="'.$url.'">';
				$select = ($class=='active' ? '<span class="selected"></span>' : '');
				self::$arr_header_nav_menu .= $select;
				self::$arr_header_nav_menu .= $item['title'].'<i class="fa fa-angle-down"></i></a><ul class="dropdown-menu">';
				self::recusiveDrawNavMenu($item['sub_menu']);
				self::$arr_header_nav_menu .= '</ul>';
			}else{
				self::$arr_header_nav_menu .= '<a href="'.$url.'">'.$item['title'];
				$select = ($class=='active' ? '<span class="selected"></span>' : '');
				self::$arr_header_nav_menu .= $select.'</a>';
			}
			self::$arr_header_nav_menu .= '</li>';
		}
		return self::$arr_header_nav_menu;
	}

	//递归调用画子菜单
	public static function recusiveDrawNavMenu($item_list){
		for($i=0; $i<count($item_list);$i++){
			$item = $item_list[$i];
			$class = '';
			if(isset($item['active'])){
				$class = "active";
				$class_sub = "open";
			}

			$url = (isset($item['url']) ? $item['url'] : 'javascript:;');
			
			if(isset($item['sub_menu']) && count($item['sub_menu']) > 0){
				self::$arr_header_nav_menu .= '<li class="dropdown-submenu '.$class.'">'.
				self::$arr_header_nav_menu .= '<a href="'.$url.'">'.$item['title'].'</a><ul class="dropdown-menu">';
				self::recusiveDrawItem($item['sub_menu']);
				self::$arr_header_nav_menu .= '</ul>';
			}else{
				self::$arr_header_nav_menu .= '<li class="'.$class.'">'.
											'<a href="'.$url.'">'.$item['title'].'</a>';
			}
			self::$arr_header_nav_menu .= '</li>';
		}	
	}


	public static function  drawHeaderNavSidebar($header_nav_items){
		self::$arr_header_sidebar_menu = '';
		if(!is_array($header_nav_items)){
			return false;
		}
		if(count($header_nav_items) < 1){
			return false;
		}

		for($i=0; $i<count($header_nav_items);$i++){
			//first
			$p = true;
			$item = $header_nav_items[$i];
			$class = $class_sub = '';
			if(isset($item['active'])){
				$class = "active";
				$class_sub = "open";
			}

			//顶级菜单单独处理
			$url = (isset($item['url']) ? $item['url'] : 'javascript:;');
			self::$arr_header_sidebar_menu .= '<li class="'.$class.'">
				<a href="'.$url.'">'.
				$item['title'];

			if(isset($item['sub_menu']) && count($item['sub_menu']) > 0){
				self::$arr_header_sidebar_menu .= '<span class="arrow '.$class_sub.'"></span>'.
									($class == 'active' ? '<span class="selected"></span>' : '').
									'</a><ul class="sub-menu">';
				self::recusiveDrawNavSidebar($item['sub_menu']);
				self::$arr_header_sidebar_menu .= '</ul>';
			}else{
				self::$arr_header_sidebar_menu .= '</a>';
			}
			self::$arr_header_sidebar_menu .= '</li>';
		}
		return self::$arr_header_sidebar_menu;
	}

	//递归调用画子菜单
	public static function recusiveDrawNavSidebar($item_list){
		for($i=0; $i<count($item_list);$i++){
			$item = $item_list[$i];
			$class = '';
			if(isset($item['active'])){
				$class = "active";
				$class_sub = "open";
			}

			$url = (isset($item['url']) ? $item['url'] : 'javascript:;');
			self::$arr_header_sidebar_menu .= '<li class="'.$class.'">'.
				'<a href="'.$url.'">'.
				$item['title'];
			
			if(isset($item['sub_menu']) && count($item['sub_menu']) > 0){
				self::$arr_header_sidebar_menu .= '<span class="arrow '.$class_sub.'"></span></a><ul class="sub-menu">';
				self::recusiveDrawItem($item['sub_menu']);
				self::$arr_header_sidebar_menu .= '</ul>';
			}else{
				self::$arr_header_sidebar_menu .= '</a>';
			}
			self::$arr_header_sidebar_menu .= '</li>';
		}	
	}

	//面包屑导航
	public static function drawBreadcrumb($breadcrumb_items,$ajaxify=FALSE){
		self::$str_breadcrumb = '';
		if(!is_array($breadcrumb_items)){
			return false;
		}
		if(count($breadcrumb_items) < 1){
			return false;
		}

		self::$str_breadcrumb .= '<ul class="page-breadcrumb breadcrumb">';
		$item_len = count($breadcrumb_items);
		for($i=0; $i<$item_len;$i++){
			
			$item = $breadcrumb_items[$i];
			list($title,$url) = $item;
			$ajaxify_class = isset($url) && $url != '#' ? (!$ajaxify ? : 'ajaxify') : '';
			
			self::$str_breadcrumb .= '<li>'.
				($i>0 ?'':'<i class="fa fa-home"></i>').
				' <a class="'.$ajaxify.'" href="'.$url.'">'.$title.'</a>'.
				($i==($item_len-1) ? '': '<i class="fa fa-angle-right"></i> ').
				'</li>';
		}
		self::$str_breadcrumb .= '</ul>';
		return self::$str_breadcrumb;
	}
}