<?php

//var_dump($_POST['data']);

$con = mysqli_connect("localhost","root","","datalog_grafico");
// Check connection
if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$sql = "SELECT * FROM leituras WHERE id >= (SELECT MAX(id) FROM leituras) - 150 GROUP BY data_leitura ORDER BY ID";
$sql0 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 0 ORDER BY ID DESC LIMIT 1";
$sql1 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 1 ORDER BY ID DESC LIMIT 1";
$sql2 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 2 ORDER BY ID DESC LIMIT 1";
$sql3 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 3 ORDER BY ID DESC LIMIT 1";
$sql4 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 4 ORDER BY ID DESC LIMIT 1";
$sql5 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 5 ORDER BY ID DESC LIMIT 1";
$sql6 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 6 ORDER BY ID DESC LIMIT 1";
$sql7 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 7 ORDER BY ID DESC LIMIT 1";
$sql8 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 8 ORDER BY ID DESC LIMIT 1";
$sql9 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 9 ORDER BY ID DESC LIMIT 1";
$sql10 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 10 ORDER BY ID DESC LIMIT 1";
$sql11 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 11 ORDER BY ID DESC LIMIT 1";
$sql12 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 12 ORDER BY ID DESC LIMIT 1";
$sql13 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 13 ORDER BY ID DESC LIMIT 1";
$sql14 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 14 ORDER BY ID DESC LIMIT 1";
$sql15 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 15 ORDER BY ID DESC LIMIT 1";
$sql16 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 16 ORDER BY ID DESC LIMIT 1";
$sql17 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 17 ORDER BY ID DESC LIMIT 1";
$sql18 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 18 ORDER BY ID DESC LIMIT 1";
$sql19 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 19 ORDER BY ID DESC LIMIT 1";
$sql20 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 20 ORDER BY ID DESC LIMIT 1";
$sql21 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 21 ORDER BY ID DESC LIMIT 1";
$sql22 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 22 ORDER BY ID DESC LIMIT 1";
$sql23 = "SELECT data_leitura,HOUR(data_leitura),potencia_ativa FROM leituras WHERE HOUR(data_leitura) = 23 ORDER BY ID DESC LIMIT 1";
//SELECT MAX(data_leitura),HOUR(data_leitura),potencia_ativa FROM leituras WHERE ID AND DATE(data_leitura) = CURRENT_DATE GROUP BY HOUR(data_leitura) ORDER BY ID LIMIT 24

$resp = $con->query($sql);
$resp0 = $con->query($sql0);
$resp1 = $con->query($sql1);
$resp2 = $con->query($sql2);
$resp3 = $con->query($sql3);
$resp4 = $con->query($sql4);
$resp5 = $con->query($sql5);
$resp6 = $con->query($sql6);
$resp7 = $con->query($sql7);
$resp8 = $con->query($sql8);
$resp9 = $con->query($sql9);
$resp10 = $con->query($sql10);
$resp11 = $con->query($sql11);
$resp12 = $con->query($sql12);
$resp13 = $con->query($sql13);
$resp14 = $con->query($sql14);
$resp15 = $con->query($sql15);
$resp16 = $con->query($sql16);
$resp17 = $con->query($sql17);
$resp18 = $con->query($sql18);
$resp19 = $con->query($sql19);
$resp20 = $con->query($sql20);
$resp21 = $con->query($sql21);
$resp22 = $con->query($sql22);
$resp23 = $con->query($sql23);

while ($row = $resp->fetch_assoc()) {
    $valores[] = $row['dado_leitura'];
    $data_l[] = $row['data_leitura'];
}

if($resp0->num_rows > 0){
    while ($row = $resp0->fetch_assoc()) {
        $media[0] = $row['potencia_ativa'];
        $data_h[0] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[0] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[0] = '0';
}

if($resp1->num_rows > 0){
    while ($row = $resp1->fetch_assoc()) {
        $media[1] = $row['potencia_ativa'];
        $data_h[1] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[1] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[1] = '1';
}

if($resp2->num_rows > 0){
    while ($row = $resp2->fetch_assoc()) {
        $media[2] = $row['potencia_ativa'];
        $data_h[2] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[2] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[2] = '2';
}

if($resp3->num_rows > 0){
    while ($row = $resp3->fetch_assoc()) {
        $media[3] = $row['potencia_ativa'];
        $data_h[3] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[3] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[3] = '3';
}

if($resp4->num_rows > 0){
    while ($row = $resp4->fetch_assoc()) {
        $media[4] = $row['potencia_ativa'];
        $data_h[4] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[4] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[4] = '4';
}

if($resp5->num_rows > 0){
    while ($row = $resp5->fetch_assoc()) {
        $media[5] = $row['potencia_ativa'];
        $data_h[5] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[5] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[5] = '5';
}

if($resp6->num_rows > 0){
    while ($row = $resp6->fetch_assoc()) {
        $media[6] = $row['potencia_ativa'];
        $data_h[6] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[6] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[6] = '6';
}

if($resp7->num_rows > 0){
    while ($row = $resp7->fetch_assoc()) {
        $media[7] = $row['potencia_ativa'];
        $data_h[7] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[7] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[7] = '7';
}

if($resp8->num_rows > 0){
    while ($row = $resp8->fetch_assoc()) {
        $media[8] = $row['potencia_ativa'];
        $data_h[8] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[8] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[8] = '8';
}

if($resp9->num_rows > 0){
    while ($row = $resp9->fetch_assoc()) {
        $media[9] = $row['potencia_ativa'];
        $data_h[9] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[9] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[9] = '9';
}

if($resp10->num_rows > 0){
    while ($row = $resp10->fetch_assoc()) {
        $media[10] = $row['potencia_ativa'];
        $data_h[10] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[10] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[10] = '10';
}

if($resp11->num_rows > 0){
    while ($row = $resp11->fetch_assoc()) {
        $media[11] = $row['potencia_ativa'];
        $data_h[11] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[11] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[11] = '11';
}

if($resp12->num_rows > 0){
    while ($row = $resp12->fetch_assoc()) {
        $media[12] = $row['potencia_ativa'];
        $data_h[12] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[12] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[12] = '12';
}

if($resp13->num_rows > 0){
    while ($row = $resp13->fetch_assoc()) {
        $media[13] = $row['potencia_ativa'];
        $data_h[13] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[13] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[13] = '13';
}

if($resp14->num_rows > 0){
    while ($row = $resp14->fetch_assoc()) {
        $media[14] = $row['potencia_ativa'];
        $data_h[14] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[14] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[14] = '14';
}

if($resp15->num_rows > 0){
    while ($row = $resp15->fetch_assoc()) {
        $media[15] = $row['potencia_ativa'];
        $data_h[15] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[15] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[15] = '15';
}

if($resp16->num_rows > 0){
    while ($row = $resp16->fetch_assoc()) {
        $media[16] = $row['potencia_ativa'];
        $data_h[16] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[16] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[16] = '16';
}

if($resp17->num_rows > 0){
    while ($row = $resp17->fetch_assoc()) {
        $media[17] = $row['potencia_ativa'];
        $data_h[17] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[17] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[17] = '17';
}

if($resp18->num_rows > 0){
    while ($row = $resp18->fetch_assoc()) {
        $media[18] = $row['potencia_ativa'];
        $data_h[18] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[18] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[18] = '18';
}

if($resp19->num_rows > 0){
    while ($row = $resp19->fetch_assoc()) {
        $media[19] = $row['potencia_ativa'];
        $data_h[19] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[19] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[19] = '19';
}

if($resp20->num_rows > 0){
    while ($row = $resp20->fetch_assoc()) {
        $media[20] = $row['potencia_ativa'];
        $data_h[20] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[20] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[20] = '20';
}

if($resp21->num_rows > 0){
    while ($row = $resp21->fetch_assoc()) {
        $media[21] = $row['potencia_ativa'];
        $data_h[21] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[21] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[21] = '21';
}

if($resp22->num_rows > 0){
    while ($row = $resp22->fetch_assoc()) {
        $media[22] = $row['potencia_ativa'];
        $data_h[22] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[22] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[22] = '22';
}

if($resp23->num_rows > 0){
    while ($row = $resp23->fetch_assoc()) {
        $media[23] = $row['potencia_ativa'];
        $data_h[23] = $row['HOUR(data_leitura)'];
    }
}else{
    $media[23] = '{"medidor_1":{"Potencia_Ativa":"0"},"medidor_2":{"Potencia_Ativa":"0"},"medidor_3":{"Potencia_Ativa":"0"},"medidor_4":{"Potencia_Ativa":"0"},"medidor_5":{"Potencia_Ativa":"0"},"medidor_6":{"Potencia_Ativa":"0"},"medidor_7":{"Potencia_Ativa":"0"},"medidor_8":{"Potencia_Ativa":"0"},"medidor_9":{"Potencia_Ativa":"0"},"medidor_10":{"Potencia_Ativa":"0"},"total":{"Potencia_Ativa":"0"}}';
    $data_h[23] = '23';
}

$leitura_json[] = [json_encode($valores),json_encode($data_l),json_encode($media),json_encode($data_h)];

if ($con->query($sql) != NULL) {
    echo json_encode(json_encode($leitura_json));
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}


?>