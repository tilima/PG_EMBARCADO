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
</head>
<body onload="grafico()">
        <div class="chart-container" style="width: 85%">
                <canvas id="myChart"></canvas>
            </div>
        <table>
                <tr>
                    <td><select id="carga" onchange="seletor()">
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
                        </select></td>
                    <td><select id="informacao" onchange="seletor()">
                        <option value="C1">Consumo</option>
                        <option value="C2">Corrente</option>
                        <option value="C3">Tensão</option>
                        </select></td>
                    <td id="monomial"></td>
                    <td id="branca"></td>
                    <td id="posto"></td>
                </tr>
            </table>
            <table>
                <tr>
                    <td id="texto_fp"></td>
                    <td id="fp"></td>
                    <td id="texto_tensao"></td>
                    <td id="tensao"></td>
                    <td id="texto_corrente"></td>
                    <td id="corrente"></td>
                </tr>
            </table>    
			<table>
                <tr>
                <td>
                    Carga 1
                    <div class="btn-group">
                    <button type="button" class="btn btn-default botaoEnvia" id="00011">Liga</button>
                    <button type="button" class="btn btn-default botaoEnvia" id="00010">Desliga</button>
                    </div>
                    <span id="resultLUZ1"></span>
                    <br/>
                </td>
                <td>
                    Carga 2
                    <div class="btn-group">
                    <button type="button" class="btn btn-default botaoEnvia" id="00101">Liga</button>
                    <button type="button" class="btn btn-default botaoEnvia" id="00100">Desliga</button>
                    </div>
                    <span id="resultLUZ2"></span>
                    <br/>
                </td>
                <td>
                    Carga 3
                    <div class="btn-group">
                    <button type="button" class="btn btn-default botaoEnvia" id="00111">Liga</button>
                    <button type="button" class="btn btn-default botaoEnvia" id="00110">Desliga</button>
                    </div>
                    <span id="resultLUZ3"></span>
                    <br/>
                </td>
                <td>
                    Carga 4
                    <div class="btn-group">
                    <button type="button" class="btn btn-default botaoEnvia" id="01001">Liga</button>
                    <button type="button" class="btn btn-default botaoEnvia" id="01000">Desliga</button>
                    </div>
                    <span id="resultLUZ4"></span>
                    <br/>
                </td>
                <td>
                    Carga 5
                    <div class="btn-group">
                    <button type="button" class="btn btn-default botaoEnvia" id="01011">Liga</button>
                    <button type="button" class="btn btn-default botaoEnvia" id="01010">Desliga</button>
                    </div>
                    <span id="resultLUZ5"></span>
                    <br/>
                </td>
                <td>
                    Carga 6
                    <div class="btn-group">
                    <button type="button" class="btn btn-default botaoEnvia" id="01101">Liga</button>
                    <button type="button" class="btn btn-default botaoEnvia" id="01100">Desliga</button>
                    </div>
                    <span id="resultLUZ6"></span>
                    <br/>
                </td>
                <td>
                    Carga 7
                    <div class="btn-group">
                    <button type="button" class="btn btn-default botaoEnvia" id="01111">Liga</button>
                    <button type="button" class="btn btn-default botaoEnvia" id="01110">Desliga</button>
                    </div>
                    <span id="resultLUZ7"></span>
                    <br/>
                </td>
                <td>
                    Carga 8
                    <div class="btn-group">
                    <button type="button" class="btn btn-default botaoEnvia" id="10001">Liga</button>
                    <button type="button" class="btn btn-default botaoEnvia" id="10000">Desliga</button>
                    </div>
                    <span id="resultLUZ8"></span>
                    <br/>
                </td>
                <td>
                    Carga 9
                    <div class="btn-group">
                    <button type="button" class="btn btn-default botaoEnvia" id="10011">Liga</button>
                    <button type="button" class="btn btn-default botaoEnvia" id="10010">Desliga</button>
                    </div>
                    <span id="resultLUZ9"></span>
                    <br/>
                </td>
                <td>
                    Carga 10
                    <div class="btn-group">
                    <button type="button" class="btn btn-default botaoEnvia" id="10101">Liga</button>
                    <button type="button" class="btn btn-default botaoEnvia" id="10100">Desliga</button>
                    </div>
                    <span id="resultLUZ10"></span>
                    <br/>
                </td>
                </tr>
			</table>	
</body>
</html>
