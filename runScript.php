<?php
require_once __DIR__ . '/config/app.php';
$sampleScript = new Classes\SampleScript;
header('Content-type: application/json');
echo json_encode($sampleScript->run());
exit();
