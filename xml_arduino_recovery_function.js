function xml_arduino_recovery()
        {
            nocache = "&nocache=" + Math.random() * 1000000;
            var request = new XMLHttpRequest();
            request.onreadystatechange = function()
            {
                    if (this.readyState == 4 && this.status == 200 && this.responseXML != null) {
                        // extract XML data from XML file
                    /*    data_completa =
                        this.responseXML.getElementsByTagName('dtc')[0].childNodes[0].nodeValue;
                        tempo_tempo =
                        this.responseXML.getElementsByTagName('dt')[0].childNodes[0].nodeValue; 
                        tempo_hora =
                        this.responseXML.getElementsByTagName('h_')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x01[tempo_hora] =
                        this.responseXML.getElementsByTagName('p1')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x02[tempo_hora] =
                        this.responseXML.getElementsByTagName('p2')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x03[tempo_hora] =
                        this.responseXML.getElementsByTagName('p3')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x04[tempo_hora] =
                        this.responseXML.getElementsByTagName('p4')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x05[tempo_hora] =
                        this.responseXML.getElementsByTagName('p5')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x06[tempo_hora] =
                        this.responseXML.getElementsByTagName('p6')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x07[tempo_hora] =
                        this.responseXML.getElementsByTagName('p7')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x08[tempo_hora] =
                        this.responseXML.getElementsByTagName('p8')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x09[tempo_hora] =
                        this.responseXML.getElementsByTagName('p9')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x0A[tempo_hora] =
                        this.responseXML.getElementsByTagName('p10')[0].childNodes[0].nodeValue;
                        potencia_ativa_0x0B[tempo_hora] =
                        this.responseXML.getElementsByTagName('pt')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x01[tempo_hora] =
                        this.responseXML.getElementsByTagName('s1')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x02[tempo_hora] =
                        this.responseXML.getElementsByTagName('s2')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x03[tempo_hora] =
                        this.responseXML.getElementsByTagName('s3')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x04[tempo_hora] =
                        this.responseXML.getElementsByTagName('s4')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x05[tempo_hora] =
                        this.responseXML.getElementsByTagName('s5')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x06[tempo_hora] =
                        this.responseXML.getElementsByTagName('s6')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x07[tempo_hora] =
                        this.responseXML.getElementsByTagName('s7')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x08[tempo_hora] =
                        this.responseXML.getElementsByTagName('s8')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x09[tempo_hora] =
                        this.responseXML.getElementsByTagName('s9')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x0A[tempo_hora] =
                        this.responseXML.getElementsByTagName('s10')[0].childNodes[0].nodeValue;
                        potencia_aparente_0x0B[tempo_hora] =
                        this.responseXML.getElementsByTagName('st')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x01 =
                        this.responseXML.getElementsByTagName('fp1')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x02 =
                        this.responseXML.getElementsByTagName('fp2')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x03 =
                        this.responseXML.getElementsByTagName('fp3')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x04 =
                        this.responseXML.getElementsByTagName('fp4')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x05 =
                        this.responseXML.getElementsByTagName('fp5')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x06 =
                        this.responseXML.getElementsByTagName('fp6')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x07 =
                        this.responseXML.getElementsByTagName('fp7')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x08 =
                        this.responseXML.getElementsByTagName('fp8')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x09 =
                        this.responseXML.getElementsByTagName('fp9')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x0A =
                        this.responseXML.getElementsByTagName('fp10')[0].childNodes[0].nodeValue;
                        fator_de_potencia_0x0B =
                        this.responseXML.getElementsByTagName('fpt')[0].childNodes[0].nodeValue;
                        tensao_0x01 =
                        this.responseXML.getElementsByTagName('v1')[0].childNodes[0].nodeValue;
                        tensao_0x02 =
                        this.responseXML.getElementsByTagName('v2')[0].childNodes[0].nodeValue;
                        tensao_0x03 =
                        this.responseXML.getElementsByTagName('v3')[0].childNodes[0].nodeValue;
                        tensao_0x04 =
                        this.responseXML.getElementsByTagName('v4')[0].childNodes[0].nodeValue;
                        tensao_0x05 =
                        this.responseXML.getElementsByTagName('v5')[0].childNodes[0].nodeValue;
                        tensao_0x06 =
                        this.responseXML.getElementsByTagName('v6')[0].childNodes[0].nodeValue;
                        tensao_0x07 =
                        this.responseXML.getElementsByTagName('v7')[0].childNodes[0].nodeValue;
                        tensao_0x08 =
                        this.responseXML.getElementsByTagName('v8')[0].childNodes[0].nodeValue;
                        tensao_0x09 =
                        this.responseXML.getElementsByTagName('v9')[0].childNodes[0].nodeValue;
                        tensao_0x0A =
                        this.responseXML.getElementsByTagName('v10')[0].childNodes[0].nodeValue;
                        tensao_0x0B =
                        this.responseXML.getElementsByTagName('vt')[0].childNodes[0].nodeValue;
                        corrente_0x01 =
                        this.responseXML.getElementsByTagName('a1')[0].childNodes[0].nodeValue;
                        corrente_0x02 =
                        this.responseXML.getElementsByTagName('a2')[0].childNodes[0].nodeValue;
                        corrente_0x03 =
                        this.responseXML.getElementsByTagName('a3')[0].childNodes[0].nodeValue;
                        corrente_0x04 =
                        this.responseXML.getElementsByTagName('a4')[0].childNodes[0].nodeValue;
                        corrente_0x05 =
                        this.responseXML.getElementsByTagName('a5')[0].childNodes[0].nodeValue;
                        corrente_0x06 =
                        this.responseXML.getElementsByTagName('a6')[0].childNodes[0].nodeValue;
                        corrente_0x07 =
                        this.responseXML.getElementsByTagName('a7')[0].childNodes[0].nodeValue;
                        corrente_0x08 =
                        this.responseXML.getElementsByTagName('a8')[0].childNodes[0].nodeValue;
                        corrente_0x09 =
                        this.responseXML.getElementsByTagName('a9')[0].childNodes[0].nodeValue;
                        corrente_0x0A =
                        this.responseXML.getElementsByTagName('a10')[0].childNodes[0].nodeValue;
                        corrente_0x0B =
                        this.responseXML.getElementsByTagName('at')[0].childNodes[0].nodeValue;

                        atualiza_grafico();*/
                        newGraph();  
                    }
            }
            request.open("GET", "ajax_recovery" + nocache, true);
            request.send(null);
        }