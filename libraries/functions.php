<?php

function get_link()
{
    $url = basename($_SERVER['PHP_SELF']);
    if (str_contains($url, '.php')) {
        $pagename = str_replace('.php', "", $url);
        return $pagename;
    }
}

function current_url()
{
    $pageURL = 'http';

    if ($_SERVER["HTTPS"] == "on") {
        $pageURL .= "s";
    }

    $pageURL .= "://";

    if ($_SERVER["SERVER_PORT"] != "80" && $_SERVER["SERVER_PORT"] != "443") {
        $pageURL .= $_SERVER["HTTP_HOST"] . ":" . $_SERVER["SERVER_PORT"] . $_SERVER["REQUEST_URI"];
    } else {
        $pageURL .= $_SERVER["HTTP_HOST"] . $_SERVER["REQUEST_URI"];
    }

    return $pageURL;
}

?>