<?php

//var_dump($_POST['data']);

$con = mysqli_connect("localhost","root","","datalog_grafico");
// Check connection
if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$sql = "SELECT ID,data_leitura,dado_leitura,potencia_ativa,HOUR(data_leitura) FROM leituras ORDER BY ID DESC LIMIT 1";

$resp = $con->query($sql);

while ($row = $resp->fetch_assoc()) {
    $valores[] = $row['dado_leitura'];
    $data_l[] = $row['data_leitura'];
    $data_h[] = $row['HOUR(data_leitura)'];
}

$leitura_json[] = [json_encode($valores),json_encode($data_l),json_encode($data_h)];

if ($con->query($sql) != NULL) {
    echo json_encode(json_encode($leitura_json));
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}


?>