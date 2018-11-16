var datalog      
var data_completa;
var tempo_tempo;
var n;
var dado_tempo = [];
var tempo_pot = [];
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
var n;
var t;



var url = 'http://192.168.15.115';
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
                        carregarInfosAtualDoBanco();
                            //atualiza_grafico(data);    
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
                leitura[1] = JSON.parse(JSON.parse(res)[0][1]);            
                leitura[2] = JSON.parse(JSON.parse(res)[0][2]);
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

        newGraph();  
    }

    setInterval(fazerRequisicao, 5000);
// FUNÇÃO PARA O SELETOR

function atualiza_grafico(leitura){

    dado_potencia_ativa_0x01.shift();
    dado_potencia_ativa_0x01.push(leitura[0].medidor_1.Potencia_Ativa)
    dado_potencia_ativa_0x02.shift();
    dado_potencia_ativa_0x02.push(leitura[0].medidor_2.Potencia_Ativa)
    dado_potencia_ativa_0x03.shift();
    dado_potencia_ativa_0x03.push(leitura[0].medidor_3.Potencia_Ativa)
    dado_potencia_ativa_0x04.shift();
    dado_potencia_ativa_0x04.push(leitura[0].medidor_4.Potencia_Ativa)
    dado_potencia_ativa_0x05.shift();
    dado_potencia_ativa_0x05.push(leitura[0].medidor_5.Potencia_Ativa)
    dado_potencia_ativa_0x06.shift();
    dado_potencia_ativa_0x06.push(leitura[0].medidor_6.Potencia_Ativa)
    dado_potencia_ativa_0x07.shift();
    dado_potencia_ativa_0x07.push(leitura[0].medidor_7.Potencia_Ativa)
    dado_potencia_ativa_0x08.shift();
    dado_potencia_ativa_0x08.push(leitura[0].medidor_8.Potencia_Ativa)
    dado_potencia_ativa_0x09.shift();
    dado_potencia_ativa_0x09.push(leitura[0].medidor_9.Potencia_Ativa)
    dado_potencia_ativa_0x0A.shift();
    dado_potencia_ativa_0x0A.push(leitura[0].medidor_10.Potencia_Ativa)
    dado_potencia_ativa_0x0B.shift();
    dado_potencia_ativa_0x0B.push(leitura[0].total.Potencia_Ativa)
    
    dado_tempo_pot.shift();
    dado_tempo_pot.push(leitura[2]);

    dado_tempo.shift();
    dado_tempo.push(leitura[1]);

    /*dado_potencia_aparente_0x01.shift();
    dado_potencia_aparente_0x01.push(leitura[0].medidor_1.Potencia_Aparente);                     
    dado_potencia_aparente_0x02.shift();
    dado_potencia_aparente_0x02.push(leitura[0].medidor_2.Potencia_Aparente);                     
    dado_potencia_aparente_0x03.shift();
    dado_potencia_aparente_0x03.push(leitura[0].medidor_3.Potencia_Aparente);                     
    dado_potencia_aparente_0x04.shift();
    dado_potencia_aparente_0x04.push(leitura[0].medidor_4.Potencia_Aparente);                     
    dado_potencia_aparente_0x05.shift();
    dado_potencia_aparente_0x05.push(leitura[0].medidor_5.Potencia_Aparente);                     
    dado_potencia_aparente_0x06.shift();
    dado_potencia_aparente_0x06.push(leitura[0].medidor_6.Potencia_Aparente);                     
    dado_potencia_aparente_0x07.shift();
    dado_potencia_aparente_0x07.push(leitura[0].medidor_7.Potencia_Aparente);                     
    dado_potencia_aparente_0x08.shift();
    dado_potencia_aparente_0x08.push(leitura[0].medidor_8.Potencia_Aparente);                     
    dado_potencia_aparente_0x09.shift();
    dado_potencia_aparente_0x09.push(leitura[0].medidor_9.Potencia_Aparente);                     
    dado_potencia_aparente_0x0A.shift();
    dado_potencia_aparente_0x0A.push(leitura[0].medidor_10.Potencia_Aparente);                     
    dado_potencia_aparente_0x0B.shift();
    dado_potencia_aparente_0x0B.push(leitura[0].total.Potencia_Aparente);                     
    */
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
    
    newGraph();  
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
            labels: dado_tempo_pot,
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_potencia_ativa_0x0B,
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
            labels: dado_tempo_pot,
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_potencia_ativa_0x01,
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
            labels: dado_tempo_pot,
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_potencia_ativa_0x02,
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
            labels: dado_tempo_pot,
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_potencia_ativa_0x03,
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
            labels: dado_tempo_pot,
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_potencia_ativa_0x04,
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
            labels: dado_tempo_pot,
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_potencia_ativa_0x05,
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
            labels: dado_tempo_pot,
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_potencia_ativa_0x06,
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
            labels: dado_tempo_pot,
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_potencia_ativa_0x07,
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
            labels: dado_tempo_pot,
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_potencia_ativa_0x08,
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
            labels: dado_tempo_pot,
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_potencia_ativa_0x09,
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
            labels: dado_tempo_pot,
            datasets: [{
                label: "[Wh]",
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                // data sera atrelhado à uma variável que recebe os dados do arduino
                data: dado_potencia_ativa_0x0A,
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