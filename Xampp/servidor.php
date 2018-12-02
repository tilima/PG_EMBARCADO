<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<title>Painel de Controle</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script src="./jquery.js"></script>
	<script src="./js.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
	<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
	<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>
</head>
<body onload="grafico()">
	<div class="container">
		<div class="row">
			<div class="col">
				<div class="chart-container">
					<canvas id="myChart"></canvas>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col">
				<select id="carga" onchange="seletor()">
					<option value="Total">Total</option>
					<option value="C1">Carga 1</option>
					<option value="C2">Carga 2</option>
					<option value="C3">Carga 3</option>
					<option value="C4">Carga 4</option>
					<option value="C5">Carga 5</option>
					<option value="C6">Carga 6</option>
					<option value="C7">Carga 7</option>
					<option value="C8">Carga 8</option>
					<option value="C9">Carga 9</option>
					<option value="C10">Carga 10</option>
				</select>
			</div>
			<div class="col">
				<select id="informacao" onchange="seletor()">
					<option value="C1">Consumo</option>
					<option value="C2">Corrente</option>
					<option value="C3">Tensão</option>
				</select>
			</div>
			<div class="col">
				<div id="monomial"></div>
			</div>
			<div class="col">
				<div id="branca"></div>
			</div>
			<div class="col">
				<div id="posto"></div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div id="texto_fp"></div>
			</div>
			<div class="col">
				<div id="fp"></div>
			</div>
			<div class="col">
				<div id="texto_tensao"></div>
			</div>
			<div class="col">
				<div id="tensao"></div>
			</div>
			<div class="col">
				<div id="texto_corrente"></div>
			</div>
			<div class="col">
				<div id="corrente"></div>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<h5>Carga 1</h5>
				<input id="00011" type="checkbox" data-toggle="toggle">
				<div id="resultLUZ1"></div>
				<script>
					$(function() {
						$('#00011').change(function() {
							$('resultLUZ1').html('Toggle: ' + $(this).prop('checked'))
						})
					})
				</script>
			</div>
			<div class="col">
				<h5>Carga 2</h5>
				<input id="00101" type="checkbox" data-toggle="toggle">
				<div id="resultLUZ2"></div>
				<script>
					$(function() {
						$('#00101').change(function() {
							$('resultLUZ2').html('Toggle: ' + $(this).prop('checked'))
						})
					})
				</script>
			</div>
			<div class="col">
				<h5>Carga 3</h5>
				<input id="00111" type="checkbox" data-toggle="toggle">
				<div id="resultLUZ3"></div>
				<script>
					$(function() {
						$('#00111').change(function() {
							$('resultLUZ3').html('Toggle: ' + $(this).prop('checked'))
						})
					})
				</script>
			</div>
			<div class="col">
				<h5>Carga 4</h5>
				<input id="01001" type="checkbox" data-toggle="toggle">
				<div id="resultLUZ4"></div>
				<script>
					$(function() {
						$('#01001').change(function() {
							$('resultLUZ4').html('Toggle: ' + $(this).prop('checked'))
						})
					})
				</script>
			</div>
			<div class="col">
				<h5>Carga 5</h5>
				<input id="01011" type="checkbox" data-toggle="toggle">
				<div id="resultLUZ5"></div>
				<script>
					$(function() {
						$('#01011').change(function() {
							$('resultLUZ5').html('Toggle: ' + $(this).prop('checked'))
						})
					})
				</script>
			</div>
			<div class="col">
				<h5>Carga 6</h5>
				<input id="01101" type="checkbox" data-toggle="toggle">
				<div id="resultLUZ6"></div>
				<script>
					$(function() {
						$('#01101').change(function() {
							$('resultLUZ6').html('Toggle: ' + $(this).prop('checked'))
						})
					})
				</script>
			</div>
			<div class="col">
				<h5>Carga 7</h5>
				<input id="01111" type="checkbox" data-toggle="toggle">
				<div id="resultLUZ7"></div>
				<script>
					$(function() {
						$('#01111').change(function() {
							$('resultLUZ7').html('Toggle: ' + $(this).prop('checked'))
						})
					})
				</script>
			</div>
			<div class="col">
				<h5>Carga 8</h5>
				<input id="10001" type="checkbox" data-toggle="toggle">
				<div id="resultLUZ8"></div>
				<script>
					$(function() {
						$('#10001').change(function() {
							$('resultLUZ8').html('Toggle: ' + $(this).prop('checked'))
						})
					})
				</script>
			</div>
			<div class="col">
				<h5>Carga 9</h5>
				<input id="10011" type="checkbox" data-toggle="toggle">
				<div id="resultLUZ9"></div>
				<script>
					$(function() {
						$('#10011').change(function() {
							$('resultLUZ9').html('Toggle: ' + $(this).prop('checked'))
						})
					})
				</script>
			</div>
			<div class="col">
				<h5>Carga 10</h5>
				<input id="10101" type="checkbox" data-toggle="toggle">
				<div id="resultLUZ10"></div>
				<script>
					$(function() {
						$('#10101').change(function() {
							$('resultLUZ10').html('Toggle: ' + $(this).prop('checked'))
						})
					})
				</script>
			</div>
		</div>
	</div>
</body>
</html>
