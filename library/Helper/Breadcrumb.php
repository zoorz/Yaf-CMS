<?php

namespace Helper;
/**
 * author:zoe
 * date:2014-05-17
 * desc: 生成面包屑
 */


class Breadcrumb
{
	protected static $str_breadcrumb;
	public static function draw($breadcrumb_items,$ajaxify=FALSE){
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
				($i>0 ? :'<i class="fa fa-home"></i>').
				'<a class="'.$ajaxify.'" href="'.$url.'">'.
				($i==$item_len ? : '<i class="fa fa-angle-right"></i>').
				'</li>';
		}
		self::$str_breadcrumb .= '</ul>';
		return self::$str_breadcrumb;
	}
}