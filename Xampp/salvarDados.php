<?php

//var_dump($_POST['data']);
$data;

$con = mysqli_connect("localhost","root","","datalog_grafico");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  
  $json1 = json_encode($_POST['data']['dados_arduino']['medidores']);
  $json2 = json_encode($_POST['data']['dados_arduino']['medias']);
  $sql = "INSERT INTO `leituras` (`id`, `data_leitura`, `dado_leitura`,`potencia_ativa`) VALUES (NULL, CURRENT_TIMESTAMP, '{$json1}', '{$json2}'); ";
  $con->query($sql);
  
  if ($con->query($sql) === TRUE) {
      return true;
  } else {
      echo "Error: " . $sql . "<br>" . $con->error;
  }
  mysql_close($con);
?>