<?php
function even_or_odd(int $n){
    if($n === 0){
        return "Even";
    }elseif($n % 2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
}

echo even_or_odd(0)

?>
