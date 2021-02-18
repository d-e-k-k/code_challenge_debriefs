<?php
function highAndLow($numbers)
{
  $numbersArr = explode(" ", $numbers);
  print_r ($numbersArr);
//   echo var_dump($numbersArr);
//   return "".max(...$numbersArr)." ".min(...$numbersArr)."";
}

highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4");

?>