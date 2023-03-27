<?php
include './connect.php';

$msg = isset($_GET['msg']) ? $_GET['msg'] : '';
if (empty($msg))
    echo '[[],[],[], []]';
else {
    $prompt = "I want you to Generate a json arrays for soap note element for " . $msg . '. Add some short suggestions. Follow exactly this template {"S": [a,b,c], "O": [a,b,c], "A": [1,2,3], "P": [1,2,3]}.';
    echo sendGBT($prompt);
}
?>