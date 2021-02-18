<?php
function countBits($n, $counter=0)
{
    return preg_match_all("/1/", decbin($n));
    // $nMod = $n;
    // if($n < 2)
//    if($nMod < 2){
//        echo $n*(2**$counter)."\n";
//        return $counter;
//    }else{
//        $nMod = $nMod/2;
//        $counter++;
//        return countBits($nMod, $counter);
//    }
}

echo countBits(172);

// $a = 3;
// $b = $a;
// echo "b: ".$b."\n";
// $b = 5;
// echo "b: ".$b."\n";
// echo "a: ".$a."\n";
?>