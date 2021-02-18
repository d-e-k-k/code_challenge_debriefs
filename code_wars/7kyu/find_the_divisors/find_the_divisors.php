<?php

function divisors($integer) {
    $divs = array();
    for($i=2; $i<$integer; $i++){
        if($integer % $i === 0){
            array_push($divs, $i);
        }
    }
    return $divs ? $divs: $integer . " is prime"; 
    // if(count($divs) === 0){
    //     return $integer." is prime";
    // }
    // return $divs;
}

print_r (divisors(12));

?>