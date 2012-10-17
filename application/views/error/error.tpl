<!DOCTYPE html>
<html>
    <head>
        <title>Error</title>
        <link rel="stylesheet" type="text/css" href="/css/screen.css" />
        <script type="text/javascript" src="/js/main.js"></script>
    </head>
    <body>
        <h1>{$error}</h1>
        {if $message}<pre>{$message}</pre>{/if}
		{if $trace}<pre>{$trace}</pre>{/if}
    </body>
</html>


