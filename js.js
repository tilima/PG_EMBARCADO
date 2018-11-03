var data_completa;
var tempo_tempo;
var tempo_hora;
var dado_tempo;
var potencia_ativa_0x01;
var potencia_ativa_0x02;
var potencia_ativa_0x03;
var potencia_ativa_0x04;
var potencia_ativa_0x05;
var potencia_ativa_0x06;
var potencia_ativa_0x07;
var potencia_ativa_0x08;
var potencia_ativa_0x09;
var potencia_ativa_0x0A;
var potencia_ativa_0x0B;
var potencia_aparente_0x01;
var potencia_aparente_0x02;
var potencia_aparente_0x03;
var potencia_aparente_0x04;
var potencia_aparente_0x05;
var potencia_aparente_0x06;
var potencia_aparente_0x07;
var potencia_aparente_0x08;
var potencia_aparente_0x09;
var potencia_aparente_0x0A;
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
var dado_tensao_0x01;
var dado_tensao_0x02;
var dado_tensao_0x03;
var dado_tensao_0x04;
var dado_tensao_0x05;
var dado_tensao_0x06;
var dado_tensao_0x07;
var dado_tensao_0x08;
var dado_tensao_0x09;
var dado_tensao_0x0A;
var dado_tensao_0x0B;
var dado_corrente_0x01;
var dado_corrente_0x02;
var dado_corrente_0x03;
var dado_corrente_0x04;
var dado_corrente_0x05;
var dado_corrente_0x06;
var dado_corrente_0x07;
var dado_corrente_0x08;
var dado_corrente_0x09;
var dado_corrente_0x0A;
var dado_corrente_0x0B;

document.addEventListener("DOMContentLoaded",function(event){
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [ potencia_ativa_0x0B[0],  potencia_ativa_0x0B[1],  potencia_ativa_0x0B[2],  potencia_ativa_0x0B[3],
                        potencia_ativa_0x0B[4],  potencia_ativa_0x0B[5],  potencia_ativa_0x0B[6],  potencia_ativa_0x0B[7], 
                        potencia_ativa_0x0B[8],  potencia_ativa_0x0B[9],  potencia_ativa_0x0B[10], potencia_ativa_0x0B[11],
                        potencia_ativa_0x0B[12], potencia_ativa_0x0B[13], potencia_ativa_0x0B[14], potencia_ativa_0x0B[15],
                        potencia_ativa_0x0B[16], potencia_ativa_0x0B[17], potencia_ativa_0x0B[18], potencia_ativa_0x0B[19],
                        potencia_ativa_0x0B[20], potencia_ativa_0x0B[21], potencia_ativa_0x0B[22], potencia_ativa_0x0B[23]],
                fill: false
            }]
        },

        // Configuration options go here
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
    });   
})

function atualiza_grafico(){
    dado_tempo.push(horario);
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
    windows.chart.update();
}

// AJAX PARA REQUISIÇÃO ?XML
function xml_arduino()
{
    nocache = "&nocache=" + Math.random() * 1000000;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
        {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    if (this.responseXML != null) {
                        // extract XML data from XML file
                        data_completa                      = this.resposeXML.getElementById("dtc")[0].childNodes[0].nodeValue;
                        horario                            = this.resposeXML.getElementById("dt")[0].childNodes[0].nodeValue; 
                        tempo_hora                         = this.resposeXML.getElementById("h")[0].childNodes[0].nodeValue;
                        potencia_ativa_0x01[tempo_hora]    = this.responseXML.getElementsByTagName('p1')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x02[tempo_hora]    = this.responseXML.getElementsByTagName('p2')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x03[tempo_hora]    = this.responseXML.getElementsByTagName('p3')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x04[tempo_hora]    = this.responseXML.getElementsByTagName('p4')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x05[tempo_hora]    = this.responseXML.getElementsByTagName('p5')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x06[tempo_hora]    = this.responseXML.getElementsByTagName('p6')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x07[tempo_hora]    = this.responseXML.getElementsByTagName('p7')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x08[tempo_hora]    = this.responseXML.getElementsByTagName('p8')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x09[tempo_hora]    = this.responseXML.getElementsByTagName('p9')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x0A[tempo_hora]    = this.responseXML.getElementsByTagName('p10')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x0B[tempo_hora]    = this.responseXML.getElementsByTagName('pt')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x01[tempo_hora] = this.responseXML.getElementsByTagName('s1')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x02[tempo_hora] = this.responseXML.getElementsByTagName('s2')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x03[tempo_hora] = this.responseXML.getElementsByTagName('s3')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x04[tempo_hora] = this.responseXML.getElementsByTagName('s4')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x05[tempo_hora] = this.responseXML.getElementsByTagName('s5')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x06[tempo_hora] = this.responseXML.getElementsByTagName('s6')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x07[tempo_hora] = this.responseXML.getElementsByTagName('s7')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x08[tempo_hora] = this.responseXML.getElementsByTagName('s8')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x09[tempo_hora] = this.responseXML.getElementsByTagName('s9')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x0A[tempo_hora] = this.responseXML.getElementsByTagName('s10')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x01             = this.responseXML.getElementsByTagName('fp1')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x02             = this.responseXML.getElementsByTagName('fp2')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x03             = this.responseXML.getElementsByTagName('fp3')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x04             = this.responseXML.getElementsByTagName('fp4')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x05             = this.responseXML.getElementsByTagName('fp5')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x06             = this.responseXML.getElementsByTagName('fp6')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x07             = this.responseXML.getElementsByTagName('fp7')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x08             = this.responseXML.getElementsByTagName('fp8')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x09             = this.responseXML.getElementsByTagName('fp9')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x0A             = this.responseXML.getElementsByTagName('fp10')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x0B             = this.responseXML.getElementsByTagName('fpt')[0].childNodes[0].nodeValue;
                        tensao_0x01                        = this.responseXML.getElementsByTagName('v1')[0].childNodes[0].nodeValue;
                        tensao_0x02                        = this.responseXML.getElementsByTagName('v2')[0].childNodes[0].nodeValue;
                        tensao_0x03                        = this.responseXML.getElementsByTagName('v3')[0].childNodes[0].nodeValue;
                        tensao_0x04                        = this.responseXML.getElementsByTagName('v4')[0].childNodes[0].nodeValue;
                        tensao_0x05                        = this.responseXML.getElementsByTagName('v5')[0].childNodes[0].nodeValue;
                        tensao_0x06                        = this.responseXML.getElementsByTagName('v6')[0].childNodes[0].nodeValue;
                        tensao_0x07                        = this.responseXML.getElementsByTagName('v7')[0].childNodes[0].nodeValue;
                        tensao_0x08                        = this.responseXML.getElementsByTagName('v8')[0].childNodes[0].nodeValue;
                        tensao_0x09                        = this.responseXML.getElementsByTagName('v9')[0].childNodes[0].nodeValue;
                        tensao_0x0A                        = this.responseXML.getElementsByTagName('v10')[0].childNodes[0].nodeValue;
                        tensao_0x0B                        = this.responseXML.getElementsByTagName('vt')[0].childNodes[0].nodeValue;
                        corrente_0x01                      = this.responseXML.getElementsByTagName('a1')[0].childNodes[0].nodeValue;
                        corrente_0x02                      = this.responseXML.getElementsByTagName('a2')[0].childNodes[0].nodeValue;
                        corrente_0x03                      = this.responseXML.getElementsByTagName('a3')[0].childNodes[0].nodeValue;
                        corrente_0x04                      = this.responseXML.getElementsByTagName('a4')[0].childNodes[0].nodeValue;
                        corrente_0x05                      = this.responseXML.getElementsByTagName('a5')[0].childNodes[0].nodeValue;
                        corrente_0x06                      = this.responseXML.getElementsByTagName('a6')[0].childNodes[0].nodeValue;
                        corrente_0x07                      = this.responseXML.getElementsByTagName('a7')[0].childNodes[0].nodeValue;
                        corrente_0x08                      = this.responseXML.getElementsByTagName('a8')[0].childNodes[0].nodeValue;
                        corrente_0x09                      = this.responseXML.getElementsByTagName('a9')[0].childNodes[0].nodeValue;
                        corrente_0x0A                      = this.responseXML.getElementsByTagName('a10')[0].childNodes[0].nodeValue;
                        corrente_0x0B                      = this.responseXML.getElementsByTagName('at')[0].childNodes[0].nodeValue;

                        atualiza_grafico();  
                    }
                }
            }
        }
        request.open("GET", "ajax_inputs" + nocache, true);
        request.send(null);
        setTimeout('xml_arduino()', 1000);
}

// FUNÇÃO PARA O SELETOR
function newGraph(){
    var x = document.getElementById("carga").value;
    var y = document.getElementById("informacao").value;
    //document.getElementById("teste").innerHTML = "Você selecionou " + x + " " + y;
    // LOGICA PARA MOSTRAR O GRÁFICO SELECIONADO
    if(x=="Total" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [ potencia_ativa_0x0B[0],  potencia_ativa_0x0B[1],  potencia_ativa_0x0B[2],  potencia_ativa_0x0B[3],
                        potencia_ativa_0x0B[4],  potencia_ativa_0x0B[5],  potencia_ativa_0x0B[6],  potencia_ativa_0x0B[7], 
                        potencia_ativa_0x0B[8],  potencia_ativa_0x0B[9],  potencia_ativa_0x0B[10], potencia_ativa_0x0B[11],
                        potencia_ativa_0x0B[12], potencia_ativa_0x0B[13], potencia_ativa_0x0B[14], potencia_ativa_0x0B[15],
                        potencia_ativa_0x0B[16], potencia_ativa_0x0B[17], potencia_ativa_0x0B[18], potencia_ativa_0x0B[19],
                        potencia_ativa_0x0B[20], potencia_ativa_0x0B[21], potencia_ativa_0x0B[22], potencia_ativa_0x0B[23]],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C1" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [ potencia_ativa_0x01[0],  potencia_ativa_0x01[1],  potencia_ativa_0x01[2],  potencia_ativa_0x01[3],
                        potencia_ativa_0x01[4],  potencia_ativa_0x01[5],  potencia_ativa_0x01[6],  potencia_ativa_0x01[7], 
                        potencia_ativa_0x01[8],  potencia_ativa_0x01[9],  potencia_ativa_0x01[10], potencia_ativa_0x01[11],
                        potencia_ativa_0x01[12], potencia_ativa_0x01[13], potencia_ativa_0x01[14], potencia_ativa_0x01[15],
                        potencia_ativa_0x01[16], potencia_ativa_0x01[17], potencia_ativa_0x01[18], potencia_ativa_0x01[19],
                        potencia_ativa_0x01[20], potencia_ativa_0x01[21], potencia_ativa_0x01[22], potencia_ativa_0x01[23]],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C2" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [ potencia_ativa_0x02[0],  potencia_ativa_0x02[1],  potencia_ativa_0x02[2],  potencia_ativa_0x02[3],
                        potencia_ativa_0x02[4],  potencia_ativa_0x02[5],  potencia_ativa_0x02[6],  potencia_ativa_0x02[7], 
                        potencia_ativa_0x02[8],  potencia_ativa_0x02[9],  potencia_ativa_0x02[10], potencia_ativa_0x02[11],
                        potencia_ativa_0x02[12], potencia_ativa_0x02[13], potencia_ativa_0x02[14], potencia_ativa_0x02[15],
                        potencia_ativa_0x02[16], potencia_ativa_0x02[17], potencia_ativa_0x02[18], potencia_ativa_0x02[19],
                        potencia_ativa_0x02[20], potencia_ativa_0x02[21], potencia_ativa_0x02[22], potencia_ativa_0x02[23]],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C3" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [ potencia_ativa_0x03[0],  potencia_ativa_0x03[1],  potencia_ativa_0x03[2],  potencia_ativa_0x03[3],
                        potencia_ativa_0x03[4],  potencia_ativa_0x03[5],  potencia_ativa_0x03[6],  potencia_ativa_0x03[7], 
                        potencia_ativa_0x03[8],  potencia_ativa_0x03[9],  potencia_ativa_0x03[10], potencia_ativa_0x03[11],
                        potencia_ativa_0x03[12], potencia_ativa_0x03[13], potencia_ativa_0x03[14], potencia_ativa_0x03[15],
                        potencia_ativa_0x03[16], potencia_ativa_0x03[17], potencia_ativa_0x03[18], potencia_ativa_0x03[19],
                        potencia_ativa_0x03[20], potencia_ativa_0x03[21], potencia_ativa_0x03[22], potencia_ativa_0x03[23]],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C4" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [ potencia_ativa_0x04[0],  potencia_ativa_0x04[1],  potencia_ativa_0x04[2],  potencia_ativa_0x04[3],
                        potencia_ativa_0x04[4],  potencia_ativa_0x04[5],  potencia_ativa_0x04[6],  potencia_ativa_0x04[7], 
                        potencia_ativa_0x04[8],  potencia_ativa_0x04[9],  potencia_ativa_0x04[10], potencia_ativa_0x04[11],
                        potencia_ativa_0x04[12], potencia_ativa_0x04[13], potencia_ativa_0x04[14], potencia_ativa_0x04[15],
                        potencia_ativa_0x04[16], potencia_ativa_0x04[17], potencia_ativa_0x04[18], potencia_ativa_0x04[19],
                        potencia_ativa_0x04[20], potencia_ativa_0x04[21], potencia_ativa_0x04[22], potencia_ativa_0x04[23]],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C5" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [ potencia_ativa_0x05[0],  potencia_ativa_0x05[1],  potencia_ativa_0x05[2],  potencia_ativa_0x05[3],
                        potencia_ativa_0x05[4],  potencia_ativa_0x05[5],  potencia_ativa_0x05[6],  potencia_ativa_0x05[7], 
                        potencia_ativa_0x05[8],  potencia_ativa_0x05[9],  potencia_ativa_0x05[10], potencia_ativa_0x05[11],
                        potencia_ativa_0x05[12], potencia_ativa_0x05[13], potencia_ativa_0x05[14], potencia_ativa_0x05[15],
                        potencia_ativa_0x05[16], potencia_ativa_0x05[17], potencia_ativa_0x05[18], potencia_ativa_0x05[19],
                        potencia_ativa_0x05[20], potencia_ativa_0x05[21], potencia_ativa_0x05[22], potencia_ativa_0x05[23]],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C6" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [ potencia_ativa_0x06[0],  potencia_ativa_0x06[1],  potencia_ativa_0x06[2],  potencia_ativa_0x06[3],
                        potencia_ativa_0x06[4],  potencia_ativa_0x06[5],  potencia_ativa_0x06[6],  potencia_ativa_0x06[7], 
                        potencia_ativa_0x06[8],  potencia_ativa_0x06[9],  potencia_ativa_0x06[10], potencia_ativa_0x06[11],
                        potencia_ativa_0x06[12], potencia_ativa_0x06[13], potencia_ativa_0x06[14], potencia_ativa_0x06[15],
                        potencia_ativa_0x06[16], potencia_ativa_0x06[17], potencia_ativa_0x06[18], potencia_ativa_0x06[19],
                        potencia_ativa_0x06[20], potencia_ativa_0x06[21], potencia_ativa_0x06[22], potencia_ativa_0x06[23]],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C7" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [ potencia_ativa_0x07[0],  potencia_ativa_0x07[1],  potencia_ativa_0x07[2],  potencia_ativa_0x07[3],
                        potencia_ativa_0x07[4],  potencia_ativa_0x07[5],  potencia_ativa_0x07[6],  potencia_ativa_0x07[7], 
                        potencia_ativa_0x07[8],  potencia_ativa_0x07[9],  potencia_ativa_0x07[10], potencia_ativa_0x07[11],
                        potencia_ativa_0x07[12], potencia_ativa_0x07[13], potencia_ativa_0x07[14], potencia_ativa_0x07[15],
                        potencia_ativa_0x07[16], potencia_ativa_0x07[17], potencia_ativa_0x07[18], potencia_ativa_0x07[19],
                        potencia_ativa_0x07[20], potencia_ativa_0x07[21], potencia_ativa_0x07[22], potencia_ativa_0x07[23]],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C8" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [ potencia_ativa_0x08[0],  potencia_ativa_0x08[1],  potencia_ativa_0x08[2],  potencia_ativa_0x08[3],
                        potencia_ativa_0x08[4],  potencia_ativa_0x08[5],  potencia_ativa_0x08[6],  potencia_ativa_0x08[7], 
                        potencia_ativa_0x08[8],  potencia_ativa_0x08[9],  potencia_ativa_0x08[10], potencia_ativa_0x08[11],
                        potencia_ativa_0x08[12], potencia_ativa_0x08[13], potencia_ativa_0x08[14], potencia_ativa_0x08[15],
                        potencia_ativa_0x08[16], potencia_ativa_0x08[17], potencia_ativa_0x08[18], potencia_ativa_0x08[19],
                        potencia_ativa_0x08[20], potencia_ativa_0x08[21], potencia_ativa_0x08[22], potencia_ativa_0x08[23]],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C9" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [ potencia_ativa_0x09[0],  potencia_ativa_0x09[1],  potencia_ativa_0x09[2],  potencia_ativa_0x09[3],
                        potencia_ativa_0x09[4],  potencia_ativa_0x09[5],  potencia_ativa_0x09[6],  potencia_ativa_0x09[7], 
                        potencia_ativa_0x09[8],  potencia_ativa_0x09[9],  potencia_ativa_0x09[10], potencia_ativa_0x09[11],
                        potencia_ativa_0x09[12], potencia_ativa_0x09[13], potencia_ativa_0x09[14], potencia_ativa_0x09[15],
                        potencia_ativa_0x09[16], potencia_ativa_0x09[17], potencia_ativa_0x09[18], potencia_ativa_0x09[19],
                        potencia_ativa_0x09[20], potencia_ativa_0x09[21], potencia_ativa_0x09[22], potencia_ativa_0x09[23]],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="C10" && y=="C1"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'
        ],
            datasets: [{
                label: "kWh",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: [ potencia_ativa_0x0A[0],  potencia_ativa_0x0A[1],  potencia_ativa_0x0A[2],  potencia_ativa_0x0A[3],
                        potencia_ativa_0x0A[4],  potencia_ativa_0x0A[5],  potencia_ativa_0x0A[6],  potencia_ativa_0x0A[7], 
                        potencia_ativa_0x0A[8],  potencia_ativa_0x0A[9],  potencia_ativa_0x0A[10], potencia_ativa_0x0A[11],
                        potencia_ativa_0x0A[12], potencia_ativa_0x0A[13], potencia_ativa_0x0A[14], potencia_ativa_0x0A[15],
                        potencia_ativa_0x0A[16], potencia_ativa_0x0A[17], potencia_ativa_0x0A[18], potencia_ativa_0x0A[19],
                        potencia_ativa_0x0A[20], potencia_ativa_0x0A[21], potencia_ativa_0x0A[22], potencia_ativa_0x0A[23]],
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Consumo de Energia Horário'
            }
        }
        });
    }
    if(x=="Total" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Corrente [mA]'
            }
        }
        });
    }
    if(x=="C1" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Corrente [mA]'
            }
        }
        });
    }
    if(x=="C2" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Corrente [mA]'
            }
        }
        });
    }
    if(x=="C3" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Corrente [mA]'
            }
        }
        });
    }
    if(x=="C4" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Corrente [mA]'
            }
        }
        });
    }
    if(x=="C5" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Corrente [mA]'
            }
        }
        });
    }
    if(x=="C6" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Corrente [mA]'
            }
        }
        });
    }
    if(x=="C7" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Corrente [mA]'
            }
        }
        });
    }
    if(x=="C8" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Corrente [mA]'
            }
        }
        });
    }
    if(x=="C9" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Corrente [mA]'
            }
        }
        });
    }
    if(x=="C10" && y=="C2"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Corrente [mA]'
            }
        }
        });
    }
    if(x=="Total" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Tensão [V]'
            }
        }
        });
    }
    if(x=="C1" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Tensão [V]'
            }
        }
        });
    }
    if(x=="C2" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Tensão [V]'
            }
        }
        });
    }
    if(x=="C3" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Tensão [V]'
            }
        }
        });
    }
    if(x=="C4" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Tensão [V]'
            }
        }
        });
    }
    if(x=="C5" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Tensão [V]'
            }
        }
        });
    }
    if(x=="C6" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Tensão [V]'
            }
        }
        });
    }
    if(x=="C7" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Tensão [V]'
            }
        }
        });
    }
    if(x=="C8" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Tensão [V]'
            }
        }
        });
    }
    if(x=="C9" && y=="C3"){
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dado_tempo,
            datasets: [{
                label: "kWh",
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
                text: 'Tensão [V]'
            }
        }
        });
    }      
}
if(x=="C10" && y=="C3"){
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dado_tempo,
        datasets: [{
            label: "kWh",
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
            text: 'Tensão [V]'
        }
    }
    });
}
