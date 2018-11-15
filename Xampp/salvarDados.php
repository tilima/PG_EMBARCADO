<?php

//var_dump($_POST['data']);
$data;

$con = mysqli_connect("localhost","root","","datalog_grafico");

// Check connection
if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
  
  $json = json_encode($_POST['data']);
  $sql = "INSERT INTO `leituras` (`id`, `data_leitura`, `dado_leitura`) VALUES (NULL, CURRENT_TIMESTAMP, '{$json}'); ";
  $con->query($sql);
  
  if ($con->query($sql) === TRUE) {
      return true;
  } else {
      echo "Error: " . $sql . "<br>" . $con->error;
  }
?>