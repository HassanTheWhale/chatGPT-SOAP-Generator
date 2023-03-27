<?php
include './connect.php';

$msg = isset($_GET['msg']) ? $_GET['msg'] : '';
if (empty($msg))
    echo '[]';
else {
    $prompt = "I want you to Generate a json array for ICD-10 for the following information " . $msg . '. Follow exactly this template [{"code": "CodeNum", "explination": "explination here"}, {"code": "CodeNum", "explanation": "explanation here"}]';
    echo sendGBT($prompt);
}
?>