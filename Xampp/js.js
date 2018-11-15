var datalog      
var data_completa;
var tempo_tempo;
var n;
var dado_tempo = [];
var potencia_ativa_0x01 = [];
var potencia_ativa_0x02 = [];
var potencia_ativa_0x03 = [];
var potencia_ativa_0x04 = [];
var potencia_ativa_0x05 = [];
var potencia_ativa_0x06 = [];
var potencia_ativa_0x07 = [];
var potencia_ativa_0x08 = [];
var potencia_ativa_0x09 = [];
var potencia_ativa_0x0A = [];
var potencia_ativa_0x0B = [];
var potencia_aparente_0x01 = [];
var potencia_aparente_0x02 = []; 
var potencia_aparente_0x03 = [];
var potencia_aparente_0x04 = [];
var potencia_aparente_0x05 = [];
var potencia_aparente_0x06 = [];
var potencia_aparente_0x07 = [];
var potencia_aparente_0x08 = [];
var potencia_aparente_0x09 = [];
var potencia_aparente_0x0A = [];
var potencia_aparente_0x0B = [];
var fator_de_potencia_0x01;
var fator_de_potencia_0x02;
var fator_de_potencia_0x03;
var fator_de_potencia_0x04;
var fator_de_potencia_0x05;
var fator_de_potencia_0x06;
var fator_de_potencia_0x07;
var fator_de_potencia_0x08;
var fator_de_potencia_0x09;
var fator_de_potencia_0x0A;
var fator_de_potencia_0x0B;
var tensao_0x01;
var tensao_0x02;
var tensao_0x03;
var tensao_0x04;
var tensao_0x05;
var tensao_0x06;
var tensao_0x07;
var tensao_0x08;
var tensao_0x09;
var tensao_0x0A;
var tensao_0x0B;
var corrente_0x01;
var corrente_0x02;
var corrente_0x03;
var corrente_0x04;
var corrente_0x05;
var corrente_0x06;
var corrente_0x07;
var corrente_0x08;
var corrente_0x09;
var corrente_0x0A;
var corrente_0x0B;
var dado_tensao_0x01 = [];
var dado_tensao_0x02 = [];
var dado_tensao_0x03 = [];
var dado_tensao_0x04 = [];
var dado_tensao_0x05 = [];
var dado_tensao_0x06 = [];
var dado_tensao_0x07 = [];
var dado_tensao_0x08 = [];
var dado_tensao_0x09 = [];
var dado_tensao_0x0A = [];
var dado_tensao_0x0B = [];
var dado_corrente_0x01 = [];
var dado_corrente_0x02 = [];
var dado_corrente_0x03 = [];
var dado_corrente_0x04 = [];
var dado_corrente_0x05 = [];
var dado_corrente_0x06 = [];
var dado_corrente_0x07 = [];
var dado_corrente_0x08 = [];
var dado_corrente_0x09 = [];
var dado_corrente_0x0A = [];
var dado_corrente_0x0B = [];
var n;
var t;



var url = 'http://192.168.0.116:81';
init = 0;

    function fazerRequisicao(){
        if(init==0){ 
            carregarInfosDoBanco();
            console.log("FUNCIONA");
            init++;
        } else {
            $.ajax({
                url: url,
                data: { '': ''}, // usaremos em proximas versões
                dataType: 'jsonp', // IMPORTANTE
                crossDomain: true, // IMPORTANTE
                jsonp: false,
                jsonpCallback: 'dados', // IMPORTANTE
                success: function(data,status,xhr) {
                dadosDeEnvio = data;
                var atualizaBanco = $.ajax({
                        url: "salvarDados.php",
                        type: "POST",
                        data: { data: dadosDeEnvio }, // usaremos em proximas versões
                        dataType: 'text', // IMPORTANTE
                        crossDomain: true, // IMPORTANTE
                    // jsonp: false,
                    // jsonpCallback: 'dados', // IMPORTANTE
                        success: function(data,status,xhr) {
                        //console.log(data);
                        }
                    });
                    atualizaBanco.error(function() { alert("Something went wrong"); });
                }
            });
            return false;
        }
    }

    function carregarInfosDoBanco(){
        var carregarBanco = $.ajax({
            url: "carregarDados.php",
            data: { '' : '' }, // usaremos em proximas versões
            dataType: 'text', // IMPORTANTE
            crossDomain: true, // IMPORTANTE
            jsonp: false,
            jsonpCallback: 'dados', // IMPORTANTE
            success: function(data,status,xhr) {
                var res = $.parseJSON(data);
                res.forEach(element => {
                    console.log(element);
                }); 
            }
        });
        carregarBanco.error(function() { alert("Something went wrong"); });
        
    }

    function busca_dados(){
        potencia_ativa_0x01[n] = data.medidor_1.Potencia_Ativa;                     
        potencia_ativa_0x02[n] = data.medidor_2.Potencia_Ativa;
        potencia_ativa_0x03[n] = data.medidor_3.Potencia_Ativa;
        potencia_ativa_0x04[n] = data.medidor_4.Potencia_Ativa;
        potencia_ativa_0x05[n] = data.medidor_5.Potencia_Ativa;
        potencia_ativa_0x06[n] = data.medidor_6.Potencia_Ativa;
        potencia_ativa_0x07[n] = data.medidor_7.Potencia_Ativa;
        potencia_ativa_0x08[n] = data.medidor_8.Potencia_Ativa;
        potencia_ativa_0x09[n] = data.medidor_9.Potencia_Ativa;
        potencia_ativa_0x0A[n] = data.medidor_10.Potencia_Ativa;
        potencia_aparente_0x01[n] = data.medidor_1.Potencia_Aparente;
        potencia_aparente_0x02[n] = data.medidor_2.Potencia_Aparente;
        potencia_aparente_0x03[n] = data.medidor_3.Potencia_Aparente;
        potencia_aparente_0x04[n] = data.medidor_4.Potencia_Aparente;
        potencia_aparente_0x05[n] = data.medidor_5.Potencia_Aparente;
        potencia_aparente_0x06[n] = data.medidor_6.Potencia_Aparente;
        potencia_aparente_0x07[n] = data.medidor_7.Potencia_Aparente;
        potencia_aparente_0x08[n] = data.medidor_8.Potencia_Aparente;
        potencia_aparente_0x09[n] = data.medidor_9.Potencia_Aparente;
        potencia_aparente_0x0A[n] = data.medidor_10.Potencia_Aparente;
        fator_de_potencia_0x01 = data.medidor_1.Fator_de_potencia;
        fator_de_potencia_0x02 = data.medidor_2.Fator_de_potencia;
        fator_de_potencia_0x03 = data.medidor_3.Fator_de_potencia;
        fator_de_potencia_0x04 = data.medidor_4.Fator_de_potencia;
        fator_de_potencia_0x05 = data.medidor_5.Fator_de_potencia;
        fator_de_potencia_0x06 = data.medidor_6.Fator_de_potencia;
        fator_de_potencia_0x07 = data.medidor_7.Fator_de_potencia;
        fator_de_potencia_0x08 = data.medidor_8.Fator_de_potencia;
        fator_de_potencia_0x09 = data.medidor_9.Fator_de_potencia;
        fator_de_potencia_0x0A = data.medidor_10.Fator_de_potencia;
        tensao_0x01 = data.medidor_1.Tensao; 
        tensao_0x02 = data.medidor_2.Tensao;
        tensao_0x03 = data.medidor_3.Tensao;
        tensao_0x04 = data.medidor_4.Tensao;
        tensao_0x05 = data.medidor_5.Tensao;
        tensao_0x06 = data.medidor_6.Tensao;
        tensao_0x07 = data.medidor_7.Tensao;
        tensao_0x08 = data.medidor_8.Tensao;
        tensao_0x09 = data.medidor_9.Tensao;
        tensao_0x0A = data.medidor_10.Tensao;
        corrente_0x01 = data.medidor_1.Corrente;
        corrente_0x02 = data.medidor_2.Corrente;
        corrente_0x03 = data.medidor_3.Corrente;
        corrente_0x04 = data.medidor_4.Corrente;
        corrente_0x05 = data.medidor_5.Corrente;
        corrente_0x06 = data.medidor_6.Corrente;
        corrente_0x07 = data.medidor_7.Corrente;
        corrente_0x08 = data.medidor_8.Corrente;
        corrente_0x09 = data.medidor_9.Corrente;
        corrente_0x0A = data.medidor_10.Corrente;
        //cargas_ativas = data.cargas.valor;
        atualiza_grafico();
        newGraph();  
    }
    // A cada 1000 milis (1 segundo), faça uma nova requisição.
    setInterval(fazerRequisicao, 5000);
      // Acredito que 3000 (3 segundos) ou mais seja o ideal para um serviço online.
      // Caso use local host, arrisco colocar ate 400 milis, você tera uma boa resposta.
// FUNÇÃO PARA O SELETOR

function atualiza_grafico(){
    dado_tempo.push(t);
    dado_tensao_0x01.push(tensao_0x01);
    dado_tensao_0x02.push(tensao_0x02);
    dado_tensao_0x03.push(tensao_0x03);
    dado_tensao_0x04.push(tensao_0x04);
    dado_tensao_0x05.push(tensao_0x05);
    dado_tensao_0x06.push(tensao_0x06);
    dado_tensao_0x07.push(tensao_0x07);
    dado_tensao_0x08.push(tensao_0x08);
    dado_tensao_0x09.push(tensao_0x09);
    dado_tensao_0x0A.push(tensao_0x0A);
    dado_tensao_0x0B.push(tensao_0x0B);
    dado_corrente_0x01.push(corrente_0x01);
    dado_corrente_0x02.push(corrente_0x02);
    dado_corrente_0x03.push(corrente_0x03);
    dado_corrente_0x04.push(corrente_0x04);
    dado_corrente_0x05.push(corrente_0x05);
    dado_corrente_0x06.push(corrente_0x06);
    dado_corrente_0x07.push(corrente_0x07);
    dado_corrente_0x08.push(corrente_0x08);
    dado_corrente_0x09.push(corrente_0x09);
    dado_corrente_0x0A.push(corrente_0x0A);
    dado_corrente_0x0B.push(corrente_0x0B);
}

        // FUNÇÃO PARA O SELETOR
function newGraph(){
    var x = document.getElementById("carga").value;
    var y = document.getElementById("informacao").value;
    // LOGICA PARA MOSTRAR O GRÁFICO SELECIONADO
    if(x=="Total" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x0B;
        document.getElementById("tensao").innerHTML = tensao_0x0B + "A";
        document.getElementById("corrente").innerHTML = corrente_0x0B + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: potencia_ativa_0x0B,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo Horário'
            }
        }
        });
    }
    if(x=="C1" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x01;
        document.getElementById("tensao").innerHTML = tensao_0x01 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x01 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: potencia_ativa_0x01,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo Horário'
            }
        }
        });
    }
    if(x=="C2" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x02;
        document.getElementById("tensao").innerHTML = tensao_0x02 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x02 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: potencia_ativa_0x02,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo Horário'
            }
        }
        });
    }
    if(x=="C3" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x03;
        document.getElementById("tensao").innerHTML = tensao_0x03 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x03 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: potencia_ativa_0x03,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo Horário'
            }
        }
        });
    }
    if(x=="C4" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x04;
        document.getElementById("tensao").innerHTML = tensao_0x04 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x04 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: potencia_ativa_0x04,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo Horário'
            }
        }
        });
    }
    if(x=="C5" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x05;
        document.getElementById("tensao").innerHTML = tensao_0x05 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x05 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: potencia_ativa_0x05,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo Horário'
            }
        }
        });
    }
    if(x=="C6" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x06;
        document.getElementById("tensao").innerHTML = tensao_0x06 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x06 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: potencia_ativa_0x06,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo Horário'
            }
        }
        });
    }
    if(x=="C7" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x07;
        document.getElementById("tensao").innerHTML = tensao_0x07 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x07 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: potencia_ativa_0x07,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo Horário'
            }
        }
        });
    }
    if(x=="C8" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x08;
        document.getElementById("tensao").innerHTML = tensao_0x08 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x08 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: potencia_ativa_0x08,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo Horário'
            }
        }
        });
    }
    if(x=="C9" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x09;
        document.getElementById("tensao").innerHTML = tensao_0x09 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x09 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: potencia_ativa_0x09,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo Horário'
            }
        }
        });
    }
    if(x=="C10" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x0A;
        document.getElementById("tensao").innerHTML = tensao_0x0A + "A";
        document.getElementById("corrente").innerHTML = corrente_0x0A + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: potencia_ativa_0x0A,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo Horário'
            }
        }
        });
    }
    if(x=="Total" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x0B;
        document.getElementById("tensao").innerHTML = tensao_0x0B + "A";
        document.getElementById("corrente").innerHTML = corrente_0x0B + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[A]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_corrente_0x0B,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Corrente'
            }
        }
        });
    }
    if(x=="C1" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x01;
        document.getElementById("tensao").innerHTML = tensao_0x01 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x01 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[A]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_corrente_0x01,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Corrente'
            }
        }
        });
    }
    if(x=="C2" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x02;
        document.getElementById("tensao").innerHTML = tensao_0x02 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x02 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[A]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_corrente_0x02,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Corrente'
            }
        }
        });
    }
    if(x=="C3" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x03;
        document.getElementById("tensao").innerHTML = tensao_0x03 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x03 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[A]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_corrente_0x03,      
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Corrente'
            }
        }
        });
    }
    if(x=="C4" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x04;
        document.getElementById("tensao").innerHTML = tensao_0x04 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x04 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[A]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_corrente_0x04,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Corrente'
            }
        }
        });
    }
    if(x=="C5" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x05;
        document.getElementById("tensao").innerHTML = tensao_0x05 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x05 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[A]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_corrente_0x05,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Corrente'
            }
        }
        });
    }
    if(x=="C6" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x06;
        document.getElementById("tensao").innerHTML = tensao_0x06 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x06 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[A]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_corrente_0x06,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Corrente'
            }
        }
        });
    }
    if(x=="C7" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x07;
        document.getElementById("tensao").innerHTML = tensao_0x07 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x07 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[A]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_corrente_0x07,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Corrente'
            }
        }
        });
    }
    if(x=="C8" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x08;
        document.getElementById("tensao").innerHTML = tensao_0x08 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x08 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[A]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_corrente_0x08,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Corrente'
            }
        }
        });
    }
    if(x=="C9" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x09;
        document.getElementById("tensao").innerHTML = tensao_0x09 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x09 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[A]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_corrente_0x09,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Corrente'
            }
        }
        });
    }
    if(x=="C10" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x0A;
        document.getElementById("tensao").innerHTML = tensao_0x0A + "A";
        document.getElementById("corrente").innerHTML = corrente_0x0A + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[A]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_corrente_0x0A,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Corrente'
            }
        }
        });
    }
    if(x=="Total" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x0B;
        document.getElementById("tensao").innerHTML = tensao_0x0B + "A";
        document.getElementById("corrente").innerHTML = corrente_0x0B + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[V]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_tensao_0x0B,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Tensão'
            }
        }
        });
    }
    if(x=="C1" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x01;
        document.getElementById("tensao").innerHTML = tensao_0x01 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x01 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[V]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_tensao_0x01,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Tensão'
            }
        }
        });
    }
    if(x=="C2" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x02;
        document.getElementById("tensao").innerHTML = tensao_0x02 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x02 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[V]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_tensao_0x02,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Tensão'
            }
        }
        });
    }
    if(x=="C3" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x03;
        document.getElementById("tensao").innerHTML = tensao_0x03 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x03 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[V]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_tensao_0x03,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Tensão'
            }
        }
        });
    }
    if(x=="C4" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x04;
        document.getElementById("tensao").innerHTML = tensao_0x04 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x04 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[V]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_tensao_0x04,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Tensão'
            }
        }
        });
    }
    if(x=="C5" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x05;
        document.getElementById("tensao").innerHTML = tensao_0x05 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x05 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[V]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_tensao_0x05,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Tensão'
            }
        }
        });
    }
    if(x=="C6" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x06;
        document.getElementById("tensao").innerHTML = tensao_0x06 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x06 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[V]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_tensao_0x06,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Tensão'
            }
        }
        });
    }
    if(x=="C7" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x07;
        document.getElementById("tensao").innerHTML = tensao_0x07 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x07 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[V]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_tensao_0x07,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Tensão'
            }
        }
        });
    }
    if(x=="C8" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x08;
        document.getElementById("tensao").innerHTML = tensao_0x08 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x08 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[V]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_tensao_0x08,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Tensão'
            }
        }
        });
    }
    if(x=="C9" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x09;
        document.getElementById("tensao").innerHTML = tensao_0x09 + "A";
        document.getElementById("corrente").innerHTML = corrente_0x09 + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[V]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_tensao_0x09,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Tensão'
            }
        }
        });
    }      
    if(x=="C10" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x0A;
        document.getElementById("tensao").innerHTML = tensao_0x0A + "A";
        document.getElementById("corrente").innerHTML = corrente_0x0A + "V";
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "[V]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_tensao_0x0A,
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Tensão'
            }
        }
        });
    }
}