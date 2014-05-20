<?php
/**
 * @name Bootstrap
 * @author root
 * @desc 所有在Bootstrap类中, 以_init开头的方法, 都会被Yaf调用,
 * @see http://www.php.net/manual/en/class.yaf-bootstrap-abstract.php
 * 这些方法, 都接受一个参数:Yaf_Dispatcher $dispatcher
 * 调用的次序, 和申明的次序相同
 */
class Bootstrap extends Yaf_Bootstrap_Abstract {

    private $_config;

    //实现类的自动加载机制，多模块配置时，非index模块下的controller可以直接继承index模块下的controller，主要实现诸如登陆验证，权限控制等
    public function _initLoader(Yaf_Dispatcher $dispatcher)
    {
        $loader = Tectrend\Autoloader::getInstance( $dispatcher->getApplication()->getModules() );
    }

    /*get a copy of the config*/
    public function _initBootstrap(){
        $this->_config = Yaf_Application::app()->getConfig();
        Yaf_Registry::set('config',$this->_config);
    }

    /*
     * initIncludePath is only required because zend components have a shit load of
     * include_once calls everywhere. Other libraries could probably just use
     * the autoloader (see _initNamespaces below).
     */
    public function _initIncludePath(){
        set_include_path(get_include_path() . PATH_SEPARATOR . $this->_config->application->library->directory);
    }

    //针对开发环境/生产环境进行错误输出控制
    public function _initErrors(){
        if($this->_config->application->showErrors){
            error_reporting (-1);
            ini_set('display_errors','On');
        }
    }

    //Library 导入
    public function _initNamespaces(){
        Yaf_Loader::getInstance()->registerLocalNameSpace(array("Zend"));
    }

    //路由配置
    public function _initRoutes(){
        /*
        $config = new Yaf_Config_Ini(APP_PATH.'conf/routes.ini');
        if( isset($config->routes) )
        {
            $dispatcher->getRouter()->addConfig($config->routes);
        }
        */
    }

    /*
    //多模块自定义路由实现,存在问题,搁置
    public function _initModules(Yaf_Dispatcher $dispatcher)
    {
        $app = $dispatcher->getApplication();
        $modules = $app->getModules();
        
        foreach ($modules as $module)
        {
            if ( strcmp($module, 'Index') == 0) continue;
            //require_once $app->getAppDirectory() . "/modules/{$module}/_init.php";
        }
    }
    */

    //request处理，针对getParam，getParams重写，适应zend风格获取参数
    public function _initRequest(Yaf_Dispatcher $dispatcher)
    {
        $dispatcher->setRequest(new Request());
    }

    //模板支持配置
    public function _initLayout(Yaf_Dispatcher $dispatcher){
        /*layout allows boilerplate HTML to live in /views/layout rather than every script*/
        $layout = new Layout($this->_config->layout->dir);
        //ajax 请求，关闭layout
        if($dispatcher->getRequest()->isXmlHttpRequest() )
        {
            $layout->disableLayout();
        }
        $dispatcher->setView($layout);
    }

    //本地化支持
    public function _initLocales(Yaf_Dispatcher $dispatcher)
    {
        $lang = $this->_config->language;
        $lang = 'zh_US';
        putenv("LANG=".$lang);
        setlocale(LC_ALL, $lang);
        bindtextdomain('sysconf', APP_PATH . 'locales' . DS);
        textdomain('sysconf');
    }
}
