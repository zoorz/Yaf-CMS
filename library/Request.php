<?php

/**
 * Filter user input data.
 * 
 * Filter quotes and double quotes from  user input data by applying 
 * htmlspecioalchars function with parametes ENT_QUOTES and UTF-8.
 * 
 * @return array the user data filtered,
 */ 
class Request extends Yaf_Request_Http
{
    private $_posts;
    private $_params;
    private $_query;
    private $_mix_params;

    public function getPost()
    {
        if ($this->_posts) {
            return $this->_posts;
        }

        $this->_posts = $this->filter_params(parent::getPost());
        return $this->_posts;
    }

    public function getParams()
    {
        if ($this->_params) {
            return $this->_params;
        }

        $this->_params = $this->filter_params(parent::getParams());
        return $this->_params;

    }

    public function getParam($key,$default=NULL)
    {
        if(empty($key)){
            return $default;
        }
        if($value = parent::getParam($key)){
           return $value;
        }
        $this->getParams();
        $this->getPost();
        $this->getQuery();
        $this->_mix_params = array_merge($this->_params,$this->_query,$this->_posts);
        if(isset($this->_mix_params[$key])){
            return $this->_mix_params[$key];
        }else{
            return $default;
        }
    }

    public function getAllParams(){
        if($this->_mix_params){
            return $this->_mix_params;
        }
        $this->getParam('');
        return $this->_mix_params;
    }

    public function getQuery()
    {
        if ($this->_query) {
            return $this->_query;
        }

        $this->_query = $this->filter_params(parent::getQuery());
        return $this->_query;

    }

    private function filter_params($params)
    {
        if (!empty($params)) {
            array_walk_recursive($params, function(&$value, $key){
                $value=htmlspecialchars($value,ENT_QUOTES,'UTF-8');
            });
        }

        return $params;
    }
}