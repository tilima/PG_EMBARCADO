<?php

//var_dump($_POST['data']);

$con = mysqli_connect("localhost","root","","datalog_grafico");
// Check connection
if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$sql = "SELECT * FROM leituras WHERE id >= (SELECT MAX(id) FROM leituras) - 300 ORDER BY ID";
$sql2 = "SELECT MAX(data_leitura),HOUR(data_leitura),potencia_ativa FROM leituras WHERE ID GROUP BY HOUR(data_leitura) ORDER BY ID LIMIT 24";

$resp = $con->query($sql);
$resp2 = $con->query($sql2);

while ($row = $resp->fetch_assoc()) {
    $valores[] = $row['dado_leitura'];
    $data_l[] = $row['data_leitura'];
}

while ($row = $resp2->fetch_assoc()) {
    $media[] = $row['potencia_ativa'];
    $data_h[] = $row['HOUR(data_leitura)'];
}

$leitura_json[] = [json_encode($valores),json_encode($data_l),json_encode($media),json_encode($data_h)];

if ($con->query($sql) != NULL) {
    echo json_encode(json_encode($leitura_json));
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}


?>