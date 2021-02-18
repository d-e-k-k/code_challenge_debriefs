<?php
function detect_pangram($string) { 
  $strArr = str_split(strtolower($string));
  $set = [];
  for($i = 0; $i<count($strArr); $i++){
    if(preg_match('/[a-z]/i', $strArr[$i])){
      $set[$strArr[$i]] = 1;
    }
  }
  return count($set) === 26;
}

print_r(detect_pangram("aabbcc"));



?>