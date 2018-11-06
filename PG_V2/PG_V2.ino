//    LEMBRAR DE TROCAR O COMANDO DELAY POR MILLIS PARA EVITAR INTERRUPÇÃO NO CÓDIGO    //
 
//    BIBLIOTECAS   //
#include <SPI.h>
#include <Ethernet.h>
#include <SD.h>
#include <Wire.h>
#include <EmonLib.h>
#include <DS3231.h>

//    MEDIDOR 1   //
EnergyMonitor emon1;
float antigo_realPower1;
float realPower1;  
float apparentPower1;    
float powerFActor1;      
float supplyVoltage1;             
float Irms1;

//    MEDIDOR 2   //
float realPower2;  
float apparentPower2;    
float powerFActor2;      
float supplyVoltage2;             
float Irms2;

//    MEDIDOR 3   //
float realPower3;  
float apparentPower3;    
float powerFActor3;      
float supplyVoltage3;             
float Irms3;

//    MEDIDOR 4   //
float realPower4;  
float apparentPower4;    
float powerFActor4;      
float supplyVoltage4;             
float Irms4;

//    MEDIDOR 5   //
float realPower5;  
float apparentPower5;    
float powerFActor5;      
float supplyVoltage5;             
float Irms5;

//    MEDIDOR 6   //
float realPower6;  
float apparentPower6;    
float powerFActor6;      
float supplyVoltage6;             
float Irms6;

//    MEDIDOR 7   //
float realPower7;  
float apparentPower7;    
float powerFActor7;      
float supplyVoltage7;             
float Irms7;

//    MEDIDOR 8   //
float realPower8;  
float apparentPower8;    
float powerFActor8;      
float supplyVoltage8;             
float Irms8;

//    MEDIDOR 9   //
float realPower9;  
float apparentPower9;    
float powerFActor9;      
float supplyVoltage9;             
float Irms9;

//    MEDIDOR 10   //
float realPower10;  
float apparentPower10;    
float powerFActor10;      
float supplyVoltage10;             
float Irms10;

//    TOTAIS    //
float realPowert;  
float apparentPowert;    
float powerFActort;      
float supplyVoltaget;             
float Irmst;

//    SENSORES   //
const int SensorCorrente_1 = A0;
const int SensorTensao_1 = A1;

//    SD    //
#define PIN_SD_CARD 4

//    RTC    //
DS3231 rtc;              
RTCDateTime dataehora;   

//    ENDEREÇO DISPOSITIVOS    //
int arduino_01 = 0x01;
int arduino_02 = 0x02;
int arduino_03 = 0x03;

//    TAMANHO MENSAGEM    //
int size_1;
int size_2;
int size_3;
int size_4;
int size_5;
int size_6;
int size_7;
int size_8;
int size_9;
int size_10;
int size_11;
int size_12;
int size_13;
int size_14;
int size_15;
int total_size_1;
int total_size_2;
int total_size_3;

//   MENSAGEM  //
char rP1[8];
char aP1[8];
char pF1[8];
char sV1[8];
char Ir1[8];
char mensagem;
String dados;
String data_completa;
String hora_completa;
String data_hora;
String dados_arduino_0X00_01;
String dados_arduino_0X01_01;
String dados_arduino_0X01_02;
String dados_arduino_0X01_03;
String dados_arduino_0X02_01;
String dados_arduino_0X02_02;
String dados_arduino_0X02_03;
String dados_arduino_0X03_01;
String dados_arduino_0X03_02;
String dados_arduino_0X03_03;

//   DATA HORA   //
byte data;

//    MENSURAR AS GRANDEZAS    //
void medir(){
  antigo_realPower1 = realPower1;
  emon1.calcVI(20,2000);

   //    MEDIDOR 01    //
  realPower1       = emon1.realPower;        
  apparentPower1   = emon1.apparentPower;    
  powerFActor1     = emon1.powerFactor;      
  supplyVoltage1   = emon1.Vrms;             
  Irms1            = emon1.Irms;
}

//    CALCULOS PARA OS GRÁFICOS    //
void totais(){
  realPowert = (realPower1 + realPower2 + realPower3 + realPower4 + realPower5 + realPower6 + realPower7 + realPower8 + realPower9 + realPower10)/10;
  apparentPowert = (apparentPower1 + apparentPower2 + apparentPower3 + apparentPower4 + apparentPower5 + apparentPower6 + apparentPower7 + apparentPower8 + apparentPower9 + apparentPower10)/10;
  powerFActort = (powerFActor1 + powerFActor2 + powerFActor3 + powerFActor4 + powerFActor5 + powerFActor6 + powerFActor7 + powerFActor8 + powerFActor9 + powerFActor10)/10;
  supplyVoltaget = (supplyVoltage1 + supplyVoltage2 + supplyVoltage3 + supplyVoltage4 + supplyVoltage5 + supplyVoltage6 + supplyVoltage7 + supplyVoltage8 + supplyVoltage9 + supplyVoltage10)/10;
  Irmst = (Irms1 + Irms2 + Irms3 + Irms4 + Irms5 + Irms6 + Irms7 + Irms8 + Irms9 + Irms10);
}

//    PREPARA OS DADOS PARA O XML    //
void subString_para_float(int alterna){
  int ind1;
  int ind2;
  int ind3;
  int ind4;
  int ind5;
  
  switch (alterna){
    case 1:
      
      realPower1 += antigo_realPower1;
      realPower1 /= 2;

      ind1 = dados_arduino_0X01_01.indexOf(",");
      realPower2 += dados_arduino_0X01_01.substring(0, ind1).toFloat();
      realPower2 /= 2;
      ind2 = dados_arduino_0X01_01.indexOf(",", ind1 + 1);
      apparentPower2 = dados_arduino_0X01_01.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X01_01.indexOf(",", ind2 + 1);
      powerFActor2 = dados_arduino_0X01_01.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X01_01.indexOf(",", ind3 + 1);
      supplyVoltage2 = dados_arduino_0X01_01.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X01_01.indexOf(",", ind4 + 1);
      Irms2 = dados_arduino_0X01_01.substring(ind4 + 1, ind5).toFloat();

      ind1 = dados_arduino_0X01_02.indexOf(",");
      realPower3 += dados_arduino_0X01_02.substring(0, ind1).toFloat();
      realPower3 /= 2;
      ind2 = dados_arduino_0X01_02.indexOf(",", ind1 + 1);
      apparentPower3 = dados_arduino_0X01_02.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X01_02.indexOf(",", ind2 + 1);
      powerFActor3 = dados_arduino_0X01_02.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X01_02.indexOf(",", ind3 + 1);
      supplyVoltage3 = dados_arduino_0X01_02.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X01_02.indexOf(",", ind4 + 1);
      Irms3 = dados_arduino_0X01_02.substring(ind4 + 1, ind5).toFloat();

      ind1 = dados_arduino_0X01_03.indexOf(",");
      realPower4 += dados_arduino_0X01_03.substring(0, ind1).toFloat();
      realPower4 /= 2;
      ind2 = dados_arduino_0X01_03.indexOf(",", ind1 + 1);
      apparentPower4 = dados_arduino_0X01_03.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X01_03.indexOf(",", ind2 + 1);
      powerFActor4 = dados_arduino_0X01_03.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X01_03.indexOf(",", ind3 + 1);
      supplyVoltage5 = dados_arduino_0X01_03.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X01_03.indexOf(",", ind4 + 1);
      Irms5 = dados_arduino_0X01_03.substring(ind4 + 1, ind5).toFloat();

      break;
    
    case 2:

      ind1 = dados_arduino_0X02_01.indexOf(",");
      realPower5 += dados_arduino_0X02_01.substring(0, ind1).toFloat();
      realPower5 /= 2;
      ind2 = dados_arduino_0X02_01.indexOf(",", ind1 + 1);
      apparentPower5 = dados_arduino_0X02_01.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X02_01.indexOf(",", ind2 + 1);
      powerFActor5 = dados_arduino_0X02_01.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X02_01.indexOf(",", ind3 + 1);
      supplyVoltage5 = dados_arduino_0X02_01.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X02_01.indexOf(",", ind4 + 1);
      Irms5 = dados_arduino_0X02_01.substring(ind4 + 1, ind5).toFloat();

      ind1 = dados_arduino_0X02_02.indexOf(",");
      realPower6 += dados_arduino_0X02_02.substring(0, ind1).toFloat();
      realPower6 /= 2;
      ind2 = dados_arduino_0X02_02.indexOf(",", ind1 + 1);
      apparentPower6 = dados_arduino_0X02_02.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X02_02.indexOf(",", ind2 + 1);
      powerFActor6 = dados_arduino_0X02_02.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X02_02.indexOf(",", ind3 + 1);
      supplyVoltage6 = dados_arduino_0X02_02.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X02_02.indexOf(",", ind4 + 1);
      Irms6 = dados_arduino_0X02_02.substring(ind4 + 1, ind5).toFloat();

      ind1 = dados_arduino_0X02_03.indexOf(",");
      realPower7 += dados_arduino_0X02_03.substring(0, ind1).toFloat();
      realPower7 /= 2;
      ind2 = dados_arduino_0X02_03.indexOf(",", ind1 + 1);
      apparentPower7 = dados_arduino_0X02_03.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X02_03.indexOf(",", ind2 + 1);
      powerFActor7 = dados_arduino_0X02_03.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X02_03.indexOf(",", ind3 + 1);
      supplyVoltage7 = dados_arduino_0X02_03.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X02_03.indexOf(",", ind4 + 1);
      Irms7 = dados_arduino_0X02_03.substring(ind4 + 1, ind5).toFloat();
    
      break;
    
    case 3:

      ind1 = dados_arduino_0X03_01.indexOf(",");
      realPower8 += dados_arduino_0X03_01.substring(0, ind1).toFloat();
      realPower8 /= 2;
      ind2 = dados_arduino_0X03_01.indexOf(",", ind1 + 1);
      apparentPower8 = dados_arduino_0X03_01.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X03_01.indexOf(",", ind2 + 1);
      powerFActor8 = dados_arduino_0X03_01.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X03_01.indexOf(",", ind3 + 1);
      supplyVoltage8 = dados_arduino_0X03_01.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X03_01.indexOf(",", ind4 + 1);
      Irms8 = dados_arduino_0X03_01.substring(ind4 + 1, ind5).toFloat();

      ind1 = dados_arduino_0X03_02.indexOf(",");
      realPower9 += dados_arduino_0X03_02.substring(0, ind1).toFloat();
      realPower9 /= 2;
      ind2 = dados_arduino_0X03_02.indexOf(",", ind1 + 1);
      apparentPower9 = dados_arduino_0X03_02.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X03_02.indexOf(",", ind2 + 1);
      powerFActor9 = dados_arduino_0X03_02.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X03_02.indexOf(",", ind3 + 1);
      supplyVoltage9 = dados_arduino_0X03_02.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X03_02.indexOf(",", ind4 + 1);
      Irms9 = dados_arduino_0X03_02.substring(ind4 + 1, ind5).toFloat();

      ind1 = dados_arduino_0X03_03.indexOf(",");
      realPower10 += dados_arduino_0X03_03.substring(0, ind1).toFloat();
      realPower10 /= 2;
      ind2 = dados_arduino_0X03_03.indexOf(",", ind1 + 1);
      apparentPower10 = dados_arduino_0X03_03.substring(ind1 + 1, ind2).toFloat();
      ind3 = dados_arduino_0X03_03.indexOf(",", ind2 + 1);
      powerFActor10 = dados_arduino_0X03_03.substring(ind2 + 1, ind3).toFloat();
      ind4 = dados_arduino_0X03_03.indexOf(",", ind3 + 1);
      supplyVoltage10 = dados_arduino_0X03_03.substring(ind3 + 1, ind4).toFloat();
      ind5 = dados_arduino_0X03_03.indexOf(",", ind4 + 1);
      Irms10 = dados_arduino_0X03_03.substring(ind4 + 1, ind5).toFloat();

      break;
  }
}

//    RECEBE AS MENSAGENS    //
void recebe_dados(){
  
  recebe_tamanho(arduino_01);
  dados_arduino_0X01_01 = recebe_escravo_1(arduino_01);
  dados_arduino_0X01_02 = recebe_escravo_2(arduino_01);
  dados_arduino_0X01_03 = recebe_escravo_3(arduino_01);

  recebe_tamanho(arduino_02);
  dados_arduino_0X02_01 = recebe_escravo_1(arduino_02);
  dados_arduino_0X02_02 = recebe_escravo_2(arduino_02);
  dados_arduino_0X02_03 = recebe_escravo_3(arduino_02);

  recebe_tamanho(arduino_03);
  dados_arduino_0X03_01 = recebe_escravo_1(arduino_03);
  dados_arduino_0X03_02 = recebe_escravo_2(arduino_03);
  dados_arduino_0X03_03 = recebe_escravo_3(arduino_03);
}

//    ENVIAR OS DADOS    //
void envia_dados(){  
  banco_de_dados(data_completa);
  banco_de_dados(dados_arduino_0X00_01);
  banco_de_dados(dados_arduino_0X01_01);
  banco_de_dados(dados_arduino_0X01_02);
  banco_de_dados(dados_arduino_0X01_03);
  banco_de_dados(dados_arduino_0X02_01);
  banco_de_dados(dados_arduino_0X02_02);
  banco_de_dados(dados_arduino_0X02_03);
  banco_de_dados(dados_arduino_0X03_01);
  banco_de_dados(dados_arduino_0X03_02);
  banco_de_dados(dados_arduino_0X03_03);
}

//    LIMPAR MENSAGENS    //
void limpar_string(){    
  data_completa="";
  dados_arduino_0X00_01 = "";
  dados_arduino_0X01_01 = "";
  dados_arduino_0X01_02 = "";
  dados_arduino_0X01_03 = "";
  dados_arduino_0X02_01 = "";
  dados_arduino_0X02_02 = "";
  dados_arduino_0X02_03 = "";
  dados_arduino_0X03_01 = "";
  dados_arduino_0X03_02 = "";
  dados_arduino_0X03_03 = "";
}

//    RTC    //
void relogio(){
    dataehora = rtc.getDateTime();
    
    data_hora = dataehora.hour;

    hora_completa += dataehora.hour;
    hora_completa += ",";
    hora_completa += dataehora.minute;
    hora_completa += ",";
    hora_completa += dataehora.second;

    data_completa += dataehora.year;
    data_completa += "/";
    data_completa += dataehora.month;
    data_completa += "/";
    data_completa += dataehora.day;
    data_completa += " ";
    data_completa += dataehora.hour;
    data_completa += ":";
    data_completa += dataehora.minute;
    data_completa += ":";
    data_completa += dataehora.second;
  }
  

//    DATALOG SD  //
void banco_de_dados(String dataString){
  File dataFile = SD.open("datalog.txt", FILE_WRITE);
  if (dataFile) {
    dataFile.println(dataString);
    dataFile.close();
    Serial.println(dataString);
  } else {
      Serial.println("error opening datalog.txt");
    }
}

//    ORGANIZA OS DADOS MEDIDOS    //
void float_para_String(float rP, float aP, float pF, float sV, float Ir){

  //   CONVERTE FLOAT PARA STRING   //
  dtostrf(rP, String(rP1).length(), 2, rP1);
  dtostrf(aP, String(aP1).length(), 2, aP1);
  dtostrf(pF, String(pF1).length(), 2, pF1);
  dtostrf(sV, String(sV1).length(), 2, sV1);
  dtostrf(Ir, String(Ir1).length(), 2, Ir1);
  
  dados_arduino_0X00_01 += rP1;
  dados_arduino_0X00_01 += ", ";
  dados_arduino_0X00_01 += aP1;
  dados_arduino_0X00_01 += ", ";
  dados_arduino_0X00_01 += pF1;
  dados_arduino_0X00_01 += ", ";
  dados_arduino_0X00_01 += sV1;
  dados_arduino_0X00_01 += ", ";
  dados_arduino_0X00_01 += Ir1;
}

//   VERIFICAR O TAMANHO DA MENSAGEM  //
void recebe_tamanho(int endereco){
  Wire.requestFrom(endereco,15);
  while (Wire.available()){
    mensagem = Wire.read();
    size_1 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_2 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_3 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_4 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_5 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_6 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_7 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_8 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_9 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_10 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_11 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_12 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_13 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_14 = String(mensagem).toInt();
    mensagem = Wire.read();
    size_15 = String(mensagem).toInt();
  }
  total_size_1 = size_1 + size_2 + size_3 + size_4 + size_5;
  total_size_2 = size_6 + size_7 + size_8 + size_9 + size_10;
  total_size_3 = size_11 + size_12 + size_13 + size_14 + size_15;
}

//    RECEBE OS DADOS DO DISPOSITIVO ESCRAVO    //
String recebe_escravo_1(int endereco){ 
  Wire.requestFrom(endereco,total_size_1);    // (ENDEREÇO,QUANTIDADE DE BYTES)
  while (Wire.available()){
    for(int i = 0; i < size_1; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_2; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_3; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_4; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_5; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
  }
  return dados;
}

//    RECEBE OS DADOS DO DISPOSITIVO ESCRAVO    //
String recebe_escravo_2(int endereco){ 
  Wire.requestFrom(endereco,total_size_2);    // (ENDEREÇO,QUANTIDADE DE BYTES)
  while (Wire.available()){
    dados += ", "; 
    for(int i = 0; i < size_6; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_7; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_8; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_9; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_10; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", ";
  }
  return dados;
}

//    RECEBE OS DADOS DO DISPOSITIVO ESCRAVO    //
String recebe_escravo_3(int endereco){ 
  Wire.requestFrom(endereco,total_size_3);    // (ENDEREÇO,QUANTIDADE DE BYTES)
  while (Wire.available()){ 
    for(int i = 0; i < size_11; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_12; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_13; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_14; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", "; 
    for(int i = 0; i < size_15; i++){
      mensagem = Wire.read(); 
      dados += mensagem;
    }
    dados += ", ";        
  }
  return dados;  
}

//    USUARIO E SENHA   // 
boolean validar_usuario(char * linebuf){
  char usuario_senha[] = "admin:admin"; //"usuario:senha";
  byte t = strlen(usuario_senha);
  int tamanhoEnc = (((t-1) / 3) + 1) * 4; //tamanho da string codificada
  char *out = base64_encode(usuario_senha, t);
  char out2[tamanhoEnc];
  for (t=0; t<(tamanhoEnc); t++) { out2[t] = linebuf[21+t]; }
  return (strstr(out2, out)>0);
}
 
//    SD CARD   //   
boolean iniciar_sd_card() {
  pinMode(10, OUTPUT);
  digitalWrite(10, HIGH); 
  if (!SD.begin(PIN_SD_CARD)){ return false; }  
  return true;
}

//    WEBSERVER    //
EthernetServer * server;
 
void write_from_file(EthernetClient &client, char * filename){
  File webFile = SD.open(filename);
  if (webFile) {
    while(webFile.available()) { client.write(webFile.read()); }
    webFile.close();
  } 
  else {
    Serial.print("Erro SD CARD: ");
    Serial.println(filename);
  }
}
 
void iniciar_ethernet(){
  byte ip[4]      = {192,168,0,40};                    
  byte gateway[4] = {192,168,0,1};
  byte subnet[4]  = {255,255,255,0};
  byte mac[6]     = {0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED};
  int  porta      = 80;
  server = new EthernetServer(porta);
  Ethernet.begin(mac, ip, gateway, subnet);
  server->begin();
}
 
void html_cab_200_ok(EthernetClient &client){   
  client.println(F("HTTP/1.1 200 OK\n"
                   "Content-Type: text/html\n"
                   "Connection: keep-alive\n\n"));
}
 
void html_logoff(EthernetClient &client){
    client.print(F(
                 "HTTP/1.1 401 Authorization Required\n"  
                 "Content-Type: text/html\n"  
                 "Connnection: close\n\n"  
                 "<!DOCTYPE HTML>\n"  
                 "<html><head><title>Logoff</title>\n"  
                 "<script>document.execCommand('ClearAuthenticationCache', 'false');</script>"  //IE logoff
                 "<script>try {"                                                                //mozila logoff
                 "   var agt=navigator.userAgent.toLowerCase();"
                 "   if (agt.indexOf(\"msie\") != -1) { document.execCommand(\"ClearAuthenticationCache\"); }"
                 "   else {"
                 "     var xmlhttp = createXMLObject();"
                 "      xmlhttp.open(\"GET\",\"URL\",true,\"logout\",\"logout\");"
                 "     xmlhttp.send(\"\");"
                 "     xmlhttp.abort();"
                 "   }"
                 " } catch(e) {"
                 "   alert(\"erro ao fazer logoff\");"
                 " }"
                 "function createXMLObject() {"
                 "  try {if (window.XMLHttpRequest) {xmlhttp = new XMLHttpRequest();} else if (window.ActiveXObject) {xmlhttp=new ActiveXObject(\"Microsoft.XMLHTTP\");}} catch (e) {xmlhttp=false;}"
                 "  return xmlhttp;"
                 "}</script>"
                 "</head><body><h1>Voce nao esta mais conectado</h1></body></html>\n"));
}
 
void html_autenticar(EthernetClient &client) {
  client.print(F("HTTP/1.1 401 Authorization Required\n"  
               "WWW-Authenticate: Basic realm=\"Area Restrita\"\n"  
               "Content-Type: text/html\n"  
               "Connnection: close\n\n"  
               "<!DOCTYPE HTML>\n"  
               "<html><head><title>Error</title>\n"  
               "</head><body><h1>401 Acesso nao autorizado</h1></body></html>\n"));
}
 
void html_autenticado(EthernetClient &client, char * filename){
  client.println(F("HTTP/1.1 200 OK\n"
                   "Content-Type: text/html\n"
                   "Connection: keep-alive\n")); 
  write_from_file(client, filename);
}
 
void js_file(EthernetClient &client, char * filename){
  client.println(F("HTTP/1.1 200 OK\n"
                   "Content-Type: text/javascript\n"
                   "Connection: keep-alive\n")); 
  write_from_file(client, filename);
}

void chart_file(EthernetClient &client, char * filename){
  client.println(F("HTTP/1.1 200 OK\n"
                   "Content-Type: text/javascript\n"
                   "Connection: keep-alive\n")); 
  write_from_file(client, filename);
}
 
void css_file(EthernetClient &client, char * filename){
  client.println(F("HTTP/1.1 200 OK\n"
                   "Content-Type: text/css\n"
                   "Connection: keep-alive\n"));
  write_from_file(client, filename);
}
 
void favicon_file(EthernetClient &client, char * filename){
  client.println(F("HTTP/1.1 200 OK\n"
                   "Content-Type: image/x-icon\n"
                   "Connection: keep-alive\n"));
  write_from_file(client, filename);
}
  
void pdf_file_download(EthernetClient &client, char * filename){
  client.println(F("HTTP/1.1 200 OK\n"
                   "Content-Type: application/download\n"
                   "Connection: close\n"));    
  write_from_file(client, filename);
}
 
void jpg_file(EthernetClient &client, char * filename){
  client.println(F("HTTP/1.1 200 OK\n"
                   "Content-Type: file/jpg\n"
                   "Connection: close\n"));    
  write_from_file(client, filename);
}
  
void exec_ethernet() {
  EthernetClient client = server->available();
  if (client) {
    char linebuf[80];
    memset(linebuf, 0, sizeof(linebuf));  
    int     charCount          = 0;
    boolean autenticado        = false;
    boolean currentLineIsBlank = true;
    boolean logoff             = false;
    boolean indCss             = false;
    boolean indJs              = false;
    boolean indChart           = false;
    boolean indAjax            = false;
    boolean indPdfDataSheet    = false;
    boolean indJpgUno          = false;
    boolean indFavicon         = false; 
    while (client.connected()){
      if (client.available()){
        char c = client.read(); 
        linebuf[charCount] = c;
        if (charCount<sizeof(linebuf)-1){ charCount++; }
        Serial.write(c); 
        if (c == '\n' && currentLineIsBlank){
          if (autenticado && !logoff ){
            if (indJs){
              js_file(client, "js.js");                          //js file
            } else if(indChart){
              chart_file(client, "chart.js");
            } else if(indAjax){
              chart_file(client, "ajax.js");
            } else if(indCss){
              css_file(client, "css.css");                       //css file  
            } else if(indPdfDataSheet){
              pdf_file_download(client, "atmel.pdf");        //datasheet download
            } else if(indJpgUno){
              jpg_file(client, "uno.jpg");                       //jpg file
            } else if(indFavicon){
              jpg_file(client, "favicon.ico");                   //icone do browser
            } else if(StrContains(linebuf, "ajax_inputs")){
              // send rest of HTTP header
              client.println("Content-Type: text/xml");
              client.println("Connection: keep-alive");
              client.println();
              // send XML file containing input states
              XML_response(client);
            } else {
              html_autenticado(client, "index.htm");             //página inicial
            }
          } else {
            logoff ? html_logoff(client) : html_autenticar(client);
          }
          break;
        }
        if (c == '\n') { 
          currentLineIsBlank = true;               
          if (strstr(linebuf, "GET /logoff"         )>0 ) { logoff = true; }
          if (strstr(linebuf, "Authorization: Basic")>0 ) { if ( validar_usuario(linebuf) )   {  autenticado = true;   } }  
          if (strstr(linebuf, "GET /css.css"        )>0 ) { indCss = true; }
          if (strstr(linebuf, "GET /js.js"          )>0 ) { indJs = true; }
          if (strstr(linebuf, "GET /chart.js"       )>0 ) { indChart = true; }
          if (strstr(linebuf, "GET /ajax.js"        )>0 ) { indAjax = true; }
          if (strstr(linebuf, "GET /atmel.pdf"      )>0 ) { indPdfDataSheet = true; }
          if (strstr(linebuf, "GET /uno.jpg"        )>0 ) { indJpgUno = true; }
          if (strstr(linebuf, "GET /favicon.ico"    )>0 ) { indFavicon = true; } 
          memset(linebuf, 0, sizeof(linebuf));
          charCount = 0;
        } else if (c != '\r') {
          currentLineIsBlank = false;
        }
      }
    }
    delay(1);           
    client.stop();      
  }
}

// send the XML file with switch statuses and analog value
void XML_response(EthernetClient &client)
{
    int analog_val;
    
    client.print("<?xml version = \"1.0\" ?>");
    client.print("<inputs>");
    client.print("<dtc>");
    client.print(data_completa);
    client.print("</dtc>");
    client.print("<dt>");
    client.print(hora_completa);
    client.print("</dt>");
    client.print("<h_>");
    client.print(data_hora);
    client.print("</h_>");
    client.print("<p1>");
    client.print(realPower1);
    client.print("</p1>");
    client.print("<p2>");
    client.print(realPower2);
    client.print("</p2>");
    client.print("<p3>");
    client.print(realPower3);
    client.print("</p3>");
    client.print("<p4>");
    client.print(realPower4);
    client.print("</p4>");
    client.print("<p5>");
    client.print(realPower5);
    client.print("</p5>");
    client.print("<p6>");
    client.print(realPower6);
    client.print("</p6>");
    client.print("<p7>");
    client.print(realPower7);
    client.print("</p7>");
    client.print("<p8>");
    client.print(realPower8);
    client.print("</p8>");
    client.print("<p9>");
    client.print(realPower9);
    client.print("</p9>");
    client.print("<p10>");
    client.print(realPower10);
    client.print("</p10>");
    client.print("<pt>");
    client.print(realPowert);
    client.print("</pt>");
    client.print("<s1>");
    client.print(apparentPower1);
    client.print("</s1>");
    client.print("<s2>");
    client.print(apparentPower2);
    client.print("</s2>");
    client.print("<s3>");
    client.print(apparentPower3);
    client.print("</s3>");
    client.print("<s4>");
    client.print(apparentPower4);
    client.print("</s4>");
    client.print("<s5>");
    client.print(apparentPower5);
    client.print("</s5>");
    client.print("<s6>");
    client.print(apparentPower6);
    client.print("</s6>");
    client.print("<s7>");
    client.print(apparentPower7);
    client.print("</s7>");
    client.print("<s8>");
    client.print(apparentPower8);
    client.print("</s8>");
    client.print("<s9>");
    client.print(apparentPower9);
    client.print("</s9>");
    client.print("<s10>");
    client.print(apparentPower10);
    client.print("</s10>");
    client.print("<st>");
    client.print(apparentPowert);
    client.print("</st>");
    client.print("<fp1>");
    client.print(powerFActor1);
    client.print("</fp1>");
    client.print("<fp2>");
    client.print(powerFActor2);
    client.print("</fp2>");
    client.print("<fp3>");
    client.print(powerFActor3);
    client.print("</fp3>");
    client.print("<fp4>");
    client.print(powerFActor4);
    client.print("</fp4>");
    client.print("<fp5>");
    client.print(powerFActor5);
    client.print("</fp5>");
    client.print("<fp6>");
    client.print(powerFActor6);
    client.print("</fp6>");
    client.print("<fp7>");
    client.print(powerFActor7);
    client.print("</fp7>");
    client.print("<fp8>");
    client.print(powerFActor8);
    client.print("</fp8>");
    client.print("<fp9>");
    client.print(powerFActor9);
    client.print("</fp9>");
    client.print("<fp10>");
    client.print(powerFActor10);
    client.print("</fp10>");
    client.print("<fpt>");
    client.print(powerFActort);
    client.print("</fpt>");
    client.print("<v1>");
    client.print(supplyVoltage1);
    client.print("</v1>");
    client.print("<v2>");
    client.print(supplyVoltage2);
    client.print("</v2>");
    client.print("<v3>");
    client.print(supplyVoltage3);
    client.print("</v3>");
    client.print("<v4>");
    client.print(supplyVoltage4);
    client.print("</v4>");
    client.print("<v5>");
    client.print(supplyVoltage5);
    client.print("</v5>");
    client.print("<v6>");
    client.print(supplyVoltage6);
    client.print("</v6>");
    client.print("<v7>");
    client.print(supplyVoltage7);
    client.print("</v7>");
    client.print("<v8>");
    client.print(supplyVoltage8);
    client.print("</v8>");
    client.print("<v9>");
    client.print(supplyVoltage9);
    client.print("</v9>");
    client.print("<v10>");
    client.print(supplyVoltage10);
    client.print("</v10>");
    client.print("<vt>");
    client.print(supplyVoltaget);
    client.print("</vt>");
    client.print("<a1>");
    client.print(Irms1);
    client.print("</a1>");
    client.print("<a2>");
    client.print(Irms2);
    client.print("</a2>");
    client.print("<a3>");
    client.print(Irms3);
    client.print("</a3>");
    client.print("<a4>");
    client.print(Irms4);
    client.print("</a4>");
    client.print("<a5>");
    client.print(Irms5);
    client.print("</a5>");
    client.print("<a6>");
    client.print(Irms6);
    client.print("</a6>");
    client.print("<a7>");
    client.print(Irms7);
    client.print("</a7>");
    client.print("<a8>");
    client.print(Irms8);
    client.print("</a8>");
    client.print("<a9>");
    client.print(Irms9);
    client.print("</a9>");
    client.print("<a10>");
    client.print(Irms10);
    client.print("</a10>");
    client.print("<at>");
    client.print(Irmst);
    client.print("</at>");
    client.print("</inputs>");
}

// sets every element of str to 0 (clears array)
void StrClear(char *str, char length)
{
    for (int i = 0; i < length; i++) {
        str[i] = 0;
    }
}

// searches for the string sfind in the string str
// returns 1 if string found
// returns 0 if string not found
char StrContains(char *str, char *sfind)
{
    char found = 0;
    char index = 0;
    char len;

    len = strlen(str);
    
    if (strlen(sfind) > len) {
        return 0;
    }
    while (index < len) {
        if (str[index] == sfind[found]) {
            found++;
            if (strlen(sfind) == found) {
                return 1;
            }
        }
        else {
            found = 0;
        }
        index++;
    }

    return 0;
}

//    BASE 64 CODE/DECODE   //
static const char b64all[] =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef"
"ghijklmnopqrstuvwxyz0123456789+/";

const char *base64_encode(const char *original, int length) {
  if (length == 0)
  length = strlen(original);
  
  // Inteiro com o tamanho do código a ser gerado
  int b64length = ((length + 2) / 3) * 4 + 1;
  
  // Contadores para percorrer as strings
  int i=0, j=0;
  
  // Alocando memória para o código
  char *b64 = (char *) malloc(sizeof(char) * b64length);
  memset(b64, 0, b64length);
  
  while (i < length) {
  // Codifica um grupo de três bytes...
  _encode(
  (uint8_t *) b64 + j,
  (const uint8_t *) original + i,
  (length - i)
  );
  
  // E segue para o próximo grupo
  i += 3;
  j += 4;
  }
  
  // Retorna o código
  return (const char *) b64;
}

void _encode(uint8_t *dest, const uint8_t *src, int len) {
// Menor que 1, nada a fazer
if (len < 1)
return;

// Dados a serem retornados
int aux[] = { 0, 0, 0, 0 };

// Primeiro elemento: os 6 bits mais significativos do primeiro
// byte
aux[0] = src[0] >> 2;

// Segundo elemento: os 2 bits menos significativos do primeiro e
// os quatro bits mais significativos do segundo byte
aux[1] = (src[0] & 0x03) << 4;

if (len > 1) {
// SE houver um segundo...
aux [1] |= (src[1] & 0xf0) >> 4;

// Terceiro elemento: os quatro bits menos significativos do
// segundo e os dois mais significativos do terceiro byte
aux [2] = (src[1] & 0x0f) << 2;

if (len > 2) {
// Se houver um terceiro...
aux[2] |= src[2] >> 6;

// Quarto elemento: os seis bits menos significatos do
// terceiro byte
aux[3] = src[2] & 0x3f;
}
}

// Codifica agora os valores numéricos para string
dest[0] = b64all[aux[0]];
dest[1] = b64all[aux[1]];
dest[2] = '=';
dest[3] = '=';
if (len > 1) {
dest[2] = b64all[aux[2]];
if (len > 2)
dest[3] = b64all[aux[3]];
}
}

//INCIALIZAÇÃO// 
void setup() {
  
  //    PINOS ANALÓGICOS    //
  pinMode(A0,INPUT);
  pinMode(A1,INPUT);
  
  //    BIBLIOTECAS   //
  Wire.begin();  
  Serial.begin(9600);
  //rtc.begin();
  //rtc.setDateTime(__DATE__, __TIME__);  //  COMENTAR APOS A PRIMEIRA COMPILAÇÃO
  iniciar_sd_card(); 
  iniciar_ethernet();

  //    MEDIDORES   //
  emon1.current(SensorCorrente_1,0.98); // (PINO,GANHO/CALIBRAÇÃO)
  emon1.voltage(SensorTensao_1,475,1.7); // (PINO,GANHO/CALIBRAÇÃO, PHASE SHIFT)
}

//LOOP// 
void loop() {

  //    RELÉS   //
  

  //    SERVIDOR    //
  exec_ethernet();

  //    MEDIDOR DE ENERGIA    //
  medir();

  //    AQUISIÇÃO DE DADOS    //
  float_para_String(realPower1,apparentPower1,powerFActor1,supplyVoltage1,Irms1);
  relogio();
  recebe_dados();

  //    EXTRAI OS DADOS DAS STRINGS    //
  subString_para_float(1);
  subString_para_float(2);
  subString_para_float(3);
  totais();

  //    BANCO DE DADOS    //
  envia_dados();

  //    REINICIAR AS MENSAGENS    //
  limpar_string();
}

 
