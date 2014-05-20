<?php
/**
 * author:zoe
 * date:2015-05-17
 * desc: 调用zend view中的helper的工具类
 */
namespace Helper;
class PlaceHolder
{
	private $viewHelper;
	public function __call($method, $args)
    {
        if (preg_match('/^(?P<action>head|(ap|pre)pend)(?P<mode>Link|Script|Style)$/', $method, $matches)) 
        {
            $action  = $matches['action'];
            $mode    = $matches['mode'];
            $type    = 'text/javascript';
           
            if($action == 'head'){
                 $class_name = '\Zend_View_Helper_Head'.$mode;
                if(!class_exists($class_name)){
                    throw \Exception('CLASS NAME '.$class_name.' NOT DEFINED');
                    return false;
                }
                if(!isset($this->viewHelper[$class_name])){
                    $this->viewHelper[$class_name] = new $class_name();    
                }
                return $this->viewHelper[$class_name];
            }

            if($action == 'append'){
                $class_name = '\Zend_View_Helper_Head'.$mode;
                if(isset($this->viewHelper[$class_name])){
                    $hander = $this->viewHelper[$class_name];
                    $exec = 'head'.$mode;
                    return $hander->$exec();
                }
            }
        }
    }
}
?>
