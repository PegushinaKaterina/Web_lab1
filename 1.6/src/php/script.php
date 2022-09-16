<?php
    date_default_timezone_set('UTC');
    $start_time = microtime(true);
    session_start();
    if(!isset($_SESSION['table'])) {
        $_SESSION['table'] = '';
    }

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        exit($_SESSION['table']);
    }

//    if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
//        $_SESSION['table'] = null;
//        exit("Таблица очищена");
//    }
    if (isset($_POST['cleanTable'])) {
        $_SESSION['table'] = null;
        exit("Таблица очищена");
    } else{
        if (isset($_POST['x']) && isset($_POST['y']) && isset($_POST['r']) && isset($_POST['utc'])) {
            $x = $_POST['x'];
            $y = $_POST['y'];
            $r = $_POST['r'];
            $utc = $_POST['utc'];
        } else {
            http_response_code(400);
            exit("Значения не корректны, повторите ввод");
        }

        if (is_numeric($x) && is_numeric($y) && is_numeric($r) && is_numeric($utc)) {
            $x = intval($x);
            $y = floatval($y);
            $r = floatval($r);
            $utc = intval($utc);
        } else {
            http_response_code(404);
            exit("Значения не корректны, повторите ввод");
        }

        function hitInArea($x, $y, $r) {
            $hitInFirstQuarter = ($x >= 0) && ($y >= 0)
                && (pow($x, 2) + pow($y, 2) <= pow($r/2, 2));
            $hitInSecondQuarter = ($x >= -$r) && ($x <= 0) && ($y >= 0) && ($y <= $r/2);
            $hitInFourthQuarter = ($x >= 0) && ($y <= 0) && ($x - 2 * $y <= $r);
            if ($hitInFirstQuarter || $hitInSecondQuarter || $hitInFourthQuarter){
                return "Попадание";
            } else {
                return "Промах";
            }
        }

        $result = hitInArea($x, $y, $r);
        $current_time = date("H:i:s", time() - $utc * 60);
        $end_time = microtime(true);
        $computation_time = number_format(($end_time - $start_time) * 1000, 3, ".", "");
        $table_row = "<div class = 'table-row'>
                <div>$x</div>
                <div>$y</div>
                <div>$r</div>
                <div>$result</div>
                <div><time>$current_time</time></div>
                <div><time>$computation_time</time></div>
            </div>";
        $_SESSION['table'] =  $_SESSION['table'].$table_row;
        exit($table_row);
    }