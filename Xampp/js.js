var legenda = "[Wh]";
var titulo = "Consumo Horário";
var posto = "";
var tag_incial = 0;
var tipo = "bar";
var label_tempo = [];
var data_grafico = [];
var datalog      
var data_completa;
var tempo_tempo;
var n;
var dado_tempo = [];
var tempo_pot = [];
var antigo_tempo_pot;
var dado_tempo_pot = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
var dado_potencia_ativa_0x01 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dado_potencia_ativa_0x02 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dado_potencia_ativa_0x03 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dado_potencia_ativa_0x04 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dado_potencia_ativa_0x05 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dado_potencia_ativa_0x06 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dado_potencia_ativa_0x07 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dado_potencia_ativa_0x08 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dado_potencia_ativa_0x09 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dado_potencia_ativa_0x0A = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var dado_potencia_ativa_0x0B = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
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
var preco_0x01;
var preco_0x02;
var preco_0x03;
var preco_0x04;
var preco_0x05;
var preco_0x06;
var preco_0x07;
var preco_0x08;
var preco_0x09;
var preco_0x0A;
var preco_0x0B;
var preco_0x01_B;
var preco_0x02_B;
var preco_0x03_B;
var preco_0x04_B;
var preco_0x05_B;
var preco_0x06_B;
var preco_0x07_B;
var preco_0x08_B;
var preco_0x09_B;
var preco_0x0A_B;
var preco_0x0B_B;
var n;
var t;

var url = 'http://192.168.42.115'; //'http://192.168.15.115';
var init = 0;

function fazerRequisicao(){
    if(init == 0){ 
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
                    success: function(data,status,xhr) {
                    carregarInfosAtualDoBanco();  
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
            var leitura = [];
            var z = 0;
            var l1 = JSON.parse(JSON.parse(res)[0][0]).length;
            var l3 = JSON.parse(JSON.parse(res)[0][3]).length;
            for(var y = 0; y<l1; y++){
                leitura[z] = JSON.parse(JSON.parse(JSON.parse(res)[0][0])[y]);
                z++;
            }
            for(var y = 0; y<l1; y++){
                leitura[z] = JSON.parse(JSON.parse(res)[0][1])[y];
                z++;    
            }
            for(var y = 0; y<l3; y++){
                leitura[z] = JSON.parse(JSON.parse(JSON.parse(res)[0][2])[y]);
                    z++;
            }
            for(var y = 0; y<l3; y++){
                leitura[z] = JSON.parse(JSON.parse(res)[0][3])[y];
                z++; 
            }
            busca_dados(leitura, l1, l3);
        }
    });
    carregarBanco.error(function() { alert("Something went wrong"); });
}

function carregarInfosAtualDoBanco(){
    var carregarBanco = $.ajax({
        url: "carregarDadosAtual.php",
        data: { '' : '' }, // usaremos em proximas versões
        dataType: 'text', // IMPORTANTE
        crossDomain: true, // IMPORTANTE
        jsonp: false,
        jsonpCallback: 'dados', // IMPORTANTE
        success: function(data,status,xhr) {
            var res = $.parseJSON(data);
            var leitura = [];
            leitura[0] = JSON.parse(JSON.parse(JSON.parse(res)[0][0])[0]);
            leitura[1] = JSON.parse(JSON.parse(res)[0][1])[0];            
            leitura[2] = JSON.parse(JSON.parse(res)[0][2])[0];
            atualiza_grafico(leitura);
        }
    });
    carregarBanco.error(function() { alert("Something went wrong"); });
}


function busca_dados(leitura, l1, l3){
    for(var n = 0; n<l3; n++){
        potencia_ativa_0x01[n] = leitura[2*l1+n].medidor_1.Potencia_Ativa;                     
        potencia_ativa_0x02[n] = leitura[2*l1+n].medidor_2.Potencia_Ativa;
        potencia_ativa_0x03[n] = leitura[2*l1+n].medidor_3.Potencia_Ativa;
        potencia_ativa_0x04[n] = leitura[2*l1+n].medidor_4.Potencia_Ativa;
        potencia_ativa_0x05[n] = leitura[2*l1+n].medidor_5.Potencia_Ativa;
        potencia_ativa_0x06[n] = leitura[2*l1+n].medidor_6.Potencia_Ativa;
        potencia_ativa_0x07[n] = leitura[2*l1+n].medidor_7.Potencia_Ativa;
        potencia_ativa_0x08[n] = leitura[2*l1+n].medidor_8.Potencia_Ativa;
        potencia_ativa_0x09[n] = leitura[2*l1+n].medidor_9.Potencia_Ativa;
        potencia_ativa_0x0A[n] = leitura[2*l1+n].medidor_10.Potencia_Ativa;
        potencia_ativa_0x0B[n] = leitura[2*l1+n].total.Potencia_Ativa;
        tempo_pot[n] = leitura[2*l1+l3+n];

        dado_potencia_ativa_0x01.shift();
        dado_potencia_ativa_0x01.push(potencia_ativa_0x01[n]);
        dado_potencia_ativa_0x02.shift();
        dado_potencia_ativa_0x02.push(potencia_ativa_0x02[n]);
        dado_potencia_ativa_0x03.shift();
        dado_potencia_ativa_0x03.push(potencia_ativa_0x03[n]);
        dado_potencia_ativa_0x04.shift();
        dado_potencia_ativa_0x04.push(potencia_ativa_0x04[n]);
        dado_potencia_ativa_0x05.shift();
        dado_potencia_ativa_0x05.push(potencia_ativa_0x05[n]);
        dado_potencia_ativa_0x06.shift();
        dado_potencia_ativa_0x06.push(potencia_ativa_0x06[n]);
        dado_potencia_ativa_0x07.shift();
        dado_potencia_ativa_0x07.push(potencia_ativa_0x07[n]);
        dado_potencia_ativa_0x08.shift();
        dado_potencia_ativa_0x08.push(potencia_ativa_0x08[n]);
        dado_potencia_ativa_0x09.shift();
        dado_potencia_ativa_0x09.push(potencia_ativa_0x09[n]);
        dado_potencia_ativa_0x0A.shift();
        dado_potencia_ativa_0x0A.push(potencia_ativa_0x0A[n]);
        dado_potencia_ativa_0x0B.shift();
        dado_potencia_ativa_0x0B.push(potencia_ativa_0x0B[n]);
        dado_tempo_pot.shift();
        dado_tempo_pot.push(tempo_pot[n]);
    }
    for(var n = 0; n<l1; n++){
        potencia_aparente_0x01[n] = leitura[n].medidor_1.Potencia_Aparente;         
        potencia_aparente_0x02[n] = leitura[n].medidor_2.Potencia_Aparente;
        potencia_aparente_0x03[n] = leitura[n].medidor_3.Potencia_Aparente;
        potencia_aparente_0x04[n] = leitura[n].medidor_4.Potencia_Aparente;
        potencia_aparente_0x05[n] = leitura[n].medidor_5.Potencia_Aparente;
        potencia_aparente_0x06[n] = leitura[n].medidor_6.Potencia_Aparente;
        potencia_aparente_0x07[n] = leitura[n].medidor_7.Potencia_Aparente;
        potencia_aparente_0x08[n] = leitura[n].medidor_8.Potencia_Aparente;
        potencia_aparente_0x09[n] = leitura[n].medidor_9.Potencia_Aparente;
        potencia_aparente_0x0A[n] = leitura[n].medidor_10.Potencia_Aparente;
        potencia_aparente_0x0B[n] = leitura[n].total.Potencia_Aparente;
        dado_tensao_0x01[n] = leitura[n].medidor_1.Tensao;         
        dado_tensao_0x02[n] = leitura[n].medidor_2.Tensao;
        dado_tensao_0x03[n] = leitura[n].medidor_3.Tensao;
        dado_tensao_0x04[n] = leitura[n].medidor_4.Tensao;
        dado_tensao_0x05[n] = leitura[n].medidor_5.Tensao;
        dado_tensao_0x06[n] = leitura[n].medidor_6.Tensao;
        dado_tensao_0x07[n] = leitura[n].medidor_7.Tensao;
        dado_tensao_0x08[n] = leitura[n].medidor_8.Tensao;
        dado_tensao_0x09[n] = leitura[n].medidor_9.Tensao;
        dado_tensao_0x0A[n] = leitura[n].medidor_10.Tensao;
        dado_tensao_0x0B[n] = leitura[n].total.Tensao;
        dado_corrente_0x01[n] = leitura[n].medidor_1.Corrente;         
        dado_corrente_0x02[n] = leitura[n].medidor_2.Corrente;
        dado_corrente_0x03[n] = leitura[n].medidor_3.Corrente;
        dado_corrente_0x04[n] = leitura[n].medidor_4.Corrente;
        dado_corrente_0x05[n] = leitura[n].medidor_5.Corrente;
        dado_corrente_0x06[n] = leitura[n].medidor_6.Corrente;
        dado_corrente_0x07[n] = leitura[n].medidor_7.Corrente;
        dado_corrente_0x08[n] = leitura[n].medidor_8.Corrente;
        dado_corrente_0x09[n] = leitura[n].medidor_9.Corrente;
        dado_corrente_0x0A[n] = leitura[n].medidor_10.Corrente;
        dado_corrente_0x0B[n] = leitura[n].total.Corrente;

        dado_tempo[n] = leitura[l1+n];
    }
    fator_de_potencia_0x01 = leitura[l1-1].medidor_1.Fator_de_potencia;
    fator_de_potencia_0x02 = leitura[l1-1].medidor_2.Fator_de_potencia;
    fator_de_potencia_0x03 = leitura[l1-1].medidor_3.Fator_de_potencia;
    fator_de_potencia_0x04 = leitura[l1-1].medidor_4.Fator_de_potencia;
    fator_de_potencia_0x05 = leitura[l1-1].medidor_5.Fator_de_potencia;
    fator_de_potencia_0x06 = leitura[l1-1].medidor_6.Fator_de_potencia;
    fator_de_potencia_0x07 = leitura[l1-1].medidor_7.Fator_de_potencia;
    fator_de_potencia_0x08 = leitura[l1-1].medidor_8.Fator_de_potencia;
    fator_de_potencia_0x09 = leitura[l1-1].medidor_9.Fator_de_potencia;
    fator_de_potencia_0x0A = leitura[l1-1].medidor_10.Fator_de_potencia;
    fator_de_potencia_0x0B = leitura[l1-1].total.Fator_de_potencia;
    
    tensao_0x01 = leitura[l1-1].medidor_1.Tensao;
    tensao_0x02 = leitura[l1-1].medidor_2.Tensao;
    tensao_0x03 = leitura[l1-1].medidor_3.Tensao;
    tensao_0x04 = leitura[l1-1].medidor_4.Tensao;
    tensao_0x05 = leitura[l1-1].medidor_5.Tensao;
    tensao_0x06 = leitura[l1-1].medidor_6.Tensao;
    tensao_0x07 = leitura[l1-1].medidor_7.Tensao;
    tensao_0x08 = leitura[l1-1].medidor_8.Tensao;
    tensao_0x09 = leitura[l1-1].medidor_9.Tensao;
    tensao_0x0A = leitura[l1-1].medidor_10.Tensao;
    tensao_0x0B = leitura[l1-1].total.Tensao;
    
    corrente_0x01 = leitura[l1-1].medidor_1.Corrente;
    corrente_0x02 = leitura[l1-1].medidor_2.Corrente;
    corrente_0x03 = leitura[l1-1].medidor_3.Corrente;
    corrente_0x04 = leitura[l1-1].medidor_4.Corrente;
    corrente_0x05 = leitura[l1-1].medidor_5.Corrente;
    corrente_0x06 = leitura[l1-1].medidor_6.Corrente;
    corrente_0x07 = leitura[l1-1].medidor_7.Corrente;
    corrente_0x08 = leitura[l1-1].medidor_8.Corrente;
    corrente_0x09 = leitura[l1-1].medidor_9.Corrente;
    corrente_0x0A = leitura[l1-1].medidor_10.Corrente;
    corrente_0x0B = leitura[l1-1].total.Corrente;

    calculo_tarifa();
    seletor();  
}


// FUNÇÃO PARA O SELETOR

function calculo_tarifa(){
    var tarifa_convecional = 0.56228;
    var tarifa_branca_fponta = 0.48432;
    var tarifa_branca_intermediaria = 0.66683;
    var tarifa_branca_ponta = 1.02399;
    
    if(dado_tempo_pot[23]<17 || dado_tempo_pot[23]>=22){
        posto = " Fora de Ponta";
    } else if (dado_tempo_pot[23] == 17 || dado_tempo_pot[23] == 21){
        posto = " Intermediário";
    } else {
        posto = " Ponta";
    }

    // TARIFA CONVENCIONAL //

    var consumo_0x01_dia = dado_potencia_ativa_0x01.reduce(soma,0);
    var consumo_0x02_dia = dado_potencia_ativa_0x02.reduce(soma,0);
    var consumo_0x03_dia = dado_potencia_ativa_0x03.reduce(soma,0);
    var consumo_0x04_dia = dado_potencia_ativa_0x04.reduce(soma,0);
    var consumo_0x05_dia = dado_potencia_ativa_0x05.reduce(soma,0);
    var consumo_0x06_dia = dado_potencia_ativa_0x06.reduce(soma,0);
    var consumo_0x07_dia = dado_potencia_ativa_0x07.reduce(soma,0);
    var consumo_0x08_dia = dado_potencia_ativa_0x08.reduce(soma,0);
    var consumo_0x09_dia = dado_potencia_ativa_0x09.reduce(soma,0);
    var consumo_0x0A_dia = dado_potencia_ativa_0x0A.reduce(soma,0);
    var consumo_0x0B_dia = dado_potencia_ativa_0x0B.reduce(soma,0);

    preco_0x01 = consumo_0x01_dia * tarifa_convecional;
    preco_0x01 /= 1000;
    preco_0x02 = consumo_0x02_dia * tarifa_convecional;
    preco_0x02 /= 1000;
    preco_0x03 = consumo_0x03_dia * tarifa_convecional;
    preco_0x03 /= 1000;
    preco_0x04 = consumo_0x04_dia * tarifa_convecional;
    preco_0x04 /= 1000;
    preco_0x05 = consumo_0x05_dia * tarifa_convecional;
    preco_0x05 /= 1000;
    preco_0x06 = consumo_0x06_dia * tarifa_convecional;
    preco_0x06 /= 1000;
    preco_0x07 = consumo_0x07_dia * tarifa_convecional;
    preco_0x07 /= 1000;
    preco_0x08 = consumo_0x08_dia * tarifa_convecional;
    preco_0x08 /= 1000;
    preco_0x09 = consumo_0x09_dia * tarifa_convecional;
    preco_0x09 /= 1000;
    preco_0x0A = consumo_0x0A_dia * tarifa_convecional;
    preco_0x0A /= 1000;
    preco_0x0B = consumo_0x0B_dia * tarifa_convecional; 
    preco_0x0B /= 1000;

    // TARIFA HORÁRIA BRANCA //

    var consumo_0x01_fponta = 0;
    var consumo_0x02_fponta = 0;
    var consumo_0x03_fponta = 0;
    var consumo_0x04_fponta = 0;
    var consumo_0x05_fponta = 0;
    var consumo_0x06_fponta = 0;
    var consumo_0x07_fponta = 0;
    var consumo_0x08_fponta = 0;
    var consumo_0x09_fponta = 0;
    var consumo_0x0A_fponta = 0;
    var consumo_0x0B_fponta = 0;

    var consumo_0x01_intermediario = 0;
    var consumo_0x02_intermediario = 0;
    var consumo_0x03_intermediario = 0;
    var consumo_0x04_intermediario = 0;
    var consumo_0x05_intermediario = 0;
    var consumo_0x06_intermediario = 0;
    var consumo_0x07_intermediario = 0;
    var consumo_0x08_intermediario = 0;
    var consumo_0x09_intermediario = 0;
    var consumo_0x0A_intermediario = 0;
    var consumo_0x0B_intermediario = 0;

    var consumo_0x01_ponta = 0;
    var consumo_0x02_ponta = 0;
    var consumo_0x03_ponta = 0;
    var consumo_0x04_ponta = 0;
    var consumo_0x05_ponta = 0;
    var consumo_0x06_ponta = 0;
    var consumo_0x07_ponta = 0;
    var consumo_0x08_ponta = 0;
    var consumo_0x09_ponta = 0;
    var consumo_0x0A_ponta = 0;
    var consumo_0x0B_ponta = 0;

    // FORA DE PONTA //
    for(i=0;i<17;i++){
        consumo_0x01_fponta += parseFloat(dado_potencia_ativa_0x01[i]);
        consumo_0x02_fponta += parseFloat(dado_potencia_ativa_0x02[i]);
        consumo_0x03_fponta += parseFloat(dado_potencia_ativa_0x03[i]);
        consumo_0x04_fponta += parseFloat(dado_potencia_ativa_0x05[i]);
        consumo_0x05_fponta += parseFloat(dado_potencia_ativa_0x05[i]);
        consumo_0x06_fponta += parseFloat(dado_potencia_ativa_0x06[i]);
        consumo_0x07_fponta += parseFloat(dado_potencia_ativa_0x07[i]);
        consumo_0x08_fponta += parseFloat(dado_potencia_ativa_0x08[i]);
        consumo_0x09_fponta += parseFloat(dado_potencia_ativa_0x09[i]);
        consumo_0x0A_fponta += parseFloat(dado_potencia_ativa_0x0A[i]);
        consumo_0x0B_fponta += parseFloat(dado_potencia_ativa_0x0B[i]);
    }
    for(i=22;i<24;i++){
        consumo_0x01_fponta += parseFloat(dado_potencia_ativa_0x01[i]);
        consumo_0x02_fponta += parseFloat(dado_potencia_ativa_0x02[i]);
        consumo_0x03_fponta += parseFloat(dado_potencia_ativa_0x03[i]);
        consumo_0x04_fponta += parseFloat(dado_potencia_ativa_0x05[i]);
        consumo_0x05_fponta += parseFloat(dado_potencia_ativa_0x05[i]);
        consumo_0x06_fponta += parseFloat(dado_potencia_ativa_0x06[i]);
        consumo_0x07_fponta += parseFloat(dado_potencia_ativa_0x07[i]);
        consumo_0x08_fponta += parseFloat(dado_potencia_ativa_0x08[i]);
        consumo_0x09_fponta += parseFloat(dado_potencia_ativa_0x09[i]);
        consumo_0x0A_fponta += parseFloat(dado_potencia_ativa_0x0A[i]);
        consumo_0x0B_fponta += parseFloat(dado_potencia_ativa_0x0B[i]);
    }

    // INTERMEDIARIO //

    consumo_0x01_intermediario += parseFloat(dado_potencia_ativa_0x01[17]);
    consumo_0x02_intermediario += parseFloat(dado_potencia_ativa_0x02[17]);
    consumo_0x03_intermediario += parseFloat(dado_potencia_ativa_0x03[17]);
    consumo_0x04_intermediario += parseFloat(dado_potencia_ativa_0x05[17]);
    consumo_0x05_intermediario += parseFloat(dado_potencia_ativa_0x05[17]);
    consumo_0x06_intermediario += parseFloat(dado_potencia_ativa_0x06[17]);
    consumo_0x07_intermediario += parseFloat(dado_potencia_ativa_0x07[17]);
    consumo_0x08_intermediario += parseFloat(dado_potencia_ativa_0x08[17]);
    consumo_0x09_intermediario += parseFloat(dado_potencia_ativa_0x09[17]);
    consumo_0x0A_intermediario += parseFloat(dado_potencia_ativa_0x0A[17]);
    consumo_0x0B_intermediario += parseFloat(dado_potencia_ativa_0x0B[17]);
    
    consumo_0x01_intermediario += parseFloat(dado_potencia_ativa_0x01[21]);
    consumo_0x02_intermediario += parseFloat(dado_potencia_ativa_0x02[21]);
    consumo_0x03_intermediario += parseFloat(dado_potencia_ativa_0x03[21]);
    consumo_0x04_intermediario += parseFloat(dado_potencia_ativa_0x05[21]);
    consumo_0x05_intermediario += parseFloat(dado_potencia_ativa_0x05[21]);
    consumo_0x06_intermediario += parseFloat(dado_potencia_ativa_0x06[21]);
    consumo_0x07_intermediario += parseFloat(dado_potencia_ativa_0x07[21]);
    consumo_0x08_intermediario += parseFloat(dado_potencia_ativa_0x08[21]);
    consumo_0x09_intermediario += parseFloat(dado_potencia_ativa_0x09[21]);
    consumo_0x0A_intermediario += parseFloat(dado_potencia_ativa_0x0A[21]);
    consumo_0x0B_intermediario += parseFloat(dado_potencia_ativa_0x0B[21]);

    // PONTA //
    for(i=18;i<21;i++){
        consumo_0x01_ponta += parseFloat(dado_potencia_ativa_0x01[i]);
        consumo_0x02_ponta += parseFloat(dado_potencia_ativa_0x02[i]);
        consumo_0x03_ponta += parseFloat(dado_potencia_ativa_0x03[i]);
        consumo_0x04_ponta += parseFloat(dado_potencia_ativa_0x05[i]);
        consumo_0x05_ponta += parseFloat(dado_potencia_ativa_0x05[i]);
        consumo_0x06_ponta += parseFloat(dado_potencia_ativa_0x06[i]);
        consumo_0x07_ponta += parseFloat(dado_potencia_ativa_0x07[i]);
        consumo_0x08_ponta += parseFloat(dado_potencia_ativa_0x08[i]);
        consumo_0x09_ponta += parseFloat(dado_potencia_ativa_0x09[i]);
        consumo_0x0A_ponta += parseFloat(dado_potencia_ativa_0x0A[i]);
        consumo_0x0B_ponta += parseFloat(dado_potencia_ativa_0x0B[i]);
    }

    preco_0x01_B = consumo_0x01_fponta * tarifa_branca_fponta + consumo_0x01_intermediario * tarifa_branca_intermediaria + consumo_0x01_ponta * tarifa_branca_ponta;
    preco_0x01_B /= 1000;
    preco_0x02_B = consumo_0x02_fponta * tarifa_branca_fponta + consumo_0x02_intermediario * tarifa_branca_intermediaria + consumo_0x02_ponta * tarifa_branca_ponta;
    preco_0x02_B /= 1000;
    preco_0x03_B = consumo_0x03_fponta * tarifa_branca_fponta + consumo_0x03_intermediario * tarifa_branca_intermediaria + consumo_0x03_ponta * tarifa_branca_ponta;
    preco_0x03_B /= 1000;
    preco_0x04_B = consumo_0x04_fponta * tarifa_branca_fponta + consumo_0x04_intermediario * tarifa_branca_intermediaria + consumo_0x04_ponta * tarifa_branca_ponta;
    preco_0x04_B /= 1000;
    preco_0x05_B = consumo_0x05_fponta * tarifa_branca_fponta + consumo_0x05_intermediario * tarifa_branca_intermediaria + consumo_0x05_ponta * tarifa_branca_ponta;
    preco_0x05_B /= 1000;
    preco_0x06_B = consumo_0x06_fponta * tarifa_branca_fponta + consumo_0x06_intermediario * tarifa_branca_intermediaria + consumo_0x06_ponta * tarifa_branca_ponta;
    preco_0x06_B /= 1000;
    preco_0x07_B = consumo_0x07_fponta * tarifa_branca_fponta + consumo_0x07_intermediario * tarifa_branca_intermediaria + consumo_0x07_ponta * tarifa_branca_ponta;
    preco_0x07_B /= 1000;
    preco_0x08_B = consumo_0x08_fponta * tarifa_branca_fponta + consumo_0x08_intermediario * tarifa_branca_intermediaria + consumo_0x08_ponta * tarifa_branca_ponta;
    preco_0x08_B /= 1000;
    preco_0x09_B = consumo_0x09_fponta * tarifa_branca_fponta + consumo_0x09_intermediario * tarifa_branca_intermediaria + consumo_0x09_ponta * tarifa_branca_ponta;
    preco_0x09_B /= 1000;
    preco_0x0A_B = consumo_0x0A_fponta * tarifa_branca_fponta + consumo_0x0A_intermediario * tarifa_branca_intermediaria + consumo_0x0A_ponta * tarifa_branca_ponta;
    preco_0x0A_B /= 1000;
    preco_0x0B_B = consumo_0x0B_fponta * tarifa_branca_fponta + consumo_0x0B_intermediario * tarifa_branca_intermediaria + consumo_0x0B_ponta * tarifa_branca_ponta;
    preco_0x0B_B /= 1000; 
}

function soma(a,b){ 
    b = parseFloat(b);
    return a + b;
}

function atualiza_grafico(leitura){

    dado_potencia_ativa_0x01.pop();
    dado_potencia_ativa_0x01.push(leitura[0].medidor_1.Potencia_Ativa)
    dado_potencia_ativa_0x02.pop();
    dado_potencia_ativa_0x02.push(leitura[0].medidor_2.Potencia_Ativa)
    dado_potencia_ativa_0x03.pop();
    dado_potencia_ativa_0x03.push(leitura[0].medidor_3.Potencia_Ativa)
    dado_potencia_ativa_0x04.pop();
    dado_potencia_ativa_0x04.push(leitura[0].medidor_4.Potencia_Ativa)
    dado_potencia_ativa_0x05.pop();
    dado_potencia_ativa_0x05.push(leitura[0].medidor_5.Potencia_Ativa)
    dado_potencia_ativa_0x06.pop();
    dado_potencia_ativa_0x06.push(leitura[0].medidor_6.Potencia_Ativa)
    dado_potencia_ativa_0x07.pop();
    dado_potencia_ativa_0x07.push(leitura[0].medidor_7.Potencia_Ativa)
    dado_potencia_ativa_0x08.pop();
    dado_potencia_ativa_0x08.push(leitura[0].medidor_8.Potencia_Ativa)
    dado_potencia_ativa_0x09.pop();
    dado_potencia_ativa_0x09.push(leitura[0].medidor_9.Potencia_Ativa)
    dado_potencia_ativa_0x0A.pop();
    dado_potencia_ativa_0x0A.push(leitura[0].medidor_10.Potencia_Ativa)
    dado_potencia_ativa_0x0B.pop();
    dado_potencia_ativa_0x0B.push(leitura[0].total.Potencia_Ativa)
    
    tempo_pot[23] = leitura[2];
    if(dado_tempo_pot[23]!=tempo_pot[23]){
        dado_tempo_pot.shift();
        dado_tempo_pot.push(tempo_pot[23]);
    } else {
        dado_tempo_pot.pop();
        dado_tempo_pot.push(tempo_pot[23]);
    }

    dado_tempo.shift();
    dado_tempo.push(leitura[1]);

    dado_tensao_0x01.shift();
    dado_tensao_0x01.push(leitura[0].medidor_1.Tensao);                     
    dado_tensao_0x02.shift();
    dado_tensao_0x02.push(leitura[0].medidor_2.Tensao);                     
    dado_tensao_0x03.shift();
    dado_tensao_0x03.push(leitura[0].medidor_3.Tensao);                     
    dado_tensao_0x04.shift();
    dado_tensao_0x04.push(leitura[0].medidor_4.Tensao);                     
    dado_tensao_0x05.shift();
    dado_tensao_0x05.push(leitura[0].medidor_5.Tensao);                     
    dado_tensao_0x06.shift();
    dado_tensao_0x06.push(leitura[0].medidor_6.Tensao);                     
    dado_tensao_0x07.shift();
    dado_tensao_0x07.push(leitura[0].medidor_7.Tensao);                     
    dado_tensao_0x08.shift();
    dado_tensao_0x08.push(leitura[0].medidor_8.Tensao);                     
    dado_tensao_0x09.shift();
    dado_tensao_0x09.push(leitura[0].medidor_9.Tensao);                     
    dado_tensao_0x0A.shift();
    dado_tensao_0x0A.push(leitura[0].medidor_10.Tensao);                     
    dado_tensao_0x0B.shift();
    dado_tensao_0x0B.push(leitura[0].total.Tensao);                     
    
    dado_corrente_0x01.shift();
    dado_corrente_0x01.push(leitura[0].medidor_1.Corrente);                     
    dado_corrente_0x02.shift();
    dado_corrente_0x02.push(leitura[0].medidor_2.Corrente);                     
    dado_corrente_0x03.shift();
    dado_corrente_0x03.push(leitura[0].medidor_3.Corrente);                     
    dado_corrente_0x04.shift();
    dado_corrente_0x04.push(leitura[0].medidor_4.Corrente);                     
    dado_corrente_0x05.shift();
    dado_corrente_0x05.push(leitura[0].medidor_5.Corrente);                     
    dado_corrente_0x06.shift();
    dado_corrente_0x06.push(leitura[0].medidor_6.Corrente);                     
    dado_corrente_0x07.shift();
    dado_corrente_0x07.push(leitura[0].medidor_7.Corrente);                     
    dado_corrente_0x08.shift();
    dado_corrente_0x08.push(leitura[0].medidor_8.Corrente);                     
    dado_corrente_0x09.shift();
    dado_corrente_0x09.push(leitura[0].medidor_9.Corrente);                     
    dado_corrente_0x0A.shift();
    dado_corrente_0x0A.push(leitura[0].medidor_10.Corrente);                     
    dado_corrente_0x0B.shift();
    dado_corrente_0x0B.push(leitura[0].total.Corrente);                        
    
    fator_de_potencia_0x01 = leitura[0].medidor_1.Fator_de_potencia;
    fator_de_potencia_0x02 = leitura[0].medidor_2.Fator_de_potencia;
    fator_de_potencia_0x03 = leitura[0].medidor_3.Fator_de_potencia;
    fator_de_potencia_0x04 = leitura[0].medidor_4.Fator_de_potencia;
    fator_de_potencia_0x05 = leitura[0].medidor_5.Fator_de_potencia;
    fator_de_potencia_0x06 = leitura[0].medidor_6.Fator_de_potencia;
    fator_de_potencia_0x07 = leitura[0].medidor_7.Fator_de_potencia;
    fator_de_potencia_0x08 = leitura[0].medidor_8.Fator_de_potencia;
    fator_de_potencia_0x09 = leitura[0].medidor_9.Fator_de_potencia;
    fator_de_potencia_0x0A = leitura[0].medidor_10.Fator_de_potencia;
    fator_de_potencia_0x0B = leitura[0].total.Fator_de_potencia;
    
    calculo_tarifa();
    seletor();  
}

function seletor(){
    
    var x = document.getElementById("carga").value;
    var y = document.getElementById("informacao").value;
    
    if(x=="Total" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x0B;
        document.getElementById("tensao").innerHTML = tensao_0x0B + "V";
        document.getElementById("corrente").innerHTML = corrente_0x0B + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x0B.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x0B_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "bar";
        label_tempo = dado_tempo_pot;
        data_grafico = dado_potencia_ativa_0x0B;
        legenda = "[Wh]";
        titulo = "Consumo Horário";  
    }
    if(x=="C1" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x01;
        document.getElementById("tensao").innerHTML = tensao_0x01 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x01 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x01.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x01_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "bar";
        label_tempo = dado_tempo_pot;
        data_grafico = dado_potencia_ativa_0x01;
        legenda = "[Wh]";
        titulo = "Consumo Horário";      
    }
    if(x=="C2" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x02;
        document.getElementById("tensao").innerHTML = tensao_0x02 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x02 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x02.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x02_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "bar";
        label_tempo = dado_tempo_pot;
        data_grafico = dado_potencia_ativa_0x02;
        legenda = "[Wh]";
        titulo = "Consumo Horário";    
    }
    if(x=="C3" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x03;
        document.getElementById("tensao").innerHTML = tensao_0x03 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x03 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x03.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x03_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "bar";
        label_tempo = dado_tempo_pot;
        data_grafico = dado_potencia_ativa_0x03;
        legenda = "[Wh]";
        titulo = "Consumo Horário";      
    }
    if(x=="C4" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x04;
        document.getElementById("tensao").innerHTML = tensao_0x04 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x04 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x04.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x04_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "bar";
        label_tempo = dado_tempo_pot;
        data_grafico = dado_potencia_ativa_0x04;
        legenda = "[Wh]";
        titulo = "Consumo Horário";     
    }
    if(x=="C5" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x05;
        document.getElementById("tensao").innerHTML = tensao_0x05 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x05 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x05.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x05_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "bar";
        label_tempo = dado_tempo_pot;
        data_grafico = dado_potencia_ativa_0x05;
        legenda = "[Wh]";
        titulo = "Consumo Horário";      
    }
    if(x=="C6" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x06;
        document.getElementById("tensao").innerHTML = tensao_0x06 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x06 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x06.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x06_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "bar";
        label_tempo = dado_tempo_pot;
        data_grafico = dado_potencia_ativa_0x06;
        legenda = "[Wh]";
        titulo = "Consumo Horário";     
    }
    if(x=="C7" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x07;
        document.getElementById("tensao").innerHTML = tensao_0x07 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x07 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x07.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x07_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "bar";
        label_tempo = dado_tempo_pot;
        data_grafico = dado_potencia_ativa_0x07;
        legenda = "[Wh]";
        titulo = "Consumo Horário";    
    }
    if(x=="C8" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x08;
        document.getElementById("tensao").innerHTML = tensao_0x08 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x08 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x08.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x08_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "bar";
        label_tempo = dado_tempo_pot;
        data_grafico = dado_potencia_ativa_0x08;
        legenda = "[Wh]";
        titulo = "Consumo Horário";     
    }
    if(x=="C9" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x09;
        document.getElementById("tensao").innerHTML = tensao_0x09 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x09 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x09.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x09_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "bar";
        label_tempo = dado_tempo_pot;
        data_grafico = dado_potencia_ativa_0x09;
        legenda = "[Wh]";
        titulo = "Consumo Horário";     
    }
    if(x=="C10" && y=="C1"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x0A;
        document.getElementById("tensao").innerHTML = tensao_0x0A + "V";
        document.getElementById("corrente").innerHTML = corrente_0x0A + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x0A.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x0A_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "bar";
        label_tempo = dado_tempo_pot;
        data_grafico = dado_potencia_ativa_0x0A;
        legenda = "[Wh]";
        titulo = "Consumo Horário";      
    }
    if(x=="Total" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x0B;
        document.getElementById("tensao").innerHTML = tensao_0x0B + "V";
        document.getElementById("corrente").innerHTML = corrente_0x0B + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x0B.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x0B_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_corrente_0x0B;
        legenda = "[A]";
        titulo = "Corrente";    
    }
    if(x=="C1" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x01;
        document.getElementById("tensao").innerHTML = tensao_0x01 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x01 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x01.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x01_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_corrente_0x01;
        legenda = "[A]";
        titulo = "Corrente";      
    }
    if(x=="C2" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x02;
        document.getElementById("tensao").innerHTML = tensao_0x02 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x02 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x02.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x02_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_corrente_0x02;
        legenda = "[A]";
        titulo = "Corrente";     
    }
    if(x=="C3" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x03;
        document.getElementById("tensao").innerHTML = tensao_0x03 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x03 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x03.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x03_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_corrente_0x03;
        legenda = "[A]";
        titulo = "Corrente";       
    }
    if(x=="C4" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x04;
        document.getElementById("tensao").innerHTML = tensao_0x04 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x04 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x04.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x04_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_corrente_0x04;
        legenda = "[A]";
        titulo = "Corrente";       
    }
    if(x=="C5" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x05;
        document.getElementById("tensao").innerHTML = tensao_0x05 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x05 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x05.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x05_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_corrente_0x05;
        legenda = "[A]";
        titulo = "Corrente";       
    }
    if(x=="C6" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x06;
        document.getElementById("tensao").innerHTML = tensao_0x06 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x06 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x06.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x06_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_corrente_0x06;
        legenda = "[A]";
        titulo = "Corrente";       
    }
    if(x=="C7" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x07;
        document.getElementById("tensao").innerHTML = tensao_0x07 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x07 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x07.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x07_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_corrente_0x07;
        legenda = "[A]";
        titulo = "Corrente";       
    }
    if(x=="C8" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x08;
        document.getElementById("tensao").innerHTML = tensao_0x08 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x08 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x08.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x08_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_corrente_0x08;
        legenda = "[A]";
        titulo = "Corrente";       
    }
    if(x=="C9" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x09;
        document.getElementById("tensao").innerHTML = tensao_0x09 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x09 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x09.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x09_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_corrente_0x09;
        legenda = "[A]";
        titulo = "Corrente";       
    }
    if(x=="C10" && y=="C2"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x0A;
        document.getElementById("tensao").innerHTML = tensao_0x0A + "V";
        document.getElementById("corrente").innerHTML = corrente_0x0A + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x0A.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x0A_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_corrente_0x0A;
        legenda = "[A]";
        titulo = "Corrente";     
    }
    if(x=="Total" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x0B;
        document.getElementById("tensao").innerHTML = tensao_0x0B + "V";
        document.getElementById("corrente").innerHTML = corrente_0x0B + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x0B.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x0B_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_tensao_0x0B;
        legenda = "[V]";
        titulo = "Tensão";        
    }
    if(x=="C1" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x01;
        document.getElementById("tensao").innerHTML = tensao_0x01 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x01 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x01.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x01_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_tensao_0x01;
        legenda = "[V]";
        titulo = "Tensão";  
    }
    if(x=="C2" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x02;
        document.getElementById("tensao").innerHTML = tensao_0x02 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x02 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x02.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x02_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_tensao_0x02;
        legenda = "[V]";
        titulo = "Tensão";  
    }
    if(x=="C3" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x03;
        document.getElementById("tensao").innerHTML = tensao_0x03 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x03 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x03.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x03_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_tensao_0x03;
        legenda = "[V]";
        titulo = "Tensão"; 
    }
    if(x=="C4" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x04;
        document.getElementById("tensao").innerHTML = tensao_0x04 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x04 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x04.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x04_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_tensao_0x04;
        legenda = "[V]";
        titulo = "Tensão"; 
    }
    if(x=="C5" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x05;
        document.getElementById("tensao").innerHTML = tensao_0x05 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x05 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x05.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x05_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_tensao_0x05;
        legenda = "[V]";
        titulo = "Tensão";   
    }
    if(x=="C6" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x06;
        document.getElementById("tensao").innerHTML = tensao_0x06 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x06 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x06.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x06_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_tensao_0x06;
        legenda = "[V]";
        titulo = "Tensão";   
    }
    if(x=="C7" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x07;
        document.getElementById("tensao").innerHTML = tensao_0x07 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x07 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x07.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x07_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_tensao_0x07;
        legenda = "[V]";
        titulo = "Tensão";   
    }
    if(x=="C8" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x08;
        document.getElementById("tensao").innerHTML = tensao_0x08 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x08 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x08.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x08_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_tensao_0x08;
        legenda = "[V]";
        titulo = "Tensão";  
    }
    if(x=="C9" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x09;
        document.getElementById("tensao").innerHTML = tensao_0x09 + "V";
        document.getElementById("corrente").innerHTML = corrente_0x09 + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x09.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x09_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_tensao_0x09;
        legenda = "[V]";
        titulo = "Tensão";  
    }      
    if(x=="C10" && y=="C3"){
        document.getElementById("fp").innerHTML = fator_de_potencia_0x0A;
        document.getElementById("tensao").innerHTML = tensao_0x0A + "V";
        document.getElementById("corrente").innerHTML = corrente_0x0A + "A";
        document.getElementById("texto_fp").innerHTML = "Fator de Potência: ";
        document.getElementById("texto_tensao").innerHTML = "Tensão: ";
        document.getElementById("texto_corrente").innerHTML = "Corrente: ";
        document.getElementById('monomial').innerHTML = "Preço Convencional: " + preco_0x0A.toFixed(2) + " R$";
        document.getElementById('branca').innerHTML = "Preço Convencional: " + preco_0x0A_B.toFixed(2) + " R$";
        document.getElementById('posto').innerHTML = "Posto Horário:" + posto;
        tipo = "line";
        label_tempo = dado_tempo;
        data_grafico = dado_tensao_0x0A;
        legenda = "[V]";
        titulo = "Tensão";
    }
    window.chart.destroy();
    grafico();
}

    // FUNÇÃO PARA O SELETOR
function grafico(){
    var ctx = document.getElementById('myChart').getContext('2d');
        window.chart = new Chart(ctx, {
        type: tipo,
        data: {
            labels: label_tempo,
            datasets: [{
                label: legenda,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: data_grafico,
                fill: false
            }]
        },
        options: {
            animation: {
                duration: 0
            },
            title: {
                display: true,
                text: titulo
            }
        }
        });
}

setInterval(function() { fazerRequisicao() }, 5000);