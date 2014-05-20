<?php
/**
 * @name Bootstrap
 * @author root
 * @desc ������Bootstrap����, ��_init��ͷ�ķ���, ���ᱻYaf����,
 * @see http://www.php.net/manual/en/class.yaf-bootstrap-abstract.php
 * ��Щ����, ������һ������:Yaf_Dispatcher $dispatcher
 * ���õĴ���, �������Ĵ�����ͬ
 */
class Bootstrap extends Yaf_Bootstrap_Abstract {

    private $_config;

    //ʵ������Զ����ػ��ƣ���ģ������ʱ����indexģ���µ�controller����ֱ�Ӽ̳�indexģ���µ�controller����Ҫʵ�������½��֤��Ȩ�޿��Ƶ�
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

    //��Կ�������/�����������д����������
    public function _initErrors(){
        if($this->_config->application->showErrors){
            error_reporting (-1);
            ini_set('display_errors','On');
        }
    }

    //Library ����
    public function _initNamespaces(){
        Yaf_Loader::getInstance()->registerLocalNameSpace(array("Zend"));
    }

    //·������
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
    //��ģ���Զ���·��ʵ��,��������,����
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

    //request�������getParam��getParams��д����Ӧzend����ȡ����
    public function _initRequest(Yaf_Dispatcher $dispatcher)
    {
        $dispatcher->setRequest(new Request());
    }

    //ģ��֧������
    public function _initLayout(Yaf_Dispatcher $dispatcher){
        /*layout allows boilerplate HTML to live in /views/layout rather than every script*/
        $layout = new Layout($this->_config->layout->dir);
        //ajax ���󣬹ر�layout
        if($dispatcher->getRequest()->isXmlHttpRequest() )
        {
            $layout->disableLayout();
        }
        $dispatcher->setView($layout);
    }

    //���ػ�֧��
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
