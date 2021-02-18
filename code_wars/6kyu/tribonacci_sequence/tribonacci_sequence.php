<?php

function tribonacci($signature, $n)
{
    $temp1 = $signature[0];
    $temp2 = $signature[1];
    $temp3 = $signature[2];
    $ansArr = array();
    while($n > count($ansArr)){
        array_push($ansArr, $temp1);
        $next = $temp1 + $temp2 + $temp3;
        $temp1 = $temp2;
        $temp2 = $temp3;
        $temp3 = $next;
    }

    return $ansArr;
    // if ($n === 0) {
    //     return [];
    // }
    // if ($n === count($signature)) {
    //     return $signature;
    // } else {
    //     $temp1 = $signature[(count($signature) - 3)];
    //     $temp2 = $signature[(count($signature) - 2)];
    //     $temp3 = $signature[(count($signature) - 1)];
    //     array_push($signature, ($temp1 + $temp2 + $temp3));
    //     return tribonacci($signature, $n);
    // }
}

print_r(tribonacci([1, 1, 1], 10))
//[1,1,1,3,5,9,17,31,57,105]

// $arr = array(1, 43, 7);
// echo count($arr)."\n";
// echo $arr[(count($arr)-1)];

?>