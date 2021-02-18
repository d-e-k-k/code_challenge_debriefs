<?php
function spinWords(string $str){
  $wordsArr = explode(" ", $str);
  for($i = 0; $i < count($wordsArr); $i++){
    if(strlen($wordsArr[$i]) >= 5){
        $wordsArr[$i] = strrev($wordsArr[$i]);
    }
  }
  return implode(" ",$wordsArr);
}

echo spinWords("Hey fellow warriors")

?>