<?php /* Smarty version Smarty-3.1.12, created on 2012-10-17 16:00:59
         compiled from "/home/lucas/workspace/YafCMS/application/views/error/error.tpl" */ ?>
<?php /*%%SmartyHeaderCode:1586912724507effeeea0ae0-60167435%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '4be2315e039ee4e696858e17cd5a1d7676fe9116' => 
    array (
      0 => '/home/lucas/workspace/YafCMS/application/views/error/error.tpl',
      1 => 1350500458,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '1586912724507effeeea0ae0-60167435',
  'function' => 
  array (
  ),
  'version' => 'Smarty-3.1.12',
  'unifunc' => 'content_507effeef03247_35552846',
  'variables' => 
  array (
    'error' => 0,
    'message' => 0,
    'trace' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_507effeef03247_35552846')) {function content_507effeef03247_35552846($_smarty_tpl) {?><!DOCTYPE html>
<html>
    <head>
        <title>Error</title>
        <link rel="stylesheet" type="text/css" href="/css/screen.css" />
        <script type="text/javascript" src="/js/main.js"></script>
    </head>
    <body>
        <h1><?php echo $_smarty_tpl->tpl_vars['error']->value;?>
</h1>
        <?php if ($_smarty_tpl->tpl_vars['message']->value){?><pre><?php echo $_smarty_tpl->tpl_vars['message']->value;?>
</pre><?php }?>
		<?php if ($_smarty_tpl->tpl_vars['trace']->value){?><pre><?php echo $_smarty_tpl->tpl_vars['trace']->value;?>
</pre><?php }?>
    </body>
</html>


<?php }} ?>