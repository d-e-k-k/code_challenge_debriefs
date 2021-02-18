<?php
function isIsogram($string)
{
    $arr = (str_split($string));
    foreach ($arr as $value) {
        $reg = '/' . $value . '/i';
        preg_match_all($reg, $string, $matches);
        if (count($matches[0]) > 1) {
            return false;
        }
    }
    return true;
}

echo isIsogram("catp");
?>