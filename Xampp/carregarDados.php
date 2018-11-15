<?php

//var_dump($_POST['data']);

$con = mysqli_connect("localhost","root","","datalog_grafico");
// Check connection
if (mysqli_connect_errno()){
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$sql = "SELECT dado_leitura FROM `leituras` ORDER BY id DESC LIMIT 30";
$resp = $con->query($sql);

while ($row = $resp->fetch_assoc()) {
    $valores[] = $row['dado_leitura'];
}

if ($con->query($sql) != NULL) {
    echo json_encode($valores);
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}


?>