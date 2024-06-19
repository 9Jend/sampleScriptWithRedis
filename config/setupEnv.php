<?php
$dotEnv = parse_ini_file(__DIR__."/../.env");
foreach($dotEnv as $key => $env){
    putenv("$key=$env");
}