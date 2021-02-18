<?php
function find_uniq($a)
{
    sort($a);
    return $a[0] === $a[1] ? $a[count($a) -1] : $a[0];
}
echo find_uniq([5,5,5,11,5,5]);
// print_r (find_uniq([1, 1, 1, 2, 1, 1]));
?>